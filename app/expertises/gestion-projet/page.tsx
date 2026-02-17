"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Users, Target, Calendar, BarChart3, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function GestionProjetPage() {

  const services = [
    {
      icon: Target,
      title: "Pilotage de projet",
      description: "Direction et coordination de projets complexes",
    },
    {
      icon: Users,
      title: "Management d'équipe",
      description: "Animation et motivation des équipes projet",
    },
    {
      icon: Calendar,
      title: "Planification",
      description: "Gestion des délais et des ressources",
    },
    {
      icon: BarChart3,
      title: "Reporting & KPIs",
      description: "Tableaux de bord et indicateurs de performance",
    },
  ]

  const benefits = [
    "Methodologies Agile/Scrum",
    "Certification PMP/Prince2",
    "Gestion des risques",
    "Communication efficace",
    "Budget maîtrisé",
    "Qualité garantie",
  ]

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/expertise-gestion.jpg"
            alt="Gestion de projet"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Nos Expertises
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Gestion de Projet
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Nos chefs de projet certifies pilotent vos initiatives IT avec rigueur 
              et methodologie pour garantir le succes de vos projets.
            </p>
            <Link href="/#contact">
              <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90">
                Discutons de votre projet
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-[#020817]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Un accompagnement complet pour mener vos projets a bien
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="p-6 rounded-2xl bg-[#0a101f]/60 border border-gray-800/50 hover:bg-[#0a101f]/80 transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gradient-to-b from-[#020817] to-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Pourquoi nous choisir?</h2>
              <p className="text-muted-foreground mb-8">
                Nos chefs de projet combinent expertise technique et compétences 
                managériales pour délivrer vos projets dans les temps et le budget.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="/images/expertise-gestion-2.jpg"
                alt="Project management"
                className="rounded-2xl w-full"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-background/50 to-transparent" />
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
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Besoin d'un chef de projet experimente?
            </h2>
            <p className="text-muted-foreground mb-8">
              Contactez-nous pour discuter de vos besoins en gestion de projet et 
              decouvrir comment nous pouvons vous accompagner.
            </p>
            <Link href="/#contact">
              <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90">
                Contactez-nous
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
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
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  Paris, France
                </li>
                <li className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                    <rect width="20" height="16" x="2" y="4" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                  <Link href="mailto:contact@madison.com" className="text-sm text-muted-foreground hover:text-primary">
                    contact@madison.com
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  <Link href="tel:+33123456789" className="text-sm text-muted-foreground hover:text-primary">
                    +33 1 2345 6789
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 pb-8 border-t space-y-4">
            <div className="text-center text-sm text-muted-foreground">
              <p>&copy; {new Date().getFullYear()} Madison. All rights reserved.</p>
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
                Politique cookies
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
