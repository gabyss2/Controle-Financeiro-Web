
export type UserProfile = { id: string; email: string; name?: string };
export type Responsible = "Gabriela" | "Caue" | "Ambos";
export type Category = { id: string; user_id: string; name: string; type: "receita" | "despesa"; color?: string; archived?: boolean };
export type FixedBill = { id: string; user_id: string; name: string; amount: number; due_day: number; category_id?: string | null; active: boolean };
export type Card = { id: string; user_id: string; alias: string; limit_amount?: number | null; closing_day: number; due_day: number; brand?: string | null };
export type CardPurchase = { id: string; user_id: string; card_id: string; description: string; category_id?: string | null; amount: number; purchase_date: string; installments_total: number; installment_number: number; responsible: Responsible; invoice_month?: string };
export type CashFlow = { id: string; user_id: string; type: "receita" | "despesa"; method: "debito_pix" | "outro"; category_id?: string | null; description?: string | null; amount: number; competence_date: string; paid_at?: string | null; responsible: Responsible; receipt_url?: string | null };
export type SavingsMove = { id: string; user_id: string; type: "aporte" | "retirada"; amount: number; date: string; note?: string | null };
export type SavingsGoal = { id: string; user_id: string; name: string; target_amount: number; target_date?: string | null; current_amount: number };
