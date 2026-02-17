"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Code2,
  Layers,
  Cpu,
  Monitor,
  Server,
  Smartphone,
  Terminal,
  Braces,
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

const domains = [
  {
    icon: Monitor,
    label: "Frontend",
    title: "Single Page Applications",
    description:
      "Conception et realisation d'applications web modernes et reactives avec les frameworks leaders du marche.",
    techs: ["Angular", "React", "Vue.js", "TypeScript", "Next.js"],
    accent: "from-cyan-500/20 to-blue-600/20",
    borderAccent: "border-cyan-500/30",
    iconColor: "text-cyan-400",
  },
  {
    icon: Server,
    label: "Backend",
    title: "API & Microservices",
    description:
      "Realisation d'architectures backend robustes, scalables et securisees pour des performances optimales.",
    techs: ["Java", "Go", "Python", "Node.js", "Spring Boot"],
    accent: "from-blue-500/20 to-indigo-600/20",
    borderAccent: "border-blue-500/30",
    iconColor: "text-blue-400",
  },
  {
    icon: Cpu,
    label: "Embedded",
    title: "Logiciel Embarque",
    description:
      "Developpement de systemes embarques performants et fiables pour l'industrie et l'IoT.",
    techs: ["C", "C++", "RTOS", "ARM", "Linux Embedded"],
    accent: "from-indigo-500/20 to-violet-600/20",
    borderAccent: "border-indigo-500/30",
    iconColor: "text-indigo-400",
  },
]

const profiles = [
  { role: "Architecte / Tech Lead", icon: Layers },
  { role: "Developpeur Front", icon: Monitor },
  { role: "Developpeur Back", icon: Server },
  { role: "Developpeur Full-Stack", icon: Code2 },
  { role: "Developpeur Mobile", icon: Smartphone },
  { role: "DevOps", icon: Terminal },
]

const stats = [
  { value: "45+", label: "Consultants experts" },
  { value: "6+", label: "Technologies maitrisees" },
  { value: "4M", label: "CA en 2024" },
  { value: "100%", label: "Couverture nationale" },
]

export default function SoftwareEngineeringPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero Section - Split layout with image right */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-950/40 via-background to-background" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-cyan-500" />
                <span className="text-sm font-medium tracking-widest uppercase text-cyan-400">
                  Nos Expertises
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight">
                Software
                <br />
                <span className="text-cyan-400">Engineering</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg">
                Du frontend au logiciel embarque, nous concevons et developpons des solutions
                logicielles innovantes couvrant l'ensemble du spectre applicatif.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/#contact">
                  <Button size="lg" className="rounded-full gap-2 group">
                    Discutons de votre projet
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Button>
                </Link>
                <Link href="#domaines">
                  <Button size="lg" variant="outline" className="rounded-full gap-2">
                    Nos domaines
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <Image
                  src="/images/expertise-software-hero.jpg"
                  alt="Software Engineering - Solutions logicielles innovantes"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>
              {/* Floating stat card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-card/90 backdrop-blur-sm border border-border rounded-xl p-4 shadow-2xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                    <Braces className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">6+</p>
                    <p className="text-xs text-muted-foreground">Langages & Frameworks</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-border/50 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className={`py-8 px-6 text-center ${i < 3 ? "border-r border-border/50" : ""}`}
              >
                <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Domains - Bento-style cards */}
      <section id="domaines" className="py-24 lg:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
            className="max-w-2xl mb-16"
          >
            <span className="text-sm font-medium tracking-widest uppercase text-cyan-400 mb-4 block">
              Domaines d'expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Trois piliers pour couvrir tout le spectre applicatif
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Notre equipe maitrise l'ensemble des technologies necessaires pour concevoir,
              developper et deployer vos solutions logicielles.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {domains.map((domain, i) => (
              <motion.div
                key={domain.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="group relative"
              >
                <div
                  className={`relative h-full rounded-2xl border ${domain.borderAccent} bg-gradient-to-b ${domain.accent} p-8 transition-all duration-300 hover:border-opacity-60`}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-11 h-11 rounded-xl bg-background/60 flex items-center justify-center">
                      <domain.icon className={`w-5 h-5 ${domain.iconColor}`} />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      {domain.label}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{domain.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {domain.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {domain.techs.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-background/50 border border-border/50 text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image + Profiles Section */}
      <section className="py-24 lg:py-32 bg-card/30 border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <Image
                  src="/images/expertise-software-detail.jpg"
                  alt="Equipe de developpement logiciel"
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
            >
              <span className="text-sm font-medium tracking-widest uppercase text-cyan-400 mb-4 block">
                Nos profils
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Des experts a chaque niveau
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Notre equipe reunit des profils complementaires pour couvrir l'ensemble
                de vos besoins en developpement logiciel.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {profiles.map((profile, i) => (
                  <motion.div
                    key={profile.role}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={i}
                    variants={fadeUp}
                    className="flex items-center gap-3 p-3 rounded-xl bg-background/60 border border-border/50"
                  >
                    <div className="w-9 h-9 rounded-lg bg-cyan-500/10 flex items-center justify-center shrink-0">
                      <profile.icon className="w-4 h-4 text-cyan-400" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{profile.role}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/80 via-background to-background" />
            <div className="relative z-10 px-8 py-16 md:px-16 md:py-20 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                Pret a transformer vos idees en solutions logicielles ?
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Contactez-nous pour discuter de votre projet et decouvrir comment notre expertise
                en developpement logiciel peut accelerer votre croissance.
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
