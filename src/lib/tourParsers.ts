export function parsePriceValue(price: string): number {
  const match = price.match(/\$([\d,]+)/);
  if (!match) return 0;
  return parseInt(match[1].replace(/,/g, ""), 10);
}

export function parseDurationDays(duration: string): number {
  const lower = duration.toLowerCase().trim();
  if (lower.includes("half")) return 0.5;
  if (lower === "full day" || lower === "fullday") return 1;
  const match = lower.match(/^(\d+)\s*days?/i);
  return match ? parseInt(match[1], 10) : 0;
}

export type DurationBucket = "half-day" | "1-7" | "8-14" | "15+";

export function durationBucket(duration: string): DurationBucket {
  const days = parseDurationDays(duration);
  if (days <= 0.5) return "half-day";
  if (days <= 7)   return "1-7";
  if (days <= 14)  return "8-14";
  return "15+";
}
