select "countries"."name", count(*) from "cities"
join "countries" using ("countryId")
group by "countryId";
