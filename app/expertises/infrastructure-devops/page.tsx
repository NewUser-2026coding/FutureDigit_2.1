"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Settings,
  GitMerge,
  Monitor,
  Container,
  Shield,
  Activity,
  Server,
  Terminal,
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

const capabilities = [
  {
    icon: Settings,
    title: "CI/CD Automation",
    description:
      "Conception et mise en place de pipelines de deploiement continu automatises pour accelerer la livraison de valeur en toute confiance.",
    tools: ["Jenkins", "GitLab CI", "GitHub Actions", "ArgoCD"],
  },
  {
    icon: Container,
    title: "Containerisation & Orchestration",
    description:
      "Conteneurisation de vos applications et orchestration avancee pour une scalabilite et une portabilite maximales.",
    tools: ["Docker", "Kubernetes", "Helm", "Rancher"],
  },
  {
    icon: Monitor,
    title: "Monitoring & Observabilite",
    description:
      "Surveillance proactive de vos systemes avec des tableaux de bord en temps reel, alerting intelligent et analyse des performances.",
    tools: ["Prometheus", "Grafana", "ELK Stack", "Datadog"],
  },
  {
    icon: GitMerge,
    title: "Infrastructure as Code",
    description:
      "Gestion declarative de votre infrastructure pour assurer reproductibilite, traçabilite et collaboration entre les equipes.",
    tools: ["Terraform", "Ansible", "Pulumi", "CloudFormation"],
  },
  {
    icon: Shield,
    title: "DevSecOps",
    description:
      "Integration de la securite a chaque etape du cycle de vie : scan de vulnerabilites, gestion des secrets et conformite automatisee.",
    tools: ["Vault", "SonarQube", "Trivy", "OWASP"],
  },
  {
    icon: Activity,
    title: "Site Reliability Engineering",
    description:
      "Pratiques SRE pour garantir la fiabilite, la disponibilite et la performance de vos services en production.",
    tools: ["SLI/SLO", "Chaos Engineering", "Incident Mgmt", "Runbooks"],
  },
]

const pipeline = [
  { step: "Plan", icon: Terminal, desc: "Definition de l'architecture et des standards" },
  { step: "Code", icon: GitMerge, desc: "Developpement et revue de code" },
  { step: "Build", icon: Container, desc: "Compilation et containerisation" },
  { step: "Test", icon: Monitor, desc: "Tests automatises et qualite" },
  { step: "Deploy", icon: Server, desc: "Deploiement continu zero downtime" },
  { step: "Operate", icon: Activity, desc: "Monitoring et optimisation" },
]

export default function InfrastructureDevOpsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero - With terminal-style element */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-emerald-950/40 via-background to-background" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-emerald-500" />
                <span className="text-sm font-medium tracking-widest uppercase text-emerald-400">
                  Nos Expertises
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight">
                Infrastructure{" "}
                <span className="text-emerald-400">{"&"} DevOps</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg">
                Automatisez vos deploiements, securisez votre infrastructure et accelerez
                votre cycle de developpement avec nos experts DevOps et SRE.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/#contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full px-5 font-medium border border-border bg-background text-foreground hover:bg-accent gap-2 group"
                  >
                    Auditer mon infrastructure
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Terminal-style decorative element */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="hidden lg:block"
            >
              <div className="rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm overflow-hidden shadow-2xl">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50 bg-card">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/60" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/60" />
                  <span className="text-xs text-muted-foreground ml-2 font-mono">deploy.sh</span>
                </div>
                <div className="p-6 font-mono text-sm leading-relaxed">
                  <p className="text-muted-foreground">
                    <span className="text-emerald-400">$</span> kubectl apply -f deployment.yaml
                  </p>
                  <p className="text-muted-foreground mt-1">
                    <span className="text-muted-foreground/60">{">"}</span> deployment.apps/api configured
                  </p>
                  <p className="text-muted-foreground mt-1">
                    <span className="text-muted-foreground/60">{">"}</span> service/api-svc unchanged
                  </p>
                  <p className="text-muted-foreground mt-3">
                    <span className="text-emerald-400">$</span> terraform plan
                  </p>
                  <p className="text-muted-foreground mt-1">
                    <span className="text-muted-foreground/60">{">"}</span> Plan: 3 to add, 1 to change
                  </p>
                  <p className="text-muted-foreground mt-3">
                    <span className="text-emerald-400">$</span> helm upgrade --install monitoring
                  </p>
                  <p className="text-emerald-400/80 mt-1">
                    <span className="text-muted-foreground/60">{">"}</span> Release "monitoring" upgraded
                  </p>
                  <p className="mt-3">
                    <span className="text-emerald-400 animate-pulse">_</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pipeline flow */}
      <section className="border-y border-border/50 bg-card/30 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
            {pipeline.map((step, i) => (
              <motion.div
                key={step.step}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="flex items-center gap-4 md:flex-col md:text-center md:flex-1"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                  <step.icon className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">{step.step}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{step.desc}</p>
                </div>
                {i < pipeline.length - 1 && (
                  <ArrowRight className="hidden md:block w-4 h-4 text-emerald-500/30 absolute right-0 top-1/2 -translate-y-1/2" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities grid - 2x3 */}
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
            <span className="text-sm font-medium tracking-widest uppercase text-emerald-400 mb-4 block">
              Nos capacites
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Six domaines de competence pour une infrastructure moderne
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              De l'automatisation CI/CD au Site Reliability Engineering, nous couvrons
              l'ensemble du spectre DevOps.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
              >
                <div className="h-full rounded-2xl border border-border/50 bg-card/50 p-7 hover:bg-card/80 transition-all duration-300 group">
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-5 group-hover:bg-emerald-500/20 transition-colors">
                    <cap.icon className="w-5 h-5 text-emerald-400" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{cap.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    {cap.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {cap.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2.5 py-1 text-xs font-medium rounded-md bg-emerald-500/10 border border-emerald-500/15 text-emerald-400/80"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image + why us */}
      <section className="py-24 lg:py-32 bg-card/30 border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-sm font-medium tracking-widest uppercase text-emerald-400 mb-4 block">
                Notre approche
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                DevOps comme culture, pas seulement comme outil
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Nous ne nous contentons pas de deployer des outils DevOps. Nous transformons
                vos pratiques, vos processus et votre culture pour une amelioration continue
                et durable.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "99.9%", label: "Disponibilite ciblee" },
                  { value: "10x", label: "Frequence de deploiement" },
                  { value: "<1h", label: "Temps de recovery" },
                  { value: "24/7", label: "Monitoring continu" },
                ].map((metric, i) => (
                  <motion.div
                    key={metric.label}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={i}
                    variants={fadeUp}
                    className="p-4 rounded-xl bg-background/60 border border-border/50 text-center"
                  >
                    <p className="text-2xl font-bold text-emerald-400">{metric.value}</p>
                    <p className="text-xs text-muted-foreground mt-1">{metric.label}</p>
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
                  src="/images/new_images/devops2.webp"
                  alt="Equipe DevOps en action"
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
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/80 via-background to-background" />
            <div className="relative z-10 px-8 py-16 md:px-16 md:py-20 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                Pret a accelerer vos deploiements ?
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Contactez-nous pour decouvrir comment nos pratiques DevOps peuvent
                transformer votre cycle de developpement et votre infrastructure.
              </p>
              <Link href="/#contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-5 font-medium border border-border bg-background text-foreground hover:bg-accent gap-2 group"
                >
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
