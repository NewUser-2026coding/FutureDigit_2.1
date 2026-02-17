"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Cloud,
  ShieldCheck,
  Network,
  Building2,
  ArrowUpRight,
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

const pillars = [
  {
    icon: ArrowUpRight,
    number: "01",
    title: "Replatforming",
    subtitle: "Migration de workloads vers le cloud",
    description:
      "Redeploiement de vos infrastructures existantes vers le cloud : de la containerisation au serverless. Nous assurons une transition fluide et sans interruption de service.",
    tags: ["Lift & Shift", "Refactoring", "Re-architecting"],
  },
  {
    icon: Building2,
    number: "02",
    title: "Landing Zone",
    subtitle: "Plateforme de projets securisee",
    description:
      "Automatisation et securisation de votre plateforme cloud. Nous concevons des fondations solides pour heberger l'ensemble de vos projets avec gouvernance et conformite.",
    tags: ["IAM", "Networking", "Compliance"],
  },
  {
    icon: Network,
    number: "03",
    title: "Multi-Cloud",
    subtitle: "Gouvernance multi-ecosystemes",
    description:
      "Gouvernance et securisation de vos ecosystemes on-premise et cloud. Nous orchestrons vos ressources a travers plusieurs fournisseurs pour maximiser la resilience.",
    tags: ["Hybrid", "Governance", "Cost Optimization"],
  },
  {
    icon: ShieldCheck,
    number: "04",
    title: "Foundations Cloud",
    subtitle: "Bases d'infrastructure cloud",
    description:
      "Mise en place des bases d'une infrastructure cloud selon l'etat de l'art. Nous definissons les standards, les pratiques et les outils pour garantir la perennite.",
    tags: ["Best Practices", "IaC", "Security"],
  },
]

const technologies = [
  { name: "Google Cloud Platform", short: "GCP" },
  { name: "Amazon Web Services", short: "AWS" },
  { name: "Microsoft Azure", short: "Azure" },
  { name: "Kubernetes", short: "K8s" },
  { name: "Docker", short: "Docker" },
  { name: "Terraform", short: "Terraform" },
]

export default function CloudPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero - Full-width image background */}
      <section className="relative min-h-[80vh] flex items-end pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/expertise-cloud-hero.jpg"
            alt="Expertise Cloud - Infrastructure cloud moderne"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <Cloud className="w-5 h-5 text-teal-400" />
              <span className="text-sm font-medium tracking-widest uppercase text-teal-400">
                Expertise Cloud
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight">
              Accelerez votre transformation avec le{" "}
              <span className="text-teal-400">Cloud</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl">
              Du replatforming a la gouvernance multi-cloud, nos experts certifies vous
              accompagnent dans chaque etape de votre migration et optimisation cloud.
            </p>
            <Link href="/#contact">
              <Button size="lg" className="rounded-full gap-2 group">
                Evaluer mon infrastructure
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Technology bar */}
      <section className="border-y border-border/50 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 py-8">
            {technologies.map((tech, i) => (
              <motion.div
                key={tech.short}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="flex flex-col items-center gap-1"
              >
                <span className="text-sm font-bold text-foreground">{tech.short}</span>
                <span className="text-xs text-muted-foreground">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars - Numbered stacked cards */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
            className="max-w-2xl mb-16"
          >
            <span className="text-sm font-medium tracking-widest uppercase text-teal-400 mb-4 block">
              Nos 4 piliers
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Une approche structuree pour votre strategie cloud
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Chaque pilier repond a un enjeu specifique de votre parcours cloud, du
              re-platforming initial a la gouvernance avancee.
            </p>
          </motion.div>

          <div className="space-y-4">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.number}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
              >
                <div className="group rounded-2xl border border-border/50 bg-card/50 hover:bg-card/80 transition-all duration-300 overflow-hidden">
                  <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex items-start gap-4 md:w-1/3 shrink-0">
                      <span className="text-3xl font-bold text-teal-400/50 font-mono">
                        {pillar.number}
                      </span>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{pillar.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{pillar.subtitle}</p>
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {pillar.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {pillar.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-xs font-medium rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detail image + certifications */}
      <section className="py-24 lg:py-32 bg-card/30 border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-3 relative"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[16/10]">
                <Image
                  src="/images/expertise-cloud-detail.jpg"
                  alt="Infrastructure cloud moderne"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-2"
            >
              <span className="text-sm font-medium tracking-widest uppercase text-teal-400 mb-4 block">
                Pourquoi Future Digit
              </span>
              <h2 className="text-3xl font-bold mb-6">
                Expertise certifiee, resultats mesurables
              </h2>
              <div className="space-y-4">
                {[
                  { title: "Certifies AWS, Azure, GCP", desc: "Nos consultants detiennent les certifications officielles des principaux cloud providers." },
                  { title: "Haute disponibilite", desc: "Architectures concues pour garantir la continuite de service et la resilience." },
                  { title: "Securite renforcee", desc: "Conformite reglementaire, chiffrement et gestion des acces a chaque couche." },
                  { title: "Optimisation des couts", desc: "Analyse et reduction de vos depenses cloud sans compromis sur la performance." },
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={i}
                    variants={fadeUp}
                    className="p-4 rounded-xl bg-background/60 border border-border/50"
                  >
                    <h4 className="text-sm font-semibold text-foreground mb-1">{item.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
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
            <div className="absolute inset-0 bg-gradient-to-br from-teal-950/80 via-background to-background" />
            <div className="relative z-10 px-8 py-16 md:px-16 md:py-20 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                Pret a migrer vers le cloud ?
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Contactez-nous pour une evaluation gratuite de votre infrastructure et
                decouvrez comment le cloud peut transformer votre entreprise.
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
