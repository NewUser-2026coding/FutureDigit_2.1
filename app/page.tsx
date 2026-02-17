"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight, ChevronRight, ArrowUpRight, MapPin, Phone, Mail, Send, Landmark, Cog, Users, TrendingUp, Target } from "lucide-react"
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
      "Constituez une équipe pluridisciplinaire pour réaliser un projet complet avec des itérations courtes et un engagement sur les résultats.",
    image: "/images/conseil-hero.jpg",
    link: "/modes/conseil",
    subtitle: "Prestations au forfait",
    tags: ["Équipe dédiée", "Solutions sur mesure", "Projets complets"],
  },
  {
    title: "Régie",
    description:
      "Renforcez vos équipes avec l'expertise et le leadership de nos talents en immersion au sein de votre organisation.",
    image: "/images/regie-hero.jpg",
    link: "/modes/regie",
    subtitle: "Extended Teams",
    tags: ["Renforcement", "Expertise", "Immersion"],
  },
]

const expertises = [
  {
    name: "Software Engineering",
    description: "Frontend, Backend & Embedded",
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
    description: "GCP, AWS, Azure & Kubernetes",
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
    description: "Automatisation & CI/CD",
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
    description: "Scrum, Kanban & SAFe",
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
    description: "S/4HANA, FI/CO & SuccessFactors",
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

const businessUnits = [
  {
    title: "Pôle Banque - Finance",
    description: "Accompagnement des acteurs du secteur financier dans leur transformation digitale et leurs projets technologiques.",
    features: [
      "Banque d'investissement & gestion d'actifs",
      "Solutions bancaires digitales",
      "Infrastructure & MOE",
      "Conformité & expertise métier",
    ],
    clients: ["BNP Paribas", "BPCE - Natixis", "Société Générale", "Crédit Agricole"],
    link: "/business-units/banque-finance",
    icon: Landmark,
  },
  {
    title: "Pôle Ingénierie",
    description: "Accompagnement des opérateurs, EPC et fournisseurs d'équipements dans l'énergie et l'aéronautique.",
    features: [
      "Conception mécanique",
      "Systèmes embarqués & logiciels industriels",
      "Supply chain & industrie 4.0",
      "Énergie, pétrole & gaz",
    ],
    clients: ["Technip", "Total", "Saipem", "EDF"],
    link: "/business-units/ingenierie",
    icon: Cog,
  },
]

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  const services = ["Conseil", "Régie", "Cloud", "Software Engineering", "DevOps", "SAP", "Gestion de Projet"]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % services.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [services.length])

  return (
    <div ref={containerRef}>
      <SiteHeader />

      {/* Hero Section - Video-first design */}
      <section className="relative min-h-[90vh] overflow-hidden">
        {/* Video background layer */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-50"
          >
            <source src="/videos/PRO-.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
        </div>

        {/* Content overlay */}
        <motion.div 
          style={{ opacity, scale }} 
          className="relative z-10 container mx-auto px-4 min-h-[90vh] flex flex-col justify-center pt-32 pb-16"
        >
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-[1.1]"
            >
              <span className="text-white">Future Digit</span>
            </motion.h1>

            {/* Subtitle with integrated rotating expertise */}
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-white font-light flex flex-wrap items-baseline gap-2"
            >
              <span>Quand vos idées racontent nos talents en</span>
              <span className="h-7 md:h-8 overflow-hidden inline-block align-baseline ml-0.5">
                <motion.span
                  key={currentServiceIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-lg md:text-xl font-light text-orange-400 inline-block"
                >
                  {services[currentServiceIndex]}
                </motion.span>
              </span>
            </motion.p>
          </div>
        </motion.div>

      </section>



      {/* Modes d'intervention */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comment nous travaillons</h2>
            <p className="text-lg text-muted-foreground">Deux modes d'intervention selon vos besoins</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {modesIntervention.map((mode, index) => (
              <motion.div
                key={mode.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Link href={mode.link}>
                  <Card className="h-full overflow-hidden hover:border-orange-500/50 transition-all">
                    <div className="relative h-48">
                      <Image
                        src={mode.image || "/placeholder.svg"}
                        alt={mode.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-white/90 text-black rounded-full text-xs font-medium">
                          {mode.subtitle}
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-orange-500 transition-colors">
                        {mode.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">{mode.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {mode.tags.map((tag) => (
                          <span key={tag} className="px-2 py-1 bg-muted text-xs rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center text-sm font-medium text-orange-500 group-hover:gap-2 transition-all">
                        En savoir plus
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertises */}
      <section id="expertises" className="py-20 bg-gradient-to-b from-background to-muted/30 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Expertises</h2>
            <p className="text-lg text-muted-foreground">Compétences techniques et méthodologiques</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
            {expertises.slice(0, 3).map((expertise, index) => (
              <motion.div
                key={expertise.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Link href={expertise.link}>
                  <div className="group relative rounded-xl bg-card border hover:border-orange-500/50 transition-all overflow-hidden h-full">
                    <div className="h-40 overflow-hidden relative">
                      <img
                        src={expertise.image || "/placeholder.svg"}
                        alt={expertise.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
                    </div>
                    <div className="p-4">
                      <div className="flex items-start gap-2 mb-2">
                        <div className="w-7 h-7 rounded-lg bg-muted flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500/20 transition-colors">
                          {expertise.icon()}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm font-semibold mb-1 group-hover:text-orange-500 transition-colors leading-tight">
                            {expertise.name}
                          </h3>
                          <p className="text-xs text-muted-foreground leading-snug">
                            {expertise.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-4 max-w-7xl mx-auto mt-4">
            {expertises.slice(3, 5).map((expertise, index) => (
              <motion.div
                key={expertise.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index + 3) * 0.05 }}
                className="w-full sm:w-[calc(50%-0.5rem)] lg:max-w-[280px]"
              >
                <Link href={expertise.link}>
                  <div className="group relative rounded-xl bg-card border hover:border-orange-500/50 transition-all overflow-hidden h-full">
                    <div className="h-40 overflow-hidden relative">
                      <img
                        src={expertise.image || "/placeholder.svg"}
                        alt={expertise.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
                    </div>
                    <div className="p-4">
                      <div className="flex items-start gap-2 mb-2">
                        <div className="w-7 h-7 rounded-lg bg-muted flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500/20 transition-colors">
                          {expertise.icon()}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm font-semibold mb-1 group-hover:text-orange-500 transition-colors leading-tight">
                            {expertise.name}
                          </h3>
                          <p className="text-xs text-muted-foreground leading-snug">
                            {expertise.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Units with real clients */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Business Units</h2>
            <p className="text-lg text-muted-foreground">
              Deux pôles d'expertise sectoriels
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {businessUnits.map((unit, index) => (
              <motion.div
                key={unit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={unit.link}>
                  <Card className="h-full hover:border-orange-500/50 transition-all group">
                    <CardContent className="p-8">
                      <div className="mb-6 w-14 h-14 rounded-xl bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                        <unit.icon className="w-7 h-7 text-orange-500" />
                      </div>
                      <h3 className="text-xl font-bold mb-3 group-hover:text-orange-500 transition-colors">{unit.title}</h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">{unit.description}</p>
                      
                      <div className="space-y-2 mb-6">
                        {unit.features.map((feature, i) => (
                          <div key={i} className="flex items-start text-sm">
                            <ChevronRight className="w-4 h-4 mr-2 text-orange-500 flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-4 border-t">
                        <div className="text-xs font-medium text-muted-foreground mb-2">Clients</div>
                        <div className="flex flex-wrap gap-2">
                          {unit.clients.map((client) => (
                            <span key={client} className="text-xs px-2 py-1 bg-muted rounded">
                              {client}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Story - Une croissance rapide (before contact) */}
      <section className="py-20 bg-gradient-to-b from-black to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Une croissance rapide</h2>
              <p className="text-lg text-muted-foreground">
                De 1 personne à 45 consultants en 4 ans
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-card/50 border border-border rounded-xl p-6"
              >
                <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-orange-500" />
                </div>
                <div className="text-2xl font-bold mb-2">116k€ → 4M€</div>
                <p className="text-sm text-muted-foreground">Évolution du CA depuis 2020</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-card/50 border border-border rounded-xl p-6"
              >
                <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-orange-500" />
                </div>
                <div className="text-2xl font-bold mb-2">45 talents</div>
                <p className="text-sm text-muted-foreground">Équipe pluridisciplinaire</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-card/50 border border-border rounded-xl p-6"
              >
                <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-orange-500" />
                </div>
                <div className="text-2xl font-bold mb-2">2 pôles</div>
                <p className="text-sm text-muted-foreground">IT & Ingénierie</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-muted/30 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Contactez-nous</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discutons de votre projet
              </p>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-6">Envoyez-nous un message</h3>
                  <form className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                          Prénom
                        </label>
                        <Input
                          id="firstName"
                          placeholder="Votre prénom"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                          Nom
                        </label>
                        <Input
                          id="lastName"
                          placeholder="Votre nom"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="votre@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-2">
                        Entreprise
                      </label>
                      <Input
                        id="company"
                        placeholder="Nom de votre entreprise"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Décrivez votre projet..."
                        rows={4}
                        className="resize-none"
                      />
                    </div>
                    <Button size="lg" className="w-full">
                      Envoyer le message
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {/* Map */}
              <div className="rounded-xl overflow-hidden border h-[300px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.2849967890596!2d2.3073999!3d48.8737419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fc4f8d4f8f5%3A0x8e8e8e8e8e8e8e8e!2s58%20Rue%20de%20Monceau%2C%2075008%20Paris!5e0!3m2!1sfr!2sfr!4v1635764821936!5m2!1sfr!2sfr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Notre localisation"
                />
              </div>

              {/* Contact Info Cards */}
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-orange-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Adresse</h4>
                      <p className="text-sm text-muted-foreground">
                        58, rue Monceau<br />
                        75008 Paris
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid sm:grid-cols-2 gap-4">
                  <Card>
                    <CardContent className="p-6 flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-4 h-4 text-orange-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1 text-sm">Téléphone</h4>
                        <p className="text-sm text-muted-foreground">01 67 07 41 91</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-4 h-4 text-orange-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1 text-sm">Email</h4>
                        <p className="text-sm text-muted-foreground">contact@future-digit.com</p>
                      </div>
                    </CardContent>
                  </Card>
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
                Conseil & Régie IT
              </p>
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
                    Régie
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
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  58, rue Monceau 75008 Paris
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <Link href="mailto:contact@future-digit.com" className="text-sm text-muted-foreground hover:text-primary">
                    contact@future-digit.com
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <Link href="tel:+33167074191" className="text-sm text-muted-foreground hover:text-primary">
                    01 67 07 41 91
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t">
            <div className="text-center text-sm text-muted-foreground">
              <p>&copy; {new Date().getFullYear()} Future Digit. Tous droits réservés.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
