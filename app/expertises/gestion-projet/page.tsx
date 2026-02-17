"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Target,
  Users2,
  Calendar,
  BarChart3,
  Lightbulb,
  Repeat,
  ClipboardCheck,
  MessageSquare,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
}

const roles = [
  {
    icon: Target,
    title: "Product Owner / Product Manager",
    description:
      "Definir la vision produit, prioriser le backlog et maximiser la valeur delivree a chaque iteration.",
  },
  {
    icon: Lightbulb,
    title: "PO Metiers (Salesforce, ...)",
    description:
      "Expertise fonctionnelle metier pour traduire les besoins business en specifications techniques exploitables.",
  },
  {
    icon: Repeat,
    title: "Scrum Master / Coach Agile",
    description:
      "Faciliter les ceremonies agiles, lever les impediments et accompagner les equipes vers l'autonomie.",
  },
  {
    icon: ClipboardCheck,
    title: "UX / UI Designer",
    description:
      "Concevoir des experiences utilisateur intuitives et des interfaces modernes qui maximisent l'adoption.",
  },
]

const methodologies = [
  {
    name: "Scrum",
    description: "Sprints iteratifs pour une livraison incrementale de valeur avec feedback continu.",
  },
  {
    name: "Kanban",
    description: "Flux continu optimise pour maximiser le throughput et reduire le lead time.",
  },
  {
    name: "SAFe",
    description: "Cadre de mise a l'echelle agile pour coordonner les equipes sur les grands programmes.",
  },
  {
    name: "Waterfall",
    description: "Approche sequentielle pour les projets a specifications stables et bien definies.",
  },
]

const approach = [
  {
    step: "01",
    title: "Cadrage & Vision",
    desc: "Analyse de vos besoins, definition des objectifs et du perimetre avec les parties prenantes.",
    icon: Target,
  },
  {
    step: "02",
    title: "Planification & Equipe",
    desc: "Constitution de l'equipe pluridisciplinaire, planification par blocs d'iterations courtes.",
    icon: Users2,
  },
  {
    step: "03",
    title: "Execution & Suivi",
    desc: "Pilotage agile avec KPIs, ceremonies regulieres, gestion des risques et reporting transparent.",
    icon: BarChart3,
  },
  {
    step: "04",
    title: "Livraison & Capitalisation",
    desc: "Livraison dans les delais, retrospective, transfert de competences et documentation.",
    icon: Calendar,
  },
]

export default function GestionProjetPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero - Image left, content right */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-orange-950/30 via-background to-background" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image side */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <Image
                  src="/images/expertise-gestion-hero.jpg"
                  alt="Gestion de Projet - Pilotage agile"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background/30 via-transparent to-transparent" />
              </div>
              {/* Floating card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute -bottom-5 -right-5 bg-card/90 backdrop-blur-sm border border-orange-500/20 rounded-xl p-4 shadow-2xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-orange-400" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">Agile First</p>
                    <p className="text-xs text-muted-foreground">Scrum, Kanban, SAFe</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Content side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="order-1 lg:order-2"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-orange-500" />
                <span className="text-sm font-medium tracking-widest uppercase text-orange-400">
                  Nos Expertises
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight">
                Gestion de{" "}
                <span className="text-orange-400">Projet</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg">
                Nos chefs de projet et coachs agiles certifies pilotent vos initiatives IT
                avec rigueur et methodologie, en maximisant la valeur delivree a chaque iteration.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/#contact">
                  <Button size="lg" className="rounded-full gap-2 group">
                    Trouver un chef de projet
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Button>
                </Link>
                <Link href="#approche">
                  <Button size="lg" variant="outline" className="rounded-full gap-2">
                    Notre approche
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Roles section - card grid */}
      <section className="py-24 lg:py-32 border-y border-border/50 bg-card/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-sm font-medium tracking-widest uppercase text-orange-400 mb-4 block">
              Nos profils projet
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Des roles cles pour piloter vos projets
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Nous mettons a votre disposition des profils experimentes couvrant tous les
              aspects de la gestion de projet IT.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {roles.map((role, i) => (
              <motion.div
                key={role.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
              >
                <div className="h-full rounded-2xl border border-border/50 bg-background/60 p-7 hover:bg-background/80 transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center shrink-0 group-hover:bg-orange-500/20 transition-colors">
                      <role.icon className="w-5 h-5 text-orange-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2">{role.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {role.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach - Numbered steps */}
      <section id="approche" className="py-24 lg:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
            className="max-w-2xl mb-16"
          >
            <span className="text-sm font-medium tracking-widest uppercase text-orange-400 mb-4 block">
              Notre approche
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Un cadre methodologique eprouve
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Nous maximisons la valeur de vos projets et produits par des blocs d'iterations
              courtes en equipes pluridisciplinaires.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {approach.map((item, i) => (
              <motion.div
                key={item.step}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
              >
                <div className="h-full p-7 rounded-2xl border border-orange-500/15 bg-gradient-to-b from-orange-500/5 to-transparent relative">
                  <span className="text-4xl font-bold text-orange-400/20 font-mono absolute top-4 right-5">
                    {item.step}
                  </span>
                  <div className="w-11 h-11 rounded-xl bg-orange-500/10 flex items-center justify-center mb-5">
                    <item.icon className="w-5 h-5 text-orange-400" />
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodologies + Image */}
      <section className="py-24 lg:py-32 bg-card/30 border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-sm font-medium tracking-widest uppercase text-orange-400 mb-4 block">
                Methodologies
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                La bonne methodologie pour chaque contexte
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Nous adaptons notre approche en fonction de votre contexte, la complexite
                du projet et la maturite agile de votre organisation.
              </p>
              <div className="space-y-3">
                {methodologies.map((m, i) => (
                  <motion.div
                    key={m.name}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={i}
                    variants={fadeUp}
                    className="flex items-start gap-4 p-4 rounded-xl bg-background/60 border border-border/50"
                  >
                    <span className="shrink-0 w-16 text-sm font-bold text-orange-400">{m.name}</span>
                    <p className="text-sm text-muted-foreground leading-relaxed">{m.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <Image
                  src="/images/expertise-gestion-detail.jpg"
                  alt="Equipe projet en reunion agile"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-950/60 via-background to-background" />
            <div className="relative z-10 px-8 py-16 md:px-16 md:py-20 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                Besoin d'un chef de projet experimente ?
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Contactez-nous pour discuter de vos besoins en gestion de projet et
                decouvrir comment nous pouvons vous accompagner vers le succes.
              </p>
              <Link href="/#contact">
                <Button size="lg" className="rounded-full gap-2 group">
                  Contactez-nous
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
