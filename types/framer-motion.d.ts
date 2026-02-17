/**
 * Augment framer-motion types for React 19 / strict compatibility.
 * - useScroll target accepts RefObject<HTMLDivElement | null>
 * - Motion components accept standard HTML attributes like className
 */
import "framer-motion"
import type { RefObject } from "react"

declare module "framer-motion" {
  export interface MotionProps {
    className?: string
  }
}
