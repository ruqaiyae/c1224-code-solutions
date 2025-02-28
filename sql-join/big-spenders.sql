select "firstName", "lastName", "amount"
  from "customers"
  join "payments" using ("customerID")
  order by "amount" desc
  limit 10;
