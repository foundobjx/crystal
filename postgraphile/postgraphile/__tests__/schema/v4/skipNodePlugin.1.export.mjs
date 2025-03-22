import { PgDeleteSingleStep, PgExecutor, PgResource, PgSelectSingleStep, PgSelectStep, TYPES, assertPgClassSingleStep, domainOfCodec, enumCodec, listOfCodec, makeRegistry, pgClassExpression, pgDeleteSingle, pgFromExpression, pgInsertSingle, pgSelectFromRecord, pgSelectFromRecords, pgSelectSingleFromRecord, pgUpdateSingle, rangeOfCodec, recordCodec, sqlFromArgDigests, sqlValueWithCodec } from "@dataplan/pg";
import { ConnectionStep, EdgeStep, ObjectStep, __ValueStep, assertEdgeCapableStep, assertExecutableStep, assertPageInfoCapableStep, bakedInput, bakedInputRuntime, connection, constant, context, createObjectAndApplyChildren, first, makeGrafastSchema, object, rootValue, stepAMayDependOnStepB } from "grafast";
import { GraphQLError, GraphQLInt, GraphQLString, Kind, valueFromASTUntyped } from "graphql";
import { sql } from "pg-sql2";
const executor = new PgExecutor({
  name: "main",
  context() {
    const ctx = context();
    return object({
      pgSettings: "pgSettings" != null ? ctx.get("pgSettings") : constant(null),
      withPgClient: ctx.get("withPgClient")
    });
  }
});
const registryConfig_pgCodecs_FuncOutOutRecord_FuncOutOutRecord = recordCodec({
  name: "FuncOutOutRecord",
  identifier: sql`ANONYMOUS_TYPE_DO_NOT_REFERENCE`,
  attributes: {
    __proto__: null,
    first_out: {
      notNull: false,
      codec: TYPES.int,
      extensions: {
        argIndex: 0,
        argName: "first_out"
      }
    },
    second_out: {
      notNull: false,
      codec: TYPES.text,
      extensions: {
        argIndex: 1,
        argName: "second_out"
      }
    }
  },
  description: undefined,
  extensions: {
    /* `The return type of our \`${name}\` ${
      pgProc.provolatile === "v" ? "mutation" : "query"
    }.`, */
  },
  executor,
  isAnonymous: true
});
const registryConfig_pgCodecs_FuncOutOutSetofRecord_FuncOutOutSetofRecord = recordCodec({
  name: "FuncOutOutSetofRecord",
  identifier: sql`ANONYMOUS_TYPE_DO_NOT_REFERENCE`,
  attributes: {
    __proto__: null,
    o1: {
      notNull: false,
      codec: TYPES.int,
      extensions: {
        argIndex: 0,
        argName: "o1"
      }
    },
    o2: {
      notNull: false,
      codec: TYPES.text,
      extensions: {
        argIndex: 1,
        argName: "o2"
      }
    }
  },
  description: undefined,
  extensions: {
    /* `The return type of our \`${name}\` ${
      pgProc.provolatile === "v" ? "mutation" : "query"
    }.`, */
  },
  executor,
  isAnonymous: true
});
const registryConfig_pgCodecs_FuncOutOutUnnamedRecord_FuncOutOutUnnamedRecord = recordCodec({
  name: "FuncOutOutUnnamedRecord",
  identifier: sql`ANONYMOUS_TYPE_DO_NOT_REFERENCE`,
  attributes: {
    __proto__: null,
    column1: {
      notNull: false,
      codec: TYPES.int,
      extensions: {
        argIndex: 0,
        argName: undefined
      }
    },
    column2: {
      notNull: false,
      codec: TYPES.text,
      extensions: {
        argIndex: 1,
        argName: undefined
      }
    }
  },
  description: undefined,
  extensions: {
    /* `The return type of our \`${name}\` ${
      pgProc.provolatile === "v" ? "mutation" : "query"
    }.`, */
  },
  executor,
  isAnonymous: true
});
const registryConfig_pgCodecs_MutationOutOutRecord_MutationOutOutRecord = recordCodec({
  name: "MutationOutOutRecord",
  identifier: sql`ANONYMOUS_TYPE_DO_NOT_REFERENCE`,
  attributes: {
    __proto__: null,
    first_out: {
      notNull: false,
      codec: TYPES.int,
      extensions: {
        argIndex: 0,
        argName: "first_out"
      }
    },
    second_out: {
      notNull: false,
      codec: TYPES.text,
      extensions: {
        argIndex: 1,
        argName: "second_out"
      }
    }
  },
  description: undefined,
  extensions: {
    /* `The return type of our \`${name}\` ${
      pgProc.provolatile === "v" ? "mutation" : "query"
    }.`, */
  },
  executor,
  isAnonymous: true
});
const registryConfig_pgCodecs_MutationOutOutSetofRecord_MutationOutOutSetofRecord = recordCodec({
  name: "MutationOutOutSetofRecord",
  identifier: sql`ANONYMOUS_TYPE_DO_NOT_REFERENCE`,
  attributes: {
    __proto__: null,
    o1: {
      notNull: false,
      codec: TYPES.int,
      extensions: {
        argIndex: 0,
        argName: "o1"
      }
    },
    o2: {
      notNull: false,
      codec: TYPES.text,
      extensions: {
        argIndex: 1,
        argName: "o2"
      }
    }
  },
  description: undefined,
  extensions: {
    /* `The return type of our \`${name}\` ${
      pgProc.provolatile === "v" ? "mutation" : "query"
    }.`, */
  },
  executor,
  isAnonymous: true
});
const registryConfig_pgCodecs_MutationOutOutUnnamedRecord_MutationOutOutUnnamedRecord = recordCodec({
  name: "MutationOutOutUnnamedRecord",
  identifier: sql`ANONYMOUS_TYPE_DO_NOT_REFERENCE`,
  attributes: {
    __proto__: null,
    column1: {
      notNull: false,
      codec: TYPES.int,
      extensions: {
        argIndex: 0,
        argName: undefined
      }
    },
    column2: {
      notNull: false,
      codec: TYPES.text,
      extensions: {
        argIndex: 1,
        argName: undefined
      }
    }
  },
  description: undefined,
  extensions: {
    /* `The return type of our \`${name}\` ${
      pgProc.provolatile === "v" ? "mutation" : "query"
    }.`, */
  },
  executor,
  isAnonymous: true
});
const registryConfig_pgCodecs_SearchTestSummariesRecord_SearchTestSummariesRecord = recordCodec({
  name: "SearchTestSummariesRecord",
  identifier: sql`ANONYMOUS_TYPE_DO_NOT_REFERENCE`,
  attributes: {
    __proto__: null,
    id: {
      notNull: false,
      codec: TYPES.int,
      extensions: {
        argIndex: 0,
        argName: "id"
      }
    },
    total_duration: {
      notNull: false,
      codec: TYPES.interval,
      extensions: {
        argIndex: 1,
        argName: "total_duration"
      }
    }
  },
  description: undefined,
  extensions: {
    /* `The return type of our \`${name}\` ${
      pgProc.provolatile === "v" ? "mutation" : "query"
    }.`, */
  },
  executor,
  isAnonymous: true
});
const registryConfig_pgCodecs_FuncOutUnnamedOutOutUnnamedRecord_FuncOutUnnamedOutOutUnnamedRecord = recordCodec({
  name: "FuncOutUnnamedOutOutUnnamedRecord",
  identifier: sql`ANONYMOUS_TYPE_DO_NOT_REFERENCE`,
  attributes: {
    __proto__: null,
    column1: {
      notNull: false,
      codec: TYPES.int,
      extensions: {
        argIndex: 0,
        argName: ""
      }
    },
    o2: {
      notNull: false,
      codec: TYPES.text,
      extensions: {
        argIndex: 1,
        argName: "o2"
      }
    },
    column3: {
      notNull: false,
      codec: TYPES.int,
      extensions: {
        argIndex: 2,
        argName: ""
      }
    }
  },
  description: undefined,
  extensions: {
    /* `The return type of our \`${name}\` ${
      pgProc.provolatile === "v" ? "mutation" : "query"
    }.`, */
  },
  executor,
  isAnonymous: true
});
const registryConfig_pgCodecs_MutationOutUnnamedOutOutUnnamedRecord_MutationOutUnnamedOutOutUnnamedRecord = recordCodec({
  name: "MutationOutUnnamedOutOutUnnamedRecord",
  identifier: sql`ANONYMOUS_TYPE_DO_NOT_REFERENCE`,
  attributes: {
    __proto__: null,
    column1: {
      notNull: false,
      codec: TYPES.int,
      extensions: {
        argIndex: 0,
        argName: ""
      }
    },
    o2: {
      notNull: false,
      codec: TYPES.text,
      extensions: {
        argIndex: 1,
        argName: "o2"
      }
    },
    column3: {
      notNull: false,
      codec: TYPES.int,
      extensions: {
        argIndex: 2,
        argName: ""
      }
    }
  },
  description: undefined,
  extensions: {
    /* `The return type of our \`${name}\` ${
      pgProc.provolatile === "v" ? "mutation" : "query"
    }.`, */
  },
  executor,
  isAnonymous: true
});
const registryConfig_pgCodecs_MutationReturnsTableMultiColRecord_MutationReturnsTableMultiColRecord = recordCodec({
  name: "MutationReturnsTableMultiColRecord",
  identifier: sql`ANONYMOUS_TYPE_DO_NOT_REFERENCE`,
  attributes: {
    __proto__: null,
    col1: {
      notNull: false,
      codec: TYPES.int,
      extensions: {
        argIndex: 1,
        argName: "col1"
      }
    },
    col2: {
      notNull: false,
      codec: TYPES.text,
      extensions: {
        argIndex: 2,
        argName: "col2"
      }
    }
  },
  description: undefined,
  extensions: {
    /* `The return type of our \`${name}\` ${
      pgProc.provolatile === "v" ? "mutation" : "query"
    }.`, */
  },
  executor,
  isAnonymous: true
});
const registryConfig_pgCodecs_FuncReturnsTableMultiColRecord_FuncReturnsTableMultiColRecord = recordCodec({
  name: "FuncReturnsTableMultiColRecord",
  identifier: sql`ANONYMOUS_TYPE_DO_NOT_REFERENCE`,
  attributes: {
    __proto__: null,
    col1: {
      notNull: false,
      codec: TYPES.int,
      extensions: {
        argIndex: 3,
        argName: "col1"
      }
    },
    col2: {
      notNull: false,
      codec: TYPES.text,
      extensions: {
        argIndex: 4,
        argName: "col2"
      }
    }
  },
  description: undefined,
  extensions: {
    /* `The return type of our \`${name}\` ${
      pgProc.provolatile === "v" ? "mutation" : "query"
    }.`, */
  },
  executor,
  isAnonymous: true
});
const guidCodec = domainOfCodec(TYPES.varchar, "guid", sql.identifier("b", "guid"), {
  description: undefined,
  extensions: {
    pg: {
      serviceName: "main",
      schemaName: "b",
      name: "guid"
    },
    tags: {
      __proto__: null
    }
  },
  notNull: false
});
const intervalArrayCodec = listOfCodec(TYPES.interval, {
  extensions: {
    pg: {
      serviceName: "main",
      schemaName: "pg_catalog",
      name: "_interval"
    },
    tags: {
      __proto__: null
    }
  },
  typeDelim: ",",
  description: undefined,
  name: "intervalArray"
});
const textArrayCodec = listOfCodec(TYPES.text, {
  extensions: {
    pg: {
      serviceName: "main",
      schemaName: "pg_catalog",
      name: "_text"
    },
    tags: {
      __proto__: null
    }
  },
  typeDelim: ",",
  description: undefined,
  name: "textArray"
});
const nonUpdatableViewIdentifier = sql.identifier("a", "non_updatable_view");
const nonUpdatableViewCodec = recordCodec({
  name: "nonUpdatableView",
  identifier: nonUpdatableViewIdentifier,
  attributes: {
    __proto__: null,
    "?column?": {
      description: undefined,
      codec: TYPES.int,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    }
  },
  description: undefined,
  extensions: {
    isTableLike: true,
    pg: {
      serviceName: "main",
      schemaName: "a",
      name: "non_updatable_view"
    },
    tags: {
      __proto__: null
    }
  },
  executor: executor
});
const inputsIdentifier = sql.identifier("a", "inputs");
const inputsCodec = recordCodec({
  name: "inputs",
  identifier: inputsIdentifier,
  attributes: {
    __proto__: null,
    id: {
      description: undefined,
      codec: TYPES.int,
      notNull: true,
      hasDefault: true,
      extensions: {
        tags: {}
      }
    }
  },
  description: "Should output as Input",
  extensions: {
    isTableLike: true,
    pg: {
      serviceName: "main",
      schemaName: "a",
      name: "inputs"
    },
    tags: {
      __proto__: null
    }
  },
  executor: executor
});
const patchsIdentifier = sql.identifier("a", "patchs");
const patchsCodec = recordCodec({
  name: "patchs",
  identifier: patchsIdentifier,
  attributes: {
    __proto__: null,
    id: {
      description: undefined,
      codec: TYPES.int,
      notNull: true,
      hasDefault: true,
      extensions: {
        tags: {}
      }
    }
  },
  description: "Should output as Patch",
  extensions: {
    isTableLike: true,
    pg: {
      serviceName: "main",
      schemaName: "a",
      name: "patchs"
    },
    tags: {
      __proto__: null
    }
  },
  executor: executor
});
const reservedIdentifier = sql.identifier("a", "reserved");
const reservedCodec = recordCodec({
  name: "reserved",
  identifier: reservedIdentifier,
  attributes: {
    __proto__: null,
    id: {
      description: undefined,
      codec: TYPES.int,
      notNull: true,
      hasDefault: true,
      extensions: {
        tags: {}
      }
    }
  },
  description: undefined,
  extensions: {
    isTableLike: true,
    pg: {
      serviceName: "main",
      schemaName: "a",
      name: "reserved"
    },
    tags: {
      __proto__: null
    }
  },
  executor: executor
});
const reservedPatchsIdentifier = sql.identifier("a", "reservedPatchs");
const reservedPatchsCodec = recordCodec({
  name: "reservedPatchs",
  identifier: reservedPatchsIdentifier,
  attributes: {
    __proto__: null,
    id: {
      description: undefined,
      codec: TYPES.int,
      notNull: true,
      hasDefault: true,
      extensions: {
        tags: {}
      }
    }
  },
  description: "`reservedPatchs` table should get renamed to ReservedPatchRecord to prevent clashes with ReservedPatch from `reserved` table",
  extensions: {
    isTableLike: true,
    pg: {
      serviceName: "main",
      schemaName: "a",
      name: "reservedPatchs"
    },
    tags: {
      __proto__: null
    }
  },
  executor: executor
});
const reservedInputIdentifier = sql.identifier("a", "reserved_input");
const reservedInputCodec = recordCodec({
  name: "reservedInput",
  identifier: reservedInputIdentifier,
  attributes: {
    __proto__: null,
    id: {
      description: undefined,
      codec: TYPES.int,
      notNull: true,
      hasDefault: true,
      extensions: {
        tags: {}
      }
    }
  },
  description: "`reserved_input` table should get renamed to ReservedInputRecord to prevent clashes with ReservedInput from `reserved` table",
  extensions: {
    isTableLike: true,
    pg: {
      serviceName: "main",
      schemaName: "a",
      name: "reserved_input"
    },
    tags: {
      __proto__: null
    }
  },
  executor: executor
});
const defaultValueIdentifier = sql.identifier("a", "default_value");
const defaultValueCodec = recordCodec({
  name: "defaultValue",
  identifier: defaultValueIdentifier,
  attributes: {
    __proto__: null,
    id: {
      description: undefined,
      codec: TYPES.int,
      notNull: true,
      hasDefault: true,
      extensions: {
        tags: {}
      }
    },
    null_value: {
      description: undefined,
      codec: TYPES.text,
      notNull: false,
      hasDefault: true,
      extensions: {
        tags: {}
      }
    }
  },
  description: undefined,
  extensions: {
    isTableLike: true,
    pg: {
      serviceName: "main",
      schemaName: "a",
      name: "default_value"
    },
    tags: {
      __proto__: null
    }
  },
  executor: executor
});
const foreignKeyIdentifier = sql.identifier("a", "foreign_key");
const foreignKeyCodec = recordCodec({
  name: "foreignKey",
  identifier: foreignKeyIdentifier,
  attributes: {
    __proto__: null,
    person_id: {
      description: undefined,
      codec: TYPES.int,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    compound_key_1: {
      description: undefined,
      codec: TYPES.int,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    compound_key_2: {
      description: undefined,
      codec: TYPES.int,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    }
  },
  description: undefined,
  extensions: {
    isTableLike: true,
    pg: {
      serviceName: "main",
      schemaName: "a",
      name: "foreign_key"
    },
    tags: {
      __proto__: null
    }
  },
  executor: executor
});
const noPrimaryKeyIdentifier = sql.identifier("a", "no_primary_key");
const noPrimaryKeyCodec = recordCodec({
  name: "noPrimaryKey",
  identifier: noPrimaryKeyIdentifier,
  attributes: {
    __proto__: null,
    id: {
      description: undefined,
      codec: TYPES.int,
      notNull: true,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    str: {
      description: undefined,
      codec: TYPES.text,
      notNull: true,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    }
  },
  description: undefined,
  extensions: {
    isTableLike: true,
    pg: {
      serviceName: "main",
      schemaName: "a",
      name: "no_primary_key"
    },
    tags: {
      __proto__: null
    }
  },
  executor: executor
});
const testviewIdentifier = sql.identifier("a", "testview");
const testviewCodec = recordCodec({
  name: "testview",
  identifier: testviewIdentifier,
  attributes: {
    __proto__: null,
    testviewid: {
      description: undefined,
      codec: TYPES.int,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    col1: {
      description: undefined,
      codec: TYPES.int,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    col2: {
      description: undefined,
      codec: TYPES.int,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    }
  },
  description: undefined,
  extensions: {
    isTableLike: true,
    pg: {
      serviceName: "main",
      schemaName: "a",
      name: "testview"
    },
    tags: {
      __proto__: null
    }
  },
  executor: executor
});
const uniqueForeignKeyIdentifier = sql.identifier("a", "unique_foreign_key");
const spec_uniqueForeignKey = {
  name: "uniqueForeignKey",
  identifier: uniqueForeignKeyIdentifier,
  attributes: {
    __proto__: null,
    compound_key_1: {
      description: undefined,
      codec: TYPES.int,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    compound_key_2: {
      description: undefined,
      codec: TYPES.int,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    }
  },
  description: undefined,
  extensions: {
    isTableLike: true,
    pg: {
      serviceName: "main",
      schemaName: "a",
      name: "unique_foreign_key"
    },
    tags: {
      __proto__: null,
      omit: "create,update,delete,all,order,filter",
      behavior: ["-insert -update -delete -query:resource:list -query:resource:connection -order -orderBy -filter -filterBy"]
    }
  },
  executor: executor
};
const uniqueForeignKeyCodec = recordCodec(spec_uniqueForeignKey);
const myTableIdentifier = sql.identifier("c", "my_table");
const myTableCodec = recordCodec({
  name: "myTable",
  identifier: myTableIdentifier,
  attributes: {
    __proto__: null,
    id: {
      description: undefined,
      codec: TYPES.int,
      notNull: true,
      hasDefault: true,
      extensions: {
        tags: {}
      }
    },
    json_data: {
      description: undefined,
      codec: TYPES.jsonb,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    }
  },
  description: undefined,
  extensions: {
    isTableLike: true,
    pg: {
      serviceName: "main",
      schemaName: "c",
      name: "my_table"
    },
    tags: {
      __proto__: null
    }
  },
  executor: executor
});
const personSecretIdentifier = sql.identifier("c", "person_secret");
const personSecretCodec = recordCodec({
  name: "personSecret",
  identifier: personSecretIdentifier,
  attributes: {
    __proto__: null,
    person_id: {
      description: undefined,
      codec: TYPES.int,
      notNull: true,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    sekrit: {
      description: "A secret held by the associated Person",
      codec: TYPES.text,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {
          name: "secret"
        }
      }
    }
  },
  description: "Tracks the person's secret",
  extensions: {
    isTableLike: true,
    pg: {
      serviceName: "main",
      schemaName: "c",
      name: "person_secret"
    },
    tags: {
      __proto__: null,
      deprecated: "This is deprecated (comment on table c.person_secret)."
    }
  },
  executor: executor
});
const unloggedIdentifier = sql.identifier("c", "unlogged");
const unloggedCodec = recordCodec({
  name: "unlogged",
  identifier: unloggedIdentifier,
  attributes: {
    __proto__: null,
    id: {
      description: undefined,
      codec: TYPES.int,
      notNull: true,
      hasDefault: true,
      extensions: {
        tags: {}
      }
    },
    nonsense: {
      description: undefined,
      codec: TYPES.text,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    }
  },
  description: undefined,
  extensions: {
    isTableLike: true,
    pg: {
      serviceName: "main",
      schemaName: "c",
      name: "unlogged",
      persistence: "u"
    },
    tags: {
      __proto__: null
    }
  },
  executor: executor
});
const viewTableIdentifier = sql.identifier("a", "view_table");
const viewTableCodec = recordCodec({
  name: "viewTable",
  identifier: viewTableIdentifier,
  attributes: {
    __proto__: null,
    id: {
      description: undefined,
      codec: TYPES.int,
      notNull: true,
      hasDefault: true,
      extensions: {
        tags: {}
      }
    },
    col1: {
      description: undefined,
      codec: TYPES.int,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    col2: {
      description: undefined,
      codec: TYPES.int,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    }
  },
  description: undefined,
  extensions: {
    isTableLike: true,
    pg: {
      serviceName: "main",
      schemaName: "a",
      name: "view_table"
    },
    tags: {
      __proto__: null
    }
  },
  executor: executor
});
const compoundKeyIdentifier = sql.identifier("c", "compound_key");
const compoundKeyCodec = recordCodec({
  name: "compoundKey",
  identifier: compoundKeyIdentifier,
  attributes: {
    __proto__: null,
    person_id_2: {
      description: undefined,
      codec: TYPES.int,
      notNull: true,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    person_id_1: {
      description: undefined,
      codec: TYPES.int,
      notNull: true,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    extra: {
      description: undefined,
      codec: TYPES.boolean,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    }
  },
  description: undefined,
  extensions: {
    isTableLike: true,
    pg: {
      serviceName: "main",
      schemaName: "c",
      name: "compound_key"
    },
    tags: {
      __proto__: null
    }
  },
  executor: executor
});
const similarTable1Identifier = sql.identifier("a", "similar_table_1");
const similarTable1Codec = recordCodec({
  name: "similarTable1",
  identifier: similarTable1Identifier,
  attributes: {
    __proto__: null,
    id: {
      description: undefined,
      codec: TYPES.int,
      notNull: true,
      hasDefault: true,
      extensions: {
        tags: {}
      }
    },
    col1: {
      description: undefined,
      codec: TYPES.int,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    col2: {
      description: undefined,
      codec: TYPES.int,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    col3: {
      description: undefined,
      codec: TYPES.int,
      notNull: true,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    }
  },
  description: undefined,
  extensions: {
    isTableLike: true,
    pg: {
      serviceName: "main",
      schemaName: "a",
      name: "similar_table_1"
    },
    tags: {
      __proto__: null
    }
  },
  executor: executor
});
const similarTable2Identifier = sql.identifier("a", "similar_table_2");
const similarTable2Codec = recordCodec({
  name: "similarTable2",
  identifier: similarTable2Identifier,
  attributes: {
    __proto__: null,
    id: {
      description: undefined,
      codec: TYPES.int,
      notNull: true,
      hasDefault: true,
      extensions: {
        tags: {}
      }
    },
    col3: {
      description: undefined,
      codec: TYPES.int,
      notNull: true,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    col4: {
      description: undefined,
      codec: TYPES.int,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    col5: {
      description: undefined,
      codec: TYPES.int,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    }
  },
  description: undefined,
  extensions: {
    isTableLike: true,
    pg: {
      serviceName: "main",
      schemaName: "a",
      name: "similar_table_2"
    },
    tags: {
      __proto__: null
    }
  },
  executor: executor
});
const updatableViewIdentifier = sql.identifier("b", "updatable_view");
const updatableViewCodec = recordCodec({
  name: "updatableView",
  identifier: updatableViewIdentifier,
  attributes: {
    __proto__: null,
    x: {
      description: undefined,
      codec: TYPES.int,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    name: {
      description: undefined,
      codec: TYPES.varchar,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    description: {
      description: undefined,
      codec: TYPES.text,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    constant: {
      description: "This is constantly 2",
      codec: TYPES.int,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    }
  },
  description: "YOYOYO!!",
  extensions: {
    isTableLike: true,
    pg: {
      serviceName: "main",
      schemaName: "b",
      name: "updatable_view"
    },
    tags: {
      __proto__: null,
      uniqueKey: "x",
      unique: "x|@behavior -single -update -delete"
    }
  },
  executor: executor
});
const nullTestRecordIdentifier = sql.identifier("c", "null_test_record");
const nullTestRecordCodec = recordCodec({
  name: "nullTestRecord",
  identifier: nullTestRecordIdentifier,
  attributes: {
    __proto__: null,
    id: {
      description: undefined,
      codec: TYPES.int,
      notNull: true,
      hasDefault: true,
      extensions: {
        tags: {}
      }
    },
    nullable_text: {
      description: undefined,
      codec: TYPES.text,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    nullable_int: {
      description: undefined,
      codec: TYPES.int,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    non_null_text: {
      description: undefined,
      codec: TYPES.text,
      notNull: true,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    }
  },
  description: undefined,
  extensions: {
    isTableLike: true,
    pg: {
      serviceName: "main",
      schemaName: "c",
      name: "null_test_record"
    },
    tags: {
      __proto__: null
    }
  },
  executor: executor
});
const uuidArrayCodec = listOfCodec(TYPES.uuid, {
  extensions: {
    pg: {
      serviceName: "main",
      schemaName: "pg_catalog",
      name: "_uuid"
    },
    tags: {
      __proto__: null
    }
  },
  typeDelim: ",",
  description: undefined,
  name: "uuidArray"
});
const edgeCaseIdentifier = sql.identifier("c", "edge_case");
const edgeCaseCodec = recordCodec({
  name: "edgeCase",
  identifier: edgeCaseIdentifier,
  attributes: {
    __proto__: null,
    not_null_has_default: {
      description: undefined,
      codec: TYPES.boolean,
      notNull: true,
      hasDefault: true,
      extensions: {
        tags: {}
      }
    },
    wont_cast_easy: {
      description: undefined,
      codec: TYPES.int2,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    row_id: {
      description: undefined,
      codec: TYPES.int,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    }
  },
  description: undefined,
  extensions: {
    isTableLike: true,
    pg: {
      serviceName: "main",
      schemaName: "c",
      name: "edge_case"
    },
    tags: {
      __proto__: null
    }
  },
  executor: executor
});
const leftArmIdentifier = sql.identifier("c", "left_arm");
const leftArmCodec = recordCodec({
  name: "leftArm",
  identifier: leftArmIdentifier,
  attributes: {
    __proto__: null,
    id: {
      description: undefined,
      codec: TYPES.int,
      notNull: true,
      hasDefault: true,
      extensions: {
        tags: {}
      }
    },
    person_id: {
      description: undefined,
      codec: TYPES.int,
      notNull: false,
      hasDefault: true,
      extensions: {
        tags: {}
      }
    },
    length_in_metres: {
      description: undefined,
      codec: TYPES.float,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    mood: {
      description: undefined,
      codec: TYPES.text,
      notNull: true,
      hasDefault: true,
      extensions: {
        tags: {}
      }
    }
  },
  description: "Tracks metadata about the left arms of various people",
  extensions: {
    isTableLike: true,
    pg: {
      serviceName: "main",
      schemaName: "c",
      name: "left_arm"
    },
    tags: {
      __proto__: null
    }
  },
  executor: executor
});
const jwtTokenIdentifier = sql.identifier("b", "jwt_token");
const jwtTokenCodec = recordCodec({
  name: "jwtToken",
  identifier: jwtTokenIdentifier,
  attributes: {
    __proto__: null,
    role: {
      description: undefined,
      codec: TYPES.text,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    exp: {
      description: undefined,
      codec: TYPES.bigint,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    a: {
      description: undefined,
      codec: TYPES.int,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    b: {
      description: undefined,
      codec: TYPES.numeric,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    c: {
      description: undefined,
      codec: TYPES.bigint,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    }
  },
  description: undefined,
  extensions: {
    isTableLike: false,
    pg: {
      serviceName: "main",
      schemaName: "b",
      name: "jwt_token"
    },
    tags: {
      __proto__: null
    }
  },
  executor: executor
});
const issue756Identifier = sql.identifier("c", "issue756");
const notNullTimestampCodec = domainOfCodec(TYPES.timestamptz, "notNullTimestamp", sql.identifier("c", "not_null_timestamp"), {
  description: undefined,
  extensions: {
    pg: {
      serviceName: "main",
      schemaName: "c",
      name: "not_null_timestamp"
    },
    tags: {
      __proto__: null
    }
  },
  notNull: true
});
const issue756Codec = recordCodec({
  name: "issue756",
  identifier: issue756Identifier,
  attributes: {
    __proto__: null,
    id: {
      description: undefined,
      codec: TYPES.int,
      notNull: true,
      hasDefault: true,
      extensions: {
        tags: {}
      }
    },
    ts: {
      description: undefined,
      codec: notNullTimestampCodec,
      notNull: true,
      hasDefault: true,
      extensions: {
        tags: {}
      }
    }
  },
  description: undefined,
  extensions: {
    isTableLike: true,
    pg: {
      serviceName: "main",
      schemaName: "c",
      name: "issue756"
    },
    tags: {
      __proto__: null
    }
  },
  executor: executor
});
const authPayloadIdentifier = sql.identifier("b", "auth_payload");
const authPayloadCodec = recordCodec({
  name: "authPayload",
  identifier: authPayloadIdentifier,
  attributes: {
    __proto__: null,
    jwt: {
      description: undefined,
      codec: jwtTokenCodec,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    id: {
      description: undefined,
      codec: TYPES.int,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    admin: {
      description: undefined,
      codec: TYPES.boolean,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    }
  },
  description: undefined,
  extensions: {
    isTableLike: false,
    pg: {
      serviceName: "main",
      schemaName: "b",
      name: "auth_payload"
    },
    tags: {
      __proto__: null,
      foreignKey: "(id) references c.person"
    }
  },
  executor: executor
});
const compoundTypeIdentifier = sql.identifier("c", "compound_type");
const colorCodec = enumCodec({
  name: "color",
  identifier: sql.identifier("b", "color"),
  values: ["red", "green", "blue"],
  description: "Represents the colours red, green and blue.",
  extensions: {
    pg: {
      serviceName: "main",
      schemaName: "b",
      name: "color"
    },
    tags: {
      __proto__: null
    }
  }
});
const enumCapsCodec = enumCodec({
  name: "enumCaps",
  identifier: sql.identifier("b", "enum_caps"),
  values: ["FOO_BAR", "BAR_FOO", "BAZ_QUX", "0_BAR"],
  description: undefined,
  extensions: {
    pg: {
      serviceName: "main",
      schemaName: "b",
      name: "enum_caps"
    },
    tags: {
      __proto__: null
    }
  }
});
const enumWithEmptyStringCodec = enumCodec({
  name: "enumWithEmptyString",
  identifier: sql.identifier("b", "enum_with_empty_string"),
  values: ["", "one", "two"],
  description: undefined,
  extensions: {
    pg: {
      serviceName: "main",
      schemaName: "b",
      name: "enum_with_empty_string"
    },
    tags: {
      __proto__: null
    }
  }
});
const compoundTypeCodec = recordCodec({
  name: "compoundType",
  identifier: compoundTypeIdentifier,
  attributes: {
    __proto__: null,
    a: {
      description: undefined,
      codec: TYPES.int,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    b: {
      description: undefined,
      codec: TYPES.text,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    c: {
      description: undefined,
      codec: colorCodec,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    d: {
      description: undefined,
      codec: TYPES.uuid,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    e: {
      description: undefined,
      codec: enumCapsCodec,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    f: {
      description: undefined,
      codec: enumWithEmptyStringCodec,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    g: {
      description: undefined,
      codec: TYPES.interval,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    foo_bar: {
      description: undefined,
      codec: TYPES.int,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    }
  },
  description: "Awesome feature!",
  extensions: {
    isTableLike: false,
    pg: {
      serviceName: "main",
      schemaName: "c",
      name: "compound_type"
    },
    tags: {
      __proto__: null
    }
  },
  executor: executor
});
const registryConfig_pgCodecs_FuncOutOutCompoundTypeRecord_FuncOutOutCompoundTypeRecord = recordCodec({
  name: "FuncOutOutCompoundTypeRecord",
  identifier: sql`ANONYMOUS_TYPE_DO_NOT_REFERENCE`,
  attributes: {
    __proto__: null,
    o1: {
      notNull: false,
      codec: TYPES.int,
      extensions: {
        argIndex: 1,
        argName: "o1"
      }
    },
    o2: {
      notNull: false,
      codec: compoundTypeCodec,
      extensions: {
        argIndex: 2,
        argName: "o2"
      }
    }
  },
  description: undefined,
  extensions: {
    /* `The return type of our \`${name}\` ${
      pgProc.provolatile === "v" ? "mutation" : "query"
    }.`, */
  },
  executor,
  isAnonymous: true
});
const registryConfig_pgCodecs_MutationOutOutCompoundTypeRecord_MutationOutOutCompoundTypeRecord = recordCodec({
  name: "MutationOutOutCompoundTypeRecord",
  identifier: sql`ANONYMOUS_TYPE_DO_NOT_REFERENCE`,
  attributes: {
    __proto__: null,
    o1: {
      notNull: false,
      codec: TYPES.int,
      extensions: {
        argIndex: 1,
        argName: "o1"
      }
    },
    o2: {
      notNull: false,
      codec: compoundTypeCodec,
      extensions: {
        argIndex: 2,
        argName: "o2"
      }
    }
  },
  description: undefined,
  extensions: {
    /* `The return type of our \`${name}\` ${
      pgProc.provolatile === "v" ? "mutation" : "query"
    }.`, */
  },
  executor,
  isAnonymous: true
});
const postIdentifier = sql.identifier("a", "post");
const anEnumCodec = enumCodec({
  name: "anEnum",
  identifier: sql.identifier("a", "an_enum"),
  values: ["awaiting", "rejected", "published", "*", "**", "***", "foo*", "foo*_", "_foo*", "*bar", "*bar_", "_*bar_", "*baz*", "_*baz*_", "%", ">=", "~~", "$"],
  description: undefined,
  extensions: {
    pg: {
      serviceName: "main",
      schemaName: "a",
      name: "an_enum"
    },
    tags: {
      __proto__: null
    }
  }
});
const anEnumArrayCodec = listOfCodec(anEnumCodec, {
  extensions: {
    pg: {
      serviceName: "main",
      schemaName: "a",
      name: "_an_enum"
    },
    tags: {
      __proto__: null
    }
  },
  typeDelim: ",",
  description: undefined,
  name: "anEnumArray"
});
const comptypeCodec = recordCodec({
  name: "comptype",
  identifier: sql.identifier("a", "comptype"),
  attributes: {
    __proto__: null,
    schedule: {
      description: undefined,
      codec: TYPES.timestamptz,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    is_optimised: {
      description: undefined,
      codec: TYPES.boolean,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    }
  },
  description: undefined,
  extensions: {
    isTableLike: false,
    pg: {
      serviceName: "main",
      schemaName: "a",
      name: "comptype"
    },
    tags: {
      __proto__: null
    }
  },
  executor: executor
});
const comptypeArrayCodec = listOfCodec(comptypeCodec, {
  extensions: {
    pg: {
      serviceName: "main",
      schemaName: "a",
      name: "_comptype"
    },
    tags: {
      __proto__: null
    }
  },
  typeDelim: ",",
  description: undefined,
  name: "comptypeArray"
});
const postCodec = recordCodec({
  name: "post",
  identifier: postIdentifier,
  attributes: {
    __proto__: null,
    id: {
      description: undefined,
      codec: TYPES.int,
      notNull: true,
      hasDefault: true,
      extensions: {
        tags: {}
      }
    },
    headline: {
      description: undefined,
      codec: TYPES.text,
      notNull: true,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    body: {
      description: undefined,
      codec: TYPES.text,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    author_id: {
      description: undefined,
      codec: TYPES.int,
      notNull: false,
      hasDefault: true,
      extensions: {
        tags: {}
      }
    },
    enums: {
      description: undefined,
      codec: anEnumArrayCodec,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    comptypes: {
      description: undefined,
      codec: comptypeArrayCodec,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    }
  },
  description: undefined,
  extensions: {
    isTableLike: true,
    pg: {
      serviceName: "main",
      schemaName: "a",
      name: "post"
    },
    tags: {
      __proto__: null
    }
  },
  executor: executor
});
const registryConfig_pgCodecs_QueryOutputTwoRowsRecord_QueryOutputTwoRowsRecord = recordCodec({
  name: "QueryOutputTwoRowsRecord",
  identifier: sql`ANONYMOUS_TYPE_DO_NOT_REFERENCE`,
  attributes: {
    __proto__: null,
    txt: {
      notNull: false,
      codec: TYPES.text,
      extensions: {
        argIndex: 2,
        argName: "txt"
      }
    },
    left_arm: {
      notNull: false,
      codec: leftArmCodec,
      extensions: {
        argIndex: 3,
        argName: "left_arm"
      }
    },
    post: {
      notNull: false,
      codec: postCodec,
      extensions: {
        argIndex: 4,
        argName: "post"
      }
    }
  },
  description: undefined,
  extensions: {
    /* `The return type of our \`${name}\` ${
      pgProc.provolatile === "v" ? "mutation" : "query"
    }.`, */
  },
  executor,
  isAnonymous: true
});
const registryConfig_pgCodecs_PersonComputedOutOutRecord_PersonComputedOutOutRecord = recordCodec({
  name: "PersonComputedOutOutRecord",
  identifier: sql`ANONYMOUS_TYPE_DO_NOT_REFERENCE`,
  attributes: {
    __proto__: null,
    o1: {
      notNull: false,
      codec: TYPES.text,
      extensions: {
        argIndex: 1,
        argName: "o1"
      }
    },
    o2: {
      notNull: false,
      codec: TYPES.text,
      extensions: {
        argIndex: 2,
        argName: "o2"
      }
    }
  },
  description: undefined,
  extensions: {
    /* `The return type of our \`${name}\` ${
      pgProc.provolatile === "v" ? "mutation" : "query"
    }.`, */
  },
  executor,
  isAnonymous: true
});
const registryConfig_pgCodecs_PersonComputedInoutOutRecord_PersonComputedInoutOutRecord = recordCodec({
  name: "PersonComputedInoutOutRecord",
  identifier: sql`ANONYMOUS_TYPE_DO_NOT_REFERENCE`,
  attributes: {
    __proto__: null,
    ino: {
      notNull: false,
      codec: TYPES.text,
      extensions: {
        argIndex: 1,
        argName: "ino"
      }
    },
    o: {
      notNull: false,
      codec: TYPES.text,
      extensions: {
        argIndex: 2,
        argName: "o"
      }
    }
  },
  description: undefined,
  extensions: {
    /* `The return type of our \`${name}\` ${
      pgProc.provolatile === "v" ? "mutation" : "query"
    }.`, */
  },
  executor,
  isAnonymous: true
});
const personIdentifier = sql.identifier("c", "person");
const emailCodec = domainOfCodec(TYPES.text, "email", sql.identifier("b", "email"), {
  description: undefined,
  extensions: {
    pg: {
      serviceName: "main",
      schemaName: "b",
      name: "email"
    },
    tags: {
      __proto__: null
    }
  },
  notNull: false
});
const notNullUrlCodec = domainOfCodec(TYPES.varchar, "notNullUrl", sql.identifier("b", "not_null_url"), {
  description: undefined,
  extensions: {
    pg: {
      serviceName: "main",
      schemaName: "b",
      name: "not_null_url"
    },
    tags: {
      __proto__: null
    }
  },
  notNull: true
});
const wrappedUrlCodec = recordCodec({
  name: "wrappedUrl",
  identifier: sql.identifier("b", "wrapped_url"),
  attributes: {
    __proto__: null,
    url: {
      description: undefined,
      codec: notNullUrlCodec,
      notNull: true,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    }
  },
  description: undefined,
  extensions: {
    isTableLike: false,
    pg: {
      serviceName: "main",
      schemaName: "b",
      name: "wrapped_url"
    },
    tags: {
      __proto__: null
    }
  },
  executor: executor
});
const personCodec = recordCodec({
  name: "person",
  identifier: personIdentifier,
  attributes: {
    __proto__: null,
    id: {
      description: "The primary unique identifier for the person",
      codec: TYPES.int,
      notNull: true,
      hasDefault: true,
      extensions: {
        tags: {}
      }
    },
    person_full_name: {
      description: "The person\u2019s name",
      codec: TYPES.varchar,
      notNull: true,
      hasDefault: false,
      extensions: {
        tags: {
          name: "name"
        }
      }
    },
    aliases: {
      description: undefined,
      codec: textArrayCodec,
      notNull: true,
      hasDefault: true,
      extensions: {
        tags: {}
      }
    },
    about: {
      description: undefined,
      codec: TYPES.text,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    email: {
      description: undefined,
      codec: emailCodec,
      notNull: true,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    site: {
      description: undefined,
      codec: wrappedUrlCodec,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {
          deprecated: "Don\u2019t use me"
        }
      }
    },
    config: {
      description: undefined,
      codec: TYPES.hstore,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    last_login_from_ip: {
      description: undefined,
      codec: TYPES.inet,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    last_login_from_subnet: {
      description: undefined,
      codec: TYPES.cidr,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    user_mac: {
      description: undefined,
      codec: TYPES.macaddr,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    created_at: {
      description: undefined,
      codec: TYPES.timestamp,
      notNull: false,
      hasDefault: true,
      extensions: {
        tags: {}
      }
    }
  },
  description: "Person test comment",
  extensions: {
    isTableLike: true,
    pg: {
      serviceName: "main",
      schemaName: "c",
      name: "person"
    },
    tags: {
      __proto__: null
    }
  },
  executor: executor
});
const registryConfig_pgCodecs_PersonComputedFirstArgInoutOutRecord_PersonComputedFirstArgInoutOutRecord = recordCodec({
  name: "PersonComputedFirstArgInoutOutRecord",
  identifier: sql`ANONYMOUS_TYPE_DO_NOT_REFERENCE`,
  attributes: {
    __proto__: null,
    person: {
      notNull: false,
      codec: personCodec,
      extensions: {
        argIndex: 0,
        argName: "person"
      }
    },
    o: {
      notNull: false,
      codec: TYPES.int,
      extensions: {
        argIndex: 1,
        argName: "o"
      }
    }
  },
  description: undefined,
  extensions: {
    /* `The return type of our \`${name}\` ${
      pgProc.provolatile === "v" ? "mutation" : "query"
    }.`, */
  },
  executor,
  isAnonymous: true
});
const registryConfig_pgCodecs_FuncOutComplexRecord_FuncOutComplexRecord = recordCodec({
  name: "FuncOutComplexRecord",
  identifier: sql`ANONYMOUS_TYPE_DO_NOT_REFERENCE`,
  attributes: {
    __proto__: null,
    x: {
      notNull: false,
      codec: TYPES.int,
      extensions: {
        argIndex: 2,
        argName: "x"
      }
    },
    y: {
      notNull: false,
      codec: compoundTypeCodec,
      extensions: {
        argIndex: 3,
        argName: "y"
      }
    },
    z: {
      notNull: false,
      codec: personCodec,
      extensions: {
        argIndex: 4,
        argName: "z"
      }
    }
  },
  description: undefined,
  extensions: {
    /* `The return type of our \`${name}\` ${
      pgProc.provolatile === "v" ? "mutation" : "query"
    }.`, */
  },
  executor,
  isAnonymous: true
});
const registryConfig_pgCodecs_FuncOutComplexSetofRecord_FuncOutComplexSetofRecord = recordCodec({
  name: "FuncOutComplexSetofRecord",
  identifier: sql`ANONYMOUS_TYPE_DO_NOT_REFERENCE`,
  attributes: {
    __proto__: null,
    x: {
      notNull: false,
      codec: TYPES.int,
      extensions: {
        argIndex: 2,
        argName: "x"
      }
    },
    y: {
      notNull: false,
      codec: compoundTypeCodec,
      extensions: {
        argIndex: 3,
        argName: "y"
      }
    },
    z: {
      notNull: false,
      codec: personCodec,
      extensions: {
        argIndex: 4,
        argName: "z"
      }
    }
  },
  description: undefined,
  extensions: {
    /* `The return type of our \`${name}\` ${
      pgProc.provolatile === "v" ? "mutation" : "query"
    }.`, */
  },
  executor,
  isAnonymous: true
});
const registryConfig_pgCodecs_MutationOutComplexRecord_MutationOutComplexRecord = recordCodec({
  name: "MutationOutComplexRecord",
  identifier: sql`ANONYMOUS_TYPE_DO_NOT_REFERENCE`,
  attributes: {
    __proto__: null,
    x: {
      notNull: false,
      codec: TYPES.int,
      extensions: {
        argIndex: 2,
        argName: "x"
      }
    },
    y: {
      notNull: false,
      codec: compoundTypeCodec,
      extensions: {
        argIndex: 3,
        argName: "y"
      }
    },
    z: {
      notNull: false,
      codec: personCodec,
      extensions: {
        argIndex: 4,
        argName: "z"
      }
    }
  },
  description: undefined,
  extensions: {
    /* `The return type of our \`${name}\` ${
      pgProc.provolatile === "v" ? "mutation" : "query"
    }.`, */
  },
  executor,
  isAnonymous: true
});
const registryConfig_pgCodecs_MutationOutComplexSetofRecord_MutationOutComplexSetofRecord = recordCodec({
  name: "MutationOutComplexSetofRecord",
  identifier: sql`ANONYMOUS_TYPE_DO_NOT_REFERENCE`,
  attributes: {
    __proto__: null,
    x: {
      notNull: false,
      codec: TYPES.int,
      extensions: {
        argIndex: 2,
        argName: "x"
      }
    },
    y: {
      notNull: false,
      codec: compoundTypeCodec,
      extensions: {
        argIndex: 3,
        argName: "y"
      }
    },
    z: {
      notNull: false,
      codec: personCodec,
      extensions: {
        argIndex: 4,
        argName: "z"
      }
    }
  },
  description: undefined,
  extensions: {
    /* `The return type of our \`${name}\` ${
      pgProc.provolatile === "v" ? "mutation" : "query"
    }.`, */
  },
  executor,
  isAnonymous: true
});
const registryConfig_pgCodecs_PersonComputedComplexRecord_PersonComputedComplexRecord = recordCodec({
  name: "PersonComputedComplexRecord",
  identifier: sql`ANONYMOUS_TYPE_DO_NOT_REFERENCE`,
  attributes: {
    __proto__: null,
    x: {
      notNull: false,
      codec: TYPES.int,
      extensions: {
        argIndex: 3,
        argName: "x"
      }
    },
    y: {
      notNull: false,
      codec: compoundTypeCodec,
      extensions: {
        argIndex: 4,
        argName: "y"
      }
    },
    z: {
      notNull: false,
      codec: personCodec,
      extensions: {
        argIndex: 5,
        argName: "z"
      }
    }
  },
  description: undefined,
  extensions: {
    /* `The return type of our \`${name}\` ${
      pgProc.provolatile === "v" ? "mutation" : "query"
    }.`, */
  },
  executor,
  isAnonymous: true
});
const listsIdentifier = sql.identifier("b", "lists");
const int4ArrayCodec = listOfCodec(TYPES.int, {
  extensions: {
    pg: {
      serviceName: "main",
      schemaName: "pg_catalog",
      name: "_int4"
    },
    tags: {
      __proto__: null
    }
  },
  typeDelim: ",",
  description: undefined,
  name: "int4Array"
});
const colorArrayCodec = listOfCodec(colorCodec, {
  extensions: {
    pg: {
      serviceName: "main",
      schemaName: "b",
      name: "_color"
    },
    tags: {
      __proto__: null
    }
  },
  typeDelim: ",",
  description: undefined,
  name: "colorArray"
});
const dateArrayCodec = listOfCodec(TYPES.date, {
  extensions: {
    pg: {
      serviceName: "main",
      schemaName: "pg_catalog",
      name: "_date"
    },
    tags: {
      __proto__: null
    }
  },
  typeDelim: ",",
  description: undefined,
  name: "dateArray"
});
const timestamptzArrayCodec = listOfCodec(TYPES.timestamptz, {
  extensions: {
    pg: {
      serviceName: "main",
      schemaName: "pg_catalog",
      name: "_timestamptz"
    },
    tags: {
      __proto__: null
    }
  },
  typeDelim: ",",
  description: undefined,
  name: "timestamptzArray"
});
const compoundTypeArrayCodec = listOfCodec(compoundTypeCodec, {
  extensions: {
    pg: {
      serviceName: "main",
      schemaName: "c",
      name: "_compound_type"
    },
    tags: {
      __proto__: null
    }
  },
  typeDelim: ",",
  description: undefined,
  name: "compoundTypeArray"
});
const byteaArrayCodec = listOfCodec(TYPES.bytea, {
  extensions: {
    pg: {
      serviceName: "main",
      schemaName: "pg_catalog",
      name: "_bytea"
    },
    tags: {
      __proto__: null
    }
  },
  typeDelim: ",",
  description: undefined,
  name: "byteaArray"
});
const listsCodec = recordCodec({
  name: "lists",
  identifier: listsIdentifier,
  attributes: {
    __proto__: null,
    id: {
      description: undefined,
      codec: TYPES.int,
      notNull: true,
      hasDefault: true,
      extensions: {
        tags: {}
      }
    },
    int_array: {
      description: undefined,
      codec: int4ArrayCodec,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    int_array_nn: {
      description: undefined,
      codec: int4ArrayCodec,
      notNull: true,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    enum_array: {
      description: undefined,
      codec: colorArrayCodec,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    enum_array_nn: {
      description: undefined,
      codec: colorArrayCodec,
      notNull: true,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    date_array: {
      description: undefined,
      codec: dateArrayCodec,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    date_array_nn: {
      description: undefined,
      codec: dateArrayCodec,
      notNull: true,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    timestamptz_array: {
      description: undefined,
      codec: timestamptzArrayCodec,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    timestamptz_array_nn: {
      description: undefined,
      codec: timestamptzArrayCodec,
      notNull: true,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    compound_type_array: {
      description: undefined,
      codec: compoundTypeArrayCodec,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    compound_type_array_nn: {
      description: undefined,
      codec: compoundTypeArrayCodec,
      notNull: true,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    bytea_array: {
      description: undefined,
      codec: byteaArrayCodec,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    bytea_array_nn: {
      description: undefined,
      codec: byteaArrayCodec,
      notNull: true,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    }
  },
  description: undefined,
  extensions: {
    isTableLike: true,
    pg: {
      serviceName: "main",
      schemaName: "b",
      name: "lists"
    },
    tags: {
      __proto__: null
    }
  },
  executor: executor
});
const typesIdentifier = sql.identifier("b", "types");
const anIntCodec = domainOfCodec(TYPES.int, "anInt", sql.identifier("a", "an_int"), {
  description: undefined,
  extensions: {
    pg: {
      serviceName: "main",
      schemaName: "a",
      name: "an_int"
    },
    tags: {
      __proto__: null
    }
  },
  notNull: false
});
const anotherIntCodec = domainOfCodec(anIntCodec, "anotherInt", sql.identifier("b", "another_int"), {
  description: undefined,
  extensions: {
    pg: {
      serviceName: "main",
      schemaName: "b",
      name: "another_int"
    },
    tags: {
      __proto__: null
    }
  },
  notNull: false
});
const numrangeCodec = rangeOfCodec(TYPES.numeric, "numrange", sql.identifier("pg_catalog", "numrange"), {
  description: "range of numerics",
  extensions: {
    pg: {
      serviceName: "main",
      schemaName: "pg_catalog",
      name: "numrange"
    },
    tags: {
      __proto__: null
    }
  }
});
const daterangeCodec = rangeOfCodec(TYPES.date, "daterange", sql.identifier("pg_catalog", "daterange"), {
  description: "range of dates",
  extensions: {
    pg: {
      serviceName: "main",
      schemaName: "pg_catalog",
      name: "daterange"
    },
    tags: {
      __proto__: null
    }
  }
});
const anIntRangeCodec = rangeOfCodec(anIntCodec, "anIntRange", sql.identifier("a", "an_int_range"), {
  description: undefined,
  extensions: {
    pg: {
      serviceName: "main",
      schemaName: "a",
      name: "an_int_range"
    },
    tags: {
      __proto__: null
    }
  }
});
const nestedCompoundTypeCodec = recordCodec({
  name: "nestedCompoundType",
  identifier: sql.identifier("b", "nested_compound_type"),
  attributes: {
    __proto__: null,
    a: {
      description: undefined,
      codec: compoundTypeCodec,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    b: {
      description: undefined,
      codec: compoundTypeCodec,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    baz_buz: {
      description: undefined,
      codec: TYPES.int,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    }
  },
  description: undefined,
  extensions: {
    isTableLike: false,
    pg: {
      serviceName: "main",
      schemaName: "b",
      name: "nested_compound_type"
    },
    tags: {
      __proto__: null
    }
  },
  executor: executor
});
const textArrayDomainCodec = domainOfCodec(textArrayCodec, "textArrayDomain", sql.identifier("c", "text_array_domain"), {
  description: undefined,
  extensions: {
    pg: {
      serviceName: "main",
      schemaName: "c",
      name: "text_array_domain"
    },
    tags: {
      __proto__: null
    }
  },
  notNull: false
});
const int8ArrayCodec = listOfCodec(TYPES.bigint, {
  extensions: {
    pg: {
      serviceName: "main",
      schemaName: "pg_catalog",
      name: "_int8"
    },
    tags: {
      __proto__: null
    }
  },
  typeDelim: ",",
  description: undefined,
  name: "int8Array"
});
const int8ArrayDomainCodec = domainOfCodec(int8ArrayCodec, "int8ArrayDomain", sql.identifier("c", "int8_array_domain"), {
  description: undefined,
  extensions: {
    pg: {
      serviceName: "main",
      schemaName: "c",
      name: "int8_array_domain"
    },
    tags: {
      __proto__: null
    }
  },
  notNull: false
});
const spec_types_attributes_ltree_codec_ltree = {
  name: "ltree",
  sqlType: sql`ltree`,
  toPg(str) {
    return str;
  },
  fromPg(str) {
    return str;
  },
  executor: null,
  attributes: undefined
};
const spec_types_attributes_ltree_array_codec_ltree_ = listOfCodec(spec_types_attributes_ltree_codec_ltree);
const spec_types = {
  name: "types",
  identifier: typesIdentifier,
  attributes: {
    __proto__: null,
    id: {
      description: undefined,
      codec: TYPES.int,
      notNull: true,
      hasDefault: true,
      extensions: {
        tags: {}
      }
    },
    smallint: {
      description: undefined,
      codec: TYPES.int2,
      notNull: true,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    bigint: {
      description: undefined,
      codec: TYPES.bigint,
      notNull: true,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    numeric: {
      description: undefined,
      codec: TYPES.numeric,
      notNull: true,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    decimal: {
      description: undefined,
      codec: TYPES.numeric,
      notNull: true,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    boolean: {
      description: undefined,
      codec: TYPES.boolean,
      notNull: true,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    varchar: {
      description: undefined,
      codec: TYPES.varchar,
      notNull: true,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    enum: {
      description: undefined,
      codec: colorCodec,
      notNull: true,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    enum_array: {
      description: undefined,
      codec: colorArrayCodec,
      notNull: true,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    domain: {
      description: undefined,
      codec: anIntCodec,
      notNull: true,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    domain2: {
      description: undefined,
      codec: anotherIntCodec,
      notNull: true,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    text_array: {
      description: undefined,
      codec: textArrayCodec,
      notNull: true,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    json: {
      description: undefined,
      codec: TYPES.json,
      notNull: true,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    jsonb: {
      description: undefined,
      codec: TYPES.jsonb,
      notNull: true,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    nullable_range: {
      description: undefined,
      codec: numrangeCodec,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    numrange: {
      description: undefined,
      codec: numrangeCodec,
      notNull: true,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    daterange: {
      description: undefined,
      codec: daterangeCodec,
      notNull: true,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    an_int_range: {
      description: undefined,
      codec: anIntRangeCodec,
      notNull: true,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    timestamp: {
      description: undefined,
      codec: TYPES.timestamp,
      notNull: true,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    timestamptz: {
      description: undefined,
      codec: TYPES.timestamptz,
      notNull: true,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    date: {
      description: undefined,
      codec: TYPES.date,
      notNull: true,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    time: {
      description: undefined,
      codec: TYPES.time,
      notNull: true,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    timetz: {
      description: undefined,
      codec: TYPES.timetz,
      notNull: true,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    interval: {
      description: undefined,
      codec: TYPES.interval,
      notNull: true,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    interval_array: {
      description: undefined,
      codec: intervalArrayCodec,
      notNull: true,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    money: {
      description: undefined,
      codec: TYPES.money,
      notNull: true,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    compound_type: {
      description: undefined,
      codec: compoundTypeCodec,
      notNull: true,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    nested_compound_type: {
      description: undefined,
      codec: nestedCompoundTypeCodec,
      notNull: true,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    nullable_compound_type: {
      description: undefined,
      codec: compoundTypeCodec,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    nullable_nested_compound_type: {
      description: undefined,
      codec: nestedCompoundTypeCodec,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    point: {
      description: undefined,
      codec: TYPES.point,
      notNull: true,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    nullablePoint: {
      description: undefined,
      codec: TYPES.point,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    inet: {
      description: undefined,
      codec: TYPES.inet,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    cidr: {
      description: undefined,
      codec: TYPES.cidr,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    macaddr: {
      description: undefined,
      codec: TYPES.macaddr,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    regproc: {
      description: undefined,
      codec: TYPES.regproc,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    regprocedure: {
      description: undefined,
      codec: TYPES.regprocedure,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    regoper: {
      description: undefined,
      codec: TYPES.regoper,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    regoperator: {
      description: undefined,
      codec: TYPES.regoperator,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    regclass: {
      description: undefined,
      codec: TYPES.regclass,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    regtype: {
      description: undefined,
      codec: TYPES.regtype,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    regconfig: {
      description: undefined,
      codec: TYPES.regconfig,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    regdictionary: {
      description: undefined,
      codec: TYPES.regdictionary,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    text_array_domain: {
      description: undefined,
      codec: textArrayDomainCodec,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    int8_array_domain: {
      description: undefined,
      codec: int8ArrayDomainCodec,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    bytea: {
      description: undefined,
      codec: TYPES.bytea,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    bytea_array: {
      description: undefined,
      codec: byteaArrayCodec,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    ltree: {
      description: undefined,
      codec: spec_types_attributes_ltree_codec_ltree,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    ltree_array: {
      description: undefined,
      codec: spec_types_attributes_ltree_array_codec_ltree_,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    }
  },
  description: undefined,
  extensions: {
    isTableLike: true,
    pg: {
      serviceName: "main",
      schemaName: "b",
      name: "types"
    },
    tags: {
      __proto__: null,
      foreignKey: ["(smallint) references a.post", "(id) references a.post"]
    }
  },
  executor: executor
};
const typesCodec = recordCodec(spec_types);
const floatrangeCodec = rangeOfCodec(TYPES.float, "floatrange", sql.identifier("c", "floatrange"), {
  description: undefined,
  extensions: {
    pg: {
      serviceName: "main",
      schemaName: "c",
      name: "floatrange"
    },
    tags: {
      __proto__: null
    }
  }
});
const postArrayCodec = listOfCodec(postCodec, {
  extensions: {
    pg: {
      serviceName: "main",
      schemaName: "a",
      name: "_post"
    },
    tags: {
      __proto__: null
    }
  },
  typeDelim: ",",
  description: undefined,
  name: "postArray"
});
const current_user_idFunctionIdentifer = sql.identifier("c", "current_user_id");
const func_outFunctionIdentifer = sql.identifier("c", "func_out");
const func_out_setofFunctionIdentifer = sql.identifier("c", "func_out_setof");
const func_out_unnamedFunctionIdentifer = sql.identifier("c", "func_out_unnamed");
const mutation_outFunctionIdentifer = sql.identifier("c", "mutation_out");
const mutation_out_setofFunctionIdentifer = sql.identifier("c", "mutation_out_setof");
const mutation_out_unnamedFunctionIdentifer = sql.identifier("c", "mutation_out_unnamed");
const no_args_mutationFunctionIdentifer = sql.identifier("c", "no_args_mutation");
const no_args_queryFunctionIdentifer = sql.identifier("c", "no_args_query");
const return_void_mutationFunctionIdentifer = sql.identifier("a", "return_void_mutation");
const mutation_interval_setFunctionIdentifer = sql.identifier("a", "mutation_interval_set");
const query_interval_setFunctionIdentifer = sql.identifier("a", "query_interval_set");
const static_big_integerFunctionIdentifer = sql.identifier("a", "static_big_integer");
const func_in_outFunctionIdentifer = sql.identifier("c", "func_in_out");
const func_returns_table_one_colFunctionIdentifer = sql.identifier("c", "func_returns_table_one_col");
const mutation_in_outFunctionIdentifer = sql.identifier("c", "mutation_in_out");
const mutation_returns_table_one_colFunctionIdentifer = sql.identifier("c", "mutation_returns_table_one_col");
const assert_somethingFunctionIdentifer = sql.identifier("a", "assert_something");
const assert_something_nxFunctionIdentifer = sql.identifier("a", "assert_something_nx");
const json_identityFunctionIdentifer = sql.identifier("c", "json_identity");
const json_identity_mutationFunctionIdentifer = sql.identifier("c", "json_identity_mutation");
const jsonb_identityFunctionIdentifer = sql.identifier("c", "jsonb_identity");
const jsonb_identity_mutationFunctionIdentifer = sql.identifier("c", "jsonb_identity_mutation");
const jsonb_identity_mutation_plpgsqlFunctionIdentifer = sql.identifier("c", "jsonb_identity_mutation_plpgsql");
const jsonb_identity_mutation_plpgsql_with_defaultFunctionIdentifer = sql.identifier("c", "jsonb_identity_mutation_plpgsql_with_default");
const add_1_mutationFunctionIdentifer = sql.identifier("a", "add_1_mutation");
const add_1_queryFunctionIdentifer = sql.identifier("a", "add_1_query");
const add_2_mutationFunctionIdentifer = sql.identifier("a", "add_2_mutation");
const add_2_queryFunctionIdentifer = sql.identifier("a", "add_2_query");
const add_3_mutationFunctionIdentifer = sql.identifier("a", "add_3_mutation");
const add_3_queryFunctionIdentifer = sql.identifier("a", "add_3_query");
const add_4_mutationFunctionIdentifer = sql.identifier("a", "add_4_mutation");
const add_4_mutation_errorFunctionIdentifer = sql.identifier("a", "add_4_mutation_error");
const add_4_queryFunctionIdentifer = sql.identifier("a", "add_4_query");
const mult_1FunctionIdentifer = sql.identifier("b", "mult_1");
const mult_2FunctionIdentifer = sql.identifier("b", "mult_2");
const mult_3FunctionIdentifer = sql.identifier("b", "mult_3");
const mult_4FunctionIdentifer = sql.identifier("b", "mult_4");
const func_in_inoutFunctionIdentifer = sql.identifier("c", "func_in_inout");
const func_out_outFunctionIdentifer = sql.identifier("c", "func_out_out");
const func_out_out_setofFunctionIdentifer = sql.identifier("c", "func_out_out_setof");
const func_out_out_unnamedFunctionIdentifer = sql.identifier("c", "func_out_out_unnamed");
const mutation_in_inoutFunctionIdentifer = sql.identifier("c", "mutation_in_inout");
const mutation_out_outFunctionIdentifer = sql.identifier("c", "mutation_out_out");
const mutation_out_out_setofFunctionIdentifer = sql.identifier("c", "mutation_out_out_setof");
const mutation_out_out_unnamedFunctionIdentifer = sql.identifier("c", "mutation_out_out_unnamed");
const search_test_summariesFunctionIdentifer = sql.identifier("c", "search_test_summaries");
const optional_missing_middle_1FunctionIdentifer = sql.identifier("a", "optional_missing_middle_1");
const optional_missing_middle_2FunctionIdentifer = sql.identifier("a", "optional_missing_middle_2");
const optional_missing_middle_3FunctionIdentifer = sql.identifier("a", "optional_missing_middle_3");
const optional_missing_middle_4FunctionIdentifer = sql.identifier("a", "optional_missing_middle_4");
const optional_missing_middle_5FunctionIdentifer = sql.identifier("a", "optional_missing_middle_5");
const func_out_unnamed_out_out_unnamedFunctionIdentifer = sql.identifier("c", "func_out_unnamed_out_out_unnamed");
const int_set_mutationFunctionIdentifer = sql.identifier("c", "int_set_mutation");
const int_set_queryFunctionIdentifer = sql.identifier("c", "int_set_query");
const mutation_out_unnamed_out_out_unnamedFunctionIdentifer = sql.identifier("c", "mutation_out_unnamed_out_out_unnamed");
const mutation_returns_table_multi_colFunctionIdentifer = sql.identifier("c", "mutation_returns_table_multi_col");
const func_returns_table_multi_colFunctionIdentifer = sql.identifier("c", "func_returns_table_multi_col");
const guid_fnFunctionIdentifer = sql.identifier("b", "guid_fn");
const mutation_interval_arrayFunctionIdentifer = sql.identifier("a", "mutation_interval_array");
const query_interval_arrayFunctionIdentifer = sql.identifier("a", "query_interval_array");
const mutation_text_arrayFunctionIdentifer = sql.identifier("a", "mutation_text_array");
const query_text_arrayFunctionIdentifer = sql.identifier("a", "query_text_array");
const inputsUniques = [{
  isPrimary: true,
  attributes: ["id"],
  description: undefined,
  extensions: {
    tags: {
      __proto__: null
    }
  }
}];
const patchsUniques = [{
  isPrimary: true,
  attributes: ["id"],
  description: undefined,
  extensions: {
    tags: {
      __proto__: null
    }
  }
}];
const reservedUniques = [{
  isPrimary: true,
  attributes: ["id"],
  description: undefined,
  extensions: {
    tags: {
      __proto__: null
    }
  }
}];
const reservedPatchsUniques = [{
  isPrimary: true,
  attributes: ["id"],
  description: undefined,
  extensions: {
    tags: {
      __proto__: null
    }
  }
}];
const reserved_inputUniques = [{
  isPrimary: true,
  attributes: ["id"],
  description: undefined,
  extensions: {
    tags: {
      __proto__: null
    }
  }
}];
const default_valueUniques = [{
  isPrimary: true,
  attributes: ["id"],
  description: undefined,
  extensions: {
    tags: {
      __proto__: null
    }
  }
}];
const registryConfig_pgResources_foreign_key_foreign_key = {
  executor: executor,
  name: "foreign_key",
  identifier: "main.a.foreign_key",
  from: foreignKeyIdentifier,
  codec: foreignKeyCodec,
  uniques: [],
  isVirtual: false,
  description: undefined,
  extensions: {
    description: undefined,
    pg: {
      serviceName: "main",
      schemaName: "a",
      name: "foreign_key"
    },
    isInsertable: true,
    isUpdatable: true,
    isDeletable: true,
    tags: {}
  }
};
const registryConfig_pgResources_unique_foreign_key_unique_foreign_key = {
  executor: executor,
  name: "unique_foreign_key",
  identifier: "main.a.unique_foreign_key",
  from: uniqueForeignKeyIdentifier,
  codec: uniqueForeignKeyCodec,
  uniques: [{
    isPrimary: false,
    attributes: ["compound_key_1", "compound_key_2"],
    description: undefined,
    extensions: {
      tags: {
        __proto__: null
      }
    }
  }],
  isVirtual: false,
  description: undefined,
  extensions: {
    description: undefined,
    pg: {
      serviceName: "main",
      schemaName: "a",
      name: "unique_foreign_key"
    },
    isInsertable: true,
    isUpdatable: true,
    isDeletable: true,
    tags: {
      omit: "create,update,delete,all,order,filter",
      behavior: spec_uniqueForeignKey.extensions.tags.behavior
    }
  }
};
const my_tableUniques = [{
  isPrimary: true,
  attributes: ["id"],
  description: undefined,
  extensions: {
    tags: {
      __proto__: null
    }
  }
}];
const person_secretUniques = [{
  isPrimary: true,
  attributes: ["person_id"],
  description: undefined,
  extensions: {
    tags: {
      __proto__: null
    }
  }
}];
const registryConfig_pgResources_person_secret_person_secret = {
  executor: executor,
  name: "person_secret",
  identifier: "main.c.person_secret",
  from: personSecretIdentifier,
  codec: personSecretCodec,
  uniques: person_secretUniques,
  isVirtual: false,
  description: "Tracks the person's secret",
  extensions: {
    description: "Tracks the person's secret",
    pg: {
      serviceName: "main",
      schemaName: "c",
      name: "person_secret"
    },
    isInsertable: true,
    isUpdatable: true,
    isDeletable: true,
    tags: {
      deprecated: "This is deprecated (comment on table c.person_secret)."
    }
  }
};
const view_tableUniques = [{
  isPrimary: true,
  attributes: ["id"],
  description: undefined,
  extensions: {
    tags: {
      __proto__: null
    }
  }
}];
const compound_keyUniques = [{
  isPrimary: true,
  attributes: ["person_id_1", "person_id_2"],
  description: undefined,
  extensions: {
    tags: {
      __proto__: null
    }
  }
}];
const registryConfig_pgResources_compound_key_compound_key = {
  executor: executor,
  name: "compound_key",
  identifier: "main.c.compound_key",
  from: compoundKeyIdentifier,
  codec: compoundKeyCodec,
  uniques: compound_keyUniques,
  isVirtual: false,
  description: undefined,
  extensions: {
    description: undefined,
    pg: {
      serviceName: "main",
      schemaName: "c",
      name: "compound_key"
    },
    isInsertable: true,
    isUpdatable: true,
    isDeletable: true,
    tags: {}
  }
};
const similar_table_1Uniques = [{
  isPrimary: true,
  attributes: ["id"],
  description: undefined,
  extensions: {
    tags: {
      __proto__: null
    }
  }
}];
const similar_table_2Uniques = [{
  isPrimary: true,
  attributes: ["id"],
  description: undefined,
  extensions: {
    tags: {
      __proto__: null
    }
  }
}];
const null_test_recordUniques = [{
  isPrimary: true,
  attributes: ["id"],
  description: undefined,
  extensions: {
    tags: {
      __proto__: null
    }
  }
}];
const edge_case_computedFunctionIdentifer = sql.identifier("c", "edge_case_computed");
const return_table_without_grantsFunctionIdentifer = sql.identifier("c", "return_table_without_grants");
const list_bde_mutationFunctionIdentifer = sql.identifier("b", "list_bde_mutation");
const left_armUniques = [{
  isPrimary: true,
  attributes: ["id"],
  description: undefined,
  extensions: {
    tags: {
      __proto__: null
    }
  }
}, {
  isPrimary: false,
  attributes: ["person_id"],
  description: undefined,
  extensions: {
    tags: {
      __proto__: null
    }
  }
}];
const registryConfig_pgResources_left_arm_left_arm = {
  executor: executor,
  name: "left_arm",
  identifier: "main.c.left_arm",
  from: leftArmIdentifier,
  codec: leftArmCodec,
  uniques: left_armUniques,
  isVirtual: false,
  description: "Tracks metadata about the left arms of various people",
  extensions: {
    description: "Tracks metadata about the left arms of various people",
    pg: {
      serviceName: "main",
      schemaName: "c",
      name: "left_arm"
    },
    isInsertable: true,
    isUpdatable: true,
    isDeletable: true,
    tags: {}
  }
};
const authenticate_failFunctionIdentifer = sql.identifier("b", "authenticate_fail");
const resourceConfig_jwt_token = {
  executor: executor,
  name: "jwt_token",
  identifier: "main.b.jwt_token",
  from: jwtTokenIdentifier,
  codec: jwtTokenCodec,
  uniques: [],
  isVirtual: true,
  description: undefined,
  extensions: {
    description: undefined,
    pg: {
      serviceName: "main",
      schemaName: "b",
      name: "jwt_token"
    },
    isInsertable: false,
    isUpdatable: false,
    isDeletable: false,
    tags: {}
  }
};
const authenticateFunctionIdentifer = sql.identifier("b", "authenticate");
const issue756Uniques = [{
  isPrimary: true,
  attributes: ["id"],
  description: undefined,
  extensions: {
    tags: {
      __proto__: null
    }
  }
}];
const registryConfig_pgResources_issue756_issue756 = {
  executor: executor,
  name: "issue756",
  identifier: "main.c.issue756",
  from: issue756Identifier,
  codec: issue756Codec,
  uniques: issue756Uniques,
  isVirtual: false,
  description: undefined,
  extensions: {
    description: undefined,
    pg: {
      serviceName: "main",
      schemaName: "c",
      name: "issue756"
    },
    isInsertable: true,
    isUpdatable: true,
    isDeletable: true,
    tags: {}
  }
};
const left_arm_identityFunctionIdentifer = sql.identifier("c", "left_arm_identity");
const issue756_mutationFunctionIdentifer = sql.identifier("c", "issue756_mutation");
const issue756_set_mutationFunctionIdentifer = sql.identifier("c", "issue756_set_mutation");
const authenticate_manyFunctionIdentifer = sql.identifier("b", "authenticate_many");
const authenticate_payloadFunctionIdentifer = sql.identifier("b", "authenticate_payload");
const types_mutationFunctionIdentifer = sql.identifier("c", "types_mutation");
const types_queryFunctionIdentifer = sql.identifier("c", "types_query");
const compound_type_computed_fieldFunctionIdentifer = sql.identifier("c", "compound_type_computed_field");
const post_computed_interval_setFunctionIdentifer = sql.identifier("a", "post_computed_interval_set");
const post_computed_interval_arrayFunctionIdentifer = sql.identifier("a", "post_computed_interval_array");
const post_computed_text_arrayFunctionIdentifer = sql.identifier("a", "post_computed_text_array");
const post_computed_with_optional_argFunctionIdentifer = sql.identifier("a", "post_computed_with_optional_arg");
const post_computed_with_required_argFunctionIdentifer = sql.identifier("a", "post_computed_with_required_arg");
const func_out_out_compound_typeFunctionIdentifer = sql.identifier("c", "func_out_out_compound_type");
const mutation_out_out_compound_typeFunctionIdentifer = sql.identifier("c", "mutation_out_out_compound_type");
const post_headline_trimmedFunctionIdentifer = sql.identifier("a", "post_headline_trimmed");
const post_headline_trimmed_no_defaultsFunctionIdentifer = sql.identifier("a", "post_headline_trimmed_no_defaults");
const post_headline_trimmed_strictFunctionIdentifer = sql.identifier("a", "post_headline_trimmed_strict");
const query_output_two_rowsFunctionIdentifer = sql.identifier("c", "query_output_two_rows");
const postUniques = [{
  isPrimary: true,
  attributes: ["id"],
  description: undefined,
  extensions: {
    tags: {
      __proto__: null
    }
  }
}];
const registryConfig_pgResources_post_post = {
  executor: executor,
  name: "post",
  identifier: "main.a.post",
  from: postIdentifier,
  codec: postCodec,
  uniques: postUniques,
  isVirtual: false,
  description: undefined,
  extensions: {
    description: undefined,
    pg: {
      serviceName: "main",
      schemaName: "a",
      name: "post"
    },
    isInsertable: true,
    isUpdatable: true,
    isDeletable: true,
    tags: {}
  }
};
const compound_type_set_queryFunctionIdentifer = sql.identifier("c", "compound_type_set_query");
const resourceConfig_compound_type = {
  executor: executor,
  name: "compound_type",
  identifier: "main.c.compound_type",
  from: compoundTypeIdentifier,
  codec: compoundTypeCodec,
  uniques: [],
  isVirtual: true,
  description: "Awesome feature!",
  extensions: {
    description: "Awesome feature!",
    pg: {
      serviceName: "main",
      schemaName: "c",
      name: "compound_type"
    },
    isInsertable: false,
    isUpdatable: false,
    isDeletable: false,
    tags: {}
  }
};
const compound_type_mutationFunctionIdentifer = sql.identifier("b", "compound_type_mutation");
const compound_type_queryFunctionIdentifer = sql.identifier("b", "compound_type_query");
const compound_type_set_mutationFunctionIdentifer = sql.identifier("b", "compound_type_set_mutation");
const list_of_compound_types_mutationFunctionIdentifer = sql.identifier("c", "list_of_compound_types_mutation");
const table_mutationFunctionIdentifer = sql.identifier("c", "table_mutation");
const table_queryFunctionIdentifer = sql.identifier("c", "table_query");
const post_with_suffixFunctionIdentifer = sql.identifier("a", "post_with_suffix");
const mutation_compound_type_arrayFunctionIdentifer = sql.identifier("a", "mutation_compound_type_array");
const query_compound_type_arrayFunctionIdentifer = sql.identifier("a", "query_compound_type_array");
const compound_type_array_mutationFunctionIdentifer = sql.identifier("b", "compound_type_array_mutation");
const compound_type_array_queryFunctionIdentifer = sql.identifier("b", "compound_type_array_query");
const post_computed_compound_type_arrayFunctionIdentifer = sql.identifier("a", "post_computed_compound_type_array");
const post_manyFunctionIdentifer = sql.identifier("a", "post_many");
const person_computed_outFunctionIdentifer = sql.identifier("c", "person_computed_out");
const person_first_nameFunctionIdentifer = sql.identifier("c", "person_first_name");
const person_computed_out_outFunctionIdentifer = sql.identifier("c", "person_computed_out_out");
const person_computed_inoutFunctionIdentifer = sql.identifier("c", "person_computed_inout");
const person_computed_inout_outFunctionIdentifer = sql.identifier("c", "person_computed_inout_out");
const person_existsFunctionIdentifer = sql.identifier("c", "person_exists");
const person_computed_first_arg_inout_outFunctionIdentifer = sql.identifier("c", "person_computed_first_arg_inout_out");
const person_optional_missing_middle_1FunctionIdentifer = sql.identifier("c", "person_optional_missing_middle_1");
const person_optional_missing_middle_2FunctionIdentifer = sql.identifier("c", "person_optional_missing_middle_2");
const person_optional_missing_middle_3FunctionIdentifer = sql.identifier("c", "person_optional_missing_middle_3");
const person_optional_missing_middle_4FunctionIdentifer = sql.identifier("c", "person_optional_missing_middle_4");
const person_optional_missing_middle_5FunctionIdentifer = sql.identifier("c", "person_optional_missing_middle_5");
const func_out_complexFunctionIdentifer = sql.identifier("c", "func_out_complex");
const func_out_complex_setofFunctionIdentifer = sql.identifier("c", "func_out_complex_setof");
const mutation_out_complexFunctionIdentifer = sql.identifier("c", "mutation_out_complex");
const mutation_out_complex_setofFunctionIdentifer = sql.identifier("c", "mutation_out_complex_setof");
const person_computed_complexFunctionIdentifer = sql.identifier("c", "person_computed_complex");
const person_first_postFunctionIdentifer = sql.identifier("c", "person_first_post");
const personUniques = [{
  isPrimary: true,
  attributes: ["id"],
  description: undefined,
  extensions: {
    tags: {
      __proto__: null
    }
  }
}, {
  isPrimary: false,
  attributes: ["email"],
  description: undefined,
  extensions: {
    tags: {
      __proto__: null
    }
  }
}];
const registryConfig_pgResources_person_person = {
  executor: executor,
  name: "person",
  identifier: "main.c.person",
  from: personIdentifier,
  codec: personCodec,
  uniques: personUniques,
  isVirtual: false,
  description: "Person test comment",
  extensions: {
    description: "Person test comment",
    pg: {
      serviceName: "main",
      schemaName: "c",
      name: "person"
    },
    isInsertable: true,
    isUpdatable: true,
    isDeletable: true,
    tags: {}
  }
};
const badly_behaved_functionFunctionIdentifer = sql.identifier("c", "badly_behaved_function");
const func_out_tableFunctionIdentifer = sql.identifier("c", "func_out_table");
const func_out_table_setofFunctionIdentifer = sql.identifier("c", "func_out_table_setof");
const mutation_out_tableFunctionIdentifer = sql.identifier("c", "mutation_out_table");
const mutation_out_table_setofFunctionIdentifer = sql.identifier("c", "mutation_out_table_setof");
const table_set_mutationFunctionIdentifer = sql.identifier("c", "table_set_mutation");
const table_set_queryFunctionIdentifer = sql.identifier("c", "table_set_query");
const table_set_query_plpgsqlFunctionIdentifer = sql.identifier("c", "table_set_query_plpgsql");
const person_computed_first_arg_inoutFunctionIdentifer = sql.identifier("c", "person_computed_first_arg_inout");
const person_friendsFunctionIdentifer = sql.identifier("c", "person_friends");
const listsUniques = [{
  isPrimary: true,
  attributes: ["id"],
  description: undefined,
  extensions: {
    tags: {
      __proto__: null
    }
  }
}];
const typesUniques = [{
  isPrimary: true,
  attributes: ["id"],
  description: undefined,
  extensions: {
    tags: {
      __proto__: null
    }
  }
}];
const registryConfig_pgResources_types_types = {
  executor: executor,
  name: "types",
  identifier: "main.b.types",
  from: typesIdentifier,
  codec: typesCodec,
  uniques: typesUniques,
  isVirtual: false,
  description: undefined,
  extensions: {
    description: undefined,
    pg: {
      serviceName: "main",
      schemaName: "b",
      name: "types"
    },
    isInsertable: true,
    isUpdatable: true,
    isDeletable: true,
    tags: {
      foreignKey: spec_types.extensions.tags.foreignKey
    }
  }
};
const type_function_connectionFunctionIdentifer = sql.identifier("b", "type_function_connection");
const type_function_connection_mutationFunctionIdentifer = sql.identifier("b", "type_function_connection_mutation");
const type_functionFunctionIdentifer = sql.identifier("b", "type_function");
const type_function_mutationFunctionIdentifer = sql.identifier("b", "type_function_mutation");
const person_type_function_connectionFunctionIdentifer = sql.identifier("c", "person_type_function_connection");
const person_type_functionFunctionIdentifer = sql.identifier("c", "person_type_function");
const type_function_listFunctionIdentifer = sql.identifier("b", "type_function_list");
const type_function_list_mutationFunctionIdentifer = sql.identifier("b", "type_function_list_mutation");
const person_type_function_listFunctionIdentifer = sql.identifier("c", "person_type_function_list");
const registry = makeRegistry({
  pgExecutors: {
    __proto__: null,
    main: executor
  },
  pgCodecs: {
    __proto__: null,
    int4: TYPES.int,
    void: TYPES.void,
    interval: TYPES.interval,
    int8: TYPES.bigint,
    json: TYPES.json,
    jsonb: TYPES.jsonb,
    FuncOutOutRecord: registryConfig_pgCodecs_FuncOutOutRecord_FuncOutOutRecord,
    text: TYPES.text,
    FuncOutOutSetofRecord: registryConfig_pgCodecs_FuncOutOutSetofRecord_FuncOutOutSetofRecord,
    FuncOutOutUnnamedRecord: registryConfig_pgCodecs_FuncOutOutUnnamedRecord_FuncOutOutUnnamedRecord,
    MutationOutOutRecord: registryConfig_pgCodecs_MutationOutOutRecord_MutationOutOutRecord,
    MutationOutOutSetofRecord: registryConfig_pgCodecs_MutationOutOutSetofRecord_MutationOutOutSetofRecord,
    MutationOutOutUnnamedRecord: registryConfig_pgCodecs_MutationOutOutUnnamedRecord_MutationOutOutUnnamedRecord,
    SearchTestSummariesRecord: registryConfig_pgCodecs_SearchTestSummariesRecord_SearchTestSummariesRecord,
    FuncOutUnnamedOutOutUnnamedRecord: registryConfig_pgCodecs_FuncOutUnnamedOutOutUnnamedRecord_FuncOutUnnamedOutOutUnnamedRecord,
    MutationOutUnnamedOutOutUnnamedRecord: registryConfig_pgCodecs_MutationOutUnnamedOutOutUnnamedRecord_MutationOutUnnamedOutOutUnnamedRecord,
    MutationReturnsTableMultiColRecord: registryConfig_pgCodecs_MutationReturnsTableMultiColRecord_MutationReturnsTableMultiColRecord,
    FuncReturnsTableMultiColRecord: registryConfig_pgCodecs_FuncReturnsTableMultiColRecord_FuncReturnsTableMultiColRecord,
    guid: guidCodec,
    varchar: TYPES.varchar,
    intervalArray: intervalArrayCodec,
    textArray: textArrayCodec,
    nonUpdatableView: nonUpdatableViewCodec,
    inputs: inputsCodec,
    patchs: patchsCodec,
    reserved: reservedCodec,
    reservedPatchs: reservedPatchsCodec,
    reservedInput: reservedInputCodec,
    defaultValue: defaultValueCodec,
    foreignKey: foreignKeyCodec,
    noPrimaryKey: noPrimaryKeyCodec,
    testview: testviewCodec,
    uniqueForeignKey: uniqueForeignKeyCodec,
    myTable: myTableCodec,
    personSecret: personSecretCodec,
    unlogged: unloggedCodec,
    viewTable: viewTableCodec,
    compoundKey: compoundKeyCodec,
    bool: TYPES.boolean,
    similarTable1: similarTable1Codec,
    similarTable2: similarTable2Codec,
    updatableView: updatableViewCodec,
    nullTestRecord: nullTestRecordCodec,
    uuidArray: uuidArrayCodec,
    uuid: TYPES.uuid,
    edgeCase: edgeCaseCodec,
    int2: TYPES.int2,
    leftArm: leftArmCodec,
    float8: TYPES.float,
    jwtToken: jwtTokenCodec,
    numeric: TYPES.numeric,
    issue756: issue756Codec,
    notNullTimestamp: notNullTimestampCodec,
    timestamptz: TYPES.timestamptz,
    authPayload: authPayloadCodec,
    FuncOutOutCompoundTypeRecord: registryConfig_pgCodecs_FuncOutOutCompoundTypeRecord_FuncOutOutCompoundTypeRecord,
    compoundType: compoundTypeCodec,
    color: colorCodec,
    enumCaps: enumCapsCodec,
    enumWithEmptyString: enumWithEmptyStringCodec,
    MutationOutOutCompoundTypeRecord: registryConfig_pgCodecs_MutationOutOutCompoundTypeRecord_MutationOutOutCompoundTypeRecord,
    QueryOutputTwoRowsRecord: registryConfig_pgCodecs_QueryOutputTwoRowsRecord_QueryOutputTwoRowsRecord,
    post: postCodec,
    anEnumArray: anEnumArrayCodec,
    anEnum: anEnumCodec,
    comptypeArray: comptypeArrayCodec,
    comptype: comptypeCodec,
    PersonComputedOutOutRecord: registryConfig_pgCodecs_PersonComputedOutOutRecord_PersonComputedOutOutRecord,
    PersonComputedInoutOutRecord: registryConfig_pgCodecs_PersonComputedInoutOutRecord_PersonComputedInoutOutRecord,
    PersonComputedFirstArgInoutOutRecord: registryConfig_pgCodecs_PersonComputedFirstArgInoutOutRecord_PersonComputedFirstArgInoutOutRecord,
    person: personCodec,
    email: emailCodec,
    wrappedUrl: wrappedUrlCodec,
    notNullUrl: notNullUrlCodec,
    hstore: TYPES.hstore,
    inet: TYPES.inet,
    cidr: TYPES.cidr,
    macaddr: TYPES.macaddr,
    timestamp: TYPES.timestamp,
    FuncOutComplexRecord: registryConfig_pgCodecs_FuncOutComplexRecord_FuncOutComplexRecord,
    FuncOutComplexSetofRecord: registryConfig_pgCodecs_FuncOutComplexSetofRecord_FuncOutComplexSetofRecord,
    MutationOutComplexRecord: registryConfig_pgCodecs_MutationOutComplexRecord_MutationOutComplexRecord,
    MutationOutComplexSetofRecord: registryConfig_pgCodecs_MutationOutComplexSetofRecord_MutationOutComplexSetofRecord,
    PersonComputedComplexRecord: registryConfig_pgCodecs_PersonComputedComplexRecord_PersonComputedComplexRecord,
    lists: listsCodec,
    int4Array: int4ArrayCodec,
    colorArray: colorArrayCodec,
    dateArray: dateArrayCodec,
    date: TYPES.date,
    timestamptzArray: timestamptzArrayCodec,
    compoundTypeArray: compoundTypeArrayCodec,
    byteaArray: byteaArrayCodec,
    bytea: TYPES.bytea,
    types: typesCodec,
    anInt: anIntCodec,
    anotherInt: anotherIntCodec,
    numrange: numrangeCodec,
    daterange: daterangeCodec,
    anIntRange: anIntRangeCodec,
    time: TYPES.time,
    timetz: TYPES.timetz,
    money: TYPES.money,
    nestedCompoundType: nestedCompoundTypeCodec,
    point: TYPES.point,
    regproc: TYPES.regproc,
    regprocedure: TYPES.regprocedure,
    regoper: TYPES.regoper,
    regoperator: TYPES.regoperator,
    regclass: TYPES.regclass,
    regtype: TYPES.regtype,
    regconfig: TYPES.regconfig,
    regdictionary: TYPES.regdictionary,
    textArrayDomain: textArrayDomainCodec,
    int8ArrayDomain: int8ArrayDomainCodec,
    ltree: spec_types_attributes_ltree_codec_ltree,
    "ltree[]": spec_types_attributes_ltree_array_codec_ltree_,
    bpchar: TYPES.bpchar,
    jwtTokenArray: listOfCodec(jwtTokenCodec, {
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "b",
          name: "_jwt_token"
        },
        tags: {
          __proto__: null
        }
      },
      typeDelim: ",",
      description: undefined,
      name: "jwtTokenArray"
    }),
    typesArray: listOfCodec(typesCodec, {
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "b",
          name: "_types"
        },
        tags: {
          __proto__: null
        }
      },
      typeDelim: ",",
      description: undefined,
      name: "typesArray"
    }),
    floatrange: floatrangeCodec,
    postArray: postArrayCodec,
    int8Array: int8ArrayCodec,
    tablefuncCrosstab2: recordCodec({
      name: "tablefuncCrosstab2",
      identifier: sql.identifier("a", "tablefunc_crosstab_2"),
      attributes: {
        __proto__: null,
        row_name: {
          description: undefined,
          codec: TYPES.text,
          notNull: false,
          hasDefault: false,
          extensions: {
            tags: {}
          }
        },
        category_1: {
          description: undefined,
          codec: TYPES.text,
          notNull: false,
          hasDefault: false,
          extensions: {
            tags: {}
          }
        },
        category_2: {
          description: undefined,
          codec: TYPES.text,
          notNull: false,
          hasDefault: false,
          extensions: {
            tags: {}
          }
        }
      },
      description: undefined,
      extensions: {
        isTableLike: false,
        pg: {
          serviceName: "main",
          schemaName: "a",
          name: "tablefunc_crosstab_2"
        },
        tags: {
          __proto__: null
        }
      },
      executor: executor
    }),
    tablefuncCrosstab3: recordCodec({
      name: "tablefuncCrosstab3",
      identifier: sql.identifier("a", "tablefunc_crosstab_3"),
      attributes: {
        __proto__: null,
        row_name: {
          description: undefined,
          codec: TYPES.text,
          notNull: false,
          hasDefault: false,
          extensions: {
            tags: {}
          }
        },
        category_1: {
          description: undefined,
          codec: TYPES.text,
          notNull: false,
          hasDefault: false,
          extensions: {
            tags: {}
          }
        },
        category_2: {
          description: undefined,
          codec: TYPES.text,
          notNull: false,
          hasDefault: false,
          extensions: {
            tags: {}
          }
        },
        category_3: {
          description: undefined,
          codec: TYPES.text,
          notNull: false,
          hasDefault: false,
          extensions: {
            tags: {}
          }
        }
      },
      description: undefined,
      extensions: {
        isTableLike: false,
        pg: {
          serviceName: "main",
          schemaName: "a",
          name: "tablefunc_crosstab_3"
        },
        tags: {
          __proto__: null
        }
      },
      executor: executor
    }),
    tablefuncCrosstab4: recordCodec({
      name: "tablefuncCrosstab4",
      identifier: sql.identifier("a", "tablefunc_crosstab_4"),
      attributes: {
        __proto__: null,
        row_name: {
          description: undefined,
          codec: TYPES.text,
          notNull: false,
          hasDefault: false,
          extensions: {
            tags: {}
          }
        },
        category_1: {
          description: undefined,
          codec: TYPES.text,
          notNull: false,
          hasDefault: false,
          extensions: {
            tags: {}
          }
        },
        category_2: {
          description: undefined,
          codec: TYPES.text,
          notNull: false,
          hasDefault: false,
          extensions: {
            tags: {}
          }
        },
        category_3: {
          description: undefined,
          codec: TYPES.text,
          notNull: false,
          hasDefault: false,
          extensions: {
            tags: {}
          }
        },
        category_4: {
          description: undefined,
          codec: TYPES.text,
          notNull: false,
          hasDefault: false,
          extensions: {
            tags: {}
          }
        }
      },
      description: undefined,
      extensions: {
        isTableLike: false,
        pg: {
          serviceName: "main",
          schemaName: "a",
          name: "tablefunc_crosstab_4"
        },
        tags: {
          __proto__: null
        }
      },
      executor: executor
    })
  },
  pgResources: {
    __proto__: null,
    current_user_id: {
      executor,
      name: "current_user_id",
      identifier: "main.c.current_user_id()",
      from(...args) {
        return sql`${current_user_idFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [],
      isUnique: !false,
      codec: TYPES.int,
      uniques: [],
      isMutation: false,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "c",
          name: "current_user_id"
        },
        tags: {}
      },
      description: undefined
    },
    func_out: {
      executor,
      name: "func_out",
      identifier: "main.c.func_out(int4)",
      from(...args) {
        return sql`${func_outFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [],
      isUnique: !false,
      codec: TYPES.int,
      uniques: [],
      isMutation: false,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "c",
          name: "func_out"
        },
        tags: {},
        singleOutputParameterName: "o"
      },
      description: undefined
    },
    func_out_setof: {
      executor,
      name: "func_out_setof",
      identifier: "main.c.func_out_setof(int4)",
      from(...args) {
        return sql`${func_out_setofFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [],
      isUnique: !true,
      codec: TYPES.int,
      uniques: [],
      isMutation: false,
      hasImplicitOrder: true,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "c",
          name: "func_out_setof"
        },
        tags: {},
        singleOutputParameterName: "o"
      },
      description: undefined
    },
    func_out_unnamed: {
      executor,
      name: "func_out_unnamed",
      identifier: "main.c.func_out_unnamed(int4)",
      from(...args) {
        return sql`${func_out_unnamedFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [],
      isUnique: !false,
      codec: TYPES.int,
      uniques: [],
      isMutation: false,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "c",
          name: "func_out_unnamed"
        },
        tags: {}
      },
      description: undefined
    },
    mutation_out: {
      executor,
      name: "mutation_out",
      identifier: "main.c.mutation_out(int4)",
      from(...args) {
        return sql`${mutation_outFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [],
      isUnique: !false,
      codec: TYPES.int,
      uniques: [],
      isMutation: true,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "c",
          name: "mutation_out"
        },
        tags: {},
        singleOutputParameterName: "o"
      },
      description: undefined
    },
    mutation_out_setof: {
      executor,
      name: "mutation_out_setof",
      identifier: "main.c.mutation_out_setof(int4)",
      from(...args) {
        return sql`${mutation_out_setofFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [],
      isUnique: !true,
      codec: TYPES.int,
      uniques: [],
      isMutation: true,
      hasImplicitOrder: true,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "c",
          name: "mutation_out_setof"
        },
        tags: {},
        singleOutputParameterName: "o"
      },
      description: undefined
    },
    mutation_out_unnamed: {
      executor,
      name: "mutation_out_unnamed",
      identifier: "main.c.mutation_out_unnamed(int4)",
      from(...args) {
        return sql`${mutation_out_unnamedFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [],
      isUnique: !false,
      codec: TYPES.int,
      uniques: [],
      isMutation: true,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "c",
          name: "mutation_out_unnamed"
        },
        tags: {}
      },
      description: undefined
    },
    no_args_mutation: {
      executor,
      name: "no_args_mutation",
      identifier: "main.c.no_args_mutation()",
      from(...args) {
        return sql`${no_args_mutationFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [],
      isUnique: !false,
      codec: TYPES.int,
      uniques: [],
      isMutation: true,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "c",
          name: "no_args_mutation"
        },
        tags: {}
      },
      description: undefined
    },
    no_args_query: {
      executor,
      name: "no_args_query",
      identifier: "main.c.no_args_query()",
      from(...args) {
        return sql`${no_args_queryFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [],
      isUnique: !false,
      codec: TYPES.int,
      uniques: [],
      isMutation: false,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "c",
          name: "no_args_query"
        },
        tags: {}
      },
      description: undefined
    },
    return_void_mutation: {
      executor,
      name: "return_void_mutation",
      identifier: "main.a.return_void_mutation()",
      from(...args) {
        return sql`${return_void_mutationFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [],
      isUnique: !false,
      codec: TYPES.void,
      uniques: [],
      isMutation: true,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "a",
          name: "return_void_mutation"
        },
        tags: {}
      },
      description: undefined
    },
    mutation_interval_set: {
      executor,
      name: "mutation_interval_set",
      identifier: "main.a.mutation_interval_set()",
      from(...args) {
        return sql`${mutation_interval_setFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [],
      isUnique: !true,
      codec: TYPES.interval,
      uniques: [],
      isMutation: true,
      hasImplicitOrder: true,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "a",
          name: "mutation_interval_set"
        },
        tags: {}
      },
      description: undefined
    },
    query_interval_set: {
      executor,
      name: "query_interval_set",
      identifier: "main.a.query_interval_set()",
      from(...args) {
        return sql`${query_interval_setFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [],
      isUnique: !true,
      codec: TYPES.interval,
      uniques: [],
      isMutation: false,
      hasImplicitOrder: true,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "a",
          name: "query_interval_set"
        },
        tags: {}
      },
      description: undefined
    },
    static_big_integer: {
      executor,
      name: "static_big_integer",
      identifier: "main.a.static_big_integer()",
      from(...args) {
        return sql`${static_big_integerFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [],
      isUnique: !true,
      codec: TYPES.bigint,
      uniques: [],
      isMutation: false,
      hasImplicitOrder: true,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "a",
          name: "static_big_integer"
        },
        tags: {}
      },
      description: undefined
    },
    func_in_out: {
      executor,
      name: "func_in_out",
      identifier: "main.c.func_in_out(int4,int4)",
      from(...args) {
        return sql`${func_in_outFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: "i",
        required: true,
        notNull: false,
        codec: TYPES.int
      }],
      isUnique: !false,
      codec: TYPES.int,
      uniques: [],
      isMutation: false,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "c",
          name: "func_in_out"
        },
        tags: {},
        singleOutputParameterName: "o"
      },
      description: undefined
    },
    func_returns_table_one_col: {
      executor,
      name: "func_returns_table_one_col",
      identifier: "main.c.func_returns_table_one_col(int4,int4)",
      from(...args) {
        return sql`${func_returns_table_one_colFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: "i",
        required: true,
        notNull: false,
        codec: TYPES.int
      }],
      isUnique: !true,
      codec: TYPES.int,
      uniques: [],
      isMutation: false,
      hasImplicitOrder: true,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "c",
          name: "func_returns_table_one_col"
        },
        tags: {},
        singleOutputParameterName: "col1"
      },
      description: undefined
    },
    mutation_in_out: {
      executor,
      name: "mutation_in_out",
      identifier: "main.c.mutation_in_out(int4,int4)",
      from(...args) {
        return sql`${mutation_in_outFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: "i",
        required: true,
        notNull: false,
        codec: TYPES.int
      }],
      isUnique: !false,
      codec: TYPES.int,
      uniques: [],
      isMutation: true,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "c",
          name: "mutation_in_out"
        },
        tags: {},
        singleOutputParameterName: "o"
      },
      description: undefined
    },
    mutation_returns_table_one_col: {
      executor,
      name: "mutation_returns_table_one_col",
      identifier: "main.c.mutation_returns_table_one_col(int4,int4)",
      from(...args) {
        return sql`${mutation_returns_table_one_colFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: "i",
        required: true,
        notNull: false,
        codec: TYPES.int
      }],
      isUnique: !true,
      codec: TYPES.int,
      uniques: [],
      isMutation: true,
      hasImplicitOrder: true,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "c",
          name: "mutation_returns_table_one_col"
        },
        tags: {},
        singleOutputParameterName: "col1"
      },
      description: undefined
    },
    assert_something: {
      executor,
      name: "assert_something",
      identifier: "main.a.assert_something(text)",
      from(...args) {
        return sql`${assert_somethingFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: "in_arg",
        required: true,
        notNull: false,
        codec: TYPES.text
      }],
      isUnique: !false,
      codec: TYPES.void,
      uniques: [],
      isMutation: false,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "a",
          name: "assert_something"
        },
        tags: {}
      },
      description: undefined
    },
    assert_something_nx: {
      executor,
      name: "assert_something_nx",
      identifier: "main.a.assert_something_nx(text)",
      from(...args) {
        return sql`${assert_something_nxFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: "in_arg",
        required: true,
        notNull: false,
        codec: TYPES.text
      }],
      isUnique: !false,
      codec: TYPES.void,
      uniques: [],
      isMutation: false,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "a",
          name: "assert_something_nx"
        },
        tags: {
          omit: "execute",
          behavior: ["-queryField -mutationField -typeField"]
        }
      },
      description: undefined
    },
    json_identity: {
      executor,
      name: "json_identity",
      identifier: "main.c.json_identity(json)",
      from(...args) {
        return sql`${json_identityFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: "json",
        required: true,
        notNull: false,
        codec: TYPES.json
      }],
      isUnique: !false,
      codec: TYPES.json,
      uniques: [],
      isMutation: false,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "c",
          name: "json_identity"
        },
        tags: {}
      },
      description: undefined
    },
    json_identity_mutation: {
      executor,
      name: "json_identity_mutation",
      identifier: "main.c.json_identity_mutation(json)",
      from(...args) {
        return sql`${json_identity_mutationFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: "json",
        required: true,
        notNull: false,
        codec: TYPES.json
      }],
      isUnique: !false,
      codec: TYPES.json,
      uniques: [],
      isMutation: true,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "c",
          name: "json_identity_mutation"
        },
        tags: {}
      },
      description: undefined
    },
    jsonb_identity: {
      executor,
      name: "jsonb_identity",
      identifier: "main.c.jsonb_identity(jsonb)",
      from(...args) {
        return sql`${jsonb_identityFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: "json",
        required: true,
        notNull: false,
        codec: TYPES.jsonb
      }],
      isUnique: !false,
      codec: TYPES.jsonb,
      uniques: [],
      isMutation: false,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "c",
          name: "jsonb_identity"
        },
        tags: {}
      },
      description: undefined
    },
    jsonb_identity_mutation: {
      executor,
      name: "jsonb_identity_mutation",
      identifier: "main.c.jsonb_identity_mutation(jsonb)",
      from(...args) {
        return sql`${jsonb_identity_mutationFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: "json",
        required: true,
        notNull: false,
        codec: TYPES.jsonb
      }],
      isUnique: !false,
      codec: TYPES.jsonb,
      uniques: [],
      isMutation: true,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "c",
          name: "jsonb_identity_mutation"
        },
        tags: {}
      },
      description: undefined
    },
    jsonb_identity_mutation_plpgsql: {
      executor,
      name: "jsonb_identity_mutation_plpgsql",
      identifier: "main.c.jsonb_identity_mutation_plpgsql(jsonb)",
      from(...args) {
        return sql`${jsonb_identity_mutation_plpgsqlFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: "_the_json",
        required: true,
        notNull: true,
        codec: TYPES.jsonb
      }],
      isUnique: !false,
      codec: TYPES.jsonb,
      uniques: [],
      isMutation: true,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "c",
          name: "jsonb_identity_mutation_plpgsql"
        },
        tags: {}
      },
      description: undefined
    },
    jsonb_identity_mutation_plpgsql_with_default: {
      executor,
      name: "jsonb_identity_mutation_plpgsql_with_default",
      identifier: "main.c.jsonb_identity_mutation_plpgsql_with_default(jsonb)",
      from(...args) {
        return sql`${jsonb_identity_mutation_plpgsql_with_defaultFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: "_the_json",
        required: false,
        notNull: true,
        codec: TYPES.jsonb
      }],
      isUnique: !false,
      codec: TYPES.jsonb,
      uniques: [],
      isMutation: true,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "c",
          name: "jsonb_identity_mutation_plpgsql_with_default"
        },
        tags: {}
      },
      description: undefined
    },
    add_1_mutation: {
      executor,
      name: "add_1_mutation",
      identifier: "main.a.add_1_mutation(int4,int4)",
      from(...args) {
        return sql`${add_1_mutationFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: null,
        required: true,
        notNull: true,
        codec: TYPES.int
      }, {
        name: null,
        required: true,
        notNull: true,
        codec: TYPES.int
      }],
      isUnique: !false,
      codec: TYPES.int,
      uniques: [],
      isMutation: true,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "a",
          name: "add_1_mutation"
        },
        tags: {
          notNull: true
        }
      },
      description: "lol, add some stuff 1 mutation"
    },
    add_1_query: {
      executor,
      name: "add_1_query",
      identifier: "main.a.add_1_query(int4,int4)",
      from(...args) {
        return sql`${add_1_queryFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: null,
        required: true,
        notNull: true,
        codec: TYPES.int
      }, {
        name: null,
        required: true,
        notNull: true,
        codec: TYPES.int
      }],
      isUnique: !false,
      codec: TYPES.int,
      uniques: [],
      isMutation: false,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "a",
          name: "add_1_query"
        },
        tags: {}
      },
      description: "lol, add some stuff 1 query"
    },
    add_2_mutation: {
      executor,
      name: "add_2_mutation",
      identifier: "main.a.add_2_mutation(int4,int4)",
      from(...args) {
        return sql`${add_2_mutationFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: "a",
        required: true,
        notNull: true,
        codec: TYPES.int
      }, {
        name: "b",
        required: false,
        notNull: true,
        codec: TYPES.int
      }],
      isUnique: !false,
      codec: TYPES.int,
      uniques: [],
      isMutation: true,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "a",
          name: "add_2_mutation"
        },
        tags: {}
      },
      description: "lol, add some stuff 2 mutation"
    },
    add_2_query: {
      executor,
      name: "add_2_query",
      identifier: "main.a.add_2_query(int4,int4)",
      from(...args) {
        return sql`${add_2_queryFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: "a",
        required: true,
        notNull: true,
        codec: TYPES.int
      }, {
        name: "b",
        required: false,
        notNull: true,
        codec: TYPES.int
      }],
      isUnique: !false,
      codec: TYPES.int,
      uniques: [],
      isMutation: false,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "a",
          name: "add_2_query"
        },
        tags: {}
      },
      description: "lol, add some stuff 2 query"
    },
    add_3_mutation: {
      executor,
      name: "add_3_mutation",
      identifier: "main.a.add_3_mutation(int4,int4)",
      from(...args) {
        return sql`${add_3_mutationFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: "a",
        required: true,
        notNull: false,
        codec: TYPES.int
      }, {
        name: "",
        required: true,
        notNull: false,
        codec: TYPES.int
      }],
      isUnique: !false,
      codec: TYPES.int,
      uniques: [],
      isMutation: true,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "a",
          name: "add_3_mutation"
        },
        tags: {}
      },
      description: "lol, add some stuff 3 mutation"
    },
    add_3_query: {
      executor,
      name: "add_3_query",
      identifier: "main.a.add_3_query(int4,int4)",
      from(...args) {
        return sql`${add_3_queryFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: "a",
        required: true,
        notNull: false,
        codec: TYPES.int
      }, {
        name: "",
        required: true,
        notNull: false,
        codec: TYPES.int
      }],
      isUnique: !false,
      codec: TYPES.int,
      uniques: [],
      isMutation: false,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "a",
          name: "add_3_query"
        },
        tags: {}
      },
      description: "lol, add some stuff 3 query"
    },
    add_4_mutation: {
      executor,
      name: "add_4_mutation",
      identifier: "main.a.add_4_mutation(int4,int4)",
      from(...args) {
        return sql`${add_4_mutationFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: "",
        required: true,
        notNull: false,
        codec: TYPES.int
      }, {
        name: "b",
        required: false,
        notNull: false,
        codec: TYPES.int
      }],
      isUnique: !false,
      codec: TYPES.int,
      uniques: [],
      isMutation: true,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "a",
          name: "add_4_mutation"
        },
        tags: {}
      },
      description: "lol, add some stuff 4 mutation"
    },
    add_4_mutation_error: {
      executor,
      name: "add_4_mutation_error",
      identifier: "main.a.add_4_mutation_error(int4,int4)",
      from(...args) {
        return sql`${add_4_mutation_errorFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: "",
        required: true,
        notNull: false,
        codec: TYPES.int
      }, {
        name: "b",
        required: false,
        notNull: false,
        codec: TYPES.int
      }],
      isUnique: !false,
      codec: TYPES.int,
      uniques: [],
      isMutation: true,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "a",
          name: "add_4_mutation_error"
        },
        tags: {}
      },
      description: undefined
    },
    add_4_query: {
      executor,
      name: "add_4_query",
      identifier: "main.a.add_4_query(int4,int4)",
      from(...args) {
        return sql`${add_4_queryFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: "",
        required: true,
        notNull: false,
        codec: TYPES.int
      }, {
        name: "b",
        required: false,
        notNull: false,
        codec: TYPES.int
      }],
      isUnique: !false,
      codec: TYPES.int,
      uniques: [],
      isMutation: false,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "a",
          name: "add_4_query"
        },
        tags: {}
      },
      description: "lol, add some stuff 4 query"
    },
    mult_1: {
      executor,
      name: "mult_1",
      identifier: "main.b.mult_1(int4,int4)",
      from(...args) {
        return sql`${mult_1FunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: null,
        required: true,
        notNull: false,
        codec: TYPES.int
      }, {
        name: null,
        required: true,
        notNull: false,
        codec: TYPES.int
      }],
      isUnique: !false,
      codec: TYPES.int,
      uniques: [],
      isMutation: true,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "b",
          name: "mult_1"
        },
        tags: {}
      },
      description: undefined
    },
    mult_2: {
      executor,
      name: "mult_2",
      identifier: "main.b.mult_2(int4,int4)",
      from(...args) {
        return sql`${mult_2FunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: null,
        required: true,
        notNull: false,
        codec: TYPES.int
      }, {
        name: null,
        required: true,
        notNull: false,
        codec: TYPES.int
      }],
      isUnique: !false,
      codec: TYPES.int,
      uniques: [],
      isMutation: true,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "b",
          name: "mult_2"
        },
        tags: {}
      },
      description: undefined
    },
    mult_3: {
      executor,
      name: "mult_3",
      identifier: "main.b.mult_3(int4,int4)",
      from(...args) {
        return sql`${mult_3FunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: null,
        required: true,
        notNull: true,
        codec: TYPES.int
      }, {
        name: null,
        required: true,
        notNull: true,
        codec: TYPES.int
      }],
      isUnique: !false,
      codec: TYPES.int,
      uniques: [],
      isMutation: true,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "b",
          name: "mult_3"
        },
        tags: {}
      },
      description: undefined
    },
    mult_4: {
      executor,
      name: "mult_4",
      identifier: "main.b.mult_4(int4,int4)",
      from(...args) {
        return sql`${mult_4FunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: null,
        required: true,
        notNull: true,
        codec: TYPES.int
      }, {
        name: null,
        required: true,
        notNull: true,
        codec: TYPES.int
      }],
      isUnique: !false,
      codec: TYPES.int,
      uniques: [],
      isMutation: true,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "b",
          name: "mult_4"
        },
        tags: {}
      },
      description: undefined
    },
    func_in_inout: {
      executor,
      name: "func_in_inout",
      identifier: "main.c.func_in_inout(int4,int4)",
      from(...args) {
        return sql`${func_in_inoutFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: "i",
        required: true,
        notNull: false,
        codec: TYPES.int
      }, {
        name: "ino",
        required: true,
        notNull: false,
        codec: TYPES.int
      }],
      isUnique: !false,
      codec: TYPES.int,
      uniques: [],
      isMutation: false,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "c",
          name: "func_in_inout"
        },
        tags: {},
        singleOutputParameterName: "ino"
      },
      description: undefined
    },
    func_out_out: {
      executor,
      name: "func_out_out",
      identifier: "main.c.func_out_out(int4,text)",
      from(...args) {
        return sql`${func_out_outFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [],
      isUnique: !false,
      codec: registryConfig_pgCodecs_FuncOutOutRecord_FuncOutOutRecord,
      uniques: [],
      isMutation: false,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "c",
          name: "func_out_out"
        },
        tags: {}
      },
      description: undefined
    },
    func_out_out_setof: {
      executor,
      name: "func_out_out_setof",
      identifier: "main.c.func_out_out_setof(int4,text)",
      from(...args) {
        return sql`${func_out_out_setofFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [],
      isUnique: !true,
      codec: registryConfig_pgCodecs_FuncOutOutSetofRecord_FuncOutOutSetofRecord,
      uniques: [],
      isMutation: false,
      hasImplicitOrder: true,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "c",
          name: "func_out_out_setof"
        },
        tags: {}
      },
      description: undefined
    },
    func_out_out_unnamed: {
      executor,
      name: "func_out_out_unnamed",
      identifier: "main.c.func_out_out_unnamed(int4,text)",
      from(...args) {
        return sql`${func_out_out_unnamedFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [],
      isUnique: !false,
      codec: registryConfig_pgCodecs_FuncOutOutUnnamedRecord_FuncOutOutUnnamedRecord,
      uniques: [],
      isMutation: false,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "c",
          name: "func_out_out_unnamed"
        },
        tags: {}
      },
      description: undefined
    },
    mutation_in_inout: {
      executor,
      name: "mutation_in_inout",
      identifier: "main.c.mutation_in_inout(int4,int4)",
      from(...args) {
        return sql`${mutation_in_inoutFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: "i",
        required: true,
        notNull: false,
        codec: TYPES.int
      }, {
        name: "ino",
        required: true,
        notNull: false,
        codec: TYPES.int
      }],
      isUnique: !false,
      codec: TYPES.int,
      uniques: [],
      isMutation: true,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "c",
          name: "mutation_in_inout"
        },
        tags: {},
        singleOutputParameterName: "ino"
      },
      description: undefined
    },
    mutation_out_out: {
      executor,
      name: "mutation_out_out",
      identifier: "main.c.mutation_out_out(int4,text)",
      from(...args) {
        return sql`${mutation_out_outFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [],
      isUnique: !false,
      codec: registryConfig_pgCodecs_MutationOutOutRecord_MutationOutOutRecord,
      uniques: [],
      isMutation: true,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "c",
          name: "mutation_out_out"
        },
        tags: {}
      },
      description: undefined
    },
    mutation_out_out_setof: {
      executor,
      name: "mutation_out_out_setof",
      identifier: "main.c.mutation_out_out_setof(int4,text)",
      from(...args) {
        return sql`${mutation_out_out_setofFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [],
      isUnique: !true,
      codec: registryConfig_pgCodecs_MutationOutOutSetofRecord_MutationOutOutSetofRecord,
      uniques: [],
      isMutation: true,
      hasImplicitOrder: true,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "c",
          name: "mutation_out_out_setof"
        },
        tags: {}
      },
      description: undefined
    },
    mutation_out_out_unnamed: {
      executor,
      name: "mutation_out_out_unnamed",
      identifier: "main.c.mutation_out_out_unnamed(int4,text)",
      from(...args) {
        return sql`${mutation_out_out_unnamedFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [],
      isUnique: !false,
      codec: registryConfig_pgCodecs_MutationOutOutUnnamedRecord_MutationOutOutUnnamedRecord,
      uniques: [],
      isMutation: true,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "c",
          name: "mutation_out_out_unnamed"
        },
        tags: {}
      },
      description: undefined
    },
    search_test_summaries: {
      executor,
      name: "search_test_summaries",
      identifier: "main.c.search_test_summaries(int4,interval)",
      from(...args) {
        return sql`${search_test_summariesFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [],
      isUnique: !true,
      codec: registryConfig_pgCodecs_SearchTestSummariesRecord_SearchTestSummariesRecord,
      uniques: [],
      isMutation: false,
      hasImplicitOrder: true,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "c",
          name: "search_test_summaries"
        },
        tags: {
          simpleCollections: "only",
          behavior: ["+list -connection"]
        }
      },
      description: undefined
    },
    optional_missing_middle_1: {
      executor,
      name: "optional_missing_middle_1",
      identifier: "main.a.optional_missing_middle_1(int4,int4,int4)",
      from(...args) {
        return sql`${optional_missing_middle_1FunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: "",
        required: true,
        notNull: true,
        codec: TYPES.int
      }, {
        name: "b",
        required: false,
        notNull: true,
        codec: TYPES.int
      }, {
        name: "c",
        required: false,
        notNull: true,
        codec: TYPES.int
      }],
      isUnique: !false,
      codec: TYPES.int,
      uniques: [],
      isMutation: false,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "a",
          name: "optional_missing_middle_1"
        },
        tags: {}
      },
      description: undefined
    },
    optional_missing_middle_2: {
      executor,
      name: "optional_missing_middle_2",
      identifier: "main.a.optional_missing_middle_2(int4,int4,int4)",
      from(...args) {
        return sql`${optional_missing_middle_2FunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: "a",
        required: true,
        notNull: true,
        codec: TYPES.int
      }, {
        name: "b",
        required: false,
        notNull: true,
        codec: TYPES.int
      }, {
        name: "c",
        required: false,
        notNull: true,
        codec: TYPES.int
      }],
      isUnique: !false,
      codec: TYPES.int,
      uniques: [],
      isMutation: false,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "a",
          name: "optional_missing_middle_2"
        },
        tags: {}
      },
      description: undefined
    },
    optional_missing_middle_3: {
      executor,
      name: "optional_missing_middle_3",
      identifier: "main.a.optional_missing_middle_3(int4,int4,int4)",
      from(...args) {
        return sql`${optional_missing_middle_3FunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: "a",
        required: true,
        notNull: true,
        codec: TYPES.int
      }, {
        name: "",
        required: false,
        notNull: true,
        codec: TYPES.int
      }, {
        name: "c",
        required: false,
        notNull: true,
        codec: TYPES.int
      }],
      isUnique: !false,
      codec: TYPES.int,
      uniques: [],
      isMutation: false,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "a",
          name: "optional_missing_middle_3"
        },
        tags: {}
      },
      description: undefined
    },
    optional_missing_middle_4: {
      executor,
      name: "optional_missing_middle_4",
      identifier: "main.a.optional_missing_middle_4(int4,int4,int4)",
      from(...args) {
        return sql`${optional_missing_middle_4FunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: "",
        required: true,
        notNull: true,
        codec: TYPES.int
      }, {
        name: "b",
        required: false,
        notNull: true,
        codec: TYPES.int
      }, {
        name: "",
        required: false,
        notNull: true,
        codec: TYPES.int
      }],
      isUnique: !false,
      codec: TYPES.int,
      uniques: [],
      isMutation: false,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "a",
          name: "optional_missing_middle_4"
        },
        tags: {}
      },
      description: undefined
    },
    optional_missing_middle_5: {
      executor,
      name: "optional_missing_middle_5",
      identifier: "main.a.optional_missing_middle_5(int4,int4,int4)",
      from(...args) {
        return sql`${optional_missing_middle_5FunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: "a",
        required: true,
        notNull: true,
        codec: TYPES.int
      }, {
        name: "",
        required: false,
        notNull: true,
        codec: TYPES.int
      }, {
        name: "",
        required: false,
        notNull: true,
        codec: TYPES.int
      }],
      isUnique: !false,
      codec: TYPES.int,
      uniques: [],
      isMutation: false,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "a",
          name: "optional_missing_middle_5"
        },
        tags: {}
      },
      description: undefined
    },
    func_out_unnamed_out_out_unnamed: {
      executor,
      name: "func_out_unnamed_out_out_unnamed",
      identifier: "main.c.func_out_unnamed_out_out_unnamed(int4,text,int4)",
      from(...args) {
        return sql`${func_out_unnamed_out_out_unnamedFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [],
      isUnique: !false,
      codec: registryConfig_pgCodecs_FuncOutUnnamedOutOutUnnamedRecord_FuncOutUnnamedOutOutUnnamedRecord,
      uniques: [],
      isMutation: false,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "c",
          name: "func_out_unnamed_out_out_unnamed"
        },
        tags: {}
      },
      description: undefined
    },
    int_set_mutation: {
      executor,
      name: "int_set_mutation",
      identifier: "main.c.int_set_mutation(int4,int4,int4)",
      from(...args) {
        return sql`${int_set_mutationFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: "x",
        required: true,
        notNull: false,
        codec: TYPES.int
      }, {
        name: "y",
        required: true,
        notNull: false,
        codec: TYPES.int
      }, {
        name: "z",
        required: true,
        notNull: false,
        codec: TYPES.int
      }],
      isUnique: !true,
      codec: TYPES.int,
      uniques: [],
      isMutation: true,
      hasImplicitOrder: true,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "c",
          name: "int_set_mutation"
        },
        tags: {}
      },
      description: undefined
    },
    int_set_query: {
      executor,
      name: "int_set_query",
      identifier: "main.c.int_set_query(int4,int4,int4)",
      from(...args) {
        return sql`${int_set_queryFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: "x",
        required: true,
        notNull: false,
        codec: TYPES.int
      }, {
        name: "y",
        required: true,
        notNull: false,
        codec: TYPES.int
      }, {
        name: "z",
        required: true,
        notNull: false,
        codec: TYPES.int
      }],
      isUnique: !true,
      codec: TYPES.int,
      uniques: [],
      isMutation: false,
      hasImplicitOrder: true,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "c",
          name: "int_set_query"
        },
        tags: {}
      },
      description: undefined
    },
    mutation_out_unnamed_out_out_unnamed: {
      executor,
      name: "mutation_out_unnamed_out_out_unnamed",
      identifier: "main.c.mutation_out_unnamed_out_out_unnamed(int4,text,int4)",
      from(...args) {
        return sql`${mutation_out_unnamed_out_out_unnamedFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [],
      isUnique: !false,
      codec: registryConfig_pgCodecs_MutationOutUnnamedOutOutUnnamedRecord_MutationOutUnnamedOutOutUnnamedRecord,
      uniques: [],
      isMutation: true,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "c",
          name: "mutation_out_unnamed_out_out_unnamed"
        },
        tags: {}
      },
      description: undefined
    },
    mutation_returns_table_multi_col: {
      executor,
      name: "mutation_returns_table_multi_col",
      identifier: "main.c.mutation_returns_table_multi_col(int4,int4,text)",
      from(...args) {
        return sql`${mutation_returns_table_multi_colFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: "i",
        required: true,
        notNull: false,
        codec: TYPES.int
      }],
      isUnique: !true,
      codec: registryConfig_pgCodecs_MutationReturnsTableMultiColRecord_MutationReturnsTableMultiColRecord,
      uniques: [],
      isMutation: true,
      hasImplicitOrder: true,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "c",
          name: "mutation_returns_table_multi_col"
        },
        tags: {}
      },
      description: undefined
    },
    func_returns_table_multi_col: {
      executor,
      name: "func_returns_table_multi_col",
      identifier: "main.c.func_returns_table_multi_col(int4,int4,int4,int4,text)",
      from(...args) {
        return sql`${func_returns_table_multi_colFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: "i",
        required: true,
        notNull: false,
        codec: TYPES.int
      }, {
        name: "a",
        required: false,
        notNull: false,
        codec: TYPES.int
      }, {
        name: "b",
        required: false,
        notNull: false,
        codec: TYPES.int
      }],
      isUnique: !true,
      codec: registryConfig_pgCodecs_FuncReturnsTableMultiColRecord_FuncReturnsTableMultiColRecord,
      uniques: [],
      isMutation: false,
      hasImplicitOrder: true,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "c",
          name: "func_returns_table_multi_col"
        },
        tags: {}
      },
      description: undefined
    },
    guid_fn: {
      executor,
      name: "guid_fn",
      identifier: "main.b.guid_fn(b.guid)",
      from(...args) {
        return sql`${guid_fnFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: "g",
        required: true,
        notNull: false,
        codec: guidCodec
      }],
      isUnique: !false,
      codec: guidCodec,
      uniques: [],
      isMutation: true,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "b",
          name: "guid_fn"
        },
        tags: {}
      },
      description: undefined
    },
    mutation_interval_array: {
      executor,
      name: "mutation_interval_array",
      identifier: "main.a.mutation_interval_array()",
      from(...args) {
        return sql`${mutation_interval_arrayFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [],
      isUnique: !false,
      codec: intervalArrayCodec,
      uniques: [],
      isMutation: true,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "a",
          name: "mutation_interval_array"
        },
        tags: {}
      },
      description: undefined
    },
    query_interval_array: {
      executor,
      name: "query_interval_array",
      identifier: "main.a.query_interval_array()",
      from(...args) {
        return sql`${query_interval_arrayFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [],
      isUnique: !false,
      codec: intervalArrayCodec,
      uniques: [],
      isMutation: false,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "a",
          name: "query_interval_array"
        },
        tags: {}
      },
      description: undefined
    },
    mutation_text_array: {
      executor,
      name: "mutation_text_array",
      identifier: "main.a.mutation_text_array()",
      from(...args) {
        return sql`${mutation_text_arrayFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [],
      isUnique: !false,
      codec: textArrayCodec,
      uniques: [],
      isMutation: true,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "a",
          name: "mutation_text_array"
        },
        tags: {}
      },
      description: undefined
    },
    query_text_array: {
      executor,
      name: "query_text_array",
      identifier: "main.a.query_text_array()",
      from(...args) {
        return sql`${query_text_arrayFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [],
      isUnique: !false,
      codec: textArrayCodec,
      uniques: [],
      isMutation: false,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "a",
          name: "query_text_array"
        },
        tags: {}
      },
      description: undefined
    },
    non_updatable_view: {
      executor: executor,
      name: "non_updatable_view",
      identifier: "main.a.non_updatable_view",
      from: nonUpdatableViewIdentifier,
      codec: nonUpdatableViewCodec,
      uniques: [],
      isVirtual: false,
      description: undefined,
      extensions: {
        description: undefined,
        pg: {
          serviceName: "main",
          schemaName: "a",
          name: "non_updatable_view"
        },
        isInsertable: false,
        isUpdatable: false,
        isDeletable: false,
        tags: {}
      }
    },
    inputs: {
      executor: executor,
      name: "inputs",
      identifier: "main.a.inputs",
      from: inputsIdentifier,
      codec: inputsCodec,
      uniques: inputsUniques,
      isVirtual: false,
      description: "Should output as Input",
      extensions: {
        description: "Should output as Input",
        pg: {
          serviceName: "main",
          schemaName: "a",
          name: "inputs"
        },
        isInsertable: true,
        isUpdatable: true,
        isDeletable: true,
        tags: {}
      }
    },
    patchs: {
      executor: executor,
      name: "patchs",
      identifier: "main.a.patchs",
      from: patchsIdentifier,
      codec: patchsCodec,
      uniques: patchsUniques,
      isVirtual: false,
      description: "Should output as Patch",
      extensions: {
        description: "Should output as Patch",
        pg: {
          serviceName: "main",
          schemaName: "a",
          name: "patchs"
        },
        isInsertable: true,
        isUpdatable: true,
        isDeletable: true,
        tags: {}
      }
    },
    reserved: {
      executor: executor,
      name: "reserved",
      identifier: "main.a.reserved",
      from: reservedIdentifier,
      codec: reservedCodec,
      uniques: reservedUniques,
      isVirtual: false,
      description: undefined,
      extensions: {
        description: undefined,
        pg: {
          serviceName: "main",
          schemaName: "a",
          name: "reserved"
        },
        isInsertable: true,
        isUpdatable: true,
        isDeletable: true,
        tags: {}
      }
    },
    reservedPatchs: {
      executor: executor,
      name: "reservedPatchs",
      identifier: "main.a.reservedPatchs",
      from: reservedPatchsIdentifier,
      codec: reservedPatchsCodec,
      uniques: reservedPatchsUniques,
      isVirtual: false,
      description: "`reservedPatchs` table should get renamed to ReservedPatchRecord to prevent clashes with ReservedPatch from `reserved` table",
      extensions: {
        description: "`reservedPatchs` table should get renamed to ReservedPatchRecord to prevent clashes with ReservedPatch from `reserved` table",
        pg: {
          serviceName: "main",
          schemaName: "a",
          name: "reservedPatchs"
        },
        isInsertable: true,
        isUpdatable: true,
        isDeletable: true,
        tags: {}
      }
    },
    reserved_input: {
      executor: executor,
      name: "reserved_input",
      identifier: "main.a.reserved_input",
      from: reservedInputIdentifier,
      codec: reservedInputCodec,
      uniques: reserved_inputUniques,
      isVirtual: false,
      description: "`reserved_input` table should get renamed to ReservedInputRecord to prevent clashes with ReservedInput from `reserved` table",
      extensions: {
        description: "`reserved_input` table should get renamed to ReservedInputRecord to prevent clashes with ReservedInput from `reserved` table",
        pg: {
          serviceName: "main",
          schemaName: "a",
          name: "reserved_input"
        },
        isInsertable: true,
        isUpdatable: true,
        isDeletable: true,
        tags: {}
      }
    },
    default_value: {
      executor: executor,
      name: "default_value",
      identifier: "main.a.default_value",
      from: defaultValueIdentifier,
      codec: defaultValueCodec,
      uniques: default_valueUniques,
      isVirtual: false,
      description: undefined,
      extensions: {
        description: undefined,
        pg: {
          serviceName: "main",
          schemaName: "a",
          name: "default_value"
        },
        isInsertable: true,
        isUpdatable: true,
        isDeletable: true,
        tags: {}
      }
    },
    foreign_key: registryConfig_pgResources_foreign_key_foreign_key,
    no_primary_key: {
      executor: executor,
      name: "no_primary_key",
      identifier: "main.a.no_primary_key",
      from: noPrimaryKeyIdentifier,
      codec: noPrimaryKeyCodec,
      uniques: [{
        isPrimary: false,
        attributes: ["id"],
        description: undefined,
        extensions: {
          tags: {
            __proto__: null
          }
        }
      }],
      isVirtual: false,
      description: undefined,
      extensions: {
        description: undefined,
        pg: {
          serviceName: "main",
          schemaName: "a",
          name: "no_primary_key"
        },
        isInsertable: true,
        isUpdatable: true,
        isDeletable: true,
        tags: {}
      }
    },
    testview: {
      executor: executor,
      name: "testview",
      identifier: "main.a.testview",
      from: testviewIdentifier,
      codec: testviewCodec,
      uniques: [],
      isVirtual: false,
      description: undefined,
      extensions: {
        description: undefined,
        pg: {
          serviceName: "main",
          schemaName: "a",
          name: "testview"
        },
        isInsertable: true,
        isUpdatable: true,
        isDeletable: true,
        tags: {}
      }
    },
    unique_foreign_key: registryConfig_pgResources_unique_foreign_key_unique_foreign_key,
    my_table: {
      executor: executor,
      name: "my_table",
      identifier: "main.c.my_table",
      from: myTableIdentifier,
      codec: myTableCodec,
      uniques: my_tableUniques,
      isVirtual: false,
      description: undefined,
      extensions: {
        description: undefined,
        pg: {
          serviceName: "main",
          schemaName: "c",
          name: "my_table"
        },
        isInsertable: true,
        isUpdatable: true,
        isDeletable: true,
        tags: {}
      }
    },
    person_secret: registryConfig_pgResources_person_secret_person_secret,
    unlogged: {
      executor: executor,
      name: "unlogged",
      identifier: "main.c.unlogged",
      from: unloggedIdentifier,
      codec: unloggedCodec,
      uniques: [{
        isPrimary: true,
        attributes: ["id"],
        description: undefined,
        extensions: {
          tags: {
            __proto__: null
          }
        }
      }],
      isVirtual: false,
      description: undefined,
      extensions: {
        description: undefined,
        pg: {
          serviceName: "main",
          schemaName: "c",
          name: "unlogged",
          persistence: "u"
        },
        isInsertable: true,
        isUpdatable: true,
        isDeletable: true,
        tags: {}
      }
    },
    view_table: {
      executor: executor,
      name: "view_table",
      identifier: "main.a.view_table",
      from: viewTableIdentifier,
      codec: viewTableCodec,
      uniques: view_tableUniques,
      isVirtual: false,
      description: undefined,
      extensions: {
        description: undefined,
        pg: {
          serviceName: "main",
          schemaName: "a",
          name: "view_table"
        },
        isInsertable: true,
        isUpdatable: true,
        isDeletable: true,
        tags: {}
      }
    },
    compound_key: registryConfig_pgResources_compound_key_compound_key,
    similar_table_1: {
      executor: executor,
      name: "similar_table_1",
      identifier: "main.a.similar_table_1",
      from: similarTable1Identifier,
      codec: similarTable1Codec,
      uniques: similar_table_1Uniques,
      isVirtual: false,
      description: undefined,
      extensions: {
        description: undefined,
        pg: {
          serviceName: "main",
          schemaName: "a",
          name: "similar_table_1"
        },
        isInsertable: true,
        isUpdatable: true,
        isDeletable: true,
        tags: {}
      }
    },
    similar_table_2: {
      executor: executor,
      name: "similar_table_2",
      identifier: "main.a.similar_table_2",
      from: similarTable2Identifier,
      codec: similarTable2Codec,
      uniques: similar_table_2Uniques,
      isVirtual: false,
      description: undefined,
      extensions: {
        description: undefined,
        pg: {
          serviceName: "main",
          schemaName: "a",
          name: "similar_table_2"
        },
        isInsertable: true,
        isUpdatable: true,
        isDeletable: true,
        tags: {}
      }
    },
    updatable_view: {
      executor: executor,
      name: "updatable_view",
      identifier: "main.b.updatable_view",
      from: updatableViewIdentifier,
      codec: updatableViewCodec,
      uniques: [{
        isPrimary: false,
        attributes: ["x"],
        description: undefined,
        extensions: {
          tags: {
            __proto__: null,
            behavior: "-single -update -delete"
          }
        }
      }],
      isVirtual: false,
      description: "YOYOYO!!",
      extensions: {
        description: "YOYOYO!!",
        pg: {
          serviceName: "main",
          schemaName: "b",
          name: "updatable_view"
        },
        isInsertable: true,
        isUpdatable: true,
        isDeletable: true,
        tags: {
          uniqueKey: "x",
          unique: "x|@behavior -single -update -delete"
        }
      }
    },
    null_test_record: {
      executor: executor,
      name: "null_test_record",
      identifier: "main.c.null_test_record",
      from: nullTestRecordIdentifier,
      codec: nullTestRecordCodec,
      uniques: null_test_recordUniques,
      isVirtual: false,
      description: undefined,
      extensions: {
        description: undefined,
        pg: {
          serviceName: "main",
          schemaName: "c",
          name: "null_test_record"
        },
        isInsertable: true,
        isUpdatable: true,
        isDeletable: true,
        tags: {}
      }
    },
    edge_case_computed: {
      executor,
      name: "edge_case_computed",
      identifier: "main.c.edge_case_computed(c.edge_case)",
      from(...args) {
        return sql`${edge_case_computedFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: "edge_case",
        required: true,
        notNull: false,
        codec: edgeCaseCodec
      }],
      isUnique: !false,
      codec: TYPES.text,
      uniques: [],
      isMutation: false,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "c",
          name: "edge_case_computed"
        },
        tags: {}
      },
      description: undefined
    },
    return_table_without_grants: PgResource.functionResourceOptions(registryConfig_pgResources_compound_key_compound_key, {
      name: "return_table_without_grants",
      identifier: "main.c.return_table_without_grants()",
      from(...args) {
        return sql`${return_table_without_grantsFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [],
      returnsArray: false,
      returnsSetof: false,
      isMutation: false,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "c",
          name: "return_table_without_grants"
        },
        tags: {}
      },
      description: undefined
    }),
    list_bde_mutation: {
      executor,
      name: "list_bde_mutation",
      identifier: "main.b.list_bde_mutation(_text,text,text)",
      from(...args) {
        return sql`${list_bde_mutationFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: "b",
        required: true,
        notNull: false,
        codec: textArrayCodec
      }, {
        name: "d",
        required: true,
        notNull: false,
        codec: TYPES.text
      }, {
        name: "e",
        required: true,
        notNull: false,
        codec: TYPES.text
      }],
      isUnique: !false,
      codec: uuidArrayCodec,
      uniques: [],
      isMutation: true,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "b",
          name: "list_bde_mutation"
        },
        tags: {}
      },
      description: undefined
    },
    edge_case: {
      executor: executor,
      name: "edge_case",
      identifier: "main.c.edge_case",
      from: edgeCaseIdentifier,
      codec: edgeCaseCodec,
      uniques: [],
      isVirtual: false,
      description: undefined,
      extensions: {
        description: undefined,
        pg: {
          serviceName: "main",
          schemaName: "c",
          name: "edge_case"
        },
        isInsertable: true,
        isUpdatable: true,
        isDeletable: true,
        tags: {}
      }
    },
    left_arm: registryConfig_pgResources_left_arm_left_arm,
    authenticate_fail: PgResource.functionResourceOptions(resourceConfig_jwt_token, {
      name: "authenticate_fail",
      identifier: "main.b.authenticate_fail()",
      from(...args) {
        return sql`${authenticate_failFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [],
      returnsArray: false,
      returnsSetof: false,
      isMutation: true,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "b",
          name: "authenticate_fail"
        },
        tags: {}
      },
      description: undefined
    }),
    authenticate: PgResource.functionResourceOptions(resourceConfig_jwt_token, {
      name: "authenticate",
      identifier: "main.b.authenticate(int4,numeric,int8)",
      from(...args) {
        return sql`${authenticateFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: "a",
        required: true,
        notNull: false,
        codec: TYPES.int
      }, {
        name: "b",
        required: true,
        notNull: false,
        codec: TYPES.numeric
      }, {
        name: "c",
        required: true,
        notNull: false,
        codec: TYPES.bigint
      }],
      returnsArray: false,
      returnsSetof: false,
      isMutation: true,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "b",
          name: "authenticate"
        },
        tags: {}
      },
      description: undefined
    }),
    issue756: registryConfig_pgResources_issue756_issue756,
    left_arm_identity: PgResource.functionResourceOptions(registryConfig_pgResources_left_arm_left_arm, {
      name: "left_arm_identity",
      identifier: "main.c.left_arm_identity(c.left_arm)",
      from(...args) {
        return sql`${left_arm_identityFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: "left_arm",
        required: true,
        notNull: false,
        codec: leftArmCodec,
        extensions: {
          variant: "base"
        }
      }],
      returnsArray: false,
      returnsSetof: false,
      isMutation: true,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "c",
          name: "left_arm_identity"
        },
        tags: {
          arg0variant: "base",
          resultFieldName: "leftArm"
        }
      },
      description: undefined
    }),
    issue756_mutation: PgResource.functionResourceOptions(registryConfig_pgResources_issue756_issue756, {
      name: "issue756_mutation",
      identifier: "main.c.issue756_mutation()",
      from(...args) {
        return sql`${issue756_mutationFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [],
      returnsArray: false,
      returnsSetof: false,
      isMutation: true,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "c",
          name: "issue756_mutation"
        },
        tags: {}
      },
      description: undefined
    }),
    issue756_set_mutation: PgResource.functionResourceOptions(registryConfig_pgResources_issue756_issue756, {
      name: "issue756_set_mutation",
      identifier: "main.c.issue756_set_mutation()",
      from(...args) {
        return sql`${issue756_set_mutationFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [],
      returnsArray: false,
      returnsSetof: true,
      isMutation: true,
      hasImplicitOrder: true,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "c",
          name: "issue756_set_mutation"
        },
        tags: {}
      },
      description: undefined
    }),
    authenticate_many: PgResource.functionResourceOptions(resourceConfig_jwt_token, {
      name: "authenticate_many",
      identifier: "main.b.authenticate_many(int4,numeric,int8)",
      from(...args) {
        return sql`${authenticate_manyFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: "a",
        required: true,
        notNull: false,
        codec: TYPES.int
      }, {
        name: "b",
        required: true,
        notNull: false,
        codec: TYPES.numeric
      }, {
        name: "c",
        required: true,
        notNull: false,
        codec: TYPES.bigint
      }],
      returnsArray: true,
      returnsSetof: false,
      isMutation: true,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "b",
          name: "authenticate_many"
        },
        tags: {}
      },
      description: undefined
    }),
    authenticate_payload: PgResource.functionResourceOptions({
      executor: executor,
      name: "auth_payload",
      identifier: "main.b.auth_payload",
      from: authPayloadIdentifier,
      codec: authPayloadCodec,
      uniques: [],
      isVirtual: true,
      description: undefined,
      extensions: {
        description: undefined,
        pg: {
          serviceName: "main",
          schemaName: "b",
          name: "auth_payload"
        },
        isInsertable: false,
        isUpdatable: false,
        isDeletable: false,
        tags: {
          foreignKey: "(id) references c.person"
        }
      }
    }, {
      name: "authenticate_payload",
      identifier: "main.b.authenticate_payload(int4,numeric,int8)",
      from(...args) {
        return sql`${authenticate_payloadFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: "a",
        required: true,
        notNull: false,
        codec: TYPES.int
      }, {
        name: "b",
        required: true,
        notNull: false,
        codec: TYPES.numeric
      }, {
        name: "c",
        required: true,
        notNull: false,
        codec: TYPES.bigint
      }],
      returnsArray: false,
      returnsSetof: false,
      isMutation: true,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "b",
          name: "authenticate_payload"
        },
        tags: {}
      },
      description: undefined
    }),
    types_mutation: {
      executor,
      name: "types_mutation",
      identifier: "main.c.types_mutation(int8,bool,varchar,_int4,json,c.floatrange)",
      from(...args) {
        return sql`${types_mutationFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: "a",
        required: true,
        notNull: true,
        codec: TYPES.bigint
      }, {
        name: "b",
        required: true,
        notNull: true,
        codec: TYPES.boolean
      }, {
        name: "c",
        required: true,
        notNull: true,
        codec: TYPES.varchar
      }, {
        name: "d",
        required: true,
        notNull: true,
        codec: int4ArrayCodec
      }, {
        name: "e",
        required: true,
        notNull: true,
        codec: TYPES.json
      }, {
        name: "f",
        required: true,
        notNull: true,
        codec: floatrangeCodec
      }],
      isUnique: !false,
      codec: TYPES.boolean,
      uniques: [],
      isMutation: true,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "c",
          name: "types_mutation"
        },
        tags: {}
      },
      description: undefined
    },
    types_query: {
      executor,
      name: "types_query",
      identifier: "main.c.types_query(int8,bool,varchar,_int4,json,c.floatrange)",
      from(...args) {
        return sql`${types_queryFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: "a",
        required: true,
        notNull: true,
        codec: TYPES.bigint
      }, {
        name: "b",
        required: true,
        notNull: true,
        codec: TYPES.boolean
      }, {
        name: "c",
        required: true,
        notNull: true,
        codec: TYPES.varchar
      }, {
        name: "d",
        required: true,
        notNull: true,
        codec: int4ArrayCodec
      }, {
        name: "e",
        required: true,
        notNull: true,
        codec: TYPES.json
      }, {
        name: "f",
        required: true,
        notNull: true,
        codec: floatrangeCodec
      }],
      isUnique: !false,
      codec: TYPES.boolean,
      uniques: [],
      isMutation: false,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "c",
          name: "types_query"
        },
        tags: {}
      },
      description: undefined
    },
    compound_type_computed_field: {
      executor,
      name: "compound_type_computed_field",
      identifier: "main.c.compound_type_computed_field(c.compound_type)",
      from(...args) {
        return sql`${compound_type_computed_fieldFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: "compound_type",
        required: true,
        notNull: false,
        codec: compoundTypeCodec
      }],
      isUnique: !false,
      codec: TYPES.int,
      uniques: [],
      isMutation: false,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "c",
          name: "compound_type_computed_field"
        },
        tags: {}
      },
      description: undefined
    },
    post_computed_interval_set: {
      executor,
      name: "post_computed_interval_set",
      identifier: "main.a.post_computed_interval_set(a.post)",
      from(...args) {
        return sql`${post_computed_interval_setFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: "post",
        required: true,
        notNull: false,
        codec: postCodec
      }],
      isUnique: !true,
      codec: TYPES.interval,
      uniques: [],
      isMutation: false,
      hasImplicitOrder: true,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "a",
          name: "post_computed_interval_set"
        },
        tags: {}
      },
      description: undefined
    },
    post_computed_interval_array: {
      executor,
      name: "post_computed_interval_array",
      identifier: "main.a.post_computed_interval_array(a.post)",
      from(...args) {
        return sql`${post_computed_interval_arrayFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: "post",
        required: true,
        notNull: false,
        codec: postCodec
      }],
      isUnique: !false,
      codec: intervalArrayCodec,
      uniques: [],
      isMutation: false,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "a",
          name: "post_computed_interval_array"
        },
        tags: {}
      },
      description: undefined
    },
    post_computed_text_array: {
      executor,
      name: "post_computed_text_array",
      identifier: "main.a.post_computed_text_array(a.post)",
      from(...args) {
        return sql`${post_computed_text_arrayFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: "post",
        required: true,
        notNull: false,
        codec: postCodec
      }],
      isUnique: !false,
      codec: textArrayCodec,
      uniques: [],
      isMutation: false,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "a",
          name: "post_computed_text_array"
        },
        tags: {}
      },
      description: undefined
    },
    post_computed_with_optional_arg: {
      executor,
      name: "post_computed_with_optional_arg",
      identifier: "main.a.post_computed_with_optional_arg(a.post,int4)",
      from(...args) {
        return sql`${post_computed_with_optional_argFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: "post",
        required: true,
        notNull: true,
        codec: postCodec
      }, {
        name: "i",
        required: false,
        notNull: true,
        codec: TYPES.int
      }],
      isUnique: !false,
      codec: TYPES.int,
      uniques: [],
      isMutation: false,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "a",
          name: "post_computed_with_optional_arg"
        },
        tags: {
          sortable: true,
          filterable: true,
          behavior: ["filter filterBy", "orderBy order resource:connection:backwards"]
        }
      },
      description: undefined
    },
    post_computed_with_required_arg: {
      executor,
      name: "post_computed_with_required_arg",
      identifier: "main.a.post_computed_with_required_arg(a.post,int4)",
      from(...args) {
        return sql`${post_computed_with_required_argFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: "post",
        required: true,
        notNull: true,
        codec: postCodec
      }, {
        name: "i",
        required: true,
        notNull: true,
        codec: TYPES.int
      }],
      isUnique: !false,
      codec: TYPES.int,
      uniques: [],
      isMutation: false,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "a",
          name: "post_computed_with_required_arg"
        },
        tags: {
          sortable: true,
          filterable: true,
          behavior: ["filter filterBy", "orderBy order resource:connection:backwards"]
        }
      },
      description: undefined
    },
    func_out_out_compound_type: {
      executor,
      name: "func_out_out_compound_type",
      identifier: "main.c.func_out_out_compound_type(int4,int4,c.compound_type)",
      from(...args) {
        return sql`${func_out_out_compound_typeFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: "i1",
        required: true,
        notNull: false,
        codec: TYPES.int
      }],
      isUnique: !false,
      codec: registryConfig_pgCodecs_FuncOutOutCompoundTypeRecord_FuncOutOutCompoundTypeRecord,
      uniques: [],
      isMutation: false,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "c",
          name: "func_out_out_compound_type"
        },
        tags: {}
      },
      description: undefined
    },
    mutation_out_out_compound_type: {
      executor,
      name: "mutation_out_out_compound_type",
      identifier: "main.c.mutation_out_out_compound_type(int4,int4,c.compound_type)",
      from(...args) {
        return sql`${mutation_out_out_compound_typeFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: "i1",
        required: true,
        notNull: false,
        codec: TYPES.int
      }],
      isUnique: !false,
      codec: registryConfig_pgCodecs_MutationOutOutCompoundTypeRecord_MutationOutOutCompoundTypeRecord,
      uniques: [],
      isMutation: true,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "c",
          name: "mutation_out_out_compound_type"
        },
        tags: {}
      },
      description: undefined
    },
    post_headline_trimmed: {
      executor,
      name: "post_headline_trimmed",
      identifier: "main.a.post_headline_trimmed(a.post,int4,text)",
      from(...args) {
        return sql`${post_headline_trimmedFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: "post",
        required: true,
        notNull: false,
        codec: postCodec
      }, {
        name: "length",
        required: false,
        notNull: false,
        codec: TYPES.int
      }, {
        name: "omission",
        required: false,
        notNull: false,
        codec: TYPES.text
      }],
      isUnique: !false,
      codec: TYPES.text,
      uniques: [],
      isMutation: false,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "a",
          name: "post_headline_trimmed"
        },
        tags: {}
      },
      description: undefined
    },
    post_headline_trimmed_no_defaults: {
      executor,
      name: "post_headline_trimmed_no_defaults",
      identifier: "main.a.post_headline_trimmed_no_defaults(a.post,int4,text)",
      from(...args) {
        return sql`${post_headline_trimmed_no_defaultsFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: "post",
        required: true,
        notNull: false,
        codec: postCodec
      }, {
        name: "length",
        required: true,
        notNull: false,
        codec: TYPES.int
      }, {
        name: "omission",
        required: true,
        notNull: false,
        codec: TYPES.text
      }],
      isUnique: !false,
      codec: TYPES.text,
      uniques: [],
      isMutation: false,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "a",
          name: "post_headline_trimmed_no_defaults"
        },
        tags: {}
      },
      description: undefined
    },
    post_headline_trimmed_strict: {
      executor,
      name: "post_headline_trimmed_strict",
      identifier: "main.a.post_headline_trimmed_strict(a.post,int4,text)",
      from(...args) {
        return sql`${post_headline_trimmed_strictFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: "post",
        required: true,
        notNull: true,
        codec: postCodec
      }, {
        name: "length",
        required: false,
        notNull: true,
        codec: TYPES.int
      }, {
        name: "omission",
        required: false,
        notNull: true,
        codec: TYPES.text
      }],
      isUnique: !false,
      codec: TYPES.text,
      uniques: [],
      isMutation: false,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "a",
          name: "post_headline_trimmed_strict"
        },
        tags: {}
      },
      description: undefined
    },
    query_output_two_rows: {
      executor,
      name: "query_output_two_rows",
      identifier: "main.c.query_output_two_rows(int4,int4,text,c.left_arm,a.post)",
      from(...args) {
        return sql`${query_output_two_rowsFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: "left_arm_id",
        required: true,
        notNull: false,
        codec: TYPES.int
      }, {
        name: "post_id",
        required: true,
        notNull: false,
        codec: TYPES.int
      }, {
        name: "txt",
        required: true,
        notNull: false,
        codec: TYPES.text
      }],
      isUnique: !false,
      codec: registryConfig_pgCodecs_QueryOutputTwoRowsRecord_QueryOutputTwoRowsRecord,
      uniques: [],
      isMutation: false,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "c",
          name: "query_output_two_rows"
        },
        tags: {}
      },
      description: undefined
    },
    post: registryConfig_pgResources_post_post,
    compound_type_set_query: PgResource.functionResourceOptions(resourceConfig_compound_type, {
      name: "compound_type_set_query",
      identifier: "main.c.compound_type_set_query()",
      from(...args) {
        return sql`${compound_type_set_queryFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [],
      returnsArray: false,
      returnsSetof: true,
      isMutation: false,
      hasImplicitOrder: true,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "c",
          name: "compound_type_set_query"
        },
        tags: {}
      },
      description: undefined
    }),
    compound_type_mutation: PgResource.functionResourceOptions(resourceConfig_compound_type, {
      name: "compound_type_mutation",
      identifier: "main.b.compound_type_mutation(c.compound_type)",
      from(...args) {
        return sql`${compound_type_mutationFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: "object",
        required: true,
        notNull: false,
        codec: compoundTypeCodec
      }],
      returnsArray: false,
      returnsSetof: false,
      isMutation: true,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "b",
          name: "compound_type_mutation"
        },
        tags: {}
      },
      description: undefined
    }),
    compound_type_query: PgResource.functionResourceOptions(resourceConfig_compound_type, {
      name: "compound_type_query",
      identifier: "main.b.compound_type_query(c.compound_type)",
      from(...args) {
        return sql`${compound_type_queryFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: "object",
        required: true,
        notNull: false,
        codec: compoundTypeCodec
      }],
      returnsArray: false,
      returnsSetof: false,
      isMutation: false,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "b",
          name: "compound_type_query"
        },
        tags: {}
      },
      description: undefined
    }),
    compound_type_set_mutation: PgResource.functionResourceOptions(resourceConfig_compound_type, {
      name: "compound_type_set_mutation",
      identifier: "main.b.compound_type_set_mutation(c.compound_type)",
      from(...args) {
        return sql`${compound_type_set_mutationFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: "object",
        required: true,
        notNull: false,
        codec: compoundTypeCodec
      }],
      returnsArray: false,
      returnsSetof: true,
      isMutation: true,
      hasImplicitOrder: true,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "b",
          name: "compound_type_set_mutation"
        },
        tags: {}
      },
      description: undefined
    }),
    list_of_compound_types_mutation: PgResource.functionResourceOptions(resourceConfig_compound_type, {
      name: "list_of_compound_types_mutation",
      identifier: "main.c.list_of_compound_types_mutation(c._compound_type)",
      from(...args) {
        return sql`${list_of_compound_types_mutationFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: "records",
        required: true,
        notNull: false,
        codec: compoundTypeArrayCodec
      }],
      returnsArray: false,
      returnsSetof: true,
      isMutation: true,
      hasImplicitOrder: true,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "c",
          name: "list_of_compound_types_mutation"
        },
        tags: {}
      },
      description: undefined
    }),
    table_mutation: PgResource.functionResourceOptions(registryConfig_pgResources_post_post, {
      name: "table_mutation",
      identifier: "main.c.table_mutation(int4)",
      from(...args) {
        return sql`${table_mutationFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: "id",
        required: true,
        notNull: false,
        codec: TYPES.int
      }],
      returnsArray: false,
      returnsSetof: false,
      isMutation: true,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "c",
          name: "table_mutation"
        },
        tags: {}
      },
      description: undefined
    }),
    table_query: PgResource.functionResourceOptions(registryConfig_pgResources_post_post, {
      name: "table_query",
      identifier: "main.c.table_query(int4)",
      from(...args) {
        return sql`${table_queryFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: "id",
        required: true,
        notNull: false,
        codec: TYPES.int
      }],
      returnsArray: false,
      returnsSetof: false,
      isMutation: false,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "c",
          name: "table_query"
        },
        tags: {}
      },
      description: undefined
    }),
    post_with_suffix: PgResource.functionResourceOptions(registryConfig_pgResources_post_post, {
      name: "post_with_suffix",
      identifier: "main.a.post_with_suffix(a.post,text)",
      from(...args) {
        return sql`${post_with_suffixFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: "post",
        required: true,
        notNull: false,
        codec: postCodec
      }, {
        name: "suffix",
        required: true,
        notNull: false,
        codec: TYPES.text
      }],
      returnsArray: false,
      returnsSetof: false,
      isMutation: true,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "a",
          name: "post_with_suffix"
        },
        tags: {
          deprecated: "This is deprecated (comment on function a.post_with_suffix)."
        }
      },
      description: undefined
    }),
    mutation_compound_type_array: PgResource.functionResourceOptions(resourceConfig_compound_type, {
      name: "mutation_compound_type_array",
      identifier: "main.a.mutation_compound_type_array(c.compound_type)",
      from(...args) {
        return sql`${mutation_compound_type_arrayFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: "object",
        required: true,
        notNull: false,
        codec: compoundTypeCodec
      }],
      returnsArray: true,
      returnsSetof: false,
      isMutation: true,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "a",
          name: "mutation_compound_type_array"
        },
        tags: {}
      },
      description: undefined
    }),
    query_compound_type_array: PgResource.functionResourceOptions(resourceConfig_compound_type, {
      name: "query_compound_type_array",
      identifier: "main.a.query_compound_type_array(c.compound_type)",
      from(...args) {
        return sql`${query_compound_type_arrayFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: "object",
        required: true,
        notNull: false,
        codec: compoundTypeCodec
      }],
      returnsArray: true,
      returnsSetof: false,
      isMutation: false,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "a",
          name: "query_compound_type_array"
        },
        tags: {}
      },
      description: undefined
    }),
    compound_type_array_mutation: PgResource.functionResourceOptions(resourceConfig_compound_type, {
      name: "compound_type_array_mutation",
      identifier: "main.b.compound_type_array_mutation(c.compound_type)",
      from(...args) {
        return sql`${compound_type_array_mutationFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: "object",
        required: true,
        notNull: false,
        codec: compoundTypeCodec
      }],
      returnsArray: true,
      returnsSetof: false,
      isMutation: true,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "b",
          name: "compound_type_array_mutation"
        },
        tags: {}
      },
      description: undefined
    }),
    compound_type_array_query: PgResource.functionResourceOptions(resourceConfig_compound_type, {
      name: "compound_type_array_query",
      identifier: "main.b.compound_type_array_query(c.compound_type)",
      from(...args) {
        return sql`${compound_type_array_queryFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: "object",
        required: true,
        notNull: false,
        codec: compoundTypeCodec
      }],
      returnsArray: true,
      returnsSetof: false,
      isMutation: false,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "b",
          name: "compound_type_array_query"
        },
        tags: {}
      },
      description: undefined
    }),
    post_computed_compound_type_array: PgResource.functionResourceOptions(resourceConfig_compound_type, {
      name: "post_computed_compound_type_array",
      identifier: "main.a.post_computed_compound_type_array(a.post,c.compound_type)",
      from(...args) {
        return sql`${post_computed_compound_type_arrayFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: "post",
        required: true,
        notNull: false,
        codec: postCodec
      }, {
        name: "object",
        required: true,
        notNull: false,
        codec: compoundTypeCodec
      }],
      returnsArray: true,
      returnsSetof: false,
      isMutation: false,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "a",
          name: "post_computed_compound_type_array"
        },
        tags: {}
      },
      description: undefined
    }),
    post_many: PgResource.functionResourceOptions(registryConfig_pgResources_post_post, {
      name: "post_many",
      identifier: "main.a.post_many(a._post)",
      from(...args) {
        return sql`${post_manyFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: "posts",
        required: true,
        notNull: false,
        codec: postArrayCodec
      }],
      returnsArray: false,
      returnsSetof: true,
      isMutation: true,
      hasImplicitOrder: true,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "a",
          name: "post_many"
        },
        tags: {}
      },
      description: undefined
    }),
    person_computed_out: {
      executor,
      name: "person_computed_out",
      identifier: "main.c.person_computed_out(c.person,text)",
      from(...args) {
        return sql`${person_computed_outFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: "person",
        required: true,
        notNull: false,
        codec: personCodec
      }],
      isUnique: !false,
      codec: TYPES.text,
      uniques: [],
      isMutation: false,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "c",
          name: "person_computed_out"
        },
        tags: {
          notNull: true,
          sortable: true,
          filterable: true,
          behavior: ["filter filterBy", "orderBy order resource:connection:backwards"]
        },
        singleOutputParameterName: "o1"
      },
      description: undefined
    },
    person_first_name: {
      executor,
      name: "person_first_name",
      identifier: "main.c.person_first_name(c.person)",
      from(...args) {
        return sql`${person_first_nameFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: "person",
        required: true,
        notNull: false,
        codec: personCodec
      }],
      isUnique: !false,
      codec: TYPES.text,
      uniques: [],
      isMutation: false,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "c",
          name: "person_first_name"
        },
        tags: {
          sortable: true,
          behavior: ["orderBy order resource:connection:backwards"]
        }
      },
      description: "The first name of the person."
    },
    person_computed_out_out: {
      executor,
      name: "person_computed_out_out",
      identifier: "main.c.person_computed_out_out(c.person,text,text)",
      from(...args) {
        return sql`${person_computed_out_outFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: "person",
        required: true,
        notNull: false,
        codec: personCodec
      }],
      isUnique: !false,
      codec: registryConfig_pgCodecs_PersonComputedOutOutRecord_PersonComputedOutOutRecord,
      uniques: [],
      isMutation: false,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "c",
          name: "person_computed_out_out"
        },
        tags: {}
      },
      description: undefined
    },
    person_computed_inout: {
      executor,
      name: "person_computed_inout",
      identifier: "main.c.person_computed_inout(c.person,text)",
      from(...args) {
        return sql`${person_computed_inoutFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: "person",
        required: true,
        notNull: false,
        codec: personCodec
      }, {
        name: "ino",
        required: true,
        notNull: false,
        codec: TYPES.text
      }],
      isUnique: !false,
      codec: TYPES.text,
      uniques: [],
      isMutation: false,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "c",
          name: "person_computed_inout"
        },
        tags: {},
        singleOutputParameterName: "ino"
      },
      description: undefined
    },
    person_computed_inout_out: {
      executor,
      name: "person_computed_inout_out",
      identifier: "main.c.person_computed_inout_out(c.person,text,text)",
      from(...args) {
        return sql`${person_computed_inout_outFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: "person",
        required: true,
        notNull: false,
        codec: personCodec
      }, {
        name: "ino",
        required: true,
        notNull: false,
        codec: TYPES.text
      }],
      isUnique: !false,
      codec: registryConfig_pgCodecs_PersonComputedInoutOutRecord_PersonComputedInoutOutRecord,
      uniques: [],
      isMutation: false,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "c",
          name: "person_computed_inout_out"
        },
        tags: {}
      },
      description: undefined
    },
    person_exists: {
      executor,
      name: "person_exists",
      identifier: "main.c.person_exists(c.person,b.email)",
      from(...args) {
        return sql`${person_existsFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: "person",
        required: true,
        notNull: false,
        codec: personCodec
      }, {
        name: "email",
        required: true,
        notNull: false,
        codec: emailCodec
      }],
      isUnique: !false,
      codec: TYPES.boolean,
      uniques: [],
      isMutation: false,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "c",
          name: "person_exists"
        },
        tags: {
          deprecated: "This is deprecated (comment on function c.person_exists)."
        }
      },
      description: undefined
    },
    person_computed_first_arg_inout_out: {
      executor,
      name: "person_computed_first_arg_inout_out",
      identifier: "main.c.person_computed_first_arg_inout_out(c.person,int4)",
      from(...args) {
        return sql`${person_computed_first_arg_inout_outFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: "person",
        required: true,
        notNull: false,
        codec: personCodec
      }],
      isUnique: !false,
      codec: registryConfig_pgCodecs_PersonComputedFirstArgInoutOutRecord_PersonComputedFirstArgInoutOutRecord,
      uniques: [],
      isMutation: false,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "c",
          name: "person_computed_first_arg_inout_out"
        },
        tags: {}
      },
      description: undefined
    },
    person_optional_missing_middle_1: {
      executor,
      name: "person_optional_missing_middle_1",
      identifier: "main.c.person_optional_missing_middle_1(c.person,int4,int4,int4)",
      from(...args) {
        return sql`${person_optional_missing_middle_1FunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: "p",
        required: true,
        notNull: true,
        codec: personCodec
      }, {
        name: "",
        required: true,
        notNull: true,
        codec: TYPES.int
      }, {
        name: "b",
        required: false,
        notNull: true,
        codec: TYPES.int
      }, {
        name: "c",
        required: false,
        notNull: true,
        codec: TYPES.int
      }],
      isUnique: !false,
      codec: TYPES.int,
      uniques: [],
      isMutation: false,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "c",
          name: "person_optional_missing_middle_1"
        },
        tags: {}
      },
      description: undefined
    },
    person_optional_missing_middle_2: {
      executor,
      name: "person_optional_missing_middle_2",
      identifier: "main.c.person_optional_missing_middle_2(c.person,int4,int4,int4)",
      from(...args) {
        return sql`${person_optional_missing_middle_2FunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: "p",
        required: true,
        notNull: true,
        codec: personCodec
      }, {
        name: "a",
        required: true,
        notNull: true,
        codec: TYPES.int
      }, {
        name: "b",
        required: false,
        notNull: true,
        codec: TYPES.int
      }, {
        name: "c",
        required: false,
        notNull: true,
        codec: TYPES.int
      }],
      isUnique: !false,
      codec: TYPES.int,
      uniques: [],
      isMutation: false,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "c",
          name: "person_optional_missing_middle_2"
        },
        tags: {}
      },
      description: undefined
    },
    person_optional_missing_middle_3: {
      executor,
      name: "person_optional_missing_middle_3",
      identifier: "main.c.person_optional_missing_middle_3(c.person,int4,int4,int4)",
      from(...args) {
        return sql`${person_optional_missing_middle_3FunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: "p",
        required: true,
        notNull: true,
        codec: personCodec
      }, {
        name: "a",
        required: true,
        notNull: true,
        codec: TYPES.int
      }, {
        name: "",
        required: false,
        notNull: true,
        codec: TYPES.int
      }, {
        name: "c",
        required: false,
        notNull: true,
        codec: TYPES.int
      }],
      isUnique: !false,
      codec: TYPES.int,
      uniques: [],
      isMutation: false,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "c",
          name: "person_optional_missing_middle_3"
        },
        tags: {}
      },
      description: undefined
    },
    person_optional_missing_middle_4: {
      executor,
      name: "person_optional_missing_middle_4",
      identifier: "main.c.person_optional_missing_middle_4(c.person,int4,int4,int4)",
      from(...args) {
        return sql`${person_optional_missing_middle_4FunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: "p",
        required: true,
        notNull: true,
        codec: personCodec
      }, {
        name: "",
        required: true,
        notNull: true,
        codec: TYPES.int
      }, {
        name: "b",
        required: false,
        notNull: true,
        codec: TYPES.int
      }, {
        name: "",
        required: false,
        notNull: true,
        codec: TYPES.int
      }],
      isUnique: !false,
      codec: TYPES.int,
      uniques: [],
      isMutation: false,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "c",
          name: "person_optional_missing_middle_4"
        },
        tags: {}
      },
      description: undefined
    },
    person_optional_missing_middle_5: {
      executor,
      name: "person_optional_missing_middle_5",
      identifier: "main.c.person_optional_missing_middle_5(c.person,int4,int4,int4)",
      from(...args) {
        return sql`${person_optional_missing_middle_5FunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: "p",
        required: true,
        notNull: true,
        codec: personCodec
      }, {
        name: "a",
        required: true,
        notNull: true,
        codec: TYPES.int
      }, {
        name: "",
        required: false,
        notNull: true,
        codec: TYPES.int
      }, {
        name: "",
        required: false,
        notNull: true,
        codec: TYPES.int
      }],
      isUnique: !false,
      codec: TYPES.int,
      uniques: [],
      isMutation: false,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "c",
          name: "person_optional_missing_middle_5"
        },
        tags: {}
      },
      description: undefined
    },
    func_out_complex: {
      executor,
      name: "func_out_complex",
      identifier: "main.c.func_out_complex(int4,text,int4,c.compound_type,c.person)",
      from(...args) {
        return sql`${func_out_complexFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: "a",
        required: true,
        notNull: false,
        codec: TYPES.int
      }, {
        name: "b",
        required: true,
        notNull: false,
        codec: TYPES.text
      }],
      isUnique: !false,
      codec: registryConfig_pgCodecs_FuncOutComplexRecord_FuncOutComplexRecord,
      uniques: [],
      isMutation: false,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "c",
          name: "func_out_complex"
        },
        tags: {}
      },
      description: undefined
    },
    func_out_complex_setof: {
      executor,
      name: "func_out_complex_setof",
      identifier: "main.c.func_out_complex_setof(int4,text,int4,c.compound_type,c.person)",
      from(...args) {
        return sql`${func_out_complex_setofFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: "a",
        required: true,
        notNull: false,
        codec: TYPES.int
      }, {
        name: "b",
        required: true,
        notNull: false,
        codec: TYPES.text
      }],
      isUnique: !true,
      codec: registryConfig_pgCodecs_FuncOutComplexSetofRecord_FuncOutComplexSetofRecord,
      uniques: [],
      isMutation: false,
      hasImplicitOrder: true,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "c",
          name: "func_out_complex_setof"
        },
        tags: {}
      },
      description: undefined
    },
    mutation_out_complex: {
      executor,
      name: "mutation_out_complex",
      identifier: "main.c.mutation_out_complex(int4,text,int4,c.compound_type,c.person)",
      from(...args) {
        return sql`${mutation_out_complexFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: "a",
        required: true,
        notNull: false,
        codec: TYPES.int
      }, {
        name: "b",
        required: true,
        notNull: false,
        codec: TYPES.text
      }],
      isUnique: !false,
      codec: registryConfig_pgCodecs_MutationOutComplexRecord_MutationOutComplexRecord,
      uniques: [],
      isMutation: true,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "c",
          name: "mutation_out_complex"
        },
        tags: {}
      },
      description: undefined
    },
    mutation_out_complex_setof: {
      executor,
      name: "mutation_out_complex_setof",
      identifier: "main.c.mutation_out_complex_setof(int4,text,int4,c.compound_type,c.person)",
      from(...args) {
        return sql`${mutation_out_complex_setofFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: "a",
        required: true,
        notNull: false,
        codec: TYPES.int
      }, {
        name: "b",
        required: true,
        notNull: false,
        codec: TYPES.text
      }],
      isUnique: !true,
      codec: registryConfig_pgCodecs_MutationOutComplexSetofRecord_MutationOutComplexSetofRecord,
      uniques: [],
      isMutation: true,
      hasImplicitOrder: true,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "c",
          name: "mutation_out_complex_setof"
        },
        tags: {}
      },
      description: undefined
    },
    person_computed_complex: {
      executor,
      name: "person_computed_complex",
      identifier: "main.c.person_computed_complex(c.person,int4,text,int4,c.compound_type,c.person)",
      from(...args) {
        return sql`${person_computed_complexFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: "person",
        required: true,
        notNull: false,
        codec: personCodec
      }, {
        name: "a",
        required: true,
        notNull: false,
        codec: TYPES.int
      }, {
        name: "b",
        required: true,
        notNull: false,
        codec: TYPES.text
      }],
      isUnique: !false,
      codec: registryConfig_pgCodecs_PersonComputedComplexRecord_PersonComputedComplexRecord,
      uniques: [],
      isMutation: false,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "c",
          name: "person_computed_complex"
        },
        tags: {}
      },
      description: undefined
    },
    person_first_post: PgResource.functionResourceOptions(registryConfig_pgResources_post_post, {
      name: "person_first_post",
      identifier: "main.c.person_first_post(c.person)",
      from(...args) {
        return sql`${person_first_postFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: "person",
        required: true,
        notNull: false,
        codec: personCodec
      }],
      returnsArray: false,
      returnsSetof: false,
      isMutation: false,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "c",
          name: "person_first_post"
        },
        tags: {}
      },
      description: "The first post by the person."
    }),
    person: registryConfig_pgResources_person_person,
    badly_behaved_function: PgResource.functionResourceOptions(registryConfig_pgResources_person_person, {
      name: "badly_behaved_function",
      identifier: "main.c.badly_behaved_function()",
      from(...args) {
        return sql`${badly_behaved_functionFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [],
      returnsArray: false,
      returnsSetof: true,
      isMutation: false,
      hasImplicitOrder: true,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "c",
          name: "badly_behaved_function"
        },
        tags: {
          deprecated: "This is deprecated (comment on function c.badly_behaved_function)."
        }
      },
      description: undefined
    }),
    func_out_table: PgResource.functionResourceOptions(registryConfig_pgResources_person_person, {
      name: "func_out_table",
      identifier: "main.c.func_out_table(c.person)",
      from(...args) {
        return sql`${func_out_tableFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [],
      returnsArray: false,
      returnsSetof: false,
      isMutation: false,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "c",
          name: "func_out_table"
        },
        tags: {}
      },
      description: undefined
    }),
    func_out_table_setof: PgResource.functionResourceOptions(registryConfig_pgResources_person_person, {
      name: "func_out_table_setof",
      identifier: "main.c.func_out_table_setof(c.person)",
      from(...args) {
        return sql`${func_out_table_setofFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [],
      returnsArray: false,
      returnsSetof: true,
      isMutation: false,
      hasImplicitOrder: true,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "c",
          name: "func_out_table_setof"
        },
        tags: {}
      },
      description: undefined
    }),
    mutation_out_table: PgResource.functionResourceOptions(registryConfig_pgResources_person_person, {
      name: "mutation_out_table",
      identifier: "main.c.mutation_out_table(c.person)",
      from(...args) {
        return sql`${mutation_out_tableFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [],
      returnsArray: false,
      returnsSetof: false,
      isMutation: true,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "c",
          name: "mutation_out_table"
        },
        tags: {}
      },
      description: undefined
    }),
    mutation_out_table_setof: PgResource.functionResourceOptions(registryConfig_pgResources_person_person, {
      name: "mutation_out_table_setof",
      identifier: "main.c.mutation_out_table_setof(c.person)",
      from(...args) {
        return sql`${mutation_out_table_setofFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [],
      returnsArray: false,
      returnsSetof: true,
      isMutation: true,
      hasImplicitOrder: true,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "c",
          name: "mutation_out_table_setof"
        },
        tags: {}
      },
      description: undefined
    }),
    table_set_mutation: PgResource.functionResourceOptions(registryConfig_pgResources_person_person, {
      name: "table_set_mutation",
      identifier: "main.c.table_set_mutation()",
      from(...args) {
        return sql`${table_set_mutationFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [],
      returnsArray: false,
      returnsSetof: true,
      isMutation: true,
      hasImplicitOrder: true,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "c",
          name: "table_set_mutation"
        },
        tags: {}
      },
      description: undefined
    }),
    table_set_query: PgResource.functionResourceOptions(registryConfig_pgResources_person_person, {
      name: "table_set_query",
      identifier: "main.c.table_set_query()",
      from(...args) {
        return sql`${table_set_queryFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [],
      returnsArray: false,
      returnsSetof: true,
      isMutation: false,
      hasImplicitOrder: true,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "c",
          name: "table_set_query"
        },
        tags: {
          sortable: true,
          filterable: true,
          behavior: ["filter filterBy", "orderBy order resource:connection:backwards"]
        }
      },
      description: undefined
    }),
    table_set_query_plpgsql: PgResource.functionResourceOptions(registryConfig_pgResources_person_person, {
      name: "table_set_query_plpgsql",
      identifier: "main.c.table_set_query_plpgsql()",
      from(...args) {
        return sql`${table_set_query_plpgsqlFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [],
      returnsArray: false,
      returnsSetof: true,
      isMutation: false,
      hasImplicitOrder: true,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "c",
          name: "table_set_query_plpgsql"
        },
        tags: {}
      },
      description: undefined
    }),
    person_computed_first_arg_inout: PgResource.functionResourceOptions(registryConfig_pgResources_person_person, {
      name: "person_computed_first_arg_inout",
      identifier: "main.c.person_computed_first_arg_inout(c.person)",
      from(...args) {
        return sql`${person_computed_first_arg_inoutFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: "person",
        required: true,
        notNull: false,
        codec: personCodec
      }],
      returnsArray: false,
      returnsSetof: false,
      isMutation: false,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "c",
          name: "person_computed_first_arg_inout"
        },
        tags: {},
        singleOutputParameterName: "person"
      },
      description: undefined
    }),
    person_friends: PgResource.functionResourceOptions(registryConfig_pgResources_person_person, {
      name: "person_friends",
      identifier: "main.c.person_friends(c.person)",
      from(...args) {
        return sql`${person_friendsFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: "person",
        required: true,
        notNull: false,
        codec: personCodec
      }],
      returnsArray: false,
      returnsSetof: true,
      isMutation: false,
      hasImplicitOrder: true,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "c",
          name: "person_friends"
        },
        tags: {
          sortable: true,
          behavior: ["orderBy order resource:connection:backwards"]
        }
      },
      description: undefined
    }),
    lists: {
      executor: executor,
      name: "lists",
      identifier: "main.b.lists",
      from: listsIdentifier,
      codec: listsCodec,
      uniques: listsUniques,
      isVirtual: false,
      description: undefined,
      extensions: {
        description: undefined,
        pg: {
          serviceName: "main",
          schemaName: "b",
          name: "lists"
        },
        isInsertable: true,
        isUpdatable: true,
        isDeletable: true,
        tags: {}
      }
    },
    types: registryConfig_pgResources_types_types,
    type_function_connection: PgResource.functionResourceOptions(registryConfig_pgResources_types_types, {
      name: "type_function_connection",
      identifier: "main.b.type_function_connection()",
      from(...args) {
        return sql`${type_function_connectionFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [],
      returnsArray: false,
      returnsSetof: true,
      isMutation: false,
      hasImplicitOrder: true,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "b",
          name: "type_function_connection"
        },
        tags: {}
      },
      description: undefined
    }),
    type_function_connection_mutation: PgResource.functionResourceOptions(registryConfig_pgResources_types_types, {
      name: "type_function_connection_mutation",
      identifier: "main.b.type_function_connection_mutation()",
      from(...args) {
        return sql`${type_function_connection_mutationFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [],
      returnsArray: false,
      returnsSetof: true,
      isMutation: true,
      hasImplicitOrder: true,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "b",
          name: "type_function_connection_mutation"
        },
        tags: {}
      },
      description: undefined
    }),
    type_function: PgResource.functionResourceOptions(registryConfig_pgResources_types_types, {
      name: "type_function",
      identifier: "main.b.type_function(int4)",
      from(...args) {
        return sql`${type_functionFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: "id",
        required: true,
        notNull: false,
        codec: TYPES.int
      }],
      returnsArray: false,
      returnsSetof: false,
      isMutation: false,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "b",
          name: "type_function"
        },
        tags: {}
      },
      description: undefined
    }),
    type_function_mutation: PgResource.functionResourceOptions(registryConfig_pgResources_types_types, {
      name: "type_function_mutation",
      identifier: "main.b.type_function_mutation(int4)",
      from(...args) {
        return sql`${type_function_mutationFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: "id",
        required: true,
        notNull: false,
        codec: TYPES.int
      }],
      returnsArray: false,
      returnsSetof: false,
      isMutation: true,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "b",
          name: "type_function_mutation"
        },
        tags: {}
      },
      description: undefined
    }),
    person_type_function_connection: PgResource.functionResourceOptions(registryConfig_pgResources_types_types, {
      name: "person_type_function_connection",
      identifier: "main.c.person_type_function_connection(c.person)",
      from(...args) {
        return sql`${person_type_function_connectionFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: "p",
        required: true,
        notNull: false,
        codec: personCodec
      }],
      returnsArray: false,
      returnsSetof: true,
      isMutation: false,
      hasImplicitOrder: true,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "c",
          name: "person_type_function_connection"
        },
        tags: {}
      },
      description: undefined
    }),
    person_type_function: PgResource.functionResourceOptions(registryConfig_pgResources_types_types, {
      name: "person_type_function",
      identifier: "main.c.person_type_function(c.person,int4)",
      from(...args) {
        return sql`${person_type_functionFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: "p",
        required: true,
        notNull: false,
        codec: personCodec
      }, {
        name: "id",
        required: true,
        notNull: false,
        codec: TYPES.int
      }],
      returnsArray: false,
      returnsSetof: false,
      isMutation: false,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "c",
          name: "person_type_function"
        },
        tags: {}
      },
      description: undefined
    }),
    type_function_list: PgResource.functionResourceOptions(registryConfig_pgResources_types_types, {
      name: "type_function_list",
      identifier: "main.b.type_function_list()",
      from(...args) {
        return sql`${type_function_listFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [],
      returnsArray: true,
      returnsSetof: false,
      isMutation: false,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "b",
          name: "type_function_list"
        },
        tags: {}
      },
      description: undefined
    }),
    type_function_list_mutation: PgResource.functionResourceOptions(registryConfig_pgResources_types_types, {
      name: "type_function_list_mutation",
      identifier: "main.b.type_function_list_mutation()",
      from(...args) {
        return sql`${type_function_list_mutationFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [],
      returnsArray: true,
      returnsSetof: false,
      isMutation: true,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "b",
          name: "type_function_list_mutation"
        },
        tags: {}
      },
      description: undefined
    }),
    person_type_function_list: PgResource.functionResourceOptions(registryConfig_pgResources_types_types, {
      name: "person_type_function_list",
      identifier: "main.c.person_type_function_list(c.person)",
      from(...args) {
        return sql`${person_type_function_listFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: "p",
        required: true,
        notNull: false,
        codec: personCodec
      }],
      returnsArray: true,
      returnsSetof: false,
      isMutation: false,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "c",
          name: "person_type_function_list"
        },
        tags: {}
      },
      description: undefined
    })
  },
  pgRelations: {
    __proto__: null,
    foreignKey: {
      __proto__: null,
      compoundKeyByMyCompoundKey1AndCompoundKey2: {
        localCodec: foreignKeyCodec,
        remoteResourceOptions: registryConfig_pgResources_compound_key_compound_key,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["compound_key_1", "compound_key_2"],
        remoteAttributes: ["person_id_1", "person_id_2"],
        isUnique: true,
        isReferencee: false,
        description: undefined,
        extensions: {
          tags: {
            behavior: []
          }
        }
      },
      personByMyPersonId: {
        localCodec: foreignKeyCodec,
        remoteResourceOptions: registryConfig_pgResources_person_person,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["person_id"],
        remoteAttributes: ["id"],
        isUnique: true,
        isReferencee: false,
        description: undefined,
        extensions: {
          tags: {
            behavior: []
          }
        }
      }
    },
    post: {
      __proto__: null,
      personByMyAuthorId: {
        localCodec: postCodec,
        remoteResourceOptions: registryConfig_pgResources_person_person,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["author_id"],
        remoteAttributes: ["id"],
        isUnique: true,
        isReferencee: false,
        description: undefined,
        extensions: {
          tags: {
            behavior: []
          }
        }
      },
      typesByTheirSmallint: {
        localCodec: postCodec,
        remoteResourceOptions: registryConfig_pgResources_types_types,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["id"],
        remoteAttributes: ["smallint"],
        isUnique: false,
        isReferencee: true,
        description: undefined,
        extensions: {
          tags: {
            behavior: []
          }
        }
      },
      typesByTheirId: {
        localCodec: postCodec,
        remoteResourceOptions: registryConfig_pgResources_types_types,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["id"],
        remoteAttributes: ["id"],
        isUnique: true,
        isReferencee: true,
        description: undefined,
        extensions: {
          tags: {
            behavior: []
          }
        }
      }
    },
    uniqueForeignKey: {
      __proto__: null,
      compoundKeyByMyCompoundKey1AndCompoundKey2: {
        localCodec: uniqueForeignKeyCodec,
        remoteResourceOptions: registryConfig_pgResources_compound_key_compound_key,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["compound_key_1", "compound_key_2"],
        remoteAttributes: ["person_id_1", "person_id_2"],
        isUnique: true,
        isReferencee: false,
        description: undefined,
        extensions: {
          tags: {
            behavior: []
          }
        }
      }
    },
    authPayload: {
      __proto__: null,
      personByMyId: {
        localCodec: authPayloadCodec,
        remoteResourceOptions: registryConfig_pgResources_person_person,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["id"],
        remoteAttributes: ["id"],
        isUnique: true,
        isReferencee: false,
        description: undefined,
        extensions: {
          tags: {
            behavior: []
          }
        }
      }
    },
    types: {
      __proto__: null,
      postByMySmallint: {
        localCodec: typesCodec,
        remoteResourceOptions: registryConfig_pgResources_post_post,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["smallint"],
        remoteAttributes: ["id"],
        isUnique: true,
        isReferencee: false,
        description: undefined,
        extensions: {
          tags: {
            behavior: []
          }
        }
      },
      postByMyId: {
        localCodec: typesCodec,
        remoteResourceOptions: registryConfig_pgResources_post_post,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["id"],
        remoteAttributes: ["id"],
        isUnique: true,
        isReferencee: false,
        description: undefined,
        extensions: {
          tags: {
            behavior: []
          }
        }
      }
    },
    compoundKey: {
      __proto__: null,
      personByMyPersonId1: {
        localCodec: compoundKeyCodec,
        remoteResourceOptions: registryConfig_pgResources_person_person,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["person_id_1"],
        remoteAttributes: ["id"],
        isUnique: true,
        isReferencee: false,
        description: undefined,
        extensions: {
          tags: {
            behavior: []
          }
        }
      },
      personByMyPersonId2: {
        localCodec: compoundKeyCodec,
        remoteResourceOptions: registryConfig_pgResources_person_person,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["person_id_2"],
        remoteAttributes: ["id"],
        isUnique: true,
        isReferencee: false,
        description: undefined,
        extensions: {
          tags: {
            behavior: []
          }
        }
      },
      foreignKeysByTheirCompoundKey1AndCompoundKey2: {
        localCodec: compoundKeyCodec,
        remoteResourceOptions: registryConfig_pgResources_foreign_key_foreign_key,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["person_id_1", "person_id_2"],
        remoteAttributes: ["compound_key_1", "compound_key_2"],
        isUnique: false,
        isReferencee: true,
        description: undefined,
        extensions: {
          tags: {
            behavior: []
          }
        }
      },
      uniqueForeignKeyByTheirCompoundKey1AndCompoundKey2: {
        localCodec: compoundKeyCodec,
        remoteResourceOptions: registryConfig_pgResources_unique_foreign_key_unique_foreign_key,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["person_id_1", "person_id_2"],
        remoteAttributes: ["compound_key_1", "compound_key_2"],
        isUnique: true,
        isReferencee: true,
        description: undefined,
        extensions: {
          tags: {
            behavior: []
          }
        }
      }
    },
    leftArm: {
      __proto__: null,
      personByMyPersonId: {
        localCodec: leftArmCodec,
        remoteResourceOptions: registryConfig_pgResources_person_person,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["person_id"],
        remoteAttributes: ["id"],
        isUnique: true,
        isReferencee: false,
        description: undefined,
        extensions: {
          tags: {
            behavior: []
          }
        }
      }
    },
    person: {
      __proto__: null,
      postsByTheirAuthorId: {
        localCodec: personCodec,
        remoteResourceOptions: registryConfig_pgResources_post_post,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["id"],
        remoteAttributes: ["author_id"],
        isUnique: false,
        isReferencee: true,
        description: undefined,
        extensions: {
          tags: {
            behavior: []
          }
        }
      },
      foreignKeysByTheirPersonId: {
        localCodec: personCodec,
        remoteResourceOptions: registryConfig_pgResources_foreign_key_foreign_key,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["id"],
        remoteAttributes: ["person_id"],
        isUnique: false,
        isReferencee: true,
        description: undefined,
        extensions: {
          tags: {
            behavior: []
          }
        }
      },
      personSecretByTheirPersonId: {
        localCodec: personCodec,
        remoteResourceOptions: registryConfig_pgResources_person_secret_person_secret,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["id"],
        remoteAttributes: ["person_id"],
        isUnique: true,
        isReferencee: true,
        description: "This `Person`'s `PersonSecret`.",
        extensions: {
          tags: {
            forwardDescription: "The `Person` this `PersonSecret` belongs to.",
            backwardDescription: "This `Person`'s `PersonSecret`.",
            behavior: []
          }
        }
      },
      leftArmByTheirPersonId: {
        localCodec: personCodec,
        remoteResourceOptions: registryConfig_pgResources_left_arm_left_arm,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["id"],
        remoteAttributes: ["person_id"],
        isUnique: true,
        isReferencee: true,
        description: undefined,
        extensions: {
          tags: {
            behavior: []
          }
        }
      },
      compoundKeysByTheirPersonId1: {
        localCodec: personCodec,
        remoteResourceOptions: registryConfig_pgResources_compound_key_compound_key,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["id"],
        remoteAttributes: ["person_id_1"],
        isUnique: false,
        isReferencee: true,
        description: undefined,
        extensions: {
          tags: {
            behavior: []
          }
        }
      },
      compoundKeysByTheirPersonId2: {
        localCodec: personCodec,
        remoteResourceOptions: registryConfig_pgResources_compound_key_compound_key,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["id"],
        remoteAttributes: ["person_id_2"],
        isUnique: false,
        isReferencee: true,
        description: undefined,
        extensions: {
          tags: {
            behavior: []
          }
        }
      }
    },
    personSecret: {
      __proto__: null,
      personByMyPersonId: {
        localCodec: personSecretCodec,
        remoteResourceOptions: registryConfig_pgResources_person_person,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["person_id"],
        remoteAttributes: ["id"],
        isUnique: true,
        isReferencee: false,
        description: "The `Person` this `PersonSecret` belongs to.",
        extensions: {
          tags: {
            forwardDescription: "The `Person` this `PersonSecret` belongs to.",
            backwardDescription: "This `Person`'s `PersonSecret`.",
            behavior: []
          }
        }
      }
    }
  }
});
const resource_inputsPgResource = registry.pgResources["inputs"];
const resource_patchsPgResource = registry.pgResources["patchs"];
const resource_reservedPgResource = registry.pgResources["reserved"];
const resource_reservedPatchsPgResource = registry.pgResources["reservedPatchs"];
const resource_reserved_inputPgResource = registry.pgResources["reserved_input"];
const resource_default_valuePgResource = registry.pgResources["default_value"];
const resource_no_primary_keyPgResource = registry.pgResources["no_primary_key"];
const resource_unique_foreign_keyPgResource = registry.pgResources["unique_foreign_key"];
const resource_my_tablePgResource = registry.pgResources["my_table"];
const resource_person_secretPgResource = registry.pgResources["person_secret"];
const resource_view_tablePgResource = registry.pgResources["view_table"];
const resource_compound_keyPgResource = registry.pgResources["compound_key"];
const resource_similar_table_1PgResource = registry.pgResources["similar_table_1"];
const resource_similar_table_2PgResource = registry.pgResources["similar_table_2"];
const resource_null_test_recordPgResource = registry.pgResources["null_test_record"];
const resource_left_armPgResource = registry.pgResources["left_arm"];
const resource_issue756PgResource = registry.pgResources["issue756"];
const resource_postPgResource = registry.pgResources["post"];
const resource_personPgResource = registry.pgResources["person"];
const resource_listsPgResource = registry.pgResources["lists"];
const resource_typesPgResource = registry.pgResources["types"];
const EMPTY_ARRAY = [];
const makeArgs_person_computed_out = () => EMPTY_ARRAY;
const resource_current_user_idPgResource = registry.pgResources["current_user_id"];
const resource_func_outPgResource = registry.pgResources["func_out"];
const resource_func_out_setofPgResource = registry.pgResources["func_out_setof"];
const getSelectPlanFromParentAndArgs = ($root, args, _info) => {
  const selectArgs = makeArgs_person_computed_out(args);
  return resource_func_out_setofPgResource.execute(selectArgs);
};
const resource_func_out_unnamedPgResource = registry.pgResources["func_out_unnamed"];
const resource_no_args_queryPgResource = registry.pgResources["no_args_query"];
const resource_query_interval_setPgResource = registry.pgResources["query_interval_set"];
const getSelectPlanFromParentAndArgs2 = ($root, args, _info) => {
  const selectArgs = makeArgs_person_computed_out(args);
  return resource_query_interval_setPgResource.execute(selectArgs);
};
const resource_static_big_integerPgResource = registry.pgResources["static_big_integer"];
const getSelectPlanFromParentAndArgs3 = ($root, args, _info) => {
  const selectArgs = makeArgs_person_computed_out(args);
  return resource_static_big_integerPgResource.execute(selectArgs);
};
const argDetailsSimple_func_in_out = [{
  graphqlArgName: "i",
  postgresArgName: "i",
  pgCodec: TYPES.int,
  required: true,
  fetcher: null
}];
function makeArg(path, args, details) {
  const {
    graphqlArgName,
    postgresArgName,
    pgCodec,
    fetcher
  } = details;
  const fullPath = [...path, graphqlArgName];
  const $raw = args.getRaw(fullPath);
  const step = fetcher ? fetcher($raw).record() : bakedInput(args.typeAt(fullPath), $raw);
  return {
    step,
    pgCodec,
    name: postgresArgName ?? undefined
  };
}
const makeArgs_func_in_out = (args, path = []) => argDetailsSimple_func_in_out.map(details => makeArg(path, args, details));
const resource_func_in_outPgResource = registry.pgResources["func_in_out"];
const argDetailsSimple_func_returns_table_one_col = [{
  graphqlArgName: "i",
  postgresArgName: "i",
  pgCodec: TYPES.int,
  required: true,
  fetcher: null
}];
const makeArgs_func_returns_table_one_col = (args, path = []) => argDetailsSimple_func_returns_table_one_col.map(details => makeArg(path, args, details));
const resource_func_returns_table_one_colPgResource = registry.pgResources["func_returns_table_one_col"];
const getSelectPlanFromParentAndArgs4 = ($root, args, _info) => {
  const selectArgs = makeArgs_func_returns_table_one_col(args);
  return resource_func_returns_table_one_colPgResource.execute(selectArgs);
};
const argDetailsSimple_json_identity = [{
  graphqlArgName: "json",
  postgresArgName: "json",
  pgCodec: TYPES.json,
  required: true,
  fetcher: null
}];
const makeArgs_json_identity = (args, path = []) => argDetailsSimple_json_identity.map(details => makeArg(path, args, details));
const resource_json_identityPgResource = registry.pgResources["json_identity"];
const argDetailsSimple_jsonb_identity = [{
  graphqlArgName: "json",
  postgresArgName: "json",
  pgCodec: TYPES.jsonb,
  required: true,
  fetcher: null
}];
const makeArgs_jsonb_identity = (args, path = []) => argDetailsSimple_jsonb_identity.map(details => makeArg(path, args, details));
const resource_jsonb_identityPgResource = registry.pgResources["jsonb_identity"];
const argDetailsSimple_add_1_query = [{
  graphqlArgName: "arg0",
  postgresArgName: null,
  pgCodec: TYPES.int,
  required: true,
  fetcher: null
}, {
  graphqlArgName: "arg1",
  postgresArgName: null,
  pgCodec: TYPES.int,
  required: true,
  fetcher: null
}];
const makeArgs_add_1_query = (args, path = []) => argDetailsSimple_add_1_query.map(details => makeArg(path, args, details));
const resource_add_1_queryPgResource = registry.pgResources["add_1_query"];
const argDetailsSimple_add_2_query = [{
  graphqlArgName: "a",
  postgresArgName: "a",
  pgCodec: TYPES.int,
  required: true,
  fetcher: null
}, {
  graphqlArgName: "b",
  postgresArgName: "b",
  pgCodec: TYPES.int,
  required: false,
  fetcher: null
}];
const makeArgs_add_2_query = (args, path = []) => argDetailsSimple_add_2_query.map(details => makeArg(path, args, details));
const resource_add_2_queryPgResource = registry.pgResources["add_2_query"];
const argDetailsSimple_add_3_query = [{
  graphqlArgName: "a",
  postgresArgName: "a",
  pgCodec: TYPES.int,
  required: true,
  fetcher: null
}, {
  graphqlArgName: "arg1",
  postgresArgName: "",
  pgCodec: TYPES.int,
  required: true,
  fetcher: null
}];
const makeArgs_add_3_query = (args, path = []) => argDetailsSimple_add_3_query.map(details => makeArg(path, args, details));
const resource_add_3_queryPgResource = registry.pgResources["add_3_query"];
const argDetailsSimple_add_4_query = [{
  graphqlArgName: "arg0",
  postgresArgName: "",
  pgCodec: TYPES.int,
  required: true,
  fetcher: null
}, {
  graphqlArgName: "b",
  postgresArgName: "b",
  pgCodec: TYPES.int,
  required: false,
  fetcher: null
}];
const makeArgs_add_4_query = (args, path = []) => argDetailsSimple_add_4_query.map(details => makeArg(path, args, details));
const resource_add_4_queryPgResource = registry.pgResources["add_4_query"];
const argDetailsSimple_func_in_inout = [{
  graphqlArgName: "i",
  postgresArgName: "i",
  pgCodec: TYPES.int,
  required: true,
  fetcher: null
}, {
  graphqlArgName: "ino",
  postgresArgName: "ino",
  pgCodec: TYPES.int,
  required: true,
  fetcher: null
}];
const makeArgs_func_in_inout = (args, path = []) => argDetailsSimple_func_in_inout.map(details => makeArg(path, args, details));
const resource_func_in_inoutPgResource = registry.pgResources["func_in_inout"];
const resource_func_out_outPgResource = registry.pgResources["func_out_out"];
const resource_func_out_out_setofPgResource = registry.pgResources["func_out_out_setof"];
const getSelectPlanFromParentAndArgs5 = ($root, args, _info) => {
  const selectArgs = makeArgs_person_computed_out(args);
  return resource_func_out_out_setofPgResource.execute(selectArgs);
};
const resource_func_out_out_unnamedPgResource = registry.pgResources["func_out_out_unnamed"];
const resource_search_test_summariesPgResource = registry.pgResources["search_test_summaries"];
const argDetailsSimple_optional_missing_middle_1 = [{
  graphqlArgName: "arg0",
  postgresArgName: "",
  pgCodec: TYPES.int,
  required: true,
  fetcher: null
}, {
  graphqlArgName: "b",
  postgresArgName: "b",
  pgCodec: TYPES.int,
  required: false,
  fetcher: null
}, {
  graphqlArgName: "c",
  postgresArgName: "c",
  pgCodec: TYPES.int,
  required: false,
  fetcher: null
}];
const makeArgs_optional_missing_middle_1 = (args, path = []) => argDetailsSimple_optional_missing_middle_1.map(details => makeArg(path, args, details));
const resource_optional_missing_middle_1PgResource = registry.pgResources["optional_missing_middle_1"];
const argDetailsSimple_optional_missing_middle_2 = [{
  graphqlArgName: "a",
  postgresArgName: "a",
  pgCodec: TYPES.int,
  required: true,
  fetcher: null
}, {
  graphqlArgName: "b",
  postgresArgName: "b",
  pgCodec: TYPES.int,
  required: false,
  fetcher: null
}, {
  graphqlArgName: "c",
  postgresArgName: "c",
  pgCodec: TYPES.int,
  required: false,
  fetcher: null
}];
const makeArgs_optional_missing_middle_2 = (args, path = []) => argDetailsSimple_optional_missing_middle_2.map(details => makeArg(path, args, details));
const resource_optional_missing_middle_2PgResource = registry.pgResources["optional_missing_middle_2"];
const argDetailsSimple_optional_missing_middle_3 = [{
  graphqlArgName: "a",
  postgresArgName: "a",
  pgCodec: TYPES.int,
  required: true,
  fetcher: null
}, {
  graphqlArgName: "arg1",
  postgresArgName: "",
  pgCodec: TYPES.int,
  required: false,
  fetcher: null
}, {
  graphqlArgName: "c",
  postgresArgName: "c",
  pgCodec: TYPES.int,
  required: false,
  fetcher: null
}];
const makeArgs_optional_missing_middle_3 = (args, path = []) => argDetailsSimple_optional_missing_middle_3.map(details => makeArg(path, args, details));
const resource_optional_missing_middle_3PgResource = registry.pgResources["optional_missing_middle_3"];
const argDetailsSimple_optional_missing_middle_4 = [{
  graphqlArgName: "arg0",
  postgresArgName: "",
  pgCodec: TYPES.int,
  required: true,
  fetcher: null
}, {
  graphqlArgName: "b",
  postgresArgName: "b",
  pgCodec: TYPES.int,
  required: false,
  fetcher: null
}, {
  graphqlArgName: "arg2",
  postgresArgName: "",
  pgCodec: TYPES.int,
  required: false,
  fetcher: null
}];
const makeArgs_optional_missing_middle_4 = (args, path = []) => argDetailsSimple_optional_missing_middle_4.map(details => makeArg(path, args, details));
const resource_optional_missing_middle_4PgResource = registry.pgResources["optional_missing_middle_4"];
const argDetailsSimple_optional_missing_middle_5 = [{
  graphqlArgName: "a",
  postgresArgName: "a",
  pgCodec: TYPES.int,
  required: true,
  fetcher: null
}, {
  graphqlArgName: "arg1",
  postgresArgName: "",
  pgCodec: TYPES.int,
  required: false,
  fetcher: null
}, {
  graphqlArgName: "arg2",
  postgresArgName: "",
  pgCodec: TYPES.int,
  required: false,
  fetcher: null
}];
const makeArgs_optional_missing_middle_5 = (args, path = []) => argDetailsSimple_optional_missing_middle_5.map(details => makeArg(path, args, details));
const resource_optional_missing_middle_5PgResource = registry.pgResources["optional_missing_middle_5"];
const resource_func_out_unnamed_out_out_unnamedPgResource = registry.pgResources["func_out_unnamed_out_out_unnamed"];
const argDetailsSimple_int_set_query = [{
  graphqlArgName: "x",
  postgresArgName: "x",
  pgCodec: TYPES.int,
  required: true,
  fetcher: null
}, {
  graphqlArgName: "y",
  postgresArgName: "y",
  pgCodec: TYPES.int,
  required: true,
  fetcher: null
}, {
  graphqlArgName: "z",
  postgresArgName: "z",
  pgCodec: TYPES.int,
  required: true,
  fetcher: null
}];
const makeArgs_int_set_query = (args, path = []) => argDetailsSimple_int_set_query.map(details => makeArg(path, args, details));
const resource_int_set_queryPgResource = registry.pgResources["int_set_query"];
const getSelectPlanFromParentAndArgs6 = ($root, args, _info) => {
  const selectArgs = makeArgs_int_set_query(args);
  return resource_int_set_queryPgResource.execute(selectArgs);
};
const argDetailsSimple_func_returns_table_multi_col = [{
  graphqlArgName: "i",
  postgresArgName: "i",
  pgCodec: TYPES.int,
  required: true,
  fetcher: null
}, {
  graphqlArgName: "a",
  postgresArgName: "a",
  pgCodec: TYPES.int,
  required: false,
  fetcher: null
}, {
  graphqlArgName: "b",
  postgresArgName: "b",
  pgCodec: TYPES.int,
  required: false,
  fetcher: null
}];
const makeArgs_func_returns_table_multi_col = (args, path = []) => argDetailsSimple_func_returns_table_multi_col.map(details => makeArg(path, args, details));
const resource_func_returns_table_multi_colPgResource = registry.pgResources["func_returns_table_multi_col"];
const getSelectPlanFromParentAndArgs7 = ($root, args, _info) => {
  const selectArgs = makeArgs_func_returns_table_multi_col(args);
  return resource_func_returns_table_multi_colPgResource.execute(selectArgs);
};
const resource_query_interval_arrayPgResource = registry.pgResources["query_interval_array"];
const resource_query_text_arrayPgResource = registry.pgResources["query_text_array"];
const resource_return_table_without_grantsPgResource = registry.pgResources["return_table_without_grants"];
const argDetailsSimple_types_query = [{
  graphqlArgName: "a",
  postgresArgName: "a",
  pgCodec: TYPES.bigint,
  required: true,
  fetcher: null
}, {
  graphqlArgName: "b",
  postgresArgName: "b",
  pgCodec: TYPES.boolean,
  required: true,
  fetcher: null
}, {
  graphqlArgName: "c",
  postgresArgName: "c",
  pgCodec: TYPES.varchar,
  required: true,
  fetcher: null
}, {
  graphqlArgName: "d",
  postgresArgName: "d",
  pgCodec: int4ArrayCodec,
  required: true,
  fetcher: null
}, {
  graphqlArgName: "e",
  postgresArgName: "e",
  pgCodec: TYPES.json,
  required: true,
  fetcher: null
}, {
  graphqlArgName: "f",
  postgresArgName: "f",
  pgCodec: floatrangeCodec,
  required: true,
  fetcher: null
}];
const makeArgs_types_query = (args, path = []) => argDetailsSimple_types_query.map(details => makeArg(path, args, details));
const resource_types_queryPgResource = registry.pgResources["types_query"];
const argDetailsSimple_func_out_out_compound_type = [{
  graphqlArgName: "i1",
  postgresArgName: "i1",
  pgCodec: TYPES.int,
  required: true,
  fetcher: null
}];
const makeArgs_func_out_out_compound_type = (args, path = []) => argDetailsSimple_func_out_out_compound_type.map(details => makeArg(path, args, details));
const resource_func_out_out_compound_typePgResource = registry.pgResources["func_out_out_compound_type"];
const argDetailsSimple_query_output_two_rows = [{
  graphqlArgName: "leftArmId",
  postgresArgName: "left_arm_id",
  pgCodec: TYPES.int,
  required: true,
  fetcher: null
}, {
  graphqlArgName: "postId",
  postgresArgName: "post_id",
  pgCodec: TYPES.int,
  required: true,
  fetcher: null
}, {
  graphqlArgName: "txt",
  postgresArgName: "txt",
  pgCodec: TYPES.text,
  required: true,
  fetcher: null
}];
const makeArgs_query_output_two_rows = (args, path = []) => argDetailsSimple_query_output_two_rows.map(details => makeArg(path, args, details));
const resource_query_output_two_rowsPgResource = registry.pgResources["query_output_two_rows"];
const resource_compound_type_set_queryPgResource = registry.pgResources["compound_type_set_query"];
const getSelectPlanFromParentAndArgs8 = ($root, args, _info) => {
  const selectArgs = makeArgs_person_computed_out(args);
  return resource_compound_type_set_queryPgResource.execute(selectArgs);
};
const argDetailsSimple_compound_type_query = [{
  graphqlArgName: "object",
  postgresArgName: "object",
  pgCodec: compoundTypeCodec,
  required: true,
  fetcher: null
}];
const makeArgs_compound_type_query = (args, path = []) => argDetailsSimple_compound_type_query.map(details => makeArg(path, args, details));
const resource_compound_type_queryPgResource = registry.pgResources["compound_type_query"];
const argDetailsSimple_table_query = [{
  graphqlArgName: "id",
  postgresArgName: "id",
  pgCodec: TYPES.int,
  required: true,
  fetcher: null
}];
const makeArgs_table_query = (args, path = []) => argDetailsSimple_table_query.map(details => makeArg(path, args, details));
const resource_table_queryPgResource = registry.pgResources["table_query"];
const argDetailsSimple_query_compound_type_array = [{
  graphqlArgName: "object",
  postgresArgName: "object",
  pgCodec: compoundTypeCodec,
  required: true,
  fetcher: null
}];
const makeArgs_query_compound_type_array = (args, path = []) => argDetailsSimple_query_compound_type_array.map(details => makeArg(path, args, details));
const resource_query_compound_type_arrayPgResource = registry.pgResources["query_compound_type_array"];
const argDetailsSimple_compound_type_array_query = [{
  graphqlArgName: "object",
  postgresArgName: "object",
  pgCodec: compoundTypeCodec,
  required: true,
  fetcher: null
}];
const makeArgs_compound_type_array_query = (args, path = []) => argDetailsSimple_compound_type_array_query.map(details => makeArg(path, args, details));
const resource_compound_type_array_queryPgResource = registry.pgResources["compound_type_array_query"];
const argDetailsSimple_func_out_complex = [{
  graphqlArgName: "a",
  postgresArgName: "a",
  pgCodec: TYPES.int,
  required: true,
  fetcher: null
}, {
  graphqlArgName: "b",
  postgresArgName: "b",
  pgCodec: TYPES.text,
  required: true,
  fetcher: null
}];
const makeArgs_func_out_complex = (args, path = []) => argDetailsSimple_func_out_complex.map(details => makeArg(path, args, details));
const resource_func_out_complexPgResource = registry.pgResources["func_out_complex"];
const argDetailsSimple_func_out_complex_setof = [{
  graphqlArgName: "a",
  postgresArgName: "a",
  pgCodec: TYPES.int,
  required: true,
  fetcher: null
}, {
  graphqlArgName: "b",
  postgresArgName: "b",
  pgCodec: TYPES.text,
  required: true,
  fetcher: null
}];
const makeArgs_func_out_complex_setof = (args, path = []) => argDetailsSimple_func_out_complex_setof.map(details => makeArg(path, args, details));
const resource_func_out_complex_setofPgResource = registry.pgResources["func_out_complex_setof"];
const getSelectPlanFromParentAndArgs9 = ($root, args, _info) => {
  const selectArgs = makeArgs_func_out_complex_setof(args);
  return resource_func_out_complex_setofPgResource.execute(selectArgs);
};
const resource_badly_behaved_functionPgResource = registry.pgResources["badly_behaved_function"];
const getSelectPlanFromParentAndArgs10 = ($root, args, _info) => {
  const selectArgs = makeArgs_person_computed_out(args);
  return resource_badly_behaved_functionPgResource.execute(selectArgs);
};
const resource_func_out_tablePgResource = registry.pgResources["func_out_table"];
const resource_func_out_table_setofPgResource = registry.pgResources["func_out_table_setof"];
const getSelectPlanFromParentAndArgs11 = ($root, args, _info) => {
  const selectArgs = makeArgs_person_computed_out(args);
  return resource_func_out_table_setofPgResource.execute(selectArgs);
};
const resource_table_set_queryPgResource = registry.pgResources["table_set_query"];
const getSelectPlanFromParentAndArgs12 = ($root, args, _info) => {
  const selectArgs = makeArgs_person_computed_out(args);
  return resource_table_set_queryPgResource.execute(selectArgs);
};
function qbWhereBuilder(qb) {
  return qb.whereBuilder();
}
const resource_table_set_query_plpgsqlPgResource = registry.pgResources["table_set_query_plpgsql"];
const getSelectPlanFromParentAndArgs13 = ($root, args, _info) => {
  const selectArgs = makeArgs_person_computed_out(args);
  return resource_table_set_query_plpgsqlPgResource.execute(selectArgs);
};
const resource_type_function_connectionPgResource = registry.pgResources["type_function_connection"];
const getSelectPlanFromParentAndArgs14 = ($root, args, _info) => {
  const selectArgs = makeArgs_person_computed_out(args);
  return resource_type_function_connectionPgResource.execute(selectArgs);
};
const argDetailsSimple_type_function = [{
  graphqlArgName: "id",
  postgresArgName: "id",
  pgCodec: TYPES.int,
  required: true,
  fetcher: null
}];
const makeArgs_type_function = (args, path = []) => argDetailsSimple_type_function.map(details => makeArg(path, args, details));
const resource_type_functionPgResource = registry.pgResources["type_function"];
const resource_type_function_listPgResource = registry.pgResources["type_function_list"];
const resource_non_updatable_viewPgResource = registry.pgResources["non_updatable_view"];
const resource_foreign_keyPgResource = registry.pgResources["foreign_key"];
const resource_testviewPgResource = registry.pgResources["testview"];
const resource_updatable_viewPgResource = registry.pgResources["updatable_view"];
const resource_edge_casePgResource = registry.pgResources["edge_case"];
function hasRecord($row) {
  return "record" in $row && typeof $row.record === "function";
}
const pgFunctionArgumentsFromArgs = (() => {
  function pgFunctionArgumentsFromArgs($in, extraSelectArgs, inlining = false) {
    if (!hasRecord($in)) {
      throw new Error(`Invalid plan, exepcted 'PgSelectSingleStep', 'PgInsertSingleStep', 'PgUpdateSingleStep' or 'PgDeleteSingleStep', but found ${$in}`);
    }
    /**
     * An optimisation - if all our dependencies are
     * compatible with the expression's class plan then we
     * can inline ourselves into that, otherwise we must
     * issue the query separately.
     */
    const canUseExpressionDirectly = $in instanceof PgSelectSingleStep && extraSelectArgs.every(a => stepAMayDependOnStepB($in.getClassStep(), a.step));
    const $row = canUseExpressionDirectly ? $in : pgSelectSingleFromRecord($in.resource, $in.record());
    const selectArgs = [{
      step: $row.record()
    }, ...extraSelectArgs];
    if (inlining) {
      // This is a scalar computed attribute, let's inline the expression
      const newSelectArgs = selectArgs.map((arg, i) => {
        if (i === 0) {
          const {
            step,
            ...rest
          } = arg;
          return {
            ...rest,
            placeholder: $row.getClassStep().alias
          };
        } else {
          return arg;
        }
      });
      return {
        $row,
        selectArgs: newSelectArgs
      };
    } else {
      return {
        $row,
        selectArgs: selectArgs
      };
    }
  }
  return pgFunctionArgumentsFromArgs;
})();
const resource_person_computed_outPgResource = registry.pgResources["person_computed_out"];
const resource_person_first_namePgResource = registry.pgResources["person_first_name"];
const resource_person_computed_out_outPgResource = registry.pgResources["person_computed_out_out"];
const argDetailsSimple_person_computed_inout = [{
  graphqlArgName: "ino",
  postgresArgName: "ino",
  pgCodec: TYPES.text,
  required: true,
  fetcher: null
}];
const makeArgs_person_computed_inout = (args, path = []) => argDetailsSimple_person_computed_inout.map(details => makeArg(path, args, details));
const resource_person_computed_inoutPgResource = registry.pgResources["person_computed_inout"];
const argDetailsSimple_person_computed_inout_out = [{
  graphqlArgName: "ino",
  postgresArgName: "ino",
  pgCodec: TYPES.text,
  required: true,
  fetcher: null
}];
const makeArgs_person_computed_inout_out = (args, path = []) => argDetailsSimple_person_computed_inout_out.map(details => makeArg(path, args, details));
const resource_person_computed_inout_outPgResource = registry.pgResources["person_computed_inout_out"];
const argDetailsSimple_person_exists = [{
  graphqlArgName: "email",
  postgresArgName: "email",
  pgCodec: emailCodec,
  required: true,
  fetcher: null
}];
const makeArgs_person_exists = (args, path = []) => argDetailsSimple_person_exists.map(details => makeArg(path, args, details));
const resource_person_existsPgResource = registry.pgResources["person_exists"];
const resource_person_computed_first_arg_inout_outPgResource = registry.pgResources["person_computed_first_arg_inout_out"];
const argDetailsSimple_person_optional_missing_middle_1 = [{
  graphqlArgName: "arg0",
  postgresArgName: "",
  pgCodec: TYPES.int,
  required: true,
  fetcher: null
}, {
  graphqlArgName: "b",
  postgresArgName: "b",
  pgCodec: TYPES.int,
  required: false,
  fetcher: null
}, {
  graphqlArgName: "c",
  postgresArgName: "c",
  pgCodec: TYPES.int,
  required: false,
  fetcher: null
}];
const makeArgs_person_optional_missing_middle_1 = (args, path = []) => argDetailsSimple_person_optional_missing_middle_1.map(details => makeArg(path, args, details));
const resource_person_optional_missing_middle_1PgResource = registry.pgResources["person_optional_missing_middle_1"];
const argDetailsSimple_person_optional_missing_middle_2 = [{
  graphqlArgName: "a",
  postgresArgName: "a",
  pgCodec: TYPES.int,
  required: true,
  fetcher: null
}, {
  graphqlArgName: "b",
  postgresArgName: "b",
  pgCodec: TYPES.int,
  required: false,
  fetcher: null
}, {
  graphqlArgName: "c",
  postgresArgName: "c",
  pgCodec: TYPES.int,
  required: false,
  fetcher: null
}];
const makeArgs_person_optional_missing_middle_2 = (args, path = []) => argDetailsSimple_person_optional_missing_middle_2.map(details => makeArg(path, args, details));
const resource_person_optional_missing_middle_2PgResource = registry.pgResources["person_optional_missing_middle_2"];
const argDetailsSimple_person_optional_missing_middle_3 = [{
  graphqlArgName: "a",
  postgresArgName: "a",
  pgCodec: TYPES.int,
  required: true,
  fetcher: null
}, {
  graphqlArgName: "arg1",
  postgresArgName: "",
  pgCodec: TYPES.int,
  required: false,
  fetcher: null
}, {
  graphqlArgName: "c",
  postgresArgName: "c",
  pgCodec: TYPES.int,
  required: false,
  fetcher: null
}];
const makeArgs_person_optional_missing_middle_3 = (args, path = []) => argDetailsSimple_person_optional_missing_middle_3.map(details => makeArg(path, args, details));
const resource_person_optional_missing_middle_3PgResource = registry.pgResources["person_optional_missing_middle_3"];
const argDetailsSimple_person_optional_missing_middle_4 = [{
  graphqlArgName: "arg0",
  postgresArgName: "",
  pgCodec: TYPES.int,
  required: true,
  fetcher: null
}, {
  graphqlArgName: "b",
  postgresArgName: "b",
  pgCodec: TYPES.int,
  required: false,
  fetcher: null
}, {
  graphqlArgName: "arg2",
  postgresArgName: "",
  pgCodec: TYPES.int,
  required: false,
  fetcher: null
}];
const makeArgs_person_optional_missing_middle_4 = (args, path = []) => argDetailsSimple_person_optional_missing_middle_4.map(details => makeArg(path, args, details));
const resource_person_optional_missing_middle_4PgResource = registry.pgResources["person_optional_missing_middle_4"];
const argDetailsSimple_person_optional_missing_middle_5 = [{
  graphqlArgName: "a",
  postgresArgName: "a",
  pgCodec: TYPES.int,
  required: true,
  fetcher: null
}, {
  graphqlArgName: "arg1",
  postgresArgName: "",
  pgCodec: TYPES.int,
  required: false,
  fetcher: null
}, {
  graphqlArgName: "arg2",
  postgresArgName: "",
  pgCodec: TYPES.int,
  required: false,
  fetcher: null
}];
const makeArgs_person_optional_missing_middle_5 = (args, path = []) => argDetailsSimple_person_optional_missing_middle_5.map(details => makeArg(path, args, details));
const resource_person_optional_missing_middle_5PgResource = registry.pgResources["person_optional_missing_middle_5"];
const argDetailsSimple_person_computed_complex = [{
  graphqlArgName: "a",
  postgresArgName: "a",
  pgCodec: TYPES.int,
  required: true,
  fetcher: null
}, {
  graphqlArgName: "b",
  postgresArgName: "b",
  pgCodec: TYPES.text,
  required: true,
  fetcher: null
}];
const makeArgs_person_computed_complex = (args, path = []) => argDetailsSimple_person_computed_complex.map(details => makeArg(path, args, details));
const resource_person_computed_complexPgResource = registry.pgResources["person_computed_complex"];
const resource_person_first_postPgResource = registry.pgResources["person_first_post"];
const resource_person_computed_first_arg_inoutPgResource = registry.pgResources["person_computed_first_arg_inout"];
const resource_person_friendsPgResource = registry.pgResources["person_friends"];
const getSelectPlanFromParentAndArgs15 = ($in, args, _info) => {
  const {
    selectArgs
  } = pgFunctionArgumentsFromArgs($in, makeArgs_person_computed_out(args));
  return resource_person_friendsPgResource.execute(selectArgs);
};
const resource_person_type_function_connectionPgResource = registry.pgResources["person_type_function_connection"];
const getSelectPlanFromParentAndArgs16 = ($in, args, _info) => {
  const {
    selectArgs
  } = pgFunctionArgumentsFromArgs($in, makeArgs_person_computed_out(args));
  return resource_person_type_function_connectionPgResource.execute(selectArgs);
};
const argDetailsSimple_person_type_function = [{
  graphqlArgName: "id",
  postgresArgName: "id",
  pgCodec: TYPES.int,
  required: true,
  fetcher: null
}];
const makeArgs_person_type_function = (args, path = []) => argDetailsSimple_person_type_function.map(details => makeArg(path, args, details));
const resource_person_type_functionPgResource = registry.pgResources["person_type_function"];
const resource_person_type_function_listPgResource = registry.pgResources["person_type_function_list"];
const resource_frmcdc_wrappedUrlPgResource = registry.pgResources["frmcdc_wrappedUrl"];
const resource_frmcdc_compoundTypePgResource = registry.pgResources["frmcdc_compoundType"];
const resource_compound_type_computed_fieldPgResource = registry.pgResources["compound_type_computed_field"];
function UUIDSerialize(value) {
  return "" + value;
}
const coerce = string => {
  if (!/^[0-9a-f]{8}-?[0-9a-f]{4}-?[0-9a-f]{4}-?[0-9a-f]{4}-?[0-9a-f]{12}$/i.test(string)) {
    throw new GraphQLError("Invalid UUID, expected 32 hexadecimal characters, optionally with hypens");
  }
  return string;
};
const resource_post_computed_interval_setPgResource = registry.pgResources["post_computed_interval_set"];
const getSelectPlanFromParentAndArgs17 = ($in, args, _info) => {
  const {
    selectArgs
  } = pgFunctionArgumentsFromArgs($in, makeArgs_person_computed_out(args));
  return resource_post_computed_interval_setPgResource.execute(selectArgs);
};
const resource_post_computed_interval_arrayPgResource = registry.pgResources["post_computed_interval_array"];
const resource_post_computed_text_arrayPgResource = registry.pgResources["post_computed_text_array"];
const argDetailsSimple_post_computed_with_optional_arg = [{
  graphqlArgName: "i",
  postgresArgName: "i",
  pgCodec: TYPES.int,
  required: false,
  fetcher: null
}];
const makeArgs_post_computed_with_optional_arg = (args, path = []) => argDetailsSimple_post_computed_with_optional_arg.map(details => makeArg(path, args, details));
const resource_post_computed_with_optional_argPgResource = registry.pgResources["post_computed_with_optional_arg"];
const argDetailsSimple_post_computed_with_required_arg = [{
  graphqlArgName: "i",
  postgresArgName: "i",
  pgCodec: TYPES.int,
  required: true,
  fetcher: null
}];
const makeArgs_post_computed_with_required_arg = (args, path = []) => argDetailsSimple_post_computed_with_required_arg.map(details => makeArg(path, args, details));
const resource_post_computed_with_required_argPgResource = registry.pgResources["post_computed_with_required_arg"];
const argDetailsSimple_post_headline_trimmed = [{
  graphqlArgName: "length",
  postgresArgName: "length",
  pgCodec: TYPES.int,
  required: false,
  fetcher: null
}, {
  graphqlArgName: "omission",
  postgresArgName: "omission",
  pgCodec: TYPES.text,
  required: false,
  fetcher: null
}];
const makeArgs_post_headline_trimmed = (args, path = []) => argDetailsSimple_post_headline_trimmed.map(details => makeArg(path, args, details));
const resource_post_headline_trimmedPgResource = registry.pgResources["post_headline_trimmed"];
const argDetailsSimple_post_headline_trimmed_no_defaults = [{
  graphqlArgName: "length",
  postgresArgName: "length",
  pgCodec: TYPES.int,
  required: true,
  fetcher: null
}, {
  graphqlArgName: "omission",
  postgresArgName: "omission",
  pgCodec: TYPES.text,
  required: true,
  fetcher: null
}];
const makeArgs_post_headline_trimmed_no_defaults = (args, path = []) => argDetailsSimple_post_headline_trimmed_no_defaults.map(details => makeArg(path, args, details));
const resource_post_headline_trimmed_no_defaultsPgResource = registry.pgResources["post_headline_trimmed_no_defaults"];
const argDetailsSimple_post_headline_trimmed_strict = [{
  graphqlArgName: "length",
  postgresArgName: "length",
  pgCodec: TYPES.int,
  required: false,
  fetcher: null
}, {
  graphqlArgName: "omission",
  postgresArgName: "omission",
  pgCodec: TYPES.text,
  required: false,
  fetcher: null
}];
const makeArgs_post_headline_trimmed_strict = (args, path = []) => argDetailsSimple_post_headline_trimmed_strict.map(details => makeArg(path, args, details));
const resource_post_headline_trimmed_strictPgResource = registry.pgResources["post_headline_trimmed_strict"];
const argDetailsSimple_post_computed_compound_type_array = [{
  graphqlArgName: "object",
  postgresArgName: "object",
  pgCodec: compoundTypeCodec,
  required: true,
  fetcher: null
}];
const makeArgs_post_computed_compound_type_array = (args, path = []) => argDetailsSimple_post_computed_compound_type_array.map(details => makeArg(path, args, details));
const resource_post_computed_compound_type_arrayPgResource = registry.pgResources["post_computed_compound_type_array"];
const resource_frmcdc_comptypePgResource = registry.pgResources["frmcdc_comptype"];
const resource_frmcdc_nestedCompoundTypePgResource = registry.pgResources["frmcdc_nestedCompoundType"];
function LTreeParseValue(value) {
  return value;
}
const isValidHstoreObject = obj => {
  if (obj === null) {
    // Null is okay
    return true;
  } else if (typeof obj === "object") {
    // A hash with string/null values is also okay
    const keys = Object.keys(obj);
    for (const key of keys) {
      const val = obj[key];
      if (val === null) {
        // Null is okay
      } else if (typeof val === "string") {
        // String is okay
      } else {
        // Everything else is invalid.
        return false;
      }
    }
    return true;
  } else {
    // Everything else is invalid.
    return false;
  }
};
const parseValueLiteral = (ast, variables) => {
  switch (ast.kind) {
    case Kind.INT:
    case Kind.FLOAT:
      // Number isn't really okay, but we'll coerce it to a string anyway.
      return String(parseFloat(ast.value));
    case Kind.STRING:
      // String is okay.
      return String(ast.value);
    case Kind.NULL:
      // Null is okay.
      return null;
    case Kind.VARIABLE:
      {
        // Variable is okay if that variable is either a string or null.
        const name = ast.name.value;
        const value = variables ? variables[name] : undefined;
        if (value === null || typeof value === "string") {
          return value;
        }
        return undefined;
      }
    default:
      // Everything else is invalid.
      return undefined;
  }
};
const resource_edge_case_computedPgResource = registry.pgResources["edge_case_computed"];
const resource_mutation_outPgResource = registry.pgResources["mutation_out"];
const resource_mutation_out_setofPgResource = registry.pgResources["mutation_out_setof"];
const resource_mutation_out_unnamedPgResource = registry.pgResources["mutation_out_unnamed"];
const resource_no_args_mutationPgResource = registry.pgResources["no_args_mutation"];
const resource_return_void_mutationPgResource = registry.pgResources["return_void_mutation"];
const resource_mutation_interval_setPgResource = registry.pgResources["mutation_interval_set"];
const argDetailsSimple_mutation_in_out = [{
  graphqlArgName: "i",
  postgresArgName: "i",
  pgCodec: TYPES.int,
  required: true,
  fetcher: null
}];
const makeArgs_mutation_in_out = (args, path = []) => argDetailsSimple_mutation_in_out.map(details => makeArg(path, args, details));
const resource_mutation_in_outPgResource = registry.pgResources["mutation_in_out"];
const argDetailsSimple_mutation_returns_table_one_col = [{
  graphqlArgName: "i",
  postgresArgName: "i",
  pgCodec: TYPES.int,
  required: true,
  fetcher: null
}];
const makeArgs_mutation_returns_table_one_col = (args, path = []) => argDetailsSimple_mutation_returns_table_one_col.map(details => makeArg(path, args, details));
const resource_mutation_returns_table_one_colPgResource = registry.pgResources["mutation_returns_table_one_col"];
const argDetailsSimple_json_identity_mutation = [{
  graphqlArgName: "json",
  postgresArgName: "json",
  pgCodec: TYPES.json,
  required: true,
  fetcher: null
}];
const makeArgs_json_identity_mutation = (args, path = []) => argDetailsSimple_json_identity_mutation.map(details => makeArg(path, args, details));
const resource_json_identity_mutationPgResource = registry.pgResources["json_identity_mutation"];
const argDetailsSimple_jsonb_identity_mutation = [{
  graphqlArgName: "json",
  postgresArgName: "json",
  pgCodec: TYPES.jsonb,
  required: true,
  fetcher: null
}];
const makeArgs_jsonb_identity_mutation = (args, path = []) => argDetailsSimple_jsonb_identity_mutation.map(details => makeArg(path, args, details));
const resource_jsonb_identity_mutationPgResource = registry.pgResources["jsonb_identity_mutation"];
const argDetailsSimple_jsonb_identity_mutation_plpgsql = [{
  graphqlArgName: "_theJson",
  postgresArgName: "_the_json",
  pgCodec: TYPES.jsonb,
  required: true,
  fetcher: null
}];
const makeArgs_jsonb_identity_mutation_plpgsql = (args, path = []) => argDetailsSimple_jsonb_identity_mutation_plpgsql.map(details => makeArg(path, args, details));
const resource_jsonb_identity_mutation_plpgsqlPgResource = registry.pgResources["jsonb_identity_mutation_plpgsql"];
const argDetailsSimple_jsonb_identity_mutation_plpgsql_with_default = [{
  graphqlArgName: "_theJson",
  postgresArgName: "_the_json",
  pgCodec: TYPES.jsonb,
  required: false,
  fetcher: null
}];
const makeArgs_jsonb_identity_mutation_plpgsql_with_default = (args, path = []) => argDetailsSimple_jsonb_identity_mutation_plpgsql_with_default.map(details => makeArg(path, args, details));
const resource_jsonb_identity_mutation_plpgsql_with_defaultPgResource = registry.pgResources["jsonb_identity_mutation_plpgsql_with_default"];
const argDetailsSimple_add_1_mutation = [{
  graphqlArgName: "arg0",
  postgresArgName: null,
  pgCodec: TYPES.int,
  required: true,
  fetcher: null
}, {
  graphqlArgName: "arg1",
  postgresArgName: null,
  pgCodec: TYPES.int,
  required: true,
  fetcher: null
}];
const makeArgs_add_1_mutation = (args, path = []) => argDetailsSimple_add_1_mutation.map(details => makeArg(path, args, details));
const resource_add_1_mutationPgResource = registry.pgResources["add_1_mutation"];
const argDetailsSimple_add_2_mutation = [{
  graphqlArgName: "a",
  postgresArgName: "a",
  pgCodec: TYPES.int,
  required: true,
  fetcher: null
}, {
  graphqlArgName: "b",
  postgresArgName: "b",
  pgCodec: TYPES.int,
  required: false,
  fetcher: null
}];
const makeArgs_add_2_mutation = (args, path = []) => argDetailsSimple_add_2_mutation.map(details => makeArg(path, args, details));
const resource_add_2_mutationPgResource = registry.pgResources["add_2_mutation"];
const argDetailsSimple_add_3_mutation = [{
  graphqlArgName: "a",
  postgresArgName: "a",
  pgCodec: TYPES.int,
  required: true,
  fetcher: null
}, {
  graphqlArgName: "arg1",
  postgresArgName: "",
  pgCodec: TYPES.int,
  required: true,
  fetcher: null
}];
const makeArgs_add_3_mutation = (args, path = []) => argDetailsSimple_add_3_mutation.map(details => makeArg(path, args, details));
const resource_add_3_mutationPgResource = registry.pgResources["add_3_mutation"];
const argDetailsSimple_add_4_mutation = [{
  graphqlArgName: "arg0",
  postgresArgName: "",
  pgCodec: TYPES.int,
  required: true,
  fetcher: null
}, {
  graphqlArgName: "b",
  postgresArgName: "b",
  pgCodec: TYPES.int,
  required: false,
  fetcher: null
}];
const makeArgs_add_4_mutation = (args, path = []) => argDetailsSimple_add_4_mutation.map(details => makeArg(path, args, details));
const resource_add_4_mutationPgResource = registry.pgResources["add_4_mutation"];
const argDetailsSimple_add_4_mutation_error = [{
  graphqlArgName: "arg0",
  postgresArgName: "",
  pgCodec: TYPES.int,
  required: true,
  fetcher: null
}, {
  graphqlArgName: "b",
  postgresArgName: "b",
  pgCodec: TYPES.int,
  required: false,
  fetcher: null
}];
const makeArgs_add_4_mutation_error = (args, path = []) => argDetailsSimple_add_4_mutation_error.map(details => makeArg(path, args, details));
const resource_add_4_mutation_errorPgResource = registry.pgResources["add_4_mutation_error"];
const argDetailsSimple_mult_1 = [{
  graphqlArgName: "arg0",
  postgresArgName: null,
  pgCodec: TYPES.int,
  required: true,
  fetcher: null
}, {
  graphqlArgName: "arg1",
  postgresArgName: null,
  pgCodec: TYPES.int,
  required: true,
  fetcher: null
}];
const makeArgs_mult_1 = (args, path = []) => argDetailsSimple_mult_1.map(details => makeArg(path, args, details));
const resource_mult_1PgResource = registry.pgResources["mult_1"];
const argDetailsSimple_mult_2 = [{
  graphqlArgName: "arg0",
  postgresArgName: null,
  pgCodec: TYPES.int,
  required: true,
  fetcher: null
}, {
  graphqlArgName: "arg1",
  postgresArgName: null,
  pgCodec: TYPES.int,
  required: true,
  fetcher: null
}];
const makeArgs_mult_2 = (args, path = []) => argDetailsSimple_mult_2.map(details => makeArg(path, args, details));
const resource_mult_2PgResource = registry.pgResources["mult_2"];
const argDetailsSimple_mult_3 = [{
  graphqlArgName: "arg0",
  postgresArgName: null,
  pgCodec: TYPES.int,
  required: true,
  fetcher: null
}, {
  graphqlArgName: "arg1",
  postgresArgName: null,
  pgCodec: TYPES.int,
  required: true,
  fetcher: null
}];
const makeArgs_mult_3 = (args, path = []) => argDetailsSimple_mult_3.map(details => makeArg(path, args, details));
const resource_mult_3PgResource = registry.pgResources["mult_3"];
const argDetailsSimple_mult_4 = [{
  graphqlArgName: "arg0",
  postgresArgName: null,
  pgCodec: TYPES.int,
  required: true,
  fetcher: null
}, {
  graphqlArgName: "arg1",
  postgresArgName: null,
  pgCodec: TYPES.int,
  required: true,
  fetcher: null
}];
const makeArgs_mult_4 = (args, path = []) => argDetailsSimple_mult_4.map(details => makeArg(path, args, details));
const resource_mult_4PgResource = registry.pgResources["mult_4"];
const argDetailsSimple_mutation_in_inout = [{
  graphqlArgName: "i",
  postgresArgName: "i",
  pgCodec: TYPES.int,
  required: true,
  fetcher: null
}, {
  graphqlArgName: "ino",
  postgresArgName: "ino",
  pgCodec: TYPES.int,
  required: true,
  fetcher: null
}];
const makeArgs_mutation_in_inout = (args, path = []) => argDetailsSimple_mutation_in_inout.map(details => makeArg(path, args, details));
const resource_mutation_in_inoutPgResource = registry.pgResources["mutation_in_inout"];
const resource_mutation_out_outPgResource = registry.pgResources["mutation_out_out"];
const resource_mutation_out_out_setofPgResource = registry.pgResources["mutation_out_out_setof"];
const resource_mutation_out_out_unnamedPgResource = registry.pgResources["mutation_out_out_unnamed"];
const argDetailsSimple_int_set_mutation = [{
  graphqlArgName: "x",
  postgresArgName: "x",
  pgCodec: TYPES.int,
  required: true,
  fetcher: null
}, {
  graphqlArgName: "y",
  postgresArgName: "y",
  pgCodec: TYPES.int,
  required: true,
  fetcher: null
}, {
  graphqlArgName: "z",
  postgresArgName: "z",
  pgCodec: TYPES.int,
  required: true,
  fetcher: null
}];
const makeArgs_int_set_mutation = (args, path = []) => argDetailsSimple_int_set_mutation.map(details => makeArg(path, args, details));
const resource_int_set_mutationPgResource = registry.pgResources["int_set_mutation"];
const resource_mutation_out_unnamed_out_out_unnamedPgResource = registry.pgResources["mutation_out_unnamed_out_out_unnamed"];
const argDetailsSimple_mutation_returns_table_multi_col = [{
  graphqlArgName: "i",
  postgresArgName: "i",
  pgCodec: TYPES.int,
  required: true,
  fetcher: null
}];
const makeArgs_mutation_returns_table_multi_col = (args, path = []) => argDetailsSimple_mutation_returns_table_multi_col.map(details => makeArg(path, args, details));
const resource_mutation_returns_table_multi_colPgResource = registry.pgResources["mutation_returns_table_multi_col"];
const argDetailsSimple_guid_fn = [{
  graphqlArgName: "g",
  postgresArgName: "g",
  pgCodec: guidCodec,
  required: true,
  fetcher: null
}];
const makeArgs_guid_fn = (args, path = []) => argDetailsSimple_guid_fn.map(details => makeArg(path, args, details));
const resource_guid_fnPgResource = registry.pgResources["guid_fn"];
const resource_mutation_interval_arrayPgResource = registry.pgResources["mutation_interval_array"];
const resource_mutation_text_arrayPgResource = registry.pgResources["mutation_text_array"];
const argDetailsSimple_list_bde_mutation = [{
  graphqlArgName: "b",
  postgresArgName: "b",
  pgCodec: textArrayCodec,
  required: true,
  fetcher: null
}, {
  graphqlArgName: "d",
  postgresArgName: "d",
  pgCodec: TYPES.text,
  required: true,
  fetcher: null
}, {
  graphqlArgName: "e",
  postgresArgName: "e",
  pgCodec: TYPES.text,
  required: true,
  fetcher: null
}];
const makeArgs_list_bde_mutation = (args, path = []) => argDetailsSimple_list_bde_mutation.map(details => makeArg(path, args, details));
const resource_list_bde_mutationPgResource = registry.pgResources["list_bde_mutation"];
const resource_authenticate_failPgResource = registry.pgResources["authenticate_fail"];
const argDetailsSimple_authenticate = [{
  graphqlArgName: "a",
  postgresArgName: "a",
  pgCodec: TYPES.int,
  required: true,
  fetcher: null
}, {
  graphqlArgName: "b",
  postgresArgName: "b",
  pgCodec: TYPES.numeric,
  required: true,
  fetcher: null
}, {
  graphqlArgName: "c",
  postgresArgName: "c",
  pgCodec: TYPES.bigint,
  required: true,
  fetcher: null
}];
const makeArgs_authenticate = (args, path = []) => argDetailsSimple_authenticate.map(details => makeArg(path, args, details));
const resource_authenticatePgResource = registry.pgResources["authenticate"];
const argDetailsSimple_left_arm_identity = [{
  graphqlArgName: "leftArm",
  postgresArgName: "left_arm",
  pgCodec: leftArmCodec,
  required: true,
  fetcher: null
}];
const makeArgs_left_arm_identity = (args, path = []) => argDetailsSimple_left_arm_identity.map(details => makeArg(path, args, details));
const resource_left_arm_identityPgResource = registry.pgResources["left_arm_identity"];
const resource_issue756_mutationPgResource = registry.pgResources["issue756_mutation"];
const resource_issue756_set_mutationPgResource = registry.pgResources["issue756_set_mutation"];
const argDetailsSimple_authenticate_many = [{
  graphqlArgName: "a",
  postgresArgName: "a",
  pgCodec: TYPES.int,
  required: true,
  fetcher: null
}, {
  graphqlArgName: "b",
  postgresArgName: "b",
  pgCodec: TYPES.numeric,
  required: true,
  fetcher: null
}, {
  graphqlArgName: "c",
  postgresArgName: "c",
  pgCodec: TYPES.bigint,
  required: true,
  fetcher: null
}];
const makeArgs_authenticate_many = (args, path = []) => argDetailsSimple_authenticate_many.map(details => makeArg(path, args, details));
const resource_authenticate_manyPgResource = registry.pgResources["authenticate_many"];
const argDetailsSimple_authenticate_payload = [{
  graphqlArgName: "a",
  postgresArgName: "a",
  pgCodec: TYPES.int,
  required: true,
  fetcher: null
}, {
  graphqlArgName: "b",
  postgresArgName: "b",
  pgCodec: TYPES.numeric,
  required: true,
  fetcher: null
}, {
  graphqlArgName: "c",
  postgresArgName: "c",
  pgCodec: TYPES.bigint,
  required: true,
  fetcher: null
}];
const makeArgs_authenticate_payload = (args, path = []) => argDetailsSimple_authenticate_payload.map(details => makeArg(path, args, details));
const resource_authenticate_payloadPgResource = registry.pgResources["authenticate_payload"];
const argDetailsSimple_types_mutation = [{
  graphqlArgName: "a",
  postgresArgName: "a",
  pgCodec: TYPES.bigint,
  required: true,
  fetcher: null
}, {
  graphqlArgName: "b",
  postgresArgName: "b",
  pgCodec: TYPES.boolean,
  required: true,
  fetcher: null
}, {
  graphqlArgName: "c",
  postgresArgName: "c",
  pgCodec: TYPES.varchar,
  required: true,
  fetcher: null
}, {
  graphqlArgName: "d",
  postgresArgName: "d",
  pgCodec: int4ArrayCodec,
  required: true,
  fetcher: null
}, {
  graphqlArgName: "e",
  postgresArgName: "e",
  pgCodec: TYPES.json,
  required: true,
  fetcher: null
}, {
  graphqlArgName: "f",
  postgresArgName: "f",
  pgCodec: floatrangeCodec,
  required: true,
  fetcher: null
}];
const makeArgs_types_mutation = (args, path = []) => argDetailsSimple_types_mutation.map(details => makeArg(path, args, details));
const resource_types_mutationPgResource = registry.pgResources["types_mutation"];
const argDetailsSimple_mutation_out_out_compound_type = [{
  graphqlArgName: "i1",
  postgresArgName: "i1",
  pgCodec: TYPES.int,
  required: true,
  fetcher: null
}];
const makeArgs_mutation_out_out_compound_type = (args, path = []) => argDetailsSimple_mutation_out_out_compound_type.map(details => makeArg(path, args, details));
const resource_mutation_out_out_compound_typePgResource = registry.pgResources["mutation_out_out_compound_type"];
const argDetailsSimple_compound_type_mutation = [{
  graphqlArgName: "object",
  postgresArgName: "object",
  pgCodec: compoundTypeCodec,
  required: true,
  fetcher: null
}];
const makeArgs_compound_type_mutation = (args, path = []) => argDetailsSimple_compound_type_mutation.map(details => makeArg(path, args, details));
const resource_compound_type_mutationPgResource = registry.pgResources["compound_type_mutation"];
const argDetailsSimple_compound_type_set_mutation = [{
  graphqlArgName: "object",
  postgresArgName: "object",
  pgCodec: compoundTypeCodec,
  required: true,
  fetcher: null
}];
const makeArgs_compound_type_set_mutation = (args, path = []) => argDetailsSimple_compound_type_set_mutation.map(details => makeArg(path, args, details));
const resource_compound_type_set_mutationPgResource = registry.pgResources["compound_type_set_mutation"];
const argDetailsSimple_list_of_compound_types_mutation = [{
  graphqlArgName: "records",
  postgresArgName: "records",
  pgCodec: compoundTypeArrayCodec,
  required: true,
  fetcher: null
}];
const makeArgs_list_of_compound_types_mutation = (args, path = []) => argDetailsSimple_list_of_compound_types_mutation.map(details => makeArg(path, args, details));
const resource_list_of_compound_types_mutationPgResource = registry.pgResources["list_of_compound_types_mutation"];
const argDetailsSimple_table_mutation = [{
  graphqlArgName: "id",
  postgresArgName: "id",
  pgCodec: TYPES.int,
  required: true,
  fetcher: null
}];
const makeArgs_table_mutation = (args, path = []) => argDetailsSimple_table_mutation.map(details => makeArg(path, args, details));
const resource_table_mutationPgResource = registry.pgResources["table_mutation"];
const argDetailsSimple_post_with_suffix = [{
  graphqlArgName: "post",
  postgresArgName: "post",
  pgCodec: postCodec,
  required: true,
  fetcher: null
}, {
  graphqlArgName: "suffix",
  postgresArgName: "suffix",
  pgCodec: TYPES.text,
  required: true,
  fetcher: null
}];
const makeArgs_post_with_suffix = (args, path = []) => argDetailsSimple_post_with_suffix.map(details => makeArg(path, args, details));
const resource_post_with_suffixPgResource = registry.pgResources["post_with_suffix"];
const argDetailsSimple_mutation_compound_type_array = [{
  graphqlArgName: "object",
  postgresArgName: "object",
  pgCodec: compoundTypeCodec,
  required: true,
  fetcher: null
}];
const makeArgs_mutation_compound_type_array = (args, path = []) => argDetailsSimple_mutation_compound_type_array.map(details => makeArg(path, args, details));
const resource_mutation_compound_type_arrayPgResource = registry.pgResources["mutation_compound_type_array"];
const argDetailsSimple_compound_type_array_mutation = [{
  graphqlArgName: "object",
  postgresArgName: "object",
  pgCodec: compoundTypeCodec,
  required: true,
  fetcher: null
}];
const makeArgs_compound_type_array_mutation = (args, path = []) => argDetailsSimple_compound_type_array_mutation.map(details => makeArg(path, args, details));
const resource_compound_type_array_mutationPgResource = registry.pgResources["compound_type_array_mutation"];
const argDetailsSimple_post_many = [{
  graphqlArgName: "posts",
  postgresArgName: "posts",
  pgCodec: postArrayCodec,
  required: true,
  fetcher: null
}];
const makeArgs_post_many = (args, path = []) => argDetailsSimple_post_many.map(details => makeArg(path, args, details));
const resource_post_manyPgResource = registry.pgResources["post_many"];
const argDetailsSimple_mutation_out_complex = [{
  graphqlArgName: "a",
  postgresArgName: "a",
  pgCodec: TYPES.int,
  required: true,
  fetcher: null
}, {
  graphqlArgName: "b",
  postgresArgName: "b",
  pgCodec: TYPES.text,
  required: true,
  fetcher: null
}];
const makeArgs_mutation_out_complex = (args, path = []) => argDetailsSimple_mutation_out_complex.map(details => makeArg(path, args, details));
const resource_mutation_out_complexPgResource = registry.pgResources["mutation_out_complex"];
const argDetailsSimple_mutation_out_complex_setof = [{
  graphqlArgName: "a",
  postgresArgName: "a",
  pgCodec: TYPES.int,
  required: true,
  fetcher: null
}, {
  graphqlArgName: "b",
  postgresArgName: "b",
  pgCodec: TYPES.text,
  required: true,
  fetcher: null
}];
const makeArgs_mutation_out_complex_setof = (args, path = []) => argDetailsSimple_mutation_out_complex_setof.map(details => makeArg(path, args, details));
const resource_mutation_out_complex_setofPgResource = registry.pgResources["mutation_out_complex_setof"];
const resource_mutation_out_tablePgResource = registry.pgResources["mutation_out_table"];
const resource_mutation_out_table_setofPgResource = registry.pgResources["mutation_out_table_setof"];
const resource_table_set_mutationPgResource = registry.pgResources["table_set_mutation"];
const resource_type_function_connection_mutationPgResource = registry.pgResources["type_function_connection_mutation"];
const argDetailsSimple_type_function_mutation = [{
  graphqlArgName: "id",
  postgresArgName: "id",
  pgCodec: TYPES.int,
  required: true,
  fetcher: null
}];
const makeArgs_type_function_mutation = (args, path = []) => argDetailsSimple_type_function_mutation.map(details => makeArg(path, args, details));
const resource_type_function_mutationPgResource = registry.pgResources["type_function_mutation"];
const resource_type_function_list_mutationPgResource = registry.pgResources["type_function_list_mutation"];
const resource_frmcdc_jwtTokenPgResource = registry.pgResources["frmcdc_jwtToken"];
export const typeDefs = /* GraphQL */`"""The root query type which gives access points into the data universe."""
type Query {
  """
  Exposes the root query type nested one level down. This is helpful for Relay 1
  which can only query top level fields if they are in a particular form.
  """
  query: Query!

  """Get a single \`Input\`."""
  inputById(id: Int!): Input

  """Get a single \`Patch\`."""
  patchById(id: Int!): Patch

  """Get a single \`Reserved\`."""
  reservedById(id: Int!): Reserved

  """Get a single \`ReservedPatchRecord\`."""
  reservedPatchRecordById(id: Int!): ReservedPatchRecord

  """Get a single \`ReservedInputRecord\`."""
  reservedInputRecordById(id: Int!): ReservedInputRecord

  """Get a single \`DefaultValue\`."""
  defaultValueById(id: Int!): DefaultValue

  """Get a single \`NoPrimaryKey\`."""
  noPrimaryKeyById(id: Int!): NoPrimaryKey

  """Get a single \`UniqueForeignKey\`."""
  uniqueForeignKeyByCompoundKey1AndCompoundKey2(compoundKey1: Int!, compoundKey2: Int!): UniqueForeignKey

  """Get a single \`MyTable\`."""
  myTableById(id: Int!): MyTable

  """Get a single \`PersonSecret\`."""
  personSecretByPersonId(personId: Int!): PersonSecret @deprecated(reason: "This is deprecated (comment on table c.person_secret).")

  """Get a single \`ViewTable\`."""
  viewTableById(id: Int!): ViewTable

  """Get a single \`CompoundKey\`."""
  compoundKeyByPersonId1AndPersonId2(personId1: Int!, personId2: Int!): CompoundKey

  """Get a single \`SimilarTable1\`."""
  similarTable1ById(id: Int!): SimilarTable1

  """Get a single \`SimilarTable2\`."""
  similarTable2ById(id: Int!): SimilarTable2

  """Get a single \`NullTestRecord\`."""
  nullTestRecordById(id: Int!): NullTestRecord

  """Get a single \`LeftArm\`."""
  leftArmById(id: Int!): LeftArm

  """Get a single \`LeftArm\`."""
  leftArmByPersonId(personId: Int!): LeftArm

  """Get a single \`Issue756\`."""
  issue756ById(id: Int!): Issue756

  """Get a single \`Post\`."""
  postById(id: Int!): Post

  """Get a single \`Person\`."""
  personById(id: Int!): Person

  """Get a single \`Person\`."""
  personByEmail(email: Email!): Person

  """Get a single \`List\`."""
  listById(id: Int!): List

  """Get a single \`Type\`."""
  typeById(id: Int!): Type
  currentUserId: Int
  funcOut: Int

  """Reads and enables pagination through a set of \`Int4\`."""
  funcOutSetof(
    """Only read the first \`n\` values of the set."""
    first: Int

    """Only read the last \`n\` values of the set."""
    last: Int

    """
    Skip the first \`n\` values from our \`after\` cursor, an alternative to cursor
    based pagination. May not be used with \`last\`.
    """
    offset: Int

    """Read all values in the set before (above) this cursor."""
    before: Cursor

    """Read all values in the set after (below) this cursor."""
    after: Cursor
  ): FuncOutSetofConnection
  funcOutUnnamed: Int
  noArgsQuery: Int

  """Reads and enables pagination through a set of \`Interval\`."""
  queryIntervalSet(
    """Only read the first \`n\` values of the set."""
    first: Int

    """Only read the last \`n\` values of the set."""
    last: Int

    """
    Skip the first \`n\` values from our \`after\` cursor, an alternative to cursor
    based pagination. May not be used with \`last\`.
    """
    offset: Int

    """Read all values in the set before (above) this cursor."""
    before: Cursor

    """Read all values in the set after (below) this cursor."""
    after: Cursor
  ): QueryIntervalSetConnection

  """Reads and enables pagination through a set of \`Int8\`."""
  staticBigInteger(
    """Only read the first \`n\` values of the set."""
    first: Int

    """Only read the last \`n\` values of the set."""
    last: Int

    """
    Skip the first \`n\` values from our \`after\` cursor, an alternative to cursor
    based pagination. May not be used with \`last\`.
    """
    offset: Int

    """Read all values in the set before (above) this cursor."""
    before: Cursor

    """Read all values in the set after (below) this cursor."""
    after: Cursor
  ): StaticBigIntegerConnection
  funcInOut(i: Int): Int

  """Reads and enables pagination through a set of \`Int4\`."""
  funcReturnsTableOneCol(
    i: Int

    """Only read the first \`n\` values of the set."""
    first: Int

    """Only read the last \`n\` values of the set."""
    last: Int

    """
    Skip the first \`n\` values from our \`after\` cursor, an alternative to cursor
    based pagination. May not be used with \`last\`.
    """
    offset: Int

    """Read all values in the set before (above) this cursor."""
    before: Cursor

    """Read all values in the set after (below) this cursor."""
    after: Cursor
  ): FuncReturnsTableOneColConnection
  jsonIdentity(json: JSON): JSON
  jsonbIdentity(json: JSON): JSON

  """lol, add some stuff 1 query"""
  add1Query(arg0: Int!, arg1: Int!): Int

  """lol, add some stuff 2 query"""
  add2Query(a: Int!, b: Int): Int

  """lol, add some stuff 3 query"""
  add3Query(a: Int, arg1: Int): Int

  """lol, add some stuff 4 query"""
  add4Query(arg0: Int, b: Int): Int
  funcInInout(i: Int, ino: Int): Int
  funcOutOut: FuncOutOutRecord

  """Reads and enables pagination through a set of \`FuncOutOutSetofRecord\`."""
  funcOutOutSetof(
    """Only read the first \`n\` values of the set."""
    first: Int

    """Only read the last \`n\` values of the set."""
    last: Int

    """
    Skip the first \`n\` values from our \`after\` cursor, an alternative to cursor
    based pagination. May not be used with \`last\`.
    """
    offset: Int

    """Read all values in the set before (above) this cursor."""
    before: Cursor

    """Read all values in the set after (below) this cursor."""
    after: Cursor
  ): FuncOutOutSetofConnection
  funcOutOutUnnamed: FuncOutOutUnnamedRecord
  searchTestSummariesList(
    """Only read the first \`n\` values of the set."""
    first: Int

    """Skip the first \`n\` values."""
    offset: Int
  ): [SearchTestSummariesRecord]
  optionalMissingMiddle1(arg0: Int!, b: Int, c: Int): Int
  optionalMissingMiddle2(a: Int!, b: Int, c: Int): Int
  optionalMissingMiddle3(a: Int!, arg1: Int, c: Int): Int
  optionalMissingMiddle4(arg0: Int!, b: Int, arg2: Int): Int
  optionalMissingMiddle5(a: Int!, arg1: Int, arg2: Int): Int
  funcOutUnnamedOutOutUnnamed: FuncOutUnnamedOutOutUnnamedRecord

  """Reads and enables pagination through a set of \`Int4\`."""
  intSetQuery(
    x: Int
    y: Int
    z: Int

    """Only read the first \`n\` values of the set."""
    first: Int

    """Only read the last \`n\` values of the set."""
    last: Int

    """
    Skip the first \`n\` values from our \`after\` cursor, an alternative to cursor
    based pagination. May not be used with \`last\`.
    """
    offset: Int

    """Read all values in the set before (above) this cursor."""
    before: Cursor

    """Read all values in the set after (below) this cursor."""
    after: Cursor
  ): IntSetQueryConnection

  """
  Reads and enables pagination through a set of \`FuncReturnsTableMultiColRecord\`.
  """
  funcReturnsTableMultiCol(
    i: Int
    a: Int
    b: Int

    """Only read the first \`n\` values of the set."""
    first: Int

    """Only read the last \`n\` values of the set."""
    last: Int

    """
    Skip the first \`n\` values from our \`after\` cursor, an alternative to cursor
    based pagination. May not be used with \`last\`.
    """
    offset: Int

    """Read all values in the set before (above) this cursor."""
    before: Cursor

    """Read all values in the set after (below) this cursor."""
    after: Cursor
  ): FuncReturnsTableMultiColConnection
  queryIntervalArray: [Interval]
  queryTextArray: [String]
  returnTableWithoutGrants: CompoundKey
  typesQuery(a: BigInt!, b: Boolean!, c: String!, d: [Int]!, e: JSON!, f: FloatRangeInput!): Boolean
  funcOutOutCompoundType(i1: Int): FuncOutOutCompoundTypeRecord
  queryOutputTwoRows(leftArmId: Int, postId: Int, txt: String): QueryOutputTwoRowsRecord

  """Reads and enables pagination through a set of \`CompoundType\`."""
  compoundTypeSetQuery(
    """Only read the first \`n\` values of the set."""
    first: Int

    """Only read the last \`n\` values of the set."""
    last: Int

    """
    Skip the first \`n\` values from our \`after\` cursor, an alternative to cursor
    based pagination. May not be used with \`last\`.
    """
    offset: Int

    """Read all values in the set before (above) this cursor."""
    before: Cursor

    """Read all values in the set after (below) this cursor."""
    after: Cursor
  ): CompoundTypesConnection
  compoundTypeQuery(object: CompoundTypeInput): CompoundType
  tableQuery(id: Int): Post
  queryCompoundTypeArray(object: CompoundTypeInput): [CompoundType]
  compoundTypeArrayQuery(object: CompoundTypeInput): [CompoundType]
  funcOutComplex(a: Int, b: String): FuncOutComplexRecord

  """
  Reads and enables pagination through a set of \`FuncOutComplexSetofRecord\`.
  """
  funcOutComplexSetof(
    a: Int
    b: String

    """Only read the first \`n\` values of the set."""
    first: Int

    """Only read the last \`n\` values of the set."""
    last: Int

    """
    Skip the first \`n\` values from our \`after\` cursor, an alternative to cursor
    based pagination. May not be used with \`last\`.
    """
    offset: Int

    """Read all values in the set before (above) this cursor."""
    before: Cursor

    """Read all values in the set after (below) this cursor."""
    after: Cursor
  ): FuncOutComplexSetofConnection

  """Reads and enables pagination through a set of \`Person\`."""
  badlyBehavedFunction(
    """Only read the first \`n\` values of the set."""
    first: Int

    """Only read the last \`n\` values of the set."""
    last: Int

    """
    Skip the first \`n\` values from our \`after\` cursor, an alternative to cursor
    based pagination. May not be used with \`last\`.
    """
    offset: Int

    """Read all values in the set before (above) this cursor."""
    before: Cursor

    """Read all values in the set after (below) this cursor."""
    after: Cursor
  ): PeopleConnection @deprecated(reason: "This is deprecated (comment on function c.badly_behaved_function).")
  funcOutTable: Person

  """Reads and enables pagination through a set of \`Person\`."""
  funcOutTableSetof(
    """Only read the first \`n\` values of the set."""
    first: Int

    """Only read the last \`n\` values of the set."""
    last: Int

    """
    Skip the first \`n\` values from our \`after\` cursor, an alternative to cursor
    based pagination. May not be used with \`last\`.
    """
    offset: Int

    """Read all values in the set before (above) this cursor."""
    before: Cursor

    """Read all values in the set after (below) this cursor."""
    after: Cursor
  ): PeopleConnection

  """Reads and enables pagination through a set of \`Person\`."""
  tableSetQuery(
    """Only read the first \`n\` values of the set."""
    first: Int

    """Only read the last \`n\` values of the set."""
    last: Int

    """
    Skip the first \`n\` values from our \`after\` cursor, an alternative to cursor
    based pagination. May not be used with \`last\`.
    """
    offset: Int

    """Read all values in the set before (above) this cursor."""
    before: Cursor

    """Read all values in the set after (below) this cursor."""
    after: Cursor

    """
    A condition to be used in determining which values should be returned by the collection.
    """
    condition: PersonCondition

    """The method to use when ordering \`Person\`."""
    orderBy: [PeopleOrderBy!]
  ): PeopleConnection

  """Reads and enables pagination through a set of \`Person\`."""
  tableSetQueryPlpgsql(
    """Only read the first \`n\` values of the set."""
    first: Int

    """Only read the last \`n\` values of the set."""
    last: Int

    """
    Skip the first \`n\` values from our \`after\` cursor, an alternative to cursor
    based pagination. May not be used with \`last\`.
    """
    offset: Int

    """Read all values in the set before (above) this cursor."""
    before: Cursor

    """Read all values in the set after (below) this cursor."""
    after: Cursor
  ): PeopleConnection

  """Reads and enables pagination through a set of \`Type\`."""
  typeFunctionConnection(
    """Only read the first \`n\` values of the set."""
    first: Int

    """Only read the last \`n\` values of the set."""
    last: Int

    """
    Skip the first \`n\` values from our \`after\` cursor, an alternative to cursor
    based pagination. May not be used with \`last\`.
    """
    offset: Int

    """Read all values in the set before (above) this cursor."""
    before: Cursor

    """Read all values in the set after (below) this cursor."""
    after: Cursor
  ): TypesConnection
  typeFunction(id: Int): Type
  typeFunctionList: [Type]

  """Reads and enables pagination through a set of \`NonUpdatableView\`."""
  allNonUpdatableViews(
    """Only read the first \`n\` values of the set."""
    first: Int

    """Only read the last \`n\` values of the set."""
    last: Int

    """
    Skip the first \`n\` values from our \`after\` cursor, an alternative to cursor
    based pagination. May not be used with \`last\`.
    """
    offset: Int

    """Read all values in the set before (above) this cursor."""
    before: Cursor

    """Read all values in the set after (below) this cursor."""
    after: Cursor

    """
    A condition to be used in determining which values should be returned by the collection.
    """
    condition: NonUpdatableViewCondition

    """The method to use when ordering \`NonUpdatableView\`."""
    orderBy: [NonUpdatableViewsOrderBy!] = [NATURAL]
  ): NonUpdatableViewsConnection

  """Reads and enables pagination through a set of \`Input\`."""
  allInputs(
    """Only read the first \`n\` values of the set."""
    first: Int

    """Only read the last \`n\` values of the set."""
    last: Int

    """
    Skip the first \`n\` values from our \`after\` cursor, an alternative to cursor
    based pagination. May not be used with \`last\`.
    """
    offset: Int

    """Read all values in the set before (above) this cursor."""
    before: Cursor

    """Read all values in the set after (below) this cursor."""
    after: Cursor

    """
    A condition to be used in determining which values should be returned by the collection.
    """
    condition: InputCondition

    """The method to use when ordering \`Input\`."""
    orderBy: [InputsOrderBy!] = [PRIMARY_KEY_ASC]
  ): InputsConnection

  """Reads and enables pagination through a set of \`Patch\`."""
  allPatches(
    """Only read the first \`n\` values of the set."""
    first: Int

    """Only read the last \`n\` values of the set."""
    last: Int

    """
    Skip the first \`n\` values from our \`after\` cursor, an alternative to cursor
    based pagination. May not be used with \`last\`.
    """
    offset: Int

    """Read all values in the set before (above) this cursor."""
    before: Cursor

    """Read all values in the set after (below) this cursor."""
    after: Cursor

    """
    A condition to be used in determining which values should be returned by the collection.
    """
    condition: PatchCondition

    """The method to use when ordering \`Patch\`."""
    orderBy: [PatchesOrderBy!] = [PRIMARY_KEY_ASC]
  ): PatchesConnection

  """Reads and enables pagination through a set of \`Reserved\`."""
  allReserveds(
    """Only read the first \`n\` values of the set."""
    first: Int

    """Only read the last \`n\` values of the set."""
    last: Int

    """
    Skip the first \`n\` values from our \`after\` cursor, an alternative to cursor
    based pagination. May not be used with \`last\`.
    """
    offset: Int

    """Read all values in the set before (above) this cursor."""
    before: Cursor

    """Read all values in the set after (below) this cursor."""
    after: Cursor

    """
    A condition to be used in determining which values should be returned by the collection.
    """
    condition: ReservedCondition

    """The method to use when ordering \`Reserved\`."""
    orderBy: [ReservedsOrderBy!] = [PRIMARY_KEY_ASC]
  ): ReservedsConnection

  """Reads and enables pagination through a set of \`ReservedPatchRecord\`."""
  allReservedPatchRecords(
    """Only read the first \`n\` values of the set."""
    first: Int

    """Only read the last \`n\` values of the set."""
    last: Int

    """
    Skip the first \`n\` values from our \`after\` cursor, an alternative to cursor
    based pagination. May not be used with \`last\`.
    """
    offset: Int

    """Read all values in the set before (above) this cursor."""
    before: Cursor

    """Read all values in the set after (below) this cursor."""
    after: Cursor

    """
    A condition to be used in determining which values should be returned by the collection.
    """
    condition: ReservedPatchRecordCondition

    """The method to use when ordering \`ReservedPatchRecord\`."""
    orderBy: [ReservedPatchRecordsOrderBy!] = [PRIMARY_KEY_ASC]
  ): ReservedPatchRecordsConnection

  """Reads and enables pagination through a set of \`ReservedInputRecord\`."""
  allReservedInputRecords(
    """Only read the first \`n\` values of the set."""
    first: Int

    """Only read the last \`n\` values of the set."""
    last: Int

    """
    Skip the first \`n\` values from our \`after\` cursor, an alternative to cursor
    based pagination. May not be used with \`last\`.
    """
    offset: Int

    """Read all values in the set before (above) this cursor."""
    before: Cursor

    """Read all values in the set after (below) this cursor."""
    after: Cursor

    """
    A condition to be used in determining which values should be returned by the collection.
    """
    condition: ReservedInputRecordCondition

    """The method to use when ordering \`ReservedInputRecord\`."""
    orderBy: [ReservedInputRecordsOrderBy!] = [PRIMARY_KEY_ASC]
  ): ReservedInputRecordsConnection

  """Reads and enables pagination through a set of \`DefaultValue\`."""
  allDefaultValues(
    """Only read the first \`n\` values of the set."""
    first: Int

    """Only read the last \`n\` values of the set."""
    last: Int

    """
    Skip the first \`n\` values from our \`after\` cursor, an alternative to cursor
    based pagination. May not be used with \`last\`.
    """
    offset: Int

    """Read all values in the set before (above) this cursor."""
    before: Cursor

    """Read all values in the set after (below) this cursor."""
    after: Cursor

    """
    A condition to be used in determining which values should be returned by the collection.
    """
    condition: DefaultValueCondition

    """The method to use when ordering \`DefaultValue\`."""
    orderBy: [DefaultValuesOrderBy!] = [PRIMARY_KEY_ASC]
  ): DefaultValuesConnection

  """Reads and enables pagination through a set of \`ForeignKey\`."""
  allForeignKeys(
    """Only read the first \`n\` values of the set."""
    first: Int

    """Only read the last \`n\` values of the set."""
    last: Int

    """
    Skip the first \`n\` values from our \`after\` cursor, an alternative to cursor
    based pagination. May not be used with \`last\`.
    """
    offset: Int

    """Read all values in the set before (above) this cursor."""
    before: Cursor

    """Read all values in the set after (below) this cursor."""
    after: Cursor

    """
    A condition to be used in determining which values should be returned by the collection.
    """
    condition: ForeignKeyCondition

    """The method to use when ordering \`ForeignKey\`."""
    orderBy: [ForeignKeysOrderBy!] = [NATURAL]
  ): ForeignKeysConnection

  """Reads and enables pagination through a set of \`NoPrimaryKey\`."""
  allNoPrimaryKeys(
    """Only read the first \`n\` values of the set."""
    first: Int

    """Only read the last \`n\` values of the set."""
    last: Int

    """
    Skip the first \`n\` values from our \`after\` cursor, an alternative to cursor
    based pagination. May not be used with \`last\`.
    """
    offset: Int

    """Read all values in the set before (above) this cursor."""
    before: Cursor

    """Read all values in the set after (below) this cursor."""
    after: Cursor

    """
    A condition to be used in determining which values should be returned by the collection.
    """
    condition: NoPrimaryKeyCondition

    """The method to use when ordering \`NoPrimaryKey\`."""
    orderBy: [NoPrimaryKeysOrderBy!] = [NATURAL]
  ): NoPrimaryKeysConnection

  """Reads and enables pagination through a set of \`Testview\`."""
  allTestviews(
    """Only read the first \`n\` values of the set."""
    first: Int

    """Only read the last \`n\` values of the set."""
    last: Int

    """
    Skip the first \`n\` values from our \`after\` cursor, an alternative to cursor
    based pagination. May not be used with \`last\`.
    """
    offset: Int

    """Read all values in the set before (above) this cursor."""
    before: Cursor

    """Read all values in the set after (below) this cursor."""
    after: Cursor

    """
    A condition to be used in determining which values should be returned by the collection.
    """
    condition: TestviewCondition

    """The method to use when ordering \`Testview\`."""
    orderBy: [TestviewsOrderBy!] = [NATURAL]
  ): TestviewsConnection

  """Reads and enables pagination through a set of \`MyTable\`."""
  allMyTables(
    """Only read the first \`n\` values of the set."""
    first: Int

    """Only read the last \`n\` values of the set."""
    last: Int

    """
    Skip the first \`n\` values from our \`after\` cursor, an alternative to cursor
    based pagination. May not be used with \`last\`.
    """
    offset: Int

    """Read all values in the set before (above) this cursor."""
    before: Cursor

    """Read all values in the set after (below) this cursor."""
    after: Cursor

    """
    A condition to be used in determining which values should be returned by the collection.
    """
    condition: MyTableCondition

    """The method to use when ordering \`MyTable\`."""
    orderBy: [MyTablesOrderBy!] = [PRIMARY_KEY_ASC]
  ): MyTablesConnection

  """Reads and enables pagination through a set of \`PersonSecret\`."""
  allPersonSecrets(
    """Only read the first \`n\` values of the set."""
    first: Int

    """Only read the last \`n\` values of the set."""
    last: Int

    """
    Skip the first \`n\` values from our \`after\` cursor, an alternative to cursor
    based pagination. May not be used with \`last\`.
    """
    offset: Int

    """Read all values in the set before (above) this cursor."""
    before: Cursor

    """Read all values in the set after (below) this cursor."""
    after: Cursor

    """
    A condition to be used in determining which values should be returned by the collection.
    """
    condition: PersonSecretCondition

    """The method to use when ordering \`PersonSecret\`."""
    orderBy: [PersonSecretsOrderBy!] = [PRIMARY_KEY_ASC]
  ): PersonSecretsConnection @deprecated(reason: "This is deprecated (comment on table c.person_secret).")

  """Reads and enables pagination through a set of \`ViewTable\`."""
  allViewTables(
    """Only read the first \`n\` values of the set."""
    first: Int

    """Only read the last \`n\` values of the set."""
    last: Int

    """
    Skip the first \`n\` values from our \`after\` cursor, an alternative to cursor
    based pagination. May not be used with \`last\`.
    """
    offset: Int

    """Read all values in the set before (above) this cursor."""
    before: Cursor

    """Read all values in the set after (below) this cursor."""
    after: Cursor

    """
    A condition to be used in determining which values should be returned by the collection.
    """
    condition: ViewTableCondition

    """The method to use when ordering \`ViewTable\`."""
    orderBy: [ViewTablesOrderBy!] = [PRIMARY_KEY_ASC]
  ): ViewTablesConnection

  """Reads and enables pagination through a set of \`CompoundKey\`."""
  allCompoundKeys(
    """Only read the first \`n\` values of the set."""
    first: Int

    """Only read the last \`n\` values of the set."""
    last: Int

    """
    Skip the first \`n\` values from our \`after\` cursor, an alternative to cursor
    based pagination. May not be used with \`last\`.
    """
    offset: Int

    """Read all values in the set before (above) this cursor."""
    before: Cursor

    """Read all values in the set after (below) this cursor."""
    after: Cursor

    """
    A condition to be used in determining which values should be returned by the collection.
    """
    condition: CompoundKeyCondition

    """The method to use when ordering \`CompoundKey\`."""
    orderBy: [CompoundKeysOrderBy!] = [PRIMARY_KEY_ASC]
  ): CompoundKeysConnection

  """Reads and enables pagination through a set of \`SimilarTable1\`."""
  allSimilarTable1S(
    """Only read the first \`n\` values of the set."""
    first: Int

    """Only read the last \`n\` values of the set."""
    last: Int

    """
    Skip the first \`n\` values from our \`after\` cursor, an alternative to cursor
    based pagination. May not be used with \`last\`.
    """
    offset: Int

    """Read all values in the set before (above) this cursor."""
    before: Cursor

    """Read all values in the set after (below) this cursor."""
    after: Cursor

    """
    A condition to be used in determining which values should be returned by the collection.
    """
    condition: SimilarTable1Condition

    """The method to use when ordering \`SimilarTable1\`."""
    orderBy: [SimilarTable1SOrderBy!] = [PRIMARY_KEY_ASC]
  ): SimilarTable1SConnection

  """Reads and enables pagination through a set of \`SimilarTable2\`."""
  allSimilarTable2S(
    """Only read the first \`n\` values of the set."""
    first: Int

    """Only read the last \`n\` values of the set."""
    last: Int

    """
    Skip the first \`n\` values from our \`after\` cursor, an alternative to cursor
    based pagination. May not be used with \`last\`.
    """
    offset: Int

    """Read all values in the set before (above) this cursor."""
    before: Cursor

    """Read all values in the set after (below) this cursor."""
    after: Cursor

    """
    A condition to be used in determining which values should be returned by the collection.
    """
    condition: SimilarTable2Condition

    """The method to use when ordering \`SimilarTable2\`."""
    orderBy: [SimilarTable2SOrderBy!] = [PRIMARY_KEY_ASC]
  ): SimilarTable2SConnection

  """Reads and enables pagination through a set of \`UpdatableView\`."""
  allUpdatableViews(
    """Only read the first \`n\` values of the set."""
    first: Int

    """Only read the last \`n\` values of the set."""
    last: Int

    """
    Skip the first \`n\` values from our \`after\` cursor, an alternative to cursor
    based pagination. May not be used with \`last\`.
    """
    offset: Int

    """Read all values in the set before (above) this cursor."""
    before: Cursor

    """Read all values in the set after (below) this cursor."""
    after: Cursor

    """
    A condition to be used in determining which values should be returned by the collection.
    """
    condition: UpdatableViewCondition

    """The method to use when ordering \`UpdatableView\`."""
    orderBy: [UpdatableViewsOrderBy!] = [NATURAL]
  ): UpdatableViewsConnection

  """Reads and enables pagination through a set of \`NullTestRecord\`."""
  allNullTestRecords(
    """Only read the first \`n\` values of the set."""
    first: Int

    """Only read the last \`n\` values of the set."""
    last: Int

    """
    Skip the first \`n\` values from our \`after\` cursor, an alternative to cursor
    based pagination. May not be used with \`last\`.
    """
    offset: Int

    """Read all values in the set before (above) this cursor."""
    before: Cursor

    """Read all values in the set after (below) this cursor."""
    after: Cursor

    """
    A condition to be used in determining which values should be returned by the collection.
    """
    condition: NullTestRecordCondition

    """The method to use when ordering \`NullTestRecord\`."""
    orderBy: [NullTestRecordsOrderBy!] = [PRIMARY_KEY_ASC]
  ): NullTestRecordsConnection

  """Reads and enables pagination through a set of \`EdgeCase\`."""
  allEdgeCases(
    """Only read the first \`n\` values of the set."""
    first: Int

    """Only read the last \`n\` values of the set."""
    last: Int

    """
    Skip the first \`n\` values from our \`after\` cursor, an alternative to cursor
    based pagination. May not be used with \`last\`.
    """
    offset: Int

    """Read all values in the set before (above) this cursor."""
    before: Cursor

    """Read all values in the set after (below) this cursor."""
    after: Cursor

    """
    A condition to be used in determining which values should be returned by the collection.
    """
    condition: EdgeCaseCondition

    """The method to use when ordering \`EdgeCase\`."""
    orderBy: [EdgeCasesOrderBy!] = [NATURAL]
  ): EdgeCasesConnection

  """Reads and enables pagination through a set of \`LeftArm\`."""
  allLeftArms(
    """Only read the first \`n\` values of the set."""
    first: Int

    """Only read the last \`n\` values of the set."""
    last: Int

    """
    Skip the first \`n\` values from our \`after\` cursor, an alternative to cursor
    based pagination. May not be used with \`last\`.
    """
    offset: Int

    """Read all values in the set before (above) this cursor."""
    before: Cursor

    """Read all values in the set after (below) this cursor."""
    after: Cursor

    """
    A condition to be used in determining which values should be returned by the collection.
    """
    condition: LeftArmCondition

    """The method to use when ordering \`LeftArm\`."""
    orderBy: [LeftArmsOrderBy!] = [PRIMARY_KEY_ASC]
  ): LeftArmsConnection

  """Reads and enables pagination through a set of \`Issue756\`."""
  allIssue756S(
    """Only read the first \`n\` values of the set."""
    first: Int

    """Only read the last \`n\` values of the set."""
    last: Int

    """
    Skip the first \`n\` values from our \`after\` cursor, an alternative to cursor
    based pagination. May not be used with \`last\`.
    """
    offset: Int

    """Read all values in the set before (above) this cursor."""
    before: Cursor

    """Read all values in the set after (below) this cursor."""
    after: Cursor

    """
    A condition to be used in determining which values should be returned by the collection.
    """
    condition: Issue756Condition

    """The method to use when ordering \`Issue756\`."""
    orderBy: [Issue756SOrderBy!] = [PRIMARY_KEY_ASC]
  ): Issue756SConnection

  """Reads and enables pagination through a set of \`Post\`."""
  allPosts(
    """Only read the first \`n\` values of the set."""
    first: Int

    """Only read the last \`n\` values of the set."""
    last: Int

    """
    Skip the first \`n\` values from our \`after\` cursor, an alternative to cursor
    based pagination. May not be used with \`last\`.
    """
    offset: Int

    """Read all values in the set before (above) this cursor."""
    before: Cursor

    """Read all values in the set after (below) this cursor."""
    after: Cursor

    """
    A condition to be used in determining which values should be returned by the collection.
    """
    condition: PostCondition

    """The method to use when ordering \`Post\`."""
    orderBy: [PostsOrderBy!] = [PRIMARY_KEY_ASC]
  ): PostsConnection

  """Reads and enables pagination through a set of \`Person\`."""
  allPeople(
    """Only read the first \`n\` values of the set."""
    first: Int

    """Only read the last \`n\` values of the set."""
    last: Int

    """
    Skip the first \`n\` values from our \`after\` cursor, an alternative to cursor
    based pagination. May not be used with \`last\`.
    """
    offset: Int

    """Read all values in the set before (above) this cursor."""
    before: Cursor

    """Read all values in the set after (below) this cursor."""
    after: Cursor

    """
    A condition to be used in determining which values should be returned by the collection.
    """
    condition: PersonCondition

    """The method to use when ordering \`Person\`."""
    orderBy: [PeopleOrderBy!] = [PRIMARY_KEY_ASC]
  ): PeopleConnection

  """Reads and enables pagination through a set of \`List\`."""
  allLists(
    """Only read the first \`n\` values of the set."""
    first: Int

    """Only read the last \`n\` values of the set."""
    last: Int

    """
    Skip the first \`n\` values from our \`after\` cursor, an alternative to cursor
    based pagination. May not be used with \`last\`.
    """
    offset: Int

    """Read all values in the set before (above) this cursor."""
    before: Cursor

    """Read all values in the set after (below) this cursor."""
    after: Cursor

    """
    A condition to be used in determining which values should be returned by the collection.
    """
    condition: ListCondition

    """The method to use when ordering \`List\`."""
    orderBy: [ListsOrderBy!] = [PRIMARY_KEY_ASC]
  ): ListsConnection

  """Reads and enables pagination through a set of \`Type\`."""
  allTypes(
    """Only read the first \`n\` values of the set."""
    first: Int

    """Only read the last \`n\` values of the set."""
    last: Int

    """
    Skip the first \`n\` values from our \`after\` cursor, an alternative to cursor
    based pagination. May not be used with \`last\`.
    """
    offset: Int

    """Read all values in the set before (above) this cursor."""
    before: Cursor

    """Read all values in the set after (below) this cursor."""
    after: Cursor

    """
    A condition to be used in determining which values should be returned by the collection.
    """
    condition: TypeCondition

    """The method to use when ordering \`Type\`."""
    orderBy: [TypesOrderBy!] = [PRIMARY_KEY_ASC]
  ): TypesConnection
}

"""Should output as Input"""
type Input {
  id: Int!
}

"""Should output as Patch"""
type Patch {
  id: Int!
}

type Reserved {
  id: Int!
}

"""
\`reservedPatchs\` table should get renamed to ReservedPatchRecord to prevent clashes with ReservedPatch from \`reserved\` table
"""
type ReservedPatchRecord {
  id: Int!
}

"""
\`reserved_input\` table should get renamed to ReservedInputRecord to prevent clashes with ReservedInput from \`reserved\` table
"""
type ReservedInputRecord {
  id: Int!
}

type DefaultValue {
  id: Int!
  nullValue: String
}

type NoPrimaryKey {
  id: Int!
  str: String!
}

type UniqueForeignKey {
  compoundKey1: Int
  compoundKey2: Int

  """
  Reads a single \`CompoundKey\` that is related to this \`UniqueForeignKey\`.
  """
  compoundKeyByCompoundKey1AndCompoundKey2: CompoundKey
}

type CompoundKey {
  personId2: Int!
  personId1: Int!
  extra: Boolean

  """Reads a single \`Person\` that is related to this \`CompoundKey\`."""
  personByPersonId1: Person

  """Reads a single \`Person\` that is related to this \`CompoundKey\`."""
  personByPersonId2: Person

  """Reads and enables pagination through a set of \`ForeignKey\`."""
  foreignKeysByCompoundKey1AndCompoundKey2(
    """Only read the first \`n\` values of the set."""
    first: Int

    """Only read the last \`n\` values of the set."""
    last: Int

    """
    Skip the first \`n\` values from our \`after\` cursor, an alternative to cursor
    based pagination. May not be used with \`last\`.
    """
    offset: Int

    """Read all values in the set before (above) this cursor."""
    before: Cursor

    """Read all values in the set after (below) this cursor."""
    after: Cursor

    """
    A condition to be used in determining which values should be returned by the collection.
    """
    condition: ForeignKeyCondition

    """The method to use when ordering \`ForeignKey\`."""
    orderBy: [ForeignKeysOrderBy!] = [NATURAL]
  ): ForeignKeysConnection!

  """
  Reads a single \`UniqueForeignKey\` that is related to this \`CompoundKey\`.
  """
  uniqueForeignKeyByCompoundKey1AndCompoundKey2: UniqueForeignKey
}

"""Person test comment"""
type Person {
  computedOut: String!

  """The first name of the person."""
  firstName: String
  computedOutOut: PersonComputedOutOutRecord
  computedInout(ino: String): String
  computedInoutOut(ino: String): PersonComputedInoutOutRecord
  exists(email: Email): Boolean @deprecated(reason: "This is deprecated (comment on function c.person_exists).")
  computedFirstArgInoutOut: PersonComputedFirstArgInoutOutRecord
  optionalMissingMiddle1(arg0: Int!, b: Int, c: Int): Int
  optionalMissingMiddle2(a: Int!, b: Int, c: Int): Int
  optionalMissingMiddle3(a: Int!, arg1: Int, c: Int): Int
  optionalMissingMiddle4(arg0: Int!, b: Int, arg2: Int): Int
  optionalMissingMiddle5(a: Int!, arg1: Int, arg2: Int): Int
  computedComplex(a: Int, b: String): PersonComputedComplexRecord

  """The first post by the person."""
  firstPost: Post
  computedFirstArgInout: Person

  """Reads and enables pagination through a set of \`Person\`."""
  friends(
    """Only read the first \`n\` values of the set."""
    first: Int

    """Only read the last \`n\` values of the set."""
    last: Int

    """
    Skip the first \`n\` values from our \`after\` cursor, an alternative to cursor
    based pagination. May not be used with \`last\`.
    """
    offset: Int

    """Read all values in the set before (above) this cursor."""
    before: Cursor

    """Read all values in the set after (below) this cursor."""
    after: Cursor

    """The method to use when ordering \`Person\`."""
    orderBy: [PeopleOrderBy!]
  ): PeopleConnection!

  """Reads and enables pagination through a set of \`Type\`."""
  typeFunctionConnection(
    """Only read the first \`n\` values of the set."""
    first: Int

    """Only read the last \`n\` values of the set."""
    last: Int

    """
    Skip the first \`n\` values from our \`after\` cursor, an alternative to cursor
    based pagination. May not be used with \`last\`.
    """
    offset: Int

    """Read all values in the set before (above) this cursor."""
    before: Cursor

    """Read all values in the set after (below) this cursor."""
    after: Cursor
  ): TypesConnection!
  typeFunction(id: Int): Type
  typeFunctionList: [Type]

  """The primary unique identifier for the person"""
  id: Int!

  """The person’s name"""
  name: String!
  aliases: [String]!
  about: String
  email: Email!
  site: WrappedUrl @deprecated(reason: "Don’t use me")
  config: KeyValueHash
  lastLoginFromIp: InternetAddress
  lastLoginFromSubnet: String
  userMac: String
  createdAt: Datetime

  """Reads and enables pagination through a set of \`Post\`."""
  postsByAuthorId(
    """Only read the first \`n\` values of the set."""
    first: Int

    """Only read the last \`n\` values of the set."""
    last: Int

    """
    Skip the first \`n\` values from our \`after\` cursor, an alternative to cursor
    based pagination. May not be used with \`last\`.
    """
    offset: Int

    """Read all values in the set before (above) this cursor."""
    before: Cursor

    """Read all values in the set after (below) this cursor."""
    after: Cursor

    """
    A condition to be used in determining which values should be returned by the collection.
    """
    condition: PostCondition

    """The method to use when ordering \`Post\`."""
    orderBy: [PostsOrderBy!] = [PRIMARY_KEY_ASC]
  ): PostsConnection!

  """Reads and enables pagination through a set of \`ForeignKey\`."""
  foreignKeysByPersonId(
    """Only read the first \`n\` values of the set."""
    first: Int

    """Only read the last \`n\` values of the set."""
    last: Int

    """
    Skip the first \`n\` values from our \`after\` cursor, an alternative to cursor
    based pagination. May not be used with \`last\`.
    """
    offset: Int

    """Read all values in the set before (above) this cursor."""
    before: Cursor

    """Read all values in the set after (below) this cursor."""
    after: Cursor

    """
    A condition to be used in determining which values should be returned by the collection.
    """
    condition: ForeignKeyCondition

    """The method to use when ordering \`ForeignKey\`."""
    orderBy: [ForeignKeysOrderBy!] = [NATURAL]
  ): ForeignKeysConnection!

  """This \`Person\`'s \`PersonSecret\`."""
  personSecretByPersonId: PersonSecret @deprecated(reason: "This is deprecated (comment on table c.person_secret).")

  """Reads a single \`LeftArm\` that is related to this \`Person\`."""
  leftArmByPersonId: LeftArm

  """Reads and enables pagination through a set of \`CompoundKey\`."""
  compoundKeysByPersonId1(
    """Only read the first \`n\` values of the set."""
    first: Int

    """Only read the last \`n\` values of the set."""
    last: Int

    """
    Skip the first \`n\` values from our \`after\` cursor, an alternative to cursor
    based pagination. May not be used with \`last\`.
    """
    offset: Int

    """Read all values in the set before (above) this cursor."""
    before: Cursor

    """Read all values in the set after (below) this cursor."""
    after: Cursor

    """
    A condition to be used in determining which values should be returned by the collection.
    """
    condition: CompoundKeyCondition

    """The method to use when ordering \`CompoundKey\`."""
    orderBy: [CompoundKeysOrderBy!] = [PRIMARY_KEY_ASC]
  ): CompoundKeysConnection!

  """Reads and enables pagination through a set of \`CompoundKey\`."""
  compoundKeysByPersonId2(
    """Only read the first \`n\` values of the set."""
    first: Int

    """Only read the last \`n\` values of the set."""
    last: Int

    """
    Skip the first \`n\` values from our \`after\` cursor, an alternative to cursor
    based pagination. May not be used with \`last\`.
    """
    offset: Int

    """Read all values in the set before (above) this cursor."""
    before: Cursor

    """Read all values in the set after (below) this cursor."""
    after: Cursor

    """
    A condition to be used in determining which values should be returned by the collection.
    """
    condition: CompoundKeyCondition

    """The method to use when ordering \`CompoundKey\`."""
    orderBy: [CompoundKeysOrderBy!] = [PRIMARY_KEY_ASC]
  ): CompoundKeysConnection!
}

type PersonComputedOutOutRecord {
  o1: String
  o2: String
}

type PersonComputedInoutOutRecord {
  ino: String
  o: String
}

scalar Email

type PersonComputedFirstArgInoutOutRecord {
  person: Person
  o: Int
}

type PersonComputedComplexRecord {
  x: Int
  y: CompoundType
  z: Person
}

"""Awesome feature!"""
type CompoundType {
  computedField: Int
  a: Int
  b: String
  c: Color
  d: UUID
  e: EnumCaps
  f: EnumWithEmptyString
  g: Interval
  fooBar: Int
}

"""Represents the colours red, green and blue."""
enum Color {
  RED
  GREEN
  BLUE
}

"""
A universally unique identifier as defined by [RFC 4122](https://tools.ietf.org/html/rfc4122).
"""
scalar UUID

enum EnumCaps {
  FOO_BAR
  BAR_FOO
  BAZ_QUX
  _0_BAR
}

enum EnumWithEmptyString {
  _EMPTY_
  ONE
  TWO
}

"""
An interval of time that has passed where the smallest distinct unit is a second.
"""
type Interval {
  """
  A quantity of seconds. This is the only non-integer field, as all the other
  fields will dump their overflow into a smaller unit of time. Intervals don’t
  have a smaller unit than seconds.
  """
  seconds: Float

  """A quantity of minutes."""
  minutes: Int

  """A quantity of hours."""
  hours: Int

  """A quantity of days."""
  days: Int

  """A quantity of months."""
  months: Int

  """A quantity of years."""
  years: Int
}

type Post {
  """Reads and enables pagination through a set of \`Interval\`."""
  computedIntervalSet(
    """Only read the first \`n\` values of the set."""
    first: Int

    """Only read the last \`n\` values of the set."""
    last: Int

    """
    Skip the first \`n\` values from our \`after\` cursor, an alternative to cursor
    based pagination. May not be used with \`last\`.
    """
    offset: Int

    """Read all values in the set before (above) this cursor."""
    before: Cursor

    """Read all values in the set after (below) this cursor."""
    after: Cursor
  ): PostComputedIntervalSetConnection!
  computedIntervalArray: [Interval]
  computedTextArray: [String]
  computedWithOptionalArg(i: Int): Int
  computedWithRequiredArg(i: Int!): Int
  headlineTrimmed(length: Int, omission: String): String
  headlineTrimmedNoDefaults(length: Int, omission: String): String
  headlineTrimmedStrict(length: Int, omission: String): String
  computedCompoundTypeArray(object: CompoundTypeInput): [CompoundType]
  id: Int!
  headline: String!
  body: String
  authorId: Int
  enums: [AnEnum]
  comptypes: [Comptype]

  """Reads a single \`Person\` that is related to this \`Post\`."""
  personByAuthorId: Person

  """Reads and enables pagination through a set of \`Type\`."""
  typesBySmallint(
    """Only read the first \`n\` values of the set."""
    first: Int

    """Only read the last \`n\` values of the set."""
    last: Int

    """
    Skip the first \`n\` values from our \`after\` cursor, an alternative to cursor
    based pagination. May not be used with \`last\`.
    """
    offset: Int

    """Read all values in the set before (above) this cursor."""
    before: Cursor

    """Read all values in the set after (below) this cursor."""
    after: Cursor

    """
    A condition to be used in determining which values should be returned by the collection.
    """
    condition: TypeCondition

    """The method to use when ordering \`Type\`."""
    orderBy: [TypesOrderBy!] = [PRIMARY_KEY_ASC]
  ): TypesConnection!

  """Reads a single \`Type\` that is related to this \`Post\`."""
  typeById: Type
}

"""A connection to a list of \`Interval\` values."""
type PostComputedIntervalSetConnection {
  """A list of \`Interval\` objects."""
  nodes: [Interval]!

  """
  A list of edges which contains the \`Interval\` and cursor to aid in pagination.
  """
  edges: [PostComputedIntervalSetEdge]!

  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """The count of *all* \`Interval\` you could get from the connection."""
  totalCount: Int!
}

"""A \`Interval\` edge in the connection."""
type PostComputedIntervalSetEdge {
  """A cursor for use in pagination."""
  cursor: Cursor

  """The \`Interval\` at the end of the edge."""
  node: Interval
}

"""A location in a connection that can be used for resuming pagination."""
scalar Cursor

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: Cursor

  """When paginating forwards, the cursor to continue."""
  endCursor: Cursor
}

"""An input for mutations affecting \`CompoundType\`"""
input CompoundTypeInput {
  a: Int
  b: String
  c: Color
  d: UUID
  e: EnumCaps
  f: EnumWithEmptyString
  g: IntervalInput
  fooBar: Int
}

"""
An interval of time that has passed where the smallest distinct unit is a second.
"""
input IntervalInput {
  """
  A quantity of seconds. This is the only non-integer field, as all the other
  fields will dump their overflow into a smaller unit of time. Intervals don’t
  have a smaller unit than seconds.
  """
  seconds: Float

  """A quantity of minutes."""
  minutes: Int

  """A quantity of hours."""
  hours: Int

  """A quantity of days."""
  days: Int

  """A quantity of months."""
  months: Int

  """A quantity of years."""
  years: Int
}

enum AnEnum {
  AWAITING
  REJECTED
  PUBLISHED
  ASTERISK
  ASTERISK_ASTERISK
  ASTERISK_ASTERISK_ASTERISK
  FOO_ASTERISK
  FOO_ASTERISK_
  _FOO_ASTERISK
  ASTERISK_BAR
  ASTERISK_BAR_
  _ASTERISK_BAR_
  ASTERISK_BAZ_ASTERISK
  _ASTERISK_BAZ_ASTERISK_
  PERCENT
  GREATER_THAN_OR_EQUAL
  LIKE
  DOLLAR
}

type Comptype {
  schedule: Datetime
  isOptimised: Boolean
}

"""
A point in time as described by the [ISO
8601](https://en.wikipedia.org/wiki/ISO_8601) and, if it has a timezone, [RFC
3339](https://datatracker.ietf.org/doc/html/rfc3339) standards. Input values
that do not conform to both ISO 8601 and RFC 3339 may be coerced, which may lead
to unexpected results.
"""
scalar Datetime

"""A connection to a list of \`Type\` values."""
type TypesConnection {
  """A list of \`Type\` objects."""
  nodes: [Type]!

  """
  A list of edges which contains the \`Type\` and cursor to aid in pagination.
  """
  edges: [TypesEdge]!

  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """The count of *all* \`Type\` you could get from the connection."""
  totalCount: Int!
}

type Type {
  id: Int!
  smallint: Int!
  bigint: BigInt!
  numeric: BigFloat!
  decimal: BigFloat!
  boolean: Boolean!
  varchar: String!
  enum: Color!
  enumArray: [Color]!
  domain: AnInt!
  domain2: AnotherInt!
  textArray: [String]!
  json: JSON!
  jsonb: JSON!
  nullableRange: BigFloatRange
  numrange: BigFloatRange!
  daterange: DateRange!
  anIntRange: AnIntRange!
  timestamp: Datetime!
  timestamptz: Datetime!
  date: Date!
  time: Time!
  timetz: Time!
  interval: Interval!
  intervalArray: [Interval]!
  money: Float!
  compoundType: CompoundType!
  nestedCompoundType: NestedCompoundType!
  nullableCompoundType: CompoundType
  nullableNestedCompoundType: NestedCompoundType
  point: Point!
  nullablePoint: Point
  inet: InternetAddress
  cidr: String
  macaddr: String
  regproc: RegProc
  regprocedure: RegProcedure
  regoper: RegOper
  regoperator: RegOperator
  regclass: RegClass
  regtype: RegType
  regconfig: RegConfig
  regdictionary: RegDictionary
  textArrayDomain: [String]
  int8ArrayDomain: [BigInt]
  bytea: Base64EncodedBinary
  byteaArray: [Base64EncodedBinary]
  ltree: LTree
  ltreeArray: [LTree]

  """Reads a single \`Post\` that is related to this \`Type\`."""
  postBySmallint: Post

  """Reads a single \`Post\` that is related to this \`Type\`."""
  postById: Post
}

"""
A signed eight-byte integer. The upper big integer values are greater than the
max value for a JavaScript number. Therefore all big integers will be output as
strings and not numbers.
"""
scalar BigInt

"""
A floating point number that requires more precision than IEEE 754 binary 64
"""
scalar BigFloat

scalar AnInt

scalar AnotherInt

"""
A JavaScript object encoded in the JSON format as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf).
"""
scalar JSON

"""A range of \`BigFloat\`."""
type BigFloatRange {
  """The starting bound of our range."""
  start: BigFloatRangeBound

  """The ending bound of our range."""
  end: BigFloatRangeBound
}

"""
The value at one end of a range. A range can either include this value, or not.
"""
type BigFloatRangeBound {
  """The value at one end of our range."""
  value: BigFloat!

  """Whether or not the value of this bound is included in the range."""
  inclusive: Boolean!
}

"""A range of \`Date\`."""
type DateRange {
  """The starting bound of our range."""
  start: DateRangeBound

  """The ending bound of our range."""
  end: DateRangeBound
}

"""
The value at one end of a range. A range can either include this value, or not.
"""
type DateRangeBound {
  """The value at one end of our range."""
  value: Date!

  """Whether or not the value of this bound is included in the range."""
  inclusive: Boolean!
}

"""A calendar date in YYYY-MM-DD format."""
scalar Date

"""A range of \`AnInt\`."""
type AnIntRange {
  """The starting bound of our range."""
  start: AnIntRangeBound

  """The ending bound of our range."""
  end: AnIntRangeBound
}

"""
The value at one end of a range. A range can either include this value, or not.
"""
type AnIntRangeBound {
  """The value at one end of our range."""
  value: AnInt!

  """Whether or not the value of this bound is included in the range."""
  inclusive: Boolean!
}

"""
The exact time of day, does not include the date. May or may not have a timezone offset.
"""
scalar Time

type NestedCompoundType {
  a: CompoundType
  b: CompoundType
  bazBuz: Int
}

"""A cartesian point."""
type Point {
  x: Float!
  y: Float!
}

"""An IPv4 or IPv6 host address, and optionally its subnet."""
scalar InternetAddress

"""A builtin object identifier type for a function name"""
scalar RegProc

"""A builtin object identifier type for a function with argument types"""
scalar RegProcedure

"""A builtin object identifier type for an operator"""
scalar RegOper

"""A builtin object identifier type for an operator with argument types"""
scalar RegOperator

"""A builtin object identifier type for a relation name"""
scalar RegClass

"""A builtin object identifier type for a data type name"""
scalar RegType

"""A builtin object identifier type for a text search configuration"""
scalar RegConfig

"""A builtin object identifier type for a text search dictionary"""
scalar RegDictionary

"""Binary data encoded using Base64"""
scalar Base64EncodedBinary

"""
Represents an \`ltree\` hierarchical label tree as outlined in https://www.postgresql.org/docs/current/ltree.html
"""
scalar LTree

"""A \`Type\` edge in the connection."""
type TypesEdge {
  """A cursor for use in pagination."""
  cursor: Cursor

  """The \`Type\` at the end of the edge."""
  node: Type
}

"""
A condition to be used against \`Type\` object types. All fields are tested for equality and combined with a logical ‘and.’
"""
input TypeCondition {
  """Checks for equality with the object’s \`id\` field."""
  id: Int

  """Checks for equality with the object’s \`smallint\` field."""
  smallint: Int

  """Checks for equality with the object’s \`bigint\` field."""
  bigint: BigInt

  """Checks for equality with the object’s \`numeric\` field."""
  numeric: BigFloat

  """Checks for equality with the object’s \`decimal\` field."""
  decimal: BigFloat

  """Checks for equality with the object’s \`boolean\` field."""
  boolean: Boolean

  """Checks for equality with the object’s \`varchar\` field."""
  varchar: String

  """Checks for equality with the object’s \`enum\` field."""
  enum: Color

  """Checks for equality with the object’s \`enumArray\` field."""
  enumArray: [Color]

  """Checks for equality with the object’s \`domain\` field."""
  domain: AnInt

  """Checks for equality with the object’s \`domain2\` field."""
  domain2: AnotherInt

  """Checks for equality with the object’s \`textArray\` field."""
  textArray: [String]

  """Checks for equality with the object’s \`json\` field."""
  json: JSON

  """Checks for equality with the object’s \`jsonb\` field."""
  jsonb: JSON

  """Checks for equality with the object’s \`nullableRange\` field."""
  nullableRange: BigFloatRangeInput

  """Checks for equality with the object’s \`numrange\` field."""
  numrange: BigFloatRangeInput

  """Checks for equality with the object’s \`daterange\` field."""
  daterange: DateRangeInput

  """Checks for equality with the object’s \`anIntRange\` field."""
  anIntRange: AnIntRangeInput

  """Checks for equality with the object’s \`timestamp\` field."""
  timestamp: Datetime

  """Checks for equality with the object’s \`timestamptz\` field."""
  timestamptz: Datetime

  """Checks for equality with the object’s \`date\` field."""
  date: Date

  """Checks for equality with the object’s \`time\` field."""
  time: Time

  """Checks for equality with the object’s \`timetz\` field."""
  timetz: Time

  """Checks for equality with the object’s \`interval\` field."""
  interval: IntervalInput

  """Checks for equality with the object’s \`intervalArray\` field."""
  intervalArray: [IntervalInput]

  """Checks for equality with the object’s \`money\` field."""
  money: Float

  """Checks for equality with the object’s \`compoundType\` field."""
  compoundType: CompoundTypeInput

  """Checks for equality with the object’s \`nestedCompoundType\` field."""
  nestedCompoundType: NestedCompoundTypeInput

  """Checks for equality with the object’s \`nullableCompoundType\` field."""
  nullableCompoundType: CompoundTypeInput

  """
  Checks for equality with the object’s \`nullableNestedCompoundType\` field.
  """
  nullableNestedCompoundType: NestedCompoundTypeInput

  """Checks for equality with the object’s \`point\` field."""
  point: PointInput

  """Checks for equality with the object’s \`nullablePoint\` field."""
  nullablePoint: PointInput

  """Checks for equality with the object’s \`inet\` field."""
  inet: InternetAddress

  """Checks for equality with the object’s \`cidr\` field."""
  cidr: String

  """Checks for equality with the object’s \`macaddr\` field."""
  macaddr: String

  """Checks for equality with the object’s \`regproc\` field."""
  regproc: RegProc

  """Checks for equality with the object’s \`regprocedure\` field."""
  regprocedure: RegProcedure

  """Checks for equality with the object’s \`regoper\` field."""
  regoper: RegOper

  """Checks for equality with the object’s \`regoperator\` field."""
  regoperator: RegOperator

  """Checks for equality with the object’s \`regclass\` field."""
  regclass: RegClass

  """Checks for equality with the object’s \`regtype\` field."""
  regtype: RegType

  """Checks for equality with the object’s \`regconfig\` field."""
  regconfig: RegConfig

  """Checks for equality with the object’s \`regdictionary\` field."""
  regdictionary: RegDictionary

  """Checks for equality with the object’s \`textArrayDomain\` field."""
  textArrayDomain: [String]

  """Checks for equality with the object’s \`int8ArrayDomain\` field."""
  int8ArrayDomain: [BigInt]

  """Checks for equality with the object’s \`ltree\` field."""
  ltree: LTree

  """Checks for equality with the object’s \`ltreeArray\` field."""
  ltreeArray: [LTree]
}

"""A range of \`BigFloat\`."""
input BigFloatRangeInput {
  """The starting bound of our range."""
  start: BigFloatRangeBoundInput

  """The ending bound of our range."""
  end: BigFloatRangeBoundInput
}

"""
The value at one end of a range. A range can either include this value, or not.
"""
input BigFloatRangeBoundInput {
  """The value at one end of our range."""
  value: BigFloat!

  """Whether or not the value of this bound is included in the range."""
  inclusive: Boolean!
}

"""A range of \`Date\`."""
input DateRangeInput {
  """The starting bound of our range."""
  start: DateRangeBoundInput

  """The ending bound of our range."""
  end: DateRangeBoundInput
}

"""
The value at one end of a range. A range can either include this value, or not.
"""
input DateRangeBoundInput {
  """The value at one end of our range."""
  value: Date!

  """Whether or not the value of this bound is included in the range."""
  inclusive: Boolean!
}

"""A range of \`AnInt\`."""
input AnIntRangeInput {
  """The starting bound of our range."""
  start: AnIntRangeBoundInput

  """The ending bound of our range."""
  end: AnIntRangeBoundInput
}

"""
The value at one end of a range. A range can either include this value, or not.
"""
input AnIntRangeBoundInput {
  """The value at one end of our range."""
  value: AnInt!

  """Whether or not the value of this bound is included in the range."""
  inclusive: Boolean!
}

"""An input for mutations affecting \`NestedCompoundType\`"""
input NestedCompoundTypeInput {
  a: CompoundTypeInput
  b: CompoundTypeInput
  bazBuz: Int
}

"""A cartesian point."""
input PointInput {
  x: Float!
  y: Float!
}

"""Methods to use when ordering \`Type\`."""
enum TypesOrderBy {
  NATURAL
  PRIMARY_KEY_ASC
  PRIMARY_KEY_DESC
  ID_ASC
  ID_DESC
  SMALLINT_ASC
  SMALLINT_DESC
  BIGINT_ASC
  BIGINT_DESC
  NUMERIC_ASC
  NUMERIC_DESC
  DECIMAL_ASC
  DECIMAL_DESC
  BOOLEAN_ASC
  BOOLEAN_DESC
  VARCHAR_ASC
  VARCHAR_DESC
  ENUM_ASC
  ENUM_DESC
  DOMAIN_ASC
  DOMAIN_DESC
  DOMAIN2_ASC
  DOMAIN2_DESC
  JSON_ASC
  JSON_DESC
  JSONB_ASC
  JSONB_DESC
  TIMESTAMP_ASC
  TIMESTAMP_DESC
  TIMESTAMPTZ_ASC
  TIMESTAMPTZ_DESC
  DATE_ASC
  DATE_DESC
  TIME_ASC
  TIME_DESC
  TIMETZ_ASC
  TIMETZ_DESC
  INTERVAL_ASC
  INTERVAL_DESC
  MONEY_ASC
  MONEY_DESC
  COMPOUND_TYPE_ASC
  COMPOUND_TYPE_DESC
  NESTED_COMPOUND_TYPE_ASC
  NESTED_COMPOUND_TYPE_DESC
  NULLABLE_COMPOUND_TYPE_ASC
  NULLABLE_COMPOUND_TYPE_DESC
  NULLABLE_NESTED_COMPOUND_TYPE_ASC
  NULLABLE_NESTED_COMPOUND_TYPE_DESC
  POINT_ASC
  POINT_DESC
  NULLABLE_POINT_ASC
  NULLABLE_POINT_DESC
  INET_ASC
  INET_DESC
  CIDR_ASC
  CIDR_DESC
  MACADDR_ASC
  MACADDR_DESC
  REGPROC_ASC
  REGPROC_DESC
  REGPROCEDURE_ASC
  REGPROCEDURE_DESC
  REGOPER_ASC
  REGOPER_DESC
  REGOPERATOR_ASC
  REGOPERATOR_DESC
  REGCLASS_ASC
  REGCLASS_DESC
  REGTYPE_ASC
  REGTYPE_DESC
  REGCONFIG_ASC
  REGCONFIG_DESC
  REGDICTIONARY_ASC
  REGDICTIONARY_DESC
  LTREE_ASC
  LTREE_DESC
}

"""A connection to a list of \`Person\` values."""
type PeopleConnection {
  """A list of \`Person\` objects."""
  nodes: [Person]!

  """
  A list of edges which contains the \`Person\` and cursor to aid in pagination.
  """
  edges: [PeopleEdge]!

  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """The count of *all* \`Person\` you could get from the connection."""
  totalCount: Int!
}

"""A \`Person\` edge in the connection."""
type PeopleEdge {
  """A cursor for use in pagination."""
  cursor: Cursor

  """The \`Person\` at the end of the edge."""
  node: Person
}

"""Methods to use when ordering \`Person\`."""
enum PeopleOrderBy {
  NATURAL
  COMPUTED_OUT_ASC
  COMPUTED_OUT_DESC
  FIRST_NAME_ASC
  FIRST_NAME_DESC
  PRIMARY_KEY_ASC
  PRIMARY_KEY_DESC
  ID_ASC
  ID_DESC
  NAME_ASC
  NAME_DESC
  ABOUT_ASC
  ABOUT_DESC
  EMAIL_ASC
  EMAIL_DESC
  SITE_ASC
  SITE_DESC
  CONFIG_ASC
  CONFIG_DESC
  LAST_LOGIN_FROM_IP_ASC
  LAST_LOGIN_FROM_IP_DESC
  LAST_LOGIN_FROM_SUBNET_ASC
  LAST_LOGIN_FROM_SUBNET_DESC
  USER_MAC_ASC
  USER_MAC_DESC
  CREATED_AT_ASC
  CREATED_AT_DESC
}

type WrappedUrl {
  url: NotNullUrl!
}

scalar NotNullUrl

"""
A set of key/value pairs, keys are strings, values may be a string or null. Exposed as a JSON object.
"""
scalar KeyValueHash

"""A connection to a list of \`Post\` values."""
type PostsConnection {
  """A list of \`Post\` objects."""
  nodes: [Post]!

  """
  A list of edges which contains the \`Post\` and cursor to aid in pagination.
  """
  edges: [PostsEdge]!

  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """The count of *all* \`Post\` you could get from the connection."""
  totalCount: Int!
}

"""A \`Post\` edge in the connection."""
type PostsEdge {
  """A cursor for use in pagination."""
  cursor: Cursor

  """The \`Post\` at the end of the edge."""
  node: Post
}

"""
A condition to be used against \`Post\` object types. All fields are tested for equality and combined with a logical ‘and.’
"""
input PostCondition {
  """Checks for equality with the object’s \`id\` field."""
  id: Int

  """Checks for equality with the object’s \`headline\` field."""
  headline: String

  """Checks for equality with the object’s \`body\` field."""
  body: String

  """Checks for equality with the object’s \`authorId\` field."""
  authorId: Int

  """Checks for equality with the object’s \`enums\` field."""
  enums: [AnEnum]

  """Checks for equality with the object’s \`comptypes\` field."""
  comptypes: [ComptypeInput]

  """Checks for equality with the object’s \`computedWithOptionalArg\` field."""
  computedWithOptionalArg: Int
}

"""An input for mutations affecting \`Comptype\`"""
input ComptypeInput {
  schedule: Datetime
  isOptimised: Boolean
}

"""Methods to use when ordering \`Post\`."""
enum PostsOrderBy {
  NATURAL
  COMPUTED_WITH_OPTIONAL_ARG_ASC
  COMPUTED_WITH_OPTIONAL_ARG_DESC
  PRIMARY_KEY_ASC
  PRIMARY_KEY_DESC
  ID_ASC
  ID_DESC
  HEADLINE_ASC
  HEADLINE_DESC
  BODY_ASC
  BODY_DESC
  AUTHOR_ID_ASC
  AUTHOR_ID_DESC
}

"""A connection to a list of \`ForeignKey\` values."""
type ForeignKeysConnection {
  """A list of \`ForeignKey\` objects."""
  nodes: [ForeignKey]!

  """
  A list of edges which contains the \`ForeignKey\` and cursor to aid in pagination.
  """
  edges: [ForeignKeysEdge]!

  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """The count of *all* \`ForeignKey\` you could get from the connection."""
  totalCount: Int!
}

type ForeignKey {
  personId: Int
  compoundKey1: Int
  compoundKey2: Int

  """Reads a single \`CompoundKey\` that is related to this \`ForeignKey\`."""
  compoundKeyByCompoundKey1AndCompoundKey2: CompoundKey

  """Reads a single \`Person\` that is related to this \`ForeignKey\`."""
  personByPersonId: Person
}

"""A \`ForeignKey\` edge in the connection."""
type ForeignKeysEdge {
  """A cursor for use in pagination."""
  cursor: Cursor

  """The \`ForeignKey\` at the end of the edge."""
  node: ForeignKey
}

"""
A condition to be used against \`ForeignKey\` object types. All fields are tested
for equality and combined with a logical ‘and.’
"""
input ForeignKeyCondition {
  """Checks for equality with the object’s \`personId\` field."""
  personId: Int

  """Checks for equality with the object’s \`compoundKey1\` field."""
  compoundKey1: Int

  """Checks for equality with the object’s \`compoundKey2\` field."""
  compoundKey2: Int
}

"""Methods to use when ordering \`ForeignKey\`."""
enum ForeignKeysOrderBy {
  NATURAL
  PERSON_ID_ASC
  PERSON_ID_DESC
  COMPOUND_KEY_1_ASC
  COMPOUND_KEY_1_DESC
  COMPOUND_KEY_2_ASC
  COMPOUND_KEY_2_DESC
}

"""Tracks the person's secret"""
type PersonSecret {
  personId: Int!

  """A secret held by the associated Person"""
  secret: String

  """The \`Person\` this \`PersonSecret\` belongs to."""
  personByPersonId: Person
}

"""Tracks metadata about the left arms of various people"""
type LeftArm {
  id: Int!
  personId: Int
  lengthInMetres: Float
  mood: String!

  """Reads a single \`Person\` that is related to this \`LeftArm\`."""
  personByPersonId: Person
}

"""A connection to a list of \`CompoundKey\` values."""
type CompoundKeysConnection {
  """A list of \`CompoundKey\` objects."""
  nodes: [CompoundKey]!

  """
  A list of edges which contains the \`CompoundKey\` and cursor to aid in pagination.
  """
  edges: [CompoundKeysEdge]!

  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """The count of *all* \`CompoundKey\` you could get from the connection."""
  totalCount: Int!
}

"""A \`CompoundKey\` edge in the connection."""
type CompoundKeysEdge {
  """A cursor for use in pagination."""
  cursor: Cursor

  """The \`CompoundKey\` at the end of the edge."""
  node: CompoundKey
}

"""
A condition to be used against \`CompoundKey\` object types. All fields are tested
for equality and combined with a logical ‘and.’
"""
input CompoundKeyCondition {
  """Checks for equality with the object’s \`personId2\` field."""
  personId2: Int

  """Checks for equality with the object’s \`personId1\` field."""
  personId1: Int

  """Checks for equality with the object’s \`extra\` field."""
  extra: Boolean
}

"""Methods to use when ordering \`CompoundKey\`."""
enum CompoundKeysOrderBy {
  NATURAL
  PRIMARY_KEY_ASC
  PRIMARY_KEY_DESC
  PERSON_ID_2_ASC
  PERSON_ID_2_DESC
  PERSON_ID_1_ASC
  PERSON_ID_1_DESC
  EXTRA_ASC
  EXTRA_DESC
}

type MyTable {
  id: Int!
  jsonData: JSON
}

type ViewTable {
  id: Int!
  col1: Int
  col2: Int
}

type SimilarTable1 {
  id: Int!
  col1: Int
  col2: Int
  col3: Int!
}

type SimilarTable2 {
  id: Int!
  col3: Int!
  col4: Int
  col5: Int
}

type NullTestRecord {
  id: Int!
  nullableText: String
  nullableInt: Int
  nonNullText: String!
}

type Issue756 {
  id: Int!
  ts: NotNullTimestamp!
}

scalar NotNullTimestamp

type List {
  id: Int!
  intArray: [Int]
  intArrayNn: [Int]!
  enumArray: [Color]
  enumArrayNn: [Color]!
  dateArray: [Date]
  dateArrayNn: [Date]!
  timestamptzArray: [Datetime]
  timestamptzArrayNn: [Datetime]!
  compoundTypeArray: [CompoundType]
  compoundTypeArrayNn: [CompoundType]!
  byteaArray: [Base64EncodedBinary]
  byteaArrayNn: [Base64EncodedBinary]!
}

"""A connection to a list of \`Int\` values."""
type FuncOutSetofConnection {
  """A list of \`Int\` objects."""
  nodes: [Int]!

  """
  A list of edges which contains the \`Int\` and cursor to aid in pagination.
  """
  edges: [FuncOutSetofEdge]!

  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """The count of *all* \`Int\` you could get from the connection."""
  totalCount: Int!
}

"""A \`Int\` edge in the connection."""
type FuncOutSetofEdge {
  """A cursor for use in pagination."""
  cursor: Cursor

  """The \`Int\` at the end of the edge."""
  node: Int
}

"""A connection to a list of \`Interval\` values."""
type QueryIntervalSetConnection {
  """A list of \`Interval\` objects."""
  nodes: [Interval]!

  """
  A list of edges which contains the \`Interval\` and cursor to aid in pagination.
  """
  edges: [QueryIntervalSetEdge]!

  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """The count of *all* \`Interval\` you could get from the connection."""
  totalCount: Int!
}

"""A \`Interval\` edge in the connection."""
type QueryIntervalSetEdge {
  """A cursor for use in pagination."""
  cursor: Cursor

  """The \`Interval\` at the end of the edge."""
  node: Interval
}

"""A connection to a list of \`BigInt\` values."""
type StaticBigIntegerConnection {
  """A list of \`BigInt\` objects."""
  nodes: [BigInt]!

  """
  A list of edges which contains the \`BigInt\` and cursor to aid in pagination.
  """
  edges: [StaticBigIntegerEdge]!

  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """The count of *all* \`BigInt\` you could get from the connection."""
  totalCount: Int!
}

"""A \`BigInt\` edge in the connection."""
type StaticBigIntegerEdge {
  """A cursor for use in pagination."""
  cursor: Cursor

  """The \`BigInt\` at the end of the edge."""
  node: BigInt
}

"""A connection to a list of \`Int\` values."""
type FuncReturnsTableOneColConnection {
  """A list of \`Int\` objects."""
  nodes: [Int]!

  """
  A list of edges which contains the \`Int\` and cursor to aid in pagination.
  """
  edges: [FuncReturnsTableOneColEdge]!

  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """The count of *all* \`Int\` you could get from the connection."""
  totalCount: Int!
}

"""A \`Int\` edge in the connection."""
type FuncReturnsTableOneColEdge {
  """A cursor for use in pagination."""
  cursor: Cursor

  """The \`Int\` at the end of the edge."""
  node: Int
}

type FuncOutOutRecord {
  firstOut: Int
  secondOut: String
}

"""A connection to a list of \`FuncOutOutSetofRecord\` values."""
type FuncOutOutSetofConnection {
  """A list of \`FuncOutOutSetofRecord\` objects."""
  nodes: [FuncOutOutSetofRecord]!

  """
  A list of edges which contains the \`FuncOutOutSetofRecord\` and cursor to aid in pagination.
  """
  edges: [FuncOutOutSetofEdge]!

  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """
  The count of *all* \`FuncOutOutSetofRecord\` you could get from the connection.
  """
  totalCount: Int!
}

type FuncOutOutSetofRecord {
  o1: Int
  o2: String
}

"""A \`FuncOutOutSetofRecord\` edge in the connection."""
type FuncOutOutSetofEdge {
  """A cursor for use in pagination."""
  cursor: Cursor

  """The \`FuncOutOutSetofRecord\` at the end of the edge."""
  node: FuncOutOutSetofRecord
}

type FuncOutOutUnnamedRecord {
  arg1: Int
  arg2: String
}

type SearchTestSummariesRecord {
  id: Int
  totalDuration: Interval
}

type FuncOutUnnamedOutOutUnnamedRecord {
  arg1: Int
  o2: String
  arg3: Int
}

"""A connection to a list of \`Int\` values."""
type IntSetQueryConnection {
  """A list of \`Int\` objects."""
  nodes: [Int]!

  """
  A list of edges which contains the \`Int\` and cursor to aid in pagination.
  """
  edges: [IntSetQueryEdge]!

  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """The count of *all* \`Int\` you could get from the connection."""
  totalCount: Int!
}

"""A \`Int\` edge in the connection."""
type IntSetQueryEdge {
  """A cursor for use in pagination."""
  cursor: Cursor

  """The \`Int\` at the end of the edge."""
  node: Int
}

"""A connection to a list of \`FuncReturnsTableMultiColRecord\` values."""
type FuncReturnsTableMultiColConnection {
  """A list of \`FuncReturnsTableMultiColRecord\` objects."""
  nodes: [FuncReturnsTableMultiColRecord]!

  """
  A list of edges which contains the \`FuncReturnsTableMultiColRecord\` and cursor to aid in pagination.
  """
  edges: [FuncReturnsTableMultiColEdge]!

  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """
  The count of *all* \`FuncReturnsTableMultiColRecord\` you could get from the connection.
  """
  totalCount: Int!
}

type FuncReturnsTableMultiColRecord {
  col1: Int
  col2: String
}

"""A \`FuncReturnsTableMultiColRecord\` edge in the connection."""
type FuncReturnsTableMultiColEdge {
  """A cursor for use in pagination."""
  cursor: Cursor

  """The \`FuncReturnsTableMultiColRecord\` at the end of the edge."""
  node: FuncReturnsTableMultiColRecord
}

"""A range of \`Float\`."""
input FloatRangeInput {
  """The starting bound of our range."""
  start: FloatRangeBoundInput

  """The ending bound of our range."""
  end: FloatRangeBoundInput
}

"""
The value at one end of a range. A range can either include this value, or not.
"""
input FloatRangeBoundInput {
  """The value at one end of our range."""
  value: Float!

  """Whether or not the value of this bound is included in the range."""
  inclusive: Boolean!
}

type FuncOutOutCompoundTypeRecord {
  o1: Int
  o2: CompoundType
}

type QueryOutputTwoRowsRecord {
  txt: String
  leftArm: LeftArm
  post: Post
}

"""A connection to a list of \`CompoundType\` values."""
type CompoundTypesConnection {
  """A list of \`CompoundType\` objects."""
  nodes: [CompoundType]!

  """
  A list of edges which contains the \`CompoundType\` and cursor to aid in pagination.
  """
  edges: [CompoundTypesEdge]!

  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """The count of *all* \`CompoundType\` you could get from the connection."""
  totalCount: Int!
}

"""A \`CompoundType\` edge in the connection."""
type CompoundTypesEdge {
  """A cursor for use in pagination."""
  cursor: Cursor

  """The \`CompoundType\` at the end of the edge."""
  node: CompoundType
}

type FuncOutComplexRecord {
  x: Int
  y: CompoundType
  z: Person
}

"""A connection to a list of \`FuncOutComplexSetofRecord\` values."""
type FuncOutComplexSetofConnection {
  """A list of \`FuncOutComplexSetofRecord\` objects."""
  nodes: [FuncOutComplexSetofRecord]!

  """
  A list of edges which contains the \`FuncOutComplexSetofRecord\` and cursor to aid in pagination.
  """
  edges: [FuncOutComplexSetofEdge]!

  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """
  The count of *all* \`FuncOutComplexSetofRecord\` you could get from the connection.
  """
  totalCount: Int!
}

type FuncOutComplexSetofRecord {
  x: Int
  y: CompoundType
  z: Person
}

"""A \`FuncOutComplexSetofRecord\` edge in the connection."""
type FuncOutComplexSetofEdge {
  """A cursor for use in pagination."""
  cursor: Cursor

  """The \`FuncOutComplexSetofRecord\` at the end of the edge."""
  node: FuncOutComplexSetofRecord
}

"""
A condition to be used against \`Person\` object types. All fields are tested for equality and combined with a logical ‘and.’
"""
input PersonCondition {
  """Checks for equality with the object’s \`id\` field."""
  id: Int

  """Checks for equality with the object’s \`name\` field."""
  name: String

  """Checks for equality with the object’s \`aliases\` field."""
  aliases: [String]

  """Checks for equality with the object’s \`about\` field."""
  about: String

  """Checks for equality with the object’s \`email\` field."""
  email: Email

  """Checks for equality with the object’s \`site\` field."""
  site: WrappedUrlInput

  """Checks for equality with the object’s \`config\` field."""
  config: KeyValueHash

  """Checks for equality with the object’s \`lastLoginFromIp\` field."""
  lastLoginFromIp: InternetAddress

  """Checks for equality with the object’s \`lastLoginFromSubnet\` field."""
  lastLoginFromSubnet: String

  """Checks for equality with the object’s \`userMac\` field."""
  userMac: String

  """Checks for equality with the object’s \`createdAt\` field."""
  createdAt: Datetime

  """Checks for equality with the object’s \`computedOut\` field."""
  computedOut: String
}

"""An input for mutations affecting \`WrappedUrl\`"""
input WrappedUrlInput {
  url: NotNullUrl!
}

"""A connection to a list of \`NonUpdatableView\` values."""
type NonUpdatableViewsConnection {
  """A list of \`NonUpdatableView\` objects."""
  nodes: [NonUpdatableView]!

  """
  A list of edges which contains the \`NonUpdatableView\` and cursor to aid in pagination.
  """
  edges: [NonUpdatableViewsEdge]!

  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """
  The count of *all* \`NonUpdatableView\` you could get from the connection.
  """
  totalCount: Int!
}

type NonUpdatableView {
  column: Int
}

"""A \`NonUpdatableView\` edge in the connection."""
type NonUpdatableViewsEdge {
  """A cursor for use in pagination."""
  cursor: Cursor

  """The \`NonUpdatableView\` at the end of the edge."""
  node: NonUpdatableView
}

"""
A condition to be used against \`NonUpdatableView\` object types. All fields are
tested for equality and combined with a logical ‘and.’
"""
input NonUpdatableViewCondition {
  """Checks for equality with the object’s \`column\` field."""
  column: Int
}

"""Methods to use when ordering \`NonUpdatableView\`."""
enum NonUpdatableViewsOrderBy {
  NATURAL
  COLUMN_ASC
  COLUMN_DESC
}

"""A connection to a list of \`Input\` values."""
type InputsConnection {
  """A list of \`Input\` objects."""
  nodes: [Input]!

  """
  A list of edges which contains the \`Input\` and cursor to aid in pagination.
  """
  edges: [InputsEdge]!

  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """The count of *all* \`Input\` you could get from the connection."""
  totalCount: Int!
}

"""A \`Input\` edge in the connection."""
type InputsEdge {
  """A cursor for use in pagination."""
  cursor: Cursor

  """The \`Input\` at the end of the edge."""
  node: Input
}

"""
A condition to be used against \`Input\` object types. All fields are tested for equality and combined with a logical ‘and.’
"""
input InputCondition {
  """Checks for equality with the object’s \`id\` field."""
  id: Int
}

"""Methods to use when ordering \`Input\`."""
enum InputsOrderBy {
  NATURAL
  PRIMARY_KEY_ASC
  PRIMARY_KEY_DESC
  ID_ASC
  ID_DESC
}

"""A connection to a list of \`Patch\` values."""
type PatchesConnection {
  """A list of \`Patch\` objects."""
  nodes: [Patch]!

  """
  A list of edges which contains the \`Patch\` and cursor to aid in pagination.
  """
  edges: [PatchesEdge]!

  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """The count of *all* \`Patch\` you could get from the connection."""
  totalCount: Int!
}

"""A \`Patch\` edge in the connection."""
type PatchesEdge {
  """A cursor for use in pagination."""
  cursor: Cursor

  """The \`Patch\` at the end of the edge."""
  node: Patch
}

"""
A condition to be used against \`Patch\` object types. All fields are tested for equality and combined with a logical ‘and.’
"""
input PatchCondition {
  """Checks for equality with the object’s \`id\` field."""
  id: Int
}

"""Methods to use when ordering \`Patch\`."""
enum PatchesOrderBy {
  NATURAL
  PRIMARY_KEY_ASC
  PRIMARY_KEY_DESC
  ID_ASC
  ID_DESC
}

"""A connection to a list of \`Reserved\` values."""
type ReservedsConnection {
  """A list of \`Reserved\` objects."""
  nodes: [Reserved]!

  """
  A list of edges which contains the \`Reserved\` and cursor to aid in pagination.
  """
  edges: [ReservedsEdge]!

  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """The count of *all* \`Reserved\` you could get from the connection."""
  totalCount: Int!
}

"""A \`Reserved\` edge in the connection."""
type ReservedsEdge {
  """A cursor for use in pagination."""
  cursor: Cursor

  """The \`Reserved\` at the end of the edge."""
  node: Reserved
}

"""
A condition to be used against \`Reserved\` object types. All fields are tested
for equality and combined with a logical ‘and.’
"""
input ReservedCondition {
  """Checks for equality with the object’s \`id\` field."""
  id: Int
}

"""Methods to use when ordering \`Reserved\`."""
enum ReservedsOrderBy {
  NATURAL
  PRIMARY_KEY_ASC
  PRIMARY_KEY_DESC
  ID_ASC
  ID_DESC
}

"""A connection to a list of \`ReservedPatchRecord\` values."""
type ReservedPatchRecordsConnection {
  """A list of \`ReservedPatchRecord\` objects."""
  nodes: [ReservedPatchRecord]!

  """
  A list of edges which contains the \`ReservedPatchRecord\` and cursor to aid in pagination.
  """
  edges: [ReservedPatchRecordsEdge]!

  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """
  The count of *all* \`ReservedPatchRecord\` you could get from the connection.
  """
  totalCount: Int!
}

"""A \`ReservedPatchRecord\` edge in the connection."""
type ReservedPatchRecordsEdge {
  """A cursor for use in pagination."""
  cursor: Cursor

  """The \`ReservedPatchRecord\` at the end of the edge."""
  node: ReservedPatchRecord
}

"""
A condition to be used against \`ReservedPatchRecord\` object types. All fields
are tested for equality and combined with a logical ‘and.’
"""
input ReservedPatchRecordCondition {
  """Checks for equality with the object’s \`id\` field."""
  id: Int
}

"""Methods to use when ordering \`ReservedPatchRecord\`."""
enum ReservedPatchRecordsOrderBy {
  NATURAL
  PRIMARY_KEY_ASC
  PRIMARY_KEY_DESC
  ID_ASC
  ID_DESC
}

"""A connection to a list of \`ReservedInputRecord\` values."""
type ReservedInputRecordsConnection {
  """A list of \`ReservedInputRecord\` objects."""
  nodes: [ReservedInputRecord]!

  """
  A list of edges which contains the \`ReservedInputRecord\` and cursor to aid in pagination.
  """
  edges: [ReservedInputRecordsEdge]!

  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """
  The count of *all* \`ReservedInputRecord\` you could get from the connection.
  """
  totalCount: Int!
}

"""A \`ReservedInputRecord\` edge in the connection."""
type ReservedInputRecordsEdge {
  """A cursor for use in pagination."""
  cursor: Cursor

  """The \`ReservedInputRecord\` at the end of the edge."""
  node: ReservedInputRecord
}

"""
A condition to be used against \`ReservedInputRecord\` object types. All fields
are tested for equality and combined with a logical ‘and.’
"""
input ReservedInputRecordCondition {
  """Checks for equality with the object’s \`id\` field."""
  id: Int
}

"""Methods to use when ordering \`ReservedInputRecord\`."""
enum ReservedInputRecordsOrderBy {
  NATURAL
  PRIMARY_KEY_ASC
  PRIMARY_KEY_DESC
  ID_ASC
  ID_DESC
}

"""A connection to a list of \`DefaultValue\` values."""
type DefaultValuesConnection {
  """A list of \`DefaultValue\` objects."""
  nodes: [DefaultValue]!

  """
  A list of edges which contains the \`DefaultValue\` and cursor to aid in pagination.
  """
  edges: [DefaultValuesEdge]!

  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """The count of *all* \`DefaultValue\` you could get from the connection."""
  totalCount: Int!
}

"""A \`DefaultValue\` edge in the connection."""
type DefaultValuesEdge {
  """A cursor for use in pagination."""
  cursor: Cursor

  """The \`DefaultValue\` at the end of the edge."""
  node: DefaultValue
}

"""
A condition to be used against \`DefaultValue\` object types. All fields are
tested for equality and combined with a logical ‘and.’
"""
input DefaultValueCondition {
  """Checks for equality with the object’s \`id\` field."""
  id: Int

  """Checks for equality with the object’s \`nullValue\` field."""
  nullValue: String
}

"""Methods to use when ordering \`DefaultValue\`."""
enum DefaultValuesOrderBy {
  NATURAL
  PRIMARY_KEY_ASC
  PRIMARY_KEY_DESC
  ID_ASC
  ID_DESC
  NULL_VALUE_ASC
  NULL_VALUE_DESC
}

"""A connection to a list of \`NoPrimaryKey\` values."""
type NoPrimaryKeysConnection {
  """A list of \`NoPrimaryKey\` objects."""
  nodes: [NoPrimaryKey]!

  """
  A list of edges which contains the \`NoPrimaryKey\` and cursor to aid in pagination.
  """
  edges: [NoPrimaryKeysEdge]!

  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """The count of *all* \`NoPrimaryKey\` you could get from the connection."""
  totalCount: Int!
}

"""A \`NoPrimaryKey\` edge in the connection."""
type NoPrimaryKeysEdge {
  """A cursor for use in pagination."""
  cursor: Cursor

  """The \`NoPrimaryKey\` at the end of the edge."""
  node: NoPrimaryKey
}

"""
A condition to be used against \`NoPrimaryKey\` object types. All fields are
tested for equality and combined with a logical ‘and.’
"""
input NoPrimaryKeyCondition {
  """Checks for equality with the object’s \`id\` field."""
  id: Int

  """Checks for equality with the object’s \`str\` field."""
  str: String
}

"""Methods to use when ordering \`NoPrimaryKey\`."""
enum NoPrimaryKeysOrderBy {
  NATURAL
  ID_ASC
  ID_DESC
  STR_ASC
  STR_DESC
}

"""A connection to a list of \`Testview\` values."""
type TestviewsConnection {
  """A list of \`Testview\` objects."""
  nodes: [Testview]!

  """
  A list of edges which contains the \`Testview\` and cursor to aid in pagination.
  """
  edges: [TestviewsEdge]!

  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """The count of *all* \`Testview\` you could get from the connection."""
  totalCount: Int!
}

type Testview {
  testviewid: Int
  col1: Int
  col2: Int
}

"""A \`Testview\` edge in the connection."""
type TestviewsEdge {
  """A cursor for use in pagination."""
  cursor: Cursor

  """The \`Testview\` at the end of the edge."""
  node: Testview
}

"""
A condition to be used against \`Testview\` object types. All fields are tested
for equality and combined with a logical ‘and.’
"""
input TestviewCondition {
  """Checks for equality with the object’s \`testviewid\` field."""
  testviewid: Int

  """Checks for equality with the object’s \`col1\` field."""
  col1: Int

  """Checks for equality with the object’s \`col2\` field."""
  col2: Int
}

"""Methods to use when ordering \`Testview\`."""
enum TestviewsOrderBy {
  NATURAL
  TESTVIEWID_ASC
  TESTVIEWID_DESC
  COL1_ASC
  COL1_DESC
  COL2_ASC
  COL2_DESC
}

"""A connection to a list of \`MyTable\` values."""
type MyTablesConnection {
  """A list of \`MyTable\` objects."""
  nodes: [MyTable]!

  """
  A list of edges which contains the \`MyTable\` and cursor to aid in pagination.
  """
  edges: [MyTablesEdge]!

  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """The count of *all* \`MyTable\` you could get from the connection."""
  totalCount: Int!
}

"""A \`MyTable\` edge in the connection."""
type MyTablesEdge {
  """A cursor for use in pagination."""
  cursor: Cursor

  """The \`MyTable\` at the end of the edge."""
  node: MyTable
}

"""
A condition to be used against \`MyTable\` object types. All fields are tested for equality and combined with a logical ‘and.’
"""
input MyTableCondition {
  """Checks for equality with the object’s \`id\` field."""
  id: Int

  """Checks for equality with the object’s \`jsonData\` field."""
  jsonData: JSON
}

"""Methods to use when ordering \`MyTable\`."""
enum MyTablesOrderBy {
  NATURAL
  PRIMARY_KEY_ASC
  PRIMARY_KEY_DESC
  ID_ASC
  ID_DESC
  JSON_DATA_ASC
  JSON_DATA_DESC
}

"""A connection to a list of \`PersonSecret\` values."""
type PersonSecretsConnection {
  """A list of \`PersonSecret\` objects."""
  nodes: [PersonSecret]!

  """
  A list of edges which contains the \`PersonSecret\` and cursor to aid in pagination.
  """
  edges: [PersonSecretsEdge]!

  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """The count of *all* \`PersonSecret\` you could get from the connection."""
  totalCount: Int!
}

"""A \`PersonSecret\` edge in the connection."""
type PersonSecretsEdge {
  """A cursor for use in pagination."""
  cursor: Cursor

  """The \`PersonSecret\` at the end of the edge."""
  node: PersonSecret
}

"""
A condition to be used against \`PersonSecret\` object types. All fields are
tested for equality and combined with a logical ‘and.’
"""
input PersonSecretCondition {
  """Checks for equality with the object’s \`personId\` field."""
  personId: Int

  """Checks for equality with the object’s \`secret\` field."""
  secret: String
}

"""Methods to use when ordering \`PersonSecret\`."""
enum PersonSecretsOrderBy {
  NATURAL
  PRIMARY_KEY_ASC
  PRIMARY_KEY_DESC
  PERSON_ID_ASC
  PERSON_ID_DESC
  SECRET_ASC
  SECRET_DESC
}

"""A connection to a list of \`ViewTable\` values."""
type ViewTablesConnection {
  """A list of \`ViewTable\` objects."""
  nodes: [ViewTable]!

  """
  A list of edges which contains the \`ViewTable\` and cursor to aid in pagination.
  """
  edges: [ViewTablesEdge]!

  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """The count of *all* \`ViewTable\` you could get from the connection."""
  totalCount: Int!
}

"""A \`ViewTable\` edge in the connection."""
type ViewTablesEdge {
  """A cursor for use in pagination."""
  cursor: Cursor

  """The \`ViewTable\` at the end of the edge."""
  node: ViewTable
}

"""
A condition to be used against \`ViewTable\` object types. All fields are tested
for equality and combined with a logical ‘and.’
"""
input ViewTableCondition {
  """Checks for equality with the object’s \`id\` field."""
  id: Int

  """Checks for equality with the object’s \`col1\` field."""
  col1: Int

  """Checks for equality with the object’s \`col2\` field."""
  col2: Int
}

"""Methods to use when ordering \`ViewTable\`."""
enum ViewTablesOrderBy {
  NATURAL
  PRIMARY_KEY_ASC
  PRIMARY_KEY_DESC
  ID_ASC
  ID_DESC
  COL1_ASC
  COL1_DESC
  COL2_ASC
  COL2_DESC
}

"""A connection to a list of \`SimilarTable1\` values."""
type SimilarTable1SConnection {
  """A list of \`SimilarTable1\` objects."""
  nodes: [SimilarTable1]!

  """
  A list of edges which contains the \`SimilarTable1\` and cursor to aid in pagination.
  """
  edges: [SimilarTable1SEdge]!

  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """The count of *all* \`SimilarTable1\` you could get from the connection."""
  totalCount: Int!
}

"""A \`SimilarTable1\` edge in the connection."""
type SimilarTable1SEdge {
  """A cursor for use in pagination."""
  cursor: Cursor

  """The \`SimilarTable1\` at the end of the edge."""
  node: SimilarTable1
}

"""
A condition to be used against \`SimilarTable1\` object types. All fields are
tested for equality and combined with a logical ‘and.’
"""
input SimilarTable1Condition {
  """Checks for equality with the object’s \`id\` field."""
  id: Int

  """Checks for equality with the object’s \`col1\` field."""
  col1: Int

  """Checks for equality with the object’s \`col2\` field."""
  col2: Int

  """Checks for equality with the object’s \`col3\` field."""
  col3: Int
}

"""Methods to use when ordering \`SimilarTable1\`."""
enum SimilarTable1SOrderBy {
  NATURAL
  PRIMARY_KEY_ASC
  PRIMARY_KEY_DESC
  ID_ASC
  ID_DESC
  COL1_ASC
  COL1_DESC
  COL2_ASC
  COL2_DESC
  COL3_ASC
  COL3_DESC
}

"""A connection to a list of \`SimilarTable2\` values."""
type SimilarTable2SConnection {
  """A list of \`SimilarTable2\` objects."""
  nodes: [SimilarTable2]!

  """
  A list of edges which contains the \`SimilarTable2\` and cursor to aid in pagination.
  """
  edges: [SimilarTable2SEdge]!

  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """The count of *all* \`SimilarTable2\` you could get from the connection."""
  totalCount: Int!
}

"""A \`SimilarTable2\` edge in the connection."""
type SimilarTable2SEdge {
  """A cursor for use in pagination."""
  cursor: Cursor

  """The \`SimilarTable2\` at the end of the edge."""
  node: SimilarTable2
}

"""
A condition to be used against \`SimilarTable2\` object types. All fields are
tested for equality and combined with a logical ‘and.’
"""
input SimilarTable2Condition {
  """Checks for equality with the object’s \`id\` field."""
  id: Int

  """Checks for equality with the object’s \`col3\` field."""
  col3: Int

  """Checks for equality with the object’s \`col4\` field."""
  col4: Int

  """Checks for equality with the object’s \`col5\` field."""
  col5: Int
}

"""Methods to use when ordering \`SimilarTable2\`."""
enum SimilarTable2SOrderBy {
  NATURAL
  PRIMARY_KEY_ASC
  PRIMARY_KEY_DESC
  ID_ASC
  ID_DESC
  COL3_ASC
  COL3_DESC
  COL4_ASC
  COL4_DESC
  COL5_ASC
  COL5_DESC
}

"""A connection to a list of \`UpdatableView\` values."""
type UpdatableViewsConnection {
  """A list of \`UpdatableView\` objects."""
  nodes: [UpdatableView]!

  """
  A list of edges which contains the \`UpdatableView\` and cursor to aid in pagination.
  """
  edges: [UpdatableViewsEdge]!

  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """The count of *all* \`UpdatableView\` you could get from the connection."""
  totalCount: Int!
}

"""YOYOYO!!"""
type UpdatableView {
  x: Int
  name: String
  description: String

  """This is constantly 2"""
  constant: Int
}

"""A \`UpdatableView\` edge in the connection."""
type UpdatableViewsEdge {
  """A cursor for use in pagination."""
  cursor: Cursor

  """The \`UpdatableView\` at the end of the edge."""
  node: UpdatableView
}

"""
A condition to be used against \`UpdatableView\` object types. All fields are
tested for equality and combined with a logical ‘and.’
"""
input UpdatableViewCondition {
  """Checks for equality with the object’s \`x\` field."""
  x: Int

  """Checks for equality with the object’s \`name\` field."""
  name: String

  """Checks for equality with the object’s \`description\` field."""
  description: String

  """Checks for equality with the object’s \`constant\` field."""
  constant: Int
}

"""Methods to use when ordering \`UpdatableView\`."""
enum UpdatableViewsOrderBy {
  NATURAL
  X_ASC
  X_DESC
  NAME_ASC
  NAME_DESC
  DESCRIPTION_ASC
  DESCRIPTION_DESC
  CONSTANT_ASC
  CONSTANT_DESC
}

"""A connection to a list of \`NullTestRecord\` values."""
type NullTestRecordsConnection {
  """A list of \`NullTestRecord\` objects."""
  nodes: [NullTestRecord]!

  """
  A list of edges which contains the \`NullTestRecord\` and cursor to aid in pagination.
  """
  edges: [NullTestRecordsEdge]!

  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """The count of *all* \`NullTestRecord\` you could get from the connection."""
  totalCount: Int!
}

"""A \`NullTestRecord\` edge in the connection."""
type NullTestRecordsEdge {
  """A cursor for use in pagination."""
  cursor: Cursor

  """The \`NullTestRecord\` at the end of the edge."""
  node: NullTestRecord
}

"""
A condition to be used against \`NullTestRecord\` object types. All fields are
tested for equality and combined with a logical ‘and.’
"""
input NullTestRecordCondition {
  """Checks for equality with the object’s \`id\` field."""
  id: Int

  """Checks for equality with the object’s \`nullableText\` field."""
  nullableText: String

  """Checks for equality with the object’s \`nullableInt\` field."""
  nullableInt: Int

  """Checks for equality with the object’s \`nonNullText\` field."""
  nonNullText: String
}

"""Methods to use when ordering \`NullTestRecord\`."""
enum NullTestRecordsOrderBy {
  NATURAL
  PRIMARY_KEY_ASC
  PRIMARY_KEY_DESC
  ID_ASC
  ID_DESC
  NULLABLE_TEXT_ASC
  NULLABLE_TEXT_DESC
  NULLABLE_INT_ASC
  NULLABLE_INT_DESC
  NON_NULL_TEXT_ASC
  NON_NULL_TEXT_DESC
}

"""A connection to a list of \`EdgeCase\` values."""
type EdgeCasesConnection {
  """A list of \`EdgeCase\` objects."""
  nodes: [EdgeCase]!

  """
  A list of edges which contains the \`EdgeCase\` and cursor to aid in pagination.
  """
  edges: [EdgeCasesEdge]!

  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """The count of *all* \`EdgeCase\` you could get from the connection."""
  totalCount: Int!
}

type EdgeCase {
  computed: String
  notNullHasDefault: Boolean!
  wontCastEasy: Int
  rowId: Int
}

"""A \`EdgeCase\` edge in the connection."""
type EdgeCasesEdge {
  """A cursor for use in pagination."""
  cursor: Cursor

  """The \`EdgeCase\` at the end of the edge."""
  node: EdgeCase
}

"""
A condition to be used against \`EdgeCase\` object types. All fields are tested
for equality and combined with a logical ‘and.’
"""
input EdgeCaseCondition {
  """Checks for equality with the object’s \`notNullHasDefault\` field."""
  notNullHasDefault: Boolean

  """Checks for equality with the object’s \`wontCastEasy\` field."""
  wontCastEasy: Int

  """Checks for equality with the object’s \`rowId\` field."""
  rowId: Int
}

"""Methods to use when ordering \`EdgeCase\`."""
enum EdgeCasesOrderBy {
  NATURAL
  NOT_NULL_HAS_DEFAULT_ASC
  NOT_NULL_HAS_DEFAULT_DESC
  WONT_CAST_EASY_ASC
  WONT_CAST_EASY_DESC
  ROW_ID_ASC
  ROW_ID_DESC
}

"""A connection to a list of \`LeftArm\` values."""
type LeftArmsConnection {
  """A list of \`LeftArm\` objects."""
  nodes: [LeftArm]!

  """
  A list of edges which contains the \`LeftArm\` and cursor to aid in pagination.
  """
  edges: [LeftArmsEdge]!

  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """The count of *all* \`LeftArm\` you could get from the connection."""
  totalCount: Int!
}

"""A \`LeftArm\` edge in the connection."""
type LeftArmsEdge {
  """A cursor for use in pagination."""
  cursor: Cursor

  """The \`LeftArm\` at the end of the edge."""
  node: LeftArm
}

"""
A condition to be used against \`LeftArm\` object types. All fields are tested for equality and combined with a logical ‘and.’
"""
input LeftArmCondition {
  """Checks for equality with the object’s \`id\` field."""
  id: Int

  """Checks for equality with the object’s \`personId\` field."""
  personId: Int

  """Checks for equality with the object’s \`lengthInMetres\` field."""
  lengthInMetres: Float

  """Checks for equality with the object’s \`mood\` field."""
  mood: String
}

"""Methods to use when ordering \`LeftArm\`."""
enum LeftArmsOrderBy {
  NATURAL
  PRIMARY_KEY_ASC
  PRIMARY_KEY_DESC
  ID_ASC
  ID_DESC
  PERSON_ID_ASC
  PERSON_ID_DESC
  LENGTH_IN_METRES_ASC
  LENGTH_IN_METRES_DESC
  MOOD_ASC
  MOOD_DESC
}

"""A connection to a list of \`Issue756\` values."""
type Issue756SConnection {
  """A list of \`Issue756\` objects."""
  nodes: [Issue756]!

  """
  A list of edges which contains the \`Issue756\` and cursor to aid in pagination.
  """
  edges: [Issue756SEdge]!

  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """The count of *all* \`Issue756\` you could get from the connection."""
  totalCount: Int!
}

"""A \`Issue756\` edge in the connection."""
type Issue756SEdge {
  """A cursor for use in pagination."""
  cursor: Cursor

  """The \`Issue756\` at the end of the edge."""
  node: Issue756
}

"""
A condition to be used against \`Issue756\` object types. All fields are tested
for equality and combined with a logical ‘and.’
"""
input Issue756Condition {
  """Checks for equality with the object’s \`id\` field."""
  id: Int

  """Checks for equality with the object’s \`ts\` field."""
  ts: NotNullTimestamp
}

"""Methods to use when ordering \`Issue756\`."""
enum Issue756SOrderBy {
  NATURAL
  PRIMARY_KEY_ASC
  PRIMARY_KEY_DESC
  ID_ASC
  ID_DESC
  TS_ASC
  TS_DESC
}

"""A connection to a list of \`List\` values."""
type ListsConnection {
  """A list of \`List\` objects."""
  nodes: [List]!

  """
  A list of edges which contains the \`List\` and cursor to aid in pagination.
  """
  edges: [ListsEdge]!

  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """The count of *all* \`List\` you could get from the connection."""
  totalCount: Int!
}

"""A \`List\` edge in the connection."""
type ListsEdge {
  """A cursor for use in pagination."""
  cursor: Cursor

  """The \`List\` at the end of the edge."""
  node: List
}

"""
A condition to be used against \`List\` object types. All fields are tested for equality and combined with a logical ‘and.’
"""
input ListCondition {
  """Checks for equality with the object’s \`id\` field."""
  id: Int

  """Checks for equality with the object’s \`intArray\` field."""
  intArray: [Int]

  """Checks for equality with the object’s \`intArrayNn\` field."""
  intArrayNn: [Int]

  """Checks for equality with the object’s \`enumArray\` field."""
  enumArray: [Color]

  """Checks for equality with the object’s \`enumArrayNn\` field."""
  enumArrayNn: [Color]

  """Checks for equality with the object’s \`dateArray\` field."""
  dateArray: [Date]

  """Checks for equality with the object’s \`dateArrayNn\` field."""
  dateArrayNn: [Date]

  """Checks for equality with the object’s \`timestamptzArray\` field."""
  timestamptzArray: [Datetime]

  """Checks for equality with the object’s \`timestamptzArrayNn\` field."""
  timestamptzArrayNn: [Datetime]

  """Checks for equality with the object’s \`compoundTypeArray\` field."""
  compoundTypeArray: [CompoundTypeInput]

  """Checks for equality with the object’s \`compoundTypeArrayNn\` field."""
  compoundTypeArrayNn: [CompoundTypeInput]
}

"""Methods to use when ordering \`List\`."""
enum ListsOrderBy {
  NATURAL
  PRIMARY_KEY_ASC
  PRIMARY_KEY_DESC
  ID_ASC
  ID_DESC
}

"""
The root mutation type which contains root level fields which mutate data.
"""
type Mutation {
  mutationOut(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: MutationOutInput!
  ): MutationOutPayload
  mutationOutSetof(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: MutationOutSetofInput!
  ): MutationOutSetofPayload
  mutationOutUnnamed(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: MutationOutUnnamedInput!
  ): MutationOutUnnamedPayload
  noArgsMutation(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: NoArgsMutationInput!
  ): NoArgsMutationPayload
  returnVoidMutation(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: ReturnVoidMutationInput!
  ): ReturnVoidMutationPayload
  mutationIntervalSet(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: MutationIntervalSetInput!
  ): MutationIntervalSetPayload
  mutationInOut(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: MutationInOutInput!
  ): MutationInOutPayload
  mutationReturnsTableOneCol(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: MutationReturnsTableOneColInput!
  ): MutationReturnsTableOneColPayload
  jsonIdentityMutation(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: JsonIdentityMutationInput!
  ): JsonIdentityMutationPayload
  jsonbIdentityMutation(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: JsonbIdentityMutationInput!
  ): JsonbIdentityMutationPayload
  jsonbIdentityMutationPlpgsql(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: JsonbIdentityMutationPlpgsqlInput!
  ): JsonbIdentityMutationPlpgsqlPayload
  jsonbIdentityMutationPlpgsqlWithDefault(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: JsonbIdentityMutationPlpgsqlWithDefaultInput!
  ): JsonbIdentityMutationPlpgsqlWithDefaultPayload

  """lol, add some stuff 1 mutation"""
  add1Mutation(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: Add1MutationInput!
  ): Add1MutationPayload

  """lol, add some stuff 2 mutation"""
  add2Mutation(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: Add2MutationInput!
  ): Add2MutationPayload

  """lol, add some stuff 3 mutation"""
  add3Mutation(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: Add3MutationInput!
  ): Add3MutationPayload

  """lol, add some stuff 4 mutation"""
  add4Mutation(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: Add4MutationInput!
  ): Add4MutationPayload
  add4MutationError(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: Add4MutationErrorInput!
  ): Add4MutationErrorPayload
  mult1(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: Mult1Input!
  ): Mult1Payload
  mult2(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: Mult2Input!
  ): Mult2Payload
  mult3(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: Mult3Input!
  ): Mult3Payload
  mult4(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: Mult4Input!
  ): Mult4Payload
  mutationInInout(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: MutationInInoutInput!
  ): MutationInInoutPayload
  mutationOutOut(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: MutationOutOutInput!
  ): MutationOutOutPayload
  mutationOutOutSetof(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: MutationOutOutSetofInput!
  ): MutationOutOutSetofPayload
  mutationOutOutUnnamed(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: MutationOutOutUnnamedInput!
  ): MutationOutOutUnnamedPayload
  intSetMutation(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: IntSetMutationInput!
  ): IntSetMutationPayload
  mutationOutUnnamedOutOutUnnamed(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: MutationOutUnnamedOutOutUnnamedInput!
  ): MutationOutUnnamedOutOutUnnamedPayload
  mutationReturnsTableMultiCol(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: MutationReturnsTableMultiColInput!
  ): MutationReturnsTableMultiColPayload
  guidFn(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: GuidFnInput!
  ): GuidFnPayload
  mutationIntervalArray(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: MutationIntervalArrayInput!
  ): MutationIntervalArrayPayload
  mutationTextArray(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: MutationTextArrayInput!
  ): MutationTextArrayPayload
  listBdeMutation(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: ListBdeMutationInput!
  ): ListBdeMutationPayload
  authenticateFail(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: AuthenticateFailInput!
  ): AuthenticateFailPayload
  authenticate(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: AuthenticateInput!
  ): AuthenticatePayload
  leftArmIdentity(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: LeftArmIdentityInput!
  ): LeftArmIdentityPayload
  issue756Mutation(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: Issue756MutationInput!
  ): Issue756MutationPayload
  issue756SetMutation(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: Issue756SetMutationInput!
  ): Issue756SetMutationPayload
  authenticateMany(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: AuthenticateManyInput!
  ): AuthenticateManyPayload
  authenticatePayload(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: AuthenticatePayloadInput!
  ): AuthenticatePayloadPayload
  typesMutation(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: TypesMutationInput!
  ): TypesMutationPayload
  mutationOutOutCompoundType(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: MutationOutOutCompoundTypeInput!
  ): MutationOutOutCompoundTypePayload
  compoundTypeMutation(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: CompoundTypeMutationInput!
  ): CompoundTypeMutationPayload
  compoundTypeSetMutation(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: CompoundTypeSetMutationInput!
  ): CompoundTypeSetMutationPayload
  listOfCompoundTypesMutation(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: ListOfCompoundTypesMutationInput!
  ): ListOfCompoundTypesMutationPayload
  tableMutation(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: TableMutationInput!
  ): TableMutationPayload
  postWithSuffix(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: PostWithSuffixInput!
  ): PostWithSuffixPayload @deprecated(reason: "This is deprecated (comment on function a.post_with_suffix).")
  mutationCompoundTypeArray(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: MutationCompoundTypeArrayInput!
  ): MutationCompoundTypeArrayPayload
  compoundTypeArrayMutation(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: CompoundTypeArrayMutationInput!
  ): CompoundTypeArrayMutationPayload
  postMany(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: PostManyInput!
  ): PostManyPayload
  mutationOutComplex(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: MutationOutComplexInput!
  ): MutationOutComplexPayload
  mutationOutComplexSetof(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: MutationOutComplexSetofInput!
  ): MutationOutComplexSetofPayload
  mutationOutTable(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: MutationOutTableInput!
  ): MutationOutTablePayload
  mutationOutTableSetof(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: MutationOutTableSetofInput!
  ): MutationOutTableSetofPayload
  tableSetMutation(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: TableSetMutationInput!
  ): TableSetMutationPayload
  typeFunctionConnectionMutation(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: TypeFunctionConnectionMutationInput!
  ): TypeFunctionConnectionMutationPayload
  typeFunctionMutation(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: TypeFunctionMutationInput!
  ): TypeFunctionMutationPayload
  typeFunctionListMutation(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: TypeFunctionListMutationInput!
  ): TypeFunctionListMutationPayload

  """Creates a single \`Input\`."""
  createInput(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: CreateInputInput!
  ): CreateInputPayload

  """Creates a single \`Patch\`."""
  createPatch(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: CreatePatchInput!
  ): CreatePatchPayload

  """Creates a single \`Reserved\`."""
  createReserved(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: CreateReservedInput!
  ): CreateReservedPayload

  """Creates a single \`ReservedPatchRecord\`."""
  createReservedPatchRecord(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: CreateReservedPatchRecordInput!
  ): CreateReservedPatchRecordPayload

  """Creates a single \`ReservedInputRecord\`."""
  createReservedInputRecord(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: CreateReservedInputRecordInput!
  ): CreateReservedInputRecordPayload

  """Creates a single \`DefaultValue\`."""
  createDefaultValue(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: CreateDefaultValueInput!
  ): CreateDefaultValuePayload

  """Creates a single \`ForeignKey\`."""
  createForeignKey(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: CreateForeignKeyInput!
  ): CreateForeignKeyPayload

  """Creates a single \`NoPrimaryKey\`."""
  createNoPrimaryKey(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: CreateNoPrimaryKeyInput!
  ): CreateNoPrimaryKeyPayload

  """Creates a single \`Testview\`."""
  createTestview(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: CreateTestviewInput!
  ): CreateTestviewPayload

  """Creates a single \`MyTable\`."""
  createMyTable(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: CreateMyTableInput!
  ): CreateMyTablePayload

  """Creates a single \`PersonSecret\`."""
  createPersonSecret(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: CreatePersonSecretInput!
  ): CreatePersonSecretPayload @deprecated(reason: "This is deprecated (comment on table c.person_secret).")

  """Creates a single \`ViewTable\`."""
  createViewTable(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: CreateViewTableInput!
  ): CreateViewTablePayload

  """Creates a single \`CompoundKey\`."""
  createCompoundKey(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: CreateCompoundKeyInput!
  ): CreateCompoundKeyPayload

  """Creates a single \`SimilarTable1\`."""
  createSimilarTable1(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: CreateSimilarTable1Input!
  ): CreateSimilarTable1Payload

  """Creates a single \`SimilarTable2\`."""
  createSimilarTable2(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: CreateSimilarTable2Input!
  ): CreateSimilarTable2Payload

  """Creates a single \`UpdatableView\`."""
  createUpdatableView(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: CreateUpdatableViewInput!
  ): CreateUpdatableViewPayload

  """Creates a single \`NullTestRecord\`."""
  createNullTestRecord(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: CreateNullTestRecordInput!
  ): CreateNullTestRecordPayload

  """Creates a single \`EdgeCase\`."""
  createEdgeCase(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: CreateEdgeCaseInput!
  ): CreateEdgeCasePayload

  """Creates a single \`LeftArm\`."""
  createLeftArm(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: CreateLeftArmInput!
  ): CreateLeftArmPayload

  """Creates a single \`Issue756\`."""
  createIssue756(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: CreateIssue756Input!
  ): CreateIssue756Payload

  """Creates a single \`Post\`."""
  createPost(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: CreatePostInput!
  ): CreatePostPayload

  """Creates a single \`Person\`."""
  createPerson(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: CreatePersonInput!
  ): CreatePersonPayload

  """Creates a single \`List\`."""
  createList(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: CreateListInput!
  ): CreateListPayload

  """Creates a single \`Type\`."""
  createType(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: CreateTypeInput!
  ): CreateTypePayload

  """Updates a single \`Input\` using a unique key and a patch."""
  updateInputById(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: UpdateInputByIdInput!
  ): UpdateInputPayload

  """Updates a single \`Patch\` using a unique key and a patch."""
  updatePatchById(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: UpdatePatchByIdInput!
  ): UpdatePatchPayload

  """Updates a single \`Reserved\` using a unique key and a patch."""
  updateReservedById(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: UpdateReservedByIdInput!
  ): UpdateReservedPayload

  """Updates a single \`ReservedPatchRecord\` using a unique key and a patch."""
  updateReservedPatchRecordById(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: UpdateReservedPatchRecordByIdInput!
  ): UpdateReservedPatchRecordPayload

  """Updates a single \`ReservedInputRecord\` using a unique key and a patch."""
  updateReservedInputRecordById(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: UpdateReservedInputRecordByIdInput!
  ): UpdateReservedInputRecordPayload

  """Updates a single \`DefaultValue\` using a unique key and a patch."""
  updateDefaultValueById(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: UpdateDefaultValueByIdInput!
  ): UpdateDefaultValuePayload

  """Updates a single \`NoPrimaryKey\` using a unique key and a patch."""
  updateNoPrimaryKeyById(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: UpdateNoPrimaryKeyByIdInput!
  ): UpdateNoPrimaryKeyPayload

  """Updates a single \`MyTable\` using a unique key and a patch."""
  updateMyTableById(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: UpdateMyTableByIdInput!
  ): UpdateMyTablePayload

  """Updates a single \`PersonSecret\` using a unique key and a patch."""
  updatePersonSecretByPersonId(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: UpdatePersonSecretByPersonIdInput!
  ): UpdatePersonSecretPayload @deprecated(reason: "This is deprecated (comment on table c.person_secret).")

  """Updates a single \`ViewTable\` using a unique key and a patch."""
  updateViewTableById(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: UpdateViewTableByIdInput!
  ): UpdateViewTablePayload

  """Updates a single \`CompoundKey\` using a unique key and a patch."""
  updateCompoundKeyByPersonId1AndPersonId2(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: UpdateCompoundKeyByPersonId1AndPersonId2Input!
  ): UpdateCompoundKeyPayload

  """Updates a single \`SimilarTable1\` using a unique key and a patch."""
  updateSimilarTable1ById(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: UpdateSimilarTable1ByIdInput!
  ): UpdateSimilarTable1Payload

  """Updates a single \`SimilarTable2\` using a unique key and a patch."""
  updateSimilarTable2ById(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: UpdateSimilarTable2ByIdInput!
  ): UpdateSimilarTable2Payload

  """Updates a single \`NullTestRecord\` using a unique key and a patch."""
  updateNullTestRecordById(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: UpdateNullTestRecordByIdInput!
  ): UpdateNullTestRecordPayload

  """Updates a single \`LeftArm\` using a unique key and a patch."""
  updateLeftArmById(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: UpdateLeftArmByIdInput!
  ): UpdateLeftArmPayload

  """Updates a single \`LeftArm\` using a unique key and a patch."""
  updateLeftArmByPersonId(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: UpdateLeftArmByPersonIdInput!
  ): UpdateLeftArmPayload

  """Updates a single \`Issue756\` using a unique key and a patch."""
  updateIssue756ById(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: UpdateIssue756ByIdInput!
  ): UpdateIssue756Payload

  """Updates a single \`Post\` using a unique key and a patch."""
  updatePostById(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: UpdatePostByIdInput!
  ): UpdatePostPayload

  """Updates a single \`Person\` using a unique key and a patch."""
  updatePersonById(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: UpdatePersonByIdInput!
  ): UpdatePersonPayload

  """Updates a single \`Person\` using a unique key and a patch."""
  updatePersonByEmail(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: UpdatePersonByEmailInput!
  ): UpdatePersonPayload

  """Updates a single \`List\` using a unique key and a patch."""
  updateListById(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: UpdateListByIdInput!
  ): UpdateListPayload

  """Updates a single \`Type\` using a unique key and a patch."""
  updateTypeById(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: UpdateTypeByIdInput!
  ): UpdateTypePayload

  """Deletes a single \`Input\` using a unique key."""
  deleteInputById(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: DeleteInputByIdInput!
  ): DeleteInputPayload

  """Deletes a single \`Patch\` using a unique key."""
  deletePatchById(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: DeletePatchByIdInput!
  ): DeletePatchPayload

  """Deletes a single \`Reserved\` using a unique key."""
  deleteReservedById(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: DeleteReservedByIdInput!
  ): DeleteReservedPayload

  """Deletes a single \`ReservedPatchRecord\` using a unique key."""
  deleteReservedPatchRecordById(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: DeleteReservedPatchRecordByIdInput!
  ): DeleteReservedPatchRecordPayload

  """Deletes a single \`ReservedInputRecord\` using a unique key."""
  deleteReservedInputRecordById(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: DeleteReservedInputRecordByIdInput!
  ): DeleteReservedInputRecordPayload

  """Deletes a single \`DefaultValue\` using a unique key."""
  deleteDefaultValueById(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: DeleteDefaultValueByIdInput!
  ): DeleteDefaultValuePayload

  """Deletes a single \`NoPrimaryKey\` using a unique key."""
  deleteNoPrimaryKeyById(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: DeleteNoPrimaryKeyByIdInput!
  ): DeleteNoPrimaryKeyPayload

  """Deletes a single \`MyTable\` using a unique key."""
  deleteMyTableById(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: DeleteMyTableByIdInput!
  ): DeleteMyTablePayload

  """Deletes a single \`PersonSecret\` using a unique key."""
  deletePersonSecretByPersonId(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: DeletePersonSecretByPersonIdInput!
  ): DeletePersonSecretPayload @deprecated(reason: "This is deprecated (comment on table c.person_secret).")

  """Deletes a single \`ViewTable\` using a unique key."""
  deleteViewTableById(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: DeleteViewTableByIdInput!
  ): DeleteViewTablePayload

  """Deletes a single \`CompoundKey\` using a unique key."""
  deleteCompoundKeyByPersonId1AndPersonId2(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: DeleteCompoundKeyByPersonId1AndPersonId2Input!
  ): DeleteCompoundKeyPayload

  """Deletes a single \`SimilarTable1\` using a unique key."""
  deleteSimilarTable1ById(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: DeleteSimilarTable1ByIdInput!
  ): DeleteSimilarTable1Payload

  """Deletes a single \`SimilarTable2\` using a unique key."""
  deleteSimilarTable2ById(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: DeleteSimilarTable2ByIdInput!
  ): DeleteSimilarTable2Payload

  """Deletes a single \`NullTestRecord\` using a unique key."""
  deleteNullTestRecordById(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: DeleteNullTestRecordByIdInput!
  ): DeleteNullTestRecordPayload

  """Deletes a single \`LeftArm\` using a unique key."""
  deleteLeftArmById(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: DeleteLeftArmByIdInput!
  ): DeleteLeftArmPayload

  """Deletes a single \`LeftArm\` using a unique key."""
  deleteLeftArmByPersonId(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: DeleteLeftArmByPersonIdInput!
  ): DeleteLeftArmPayload

  """Deletes a single \`Issue756\` using a unique key."""
  deleteIssue756ById(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: DeleteIssue756ByIdInput!
  ): DeleteIssue756Payload

  """Deletes a single \`Post\` using a unique key."""
  deletePostById(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: DeletePostByIdInput!
  ): DeletePostPayload

  """Deletes a single \`Person\` using a unique key."""
  deletePersonById(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: DeletePersonByIdInput!
  ): DeletePersonPayload

  """Deletes a single \`Person\` using a unique key."""
  deletePersonByEmail(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: DeletePersonByEmailInput!
  ): DeletePersonPayload

  """Deletes a single \`List\` using a unique key."""
  deleteListById(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: DeleteListByIdInput!
  ): DeleteListPayload

  """Deletes a single \`Type\` using a unique key."""
  deleteTypeById(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: DeleteTypeByIdInput!
  ): DeleteTypePayload
}

"""The output of our \`mutationOut\` mutation."""
type MutationOutPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String
  o: Int

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query
}

"""All input for the \`mutationOut\` mutation."""
input MutationOutInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
}

"""The output of our \`mutationOutSetof\` mutation."""
type MutationOutSetofPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String
  os: [Int]

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query
}

"""All input for the \`mutationOutSetof\` mutation."""
input MutationOutSetofInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
}

"""The output of our \`mutationOutUnnamed\` mutation."""
type MutationOutUnnamedPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String
  integer: Int

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query
}

"""All input for the \`mutationOutUnnamed\` mutation."""
input MutationOutUnnamedInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
}

"""The output of our \`noArgsMutation\` mutation."""
type NoArgsMutationPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String
  integer: Int

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query
}

"""All input for the \`noArgsMutation\` mutation."""
input NoArgsMutationInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
}

"""The output of our \`returnVoidMutation\` mutation."""
type ReturnVoidMutationPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query
}

"""All input for the \`returnVoidMutation\` mutation."""
input ReturnVoidMutationInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
}

"""The output of our \`mutationIntervalSet\` mutation."""
type MutationIntervalSetPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String
  intervals: [Interval]

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query
}

"""All input for the \`mutationIntervalSet\` mutation."""
input MutationIntervalSetInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
}

"""The output of our \`mutationInOut\` mutation."""
type MutationInOutPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String
  o: Int

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query
}

"""All input for the \`mutationInOut\` mutation."""
input MutationInOutInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  i: Int
}

"""The output of our \`mutationReturnsTableOneCol\` mutation."""
type MutationReturnsTableOneColPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String
  col1S: [Int]

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query
}

"""All input for the \`mutationReturnsTableOneCol\` mutation."""
input MutationReturnsTableOneColInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  i: Int
}

"""The output of our \`jsonIdentityMutation\` mutation."""
type JsonIdentityMutationPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String
  json: JSON

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query
}

"""All input for the \`jsonIdentityMutation\` mutation."""
input JsonIdentityMutationInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  json: JSON
}

"""The output of our \`jsonbIdentityMutation\` mutation."""
type JsonbIdentityMutationPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String
  json: JSON

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query
}

"""All input for the \`jsonbIdentityMutation\` mutation."""
input JsonbIdentityMutationInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  json: JSON
}

"""The output of our \`jsonbIdentityMutationPlpgsql\` mutation."""
type JsonbIdentityMutationPlpgsqlPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String
  json: JSON

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query
}

"""All input for the \`jsonbIdentityMutationPlpgsql\` mutation."""
input JsonbIdentityMutationPlpgsqlInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  _theJson: JSON!
}

"""The output of our \`jsonbIdentityMutationPlpgsqlWithDefault\` mutation."""
type JsonbIdentityMutationPlpgsqlWithDefaultPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String
  json: JSON

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query
}

"""All input for the \`jsonbIdentityMutationPlpgsqlWithDefault\` mutation."""
input JsonbIdentityMutationPlpgsqlWithDefaultInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  _theJson: JSON
}

"""The output of our \`add1Mutation\` mutation."""
type Add1MutationPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String
  integer: Int!

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query
}

"""All input for the \`add1Mutation\` mutation."""
input Add1MutationInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  arg0: Int!
  arg1: Int!
}

"""The output of our \`add2Mutation\` mutation."""
type Add2MutationPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String
  integer: Int

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query
}

"""All input for the \`add2Mutation\` mutation."""
input Add2MutationInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  a: Int!
  b: Int
}

"""The output of our \`add3Mutation\` mutation."""
type Add3MutationPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String
  integer: Int

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query
}

"""All input for the \`add3Mutation\` mutation."""
input Add3MutationInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  a: Int
  arg1: Int
}

"""The output of our \`add4Mutation\` mutation."""
type Add4MutationPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String
  integer: Int

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query
}

"""All input for the \`add4Mutation\` mutation."""
input Add4MutationInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  arg0: Int
  b: Int
}

"""The output of our \`add4MutationError\` mutation."""
type Add4MutationErrorPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String
  integer: Int

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query
}

"""All input for the \`add4MutationError\` mutation."""
input Add4MutationErrorInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  arg0: Int
  b: Int
}

"""The output of our \`mult1\` mutation."""
type Mult1Payload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String
  integer: Int

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query
}

"""All input for the \`mult1\` mutation."""
input Mult1Input {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  arg0: Int
  arg1: Int
}

"""The output of our \`mult2\` mutation."""
type Mult2Payload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String
  integer: Int

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query
}

"""All input for the \`mult2\` mutation."""
input Mult2Input {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  arg0: Int
  arg1: Int
}

"""The output of our \`mult3\` mutation."""
type Mult3Payload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String
  integer: Int

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query
}

"""All input for the \`mult3\` mutation."""
input Mult3Input {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  arg0: Int!
  arg1: Int!
}

"""The output of our \`mult4\` mutation."""
type Mult4Payload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String
  integer: Int

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query
}

"""All input for the \`mult4\` mutation."""
input Mult4Input {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  arg0: Int!
  arg1: Int!
}

"""The output of our \`mutationInInout\` mutation."""
type MutationInInoutPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String
  ino: Int

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query
}

"""All input for the \`mutationInInout\` mutation."""
input MutationInInoutInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  i: Int
  ino: Int
}

"""The output of our \`mutationOutOut\` mutation."""
type MutationOutOutPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String
  result: MutationOutOutRecord

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query
}

type MutationOutOutRecord {
  firstOut: Int
  secondOut: String
}

"""All input for the \`mutationOutOut\` mutation."""
input MutationOutOutInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
}

"""The output of our \`mutationOutOutSetof\` mutation."""
type MutationOutOutSetofPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String
  results: [MutationOutOutSetofRecord]

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query
}

type MutationOutOutSetofRecord {
  o1: Int
  o2: String
}

"""All input for the \`mutationOutOutSetof\` mutation."""
input MutationOutOutSetofInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
}

"""The output of our \`mutationOutOutUnnamed\` mutation."""
type MutationOutOutUnnamedPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String
  result: MutationOutOutUnnamedRecord

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query
}

type MutationOutOutUnnamedRecord {
  arg1: Int
  arg2: String
}

"""All input for the \`mutationOutOutUnnamed\` mutation."""
input MutationOutOutUnnamedInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
}

"""The output of our \`intSetMutation\` mutation."""
type IntSetMutationPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String
  integers: [Int]

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query
}

"""All input for the \`intSetMutation\` mutation."""
input IntSetMutationInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  x: Int
  y: Int
  z: Int
}

"""The output of our \`mutationOutUnnamedOutOutUnnamed\` mutation."""
type MutationOutUnnamedOutOutUnnamedPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String
  result: MutationOutUnnamedOutOutUnnamedRecord

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query
}

type MutationOutUnnamedOutOutUnnamedRecord {
  arg1: Int
  o2: String
  arg3: Int
}

"""All input for the \`mutationOutUnnamedOutOutUnnamed\` mutation."""
input MutationOutUnnamedOutOutUnnamedInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
}

"""The output of our \`mutationReturnsTableMultiCol\` mutation."""
type MutationReturnsTableMultiColPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String
  results: [MutationReturnsTableMultiColRecord]

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query
}

type MutationReturnsTableMultiColRecord {
  col1: Int
  col2: String
}

"""All input for the \`mutationReturnsTableMultiCol\` mutation."""
input MutationReturnsTableMultiColInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  i: Int
}

"""The output of our \`guidFn\` mutation."""
type GuidFnPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String
  guid: Guid

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query
}

scalar Guid

"""All input for the \`guidFn\` mutation."""
input GuidFnInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  g: Guid
}

"""The output of our \`mutationIntervalArray\` mutation."""
type MutationIntervalArrayPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String
  intervals: [Interval]

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query
}

"""All input for the \`mutationIntervalArray\` mutation."""
input MutationIntervalArrayInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
}

"""The output of our \`mutationTextArray\` mutation."""
type MutationTextArrayPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String
  strings: [String]

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query
}

"""All input for the \`mutationTextArray\` mutation."""
input MutationTextArrayInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
}

"""The output of our \`listBdeMutation\` mutation."""
type ListBdeMutationPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String
  uuids: [UUID]

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query
}

"""All input for the \`listBdeMutation\` mutation."""
input ListBdeMutationInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  b: [String]
  d: String
  e: String
}

"""The output of our \`authenticateFail\` mutation."""
type AuthenticateFailPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String
  jwtToken: JwtToken

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query
}

type JwtToken {
  role: String
  exp: BigInt
  a: Int
  b: BigFloat
  c: BigInt
}

"""All input for the \`authenticateFail\` mutation."""
input AuthenticateFailInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
}

"""The output of our \`authenticate\` mutation."""
type AuthenticatePayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String
  jwtToken: JwtToken

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query
}

"""All input for the \`authenticate\` mutation."""
input AuthenticateInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  a: Int
  b: BigFloat
  c: BigInt
}

"""The output of our \`leftArmIdentity\` mutation."""
type LeftArmIdentityPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String
  leftArm: LeftArm

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`LeftArm\`. May be used by Relay 1."""
  leftArmEdge(
    """The method to use when ordering \`LeftArm\`."""
    orderBy: [LeftArmsOrderBy!]! = [PRIMARY_KEY_ASC]
  ): LeftArmsEdge

  """Reads a single \`Person\` that is related to this \`LeftArm\`."""
  personByPersonId: Person
}

"""All input for the \`leftArmIdentity\` mutation."""
input LeftArmIdentityInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  leftArm: LeftArmBaseInput
}

"""An input representation of \`LeftArm\` with nullable fields."""
input LeftArmBaseInput {
  id: Int
  personId: Int
  lengthInMetres: Float
  mood: String
}

"""The output of our \`issue756Mutation\` mutation."""
type Issue756MutationPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String
  issue756: Issue756

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`Issue756\`. May be used by Relay 1."""
  issue756Edge(
    """The method to use when ordering \`Issue756\`."""
    orderBy: [Issue756SOrderBy!]! = [PRIMARY_KEY_ASC]
  ): Issue756SEdge
}

"""All input for the \`issue756Mutation\` mutation."""
input Issue756MutationInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
}

"""The output of our \`issue756SetMutation\` mutation."""
type Issue756SetMutationPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String
  issue756S: [Issue756]

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query
}

"""All input for the \`issue756SetMutation\` mutation."""
input Issue756SetMutationInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
}

"""The output of our \`authenticateMany\` mutation."""
type AuthenticateManyPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String
  jwtTokens: [JwtToken]

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query
}

"""All input for the \`authenticateMany\` mutation."""
input AuthenticateManyInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  a: Int
  b: BigFloat
  c: BigInt
}

"""The output of our \`authenticatePayload\` mutation."""
type AuthenticatePayloadPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String
  authPayload: AuthPayload

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """Reads a single \`Person\` that is related to this \`AuthPayload\`."""
  personById: Person
}

type AuthPayload {
  jwt: JwtToken
  id: Int
  admin: Boolean

  """Reads a single \`Person\` that is related to this \`AuthPayload\`."""
  personById: Person
}

"""All input for the \`authenticatePayload\` mutation."""
input AuthenticatePayloadInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  a: Int
  b: BigFloat
  c: BigInt
}

"""The output of our \`typesMutation\` mutation."""
type TypesMutationPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String
  boolean: Boolean

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query
}

"""All input for the \`typesMutation\` mutation."""
input TypesMutationInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  a: BigInt!
  b: Boolean!
  c: String!
  d: [Int]!
  e: JSON!
  f: FloatRangeInput!
}

"""The output of our \`mutationOutOutCompoundType\` mutation."""
type MutationOutOutCompoundTypePayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String
  result: MutationOutOutCompoundTypeRecord

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query
}

type MutationOutOutCompoundTypeRecord {
  o1: Int
  o2: CompoundType
}

"""All input for the \`mutationOutOutCompoundType\` mutation."""
input MutationOutOutCompoundTypeInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  i1: Int
}

"""The output of our \`compoundTypeMutation\` mutation."""
type CompoundTypeMutationPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String
  compoundType: CompoundType

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query
}

"""All input for the \`compoundTypeMutation\` mutation."""
input CompoundTypeMutationInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  object: CompoundTypeInput
}

"""The output of our \`compoundTypeSetMutation\` mutation."""
type CompoundTypeSetMutationPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String
  compoundTypes: [CompoundType]

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query
}

"""All input for the \`compoundTypeSetMutation\` mutation."""
input CompoundTypeSetMutationInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  object: CompoundTypeInput
}

"""The output of our \`listOfCompoundTypesMutation\` mutation."""
type ListOfCompoundTypesMutationPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String
  compoundTypes: [CompoundType]

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query
}

"""All input for the \`listOfCompoundTypesMutation\` mutation."""
input ListOfCompoundTypesMutationInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  records: [CompoundTypeInput]
}

"""The output of our \`tableMutation\` mutation."""
type TableMutationPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String
  post: Post

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`Post\`. May be used by Relay 1."""
  postEdge(
    """The method to use when ordering \`Post\`."""
    orderBy: [PostsOrderBy!]! = [PRIMARY_KEY_ASC]
  ): PostsEdge

  """Reads a single \`Person\` that is related to this \`Post\`."""
  personByAuthorId: Person
}

"""All input for the \`tableMutation\` mutation."""
input TableMutationInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  id: Int
}

"""The output of our \`postWithSuffix\` mutation."""
type PostWithSuffixPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String
  post: Post

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`Post\`. May be used by Relay 1."""
  postEdge(
    """The method to use when ordering \`Post\`."""
    orderBy: [PostsOrderBy!]! = [PRIMARY_KEY_ASC]
  ): PostsEdge

  """Reads a single \`Person\` that is related to this \`Post\`."""
  personByAuthorId: Person
}

"""All input for the \`postWithSuffix\` mutation."""
input PostWithSuffixInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  post: PostInput
  suffix: String
}

"""An input for mutations affecting \`Post\`"""
input PostInput {
  id: Int
  headline: String!
  body: String
  authorId: Int
  enums: [AnEnum]
  comptypes: [ComptypeInput]
}

"""The output of our \`mutationCompoundTypeArray\` mutation."""
type MutationCompoundTypeArrayPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String
  compoundTypes: [CompoundType]

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query
}

"""All input for the \`mutationCompoundTypeArray\` mutation."""
input MutationCompoundTypeArrayInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  object: CompoundTypeInput
}

"""The output of our \`compoundTypeArrayMutation\` mutation."""
type CompoundTypeArrayMutationPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String
  compoundTypes: [CompoundType]

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query
}

"""All input for the \`compoundTypeArrayMutation\` mutation."""
input CompoundTypeArrayMutationInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  object: CompoundTypeInput
}

"""The output of our \`postMany\` mutation."""
type PostManyPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String
  posts: [Post]

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query
}

"""All input for the \`postMany\` mutation."""
input PostManyInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  posts: [PostInput]
}

"""The output of our \`mutationOutComplex\` mutation."""
type MutationOutComplexPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String
  result: MutationOutComplexRecord

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query
}

type MutationOutComplexRecord {
  x: Int
  y: CompoundType
  z: Person
}

"""All input for the \`mutationOutComplex\` mutation."""
input MutationOutComplexInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  a: Int
  b: String
}

"""The output of our \`mutationOutComplexSetof\` mutation."""
type MutationOutComplexSetofPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String
  results: [MutationOutComplexSetofRecord]

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query
}

type MutationOutComplexSetofRecord {
  x: Int
  y: CompoundType
  z: Person
}

"""All input for the \`mutationOutComplexSetof\` mutation."""
input MutationOutComplexSetofInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  a: Int
  b: String
}

"""The output of our \`mutationOutTable\` mutation."""
type MutationOutTablePayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String
  person: Person

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`Person\`. May be used by Relay 1."""
  personEdge(
    """The method to use when ordering \`Person\`."""
    orderBy: [PeopleOrderBy!]! = [PRIMARY_KEY_ASC]
  ): PeopleEdge
}

"""All input for the \`mutationOutTable\` mutation."""
input MutationOutTableInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
}

"""The output of our \`mutationOutTableSetof\` mutation."""
type MutationOutTableSetofPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String
  people: [Person]

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query
}

"""All input for the \`mutationOutTableSetof\` mutation."""
input MutationOutTableSetofInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
}

"""The output of our \`tableSetMutation\` mutation."""
type TableSetMutationPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String
  people: [Person]

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query
}

"""All input for the \`tableSetMutation\` mutation."""
input TableSetMutationInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
}

"""The output of our \`typeFunctionConnectionMutation\` mutation."""
type TypeFunctionConnectionMutationPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String
  types: [Type]

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query
}

"""All input for the \`typeFunctionConnectionMutation\` mutation."""
input TypeFunctionConnectionMutationInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
}

"""The output of our \`typeFunctionMutation\` mutation."""
type TypeFunctionMutationPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String
  type: Type

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`Type\`. May be used by Relay 1."""
  typeEdge(
    """The method to use when ordering \`Type\`."""
    orderBy: [TypesOrderBy!]! = [PRIMARY_KEY_ASC]
  ): TypesEdge

  """Reads a single \`Post\` that is related to this \`Type\`."""
  postBySmallint: Post

  """Reads a single \`Post\` that is related to this \`Type\`."""
  postById: Post
}

"""All input for the \`typeFunctionMutation\` mutation."""
input TypeFunctionMutationInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  id: Int
}

"""The output of our \`typeFunctionListMutation\` mutation."""
type TypeFunctionListMutationPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String
  types: [Type]

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query
}

"""All input for the \`typeFunctionListMutation\` mutation."""
input TypeFunctionListMutationInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
}

"""The output of our create \`Input\` mutation."""
type CreateInputPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`Input\` that was created by this mutation."""
  input: Input

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`Input\`. May be used by Relay 1."""
  inputEdge(
    """The method to use when ordering \`Input\`."""
    orderBy: [InputsOrderBy!]! = [PRIMARY_KEY_ASC]
  ): InputsEdge
}

"""All input for the create \`Input\` mutation."""
input CreateInputInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String

  """The \`Input\` to be created by this mutation."""
  input: InputInput!
}

"""An input for mutations affecting \`Input\`"""
input InputInput {
  id: Int
}

"""The output of our create \`Patch\` mutation."""
type CreatePatchPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`Patch\` that was created by this mutation."""
  patch: Patch

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`Patch\`. May be used by Relay 1."""
  patchEdge(
    """The method to use when ordering \`Patch\`."""
    orderBy: [PatchesOrderBy!]! = [PRIMARY_KEY_ASC]
  ): PatchesEdge
}

"""All input for the create \`Patch\` mutation."""
input CreatePatchInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String

  """The \`Patch\` to be created by this mutation."""
  patch: PatchInput!
}

"""An input for mutations affecting \`Patch\`"""
input PatchInput {
  id: Int
}

"""The output of our create \`Reserved\` mutation."""
type CreateReservedPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`Reserved\` that was created by this mutation."""
  reserved: Reserved

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`Reserved\`. May be used by Relay 1."""
  reservedEdge(
    """The method to use when ordering \`Reserved\`."""
    orderBy: [ReservedsOrderBy!]! = [PRIMARY_KEY_ASC]
  ): ReservedsEdge
}

"""All input for the create \`Reserved\` mutation."""
input CreateReservedInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String

  """The \`Reserved\` to be created by this mutation."""
  reserved: ReservedInput!
}

"""An input for mutations affecting \`Reserved\`"""
input ReservedInput {
  id: Int
}

"""The output of our create \`ReservedPatchRecord\` mutation."""
type CreateReservedPatchRecordPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`ReservedPatchRecord\` that was created by this mutation."""
  reservedPatchRecord: ReservedPatchRecord

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`ReservedPatchRecord\`. May be used by Relay 1."""
  reservedPatchRecordEdge(
    """The method to use when ordering \`ReservedPatchRecord\`."""
    orderBy: [ReservedPatchRecordsOrderBy!]! = [PRIMARY_KEY_ASC]
  ): ReservedPatchRecordsEdge
}

"""All input for the create \`ReservedPatchRecord\` mutation."""
input CreateReservedPatchRecordInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String

  """The \`ReservedPatchRecord\` to be created by this mutation."""
  reservedPatchRecord: ReservedPatchRecordInput!
}

"""An input for mutations affecting \`ReservedPatchRecord\`"""
input ReservedPatchRecordInput {
  id: Int
}

"""The output of our create \`ReservedInputRecord\` mutation."""
type CreateReservedInputRecordPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`ReservedInputRecord\` that was created by this mutation."""
  reservedInputRecord: ReservedInputRecord

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`ReservedInputRecord\`. May be used by Relay 1."""
  reservedInputRecordEdge(
    """The method to use when ordering \`ReservedInputRecord\`."""
    orderBy: [ReservedInputRecordsOrderBy!]! = [PRIMARY_KEY_ASC]
  ): ReservedInputRecordsEdge
}

"""All input for the create \`ReservedInputRecord\` mutation."""
input CreateReservedInputRecordInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String

  """The \`ReservedInputRecord\` to be created by this mutation."""
  reservedInputRecord: ReservedInputRecordInput!
}

"""An input for mutations affecting \`ReservedInputRecord\`"""
input ReservedInputRecordInput {
  id: Int
}

"""The output of our create \`DefaultValue\` mutation."""
type CreateDefaultValuePayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`DefaultValue\` that was created by this mutation."""
  defaultValue: DefaultValue

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`DefaultValue\`. May be used by Relay 1."""
  defaultValueEdge(
    """The method to use when ordering \`DefaultValue\`."""
    orderBy: [DefaultValuesOrderBy!]! = [PRIMARY_KEY_ASC]
  ): DefaultValuesEdge
}

"""All input for the create \`DefaultValue\` mutation."""
input CreateDefaultValueInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String

  """The \`DefaultValue\` to be created by this mutation."""
  defaultValue: DefaultValueInput!
}

"""An input for mutations affecting \`DefaultValue\`"""
input DefaultValueInput {
  id: Int
  nullValue: String
}

"""The output of our create \`ForeignKey\` mutation."""
type CreateForeignKeyPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`ForeignKey\` that was created by this mutation."""
  foreignKey: ForeignKey

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """Reads a single \`CompoundKey\` that is related to this \`ForeignKey\`."""
  compoundKeyByCompoundKey1AndCompoundKey2: CompoundKey

  """Reads a single \`Person\` that is related to this \`ForeignKey\`."""
  personByPersonId: Person
}

"""All input for the create \`ForeignKey\` mutation."""
input CreateForeignKeyInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String

  """The \`ForeignKey\` to be created by this mutation."""
  foreignKey: ForeignKeyInput!
}

"""An input for mutations affecting \`ForeignKey\`"""
input ForeignKeyInput {
  personId: Int
  compoundKey1: Int
  compoundKey2: Int
}

"""The output of our create \`NoPrimaryKey\` mutation."""
type CreateNoPrimaryKeyPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`NoPrimaryKey\` that was created by this mutation."""
  noPrimaryKey: NoPrimaryKey

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query
}

"""All input for the create \`NoPrimaryKey\` mutation."""
input CreateNoPrimaryKeyInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String

  """The \`NoPrimaryKey\` to be created by this mutation."""
  noPrimaryKey: NoPrimaryKeyInput!
}

"""An input for mutations affecting \`NoPrimaryKey\`"""
input NoPrimaryKeyInput {
  id: Int!
  str: String!
}

"""The output of our create \`Testview\` mutation."""
type CreateTestviewPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`Testview\` that was created by this mutation."""
  testview: Testview

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query
}

"""All input for the create \`Testview\` mutation."""
input CreateTestviewInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String

  """The \`Testview\` to be created by this mutation."""
  testview: TestviewInput!
}

"""An input for mutations affecting \`Testview\`"""
input TestviewInput {
  testviewid: Int
  col1: Int
  col2: Int
}

"""The output of our create \`MyTable\` mutation."""
type CreateMyTablePayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`MyTable\` that was created by this mutation."""
  myTable: MyTable

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`MyTable\`. May be used by Relay 1."""
  myTableEdge(
    """The method to use when ordering \`MyTable\`."""
    orderBy: [MyTablesOrderBy!]! = [PRIMARY_KEY_ASC]
  ): MyTablesEdge
}

"""All input for the create \`MyTable\` mutation."""
input CreateMyTableInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String

  """The \`MyTable\` to be created by this mutation."""
  myTable: MyTableInput!
}

"""An input for mutations affecting \`MyTable\`"""
input MyTableInput {
  id: Int
  jsonData: JSON
}

"""The output of our create \`PersonSecret\` mutation."""
type CreatePersonSecretPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`PersonSecret\` that was created by this mutation."""
  personSecret: PersonSecret @deprecated(reason: "This is deprecated (comment on table c.person_secret).")

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`PersonSecret\`. May be used by Relay 1."""
  personSecretEdge(
    """The method to use when ordering \`PersonSecret\`."""
    orderBy: [PersonSecretsOrderBy!]! = [PRIMARY_KEY_ASC]
  ): PersonSecretsEdge @deprecated(reason: "This is deprecated (comment on table c.person_secret).")

  """The \`Person\` this \`PersonSecret\` belongs to."""
  personByPersonId: Person
}

"""All input for the create \`PersonSecret\` mutation."""
input CreatePersonSecretInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String

  """The \`PersonSecret\` to be created by this mutation."""
  personSecret: PersonSecretInput!
}

"""An input for mutations affecting \`PersonSecret\`"""
input PersonSecretInput {
  personId: Int!

  """A secret held by the associated Person"""
  secret: String
}

"""The output of our create \`ViewTable\` mutation."""
type CreateViewTablePayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`ViewTable\` that was created by this mutation."""
  viewTable: ViewTable

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`ViewTable\`. May be used by Relay 1."""
  viewTableEdge(
    """The method to use when ordering \`ViewTable\`."""
    orderBy: [ViewTablesOrderBy!]! = [PRIMARY_KEY_ASC]
  ): ViewTablesEdge
}

"""All input for the create \`ViewTable\` mutation."""
input CreateViewTableInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String

  """The \`ViewTable\` to be created by this mutation."""
  viewTable: ViewTableInput!
}

"""An input for mutations affecting \`ViewTable\`"""
input ViewTableInput {
  id: Int
  col1: Int
  col2: Int
}

"""The output of our create \`CompoundKey\` mutation."""
type CreateCompoundKeyPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`CompoundKey\` that was created by this mutation."""
  compoundKey: CompoundKey

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`CompoundKey\`. May be used by Relay 1."""
  compoundKeyEdge(
    """The method to use when ordering \`CompoundKey\`."""
    orderBy: [CompoundKeysOrderBy!]! = [PRIMARY_KEY_ASC]
  ): CompoundKeysEdge

  """Reads a single \`Person\` that is related to this \`CompoundKey\`."""
  personByPersonId1: Person

  """Reads a single \`Person\` that is related to this \`CompoundKey\`."""
  personByPersonId2: Person
}

"""All input for the create \`CompoundKey\` mutation."""
input CreateCompoundKeyInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String

  """The \`CompoundKey\` to be created by this mutation."""
  compoundKey: CompoundKeyInput!
}

"""An input for mutations affecting \`CompoundKey\`"""
input CompoundKeyInput {
  personId2: Int!
  personId1: Int!
  extra: Boolean
}

"""The output of our create \`SimilarTable1\` mutation."""
type CreateSimilarTable1Payload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`SimilarTable1\` that was created by this mutation."""
  similarTable1: SimilarTable1

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`SimilarTable1\`. May be used by Relay 1."""
  similarTable1Edge(
    """The method to use when ordering \`SimilarTable1\`."""
    orderBy: [SimilarTable1SOrderBy!]! = [PRIMARY_KEY_ASC]
  ): SimilarTable1SEdge
}

"""All input for the create \`SimilarTable1\` mutation."""
input CreateSimilarTable1Input {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String

  """The \`SimilarTable1\` to be created by this mutation."""
  similarTable1: SimilarTable1Input!
}

"""An input for mutations affecting \`SimilarTable1\`"""
input SimilarTable1Input {
  id: Int
  col1: Int
  col2: Int
  col3: Int!
}

"""The output of our create \`SimilarTable2\` mutation."""
type CreateSimilarTable2Payload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`SimilarTable2\` that was created by this mutation."""
  similarTable2: SimilarTable2

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`SimilarTable2\`. May be used by Relay 1."""
  similarTable2Edge(
    """The method to use when ordering \`SimilarTable2\`."""
    orderBy: [SimilarTable2SOrderBy!]! = [PRIMARY_KEY_ASC]
  ): SimilarTable2SEdge
}

"""All input for the create \`SimilarTable2\` mutation."""
input CreateSimilarTable2Input {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String

  """The \`SimilarTable2\` to be created by this mutation."""
  similarTable2: SimilarTable2Input!
}

"""An input for mutations affecting \`SimilarTable2\`"""
input SimilarTable2Input {
  id: Int
  col3: Int!
  col4: Int
  col5: Int
}

"""The output of our create \`UpdatableView\` mutation."""
type CreateUpdatableViewPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`UpdatableView\` that was created by this mutation."""
  updatableView: UpdatableView

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query
}

"""All input for the create \`UpdatableView\` mutation."""
input CreateUpdatableViewInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String

  """The \`UpdatableView\` to be created by this mutation."""
  updatableView: UpdatableViewInput!
}

"""An input for mutations affecting \`UpdatableView\`"""
input UpdatableViewInput {
  x: Int
  name: String
  description: String

  """This is constantly 2"""
  constant: Int
}

"""The output of our create \`NullTestRecord\` mutation."""
type CreateNullTestRecordPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`NullTestRecord\` that was created by this mutation."""
  nullTestRecord: NullTestRecord

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`NullTestRecord\`. May be used by Relay 1."""
  nullTestRecordEdge(
    """The method to use when ordering \`NullTestRecord\`."""
    orderBy: [NullTestRecordsOrderBy!]! = [PRIMARY_KEY_ASC]
  ): NullTestRecordsEdge
}

"""All input for the create \`NullTestRecord\` mutation."""
input CreateNullTestRecordInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String

  """The \`NullTestRecord\` to be created by this mutation."""
  nullTestRecord: NullTestRecordInput!
}

"""An input for mutations affecting \`NullTestRecord\`"""
input NullTestRecordInput {
  id: Int
  nullableText: String
  nullableInt: Int
  nonNullText: String!
}

"""The output of our create \`EdgeCase\` mutation."""
type CreateEdgeCasePayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`EdgeCase\` that was created by this mutation."""
  edgeCase: EdgeCase

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query
}

"""All input for the create \`EdgeCase\` mutation."""
input CreateEdgeCaseInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String

  """The \`EdgeCase\` to be created by this mutation."""
  edgeCase: EdgeCaseInput!
}

"""An input for mutations affecting \`EdgeCase\`"""
input EdgeCaseInput {
  notNullHasDefault: Boolean
  wontCastEasy: Int
  rowId: Int
}

"""The output of our create \`LeftArm\` mutation."""
type CreateLeftArmPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`LeftArm\` that was created by this mutation."""
  leftArm: LeftArm

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`LeftArm\`. May be used by Relay 1."""
  leftArmEdge(
    """The method to use when ordering \`LeftArm\`."""
    orderBy: [LeftArmsOrderBy!]! = [PRIMARY_KEY_ASC]
  ): LeftArmsEdge

  """Reads a single \`Person\` that is related to this \`LeftArm\`."""
  personByPersonId: Person
}

"""All input for the create \`LeftArm\` mutation."""
input CreateLeftArmInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String

  """The \`LeftArm\` to be created by this mutation."""
  leftArm: LeftArmInput!
}

"""An input for mutations affecting \`LeftArm\`"""
input LeftArmInput {
  id: Int
  personId: Int
  lengthInMetres: Float
  mood: String
}

"""The output of our create \`Issue756\` mutation."""
type CreateIssue756Payload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`Issue756\` that was created by this mutation."""
  issue756: Issue756

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`Issue756\`. May be used by Relay 1."""
  issue756Edge(
    """The method to use when ordering \`Issue756\`."""
    orderBy: [Issue756SOrderBy!]! = [PRIMARY_KEY_ASC]
  ): Issue756SEdge
}

"""All input for the create \`Issue756\` mutation."""
input CreateIssue756Input {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String

  """The \`Issue756\` to be created by this mutation."""
  issue756: Issue756Input!
}

"""An input for mutations affecting \`Issue756\`"""
input Issue756Input {
  id: Int
  ts: NotNullTimestamp
}

"""The output of our create \`Post\` mutation."""
type CreatePostPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`Post\` that was created by this mutation."""
  post: Post

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`Post\`. May be used by Relay 1."""
  postEdge(
    """The method to use when ordering \`Post\`."""
    orderBy: [PostsOrderBy!]! = [PRIMARY_KEY_ASC]
  ): PostsEdge

  """Reads a single \`Person\` that is related to this \`Post\`."""
  personByAuthorId: Person
}

"""All input for the create \`Post\` mutation."""
input CreatePostInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String

  """The \`Post\` to be created by this mutation."""
  post: PostInput!
}

"""The output of our create \`Person\` mutation."""
type CreatePersonPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`Person\` that was created by this mutation."""
  person: Person

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`Person\`. May be used by Relay 1."""
  personEdge(
    """The method to use when ordering \`Person\`."""
    orderBy: [PeopleOrderBy!]! = [PRIMARY_KEY_ASC]
  ): PeopleEdge
}

"""All input for the create \`Person\` mutation."""
input CreatePersonInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String

  """The \`Person\` to be created by this mutation."""
  person: PersonInput!
}

"""An input for mutations affecting \`Person\`"""
input PersonInput {
  """The primary unique identifier for the person"""
  id: Int

  """The person’s name"""
  name: String!
  aliases: [String]
  about: String
  email: Email!
  site: WrappedUrlInput
  config: KeyValueHash
  lastLoginFromIp: InternetAddress
  lastLoginFromSubnet: String
  userMac: String
  createdAt: Datetime
}

"""The output of our create \`List\` mutation."""
type CreateListPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`List\` that was created by this mutation."""
  list: List

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`List\`. May be used by Relay 1."""
  listEdge(
    """The method to use when ordering \`List\`."""
    orderBy: [ListsOrderBy!]! = [PRIMARY_KEY_ASC]
  ): ListsEdge
}

"""All input for the create \`List\` mutation."""
input CreateListInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String

  """The \`List\` to be created by this mutation."""
  list: ListInput!
}

"""An input for mutations affecting \`List\`"""
input ListInput {
  id: Int
  intArray: [Int]
  intArrayNn: [Int]!
  enumArray: [Color]
  enumArrayNn: [Color]!
  dateArray: [Date]
  dateArrayNn: [Date]!
  timestamptzArray: [Datetime]
  timestamptzArrayNn: [Datetime]!
  compoundTypeArray: [CompoundTypeInput]
  compoundTypeArrayNn: [CompoundTypeInput]!
  byteaArray: [Base64EncodedBinary]
  byteaArrayNn: [Base64EncodedBinary]!
}

"""The output of our create \`Type\` mutation."""
type CreateTypePayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`Type\` that was created by this mutation."""
  type: Type

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`Type\`. May be used by Relay 1."""
  typeEdge(
    """The method to use when ordering \`Type\`."""
    orderBy: [TypesOrderBy!]! = [PRIMARY_KEY_ASC]
  ): TypesEdge

  """Reads a single \`Post\` that is related to this \`Type\`."""
  postBySmallint: Post

  """Reads a single \`Post\` that is related to this \`Type\`."""
  postById: Post
}

"""All input for the create \`Type\` mutation."""
input CreateTypeInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String

  """The \`Type\` to be created by this mutation."""
  type: TypeInput!
}

"""An input for mutations affecting \`Type\`"""
input TypeInput {
  id: Int
  smallint: Int!
  bigint: BigInt!
  numeric: BigFloat!
  decimal: BigFloat!
  boolean: Boolean!
  varchar: String!
  enum: Color!
  enumArray: [Color]!
  domain: AnInt!
  domain2: AnotherInt!
  textArray: [String]!
  json: JSON!
  jsonb: JSON!
  nullableRange: BigFloatRangeInput
  numrange: BigFloatRangeInput!
  daterange: DateRangeInput!
  anIntRange: AnIntRangeInput!
  timestamp: Datetime!
  timestamptz: Datetime!
  date: Date!
  time: Time!
  timetz: Time!
  interval: IntervalInput!
  intervalArray: [IntervalInput]!
  money: Float!
  compoundType: CompoundTypeInput!
  nestedCompoundType: NestedCompoundTypeInput!
  nullableCompoundType: CompoundTypeInput
  nullableNestedCompoundType: NestedCompoundTypeInput
  point: PointInput!
  nullablePoint: PointInput
  inet: InternetAddress
  cidr: String
  macaddr: String
  regproc: RegProc
  regprocedure: RegProcedure
  regoper: RegOper
  regoperator: RegOperator
  regclass: RegClass
  regtype: RegType
  regconfig: RegConfig
  regdictionary: RegDictionary
  textArrayDomain: [String]
  int8ArrayDomain: [BigInt]
  bytea: Base64EncodedBinary
  byteaArray: [Base64EncodedBinary]
  ltree: LTree
  ltreeArray: [LTree]
}

"""The output of our update \`Input\` mutation."""
type UpdateInputPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`Input\` that was updated by this mutation."""
  input: Input

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`Input\`. May be used by Relay 1."""
  inputEdge(
    """The method to use when ordering \`Input\`."""
    orderBy: [InputsOrderBy!]! = [PRIMARY_KEY_ASC]
  ): InputsEdge
}

"""All input for the \`updateInputById\` mutation."""
input UpdateInputByIdInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  id: Int!

  """
  An object where the defined keys will be set on the \`Input\` being updated.
  """
  inputPatch: InputPatch!
}

"""
Represents an update to a \`Input\`. Fields that are set will be updated.
"""
input InputPatch {
  id: Int
}

"""The output of our update \`Patch\` mutation."""
type UpdatePatchPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`Patch\` that was updated by this mutation."""
  patch: Patch

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`Patch\`. May be used by Relay 1."""
  patchEdge(
    """The method to use when ordering \`Patch\`."""
    orderBy: [PatchesOrderBy!]! = [PRIMARY_KEY_ASC]
  ): PatchesEdge
}

"""All input for the \`updatePatchById\` mutation."""
input UpdatePatchByIdInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  id: Int!

  """
  An object where the defined keys will be set on the \`Patch\` being updated.
  """
  patchPatch: PatchPatch!
}

"""
Represents an update to a \`Patch\`. Fields that are set will be updated.
"""
input PatchPatch {
  id: Int
}

"""The output of our update \`Reserved\` mutation."""
type UpdateReservedPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`Reserved\` that was updated by this mutation."""
  reserved: Reserved

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`Reserved\`. May be used by Relay 1."""
  reservedEdge(
    """The method to use when ordering \`Reserved\`."""
    orderBy: [ReservedsOrderBy!]! = [PRIMARY_KEY_ASC]
  ): ReservedsEdge
}

"""All input for the \`updateReservedById\` mutation."""
input UpdateReservedByIdInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  id: Int!

  """
  An object where the defined keys will be set on the \`Reserved\` being updated.
  """
  reservedPatch: ReservedPatch!
}

"""
Represents an update to a \`Reserved\`. Fields that are set will be updated.
"""
input ReservedPatch {
  id: Int
}

"""The output of our update \`ReservedPatchRecord\` mutation."""
type UpdateReservedPatchRecordPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`ReservedPatchRecord\` that was updated by this mutation."""
  reservedPatchRecord: ReservedPatchRecord

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`ReservedPatchRecord\`. May be used by Relay 1."""
  reservedPatchRecordEdge(
    """The method to use when ordering \`ReservedPatchRecord\`."""
    orderBy: [ReservedPatchRecordsOrderBy!]! = [PRIMARY_KEY_ASC]
  ): ReservedPatchRecordsEdge
}

"""All input for the \`updateReservedPatchRecordById\` mutation."""
input UpdateReservedPatchRecordByIdInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  id: Int!

  """
  An object where the defined keys will be set on the \`ReservedPatchRecord\` being updated.
  """
  reservedPatchRecordPatch: ReservedPatchRecordPatch!
}

"""
Represents an update to a \`ReservedPatchRecord\`. Fields that are set will be updated.
"""
input ReservedPatchRecordPatch {
  id: Int
}

"""The output of our update \`ReservedInputRecord\` mutation."""
type UpdateReservedInputRecordPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`ReservedInputRecord\` that was updated by this mutation."""
  reservedInputRecord: ReservedInputRecord

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`ReservedInputRecord\`. May be used by Relay 1."""
  reservedInputRecordEdge(
    """The method to use when ordering \`ReservedInputRecord\`."""
    orderBy: [ReservedInputRecordsOrderBy!]! = [PRIMARY_KEY_ASC]
  ): ReservedInputRecordsEdge
}

"""All input for the \`updateReservedInputRecordById\` mutation."""
input UpdateReservedInputRecordByIdInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  id: Int!

  """
  An object where the defined keys will be set on the \`ReservedInputRecord\` being updated.
  """
  reservedInputRecordPatch: ReservedInputRecordPatch!
}

"""
Represents an update to a \`ReservedInputRecord\`. Fields that are set will be updated.
"""
input ReservedInputRecordPatch {
  id: Int
}

"""The output of our update \`DefaultValue\` mutation."""
type UpdateDefaultValuePayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`DefaultValue\` that was updated by this mutation."""
  defaultValue: DefaultValue

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`DefaultValue\`. May be used by Relay 1."""
  defaultValueEdge(
    """The method to use when ordering \`DefaultValue\`."""
    orderBy: [DefaultValuesOrderBy!]! = [PRIMARY_KEY_ASC]
  ): DefaultValuesEdge
}

"""All input for the \`updateDefaultValueById\` mutation."""
input UpdateDefaultValueByIdInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  id: Int!

  """
  An object where the defined keys will be set on the \`DefaultValue\` being updated.
  """
  defaultValuePatch: DefaultValuePatch!
}

"""
Represents an update to a \`DefaultValue\`. Fields that are set will be updated.
"""
input DefaultValuePatch {
  id: Int
  nullValue: String
}

"""The output of our update \`NoPrimaryKey\` mutation."""
type UpdateNoPrimaryKeyPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`NoPrimaryKey\` that was updated by this mutation."""
  noPrimaryKey: NoPrimaryKey

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query
}

"""All input for the \`updateNoPrimaryKeyById\` mutation."""
input UpdateNoPrimaryKeyByIdInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  id: Int!

  """
  An object where the defined keys will be set on the \`NoPrimaryKey\` being updated.
  """
  noPrimaryKeyPatch: NoPrimaryKeyPatch!
}

"""
Represents an update to a \`NoPrimaryKey\`. Fields that are set will be updated.
"""
input NoPrimaryKeyPatch {
  id: Int
  str: String
}

"""The output of our update \`MyTable\` mutation."""
type UpdateMyTablePayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`MyTable\` that was updated by this mutation."""
  myTable: MyTable

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`MyTable\`. May be used by Relay 1."""
  myTableEdge(
    """The method to use when ordering \`MyTable\`."""
    orderBy: [MyTablesOrderBy!]! = [PRIMARY_KEY_ASC]
  ): MyTablesEdge
}

"""All input for the \`updateMyTableById\` mutation."""
input UpdateMyTableByIdInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  id: Int!

  """
  An object where the defined keys will be set on the \`MyTable\` being updated.
  """
  myTablePatch: MyTablePatch!
}

"""
Represents an update to a \`MyTable\`. Fields that are set will be updated.
"""
input MyTablePatch {
  id: Int
  jsonData: JSON
}

"""The output of our update \`PersonSecret\` mutation."""
type UpdatePersonSecretPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`PersonSecret\` that was updated by this mutation."""
  personSecret: PersonSecret

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`PersonSecret\`. May be used by Relay 1."""
  personSecretEdge(
    """The method to use when ordering \`PersonSecret\`."""
    orderBy: [PersonSecretsOrderBy!]! = [PRIMARY_KEY_ASC]
  ): PersonSecretsEdge @deprecated(reason: "This is deprecated (comment on table c.person_secret).")

  """The \`Person\` this \`PersonSecret\` belongs to."""
  personByPersonId: Person
}

"""All input for the \`updatePersonSecretByPersonId\` mutation."""
input UpdatePersonSecretByPersonIdInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  personId: Int!

  """
  An object where the defined keys will be set on the \`PersonSecret\` being updated.
  """
  personSecretPatch: PersonSecretPatch!
}

"""
Represents an update to a \`PersonSecret\`. Fields that are set will be updated.
"""
input PersonSecretPatch {
  personId: Int

  """A secret held by the associated Person"""
  secret: String
}

"""The output of our update \`ViewTable\` mutation."""
type UpdateViewTablePayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`ViewTable\` that was updated by this mutation."""
  viewTable: ViewTable

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`ViewTable\`. May be used by Relay 1."""
  viewTableEdge(
    """The method to use when ordering \`ViewTable\`."""
    orderBy: [ViewTablesOrderBy!]! = [PRIMARY_KEY_ASC]
  ): ViewTablesEdge
}

"""All input for the \`updateViewTableById\` mutation."""
input UpdateViewTableByIdInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  id: Int!

  """
  An object where the defined keys will be set on the \`ViewTable\` being updated.
  """
  viewTablePatch: ViewTablePatch!
}

"""
Represents an update to a \`ViewTable\`. Fields that are set will be updated.
"""
input ViewTablePatch {
  id: Int
  col1: Int
  col2: Int
}

"""The output of our update \`CompoundKey\` mutation."""
type UpdateCompoundKeyPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`CompoundKey\` that was updated by this mutation."""
  compoundKey: CompoundKey

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`CompoundKey\`. May be used by Relay 1."""
  compoundKeyEdge(
    """The method to use when ordering \`CompoundKey\`."""
    orderBy: [CompoundKeysOrderBy!]! = [PRIMARY_KEY_ASC]
  ): CompoundKeysEdge

  """Reads a single \`Person\` that is related to this \`CompoundKey\`."""
  personByPersonId1: Person

  """Reads a single \`Person\` that is related to this \`CompoundKey\`."""
  personByPersonId2: Person
}

"""All input for the \`updateCompoundKeyByPersonId1AndPersonId2\` mutation."""
input UpdateCompoundKeyByPersonId1AndPersonId2Input {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  personId1: Int!
  personId2: Int!

  """
  An object where the defined keys will be set on the \`CompoundKey\` being updated.
  """
  compoundKeyPatch: CompoundKeyPatch!
}

"""
Represents an update to a \`CompoundKey\`. Fields that are set will be updated.
"""
input CompoundKeyPatch {
  personId2: Int
  personId1: Int
  extra: Boolean
}

"""The output of our update \`SimilarTable1\` mutation."""
type UpdateSimilarTable1Payload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`SimilarTable1\` that was updated by this mutation."""
  similarTable1: SimilarTable1

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`SimilarTable1\`. May be used by Relay 1."""
  similarTable1Edge(
    """The method to use when ordering \`SimilarTable1\`."""
    orderBy: [SimilarTable1SOrderBy!]! = [PRIMARY_KEY_ASC]
  ): SimilarTable1SEdge
}

"""All input for the \`updateSimilarTable1ById\` mutation."""
input UpdateSimilarTable1ByIdInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  id: Int!

  """
  An object where the defined keys will be set on the \`SimilarTable1\` being updated.
  """
  similarTable1Patch: SimilarTable1Patch!
}

"""
Represents an update to a \`SimilarTable1\`. Fields that are set will be updated.
"""
input SimilarTable1Patch {
  id: Int
  col1: Int
  col2: Int
  col3: Int
}

"""The output of our update \`SimilarTable2\` mutation."""
type UpdateSimilarTable2Payload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`SimilarTable2\` that was updated by this mutation."""
  similarTable2: SimilarTable2

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`SimilarTable2\`. May be used by Relay 1."""
  similarTable2Edge(
    """The method to use when ordering \`SimilarTable2\`."""
    orderBy: [SimilarTable2SOrderBy!]! = [PRIMARY_KEY_ASC]
  ): SimilarTable2SEdge
}

"""All input for the \`updateSimilarTable2ById\` mutation."""
input UpdateSimilarTable2ByIdInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  id: Int!

  """
  An object where the defined keys will be set on the \`SimilarTable2\` being updated.
  """
  similarTable2Patch: SimilarTable2Patch!
}

"""
Represents an update to a \`SimilarTable2\`. Fields that are set will be updated.
"""
input SimilarTable2Patch {
  id: Int
  col3: Int
  col4: Int
  col5: Int
}

"""The output of our update \`NullTestRecord\` mutation."""
type UpdateNullTestRecordPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`NullTestRecord\` that was updated by this mutation."""
  nullTestRecord: NullTestRecord

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`NullTestRecord\`. May be used by Relay 1."""
  nullTestRecordEdge(
    """The method to use when ordering \`NullTestRecord\`."""
    orderBy: [NullTestRecordsOrderBy!]! = [PRIMARY_KEY_ASC]
  ): NullTestRecordsEdge
}

"""All input for the \`updateNullTestRecordById\` mutation."""
input UpdateNullTestRecordByIdInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  id: Int!

  """
  An object where the defined keys will be set on the \`NullTestRecord\` being updated.
  """
  nullTestRecordPatch: NullTestRecordPatch!
}

"""
Represents an update to a \`NullTestRecord\`. Fields that are set will be updated.
"""
input NullTestRecordPatch {
  id: Int
  nullableText: String
  nullableInt: Int
  nonNullText: String
}

"""The output of our update \`LeftArm\` mutation."""
type UpdateLeftArmPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`LeftArm\` that was updated by this mutation."""
  leftArm: LeftArm

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`LeftArm\`. May be used by Relay 1."""
  leftArmEdge(
    """The method to use when ordering \`LeftArm\`."""
    orderBy: [LeftArmsOrderBy!]! = [PRIMARY_KEY_ASC]
  ): LeftArmsEdge

  """Reads a single \`Person\` that is related to this \`LeftArm\`."""
  personByPersonId: Person
}

"""All input for the \`updateLeftArmById\` mutation."""
input UpdateLeftArmByIdInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  id: Int!

  """
  An object where the defined keys will be set on the \`LeftArm\` being updated.
  """
  leftArmPatch: LeftArmPatch!
}

"""
Represents an update to a \`LeftArm\`. Fields that are set will be updated.
"""
input LeftArmPatch {
  id: Int
  personId: Int
  lengthInMetres: Float
  mood: String
}

"""All input for the \`updateLeftArmByPersonId\` mutation."""
input UpdateLeftArmByPersonIdInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  personId: Int!

  """
  An object where the defined keys will be set on the \`LeftArm\` being updated.
  """
  leftArmPatch: LeftArmPatch!
}

"""The output of our update \`Issue756\` mutation."""
type UpdateIssue756Payload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`Issue756\` that was updated by this mutation."""
  issue756: Issue756

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`Issue756\`. May be used by Relay 1."""
  issue756Edge(
    """The method to use when ordering \`Issue756\`."""
    orderBy: [Issue756SOrderBy!]! = [PRIMARY_KEY_ASC]
  ): Issue756SEdge
}

"""All input for the \`updateIssue756ById\` mutation."""
input UpdateIssue756ByIdInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  id: Int!

  """
  An object where the defined keys will be set on the \`Issue756\` being updated.
  """
  issue756Patch: Issue756Patch!
}

"""
Represents an update to a \`Issue756\`. Fields that are set will be updated.
"""
input Issue756Patch {
  id: Int
  ts: NotNullTimestamp
}

"""The output of our update \`Post\` mutation."""
type UpdatePostPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`Post\` that was updated by this mutation."""
  post: Post

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`Post\`. May be used by Relay 1."""
  postEdge(
    """The method to use when ordering \`Post\`."""
    orderBy: [PostsOrderBy!]! = [PRIMARY_KEY_ASC]
  ): PostsEdge

  """Reads a single \`Person\` that is related to this \`Post\`."""
  personByAuthorId: Person
}

"""All input for the \`updatePostById\` mutation."""
input UpdatePostByIdInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  id: Int!

  """
  An object where the defined keys will be set on the \`Post\` being updated.
  """
  postPatch: PostPatch!
}

"""Represents an update to a \`Post\`. Fields that are set will be updated."""
input PostPatch {
  id: Int
  headline: String
  body: String
  authorId: Int
  enums: [AnEnum]
  comptypes: [ComptypeInput]
}

"""The output of our update \`Person\` mutation."""
type UpdatePersonPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`Person\` that was updated by this mutation."""
  person: Person

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`Person\`. May be used by Relay 1."""
  personEdge(
    """The method to use when ordering \`Person\`."""
    orderBy: [PeopleOrderBy!]! = [PRIMARY_KEY_ASC]
  ): PeopleEdge
}

"""All input for the \`updatePersonById\` mutation."""
input UpdatePersonByIdInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String

  """The primary unique identifier for the person"""
  id: Int!

  """
  An object where the defined keys will be set on the \`Person\` being updated.
  """
  personPatch: PersonPatch!
}

"""
Represents an update to a \`Person\`. Fields that are set will be updated.
"""
input PersonPatch {
  """The primary unique identifier for the person"""
  id: Int

  """The person’s name"""
  name: String
  aliases: [String]
  about: String
  email: Email
  site: WrappedUrlInput
  config: KeyValueHash
  lastLoginFromIp: InternetAddress
  lastLoginFromSubnet: String
  userMac: String
  createdAt: Datetime
}

"""All input for the \`updatePersonByEmail\` mutation."""
input UpdatePersonByEmailInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  email: Email!

  """
  An object where the defined keys will be set on the \`Person\` being updated.
  """
  personPatch: PersonPatch!
}

"""The output of our update \`List\` mutation."""
type UpdateListPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`List\` that was updated by this mutation."""
  list: List

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`List\`. May be used by Relay 1."""
  listEdge(
    """The method to use when ordering \`List\`."""
    orderBy: [ListsOrderBy!]! = [PRIMARY_KEY_ASC]
  ): ListsEdge
}

"""All input for the \`updateListById\` mutation."""
input UpdateListByIdInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  id: Int!

  """
  An object where the defined keys will be set on the \`List\` being updated.
  """
  listPatch: ListPatch!
}

"""Represents an update to a \`List\`. Fields that are set will be updated."""
input ListPatch {
  id: Int
  intArray: [Int]
  intArrayNn: [Int]
  enumArray: [Color]
  enumArrayNn: [Color]
  dateArray: [Date]
  dateArrayNn: [Date]
  timestamptzArray: [Datetime]
  timestamptzArrayNn: [Datetime]
  compoundTypeArray: [CompoundTypeInput]
  compoundTypeArrayNn: [CompoundTypeInput]
  byteaArray: [Base64EncodedBinary]
  byteaArrayNn: [Base64EncodedBinary]
}

"""The output of our update \`Type\` mutation."""
type UpdateTypePayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`Type\` that was updated by this mutation."""
  type: Type

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`Type\`. May be used by Relay 1."""
  typeEdge(
    """The method to use when ordering \`Type\`."""
    orderBy: [TypesOrderBy!]! = [PRIMARY_KEY_ASC]
  ): TypesEdge

  """Reads a single \`Post\` that is related to this \`Type\`."""
  postBySmallint: Post

  """Reads a single \`Post\` that is related to this \`Type\`."""
  postById: Post
}

"""All input for the \`updateTypeById\` mutation."""
input UpdateTypeByIdInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  id: Int!

  """
  An object where the defined keys will be set on the \`Type\` being updated.
  """
  typePatch: TypePatch!
}

"""Represents an update to a \`Type\`. Fields that are set will be updated."""
input TypePatch {
  id: Int
  smallint: Int
  bigint: BigInt
  numeric: BigFloat
  decimal: BigFloat
  boolean: Boolean
  varchar: String
  enum: Color
  enumArray: [Color]
  domain: AnInt
  domain2: AnotherInt
  textArray: [String]
  json: JSON
  jsonb: JSON
  nullableRange: BigFloatRangeInput
  numrange: BigFloatRangeInput
  daterange: DateRangeInput
  anIntRange: AnIntRangeInput
  timestamp: Datetime
  timestamptz: Datetime
  date: Date
  time: Time
  timetz: Time
  interval: IntervalInput
  intervalArray: [IntervalInput]
  money: Float
  compoundType: CompoundTypeInput
  nestedCompoundType: NestedCompoundTypeInput
  nullableCompoundType: CompoundTypeInput
  nullableNestedCompoundType: NestedCompoundTypeInput
  point: PointInput
  nullablePoint: PointInput
  inet: InternetAddress
  cidr: String
  macaddr: String
  regproc: RegProc
  regprocedure: RegProcedure
  regoper: RegOper
  regoperator: RegOperator
  regclass: RegClass
  regtype: RegType
  regconfig: RegConfig
  regdictionary: RegDictionary
  textArrayDomain: [String]
  int8ArrayDomain: [BigInt]
  bytea: Base64EncodedBinary
  byteaArray: [Base64EncodedBinary]
  ltree: LTree
  ltreeArray: [LTree]
}

"""The output of our delete \`Input\` mutation."""
type DeleteInputPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`Input\` that was deleted by this mutation."""
  input: Input

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`Input\`. May be used by Relay 1."""
  inputEdge(
    """The method to use when ordering \`Input\`."""
    orderBy: [InputsOrderBy!]! = [PRIMARY_KEY_ASC]
  ): InputsEdge
}

"""All input for the \`deleteInputById\` mutation."""
input DeleteInputByIdInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  id: Int!
}

"""The output of our delete \`Patch\` mutation."""
type DeletePatchPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`Patch\` that was deleted by this mutation."""
  patch: Patch

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`Patch\`. May be used by Relay 1."""
  patchEdge(
    """The method to use when ordering \`Patch\`."""
    orderBy: [PatchesOrderBy!]! = [PRIMARY_KEY_ASC]
  ): PatchesEdge
}

"""All input for the \`deletePatchById\` mutation."""
input DeletePatchByIdInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  id: Int!
}

"""The output of our delete \`Reserved\` mutation."""
type DeleteReservedPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`Reserved\` that was deleted by this mutation."""
  reserved: Reserved

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`Reserved\`. May be used by Relay 1."""
  reservedEdge(
    """The method to use when ordering \`Reserved\`."""
    orderBy: [ReservedsOrderBy!]! = [PRIMARY_KEY_ASC]
  ): ReservedsEdge
}

"""All input for the \`deleteReservedById\` mutation."""
input DeleteReservedByIdInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  id: Int!
}

"""The output of our delete \`ReservedPatchRecord\` mutation."""
type DeleteReservedPatchRecordPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`ReservedPatchRecord\` that was deleted by this mutation."""
  reservedPatchRecord: ReservedPatchRecord

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`ReservedPatchRecord\`. May be used by Relay 1."""
  reservedPatchRecordEdge(
    """The method to use when ordering \`ReservedPatchRecord\`."""
    orderBy: [ReservedPatchRecordsOrderBy!]! = [PRIMARY_KEY_ASC]
  ): ReservedPatchRecordsEdge
}

"""All input for the \`deleteReservedPatchRecordById\` mutation."""
input DeleteReservedPatchRecordByIdInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  id: Int!
}

"""The output of our delete \`ReservedInputRecord\` mutation."""
type DeleteReservedInputRecordPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`ReservedInputRecord\` that was deleted by this mutation."""
  reservedInputRecord: ReservedInputRecord

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`ReservedInputRecord\`. May be used by Relay 1."""
  reservedInputRecordEdge(
    """The method to use when ordering \`ReservedInputRecord\`."""
    orderBy: [ReservedInputRecordsOrderBy!]! = [PRIMARY_KEY_ASC]
  ): ReservedInputRecordsEdge
}

"""All input for the \`deleteReservedInputRecordById\` mutation."""
input DeleteReservedInputRecordByIdInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  id: Int!
}

"""The output of our delete \`DefaultValue\` mutation."""
type DeleteDefaultValuePayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`DefaultValue\` that was deleted by this mutation."""
  defaultValue: DefaultValue

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`DefaultValue\`. May be used by Relay 1."""
  defaultValueEdge(
    """The method to use when ordering \`DefaultValue\`."""
    orderBy: [DefaultValuesOrderBy!]! = [PRIMARY_KEY_ASC]
  ): DefaultValuesEdge
}

"""All input for the \`deleteDefaultValueById\` mutation."""
input DeleteDefaultValueByIdInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  id: Int!
}

"""The output of our delete \`NoPrimaryKey\` mutation."""
type DeleteNoPrimaryKeyPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`NoPrimaryKey\` that was deleted by this mutation."""
  noPrimaryKey: NoPrimaryKey

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query
}

"""All input for the \`deleteNoPrimaryKeyById\` mutation."""
input DeleteNoPrimaryKeyByIdInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  id: Int!
}

"""The output of our delete \`MyTable\` mutation."""
type DeleteMyTablePayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`MyTable\` that was deleted by this mutation."""
  myTable: MyTable

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`MyTable\`. May be used by Relay 1."""
  myTableEdge(
    """The method to use when ordering \`MyTable\`."""
    orderBy: [MyTablesOrderBy!]! = [PRIMARY_KEY_ASC]
  ): MyTablesEdge
}

"""All input for the \`deleteMyTableById\` mutation."""
input DeleteMyTableByIdInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  id: Int!
}

"""The output of our delete \`PersonSecret\` mutation."""
type DeletePersonSecretPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`PersonSecret\` that was deleted by this mutation."""
  personSecret: PersonSecret

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`PersonSecret\`. May be used by Relay 1."""
  personSecretEdge(
    """The method to use when ordering \`PersonSecret\`."""
    orderBy: [PersonSecretsOrderBy!]! = [PRIMARY_KEY_ASC]
  ): PersonSecretsEdge @deprecated(reason: "This is deprecated (comment on table c.person_secret).")

  """The \`Person\` this \`PersonSecret\` belongs to."""
  personByPersonId: Person
}

"""All input for the \`deletePersonSecretByPersonId\` mutation."""
input DeletePersonSecretByPersonIdInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  personId: Int!
}

"""The output of our delete \`ViewTable\` mutation."""
type DeleteViewTablePayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`ViewTable\` that was deleted by this mutation."""
  viewTable: ViewTable

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`ViewTable\`. May be used by Relay 1."""
  viewTableEdge(
    """The method to use when ordering \`ViewTable\`."""
    orderBy: [ViewTablesOrderBy!]! = [PRIMARY_KEY_ASC]
  ): ViewTablesEdge
}

"""All input for the \`deleteViewTableById\` mutation."""
input DeleteViewTableByIdInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  id: Int!
}

"""The output of our delete \`CompoundKey\` mutation."""
type DeleteCompoundKeyPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`CompoundKey\` that was deleted by this mutation."""
  compoundKey: CompoundKey

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`CompoundKey\`. May be used by Relay 1."""
  compoundKeyEdge(
    """The method to use when ordering \`CompoundKey\`."""
    orderBy: [CompoundKeysOrderBy!]! = [PRIMARY_KEY_ASC]
  ): CompoundKeysEdge

  """Reads a single \`Person\` that is related to this \`CompoundKey\`."""
  personByPersonId1: Person

  """Reads a single \`Person\` that is related to this \`CompoundKey\`."""
  personByPersonId2: Person
}

"""All input for the \`deleteCompoundKeyByPersonId1AndPersonId2\` mutation."""
input DeleteCompoundKeyByPersonId1AndPersonId2Input {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  personId1: Int!
  personId2: Int!
}

"""The output of our delete \`SimilarTable1\` mutation."""
type DeleteSimilarTable1Payload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`SimilarTable1\` that was deleted by this mutation."""
  similarTable1: SimilarTable1

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`SimilarTable1\`. May be used by Relay 1."""
  similarTable1Edge(
    """The method to use when ordering \`SimilarTable1\`."""
    orderBy: [SimilarTable1SOrderBy!]! = [PRIMARY_KEY_ASC]
  ): SimilarTable1SEdge
}

"""All input for the \`deleteSimilarTable1ById\` mutation."""
input DeleteSimilarTable1ByIdInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  id: Int!
}

"""The output of our delete \`SimilarTable2\` mutation."""
type DeleteSimilarTable2Payload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`SimilarTable2\` that was deleted by this mutation."""
  similarTable2: SimilarTable2

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`SimilarTable2\`. May be used by Relay 1."""
  similarTable2Edge(
    """The method to use when ordering \`SimilarTable2\`."""
    orderBy: [SimilarTable2SOrderBy!]! = [PRIMARY_KEY_ASC]
  ): SimilarTable2SEdge
}

"""All input for the \`deleteSimilarTable2ById\` mutation."""
input DeleteSimilarTable2ByIdInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  id: Int!
}

"""The output of our delete \`NullTestRecord\` mutation."""
type DeleteNullTestRecordPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`NullTestRecord\` that was deleted by this mutation."""
  nullTestRecord: NullTestRecord

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`NullTestRecord\`. May be used by Relay 1."""
  nullTestRecordEdge(
    """The method to use when ordering \`NullTestRecord\`."""
    orderBy: [NullTestRecordsOrderBy!]! = [PRIMARY_KEY_ASC]
  ): NullTestRecordsEdge
}

"""All input for the \`deleteNullTestRecordById\` mutation."""
input DeleteNullTestRecordByIdInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  id: Int!
}

"""The output of our delete \`LeftArm\` mutation."""
type DeleteLeftArmPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`LeftArm\` that was deleted by this mutation."""
  leftArm: LeftArm

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`LeftArm\`. May be used by Relay 1."""
  leftArmEdge(
    """The method to use when ordering \`LeftArm\`."""
    orderBy: [LeftArmsOrderBy!]! = [PRIMARY_KEY_ASC]
  ): LeftArmsEdge

  """Reads a single \`Person\` that is related to this \`LeftArm\`."""
  personByPersonId: Person
}

"""All input for the \`deleteLeftArmById\` mutation."""
input DeleteLeftArmByIdInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  id: Int!
}

"""All input for the \`deleteLeftArmByPersonId\` mutation."""
input DeleteLeftArmByPersonIdInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  personId: Int!
}

"""The output of our delete \`Issue756\` mutation."""
type DeleteIssue756Payload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`Issue756\` that was deleted by this mutation."""
  issue756: Issue756

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`Issue756\`. May be used by Relay 1."""
  issue756Edge(
    """The method to use when ordering \`Issue756\`."""
    orderBy: [Issue756SOrderBy!]! = [PRIMARY_KEY_ASC]
  ): Issue756SEdge
}

"""All input for the \`deleteIssue756ById\` mutation."""
input DeleteIssue756ByIdInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  id: Int!
}

"""The output of our delete \`Post\` mutation."""
type DeletePostPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`Post\` that was deleted by this mutation."""
  post: Post

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`Post\`. May be used by Relay 1."""
  postEdge(
    """The method to use when ordering \`Post\`."""
    orderBy: [PostsOrderBy!]! = [PRIMARY_KEY_ASC]
  ): PostsEdge

  """Reads a single \`Person\` that is related to this \`Post\`."""
  personByAuthorId: Person
}

"""All input for the \`deletePostById\` mutation."""
input DeletePostByIdInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  id: Int!
}

"""The output of our delete \`Person\` mutation."""
type DeletePersonPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`Person\` that was deleted by this mutation."""
  person: Person

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`Person\`. May be used by Relay 1."""
  personEdge(
    """The method to use when ordering \`Person\`."""
    orderBy: [PeopleOrderBy!]! = [PRIMARY_KEY_ASC]
  ): PeopleEdge
}

"""All input for the \`deletePersonById\` mutation."""
input DeletePersonByIdInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String

  """The primary unique identifier for the person"""
  id: Int!
}

"""All input for the \`deletePersonByEmail\` mutation."""
input DeletePersonByEmailInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  email: Email!
}

"""The output of our delete \`List\` mutation."""
type DeleteListPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`List\` that was deleted by this mutation."""
  list: List

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`List\`. May be used by Relay 1."""
  listEdge(
    """The method to use when ordering \`List\`."""
    orderBy: [ListsOrderBy!]! = [PRIMARY_KEY_ASC]
  ): ListsEdge
}

"""All input for the \`deleteListById\` mutation."""
input DeleteListByIdInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  id: Int!
}

"""The output of our delete \`Type\` mutation."""
type DeleteTypePayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`Type\` that was deleted by this mutation."""
  type: Type

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`Type\`. May be used by Relay 1."""
  typeEdge(
    """The method to use when ordering \`Type\`."""
    orderBy: [TypesOrderBy!]! = [PRIMARY_KEY_ASC]
  ): TypesEdge

  """Reads a single \`Post\` that is related to this \`Type\`."""
  postBySmallint: Post

  """Reads a single \`Post\` that is related to this \`Type\`."""
  postById: Post
}

"""All input for the \`deleteTypeById\` mutation."""
input DeleteTypeByIdInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  id: Int!
}`;
export const plans = {
  Query: {
    __assertStep() {
      return true;
    },
    query() {
      return rootValue();
    },
    inputById(_$root, {
      $id
    }) {
      return resource_inputsPgResource.get({
        id: $id
      });
    },
    patchById(_$root, {
      $id
    }) {
      return resource_patchsPgResource.get({
        id: $id
      });
    },
    reservedById(_$root, {
      $id
    }) {
      return resource_reservedPgResource.get({
        id: $id
      });
    },
    reservedPatchRecordById(_$root, {
      $id
    }) {
      return resource_reservedPatchsPgResource.get({
        id: $id
      });
    },
    reservedInputRecordById(_$root, {
      $id
    }) {
      return resource_reserved_inputPgResource.get({
        id: $id
      });
    },
    defaultValueById(_$root, {
      $id
    }) {
      return resource_default_valuePgResource.get({
        id: $id
      });
    },
    noPrimaryKeyById(_$root, {
      $id
    }) {
      return resource_no_primary_keyPgResource.get({
        id: $id
      });
    },
    uniqueForeignKeyByCompoundKey1AndCompoundKey2(_$root, {
      $compoundKey1,
      $compoundKey2
    }) {
      return resource_unique_foreign_keyPgResource.get({
        compound_key_1: $compoundKey1,
        compound_key_2: $compoundKey2
      });
    },
    myTableById(_$root, {
      $id
    }) {
      return resource_my_tablePgResource.get({
        id: $id
      });
    },
    personSecretByPersonId(_$root, {
      $personId
    }) {
      return resource_person_secretPgResource.get({
        person_id: $personId
      });
    },
    viewTableById(_$root, {
      $id
    }) {
      return resource_view_tablePgResource.get({
        id: $id
      });
    },
    compoundKeyByPersonId1AndPersonId2(_$root, {
      $personId1,
      $personId2
    }) {
      return resource_compound_keyPgResource.get({
        person_id_1: $personId1,
        person_id_2: $personId2
      });
    },
    similarTable1ById(_$root, {
      $id
    }) {
      return resource_similar_table_1PgResource.get({
        id: $id
      });
    },
    similarTable2ById(_$root, {
      $id
    }) {
      return resource_similar_table_2PgResource.get({
        id: $id
      });
    },
    nullTestRecordById(_$root, {
      $id
    }) {
      return resource_null_test_recordPgResource.get({
        id: $id
      });
    },
    leftArmById(_$root, {
      $id
    }) {
      return resource_left_armPgResource.get({
        id: $id
      });
    },
    leftArmByPersonId(_$root, {
      $personId
    }) {
      return resource_left_armPgResource.get({
        person_id: $personId
      });
    },
    issue756ById(_$root, {
      $id
    }) {
      return resource_issue756PgResource.get({
        id: $id
      });
    },
    postById(_$root, {
      $id
    }) {
      return resource_postPgResource.get({
        id: $id
      });
    },
    personById(_$root, {
      $id
    }) {
      return resource_personPgResource.get({
        id: $id
      });
    },
    personByEmail(_$root, {
      $email
    }) {
      return resource_personPgResource.get({
        email: $email
      });
    },
    listById(_$root, {
      $id
    }) {
      return resource_listsPgResource.get({
        id: $id
      });
    },
    typeById(_$root, {
      $id
    }) {
      return resource_typesPgResource.get({
        id: $id
      });
    },
    currentUserId($root, args, _info) {
      const selectArgs = makeArgs_person_computed_out(args);
      return resource_current_user_idPgResource.execute(selectArgs);
    },
    funcOut($root, args, _info) {
      const selectArgs = makeArgs_person_computed_out(args);
      return resource_func_outPgResource.execute(selectArgs);
    },
    funcOutSetof: {
      plan($parent, args, info) {
        const $select = getSelectPlanFromParentAndArgs($parent, args, info);
        return connection($select, {
          cursorPlan($item) {
            return $item.getParentStep ? $item.getParentStep().cursor() : $item.cursor();
          }
        });
      },
      args: {
        first(_, $connection, arg) {
          $connection.setFirst(arg.getRaw());
        },
        last(_, $connection, val) {
          $connection.setLast(val.getRaw());
        },
        offset(_, $connection, val) {
          $connection.setOffset(val.getRaw());
        },
        before(_, $connection, val) {
          $connection.setBefore(val.getRaw());
        },
        after(_, $connection, val) {
          $connection.setAfter(val.getRaw());
        }
      }
    },
    funcOutUnnamed($root, args, _info) {
      const selectArgs = makeArgs_person_computed_out(args);
      return resource_func_out_unnamedPgResource.execute(selectArgs);
    },
    noArgsQuery($root, args, _info) {
      const selectArgs = makeArgs_person_computed_out(args);
      return resource_no_args_queryPgResource.execute(selectArgs);
    },
    queryIntervalSet: {
      plan($parent, args, info) {
        const $select = getSelectPlanFromParentAndArgs2($parent, args, info);
        return connection($select, {
          cursorPlan($item) {
            return $item.getParentStep ? $item.getParentStep().cursor() : $item.cursor();
          }
        });
      },
      args: {
        first(_, $connection, arg) {
          $connection.setFirst(arg.getRaw());
        },
        last(_, $connection, val) {
          $connection.setLast(val.getRaw());
        },
        offset(_, $connection, val) {
          $connection.setOffset(val.getRaw());
        },
        before(_, $connection, val) {
          $connection.setBefore(val.getRaw());
        },
        after(_, $connection, val) {
          $connection.setAfter(val.getRaw());
        }
      }
    },
    staticBigInteger: {
      plan($parent, args, info) {
        const $select = getSelectPlanFromParentAndArgs3($parent, args, info);
        return connection($select, {
          cursorPlan($item) {
            return $item.getParentStep ? $item.getParentStep().cursor() : $item.cursor();
          }
        });
      },
      args: {
        first(_, $connection, arg) {
          $connection.setFirst(arg.getRaw());
        },
        last(_, $connection, val) {
          $connection.setLast(val.getRaw());
        },
        offset(_, $connection, val) {
          $connection.setOffset(val.getRaw());
        },
        before(_, $connection, val) {
          $connection.setBefore(val.getRaw());
        },
        after(_, $connection, val) {
          $connection.setAfter(val.getRaw());
        }
      }
    },
    funcInOut($root, args, _info) {
      const selectArgs = makeArgs_func_in_out(args);
      return resource_func_in_outPgResource.execute(selectArgs);
    },
    funcReturnsTableOneCol: {
      plan($parent, args, info) {
        const $select = getSelectPlanFromParentAndArgs4($parent, args, info);
        return connection($select, {
          cursorPlan($item) {
            return $item.getParentStep ? $item.getParentStep().cursor() : $item.cursor();
          }
        });
      },
      args: {
        first(_, $connection, arg) {
          $connection.setFirst(arg.getRaw());
        },
        last(_, $connection, val) {
          $connection.setLast(val.getRaw());
        },
        offset(_, $connection, val) {
          $connection.setOffset(val.getRaw());
        },
        before(_, $connection, val) {
          $connection.setBefore(val.getRaw());
        },
        after(_, $connection, val) {
          $connection.setAfter(val.getRaw());
        }
      }
    },
    jsonIdentity($root, args, _info) {
      const selectArgs = makeArgs_json_identity(args);
      return resource_json_identityPgResource.execute(selectArgs);
    },
    jsonbIdentity($root, args, _info) {
      const selectArgs = makeArgs_jsonb_identity(args);
      return resource_jsonb_identityPgResource.execute(selectArgs);
    },
    add1Query($root, args, _info) {
      const selectArgs = makeArgs_add_1_query(args);
      return resource_add_1_queryPgResource.execute(selectArgs);
    },
    add2Query($root, args, _info) {
      const selectArgs = makeArgs_add_2_query(args);
      return resource_add_2_queryPgResource.execute(selectArgs);
    },
    add3Query($root, args, _info) {
      const selectArgs = makeArgs_add_3_query(args);
      return resource_add_3_queryPgResource.execute(selectArgs);
    },
    add4Query($root, args, _info) {
      const selectArgs = makeArgs_add_4_query(args);
      return resource_add_4_queryPgResource.execute(selectArgs);
    },
    funcInInout($root, args, _info) {
      const selectArgs = makeArgs_func_in_inout(args);
      return resource_func_in_inoutPgResource.execute(selectArgs);
    },
    funcOutOut($root, args, _info) {
      const selectArgs = makeArgs_person_computed_out(args);
      return resource_func_out_outPgResource.execute(selectArgs);
    },
    funcOutOutSetof: {
      plan($parent, args, info) {
        const $select = getSelectPlanFromParentAndArgs5($parent, args, info);
        return connection($select, {
          cursorPlan($item) {
            return $item.getParentStep ? $item.getParentStep().cursor() : $item.cursor();
          }
        });
      },
      args: {
        first(_, $connection, arg) {
          $connection.setFirst(arg.getRaw());
        },
        last(_, $connection, val) {
          $connection.setLast(val.getRaw());
        },
        offset(_, $connection, val) {
          $connection.setOffset(val.getRaw());
        },
        before(_, $connection, val) {
          $connection.setBefore(val.getRaw());
        },
        after(_, $connection, val) {
          $connection.setAfter(val.getRaw());
        }
      }
    },
    funcOutOutUnnamed($root, args, _info) {
      const selectArgs = makeArgs_person_computed_out(args);
      return resource_func_out_out_unnamedPgResource.execute(selectArgs);
    },
    searchTestSummariesList: {
      plan($root, args, _info) {
        const selectArgs = makeArgs_person_computed_out(args);
        return resource_search_test_summariesPgResource.execute(selectArgs);
      },
      args: {
        first(_, $connection, arg) {
          $connection.setFirst(arg.getRaw());
        },
        offset(_, $connection, val) {
          $connection.setOffset(val.getRaw());
        }
      }
    },
    optionalMissingMiddle1($root, args, _info) {
      const selectArgs = makeArgs_optional_missing_middle_1(args);
      return resource_optional_missing_middle_1PgResource.execute(selectArgs);
    },
    optionalMissingMiddle2($root, args, _info) {
      const selectArgs = makeArgs_optional_missing_middle_2(args);
      return resource_optional_missing_middle_2PgResource.execute(selectArgs);
    },
    optionalMissingMiddle3($root, args, _info) {
      const selectArgs = makeArgs_optional_missing_middle_3(args);
      return resource_optional_missing_middle_3PgResource.execute(selectArgs);
    },
    optionalMissingMiddle4($root, args, _info) {
      const selectArgs = makeArgs_optional_missing_middle_4(args);
      return resource_optional_missing_middle_4PgResource.execute(selectArgs);
    },
    optionalMissingMiddle5($root, args, _info) {
      const selectArgs = makeArgs_optional_missing_middle_5(args);
      return resource_optional_missing_middle_5PgResource.execute(selectArgs);
    },
    funcOutUnnamedOutOutUnnamed($root, args, _info) {
      const selectArgs = makeArgs_person_computed_out(args);
      return resource_func_out_unnamed_out_out_unnamedPgResource.execute(selectArgs);
    },
    intSetQuery: {
      plan($parent, args, info) {
        const $select = getSelectPlanFromParentAndArgs6($parent, args, info);
        return connection($select, {
          cursorPlan($item) {
            return $item.getParentStep ? $item.getParentStep().cursor() : $item.cursor();
          }
        });
      },
      args: {
        first(_, $connection, arg) {
          $connection.setFirst(arg.getRaw());
        },
        last(_, $connection, val) {
          $connection.setLast(val.getRaw());
        },
        offset(_, $connection, val) {
          $connection.setOffset(val.getRaw());
        },
        before(_, $connection, val) {
          $connection.setBefore(val.getRaw());
        },
        after(_, $connection, val) {
          $connection.setAfter(val.getRaw());
        }
      }
    },
    funcReturnsTableMultiCol: {
      plan($parent, args, info) {
        const $select = getSelectPlanFromParentAndArgs7($parent, args, info);
        return connection($select, {
          cursorPlan($item) {
            return $item.getParentStep ? $item.getParentStep().cursor() : $item.cursor();
          }
        });
      },
      args: {
        first(_, $connection, arg) {
          $connection.setFirst(arg.getRaw());
        },
        last(_, $connection, val) {
          $connection.setLast(val.getRaw());
        },
        offset(_, $connection, val) {
          $connection.setOffset(val.getRaw());
        },
        before(_, $connection, val) {
          $connection.setBefore(val.getRaw());
        },
        after(_, $connection, val) {
          $connection.setAfter(val.getRaw());
        }
      }
    },
    queryIntervalArray($root, args, _info) {
      const selectArgs = makeArgs_person_computed_out(args);
      return resource_query_interval_arrayPgResource.execute(selectArgs);
    },
    queryTextArray($root, args, _info) {
      const selectArgs = makeArgs_person_computed_out(args);
      return resource_query_text_arrayPgResource.execute(selectArgs);
    },
    returnTableWithoutGrants($root, args, _info) {
      const selectArgs = makeArgs_person_computed_out(args);
      return resource_return_table_without_grantsPgResource.execute(selectArgs);
    },
    typesQuery($root, args, _info) {
      const selectArgs = makeArgs_types_query(args);
      return resource_types_queryPgResource.execute(selectArgs);
    },
    funcOutOutCompoundType($root, args, _info) {
      const selectArgs = makeArgs_func_out_out_compound_type(args);
      return resource_func_out_out_compound_typePgResource.execute(selectArgs);
    },
    queryOutputTwoRows($root, args, _info) {
      const selectArgs = makeArgs_query_output_two_rows(args);
      return resource_query_output_two_rowsPgResource.execute(selectArgs);
    },
    compoundTypeSetQuery: {
      plan($parent, args, info) {
        const $select = getSelectPlanFromParentAndArgs8($parent, args, info);
        return connection($select, {
          cursorPlan($item) {
            return $item.getParentStep ? $item.getParentStep().cursor() : $item.cursor();
          }
        });
      },
      args: {
        first(_, $connection, arg) {
          $connection.setFirst(arg.getRaw());
        },
        last(_, $connection, val) {
          $connection.setLast(val.getRaw());
        },
        offset(_, $connection, val) {
          $connection.setOffset(val.getRaw());
        },
        before(_, $connection, val) {
          $connection.setBefore(val.getRaw());
        },
        after(_, $connection, val) {
          $connection.setAfter(val.getRaw());
        }
      }
    },
    compoundTypeQuery($root, args, _info) {
      const selectArgs = makeArgs_compound_type_query(args);
      return resource_compound_type_queryPgResource.execute(selectArgs);
    },
    tableQuery($root, args, _info) {
      const selectArgs = makeArgs_table_query(args);
      return resource_table_queryPgResource.execute(selectArgs);
    },
    queryCompoundTypeArray($root, args, _info) {
      const selectArgs = makeArgs_query_compound_type_array(args);
      return resource_query_compound_type_arrayPgResource.execute(selectArgs);
    },
    compoundTypeArrayQuery($root, args, _info) {
      const selectArgs = makeArgs_compound_type_array_query(args);
      return resource_compound_type_array_queryPgResource.execute(selectArgs);
    },
    funcOutComplex($root, args, _info) {
      const selectArgs = makeArgs_func_out_complex(args);
      return resource_func_out_complexPgResource.execute(selectArgs);
    },
    funcOutComplexSetof: {
      plan($parent, args, info) {
        const $select = getSelectPlanFromParentAndArgs9($parent, args, info);
        return connection($select, {
          cursorPlan($item) {
            return $item.getParentStep ? $item.getParentStep().cursor() : $item.cursor();
          }
        });
      },
      args: {
        first(_, $connection, arg) {
          $connection.setFirst(arg.getRaw());
        },
        last(_, $connection, val) {
          $connection.setLast(val.getRaw());
        },
        offset(_, $connection, val) {
          $connection.setOffset(val.getRaw());
        },
        before(_, $connection, val) {
          $connection.setBefore(val.getRaw());
        },
        after(_, $connection, val) {
          $connection.setAfter(val.getRaw());
        }
      }
    },
    badlyBehavedFunction: {
      plan($parent, args, info) {
        const $select = getSelectPlanFromParentAndArgs10($parent, args, info);
        return connection($select, {
          cursorPlan($item) {
            return $item.getParentStep ? $item.getParentStep().cursor() : $item.cursor();
          }
        });
      },
      args: {
        first(_, $connection, arg) {
          $connection.setFirst(arg.getRaw());
        },
        last(_, $connection, val) {
          $connection.setLast(val.getRaw());
        },
        offset(_, $connection, val) {
          $connection.setOffset(val.getRaw());
        },
        before(_, $connection, val) {
          $connection.setBefore(val.getRaw());
        },
        after(_, $connection, val) {
          $connection.setAfter(val.getRaw());
        }
      }
    },
    funcOutTable($root, args, _info) {
      const selectArgs = makeArgs_person_computed_out(args);
      return resource_func_out_tablePgResource.execute(selectArgs);
    },
    funcOutTableSetof: {
      plan($parent, args, info) {
        const $select = getSelectPlanFromParentAndArgs11($parent, args, info);
        return connection($select, {
          cursorPlan($item) {
            return $item.getParentStep ? $item.getParentStep().cursor() : $item.cursor();
          }
        });
      },
      args: {
        first(_, $connection, arg) {
          $connection.setFirst(arg.getRaw());
        },
        last(_, $connection, val) {
          $connection.setLast(val.getRaw());
        },
        offset(_, $connection, val) {
          $connection.setOffset(val.getRaw());
        },
        before(_, $connection, val) {
          $connection.setBefore(val.getRaw());
        },
        after(_, $connection, val) {
          $connection.setAfter(val.getRaw());
        }
      }
    },
    tableSetQuery: {
      plan($parent, args, info) {
        const $select = getSelectPlanFromParentAndArgs12($parent, args, info);
        return connection($select, {
          cursorPlan($item) {
            return $item.getParentStep ? $item.getParentStep().cursor() : $item.cursor();
          }
        });
      },
      args: {
        first(_, $connection, arg) {
          $connection.setFirst(arg.getRaw());
        },
        last(_, $connection, val) {
          $connection.setLast(val.getRaw());
        },
        offset(_, $connection, val) {
          $connection.setOffset(val.getRaw());
        },
        before(_, $connection, val) {
          $connection.setBefore(val.getRaw());
        },
        after(_, $connection, val) {
          $connection.setAfter(val.getRaw());
        },
        condition(_condition, $connection, arg) {
          const $select = $connection.getSubplan();
          arg.apply($select, qbWhereBuilder);
        },
        orderBy(parent, $connection, value) {
          const $select = $connection.getSubplan();
          value.apply($select);
        }
      }
    },
    tableSetQueryPlpgsql: {
      plan($parent, args, info) {
        const $select = getSelectPlanFromParentAndArgs13($parent, args, info);
        return connection($select, {
          cursorPlan($item) {
            return $item.getParentStep ? $item.getParentStep().cursor() : $item.cursor();
          }
        });
      },
      args: {
        first(_, $connection, arg) {
          $connection.setFirst(arg.getRaw());
        },
        last(_, $connection, val) {
          $connection.setLast(val.getRaw());
        },
        offset(_, $connection, val) {
          $connection.setOffset(val.getRaw());
        },
        before(_, $connection, val) {
          $connection.setBefore(val.getRaw());
        },
        after(_, $connection, val) {
          $connection.setAfter(val.getRaw());
        }
      }
    },
    typeFunctionConnection: {
      plan($parent, args, info) {
        const $select = getSelectPlanFromParentAndArgs14($parent, args, info);
        return connection($select, {
          cursorPlan($item) {
            return $item.getParentStep ? $item.getParentStep().cursor() : $item.cursor();
          }
        });
      },
      args: {
        first(_, $connection, arg) {
          $connection.setFirst(arg.getRaw());
        },
        last(_, $connection, val) {
          $connection.setLast(val.getRaw());
        },
        offset(_, $connection, val) {
          $connection.setOffset(val.getRaw());
        },
        before(_, $connection, val) {
          $connection.setBefore(val.getRaw());
        },
        after(_, $connection, val) {
          $connection.setAfter(val.getRaw());
        }
      }
    },
    typeFunction($root, args, _info) {
      const selectArgs = makeArgs_type_function(args);
      return resource_type_functionPgResource.execute(selectArgs);
    },
    typeFunctionList($root, args, _info) {
      const selectArgs = makeArgs_person_computed_out(args);
      return resource_type_function_listPgResource.execute(selectArgs);
    },
    allNonUpdatableViews: {
      plan() {
        return connection(resource_non_updatable_viewPgResource.find());
      },
      args: {
        first(_, $connection, arg) {
          $connection.setFirst(arg.getRaw());
        },
        last(_, $connection, val) {
          $connection.setLast(val.getRaw());
        },
        offset(_, $connection, val) {
          $connection.setOffset(val.getRaw());
        },
        before(_, $connection, val) {
          $connection.setBefore(val.getRaw());
        },
        after(_, $connection, val) {
          $connection.setAfter(val.getRaw());
        },
        condition(_condition, $connection, arg) {
          const $select = $connection.getSubplan();
          arg.apply($select, qbWhereBuilder);
        },
        orderBy(parent, $connection, value) {
          const $select = $connection.getSubplan();
          value.apply($select);
        }
      }
    },
    allInputs: {
      plan() {
        return connection(resource_inputsPgResource.find());
      },
      args: {
        first(_, $connection, arg) {
          $connection.setFirst(arg.getRaw());
        },
        last(_, $connection, val) {
          $connection.setLast(val.getRaw());
        },
        offset(_, $connection, val) {
          $connection.setOffset(val.getRaw());
        },
        before(_, $connection, val) {
          $connection.setBefore(val.getRaw());
        },
        after(_, $connection, val) {
          $connection.setAfter(val.getRaw());
        },
        condition(_condition, $connection, arg) {
          const $select = $connection.getSubplan();
          arg.apply($select, qbWhereBuilder);
        },
        orderBy(parent, $connection, value) {
          const $select = $connection.getSubplan();
          value.apply($select);
        }
      }
    },
    allPatches: {
      plan() {
        return connection(resource_patchsPgResource.find());
      },
      args: {
        first(_, $connection, arg) {
          $connection.setFirst(arg.getRaw());
        },
        last(_, $connection, val) {
          $connection.setLast(val.getRaw());
        },
        offset(_, $connection, val) {
          $connection.setOffset(val.getRaw());
        },
        before(_, $connection, val) {
          $connection.setBefore(val.getRaw());
        },
        after(_, $connection, val) {
          $connection.setAfter(val.getRaw());
        },
        condition(_condition, $connection, arg) {
          const $select = $connection.getSubplan();
          arg.apply($select, qbWhereBuilder);
        },
        orderBy(parent, $connection, value) {
          const $select = $connection.getSubplan();
          value.apply($select);
        }
      }
    },
    allReserveds: {
      plan() {
        return connection(resource_reservedPgResource.find());
      },
      args: {
        first(_, $connection, arg) {
          $connection.setFirst(arg.getRaw());
        },
        last(_, $connection, val) {
          $connection.setLast(val.getRaw());
        },
        offset(_, $connection, val) {
          $connection.setOffset(val.getRaw());
        },
        before(_, $connection, val) {
          $connection.setBefore(val.getRaw());
        },
        after(_, $connection, val) {
          $connection.setAfter(val.getRaw());
        },
        condition(_condition, $connection, arg) {
          const $select = $connection.getSubplan();
          arg.apply($select, qbWhereBuilder);
        },
        orderBy(parent, $connection, value) {
          const $select = $connection.getSubplan();
          value.apply($select);
        }
      }
    },
    allReservedPatchRecords: {
      plan() {
        return connection(resource_reservedPatchsPgResource.find());
      },
      args: {
        first(_, $connection, arg) {
          $connection.setFirst(arg.getRaw());
        },
        last(_, $connection, val) {
          $connection.setLast(val.getRaw());
        },
        offset(_, $connection, val) {
          $connection.setOffset(val.getRaw());
        },
        before(_, $connection, val) {
          $connection.setBefore(val.getRaw());
        },
        after(_, $connection, val) {
          $connection.setAfter(val.getRaw());
        },
        condition(_condition, $connection, arg) {
          const $select = $connection.getSubplan();
          arg.apply($select, qbWhereBuilder);
        },
        orderBy(parent, $connection, value) {
          const $select = $connection.getSubplan();
          value.apply($select);
        }
      }
    },
    allReservedInputRecords: {
      plan() {
        return connection(resource_reserved_inputPgResource.find());
      },
      args: {
        first(_, $connection, arg) {
          $connection.setFirst(arg.getRaw());
        },
        last(_, $connection, val) {
          $connection.setLast(val.getRaw());
        },
        offset(_, $connection, val) {
          $connection.setOffset(val.getRaw());
        },
        before(_, $connection, val) {
          $connection.setBefore(val.getRaw());
        },
        after(_, $connection, val) {
          $connection.setAfter(val.getRaw());
        },
        condition(_condition, $connection, arg) {
          const $select = $connection.getSubplan();
          arg.apply($select, qbWhereBuilder);
        },
        orderBy(parent, $connection, value) {
          const $select = $connection.getSubplan();
          value.apply($select);
        }
      }
    },
    allDefaultValues: {
      plan() {
        return connection(resource_default_valuePgResource.find());
      },
      args: {
        first(_, $connection, arg) {
          $connection.setFirst(arg.getRaw());
        },
        last(_, $connection, val) {
          $connection.setLast(val.getRaw());
        },
        offset(_, $connection, val) {
          $connection.setOffset(val.getRaw());
        },
        before(_, $connection, val) {
          $connection.setBefore(val.getRaw());
        },
        after(_, $connection, val) {
          $connection.setAfter(val.getRaw());
        },
        condition(_condition, $connection, arg) {
          const $select = $connection.getSubplan();
          arg.apply($select, qbWhereBuilder);
        },
        orderBy(parent, $connection, value) {
          const $select = $connection.getSubplan();
          value.apply($select);
        }
      }
    },
    allForeignKeys: {
      plan() {
        return connection(resource_foreign_keyPgResource.find());
      },
      args: {
        first(_, $connection, arg) {
          $connection.setFirst(arg.getRaw());
        },
        last(_, $connection, val) {
          $connection.setLast(val.getRaw());
        },
        offset(_, $connection, val) {
          $connection.setOffset(val.getRaw());
        },
        before(_, $connection, val) {
          $connection.setBefore(val.getRaw());
        },
        after(_, $connection, val) {
          $connection.setAfter(val.getRaw());
        },
        condition(_condition, $connection, arg) {
          const $select = $connection.getSubplan();
          arg.apply($select, qbWhereBuilder);
        },
        orderBy(parent, $connection, value) {
          const $select = $connection.getSubplan();
          value.apply($select);
        }
      }
    },
    allNoPrimaryKeys: {
      plan() {
        return connection(resource_no_primary_keyPgResource.find());
      },
      args: {
        first(_, $connection, arg) {
          $connection.setFirst(arg.getRaw());
        },
        last(_, $connection, val) {
          $connection.setLast(val.getRaw());
        },
        offset(_, $connection, val) {
          $connection.setOffset(val.getRaw());
        },
        before(_, $connection, val) {
          $connection.setBefore(val.getRaw());
        },
        after(_, $connection, val) {
          $connection.setAfter(val.getRaw());
        },
        condition(_condition, $connection, arg) {
          const $select = $connection.getSubplan();
          arg.apply($select, qbWhereBuilder);
        },
        orderBy(parent, $connection, value) {
          const $select = $connection.getSubplan();
          value.apply($select);
        }
      }
    },
    allTestviews: {
      plan() {
        return connection(resource_testviewPgResource.find());
      },
      args: {
        first(_, $connection, arg) {
          $connection.setFirst(arg.getRaw());
        },
        last(_, $connection, val) {
          $connection.setLast(val.getRaw());
        },
        offset(_, $connection, val) {
          $connection.setOffset(val.getRaw());
        },
        before(_, $connection, val) {
          $connection.setBefore(val.getRaw());
        },
        after(_, $connection, val) {
          $connection.setAfter(val.getRaw());
        },
        condition(_condition, $connection, arg) {
          const $select = $connection.getSubplan();
          arg.apply($select, qbWhereBuilder);
        },
        orderBy(parent, $connection, value) {
          const $select = $connection.getSubplan();
          value.apply($select);
        }
      }
    },
    allMyTables: {
      plan() {
        return connection(resource_my_tablePgResource.find());
      },
      args: {
        first(_, $connection, arg) {
          $connection.setFirst(arg.getRaw());
        },
        last(_, $connection, val) {
          $connection.setLast(val.getRaw());
        },
        offset(_, $connection, val) {
          $connection.setOffset(val.getRaw());
        },
        before(_, $connection, val) {
          $connection.setBefore(val.getRaw());
        },
        after(_, $connection, val) {
          $connection.setAfter(val.getRaw());
        },
        condition(_condition, $connection, arg) {
          const $select = $connection.getSubplan();
          arg.apply($select, qbWhereBuilder);
        },
        orderBy(parent, $connection, value) {
          const $select = $connection.getSubplan();
          value.apply($select);
        }
      }
    },
    allPersonSecrets: {
      plan() {
        return connection(resource_person_secretPgResource.find());
      },
      args: {
        first(_, $connection, arg) {
          $connection.setFirst(arg.getRaw());
        },
        last(_, $connection, val) {
          $connection.setLast(val.getRaw());
        },
        offset(_, $connection, val) {
          $connection.setOffset(val.getRaw());
        },
        before(_, $connection, val) {
          $connection.setBefore(val.getRaw());
        },
        after(_, $connection, val) {
          $connection.setAfter(val.getRaw());
        },
        condition(_condition, $connection, arg) {
          const $select = $connection.getSubplan();
          arg.apply($select, qbWhereBuilder);
        },
        orderBy(parent, $connection, value) {
          const $select = $connection.getSubplan();
          value.apply($select);
        }
      }
    },
    allViewTables: {
      plan() {
        return connection(resource_view_tablePgResource.find());
      },
      args: {
        first(_, $connection, arg) {
          $connection.setFirst(arg.getRaw());
        },
        last(_, $connection, val) {
          $connection.setLast(val.getRaw());
        },
        offset(_, $connection, val) {
          $connection.setOffset(val.getRaw());
        },
        before(_, $connection, val) {
          $connection.setBefore(val.getRaw());
        },
        after(_, $connection, val) {
          $connection.setAfter(val.getRaw());
        },
        condition(_condition, $connection, arg) {
          const $select = $connection.getSubplan();
          arg.apply($select, qbWhereBuilder);
        },
        orderBy(parent, $connection, value) {
          const $select = $connection.getSubplan();
          value.apply($select);
        }
      }
    },
    allCompoundKeys: {
      plan() {
        return connection(resource_compound_keyPgResource.find());
      },
      args: {
        first(_, $connection, arg) {
          $connection.setFirst(arg.getRaw());
        },
        last(_, $connection, val) {
          $connection.setLast(val.getRaw());
        },
        offset(_, $connection, val) {
          $connection.setOffset(val.getRaw());
        },
        before(_, $connection, val) {
          $connection.setBefore(val.getRaw());
        },
        after(_, $connection, val) {
          $connection.setAfter(val.getRaw());
        },
        condition(_condition, $connection, arg) {
          const $select = $connection.getSubplan();
          arg.apply($select, qbWhereBuilder);
        },
        orderBy(parent, $connection, value) {
          const $select = $connection.getSubplan();
          value.apply($select);
        }
      }
    },
    allSimilarTable1S: {
      plan() {
        return connection(resource_similar_table_1PgResource.find());
      },
      args: {
        first(_, $connection, arg) {
          $connection.setFirst(arg.getRaw());
        },
        last(_, $connection, val) {
          $connection.setLast(val.getRaw());
        },
        offset(_, $connection, val) {
          $connection.setOffset(val.getRaw());
        },
        before(_, $connection, val) {
          $connection.setBefore(val.getRaw());
        },
        after(_, $connection, val) {
          $connection.setAfter(val.getRaw());
        },
        condition(_condition, $connection, arg) {
          const $select = $connection.getSubplan();
          arg.apply($select, qbWhereBuilder);
        },
        orderBy(parent, $connection, value) {
          const $select = $connection.getSubplan();
          value.apply($select);
        }
      }
    },
    allSimilarTable2S: {
      plan() {
        return connection(resource_similar_table_2PgResource.find());
      },
      args: {
        first(_, $connection, arg) {
          $connection.setFirst(arg.getRaw());
        },
        last(_, $connection, val) {
          $connection.setLast(val.getRaw());
        },
        offset(_, $connection, val) {
          $connection.setOffset(val.getRaw());
        },
        before(_, $connection, val) {
          $connection.setBefore(val.getRaw());
        },
        after(_, $connection, val) {
          $connection.setAfter(val.getRaw());
        },
        condition(_condition, $connection, arg) {
          const $select = $connection.getSubplan();
          arg.apply($select, qbWhereBuilder);
        },
        orderBy(parent, $connection, value) {
          const $select = $connection.getSubplan();
          value.apply($select);
        }
      }
    },
    allUpdatableViews: {
      plan() {
        return connection(resource_updatable_viewPgResource.find());
      },
      args: {
        first(_, $connection, arg) {
          $connection.setFirst(arg.getRaw());
        },
        last(_, $connection, val) {
          $connection.setLast(val.getRaw());
        },
        offset(_, $connection, val) {
          $connection.setOffset(val.getRaw());
        },
        before(_, $connection, val) {
          $connection.setBefore(val.getRaw());
        },
        after(_, $connection, val) {
          $connection.setAfter(val.getRaw());
        },
        condition(_condition, $connection, arg) {
          const $select = $connection.getSubplan();
          arg.apply($select, qbWhereBuilder);
        },
        orderBy(parent, $connection, value) {
          const $select = $connection.getSubplan();
          value.apply($select);
        }
      }
    },
    allNullTestRecords: {
      plan() {
        return connection(resource_null_test_recordPgResource.find());
      },
      args: {
        first(_, $connection, arg) {
          $connection.setFirst(arg.getRaw());
        },
        last(_, $connection, val) {
          $connection.setLast(val.getRaw());
        },
        offset(_, $connection, val) {
          $connection.setOffset(val.getRaw());
        },
        before(_, $connection, val) {
          $connection.setBefore(val.getRaw());
        },
        after(_, $connection, val) {
          $connection.setAfter(val.getRaw());
        },
        condition(_condition, $connection, arg) {
          const $select = $connection.getSubplan();
          arg.apply($select, qbWhereBuilder);
        },
        orderBy(parent, $connection, value) {
          const $select = $connection.getSubplan();
          value.apply($select);
        }
      }
    },
    allEdgeCases: {
      plan() {
        return connection(resource_edge_casePgResource.find());
      },
      args: {
        first(_, $connection, arg) {
          $connection.setFirst(arg.getRaw());
        },
        last(_, $connection, val) {
          $connection.setLast(val.getRaw());
        },
        offset(_, $connection, val) {
          $connection.setOffset(val.getRaw());
        },
        before(_, $connection, val) {
          $connection.setBefore(val.getRaw());
        },
        after(_, $connection, val) {
          $connection.setAfter(val.getRaw());
        },
        condition(_condition, $connection, arg) {
          const $select = $connection.getSubplan();
          arg.apply($select, qbWhereBuilder);
        },
        orderBy(parent, $connection, value) {
          const $select = $connection.getSubplan();
          value.apply($select);
        }
      }
    },
    allLeftArms: {
      plan() {
        return connection(resource_left_armPgResource.find());
      },
      args: {
        first(_, $connection, arg) {
          $connection.setFirst(arg.getRaw());
        },
        last(_, $connection, val) {
          $connection.setLast(val.getRaw());
        },
        offset(_, $connection, val) {
          $connection.setOffset(val.getRaw());
        },
        before(_, $connection, val) {
          $connection.setBefore(val.getRaw());
        },
        after(_, $connection, val) {
          $connection.setAfter(val.getRaw());
        },
        condition(_condition, $connection, arg) {
          const $select = $connection.getSubplan();
          arg.apply($select, qbWhereBuilder);
        },
        orderBy(parent, $connection, value) {
          const $select = $connection.getSubplan();
          value.apply($select);
        }
      }
    },
    allIssue756S: {
      plan() {
        return connection(resource_issue756PgResource.find());
      },
      args: {
        first(_, $connection, arg) {
          $connection.setFirst(arg.getRaw());
        },
        last(_, $connection, val) {
          $connection.setLast(val.getRaw());
        },
        offset(_, $connection, val) {
          $connection.setOffset(val.getRaw());
        },
        before(_, $connection, val) {
          $connection.setBefore(val.getRaw());
        },
        after(_, $connection, val) {
          $connection.setAfter(val.getRaw());
        },
        condition(_condition, $connection, arg) {
          const $select = $connection.getSubplan();
          arg.apply($select, qbWhereBuilder);
        },
        orderBy(parent, $connection, value) {
          const $select = $connection.getSubplan();
          value.apply($select);
        }
      }
    },
    allPosts: {
      plan() {
        return connection(resource_postPgResource.find());
      },
      args: {
        first(_, $connection, arg) {
          $connection.setFirst(arg.getRaw());
        },
        last(_, $connection, val) {
          $connection.setLast(val.getRaw());
        },
        offset(_, $connection, val) {
          $connection.setOffset(val.getRaw());
        },
        before(_, $connection, val) {
          $connection.setBefore(val.getRaw());
        },
        after(_, $connection, val) {
          $connection.setAfter(val.getRaw());
        },
        condition(_condition, $connection, arg) {
          const $select = $connection.getSubplan();
          arg.apply($select, qbWhereBuilder);
        },
        orderBy(parent, $connection, value) {
          const $select = $connection.getSubplan();
          value.apply($select);
        }
      }
    },
    allPeople: {
      plan() {
        return connection(resource_personPgResource.find());
      },
      args: {
        first(_, $connection, arg) {
          $connection.setFirst(arg.getRaw());
        },
        last(_, $connection, val) {
          $connection.setLast(val.getRaw());
        },
        offset(_, $connection, val) {
          $connection.setOffset(val.getRaw());
        },
        before(_, $connection, val) {
          $connection.setBefore(val.getRaw());
        },
        after(_, $connection, val) {
          $connection.setAfter(val.getRaw());
        },
        condition(_condition, $connection, arg) {
          const $select = $connection.getSubplan();
          arg.apply($select, qbWhereBuilder);
        },
        orderBy(parent, $connection, value) {
          const $select = $connection.getSubplan();
          value.apply($select);
        }
      }
    },
    allLists: {
      plan() {
        return connection(resource_listsPgResource.find());
      },
      args: {
        first(_, $connection, arg) {
          $connection.setFirst(arg.getRaw());
        },
        last(_, $connection, val) {
          $connection.setLast(val.getRaw());
        },
        offset(_, $connection, val) {
          $connection.setOffset(val.getRaw());
        },
        before(_, $connection, val) {
          $connection.setBefore(val.getRaw());
        },
        after(_, $connection, val) {
          $connection.setAfter(val.getRaw());
        },
        condition(_condition, $connection, arg) {
          const $select = $connection.getSubplan();
          arg.apply($select, qbWhereBuilder);
        },
        orderBy(parent, $connection, value) {
          const $select = $connection.getSubplan();
          value.apply($select);
        }
      }
    },
    allTypes: {
      plan() {
        return connection(resource_typesPgResource.find());
      },
      args: {
        first(_, $connection, arg) {
          $connection.setFirst(arg.getRaw());
        },
        last(_, $connection, val) {
          $connection.setLast(val.getRaw());
        },
        offset(_, $connection, val) {
          $connection.setOffset(val.getRaw());
        },
        before(_, $connection, val) {
          $connection.setBefore(val.getRaw());
        },
        after(_, $connection, val) {
          $connection.setAfter(val.getRaw());
        },
        condition(_condition, $connection, arg) {
          const $select = $connection.getSubplan();
          arg.apply($select, qbWhereBuilder);
        },
        orderBy(parent, $connection, value) {
          const $select = $connection.getSubplan();
          value.apply($select);
        }
      }
    }
  },
  Input: {
    __assertStep: assertPgClassSingleStep
  },
  Patch: {
    __assertStep: assertPgClassSingleStep
  },
  Reserved: {
    __assertStep: assertPgClassSingleStep
  },
  ReservedPatchRecord: {
    __assertStep: assertPgClassSingleStep
  },
  ReservedInputRecord: {
    __assertStep: assertPgClassSingleStep
  },
  DefaultValue: {
    __assertStep: assertPgClassSingleStep,
    nullValue($record) {
      return $record.get("null_value");
    }
  },
  NoPrimaryKey: {
    __assertStep: assertPgClassSingleStep
  },
  UniqueForeignKey: {
    __assertStep: assertPgClassSingleStep,
    compoundKey1($record) {
      return $record.get("compound_key_1");
    },
    compoundKey2($record) {
      return $record.get("compound_key_2");
    },
    compoundKeyByCompoundKey1AndCompoundKey2($record) {
      return resource_compound_keyPgResource.get({
        person_id_1: $record.get("compound_key_1"),
        person_id_2: $record.get("compound_key_2")
      });
    }
  },
  CompoundKey: {
    __assertStep: assertPgClassSingleStep,
    personId2($record) {
      return $record.get("person_id_2");
    },
    personId1($record) {
      return $record.get("person_id_1");
    },
    personByPersonId1($record) {
      return resource_personPgResource.get({
        id: $record.get("person_id_1")
      });
    },
    personByPersonId2($record) {
      return resource_personPgResource.get({
        id: $record.get("person_id_2")
      });
    },
    foreignKeysByCompoundKey1AndCompoundKey2: {
      plan($record) {
        const $records = resource_foreign_keyPgResource.find({
          compound_key_1: $record.get("person_id_1"),
          compound_key_2: $record.get("person_id_2")
        });
        return connection($records);
      },
      args: {
        first(_, $connection, arg) {
          $connection.setFirst(arg.getRaw());
        },
        last(_, $connection, val) {
          $connection.setLast(val.getRaw());
        },
        offset(_, $connection, val) {
          $connection.setOffset(val.getRaw());
        },
        before(_, $connection, val) {
          $connection.setBefore(val.getRaw());
        },
        after(_, $connection, val) {
          $connection.setAfter(val.getRaw());
        },
        condition(_condition, $connection, arg) {
          const $select = $connection.getSubplan();
          arg.apply($select, qbWhereBuilder);
        },
        orderBy(parent, $connection, value) {
          const $select = $connection.getSubplan();
          value.apply($select);
        }
      }
    },
    uniqueForeignKeyByCompoundKey1AndCompoundKey2($record) {
      return resource_unique_foreign_keyPgResource.get({
        compound_key_1: $record.get("person_id_1"),
        compound_key_2: $record.get("person_id_2")
      });
    }
  },
  Person: {
    __assertStep: assertPgClassSingleStep,
    computedOut($in, args, _info) {
      const {
        $row,
        selectArgs
      } = pgFunctionArgumentsFromArgs($in, makeArgs_person_computed_out(args), true);
      const from = pgFromExpression($row, resource_person_computed_outPgResource.from, resource_person_computed_outPgResource.parameters, selectArgs);
      return pgClassExpression($row, resource_person_computed_outPgResource.codec, undefined)`${from}`;
    },
    firstName($in, args, _info) {
      const {
        $row,
        selectArgs
      } = pgFunctionArgumentsFromArgs($in, makeArgs_person_computed_out(args), true);
      const from = pgFromExpression($row, resource_person_first_namePgResource.from, resource_person_first_namePgResource.parameters, selectArgs);
      return pgClassExpression($row, resource_person_first_namePgResource.codec, undefined)`${from}`;
    },
    computedOutOut($in, args, _info) {
      const {
        selectArgs
      } = pgFunctionArgumentsFromArgs($in, makeArgs_person_computed_out(args));
      return resource_person_computed_out_outPgResource.execute(selectArgs);
    },
    computedInout($in, args, _info) {
      const {
        $row,
        selectArgs
      } = pgFunctionArgumentsFromArgs($in, makeArgs_person_computed_inout(args), true);
      const from = pgFromExpression($row, resource_person_computed_inoutPgResource.from, resource_person_computed_inoutPgResource.parameters, selectArgs);
      return pgClassExpression($row, resource_person_computed_inoutPgResource.codec, undefined)`${from}`;
    },
    computedInoutOut($in, args, _info) {
      const {
        selectArgs
      } = pgFunctionArgumentsFromArgs($in, makeArgs_person_computed_inout_out(args));
      return resource_person_computed_inout_outPgResource.execute(selectArgs);
    },
    exists($in, args, _info) {
      const {
        $row,
        selectArgs
      } = pgFunctionArgumentsFromArgs($in, makeArgs_person_exists(args), true);
      const from = pgFromExpression($row, resource_person_existsPgResource.from, resource_person_existsPgResource.parameters, selectArgs);
      return pgClassExpression($row, resource_person_existsPgResource.codec, undefined)`${from}`;
    },
    computedFirstArgInoutOut($in, args, _info) {
      const {
        selectArgs
      } = pgFunctionArgumentsFromArgs($in, makeArgs_person_computed_out(args));
      return resource_person_computed_first_arg_inout_outPgResource.execute(selectArgs);
    },
    optionalMissingMiddle1($in, args, _info) {
      const {
        $row,
        selectArgs
      } = pgFunctionArgumentsFromArgs($in, makeArgs_person_optional_missing_middle_1(args), true);
      const from = pgFromExpression($row, resource_person_optional_missing_middle_1PgResource.from, resource_person_optional_missing_middle_1PgResource.parameters, selectArgs);
      return pgClassExpression($row, resource_person_optional_missing_middle_1PgResource.codec, undefined)`${from}`;
    },
    optionalMissingMiddle2($in, args, _info) {
      const {
        $row,
        selectArgs
      } = pgFunctionArgumentsFromArgs($in, makeArgs_person_optional_missing_middle_2(args), true);
      const from = pgFromExpression($row, resource_person_optional_missing_middle_2PgResource.from, resource_person_optional_missing_middle_2PgResource.parameters, selectArgs);
      return pgClassExpression($row, resource_person_optional_missing_middle_2PgResource.codec, undefined)`${from}`;
    },
    optionalMissingMiddle3($in, args, _info) {
      const {
        $row,
        selectArgs
      } = pgFunctionArgumentsFromArgs($in, makeArgs_person_optional_missing_middle_3(args), true);
      const from = pgFromExpression($row, resource_person_optional_missing_middle_3PgResource.from, resource_person_optional_missing_middle_3PgResource.parameters, selectArgs);
      return pgClassExpression($row, resource_person_optional_missing_middle_3PgResource.codec, undefined)`${from}`;
    },
    optionalMissingMiddle4($in, args, _info) {
      const {
        $row,
        selectArgs
      } = pgFunctionArgumentsFromArgs($in, makeArgs_person_optional_missing_middle_4(args), true);
      const from = pgFromExpression($row, resource_person_optional_missing_middle_4PgResource.from, resource_person_optional_missing_middle_4PgResource.parameters, selectArgs);
      return pgClassExpression($row, resource_person_optional_missing_middle_4PgResource.codec, undefined)`${from}`;
    },
    optionalMissingMiddle5($in, args, _info) {
      const {
        $row,
        selectArgs
      } = pgFunctionArgumentsFromArgs($in, makeArgs_person_optional_missing_middle_5(args), true);
      const from = pgFromExpression($row, resource_person_optional_missing_middle_5PgResource.from, resource_person_optional_missing_middle_5PgResource.parameters, selectArgs);
      return pgClassExpression($row, resource_person_optional_missing_middle_5PgResource.codec, undefined)`${from}`;
    },
    computedComplex($in, args, _info) {
      const {
        selectArgs
      } = pgFunctionArgumentsFromArgs($in, makeArgs_person_computed_complex(args));
      return resource_person_computed_complexPgResource.execute(selectArgs);
    },
    firstPost($in, args, _info) {
      const {
        selectArgs
      } = pgFunctionArgumentsFromArgs($in, makeArgs_person_computed_out(args));
      return resource_person_first_postPgResource.execute(selectArgs);
    },
    computedFirstArgInout($in, args, _info) {
      const {
        selectArgs
      } = pgFunctionArgumentsFromArgs($in, makeArgs_person_computed_out(args));
      return resource_person_computed_first_arg_inoutPgResource.execute(selectArgs);
    },
    friends: {
      plan($parent, args, info) {
        const $select = getSelectPlanFromParentAndArgs15($parent, args, info);
        return connection($select, {
          cursorPlan($item) {
            return $item.getParentStep ? $item.getParentStep().cursor() : $item.cursor();
          }
        });
      },
      args: {
        first(_, $connection, arg) {
          $connection.setFirst(arg.getRaw());
        },
        last(_, $connection, val) {
          $connection.setLast(val.getRaw());
        },
        offset(_, $connection, val) {
          $connection.setOffset(val.getRaw());
        },
        before(_, $connection, val) {
          $connection.setBefore(val.getRaw());
        },
        after(_, $connection, val) {
          $connection.setAfter(val.getRaw());
        },
        orderBy(parent, $connection, value) {
          const $select = $connection.getSubplan();
          value.apply($select);
        }
      }
    },
    typeFunctionConnection: {
      plan($parent, args, info) {
        const $select = getSelectPlanFromParentAndArgs16($parent, args, info);
        return connection($select, {
          cursorPlan($item) {
            return $item.getParentStep ? $item.getParentStep().cursor() : $item.cursor();
          }
        });
      },
      args: {
        first(_, $connection, arg) {
          $connection.setFirst(arg.getRaw());
        },
        last(_, $connection, val) {
          $connection.setLast(val.getRaw());
        },
        offset(_, $connection, val) {
          $connection.setOffset(val.getRaw());
        },
        before(_, $connection, val) {
          $connection.setBefore(val.getRaw());
        },
        after(_, $connection, val) {
          $connection.setAfter(val.getRaw());
        }
      }
    },
    typeFunction($in, args, _info) {
      const {
        selectArgs
      } = pgFunctionArgumentsFromArgs($in, makeArgs_person_type_function(args));
      return resource_person_type_functionPgResource.execute(selectArgs);
    },
    typeFunctionList($in, args, _info) {
      const {
        selectArgs
      } = pgFunctionArgumentsFromArgs($in, makeArgs_person_computed_out(args));
      return resource_person_type_function_listPgResource.execute(selectArgs);
    },
    name($record) {
      return $record.get("person_full_name");
    },
    site($record) {
      const $plan = $record.get("site");
      const $select = pgSelectSingleFromRecord(resource_frmcdc_wrappedUrlPgResource, $plan);
      $select.getClassStep().setTrusted();
      return $select;
    },
    lastLoginFromIp($record) {
      return $record.get("last_login_from_ip");
    },
    lastLoginFromSubnet($record) {
      return $record.get("last_login_from_subnet");
    },
    userMac($record) {
      return $record.get("user_mac");
    },
    createdAt($record) {
      return $record.get("created_at");
    },
    postsByAuthorId: {
      plan($record) {
        const $records = resource_postPgResource.find({
          author_id: $record.get("id")
        });
        return connection($records);
      },
      args: {
        first(_, $connection, arg) {
          $connection.setFirst(arg.getRaw());
        },
        last(_, $connection, val) {
          $connection.setLast(val.getRaw());
        },
        offset(_, $connection, val) {
          $connection.setOffset(val.getRaw());
        },
        before(_, $connection, val) {
          $connection.setBefore(val.getRaw());
        },
        after(_, $connection, val) {
          $connection.setAfter(val.getRaw());
        },
        condition(_condition, $connection, arg) {
          const $select = $connection.getSubplan();
          arg.apply($select, qbWhereBuilder);
        },
        orderBy(parent, $connection, value) {
          const $select = $connection.getSubplan();
          value.apply($select);
        }
      }
    },
    foreignKeysByPersonId: {
      plan($record) {
        const $records = resource_foreign_keyPgResource.find({
          person_id: $record.get("id")
        });
        return connection($records);
      },
      args: {
        first(_, $connection, arg) {
          $connection.setFirst(arg.getRaw());
        },
        last(_, $connection, val) {
          $connection.setLast(val.getRaw());
        },
        offset(_, $connection, val) {
          $connection.setOffset(val.getRaw());
        },
        before(_, $connection, val) {
          $connection.setBefore(val.getRaw());
        },
        after(_, $connection, val) {
          $connection.setAfter(val.getRaw());
        },
        condition(_condition, $connection, arg) {
          const $select = $connection.getSubplan();
          arg.apply($select, qbWhereBuilder);
        },
        orderBy(parent, $connection, value) {
          const $select = $connection.getSubplan();
          value.apply($select);
        }
      }
    },
    personSecretByPersonId($record) {
      return resource_person_secretPgResource.get({
        person_id: $record.get("id")
      });
    },
    leftArmByPersonId($record) {
      return resource_left_armPgResource.get({
        person_id: $record.get("id")
      });
    },
    compoundKeysByPersonId1: {
      plan($record) {
        const $records = resource_compound_keyPgResource.find({
          person_id_1: $record.get("id")
        });
        return connection($records);
      },
      args: {
        first(_, $connection, arg) {
          $connection.setFirst(arg.getRaw());
        },
        last(_, $connection, val) {
          $connection.setLast(val.getRaw());
        },
        offset(_, $connection, val) {
          $connection.setOffset(val.getRaw());
        },
        before(_, $connection, val) {
          $connection.setBefore(val.getRaw());
        },
        after(_, $connection, val) {
          $connection.setAfter(val.getRaw());
        },
        condition(_condition, $connection, arg) {
          const $select = $connection.getSubplan();
          arg.apply($select, qbWhereBuilder);
        },
        orderBy(parent, $connection, value) {
          const $select = $connection.getSubplan();
          value.apply($select);
        }
      }
    },
    compoundKeysByPersonId2: {
      plan($record) {
        const $records = resource_compound_keyPgResource.find({
          person_id_2: $record.get("id")
        });
        return connection($records);
      },
      args: {
        first(_, $connection, arg) {
          $connection.setFirst(arg.getRaw());
        },
        last(_, $connection, val) {
          $connection.setLast(val.getRaw());
        },
        offset(_, $connection, val) {
          $connection.setOffset(val.getRaw());
        },
        before(_, $connection, val) {
          $connection.setBefore(val.getRaw());
        },
        after(_, $connection, val) {
          $connection.setAfter(val.getRaw());
        },
        condition(_condition, $connection, arg) {
          const $select = $connection.getSubplan();
          arg.apply($select, qbWhereBuilder);
        },
        orderBy(parent, $connection, value) {
          const $select = $connection.getSubplan();
          value.apply($select);
        }
      }
    }
  },
  PersonComputedOutOutRecord: {
    __assertStep: assertPgClassSingleStep
  },
  PersonComputedInoutOutRecord: {
    __assertStep: assertPgClassSingleStep
  },
  Email: {
    serialize: GraphQLString.serialize,
    parseValue: GraphQLString.parseValue,
    parseLiteral: GraphQLString.parseLiteral
  },
  PersonComputedFirstArgInoutOutRecord: {
    __assertStep: assertPgClassSingleStep,
    person($record) {
      const $plan = $record.get("person");
      const $select = pgSelectSingleFromRecord(resource_personPgResource, $plan);
      $select.getClassStep().setTrusted();
      return $select;
    }
  },
  PersonComputedComplexRecord: {
    __assertStep: assertPgClassSingleStep,
    y($record) {
      const $plan = $record.get("y");
      const $select = pgSelectSingleFromRecord(resource_frmcdc_compoundTypePgResource, $plan);
      $select.getClassStep().setTrusted();
      return $select;
    },
    z($record) {
      const $plan = $record.get("z");
      const $select = pgSelectSingleFromRecord(resource_personPgResource, $plan);
      $select.getClassStep().setTrusted();
      return $select;
    }
  },
  CompoundType: {
    __assertStep: assertPgClassSingleStep,
    computedField($in, args, _info) {
      const {
        $row,
        selectArgs
      } = pgFunctionArgumentsFromArgs($in, makeArgs_person_computed_out(args), true);
      const from = pgFromExpression($row, resource_compound_type_computed_fieldPgResource.from, resource_compound_type_computed_fieldPgResource.parameters, selectArgs);
      return pgClassExpression($row, resource_compound_type_computed_fieldPgResource.codec, undefined)`${from}`;
    },
    fooBar($record) {
      return $record.get("foo_bar");
    }
  },
  Color: {
    RED: {
      value: "red"
    },
    GREEN: {
      value: "green"
    },
    BLUE: {
      value: "blue"
    }
  },
  UUID: {
    serialize: UUIDSerialize,
    parseValue(value) {
      return coerce("" + value);
    },
    parseLiteral(ast) {
      if (ast.kind !== Kind.STRING) {
        // ERRORS: add name to this error
        throw new GraphQLError(`${"UUID" ?? "This scalar"} can only parse string values (kind = '${ast.kind}')`);
      }
      return coerce(ast.value);
    }
  },
  EnumCaps: {
    _0_BAR: {
      value: "0_BAR"
    }
  },
  EnumWithEmptyString: {
    _EMPTY_: {
      value: ""
    },
    ONE: {
      value: "one"
    },
    TWO: {
      value: "two"
    }
  },
  Interval: {
    __assertStep: assertExecutableStep
  },
  Post: {
    __assertStep: assertPgClassSingleStep,
    computedIntervalSet: {
      plan($parent, args, info) {
        const $select = getSelectPlanFromParentAndArgs17($parent, args, info);
        return connection($select, {
          cursorPlan($item) {
            return $item.getParentStep ? $item.getParentStep().cursor() : $item.cursor();
          }
        });
      },
      args: {
        first(_, $connection, arg) {
          $connection.setFirst(arg.getRaw());
        },
        last(_, $connection, val) {
          $connection.setLast(val.getRaw());
        },
        offset(_, $connection, val) {
          $connection.setOffset(val.getRaw());
        },
        before(_, $connection, val) {
          $connection.setBefore(val.getRaw());
        },
        after(_, $connection, val) {
          $connection.setAfter(val.getRaw());
        }
      }
    },
    computedIntervalArray($in, args, _info) {
      const {
        $row,
        selectArgs
      } = pgFunctionArgumentsFromArgs($in, makeArgs_person_computed_out(args), true);
      const from = pgFromExpression($row, resource_post_computed_interval_arrayPgResource.from, resource_post_computed_interval_arrayPgResource.parameters, selectArgs);
      return pgClassExpression($row, resource_post_computed_interval_arrayPgResource.codec, undefined)`${from}`;
    },
    computedTextArray($in, args, _info) {
      const {
        $row,
        selectArgs
      } = pgFunctionArgumentsFromArgs($in, makeArgs_person_computed_out(args), true);
      const from = pgFromExpression($row, resource_post_computed_text_arrayPgResource.from, resource_post_computed_text_arrayPgResource.parameters, selectArgs);
      return pgClassExpression($row, resource_post_computed_text_arrayPgResource.codec, undefined)`${from}`;
    },
    computedWithOptionalArg($in, args, _info) {
      const {
        $row,
        selectArgs
      } = pgFunctionArgumentsFromArgs($in, makeArgs_post_computed_with_optional_arg(args), true);
      const from = pgFromExpression($row, resource_post_computed_with_optional_argPgResource.from, resource_post_computed_with_optional_argPgResource.parameters, selectArgs);
      return pgClassExpression($row, resource_post_computed_with_optional_argPgResource.codec, undefined)`${from}`;
    },
    computedWithRequiredArg($in, args, _info) {
      const {
        $row,
        selectArgs
      } = pgFunctionArgumentsFromArgs($in, makeArgs_post_computed_with_required_arg(args), true);
      const from = pgFromExpression($row, resource_post_computed_with_required_argPgResource.from, resource_post_computed_with_required_argPgResource.parameters, selectArgs);
      return pgClassExpression($row, resource_post_computed_with_required_argPgResource.codec, undefined)`${from}`;
    },
    headlineTrimmed($in, args, _info) {
      const {
        $row,
        selectArgs
      } = pgFunctionArgumentsFromArgs($in, makeArgs_post_headline_trimmed(args), true);
      const from = pgFromExpression($row, resource_post_headline_trimmedPgResource.from, resource_post_headline_trimmedPgResource.parameters, selectArgs);
      return pgClassExpression($row, resource_post_headline_trimmedPgResource.codec, undefined)`${from}`;
    },
    headlineTrimmedNoDefaults($in, args, _info) {
      const {
        $row,
        selectArgs
      } = pgFunctionArgumentsFromArgs($in, makeArgs_post_headline_trimmed_no_defaults(args), true);
      const from = pgFromExpression($row, resource_post_headline_trimmed_no_defaultsPgResource.from, resource_post_headline_trimmed_no_defaultsPgResource.parameters, selectArgs);
      return pgClassExpression($row, resource_post_headline_trimmed_no_defaultsPgResource.codec, undefined)`${from}`;
    },
    headlineTrimmedStrict($in, args, _info) {
      const {
        $row,
        selectArgs
      } = pgFunctionArgumentsFromArgs($in, makeArgs_post_headline_trimmed_strict(args), true);
      const from = pgFromExpression($row, resource_post_headline_trimmed_strictPgResource.from, resource_post_headline_trimmed_strictPgResource.parameters, selectArgs);
      return pgClassExpression($row, resource_post_headline_trimmed_strictPgResource.codec, undefined)`${from}`;
    },
    computedCompoundTypeArray($in, args, _info) {
      const {
        selectArgs
      } = pgFunctionArgumentsFromArgs($in, makeArgs_post_computed_compound_type_array(args));
      return resource_post_computed_compound_type_arrayPgResource.execute(selectArgs);
    },
    authorId($record) {
      return $record.get("author_id");
    },
    comptypes($record) {
      const $val = $record.get("comptypes");
      const $select = pgSelectFromRecords(resource_frmcdc_comptypePgResource, $val);
      $select.setTrusted();
      return $select;
    },
    personByAuthorId($record) {
      return resource_personPgResource.get({
        id: $record.get("author_id")
      });
    },
    typesBySmallint: {
      plan($record) {
        const $records = resource_typesPgResource.find({
          smallint: $record.get("id")
        });
        return connection($records);
      },
      args: {
        first(_, $connection, arg) {
          $connection.setFirst(arg.getRaw());
        },
        last(_, $connection, val) {
          $connection.setLast(val.getRaw());
        },
        offset(_, $connection, val) {
          $connection.setOffset(val.getRaw());
        },
        before(_, $connection, val) {
          $connection.setBefore(val.getRaw());
        },
        after(_, $connection, val) {
          $connection.setAfter(val.getRaw());
        },
        condition(_condition, $connection, arg) {
          const $select = $connection.getSubplan();
          arg.apply($select, qbWhereBuilder);
        },
        orderBy(parent, $connection, value) {
          const $select = $connection.getSubplan();
          value.apply($select);
        }
      }
    },
    typeById($record) {
      return resource_typesPgResource.get({
        id: $record.get("id")
      });
    }
  },
  PostComputedIntervalSetConnection: {
    __assertStep: ConnectionStep,
    totalCount($connection) {
      return $connection.cloneSubplanWithoutPagination("aggregate").singleAsRecord().select(sql`count(*)`, TYPES.bigint, false);
    }
  },
  PostComputedIntervalSetEdge: {
    __assertStep: assertEdgeCapableStep,
    cursor($edge) {
      return $edge.cursor();
    },
    node($edge) {
      return $edge.node();
    }
  },
  Cursor: {
    serialize: UUIDSerialize,
    parseValue: UUIDSerialize,
    parseLiteral(ast) {
      if (ast.kind !== Kind.STRING) {
        throw new GraphQLError(`${"Cursor" ?? "This scalar"} can only parse string values (kind='${ast.kind}')`);
      }
      return ast.value;
    }
  },
  PageInfo: {
    __assertStep: assertPageInfoCapableStep,
    hasNextPage($pageInfo) {
      return $pageInfo.hasNextPage();
    },
    hasPreviousPage($pageInfo) {
      return $pageInfo.hasPreviousPage();
    },
    startCursor($pageInfo) {
      return $pageInfo.startCursor();
    },
    endCursor($pageInfo) {
      return $pageInfo.endCursor();
    }
  },
  CompoundTypeInput: {
    __baked: createObjectAndApplyChildren,
    a(obj, val, {
      field,
      schema
    }) {
      obj.set("a", bakedInputRuntime(schema, field.type, val));
    },
    b(obj, val, {
      field,
      schema
    }) {
      obj.set("b", bakedInputRuntime(schema, field.type, val));
    },
    c(obj, val, {
      field,
      schema
    }) {
      obj.set("c", bakedInputRuntime(schema, field.type, val));
    },
    d(obj, val, {
      field,
      schema
    }) {
      obj.set("d", bakedInputRuntime(schema, field.type, val));
    },
    e(obj, val, {
      field,
      schema
    }) {
      obj.set("e", bakedInputRuntime(schema, field.type, val));
    },
    f(obj, val, {
      field,
      schema
    }) {
      obj.set("f", bakedInputRuntime(schema, field.type, val));
    },
    g(obj, val, {
      field,
      schema
    }) {
      obj.set("g", bakedInputRuntime(schema, field.type, val));
    },
    fooBar(obj, val, {
      field,
      schema
    }) {
      obj.set("foo_bar", bakedInputRuntime(schema, field.type, val));
    }
  },
  AnEnum: {
    AWAITING: {
      value: "awaiting"
    },
    REJECTED: {
      value: "rejected"
    },
    PUBLISHED: {
      value: "published"
    },
    ASTERISK: {
      value: "*"
    },
    ASTERISK_ASTERISK: {
      value: "**"
    },
    ASTERISK_ASTERISK_ASTERISK: {
      value: "***"
    },
    FOO_ASTERISK: {
      value: "foo*"
    },
    FOO_ASTERISK_: {
      value: "foo*_"
    },
    _FOO_ASTERISK: {
      value: "_foo*"
    },
    ASTERISK_BAR: {
      value: "*bar"
    },
    ASTERISK_BAR_: {
      value: "*bar_"
    },
    _ASTERISK_BAR_: {
      value: "_*bar_"
    },
    ASTERISK_BAZ_ASTERISK: {
      value: "*baz*"
    },
    _ASTERISK_BAZ_ASTERISK_: {
      value: "_*baz*_"
    },
    PERCENT: {
      value: "%"
    },
    GREATER_THAN_OR_EQUAL: {
      value: ">="
    },
    LIKE: {
      value: "~~"
    },
    DOLLAR: {
      value: "$"
    }
  },
  Comptype: {
    __assertStep: assertPgClassSingleStep,
    isOptimised($record) {
      return $record.get("is_optimised");
    }
  },
  Datetime: {
    serialize: UUIDSerialize,
    parseValue: UUIDSerialize,
    parseLiteral(ast) {
      if (ast.kind !== Kind.STRING) {
        throw new GraphQLError(`${"Datetime" ?? "This scalar"} can only parse string values (kind='${ast.kind}')`);
      }
      return ast.value;
    }
  },
  TypesConnection: {
    __assertStep: ConnectionStep,
    totalCount($connection) {
      return $connection.cloneSubplanWithoutPagination("aggregate").singleAsRecord().select(sql`count(*)`, TYPES.bigint, false);
    }
  },
  Type: {
    __assertStep: assertPgClassSingleStep,
    enumArray($record) {
      return $record.get("enum_array");
    },
    textArray($record) {
      return $record.get("text_array");
    },
    nullableRange($record) {
      return $record.get("nullable_range");
    },
    anIntRange($record) {
      return $record.get("an_int_range");
    },
    intervalArray($record) {
      return $record.get("interval_array");
    },
    compoundType($record) {
      const $plan = $record.get("compound_type");
      const $select = pgSelectSingleFromRecord(resource_frmcdc_compoundTypePgResource, $plan);
      $select.coalesceToEmptyObject();
      $select.getClassStep().setTrusted();
      return $select;
    },
    nestedCompoundType($record) {
      const $plan = $record.get("nested_compound_type");
      const $select = pgSelectSingleFromRecord(resource_frmcdc_nestedCompoundTypePgResource, $plan);
      $select.coalesceToEmptyObject();
      $select.getClassStep().setTrusted();
      return $select;
    },
    nullableCompoundType($record) {
      const $plan = $record.get("nullable_compound_type");
      const $select = pgSelectSingleFromRecord(resource_frmcdc_compoundTypePgResource, $plan);
      $select.getClassStep().setTrusted();
      return $select;
    },
    nullableNestedCompoundType($record) {
      const $plan = $record.get("nullable_nested_compound_type");
      const $select = pgSelectSingleFromRecord(resource_frmcdc_nestedCompoundTypePgResource, $plan);
      $select.getClassStep().setTrusted();
      return $select;
    },
    textArrayDomain($record) {
      return $record.get("text_array_domain");
    },
    int8ArrayDomain($record) {
      return $record.get("int8_array_domain");
    },
    byteaArray($record) {
      return $record.get("bytea_array");
    },
    ltreeArray($record) {
      return $record.get("ltree_array");
    },
    postBySmallint($record) {
      return resource_postPgResource.get({
        id: $record.get("smallint")
      });
    },
    postById($record) {
      return resource_postPgResource.get({
        id: $record.get("id")
      });
    }
  },
  BigInt: {
    serialize: UUIDSerialize,
    parseValue: UUIDSerialize,
    parseLiteral(ast) {
      if (ast.kind !== Kind.STRING) {
        throw new GraphQLError(`${"BigInt" ?? "This scalar"} can only parse string values (kind='${ast.kind}')`);
      }
      return ast.value;
    }
  },
  BigFloat: {
    serialize: UUIDSerialize,
    parseValue: UUIDSerialize,
    parseLiteral(ast) {
      if (ast.kind !== Kind.STRING) {
        throw new GraphQLError(`${"BigFloat" ?? "This scalar"} can only parse string values (kind='${ast.kind}')`);
      }
      return ast.value;
    }
  },
  AnInt: {
    serialize: GraphQLInt.serialize,
    parseValue: GraphQLInt.parseValue,
    parseLiteral: GraphQLInt.parseLiteral
  },
  AnotherInt: {
    serialize: GraphQLInt.serialize,
    parseValue: GraphQLInt.parseValue,
    parseLiteral: GraphQLInt.parseLiteral
  },
  JSON: {
    serialize(value) {
      return JSON.stringify(value);
    },
    parseValue(value) {
      return JSON.parse(value);
    },
    parseLiteral(ast, _variables) {
      if (ast.kind === Kind.STRING) {
        return JSON.parse(ast.value);
      } else {
        return undefined;
      }
    }
  },
  Date: {
    serialize: UUIDSerialize,
    parseValue: UUIDSerialize,
    parseLiteral(ast) {
      if (ast.kind !== Kind.STRING) {
        throw new GraphQLError(`${"Date" ?? "This scalar"} can only parse string values (kind='${ast.kind}')`);
      }
      return ast.value;
    }
  },
  Time: {
    serialize: UUIDSerialize,
    parseValue: UUIDSerialize,
    parseLiteral(ast) {
      if (ast.kind !== Kind.STRING) {
        throw new GraphQLError(`${"Time" ?? "This scalar"} can only parse string values (kind='${ast.kind}')`);
      }
      return ast.value;
    }
  },
  NestedCompoundType: {
    __assertStep: assertPgClassSingleStep,
    a($record) {
      const $plan = $record.get("a");
      const $select = pgSelectSingleFromRecord(resource_frmcdc_compoundTypePgResource, $plan);
      $select.getClassStep().setTrusted();
      return $select;
    },
    b($record) {
      const $plan = $record.get("b");
      const $select = pgSelectSingleFromRecord(resource_frmcdc_compoundTypePgResource, $plan);
      $select.getClassStep().setTrusted();
      return $select;
    },
    bazBuz($record) {
      return $record.get("baz_buz");
    }
  },
  InternetAddress: {
    serialize: UUIDSerialize,
    parseValue: UUIDSerialize,
    parseLiteral(ast) {
      if (ast.kind !== Kind.STRING) {
        throw new GraphQLError(`${"InternetAddress" ?? "This scalar"} can only parse string values (kind='${ast.kind}')`);
      }
      return ast.value;
    }
  },
  RegProc: {
    serialize: UUIDSerialize,
    parseValue: UUIDSerialize,
    parseLiteral(ast) {
      if (ast.kind !== Kind.STRING) {
        throw new GraphQLError(`${"RegProc" ?? "This scalar"} can only parse string values (kind='${ast.kind}')`);
      }
      return ast.value;
    }
  },
  RegProcedure: {
    serialize: UUIDSerialize,
    parseValue: UUIDSerialize,
    parseLiteral(ast) {
      if (ast.kind !== Kind.STRING) {
        throw new GraphQLError(`${"RegProcedure" ?? "This scalar"} can only parse string values (kind='${ast.kind}')`);
      }
      return ast.value;
    }
  },
  RegOper: {
    serialize: UUIDSerialize,
    parseValue: UUIDSerialize,
    parseLiteral(ast) {
      if (ast.kind !== Kind.STRING) {
        throw new GraphQLError(`${"RegOper" ?? "This scalar"} can only parse string values (kind='${ast.kind}')`);
      }
      return ast.value;
    }
  },
  RegOperator: {
    serialize: UUIDSerialize,
    parseValue: UUIDSerialize,
    parseLiteral(ast) {
      if (ast.kind !== Kind.STRING) {
        throw new GraphQLError(`${"RegOperator" ?? "This scalar"} can only parse string values (kind='${ast.kind}')`);
      }
      return ast.value;
    }
  },
  RegClass: {
    serialize: UUIDSerialize,
    parseValue: UUIDSerialize,
    parseLiteral(ast) {
      if (ast.kind !== Kind.STRING) {
        throw new GraphQLError(`${"RegClass" ?? "This scalar"} can only parse string values (kind='${ast.kind}')`);
      }
      return ast.value;
    }
  },
  RegType: {
    serialize: UUIDSerialize,
    parseValue: UUIDSerialize,
    parseLiteral(ast) {
      if (ast.kind !== Kind.STRING) {
        throw new GraphQLError(`${"RegType" ?? "This scalar"} can only parse string values (kind='${ast.kind}')`);
      }
      return ast.value;
    }
  },
  RegConfig: {
    serialize: UUIDSerialize,
    parseValue: UUIDSerialize,
    parseLiteral(ast) {
      if (ast.kind !== Kind.STRING) {
        throw new GraphQLError(`${"RegConfig" ?? "This scalar"} can only parse string values (kind='${ast.kind}')`);
      }
      return ast.value;
    }
  },
  RegDictionary: {
    serialize: UUIDSerialize,
    parseValue: UUIDSerialize,
    parseLiteral(ast) {
      if (ast.kind !== Kind.STRING) {
        throw new GraphQLError(`${"RegDictionary" ?? "This scalar"} can only parse string values (kind='${ast.kind}')`);
      }
      return ast.value;
    }
  },
  Base64EncodedBinary: {
    serialize(data) {
      if (Buffer.isBuffer(data)) {
        return data.toString("base64");
      } else {
        throw new Error(`Base64EncodeBinary can only be used with Node.js buffers.`);
      }
    },
    parseValue(data) {
      if (typeof data === "string") {
        return Buffer.from(data, "base64");
      } else {
        throw new GraphQLError("Base64EncodedBinary can only parse string values.");
      }
    },
    parseLiteral(ast) {
      if (ast.kind !== Kind.STRING) {
        // TODO: add name to this error
        throw new GraphQLError("Base64EncodedBinary can only parse string values");
      }
      return Buffer.from(ast.value, "base64");
    }
  },
  LTree: {
    serialize(x) {
      return x;
    },
    parseValue: LTreeParseValue,
    parseLiteral(node, variables) {
      return LTreeParseValue(valueFromASTUntyped(node, variables));
    }
  },
  TypesEdge: {
    __assertStep: assertEdgeCapableStep,
    cursor($edge) {
      return $edge.cursor();
    },
    node($edge) {
      return $edge.node();
    }
  },
  TypeCondition: {
    id($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "id",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.int)}`;
        }
      });
    },
    smallint($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "smallint",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.int2)}`;
        }
      });
    },
    bigint($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "bigint",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.bigint)}`;
        }
      });
    },
    numeric($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "numeric",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.numeric)}`;
        }
      });
    },
    decimal($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "decimal",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.numeric)}`;
        }
      });
    },
    boolean($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "boolean",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.boolean)}`;
        }
      });
    },
    varchar($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "varchar",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.varchar)}`;
        }
      });
    },
    enum($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "enum",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, colorCodec)}`;
        }
      });
    },
    enumArray($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "enum_array",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, colorArrayCodec)}`;
        }
      });
    },
    domain($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "domain",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, anIntCodec)}`;
        }
      });
    },
    domain2($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "domain2",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, anotherIntCodec)}`;
        }
      });
    },
    textArray($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "text_array",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, textArrayCodec)}`;
        }
      });
    },
    json($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "json",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.json)}`;
        }
      });
    },
    jsonb($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "jsonb",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.jsonb)}`;
        }
      });
    },
    nullableRange($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "nullable_range",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, numrangeCodec)}`;
        }
      });
    },
    numrange($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "numrange",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, numrangeCodec)}`;
        }
      });
    },
    daterange($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "daterange",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, daterangeCodec)}`;
        }
      });
    },
    anIntRange($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "an_int_range",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, anIntRangeCodec)}`;
        }
      });
    },
    timestamp($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "timestamp",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.timestamp)}`;
        }
      });
    },
    timestamptz($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "timestamptz",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.timestamptz)}`;
        }
      });
    },
    date($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "date",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.date)}`;
        }
      });
    },
    time($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "time",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.time)}`;
        }
      });
    },
    timetz($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "timetz",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.timetz)}`;
        }
      });
    },
    interval($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "interval",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.interval)}`;
        }
      });
    },
    intervalArray($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "interval_array",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, intervalArrayCodec)}`;
        }
      });
    },
    money($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "money",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.money)}`;
        }
      });
    },
    compoundType($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "compound_type",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, compoundTypeCodec)}`;
        }
      });
    },
    nestedCompoundType($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "nested_compound_type",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, nestedCompoundTypeCodec)}`;
        }
      });
    },
    nullableCompoundType($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "nullable_compound_type",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, compoundTypeCodec)}`;
        }
      });
    },
    nullableNestedCompoundType($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "nullable_nested_compound_type",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, nestedCompoundTypeCodec)}`;
        }
      });
    },
    point($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "point",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.point)}`;
        }
      });
    },
    nullablePoint($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "nullablePoint",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.point)}`;
        }
      });
    },
    inet($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "inet",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.inet)}`;
        }
      });
    },
    cidr($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "cidr",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.cidr)}`;
        }
      });
    },
    macaddr($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "macaddr",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.macaddr)}`;
        }
      });
    },
    regproc($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "regproc",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.regproc)}`;
        }
      });
    },
    regprocedure($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "regprocedure",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.regprocedure)}`;
        }
      });
    },
    regoper($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "regoper",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.regoper)}`;
        }
      });
    },
    regoperator($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "regoperator",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.regoperator)}`;
        }
      });
    },
    regclass($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "regclass",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.regclass)}`;
        }
      });
    },
    regtype($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "regtype",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.regtype)}`;
        }
      });
    },
    regconfig($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "regconfig",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.regconfig)}`;
        }
      });
    },
    regdictionary($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "regdictionary",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.regdictionary)}`;
        }
      });
    },
    textArrayDomain($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "text_array_domain",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, textArrayDomainCodec)}`;
        }
      });
    },
    int8ArrayDomain($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "int8_array_domain",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, int8ArrayDomainCodec)}`;
        }
      });
    },
    ltree($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "ltree",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, spec_types_attributes_ltree_codec_ltree)}`;
        }
      });
    },
    ltreeArray($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "ltree_array",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, spec_types_attributes_ltree_array_codec_ltree_)}`;
        }
      });
    }
  },
  NestedCompoundTypeInput: {
    __baked: createObjectAndApplyChildren,
    a(obj, val, {
      field,
      schema
    }) {
      obj.set("a", bakedInputRuntime(schema, field.type, val));
    },
    b(obj, val, {
      field,
      schema
    }) {
      obj.set("b", bakedInputRuntime(schema, field.type, val));
    },
    bazBuz(obj, val, {
      field,
      schema
    }) {
      obj.set("baz_buz", bakedInputRuntime(schema, field.type, val));
    }
  },
  TypesOrderBy: {
    PRIMARY_KEY_ASC(queryBuilder) {
      typesUniques[0].attributes.forEach(attributeName => {
        queryBuilder.orderBy({
          attribute: attributeName,
          direction: "ASC"
        });
      });
      queryBuilder.setOrderIsUnique();
    },
    PRIMARY_KEY_DESC(queryBuilder) {
      typesUniques[0].attributes.forEach(attributeName => {
        queryBuilder.orderBy({
          attribute: attributeName,
          direction: "DESC"
        });
      });
      queryBuilder.setOrderIsUnique();
    },
    ID_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "id",
        direction: "ASC"
      });
      queryBuilder.setOrderIsUnique();
    },
    ID_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "id",
        direction: "DESC"
      });
      queryBuilder.setOrderIsUnique();
    },
    SMALLINT_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "smallint",
        direction: "ASC"
      });
    },
    SMALLINT_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "smallint",
        direction: "DESC"
      });
    },
    BIGINT_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "bigint",
        direction: "ASC"
      });
    },
    BIGINT_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "bigint",
        direction: "DESC"
      });
    },
    NUMERIC_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "numeric",
        direction: "ASC"
      });
    },
    NUMERIC_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "numeric",
        direction: "DESC"
      });
    },
    DECIMAL_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "decimal",
        direction: "ASC"
      });
    },
    DECIMAL_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "decimal",
        direction: "DESC"
      });
    },
    BOOLEAN_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "boolean",
        direction: "ASC"
      });
    },
    BOOLEAN_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "boolean",
        direction: "DESC"
      });
    },
    VARCHAR_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "varchar",
        direction: "ASC"
      });
    },
    VARCHAR_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "varchar",
        direction: "DESC"
      });
    },
    ENUM_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "enum",
        direction: "ASC"
      });
    },
    ENUM_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "enum",
        direction: "DESC"
      });
    },
    DOMAIN_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "domain",
        direction: "ASC"
      });
    },
    DOMAIN_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "domain",
        direction: "DESC"
      });
    },
    DOMAIN2_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "domain2",
        direction: "ASC"
      });
    },
    DOMAIN2_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "domain2",
        direction: "DESC"
      });
    },
    JSON_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "json",
        direction: "ASC"
      });
    },
    JSON_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "json",
        direction: "DESC"
      });
    },
    JSONB_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "jsonb",
        direction: "ASC"
      });
    },
    JSONB_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "jsonb",
        direction: "DESC"
      });
    },
    TIMESTAMP_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "timestamp",
        direction: "ASC"
      });
    },
    TIMESTAMP_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "timestamp",
        direction: "DESC"
      });
    },
    TIMESTAMPTZ_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "timestamptz",
        direction: "ASC"
      });
    },
    TIMESTAMPTZ_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "timestamptz",
        direction: "DESC"
      });
    },
    DATE_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "date",
        direction: "ASC"
      });
    },
    DATE_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "date",
        direction: "DESC"
      });
    },
    TIME_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "time",
        direction: "ASC"
      });
    },
    TIME_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "time",
        direction: "DESC"
      });
    },
    TIMETZ_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "timetz",
        direction: "ASC"
      });
    },
    TIMETZ_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "timetz",
        direction: "DESC"
      });
    },
    INTERVAL_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "interval",
        direction: "ASC"
      });
    },
    INTERVAL_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "interval",
        direction: "DESC"
      });
    },
    MONEY_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "money",
        direction: "ASC"
      });
    },
    MONEY_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "money",
        direction: "DESC"
      });
    },
    COMPOUND_TYPE_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "compound_type",
        direction: "ASC"
      });
    },
    COMPOUND_TYPE_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "compound_type",
        direction: "DESC"
      });
    },
    NESTED_COMPOUND_TYPE_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "nested_compound_type",
        direction: "ASC"
      });
    },
    NESTED_COMPOUND_TYPE_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "nested_compound_type",
        direction: "DESC"
      });
    },
    NULLABLE_COMPOUND_TYPE_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "nullable_compound_type",
        direction: "ASC"
      });
    },
    NULLABLE_COMPOUND_TYPE_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "nullable_compound_type",
        direction: "DESC"
      });
    },
    NULLABLE_NESTED_COMPOUND_TYPE_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "nullable_nested_compound_type",
        direction: "ASC"
      });
    },
    NULLABLE_NESTED_COMPOUND_TYPE_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "nullable_nested_compound_type",
        direction: "DESC"
      });
    },
    POINT_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "point",
        direction: "ASC"
      });
    },
    POINT_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "point",
        direction: "DESC"
      });
    },
    NULLABLE_POINT_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "nullablePoint",
        direction: "ASC"
      });
    },
    NULLABLE_POINT_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "nullablePoint",
        direction: "DESC"
      });
    },
    INET_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "inet",
        direction: "ASC"
      });
    },
    INET_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "inet",
        direction: "DESC"
      });
    },
    CIDR_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "cidr",
        direction: "ASC"
      });
    },
    CIDR_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "cidr",
        direction: "DESC"
      });
    },
    MACADDR_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "macaddr",
        direction: "ASC"
      });
    },
    MACADDR_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "macaddr",
        direction: "DESC"
      });
    },
    REGPROC_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "regproc",
        direction: "ASC"
      });
    },
    REGPROC_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "regproc",
        direction: "DESC"
      });
    },
    REGPROCEDURE_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "regprocedure",
        direction: "ASC"
      });
    },
    REGPROCEDURE_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "regprocedure",
        direction: "DESC"
      });
    },
    REGOPER_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "regoper",
        direction: "ASC"
      });
    },
    REGOPER_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "regoper",
        direction: "DESC"
      });
    },
    REGOPERATOR_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "regoperator",
        direction: "ASC"
      });
    },
    REGOPERATOR_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "regoperator",
        direction: "DESC"
      });
    },
    REGCLASS_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "regclass",
        direction: "ASC"
      });
    },
    REGCLASS_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "regclass",
        direction: "DESC"
      });
    },
    REGTYPE_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "regtype",
        direction: "ASC"
      });
    },
    REGTYPE_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "regtype",
        direction: "DESC"
      });
    },
    REGCONFIG_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "regconfig",
        direction: "ASC"
      });
    },
    REGCONFIG_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "regconfig",
        direction: "DESC"
      });
    },
    REGDICTIONARY_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "regdictionary",
        direction: "ASC"
      });
    },
    REGDICTIONARY_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "regdictionary",
        direction: "DESC"
      });
    },
    LTREE_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "ltree",
        direction: "ASC"
      });
    },
    LTREE_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "ltree",
        direction: "DESC"
      });
    }
  },
  PeopleConnection: {
    __assertStep: ConnectionStep,
    totalCount($connection) {
      return $connection.cloneSubplanWithoutPagination("aggregate").singleAsRecord().select(sql`count(*)`, TYPES.bigint, false);
    }
  },
  PeopleEdge: {
    __assertStep: assertEdgeCapableStep,
    cursor($edge) {
      return $edge.cursor();
    },
    node($edge) {
      return $edge.node();
    }
  },
  PeopleOrderBy: {
    COMPUTED_OUT_ASC(queryBuilder) {
      if (typeof resource_person_computed_outPgResource.from !== "function") {
        throw new Error("Invalid computed attribute 'from'");
      }
      const expression = sql`${resource_person_computed_outPgResource.from({
        placeholder: queryBuilder.alias
      })}`;
      queryBuilder.orderBy({
        codec: resource_person_computed_outPgResource.codec,
        fragment: expression,
        direction: "asc".toUpperCase()
      });
    },
    COMPUTED_OUT_DESC(queryBuilder) {
      if (typeof resource_person_computed_outPgResource.from !== "function") {
        throw new Error("Invalid computed attribute 'from'");
      }
      const expression = sql`${resource_person_computed_outPgResource.from({
        placeholder: queryBuilder.alias
      })}`;
      queryBuilder.orderBy({
        codec: resource_person_computed_outPgResource.codec,
        fragment: expression,
        direction: "desc".toUpperCase()
      });
    },
    FIRST_NAME_ASC(queryBuilder) {
      if (typeof resource_person_first_namePgResource.from !== "function") {
        throw new Error("Invalid computed attribute 'from'");
      }
      const expression = sql`${resource_person_first_namePgResource.from({
        placeholder: queryBuilder.alias
      })}`;
      queryBuilder.orderBy({
        codec: resource_person_first_namePgResource.codec,
        fragment: expression,
        direction: "asc".toUpperCase()
      });
    },
    FIRST_NAME_DESC(queryBuilder) {
      if (typeof resource_person_first_namePgResource.from !== "function") {
        throw new Error("Invalid computed attribute 'from'");
      }
      const expression = sql`${resource_person_first_namePgResource.from({
        placeholder: queryBuilder.alias
      })}`;
      queryBuilder.orderBy({
        codec: resource_person_first_namePgResource.codec,
        fragment: expression,
        direction: "desc".toUpperCase()
      });
    },
    PRIMARY_KEY_ASC(queryBuilder) {
      personUniques[0].attributes.forEach(attributeName => {
        queryBuilder.orderBy({
          attribute: attributeName,
          direction: "ASC"
        });
      });
      queryBuilder.setOrderIsUnique();
    },
    PRIMARY_KEY_DESC(queryBuilder) {
      personUniques[0].attributes.forEach(attributeName => {
        queryBuilder.orderBy({
          attribute: attributeName,
          direction: "DESC"
        });
      });
      queryBuilder.setOrderIsUnique();
    },
    ID_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "id",
        direction: "ASC"
      });
      queryBuilder.setOrderIsUnique();
    },
    ID_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "id",
        direction: "DESC"
      });
      queryBuilder.setOrderIsUnique();
    },
    NAME_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "person_full_name",
        direction: "ASC"
      });
    },
    NAME_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "person_full_name",
        direction: "DESC"
      });
    },
    ABOUT_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "about",
        direction: "ASC"
      });
    },
    ABOUT_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "about",
        direction: "DESC"
      });
    },
    EMAIL_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "email",
        direction: "ASC"
      });
      queryBuilder.setOrderIsUnique();
    },
    EMAIL_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "email",
        direction: "DESC"
      });
      queryBuilder.setOrderIsUnique();
    },
    SITE_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "site",
        direction: "ASC"
      });
    },
    SITE_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "site",
        direction: "DESC"
      });
    },
    CONFIG_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "config",
        direction: "ASC"
      });
    },
    CONFIG_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "config",
        direction: "DESC"
      });
    },
    LAST_LOGIN_FROM_IP_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "last_login_from_ip",
        direction: "ASC"
      });
    },
    LAST_LOGIN_FROM_IP_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "last_login_from_ip",
        direction: "DESC"
      });
    },
    LAST_LOGIN_FROM_SUBNET_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "last_login_from_subnet",
        direction: "ASC"
      });
    },
    LAST_LOGIN_FROM_SUBNET_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "last_login_from_subnet",
        direction: "DESC"
      });
    },
    USER_MAC_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "user_mac",
        direction: "ASC"
      });
    },
    USER_MAC_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "user_mac",
        direction: "DESC"
      });
    },
    CREATED_AT_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "created_at",
        direction: "ASC"
      });
    },
    CREATED_AT_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "created_at",
        direction: "DESC"
      });
    }
  },
  WrappedUrl: {
    __assertStep: assertPgClassSingleStep
  },
  NotNullUrl: {
    serialize: GraphQLString.serialize,
    parseValue: GraphQLString.parseValue,
    parseLiteral: GraphQLString.parseLiteral
  },
  KeyValueHash: {
    serialize(value) {
      return value;
    },
    parseValue(obj) {
      if (isValidHstoreObject(obj)) {
        return obj;
      }
      throw new GraphQLError(`This is not a valid ${"KeyValueHash"} object, it must be a key/value hash where keys and values are both strings (or null).`);
    },
    parseLiteral(ast, variables) {
      switch (ast.kind) {
        case Kind.OBJECT:
          {
            const value = ast.fields.reduce((memo, field) => {
              memo[field.name.value] = parseValueLiteral(field.value, variables);
              return memo;
            }, Object.create(null));
            if (!isValidHstoreObject(value)) {
              return undefined;
            }
            return value;
          }
        case Kind.NULL:
          return null;
        case Kind.VARIABLE:
          {
            const name = ast.name.value;
            const value = variables ? variables[name] : undefined;
            if (!isValidHstoreObject(value)) {
              return undefined;
            }
            return value;
          }
        default:
          return undefined;
      }
    }
  },
  PostsConnection: {
    __assertStep: ConnectionStep,
    totalCount($connection) {
      return $connection.cloneSubplanWithoutPagination("aggregate").singleAsRecord().select(sql`count(*)`, TYPES.bigint, false);
    }
  },
  PostsEdge: {
    __assertStep: assertEdgeCapableStep,
    cursor($edge) {
      return $edge.cursor();
    },
    node($edge) {
      return $edge.node();
    }
  },
  PostCondition: {
    id($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "id",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.int)}`;
        }
      });
    },
    headline($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "headline",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.text)}`;
        }
      });
    },
    body($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "body",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.text)}`;
        }
      });
    },
    authorId($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "author_id",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.int)}`;
        }
      });
    },
    enums($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "enums",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, anEnumArrayCodec)}`;
        }
      });
    },
    comptypes($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "comptypes",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, comptypeArrayCodec)}`;
        }
      });
    },
    computedWithOptionalArg($condition, val) {
      if (val === undefined) return;
      if (typeof resource_post_computed_with_optional_argPgResource.from !== "function") {
        throw new Error("Invalid computed attribute 'from'");
      }
      const expression = sql`${resource_post_computed_with_optional_argPgResource.from({
        placeholder: $condition.alias
      })}`;
      $condition.where(val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, resource_post_computed_with_optional_argPgResource.codec)}`);
    }
  },
  ComptypeInput: {
    __baked: createObjectAndApplyChildren,
    schedule(obj, val, {
      field,
      schema
    }) {
      obj.set("schedule", bakedInputRuntime(schema, field.type, val));
    },
    isOptimised(obj, val, {
      field,
      schema
    }) {
      obj.set("is_optimised", bakedInputRuntime(schema, field.type, val));
    }
  },
  PostsOrderBy: {
    COMPUTED_WITH_OPTIONAL_ARG_ASC(queryBuilder) {
      if (typeof resource_post_computed_with_optional_argPgResource.from !== "function") {
        throw new Error("Invalid computed attribute 'from'");
      }
      const expression = sql`${resource_post_computed_with_optional_argPgResource.from({
        placeholder: queryBuilder.alias
      })}`;
      queryBuilder.orderBy({
        codec: resource_post_computed_with_optional_argPgResource.codec,
        fragment: expression,
        direction: "asc".toUpperCase()
      });
    },
    COMPUTED_WITH_OPTIONAL_ARG_DESC(queryBuilder) {
      if (typeof resource_post_computed_with_optional_argPgResource.from !== "function") {
        throw new Error("Invalid computed attribute 'from'");
      }
      const expression = sql`${resource_post_computed_with_optional_argPgResource.from({
        placeholder: queryBuilder.alias
      })}`;
      queryBuilder.orderBy({
        codec: resource_post_computed_with_optional_argPgResource.codec,
        fragment: expression,
        direction: "desc".toUpperCase()
      });
    },
    PRIMARY_KEY_ASC(queryBuilder) {
      postUniques[0].attributes.forEach(attributeName => {
        queryBuilder.orderBy({
          attribute: attributeName,
          direction: "ASC"
        });
      });
      queryBuilder.setOrderIsUnique();
    },
    PRIMARY_KEY_DESC(queryBuilder) {
      postUniques[0].attributes.forEach(attributeName => {
        queryBuilder.orderBy({
          attribute: attributeName,
          direction: "DESC"
        });
      });
      queryBuilder.setOrderIsUnique();
    },
    ID_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "id",
        direction: "ASC"
      });
      queryBuilder.setOrderIsUnique();
    },
    ID_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "id",
        direction: "DESC"
      });
      queryBuilder.setOrderIsUnique();
    },
    HEADLINE_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "headline",
        direction: "ASC"
      });
    },
    HEADLINE_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "headline",
        direction: "DESC"
      });
    },
    BODY_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "body",
        direction: "ASC"
      });
    },
    BODY_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "body",
        direction: "DESC"
      });
    },
    AUTHOR_ID_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "author_id",
        direction: "ASC"
      });
    },
    AUTHOR_ID_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "author_id",
        direction: "DESC"
      });
    }
  },
  ForeignKeysConnection: {
    __assertStep: ConnectionStep,
    totalCount($connection) {
      return $connection.cloneSubplanWithoutPagination("aggregate").singleAsRecord().select(sql`count(*)`, TYPES.bigint, false);
    }
  },
  ForeignKey: {
    __assertStep: assertPgClassSingleStep,
    personId($record) {
      return $record.get("person_id");
    },
    compoundKey1($record) {
      return $record.get("compound_key_1");
    },
    compoundKey2($record) {
      return $record.get("compound_key_2");
    },
    compoundKeyByCompoundKey1AndCompoundKey2($record) {
      return resource_compound_keyPgResource.get({
        person_id_1: $record.get("compound_key_1"),
        person_id_2: $record.get("compound_key_2")
      });
    },
    personByPersonId($record) {
      return resource_personPgResource.get({
        id: $record.get("person_id")
      });
    }
  },
  ForeignKeysEdge: {
    __assertStep: assertEdgeCapableStep,
    cursor($edge) {
      return $edge.cursor();
    },
    node($edge) {
      return $edge.node();
    }
  },
  ForeignKeyCondition: {
    personId($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "person_id",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.int)}`;
        }
      });
    },
    compoundKey1($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "compound_key_1",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.int)}`;
        }
      });
    },
    compoundKey2($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "compound_key_2",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.int)}`;
        }
      });
    }
  },
  ForeignKeysOrderBy: {
    PERSON_ID_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "person_id",
        direction: "ASC"
      });
    },
    PERSON_ID_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "person_id",
        direction: "DESC"
      });
    },
    COMPOUND_KEY_1_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "compound_key_1",
        direction: "ASC"
      });
    },
    COMPOUND_KEY_1_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "compound_key_1",
        direction: "DESC"
      });
    },
    COMPOUND_KEY_2_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "compound_key_2",
        direction: "ASC"
      });
    },
    COMPOUND_KEY_2_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "compound_key_2",
        direction: "DESC"
      });
    }
  },
  PersonSecret: {
    __assertStep: assertPgClassSingleStep,
    personId($record) {
      return $record.get("person_id");
    },
    secret($record) {
      return $record.get("sekrit");
    },
    personByPersonId($record) {
      return resource_personPgResource.get({
        id: $record.get("person_id")
      });
    }
  },
  LeftArm: {
    __assertStep: assertPgClassSingleStep,
    personId($record) {
      return $record.get("person_id");
    },
    lengthInMetres($record) {
      return $record.get("length_in_metres");
    },
    personByPersonId($record) {
      return resource_personPgResource.get({
        id: $record.get("person_id")
      });
    }
  },
  CompoundKeysConnection: {
    __assertStep: ConnectionStep,
    totalCount($connection) {
      return $connection.cloneSubplanWithoutPagination("aggregate").singleAsRecord().select(sql`count(*)`, TYPES.bigint, false);
    }
  },
  CompoundKeysEdge: {
    __assertStep: assertEdgeCapableStep,
    cursor($edge) {
      return $edge.cursor();
    },
    node($edge) {
      return $edge.node();
    }
  },
  CompoundKeyCondition: {
    personId2($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "person_id_2",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.int)}`;
        }
      });
    },
    personId1($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "person_id_1",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.int)}`;
        }
      });
    },
    extra($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "extra",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.boolean)}`;
        }
      });
    }
  },
  CompoundKeysOrderBy: {
    PRIMARY_KEY_ASC(queryBuilder) {
      compound_keyUniques[0].attributes.forEach(attributeName => {
        queryBuilder.orderBy({
          attribute: attributeName,
          direction: "ASC"
        });
      });
      queryBuilder.setOrderIsUnique();
    },
    PRIMARY_KEY_DESC(queryBuilder) {
      compound_keyUniques[0].attributes.forEach(attributeName => {
        queryBuilder.orderBy({
          attribute: attributeName,
          direction: "DESC"
        });
      });
      queryBuilder.setOrderIsUnique();
    },
    PERSON_ID_2_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "person_id_2",
        direction: "ASC"
      });
    },
    PERSON_ID_2_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "person_id_2",
        direction: "DESC"
      });
    },
    PERSON_ID_1_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "person_id_1",
        direction: "ASC"
      });
      queryBuilder.setOrderIsUnique();
    },
    PERSON_ID_1_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "person_id_1",
        direction: "DESC"
      });
      queryBuilder.setOrderIsUnique();
    },
    EXTRA_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "extra",
        direction: "ASC"
      });
    },
    EXTRA_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "extra",
        direction: "DESC"
      });
    }
  },
  MyTable: {
    __assertStep: assertPgClassSingleStep,
    jsonData($record) {
      return $record.get("json_data");
    }
  },
  ViewTable: {
    __assertStep: assertPgClassSingleStep
  },
  SimilarTable1: {
    __assertStep: assertPgClassSingleStep
  },
  SimilarTable2: {
    __assertStep: assertPgClassSingleStep
  },
  NullTestRecord: {
    __assertStep: assertPgClassSingleStep,
    nullableText($record) {
      return $record.get("nullable_text");
    },
    nullableInt($record) {
      return $record.get("nullable_int");
    },
    nonNullText($record) {
      return $record.get("non_null_text");
    }
  },
  Issue756: {
    __assertStep: assertPgClassSingleStep
  },
  NotNullTimestamp: {
    serialize: UUIDSerialize,
    parseValue: UUIDSerialize,
    parseLiteral(ast) {
      if (ast.kind !== Kind.STRING) {
        throw new GraphQLError(`${"Datetime" ?? "This scalar"} can only parse string values (kind='${ast.kind}')`);
      }
      return ast.value;
    }
  },
  List: {
    __assertStep: assertPgClassSingleStep,
    intArray($record) {
      return $record.get("int_array");
    },
    intArrayNn($record) {
      return $record.get("int_array_nn");
    },
    enumArray($record) {
      return $record.get("enum_array");
    },
    enumArrayNn($record) {
      return $record.get("enum_array_nn");
    },
    dateArray($record) {
      return $record.get("date_array");
    },
    dateArrayNn($record) {
      return $record.get("date_array_nn");
    },
    timestamptzArray($record) {
      return $record.get("timestamptz_array");
    },
    timestamptzArrayNn($record) {
      return $record.get("timestamptz_array_nn");
    },
    compoundTypeArray($record) {
      const $val = $record.get("compound_type_array");
      const $select = pgSelectFromRecords(resource_frmcdc_compoundTypePgResource, $val);
      $select.setTrusted();
      return $select;
    },
    compoundTypeArrayNn($record) {
      const $val = $record.get("compound_type_array_nn");
      const $select = pgSelectFromRecords(resource_frmcdc_compoundTypePgResource, $val);
      $select.setTrusted();
      return $select;
    },
    byteaArray($record) {
      return $record.get("bytea_array");
    },
    byteaArrayNn($record) {
      return $record.get("bytea_array_nn");
    }
  },
  FuncOutSetofConnection: {
    __assertStep: ConnectionStep,
    totalCount($connection) {
      return $connection.cloneSubplanWithoutPagination("aggregate").singleAsRecord().select(sql`count(*)`, TYPES.bigint, false);
    }
  },
  FuncOutSetofEdge: {
    __assertStep: assertEdgeCapableStep,
    cursor($edge) {
      return $edge.cursor();
    },
    node($edge) {
      return $edge.node();
    }
  },
  QueryIntervalSetConnection: {
    __assertStep: ConnectionStep,
    totalCount($connection) {
      return $connection.cloneSubplanWithoutPagination("aggregate").singleAsRecord().select(sql`count(*)`, TYPES.bigint, false);
    }
  },
  QueryIntervalSetEdge: {
    __assertStep: assertEdgeCapableStep,
    cursor($edge) {
      return $edge.cursor();
    },
    node($edge) {
      return $edge.node();
    }
  },
  StaticBigIntegerConnection: {
    __assertStep: ConnectionStep,
    totalCount($connection) {
      return $connection.cloneSubplanWithoutPagination("aggregate").singleAsRecord().select(sql`count(*)`, TYPES.bigint, false);
    }
  },
  StaticBigIntegerEdge: {
    __assertStep: assertEdgeCapableStep,
    cursor($edge) {
      return $edge.cursor();
    },
    node($edge) {
      return $edge.node();
    }
  },
  FuncReturnsTableOneColConnection: {
    __assertStep: ConnectionStep,
    totalCount($connection) {
      return $connection.cloneSubplanWithoutPagination("aggregate").singleAsRecord().select(sql`count(*)`, TYPES.bigint, false);
    }
  },
  FuncReturnsTableOneColEdge: {
    __assertStep: assertEdgeCapableStep,
    cursor($edge) {
      return $edge.cursor();
    },
    node($edge) {
      return $edge.node();
    }
  },
  FuncOutOutRecord: {
    __assertStep: assertPgClassSingleStep,
    firstOut($record) {
      return $record.get("first_out");
    },
    secondOut($record) {
      return $record.get("second_out");
    }
  },
  FuncOutOutSetofConnection: {
    __assertStep: ConnectionStep,
    totalCount($connection) {
      return $connection.cloneSubplanWithoutPagination("aggregate").singleAsRecord().select(sql`count(*)`, TYPES.bigint, false);
    }
  },
  FuncOutOutSetofRecord: {
    __assertStep: assertPgClassSingleStep
  },
  FuncOutOutSetofEdge: {
    __assertStep: assertEdgeCapableStep,
    cursor($edge) {
      return $edge.cursor();
    },
    node($edge) {
      return $edge.node();
    }
  },
  FuncOutOutUnnamedRecord: {
    __assertStep: assertPgClassSingleStep,
    arg1($record) {
      return $record.get("column1");
    },
    arg2($record) {
      return $record.get("column2");
    }
  },
  SearchTestSummariesRecord: {
    __assertStep: assertPgClassSingleStep,
    totalDuration($record) {
      return $record.get("total_duration");
    }
  },
  FuncOutUnnamedOutOutUnnamedRecord: {
    __assertStep: assertPgClassSingleStep,
    arg1($record) {
      return $record.get("column1");
    },
    arg3($record) {
      return $record.get("column3");
    }
  },
  IntSetQueryConnection: {
    __assertStep: ConnectionStep,
    totalCount($connection) {
      return $connection.cloneSubplanWithoutPagination("aggregate").singleAsRecord().select(sql`count(*)`, TYPES.bigint, false);
    }
  },
  IntSetQueryEdge: {
    __assertStep: assertEdgeCapableStep,
    cursor($edge) {
      return $edge.cursor();
    },
    node($edge) {
      return $edge.node();
    }
  },
  FuncReturnsTableMultiColConnection: {
    __assertStep: ConnectionStep,
    totalCount($connection) {
      return $connection.cloneSubplanWithoutPagination("aggregate").singleAsRecord().select(sql`count(*)`, TYPES.bigint, false);
    }
  },
  FuncReturnsTableMultiColRecord: {
    __assertStep: assertPgClassSingleStep
  },
  FuncReturnsTableMultiColEdge: {
    __assertStep: assertEdgeCapableStep,
    cursor($edge) {
      return $edge.cursor();
    },
    node($edge) {
      return $edge.node();
    }
  },
  FuncOutOutCompoundTypeRecord: {
    __assertStep: assertPgClassSingleStep,
    o2($record) {
      const $plan = $record.get("o2");
      const $select = pgSelectSingleFromRecord(resource_frmcdc_compoundTypePgResource, $plan);
      $select.getClassStep().setTrusted();
      return $select;
    }
  },
  QueryOutputTwoRowsRecord: {
    __assertStep: assertPgClassSingleStep,
    leftArm($record) {
      const $plan = $record.get("left_arm");
      const $select = pgSelectSingleFromRecord(resource_left_armPgResource, $plan);
      $select.getClassStep().setTrusted();
      return $select;
    },
    post($record) {
      const $plan = $record.get("post");
      const $select = pgSelectSingleFromRecord(resource_postPgResource, $plan);
      $select.getClassStep().setTrusted();
      return $select;
    }
  },
  CompoundTypesConnection: {
    __assertStep: ConnectionStep,
    totalCount($connection) {
      return $connection.cloneSubplanWithoutPagination("aggregate").singleAsRecord().select(sql`count(*)`, TYPES.bigint, false);
    }
  },
  CompoundTypesEdge: {
    __assertStep: assertEdgeCapableStep,
    cursor($edge) {
      return $edge.cursor();
    },
    node($edge) {
      return $edge.node();
    }
  },
  FuncOutComplexRecord: {
    __assertStep: assertPgClassSingleStep,
    y($record) {
      const $plan = $record.get("y");
      const $select = pgSelectSingleFromRecord(resource_frmcdc_compoundTypePgResource, $plan);
      $select.getClassStep().setTrusted();
      return $select;
    },
    z($record) {
      const $plan = $record.get("z");
      const $select = pgSelectSingleFromRecord(resource_personPgResource, $plan);
      $select.getClassStep().setTrusted();
      return $select;
    }
  },
  FuncOutComplexSetofConnection: {
    __assertStep: ConnectionStep,
    totalCount($connection) {
      return $connection.cloneSubplanWithoutPagination("aggregate").singleAsRecord().select(sql`count(*)`, TYPES.bigint, false);
    }
  },
  FuncOutComplexSetofRecord: {
    __assertStep: assertPgClassSingleStep,
    y($record) {
      const $plan = $record.get("y");
      const $select = pgSelectSingleFromRecord(resource_frmcdc_compoundTypePgResource, $plan);
      $select.getClassStep().setTrusted();
      return $select;
    },
    z($record) {
      const $plan = $record.get("z");
      const $select = pgSelectSingleFromRecord(resource_personPgResource, $plan);
      $select.getClassStep().setTrusted();
      return $select;
    }
  },
  FuncOutComplexSetofEdge: {
    __assertStep: assertEdgeCapableStep,
    cursor($edge) {
      return $edge.cursor();
    },
    node($edge) {
      return $edge.node();
    }
  },
  PersonCondition: {
    id($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "id",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.int)}`;
        }
      });
    },
    name($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "person_full_name",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.varchar)}`;
        }
      });
    },
    aliases($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "aliases",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, textArrayCodec)}`;
        }
      });
    },
    about($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "about",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.text)}`;
        }
      });
    },
    email($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "email",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, emailCodec)}`;
        }
      });
    },
    site($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "site",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, wrappedUrlCodec)}`;
        }
      });
    },
    config($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "config",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.hstore)}`;
        }
      });
    },
    lastLoginFromIp($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "last_login_from_ip",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.inet)}`;
        }
      });
    },
    lastLoginFromSubnet($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "last_login_from_subnet",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.cidr)}`;
        }
      });
    },
    userMac($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "user_mac",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.macaddr)}`;
        }
      });
    },
    createdAt($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "created_at",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.timestamp)}`;
        }
      });
    },
    computedOut($condition, val) {
      if (val === undefined) return;
      if (typeof resource_person_computed_outPgResource.from !== "function") {
        throw new Error("Invalid computed attribute 'from'");
      }
      const expression = sql`${resource_person_computed_outPgResource.from({
        placeholder: $condition.alias
      })}`;
      $condition.where(val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, resource_person_computed_outPgResource.codec)}`);
    }
  },
  WrappedUrlInput: {
    __baked: createObjectAndApplyChildren,
    url(obj, val, {
      field,
      schema
    }) {
      obj.set("url", bakedInputRuntime(schema, field.type, val));
    }
  },
  NonUpdatableViewsConnection: {
    __assertStep: ConnectionStep,
    totalCount($connection) {
      return $connection.cloneSubplanWithoutPagination("aggregate").singleAsRecord().select(sql`count(*)`, TYPES.bigint, false);
    }
  },
  NonUpdatableView: {
    __assertStep: assertPgClassSingleStep,
    column($record) {
      return $record.get("?column?");
    }
  },
  NonUpdatableViewsEdge: {
    __assertStep: assertEdgeCapableStep,
    cursor($edge) {
      return $edge.cursor();
    },
    node($edge) {
      return $edge.node();
    }
  },
  NonUpdatableViewCondition: {
    column($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "?column?",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.int)}`;
        }
      });
    }
  },
  NonUpdatableViewsOrderBy: {
    COLUMN_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "?column?",
        direction: "ASC"
      });
    },
    COLUMN_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "?column?",
        direction: "DESC"
      });
    }
  },
  InputsConnection: {
    __assertStep: ConnectionStep,
    totalCount($connection) {
      return $connection.cloneSubplanWithoutPagination("aggregate").singleAsRecord().select(sql`count(*)`, TYPES.bigint, false);
    }
  },
  InputsEdge: {
    __assertStep: assertEdgeCapableStep,
    cursor($edge) {
      return $edge.cursor();
    },
    node($edge) {
      return $edge.node();
    }
  },
  InputCondition: {
    id($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "id",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.int)}`;
        }
      });
    }
  },
  InputsOrderBy: {
    PRIMARY_KEY_ASC(queryBuilder) {
      inputsUniques[0].attributes.forEach(attributeName => {
        queryBuilder.orderBy({
          attribute: attributeName,
          direction: "ASC"
        });
      });
      queryBuilder.setOrderIsUnique();
    },
    PRIMARY_KEY_DESC(queryBuilder) {
      inputsUniques[0].attributes.forEach(attributeName => {
        queryBuilder.orderBy({
          attribute: attributeName,
          direction: "DESC"
        });
      });
      queryBuilder.setOrderIsUnique();
    },
    ID_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "id",
        direction: "ASC"
      });
      queryBuilder.setOrderIsUnique();
    },
    ID_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "id",
        direction: "DESC"
      });
      queryBuilder.setOrderIsUnique();
    }
  },
  PatchesConnection: {
    __assertStep: ConnectionStep,
    totalCount($connection) {
      return $connection.cloneSubplanWithoutPagination("aggregate").singleAsRecord().select(sql`count(*)`, TYPES.bigint, false);
    }
  },
  PatchesEdge: {
    __assertStep: assertEdgeCapableStep,
    cursor($edge) {
      return $edge.cursor();
    },
    node($edge) {
      return $edge.node();
    }
  },
  PatchCondition: {
    id($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "id",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.int)}`;
        }
      });
    }
  },
  PatchesOrderBy: {
    PRIMARY_KEY_ASC(queryBuilder) {
      patchsUniques[0].attributes.forEach(attributeName => {
        queryBuilder.orderBy({
          attribute: attributeName,
          direction: "ASC"
        });
      });
      queryBuilder.setOrderIsUnique();
    },
    PRIMARY_KEY_DESC(queryBuilder) {
      patchsUniques[0].attributes.forEach(attributeName => {
        queryBuilder.orderBy({
          attribute: attributeName,
          direction: "DESC"
        });
      });
      queryBuilder.setOrderIsUnique();
    },
    ID_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "id",
        direction: "ASC"
      });
      queryBuilder.setOrderIsUnique();
    },
    ID_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "id",
        direction: "DESC"
      });
      queryBuilder.setOrderIsUnique();
    }
  },
  ReservedsConnection: {
    __assertStep: ConnectionStep,
    totalCount($connection) {
      return $connection.cloneSubplanWithoutPagination("aggregate").singleAsRecord().select(sql`count(*)`, TYPES.bigint, false);
    }
  },
  ReservedsEdge: {
    __assertStep: assertEdgeCapableStep,
    cursor($edge) {
      return $edge.cursor();
    },
    node($edge) {
      return $edge.node();
    }
  },
  ReservedCondition: {
    id($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "id",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.int)}`;
        }
      });
    }
  },
  ReservedsOrderBy: {
    PRIMARY_KEY_ASC(queryBuilder) {
      reservedUniques[0].attributes.forEach(attributeName => {
        queryBuilder.orderBy({
          attribute: attributeName,
          direction: "ASC"
        });
      });
      queryBuilder.setOrderIsUnique();
    },
    PRIMARY_KEY_DESC(queryBuilder) {
      reservedUniques[0].attributes.forEach(attributeName => {
        queryBuilder.orderBy({
          attribute: attributeName,
          direction: "DESC"
        });
      });
      queryBuilder.setOrderIsUnique();
    },
    ID_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "id",
        direction: "ASC"
      });
      queryBuilder.setOrderIsUnique();
    },
    ID_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "id",
        direction: "DESC"
      });
      queryBuilder.setOrderIsUnique();
    }
  },
  ReservedPatchRecordsConnection: {
    __assertStep: ConnectionStep,
    totalCount($connection) {
      return $connection.cloneSubplanWithoutPagination("aggregate").singleAsRecord().select(sql`count(*)`, TYPES.bigint, false);
    }
  },
  ReservedPatchRecordsEdge: {
    __assertStep: assertEdgeCapableStep,
    cursor($edge) {
      return $edge.cursor();
    },
    node($edge) {
      return $edge.node();
    }
  },
  ReservedPatchRecordCondition: {
    id($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "id",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.int)}`;
        }
      });
    }
  },
  ReservedPatchRecordsOrderBy: {
    PRIMARY_KEY_ASC(queryBuilder) {
      reservedPatchsUniques[0].attributes.forEach(attributeName => {
        queryBuilder.orderBy({
          attribute: attributeName,
          direction: "ASC"
        });
      });
      queryBuilder.setOrderIsUnique();
    },
    PRIMARY_KEY_DESC(queryBuilder) {
      reservedPatchsUniques[0].attributes.forEach(attributeName => {
        queryBuilder.orderBy({
          attribute: attributeName,
          direction: "DESC"
        });
      });
      queryBuilder.setOrderIsUnique();
    },
    ID_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "id",
        direction: "ASC"
      });
      queryBuilder.setOrderIsUnique();
    },
    ID_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "id",
        direction: "DESC"
      });
      queryBuilder.setOrderIsUnique();
    }
  },
  ReservedInputRecordsConnection: {
    __assertStep: ConnectionStep,
    totalCount($connection) {
      return $connection.cloneSubplanWithoutPagination("aggregate").singleAsRecord().select(sql`count(*)`, TYPES.bigint, false);
    }
  },
  ReservedInputRecordsEdge: {
    __assertStep: assertEdgeCapableStep,
    cursor($edge) {
      return $edge.cursor();
    },
    node($edge) {
      return $edge.node();
    }
  },
  ReservedInputRecordCondition: {
    id($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "id",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.int)}`;
        }
      });
    }
  },
  ReservedInputRecordsOrderBy: {
    PRIMARY_KEY_ASC(queryBuilder) {
      reserved_inputUniques[0].attributes.forEach(attributeName => {
        queryBuilder.orderBy({
          attribute: attributeName,
          direction: "ASC"
        });
      });
      queryBuilder.setOrderIsUnique();
    },
    PRIMARY_KEY_DESC(queryBuilder) {
      reserved_inputUniques[0].attributes.forEach(attributeName => {
        queryBuilder.orderBy({
          attribute: attributeName,
          direction: "DESC"
        });
      });
      queryBuilder.setOrderIsUnique();
    },
    ID_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "id",
        direction: "ASC"
      });
      queryBuilder.setOrderIsUnique();
    },
    ID_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "id",
        direction: "DESC"
      });
      queryBuilder.setOrderIsUnique();
    }
  },
  DefaultValuesConnection: {
    __assertStep: ConnectionStep,
    totalCount($connection) {
      return $connection.cloneSubplanWithoutPagination("aggregate").singleAsRecord().select(sql`count(*)`, TYPES.bigint, false);
    }
  },
  DefaultValuesEdge: {
    __assertStep: assertEdgeCapableStep,
    cursor($edge) {
      return $edge.cursor();
    },
    node($edge) {
      return $edge.node();
    }
  },
  DefaultValueCondition: {
    id($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "id",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.int)}`;
        }
      });
    },
    nullValue($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "null_value",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.text)}`;
        }
      });
    }
  },
  DefaultValuesOrderBy: {
    PRIMARY_KEY_ASC(queryBuilder) {
      default_valueUniques[0].attributes.forEach(attributeName => {
        queryBuilder.orderBy({
          attribute: attributeName,
          direction: "ASC"
        });
      });
      queryBuilder.setOrderIsUnique();
    },
    PRIMARY_KEY_DESC(queryBuilder) {
      default_valueUniques[0].attributes.forEach(attributeName => {
        queryBuilder.orderBy({
          attribute: attributeName,
          direction: "DESC"
        });
      });
      queryBuilder.setOrderIsUnique();
    },
    ID_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "id",
        direction: "ASC"
      });
      queryBuilder.setOrderIsUnique();
    },
    ID_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "id",
        direction: "DESC"
      });
      queryBuilder.setOrderIsUnique();
    },
    NULL_VALUE_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "null_value",
        direction: "ASC"
      });
    },
    NULL_VALUE_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "null_value",
        direction: "DESC"
      });
    }
  },
  NoPrimaryKeysConnection: {
    __assertStep: ConnectionStep,
    totalCount($connection) {
      return $connection.cloneSubplanWithoutPagination("aggregate").singleAsRecord().select(sql`count(*)`, TYPES.bigint, false);
    }
  },
  NoPrimaryKeysEdge: {
    __assertStep: assertEdgeCapableStep,
    cursor($edge) {
      return $edge.cursor();
    },
    node($edge) {
      return $edge.node();
    }
  },
  NoPrimaryKeyCondition: {
    id($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "id",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.int)}`;
        }
      });
    },
    str($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "str",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.text)}`;
        }
      });
    }
  },
  NoPrimaryKeysOrderBy: {
    ID_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "id",
        direction: "ASC"
      });
      queryBuilder.setOrderIsUnique();
    },
    ID_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "id",
        direction: "DESC"
      });
      queryBuilder.setOrderIsUnique();
    },
    STR_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "str",
        direction: "ASC"
      });
    },
    STR_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "str",
        direction: "DESC"
      });
    }
  },
  TestviewsConnection: {
    __assertStep: ConnectionStep,
    totalCount($connection) {
      return $connection.cloneSubplanWithoutPagination("aggregate").singleAsRecord().select(sql`count(*)`, TYPES.bigint, false);
    }
  },
  Testview: {
    __assertStep: assertPgClassSingleStep
  },
  TestviewsEdge: {
    __assertStep: assertEdgeCapableStep,
    cursor($edge) {
      return $edge.cursor();
    },
    node($edge) {
      return $edge.node();
    }
  },
  TestviewCondition: {
    testviewid($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "testviewid",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.int)}`;
        }
      });
    },
    col1($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "col1",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.int)}`;
        }
      });
    },
    col2($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "col2",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.int)}`;
        }
      });
    }
  },
  TestviewsOrderBy: {
    TESTVIEWID_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "testviewid",
        direction: "ASC"
      });
    },
    TESTVIEWID_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "testviewid",
        direction: "DESC"
      });
    },
    COL1_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "col1",
        direction: "ASC"
      });
    },
    COL1_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "col1",
        direction: "DESC"
      });
    },
    COL2_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "col2",
        direction: "ASC"
      });
    },
    COL2_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "col2",
        direction: "DESC"
      });
    }
  },
  MyTablesConnection: {
    __assertStep: ConnectionStep,
    totalCount($connection) {
      return $connection.cloneSubplanWithoutPagination("aggregate").singleAsRecord().select(sql`count(*)`, TYPES.bigint, false);
    }
  },
  MyTablesEdge: {
    __assertStep: assertEdgeCapableStep,
    cursor($edge) {
      return $edge.cursor();
    },
    node($edge) {
      return $edge.node();
    }
  },
  MyTableCondition: {
    id($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "id",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.int)}`;
        }
      });
    },
    jsonData($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "json_data",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.jsonb)}`;
        }
      });
    }
  },
  MyTablesOrderBy: {
    PRIMARY_KEY_ASC(queryBuilder) {
      my_tableUniques[0].attributes.forEach(attributeName => {
        queryBuilder.orderBy({
          attribute: attributeName,
          direction: "ASC"
        });
      });
      queryBuilder.setOrderIsUnique();
    },
    PRIMARY_KEY_DESC(queryBuilder) {
      my_tableUniques[0].attributes.forEach(attributeName => {
        queryBuilder.orderBy({
          attribute: attributeName,
          direction: "DESC"
        });
      });
      queryBuilder.setOrderIsUnique();
    },
    ID_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "id",
        direction: "ASC"
      });
      queryBuilder.setOrderIsUnique();
    },
    ID_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "id",
        direction: "DESC"
      });
      queryBuilder.setOrderIsUnique();
    },
    JSON_DATA_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "json_data",
        direction: "ASC"
      });
    },
    JSON_DATA_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "json_data",
        direction: "DESC"
      });
    }
  },
  PersonSecretsConnection: {
    __assertStep: ConnectionStep,
    totalCount($connection) {
      return $connection.cloneSubplanWithoutPagination("aggregate").singleAsRecord().select(sql`count(*)`, TYPES.bigint, false);
    }
  },
  PersonSecretsEdge: {
    __assertStep: assertEdgeCapableStep,
    cursor($edge) {
      return $edge.cursor();
    },
    node($edge) {
      return $edge.node();
    }
  },
  PersonSecretCondition: {
    personId($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "person_id",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.int)}`;
        }
      });
    },
    secret($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "sekrit",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.text)}`;
        }
      });
    }
  },
  PersonSecretsOrderBy: {
    PRIMARY_KEY_ASC(queryBuilder) {
      person_secretUniques[0].attributes.forEach(attributeName => {
        queryBuilder.orderBy({
          attribute: attributeName,
          direction: "ASC"
        });
      });
      queryBuilder.setOrderIsUnique();
    },
    PRIMARY_KEY_DESC(queryBuilder) {
      person_secretUniques[0].attributes.forEach(attributeName => {
        queryBuilder.orderBy({
          attribute: attributeName,
          direction: "DESC"
        });
      });
      queryBuilder.setOrderIsUnique();
    },
    PERSON_ID_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "person_id",
        direction: "ASC"
      });
      queryBuilder.setOrderIsUnique();
    },
    PERSON_ID_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "person_id",
        direction: "DESC"
      });
      queryBuilder.setOrderIsUnique();
    },
    SECRET_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "sekrit",
        direction: "ASC"
      });
    },
    SECRET_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "sekrit",
        direction: "DESC"
      });
    }
  },
  ViewTablesConnection: {
    __assertStep: ConnectionStep,
    totalCount($connection) {
      return $connection.cloneSubplanWithoutPagination("aggregate").singleAsRecord().select(sql`count(*)`, TYPES.bigint, false);
    }
  },
  ViewTablesEdge: {
    __assertStep: assertEdgeCapableStep,
    cursor($edge) {
      return $edge.cursor();
    },
    node($edge) {
      return $edge.node();
    }
  },
  ViewTableCondition: {
    id($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "id",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.int)}`;
        }
      });
    },
    col1($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "col1",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.int)}`;
        }
      });
    },
    col2($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "col2",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.int)}`;
        }
      });
    }
  },
  ViewTablesOrderBy: {
    PRIMARY_KEY_ASC(queryBuilder) {
      view_tableUniques[0].attributes.forEach(attributeName => {
        queryBuilder.orderBy({
          attribute: attributeName,
          direction: "ASC"
        });
      });
      queryBuilder.setOrderIsUnique();
    },
    PRIMARY_KEY_DESC(queryBuilder) {
      view_tableUniques[0].attributes.forEach(attributeName => {
        queryBuilder.orderBy({
          attribute: attributeName,
          direction: "DESC"
        });
      });
      queryBuilder.setOrderIsUnique();
    },
    ID_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "id",
        direction: "ASC"
      });
      queryBuilder.setOrderIsUnique();
    },
    ID_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "id",
        direction: "DESC"
      });
      queryBuilder.setOrderIsUnique();
    },
    COL1_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "col1",
        direction: "ASC"
      });
    },
    COL1_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "col1",
        direction: "DESC"
      });
    },
    COL2_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "col2",
        direction: "ASC"
      });
    },
    COL2_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "col2",
        direction: "DESC"
      });
    }
  },
  SimilarTable1SConnection: {
    __assertStep: ConnectionStep,
    totalCount($connection) {
      return $connection.cloneSubplanWithoutPagination("aggregate").singleAsRecord().select(sql`count(*)`, TYPES.bigint, false);
    }
  },
  SimilarTable1SEdge: {
    __assertStep: assertEdgeCapableStep,
    cursor($edge) {
      return $edge.cursor();
    },
    node($edge) {
      return $edge.node();
    }
  },
  SimilarTable1Condition: {
    id($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "id",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.int)}`;
        }
      });
    },
    col1($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "col1",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.int)}`;
        }
      });
    },
    col2($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "col2",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.int)}`;
        }
      });
    },
    col3($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "col3",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.int)}`;
        }
      });
    }
  },
  SimilarTable1SOrderBy: {
    PRIMARY_KEY_ASC(queryBuilder) {
      similar_table_1Uniques[0].attributes.forEach(attributeName => {
        queryBuilder.orderBy({
          attribute: attributeName,
          direction: "ASC"
        });
      });
      queryBuilder.setOrderIsUnique();
    },
    PRIMARY_KEY_DESC(queryBuilder) {
      similar_table_1Uniques[0].attributes.forEach(attributeName => {
        queryBuilder.orderBy({
          attribute: attributeName,
          direction: "DESC"
        });
      });
      queryBuilder.setOrderIsUnique();
    },
    ID_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "id",
        direction: "ASC"
      });
      queryBuilder.setOrderIsUnique();
    },
    ID_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "id",
        direction: "DESC"
      });
      queryBuilder.setOrderIsUnique();
    },
    COL1_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "col1",
        direction: "ASC"
      });
    },
    COL1_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "col1",
        direction: "DESC"
      });
    },
    COL2_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "col2",
        direction: "ASC"
      });
    },
    COL2_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "col2",
        direction: "DESC"
      });
    },
    COL3_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "col3",
        direction: "ASC"
      });
    },
    COL3_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "col3",
        direction: "DESC"
      });
    }
  },
  SimilarTable2SConnection: {
    __assertStep: ConnectionStep,
    totalCount($connection) {
      return $connection.cloneSubplanWithoutPagination("aggregate").singleAsRecord().select(sql`count(*)`, TYPES.bigint, false);
    }
  },
  SimilarTable2SEdge: {
    __assertStep: assertEdgeCapableStep,
    cursor($edge) {
      return $edge.cursor();
    },
    node($edge) {
      return $edge.node();
    }
  },
  SimilarTable2Condition: {
    id($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "id",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.int)}`;
        }
      });
    },
    col3($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "col3",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.int)}`;
        }
      });
    },
    col4($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "col4",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.int)}`;
        }
      });
    },
    col5($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "col5",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.int)}`;
        }
      });
    }
  },
  SimilarTable2SOrderBy: {
    PRIMARY_KEY_ASC(queryBuilder) {
      similar_table_2Uniques[0].attributes.forEach(attributeName => {
        queryBuilder.orderBy({
          attribute: attributeName,
          direction: "ASC"
        });
      });
      queryBuilder.setOrderIsUnique();
    },
    PRIMARY_KEY_DESC(queryBuilder) {
      similar_table_2Uniques[0].attributes.forEach(attributeName => {
        queryBuilder.orderBy({
          attribute: attributeName,
          direction: "DESC"
        });
      });
      queryBuilder.setOrderIsUnique();
    },
    ID_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "id",
        direction: "ASC"
      });
      queryBuilder.setOrderIsUnique();
    },
    ID_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "id",
        direction: "DESC"
      });
      queryBuilder.setOrderIsUnique();
    },
    COL3_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "col3",
        direction: "ASC"
      });
    },
    COL3_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "col3",
        direction: "DESC"
      });
    },
    COL4_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "col4",
        direction: "ASC"
      });
    },
    COL4_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "col4",
        direction: "DESC"
      });
    },
    COL5_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "col5",
        direction: "ASC"
      });
    },
    COL5_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "col5",
        direction: "DESC"
      });
    }
  },
  UpdatableViewsConnection: {
    __assertStep: ConnectionStep,
    totalCount($connection) {
      return $connection.cloneSubplanWithoutPagination("aggregate").singleAsRecord().select(sql`count(*)`, TYPES.bigint, false);
    }
  },
  UpdatableView: {
    __assertStep: assertPgClassSingleStep
  },
  UpdatableViewsEdge: {
    __assertStep: assertEdgeCapableStep,
    cursor($edge) {
      return $edge.cursor();
    },
    node($edge) {
      return $edge.node();
    }
  },
  UpdatableViewCondition: {
    x($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "x",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.int)}`;
        }
      });
    },
    name($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "name",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.varchar)}`;
        }
      });
    },
    description($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "description",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.text)}`;
        }
      });
    },
    constant($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "constant",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.int)}`;
        }
      });
    }
  },
  UpdatableViewsOrderBy: {
    X_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "x",
        direction: "ASC"
      });
      queryBuilder.setOrderIsUnique();
    },
    X_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "x",
        direction: "DESC"
      });
      queryBuilder.setOrderIsUnique();
    },
    NAME_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "name",
        direction: "ASC"
      });
    },
    NAME_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "name",
        direction: "DESC"
      });
    },
    DESCRIPTION_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "description",
        direction: "ASC"
      });
    },
    DESCRIPTION_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "description",
        direction: "DESC"
      });
    },
    CONSTANT_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "constant",
        direction: "ASC"
      });
    },
    CONSTANT_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "constant",
        direction: "DESC"
      });
    }
  },
  NullTestRecordsConnection: {
    __assertStep: ConnectionStep,
    totalCount($connection) {
      return $connection.cloneSubplanWithoutPagination("aggregate").singleAsRecord().select(sql`count(*)`, TYPES.bigint, false);
    }
  },
  NullTestRecordsEdge: {
    __assertStep: assertEdgeCapableStep,
    cursor($edge) {
      return $edge.cursor();
    },
    node($edge) {
      return $edge.node();
    }
  },
  NullTestRecordCondition: {
    id($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "id",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.int)}`;
        }
      });
    },
    nullableText($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "nullable_text",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.text)}`;
        }
      });
    },
    nullableInt($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "nullable_int",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.int)}`;
        }
      });
    },
    nonNullText($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "non_null_text",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.text)}`;
        }
      });
    }
  },
  NullTestRecordsOrderBy: {
    PRIMARY_KEY_ASC(queryBuilder) {
      null_test_recordUniques[0].attributes.forEach(attributeName => {
        queryBuilder.orderBy({
          attribute: attributeName,
          direction: "ASC"
        });
      });
      queryBuilder.setOrderIsUnique();
    },
    PRIMARY_KEY_DESC(queryBuilder) {
      null_test_recordUniques[0].attributes.forEach(attributeName => {
        queryBuilder.orderBy({
          attribute: attributeName,
          direction: "DESC"
        });
      });
      queryBuilder.setOrderIsUnique();
    },
    ID_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "id",
        direction: "ASC"
      });
      queryBuilder.setOrderIsUnique();
    },
    ID_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "id",
        direction: "DESC"
      });
      queryBuilder.setOrderIsUnique();
    },
    NULLABLE_TEXT_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "nullable_text",
        direction: "ASC"
      });
    },
    NULLABLE_TEXT_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "nullable_text",
        direction: "DESC"
      });
    },
    NULLABLE_INT_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "nullable_int",
        direction: "ASC"
      });
    },
    NULLABLE_INT_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "nullable_int",
        direction: "DESC"
      });
    },
    NON_NULL_TEXT_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "non_null_text",
        direction: "ASC"
      });
    },
    NON_NULL_TEXT_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "non_null_text",
        direction: "DESC"
      });
    }
  },
  EdgeCasesConnection: {
    __assertStep: ConnectionStep,
    totalCount($connection) {
      return $connection.cloneSubplanWithoutPagination("aggregate").singleAsRecord().select(sql`count(*)`, TYPES.bigint, false);
    }
  },
  EdgeCase: {
    __assertStep: assertPgClassSingleStep,
    computed($in, args, _info) {
      const {
        $row,
        selectArgs
      } = pgFunctionArgumentsFromArgs($in, makeArgs_person_computed_out(args), true);
      const from = pgFromExpression($row, resource_edge_case_computedPgResource.from, resource_edge_case_computedPgResource.parameters, selectArgs);
      return pgClassExpression($row, resource_edge_case_computedPgResource.codec, undefined)`${from}`;
    },
    notNullHasDefault($record) {
      return $record.get("not_null_has_default");
    },
    wontCastEasy($record) {
      return $record.get("wont_cast_easy");
    },
    rowId($record) {
      return $record.get("row_id");
    }
  },
  EdgeCasesEdge: {
    __assertStep: assertEdgeCapableStep,
    cursor($edge) {
      return $edge.cursor();
    },
    node($edge) {
      return $edge.node();
    }
  },
  EdgeCaseCondition: {
    notNullHasDefault($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "not_null_has_default",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.boolean)}`;
        }
      });
    },
    wontCastEasy($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "wont_cast_easy",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.int2)}`;
        }
      });
    },
    rowId($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "row_id",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.int)}`;
        }
      });
    }
  },
  EdgeCasesOrderBy: {
    NOT_NULL_HAS_DEFAULT_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "not_null_has_default",
        direction: "ASC"
      });
    },
    NOT_NULL_HAS_DEFAULT_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "not_null_has_default",
        direction: "DESC"
      });
    },
    WONT_CAST_EASY_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "wont_cast_easy",
        direction: "ASC"
      });
    },
    WONT_CAST_EASY_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "wont_cast_easy",
        direction: "DESC"
      });
    },
    ROW_ID_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "row_id",
        direction: "ASC"
      });
    },
    ROW_ID_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "row_id",
        direction: "DESC"
      });
    }
  },
  LeftArmsConnection: {
    __assertStep: ConnectionStep,
    totalCount($connection) {
      return $connection.cloneSubplanWithoutPagination("aggregate").singleAsRecord().select(sql`count(*)`, TYPES.bigint, false);
    }
  },
  LeftArmsEdge: {
    __assertStep: assertEdgeCapableStep,
    cursor($edge) {
      return $edge.cursor();
    },
    node($edge) {
      return $edge.node();
    }
  },
  LeftArmCondition: {
    id($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "id",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.int)}`;
        }
      });
    },
    personId($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "person_id",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.int)}`;
        }
      });
    },
    lengthInMetres($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "length_in_metres",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.float)}`;
        }
      });
    },
    mood($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "mood",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.text)}`;
        }
      });
    }
  },
  LeftArmsOrderBy: {
    PRIMARY_KEY_ASC(queryBuilder) {
      left_armUniques[0].attributes.forEach(attributeName => {
        queryBuilder.orderBy({
          attribute: attributeName,
          direction: "ASC"
        });
      });
      queryBuilder.setOrderIsUnique();
    },
    PRIMARY_KEY_DESC(queryBuilder) {
      left_armUniques[0].attributes.forEach(attributeName => {
        queryBuilder.orderBy({
          attribute: attributeName,
          direction: "DESC"
        });
      });
      queryBuilder.setOrderIsUnique();
    },
    ID_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "id",
        direction: "ASC"
      });
      queryBuilder.setOrderIsUnique();
    },
    ID_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "id",
        direction: "DESC"
      });
      queryBuilder.setOrderIsUnique();
    },
    PERSON_ID_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "person_id",
        direction: "ASC"
      });
      queryBuilder.setOrderIsUnique();
    },
    PERSON_ID_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "person_id",
        direction: "DESC"
      });
      queryBuilder.setOrderIsUnique();
    },
    LENGTH_IN_METRES_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "length_in_metres",
        direction: "ASC"
      });
    },
    LENGTH_IN_METRES_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "length_in_metres",
        direction: "DESC"
      });
    },
    MOOD_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "mood",
        direction: "ASC"
      });
    },
    MOOD_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "mood",
        direction: "DESC"
      });
    }
  },
  Issue756SConnection: {
    __assertStep: ConnectionStep,
    totalCount($connection) {
      return $connection.cloneSubplanWithoutPagination("aggregate").singleAsRecord().select(sql`count(*)`, TYPES.bigint, false);
    }
  },
  Issue756SEdge: {
    __assertStep: assertEdgeCapableStep,
    cursor($edge) {
      return $edge.cursor();
    },
    node($edge) {
      return $edge.node();
    }
  },
  Issue756Condition: {
    id($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "id",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.int)}`;
        }
      });
    },
    ts($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "ts",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, notNullTimestampCodec)}`;
        }
      });
    }
  },
  Issue756SOrderBy: {
    PRIMARY_KEY_ASC(queryBuilder) {
      issue756Uniques[0].attributes.forEach(attributeName => {
        queryBuilder.orderBy({
          attribute: attributeName,
          direction: "ASC"
        });
      });
      queryBuilder.setOrderIsUnique();
    },
    PRIMARY_KEY_DESC(queryBuilder) {
      issue756Uniques[0].attributes.forEach(attributeName => {
        queryBuilder.orderBy({
          attribute: attributeName,
          direction: "DESC"
        });
      });
      queryBuilder.setOrderIsUnique();
    },
    ID_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "id",
        direction: "ASC"
      });
      queryBuilder.setOrderIsUnique();
    },
    ID_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "id",
        direction: "DESC"
      });
      queryBuilder.setOrderIsUnique();
    },
    TS_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "ts",
        direction: "ASC"
      });
    },
    TS_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "ts",
        direction: "DESC"
      });
    }
  },
  ListsConnection: {
    __assertStep: ConnectionStep,
    totalCount($connection) {
      return $connection.cloneSubplanWithoutPagination("aggregate").singleAsRecord().select(sql`count(*)`, TYPES.bigint, false);
    }
  },
  ListsEdge: {
    __assertStep: assertEdgeCapableStep,
    cursor($edge) {
      return $edge.cursor();
    },
    node($edge) {
      return $edge.node();
    }
  },
  ListCondition: {
    id($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "id",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, TYPES.int)}`;
        }
      });
    },
    intArray($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "int_array",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, int4ArrayCodec)}`;
        }
      });
    },
    intArrayNn($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "int_array_nn",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, int4ArrayCodec)}`;
        }
      });
    },
    enumArray($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "enum_array",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, colorArrayCodec)}`;
        }
      });
    },
    enumArrayNn($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "enum_array_nn",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, colorArrayCodec)}`;
        }
      });
    },
    dateArray($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "date_array",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, dateArrayCodec)}`;
        }
      });
    },
    dateArrayNn($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "date_array_nn",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, dateArrayCodec)}`;
        }
      });
    },
    timestamptzArray($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "timestamptz_array",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, timestamptzArrayCodec)}`;
        }
      });
    },
    timestamptzArrayNn($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "timestamptz_array_nn",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, timestamptzArrayCodec)}`;
        }
      });
    },
    compoundTypeArray($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "compound_type_array",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, compoundTypeArrayCodec)}`;
        }
      });
    },
    compoundTypeArrayNn($condition, val) {
      $condition.where({
        type: "attribute",
        attribute: "compound_type_array_nn",
        callback(expression) {
          return val === null ? sql`${expression} is null` : sql`${expression} = ${sqlValueWithCodec(val, compoundTypeArrayCodec)}`;
        }
      });
    }
  },
  ListsOrderBy: {
    PRIMARY_KEY_ASC(queryBuilder) {
      listsUniques[0].attributes.forEach(attributeName => {
        queryBuilder.orderBy({
          attribute: attributeName,
          direction: "ASC"
        });
      });
      queryBuilder.setOrderIsUnique();
    },
    PRIMARY_KEY_DESC(queryBuilder) {
      listsUniques[0].attributes.forEach(attributeName => {
        queryBuilder.orderBy({
          attribute: attributeName,
          direction: "DESC"
        });
      });
      queryBuilder.setOrderIsUnique();
    },
    ID_ASC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "id",
        direction: "ASC"
      });
      queryBuilder.setOrderIsUnique();
    },
    ID_DESC(queryBuilder) {
      queryBuilder.orderBy({
        attribute: "id",
        direction: "DESC"
      });
      queryBuilder.setOrderIsUnique();
    }
  },
  Mutation: {
    __assertStep: __ValueStep,
    mutationOut: {
      plan($root, args, _info) {
        const selectArgs = makeArgs_person_computed_out(args, ["input"]);
        const $result = resource_mutation_outPgResource.execute(selectArgs, "mutation");
        return object({
          result: $result
        });
      },
      args: {
        input(_, $object, arg) {
          // We might have any number of step types here; we need
          // to get back to the underlying pgSelect.
          const $result = $object.getStepForKey("result");
          const $parent = "getParentStep" in $result ? $result.getParentStep() : $result;
          const $pgSelect = "getClassStep" in $parent ? $parent.getClassStep() : $parent;
          if ($pgSelect instanceof PgSelectStep) {
            // Mostly so `clientMutationId` works!
            arg.apply($pgSelect);
          } else {
            throw new Error(`Could not determine PgSelectStep for ${$result}`);
          }
        }
      }
    },
    mutationOutSetof: {
      plan($root, args, _info) {
        const selectArgs = makeArgs_person_computed_out(args, ["input"]);
        const $result = resource_mutation_out_setofPgResource.execute(selectArgs, "mutation");
        return object({
          result: $result
        });
      },
      args: {
        input(_, $object, arg) {
          // We might have any number of step types here; we need
          // to get back to the underlying pgSelect.
          const $result = $object.getStepForKey("result");
          const $parent = "getParentStep" in $result ? $result.getParentStep() : $result;
          const $pgSelect = "getClassStep" in $parent ? $parent.getClassStep() : $parent;
          if ($pgSelect instanceof PgSelectStep) {
            // Mostly so `clientMutationId` works!
            arg.apply($pgSelect);
          } else {
            throw new Error(`Could not determine PgSelectStep for ${$result}`);
          }
        }
      }
    },
    mutationOutUnnamed: {
      plan($root, args, _info) {
        const selectArgs = makeArgs_person_computed_out(args, ["input"]);
        const $result = resource_mutation_out_unnamedPgResource.execute(selectArgs, "mutation");
        return object({
          result: $result
        });
      },
      args: {
        input(_, $object, arg) {
          // We might have any number of step types here; we need
          // to get back to the underlying pgSelect.
          const $result = $object.getStepForKey("result");
          const $parent = "getParentStep" in $result ? $result.getParentStep() : $result;
          const $pgSelect = "getClassStep" in $parent ? $parent.getClassStep() : $parent;
          if ($pgSelect instanceof PgSelectStep) {
            // Mostly so `clientMutationId` works!
            arg.apply($pgSelect);
          } else {
            throw new Error(`Could not determine PgSelectStep for ${$result}`);
          }
        }
      }
    },
    noArgsMutation: {
      plan($root, args, _info) {
        const selectArgs = makeArgs_person_computed_out(args, ["input"]);
        const $result = resource_no_args_mutationPgResource.execute(selectArgs, "mutation");
        return object({
          result: $result
        });
      },
      args: {
        input(_, $object, arg) {
          // We might have any number of step types here; we need
          // to get back to the underlying pgSelect.
          const $result = $object.getStepForKey("result");
          const $parent = "getParentStep" in $result ? $result.getParentStep() : $result;
          const $pgSelect = "getClassStep" in $parent ? $parent.getClassStep() : $parent;
          if ($pgSelect instanceof PgSelectStep) {
            // Mostly so `clientMutationId` works!
            arg.apply($pgSelect);
          } else {
            throw new Error(`Could not determine PgSelectStep for ${$result}`);
          }
        }
      }
    },
    returnVoidMutation: {
      plan($root, args, _info) {
        const selectArgs = makeArgs_person_computed_out(args, ["input"]);
        const $result = resource_return_void_mutationPgResource.execute(selectArgs, "mutation");
        return object({
          result: $result
        });
      },
      args: {
        input(_, $object, arg) {
          // We might have any number of step types here; we need
          // to get back to the underlying pgSelect.
          const $result = $object.getStepForKey("result");
          const $parent = "getParentStep" in $result ? $result.getParentStep() : $result;
          const $pgSelect = "getClassStep" in $parent ? $parent.getClassStep() : $parent;
          if ($pgSelect instanceof PgSelectStep) {
            // Mostly so `clientMutationId` works!
            arg.apply($pgSelect);
          } else {
            throw new Error(`Could not determine PgSelectStep for ${$result}`);
          }
        }
      }
    },
    mutationIntervalSet: {
      plan($root, args, _info) {
        const selectArgs = makeArgs_person_computed_out(args, ["input"]);
        const $result = resource_mutation_interval_setPgResource.execute(selectArgs, "mutation");
        return object({
          result: $result
        });
      },
      args: {
        input(_, $object, arg) {
          // We might have any number of step types here; we need
          // to get back to the underlying pgSelect.
          const $result = $object.getStepForKey("result");
          const $parent = "getParentStep" in $result ? $result.getParentStep() : $result;
          const $pgSelect = "getClassStep" in $parent ? $parent.getClassStep() : $parent;
          if ($pgSelect instanceof PgSelectStep) {
            // Mostly so `clientMutationId` works!
            arg.apply($pgSelect);
          } else {
            throw new Error(`Could not determine PgSelectStep for ${$result}`);
          }
        }
      }
    },
    mutationInOut: {
      plan($root, args, _info) {
        const selectArgs = makeArgs_mutation_in_out(args, ["input"]);
        const $result = resource_mutation_in_outPgResource.execute(selectArgs, "mutation");
        return object({
          result: $result
        });
      },
      args: {
        input(_, $object, arg) {
          // We might have any number of step types here; we need
          // to get back to the underlying pgSelect.
          const $result = $object.getStepForKey("result");
          const $parent = "getParentStep" in $result ? $result.getParentStep() : $result;
          const $pgSelect = "getClassStep" in $parent ? $parent.getClassStep() : $parent;
          if ($pgSelect instanceof PgSelectStep) {
            // Mostly so `clientMutationId` works!
            arg.apply($pgSelect);
          } else {
            throw new Error(`Could not determine PgSelectStep for ${$result}`);
          }
        }
      }
    },
    mutationReturnsTableOneCol: {
      plan($root, args, _info) {
        const selectArgs = makeArgs_mutation_returns_table_one_col(args, ["input"]);
        const $result = resource_mutation_returns_table_one_colPgResource.execute(selectArgs, "mutation");
        return object({
          result: $result
        });
      },
      args: {
        input(_, $object, arg) {
          // We might have any number of step types here; we need
          // to get back to the underlying pgSelect.
          const $result = $object.getStepForKey("result");
          const $parent = "getParentStep" in $result ? $result.getParentStep() : $result;
          const $pgSelect = "getClassStep" in $parent ? $parent.getClassStep() : $parent;
          if ($pgSelect instanceof PgSelectStep) {
            // Mostly so `clientMutationId` works!
            arg.apply($pgSelect);
          } else {
            throw new Error(`Could not determine PgSelectStep for ${$result}`);
          }
        }
      }
    },
    jsonIdentityMutation: {
      plan($root, args, _info) {
        const selectArgs = makeArgs_json_identity_mutation(args, ["input"]);
        const $result = resource_json_identity_mutationPgResource.execute(selectArgs, "mutation");
        return object({
          result: $result
        });
      },
      args: {
        input(_, $object, arg) {
          // We might have any number of step types here; we need
          // to get back to the underlying pgSelect.
          const $result = $object.getStepForKey("result");
          const $parent = "getParentStep" in $result ? $result.getParentStep() : $result;
          const $pgSelect = "getClassStep" in $parent ? $parent.getClassStep() : $parent;
          if ($pgSelect instanceof PgSelectStep) {
            // Mostly so `clientMutationId` works!
            arg.apply($pgSelect);
          } else {
            throw new Error(`Could not determine PgSelectStep for ${$result}`);
          }
        }
      }
    },
    jsonbIdentityMutation: {
      plan($root, args, _info) {
        const selectArgs = makeArgs_jsonb_identity_mutation(args, ["input"]);
        const $result = resource_jsonb_identity_mutationPgResource.execute(selectArgs, "mutation");
        return object({
          result: $result
        });
      },
      args: {
        input(_, $object, arg) {
          // We might have any number of step types here; we need
          // to get back to the underlying pgSelect.
          const $result = $object.getStepForKey("result");
          const $parent = "getParentStep" in $result ? $result.getParentStep() : $result;
          const $pgSelect = "getClassStep" in $parent ? $parent.getClassStep() : $parent;
          if ($pgSelect instanceof PgSelectStep) {
            // Mostly so `clientMutationId` works!
            arg.apply($pgSelect);
          } else {
            throw new Error(`Could not determine PgSelectStep for ${$result}`);
          }
        }
      }
    },
    jsonbIdentityMutationPlpgsql: {
      plan($root, args, _info) {
        const selectArgs = makeArgs_jsonb_identity_mutation_plpgsql(args, ["input"]);
        const $result = resource_jsonb_identity_mutation_plpgsqlPgResource.execute(selectArgs, "mutation");
        return object({
          result: $result
        });
      },
      args: {
        input(_, $object, arg) {
          // We might have any number of step types here; we need
          // to get back to the underlying pgSelect.
          const $result = $object.getStepForKey("result");
          const $parent = "getParentStep" in $result ? $result.getParentStep() : $result;
          const $pgSelect = "getClassStep" in $parent ? $parent.getClassStep() : $parent;
          if ($pgSelect instanceof PgSelectStep) {
            // Mostly so `clientMutationId` works!
            arg.apply($pgSelect);
          } else {
            throw new Error(`Could not determine PgSelectStep for ${$result}`);
          }
        }
      }
    },
    jsonbIdentityMutationPlpgsqlWithDefault: {
      plan($root, args, _info) {
        const selectArgs = makeArgs_jsonb_identity_mutation_plpgsql_with_default(args, ["input"]);
        const $result = resource_jsonb_identity_mutation_plpgsql_with_defaultPgResource.execute(selectArgs, "mutation");
        return object({
          result: $result
        });
      },
      args: {
        input(_, $object, arg) {
          // We might have any number of step types here; we need
          // to get back to the underlying pgSelect.
          const $result = $object.getStepForKey("result");
          const $parent = "getParentStep" in $result ? $result.getParentStep() : $result;
          const $pgSelect = "getClassStep" in $parent ? $parent.getClassStep() : $parent;
          if ($pgSelect instanceof PgSelectStep) {
            // Mostly so `clientMutationId` works!
            arg.apply($pgSelect);
          } else {
            throw new Error(`Could not determine PgSelectStep for ${$result}`);
          }
        }
      }
    },
    add1Mutation: {
      plan($root, args, _info) {
        const selectArgs = makeArgs_add_1_mutation(args, ["input"]);
        const $result = resource_add_1_mutationPgResource.execute(selectArgs, "mutation");
        return object({
          result: $result
        });
      },
      args: {
        input(_, $object, arg) {
          // We might have any number of step types here; we need
          // to get back to the underlying pgSelect.
          const $result = $object.getStepForKey("result");
          const $parent = "getParentStep" in $result ? $result.getParentStep() : $result;
          const $pgSelect = "getClassStep" in $parent ? $parent.getClassStep() : $parent;
          if ($pgSelect instanceof PgSelectStep) {
            // Mostly so `clientMutationId` works!
            arg.apply($pgSelect);
          } else {
            throw new Error(`Could not determine PgSelectStep for ${$result}`);
          }
        }
      }
    },
    add2Mutation: {
      plan($root, args, _info) {
        const selectArgs = makeArgs_add_2_mutation(args, ["input"]);
        const $result = resource_add_2_mutationPgResource.execute(selectArgs, "mutation");
        return object({
          result: $result
        });
      },
      args: {
        input(_, $object, arg) {
          // We might have any number of step types here; we need
          // to get back to the underlying pgSelect.
          const $result = $object.getStepForKey("result");
          const $parent = "getParentStep" in $result ? $result.getParentStep() : $result;
          const $pgSelect = "getClassStep" in $parent ? $parent.getClassStep() : $parent;
          if ($pgSelect instanceof PgSelectStep) {
            // Mostly so `clientMutationId` works!
            arg.apply($pgSelect);
          } else {
            throw new Error(`Could not determine PgSelectStep for ${$result}`);
          }
        }
      }
    },
    add3Mutation: {
      plan($root, args, _info) {
        const selectArgs = makeArgs_add_3_mutation(args, ["input"]);
        const $result = resource_add_3_mutationPgResource.execute(selectArgs, "mutation");
        return object({
          result: $result
        });
      },
      args: {
        input(_, $object, arg) {
          // We might have any number of step types here; we need
          // to get back to the underlying pgSelect.
          const $result = $object.getStepForKey("result");
          const $parent = "getParentStep" in $result ? $result.getParentStep() : $result;
          const $pgSelect = "getClassStep" in $parent ? $parent.getClassStep() : $parent;
          if ($pgSelect instanceof PgSelectStep) {
            // Mostly so `clientMutationId` works!
            arg.apply($pgSelect);
          } else {
            throw new Error(`Could not determine PgSelectStep for ${$result}`);
          }
        }
      }
    },
    add4Mutation: {
      plan($root, args, _info) {
        const selectArgs = makeArgs_add_4_mutation(args, ["input"]);
        const $result = resource_add_4_mutationPgResource.execute(selectArgs, "mutation");
        return object({
          result: $result
        });
      },
      args: {
        input(_, $object, arg) {
          // We might have any number of step types here; we need
          // to get back to the underlying pgSelect.
          const $result = $object.getStepForKey("result");
          const $parent = "getParentStep" in $result ? $result.getParentStep() : $result;
          const $pgSelect = "getClassStep" in $parent ? $parent.getClassStep() : $parent;
          if ($pgSelect instanceof PgSelectStep) {
            // Mostly so `clientMutationId` works!
            arg.apply($pgSelect);
          } else {
            throw new Error(`Could not determine PgSelectStep for ${$result}`);
          }
        }
      }
    },
    add4MutationError: {
      plan($root, args, _info) {
        const selectArgs = makeArgs_add_4_mutation_error(args, ["input"]);
        const $result = resource_add_4_mutation_errorPgResource.execute(selectArgs, "mutation");
        return object({
          result: $result
        });
      },
      args: {
        input(_, $object, arg) {
          // We might have any number of step types here; we need
          // to get back to the underlying pgSelect.
          const $result = $object.getStepForKey("result");
          const $parent = "getParentStep" in $result ? $result.getParentStep() : $result;
          const $pgSelect = "getClassStep" in $parent ? $parent.getClassStep() : $parent;
          if ($pgSelect instanceof PgSelectStep) {
            // Mostly so `clientMutationId` works!
            arg.apply($pgSelect);
          } else {
            throw new Error(`Could not determine PgSelectStep for ${$result}`);
          }
        }
      }
    },
    mult1: {
      plan($root, args, _info) {
        const selectArgs = makeArgs_mult_1(args, ["input"]);
        const $result = resource_mult_1PgResource.execute(selectArgs, "mutation");
        return object({
          result: $result
        });
      },
      args: {
        input(_, $object, arg) {
          // We might have any number of step types here; we need
          // to get back to the underlying pgSelect.
          const $result = $object.getStepForKey("result");
          const $parent = "getParentStep" in $result ? $result.getParentStep() : $result;
          const $pgSelect = "getClassStep" in $parent ? $parent.getClassStep() : $parent;
          if ($pgSelect instanceof PgSelectStep) {
            // Mostly so `clientMutationId` works!
            arg.apply($pgSelect);
          } else {
            throw new Error(`Could not determine PgSelectStep for ${$result}`);
          }
        }
      }
    },
    mult2: {
      plan($root, args, _info) {
        const selectArgs = makeArgs_mult_2(args, ["input"]);
        const $result = resource_mult_2PgResource.execute(selectArgs, "mutation");
        return object({
          result: $result
        });
      },
      args: {
        input(_, $object, arg) {
          // We might have any number of step types here; we need
          // to get back to the underlying pgSelect.
          const $result = $object.getStepForKey("result");
          const $parent = "getParentStep" in $result ? $result.getParentStep() : $result;
          const $pgSelect = "getClassStep" in $parent ? $parent.getClassStep() : $parent;
          if ($pgSelect instanceof PgSelectStep) {
            // Mostly so `clientMutationId` works!
            arg.apply($pgSelect);
          } else {
            throw new Error(`Could not determine PgSelectStep for ${$result}`);
          }
        }
      }
    },
    mult3: {
      plan($root, args, _info) {
        const selectArgs = makeArgs_mult_3(args, ["input"]);
        const $result = resource_mult_3PgResource.execute(selectArgs, "mutation");
        return object({
          result: $result
        });
      },
      args: {
        input(_, $object, arg) {
          // We might have any number of step types here; we need
          // to get back to the underlying pgSelect.
          const $result = $object.getStepForKey("result");
          const $parent = "getParentStep" in $result ? $result.getParentStep() : $result;
          const $pgSelect = "getClassStep" in $parent ? $parent.getClassStep() : $parent;
          if ($pgSelect instanceof PgSelectStep) {
            // Mostly so `clientMutationId` works!
            arg.apply($pgSelect);
          } else {
            throw new Error(`Could not determine PgSelectStep for ${$result}`);
          }
        }
      }
    },
    mult4: {
      plan($root, args, _info) {
        const selectArgs = makeArgs_mult_4(args, ["input"]);
        const $result = resource_mult_4PgResource.execute(selectArgs, "mutation");
        return object({
          result: $result
        });
      },
      args: {
        input(_, $object, arg) {
          // We might have any number of step types here; we need
          // to get back to the underlying pgSelect.
          const $result = $object.getStepForKey("result");
          const $parent = "getParentStep" in $result ? $result.getParentStep() : $result;
          const $pgSelect = "getClassStep" in $parent ? $parent.getClassStep() : $parent;
          if ($pgSelect instanceof PgSelectStep) {
            // Mostly so `clientMutationId` works!
            arg.apply($pgSelect);
          } else {
            throw new Error(`Could not determine PgSelectStep for ${$result}`);
          }
        }
      }
    },
    mutationInInout: {
      plan($root, args, _info) {
        const selectArgs = makeArgs_mutation_in_inout(args, ["input"]);
        const $result = resource_mutation_in_inoutPgResource.execute(selectArgs, "mutation");
        return object({
          result: $result
        });
      },
      args: {
        input(_, $object, arg) {
          // We might have any number of step types here; we need
          // to get back to the underlying pgSelect.
          const $result = $object.getStepForKey("result");
          const $parent = "getParentStep" in $result ? $result.getParentStep() : $result;
          const $pgSelect = "getClassStep" in $parent ? $parent.getClassStep() : $parent;
          if ($pgSelect instanceof PgSelectStep) {
            // Mostly so `clientMutationId` works!
            arg.apply($pgSelect);
          } else {
            throw new Error(`Could not determine PgSelectStep for ${$result}`);
          }
        }
      }
    },
    mutationOutOut: {
      plan($root, args, _info) {
        const selectArgs = makeArgs_person_computed_out(args, ["input"]);
        const $result = resource_mutation_out_outPgResource.execute(selectArgs, "mutation");
        return object({
          result: $result
        });
      },
      args: {
        input(_, $object, arg) {
          // We might have any number of step types here; we need
          // to get back to the underlying pgSelect.
          const $result = $object.getStepForKey("result");
          const $parent = "getParentStep" in $result ? $result.getParentStep() : $result;
          const $pgSelect = "getClassStep" in $parent ? $parent.getClassStep() : $parent;
          if ($pgSelect instanceof PgSelectStep) {
            // Mostly so `clientMutationId` works!
            arg.apply($pgSelect);
          } else {
            throw new Error(`Could not determine PgSelectStep for ${$result}`);
          }
        }
      }
    },
    mutationOutOutSetof: {
      plan($root, args, _info) {
        const selectArgs = makeArgs_person_computed_out(args, ["input"]);
        const $result = resource_mutation_out_out_setofPgResource.execute(selectArgs, "mutation");
        return object({
          result: $result
        });
      },
      args: {
        input(_, $object, arg) {
          // We might have any number of step types here; we need
          // to get back to the underlying pgSelect.
          const $result = $object.getStepForKey("result");
          const $parent = "getParentStep" in $result ? $result.getParentStep() : $result;
          const $pgSelect = "getClassStep" in $parent ? $parent.getClassStep() : $parent;
          if ($pgSelect instanceof PgSelectStep) {
            // Mostly so `clientMutationId` works!
            arg.apply($pgSelect);
          } else {
            throw new Error(`Could not determine PgSelectStep for ${$result}`);
          }
        }
      }
    },
    mutationOutOutUnnamed: {
      plan($root, args, _info) {
        const selectArgs = makeArgs_person_computed_out(args, ["input"]);
        const $result = resource_mutation_out_out_unnamedPgResource.execute(selectArgs, "mutation");
        return object({
          result: $result
        });
      },
      args: {
        input(_, $object, arg) {
          // We might have any number of step types here; we need
          // to get back to the underlying pgSelect.
          const $result = $object.getStepForKey("result");
          const $parent = "getParentStep" in $result ? $result.getParentStep() : $result;
          const $pgSelect = "getClassStep" in $parent ? $parent.getClassStep() : $parent;
          if ($pgSelect instanceof PgSelectStep) {
            // Mostly so `clientMutationId` works!
            arg.apply($pgSelect);
          } else {
            throw new Error(`Could not determine PgSelectStep for ${$result}`);
          }
        }
      }
    },
    intSetMutation: {
      plan($root, args, _info) {
        const selectArgs = makeArgs_int_set_mutation(args, ["input"]);
        const $result = resource_int_set_mutationPgResource.execute(selectArgs, "mutation");
        return object({
          result: $result
        });
      },
      args: {
        input(_, $object, arg) {
          // We might have any number of step types here; we need
          // to get back to the underlying pgSelect.
          const $result = $object.getStepForKey("result");
          const $parent = "getParentStep" in $result ? $result.getParentStep() : $result;
          const $pgSelect = "getClassStep" in $parent ? $parent.getClassStep() : $parent;
          if ($pgSelect instanceof PgSelectStep) {
            // Mostly so `clientMutationId` works!
            arg.apply($pgSelect);
          } else {
            throw new Error(`Could not determine PgSelectStep for ${$result}`);
          }
        }
      }
    },
    mutationOutUnnamedOutOutUnnamed: {
      plan($root, args, _info) {
        const selectArgs = makeArgs_person_computed_out(args, ["input"]);
        const $result = resource_mutation_out_unnamed_out_out_unnamedPgResource.execute(selectArgs, "mutation");
        return object({
          result: $result
        });
      },
      args: {
        input(_, $object, arg) {
          // We might have any number of step types here; we need
          // to get back to the underlying pgSelect.
          const $result = $object.getStepForKey("result");
          const $parent = "getParentStep" in $result ? $result.getParentStep() : $result;
          const $pgSelect = "getClassStep" in $parent ? $parent.getClassStep() : $parent;
          if ($pgSelect instanceof PgSelectStep) {
            // Mostly so `clientMutationId` works!
            arg.apply($pgSelect);
          } else {
            throw new Error(`Could not determine PgSelectStep for ${$result}`);
          }
        }
      }
    },
    mutationReturnsTableMultiCol: {
      plan($root, args, _info) {
        const selectArgs = makeArgs_mutation_returns_table_multi_col(args, ["input"]);
        const $result = resource_mutation_returns_table_multi_colPgResource.execute(selectArgs, "mutation");
        return object({
          result: $result
        });
      },
      args: {
        input(_, $object, arg) {
          // We might have any number of step types here; we need
          // to get back to the underlying pgSelect.
          const $result = $object.getStepForKey("result");
          const $parent = "getParentStep" in $result ? $result.getParentStep() : $result;
          const $pgSelect = "getClassStep" in $parent ? $parent.getClassStep() : $parent;
          if ($pgSelect instanceof PgSelectStep) {
            // Mostly so `clientMutationId` works!
            arg.apply($pgSelect);
          } else {
            throw new Error(`Could not determine PgSelectStep for ${$result}`);
          }
        }
      }
    },
    guidFn: {
      plan($root, args, _info) {
        const selectArgs = makeArgs_guid_fn(args, ["input"]);
        const $result = resource_guid_fnPgResource.execute(selectArgs, "mutation");
        return object({
          result: $result
        });
      },
      args: {
        input(_, $object, arg) {
          // We might have any number of step types here; we need
          // to get back to the underlying pgSelect.
          const $result = $object.getStepForKey("result");
          const $parent = "getParentStep" in $result ? $result.getParentStep() : $result;
          const $pgSelect = "getClassStep" in $parent ? $parent.getClassStep() : $parent;
          if ($pgSelect instanceof PgSelectStep) {
            // Mostly so `clientMutationId` works!
            arg.apply($pgSelect);
          } else {
            throw new Error(`Could not determine PgSelectStep for ${$result}`);
          }
        }
      }
    },
    mutationIntervalArray: {
      plan($root, args, _info) {
        const selectArgs = makeArgs_person_computed_out(args, ["input"]);
        const $result = resource_mutation_interval_arrayPgResource.execute(selectArgs, "mutation");
        return object({
          result: $result
        });
      },
      args: {
        input(_, $object, arg) {
          // We might have any number of step types here; we need
          // to get back to the underlying pgSelect.
          const $result = $object.getStepForKey("result");
          const $parent = "getParentStep" in $result ? $result.getParentStep() : $result;
          const $pgSelect = "getClassStep" in $parent ? $parent.getClassStep() : $parent;
          if ($pgSelect instanceof PgSelectStep) {
            // Mostly so `clientMutationId` works!
            arg.apply($pgSelect);
          } else {
            throw new Error(`Could not determine PgSelectStep for ${$result}`);
          }
        }
      }
    },
    mutationTextArray: {
      plan($root, args, _info) {
        const selectArgs = makeArgs_person_computed_out(args, ["input"]);
        const $result = resource_mutation_text_arrayPgResource.execute(selectArgs, "mutation");
        return object({
          result: $result
        });
      },
      args: {
        input(_, $object, arg) {
          // We might have any number of step types here; we need
          // to get back to the underlying pgSelect.
          const $result = $object.getStepForKey("result");
          const $parent = "getParentStep" in $result ? $result.getParentStep() : $result;
          const $pgSelect = "getClassStep" in $parent ? $parent.getClassStep() : $parent;
          if ($pgSelect instanceof PgSelectStep) {
            // Mostly so `clientMutationId` works!
            arg.apply($pgSelect);
          } else {
            throw new Error(`Could not determine PgSelectStep for ${$result}`);
          }
        }
      }
    },
    listBdeMutation: {
      plan($root, args, _info) {
        const selectArgs = makeArgs_list_bde_mutation(args, ["input"]);
        const $result = resource_list_bde_mutationPgResource.execute(selectArgs, "mutation");
        return object({
          result: $result
        });
      },
      args: {
        input(_, $object, arg) {
          // We might have any number of step types here; we need
          // to get back to the underlying pgSelect.
          const $result = $object.getStepForKey("result");
          const $parent = "getParentStep" in $result ? $result.getParentStep() : $result;
          const $pgSelect = "getClassStep" in $parent ? $parent.getClassStep() : $parent;
          if ($pgSelect instanceof PgSelectStep) {
            // Mostly so `clientMutationId` works!
            arg.apply($pgSelect);
          } else {
            throw new Error(`Could not determine PgSelectStep for ${$result}`);
          }
        }
      }
    },
    authenticateFail: {
      plan($root, args, _info) {
        const selectArgs = makeArgs_person_computed_out(args, ["input"]);
        const $result = resource_authenticate_failPgResource.execute(selectArgs, "mutation");
        return object({
          result: $result
        });
      },
      args: {
        input(_, $object, arg) {
          // We might have any number of step types here; we need
          // to get back to the underlying pgSelect.
          const $result = $object.getStepForKey("result");
          const $parent = "getParentStep" in $result ? $result.getParentStep() : $result;
          const $pgSelect = "getClassStep" in $parent ? $parent.getClassStep() : $parent;
          if ($pgSelect instanceof PgSelectStep) {
            // Mostly so `clientMutationId` works!
            arg.apply($pgSelect);
          } else {
            throw new Error(`Could not determine PgSelectStep for ${$result}`);
          }
        }
      }
    },
    authenticate: {
      plan($root, args, _info) {
        const selectArgs = makeArgs_authenticate(args, ["input"]);
        const $result = resource_authenticatePgResource.execute(selectArgs, "mutation");
        return object({
          result: $result
        });
      },
      args: {
        input(_, $object, arg) {
          // We might have any number of step types here; we need
          // to get back to the underlying pgSelect.
          const $result = $object.getStepForKey("result");
          const $parent = "getParentStep" in $result ? $result.getParentStep() : $result;
          const $pgSelect = "getClassStep" in $parent ? $parent.getClassStep() : $parent;
          if ($pgSelect instanceof PgSelectStep) {
            // Mostly so `clientMutationId` works!
            arg.apply($pgSelect);
          } else {
            throw new Error(`Could not determine PgSelectStep for ${$result}`);
          }
        }
      }
    },
    leftArmIdentity: {
      plan($root, args, _info) {
        const selectArgs = makeArgs_left_arm_identity(args, ["input"]);
        const $result = resource_left_arm_identityPgResource.execute(selectArgs, "mutation");
        return object({
          result: $result
        });
      },
      args: {
        input(_, $object, arg) {
          // We might have any number of step types here; we need
          // to get back to the underlying pgSelect.
          const $result = $object.getStepForKey("result");
          const $parent = "getParentStep" in $result ? $result.getParentStep() : $result;
          const $pgSelect = "getClassStep" in $parent ? $parent.getClassStep() : $parent;
          if ($pgSelect instanceof PgSelectStep) {
            // Mostly so `clientMutationId` works!
            arg.apply($pgSelect);
          } else {
            throw new Error(`Could not determine PgSelectStep for ${$result}`);
          }
        }
      }
    },
    issue756Mutation: {
      plan($root, args, _info) {
        const selectArgs = makeArgs_person_computed_out(args, ["input"]);
        const $result = resource_issue756_mutationPgResource.execute(selectArgs, "mutation");
        return object({
          result: $result
        });
      },
      args: {
        input(_, $object, arg) {
          // We might have any number of step types here; we need
          // to get back to the underlying pgSelect.
          const $result = $object.getStepForKey("result");
          const $parent = "getParentStep" in $result ? $result.getParentStep() : $result;
          const $pgSelect = "getClassStep" in $parent ? $parent.getClassStep() : $parent;
          if ($pgSelect instanceof PgSelectStep) {
            // Mostly so `clientMutationId` works!
            arg.apply($pgSelect);
          } else {
            throw new Error(`Could not determine PgSelectStep for ${$result}`);
          }
        }
      }
    },
    issue756SetMutation: {
      plan($root, args, _info) {
        const selectArgs = makeArgs_person_computed_out(args, ["input"]);
        const $result = resource_issue756_set_mutationPgResource.execute(selectArgs, "mutation");
        return object({
          result: $result
        });
      },
      args: {
        input(_, $object, arg) {
          // We might have any number of step types here; we need
          // to get back to the underlying pgSelect.
          const $result = $object.getStepForKey("result");
          const $parent = "getParentStep" in $result ? $result.getParentStep() : $result;
          const $pgSelect = "getClassStep" in $parent ? $parent.getClassStep() : $parent;
          if ($pgSelect instanceof PgSelectStep) {
            // Mostly so `clientMutationId` works!
            arg.apply($pgSelect);
          } else {
            throw new Error(`Could not determine PgSelectStep for ${$result}`);
          }
        }
      }
    },
    authenticateMany: {
      plan($root, args, _info) {
        const selectArgs = makeArgs_authenticate_many(args, ["input"]);
        const $result = resource_authenticate_manyPgResource.execute(selectArgs, "mutation");
        return object({
          result: $result
        });
      },
      args: {
        input(_, $object, arg) {
          // We might have any number of step types here; we need
          // to get back to the underlying pgSelect.
          const $result = $object.getStepForKey("result");
          const $parent = "getParentStep" in $result ? $result.getParentStep() : $result;
          const $pgSelect = "getClassStep" in $parent ? $parent.getClassStep() : $parent;
          if ($pgSelect instanceof PgSelectStep) {
            // Mostly so `clientMutationId` works!
            arg.apply($pgSelect);
          } else {
            throw new Error(`Could not determine PgSelectStep for ${$result}`);
          }
        }
      }
    },
    authenticatePayload: {
      plan($root, args, _info) {
        const selectArgs = makeArgs_authenticate_payload(args, ["input"]);
        const $result = resource_authenticate_payloadPgResource.execute(selectArgs, "mutation");
        return object({
          result: $result
        });
      },
      args: {
        input(_, $object, arg) {
          // We might have any number of step types here; we need
          // to get back to the underlying pgSelect.
          const $result = $object.getStepForKey("result");
          const $parent = "getParentStep" in $result ? $result.getParentStep() : $result;
          const $pgSelect = "getClassStep" in $parent ? $parent.getClassStep() : $parent;
          if ($pgSelect instanceof PgSelectStep) {
            // Mostly so `clientMutationId` works!
            arg.apply($pgSelect);
          } else {
            throw new Error(`Could not determine PgSelectStep for ${$result}`);
          }
        }
      }
    },
    typesMutation: {
      plan($root, args, _info) {
        const selectArgs = makeArgs_types_mutation(args, ["input"]);
        const $result = resource_types_mutationPgResource.execute(selectArgs, "mutation");
        return object({
          result: $result
        });
      },
      args: {
        input(_, $object, arg) {
          // We might have any number of step types here; we need
          // to get back to the underlying pgSelect.
          const $result = $object.getStepForKey("result");
          const $parent = "getParentStep" in $result ? $result.getParentStep() : $result;
          const $pgSelect = "getClassStep" in $parent ? $parent.getClassStep() : $parent;
          if ($pgSelect instanceof PgSelectStep) {
            // Mostly so `clientMutationId` works!
            arg.apply($pgSelect);
          } else {
            throw new Error(`Could not determine PgSelectStep for ${$result}`);
          }
        }
      }
    },
    mutationOutOutCompoundType: {
      plan($root, args, _info) {
        const selectArgs = makeArgs_mutation_out_out_compound_type(args, ["input"]);
        const $result = resource_mutation_out_out_compound_typePgResource.execute(selectArgs, "mutation");
        return object({
          result: $result
        });
      },
      args: {
        input(_, $object, arg) {
          // We might have any number of step types here; we need
          // to get back to the underlying pgSelect.
          const $result = $object.getStepForKey("result");
          const $parent = "getParentStep" in $result ? $result.getParentStep() : $result;
          const $pgSelect = "getClassStep" in $parent ? $parent.getClassStep() : $parent;
          if ($pgSelect instanceof PgSelectStep) {
            // Mostly so `clientMutationId` works!
            arg.apply($pgSelect);
          } else {
            throw new Error(`Could not determine PgSelectStep for ${$result}`);
          }
        }
      }
    },
    compoundTypeMutation: {
      plan($root, args, _info) {
        const selectArgs = makeArgs_compound_type_mutation(args, ["input"]);
        const $result = resource_compound_type_mutationPgResource.execute(selectArgs, "mutation");
        return object({
          result: $result
        });
      },
      args: {
        input(_, $object, arg) {
          // We might have any number of step types here; we need
          // to get back to the underlying pgSelect.
          const $result = $object.getStepForKey("result");
          const $parent = "getParentStep" in $result ? $result.getParentStep() : $result;
          const $pgSelect = "getClassStep" in $parent ? $parent.getClassStep() : $parent;
          if ($pgSelect instanceof PgSelectStep) {
            // Mostly so `clientMutationId` works!
            arg.apply($pgSelect);
          } else {
            throw new Error(`Could not determine PgSelectStep for ${$result}`);
          }
        }
      }
    },
    compoundTypeSetMutation: {
      plan($root, args, _info) {
        const selectArgs = makeArgs_compound_type_set_mutation(args, ["input"]);
        const $result = resource_compound_type_set_mutationPgResource.execute(selectArgs, "mutation");
        return object({
          result: $result
        });
      },
      args: {
        input(_, $object, arg) {
          // We might have any number of step types here; we need
          // to get back to the underlying pgSelect.
          const $result = $object.getStepForKey("result");
          const $parent = "getParentStep" in $result ? $result.getParentStep() : $result;
          const $pgSelect = "getClassStep" in $parent ? $parent.getClassStep() : $parent;
          if ($pgSelect instanceof PgSelectStep) {
            // Mostly so `clientMutationId` works!
            arg.apply($pgSelect);
          } else {
            throw new Error(`Could not determine PgSelectStep for ${$result}`);
          }
        }
      }
    },
    listOfCompoundTypesMutation: {
      plan($root, args, _info) {
        const selectArgs = makeArgs_list_of_compound_types_mutation(args, ["input"]);
        const $result = resource_list_of_compound_types_mutationPgResource.execute(selectArgs, "mutation");
        return object({
          result: $result
        });
      },
      args: {
        input(_, $object, arg) {
          // We might have any number of step types here; we need
          // to get back to the underlying pgSelect.
          const $result = $object.getStepForKey("result");
          const $parent = "getParentStep" in $result ? $result.getParentStep() : $result;
          const $pgSelect = "getClassStep" in $parent ? $parent.getClassStep() : $parent;
          if ($pgSelect instanceof PgSelectStep) {
            // Mostly so `clientMutationId` works!
            arg.apply($pgSelect);
          } else {
            throw new Error(`Could not determine PgSelectStep for ${$result}`);
          }
        }
      }
    },
    tableMutation: {
      plan($root, args, _info) {
        const selectArgs = makeArgs_table_mutation(args, ["input"]);
        const $result = resource_table_mutationPgResource.execute(selectArgs, "mutation");
        return object({
          result: $result
        });
      },
      args: {
        input(_, $object, arg) {
          // We might have any number of step types here; we need
          // to get back to the underlying pgSelect.
          const $result = $object.getStepForKey("result");
          const $parent = "getParentStep" in $result ? $result.getParentStep() : $result;
          const $pgSelect = "getClassStep" in $parent ? $parent.getClassStep() : $parent;
          if ($pgSelect instanceof PgSelectStep) {
            // Mostly so `clientMutationId` works!
            arg.apply($pgSelect);
          } else {
            throw new Error(`Could not determine PgSelectStep for ${$result}`);
          }
        }
      }
    },
    postWithSuffix: {
      plan($root, args, _info) {
        const selectArgs = makeArgs_post_with_suffix(args, ["input"]);
        const $result = resource_post_with_suffixPgResource.execute(selectArgs, "mutation");
        return object({
          result: $result
        });
      },
      args: {
        input(_, $object, arg) {
          // We might have any number of step types here; we need
          // to get back to the underlying pgSelect.
          const $result = $object.getStepForKey("result");
          const $parent = "getParentStep" in $result ? $result.getParentStep() : $result;
          const $pgSelect = "getClassStep" in $parent ? $parent.getClassStep() : $parent;
          if ($pgSelect instanceof PgSelectStep) {
            // Mostly so `clientMutationId` works!
            arg.apply($pgSelect);
          } else {
            throw new Error(`Could not determine PgSelectStep for ${$result}`);
          }
        }
      }
    },
    mutationCompoundTypeArray: {
      plan($root, args, _info) {
        const selectArgs = makeArgs_mutation_compound_type_array(args, ["input"]);
        const $result = resource_mutation_compound_type_arrayPgResource.execute(selectArgs, "mutation");
        return object({
          result: $result
        });
      },
      args: {
        input(_, $object, arg) {
          // We might have any number of step types here; we need
          // to get back to the underlying pgSelect.
          const $result = $object.getStepForKey("result");
          const $parent = "getParentStep" in $result ? $result.getParentStep() : $result;
          const $pgSelect = "getClassStep" in $parent ? $parent.getClassStep() : $parent;
          if ($pgSelect instanceof PgSelectStep) {
            // Mostly so `clientMutationId` works!
            arg.apply($pgSelect);
          } else {
            throw new Error(`Could not determine PgSelectStep for ${$result}`);
          }
        }
      }
    },
    compoundTypeArrayMutation: {
      plan($root, args, _info) {
        const selectArgs = makeArgs_compound_type_array_mutation(args, ["input"]);
        const $result = resource_compound_type_array_mutationPgResource.execute(selectArgs, "mutation");
        return object({
          result: $result
        });
      },
      args: {
        input(_, $object, arg) {
          // We might have any number of step types here; we need
          // to get back to the underlying pgSelect.
          const $result = $object.getStepForKey("result");
          const $parent = "getParentStep" in $result ? $result.getParentStep() : $result;
          const $pgSelect = "getClassStep" in $parent ? $parent.getClassStep() : $parent;
          if ($pgSelect instanceof PgSelectStep) {
            // Mostly so `clientMutationId` works!
            arg.apply($pgSelect);
          } else {
            throw new Error(`Could not determine PgSelectStep for ${$result}`);
          }
        }
      }
    },
    postMany: {
      plan($root, args, _info) {
        const selectArgs = makeArgs_post_many(args, ["input"]);
        const $result = resource_post_manyPgResource.execute(selectArgs, "mutation");
        return object({
          result: $result
        });
      },
      args: {
        input(_, $object, arg) {
          // We might have any number of step types here; we need
          // to get back to the underlying pgSelect.
          const $result = $object.getStepForKey("result");
          const $parent = "getParentStep" in $result ? $result.getParentStep() : $result;
          const $pgSelect = "getClassStep" in $parent ? $parent.getClassStep() : $parent;
          if ($pgSelect instanceof PgSelectStep) {
            // Mostly so `clientMutationId` works!
            arg.apply($pgSelect);
          } else {
            throw new Error(`Could not determine PgSelectStep for ${$result}`);
          }
        }
      }
    },
    mutationOutComplex: {
      plan($root, args, _info) {
        const selectArgs = makeArgs_mutation_out_complex(args, ["input"]);
        const $result = resource_mutation_out_complexPgResource.execute(selectArgs, "mutation");
        return object({
          result: $result
        });
      },
      args: {
        input(_, $object, arg) {
          // We might have any number of step types here; we need
          // to get back to the underlying pgSelect.
          const $result = $object.getStepForKey("result");
          const $parent = "getParentStep" in $result ? $result.getParentStep() : $result;
          const $pgSelect = "getClassStep" in $parent ? $parent.getClassStep() : $parent;
          if ($pgSelect instanceof PgSelectStep) {
            // Mostly so `clientMutationId` works!
            arg.apply($pgSelect);
          } else {
            throw new Error(`Could not determine PgSelectStep for ${$result}`);
          }
        }
      }
    },
    mutationOutComplexSetof: {
      plan($root, args, _info) {
        const selectArgs = makeArgs_mutation_out_complex_setof(args, ["input"]);
        const $result = resource_mutation_out_complex_setofPgResource.execute(selectArgs, "mutation");
        return object({
          result: $result
        });
      },
      args: {
        input(_, $object, arg) {
          // We might have any number of step types here; we need
          // to get back to the underlying pgSelect.
          const $result = $object.getStepForKey("result");
          const $parent = "getParentStep" in $result ? $result.getParentStep() : $result;
          const $pgSelect = "getClassStep" in $parent ? $parent.getClassStep() : $parent;
          if ($pgSelect instanceof PgSelectStep) {
            // Mostly so `clientMutationId` works!
            arg.apply($pgSelect);
          } else {
            throw new Error(`Could not determine PgSelectStep for ${$result}`);
          }
        }
      }
    },
    mutationOutTable: {
      plan($root, args, _info) {
        const selectArgs = makeArgs_person_computed_out(args, ["input"]);
        const $result = resource_mutation_out_tablePgResource.execute(selectArgs, "mutation");
        return object({
          result: $result
        });
      },
      args: {
        input(_, $object, arg) {
          // We might have any number of step types here; we need
          // to get back to the underlying pgSelect.
          const $result = $object.getStepForKey("result");
          const $parent = "getParentStep" in $result ? $result.getParentStep() : $result;
          const $pgSelect = "getClassStep" in $parent ? $parent.getClassStep() : $parent;
          if ($pgSelect instanceof PgSelectStep) {
            // Mostly so `clientMutationId` works!
            arg.apply($pgSelect);
          } else {
            throw new Error(`Could not determine PgSelectStep for ${$result}`);
          }
        }
      }
    },
    mutationOutTableSetof: {
      plan($root, args, _info) {
        const selectArgs = makeArgs_person_computed_out(args, ["input"]);
        const $result = resource_mutation_out_table_setofPgResource.execute(selectArgs, "mutation");
        return object({
          result: $result
        });
      },
      args: {
        input(_, $object, arg) {
          // We might have any number of step types here; we need
          // to get back to the underlying pgSelect.
          const $result = $object.getStepForKey("result");
          const $parent = "getParentStep" in $result ? $result.getParentStep() : $result;
          const $pgSelect = "getClassStep" in $parent ? $parent.getClassStep() : $parent;
          if ($pgSelect instanceof PgSelectStep) {
            // Mostly so `clientMutationId` works!
            arg.apply($pgSelect);
          } else {
            throw new Error(`Could not determine PgSelectStep for ${$result}`);
          }
        }
      }
    },
    tableSetMutation: {
      plan($root, args, _info) {
        const selectArgs = makeArgs_person_computed_out(args, ["input"]);
        const $result = resource_table_set_mutationPgResource.execute(selectArgs, "mutation");
        return object({
          result: $result
        });
      },
      args: {
        input(_, $object, arg) {
          // We might have any number of step types here; we need
          // to get back to the underlying pgSelect.
          const $result = $object.getStepForKey("result");
          const $parent = "getParentStep" in $result ? $result.getParentStep() : $result;
          const $pgSelect = "getClassStep" in $parent ? $parent.getClassStep() : $parent;
          if ($pgSelect instanceof PgSelectStep) {
            // Mostly so `clientMutationId` works!
            arg.apply($pgSelect);
          } else {
            throw new Error(`Could not determine PgSelectStep for ${$result}`);
          }
        }
      }
    },
    typeFunctionConnectionMutation: {
      plan($root, args, _info) {
        const selectArgs = makeArgs_person_computed_out(args, ["input"]);
        const $result = resource_type_function_connection_mutationPgResource.execute(selectArgs, "mutation");
        return object({
          result: $result
        });
      },
      args: {
        input(_, $object, arg) {
          // We might have any number of step types here; we need
          // to get back to the underlying pgSelect.
          const $result = $object.getStepForKey("result");
          const $parent = "getParentStep" in $result ? $result.getParentStep() : $result;
          const $pgSelect = "getClassStep" in $parent ? $parent.getClassStep() : $parent;
          if ($pgSelect instanceof PgSelectStep) {
            // Mostly so `clientMutationId` works!
            arg.apply($pgSelect);
          } else {
            throw new Error(`Could not determine PgSelectStep for ${$result}`);
          }
        }
      }
    },
    typeFunctionMutation: {
      plan($root, args, _info) {
        const selectArgs = makeArgs_type_function_mutation(args, ["input"]);
        const $result = resource_type_function_mutationPgResource.execute(selectArgs, "mutation");
        return object({
          result: $result
        });
      },
      args: {
        input(_, $object, arg) {
          // We might have any number of step types here; we need
          // to get back to the underlying pgSelect.
          const $result = $object.getStepForKey("result");
          const $parent = "getParentStep" in $result ? $result.getParentStep() : $result;
          const $pgSelect = "getClassStep" in $parent ? $parent.getClassStep() : $parent;
          if ($pgSelect instanceof PgSelectStep) {
            // Mostly so `clientMutationId` works!
            arg.apply($pgSelect);
          } else {
            throw new Error(`Could not determine PgSelectStep for ${$result}`);
          }
        }
      }
    },
    typeFunctionListMutation: {
      plan($root, args, _info) {
        const selectArgs = makeArgs_person_computed_out(args, ["input"]);
        const $result = resource_type_function_list_mutationPgResource.execute(selectArgs, "mutation");
        return object({
          result: $result
        });
      },
      args: {
        input(_, $object, arg) {
          // We might have any number of step types here; we need
          // to get back to the underlying pgSelect.
          const $result = $object.getStepForKey("result");
          const $parent = "getParentStep" in $result ? $result.getParentStep() : $result;
          const $pgSelect = "getClassStep" in $parent ? $parent.getClassStep() : $parent;
          if ($pgSelect instanceof PgSelectStep) {
            // Mostly so `clientMutationId` works!
            arg.apply($pgSelect);
          } else {
            throw new Error(`Could not determine PgSelectStep for ${$result}`);
          }
        }
      }
    },
    createInput: {
      plan(_, args) {
        const $insert = pgInsertSingle(resource_inputsPgResource, Object.create(null));
        args.apply($insert);
        const plan = object({
          result: $insert
        });
        return plan;
      },
      args: {
        input(_, $object) {
          return $object;
        }
      }
    },
    createPatch: {
      plan(_, args) {
        const $insert = pgInsertSingle(resource_patchsPgResource, Object.create(null));
        args.apply($insert);
        const plan = object({
          result: $insert
        });
        return plan;
      },
      args: {
        input(_, $object) {
          return $object;
        }
      }
    },
    createReserved: {
      plan(_, args) {
        const $insert = pgInsertSingle(resource_reservedPgResource, Object.create(null));
        args.apply($insert);
        const plan = object({
          result: $insert
        });
        return plan;
      },
      args: {
        input(_, $object) {
          return $object;
        }
      }
    },
    createReservedPatchRecord: {
      plan(_, args) {
        const $insert = pgInsertSingle(resource_reservedPatchsPgResource, Object.create(null));
        args.apply($insert);
        const plan = object({
          result: $insert
        });
        return plan;
      },
      args: {
        input(_, $object) {
          return $object;
        }
      }
    },
    createReservedInputRecord: {
      plan(_, args) {
        const $insert = pgInsertSingle(resource_reserved_inputPgResource, Object.create(null));
        args.apply($insert);
        const plan = object({
          result: $insert
        });
        return plan;
      },
      args: {
        input(_, $object) {
          return $object;
        }
      }
    },
    createDefaultValue: {
      plan(_, args) {
        const $insert = pgInsertSingle(resource_default_valuePgResource, Object.create(null));
        args.apply($insert);
        const plan = object({
          result: $insert
        });
        return plan;
      },
      args: {
        input(_, $object) {
          return $object;
        }
      }
    },
    createForeignKey: {
      plan(_, args) {
        const $insert = pgInsertSingle(resource_foreign_keyPgResource, Object.create(null));
        args.apply($insert);
        const plan = object({
          result: $insert
        });
        return plan;
      },
      args: {
        input(_, $object) {
          return $object;
        }
      }
    },
    createNoPrimaryKey: {
      plan(_, args) {
        const $insert = pgInsertSingle(resource_no_primary_keyPgResource, Object.create(null));
        args.apply($insert);
        const plan = object({
          result: $insert
        });
        return plan;
      },
      args: {
        input(_, $object) {
          return $object;
        }
      }
    },
    createTestview: {
      plan(_, args) {
        const $insert = pgInsertSingle(resource_testviewPgResource, Object.create(null));
        args.apply($insert);
        const plan = object({
          result: $insert
        });
        return plan;
      },
      args: {
        input(_, $object) {
          return $object;
        }
      }
    },
    createMyTable: {
      plan(_, args) {
        const $insert = pgInsertSingle(resource_my_tablePgResource, Object.create(null));
        args.apply($insert);
        const plan = object({
          result: $insert
        });
        return plan;
      },
      args: {
        input(_, $object) {
          return $object;
        }
      }
    },
    createPersonSecret: {
      plan(_, args) {
        const $insert = pgInsertSingle(resource_person_secretPgResource, Object.create(null));
        args.apply($insert);
        const plan = object({
          result: $insert
        });
        return plan;
      },
      args: {
        input(_, $object) {
          return $object;
        }
      }
    },
    createViewTable: {
      plan(_, args) {
        const $insert = pgInsertSingle(resource_view_tablePgResource, Object.create(null));
        args.apply($insert);
        const plan = object({
          result: $insert
        });
        return plan;
      },
      args: {
        input(_, $object) {
          return $object;
        }
      }
    },
    createCompoundKey: {
      plan(_, args) {
        const $insert = pgInsertSingle(resource_compound_keyPgResource, Object.create(null));
        args.apply($insert);
        const plan = object({
          result: $insert
        });
        return plan;
      },
      args: {
        input(_, $object) {
          return $object;
        }
      }
    },
    createSimilarTable1: {
      plan(_, args) {
        const $insert = pgInsertSingle(resource_similar_table_1PgResource, Object.create(null));
        args.apply($insert);
        const plan = object({
          result: $insert
        });
        return plan;
      },
      args: {
        input(_, $object) {
          return $object;
        }
      }
    },
    createSimilarTable2: {
      plan(_, args) {
        const $insert = pgInsertSingle(resource_similar_table_2PgResource, Object.create(null));
        args.apply($insert);
        const plan = object({
          result: $insert
        });
        return plan;
      },
      args: {
        input(_, $object) {
          return $object;
        }
      }
    },
    createUpdatableView: {
      plan(_, args) {
        const $insert = pgInsertSingle(resource_updatable_viewPgResource, Object.create(null));
        args.apply($insert);
        const plan = object({
          result: $insert
        });
        return plan;
      },
      args: {
        input(_, $object) {
          return $object;
        }
      }
    },
    createNullTestRecord: {
      plan(_, args) {
        const $insert = pgInsertSingle(resource_null_test_recordPgResource, Object.create(null));
        args.apply($insert);
        const plan = object({
          result: $insert
        });
        return plan;
      },
      args: {
        input(_, $object) {
          return $object;
        }
      }
    },
    createEdgeCase: {
      plan(_, args) {
        const $insert = pgInsertSingle(resource_edge_casePgResource, Object.create(null));
        args.apply($insert);
        const plan = object({
          result: $insert
        });
        return plan;
      },
      args: {
        input(_, $object) {
          return $object;
        }
      }
    },
    createLeftArm: {
      plan(_, args) {
        const $insert = pgInsertSingle(resource_left_armPgResource, Object.create(null));
        args.apply($insert);
        const plan = object({
          result: $insert
        });
        return plan;
      },
      args: {
        input(_, $object) {
          return $object;
        }
      }
    },
    createIssue756: {
      plan(_, args) {
        const $insert = pgInsertSingle(resource_issue756PgResource, Object.create(null));
        args.apply($insert);
        const plan = object({
          result: $insert
        });
        return plan;
      },
      args: {
        input(_, $object) {
          return $object;
        }
      }
    },
    createPost: {
      plan(_, args) {
        const $insert = pgInsertSingle(resource_postPgResource, Object.create(null));
        args.apply($insert);
        const plan = object({
          result: $insert
        });
        return plan;
      },
      args: {
        input(_, $object) {
          return $object;
        }
      }
    },
    createPerson: {
      plan(_, args) {
        const $insert = pgInsertSingle(resource_personPgResource, Object.create(null));
        args.apply($insert);
        const plan = object({
          result: $insert
        });
        return plan;
      },
      args: {
        input(_, $object) {
          return $object;
        }
      }
    },
    createList: {
      plan(_, args) {
        const $insert = pgInsertSingle(resource_listsPgResource, Object.create(null));
        args.apply($insert);
        const plan = object({
          result: $insert
        });
        return plan;
      },
      args: {
        input(_, $object) {
          return $object;
        }
      }
    },
    createType: {
      plan(_, args) {
        const $insert = pgInsertSingle(resource_typesPgResource, Object.create(null));
        args.apply($insert);
        const plan = object({
          result: $insert
        });
        return plan;
      },
      args: {
        input(_, $object) {
          return $object;
        }
      }
    },
    updateInputById: {
      plan(_$root, args) {
        const $update = pgUpdateSingle(resource_inputsPgResource, {
          id: args.getRaw(['input', "id"])
        });
        args.apply($update);
        return object({
          result: $update
        });
      },
      args: {
        input(_, $object) {
          return $object;
        }
      }
    },
    updatePatchById: {
      plan(_$root, args) {
        const $update = pgUpdateSingle(resource_patchsPgResource, {
          id: args.getRaw(['input', "id"])
        });
        args.apply($update);
        return object({
          result: $update
        });
      },
      args: {
        input(_, $object) {
          return $object;
        }
      }
    },
    updateReservedById: {
      plan(_$root, args) {
        const $update = pgUpdateSingle(resource_reservedPgResource, {
          id: args.getRaw(['input', "id"])
        });
        args.apply($update);
        return object({
          result: $update
        });
      },
      args: {
        input(_, $object) {
          return $object;
        }
      }
    },
    updateReservedPatchRecordById: {
      plan(_$root, args) {
        const $update = pgUpdateSingle(resource_reservedPatchsPgResource, {
          id: args.getRaw(['input', "id"])
        });
        args.apply($update);
        return object({
          result: $update
        });
      },
      args: {
        input(_, $object) {
          return $object;
        }
      }
    },
    updateReservedInputRecordById: {
      plan(_$root, args) {
        const $update = pgUpdateSingle(resource_reserved_inputPgResource, {
          id: args.getRaw(['input', "id"])
        });
        args.apply($update);
        return object({
          result: $update
        });
      },
      args: {
        input(_, $object) {
          return $object;
        }
      }
    },
    updateDefaultValueById: {
      plan(_$root, args) {
        const $update = pgUpdateSingle(resource_default_valuePgResource, {
          id: args.getRaw(['input', "id"])
        });
        args.apply($update);
        return object({
          result: $update
        });
      },
      args: {
        input(_, $object) {
          return $object;
        }
      }
    },
    updateNoPrimaryKeyById: {
      plan(_$root, args) {
        const $update = pgUpdateSingle(resource_no_primary_keyPgResource, {
          id: args.getRaw(['input', "id"])
        });
        args.apply($update);
        return object({
          result: $update
        });
      },
      args: {
        input(_, $object) {
          return $object;
        }
      }
    },
    updateMyTableById: {
      plan(_$root, args) {
        const $update = pgUpdateSingle(resource_my_tablePgResource, {
          id: args.getRaw(['input', "id"])
        });
        args.apply($update);
        return object({
          result: $update
        });
      },
      args: {
        input(_, $object) {
          return $object;
        }
      }
    },
    updatePersonSecretByPersonId: {
      plan(_$root, args) {
        const $update = pgUpdateSingle(resource_person_secretPgResource, {
          person_id: args.getRaw(['input', "personId"])
        });
        args.apply($update);
        return object({
          result: $update
        });
      },
      args: {
        input(_, $object) {
          return $object;
        }
      }
    },
    updateViewTableById: {
      plan(_$root, args) {
        const $update = pgUpdateSingle(resource_view_tablePgResource, {
          id: args.getRaw(['input', "id"])
        });
        args.apply($update);
        return object({
          result: $update
        });
      },
      args: {
        input(_, $object) {
          return $object;
        }
      }
    },
    updateCompoundKeyByPersonId1AndPersonId2: {
      plan(_$root, args) {
        const $update = pgUpdateSingle(resource_compound_keyPgResource, {
          person_id_1: args.getRaw(['input', "personId1"]),
          person_id_2: args.getRaw(['input', "personId2"])
        });
        args.apply($update);
        return object({
          result: $update
        });
      },
      args: {
        input(_, $object) {
          return $object;
        }
      }
    },
    updateSimilarTable1ById: {
      plan(_$root, args) {
        const $update = pgUpdateSingle(resource_similar_table_1PgResource, {
          id: args.getRaw(['input', "id"])
        });
        args.apply($update);
        return object({
          result: $update
        });
      },
      args: {
        input(_, $object) {
          return $object;
        }
      }
    },
    updateSimilarTable2ById: {
      plan(_$root, args) {
        const $update = pgUpdateSingle(resource_similar_table_2PgResource, {
          id: args.getRaw(['input', "id"])
        });
        args.apply($update);
        return object({
          result: $update
        });
      },
      args: {
        input(_, $object) {
          return $object;
        }
      }
    },
    updateNullTestRecordById: {
      plan(_$root, args) {
        const $update = pgUpdateSingle(resource_null_test_recordPgResource, {
          id: args.getRaw(['input', "id"])
        });
        args.apply($update);
        return object({
          result: $update
        });
      },
      args: {
        input(_, $object) {
          return $object;
        }
      }
    },
    updateLeftArmById: {
      plan(_$root, args) {
        const $update = pgUpdateSingle(resource_left_armPgResource, {
          id: args.getRaw(['input', "id"])
        });
        args.apply($update);
        return object({
          result: $update
        });
      },
      args: {
        input(_, $object) {
          return $object;
        }
      }
    },
    updateLeftArmByPersonId: {
      plan(_$root, args) {
        const $update = pgUpdateSingle(resource_left_armPgResource, {
          person_id: args.getRaw(['input', "personId"])
        });
        args.apply($update);
        return object({
          result: $update
        });
      },
      args: {
        input(_, $object) {
          return $object;
        }
      }
    },
    updateIssue756ById: {
      plan(_$root, args) {
        const $update = pgUpdateSingle(resource_issue756PgResource, {
          id: args.getRaw(['input', "id"])
        });
        args.apply($update);
        return object({
          result: $update
        });
      },
      args: {
        input(_, $object) {
          return $object;
        }
      }
    },
    updatePostById: {
      plan(_$root, args) {
        const $update = pgUpdateSingle(resource_postPgResource, {
          id: args.getRaw(['input', "id"])
        });
        args.apply($update);
        return object({
          result: $update
        });
      },
      args: {
        input(_, $object) {
          return $object;
        }
      }
    },
    updatePersonById: {
      plan(_$root, args) {
        const $update = pgUpdateSingle(resource_personPgResource, {
          id: args.getRaw(['input', "id"])
        });
        args.apply($update);
        return object({
          result: $update
        });
      },
      args: {
        input(_, $object) {
          return $object;
        }
      }
    },
    updatePersonByEmail: {
      plan(_$root, args) {
        const $update = pgUpdateSingle(resource_personPgResource, {
          email: args.getRaw(['input', "email"])
        });
        args.apply($update);
        return object({
          result: $update
        });
      },
      args: {
        input(_, $object) {
          return $object;
        }
      }
    },
    updateListById: {
      plan(_$root, args) {
        const $update = pgUpdateSingle(resource_listsPgResource, {
          id: args.getRaw(['input', "id"])
        });
        args.apply($update);
        return object({
          result: $update
        });
      },
      args: {
        input(_, $object) {
          return $object;
        }
      }
    },
    updateTypeById: {
      plan(_$root, args) {
        const $update = pgUpdateSingle(resource_typesPgResource, {
          id: args.getRaw(['input', "id"])
        });
        args.apply($update);
        return object({
          result: $update
        });
      },
      args: {
        input(_, $object) {
          return $object;
        }
      }
    },
    deleteInputById: {
      plan(_$root, args) {
        const $delete = pgDeleteSingle(resource_inputsPgResource, {
          id: args.getRaw(['input', "id"])
        });
        args.apply($delete);
        return object({
          result: $delete
        });
      },
      args: {
        input(_, $object) {
          return $object;
        }
      }
    },
    deletePatchById: {
      plan(_$root, args) {
        const $delete = pgDeleteSingle(resource_patchsPgResource, {
          id: args.getRaw(['input', "id"])
        });
        args.apply($delete);
        return object({
          result: $delete
        });
      },
      args: {
        input(_, $object) {
          return $object;
        }
      }
    },
    deleteReservedById: {
      plan(_$root, args) {
        const $delete = pgDeleteSingle(resource_reservedPgResource, {
          id: args.getRaw(['input', "id"])
        });
        args.apply($delete);
        return object({
          result: $delete
        });
      },
      args: {
        input(_, $object) {
          return $object;
        }
      }
    },
    deleteReservedPatchRecordById: {
      plan(_$root, args) {
        const $delete = pgDeleteSingle(resource_reservedPatchsPgResource, {
          id: args.getRaw(['input', "id"])
        });
        args.apply($delete);
        return object({
          result: $delete
        });
      },
      args: {
        input(_, $object) {
          return $object;
        }
      }
    },
    deleteReservedInputRecordById: {
      plan(_$root, args) {
        const $delete = pgDeleteSingle(resource_reserved_inputPgResource, {
          id: args.getRaw(['input', "id"])
        });
        args.apply($delete);
        return object({
          result: $delete
        });
      },
      args: {
        input(_, $object) {
          return $object;
        }
      }
    },
    deleteDefaultValueById: {
      plan(_$root, args) {
        const $delete = pgDeleteSingle(resource_default_valuePgResource, {
          id: args.getRaw(['input', "id"])
        });
        args.apply($delete);
        return object({
          result: $delete
        });
      },
      args: {
        input(_, $object) {
          return $object;
        }
      }
    },
    deleteNoPrimaryKeyById: {
      plan(_$root, args) {
        const $delete = pgDeleteSingle(resource_no_primary_keyPgResource, {
          id: args.getRaw(['input', "id"])
        });
        args.apply($delete);
        return object({
          result: $delete
        });
      },
      args: {
        input(_, $object) {
          return $object;
        }
      }
    },
    deleteMyTableById: {
      plan(_$root, args) {
        const $delete = pgDeleteSingle(resource_my_tablePgResource, {
          id: args.getRaw(['input', "id"])
        });
        args.apply($delete);
        return object({
          result: $delete
        });
      },
      args: {
        input(_, $object) {
          return $object;
        }
      }
    },
    deletePersonSecretByPersonId: {
      plan(_$root, args) {
        const $delete = pgDeleteSingle(resource_person_secretPgResource, {
          person_id: args.getRaw(['input', "personId"])
        });
        args.apply($delete);
        return object({
          result: $delete
        });
      },
      args: {
        input(_, $object) {
          return $object;
        }
      }
    },
    deleteViewTableById: {
      plan(_$root, args) {
        const $delete = pgDeleteSingle(resource_view_tablePgResource, {
          id: args.getRaw(['input', "id"])
        });
        args.apply($delete);
        return object({
          result: $delete
        });
      },
      args: {
        input(_, $object) {
          return $object;
        }
      }
    },
    deleteCompoundKeyByPersonId1AndPersonId2: {
      plan(_$root, args) {
        const $delete = pgDeleteSingle(resource_compound_keyPgResource, {
          person_id_1: args.getRaw(['input', "personId1"]),
          person_id_2: args.getRaw(['input', "personId2"])
        });
        args.apply($delete);
        return object({
          result: $delete
        });
      },
      args: {
        input(_, $object) {
          return $object;
        }
      }
    },
    deleteSimilarTable1ById: {
      plan(_$root, args) {
        const $delete = pgDeleteSingle(resource_similar_table_1PgResource, {
          id: args.getRaw(['input', "id"])
        });
        args.apply($delete);
        return object({
          result: $delete
        });
      },
      args: {
        input(_, $object) {
          return $object;
        }
      }
    },
    deleteSimilarTable2ById: {
      plan(_$root, args) {
        const $delete = pgDeleteSingle(resource_similar_table_2PgResource, {
          id: args.getRaw(['input', "id"])
        });
        args.apply($delete);
        return object({
          result: $delete
        });
      },
      args: {
        input(_, $object) {
          return $object;
        }
      }
    },
    deleteNullTestRecordById: {
      plan(_$root, args) {
        const $delete = pgDeleteSingle(resource_null_test_recordPgResource, {
          id: args.getRaw(['input', "id"])
        });
        args.apply($delete);
        return object({
          result: $delete
        });
      },
      args: {
        input(_, $object) {
          return $object;
        }
      }
    },
    deleteLeftArmById: {
      plan(_$root, args) {
        const $delete = pgDeleteSingle(resource_left_armPgResource, {
          id: args.getRaw(['input', "id"])
        });
        args.apply($delete);
        return object({
          result: $delete
        });
      },
      args: {
        input(_, $object) {
          return $object;
        }
      }
    },
    deleteLeftArmByPersonId: {
      plan(_$root, args) {
        const $delete = pgDeleteSingle(resource_left_armPgResource, {
          person_id: args.getRaw(['input', "personId"])
        });
        args.apply($delete);
        return object({
          result: $delete
        });
      },
      args: {
        input(_, $object) {
          return $object;
        }
      }
    },
    deleteIssue756ById: {
      plan(_$root, args) {
        const $delete = pgDeleteSingle(resource_issue756PgResource, {
          id: args.getRaw(['input', "id"])
        });
        args.apply($delete);
        return object({
          result: $delete
        });
      },
      args: {
        input(_, $object) {
          return $object;
        }
      }
    },
    deletePostById: {
      plan(_$root, args) {
        const $delete = pgDeleteSingle(resource_postPgResource, {
          id: args.getRaw(['input', "id"])
        });
        args.apply($delete);
        return object({
          result: $delete
        });
      },
      args: {
        input(_, $object) {
          return $object;
        }
      }
    },
    deletePersonById: {
      plan(_$root, args) {
        const $delete = pgDeleteSingle(resource_personPgResource, {
          id: args.getRaw(['input', "id"])
        });
        args.apply($delete);
        return object({
          result: $delete
        });
      },
      args: {
        input(_, $object) {
          return $object;
        }
      }
    },
    deletePersonByEmail: {
      plan(_$root, args) {
        const $delete = pgDeleteSingle(resource_personPgResource, {
          email: args.getRaw(['input', "email"])
        });
        args.apply($delete);
        return object({
          result: $delete
        });
      },
      args: {
        input(_, $object) {
          return $object;
        }
      }
    },
    deleteListById: {
      plan(_$root, args) {
        const $delete = pgDeleteSingle(resource_listsPgResource, {
          id: args.getRaw(['input', "id"])
        });
        args.apply($delete);
        return object({
          result: $delete
        });
      },
      args: {
        input(_, $object) {
          return $object;
        }
      }
    },
    deleteTypeById: {
      plan(_$root, args) {
        const $delete = pgDeleteSingle(resource_typesPgResource, {
          id: args.getRaw(['input', "id"])
        });
        args.apply($delete);
        return object({
          result: $delete
        });
      },
      args: {
        input(_, $object) {
          return $object;
        }
      }
    }
  },
  MutationOutPayload: {
    __assertStep: ObjectStep,
    clientMutationId($object) {
      const $result = $object.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    o($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    }
  },
  MutationOutInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    }
  },
  MutationOutSetofPayload: {
    __assertStep: ObjectStep,
    clientMutationId($object) {
      const $result = $object.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    os($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    }
  },
  MutationOutSetofInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    }
  },
  MutationOutUnnamedPayload: {
    __assertStep: ObjectStep,
    clientMutationId($object) {
      const $result = $object.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    integer($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    }
  },
  MutationOutUnnamedInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    }
  },
  NoArgsMutationPayload: {
    __assertStep: ObjectStep,
    clientMutationId($object) {
      const $result = $object.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    integer($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    }
  },
  NoArgsMutationInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    }
  },
  ReturnVoidMutationPayload: {
    __assertStep: ObjectStep,
    clientMutationId($object) {
      const $result = $object.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    query() {
      return rootValue();
    }
  },
  ReturnVoidMutationInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    }
  },
  MutationIntervalSetPayload: {
    __assertStep: ObjectStep,
    clientMutationId($object) {
      const $result = $object.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    intervals($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    }
  },
  MutationIntervalSetInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    }
  },
  MutationInOutPayload: {
    __assertStep: ObjectStep,
    clientMutationId($object) {
      const $result = $object.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    o($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    }
  },
  MutationInOutInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    }
  },
  MutationReturnsTableOneColPayload: {
    __assertStep: ObjectStep,
    clientMutationId($object) {
      const $result = $object.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    col1S($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    }
  },
  MutationReturnsTableOneColInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    }
  },
  JsonIdentityMutationPayload: {
    __assertStep: ObjectStep,
    clientMutationId($object) {
      const $result = $object.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    json($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    }
  },
  JsonIdentityMutationInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    }
  },
  JsonbIdentityMutationPayload: {
    __assertStep: ObjectStep,
    clientMutationId($object) {
      const $result = $object.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    json($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    }
  },
  JsonbIdentityMutationInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    }
  },
  JsonbIdentityMutationPlpgsqlPayload: {
    __assertStep: ObjectStep,
    clientMutationId($object) {
      const $result = $object.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    json($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    }
  },
  JsonbIdentityMutationPlpgsqlInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    }
  },
  JsonbIdentityMutationPlpgsqlWithDefaultPayload: {
    __assertStep: ObjectStep,
    clientMutationId($object) {
      const $result = $object.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    json($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    }
  },
  JsonbIdentityMutationPlpgsqlWithDefaultInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    }
  },
  Add1MutationPayload: {
    __assertStep: ObjectStep,
    clientMutationId($object) {
      const $result = $object.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    integer($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    }
  },
  Add1MutationInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    }
  },
  Add2MutationPayload: {
    __assertStep: ObjectStep,
    clientMutationId($object) {
      const $result = $object.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    integer($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    }
  },
  Add2MutationInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    }
  },
  Add3MutationPayload: {
    __assertStep: ObjectStep,
    clientMutationId($object) {
      const $result = $object.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    integer($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    }
  },
  Add3MutationInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    }
  },
  Add4MutationPayload: {
    __assertStep: ObjectStep,
    clientMutationId($object) {
      const $result = $object.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    integer($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    }
  },
  Add4MutationInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    }
  },
  Add4MutationErrorPayload: {
    __assertStep: ObjectStep,
    clientMutationId($object) {
      const $result = $object.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    integer($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    }
  },
  Add4MutationErrorInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    }
  },
  Mult1Payload: {
    __assertStep: ObjectStep,
    clientMutationId($object) {
      const $result = $object.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    integer($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    }
  },
  Mult1Input: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    }
  },
  Mult2Payload: {
    __assertStep: ObjectStep,
    clientMutationId($object) {
      const $result = $object.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    integer($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    }
  },
  Mult2Input: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    }
  },
  Mult3Payload: {
    __assertStep: ObjectStep,
    clientMutationId($object) {
      const $result = $object.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    integer($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    }
  },
  Mult3Input: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    }
  },
  Mult4Payload: {
    __assertStep: ObjectStep,
    clientMutationId($object) {
      const $result = $object.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    integer($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    }
  },
  Mult4Input: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    }
  },
  MutationInInoutPayload: {
    __assertStep: ObjectStep,
    clientMutationId($object) {
      const $result = $object.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    ino($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    }
  },
  MutationInInoutInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    }
  },
  MutationOutOutPayload: {
    __assertStep: ObjectStep,
    clientMutationId($object) {
      const $result = $object.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    result($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    }
  },
  MutationOutOutRecord: {
    __assertStep: assertPgClassSingleStep,
    firstOut($record) {
      return $record.get("first_out");
    },
    secondOut($record) {
      return $record.get("second_out");
    }
  },
  MutationOutOutInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    }
  },
  MutationOutOutSetofPayload: {
    __assertStep: ObjectStep,
    clientMutationId($object) {
      const $result = $object.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    results($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    }
  },
  MutationOutOutSetofRecord: {
    __assertStep: assertPgClassSingleStep
  },
  MutationOutOutSetofInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    }
  },
  MutationOutOutUnnamedPayload: {
    __assertStep: ObjectStep,
    clientMutationId($object) {
      const $result = $object.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    result($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    }
  },
  MutationOutOutUnnamedRecord: {
    __assertStep: assertPgClassSingleStep,
    arg1($record) {
      return $record.get("column1");
    },
    arg2($record) {
      return $record.get("column2");
    }
  },
  MutationOutOutUnnamedInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    }
  },
  IntSetMutationPayload: {
    __assertStep: ObjectStep,
    clientMutationId($object) {
      const $result = $object.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    integers($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    }
  },
  IntSetMutationInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    }
  },
  MutationOutUnnamedOutOutUnnamedPayload: {
    __assertStep: ObjectStep,
    clientMutationId($object) {
      const $result = $object.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    result($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    }
  },
  MutationOutUnnamedOutOutUnnamedRecord: {
    __assertStep: assertPgClassSingleStep,
    arg1($record) {
      return $record.get("column1");
    },
    arg3($record) {
      return $record.get("column3");
    }
  },
  MutationOutUnnamedOutOutUnnamedInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    }
  },
  MutationReturnsTableMultiColPayload: {
    __assertStep: ObjectStep,
    clientMutationId($object) {
      const $result = $object.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    results($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    }
  },
  MutationReturnsTableMultiColRecord: {
    __assertStep: assertPgClassSingleStep
  },
  MutationReturnsTableMultiColInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    }
  },
  GuidFnPayload: {
    __assertStep: ObjectStep,
    clientMutationId($object) {
      const $result = $object.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    guid($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    }
  },
  Guid: {
    serialize: GraphQLString.serialize,
    parseValue: GraphQLString.parseValue,
    parseLiteral: GraphQLString.parseLiteral
  },
  GuidFnInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    }
  },
  MutationIntervalArrayPayload: {
    __assertStep: ObjectStep,
    clientMutationId($object) {
      const $result = $object.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    intervals($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    }
  },
  MutationIntervalArrayInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    }
  },
  MutationTextArrayPayload: {
    __assertStep: ObjectStep,
    clientMutationId($object) {
      const $result = $object.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    strings($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    }
  },
  MutationTextArrayInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    }
  },
  ListBdeMutationPayload: {
    __assertStep: ObjectStep,
    clientMutationId($object) {
      const $result = $object.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    uuids($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    }
  },
  ListBdeMutationInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    }
  },
  AuthenticateFailPayload: {
    __assertStep: ObjectStep,
    clientMutationId($object) {
      const $result = $object.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    jwtToken($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    }
  },
  JwtToken: {
    __assertStep: assertPgClassSingleStep
  },
  AuthenticateFailInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    }
  },
  AuthenticatePayload: {
    __assertStep: ObjectStep,
    clientMutationId($object) {
      const $result = $object.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    jwtToken($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    }
  },
  AuthenticateInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    }
  },
  LeftArmIdentityPayload: {
    __assertStep: ObjectStep,
    clientMutationId($object) {
      const $result = $object.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    leftArm($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    leftArmEdge($mutation, fieldArgs) {
      const $result = $mutation.getStepForKey("result", true);
      if (!$result) {
        return constant(null);
      }
      const $select = (() => {
        if ($result instanceof PgDeleteSingleStep) {
          return pgSelectFromRecord($result.resource, $result.record());
        } else {
          const spec = left_armUniques[0].attributes.reduce((memo, attributeName) => {
            memo[attributeName] = $result.get(attributeName);
            return memo;
          }, Object.create(null));
          return resource_left_armPgResource.find(spec);
        }
      })();
      fieldArgs.apply($select, "orderBy");
      const $connection = connection($select);
      // NOTE: you must not use `$single = $select.single()`
      // here because doing so will mark the row as unique, and
      // then the ordering logic (and thus cursor) will differ.
      const $single = $select.row(first($select));
      return new EdgeStep($connection, $single);
    },
    personByPersonId($record) {
      return resource_personPgResource.get({
        id: $record.get("result").get("person_id")
      });
    }
  },
  LeftArmIdentityInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    }
  },
  LeftArmBaseInput: {
    __baked: createObjectAndApplyChildren,
    id(obj, val, {
      field,
      schema
    }) {
      obj.set("id", bakedInputRuntime(schema, field.type, val));
    },
    personId(obj, val, {
      field,
      schema
    }) {
      obj.set("person_id", bakedInputRuntime(schema, field.type, val));
    },
    lengthInMetres(obj, val, {
      field,
      schema
    }) {
      obj.set("length_in_metres", bakedInputRuntime(schema, field.type, val));
    },
    mood(obj, val, {
      field,
      schema
    }) {
      obj.set("mood", bakedInputRuntime(schema, field.type, val));
    }
  },
  Issue756MutationPayload: {
    __assertStep: ObjectStep,
    clientMutationId($object) {
      const $result = $object.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    issue756($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    issue756Edge($mutation, fieldArgs) {
      const $result = $mutation.getStepForKey("result", true);
      if (!$result) {
        return constant(null);
      }
      const $select = (() => {
        if ($result instanceof PgDeleteSingleStep) {
          return pgSelectFromRecord($result.resource, $result.record());
        } else {
          const spec = issue756Uniques[0].attributes.reduce((memo, attributeName) => {
            memo[attributeName] = $result.get(attributeName);
            return memo;
          }, Object.create(null));
          return resource_issue756PgResource.find(spec);
        }
      })();
      fieldArgs.apply($select, "orderBy");
      const $connection = connection($select);
      // NOTE: you must not use `$single = $select.single()`
      // here because doing so will mark the row as unique, and
      // then the ordering logic (and thus cursor) will differ.
      const $single = $select.row(first($select));
      return new EdgeStep($connection, $single);
    }
  },
  Issue756MutationInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    }
  },
  Issue756SetMutationPayload: {
    __assertStep: ObjectStep,
    clientMutationId($object) {
      const $result = $object.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    issue756S($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    }
  },
  Issue756SetMutationInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    }
  },
  AuthenticateManyPayload: {
    __assertStep: ObjectStep,
    clientMutationId($object) {
      const $result = $object.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    jwtTokens($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    }
  },
  AuthenticateManyInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    }
  },
  AuthenticatePayloadPayload: {
    __assertStep: ObjectStep,
    clientMutationId($object) {
      const $result = $object.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    authPayload($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    personById($record) {
      return resource_personPgResource.get({
        id: $record.get("result").get("id")
      });
    }
  },
  AuthPayload: {
    __assertStep: assertPgClassSingleStep,
    jwt($record) {
      const $plan = $record.get("jwt");
      const $select = pgSelectSingleFromRecord(resource_frmcdc_jwtTokenPgResource, $plan);
      $select.getClassStep().setTrusted();
      return $select;
    },
    personById($record) {
      return resource_personPgResource.get({
        id: $record.get("id")
      });
    }
  },
  AuthenticatePayloadInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    }
  },
  TypesMutationPayload: {
    __assertStep: ObjectStep,
    clientMutationId($object) {
      const $result = $object.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    boolean($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    }
  },
  TypesMutationInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    }
  },
  MutationOutOutCompoundTypePayload: {
    __assertStep: ObjectStep,
    clientMutationId($object) {
      const $result = $object.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    result($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    }
  },
  MutationOutOutCompoundTypeRecord: {
    __assertStep: assertPgClassSingleStep,
    o2($record) {
      const $plan = $record.get("o2");
      const $select = pgSelectSingleFromRecord(resource_frmcdc_compoundTypePgResource, $plan);
      $select.getClassStep().setTrusted();
      return $select;
    }
  },
  MutationOutOutCompoundTypeInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    }
  },
  CompoundTypeMutationPayload: {
    __assertStep: ObjectStep,
    clientMutationId($object) {
      const $result = $object.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    compoundType($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    }
  },
  CompoundTypeMutationInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    }
  },
  CompoundTypeSetMutationPayload: {
    __assertStep: ObjectStep,
    clientMutationId($object) {
      const $result = $object.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    compoundTypes($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    }
  },
  CompoundTypeSetMutationInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    }
  },
  ListOfCompoundTypesMutationPayload: {
    __assertStep: ObjectStep,
    clientMutationId($object) {
      const $result = $object.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    compoundTypes($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    }
  },
  ListOfCompoundTypesMutationInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    }
  },
  TableMutationPayload: {
    __assertStep: ObjectStep,
    clientMutationId($object) {
      const $result = $object.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    post($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    postEdge($mutation, fieldArgs) {
      const $result = $mutation.getStepForKey("result", true);
      if (!$result) {
        return constant(null);
      }
      const $select = (() => {
        if ($result instanceof PgDeleteSingleStep) {
          return pgSelectFromRecord($result.resource, $result.record());
        } else {
          const spec = postUniques[0].attributes.reduce((memo, attributeName) => {
            memo[attributeName] = $result.get(attributeName);
            return memo;
          }, Object.create(null));
          return resource_postPgResource.find(spec);
        }
      })();
      fieldArgs.apply($select, "orderBy");
      const $connection = connection($select);
      // NOTE: you must not use `$single = $select.single()`
      // here because doing so will mark the row as unique, and
      // then the ordering logic (and thus cursor) will differ.
      const $single = $select.row(first($select));
      return new EdgeStep($connection, $single);
    },
    personByAuthorId($record) {
      return resource_personPgResource.get({
        id: $record.get("result").get("author_id")
      });
    }
  },
  TableMutationInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    }
  },
  PostWithSuffixPayload: {
    __assertStep: ObjectStep,
    clientMutationId($object) {
      const $result = $object.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    post($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    postEdge($mutation, fieldArgs) {
      const $result = $mutation.getStepForKey("result", true);
      if (!$result) {
        return constant(null);
      }
      const $select = (() => {
        if ($result instanceof PgDeleteSingleStep) {
          return pgSelectFromRecord($result.resource, $result.record());
        } else {
          const spec = postUniques[0].attributes.reduce((memo, attributeName) => {
            memo[attributeName] = $result.get(attributeName);
            return memo;
          }, Object.create(null));
          return resource_postPgResource.find(spec);
        }
      })();
      fieldArgs.apply($select, "orderBy");
      const $connection = connection($select);
      // NOTE: you must not use `$single = $select.single()`
      // here because doing so will mark the row as unique, and
      // then the ordering logic (and thus cursor) will differ.
      const $single = $select.row(first($select));
      return new EdgeStep($connection, $single);
    },
    personByAuthorId($record) {
      return resource_personPgResource.get({
        id: $record.get("result").get("author_id")
      });
    }
  },
  PostWithSuffixInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    }
  },
  PostInput: {
    __baked: createObjectAndApplyChildren,
    id(obj, val, {
      field,
      schema
    }) {
      obj.set("id", bakedInputRuntime(schema, field.type, val));
    },
    headline(obj, val, {
      field,
      schema
    }) {
      obj.set("headline", bakedInputRuntime(schema, field.type, val));
    },
    body(obj, val, {
      field,
      schema
    }) {
      obj.set("body", bakedInputRuntime(schema, field.type, val));
    },
    authorId(obj, val, {
      field,
      schema
    }) {
      obj.set("author_id", bakedInputRuntime(schema, field.type, val));
    },
    enums(obj, val, {
      field,
      schema
    }) {
      obj.set("enums", bakedInputRuntime(schema, field.type, val));
    },
    comptypes(obj, val, {
      field,
      schema
    }) {
      obj.set("comptypes", bakedInputRuntime(schema, field.type, val));
    }
  },
  MutationCompoundTypeArrayPayload: {
    __assertStep: ObjectStep,
    clientMutationId($object) {
      const $result = $object.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    compoundTypes($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    }
  },
  MutationCompoundTypeArrayInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    }
  },
  CompoundTypeArrayMutationPayload: {
    __assertStep: ObjectStep,
    clientMutationId($object) {
      const $result = $object.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    compoundTypes($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    }
  },
  CompoundTypeArrayMutationInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    }
  },
  PostManyPayload: {
    __assertStep: ObjectStep,
    clientMutationId($object) {
      const $result = $object.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    posts($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    }
  },
  PostManyInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    }
  },
  MutationOutComplexPayload: {
    __assertStep: ObjectStep,
    clientMutationId($object) {
      const $result = $object.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    result($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    }
  },
  MutationOutComplexRecord: {
    __assertStep: assertPgClassSingleStep,
    y($record) {
      const $plan = $record.get("y");
      const $select = pgSelectSingleFromRecord(resource_frmcdc_compoundTypePgResource, $plan);
      $select.getClassStep().setTrusted();
      return $select;
    },
    z($record) {
      const $plan = $record.get("z");
      const $select = pgSelectSingleFromRecord(resource_personPgResource, $plan);
      $select.getClassStep().setTrusted();
      return $select;
    }
  },
  MutationOutComplexInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    }
  },
  MutationOutComplexSetofPayload: {
    __assertStep: ObjectStep,
    clientMutationId($object) {
      const $result = $object.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    results($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    }
  },
  MutationOutComplexSetofRecord: {
    __assertStep: assertPgClassSingleStep,
    y($record) {
      const $plan = $record.get("y");
      const $select = pgSelectSingleFromRecord(resource_frmcdc_compoundTypePgResource, $plan);
      $select.getClassStep().setTrusted();
      return $select;
    },
    z($record) {
      const $plan = $record.get("z");
      const $select = pgSelectSingleFromRecord(resource_personPgResource, $plan);
      $select.getClassStep().setTrusted();
      return $select;
    }
  },
  MutationOutComplexSetofInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    }
  },
  MutationOutTablePayload: {
    __assertStep: ObjectStep,
    clientMutationId($object) {
      const $result = $object.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    person($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    personEdge($mutation, fieldArgs) {
      const $result = $mutation.getStepForKey("result", true);
      if (!$result) {
        return constant(null);
      }
      const $select = (() => {
        if ($result instanceof PgDeleteSingleStep) {
          return pgSelectFromRecord($result.resource, $result.record());
        } else {
          const spec = personUniques[0].attributes.reduce((memo, attributeName) => {
            memo[attributeName] = $result.get(attributeName);
            return memo;
          }, Object.create(null));
          return resource_personPgResource.find(spec);
        }
      })();
      fieldArgs.apply($select, "orderBy");
      const $connection = connection($select);
      // NOTE: you must not use `$single = $select.single()`
      // here because doing so will mark the row as unique, and
      // then the ordering logic (and thus cursor) will differ.
      const $single = $select.row(first($select));
      return new EdgeStep($connection, $single);
    }
  },
  MutationOutTableInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    }
  },
  MutationOutTableSetofPayload: {
    __assertStep: ObjectStep,
    clientMutationId($object) {
      const $result = $object.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    people($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    }
  },
  MutationOutTableSetofInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    }
  },
  TableSetMutationPayload: {
    __assertStep: ObjectStep,
    clientMutationId($object) {
      const $result = $object.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    people($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    }
  },
  TableSetMutationInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    }
  },
  TypeFunctionConnectionMutationPayload: {
    __assertStep: ObjectStep,
    clientMutationId($object) {
      const $result = $object.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    types($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    }
  },
  TypeFunctionConnectionMutationInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    }
  },
  TypeFunctionMutationPayload: {
    __assertStep: ObjectStep,
    clientMutationId($object) {
      const $result = $object.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    type($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    typeEdge($mutation, fieldArgs) {
      const $result = $mutation.getStepForKey("result", true);
      if (!$result) {
        return constant(null);
      }
      const $select = (() => {
        if ($result instanceof PgDeleteSingleStep) {
          return pgSelectFromRecord($result.resource, $result.record());
        } else {
          const spec = typesUniques[0].attributes.reduce((memo, attributeName) => {
            memo[attributeName] = $result.get(attributeName);
            return memo;
          }, Object.create(null));
          return resource_typesPgResource.find(spec);
        }
      })();
      fieldArgs.apply($select, "orderBy");
      const $connection = connection($select);
      // NOTE: you must not use `$single = $select.single()`
      // here because doing so will mark the row as unique, and
      // then the ordering logic (and thus cursor) will differ.
      const $single = $select.row(first($select));
      return new EdgeStep($connection, $single);
    },
    postBySmallint($record) {
      return resource_postPgResource.get({
        id: $record.get("result").get("smallint")
      });
    },
    postById($record) {
      return resource_postPgResource.get({
        id: $record.get("result").get("id")
      });
    }
  },
  TypeFunctionMutationInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    }
  },
  TypeFunctionListMutationPayload: {
    __assertStep: ObjectStep,
    clientMutationId($object) {
      const $result = $object.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    types($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    }
  },
  TypeFunctionListMutationInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    }
  },
  CreateInputPayload: {
    __assertStep: assertExecutableStep,
    clientMutationId($mutation) {
      const $insert = $mutation.getStepForKey("result");
      return $insert.getMeta("clientMutationId");
    },
    input($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    inputEdge($mutation, fieldArgs) {
      const $result = $mutation.getStepForKey("result", true);
      if (!$result) {
        return constant(null);
      }
      const $select = (() => {
        if ($result instanceof PgDeleteSingleStep) {
          return pgSelectFromRecord($result.resource, $result.record());
        } else {
          const spec = inputsUniques[0].attributes.reduce((memo, attributeName) => {
            memo[attributeName] = $result.get(attributeName);
            return memo;
          }, Object.create(null));
          return resource_inputsPgResource.find(spec);
        }
      })();
      fieldArgs.apply($select, "orderBy");
      const $connection = connection($select);
      // NOTE: you must not use `$single = $select.single()`
      // here because doing so will mark the row as unique, and
      // then the ordering logic (and thus cursor) will differ.
      const $single = $select.row(first($select));
      return new EdgeStep($connection, $single);
    }
  },
  CreateInputInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    },
    input(qb, arg) {
      if (arg != null) {
        return qb.setBuilder();
      }
    }
  },
  InputInput: {
    __baked: createObjectAndApplyChildren,
    id(obj, val, {
      field,
      schema
    }) {
      obj.set("id", bakedInputRuntime(schema, field.type, val));
    }
  },
  CreatePatchPayload: {
    __assertStep: assertExecutableStep,
    clientMutationId($mutation) {
      const $insert = $mutation.getStepForKey("result");
      return $insert.getMeta("clientMutationId");
    },
    patch($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    patchEdge($mutation, fieldArgs) {
      const $result = $mutation.getStepForKey("result", true);
      if (!$result) {
        return constant(null);
      }
      const $select = (() => {
        if ($result instanceof PgDeleteSingleStep) {
          return pgSelectFromRecord($result.resource, $result.record());
        } else {
          const spec = patchsUniques[0].attributes.reduce((memo, attributeName) => {
            memo[attributeName] = $result.get(attributeName);
            return memo;
          }, Object.create(null));
          return resource_patchsPgResource.find(spec);
        }
      })();
      fieldArgs.apply($select, "orderBy");
      const $connection = connection($select);
      // NOTE: you must not use `$single = $select.single()`
      // here because doing so will mark the row as unique, and
      // then the ordering logic (and thus cursor) will differ.
      const $single = $select.row(first($select));
      return new EdgeStep($connection, $single);
    }
  },
  CreatePatchInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    },
    patch(qb, arg) {
      if (arg != null) {
        return qb.setBuilder();
      }
    }
  },
  PatchInput: {
    __baked: createObjectAndApplyChildren,
    id(obj, val, {
      field,
      schema
    }) {
      obj.set("id", bakedInputRuntime(schema, field.type, val));
    }
  },
  CreateReservedPayload: {
    __assertStep: assertExecutableStep,
    clientMutationId($mutation) {
      const $insert = $mutation.getStepForKey("result");
      return $insert.getMeta("clientMutationId");
    },
    reserved($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    reservedEdge($mutation, fieldArgs) {
      const $result = $mutation.getStepForKey("result", true);
      if (!$result) {
        return constant(null);
      }
      const $select = (() => {
        if ($result instanceof PgDeleteSingleStep) {
          return pgSelectFromRecord($result.resource, $result.record());
        } else {
          const spec = reservedUniques[0].attributes.reduce((memo, attributeName) => {
            memo[attributeName] = $result.get(attributeName);
            return memo;
          }, Object.create(null));
          return resource_reservedPgResource.find(spec);
        }
      })();
      fieldArgs.apply($select, "orderBy");
      const $connection = connection($select);
      // NOTE: you must not use `$single = $select.single()`
      // here because doing so will mark the row as unique, and
      // then the ordering logic (and thus cursor) will differ.
      const $single = $select.row(first($select));
      return new EdgeStep($connection, $single);
    }
  },
  CreateReservedInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    },
    reserved(qb, arg) {
      if (arg != null) {
        return qb.setBuilder();
      }
    }
  },
  ReservedInput: {
    __baked: createObjectAndApplyChildren,
    id(obj, val, {
      field,
      schema
    }) {
      obj.set("id", bakedInputRuntime(schema, field.type, val));
    }
  },
  CreateReservedPatchRecordPayload: {
    __assertStep: assertExecutableStep,
    clientMutationId($mutation) {
      const $insert = $mutation.getStepForKey("result");
      return $insert.getMeta("clientMutationId");
    },
    reservedPatchRecord($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    reservedPatchRecordEdge($mutation, fieldArgs) {
      const $result = $mutation.getStepForKey("result", true);
      if (!$result) {
        return constant(null);
      }
      const $select = (() => {
        if ($result instanceof PgDeleteSingleStep) {
          return pgSelectFromRecord($result.resource, $result.record());
        } else {
          const spec = reservedPatchsUniques[0].attributes.reduce((memo, attributeName) => {
            memo[attributeName] = $result.get(attributeName);
            return memo;
          }, Object.create(null));
          return resource_reservedPatchsPgResource.find(spec);
        }
      })();
      fieldArgs.apply($select, "orderBy");
      const $connection = connection($select);
      // NOTE: you must not use `$single = $select.single()`
      // here because doing so will mark the row as unique, and
      // then the ordering logic (and thus cursor) will differ.
      const $single = $select.row(first($select));
      return new EdgeStep($connection, $single);
    }
  },
  CreateReservedPatchRecordInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    },
    reservedPatchRecord(qb, arg) {
      if (arg != null) {
        return qb.setBuilder();
      }
    }
  },
  ReservedPatchRecordInput: {
    __baked: createObjectAndApplyChildren,
    id(obj, val, {
      field,
      schema
    }) {
      obj.set("id", bakedInputRuntime(schema, field.type, val));
    }
  },
  CreateReservedInputRecordPayload: {
    __assertStep: assertExecutableStep,
    clientMutationId($mutation) {
      const $insert = $mutation.getStepForKey("result");
      return $insert.getMeta("clientMutationId");
    },
    reservedInputRecord($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    reservedInputRecordEdge($mutation, fieldArgs) {
      const $result = $mutation.getStepForKey("result", true);
      if (!$result) {
        return constant(null);
      }
      const $select = (() => {
        if ($result instanceof PgDeleteSingleStep) {
          return pgSelectFromRecord($result.resource, $result.record());
        } else {
          const spec = reserved_inputUniques[0].attributes.reduce((memo, attributeName) => {
            memo[attributeName] = $result.get(attributeName);
            return memo;
          }, Object.create(null));
          return resource_reserved_inputPgResource.find(spec);
        }
      })();
      fieldArgs.apply($select, "orderBy");
      const $connection = connection($select);
      // NOTE: you must not use `$single = $select.single()`
      // here because doing so will mark the row as unique, and
      // then the ordering logic (and thus cursor) will differ.
      const $single = $select.row(first($select));
      return new EdgeStep($connection, $single);
    }
  },
  CreateReservedInputRecordInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    },
    reservedInputRecord(qb, arg) {
      if (arg != null) {
        return qb.setBuilder();
      }
    }
  },
  ReservedInputRecordInput: {
    __baked: createObjectAndApplyChildren,
    id(obj, val, {
      field,
      schema
    }) {
      obj.set("id", bakedInputRuntime(schema, field.type, val));
    }
  },
  CreateDefaultValuePayload: {
    __assertStep: assertExecutableStep,
    clientMutationId($mutation) {
      const $insert = $mutation.getStepForKey("result");
      return $insert.getMeta("clientMutationId");
    },
    defaultValue($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    defaultValueEdge($mutation, fieldArgs) {
      const $result = $mutation.getStepForKey("result", true);
      if (!$result) {
        return constant(null);
      }
      const $select = (() => {
        if ($result instanceof PgDeleteSingleStep) {
          return pgSelectFromRecord($result.resource, $result.record());
        } else {
          const spec = default_valueUniques[0].attributes.reduce((memo, attributeName) => {
            memo[attributeName] = $result.get(attributeName);
            return memo;
          }, Object.create(null));
          return resource_default_valuePgResource.find(spec);
        }
      })();
      fieldArgs.apply($select, "orderBy");
      const $connection = connection($select);
      // NOTE: you must not use `$single = $select.single()`
      // here because doing so will mark the row as unique, and
      // then the ordering logic (and thus cursor) will differ.
      const $single = $select.row(first($select));
      return new EdgeStep($connection, $single);
    }
  },
  CreateDefaultValueInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    },
    defaultValue(qb, arg) {
      if (arg != null) {
        return qb.setBuilder();
      }
    }
  },
  DefaultValueInput: {
    __baked: createObjectAndApplyChildren,
    id(obj, val, {
      field,
      schema
    }) {
      obj.set("id", bakedInputRuntime(schema, field.type, val));
    },
    nullValue(obj, val, {
      field,
      schema
    }) {
      obj.set("null_value", bakedInputRuntime(schema, field.type, val));
    }
  },
  CreateForeignKeyPayload: {
    __assertStep: assertExecutableStep,
    clientMutationId($mutation) {
      const $insert = $mutation.getStepForKey("result");
      return $insert.getMeta("clientMutationId");
    },
    foreignKey($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    compoundKeyByCompoundKey1AndCompoundKey2($record) {
      return resource_compound_keyPgResource.get({
        person_id_1: $record.get("result").get("compound_key_1"),
        person_id_2: $record.get("result").get("compound_key_2")
      });
    },
    personByPersonId($record) {
      return resource_personPgResource.get({
        id: $record.get("result").get("person_id")
      });
    }
  },
  CreateForeignKeyInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    },
    foreignKey(qb, arg) {
      if (arg != null) {
        return qb.setBuilder();
      }
    }
  },
  ForeignKeyInput: {
    __baked: createObjectAndApplyChildren,
    personId(obj, val, {
      field,
      schema
    }) {
      obj.set("person_id", bakedInputRuntime(schema, field.type, val));
    },
    compoundKey1(obj, val, {
      field,
      schema
    }) {
      obj.set("compound_key_1", bakedInputRuntime(schema, field.type, val));
    },
    compoundKey2(obj, val, {
      field,
      schema
    }) {
      obj.set("compound_key_2", bakedInputRuntime(schema, field.type, val));
    }
  },
  CreateNoPrimaryKeyPayload: {
    __assertStep: assertExecutableStep,
    clientMutationId($mutation) {
      const $insert = $mutation.getStepForKey("result");
      return $insert.getMeta("clientMutationId");
    },
    noPrimaryKey($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    }
  },
  CreateNoPrimaryKeyInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    },
    noPrimaryKey(qb, arg) {
      if (arg != null) {
        return qb.setBuilder();
      }
    }
  },
  NoPrimaryKeyInput: {
    __baked: createObjectAndApplyChildren,
    id(obj, val, {
      field,
      schema
    }) {
      obj.set("id", bakedInputRuntime(schema, field.type, val));
    },
    str(obj, val, {
      field,
      schema
    }) {
      obj.set("str", bakedInputRuntime(schema, field.type, val));
    }
  },
  CreateTestviewPayload: {
    __assertStep: assertExecutableStep,
    clientMutationId($mutation) {
      const $insert = $mutation.getStepForKey("result");
      return $insert.getMeta("clientMutationId");
    },
    testview($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    }
  },
  CreateTestviewInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    },
    testview(qb, arg) {
      if (arg != null) {
        return qb.setBuilder();
      }
    }
  },
  TestviewInput: {
    __baked: createObjectAndApplyChildren,
    testviewid(obj, val, {
      field,
      schema
    }) {
      obj.set("testviewid", bakedInputRuntime(schema, field.type, val));
    },
    col1(obj, val, {
      field,
      schema
    }) {
      obj.set("col1", bakedInputRuntime(schema, field.type, val));
    },
    col2(obj, val, {
      field,
      schema
    }) {
      obj.set("col2", bakedInputRuntime(schema, field.type, val));
    }
  },
  CreateMyTablePayload: {
    __assertStep: assertExecutableStep,
    clientMutationId($mutation) {
      const $insert = $mutation.getStepForKey("result");
      return $insert.getMeta("clientMutationId");
    },
    myTable($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    myTableEdge($mutation, fieldArgs) {
      const $result = $mutation.getStepForKey("result", true);
      if (!$result) {
        return constant(null);
      }
      const $select = (() => {
        if ($result instanceof PgDeleteSingleStep) {
          return pgSelectFromRecord($result.resource, $result.record());
        } else {
          const spec = my_tableUniques[0].attributes.reduce((memo, attributeName) => {
            memo[attributeName] = $result.get(attributeName);
            return memo;
          }, Object.create(null));
          return resource_my_tablePgResource.find(spec);
        }
      })();
      fieldArgs.apply($select, "orderBy");
      const $connection = connection($select);
      // NOTE: you must not use `$single = $select.single()`
      // here because doing so will mark the row as unique, and
      // then the ordering logic (and thus cursor) will differ.
      const $single = $select.row(first($select));
      return new EdgeStep($connection, $single);
    }
  },
  CreateMyTableInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    },
    myTable(qb, arg) {
      if (arg != null) {
        return qb.setBuilder();
      }
    }
  },
  MyTableInput: {
    __baked: createObjectAndApplyChildren,
    id(obj, val, {
      field,
      schema
    }) {
      obj.set("id", bakedInputRuntime(schema, field.type, val));
    },
    jsonData(obj, val, {
      field,
      schema
    }) {
      obj.set("json_data", bakedInputRuntime(schema, field.type, val));
    }
  },
  CreatePersonSecretPayload: {
    __assertStep: assertExecutableStep,
    clientMutationId($mutation) {
      const $insert = $mutation.getStepForKey("result");
      return $insert.getMeta("clientMutationId");
    },
    personSecret($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    personSecretEdge($mutation, fieldArgs) {
      const $result = $mutation.getStepForKey("result", true);
      if (!$result) {
        return constant(null);
      }
      const $select = (() => {
        if ($result instanceof PgDeleteSingleStep) {
          return pgSelectFromRecord($result.resource, $result.record());
        } else {
          const spec = person_secretUniques[0].attributes.reduce((memo, attributeName) => {
            memo[attributeName] = $result.get(attributeName);
            return memo;
          }, Object.create(null));
          return resource_person_secretPgResource.find(spec);
        }
      })();
      fieldArgs.apply($select, "orderBy");
      const $connection = connection($select);
      // NOTE: you must not use `$single = $select.single()`
      // here because doing so will mark the row as unique, and
      // then the ordering logic (and thus cursor) will differ.
      const $single = $select.row(first($select));
      return new EdgeStep($connection, $single);
    },
    personByPersonId($record) {
      return resource_personPgResource.get({
        id: $record.get("result").get("person_id")
      });
    }
  },
  CreatePersonSecretInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    },
    personSecret(qb, arg) {
      if (arg != null) {
        return qb.setBuilder();
      }
    }
  },
  PersonSecretInput: {
    __baked: createObjectAndApplyChildren,
    personId(obj, val, {
      field,
      schema
    }) {
      obj.set("person_id", bakedInputRuntime(schema, field.type, val));
    },
    secret(obj, val, {
      field,
      schema
    }) {
      obj.set("sekrit", bakedInputRuntime(schema, field.type, val));
    }
  },
  CreateViewTablePayload: {
    __assertStep: assertExecutableStep,
    clientMutationId($mutation) {
      const $insert = $mutation.getStepForKey("result");
      return $insert.getMeta("clientMutationId");
    },
    viewTable($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    viewTableEdge($mutation, fieldArgs) {
      const $result = $mutation.getStepForKey("result", true);
      if (!$result) {
        return constant(null);
      }
      const $select = (() => {
        if ($result instanceof PgDeleteSingleStep) {
          return pgSelectFromRecord($result.resource, $result.record());
        } else {
          const spec = view_tableUniques[0].attributes.reduce((memo, attributeName) => {
            memo[attributeName] = $result.get(attributeName);
            return memo;
          }, Object.create(null));
          return resource_view_tablePgResource.find(spec);
        }
      })();
      fieldArgs.apply($select, "orderBy");
      const $connection = connection($select);
      // NOTE: you must not use `$single = $select.single()`
      // here because doing so will mark the row as unique, and
      // then the ordering logic (and thus cursor) will differ.
      const $single = $select.row(first($select));
      return new EdgeStep($connection, $single);
    }
  },
  CreateViewTableInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    },
    viewTable(qb, arg) {
      if (arg != null) {
        return qb.setBuilder();
      }
    }
  },
  ViewTableInput: {
    __baked: createObjectAndApplyChildren,
    id(obj, val, {
      field,
      schema
    }) {
      obj.set("id", bakedInputRuntime(schema, field.type, val));
    },
    col1(obj, val, {
      field,
      schema
    }) {
      obj.set("col1", bakedInputRuntime(schema, field.type, val));
    },
    col2(obj, val, {
      field,
      schema
    }) {
      obj.set("col2", bakedInputRuntime(schema, field.type, val));
    }
  },
  CreateCompoundKeyPayload: {
    __assertStep: assertExecutableStep,
    clientMutationId($mutation) {
      const $insert = $mutation.getStepForKey("result");
      return $insert.getMeta("clientMutationId");
    },
    compoundKey($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    compoundKeyEdge($mutation, fieldArgs) {
      const $result = $mutation.getStepForKey("result", true);
      if (!$result) {
        return constant(null);
      }
      const $select = (() => {
        if ($result instanceof PgDeleteSingleStep) {
          return pgSelectFromRecord($result.resource, $result.record());
        } else {
          const spec = compound_keyUniques[0].attributes.reduce((memo, attributeName) => {
            memo[attributeName] = $result.get(attributeName);
            return memo;
          }, Object.create(null));
          return resource_compound_keyPgResource.find(spec);
        }
      })();
      fieldArgs.apply($select, "orderBy");
      const $connection = connection($select);
      // NOTE: you must not use `$single = $select.single()`
      // here because doing so will mark the row as unique, and
      // then the ordering logic (and thus cursor) will differ.
      const $single = $select.row(first($select));
      return new EdgeStep($connection, $single);
    },
    personByPersonId1($record) {
      return resource_personPgResource.get({
        id: $record.get("result").get("person_id_1")
      });
    },
    personByPersonId2($record) {
      return resource_personPgResource.get({
        id: $record.get("result").get("person_id_2")
      });
    }
  },
  CreateCompoundKeyInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    },
    compoundKey(qb, arg) {
      if (arg != null) {
        return qb.setBuilder();
      }
    }
  },
  CompoundKeyInput: {
    __baked: createObjectAndApplyChildren,
    personId2(obj, val, {
      field,
      schema
    }) {
      obj.set("person_id_2", bakedInputRuntime(schema, field.type, val));
    },
    personId1(obj, val, {
      field,
      schema
    }) {
      obj.set("person_id_1", bakedInputRuntime(schema, field.type, val));
    },
    extra(obj, val, {
      field,
      schema
    }) {
      obj.set("extra", bakedInputRuntime(schema, field.type, val));
    }
  },
  CreateSimilarTable1Payload: {
    __assertStep: assertExecutableStep,
    clientMutationId($mutation) {
      const $insert = $mutation.getStepForKey("result");
      return $insert.getMeta("clientMutationId");
    },
    similarTable1($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    similarTable1Edge($mutation, fieldArgs) {
      const $result = $mutation.getStepForKey("result", true);
      if (!$result) {
        return constant(null);
      }
      const $select = (() => {
        if ($result instanceof PgDeleteSingleStep) {
          return pgSelectFromRecord($result.resource, $result.record());
        } else {
          const spec = similar_table_1Uniques[0].attributes.reduce((memo, attributeName) => {
            memo[attributeName] = $result.get(attributeName);
            return memo;
          }, Object.create(null));
          return resource_similar_table_1PgResource.find(spec);
        }
      })();
      fieldArgs.apply($select, "orderBy");
      const $connection = connection($select);
      // NOTE: you must not use `$single = $select.single()`
      // here because doing so will mark the row as unique, and
      // then the ordering logic (and thus cursor) will differ.
      const $single = $select.row(first($select));
      return new EdgeStep($connection, $single);
    }
  },
  CreateSimilarTable1Input: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    },
    similarTable1(qb, arg) {
      if (arg != null) {
        return qb.setBuilder();
      }
    }
  },
  SimilarTable1Input: {
    __baked: createObjectAndApplyChildren,
    id(obj, val, {
      field,
      schema
    }) {
      obj.set("id", bakedInputRuntime(schema, field.type, val));
    },
    col1(obj, val, {
      field,
      schema
    }) {
      obj.set("col1", bakedInputRuntime(schema, field.type, val));
    },
    col2(obj, val, {
      field,
      schema
    }) {
      obj.set("col2", bakedInputRuntime(schema, field.type, val));
    },
    col3(obj, val, {
      field,
      schema
    }) {
      obj.set("col3", bakedInputRuntime(schema, field.type, val));
    }
  },
  CreateSimilarTable2Payload: {
    __assertStep: assertExecutableStep,
    clientMutationId($mutation) {
      const $insert = $mutation.getStepForKey("result");
      return $insert.getMeta("clientMutationId");
    },
    similarTable2($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    similarTable2Edge($mutation, fieldArgs) {
      const $result = $mutation.getStepForKey("result", true);
      if (!$result) {
        return constant(null);
      }
      const $select = (() => {
        if ($result instanceof PgDeleteSingleStep) {
          return pgSelectFromRecord($result.resource, $result.record());
        } else {
          const spec = similar_table_2Uniques[0].attributes.reduce((memo, attributeName) => {
            memo[attributeName] = $result.get(attributeName);
            return memo;
          }, Object.create(null));
          return resource_similar_table_2PgResource.find(spec);
        }
      })();
      fieldArgs.apply($select, "orderBy");
      const $connection = connection($select);
      // NOTE: you must not use `$single = $select.single()`
      // here because doing so will mark the row as unique, and
      // then the ordering logic (and thus cursor) will differ.
      const $single = $select.row(first($select));
      return new EdgeStep($connection, $single);
    }
  },
  CreateSimilarTable2Input: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    },
    similarTable2(qb, arg) {
      if (arg != null) {
        return qb.setBuilder();
      }
    }
  },
  SimilarTable2Input: {
    __baked: createObjectAndApplyChildren,
    id(obj, val, {
      field,
      schema
    }) {
      obj.set("id", bakedInputRuntime(schema, field.type, val));
    },
    col3(obj, val, {
      field,
      schema
    }) {
      obj.set("col3", bakedInputRuntime(schema, field.type, val));
    },
    col4(obj, val, {
      field,
      schema
    }) {
      obj.set("col4", bakedInputRuntime(schema, field.type, val));
    },
    col5(obj, val, {
      field,
      schema
    }) {
      obj.set("col5", bakedInputRuntime(schema, field.type, val));
    }
  },
  CreateUpdatableViewPayload: {
    __assertStep: assertExecutableStep,
    clientMutationId($mutation) {
      const $insert = $mutation.getStepForKey("result");
      return $insert.getMeta("clientMutationId");
    },
    updatableView($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    }
  },
  CreateUpdatableViewInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    },
    updatableView(qb, arg) {
      if (arg != null) {
        return qb.setBuilder();
      }
    }
  },
  UpdatableViewInput: {
    __baked: createObjectAndApplyChildren,
    x(obj, val, {
      field,
      schema
    }) {
      obj.set("x", bakedInputRuntime(schema, field.type, val));
    },
    name(obj, val, {
      field,
      schema
    }) {
      obj.set("name", bakedInputRuntime(schema, field.type, val));
    },
    description(obj, val, {
      field,
      schema
    }) {
      obj.set("description", bakedInputRuntime(schema, field.type, val));
    },
    constant(obj, val, {
      field,
      schema
    }) {
      obj.set("constant", bakedInputRuntime(schema, field.type, val));
    }
  },
  CreateNullTestRecordPayload: {
    __assertStep: assertExecutableStep,
    clientMutationId($mutation) {
      const $insert = $mutation.getStepForKey("result");
      return $insert.getMeta("clientMutationId");
    },
    nullTestRecord($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    nullTestRecordEdge($mutation, fieldArgs) {
      const $result = $mutation.getStepForKey("result", true);
      if (!$result) {
        return constant(null);
      }
      const $select = (() => {
        if ($result instanceof PgDeleteSingleStep) {
          return pgSelectFromRecord($result.resource, $result.record());
        } else {
          const spec = null_test_recordUniques[0].attributes.reduce((memo, attributeName) => {
            memo[attributeName] = $result.get(attributeName);
            return memo;
          }, Object.create(null));
          return resource_null_test_recordPgResource.find(spec);
        }
      })();
      fieldArgs.apply($select, "orderBy");
      const $connection = connection($select);
      // NOTE: you must not use `$single = $select.single()`
      // here because doing so will mark the row as unique, and
      // then the ordering logic (and thus cursor) will differ.
      const $single = $select.row(first($select));
      return new EdgeStep($connection, $single);
    }
  },
  CreateNullTestRecordInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    },
    nullTestRecord(qb, arg) {
      if (arg != null) {
        return qb.setBuilder();
      }
    }
  },
  NullTestRecordInput: {
    __baked: createObjectAndApplyChildren,
    id(obj, val, {
      field,
      schema
    }) {
      obj.set("id", bakedInputRuntime(schema, field.type, val));
    },
    nullableText(obj, val, {
      field,
      schema
    }) {
      obj.set("nullable_text", bakedInputRuntime(schema, field.type, val));
    },
    nullableInt(obj, val, {
      field,
      schema
    }) {
      obj.set("nullable_int", bakedInputRuntime(schema, field.type, val));
    },
    nonNullText(obj, val, {
      field,
      schema
    }) {
      obj.set("non_null_text", bakedInputRuntime(schema, field.type, val));
    }
  },
  CreateEdgeCasePayload: {
    __assertStep: assertExecutableStep,
    clientMutationId($mutation) {
      const $insert = $mutation.getStepForKey("result");
      return $insert.getMeta("clientMutationId");
    },
    edgeCase($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    }
  },
  CreateEdgeCaseInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    },
    edgeCase(qb, arg) {
      if (arg != null) {
        return qb.setBuilder();
      }
    }
  },
  EdgeCaseInput: {
    __baked: createObjectAndApplyChildren,
    notNullHasDefault(obj, val, {
      field,
      schema
    }) {
      obj.set("not_null_has_default", bakedInputRuntime(schema, field.type, val));
    },
    wontCastEasy(obj, val, {
      field,
      schema
    }) {
      obj.set("wont_cast_easy", bakedInputRuntime(schema, field.type, val));
    },
    rowId(obj, val, {
      field,
      schema
    }) {
      obj.set("row_id", bakedInputRuntime(schema, field.type, val));
    }
  },
  CreateLeftArmPayload: {
    __assertStep: assertExecutableStep,
    clientMutationId($mutation) {
      const $insert = $mutation.getStepForKey("result");
      return $insert.getMeta("clientMutationId");
    },
    leftArm($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    leftArmEdge($mutation, fieldArgs) {
      const $result = $mutation.getStepForKey("result", true);
      if (!$result) {
        return constant(null);
      }
      const $select = (() => {
        if ($result instanceof PgDeleteSingleStep) {
          return pgSelectFromRecord($result.resource, $result.record());
        } else {
          const spec = left_armUniques[0].attributes.reduce((memo, attributeName) => {
            memo[attributeName] = $result.get(attributeName);
            return memo;
          }, Object.create(null));
          return resource_left_armPgResource.find(spec);
        }
      })();
      fieldArgs.apply($select, "orderBy");
      const $connection = connection($select);
      // NOTE: you must not use `$single = $select.single()`
      // here because doing so will mark the row as unique, and
      // then the ordering logic (and thus cursor) will differ.
      const $single = $select.row(first($select));
      return new EdgeStep($connection, $single);
    },
    personByPersonId($record) {
      return resource_personPgResource.get({
        id: $record.get("result").get("person_id")
      });
    }
  },
  CreateLeftArmInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    },
    leftArm(qb, arg) {
      if (arg != null) {
        return qb.setBuilder();
      }
    }
  },
  LeftArmInput: {
    __baked: createObjectAndApplyChildren,
    id(obj, val, {
      field,
      schema
    }) {
      obj.set("id", bakedInputRuntime(schema, field.type, val));
    },
    personId(obj, val, {
      field,
      schema
    }) {
      obj.set("person_id", bakedInputRuntime(schema, field.type, val));
    },
    lengthInMetres(obj, val, {
      field,
      schema
    }) {
      obj.set("length_in_metres", bakedInputRuntime(schema, field.type, val));
    },
    mood(obj, val, {
      field,
      schema
    }) {
      obj.set("mood", bakedInputRuntime(schema, field.type, val));
    }
  },
  CreateIssue756Payload: {
    __assertStep: assertExecutableStep,
    clientMutationId($mutation) {
      const $insert = $mutation.getStepForKey("result");
      return $insert.getMeta("clientMutationId");
    },
    issue756($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    issue756Edge($mutation, fieldArgs) {
      const $result = $mutation.getStepForKey("result", true);
      if (!$result) {
        return constant(null);
      }
      const $select = (() => {
        if ($result instanceof PgDeleteSingleStep) {
          return pgSelectFromRecord($result.resource, $result.record());
        } else {
          const spec = issue756Uniques[0].attributes.reduce((memo, attributeName) => {
            memo[attributeName] = $result.get(attributeName);
            return memo;
          }, Object.create(null));
          return resource_issue756PgResource.find(spec);
        }
      })();
      fieldArgs.apply($select, "orderBy");
      const $connection = connection($select);
      // NOTE: you must not use `$single = $select.single()`
      // here because doing so will mark the row as unique, and
      // then the ordering logic (and thus cursor) will differ.
      const $single = $select.row(first($select));
      return new EdgeStep($connection, $single);
    }
  },
  CreateIssue756Input: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    },
    issue756(qb, arg) {
      if (arg != null) {
        return qb.setBuilder();
      }
    }
  },
  Issue756Input: {
    __baked: createObjectAndApplyChildren,
    id(obj, val, {
      field,
      schema
    }) {
      obj.set("id", bakedInputRuntime(schema, field.type, val));
    },
    ts(obj, val, {
      field,
      schema
    }) {
      obj.set("ts", bakedInputRuntime(schema, field.type, val));
    }
  },
  CreatePostPayload: {
    __assertStep: assertExecutableStep,
    clientMutationId($mutation) {
      const $insert = $mutation.getStepForKey("result");
      return $insert.getMeta("clientMutationId");
    },
    post($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    postEdge($mutation, fieldArgs) {
      const $result = $mutation.getStepForKey("result", true);
      if (!$result) {
        return constant(null);
      }
      const $select = (() => {
        if ($result instanceof PgDeleteSingleStep) {
          return pgSelectFromRecord($result.resource, $result.record());
        } else {
          const spec = postUniques[0].attributes.reduce((memo, attributeName) => {
            memo[attributeName] = $result.get(attributeName);
            return memo;
          }, Object.create(null));
          return resource_postPgResource.find(spec);
        }
      })();
      fieldArgs.apply($select, "orderBy");
      const $connection = connection($select);
      // NOTE: you must not use `$single = $select.single()`
      // here because doing so will mark the row as unique, and
      // then the ordering logic (and thus cursor) will differ.
      const $single = $select.row(first($select));
      return new EdgeStep($connection, $single);
    },
    personByAuthorId($record) {
      return resource_personPgResource.get({
        id: $record.get("result").get("author_id")
      });
    }
  },
  CreatePostInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    },
    post(qb, arg) {
      if (arg != null) {
        return qb.setBuilder();
      }
    }
  },
  CreatePersonPayload: {
    __assertStep: assertExecutableStep,
    clientMutationId($mutation) {
      const $insert = $mutation.getStepForKey("result");
      return $insert.getMeta("clientMutationId");
    },
    person($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    personEdge($mutation, fieldArgs) {
      const $result = $mutation.getStepForKey("result", true);
      if (!$result) {
        return constant(null);
      }
      const $select = (() => {
        if ($result instanceof PgDeleteSingleStep) {
          return pgSelectFromRecord($result.resource, $result.record());
        } else {
          const spec = personUniques[0].attributes.reduce((memo, attributeName) => {
            memo[attributeName] = $result.get(attributeName);
            return memo;
          }, Object.create(null));
          return resource_personPgResource.find(spec);
        }
      })();
      fieldArgs.apply($select, "orderBy");
      const $connection = connection($select);
      // NOTE: you must not use `$single = $select.single()`
      // here because doing so will mark the row as unique, and
      // then the ordering logic (and thus cursor) will differ.
      const $single = $select.row(first($select));
      return new EdgeStep($connection, $single);
    }
  },
  CreatePersonInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    },
    person(qb, arg) {
      if (arg != null) {
        return qb.setBuilder();
      }
    }
  },
  PersonInput: {
    __baked: createObjectAndApplyChildren,
    id(obj, val, {
      field,
      schema
    }) {
      obj.set("id", bakedInputRuntime(schema, field.type, val));
    },
    name(obj, val, {
      field,
      schema
    }) {
      obj.set("person_full_name", bakedInputRuntime(schema, field.type, val));
    },
    aliases(obj, val, {
      field,
      schema
    }) {
      obj.set("aliases", bakedInputRuntime(schema, field.type, val));
    },
    about(obj, val, {
      field,
      schema
    }) {
      obj.set("about", bakedInputRuntime(schema, field.type, val));
    },
    email(obj, val, {
      field,
      schema
    }) {
      obj.set("email", bakedInputRuntime(schema, field.type, val));
    },
    site(obj, val, {
      field,
      schema
    }) {
      obj.set("site", bakedInputRuntime(schema, field.type, val));
    },
    config(obj, val, {
      field,
      schema
    }) {
      obj.set("config", bakedInputRuntime(schema, field.type, val));
    },
    lastLoginFromIp(obj, val, {
      field,
      schema
    }) {
      obj.set("last_login_from_ip", bakedInputRuntime(schema, field.type, val));
    },
    lastLoginFromSubnet(obj, val, {
      field,
      schema
    }) {
      obj.set("last_login_from_subnet", bakedInputRuntime(schema, field.type, val));
    },
    userMac(obj, val, {
      field,
      schema
    }) {
      obj.set("user_mac", bakedInputRuntime(schema, field.type, val));
    },
    createdAt(obj, val, {
      field,
      schema
    }) {
      obj.set("created_at", bakedInputRuntime(schema, field.type, val));
    }
  },
  CreateListPayload: {
    __assertStep: assertExecutableStep,
    clientMutationId($mutation) {
      const $insert = $mutation.getStepForKey("result");
      return $insert.getMeta("clientMutationId");
    },
    list($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    listEdge($mutation, fieldArgs) {
      const $result = $mutation.getStepForKey("result", true);
      if (!$result) {
        return constant(null);
      }
      const $select = (() => {
        if ($result instanceof PgDeleteSingleStep) {
          return pgSelectFromRecord($result.resource, $result.record());
        } else {
          const spec = listsUniques[0].attributes.reduce((memo, attributeName) => {
            memo[attributeName] = $result.get(attributeName);
            return memo;
          }, Object.create(null));
          return resource_listsPgResource.find(spec);
        }
      })();
      fieldArgs.apply($select, "orderBy");
      const $connection = connection($select);
      // NOTE: you must not use `$single = $select.single()`
      // here because doing so will mark the row as unique, and
      // then the ordering logic (and thus cursor) will differ.
      const $single = $select.row(first($select));
      return new EdgeStep($connection, $single);
    }
  },
  CreateListInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    },
    list(qb, arg) {
      if (arg != null) {
        return qb.setBuilder();
      }
    }
  },
  ListInput: {
    __baked: createObjectAndApplyChildren,
    id(obj, val, {
      field,
      schema
    }) {
      obj.set("id", bakedInputRuntime(schema, field.type, val));
    },
    intArray(obj, val, {
      field,
      schema
    }) {
      obj.set("int_array", bakedInputRuntime(schema, field.type, val));
    },
    intArrayNn(obj, val, {
      field,
      schema
    }) {
      obj.set("int_array_nn", bakedInputRuntime(schema, field.type, val));
    },
    enumArray(obj, val, {
      field,
      schema
    }) {
      obj.set("enum_array", bakedInputRuntime(schema, field.type, val));
    },
    enumArrayNn(obj, val, {
      field,
      schema
    }) {
      obj.set("enum_array_nn", bakedInputRuntime(schema, field.type, val));
    },
    dateArray(obj, val, {
      field,
      schema
    }) {
      obj.set("date_array", bakedInputRuntime(schema, field.type, val));
    },
    dateArrayNn(obj, val, {
      field,
      schema
    }) {
      obj.set("date_array_nn", bakedInputRuntime(schema, field.type, val));
    },
    timestamptzArray(obj, val, {
      field,
      schema
    }) {
      obj.set("timestamptz_array", bakedInputRuntime(schema, field.type, val));
    },
    timestamptzArrayNn(obj, val, {
      field,
      schema
    }) {
      obj.set("timestamptz_array_nn", bakedInputRuntime(schema, field.type, val));
    },
    compoundTypeArray(obj, val, {
      field,
      schema
    }) {
      obj.set("compound_type_array", bakedInputRuntime(schema, field.type, val));
    },
    compoundTypeArrayNn(obj, val, {
      field,
      schema
    }) {
      obj.set("compound_type_array_nn", bakedInputRuntime(schema, field.type, val));
    },
    byteaArray(obj, val, {
      field,
      schema
    }) {
      obj.set("bytea_array", bakedInputRuntime(schema, field.type, val));
    },
    byteaArrayNn(obj, val, {
      field,
      schema
    }) {
      obj.set("bytea_array_nn", bakedInputRuntime(schema, field.type, val));
    }
  },
  CreateTypePayload: {
    __assertStep: assertExecutableStep,
    clientMutationId($mutation) {
      const $insert = $mutation.getStepForKey("result");
      return $insert.getMeta("clientMutationId");
    },
    type($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    typeEdge($mutation, fieldArgs) {
      const $result = $mutation.getStepForKey("result", true);
      if (!$result) {
        return constant(null);
      }
      const $select = (() => {
        if ($result instanceof PgDeleteSingleStep) {
          return pgSelectFromRecord($result.resource, $result.record());
        } else {
          const spec = typesUniques[0].attributes.reduce((memo, attributeName) => {
            memo[attributeName] = $result.get(attributeName);
            return memo;
          }, Object.create(null));
          return resource_typesPgResource.find(spec);
        }
      })();
      fieldArgs.apply($select, "orderBy");
      const $connection = connection($select);
      // NOTE: you must not use `$single = $select.single()`
      // here because doing so will mark the row as unique, and
      // then the ordering logic (and thus cursor) will differ.
      const $single = $select.row(first($select));
      return new EdgeStep($connection, $single);
    },
    postBySmallint($record) {
      return resource_postPgResource.get({
        id: $record.get("result").get("smallint")
      });
    },
    postById($record) {
      return resource_postPgResource.get({
        id: $record.get("result").get("id")
      });
    }
  },
  CreateTypeInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    },
    type(qb, arg) {
      if (arg != null) {
        return qb.setBuilder();
      }
    }
  },
  TypeInput: {
    __baked: createObjectAndApplyChildren,
    id(obj, val, {
      field,
      schema
    }) {
      obj.set("id", bakedInputRuntime(schema, field.type, val));
    },
    smallint(obj, val, {
      field,
      schema
    }) {
      obj.set("smallint", bakedInputRuntime(schema, field.type, val));
    },
    bigint(obj, val, {
      field,
      schema
    }) {
      obj.set("bigint", bakedInputRuntime(schema, field.type, val));
    },
    numeric(obj, val, {
      field,
      schema
    }) {
      obj.set("numeric", bakedInputRuntime(schema, field.type, val));
    },
    decimal(obj, val, {
      field,
      schema
    }) {
      obj.set("decimal", bakedInputRuntime(schema, field.type, val));
    },
    boolean(obj, val, {
      field,
      schema
    }) {
      obj.set("boolean", bakedInputRuntime(schema, field.type, val));
    },
    varchar(obj, val, {
      field,
      schema
    }) {
      obj.set("varchar", bakedInputRuntime(schema, field.type, val));
    },
    enum(obj, val, {
      field,
      schema
    }) {
      obj.set("enum", bakedInputRuntime(schema, field.type, val));
    },
    enumArray(obj, val, {
      field,
      schema
    }) {
      obj.set("enum_array", bakedInputRuntime(schema, field.type, val));
    },
    domain(obj, val, {
      field,
      schema
    }) {
      obj.set("domain", bakedInputRuntime(schema, field.type, val));
    },
    domain2(obj, val, {
      field,
      schema
    }) {
      obj.set("domain2", bakedInputRuntime(schema, field.type, val));
    },
    textArray(obj, val, {
      field,
      schema
    }) {
      obj.set("text_array", bakedInputRuntime(schema, field.type, val));
    },
    json(obj, val, {
      field,
      schema
    }) {
      obj.set("json", bakedInputRuntime(schema, field.type, val));
    },
    jsonb(obj, val, {
      field,
      schema
    }) {
      obj.set("jsonb", bakedInputRuntime(schema, field.type, val));
    },
    nullableRange(obj, val, {
      field,
      schema
    }) {
      obj.set("nullable_range", bakedInputRuntime(schema, field.type, val));
    },
    numrange(obj, val, {
      field,
      schema
    }) {
      obj.set("numrange", bakedInputRuntime(schema, field.type, val));
    },
    daterange(obj, val, {
      field,
      schema
    }) {
      obj.set("daterange", bakedInputRuntime(schema, field.type, val));
    },
    anIntRange(obj, val, {
      field,
      schema
    }) {
      obj.set("an_int_range", bakedInputRuntime(schema, field.type, val));
    },
    timestamp(obj, val, {
      field,
      schema
    }) {
      obj.set("timestamp", bakedInputRuntime(schema, field.type, val));
    },
    timestamptz(obj, val, {
      field,
      schema
    }) {
      obj.set("timestamptz", bakedInputRuntime(schema, field.type, val));
    },
    date(obj, val, {
      field,
      schema
    }) {
      obj.set("date", bakedInputRuntime(schema, field.type, val));
    },
    time(obj, val, {
      field,
      schema
    }) {
      obj.set("time", bakedInputRuntime(schema, field.type, val));
    },
    timetz(obj, val, {
      field,
      schema
    }) {
      obj.set("timetz", bakedInputRuntime(schema, field.type, val));
    },
    interval(obj, val, {
      field,
      schema
    }) {
      obj.set("interval", bakedInputRuntime(schema, field.type, val));
    },
    intervalArray(obj, val, {
      field,
      schema
    }) {
      obj.set("interval_array", bakedInputRuntime(schema, field.type, val));
    },
    money(obj, val, {
      field,
      schema
    }) {
      obj.set("money", bakedInputRuntime(schema, field.type, val));
    },
    compoundType(obj, val, {
      field,
      schema
    }) {
      obj.set("compound_type", bakedInputRuntime(schema, field.type, val));
    },
    nestedCompoundType(obj, val, {
      field,
      schema
    }) {
      obj.set("nested_compound_type", bakedInputRuntime(schema, field.type, val));
    },
    nullableCompoundType(obj, val, {
      field,
      schema
    }) {
      obj.set("nullable_compound_type", bakedInputRuntime(schema, field.type, val));
    },
    nullableNestedCompoundType(obj, val, {
      field,
      schema
    }) {
      obj.set("nullable_nested_compound_type", bakedInputRuntime(schema, field.type, val));
    },
    point(obj, val, {
      field,
      schema
    }) {
      obj.set("point", bakedInputRuntime(schema, field.type, val));
    },
    nullablePoint(obj, val, {
      field,
      schema
    }) {
      obj.set("nullablePoint", bakedInputRuntime(schema, field.type, val));
    },
    inet(obj, val, {
      field,
      schema
    }) {
      obj.set("inet", bakedInputRuntime(schema, field.type, val));
    },
    cidr(obj, val, {
      field,
      schema
    }) {
      obj.set("cidr", bakedInputRuntime(schema, field.type, val));
    },
    macaddr(obj, val, {
      field,
      schema
    }) {
      obj.set("macaddr", bakedInputRuntime(schema, field.type, val));
    },
    regproc(obj, val, {
      field,
      schema
    }) {
      obj.set("regproc", bakedInputRuntime(schema, field.type, val));
    },
    regprocedure(obj, val, {
      field,
      schema
    }) {
      obj.set("regprocedure", bakedInputRuntime(schema, field.type, val));
    },
    regoper(obj, val, {
      field,
      schema
    }) {
      obj.set("regoper", bakedInputRuntime(schema, field.type, val));
    },
    regoperator(obj, val, {
      field,
      schema
    }) {
      obj.set("regoperator", bakedInputRuntime(schema, field.type, val));
    },
    regclass(obj, val, {
      field,
      schema
    }) {
      obj.set("regclass", bakedInputRuntime(schema, field.type, val));
    },
    regtype(obj, val, {
      field,
      schema
    }) {
      obj.set("regtype", bakedInputRuntime(schema, field.type, val));
    },
    regconfig(obj, val, {
      field,
      schema
    }) {
      obj.set("regconfig", bakedInputRuntime(schema, field.type, val));
    },
    regdictionary(obj, val, {
      field,
      schema
    }) {
      obj.set("regdictionary", bakedInputRuntime(schema, field.type, val));
    },
    textArrayDomain(obj, val, {
      field,
      schema
    }) {
      obj.set("text_array_domain", bakedInputRuntime(schema, field.type, val));
    },
    int8ArrayDomain(obj, val, {
      field,
      schema
    }) {
      obj.set("int8_array_domain", bakedInputRuntime(schema, field.type, val));
    },
    bytea(obj, val, {
      field,
      schema
    }) {
      obj.set("bytea", bakedInputRuntime(schema, field.type, val));
    },
    byteaArray(obj, val, {
      field,
      schema
    }) {
      obj.set("bytea_array", bakedInputRuntime(schema, field.type, val));
    },
    ltree(obj, val, {
      field,
      schema
    }) {
      obj.set("ltree", bakedInputRuntime(schema, field.type, val));
    },
    ltreeArray(obj, val, {
      field,
      schema
    }) {
      obj.set("ltree_array", bakedInputRuntime(schema, field.type, val));
    }
  },
  UpdateInputPayload: {
    __assertStep: ObjectStep,
    clientMutationId($mutation) {
      const $result = $mutation.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    input($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    inputEdge($mutation, fieldArgs) {
      const $result = $mutation.getStepForKey("result", true);
      if (!$result) {
        return constant(null);
      }
      const $select = (() => {
        if ($result instanceof PgDeleteSingleStep) {
          return pgSelectFromRecord($result.resource, $result.record());
        } else {
          const spec = inputsUniques[0].attributes.reduce((memo, attributeName) => {
            memo[attributeName] = $result.get(attributeName);
            return memo;
          }, Object.create(null));
          return resource_inputsPgResource.find(spec);
        }
      })();
      fieldArgs.apply($select, "orderBy");
      const $connection = connection($select);
      // NOTE: you must not use `$single = $select.single()`
      // here because doing so will mark the row as unique, and
      // then the ordering logic (and thus cursor) will differ.
      const $single = $select.row(first($select));
      return new EdgeStep($connection, $single);
    }
  },
  UpdateInputByIdInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    },
    inputPatch(qb, arg) {
      if (arg != null) {
        return qb.setBuilder();
      }
    }
  },
  InputPatch: {
    __baked: createObjectAndApplyChildren,
    id(obj, val, {
      field,
      schema
    }) {
      obj.set("id", bakedInputRuntime(schema, field.type, val));
    }
  },
  UpdatePatchPayload: {
    __assertStep: ObjectStep,
    clientMutationId($mutation) {
      const $result = $mutation.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    patch($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    patchEdge($mutation, fieldArgs) {
      const $result = $mutation.getStepForKey("result", true);
      if (!$result) {
        return constant(null);
      }
      const $select = (() => {
        if ($result instanceof PgDeleteSingleStep) {
          return pgSelectFromRecord($result.resource, $result.record());
        } else {
          const spec = patchsUniques[0].attributes.reduce((memo, attributeName) => {
            memo[attributeName] = $result.get(attributeName);
            return memo;
          }, Object.create(null));
          return resource_patchsPgResource.find(spec);
        }
      })();
      fieldArgs.apply($select, "orderBy");
      const $connection = connection($select);
      // NOTE: you must not use `$single = $select.single()`
      // here because doing so will mark the row as unique, and
      // then the ordering logic (and thus cursor) will differ.
      const $single = $select.row(first($select));
      return new EdgeStep($connection, $single);
    }
  },
  UpdatePatchByIdInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    },
    patchPatch(qb, arg) {
      if (arg != null) {
        return qb.setBuilder();
      }
    }
  },
  PatchPatch: {
    __baked: createObjectAndApplyChildren,
    id(obj, val, {
      field,
      schema
    }) {
      obj.set("id", bakedInputRuntime(schema, field.type, val));
    }
  },
  UpdateReservedPayload: {
    __assertStep: ObjectStep,
    clientMutationId($mutation) {
      const $result = $mutation.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    reserved($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    reservedEdge($mutation, fieldArgs) {
      const $result = $mutation.getStepForKey("result", true);
      if (!$result) {
        return constant(null);
      }
      const $select = (() => {
        if ($result instanceof PgDeleteSingleStep) {
          return pgSelectFromRecord($result.resource, $result.record());
        } else {
          const spec = reservedUniques[0].attributes.reduce((memo, attributeName) => {
            memo[attributeName] = $result.get(attributeName);
            return memo;
          }, Object.create(null));
          return resource_reservedPgResource.find(spec);
        }
      })();
      fieldArgs.apply($select, "orderBy");
      const $connection = connection($select);
      // NOTE: you must not use `$single = $select.single()`
      // here because doing so will mark the row as unique, and
      // then the ordering logic (and thus cursor) will differ.
      const $single = $select.row(first($select));
      return new EdgeStep($connection, $single);
    }
  },
  UpdateReservedByIdInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    },
    reservedPatch(qb, arg) {
      if (arg != null) {
        return qb.setBuilder();
      }
    }
  },
  ReservedPatch: {
    __baked: createObjectAndApplyChildren,
    id(obj, val, {
      field,
      schema
    }) {
      obj.set("id", bakedInputRuntime(schema, field.type, val));
    }
  },
  UpdateReservedPatchRecordPayload: {
    __assertStep: ObjectStep,
    clientMutationId($mutation) {
      const $result = $mutation.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    reservedPatchRecord($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    reservedPatchRecordEdge($mutation, fieldArgs) {
      const $result = $mutation.getStepForKey("result", true);
      if (!$result) {
        return constant(null);
      }
      const $select = (() => {
        if ($result instanceof PgDeleteSingleStep) {
          return pgSelectFromRecord($result.resource, $result.record());
        } else {
          const spec = reservedPatchsUniques[0].attributes.reduce((memo, attributeName) => {
            memo[attributeName] = $result.get(attributeName);
            return memo;
          }, Object.create(null));
          return resource_reservedPatchsPgResource.find(spec);
        }
      })();
      fieldArgs.apply($select, "orderBy");
      const $connection = connection($select);
      // NOTE: you must not use `$single = $select.single()`
      // here because doing so will mark the row as unique, and
      // then the ordering logic (and thus cursor) will differ.
      const $single = $select.row(first($select));
      return new EdgeStep($connection, $single);
    }
  },
  UpdateReservedPatchRecordByIdInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    },
    reservedPatchRecordPatch(qb, arg) {
      if (arg != null) {
        return qb.setBuilder();
      }
    }
  },
  ReservedPatchRecordPatch: {
    __baked: createObjectAndApplyChildren,
    id(obj, val, {
      field,
      schema
    }) {
      obj.set("id", bakedInputRuntime(schema, field.type, val));
    }
  },
  UpdateReservedInputRecordPayload: {
    __assertStep: ObjectStep,
    clientMutationId($mutation) {
      const $result = $mutation.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    reservedInputRecord($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    reservedInputRecordEdge($mutation, fieldArgs) {
      const $result = $mutation.getStepForKey("result", true);
      if (!$result) {
        return constant(null);
      }
      const $select = (() => {
        if ($result instanceof PgDeleteSingleStep) {
          return pgSelectFromRecord($result.resource, $result.record());
        } else {
          const spec = reserved_inputUniques[0].attributes.reduce((memo, attributeName) => {
            memo[attributeName] = $result.get(attributeName);
            return memo;
          }, Object.create(null));
          return resource_reserved_inputPgResource.find(spec);
        }
      })();
      fieldArgs.apply($select, "orderBy");
      const $connection = connection($select);
      // NOTE: you must not use `$single = $select.single()`
      // here because doing so will mark the row as unique, and
      // then the ordering logic (and thus cursor) will differ.
      const $single = $select.row(first($select));
      return new EdgeStep($connection, $single);
    }
  },
  UpdateReservedInputRecordByIdInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    },
    reservedInputRecordPatch(qb, arg) {
      if (arg != null) {
        return qb.setBuilder();
      }
    }
  },
  ReservedInputRecordPatch: {
    __baked: createObjectAndApplyChildren,
    id(obj, val, {
      field,
      schema
    }) {
      obj.set("id", bakedInputRuntime(schema, field.type, val));
    }
  },
  UpdateDefaultValuePayload: {
    __assertStep: ObjectStep,
    clientMutationId($mutation) {
      const $result = $mutation.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    defaultValue($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    defaultValueEdge($mutation, fieldArgs) {
      const $result = $mutation.getStepForKey("result", true);
      if (!$result) {
        return constant(null);
      }
      const $select = (() => {
        if ($result instanceof PgDeleteSingleStep) {
          return pgSelectFromRecord($result.resource, $result.record());
        } else {
          const spec = default_valueUniques[0].attributes.reduce((memo, attributeName) => {
            memo[attributeName] = $result.get(attributeName);
            return memo;
          }, Object.create(null));
          return resource_default_valuePgResource.find(spec);
        }
      })();
      fieldArgs.apply($select, "orderBy");
      const $connection = connection($select);
      // NOTE: you must not use `$single = $select.single()`
      // here because doing so will mark the row as unique, and
      // then the ordering logic (and thus cursor) will differ.
      const $single = $select.row(first($select));
      return new EdgeStep($connection, $single);
    }
  },
  UpdateDefaultValueByIdInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    },
    defaultValuePatch(qb, arg) {
      if (arg != null) {
        return qb.setBuilder();
      }
    }
  },
  DefaultValuePatch: {
    __baked: createObjectAndApplyChildren,
    id(obj, val, {
      field,
      schema
    }) {
      obj.set("id", bakedInputRuntime(schema, field.type, val));
    },
    nullValue(obj, val, {
      field,
      schema
    }) {
      obj.set("null_value", bakedInputRuntime(schema, field.type, val));
    }
  },
  UpdateNoPrimaryKeyPayload: {
    __assertStep: ObjectStep,
    clientMutationId($mutation) {
      const $result = $mutation.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    noPrimaryKey($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    }
  },
  UpdateNoPrimaryKeyByIdInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    },
    noPrimaryKeyPatch(qb, arg) {
      if (arg != null) {
        return qb.setBuilder();
      }
    }
  },
  NoPrimaryKeyPatch: {
    __baked: createObjectAndApplyChildren,
    id(obj, val, {
      field,
      schema
    }) {
      obj.set("id", bakedInputRuntime(schema, field.type, val));
    },
    str(obj, val, {
      field,
      schema
    }) {
      obj.set("str", bakedInputRuntime(schema, field.type, val));
    }
  },
  UpdateMyTablePayload: {
    __assertStep: ObjectStep,
    clientMutationId($mutation) {
      const $result = $mutation.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    myTable($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    myTableEdge($mutation, fieldArgs) {
      const $result = $mutation.getStepForKey("result", true);
      if (!$result) {
        return constant(null);
      }
      const $select = (() => {
        if ($result instanceof PgDeleteSingleStep) {
          return pgSelectFromRecord($result.resource, $result.record());
        } else {
          const spec = my_tableUniques[0].attributes.reduce((memo, attributeName) => {
            memo[attributeName] = $result.get(attributeName);
            return memo;
          }, Object.create(null));
          return resource_my_tablePgResource.find(spec);
        }
      })();
      fieldArgs.apply($select, "orderBy");
      const $connection = connection($select);
      // NOTE: you must not use `$single = $select.single()`
      // here because doing so will mark the row as unique, and
      // then the ordering logic (and thus cursor) will differ.
      const $single = $select.row(first($select));
      return new EdgeStep($connection, $single);
    }
  },
  UpdateMyTableByIdInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    },
    myTablePatch(qb, arg) {
      if (arg != null) {
        return qb.setBuilder();
      }
    }
  },
  MyTablePatch: {
    __baked: createObjectAndApplyChildren,
    id(obj, val, {
      field,
      schema
    }) {
      obj.set("id", bakedInputRuntime(schema, field.type, val));
    },
    jsonData(obj, val, {
      field,
      schema
    }) {
      obj.set("json_data", bakedInputRuntime(schema, field.type, val));
    }
  },
  UpdatePersonSecretPayload: {
    __assertStep: ObjectStep,
    clientMutationId($mutation) {
      const $result = $mutation.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    personSecret($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    personSecretEdge($mutation, fieldArgs) {
      const $result = $mutation.getStepForKey("result", true);
      if (!$result) {
        return constant(null);
      }
      const $select = (() => {
        if ($result instanceof PgDeleteSingleStep) {
          return pgSelectFromRecord($result.resource, $result.record());
        } else {
          const spec = person_secretUniques[0].attributes.reduce((memo, attributeName) => {
            memo[attributeName] = $result.get(attributeName);
            return memo;
          }, Object.create(null));
          return resource_person_secretPgResource.find(spec);
        }
      })();
      fieldArgs.apply($select, "orderBy");
      const $connection = connection($select);
      // NOTE: you must not use `$single = $select.single()`
      // here because doing so will mark the row as unique, and
      // then the ordering logic (and thus cursor) will differ.
      const $single = $select.row(first($select));
      return new EdgeStep($connection, $single);
    },
    personByPersonId($record) {
      return resource_personPgResource.get({
        id: $record.get("result").get("person_id")
      });
    }
  },
  UpdatePersonSecretByPersonIdInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    },
    personSecretPatch(qb, arg) {
      if (arg != null) {
        return qb.setBuilder();
      }
    }
  },
  PersonSecretPatch: {
    __baked: createObjectAndApplyChildren,
    personId(obj, val, {
      field,
      schema
    }) {
      obj.set("person_id", bakedInputRuntime(schema, field.type, val));
    },
    secret(obj, val, {
      field,
      schema
    }) {
      obj.set("sekrit", bakedInputRuntime(schema, field.type, val));
    }
  },
  UpdateViewTablePayload: {
    __assertStep: ObjectStep,
    clientMutationId($mutation) {
      const $result = $mutation.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    viewTable($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    viewTableEdge($mutation, fieldArgs) {
      const $result = $mutation.getStepForKey("result", true);
      if (!$result) {
        return constant(null);
      }
      const $select = (() => {
        if ($result instanceof PgDeleteSingleStep) {
          return pgSelectFromRecord($result.resource, $result.record());
        } else {
          const spec = view_tableUniques[0].attributes.reduce((memo, attributeName) => {
            memo[attributeName] = $result.get(attributeName);
            return memo;
          }, Object.create(null));
          return resource_view_tablePgResource.find(spec);
        }
      })();
      fieldArgs.apply($select, "orderBy");
      const $connection = connection($select);
      // NOTE: you must not use `$single = $select.single()`
      // here because doing so will mark the row as unique, and
      // then the ordering logic (and thus cursor) will differ.
      const $single = $select.row(first($select));
      return new EdgeStep($connection, $single);
    }
  },
  UpdateViewTableByIdInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    },
    viewTablePatch(qb, arg) {
      if (arg != null) {
        return qb.setBuilder();
      }
    }
  },
  ViewTablePatch: {
    __baked: createObjectAndApplyChildren,
    id(obj, val, {
      field,
      schema
    }) {
      obj.set("id", bakedInputRuntime(schema, field.type, val));
    },
    col1(obj, val, {
      field,
      schema
    }) {
      obj.set("col1", bakedInputRuntime(schema, field.type, val));
    },
    col2(obj, val, {
      field,
      schema
    }) {
      obj.set("col2", bakedInputRuntime(schema, field.type, val));
    }
  },
  UpdateCompoundKeyPayload: {
    __assertStep: ObjectStep,
    clientMutationId($mutation) {
      const $result = $mutation.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    compoundKey($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    compoundKeyEdge($mutation, fieldArgs) {
      const $result = $mutation.getStepForKey("result", true);
      if (!$result) {
        return constant(null);
      }
      const $select = (() => {
        if ($result instanceof PgDeleteSingleStep) {
          return pgSelectFromRecord($result.resource, $result.record());
        } else {
          const spec = compound_keyUniques[0].attributes.reduce((memo, attributeName) => {
            memo[attributeName] = $result.get(attributeName);
            return memo;
          }, Object.create(null));
          return resource_compound_keyPgResource.find(spec);
        }
      })();
      fieldArgs.apply($select, "orderBy");
      const $connection = connection($select);
      // NOTE: you must not use `$single = $select.single()`
      // here because doing so will mark the row as unique, and
      // then the ordering logic (and thus cursor) will differ.
      const $single = $select.row(first($select));
      return new EdgeStep($connection, $single);
    },
    personByPersonId1($record) {
      return resource_personPgResource.get({
        id: $record.get("result").get("person_id_1")
      });
    },
    personByPersonId2($record) {
      return resource_personPgResource.get({
        id: $record.get("result").get("person_id_2")
      });
    }
  },
  UpdateCompoundKeyByPersonId1AndPersonId2Input: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    },
    compoundKeyPatch(qb, arg) {
      if (arg != null) {
        return qb.setBuilder();
      }
    }
  },
  CompoundKeyPatch: {
    __baked: createObjectAndApplyChildren,
    personId2(obj, val, {
      field,
      schema
    }) {
      obj.set("person_id_2", bakedInputRuntime(schema, field.type, val));
    },
    personId1(obj, val, {
      field,
      schema
    }) {
      obj.set("person_id_1", bakedInputRuntime(schema, field.type, val));
    },
    extra(obj, val, {
      field,
      schema
    }) {
      obj.set("extra", bakedInputRuntime(schema, field.type, val));
    }
  },
  UpdateSimilarTable1Payload: {
    __assertStep: ObjectStep,
    clientMutationId($mutation) {
      const $result = $mutation.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    similarTable1($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    similarTable1Edge($mutation, fieldArgs) {
      const $result = $mutation.getStepForKey("result", true);
      if (!$result) {
        return constant(null);
      }
      const $select = (() => {
        if ($result instanceof PgDeleteSingleStep) {
          return pgSelectFromRecord($result.resource, $result.record());
        } else {
          const spec = similar_table_1Uniques[0].attributes.reduce((memo, attributeName) => {
            memo[attributeName] = $result.get(attributeName);
            return memo;
          }, Object.create(null));
          return resource_similar_table_1PgResource.find(spec);
        }
      })();
      fieldArgs.apply($select, "orderBy");
      const $connection = connection($select);
      // NOTE: you must not use `$single = $select.single()`
      // here because doing so will mark the row as unique, and
      // then the ordering logic (and thus cursor) will differ.
      const $single = $select.row(first($select));
      return new EdgeStep($connection, $single);
    }
  },
  UpdateSimilarTable1ByIdInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    },
    similarTable1Patch(qb, arg) {
      if (arg != null) {
        return qb.setBuilder();
      }
    }
  },
  SimilarTable1Patch: {
    __baked: createObjectAndApplyChildren,
    id(obj, val, {
      field,
      schema
    }) {
      obj.set("id", bakedInputRuntime(schema, field.type, val));
    },
    col1(obj, val, {
      field,
      schema
    }) {
      obj.set("col1", bakedInputRuntime(schema, field.type, val));
    },
    col2(obj, val, {
      field,
      schema
    }) {
      obj.set("col2", bakedInputRuntime(schema, field.type, val));
    },
    col3(obj, val, {
      field,
      schema
    }) {
      obj.set("col3", bakedInputRuntime(schema, field.type, val));
    }
  },
  UpdateSimilarTable2Payload: {
    __assertStep: ObjectStep,
    clientMutationId($mutation) {
      const $result = $mutation.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    similarTable2($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    similarTable2Edge($mutation, fieldArgs) {
      const $result = $mutation.getStepForKey("result", true);
      if (!$result) {
        return constant(null);
      }
      const $select = (() => {
        if ($result instanceof PgDeleteSingleStep) {
          return pgSelectFromRecord($result.resource, $result.record());
        } else {
          const spec = similar_table_2Uniques[0].attributes.reduce((memo, attributeName) => {
            memo[attributeName] = $result.get(attributeName);
            return memo;
          }, Object.create(null));
          return resource_similar_table_2PgResource.find(spec);
        }
      })();
      fieldArgs.apply($select, "orderBy");
      const $connection = connection($select);
      // NOTE: you must not use `$single = $select.single()`
      // here because doing so will mark the row as unique, and
      // then the ordering logic (and thus cursor) will differ.
      const $single = $select.row(first($select));
      return new EdgeStep($connection, $single);
    }
  },
  UpdateSimilarTable2ByIdInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    },
    similarTable2Patch(qb, arg) {
      if (arg != null) {
        return qb.setBuilder();
      }
    }
  },
  SimilarTable2Patch: {
    __baked: createObjectAndApplyChildren,
    id(obj, val, {
      field,
      schema
    }) {
      obj.set("id", bakedInputRuntime(schema, field.type, val));
    },
    col3(obj, val, {
      field,
      schema
    }) {
      obj.set("col3", bakedInputRuntime(schema, field.type, val));
    },
    col4(obj, val, {
      field,
      schema
    }) {
      obj.set("col4", bakedInputRuntime(schema, field.type, val));
    },
    col5(obj, val, {
      field,
      schema
    }) {
      obj.set("col5", bakedInputRuntime(schema, field.type, val));
    }
  },
  UpdateNullTestRecordPayload: {
    __assertStep: ObjectStep,
    clientMutationId($mutation) {
      const $result = $mutation.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    nullTestRecord($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    nullTestRecordEdge($mutation, fieldArgs) {
      const $result = $mutation.getStepForKey("result", true);
      if (!$result) {
        return constant(null);
      }
      const $select = (() => {
        if ($result instanceof PgDeleteSingleStep) {
          return pgSelectFromRecord($result.resource, $result.record());
        } else {
          const spec = null_test_recordUniques[0].attributes.reduce((memo, attributeName) => {
            memo[attributeName] = $result.get(attributeName);
            return memo;
          }, Object.create(null));
          return resource_null_test_recordPgResource.find(spec);
        }
      })();
      fieldArgs.apply($select, "orderBy");
      const $connection = connection($select);
      // NOTE: you must not use `$single = $select.single()`
      // here because doing so will mark the row as unique, and
      // then the ordering logic (and thus cursor) will differ.
      const $single = $select.row(first($select));
      return new EdgeStep($connection, $single);
    }
  },
  UpdateNullTestRecordByIdInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    },
    nullTestRecordPatch(qb, arg) {
      if (arg != null) {
        return qb.setBuilder();
      }
    }
  },
  NullTestRecordPatch: {
    __baked: createObjectAndApplyChildren,
    id(obj, val, {
      field,
      schema
    }) {
      obj.set("id", bakedInputRuntime(schema, field.type, val));
    },
    nullableText(obj, val, {
      field,
      schema
    }) {
      obj.set("nullable_text", bakedInputRuntime(schema, field.type, val));
    },
    nullableInt(obj, val, {
      field,
      schema
    }) {
      obj.set("nullable_int", bakedInputRuntime(schema, field.type, val));
    },
    nonNullText(obj, val, {
      field,
      schema
    }) {
      obj.set("non_null_text", bakedInputRuntime(schema, field.type, val));
    }
  },
  UpdateLeftArmPayload: {
    __assertStep: ObjectStep,
    clientMutationId($mutation) {
      const $result = $mutation.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    leftArm($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    leftArmEdge($mutation, fieldArgs) {
      const $result = $mutation.getStepForKey("result", true);
      if (!$result) {
        return constant(null);
      }
      const $select = (() => {
        if ($result instanceof PgDeleteSingleStep) {
          return pgSelectFromRecord($result.resource, $result.record());
        } else {
          const spec = left_armUniques[0].attributes.reduce((memo, attributeName) => {
            memo[attributeName] = $result.get(attributeName);
            return memo;
          }, Object.create(null));
          return resource_left_armPgResource.find(spec);
        }
      })();
      fieldArgs.apply($select, "orderBy");
      const $connection = connection($select);
      // NOTE: you must not use `$single = $select.single()`
      // here because doing so will mark the row as unique, and
      // then the ordering logic (and thus cursor) will differ.
      const $single = $select.row(first($select));
      return new EdgeStep($connection, $single);
    },
    personByPersonId($record) {
      return resource_personPgResource.get({
        id: $record.get("result").get("person_id")
      });
    }
  },
  UpdateLeftArmByIdInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    },
    leftArmPatch(qb, arg) {
      if (arg != null) {
        return qb.setBuilder();
      }
    }
  },
  LeftArmPatch: {
    __baked: createObjectAndApplyChildren,
    id(obj, val, {
      field,
      schema
    }) {
      obj.set("id", bakedInputRuntime(schema, field.type, val));
    },
    personId(obj, val, {
      field,
      schema
    }) {
      obj.set("person_id", bakedInputRuntime(schema, field.type, val));
    },
    lengthInMetres(obj, val, {
      field,
      schema
    }) {
      obj.set("length_in_metres", bakedInputRuntime(schema, field.type, val));
    },
    mood(obj, val, {
      field,
      schema
    }) {
      obj.set("mood", bakedInputRuntime(schema, field.type, val));
    }
  },
  UpdateLeftArmByPersonIdInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    },
    leftArmPatch(qb, arg) {
      if (arg != null) {
        return qb.setBuilder();
      }
    }
  },
  UpdateIssue756Payload: {
    __assertStep: ObjectStep,
    clientMutationId($mutation) {
      const $result = $mutation.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    issue756($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    issue756Edge($mutation, fieldArgs) {
      const $result = $mutation.getStepForKey("result", true);
      if (!$result) {
        return constant(null);
      }
      const $select = (() => {
        if ($result instanceof PgDeleteSingleStep) {
          return pgSelectFromRecord($result.resource, $result.record());
        } else {
          const spec = issue756Uniques[0].attributes.reduce((memo, attributeName) => {
            memo[attributeName] = $result.get(attributeName);
            return memo;
          }, Object.create(null));
          return resource_issue756PgResource.find(spec);
        }
      })();
      fieldArgs.apply($select, "orderBy");
      const $connection = connection($select);
      // NOTE: you must not use `$single = $select.single()`
      // here because doing so will mark the row as unique, and
      // then the ordering logic (and thus cursor) will differ.
      const $single = $select.row(first($select));
      return new EdgeStep($connection, $single);
    }
  },
  UpdateIssue756ByIdInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    },
    issue756Patch(qb, arg) {
      if (arg != null) {
        return qb.setBuilder();
      }
    }
  },
  Issue756Patch: {
    __baked: createObjectAndApplyChildren,
    id(obj, val, {
      field,
      schema
    }) {
      obj.set("id", bakedInputRuntime(schema, field.type, val));
    },
    ts(obj, val, {
      field,
      schema
    }) {
      obj.set("ts", bakedInputRuntime(schema, field.type, val));
    }
  },
  UpdatePostPayload: {
    __assertStep: ObjectStep,
    clientMutationId($mutation) {
      const $result = $mutation.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    post($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    postEdge($mutation, fieldArgs) {
      const $result = $mutation.getStepForKey("result", true);
      if (!$result) {
        return constant(null);
      }
      const $select = (() => {
        if ($result instanceof PgDeleteSingleStep) {
          return pgSelectFromRecord($result.resource, $result.record());
        } else {
          const spec = postUniques[0].attributes.reduce((memo, attributeName) => {
            memo[attributeName] = $result.get(attributeName);
            return memo;
          }, Object.create(null));
          return resource_postPgResource.find(spec);
        }
      })();
      fieldArgs.apply($select, "orderBy");
      const $connection = connection($select);
      // NOTE: you must not use `$single = $select.single()`
      // here because doing so will mark the row as unique, and
      // then the ordering logic (and thus cursor) will differ.
      const $single = $select.row(first($select));
      return new EdgeStep($connection, $single);
    },
    personByAuthorId($record) {
      return resource_personPgResource.get({
        id: $record.get("result").get("author_id")
      });
    }
  },
  UpdatePostByIdInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    },
    postPatch(qb, arg) {
      if (arg != null) {
        return qb.setBuilder();
      }
    }
  },
  PostPatch: {
    __baked: createObjectAndApplyChildren,
    id(obj, val, {
      field,
      schema
    }) {
      obj.set("id", bakedInputRuntime(schema, field.type, val));
    },
    headline(obj, val, {
      field,
      schema
    }) {
      obj.set("headline", bakedInputRuntime(schema, field.type, val));
    },
    body(obj, val, {
      field,
      schema
    }) {
      obj.set("body", bakedInputRuntime(schema, field.type, val));
    },
    authorId(obj, val, {
      field,
      schema
    }) {
      obj.set("author_id", bakedInputRuntime(schema, field.type, val));
    },
    enums(obj, val, {
      field,
      schema
    }) {
      obj.set("enums", bakedInputRuntime(schema, field.type, val));
    },
    comptypes(obj, val, {
      field,
      schema
    }) {
      obj.set("comptypes", bakedInputRuntime(schema, field.type, val));
    }
  },
  UpdatePersonPayload: {
    __assertStep: ObjectStep,
    clientMutationId($mutation) {
      const $result = $mutation.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    person($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    personEdge($mutation, fieldArgs) {
      const $result = $mutation.getStepForKey("result", true);
      if (!$result) {
        return constant(null);
      }
      const $select = (() => {
        if ($result instanceof PgDeleteSingleStep) {
          return pgSelectFromRecord($result.resource, $result.record());
        } else {
          const spec = personUniques[0].attributes.reduce((memo, attributeName) => {
            memo[attributeName] = $result.get(attributeName);
            return memo;
          }, Object.create(null));
          return resource_personPgResource.find(spec);
        }
      })();
      fieldArgs.apply($select, "orderBy");
      const $connection = connection($select);
      // NOTE: you must not use `$single = $select.single()`
      // here because doing so will mark the row as unique, and
      // then the ordering logic (and thus cursor) will differ.
      const $single = $select.row(first($select));
      return new EdgeStep($connection, $single);
    }
  },
  UpdatePersonByIdInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    },
    personPatch(qb, arg) {
      if (arg != null) {
        return qb.setBuilder();
      }
    }
  },
  PersonPatch: {
    __baked: createObjectAndApplyChildren,
    id(obj, val, {
      field,
      schema
    }) {
      obj.set("id", bakedInputRuntime(schema, field.type, val));
    },
    name(obj, val, {
      field,
      schema
    }) {
      obj.set("person_full_name", bakedInputRuntime(schema, field.type, val));
    },
    aliases(obj, val, {
      field,
      schema
    }) {
      obj.set("aliases", bakedInputRuntime(schema, field.type, val));
    },
    about(obj, val, {
      field,
      schema
    }) {
      obj.set("about", bakedInputRuntime(schema, field.type, val));
    },
    email(obj, val, {
      field,
      schema
    }) {
      obj.set("email", bakedInputRuntime(schema, field.type, val));
    },
    site(obj, val, {
      field,
      schema
    }) {
      obj.set("site", bakedInputRuntime(schema, field.type, val));
    },
    config(obj, val, {
      field,
      schema
    }) {
      obj.set("config", bakedInputRuntime(schema, field.type, val));
    },
    lastLoginFromIp(obj, val, {
      field,
      schema
    }) {
      obj.set("last_login_from_ip", bakedInputRuntime(schema, field.type, val));
    },
    lastLoginFromSubnet(obj, val, {
      field,
      schema
    }) {
      obj.set("last_login_from_subnet", bakedInputRuntime(schema, field.type, val));
    },
    userMac(obj, val, {
      field,
      schema
    }) {
      obj.set("user_mac", bakedInputRuntime(schema, field.type, val));
    },
    createdAt(obj, val, {
      field,
      schema
    }) {
      obj.set("created_at", bakedInputRuntime(schema, field.type, val));
    }
  },
  UpdatePersonByEmailInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    },
    personPatch(qb, arg) {
      if (arg != null) {
        return qb.setBuilder();
      }
    }
  },
  UpdateListPayload: {
    __assertStep: ObjectStep,
    clientMutationId($mutation) {
      const $result = $mutation.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    list($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    listEdge($mutation, fieldArgs) {
      const $result = $mutation.getStepForKey("result", true);
      if (!$result) {
        return constant(null);
      }
      const $select = (() => {
        if ($result instanceof PgDeleteSingleStep) {
          return pgSelectFromRecord($result.resource, $result.record());
        } else {
          const spec = listsUniques[0].attributes.reduce((memo, attributeName) => {
            memo[attributeName] = $result.get(attributeName);
            return memo;
          }, Object.create(null));
          return resource_listsPgResource.find(spec);
        }
      })();
      fieldArgs.apply($select, "orderBy");
      const $connection = connection($select);
      // NOTE: you must not use `$single = $select.single()`
      // here because doing so will mark the row as unique, and
      // then the ordering logic (and thus cursor) will differ.
      const $single = $select.row(first($select));
      return new EdgeStep($connection, $single);
    }
  },
  UpdateListByIdInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    },
    listPatch(qb, arg) {
      if (arg != null) {
        return qb.setBuilder();
      }
    }
  },
  ListPatch: {
    __baked: createObjectAndApplyChildren,
    id(obj, val, {
      field,
      schema
    }) {
      obj.set("id", bakedInputRuntime(schema, field.type, val));
    },
    intArray(obj, val, {
      field,
      schema
    }) {
      obj.set("int_array", bakedInputRuntime(schema, field.type, val));
    },
    intArrayNn(obj, val, {
      field,
      schema
    }) {
      obj.set("int_array_nn", bakedInputRuntime(schema, field.type, val));
    },
    enumArray(obj, val, {
      field,
      schema
    }) {
      obj.set("enum_array", bakedInputRuntime(schema, field.type, val));
    },
    enumArrayNn(obj, val, {
      field,
      schema
    }) {
      obj.set("enum_array_nn", bakedInputRuntime(schema, field.type, val));
    },
    dateArray(obj, val, {
      field,
      schema
    }) {
      obj.set("date_array", bakedInputRuntime(schema, field.type, val));
    },
    dateArrayNn(obj, val, {
      field,
      schema
    }) {
      obj.set("date_array_nn", bakedInputRuntime(schema, field.type, val));
    },
    timestamptzArray(obj, val, {
      field,
      schema
    }) {
      obj.set("timestamptz_array", bakedInputRuntime(schema, field.type, val));
    },
    timestamptzArrayNn(obj, val, {
      field,
      schema
    }) {
      obj.set("timestamptz_array_nn", bakedInputRuntime(schema, field.type, val));
    },
    compoundTypeArray(obj, val, {
      field,
      schema
    }) {
      obj.set("compound_type_array", bakedInputRuntime(schema, field.type, val));
    },
    compoundTypeArrayNn(obj, val, {
      field,
      schema
    }) {
      obj.set("compound_type_array_nn", bakedInputRuntime(schema, field.type, val));
    },
    byteaArray(obj, val, {
      field,
      schema
    }) {
      obj.set("bytea_array", bakedInputRuntime(schema, field.type, val));
    },
    byteaArrayNn(obj, val, {
      field,
      schema
    }) {
      obj.set("bytea_array_nn", bakedInputRuntime(schema, field.type, val));
    }
  },
  UpdateTypePayload: {
    __assertStep: ObjectStep,
    clientMutationId($mutation) {
      const $result = $mutation.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    type($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    typeEdge($mutation, fieldArgs) {
      const $result = $mutation.getStepForKey("result", true);
      if (!$result) {
        return constant(null);
      }
      const $select = (() => {
        if ($result instanceof PgDeleteSingleStep) {
          return pgSelectFromRecord($result.resource, $result.record());
        } else {
          const spec = typesUniques[0].attributes.reduce((memo, attributeName) => {
            memo[attributeName] = $result.get(attributeName);
            return memo;
          }, Object.create(null));
          return resource_typesPgResource.find(spec);
        }
      })();
      fieldArgs.apply($select, "orderBy");
      const $connection = connection($select);
      // NOTE: you must not use `$single = $select.single()`
      // here because doing so will mark the row as unique, and
      // then the ordering logic (and thus cursor) will differ.
      const $single = $select.row(first($select));
      return new EdgeStep($connection, $single);
    },
    postBySmallint($record) {
      return resource_postPgResource.get({
        id: $record.get("result").get("smallint")
      });
    },
    postById($record) {
      return resource_postPgResource.get({
        id: $record.get("result").get("id")
      });
    }
  },
  UpdateTypeByIdInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    },
    typePatch(qb, arg) {
      if (arg != null) {
        return qb.setBuilder();
      }
    }
  },
  TypePatch: {
    __baked: createObjectAndApplyChildren,
    id(obj, val, {
      field,
      schema
    }) {
      obj.set("id", bakedInputRuntime(schema, field.type, val));
    },
    smallint(obj, val, {
      field,
      schema
    }) {
      obj.set("smallint", bakedInputRuntime(schema, field.type, val));
    },
    bigint(obj, val, {
      field,
      schema
    }) {
      obj.set("bigint", bakedInputRuntime(schema, field.type, val));
    },
    numeric(obj, val, {
      field,
      schema
    }) {
      obj.set("numeric", bakedInputRuntime(schema, field.type, val));
    },
    decimal(obj, val, {
      field,
      schema
    }) {
      obj.set("decimal", bakedInputRuntime(schema, field.type, val));
    },
    boolean(obj, val, {
      field,
      schema
    }) {
      obj.set("boolean", bakedInputRuntime(schema, field.type, val));
    },
    varchar(obj, val, {
      field,
      schema
    }) {
      obj.set("varchar", bakedInputRuntime(schema, field.type, val));
    },
    enum(obj, val, {
      field,
      schema
    }) {
      obj.set("enum", bakedInputRuntime(schema, field.type, val));
    },
    enumArray(obj, val, {
      field,
      schema
    }) {
      obj.set("enum_array", bakedInputRuntime(schema, field.type, val));
    },
    domain(obj, val, {
      field,
      schema
    }) {
      obj.set("domain", bakedInputRuntime(schema, field.type, val));
    },
    domain2(obj, val, {
      field,
      schema
    }) {
      obj.set("domain2", bakedInputRuntime(schema, field.type, val));
    },
    textArray(obj, val, {
      field,
      schema
    }) {
      obj.set("text_array", bakedInputRuntime(schema, field.type, val));
    },
    json(obj, val, {
      field,
      schema
    }) {
      obj.set("json", bakedInputRuntime(schema, field.type, val));
    },
    jsonb(obj, val, {
      field,
      schema
    }) {
      obj.set("jsonb", bakedInputRuntime(schema, field.type, val));
    },
    nullableRange(obj, val, {
      field,
      schema
    }) {
      obj.set("nullable_range", bakedInputRuntime(schema, field.type, val));
    },
    numrange(obj, val, {
      field,
      schema
    }) {
      obj.set("numrange", bakedInputRuntime(schema, field.type, val));
    },
    daterange(obj, val, {
      field,
      schema
    }) {
      obj.set("daterange", bakedInputRuntime(schema, field.type, val));
    },
    anIntRange(obj, val, {
      field,
      schema
    }) {
      obj.set("an_int_range", bakedInputRuntime(schema, field.type, val));
    },
    timestamp(obj, val, {
      field,
      schema
    }) {
      obj.set("timestamp", bakedInputRuntime(schema, field.type, val));
    },
    timestamptz(obj, val, {
      field,
      schema
    }) {
      obj.set("timestamptz", bakedInputRuntime(schema, field.type, val));
    },
    date(obj, val, {
      field,
      schema
    }) {
      obj.set("date", bakedInputRuntime(schema, field.type, val));
    },
    time(obj, val, {
      field,
      schema
    }) {
      obj.set("time", bakedInputRuntime(schema, field.type, val));
    },
    timetz(obj, val, {
      field,
      schema
    }) {
      obj.set("timetz", bakedInputRuntime(schema, field.type, val));
    },
    interval(obj, val, {
      field,
      schema
    }) {
      obj.set("interval", bakedInputRuntime(schema, field.type, val));
    },
    intervalArray(obj, val, {
      field,
      schema
    }) {
      obj.set("interval_array", bakedInputRuntime(schema, field.type, val));
    },
    money(obj, val, {
      field,
      schema
    }) {
      obj.set("money", bakedInputRuntime(schema, field.type, val));
    },
    compoundType(obj, val, {
      field,
      schema
    }) {
      obj.set("compound_type", bakedInputRuntime(schema, field.type, val));
    },
    nestedCompoundType(obj, val, {
      field,
      schema
    }) {
      obj.set("nested_compound_type", bakedInputRuntime(schema, field.type, val));
    },
    nullableCompoundType(obj, val, {
      field,
      schema
    }) {
      obj.set("nullable_compound_type", bakedInputRuntime(schema, field.type, val));
    },
    nullableNestedCompoundType(obj, val, {
      field,
      schema
    }) {
      obj.set("nullable_nested_compound_type", bakedInputRuntime(schema, field.type, val));
    },
    point(obj, val, {
      field,
      schema
    }) {
      obj.set("point", bakedInputRuntime(schema, field.type, val));
    },
    nullablePoint(obj, val, {
      field,
      schema
    }) {
      obj.set("nullablePoint", bakedInputRuntime(schema, field.type, val));
    },
    inet(obj, val, {
      field,
      schema
    }) {
      obj.set("inet", bakedInputRuntime(schema, field.type, val));
    },
    cidr(obj, val, {
      field,
      schema
    }) {
      obj.set("cidr", bakedInputRuntime(schema, field.type, val));
    },
    macaddr(obj, val, {
      field,
      schema
    }) {
      obj.set("macaddr", bakedInputRuntime(schema, field.type, val));
    },
    regproc(obj, val, {
      field,
      schema
    }) {
      obj.set("regproc", bakedInputRuntime(schema, field.type, val));
    },
    regprocedure(obj, val, {
      field,
      schema
    }) {
      obj.set("regprocedure", bakedInputRuntime(schema, field.type, val));
    },
    regoper(obj, val, {
      field,
      schema
    }) {
      obj.set("regoper", bakedInputRuntime(schema, field.type, val));
    },
    regoperator(obj, val, {
      field,
      schema
    }) {
      obj.set("regoperator", bakedInputRuntime(schema, field.type, val));
    },
    regclass(obj, val, {
      field,
      schema
    }) {
      obj.set("regclass", bakedInputRuntime(schema, field.type, val));
    },
    regtype(obj, val, {
      field,
      schema
    }) {
      obj.set("regtype", bakedInputRuntime(schema, field.type, val));
    },
    regconfig(obj, val, {
      field,
      schema
    }) {
      obj.set("regconfig", bakedInputRuntime(schema, field.type, val));
    },
    regdictionary(obj, val, {
      field,
      schema
    }) {
      obj.set("regdictionary", bakedInputRuntime(schema, field.type, val));
    },
    textArrayDomain(obj, val, {
      field,
      schema
    }) {
      obj.set("text_array_domain", bakedInputRuntime(schema, field.type, val));
    },
    int8ArrayDomain(obj, val, {
      field,
      schema
    }) {
      obj.set("int8_array_domain", bakedInputRuntime(schema, field.type, val));
    },
    bytea(obj, val, {
      field,
      schema
    }) {
      obj.set("bytea", bakedInputRuntime(schema, field.type, val));
    },
    byteaArray(obj, val, {
      field,
      schema
    }) {
      obj.set("bytea_array", bakedInputRuntime(schema, field.type, val));
    },
    ltree(obj, val, {
      field,
      schema
    }) {
      obj.set("ltree", bakedInputRuntime(schema, field.type, val));
    },
    ltreeArray(obj, val, {
      field,
      schema
    }) {
      obj.set("ltree_array", bakedInputRuntime(schema, field.type, val));
    }
  },
  DeleteInputPayload: {
    __assertStep: ObjectStep,
    clientMutationId($mutation) {
      const $result = $mutation.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    input($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    inputEdge($mutation, fieldArgs) {
      const $result = $mutation.getStepForKey("result", true);
      if (!$result) {
        return constant(null);
      }
      const $select = (() => {
        if ($result instanceof PgDeleteSingleStep) {
          return pgSelectFromRecord($result.resource, $result.record());
        } else {
          const spec = inputsUniques[0].attributes.reduce((memo, attributeName) => {
            memo[attributeName] = $result.get(attributeName);
            return memo;
          }, Object.create(null));
          return resource_inputsPgResource.find(spec);
        }
      })();
      fieldArgs.apply($select, "orderBy");
      const $connection = connection($select);
      // NOTE: you must not use `$single = $select.single()`
      // here because doing so will mark the row as unique, and
      // then the ordering logic (and thus cursor) will differ.
      const $single = $select.row(first($select));
      return new EdgeStep($connection, $single);
    }
  },
  DeleteInputByIdInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    }
  },
  DeletePatchPayload: {
    __assertStep: ObjectStep,
    clientMutationId($mutation) {
      const $result = $mutation.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    patch($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    patchEdge($mutation, fieldArgs) {
      const $result = $mutation.getStepForKey("result", true);
      if (!$result) {
        return constant(null);
      }
      const $select = (() => {
        if ($result instanceof PgDeleteSingleStep) {
          return pgSelectFromRecord($result.resource, $result.record());
        } else {
          const spec = patchsUniques[0].attributes.reduce((memo, attributeName) => {
            memo[attributeName] = $result.get(attributeName);
            return memo;
          }, Object.create(null));
          return resource_patchsPgResource.find(spec);
        }
      })();
      fieldArgs.apply($select, "orderBy");
      const $connection = connection($select);
      // NOTE: you must not use `$single = $select.single()`
      // here because doing so will mark the row as unique, and
      // then the ordering logic (and thus cursor) will differ.
      const $single = $select.row(first($select));
      return new EdgeStep($connection, $single);
    }
  },
  DeletePatchByIdInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    }
  },
  DeleteReservedPayload: {
    __assertStep: ObjectStep,
    clientMutationId($mutation) {
      const $result = $mutation.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    reserved($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    reservedEdge($mutation, fieldArgs) {
      const $result = $mutation.getStepForKey("result", true);
      if (!$result) {
        return constant(null);
      }
      const $select = (() => {
        if ($result instanceof PgDeleteSingleStep) {
          return pgSelectFromRecord($result.resource, $result.record());
        } else {
          const spec = reservedUniques[0].attributes.reduce((memo, attributeName) => {
            memo[attributeName] = $result.get(attributeName);
            return memo;
          }, Object.create(null));
          return resource_reservedPgResource.find(spec);
        }
      })();
      fieldArgs.apply($select, "orderBy");
      const $connection = connection($select);
      // NOTE: you must not use `$single = $select.single()`
      // here because doing so will mark the row as unique, and
      // then the ordering logic (and thus cursor) will differ.
      const $single = $select.row(first($select));
      return new EdgeStep($connection, $single);
    }
  },
  DeleteReservedByIdInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    }
  },
  DeleteReservedPatchRecordPayload: {
    __assertStep: ObjectStep,
    clientMutationId($mutation) {
      const $result = $mutation.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    reservedPatchRecord($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    reservedPatchRecordEdge($mutation, fieldArgs) {
      const $result = $mutation.getStepForKey("result", true);
      if (!$result) {
        return constant(null);
      }
      const $select = (() => {
        if ($result instanceof PgDeleteSingleStep) {
          return pgSelectFromRecord($result.resource, $result.record());
        } else {
          const spec = reservedPatchsUniques[0].attributes.reduce((memo, attributeName) => {
            memo[attributeName] = $result.get(attributeName);
            return memo;
          }, Object.create(null));
          return resource_reservedPatchsPgResource.find(spec);
        }
      })();
      fieldArgs.apply($select, "orderBy");
      const $connection = connection($select);
      // NOTE: you must not use `$single = $select.single()`
      // here because doing so will mark the row as unique, and
      // then the ordering logic (and thus cursor) will differ.
      const $single = $select.row(first($select));
      return new EdgeStep($connection, $single);
    }
  },
  DeleteReservedPatchRecordByIdInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    }
  },
  DeleteReservedInputRecordPayload: {
    __assertStep: ObjectStep,
    clientMutationId($mutation) {
      const $result = $mutation.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    reservedInputRecord($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    reservedInputRecordEdge($mutation, fieldArgs) {
      const $result = $mutation.getStepForKey("result", true);
      if (!$result) {
        return constant(null);
      }
      const $select = (() => {
        if ($result instanceof PgDeleteSingleStep) {
          return pgSelectFromRecord($result.resource, $result.record());
        } else {
          const spec = reserved_inputUniques[0].attributes.reduce((memo, attributeName) => {
            memo[attributeName] = $result.get(attributeName);
            return memo;
          }, Object.create(null));
          return resource_reserved_inputPgResource.find(spec);
        }
      })();
      fieldArgs.apply($select, "orderBy");
      const $connection = connection($select);
      // NOTE: you must not use `$single = $select.single()`
      // here because doing so will mark the row as unique, and
      // then the ordering logic (and thus cursor) will differ.
      const $single = $select.row(first($select));
      return new EdgeStep($connection, $single);
    }
  },
  DeleteReservedInputRecordByIdInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    }
  },
  DeleteDefaultValuePayload: {
    __assertStep: ObjectStep,
    clientMutationId($mutation) {
      const $result = $mutation.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    defaultValue($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    defaultValueEdge($mutation, fieldArgs) {
      const $result = $mutation.getStepForKey("result", true);
      if (!$result) {
        return constant(null);
      }
      const $select = (() => {
        if ($result instanceof PgDeleteSingleStep) {
          return pgSelectFromRecord($result.resource, $result.record());
        } else {
          const spec = default_valueUniques[0].attributes.reduce((memo, attributeName) => {
            memo[attributeName] = $result.get(attributeName);
            return memo;
          }, Object.create(null));
          return resource_default_valuePgResource.find(spec);
        }
      })();
      fieldArgs.apply($select, "orderBy");
      const $connection = connection($select);
      // NOTE: you must not use `$single = $select.single()`
      // here because doing so will mark the row as unique, and
      // then the ordering logic (and thus cursor) will differ.
      const $single = $select.row(first($select));
      return new EdgeStep($connection, $single);
    }
  },
  DeleteDefaultValueByIdInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    }
  },
  DeleteNoPrimaryKeyPayload: {
    __assertStep: ObjectStep,
    clientMutationId($mutation) {
      const $result = $mutation.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    noPrimaryKey($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    }
  },
  DeleteNoPrimaryKeyByIdInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    }
  },
  DeleteMyTablePayload: {
    __assertStep: ObjectStep,
    clientMutationId($mutation) {
      const $result = $mutation.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    myTable($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    myTableEdge($mutation, fieldArgs) {
      const $result = $mutation.getStepForKey("result", true);
      if (!$result) {
        return constant(null);
      }
      const $select = (() => {
        if ($result instanceof PgDeleteSingleStep) {
          return pgSelectFromRecord($result.resource, $result.record());
        } else {
          const spec = my_tableUniques[0].attributes.reduce((memo, attributeName) => {
            memo[attributeName] = $result.get(attributeName);
            return memo;
          }, Object.create(null));
          return resource_my_tablePgResource.find(spec);
        }
      })();
      fieldArgs.apply($select, "orderBy");
      const $connection = connection($select);
      // NOTE: you must not use `$single = $select.single()`
      // here because doing so will mark the row as unique, and
      // then the ordering logic (and thus cursor) will differ.
      const $single = $select.row(first($select));
      return new EdgeStep($connection, $single);
    }
  },
  DeleteMyTableByIdInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    }
  },
  DeletePersonSecretPayload: {
    __assertStep: ObjectStep,
    clientMutationId($mutation) {
      const $result = $mutation.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    personSecret($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    personSecretEdge($mutation, fieldArgs) {
      const $result = $mutation.getStepForKey("result", true);
      if (!$result) {
        return constant(null);
      }
      const $select = (() => {
        if ($result instanceof PgDeleteSingleStep) {
          return pgSelectFromRecord($result.resource, $result.record());
        } else {
          const spec = person_secretUniques[0].attributes.reduce((memo, attributeName) => {
            memo[attributeName] = $result.get(attributeName);
            return memo;
          }, Object.create(null));
          return resource_person_secretPgResource.find(spec);
        }
      })();
      fieldArgs.apply($select, "orderBy");
      const $connection = connection($select);
      // NOTE: you must not use `$single = $select.single()`
      // here because doing so will mark the row as unique, and
      // then the ordering logic (and thus cursor) will differ.
      const $single = $select.row(first($select));
      return new EdgeStep($connection, $single);
    },
    personByPersonId($record) {
      return resource_personPgResource.get({
        id: $record.get("result").get("person_id")
      });
    }
  },
  DeletePersonSecretByPersonIdInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    }
  },
  DeleteViewTablePayload: {
    __assertStep: ObjectStep,
    clientMutationId($mutation) {
      const $result = $mutation.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    viewTable($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    viewTableEdge($mutation, fieldArgs) {
      const $result = $mutation.getStepForKey("result", true);
      if (!$result) {
        return constant(null);
      }
      const $select = (() => {
        if ($result instanceof PgDeleteSingleStep) {
          return pgSelectFromRecord($result.resource, $result.record());
        } else {
          const spec = view_tableUniques[0].attributes.reduce((memo, attributeName) => {
            memo[attributeName] = $result.get(attributeName);
            return memo;
          }, Object.create(null));
          return resource_view_tablePgResource.find(spec);
        }
      })();
      fieldArgs.apply($select, "orderBy");
      const $connection = connection($select);
      // NOTE: you must not use `$single = $select.single()`
      // here because doing so will mark the row as unique, and
      // then the ordering logic (and thus cursor) will differ.
      const $single = $select.row(first($select));
      return new EdgeStep($connection, $single);
    }
  },
  DeleteViewTableByIdInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    }
  },
  DeleteCompoundKeyPayload: {
    __assertStep: ObjectStep,
    clientMutationId($mutation) {
      const $result = $mutation.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    compoundKey($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    compoundKeyEdge($mutation, fieldArgs) {
      const $result = $mutation.getStepForKey("result", true);
      if (!$result) {
        return constant(null);
      }
      const $select = (() => {
        if ($result instanceof PgDeleteSingleStep) {
          return pgSelectFromRecord($result.resource, $result.record());
        } else {
          const spec = compound_keyUniques[0].attributes.reduce((memo, attributeName) => {
            memo[attributeName] = $result.get(attributeName);
            return memo;
          }, Object.create(null));
          return resource_compound_keyPgResource.find(spec);
        }
      })();
      fieldArgs.apply($select, "orderBy");
      const $connection = connection($select);
      // NOTE: you must not use `$single = $select.single()`
      // here because doing so will mark the row as unique, and
      // then the ordering logic (and thus cursor) will differ.
      const $single = $select.row(first($select));
      return new EdgeStep($connection, $single);
    },
    personByPersonId1($record) {
      return resource_personPgResource.get({
        id: $record.get("result").get("person_id_1")
      });
    },
    personByPersonId2($record) {
      return resource_personPgResource.get({
        id: $record.get("result").get("person_id_2")
      });
    }
  },
  DeleteCompoundKeyByPersonId1AndPersonId2Input: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    }
  },
  DeleteSimilarTable1Payload: {
    __assertStep: ObjectStep,
    clientMutationId($mutation) {
      const $result = $mutation.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    similarTable1($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    similarTable1Edge($mutation, fieldArgs) {
      const $result = $mutation.getStepForKey("result", true);
      if (!$result) {
        return constant(null);
      }
      const $select = (() => {
        if ($result instanceof PgDeleteSingleStep) {
          return pgSelectFromRecord($result.resource, $result.record());
        } else {
          const spec = similar_table_1Uniques[0].attributes.reduce((memo, attributeName) => {
            memo[attributeName] = $result.get(attributeName);
            return memo;
          }, Object.create(null));
          return resource_similar_table_1PgResource.find(spec);
        }
      })();
      fieldArgs.apply($select, "orderBy");
      const $connection = connection($select);
      // NOTE: you must not use `$single = $select.single()`
      // here because doing so will mark the row as unique, and
      // then the ordering logic (and thus cursor) will differ.
      const $single = $select.row(first($select));
      return new EdgeStep($connection, $single);
    }
  },
  DeleteSimilarTable1ByIdInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    }
  },
  DeleteSimilarTable2Payload: {
    __assertStep: ObjectStep,
    clientMutationId($mutation) {
      const $result = $mutation.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    similarTable2($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    similarTable2Edge($mutation, fieldArgs) {
      const $result = $mutation.getStepForKey("result", true);
      if (!$result) {
        return constant(null);
      }
      const $select = (() => {
        if ($result instanceof PgDeleteSingleStep) {
          return pgSelectFromRecord($result.resource, $result.record());
        } else {
          const spec = similar_table_2Uniques[0].attributes.reduce((memo, attributeName) => {
            memo[attributeName] = $result.get(attributeName);
            return memo;
          }, Object.create(null));
          return resource_similar_table_2PgResource.find(spec);
        }
      })();
      fieldArgs.apply($select, "orderBy");
      const $connection = connection($select);
      // NOTE: you must not use `$single = $select.single()`
      // here because doing so will mark the row as unique, and
      // then the ordering logic (and thus cursor) will differ.
      const $single = $select.row(first($select));
      return new EdgeStep($connection, $single);
    }
  },
  DeleteSimilarTable2ByIdInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    }
  },
  DeleteNullTestRecordPayload: {
    __assertStep: ObjectStep,
    clientMutationId($mutation) {
      const $result = $mutation.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    nullTestRecord($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    nullTestRecordEdge($mutation, fieldArgs) {
      const $result = $mutation.getStepForKey("result", true);
      if (!$result) {
        return constant(null);
      }
      const $select = (() => {
        if ($result instanceof PgDeleteSingleStep) {
          return pgSelectFromRecord($result.resource, $result.record());
        } else {
          const spec = null_test_recordUniques[0].attributes.reduce((memo, attributeName) => {
            memo[attributeName] = $result.get(attributeName);
            return memo;
          }, Object.create(null));
          return resource_null_test_recordPgResource.find(spec);
        }
      })();
      fieldArgs.apply($select, "orderBy");
      const $connection = connection($select);
      // NOTE: you must not use `$single = $select.single()`
      // here because doing so will mark the row as unique, and
      // then the ordering logic (and thus cursor) will differ.
      const $single = $select.row(first($select));
      return new EdgeStep($connection, $single);
    }
  },
  DeleteNullTestRecordByIdInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    }
  },
  DeleteLeftArmPayload: {
    __assertStep: ObjectStep,
    clientMutationId($mutation) {
      const $result = $mutation.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    leftArm($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    leftArmEdge($mutation, fieldArgs) {
      const $result = $mutation.getStepForKey("result", true);
      if (!$result) {
        return constant(null);
      }
      const $select = (() => {
        if ($result instanceof PgDeleteSingleStep) {
          return pgSelectFromRecord($result.resource, $result.record());
        } else {
          const spec = left_armUniques[0].attributes.reduce((memo, attributeName) => {
            memo[attributeName] = $result.get(attributeName);
            return memo;
          }, Object.create(null));
          return resource_left_armPgResource.find(spec);
        }
      })();
      fieldArgs.apply($select, "orderBy");
      const $connection = connection($select);
      // NOTE: you must not use `$single = $select.single()`
      // here because doing so will mark the row as unique, and
      // then the ordering logic (and thus cursor) will differ.
      const $single = $select.row(first($select));
      return new EdgeStep($connection, $single);
    },
    personByPersonId($record) {
      return resource_personPgResource.get({
        id: $record.get("result").get("person_id")
      });
    }
  },
  DeleteLeftArmByIdInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    }
  },
  DeleteLeftArmByPersonIdInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    }
  },
  DeleteIssue756Payload: {
    __assertStep: ObjectStep,
    clientMutationId($mutation) {
      const $result = $mutation.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    issue756($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    issue756Edge($mutation, fieldArgs) {
      const $result = $mutation.getStepForKey("result", true);
      if (!$result) {
        return constant(null);
      }
      const $select = (() => {
        if ($result instanceof PgDeleteSingleStep) {
          return pgSelectFromRecord($result.resource, $result.record());
        } else {
          const spec = issue756Uniques[0].attributes.reduce((memo, attributeName) => {
            memo[attributeName] = $result.get(attributeName);
            return memo;
          }, Object.create(null));
          return resource_issue756PgResource.find(spec);
        }
      })();
      fieldArgs.apply($select, "orderBy");
      const $connection = connection($select);
      // NOTE: you must not use `$single = $select.single()`
      // here because doing so will mark the row as unique, and
      // then the ordering logic (and thus cursor) will differ.
      const $single = $select.row(first($select));
      return new EdgeStep($connection, $single);
    }
  },
  DeleteIssue756ByIdInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    }
  },
  DeletePostPayload: {
    __assertStep: ObjectStep,
    clientMutationId($mutation) {
      const $result = $mutation.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    post($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    postEdge($mutation, fieldArgs) {
      const $result = $mutation.getStepForKey("result", true);
      if (!$result) {
        return constant(null);
      }
      const $select = (() => {
        if ($result instanceof PgDeleteSingleStep) {
          return pgSelectFromRecord($result.resource, $result.record());
        } else {
          const spec = postUniques[0].attributes.reduce((memo, attributeName) => {
            memo[attributeName] = $result.get(attributeName);
            return memo;
          }, Object.create(null));
          return resource_postPgResource.find(spec);
        }
      })();
      fieldArgs.apply($select, "orderBy");
      const $connection = connection($select);
      // NOTE: you must not use `$single = $select.single()`
      // here because doing so will mark the row as unique, and
      // then the ordering logic (and thus cursor) will differ.
      const $single = $select.row(first($select));
      return new EdgeStep($connection, $single);
    },
    personByAuthorId($record) {
      return resource_personPgResource.get({
        id: $record.get("result").get("author_id")
      });
    }
  },
  DeletePostByIdInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    }
  },
  DeletePersonPayload: {
    __assertStep: ObjectStep,
    clientMutationId($mutation) {
      const $result = $mutation.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    person($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    personEdge($mutation, fieldArgs) {
      const $result = $mutation.getStepForKey("result", true);
      if (!$result) {
        return constant(null);
      }
      const $select = (() => {
        if ($result instanceof PgDeleteSingleStep) {
          return pgSelectFromRecord($result.resource, $result.record());
        } else {
          const spec = personUniques[0].attributes.reduce((memo, attributeName) => {
            memo[attributeName] = $result.get(attributeName);
            return memo;
          }, Object.create(null));
          return resource_personPgResource.find(spec);
        }
      })();
      fieldArgs.apply($select, "orderBy");
      const $connection = connection($select);
      // NOTE: you must not use `$single = $select.single()`
      // here because doing so will mark the row as unique, and
      // then the ordering logic (and thus cursor) will differ.
      const $single = $select.row(first($select));
      return new EdgeStep($connection, $single);
    }
  },
  DeletePersonByIdInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    }
  },
  DeletePersonByEmailInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    }
  },
  DeleteListPayload: {
    __assertStep: ObjectStep,
    clientMutationId($mutation) {
      const $result = $mutation.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    list($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    listEdge($mutation, fieldArgs) {
      const $result = $mutation.getStepForKey("result", true);
      if (!$result) {
        return constant(null);
      }
      const $select = (() => {
        if ($result instanceof PgDeleteSingleStep) {
          return pgSelectFromRecord($result.resource, $result.record());
        } else {
          const spec = listsUniques[0].attributes.reduce((memo, attributeName) => {
            memo[attributeName] = $result.get(attributeName);
            return memo;
          }, Object.create(null));
          return resource_listsPgResource.find(spec);
        }
      })();
      fieldArgs.apply($select, "orderBy");
      const $connection = connection($select);
      // NOTE: you must not use `$single = $select.single()`
      // here because doing so will mark the row as unique, and
      // then the ordering logic (and thus cursor) will differ.
      const $single = $select.row(first($select));
      return new EdgeStep($connection, $single);
    }
  },
  DeleteListByIdInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    }
  },
  DeleteTypePayload: {
    __assertStep: ObjectStep,
    clientMutationId($mutation) {
      const $result = $mutation.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    type($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    typeEdge($mutation, fieldArgs) {
      const $result = $mutation.getStepForKey("result", true);
      if (!$result) {
        return constant(null);
      }
      const $select = (() => {
        if ($result instanceof PgDeleteSingleStep) {
          return pgSelectFromRecord($result.resource, $result.record());
        } else {
          const spec = typesUniques[0].attributes.reduce((memo, attributeName) => {
            memo[attributeName] = $result.get(attributeName);
            return memo;
          }, Object.create(null));
          return resource_typesPgResource.find(spec);
        }
      })();
      fieldArgs.apply($select, "orderBy");
      const $connection = connection($select);
      // NOTE: you must not use `$single = $select.single()`
      // here because doing so will mark the row as unique, and
      // then the ordering logic (and thus cursor) will differ.
      const $single = $select.row(first($select));
      return new EdgeStep($connection, $single);
    },
    postBySmallint($record) {
      return resource_postPgResource.get({
        id: $record.get("result").get("smallint")
      });
    },
    postById($record) {
      return resource_postPgResource.get({
        id: $record.get("result").get("id")
      });
    }
  },
  DeleteTypeByIdInput: {
    clientMutationId(qb, val) {
      qb.setMeta("clientMutationId", val);
    }
  }
};
export const schema = makeGrafastSchema({
  typeDefs: typeDefs,
  plans: plans
});
