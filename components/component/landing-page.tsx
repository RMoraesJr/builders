"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import type { JSX, SVGProps } from "react"
import Image from "next/image"

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-[100dvh] bg-black text-white">
      <header className="px-4 lg:px-6 h-16 flex items-center fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-sm z-50">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <Image
            src="/masonic-logo.png"
            alt="Cardinalli Builders Logo"
            width={50}
            height={50}
            className="rounded-full"
          />
          <span className="sr-only">Cardinalli Builders</span>
        </Link>
        <nav className="ml-auto hidden lg:flex gap-6 items-center">
          <Link href="#home" className="text-sm font-medium hover:text-gold-text transition-colors" prefetch={false}>
            Home
          </Link>
          <Link href="#about" className="text-sm font-medium hover:text-gold-text transition-colors" prefetch={false}>
            About
          </Link>
          <Link
            href="#projects"
            className="text-sm font-medium hover:text-gold-text transition-colors"
            prefetch={false}
          >
            Projects
          </Link>
          <Link
            href="#services"
            className="text-sm font-medium hover:text-gold-text transition-colors"
            prefetch={false}
          >
            Services
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-gold-text transition-colors" prefetch={false}>
            Contact
          </Link>
          <Button className="gold-bg text-black hover:bg-yellow-600 transition-colors">Get a Quote</Button>
        </nav>
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="ml-auto lg:hidden bg-transparent border-gray-600 hover:bg-gray-800"
            >
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-black border-l border-gray-800">
            <nav className="grid gap-6 text-lg font-medium mt-8">
              <Link
                href="#home"
                className="hover:text-gold-text transition-colors"
                prefetch={false}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="#about"
                className="hover:text-gold-text transition-colors"
                prefetch={false}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="#projects"
                className="hover:text-gold-text transition-colors"
                prefetch={false}
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="#services"
                className="hover:text-gold-text transition-colors"
                prefetch={false}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="#contact"
                className="hover:text-gold-text transition-colors"
                prefetch={false}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Button className="gold-bg text-black hover:bg-yellow-600 transition-colors mt-4">Get a Quote</Button>
            </nav>
          </SheetContent>
        </Sheet>
      </header>
      <main className="flex-1">
        <section id="home" className="w-full h-[100vh] pt-12 md:pt-24 lg:pt-32 relative">
          <Image src="/modern-mansion-night.png" alt="Modern Mansion" layout="fill" objectFit="cover" className="z-0" />
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div className="container px-4 md:px-6 h-full flex flex-col items-center justify-center text-center relative z-20">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl gold-text serif-font">
                Building Excellence. Elevating Luxury.
              </h1>
              <p className="max-w-[700px] text-gray-300 md:text-xl">
                Custom homes, timeless craftsmanship, and architectural brilliance across Florida.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-6">
              <Button
                variant="outline"
                className="bg-transparent border-2 gold-border text-white hover:bg-gold-text hover:text-black transition-colors px-8 py-6 text-lg"
              >
                See Our Work
              </Button>
              <Button className="gold-bg text-black hover:bg-yellow-600 transition-colors px-8 py-6 text-lg">
                Request a Quote
              </Button>
            </div>
          </div>
        </section>
        <div className="w-full border-t-2 gold-border" />
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gold-text serif-font">
                  Who We Are
                </h2>
                <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  At Cardinalli Builders, we bring decades of experience in luxury construction, combining traditional
                  craftsmanship with modern design to deliver homes that stand the test of time.
                </p>
              </div>
              <Image
                src="/construction-blueprint-desk.png"
                width="600"
                height="400"
                alt="About Us"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
              />
            </div>
          </div>
        </section>
        <div className="w-full border-t-2 gold-border" />
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl gold-text serif-font">
                  Signature Projects
                </h2>
                <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore a selection of our finest custom homes and renovations.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              <Card className="bg-black border gold-border overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <CardContent className="p-0">
                  <Image
                    src="/luxury-modern-house-exterior.png"
                    width="400"
                    height="300"
                    alt="Project 1"
                    className="mx-auto aspect-video object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold gold-text serif-font">The Oceanview Estate</h3>
                    <p className="text-sm text-gray-400">Miami, FL</p>
                    <p className="text-sm text-gray-300 mt-2">
                      A stunning beachfront property with panoramic ocean views.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-black border gold-border overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <CardContent className="p-0">
                  <Image
                    src="/contemporary-villa-pool.png"
                    width="400"
                    height="300"
                    alt="Project 2"
                    className="mx-auto aspect-video object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold gold-text serif-font">The Evergreen Villa</h3>
                    <p className="text-sm text-gray-400">Orlando, FL</p>
                    <p className="text-sm text-gray-300 mt-2">
                      A contemporary villa nestled in a lush, private landscape.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-black border gold-border overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <CardContent className="p-0">
                  <Image
                    src="/classic-architectural-home.png"
                    width="400"
                    height="300"
                    alt="Project 3"
                    className="mx-auto aspect-video object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold gold-text serif-font">The Heritage Manor</h3>
                    <p className="text-sm text-gray-400">Tampa, FL</p>
                    <p className="text-sm text-gray-300 mt-2">
                      A timeless manor blending classic architecture with modern amenities.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <div className="w-full border-t-2 gold-border" />
        <section id="services" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl gold-text serif-font">What We Do</h2>
                <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our comprehensive services cover every aspect of luxury home building.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              <Card className="bg-black border gold-border p-6 flex flex-col items-center text-center">
                <HomeIcon className="h-12 w-12 gold-text" />
                <h3 className="mt-4 text-xl font-bold serif-font">Custom Homes</h3>
                <p className="mt-2 text-sm text-gray-300">
                  Building your dream home from the ground up, tailored to your vision.
                </p>
              </Card>
              <Card className="bg-black border gold-border p-6 flex flex-col items-center text-center">
                <BrushIcon className="h-12 w-12 gold-text" />
                <h3 className="mt-4 text-xl font-bold serif-font">Renovations</h3>
                <p className="mt-2 text-sm text-gray-300">
                  Transforming existing spaces with luxury finishes and modern design.
                </p>
              </Card>
              <Card className="bg-black border gold-border p-6 flex flex-col items-center text-center">
                <DraftingCompassIcon className="h-12 w-12 gold-text" />
                <h3 className="mt-4 text-xl font-bold serif-font">Architectural Design</h3>
                <p className="mt-2 text-sm text-gray-300">
                  Collaborating with top architects to create iconic and functional designs.
                </p>
              </Card>
              <Card className="bg-black border gold-border p-6 flex flex-col items-center text-center">
                <ClipboardListIcon className="h-12 w-12 gold-text" />
                <h3 className="mt-4 text-xl font-bold serif-font">Project Management</h3>
                <p className="mt-2 text-sm text-gray-300">
                  Overseeing every detail to ensure a seamless and timely construction process.
                </p>
              </Card>
              <Card className="bg-black border gold-border p-6 flex flex-col items-center text-center">
                <LandPlotIcon className="h-12 w-12 gold-text" />
                <h3 className="mt-4 text-xl font-bold serif-font">Land Development</h3>
                <p className="mt-2 text-sm text-gray-300">
                  Sourcing and preparing premium lots for luxury home construction.
                </p>
              </Card>
            </div>
          </div>
        </section>
        <div className="w-full border-t-2 gold-border" />
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-gray-900/50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-5xl gold-text serif-font">
              What Our Clients Say
            </h2>
            <Carousel className="w-full max-w-4xl mx-auto mt-12">
              <CarouselContent>
                <CarouselItem>
                  <div className="p-4 text-center">
                    <div className="flex justify-center mb-2">
                      <StarIcon className="w-6 h-6 gold-text" />
                      <StarIcon className="w-6 h-6 gold-text" />
                      <StarIcon className="w-6 h-6 gold-text" />
                      <StarIcon className="w-6 h-6 gold-text" />
                      <StarIcon className="w-6 h-6 gold-text" />
                    </div>
                    <p className="text-lg italic text-gray-300">
                      &quot;Cardinalli Builders exceeded our every expectation. The attention to detail and
                      craftsmanship is unparalleled.&quot;
                    </p>
                    <p className="mt-4 font-semibold">- The Johnson Family</p>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="p-4 text-center">
                    <div className="flex justify-center mb-2">
                      <StarIcon className="w-6 h-6 gold-text" />
                      <StarIcon className="w-6 h-6 gold-text" />
                      <StarIcon className="w-6 h-6 gold-text" />
                      <StarIcon className="w-6 h-6 gold-text" />
                      <StarIcon className="w-6 h-6 gold-text" />
                    </div>
                    <p className="text-lg italic text-gray-300">
                      &quot;The entire process was smooth and professional. They brought our dream home to life, on time
                      and on budget.&quot;
                    </p>
                    <p className="mt-4 font-semibold">- Emily & David Chen</p>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="p-4 text-center">
                    <div className="flex justify-center mb-2">
                      <StarIcon className="w-6 h-6 gold-text" />
                      <StarIcon className="w-6 h-6 gold-text" />
                      <StarIcon className="w-6 h-6 gold-text" />
                      <StarIcon className="w-6 h-6 gold-text" />
                      <StarIcon className="w-6 h-6 gold-text" />
                    </div>
                    <p className="text-lg italic text-gray-300">
                      &quot;A truly first-class experience. The quality of their work is simply outstanding. We
                      couldn&apos;t be happier.&quot;
                    </p>
                    <p className="mt-4 font-semibold">- Michael Rodriguez</p>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="text-white bg-transparent border-gray-600 hover:bg-gray-800" />
              <CarouselNext className="text-white bg-transparent border-gray-600 hover:bg-gray-800" />
            </Carousel>
          </div>
        </section>
        <div className="w-full border-t-2 gold-border" />
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight gold-text serif-font">
                Get in Touch
              </h2>
              <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed">
                Ready to start your project? Contact us today for a consultation.
              </p>
              <div className="space-y-4 mt-6">
                <div className="flex items-center gap-4">
                  <MapPinIcon className="h-6 w-6 gold-text" />
                  <p>123 Luxury Lane, Miami, FL 33101</p>
                </div>
                <div className="flex items-center gap-4">
                  <MailIcon className="h-6 w-6 gold-text" />
                  <p>contact@cardinallibuilders.com</p>
                </div>
                <div className="flex items-center gap-4">
                  <PhoneIcon className="h-6 w-6 gold-text" />
                  <p>(305) 555-1234</p>
                </div>
                <div className="flex items-center gap-4">
                  <InstagramIcon className="h-6 w-6 gold-text" />
                  <p>@cardinallibuilders</p>
                </div>
              </div>
            </div>
            <div className="w-full max-w-md space-y-4">
              <form className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name" className="text-gray-300">
                    Name
                  </Label>
                  <Input id="name" placeholder="Enter your name" className="bg-gray-900 border-gray-700 text-white" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email" className="text-gray-300">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="bg-gray-900 border-gray-700 text-white"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="phone" className="text-gray-300">
                    Phone
                  </Label>
                  <Input
                    id="phone"
                    placeholder="Enter your phone number"
                    className="bg-gray-900 border-gray-700 text-white"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message" className="text-gray-300">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Enter your message"
                    rows={4}
                    className="bg-gray-900 border-gray-700 text-white"
                  />
                </div>
                <Button type="submit" className="w-full gold-bg text-black hover:bg-yellow-600 transition-colors">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-4 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t-2 gold-border">
        <div className="flex items-center gap-2">
          <Image
            src="/masonic-logo.png"
            alt="Cardinalli Builders Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <p className="text-xs text-gray-400">&copy; 2025 Cardinalli Builders. All rights reserved.</p>
        </div>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:text-gold-text transition-colors" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:text-gold-text transition-colors" prefetch={false}>
            Privacy Policy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function BrushIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08" />
      <path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z" />
    </svg>
  )
}

function ClipboardListIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="M12 11h4" />
      <path d="M12 16h4" />
      <path d="M8 11h.01" />
      <path d="M8 16h.01" />
    </svg>
  )
}

function DraftingCompassIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="5" r="1" />
      <path d="m12 5 6 14" />
      <path d="m12 5-6 14" />
      <path d="M6 19h12" />
    </svg>
  )
}

function HomeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}

function InstagramIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function LandPlotIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 8.5V12" />
      <path d="M12 12L15.5 15.5" />
      <path d="M12 12L8.5 15.5" />
      <path d="M12 12L15.5 8.5" />
      <path d="M12 12L8.5 8.5" />
      <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z" />
    </svg>
  )
}

function MailIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

function MapPinIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}

function PhoneIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function StarIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}
