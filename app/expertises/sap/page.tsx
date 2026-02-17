"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Database,
  TrendingUp,
  Package,
  Users2,
  Wrench,
  CheckCircle2,
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

const modules = [
  {
    icon: Database,
    title: "SAP S/4HANA",
    description: "Migration et implementation S/4HANA, optimisation des processus financiers et logistiques pour une transformation digitale reussie.",
    features: ["Migration ECC vers S/4HANA", "Greenfield / Brownfield", "Optimisation processus"],
    accentBg: "bg-amber-500/10",
    accentBorder: "border-amber-500/20",
    accentText: "text-amber-400",
  },
  {
    icon: TrendingUp,
    title: "SAP Finance (FI/CO)",
    description: "Gestion comptable et controle de gestion avances, reporting et conformite reglementaire pour une visibilite financiere totale.",
    features: ["Comptabilite generale", "Controle de gestion", "Reporting reglementaire"],
    accentBg: "bg-amber-500/10",
    accentBorder: "border-amber-500/20",
    accentText: "text-amber-400",
  },
  {
    icon: Package,
    title: "SAP Supply Chain",
    description: "Gestion des achats, stocks et production. Optimisation complete de votre chaine logistique avec les modules MM, SD et PP.",
    features: ["Gestion des achats (MM)", "Ventes & distribution (SD)", "Production (PP)"],
    accentBg: "bg-amber-500/10",
    accentBorder: "border-amber-500/20",
    accentText: "text-amber-400",
  },
  {
    icon: Users2,
    title: "SAP HR & SuccessFactors",
    description: "Digitalisation des processus RH, talent management et gestion de la paie pour attirer et fideliser vos collaborateurs.",
    features: ["Talent management", "Gestion de la paie", "SuccessFactors"],
    accentBg: "bg-amber-500/10",
    accentBorder: "border-amber-500/20",
    accentText: "text-amber-400",
  },
  {
    icon: Wrench,
    title: "SAP Technical & Basis",
    description: "Administration systemes SAP, developpement ABAP et integration Fiori/UI5 pour moderniser votre experience utilisateur.",
    features: ["Administration SAP", "Developpement ABAP", "Fiori / UI5"],
    accentBg: "bg-amber-500/10",
    accentBorder: "border-amber-500/20",
    accentText: "text-amber-400",
  },
]

const strengths = [
  "Consultants certifies SAP sur l'ensemble des modules",
  "Expertise confirmee en migration S/4HANA",
  "Methodologie eprouvee pour des projets maitrisee",
  "Accompagnement post-projet et formation utilisateurs",
  "Best practices SAP integrees a chaque etape",
  "Support continu et evolution de vos solutions",
]

export default function SAPPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero - Split layout with image */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-950/30 via-background to-background" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20">
                <Database className="w-4 h-4 text-amber-400" />
                <span className="text-sm font-medium text-amber-400">Expertise SAP</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight">
                L'ecosysteme SAP au service de votre{" "}
                <span className="text-amber-400">performance</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Nos consultants SAP certifies couvrent l'ensemble des modules pour vous
                accompagner dans l'implementation, l'integration et l'evolution de vos
                solutions d'entreprise.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <Image
                  src="/images/expertise-sap-hero.jpg"
                  alt="Expertise SAP - Solutions d'entreprise"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute -bottom-5 -left-5 bg-card/90 backdrop-blur-sm border border-amber-500/20 rounded-xl p-4 shadow-2xl"
              >
                <p className="text-2xl font-bold text-amber-400">5+</p>
                <p className="text-xs text-muted-foreground">Modules SAP maitrises</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modules grid - 2+3 layout */}
      <section id="modules" className="py-24 lg:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-sm font-medium tracking-widest uppercase text-amber-400 mb-4 block">
              Modules SAP
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Cinq domaines d'expertise pour couvrir tous vos besoins
            </h2>
          </motion.div>

          {/* Top row: 2 cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {modules.slice(0, 2).map((mod, i) => (
              <motion.div
                key={mod.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
              >
                <div className={`h-full rounded-2xl border ${mod.accentBorder} bg-card/50 p-8 transition-all duration-300 hover:bg-card/80`}>
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-11 h-11 rounded-xl ${mod.accentBg} flex items-center justify-center`}>
                      <mod.icon className={`w-5 h-5 ${mod.accentText}`} />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">{mod.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    {mod.description}
                  </p>
                  <ul className="space-y-2">
                    {mod.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className={`w-4 h-4 ${mod.accentText} shrink-0`} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom row: 3 cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {modules.slice(2).map((mod, i) => (
              <motion.div
                key={mod.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i + 2}
                variants={fadeUp}
              >
                <div className={`h-full rounded-2xl border ${mod.accentBorder} bg-card/50 p-8 transition-all duration-300 hover:bg-card/80`}>
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-11 h-11 rounded-xl ${mod.accentBg} flex items-center justify-center`}>
                      <mod.icon className={`w-5 h-5 ${mod.accentText}`} />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">{mod.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    {mod.description}
                  </p>
                  <ul className="space-y-2">
                    {mod.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className={`w-4 h-4 ${mod.accentText} shrink-0`} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us - Image left, strengths right */}
      <section className="py-24 lg:py-32 bg-card/30 border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <Image
                  src="/images/expertise-sap-detail.jpg"
                  alt="Consulting SAP en entreprise"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute -bottom-5 -right-5 bg-card/90 backdrop-blur-sm border border-amber-500/20 rounded-xl p-4 shadow-2xl"
              >
                <p className="text-2xl font-bold text-amber-400">5+</p>
                <p className="text-xs text-muted-foreground">Modules SAP maitrises</p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-sm font-medium tracking-widest uppercase text-amber-400 mb-4 block">
                Nos atouts
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Pourquoi choisir Future Digit pour SAP ?
              </h2>
              <div className="space-y-3">
                {strengths.map((s, i) => (
                  <motion.div
                    key={s}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={i}
                    variants={fadeUp}
                    className="flex items-start gap-3 p-3 rounded-xl bg-background/60 border border-border/50"
                  >
                    <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground leading-relaxed">{s}</span>
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
            <div className="absolute inset-0 bg-gradient-to-br from-amber-950/60 via-background to-background" />
            <div className="relative z-10 px-8 py-16 md:px-16 md:py-20 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                Pret a optimiser votre environnement SAP ?
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Contactez-nous pour une evaluation de vos besoins SAP et decouvrez
                comment nous pouvons accelerer votre transformation digitale.
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
