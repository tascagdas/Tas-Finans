create or replace function calculate_total (
  range_arg varchar default 'last30days',
  type_arg varchar default null
) returns numeric as $$
declare
  currentStart timestamp;
  currentEnd timestamp;
begin

currentEnd := now();
currentStart := case
when range_arg = 'last24hours' then currentEnd - interval '24 hours'
when range_arg = 'last7days' then currentEnd - interval '7 days'
when range_arg = 'last30days' then currentEnd - interval '30 days'
when range_arg = 'last12months' then currentEnd - interval '12 months'
else currentEnd - interval '30 days'
end;


return (
  select SUM(amount)
  from transactions
  where
    (type = type_arg or type_arg is null)
    and (transaction_date between currentStart and currentEnd)
  );

end;
$$ language plpgsql