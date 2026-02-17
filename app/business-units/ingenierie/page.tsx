"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Cog, Plane, Fuel, Cpu, Package, Factory, Wrench, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function IngenieriePage() {

  const sectors = [
    { 
      icon: Fuel, 
      title: "Energie / Oil & Gas", 
      description: "Accompagnement des majors pétrolières et énergéticiennes dans leurs projets d'ingénierie complexes, de la conception à la mise en service.",
      image: "/images/industry-energie.jpg"
    },
    { 
      icon: Plane, 
      title: "Aeronautique", 
      description: "Expertise dans la conception et le développement de systèmes aéronautiques pour les équipementiers et constructeurs du secteur.",
      image: "/images/industry-industrie.jpg"
    },
  ]

  const services = [
    {
      icon: Cog,
      title: "Conception mécanique",
      description: "Notre équipe d'ingénieurs mécaniciens intervient sur l'ensemble du cycle de conception, de l'avant-projet à l'industrialisation.",
      features: [
        "Modelisation 3D et simulation",
        "Calculs de structure",
        "Design industriel",
        "Prototypage rapide",
        "Documentation technique",
      ],
    },
    {
      icon: Cpu,
      title: "Conception Hardware & Software",
      description: "Développement de systèmes embarqués et de solutions logicielles industrielles pour répondre aux exigences les plus strictes.",
      features: [
        "Systemes embarques",
        "Electronique de puissance",
        "Logiciels temps reel",
        "Interfaces homme-machine",
        "Tests et validation",
      ],
    },
    {
      icon: Package,
      title: "Supply Chain / Industrialisation 4.0",
      description: "Optimisation de vos processus industriels et de votre chaîne d'approvisionnement avec les technologies de l'industrie 4.0.",
      features: [
        "Optimisation des flux",
        "Automatisation",
        "IoT industriel",
        "Maintenance prédictive",
        "Digital twin",
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
    { name: "Client 8" },
    { name: "Client 9" },
  ]

  const stats = [
    { value: "40+", label: "Ingénieurs spécialisés" },
    { value: "150+", label: "Projets industriels" },
    { value: "12+", label: "Années d'expérience" },
    { value: "100%", label: "Projets livres" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero Section - Different layout */}
      <section className="relative min-h-[85vh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/bu-ingenierie-hero.jpg"
            alt="Ingénierie"
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
            <span className="inline-block px-4 py-2 rounded-full bg-orange-500/10 text-orange-400 text-sm font-medium mb-6">
              Business Unit
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
              Pôle Ingénierie
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed max-w-3xl mx-auto">
              Notre pôle ingénierie accompagne les opérateurs, EPC et fournisseurs d'équipements 
              dans les secteurs de l'énergie, de l'aéronautique et de l'industrie avancée.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
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

      {/* Logo Carousel - 9 logos */}
      <section className="py-12 bg-[#020817] border-y border-gray-800/50 overflow-hidden">
        <div className="container mx-auto px-4 mb-8">
          <p className="text-center text-sm text-muted-foreground">Nos partenaires industriels</p>
        </div>
        <div className="relative">
          <div className="flex animate-scroll-x-slow">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[150px] h-[70px] mx-3 rounded-lg bg-[#0a101f]/60 border border-gray-800/50 flex items-center justify-center"
              >
                <span className="text-gray-500 text-sm">Logo {(index % 9) + 1}</span>
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
            animation: scroll-x-slow 35s linear infinite;
          }
        `}</style>
      </section>

      {/* Sectors Section - Side by side cards */}
      <section className="py-24 bg-gradient-to-b from-[#020817] to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Domaines d'Intervention</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Le pôle Ingénierie s'adresse aux clients opérateurs, EPC et fournisseurs de services
              </p>
            </motion.div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {sectors.map((sector, index) => (
              <motion.div
                key={sector.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group"
              >
                <div className="relative h-[400px] rounded-2xl overflow-hidden">
                  <img
                    src={sector.image || "/placeholder.svg"}
                    alt={sector.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="w-14 h-14 rounded-xl bg-orange-500/20 flex items-center justify-center mb-4">
                      <sector.icon className="w-7 h-7 text-orange-400" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-3">{sector.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{sector.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Horizontal cards */}
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
                Trois grands domaines de compétences pour l'industrie de demain
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
                <div className="grid lg:grid-cols-2 gap-8 p-8 rounded-2xl bg-gradient-to-r from-[#0a101f]/80 to-[#0a101f]/40 border border-gray-800/50 hover:border-orange-500/30 transition-all duration-300">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-orange-400" />
                      </div>
                      <h3 className="text-xl font-semibold">{service.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-orange-400 flex-shrink-0" />
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
                L'excellence industrielle au service de vos projets
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Notre équipe d'ingénieurs expérimentés intervient sur l'ensemble du cycle de vie 
                de vos projets industriels. De la conception à l'industrialisation, nous mettons 
                notre savoir-faire au service de votre performance.
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
                    <div className="text-3xl font-bold text-orange-400 mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
              <Link href="/#contact">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
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
                src="/images/bu-ingenierie-team.jpg"
                alt="Équipe Ingénierie"
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
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-orange-600/10" />
            <div className="relative p-12 md:p-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Un projet industriel en vue?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Notre équipe d'ingénieurs est prête à relever vos défis techniques. 
                Contactez-nous pour échanger sur votre projet.
              </p>
              <Link href="/#contact">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
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
