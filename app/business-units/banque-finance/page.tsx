"use client"

import React, { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Building2, Landmark, CreditCard, Wallet, Shield, TrendingUp, Server, Code, Briefcase, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function BanqueFinancePage() {

  const [activeSlide, setActiveSlide] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const domaines = [
    {
      title: "Banque de Financement et d'Investissement",
      bullets: [
        "Modernisation des systemes de trading et gestion des risques",
        "Transformation digitale des operations de marche",
        "Integration des solutions RegTech et conformite",
        "Optimisation des processus Front-to-Back"
      ]
    },
    {
      title: "Gestion d'Actifs",
      bullets: [
        "Optimisation des processus de gestion de portefeuilles",
        "Solutions de reporting et conformite reglementaire",
        "Integration des outils d'analyse quantitative",
        "Automatisation des operations Middle et Back Office"
      ]
    },
    {
      title: "Banque de Detail",
      bullets: [
        "Transformation des parcours clients omnicanaux",
        "Digitalisation des services bancaires",
        "Solutions de credit et de scoring automatise",
        "Experience client et fidelisation digitale"
      ]
    },
    {
      title: "Banque Directe",
      bullets: [
        "Conception de solutions bancaires 100% digitales",
        "Applications mobiles et web banking innovantes",
        "Parcours d'onboarding client simplifie",
        "Integration des services de paiement instantane"
      ]
    },
    {
      title: "Banque Privee",
      bullets: [
        "Outils de gestion de patrimoine personnalises",
        "Solutions de conseil financier augmente",
        "Reporting client et tableaux de bord",
        "Conformite et gestion des risques clients"
      ]
    },
    {
      title: "Assurances",
      bullets: [
        "Transformation numerique des processus metier",
        "Gestion des sinistres et indemnisation digitale",
        "Solutions de tarification et souscription en ligne",
        "Conformite Solvabilite II et reporting reglementaire"
      ]
    },
  ]

  const dotColors = ["#E8A0BF", "#1E3A5F", "#7BA3C9", "#B8C9D9", "#D4A5A5", "#8B9DC3"]

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0))
    setScrollLeft(carouselRef.current?.scrollLeft || 0)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - (carouselRef.current?.offsetLeft || 0)
    const walk = (x - startX) * 2
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = scrollLeft - walk
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    if (carouselRef.current) {
      const slideWidth = carouselRef.current.offsetWidth
      const newSlide = Math.round(carouselRef.current.scrollLeft / slideWidth)
      setActiveSlide(Math.max(0, Math.min(newSlide, domaines.length - 1)))
    }
  }

  const goToSlide = (index: number) => {
    setActiveSlide(index)
    setIsPaused(true)
    setTimeout(() => {
      setIsPaused(false)
    }, 10000)
  }

  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % domaines.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [domaines.length, isPaused])

  const sectors = [
    {
      icon: Building2,
      title: "Banque de Financement et d'Investissement",
      description: "Modernisation des systèmes de trading et gestion des risques.",
      image: "/images/bu-banque-finance.jpg"
    },
    {
      icon: Landmark,
      title: "Gestion d'Actifs",
      description: "Optimisation des processus de gestion de portefeuilles et solutions de reporting.",
      image: "/images/bu-gestion-actifs.jpg"
    },
    {
      icon: CreditCard,
      title: "Banque de Detail",
      description: "Transformation des parcours clients et digitalisation des services bancaires grand public.",
      image: "/images/bu-banque-detail.jpg"
    },
    {
      icon: Wallet,
      title: "Banque Directe",
      description: "Conception et déploiement de solutions bancaires 100% digitales et innovantes.",
      image: "/images/bu-banque-directe.jpg"
    },
    {
      icon: Shield,
      title: "Banque Privee",
      description: "Outils de gestion de patrimoine personnalisés et solutions de conseil financier.",
      image: "/images/bu-banque-privee.jpg"
    },
    {
      icon: TrendingUp,
      title: "Assurances",
      description: "Transformation numérique des processus métier et gestion des sinistres.",
      image: "/images/bu-assurances.jpg"
    },
  ]

  const sectors2 = [
    {
      icon: CreditCard,
      title: "Banque de Detail",
      description: "Transformation des parcours clients et digitalisation des services bancaires grand public.",
    },
    {
      icon: Wallet,
      title: "Banque Directe",
      description: "Conception et déploiement de solutions bancaires 100% digitales et innovantes.",
    },
  ]

  const services = [
    {
      icon: Server,
      title: "Gestion des Infrastructures / Production / DevSecOps",
      description: "Notre équipe d'experts infrastructure accompagne les établissements financiers dans la gestion, la sécurisation et l'automatisation de leurs environnements de production critiques.",
      features: [
        "Infrastructure as Code",
        "CI/CD sécurisé",
        "Monitoring avancé",
        "Cloud hybride",
        "Sécurité Zero Trust",
      ],
    },
    {
      icon: Code,
      title: "MOE : Développement et Suivi de Projets Applicatifs",
      description: "Nos équipes de développement interviennent sur l'ensemble du cycle de vie des applications métier, de la conception à la maintenance évolutive.",
      features: [
        "Architectures modernes",
        "APIs et microservices",
        "Applications temps réel",
        "Migration legacy",
        "Tests automatisés",
      ],
    },
    {
      icon: Briefcase,
      title: "MOA et Expertise Métier",
      description: "Nos consultants fonctionnels apportent leur expertise métier pour cadrer vos projets et assurer l'adéquation entre les besoins utilisateurs et les solutions déployées.",
      features: [
        "Analyse fonctionnelle",
        "Gestion de projet",
        "Conduite du changement",
        "Formation utilisateurs",
        "Support métier",
      ],
    },
  ]

  const logos = [
    { name: "Client 1" },
    { name: "Client 2" },
    { name: "Client 3" },
    { name: "Client 4" },
    { name: "Client 5" },
    { name: "Client 6" },
    { name: "Client 7" },
  ]

  const stats = [
    { value: "80+", label: "Consultants financiers" },
    { value: "200+", label: "Projets bancaires" },
    { value: "15+", label: "Années d'expérience" },
    { value: "100%", label: "Clients satisfaits" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero Section - Centered like Ingenierie */}
      <section className="relative min-h-[85vh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/bu-banque-hero.jpg"
            alt="Banque Finance"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-6">
              Business Unit
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
              Pole Banque - Finance
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed max-w-3xl mx-auto">
              Notre pole Banque-Finance accompagne tous les acteurs du secteur financier 
              dans leur transformation digitale et leurs projets technologiques critiques.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact">
                <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">
                  Parlons de votre projet
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10 bg-transparent">
                Explorer nos compétences
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Logo Carousel - 7 logos */}
      <section className="py-12 bg-[#020817] border-y border-gray-800/50 overflow-hidden">
        <div className="container mx-auto px-4 mb-8">
          <p className="text-center text-sm text-muted-foreground">Ils nous font confiance</p>
        </div>
        <div className="relative">
          <div className="flex animate-scroll-x-slow">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[150px] h-[70px] mx-3 rounded-lg bg-[#0a101f]/60 border border-gray-800/50 flex items-center justify-center"
              >
                <span className="text-gray-500 text-sm">Logo {(index % 7) + 1}</span>
              </div>
            ))}
          </div>
        </div>
        <style jsx>{`
          @keyframes scroll-x-slow {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll-x-slow {
            animation: scroll-x-slow 30s linear infinite;
          }
        `}</style>
      </section>

      {/* Nos Domaines d'Intervention - Carousel Section */}
      <section className="py-24 bg-gradient-to-b from-[#020817] to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nos <span className="text-blue-400">Domaines d'Intervention</span>
            </h2>
            <p className="text-muted-foreground max-w-3xl">
              <strong>Nos consultants sont des professionnels expérimentés de la Finance</strong>, appliquée au secteur bancaire et à la finance de marché. Ils interviennent sur un perimetre large, des sujets comptables jusqu'au controle de gestion.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Static Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/bu-banque-domaines.jpg"
                  alt="Expertise Finance"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </motion.div>

            {/* Draggable Text Carousel */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative flex flex-col h-[400px]"
            >
              <div className="rounded-2xl flex-1 flex flex-col justify-center">
                <div className="px-8">
                  <div
                    ref={carouselRef}
                    className="overflow-hidden cursor-grab active:cursor-grabbing"
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                  >
                    <div 
                      className="flex transition-transform duration-700 ease-in-out"
                      style={{ transform: `translateX(-${activeSlide * 100}%)` }}
                    >
                      {domaines.map((domaine, index) => (
                        <div
                          key={index}
                          className="min-w-full px-2"
                        >
                          <h3 className="text-2xl font-bold text-blue-400 mb-6">{domaine.title}</h3>
                          <ul className="space-y-4">
                            {domaine.bullets.map((bullet, bulletIndex) => (
                              <li key={bulletIndex} className="flex items-start gap-3">
                                <span className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                                <span className="text-muted-foreground">{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Navigation Dots */}
                <div className="flex justify-center gap-3 mt-8 px-8">
                  {domaines.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-500 bg-blue-400 ${
                        activeSlide === index ? 'scale-125 opacity-100' : 'opacity-40 hover:opacity-70'
                      }`}
                      aria-label={`Aller au slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section - Horizontal cards like Ingenierie */}
      <section className="py-24 bg-[#020817]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Notre Offre de Services</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Trois grands domaines de compétences pour accompagner votre transformation
              </p>
            </motion.div>
          </div>
          <div className="space-y-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <div className="grid lg:grid-cols-2 gap-8 p-8 rounded-2xl bg-gradient-to-r from-[#0a101f]/80 to-[#0a101f]/40 border border-gray-800/50 hover:border-blue-500/30 transition-all duration-300">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-blue-400" />
                      </div>
                      <h3 className="text-xl font-semibold">{service.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats + Image Section */}
      <section className="py-24 bg-gradient-to-b from-[#020817] to-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                L'excellence financière au service de vos ambitions
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Notre équipe de consultants expérimentés intervient auprès des plus grands 
                établissements financiers. De la stratégie à l'implémentation, nous mettons 
                notre expertise sectorielle au service de votre performance.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-6 rounded-xl bg-[#0a101f]/60 border border-gray-800/50"
                  >
                    <div className="text-3xl font-bold text-blue-400 mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
              <Link href="/#contact">
                <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">
                  Démarrer un projet
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="/images/bu-banque-team.jpg"
                alt="Équipe Banque Finance"
                className="rounded-2xl w-full"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-l from-background/40 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#020817]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-600/10" />
            <div className="relative p-12 md:p-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Un projet dans le secteur financier?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Notre équipe de consultants spécialisés est prête à vous accompagner. 
                Contactez-nous pour échanger sur votre projet.
              </p>
              <Link href="/#contact">
                <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">
                  Contactez nos experts
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-background/50">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/expertises/software-engineering" className="text-sm text-muted-foreground hover:text-primary">
                    Software Engineering
                  </Link>
                </li>
                <li>
                  <Link href="/expertises/cloud" className="text-sm text-muted-foreground hover:text-primary">
                    Cloud
                  </Link>
                </li>
                <li>
                  <Link href="/expertises/infrastructure-devops" className="text-sm text-muted-foreground hover:text-primary">
                    Infrastructure & DevOps
                  </Link>
                </li>
                <li>
                  <Link href="/expertises/gestion-projet" className="text-sm text-muted-foreground hover:text-primary">
                    Gestion de Projet
                  </Link>
                </li>
              </ul>
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
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
                    Mentions légales
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
                    Politique de confidentialité
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
                    Politique cookies
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="text-sm text-muted-foreground">Paris, France</li>
                <li>
                  <Link href="mailto:contact@madison.com" className="text-sm text-muted-foreground hover:text-primary">
                    contact@madison.com
                  </Link>
                </li>
                <li>
                  <Link href="tel:+33123456789" className="text-sm text-muted-foreground hover:text-primary">
                    +33 1 2345 6789
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Madison. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
