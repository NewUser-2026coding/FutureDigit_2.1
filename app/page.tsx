"use client"

import { NavigationMenuContent } from "@/components/ui/navigation-menu"

import { NavigationMenuTrigger } from "@/components/ui/navigation-menu"

import { NavigationMenuLink } from "@/components/ui/navigation-menu"

import { NavigationMenuItem } from "@/components/ui/navigation-menu"

import { NavigationMenuList } from "@/components/ui/navigation-menu"

import { NavigationMenu } from "@/components/ui/navigation-menu"

import { useEffect, useRef, useState } from "react"
import { ArrowRight, ChevronDown, ArrowUpRight, MapPin, Phone, Mail, Send, Landmark, Cog } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { SiteHeader } from "@/components/site-header"
import "./styles/animations.css"

const modesIntervention = [
  {
    title: "Conseil",
    description:
      "Concevoir vos solutions sur mesure de l'idée au projet. Constituez une équipe pluridisciplinaire pour réaliser un projet complet avec des itérations courtes et un engagement sur les résultats.",
    image: "/images/conseil-hero.jpg",
    link: "/modes/conseil",
    subtitle: "Mode Conseil",
    tags: ["Accompagnement", "Solutions sur mesure", "Équipe dédiée"],
  },
  {
    title: "Regie",
    description:
      "Renforcez vos équipes avec l'expertise et le leadership de nos talents en immersion au sein de votre organisation pour vous accompagner dans votre développement.",
    image: "/images/regie-hero.jpg",
    link: "/modes/regie",
    subtitle: "Mode Régie",
    tags: ["Renforcement", "Expertise", "Leadership"],
  },
]

const companies = [
  { name: "Afrinvest", logo: "/logos/afrinvest.svg" },
  { name: "GTBank", logo: "/logos/gtbank.svg" },
  { name: "Access Bank", logo: "/logos/access-bank.svg" },
  { name: "Dangote", logo: "/logos/dangote.svg" },
  { name: "Paystack", logo: "/logos/paystack.svg" },
  { name: "PiggyVest", logo: "/logos/piggyvest.svg" },
]

const services = [
  {
    title: "AI Strategy & Consulting",
    description: "Transform your business with cutting-edge AI solutions tailored to your needs.",
    features: ["AI Readiness Assessment", "Custom AI Strategy Development", "Implementation Roadmap", "ROI Analysis"],
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M12 2a10 10 0 1 0 10 10H12V2Z" />
        <path d="M12 12 2.5 2.5" />
        <path d="m2 2 20 20" />
      </svg>
    ),
  },
  {
    title: "Custom Software Development",
    description: "Build scalable and efficient software solutions that drive your business forward.",
    features: ["Web & Mobile Applications", "Enterprise Software", "API Development", "Legacy System Modernization"],
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="m7 8-4 4 4 4" />
        <path d="m17 8 4 4-4 4" />
        <path d="m14 4-4 16" />
      </svg>
    ),
  },
  {
    title: "Cloud Solutions",
    description: "Leverage the power of cloud computing for enhanced scalability and performance.",
    features: ["Cloud Migration", "Infrastructure Optimization", "Cloud Security", "24/7 Monitoring"],
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
      </svg>
    ),
  },
]

const expertises = [
  {
    name: "Software Engineering",
    description: "Développement logiciel sur mesure et solutions applicatives",
    image: "/images/expertise-software.jpg",
    link: "/expertises/software-engineering",
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="m7 8-4 4 4 4" />
        <path d="m17 8 4 4-4 4" />
        <path d="m14 4-4 16" />
      </svg>
    ),
  },
  {
    name: "Cloud",
    description: "Infrastructure cloud scalable et sécurisée",
    image: "/images/expertise-cloud.jpg",
    link: "/expertises/cloud",
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
      </svg>
    ),
  },
  {
    name: "Infrastructure & DevOps",
    description: "Automatisation et gestion d'infrastructure",
    image: "/images/expertise-devops.jpg",
    link: "/expertises/infrastructure-devops",
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M7 7h10" />
        <path d="M7 12h10" />
        <path d="M7 17h10" />
      </svg>
    ),
  },
  {
    name: "Gestion de projet",
    description: "Pilotage et coordination de projets IT",
    image: "/images/expertise-gestion.jpg",
    link: "/expertises/gestion-projet",
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="M16 21v-2a4 4 0 0 0-4-4h-4a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    name: "Expertise SAP",
    description: "Intégration et conseil SAP",
    image: "/images/expertise-sap.jpg",
    link: "/expertises/sap",
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <rect width="7" height="9" x="3" y="3" rx="1" />
        <rect width="7" height="5" x="14" y="3" rx="1" />
        <rect width="7" height="9" x="14" y="12" rx="1" />
        <rect width="7" height="5" x="3" y="16" rx="1" />
      </svg>
    ),
  },
]

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "Small Business Owner",
    quote:
      "Since integrating this solution into our workflow, we've experienced a significant improvement in efficiency and collaboration.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
  },
  {
    name: "David Patel",
    title: "Project Manager",
    quote:
      "I've tested numerous options in this category, but one stands out for its intuitive design and comprehensive functionality.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
  },
  {
    name: "Emily Carter",
    title: "Operations Manager",
    quote:
      "The tool we've adopted has surpassed our expectations, providing invaluable insights and support as our business continues to grow.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
  },
]

const industries = [
  {
    name: "Banking & Finance",
    description: "Solutions for the banking and financial sector",
    image: "/images/banking-finance-hero.jpg",
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="M12 2a10 10 0 1 0 10 10H12V2Z" />
        <path d="M12 12 2.5 2.5" />
        <path d="m2 2 20 20" />
      </svg>
    ),
  },
  {
    name: "Engineering",
    description: "Technical expertise and engineering solutions",
    image: "/images/engineering-hero.jpg",
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        <polyline points="3.29 7 12 12 20.71 7" />
        <line x1="12" x2="12" y1="22" y2="12" />
      </svg>
    ),
  },
]

const businessUnits = [
  {
    title: "Pôle Banque - Finance",
    description: "Notre pôle Banque-Finance accompagne tous les acteurs du secteur financier dans leur transformation digitale et leurs projets technologiques critiques.",
    features: [
      "Banque de financement et d'investissement",
      "Gestion d'actifs et banque de détail",
      "Solutions bancaires digitales et conformité",
      "Infrastructure, MOE et expertise métier",
    ],
    link: "/business-units/banque-finance",
    icon: Landmark,
  },
  {
    title: "Pôle Ingénierie",
    description: "Notre pôle Ingénierie accompagne les opérateurs, EPC et fournisseurs d'équipements dans les secteurs de l'énergie, de l'aéronautique et de l'industrie.",
    features: [
      "Conception mécanique et industrialisation",
      "Systèmes embarqués et logiciels industriels",
      "Supply chain et industrie 4.0",
      "Énergie, pétrole & gaz, aéronautique",
    ],
    link: "/business-units/ingenierie",
    icon: Cog,
  },
]

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const expertisesList = [
    {
      name: "Software Engineering",
      slug: "software-engineering",
      image: "/images/software-engineering-hero.jpg",
      description: "Développement logiciel sur mesure et solutions innovantes",
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
        >
          <path d="m7 8-4 4 4 4" />
          <path d="m17 8 4 4-4 4" />
          <path d="m14 4-4 16" />
        </svg>
      ),
    },
    {
      name: "Cloud",
      slug: "cloud",
      image: "/images/cloud-hero.jpg",
      description: "Solutions cloud et infrastructure moderne",
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
        >
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
        </svg>
      ),
    },
    {
      name: "Infrastructure & DevOps",
      slug: "infrastructure-devops",
      image: "/images/devops-hero.jpg",
      description: "Automatisation et optimisation des infrastructures",
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
        >
          <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
          <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
          <line x1="6" x2="6.01" y1="6" y2="6" />
          <line x1="6" x2="6.01" y1="18" y2="18" />
        </svg>
      ),
    },
    {
      name: "SAP",
      slug: "sap",
      image: "/images/sap-hero.jpg",
      description: "Expertise SAP et intégration de systèmes",
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
        >
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.29 7 12 12 20.71 7" />
          <line x1="12" x2="12" y1="22" y2="12" />
        </svg>
      ),
    },
    {
      name: "Gestion de Projet",
      slug: "gestion-projet",
      image: "/images/gestion-projet-hero.jpg",
      description: "Management et pilotage de projets complexes",
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
        >
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      ),
    },
  ]

  return (
    <div ref={containerRef}>
      {/* Navigation */}
      <SiteHeader />

      {/* Hero Section */}
      <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black flex items-center pb-0">
        <motion.div style={{ opacity, scale }} className="container mx-auto px-4 pt-32 pb-0 relative z-10 w-full">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-white via-orange-100 to-orange-500 bg-clip-text text-transparent">
                Future Digit
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl text-white/90 font-light tracking-wide mb-12"
            >
              Conseil & Régie IT · Votre partenaire pour la transformation digitale
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative max-w-6xl mx-auto"
          >
            <div className="relative overflow-hidden rounded-t-2xl shadow-2xl">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full pointer-events-none select-none block"
                style={{ aspectRatio: '2/1' }}
              >
                <source src="/videos/PRO-.mp4" type="video/mp4" />
                <source src="/videos/PRO-.mp4" type="video/webm" />
              </video>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Trusted By Section */}
      <section className="pt-16 pb-16 bg-black relative overflow-hidden">
        <div className="container mx-auto">
          <h2 className="text-center text-lg font-medium text-muted-foreground mb-12 px-4">
            Ils nous font confiance
          </h2>
          <div className="relative w-full overflow-hidden gradient-mask">
            <div className="flex space-x-16 animate-scroll">
              {/* First set of logos */}
              {[...companies, ...companies].map((company, index) => (
                <div key={`${company.name}-${index}`} className="flex items-center justify-center min-w-[160px] group">
                  <div className="relative w-32 h-12 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                    <Image
                      src={company.logo || "/placeholder.svg"}
                      alt={company.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Nos modes d'intervention */}
      <section className="py-20 bg-gradient-to-b from-[#020817] via-background to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos modes d'intervention</h2>
            <p className="text-lg text-muted-foreground">Deux approches complémentaires pour répondre à tous vos besoins</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {modesIntervention.map((mode, index) => (
              <motion.div
                key={mode.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <Link href={mode.link}>
                  <Card className="h-full hover:border-primary/50 transition-colors">
                    <CardContent className="p-0">
                      <div className="relative h-64 mb-6">
                        <Image
                          src={mode.image || "/placeholder.svg"}
                          alt={mode.title}
                          fill
                          className="object-cover rounded-t-lg"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent rounded-t-lg" />
                        <div className="absolute bottom-4 left-6">
                          <span className="px-3 py-1 bg-primary/90 text-primary-foreground rounded-full text-sm font-medium">
                            {mode.subtitle}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          {mode.tags.map((tag) => (
                            <span key={tag} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <h3 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">
                          {mode.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">{mode.description}</p>
                        <Button variant="ghost" className="group-hover:translate-x-2 transition-transform p-0">
                          En savoir plus
                          <ArrowUpRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-gradient-to-b from-background to-[#020817]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="/images/about-us-team.jpg"
                  alt="Notre équipe"
                  width={600}
                  height={400}
                  className="object-cover w-full h-[400px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020817]/60 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary font-medium text-sm uppercase tracking-wider">À propos de nous</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
                Votre partenaire de confiance en transformation digitale
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Depuis plus de 15 ans, Future Digit accompagne les entreprises dans leur transformation numérique. Notre équipe d'experts combine expertise technique et vision stratégique pour délivrer des solutions sur mesure.
              </p>
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div>
                  <div className="text-3xl font-bold text-primary">150+</div>
                  <div className="text-sm text-muted-foreground">Consultants</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Projets réalisés</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">Années d'expérience</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nos Expertises Section */}
      <section id="expertises" className="py-20 bg-gradient-to-b from-[#020817] via-[#020817] to-[#020817] relative overflow-hidden scroll-mt-20">
        <div className="absolute inset-0 bg-[url('/images/screenshot-202025-02-18-20at-209.png')] opacity-5 bg-cover bg-center" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white bg-clip-text">Nos Expertises</h2>
            <p className="text-lg text-gray-400">Des compétences techniques et méthodologiques pour vos projets</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 max-w-7xl mx-auto">
            {expertises.map((expertise, index) => (
              <motion.div
                key={expertise.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <Link href={expertise.link}>
                  <div className="relative rounded-2xl bg-[#0a101f]/60 border border-gray-800/50 backdrop-blur-sm hover:bg-[#0a101f]/80 transition-all duration-300 cursor-pointer overflow-hidden h-full">
                    <div className="h-[220px] overflow-hidden relative">
                      <img
                        src={expertise.image || "/placeholder.svg"}
                        alt={expertise.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a101f]/90" />
                    </div>
                    <div className="p-6 flex flex-col">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 rounded-full bg-[#1a1f2e] flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                          {expertise.icon()}
                        </div>
                        <h3 className="text-sm font-semibold text-white group-hover:text-primary transition-colors duration-300">
                          {expertise.name}
                        </h3>
                      </div>
                      <p className="text-xs text-gray-400 leading-relaxed">
                        {expertise.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Units */}
      <section className="py-20 bg-gradient-to-b from-[#020817] via-background to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Business Units</h2>
            <p className="text-lg text-muted-foreground">
              Nos expertises spécialisées pour répondre aux enjeux de vos secteurs d'activité
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {businessUnits.map((unit, index) => (
              <motion.div
                key={unit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Link href={unit.link}>
                  <div className="relative p-8 rounded-xl bg-card hover:bg-card/80 transition-all border hover:border-primary/50 h-full flex flex-col">
                    <div className="mb-6 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <unit.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{unit.title}</h3>
                    <p className="text-muted-foreground mb-6 flex-1">{unit.description}</p>
                    <ul className="space-y-2 mb-6">
                      {unit.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-sm">
                          <ArrowRight className="w-4 h-4 mr-2 text-primary flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button variant="ghost" className="group-hover:translate-x-2 transition-transform w-fit p-0">
                      En savoir plus
                      <ArrowUpRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-b from-[#020817] to-background relative overflow-hidden scroll-mt-20">
        <div className="absolute inset-0 bg-[url('/images/screenshot-202025-02-18-20at-209.png')] opacity-5 bg-cover bg-center" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Contactez-nous</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Discutons de votre projet et découvrez comment nous pouvons vous accompagner
              </p>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="p-8 rounded-2xl bg-[#0a101f]/60 border border-gray-800/50 backdrop-blur-sm">
                <h3 className="text-2xl font-semibold mb-6 text-white">Envoyez-nous un message</h3>
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                        Prénom
                      </label>
                      <Input
                        id="firstName"
                        placeholder="Votre prénom"
                        className="bg-[#0a101f]/80 border-gray-700 text-white placeholder:text-gray-500 focus:border-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                        Nom
                      </label>
                      <Input
                        id="lastName"
                        placeholder="Votre nom"
                        className="bg-[#0a101f]/80 border-gray-700 text-white placeholder:text-gray-500 focus:border-primary"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="votre@email.com"
                      className="bg-[#0a101f]/80 border-gray-700 text-white placeholder:text-gray-500 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      Entreprise
                    </label>
                    <Input
                      id="company"
                      placeholder="Nom de votre entreprise"
                      className="bg-[#0a101f]/80 border-gray-700 text-white placeholder:text-gray-500 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Décrivez votre projet..."
                      rows={4}
                      className="bg-[#0a101f]/80 border-gray-700 text-white placeholder:text-gray-500 focus:border-primary resize-none"
                    />
                  </div>
                  <Button size="lg" className="w-full bg-foreground text-background hover:bg-foreground/90">
                    Envoyer le message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Map and Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {/* Map */}
              <div className="rounded-2xl overflow-hidden border border-gray-800/50 h-[300px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.7484126506597!2d2.4758089!3d48.83181490000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e60e9e8e8e8e8f%3A0x8e8e8e8e8e8e8e8e!2s111%20Rue%20de%20Fontenay%2C%2094130%20Nogent-sur-Marne!5e0!3m2!1sfr!2sfr!4v1635764821936!5m2!1sfr!2sfr"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Notre localisation"
                />
              </div>

              {/* Contact Info Cards */}
              <div className="grid gap-4">
                <div className="p-6 rounded-xl bg-[#0a101f]/60 border border-gray-800/50 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Adresse</h4>
                    <p className="text-sm text-gray-400">
                      111, Rue de Fontenay<br />
                      94130 Nogent sur Marne
                    </p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-6 rounded-xl bg-[#0a101f]/60 border border-gray-800/50 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Téléphone</h4>
                      <p className="text-sm text-gray-400">+33 1 67 07 41 91</p>
                    </div>
                  </div>

                  <div className="p-6 rounded-xl bg-[#0a101f]/60 border border-gray-800/50 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Email</h4>
                      <p className="text-sm text-gray-400">contact@future-digit.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Future Digit</h3>
              <p className="text-sm text-muted-foreground">
                Conseil &amp; Régie IT · Votre partenaire pour la transformation digitale et l'ingénierie
              </p>
              <div className="flex space-x-4">{/* Social Media Icons */}</div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Modes d'intervention</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/modes/conseil" className="text-sm text-muted-foreground hover:text-primary">
                    Conseil
                  </Link>
                </li>
                <li>
                  <Link href="/modes/regie" className="text-sm text-muted-foreground hover:text-primary">
                    Regie
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Business Units</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/business-units/banque-finance" className="text-sm text-muted-foreground hover:text-primary">
                    Banque Finance
                  </Link>
                </li>
                <li>
                  <Link href="/business-units/ingenierie" className="text-sm text-muted-foreground hover:text-primary">
                    Ingénierie
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  58, rue Monceau 75008 Paris
                </li>
                <li className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                    <rect width="20" height="16" x="2" y="4" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                  <Link href="mailto:contact@future-digit.com" className="text-sm text-muted-foreground hover:text-primary">
                    contact@future-digit.com
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  <Link href="tel:+33167074191" className="text-sm text-muted-foreground hover:text-primary">
                    01 67 07 41 91
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 pb-8 border-t space-y-4">
            <div className="text-center text-sm text-muted-foreground">
              <p>&copy; {new Date().getFullYear()} Future Digit. Tous droits réservés.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-xs text-muted-foreground pb-4">
              <Link href="/" className="hover:text-primary">
                Mentions légales
              </Link>
              <span>|</span>
              <Link href="/" className="hover:text-primary">
                Politique de confidentialité
              </Link>
              <span>|</span>
              <Link href="/" className="hover:text-primary">
                Politique des cookies
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
