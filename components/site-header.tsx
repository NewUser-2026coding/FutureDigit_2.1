"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronRight, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SiteNavigation } from "@/components/site-navigation"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"

interface SiteHeaderProps {
  transparent?: boolean
}

const mobileNavItems = [
  {
    title: "Modes d'intervention",
    items: [
      { label: "Conseil", href: "/modes/conseil", desc: "Solutions sur mesure" },
      { label: "Regie", href: "/modes/regie", desc: "Extended Teams" },
    ],
  },
  {
    title: "Business Units",
    items: [
      { label: "Banque Finance", href: "/business-units/banque-finance", desc: "Secteur bancaire et financier" },
      { label: "Ingenierie", href: "/business-units/ingenierie", desc: "Solutions d'ingenierie" },
    ],
  },
  {
    title: "Nos Expertises",
    items: [
      { label: "Software Engineering", href: "/expertises/software-engineering", desc: "Developpement logiciel" },
      { label: "Cloud", href: "/expertises/cloud", desc: "Solutions cloud" },
      { label: "Infrastructure & DevOps", href: "/expertises/infrastructure-devops", desc: "Automatisation" },
      { label: "SAP", href: "/expertises/sap", desc: "Expertise SAP" },
      { label: "Gestion de Projet", href: "/expertises/gestion-projet", desc: "Pilotage de projets" },
    ],
  },
]

export function SiteHeader({ transparent = true }: SiteHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border/50 shadow-sm"
          : transparent
            ? "bg-transparent"
            : "bg-background"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20no%20background-mhVH8nYdjmphhp9EDB2z8bui7jD6ut.png"
              alt="Future Digit Logo"
              width={120}
              height={40}
              className="h-9 w-auto"
            />
          </Link>

          {/* Desktop Navigation - centered */}
          <div className="hidden lg:flex items-center justify-center flex-1 px-8">
            <SiteNavigation />
          </div>

          {/* CTA + Mobile Menu */}
          <div className="flex items-center gap-3 shrink-0">
            <Link href="/#contact" className="hidden sm:block">
              <Button
                size="sm"
                variant="outline"
                className={`rounded-full px-5 font-medium text-sm gap-2 group border transition-colors ${
                  isScrolled
                    ? "bg-background border-border text-foreground hover:bg-accent"
                    : "bg-transparent border-white text-white hover:bg-white/10"
                }`}
              >
                Demander un devis
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </Link>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden h-10 w-10 rounded-full"
                  aria-label="Ouvrir le menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-[400px] p-0 border-l border-border/50">
                <div className="flex flex-col h-full">
                  {/* Mobile Header */}
                  <div className="flex items-center justify-between px-6 py-5 border-b border-border/50">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20no%20background-mhVH8nYdjmphhp9EDB2z8bui7jD6ut.png"
                      alt="Future Digit Logo"
                      width={100}
                      height={33}
                      className="h-8 w-auto"
                    />
                    <SheetClose asChild>
                      <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full" aria-label="Fermer le menu">
                        <X className="h-4 w-4" />
                      </Button>
                    </SheetClose>
                  </div>

                  {/* Mobile Nav Items */}
                  <nav className="flex-1 overflow-y-auto py-6 px-6">
                    <div className="space-y-8">
                      {mobileNavItems.map((section) => (
                        <div key={section.title}>
                          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                            {section.title}
                          </p>
                          <div className="space-y-1">
                            {section.items.map((item) => (
                              <SheetClose asChild key={item.href}>
                                <Link
                                  href={item.href}
                                  className="flex items-center justify-between rounded-lg px-3 py-3 transition-colors hover:bg-accent group"
                                >
                                  <div>
                                    <span className="text-sm font-medium text-foreground">{item.label}</span>
                                    <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                                  </div>
                                  <ChevronRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
                                </Link>
                              </SheetClose>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </nav>

                  {/* Mobile CTA */}
                  <div className="p-6 border-t border-border/50">
                    <SheetClose asChild>
                      <Link href="/#contact" className="block">
                        <Button className="w-full rounded-full gap-2 group">
                          Demander un devis
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                        </Button>
                      </Link>
                    </SheetClose>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
