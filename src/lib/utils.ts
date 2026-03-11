import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date)
}

export function getRiskColor(level: "high" | "medium" | "low"): string {
  switch (level) {
    case "high":
      return "text-risk-high bg-red-50"
    case "medium":
      return "text-risk-medium bg-amber-50"
    case "low":
      return "text-risk-low bg-green-50"
  }
}

export function getRiskBorderColor(level: "high" | "medium" | "low"): string {
  switch (level) {
    case "high":
      return "border-risk-high"
    case "medium":
      return "border-risk-medium"
    case "low":
      return "border-risk-low"
  }
}
