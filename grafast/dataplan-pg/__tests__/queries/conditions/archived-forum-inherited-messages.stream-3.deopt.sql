select
  __forums__."name" as "0",
  __forums__."id" as "1",
  to_char(__forums__."archived_at", 'YYYY-MM-DD"T"HH24:MI:SS.USTZH:TZM'::text) as "2"
from app_public.forums as __forums__
where
  (
    true /* authorization checks */
  ) and (
    __forums__.archived_at is not null
  )
order by __forums__."id" asc;

select *
from (
  select
    __messages__."body" as "0",
    __messages__."author_id" as "1",
    row_number() over (
      order by __messages__."id" asc
    ) as "2"
  from app_public.messages as __messages__
  where
    (
      __messages__."forum_id" = $1::"uuid"
    ) and (
      (__messages__.archived_at is null) = ($2::"timestamptz" is null)
    )
  order by __messages__."id" asc
) __stream_wrapped__
order by __stream_wrapped__."2"
limit 1;

begin; /*fake*/

declare __SNAPSHOT_CURSOR_0__ insensitive no scroll cursor without hold for
select *
from (
  select
    __messages__."body" as "0",
    __messages__."author_id" as "1",
    row_number() over (
      order by __messages__."id" asc
    ) as "2"
  from app_public.messages as __messages__
  where
    (
      __messages__."forum_id" = $1::"uuid"
    ) and (
      (__messages__.archived_at is null) = ($2::"timestamptz" is null)
    )
  order by __messages__."id" asc
) __stream_wrapped__
order by __stream_wrapped__."2"
offset 1;

fetch forward 100 from __SNAPSHOT_CURSOR_0__

close __SNAPSHOT_CURSOR_0__

commit; /*fake*/

select
  __users__."username" as "0",
  __users__."gravatar_url" as "1"
from app_public.users as __users__
where
  (
    __users__."id" = $1::"uuid"
  ) and (
    true /* authorization checks */
  );

select __users_result__.*
from (select ids.ordinality - 1 as idx, (ids.value->>0)::"uuid" as "id0" from json_array_elements($1::json) with ordinality as ids) as __users_identifiers__,
lateral (
  select
    __users__."username" as "0",
    __users__."gravatar_url" as "1",
    __users_identifiers__.idx as "2"
  from app_public.users as __users__
  where
    (
      __users__."id" = __users_identifiers__."id0"
    ) and (
      true /* authorization checks */
    )
) as __users_result__;
