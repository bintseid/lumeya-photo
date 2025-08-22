import { useState } from "react"
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { Camera } from "lucide-react"
import { portfolioImages as allImages, type PortfolioItem } from "../data/portfolio"

const categories: Array<PortfolioItem["category"] | "All"> = [
  "All",
  "Portraits",
  "Weddings",
  "Events",
  "Fashion",
  "Commercial",
]

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState<(typeof categories)[number]>("All")
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const items =
    selectedCategory === "All" ? allImages : allImages.filter((i) => i.category === selectedCategory)

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-24 pb-10 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            Our <span className="text-accent">Portfolio</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            Explore work across portraits, weddings, events, fashion, and commercial projects.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-3">
          {categories.map((cat) => (
            <Button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={
                selectedCategory === cat
                  ? "bg-accent text-accent-foreground"
                  : "border border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              }
              variant={selectedCategory === cat ? "default" : "outline"}
            >
              {cat}
            </Button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="px-6 py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((image, idx) => (
            <Card
              key={`${image.src}-${idx}`}
              className="overflow-hidden bg-[hsl(var(--card))] border-[hsl(var(--border))] cursor-pointer group"
              onClick={() => setSelectedImage(image.src)}
            >
              <CardContent className="p-0">
                <div className="relative h-64">
                  <img src={image.src} alt={image.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Camera className="text-accent w-8 h-8" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Portfolio Image" className="max-w-full max-h-full object-contain rounded-lg" />
          <Button className="absolute top-4 right-4 bg-accent text-accent-foreground rounded-full w-10 h-10 p-0" onClick={() => setSelectedImage(null)}>
            ✕
          </Button>
        </div>
      )}
    </div>
  )
}
