
import { endOfMonth, startOfMonth } from "date-fns";
export type Fortnight = "Q1" | "Q2" | "FULL";
export function getFortnightRange(date: Date, fortnight: Fortnight): { start: Date; end: Date } {
  const monthStart = startOfMonth(date); const monthEnd = endOfMonth(date);
  const y = date.getFullYear(); const m = date.getMonth();
  if (fortnight === "Q1") return { start: new Date(y, m, 1), end: new Date(y, m, 15, 23, 59, 59) };
  if (fortnight === "Q2") return { start: new Date(y, m, 16), end: monthEnd };
  return { start: monthStart, end: monthEnd };
}
export function currency(n: number) { return n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }); }
