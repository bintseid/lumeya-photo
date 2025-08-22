import { useState } from "react"
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "../components/ui/breadcrumb"
import { Card, CardContent } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Award, Users, Target, CheckCircle, ExternalLink } from "lucide-react"

export default function AboutPage() {
  const [selectedCert, setSelectedCert] = useState<string | null>(null)

  const stats = [
    { label: "Clients", value: "450+", icon: Users },
    { label: "Projects", value: "1,200+", icon: Target },
    { label: "Team Members", value: "12", icon: Users },
    { label: "Products", value: "30+", icon: Award },
  ]

  const certificates = [
    { name: "Professional Photography", img: "/certificates/Image.jpg" },
    { name: "Advanced Editing", img: "/certificates/img20240915_20265713.jpg" },
  ]

  return (
    <div className="bg-background text-foreground">
      {/* Hero */}
      <section className="pt-28 pb-14 bg-gradient-to-b from-black via-black/95 to-black/80">
        <div className="max-w-7xl mx-auto px-6">
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>About Us</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground">
            About <span className="text-accent">Our Agency</span>
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground text-lg">
            We're a creative studio trusted by brands and people. We combine business insight with visual storytelling to
            craft content that moves audiences and grows companies.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-foreground">
              Built on <span className="text-accent">trust</span> and business expertise
            </h2>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              From strategy to execution, we focus on results. Our approach blends research, creative direction, and
              premium production to deliver work that is both beautiful and effective.
            </p>
            <div className="mt-6 flex items-center space-x-4">
              <CheckCircle className="w-6 h-6 text-accent" />
              <span className="text-foreground">10+ years of experience</span>
            </div>
            <div className="mt-3 flex items-center space-x-4">
              <CheckCircle className="w-6 h-6 text-accent" />
              <span className="text-foreground">Professional certifications</span>
            </div>
          </div>
          <div className="relative">
            <img src="/about%20us%20image.jpg" alt="About Us" className="rounded-xl border border-[hsl(var(--border))] shadow-2xl" />
            <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-lg font-semibold">
              Est. 2015
            </div>
          </div>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="py-16 px-6 bg-gradient-to-r from-background/5 to-background/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-semibold mb-4 text-foreground">Our Achievements</h3>
            <p className="text-muted-foreground">Numbers that speak for themselves</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => {
              const IconComponent = s.icon
              return (
                <Card key={s.label} className="bg-card border-border text-center hover:border-accent/30 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-3">
                      <IconComponent className="w-8 h-8 text-accent" />
                    </div>
                    <div className="text-3xl font-extrabold text-accent">{s.value}</div>
                    <div className="mt-2 text-muted-foreground text-sm">{s.label}</div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-semibold mb-4 text-foreground">Professional Certifications</h3>
            <p className="text-muted-foreground">Click to view full certificate</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {certificates.map((cert, index) => (
              <Card key={index} className="bg-card border-border overflow-hidden hover:border-accent/30 transition-all duration-300 cursor-pointer" onClick={() => setSelectedCert(cert.img)}>
                <CardContent className="p-0">
                  <div className="relative">
                    <img 
                      src={cert.img} 
                      alt={cert.name} 
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <h4 className="text-xl font-semibold text-white">{cert.name}</h4>
                      <p className="text-white/80 text-sm">Professional Certification</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 bg-gradient-to-l from-background/5 to-background/20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <img src="/event/IMG_20250117_221310_600.jpg" alt="Why Us" className="rounded-xl border border-[hsl(var(--border))] shadow-2xl" />
          </div>
          <div className="order-1 md:order-2">
            <h3 className="text-3xl font-semibold mb-6 text-foreground">Why Choose Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">On-time Delivery</h4>
                  <p className="text-muted-foreground text-sm">We never miss deadlines</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-accent" />
                <div>
                  <h4 className="font-semibold text-foreground">Clear Communication</h4>
                  <p className="text-muted-foreground text-sm">Transparent project updates</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Premium Experience</h4>
                  <p className="text-muted-foreground text-sm">Luxury service for every client</p>
                </div>
              </div>
            </div>
            <Button asChild className="mt-8 bg-accent text-accent-foreground hover:opacity-90 hover:shadow-[0_0_30px_rgba(254,77,1,0.4)]">
              <a href="https://t.me/lumeya25" target="_blank" rel="noopener noreferrer">Start a Project</a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto rounded-2xl border border-[hsl(var(--border))] bg-gradient-to-r from-accent/12 to-accent/5 p-10 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent"></div>
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-semibold mb-4 text-foreground">Let's create something great together</h3>
            <p className="mt-2 text-muted-foreground text-lg mb-8">Tell us about your vision and we'll make it real.</p>
            <div className="space-y-4">
              <Button asChild className="bg-accent text-accent-foreground hover:opacity-90 hover:shadow-[0_0_30px_rgba(254,77,1,0.4)] text-lg px-8 py-3">
                <a href="https://t.me/lumeya25" target="_blank" rel="noopener noreferrer">Collaborate with Us</a>
              </Button>
              <div className="flex justify-center space-x-6">
                <a 
                  href="https://t.me/lumeya25" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-accent hover:opacity-80 transition-colors"
                >
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">T</span>
                  </div>
                  <span>@lumeya25</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a 
                  href="https://www.youtube.com/@lumeyatube-6069" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-accent hover:opacity-80 transition-colors"
                >
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">YT</span>
                  </div>
                  <span>Lumeya Tube</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificate Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={() => setSelectedCert(null)}>
          <img src={selectedCert} alt="Certificate" className="max-w-full max-h-full object-contain rounded-lg" />
          <Button className="absolute top-4 right-4 bg-accent text-accent-foreground hover:opacity-90 rounded-full w-10 h-10 p-0 font-bold" onClick={() => setSelectedCert(null)}>
            ✕
          </Button>
        </div>
      )}
    </div>
  )
}
