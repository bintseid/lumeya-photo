import { useState } from "react"
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import { Camera, Phone, Mail, MapPin, Check, ExternalLink, ArrowRight } from "lucide-react"
import { AspectRatio } from "../components/ui/aspect-ratio"
import { Link } from "react-router-dom"

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const portfolioCategories = ["All", "Portraits", "Weddings", "Events", "Fashion", "Commercial"]

  // Sample portfolio images for home page (limited set)
  const portfolioImages = [
    { id: 1, category: "Portraits", src: "/protrait/0U6A7418fgdfgfd.jpg", alt: "Portrait Photography" },
    { id: 2, category: "Weddings", src: "/wedding/wedding.JPG", alt: "Wedding Photography" },
    { id: 3, category: "Events", src: "/event/event.jpg", alt: "Event Photography" },
    { id: 4, category: "Fashion", src: "/fashion/fashion.JPG", alt: "Fashion Photography" },
    { id: 5, category: "Commercial", src: "/commercial/commercial.jpg", alt: "Commercial Photography" },
    { id: 6, category: "Portraits", src: "/protrait/BU9A4756.JPG", alt: "Artistic Portrait" },
    { id: 7, category: "Weddings", src: "/wedding/wedding1.JPG", alt: "Wedding Ceremony" },
    { id: 8, category: "Events", src: "/event/event1.jpg", alt: "Event Coverage" },
  ]

  const filteredImages =
    selectedCategory === "All" ? portfolioImages : portfolioImages.filter((img) => img.category === selectedCategory)

  const services = [
    {
      name: "Portrait Package",
      price: "$299",
      originalPrice: "$399",
      features: ["1-hour session", "20+ edited photos", "Online gallery", "Print release", "2 outfit changes"],
      popular: false,
    },
    {
      name: "Wedding Package",
      price: "$1,999",
      originalPrice: "$2,499",
      features: ["8-hour coverage", "500+ edited photos", "Engagement session", "Wedding album", "Drone footage"],
      popular: true,
    },
    {
      name: "Commercial Package",
      price: "$599",
      originalPrice: "$799",
      features: ["Half-day shoot", "50+ edited photos", "Commercial license", "Rush delivery", "Product styling"],
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 to-black/65 z-10"></div>
        <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover">
          <source src="/herobg.mp4" type="video/mp4" />
        </video>
        <div className="relative z-20 text-center max-w-5xl px-6">
          <h1 className="text-5xl md:text-8xl font-bold mb-6 animate-fade-in leading-tight text-white">
            CAPTURE THE
            <span className="block text-accent drop-shadow-[0_0_20px_rgba(254,77,1,0.35)]">EXTRAORDINARY</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 font-light max-w-4xl mx-auto leading-relaxed">
            At Lumeya Multimedia & Event, we specialize in turning your ideas into powerful visuals and unforgettable experiences. From creative media production to full-scale event management we make it happen...
          </p>
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:opacity-90 text-lg px-10 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-[0_0_30px_rgba(254,77,1,0.4)]"
          >
            <a href="https://t.me/lumeya25" target="_blank" rel="noopener noreferrer">View Our Work</a>
          </Button>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-6 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-12 text-foreground">
            Our <span className="text-accent">Portfolio</span>
          </h2>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {portfolioCategories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category
                    ? "bg-accent text-accent-foreground hover:opacity-90 rounded-full px-6 py-2 font-medium shadow-lg"
                    : "border-accent text-accent hover:bg-accent hover:text-accent-foreground rounded-full px-6 py-2 font-medium transition-all duration-300 bg-card"
                }
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Image Grid - Limited to 2 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredImages.slice(0, 8).map((image) => (
              <div
                key={image.id}
                className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-foreground/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Camera className="text-accent w-8 h-8" />
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="mt-10 flex justify-center">
            <Button asChild className="bg-accent text-accent-foreground hover:opacity-90 rounded-full px-6 py-3 font-semibold">
              <Link to="/portfolio" className="flex items-center gap-2">
                View More <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services & Pricing Section */}
      <section id="services" className="py-20 px-6 bg-gradient-to-b from-background/5 to-background/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-foreground">
              Services & <span className="text-accent">Pricing</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect package for your photography needs. All packages include professional editing and online delivery.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden transition-all duration-500 hover:scale-105 ${
                  service.popular 
                    ? 'bg-gradient-to-br from-accent/20 to-accent/5 border-accent/50 shadow-[0_0_30px_rgba(254,77,1,0.2)]' 
                    : 'bg-card border-border hover:border-accent/30'
                }`}
              >
                {service.popular && (
                  <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">{service.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-accent">{service.price}</span>
                    {service.originalPrice && (
                      <span className="text-lg text-muted-foreground line-through ml-2">{service.originalPrice}</span>
                    )}
                  </div>
                  <ul className="space-y-3 mb-8 text-left">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-muted-foreground">
                        <Check className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild 
                    className={`w-full font-semibold transition-all duration-300 hover:scale-105 ${
                      service.popular 
                        ? 'bg-accent text-accent-foreground hover:opacity-90 shadow-[0_0_20px_rgba(254,77,1,0.4)]' 
                        : 'bg-accent text-accent-foreground hover:opacity-90 border border-accent'
                    }`}
                  >
                    <a href="https://t.me/lumeya25" target="_blank" rel="noopener noreferrer">Book Now</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Showcase */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-12 text-foreground">
            Video <span className="text-accent">Showcase</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative group">
              <AspectRatio ratio={16 / 9}>
                <video controls className="h-full w-full rounded-lg shadow-2xl object-cover" poster="/wedding/wedding2.JPG">
                  <source src="/wedding.mp4" type="video/mp4" />
                </video>
              </AspectRatio>
              <h3 className="text-xl font-semibold mt-4 text-foreground">Wedding Highlights</h3>
            </div>
            <div className="relative group">
              <AspectRatio ratio={16 / 9}>
                <video controls className="h-full w-full rounded-lg shadow-2xl object-cover" poster="/commercial/commercial2.jpg">
                  <source src="/commercial.mp4" type="video/mp4" />
                </video>
              </AspectRatio>
              <h3 className="text-xl font-semibold mt-4 text-foreground">Commercial Production</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-12 text-foreground">
            Get In <span className="text-accent">Touch</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Phone className="text-accent w-6 h-6" />
                  <span className="text-foreground">(+251) 91 107 1357</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="text-accent w-6 h-6" />
                  <span className="text-foreground">lumeyamultimedia@gmail.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="text-accent w-6 h-6" />
                  <span className="text-foreground">02 Duna Hayawu Menged, Worabe</span>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="text-xl font-semibold mb-4 text-foreground">Connect With Us</h4>
                <div className="space-y-3">
                  <a 
                    href="https://t.me/lumeya25" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-accent hover:opacity-80 transition-colors"
                  >
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">T</span>
                    </div>
                    <span>@lumeya25 on Telegram</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a 
                    href="https://www.youtube.com/@lumeyatube-6069" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-accent hover:opacity-80 transition-colors"
                  >
                    <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">YT</span>
                    </div>
                    <span>Lumeya Tube on YouTube</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
            <Card className="bg-card border-border shadow-lg">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div>
                    <Input placeholder="Your Name" className="bg-input border-border text-foreground focus:border-accent transition-colors" />
                  </div>
                  <div>
                    <Input type="email" placeholder="Your Email" className="bg-input border-border text-foreground focus:border-accent transition-colors" />
                  </div>
                  <div>
                    <Input placeholder="Phone Number" className="bg-input border-border text-foreground focus:border-accent transition-colors" />
                  </div>
                  <div>
                    <Textarea placeholder="Your Message" className="bg-input border-border text-foreground focus:border-accent" rows={4} />
                  </div>
                  <Button asChild className="w-full bg-accent text-accent-foreground hover:opacity-90 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(254,77,1,0.4)]">
                    <a href="https://t.me/lumeya25" target="_blank" rel="noopener noreferrer">Send Message</a>
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage || "/pic.jpg"}
            alt="Portfolio Image"
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
          />
          <Button
            className="absolute top-4 right-4 bg-accent text-accent-foreground hover:opacity-90 rounded-full w-10 h-10 p-0 font-bold"
            onClick={() => setSelectedImage(null)}
          >
            ✕
          </Button>
        </div>
      )}
    </div>
  )
}
