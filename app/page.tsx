"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Menu,
  Award,
  Shield,
  Users,
  Clock,
  Star,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Linkedin,
  Facebook,
  CheckCircle,
  ArrowRight,
  Briefcase,
  TrendingUp,
  Globe,
} from "lucide-react"

export default function CardinalliBuilders() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)
  const [selectedJob, setSelectedJob] = useState(null)
  const [showAllPositions, setShowAllPositions] = useState(false)
  const [showQuoteModal, setShowQuoteModal] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-black/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="#" className="flex items-center space-x-3">
              <Image
                src="/masonic-logo.png"
                alt="Cardinalli Builders"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div className="text-white">
                <div className="font-serif text-xl font-bold">CARDINALLI</div>
                <div className="text-xs text-gold tracking-widest">BUILDERS</div>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center space-x-8">
              {["Home", "About", "Projects", "Services", "Careers", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-white hover-gold transition-colors text-sm font-medium tracking-wide"
                >
                  {item}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center space-x-4">
              <Button
                className="bg-gold hover:bg-gold/90 text-black font-semibold px-6"
                onClick={() => setShowQuoteModal(true)}
              >
                Get Quote
              </Button>
            </div>

            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden text-white">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-black text-white">
                <nav className="flex flex-col space-y-6 mt-8">
                  {["Home", "About", "Projects", "Services", "Careers", "Contact"].map((item) => (
                    <Link
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className="text-lg hover-gold transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  ))}
                  <Button
                    className="bg-gold hover:bg-gold/90 text-black font-semibold mt-4"
                    onClick={() => setShowQuoteModal(true)}
                  >
                    Get Quote
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image src="/luxury-home-hero-new.png" alt="Luxury Home" fill className="object-cover blur-md" priority />
        <div className="absolute inset-0 hero-gradient-improved" />

        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4">
          <div className="animate-fade-in-up p-8 md:p-12">
            <div className="animate-fade-in-scale delay-200">
              <Badge className="bg-gold/20 text-gold border-gold mb-6 px-4 py-2">Premium Home Builder</Badge>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in-up delay-300">
              We Don't Just Build Homes.
              <br />
              <span className="text-gold animate-fade-in-up delay-500">{"We Build Legacies."}</span>
            </h1>

            <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-400">
              Custom homes designed for those who demand timeless design and precision.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-600">
              <Button
                size="lg"
                className="bg-gold hover:bg-gold/90 text-black font-semibold px-8 py-4 text-lg animate-pulse-hover transform hover:scale-105 transition-all duration-300"
                onClick={() => setShowQuoteModal(true)}
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg bg-transparent transform hover:scale-105 transition-all duration-300"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                View Portfolio
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Stats */}
        <div className="absolute bottom-8 left-0 right-0 w-full px-4 animate-fade-in-up delay-700">
          <div className="container mx-auto max-w-4xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-white">
              {[
                { number: "500+", label: "Homes Built" },
                { number: "25+", label: "Years Experience" },
                { number: "100%", label: "Licensed & Insured" },
                { number: "5★", label: "Average Rating" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className={`bg-black/50 backdrop-blur-sm rounded-lg p-3 md:p-4 stat-card animate-count-up transform hover:scale-105 transition-all duration-300`}
                  style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                >
                  <div className="text-2xl md:text-3xl font-bold text-gold">{stat.number}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <div className="animate-fade-in-scale delay-200">
                <Badge className="bg-gold/10 text-gold border-gold mb-6">About Cardinalli</Badge>
              </div>

              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-gray-900 animate-fade-in-up delay-300">
                Florida's Premier <span className="text-gold">Luxury Builder</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed animate-fade-in-up delay-400">
                Cardinalli Builders emerges as Florida's new standard in luxury home construction. We're not just
                builders – we're architects of distinction, curating bespoke residences that reflect your unique vision
                and uncompromising standards.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                {[
                  { icon: Shield, title: "Fully Licensed", desc: "State of Florida License" },
                  { icon: Award, title: "Award Winning", desc: "Multiple industry awards & recognition" },
                  { icon: Users, title: "Expert Team", desc: "50+ skilled craftsmen & professionals" },
                  { icon: Clock, title: "On-Time Delivery", desc: "98% of projects completed on schedule" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-start space-x-3 animate-fade-in-up delay-${500 + index * 100}`}
                  >
                    <div className="bg-gold/10 p-2 rounded-lg">
                      <item.icon className="h-6 w-6 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button
                className="bg-black hover:bg-gray-800 text-white px-8 transform hover:scale-105 transition-all duration-300"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Learn More About Us
              </Button>
            </div>

            <div className="relative animate-slide-in-right">
              <Image
                src="/about-team-new.jpg"
                alt="Alexandre Cardinalli - Founder & CEO"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-gold p-6 rounded-xl text-black animate-fade-in-scale delay-600">
                <div className="text-3xl font-bold">25+</div>
                <div className="text-sm font-medium">Unique Designs</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-gold/20 text-gold border-gold mb-6 animate-fade-in-scale">Our Services</Badge>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up delay-200">
              Comprehensive <span className="text-gold">Luxury Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up delay-300">
              From concept to completion, we handle every aspect of your luxury home project
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Custom Home Building",
                desc: "Bespoke luxury homes tailored to your vision and lifestyle",
                features: ["Architectural Design", "Premium Materials", "Smart Home Integration"],
                icon: Users,
              },
              {
                title: "Home Renovations",
                desc: "Transform your existing home into a luxury masterpiece",
                features: ["Kitchen Remodeling", "Bathroom Upgrades", "Whole Home Renovation"],
                icon: Award,
              },
              {
                title: "Commercial Projects",
                desc: "High-end commercial construction and development",
                features: ["Office Buildings", "Retail Spaces", "Mixed-Use Development"],
                icon: TrendingUp,
              },
              {
                title: "Interior Design",
                desc: "Complete interior design services by our expert team",
                features: ["Space Planning", "Material Selection", "Furniture Coordination"],
                icon: Globe,
              },
              {
                title: "Project Management",
                desc: "End-to-end project management for seamless execution",
                features: ["Timeline Management", "Quality Control", "Budget Oversight"],
                icon: Clock,
              },
              {
                title: "Maintenance Services",
                desc: "Ongoing maintenance and support for your investment",
                features: ["Preventive Maintenance", "24/7 Support", "Warranty Service"],
                icon: Shield,
              },
            ].map((service, index) => (
              <div key={index} className={`card-enter animate-fade-in-up delay-${400 + index * 100}`}>
                <Card className="bg-gray-900/50 backdrop-blur-sm border-gray-700 hover:border-gold/50 hover:bg-gray-800/50 transition-all duration-500 group transform hover:scale-105 hover:shadow-xl hover:shadow-gold/10">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-center mb-6">
                      <div className="bg-gold/10 p-3 rounded-lg group-hover:bg-gold/20 transition-colors duration-300">
                        <service.icon className="h-8 w-8 text-gold group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div className="ml-4 flex-1">
                        <h3 className="font-serif text-xl font-bold text-white group-hover:text-gold transition-colors duration-300">
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                      {service.desc}
                    </p>

                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300"
                        >
                          <div className="w-1.5 h-1.5 bg-gold rounded-full mr-3 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-gray-700 group-hover:border-gold/30 transition-colors duration-300">
                      <Button
                        variant="ghost"
                        className="w-full text-gold hover:bg-gold/10 hover:text-gold border border-gold/30 hover:border-gold/50 transition-all duration-300"
                        onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-gold/10 text-gold border-gold mb-6 animate-fade-in-scale">Featured Projects</Badge>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-gray-900 animate-fade-in-up delay-200">
              Masterpieces We've <span className="text-gold">Created</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "/project-1.jpg",
                title: "Oceanfront Estate",
                location: "Miami Beach, FL",
                price: "$8.5M",
                features: ["8,500 sq ft", "6 Bedrooms", "Infinity Pool", "Private Beach"],
              },
              {
                image: "/project-2.jpg",
                title: "Modern Villa",
                location: "Coral Gables, FL",
                price: "$6.2M",
                features: ["6,200 sq ft", "5 Bedrooms", "Wine Cellar", "Home Theater"],
              },
              {
                image: "/project-3.jpg",
                title: "Lakefront Mansion",
                location: "Orlando, FL",
                price: "$4.8M",
                features: ["7,200 sq ft", "7 Bedrooms", "Boat Dock", "Guest House"],
              },
            ].map((project, index) => (
              <div key={index} className={`animate-fade-in-up delay-${300 + index * 100}`}>
                <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-gold text-black px-3 py-1 rounded-full font-semibold">
                      {project.price}
                    </div>
                  </div>
                  <CardContent className="p-4 md:p-6">
                    <h3 className="font-serif text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4 flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {project.location}
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-sm text-gray-500">
                      {project.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="h-3 w-3 text-gold mr-1" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <Button
                      variant="outline"
                      className="w-full mt-4 border-gold text-gold hover:bg-gold hover:text-black bg-transparent transform hover:scale-105 transition-all duration-300"
                      onClick={() => setSelectedProject(project)}
                    >
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section id="careers" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-gold/10 text-gold border-gold mb-6 animate-fade-in-scale">Join Our Team</Badge>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-gray-900 animate-fade-in-up delay-200">
              Build Your <span className="text-gold">Career</span> With Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up delay-300">
              Join Florida's premier luxury construction team and be part of creating extraordinary homes
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="animate-slide-in-left">
              <h3 className="font-serif text-3xl font-bold mb-6 text-gray-900">Why Work at Cardinalli?</h3>
              <div className="space-y-6">
                {[
                  {
                    icon: TrendingUp,
                    title: "Career Growth",
                    desc: "Clear advancement paths and professional development",
                  },
                  { icon: Award, title: "Industry Leader", desc: "Work with the best in luxury construction" },
                  { icon: Users, title: "Great Team", desc: "Collaborative environment with skilled professionals" },
                  { icon: Globe, title: "Prestigious Projects", desc: "Work on high-end, award-winning projects" },
                ].map((benefit, index) => (
                  <div
                    key={index}
                    className={`flex items-start space-x-4 animate-fade-in-up delay-${400 + index * 100}`}
                  >
                    <div className="bg-gold/10 p-3 rounded-lg">
                      <benefit.icon className="h-6 w-6 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{benefit.title}</h4>
                      <p className="text-gray-600">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg animate-slide-in-right">
              <h3 className="font-serif text-2xl font-bold mb-6 text-gray-900">Open Positions</h3>
              <div className="space-y-4">
                {[
                  { title: "Senior Project Manager", dept: "Construction", type: "Full-time" },
                  { title: "Luxury Interior Designer", dept: "Design", type: "Full-time" },
                  { title: "Master Carpenter", dept: "Construction", type: "Full-time" },
                  { title: "Sales Executive", dept: "Sales", type: "Full-time" },
                  { title: "Architect", dept: "Design", type: "Contract" },
                ].map((job, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-gold transition-colors transform hover:scale-105 duration-300"
                  >
                    <div>
                      <h4 className="font-semibold text-gray-900">{job.title}</h4>
                      <p className="text-sm text-gray-600">
                        {job.dept} • {job.type}
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-gold text-gold hover:bg-gold hover:text-black bg-transparent"
                      onClick={() => setSelectedJob(job)}
                    >
                      Apply
                    </Button>
                  </div>
                ))}
              </div>
              <Button
                className="w-full mt-6 bg-gold hover:bg-gold/90 text-black transform hover:scale-105 transition-all duration-300"
                onClick={() => setShowAllPositions(true)}
              >
                <Briefcase className="mr-2 h-4 w-4" />
                View All Positions
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-gold/20 text-gold border-gold mb-6 animate-fade-in-scale">Client Reviews</Badge>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up delay-200">
              What Our <span className="text-gold">Clients Say</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Michael & Sarah Johnson",
                location: "Miami, FL",
                rating: 5,
                text: "Cardinalli Builders exceeded every expectation. The attention to detail and craftsmanship is unmatched. Our dream home became a reality.",
              },
              {
                name: "David Chen",
                location: "Orlando, FL",
                rating: 5,
                text: "Professional, reliable, and incredibly skilled. The entire process was smooth and the final result is absolutely stunning.",
              },
              {
                name: "Jennifer Martinez",
                location: "Tampa, FL",
                rating: 5,
                text: "From design to completion, Cardinalli delivered excellence. The quality of work and customer service is truly exceptional.",
              },
            ].map((review, index) => (
              <Card
                key={index}
                className={`bg-gray-900 border-gray-800 animate-fade-in-up delay-${300 + index * 100} transform hover:scale-105 transition-all duration-300`}
              >
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-gold fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{review.text}"</p>
                  <div>
                    <div className="font-semibold text-white">{review.name}</div>
                    <div className="text-sm text-gray-400">{review.location}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-gold/10 text-gold border-gold mb-6 animate-fade-in-scale">Get In Touch</Badge>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-gray-900 animate-fade-in-up delay-200">
              Start Your <span className="text-gold">Dream Project</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up delay-300">
              Ready to build your luxury home? Contact us today for a consultation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="animate-slide-in-left">
              <h3 className="font-serif text-2xl font-bold mb-8 text-gray-900">Contact Information</h3>
              <div className="space-y-6">
                {[
                  { icon: MapPin, title: "Address", info: "3405 Dover Rd Pompano Beach Florida" },
                  { icon: Phone, title: "Phone", info: "(305) 555-0123" },
                  { icon: Mail, title: "Email", info: "contact@cardinallibuilders.com" },
                  { icon: Clock, title: "Hours", info: "Mon-Fri: 8AM-6PM, Sat: 9AM-4PM" },
                ].map((contact, index) => (
                  <div
                    key={index}
                    className={`flex items-start space-x-4 animate-fade-in-up delay-${400 + index * 100}`}
                  >
                    <div className="bg-gold/10 p-3 rounded-lg">
                      <contact.icon className="h-6 w-6 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{contact.title}</h4>
                      <p className="text-gray-600">{contact.info}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 animate-fade-in-up delay-800">
                <h4 className="font-semibold text-gray-900 mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <Button
                    size="icon"
                    variant="outline"
                    className="border-gold text-gold hover:bg-gold hover:text-black bg-transparent transform hover:scale-110 transition-all duration-300"
                    asChild
                  >
                    <Link
                      href="https://www.instagram.com/cardinallibuilders/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Instagram className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    size="icon"
                    variant="outline"
                    className="border-gold text-gold hover:bg-gold hover:text-black bg-transparent transform hover:scale-110 transition-all duration-300"
                    asChild
                  >
                    <Link
                      href="https://www.facebook.com/profile.php?id=61577899913872"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Facebook className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    size="icon"
                    variant="outline"
                    className="border-gold text-gold hover:bg-gold hover:text-black bg-transparent transform hover:scale-110 transition-all duration-300"
                    asChild
                  >
                    <Link
                      href="https://www.linkedin.com/in/alexandre-cardinalli-739b52354"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            <Card className="shadow-2xl animate-slide-in-right">
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl font-bold mb-6 text-gray-900">Send us a Message</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      placeholder="First Name"
                      className="border-gray-300 transform focus:scale-105 transition-all duration-300"
                    />
                    <Input
                      placeholder="Last Name"
                      className="border-gray-300 transform focus:scale-105 transition-all duration-300"
                    />
                  </div>
                  <Input
                    type="email"
                    placeholder="Email Address"
                    className="border-gray-300 transform focus:scale-105 transition-all duration-300"
                  />
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    className="border-gray-300 transform focus:scale-105 transition-all duration-300"
                  />
                  <Input
                    placeholder="Project Type"
                    className="border-gray-300 transform focus:scale-105 transition-all duration-300"
                  />
                  <Textarea
                    placeholder="Tell us about your project..."
                    rows={4}
                    className="border-gray-300 transform focus:scale-105 transition-all duration-300"
                  />
                  <Button className="w-full bg-gold hover:bg-gold/90 text-black font-semibold py-3 transform hover:scale-105 transition-all duration-300">
                    Send Message
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <Image
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                width={800}
                height={400}
                className="w-full h-64 object-cover rounded-t-2xl"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 bg-black/50 text-white hover:bg-black/70"
                onClick={() => setSelectedProject(null)}
              >
                ✕
              </Button>
            </div>

            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-serif text-3xl font-bold text-gray-900 mb-2">{selectedProject.title}</h3>
                  <p className="text-gray-600 flex items-center text-lg">
                    <MapPin className="h-5 w-5 mr-2" />
                    {selectedProject.location}
                  </p>
                </div>
                <div className="bg-gold text-black px-4 py-2 rounded-full font-bold text-xl">
                  {selectedProject.price}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Property Features</h4>
                  <div className="space-y-2">
                    {selectedProject.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-gold mr-2" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Additional Details</h4>
                  <div className="space-y-2 text-gray-700">
                    <p>• Premium finishes throughout</p>
                    <p>• Smart home automation</p>
                    <p>• Energy-efficient systems</p>
                    <p>• Custom millwork & cabinetry</p>
                    <p>• Landscaped outdoor spaces</p>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  This exceptional property showcases our commitment to luxury craftsmanship and attention to detail.
                  Every element has been carefully selected and expertly installed to create a truly remarkable living
                  experience.
                </p>

                <div className="flex gap-4">
                  <Button
                    className="flex-1 bg-gold hover:bg-gold/90 text-black font-semibold"
                    onClick={() => {
                      setSelectedProject(null)
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    Request Information
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 border-gold text-gold hover:bg-gold hover:text-black bg-transparent"
                    onClick={() => setSelectedProject(null)}
                  >
                    Close
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Quote Modal */}
      {showQuoteModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl mx-4 w-full max-h-[90vh] overflow-y-auto">
            <div className="p-4 md:p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="font-serif text-3xl font-bold text-gray-900 mb-2">Start Your Dream Project</h3>
                  <p className="text-gray-600">Connect with our luxury construction specialists today</p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-500 hover:text-gray-700"
                  onClick={() => setShowQuoteModal(false)}
                >
                  ✕
                </Button>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Contact Form */}
                <div>
                  <h4 className="font-serif text-xl font-bold mb-6 text-gray-900">Get Your Free Consultation</h4>
                  <form className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input
                        placeholder="First Name"
                        className="border-gray-300 transform focus:scale-105 transition-all duration-300"
                        required
                      />
                      <Input
                        placeholder="Last Name"
                        className="border-gray-300 transform focus:scale-105 transition-all duration-300"
                        required
                      />
                    </div>

                    <Input
                      type="email"
                      placeholder="Email Address"
                      className="border-gray-300 transform focus:scale-105 transition-all duration-300"
                      required
                    />

                    <Input
                      type="tel"
                      placeholder="Phone Number"
                      className="border-gray-300 transform focus:scale-105 transition-all duration-300"
                      required
                    />

                    <Input
                      placeholder="Project Type (Custom Home, Renovation, etc.)"
                      className="border-gray-300 transform focus:scale-105 transition-all duration-300"
                    />

                    <Input
                      placeholder="Estimated Budget Range"
                      className="border-gray-300 transform focus:scale-105 transition-all duration-300"
                    />

                    <Textarea
                      placeholder="Tell us about your dream project..."
                      rows={4}
                      className="border-gray-300 transform focus:scale-105 transition-all duration-300"
                      required
                    />

                    <Button
                      type="submit"
                      className="w-full bg-gold hover:bg-gold/90 text-black font-semibold py-3 transform hover:scale-105 transition-all duration-300"
                    >
                      Request Free Consultation
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </div>

                {/* Company Contact Info */}
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="font-serif text-xl font-bold mb-6 text-gray-900">Contact Our Specialists</h4>

                  <div className="space-y-6">
                    {[
                      {
                        icon: Phone,
                        title: "Call Us",
                        info: "(305) 555-0123",
                        desc: "Mon-Fri: 8AM-6PM, Sat: 9AM-4PM",
                      },
                      {
                        icon: Mail,
                        title: "Email Us",
                        info: "contact@cardinallibuilders.com",
                        desc: "We respond within 24 hours",
                      },
                      {
                        icon: MapPin,
                        title: "Visit Our Office",
                        info: "3405 Dover Rd",
                        desc: "Pompano Beach, Florida",
                      },
                    ].map((contact, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="bg-gold/10 p-3 rounded-lg">
                          <contact.icon className="h-6 w-6 text-gold" />
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-1">{contact.title}</h5>
                          <p className="text-gray-800 font-medium">{contact.info}</p>
                          <p className="text-sm text-gray-600">{contact.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8">
                    <h5 className="font-semibold text-gray-900 mb-4">Follow Our Work</h5>
                    <div className="flex space-x-3">
                      <Button
                        size="icon"
                        variant="outline"
                        className="border-gold text-gold hover:bg-gold hover:text-black bg-transparent transform hover:scale-110 transition-all duration-300"
                        asChild
                      >
                        <Link
                          href="https://www.instagram.com/cardinallibuilders/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Instagram className="h-5 w-5" />
                        </Link>
                      </Button>
                      <Button
                        size="icon"
                        variant="outline"
                        className="border-gold text-gold hover:bg-gold hover:text-black bg-transparent transform hover:scale-110 transition-all duration-300"
                        asChild
                      >
                        <Link
                          href="https://www.facebook.com/profile.php?id=61577899913872"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Facebook className="h-5 w-5" />
                        </Link>
                      </Button>
                      <Button
                        size="icon"
                        variant="outline"
                        className="border-gold text-gold hover:bg-gold hover:text-black bg-transparent transform hover:scale-110 transition-all duration-300"
                        asChild
                      >
                        <Link
                          href="https://www.linkedin.com/in/alexandre-cardinalli-739b52354"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Linkedin className="h-5 w-5" />
                        </Link>
                      </Button>
                    </div>
                  </div>

                  <div className="mt-8 p-4 bg-gold/10 rounded-lg">
                    <div className="flex items-center mb-2">
                      <CheckCircle className="h-5 w-5 text-gold mr-2" />
                      <span className="font-semibold text-gray-900">Free Consultation</span>
                    </div>
                    <div className="flex items-center mb-2">
                      <CheckCircle className="h-5 w-5 text-gold mr-2" />
                      <span className="font-semibold text-gray-900">Licensed & Insured</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-gold mr-2" />
                      <span className="font-semibold text-gray-900">25+ Years Experience</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Career Application Modal */}
      {(selectedJob || showAllPositions) && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="font-serif text-3xl font-bold text-gray-900 mb-2">
                    {selectedJob ? `Apply for ${selectedJob.title}` : "All Open Positions"}
                  </h3>
                  <p className="text-gray-600">
                    {selectedJob
                      ? `${selectedJob.dept} • ${selectedJob.type}`
                      : "Join our team of luxury construction professionals"}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-500 hover:text-gray-700"
                  onClick={() => {
                    setSelectedJob(null)
                    setShowAllPositions(false)
                  }}
                >
                  ✕
                </Button>
              </div>

              {showAllPositions && (
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-4">Available Positions</h4>
                  <div className="grid gap-3 mb-6">
                    {[
                      { title: "Senior Project Manager", dept: "Construction", type: "Full-time" },
                      { title: "Luxury Interior Designer", dept: "Design", type: "Full-time" },
                      { title: "Master Carpenter", dept: "Construction", type: "Full-time" },
                      { title: "Sales Executive", dept: "Sales", type: "Full-time" },
                      { title: "Architect", dept: "Design", type: "Contract" },
                      { title: "Electrical Subcontractor", dept: "Subcontractor", type: "Contract" },
                      { title: "Plumbing Subcontractor", dept: "Subcontractor", type: "Contract" },
                      { title: "HVAC Subcontractor", dept: "Subcontractor", type: "Contract" },
                      { title: "Landscaping Subcontractor", dept: "Subcontractor", type: "Contract" },
                      { title: "Tile & Flooring Specialist", dept: "Subcontractor", type: "Contract" },
                    ].map((job, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:border-gold transition-colors cursor-pointer"
                        onClick={() => {
                          setShowAllPositions(false)
                          setSelectedJob(job)
                        }}
                      >
                        <div>
                          <h5 className="font-semibold text-gray-900">{job.title}</h5>
                          <p className="text-sm text-gray-600">
                            {job.dept} • {job.type}
                          </p>
                        </div>
                        <ArrowRight className="h-4 w-4 text-gold" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    placeholder="First Name"
                    className="border-gray-300 transform focus:scale-105 transition-all duration-300"
                    required
                  />
                  <Input
                    placeholder="Last Name"
                    className="border-gray-300 transform focus:scale-105 transition-all duration-300"
                    required
                  />
                </div>

                <Input
                  type="email"
                  placeholder="Email Address"
                  className="border-gray-300 transform focus:scale-105 transition-all duration-300"
                  required
                />

                <Input
                  type="tel"
                  placeholder="Phone Number"
                  className="border-gray-300 transform focus:scale-105 transition-all duration-300"
                  required
                />

                {selectedJob && (
                  <Input
                    value={selectedJob.title}
                    placeholder="Position Applied For"
                    className="border-gray-300 bg-gray-50"
                    readOnly
                  />
                )}

                {!selectedJob && showAllPositions && (
                  <Input
                    placeholder="Position of Interest"
                    className="border-gray-300 transform focus:scale-105 transition-all duration-300"
                  />
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Resume/CV (Optional)</label>
                  <Input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="border-gray-300 transform focus:scale-105 transition-all duration-300"
                  />
                </div>

                <Textarea
                  placeholder="Tell us about your experience and why you'd be a great fit for our team..."
                  rows={4}
                  className="border-gray-300 transform focus:scale-105 transition-all duration-300"
                  required
                />

                <div className="flex gap-4">
                  <Button
                    type="submit"
                    className="flex-1 bg-gold hover:bg-gold/90 text-black font-semibold transform hover:scale-105 transition-all duration-300"
                  >
                    Submit Application
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
                    onClick={() => {
                      setSelectedJob(null)
                      setShowAllPositions(false)
                    }}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-black text-white py-8 md:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Image
                  src="/masonic-logo.png"
                  alt="Cardinalli Builders"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <div className="font-serif text-lg font-bold">CARDINALLI</div>
                  <div className="text-xs text-gold tracking-widest">BUILDERS</div>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Florida's premier luxury home builder. Licensed, insured, and award-winning.
              </p>
              <div className="text-sm text-gray-500">
                <p>Fully Licensed</p>
                <p>Fully Insured & Bonded</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-center md:text-left">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover-gold transition-colors">
                    Custom Homes
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover-gold transition-colors">
                    Renovations
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover-gold transition-colors">
                    Commercial
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover-gold transition-colors">
                    Interior Design
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-center md:text-left">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover-gold transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover-gold transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover-gold transition-colors">
                    Awards
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover-gold transition-colors">
                    News
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-center md:text-left">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>3405 Dover Rd</li>
                <li>Pompano Beach, FL</li>
                <li>(305) 555-0123</li>
                <li>contact@cardinallibuilders.com</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 Cardinalli Builders. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover-gold transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover-gold transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
