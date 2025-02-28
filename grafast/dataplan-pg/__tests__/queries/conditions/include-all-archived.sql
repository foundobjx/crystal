select
  __forums__."name" as "0",
  __forums__."id" as "1",
  to_char(__forums__."archived_at", 'YYYY-MM-DD"T"HH24:MI:SS.USTZH:TZM'::text) as "2"
from app_public.forums as __forums__
where (
  true /* authorization checks */
)
order by __forums__."id" asc
limit 2;

select __messages_result__.*
from (select ids.ordinality - 1 as idx, (ids.value->>0)::"uuid" as "id0", (ids.value->>1)::"timestamptz" as "id1" from json_array_elements($1::json) with ordinality as ids) as __messages_identifiers__,
lateral (
  select
    __messages__."body" as "0",
    __users__."username" as "1",
    __users__."gravatar_url" as "2",
    __messages_identifiers__.idx as "3"
  from app_public.messages as __messages__
  left outer join app_public.users as __users__
  on (
  /* WHERE becoming ON */
    (
      __users__."id" = __messages__."author_id"
    ) and (
      true /* authorization checks */
    )
  )
  where (
    __messages__."forum_id" = __messages_identifiers__."id0"
  )
  order by __messages__."id" asc
  limit 2
) as __messages_result__;
