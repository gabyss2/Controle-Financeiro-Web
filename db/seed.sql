
insert into categories (user_id, name, type, color)
select auth.uid(), x.name, x.type, x.color
from (values
  ('Moradia','despesa','#8e9aaf'),('Mercado','despesa','#f28482'),('Transporte','despesa','#84a59d'),('Saúde','despesa','#f6bd60'),('Lazer','despesa','#bdb2ff'),('Assinaturas','despesa','#ffadad'),('Educação','despesa','#ffd6a5'),('Impostos/Taxas','despesa','#cdb4db'),('Outros','despesa','#9bf6ff'),('Salário 15','receita','#90be6d'),('Salário 30','receita','#43aa8b'),('Extras/Freelas','receita','#577590')
) as x(name,type,color);
insert into cards (user_id, alias, closing_day, due_day) values (auth.uid(),'Cartão 1',5,12),(auth.uid(),'Cartão 2',10,17),(auth.uid(),'Cartão 3',15,22),(auth.uid(),'Cartão 4',20,27),(auth.uid(),'Cartão 5',25,2);
