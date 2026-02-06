
import { addMonths } from "date-fns";
export function computeFirstInvoiceMonth(purchaseDate: Date, closingDay: number) {
  const d = purchaseDate.getDate();
  const base = new Date(purchaseDate.getFullYear(), purchaseDate.getMonth(), 1);
  if (d < closingDay) return base; return addMonths(base, 1);
}
export function generateInstallmentMonths(firstInvoiceMonth: Date, totalInstallments: number): Date[] {
  return Array.from({ length: totalInstallments }).map((_, i) => addMonths(new Date(firstInvoiceMonth), i));
}
