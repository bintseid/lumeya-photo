"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Star, Camera, Phone, Mail, MapPin, Instagram, Facebook, Twitter, Menu, X } from "lucide-react"
import { AspectRatio } from "../components/ui/aspect-ratio"

export default function StudioWebsite() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const portfolioCategories = ["All", "Portraits", "Weddings", "Events", "Fashion", "Commercial"]

  const portfolioImages = [
    { id: 1, category: "Portraits", src: "/protrait.jpg", alt: "Portrait Photography" },
    { id: 2, category: "Weddings", src: "/wedding.jpg", alt: "Wedding Photography" },
    { id: 3, category: "Events", src: "/event.jpg", alt: "Event Photography" },
    { id: 4, category: "Fashion", src: "/fashion.jpg", alt: "Fashion Photography" },
    { id: 5, category: "Commercial", src: "/comercial.jpg", alt: "Commercial Photography" },
    { id: 6, category: "Portraits", src: "/protrait1.jpg", alt: "Artistic Portrait" },
    { id: 7, category: "Weddings", src: "/wedding1.jpg", alt: "Wedding Ceremony" },
    { id: 8, category: "Fashion", src: "/fashion1.jpg", alt: "Fashion Shoot" },
  ]

  const filteredImages =
    selectedCategory === "All" ? portfolioImages : portfolioImages.filter((img) => img.category === selectedCategory)

  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "Absolutely stunning work! The team captured our wedding day perfectly.",
      rating: 5,
    },
    { name: "Michael Chen", text: "Professional, creative, and delivered beyond our expectations.", rating: 5 },
    { name: "Emma Davis", text: "The portrait session was amazing. Highly recommend!", rating: 5 },
  ]

  const services = [
    {
      name: "Portrait Package",
      price: "$299",
      features: ["1-hour session", "20+ edited photos", "Online gallery", "Print release"],
    },
    {
      name: "Wedding Package",
      price: "$1,999",
      features: ["8-hour coverage", "500+ edited photos", "Engagement session", "Wedding album"],
    },
    {
      name: "Commercial Package",
      price: "$599",
      features: ["Half-day shoot", "50+ edited photos", "Commercial license", "Rush delivery"],
    },
  ]

  return (
    <div className="min-h-screen bg-white text-[#1e1e27] flex flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src="/lumeya%27s%20logo.png"
                alt="Lumeya Logo"
                className="h-10 w-auto"
              />
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#home"
                className="hover:text-[#df0139] transition-colors duration-300 font-medium text-[#1e1e27]"
              >
                Home
              </a>
              <a
                href="#about"
                className="hover:text-[#df0139] transition-colors duration-300 font-medium text-[#1e1e27]"
              >
                About
              </a>
              <a
                href="#portfolio"
                className="hover:text-[#df0139] transition-colors duration-300 font-medium text-[#1e1e27]"
              >
                Portfolio
              </a>
              <a
                href="#services"
                className="hover:text-[#df0139] transition-colors duration-300 font-medium text-[#1e1e27]"
              >
                Services
              </a>
              <a
                href="#contact"
                className="hover:text-[#df0139] transition-colors duration-300 font-medium text-[#1e1e27]"
              >
                Contact
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Button className="hidden md:inline-flex bg-[#df0139] text-white hover:bg-[#df0139]/90 font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:scale-105">
                Book Now
              </Button>
              <button
                className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-[#e5e5e5] bg-white/70 backdrop-blur text-[#1e1e27]"
                aria-label="Toggle Menu"
                onClick={() => setIsMobileMenuOpen((v) => !v)}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-[64px] left-0 right-0 z-40 bg-white/95 backdrop-blur-md shadow-lg border-b border-[#e5e5e5]">
          <div className="px-6 py-4 flex flex-col gap-3">
            <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-[#1e1e27]">Home</a>
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-[#1e1e27]">About</a>
            <a href="#portfolio" onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-[#1e1e27]">Portfolio</a>
            <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-[#1e1e27]">Services</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-[#1e1e27]">Contact</a>
            <Button onClick={() => setIsMobileMenuOpen(false)} className="mt-2 bg-[#df0139] text-white hover:bg-[#df0139]/90">Book Now</Button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/60 z-10"></div>
        <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover">
          <source src="/our%20studio.mp4" type="video/mp4" />
        </video>
        <div className="relative z-20 text-center max-w-4xl px-6">
          <h1 className="text-5xl md:text-8xl font-bold mb-6 animate-fade-in leading-tight text-white">
            CAPTURE THE
            <span className="block text-[#df0139] drop-shadow-lg">EXTRAORDINARY</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white font-light">
            Professional photography that tells your story with cinematic elegance
          </p>
          <Button
            size="lg"
            className="bg-[#df0139] text-white hover:bg-[#df0139]/90 text-lg px-10 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-xl"
          >
            View Our Work
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6 leading-tight text-[#1e1e27]">
                About <span className="text-[#df0139]">Our Studio</span>
              </h2>
              <p className="text-lg text-[#28242a] mb-6 leading-relaxed">
                With over a decade of experience in luxury photography, we specialize in creating timeless images that
                capture the essence of life's most precious moments.
              </p>
              <p className="text-lg text-[#28242a] mb-8 leading-relaxed">
                Our team combines technical expertise with artistic vision to deliver photographs that exceed
                expectations and stand the test of time.
              </p>
              <div className="flex space-x-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#df0139]">500+</div>
                  <div className="text-[#28242a]/70">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#df0139]">10+</div>
                  <div className="text-[#28242a]/70">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#df0139]">50+</div>
                  <div className="text-[#28242a]/70">Awards Won</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <AspectRatio ratio={16 / 9}>
                <video controls className="h-full w-full rounded-lg shadow-2xl object-cover" poster="/studio.jpg">
                  <source src="/our%20studio.mp4" type="video/mp4" />
                </video>
              </AspectRatio>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-6 bg-[#e2e2e2]/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-12 text-[#1e1e27]">
            Our <span className="text-[#df0139]">Portfolio</span>
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
                    ? "bg-[#df0139] text-white hover:bg-[#df0139]/90 rounded-full px-6 py-2 font-medium"
                    : "border-[#df0139] text-[#df0139] hover:bg-[#df0139] hover:text-white rounded-full px-6 py-2 font-medium transition-all duration-300 bg-white"
                }
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
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
                <div className="absolute inset-0 bg-[#1e1e27]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Camera className="text-[#df0139] w-8 h-8" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Showcase */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-12 text-[#1e1e27]">
            Video <span className="text-[#df0139]">Showcase</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative group">
              <AspectRatio ratio={16 / 9}>
                <video controls className="h-full w-full rounded-lg shadow-2xl object-cover" poster="/wedding2.jpg">
                  <source src="/Wedding_Highlight_Video.mp4" type="video/mp4" />
                </video>
              </AspectRatio>
              <h3 className="text-xl font-semibold mt-4 text-[#1e1e27]">Wedding Highlights</h3>
            </div>
            <div className="relative group">
              <AspectRatio ratio={16 / 9}>
                <video controls className="h-full w-full rounded-lg shadow-2xl object-cover" poster="/fashion2.jpg">
                  <source src="/fashion%20reel.mp4" type="video/mp4" />
                </video>
              </AspectRatio>
              <h3 className="text-xl font-semibold mt-4 text-[#1e1e27]">Fashion Reel</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Services & Pricing */}
      <section id="services" className="py-20 px-6 bg-[#e2e2e2]/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-12 text-[#1e1e27]">
            Services & <span className="text-[#df0139]">Pricing</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-white border-[#df0139]/20 hover:border-[#df0139] transition-all duration-300 hover:shadow-xl"
              >
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4 text-[#1e1e27]">{service.name}</h3>
                  <div className="text-4xl font-bold text-[#df0139] mb-6">{service.price}</div>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-[#28242a]">
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-[#df0139] text-white hover:bg-[#df0139]/90 rounded-full font-semibold transition-all duration-300 hover:scale-105">
                    Choose Package
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-12 text-[#1e1e27]">
            Client <span className="text-[#df0139]">Testimonials</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white border-[#df0139]/20 hover:border-[#df0139]/40 transition-all duration-300 shadow-lg"
              >
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#df0139] text-[#df0139]" />
                    ))}
                  </div>
                  <p className="text-[#28242a] mb-6 leading-relaxed">"{testimonial.text}"</p>
                  <div className="font-semibold text-[#df0139]">{testimonial.name}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 px-6 bg-[#e2e2e2]/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-12 text-[#1e1e27]">
            Book Your <span className="text-[#df0139]">Session</span>
          </h2>
          <Card className="bg-white border-[#df0139]/20 shadow-2xl">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-[#1e1e27]">Full Name</label>
                    <Input className="bg-[#e2e2e2]/30 border-[#28242a]/20 text-[#1e1e27] focus:border-[#df0139] transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-[#1e1e27]">Email</label>
                    <Input
                      type="email"
                      className="bg-[#e2e2e2]/30 border-[#28242a]/20 text-[#1e1e27] focus:border-[#df0139] transition-colors"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-[#1e1e27]">Preferred Date</label>
                    <Input
                      type="date"
                      className="bg-[#e2e2e2]/30 border-[#28242a]/20 text-[#1e1e27] focus:border-[#df0139] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-[#1e1e27]">Preferred Time</label>
                    <Input
                      type="time"
                      className="bg-[#e2e2e2]/30 border-[#28242a]/20 text-[#1e1e27] focus:border-[#df0139] transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-[#1e1e27]">Service Type</label>
                  <select className="w-full p-3 bg-[#e2e2e2]/30 border border-[#28242a]/20 rounded-md text-[#1e1e27] focus:border-[#df0139] transition-colors">
                    <option>Portrait Session</option>
                    <option>Wedding Photography</option>
                    <option>Event Photography</option>
                    <option>Fashion Shoot</option>
                    <option>Commercial Photography</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-[#1e1e27]">Additional Details</label>
                  <Textarea
                    className="bg-[#e2e2e2]/30 border-[#28242a]/20 text-[#1e1e27] focus:border-[#df0139] transition-colors"
                    rows={4}
                  />
                </div>
                <Button className="w-full bg-[#df0139] text-white hover:bg-[#df0139]/90 text-lg py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105">
                  Submit Booking Request
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-12 text-[#1e1e27]">
            Get In <span className="text-[#df0139]">Touch</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-[#1e1e27]">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Phone className="text-[#df0139] w-6 h-6" />
                  <span className="text-[#1e1e27]">(+251) 91 107 1357</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="text-[#df0139] w-6 h-6" />
                  <span className="text-[#1e1e27]">lumeya.photography@gmail.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="text-[#df0139] w-6 h-6" />
                  <span className="text-[#1e1e27]">02 Duna Hayawu Menged, Worabe</span>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="text-xl font-semibold mb-4 text-[#1e1e27]">Follow Us</h4>
                <div className="flex space-x-4">
                  <Instagram className="text-[#df0139] w-6 h-6 cursor-pointer hover:text-[#df0139]/80 transition-colors" />
                  <Facebook className="text-[#df0139] w-6 h-6 cursor-pointer hover:text-[#df0139]/80 transition-colors" />
                  <Twitter className="text-[#df0139] w-6 h-6 cursor-pointer hover:text-[#df0139]/80 transition-colors" />
                </div>
              </div>
            </div>
            <Card className="bg-white border-[#df0139]/20 shadow-lg">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div>
                    <Input
                      placeholder="Your Name"
                      className="bg-[#e2e2e2]/30 border-[#28242a]/20 text-[#1e1e27] focus:border-[#df0139] transition-colors"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      className="bg-[#e2e2e2]/30 border-[#28242a]/20 text-[#1e1e27] focus:border-[#df0139] transition-colors"
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Subject"
                      className="bg-[#e2e2e2]/30 border-[#28242a]/20 text-[#1e1e27] focus:border-[#df0139] transition-colors"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      className="bg-[#e2e2e2]/30 border-[#28242a]/20 text-[#1e1e27] focus:border-[#df0139] transition-colors"
                      rows={4}
                    />
                  </div>
                  <Button className="w-full bg-[#df0139] text-white hover:bg-[#df0139]/90 rounded-full font-semibold transition-all duration-300 hover:scale-105">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto bg-[#e2e2e2]/50 border-t border-[#28242a]/20 py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-2xl font-bold text-[#df0139] mb-4 tracking-wider">LUMEYA</div>
          <p className="text-[#28242a]/70">© 2025 Lumeya. All rights reserved.</p>
        </div>
      </footer>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-white/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage || "/pic.jpg"}
            alt="Portfolio Image"
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
          />
          <Button
            className="absolute top-4 right-4 bg-[#df0139] text-white hover:bg-[#df0139]/90 rounded-full w-10 h-10 p-0 font-bold"
            onClick={() => setSelectedImage(null)}
          >
            ✕
          </Button>
        </div>
      )}
    </div>
  )
}
