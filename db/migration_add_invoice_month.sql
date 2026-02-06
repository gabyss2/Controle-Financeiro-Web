alter table card_purchases add column if not exists invoice_month date; update card_purchases set invoice_month = date_trunc('month', purchase_date);
