import Link from "next/link"
import Image from "next/image"
import { MapPin, Mail, Phone, ArrowRight } from "lucide-react"

const footerLinks = {
  modes: {
    title: "Modes d'intervention",
    items: [
      { label: "Conseil", href: "/modes/conseil" },
      { label: "Regie", href: "/modes/regie" },
    ],
  },
  units: {
    title: "Business Units",
    items: [
      { label: "Banque Finance", href: "/business-units/banque-finance" },
      { label: "Ingenierie", href: "/business-units/ingenierie" },
    ],
  },
  expertises: {
    title: "Nos Expertises",
    items: [
      { label: "Software Engineering", href: "/expertises/software-engineering" },
      { label: "Cloud", href: "/expertises/cloud" },
      { label: "Infrastructure & DevOps", href: "/expertises/infrastructure-devops" },
      { label: "SAP", href: "/expertises/sap" },
      { label: "Gestion de Projet", href: "/expertises/gestion-projet" },
    ],
  },
}

const legalLinks = [
  { label: "Mentions legales", href: "/" },
  { label: "Politique de confidentialite", href: "/" },
  { label: "Politique des cookies", href: "/" },
]

export function SiteFooter() {
  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20no%20background-mhVH8nYdjmphhp9EDB2z8bui7jD6ut.png"
                alt="Future Digit Logo"
                width={140}
                height={46}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm leading-relaxed text-muted-foreground max-w-xs">
              Conseil et ingenierie IT au service de la transformation digitale de votre entreprise.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-foreground/60" />
                <span>58, rue Monceau 75008 Paris</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-foreground/60" />
                <Link
                  href="mailto:contact@future-digit.com"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  contact@exemple.com
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-foreground/60" />
                <Link
                  href="tel:+33167074191"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  01 23 45 67 89
                </Link>
              </div>
            </div>
          </div>

          {/* Navigation Columns */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title} className="lg:col-span-2">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground mb-5">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="group flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <span>{item.label}</span>
                      <ArrowRight className="h-3 w-3 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* CTA Column */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground mb-5">
              Contact
            </h4>
            <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
              Un projet en tete ? Parlons-en ensemble.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium transition-colors hover:bg-primary/90 group"
            >
              Demander un devis
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Future Digit. Tous droits reserves.
            </p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {legalLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
