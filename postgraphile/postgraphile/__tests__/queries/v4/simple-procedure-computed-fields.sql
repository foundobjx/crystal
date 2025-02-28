select
  __person__."person_full_name" as "0",
  case when (__person__) is not distinct from null then null::text else json_build_array((((__person__)."id"))::text, ((__person__)."person_full_name"), (((__person__)."aliases"))::text, ((__person__)."about"), ((__person__)."email"), case when (((__person__)."site")) is not distinct from null then null::text else json_build_array(((((__person__)."site"))."url"))::text end, (((__person__)."config"))::text, (((__person__)."last_login_from_ip"))::text, (((__person__)."last_login_from_subnet"))::text, (((__person__)."user_mac"))::text, to_char(((__person__)."created_at"), 'YYYY-MM-DD"T"HH24:MI:SS.US'::text))::text end as "1",
  "c"."person_first_name"(__person__) as "2",
  __person__."id"::text as "3",
  array(
    select array[
      __compound_key__."person_id_1"::text,
      __compound_key__."person_id_2"::text
    ]::text[]
    from "c"."compound_key" as __compound_key__
    where (
      __compound_key__."person_id_1" = __person__."id"
    )
    order by __compound_key__."person_id_1" asc, __compound_key__."person_id_2" asc
  )::text as "4",
  array(
    select array[
      __compound_key_2."person_id_1"::text,
      __compound_key_2."person_id_2"::text
    ]::text[]
    from "c"."compound_key" as __compound_key_2
    where (
      __compound_key_2."person_id_2" = __person__."id"
    )
    order by __compound_key_2."person_id_1" asc, __compound_key_2."person_id_2" asc
  )::text as "5",
  array(
    select array[
      __compound_key_3."person_id_1"::text,
      __compound_key_3."person_id_2"::text
    ]::text[]
    from "c"."compound_key" as __compound_key_3
    where (
      __compound_key_3."person_id_1" = __person__."id"
    )
    order by __compound_key_3."person_id_1" asc, __compound_key_3."person_id_2" asc
  )::text as "6",
  array(
    select array[
      __compound_key_4."person_id_1"::text,
      __compound_key_4."person_id_2"::text
    ]::text[]
    from "c"."compound_key" as __compound_key_4
    where (
      __compound_key_4."person_id_2" = __person__."id"
    )
    order by __compound_key_4."person_id_1" asc, __compound_key_4."person_id_2" asc
  )::text as "7"
from "c"."person" as __person__
order by __person__."id" asc;

select __person_friends_result__.*
from (select ids.ordinality - 1 as idx, (ids.value->>0)::"c"."person" as "id0" from json_array_elements($1::json) with ordinality as ids) as __person_friends_identifiers__,
lateral (
  select
    __person_friends__."person_full_name" as "0",
    "c"."person_first_name"(__person_friends__) as "1",
    array(
      select array[
        __person_friends_2."person_full_name",
        "c"."person_first_name"(__person_friends_2)
      ]::text[]
      from "c"."person_friends"(__person_friends__) as __person_friends_2
      limit 1
    )::text as "2",
    __person_friends_identifiers__.idx as "3"
  from "c"."person_friends"(__person_friends_identifiers__."id0") as __person_friends__
) as __person_friends_result__;

select __post_result__.*
from (select ids.ordinality - 1 as idx, (ids.value->>0)::"int4" as "id0" from json_array_elements($1::json) with ordinality as ids) as __post_identifiers__,
lateral (
  select
    __post__."headline" as "0",
    "a"."post_headline_trimmed"(__post__) as "1",
    __post__."author_id"::text as "2",
    array(
      select array[
        to_char(__post_computed_interval_set__.v, 'YYYY_MM_DD_HH24_MI_SS.US'::text)
      ]::text[]
      from "a"."post_computed_interval_set"(__post__) as __post_computed_interval_set__(v)
      limit 1
    )::text as "3",
    array(
      select array[
        to_char(__post_computed_interval_set_2.v, 'YYYY_MM_DD_HH24_MI_SS.US'::text)
      ]::text[]
      from "a"."post_computed_interval_set"(__post__) as __post_computed_interval_set_2(v)
      limit 1
    )::text as "4",
    __post_identifiers__.idx as "5"
  from "a"."post" as __post__
  where (
    __post__."author_id" = __post_identifiers__."id0"
  )
  order by __post__."id" desc
  limit 2
) as __post_result__;

select __post_result__.*
from (select ids.ordinality - 1 as idx, (ids.value->>0)::"int4" as "id0" from json_array_elements($1::json) with ordinality as ids) as __post_identifiers__,
lateral (
  select
    __post__."headline" as "0",
    "a"."post_headline_trimmed"(__post__) as "1",
    __post__."author_id"::text as "2",
    array(
      select array[
        to_char(__post_computed_interval_set__.v, 'YYYY_MM_DD_HH24_MI_SS.US'::text)
      ]::text[]
      from "a"."post_computed_interval_set"(__post__) as __post_computed_interval_set__(v)
      limit 1
    )::text as "3",
    array(
      select array[
        to_char(__post_computed_interval_set_2.v, 'YYYY_MM_DD_HH24_MI_SS.US'::text)
      ]::text[]
      from "a"."post_computed_interval_set"(__post__) as __post_computed_interval_set_2(v)
      limit 1
    )::text as "4",
    __post_identifiers__.idx as "5"
  from "a"."post" as __post__
  where (
    __post__."author_id" = __post_identifiers__."id0"
  )
  order by __post__."id" asc
  limit 2
) as __post_result__;

select __post_result__.*
from (select ids.ordinality - 1 as idx, (ids.value->>0)::"int4" as "id0" from json_array_elements($2::json) with ordinality as ids) as __post_identifiers__,
lateral (
  select
    __post__."headline" as "0",
    "a"."post_headline_trimmed"(__post__) as "1",
    __post__."author_id"::text as "2",
    array(
      select array[
        to_char(__post_computed_interval_set__.v, 'YYYY_MM_DD_HH24_MI_SS.US'::text)
      ]::text[]
      from "a"."post_computed_interval_set"(__post__) as __post_computed_interval_set__(v)
      limit 1
    )::text as "3",
    array(
      select array[
        to_char(__post_computed_interval_set_2.v, 'YYYY_MM_DD_HH24_MI_SS.US'::text)
      ]::text[]
      from "a"."post_computed_interval_set"(__post__) as __post_computed_interval_set_2(v)
      limit 1
    )::text as "4",
    __post_identifiers__.idx as "5"
  from "a"."post" as __post__
  where
    (
      __post__."author_id" = __post_identifiers__."id0"
    ) and (
      __post__."headline" = $1::"text"
    )
  order by __post__."id" asc
) as __post_result__;

select
  __person__."id"::text as "0",
  __person__."person_full_name" as "1",
  array(
    select array[
      __compound_key__."person_id_1"::text,
      __compound_key__."person_id_2"::text
    ]::text[]
    from "c"."compound_key" as __compound_key__
    where (
      __compound_key__."person_id_1" = __person__."id"
    )
    order by __compound_key__."person_id_1" asc, __compound_key__."person_id_2" asc
  )::text as "2",
  array(
    select array[
      __compound_key_2."person_id_1"::text,
      __compound_key_2."person_id_2"::text
    ]::text[]
    from "c"."compound_key" as __compound_key_2
    where (
      __compound_key_2."person_id_2" = __person__."id"
    )
    order by __compound_key_2."person_id_1" asc, __compound_key_2."person_id_2" asc
  )::text as "3",
  array(
    select array[
      __compound_key_3."person_id_1"::text,
      __compound_key_3."person_id_2"::text
    ]::text[]
    from "c"."compound_key" as __compound_key_3
    where (
      __compound_key_3."person_id_1" = __person__."id"
    )
    order by __compound_key_3."person_id_1" asc, __compound_key_3."person_id_2" asc
  )::text as "4",
  array(
    select array[
      __compound_key_4."person_id_1"::text,
      __compound_key_4."person_id_2"::text
    ]::text[]
    from "c"."compound_key" as __compound_key_4
    where (
      __compound_key_4."person_id_2" = __person__."id"
    )
    order by __compound_key_4."person_id_1" asc, __compound_key_4."person_id_2" asc
  )::text as "5"
from "c"."person" as __person__
order by __person__."id" asc;