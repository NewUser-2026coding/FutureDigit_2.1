"use client"

import Link from "next/link"
import { ChevronDown, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

function NavItem({
  href,
  title,
  description,
}: {
  href: string
  title: string
  description: string
}) {
  return (
    <NavigationMenuLink asChild>
      <a
        href={href}
        className="group flex items-start gap-3 rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-accent"
      >
        <div className="flex-1 space-y-1">
          <div className="text-sm font-medium leading-none text-foreground group-hover:text-accent-foreground">
            {title}
          </div>
          <p className="text-xs leading-snug text-muted-foreground">
            {description}
          </p>
        </div>
        <ChevronRight className="h-4 w-4 mt-0.5 text-muted-foreground opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
      </a>
    </NavigationMenuLink>
  )
}

export function SiteNavigation() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="gap-1">
        <NavigationMenuItem>
          <NavigationMenuTrigger
            asChild
            className="bg-transparent text-foreground/80 hover:bg-accent/50 hover:text-foreground data-[state=open]:bg-accent/50 h-9 px-3 text-sm font-medium"
          >
            <div className={cn(navigationMenuTriggerStyle(), "group")}>
              <Link
                href="/modes/conseil"
                className="inline-flex items-center no-underline text-inherit outline-none"
                onClick={(e) => e.stopPropagation()}
              >
                Conseil
              </Link>
              <ChevronDown className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180" aria-hidden="true" />
            </div>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="p-2 w-[320px]">
              <NavItem
                href="/modes/conseil"
                title="Conseil"
                description="Solutions sur mesure de l'idee au projet"
              />
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger
            asChild
            className="bg-transparent text-foreground/80 hover:bg-accent/50 hover:text-foreground data-[state=open]:bg-accent/50 h-9 px-3 text-sm font-medium"
          >
            <div className={cn(navigationMenuTriggerStyle(), "group")}>
              <Link
                href="/modes/regie"
                className="inline-flex items-center no-underline text-inherit outline-none"
                onClick={(e) => e.stopPropagation()}
              >
                Regie
              </Link>
              <ChevronDown className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180" aria-hidden="true" />
            </div>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="p-2 w-[320px]">
              <NavItem
                href="/modes/regie"
                title="Regie"
                description="Renforcez vos equipes avec nos experts en immersion"
              />
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent text-foreground/80 hover:bg-accent/50 hover:text-foreground data-[state=open]:bg-accent/50 h-9 px-3 text-sm font-medium">
            Business Units
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="p-2 w-[340px]">
              <NavItem
                href="/business-units/banque-finance"
                title="Banque Finance"
                description="Solutions pour le secteur bancaire et financier"
              />
              <NavItem
                href="/business-units/ingenierie"
                title="Ingenierie"
                description="Expertise technique et solutions d'ingenierie"
              />
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent text-foreground/80 hover:bg-accent/50 hover:text-foreground data-[state=open]:bg-accent/50 h-9 px-3 text-sm font-medium">
            Nos Expertises
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid gap-0.5 p-2 w-[480px] lg:grid-cols-2">
              <NavItem
                href="/expertises/software-engineering"
                title="Software Engineering"
                description="Developpement logiciel sur mesure"
              />
              <NavItem
                href="/expertises/cloud"
                title="Cloud"
                description="Solutions cloud et infrastructure"
              />
              <NavItem
                href="/expertises/infrastructure-devops"
                title="Infrastructure & DevOps"
                description="Automatisation et optimisation"
              />
              <NavItem
                href="/expertises/sap"
                title="SAP"
                description="Expertise SAP et integration"
              />
              <NavItem
                href="/expertises/gestion-projet"
                title="Gestion de Projet"
                description="Management et pilotage de projets"
              />
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
