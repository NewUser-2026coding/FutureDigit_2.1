"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Briefcase, Users, Target, CheckCircle, Lightbulb, Layers, FileText, Cog, BarChart3 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function ConseilPage() {

  const services = [
    {
      icon: Lightbulb,
      title: "Cadrage et Conception",
      description: "De l'idée au projet structuré, nous définissons ensemble vos besoins et concevons la solution adaptée.",
    },
    {
      icon: Users,
      title: "Équipe pluridisciplinaire",
      description: "Constituez une équipe dédiée avec les compétences nécessaires pour mener à bien votre projet.",
    },
    {
      icon: Layers,
      title: "Itérations courtes",
      description: "Nous maximisons la valeur par des cycles de développement agiles et des livraisons incrémentales.",
    },
    {
      icon: Target,
      title: "Livraison au forfait",
      description: "Engagement sur les résultats avec un budget maîtrisé et des délais définis.",
    },
  ]

  const processSteps = [
    {
      icon: FileText,
      title: "Analyse des Besoins",
      description: "Étude approfondie de vos objectifs métier et contraintes techniques pour définir le périmètre du projet.",
    },
    {
      icon: Lightbulb,
      title: "Conception de la Solution",
      description: "Architecture et design de la solution sur mesure répondant à vos enjeux spécifiques.",
    },
    {
      icon: Cog,
      title: "Réalisation itérative",
      description: "Développement en sprints avec démos régulières pour valider chaque incrément fonctionnel.",
    },
    {
      icon: BarChart3,
      title: "Livraison et Accompagnement",
      description: "Mise en production, transfert de compétences et support pour garantir le succès.",
    },
  ]

  const benefits = [
    "Budget maîtrisé et prévisible",
    "Délais de livraison garantis",
    "Équipe dédiée à votre projet",
    "Méthodologie agile éprouvée",
    "Transparence totale sur l'avancement",
    "Accompagnement de bout en bout",
  ]

  const projectTypes = [
    {
      title: "Applications métier",
      description: "Développement d'applications sur mesure pour digitaliser vos processus et améliorer votre efficacité opérationnelle.",
    },
    {
      title: "Transformation digitale",
      description: "Accompagnement dans la modernisation de votre SI et l'adoption de nouvelles technologies.",
    },
    {
      title: "Produits numériques",
      description: "Conception et réalisation de produits digitaux innovants, de l'idée au lancement sur le marché.",
    },
    {
      title: "Intégration de systèmes",
      description: "Interconnexion de vos applications et systèmes pour fluidifier vos échanges de données.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/conseil-hero.jpg"
            alt="Conseil et solutions sur mesure"
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
              Mode d'Intervention
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Conseil
            </h1>
            <p className="text-xl text-muted-foreground mb-4 text-pretty">
              Concevoir vos solutions sur mesure de l'idée au projet.
            </p>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Constituez une équipe pluridisciplinaire dédiée pour réaliser un projet complet. 
              Nous maximisons la valeur de vos projets et produits par des blocs d'itérations 
              courtes en équipes pluridisciplinaires.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/#contact">
                <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90">
                  Discutons de votre projet
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-[#020817]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Notre Approche Conseil</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Une méthodologie éprouvée pour transformer vos idées en solutions performantes
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

      {/* Process Section */}
      <section className="py-24 bg-gradient-to-b from-[#020817] to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Notre Processus</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              De la conception à la livraison, un accompagnement structuré pour garantir le succès de votre projet
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 relative">
                    <step.icon className="w-8 h-8 text-primary" />
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-px bg-gradient-to-r from-primary/50 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Types Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Types de Projets</h2>
              <p className="text-muted-foreground mb-8">
                Notre expertise couvre un large spectre de projets pour répondre à tous vos besoins 
                de transformation numérique.
              </p>
              <div className="space-y-6">
                {projectTypes.map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="border-l-2 border-primary pl-4"
                  >
                    <h3 className="font-semibold mb-1">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">{project.description}</p>
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
                src="/images/conseil-team.jpg"
                alt="Équipe projet"
                className="rounded-2xl w-full"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-background/50 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-[#020817]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <div className="p-8 rounded-2xl bg-[#0a101f]/60 border border-gray-800/50">
                <h3 className="text-2xl font-bold mb-6">Notre Engagement</h3>
                <p className="text-muted-foreground mb-6">
                  Avec notre mode forfait, vous bénéficiez d'un engagement ferme sur les livrables, 
                  les délais et le budget. Nous partageons les risques et nous engageons sur les résultats.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Périmètre fonctionnel défini et validé</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Prix fixe sans dépassement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Planning de livraison garanti</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Garantie de conformite aux specifications</span>
                  </li>
                </ul>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Pourquoi Choisir le Forfait?</h2>
              <p className="text-muted-foreground mb-8">
                Le mode forfait vous offre visibilité et maîtrise de votre investissement 
                tout en bénéficiant de notre expertise et de notre engagement qualité.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: 20 }}
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
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-[#020817] to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt à lancer votre projet ?
            </h2>
            <p className="text-muted-foreground mb-8">
              Contactez-nous pour une étude gratuite de votre besoin et découvrez comment 
              notre approche conseil peut concrétiser vos ambitions numériques.
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

      <SiteFooter />
    </div>
  )
}
