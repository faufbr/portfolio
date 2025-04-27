import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date) {
  return Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric"
  }).format(date);
}

export function readingTime(html: string) {
  const textOnly = html.replace(/<[^>]+>/g, "");
  const wordCount = textOnly.split(/\s+/).length;
  const readingTimeMinutes = ((wordCount / 200) + 1).toFixed();
  return `${readingTimeMinutes} min read`;
}

export function dateRange(startDate: Date | string, endDate?: Date | string): string {
  // Convertir les chaînes de caractères en objets Date si nécessaire
  if (typeof startDate === "string") {
    startDate = new Date(startDate);
  }
  if (endDate && typeof endDate === "string") {
    endDate = new Date(endDate);
  }

  const startMonth = startDate.toLocaleString("default", { month: "short" });
  const startYear = startDate.getFullYear().toString();
  let endMonth = "";
  let endYear = "";

  if (endDate instanceof Date) {
    endMonth = endDate.toLocaleString("default", { month: "short" });
    endYear = endDate.getFullYear().toString();
  }

  return `${startMonth} ${startYear} - ${endMonth} ${endYear}`;
}