import { PgDeleteSingleStep, PgExecutor, PgResource, PgSelectSingleStep, PgSelectStep, TYPES, assertPgClassSingleStep, enumCodec, makeRegistry, pgClassExpression, pgDeleteSingle, pgFromExpression, pgInsertSingle, pgSelectFromRecord, pgSelectSingleFromRecord, pgUnionAll, pgUpdateSingle, recordCodec, sqlFromArgDigests, sqlValueWithCodec } from "@dataplan/pg";
import { ConnectionStep, EdgeStep, ObjectStep, __ValueStep, access, assertEdgeCapableStep, assertExecutableStep, assertPageInfoCapableStep, bakedInput, bakedInputRuntime, connection, constant, context, createObjectAndApplyChildren, first, inhibitOnNull, lambda, list, makeDecodeNodeId, makeGrafastSchema, node, object, rootValue, specFromNodeId, stepAMayDependOnStepB } from "grafast";
import { GraphQLError, Kind } from "graphql";
import { sql } from "pg-sql2";
const handler_codec_base64JSON = {
  name: "base64JSON",
  encode: (() => {
    function base64JSONEncode(value) {
      return Buffer.from(JSON.stringify(value), "utf8").toString("base64");
    }
    base64JSONEncode.isSyncAndSafe = true; // Optimization
    return base64JSONEncode;
  })(),
  decode: (() => {
    function base64JSONDecode(value) {
      return JSON.parse(Buffer.from(value, "base64").toString("utf8"));
    }
    base64JSONDecode.isSyncAndSafe = true; // Optimization
    return base64JSONDecode;
  })()
};
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
const awsApplicationFirstPartyVulnerabilitiesIdentifier = sql.identifier("polymorphic", "aws_application_first_party_vulnerabilities");
const spec_awsApplicationFirstPartyVulnerabilities = {
  name: "awsApplicationFirstPartyVulnerabilities",
  identifier: awsApplicationFirstPartyVulnerabilitiesIdentifier,
  attributes: {
    __proto__: null,
    aws_application_id: {
      description: undefined,
      codec: TYPES.int,
      notNull: true,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    first_party_vulnerability_id: {
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
      schemaName: "polymorphic",
      name: "aws_application_first_party_vulnerabilities"
    },
    tags: {
      __proto__: null,
      omit: true,
      behavior: ["-insert -select -node -connection -list -array -single -update -delete -queryField -mutationField -typeField -filter -filterBy -order -orderBy -query:resource:list -query:resource:connection -singularRelation:resource:list -singularRelation:resource:connection -manyRelation:resource:list -manyRelation:resource:connection -manyToMany"]
    }
  },
  executor: executor
};
const awsApplicationFirstPartyVulnerabilitiesCodec = recordCodec(spec_awsApplicationFirstPartyVulnerabilities);
const awsApplicationThirdPartyVulnerabilitiesIdentifier = sql.identifier("polymorphic", "aws_application_third_party_vulnerabilities");
const spec_awsApplicationThirdPartyVulnerabilities = {
  name: "awsApplicationThirdPartyVulnerabilities",
  identifier: awsApplicationThirdPartyVulnerabilitiesIdentifier,
  attributes: {
    __proto__: null,
    aws_application_id: {
      description: undefined,
      codec: TYPES.int,
      notNull: true,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    third_party_vulnerability_id: {
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
      schemaName: "polymorphic",
      name: "aws_application_third_party_vulnerabilities"
    },
    tags: {
      __proto__: null,
      omit: true,
      behavior: ["-insert -select -node -connection -list -array -single -update -delete -queryField -mutationField -typeField -filter -filterBy -order -orderBy -query:resource:list -query:resource:connection -singularRelation:resource:list -singularRelation:resource:connection -manyRelation:resource:list -manyRelation:resource:connection -manyToMany"]
    }
  },
  executor: executor
};
const awsApplicationThirdPartyVulnerabilitiesCodec = recordCodec(spec_awsApplicationThirdPartyVulnerabilities);
const gcpApplicationFirstPartyVulnerabilitiesIdentifier = sql.identifier("polymorphic", "gcp_application_first_party_vulnerabilities");
const spec_gcpApplicationFirstPartyVulnerabilities = {
  name: "gcpApplicationFirstPartyVulnerabilities",
  identifier: gcpApplicationFirstPartyVulnerabilitiesIdentifier,
  attributes: {
    __proto__: null,
    gcp_application_id: {
      description: undefined,
      codec: TYPES.int,
      notNull: true,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    first_party_vulnerability_id: {
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
      schemaName: "polymorphic",
      name: "gcp_application_first_party_vulnerabilities"
    },
    tags: {
      __proto__: null,
      omit: true,
      behavior: ["-insert -select -node -connection -list -array -single -update -delete -queryField -mutationField -typeField -filter -filterBy -order -orderBy -query:resource:list -query:resource:connection -singularRelation:resource:list -singularRelation:resource:connection -manyRelation:resource:list -manyRelation:resource:connection -manyToMany"]
    }
  },
  executor: executor
};
const gcpApplicationFirstPartyVulnerabilitiesCodec = recordCodec(spec_gcpApplicationFirstPartyVulnerabilities);
const gcpApplicationThirdPartyVulnerabilitiesIdentifier = sql.identifier("polymorphic", "gcp_application_third_party_vulnerabilities");
const spec_gcpApplicationThirdPartyVulnerabilities = {
  name: "gcpApplicationThirdPartyVulnerabilities",
  identifier: gcpApplicationThirdPartyVulnerabilitiesIdentifier,
  attributes: {
    __proto__: null,
    gcp_application_id: {
      description: undefined,
      codec: TYPES.int,
      notNull: true,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    third_party_vulnerability_id: {
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
      schemaName: "polymorphic",
      name: "gcp_application_third_party_vulnerabilities"
    },
    tags: {
      __proto__: null,
      omit: true,
      behavior: ["-insert -select -node -connection -list -array -single -update -delete -queryField -mutationField -typeField -filter -filterBy -order -orderBy -query:resource:list -query:resource:connection -singularRelation:resource:list -singularRelation:resource:connection -manyRelation:resource:list -manyRelation:resource:connection -manyToMany"]
    }
  },
  executor: executor
};
const gcpApplicationThirdPartyVulnerabilitiesCodec = recordCodec(spec_gcpApplicationThirdPartyVulnerabilities);
const organizationsIdentifier = sql.identifier("polymorphic", "organizations");
const organizationsCodec = recordCodec({
  name: "organizations",
  identifier: organizationsIdentifier,
  attributes: {
    __proto__: null,
    organization_id: {
      description: undefined,
      codec: TYPES.int,
      notNull: true,
      hasDefault: true,
      extensions: {
        tags: {}
      }
    },
    name: {
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
      schemaName: "polymorphic",
      name: "organizations"
    },
    tags: {
      __proto__: null,
      unionMember: "PersonOrOrganization"
    }
  },
  executor: executor
});
const peopleIdentifier = sql.identifier("polymorphic", "people");
const spec_people = {
  name: "people",
  identifier: peopleIdentifier,
  attributes: {
    __proto__: null,
    person_id: {
      description: undefined,
      codec: TYPES.int,
      notNull: true,
      hasDefault: true,
      extensions: {
        tags: {}
      }
    },
    username: {
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
      schemaName: "polymorphic",
      name: "people"
    },
    tags: {
      __proto__: null,
      unionMember: "PersonOrOrganization",
      ref: "applications to:Application",
      refVia: ["applications via:aws_applications", "applications via:gcp_applications"]
    },
    refDefinitions: {
      __proto__: null,
      applications: {
        singular: false,
        graphqlType: "Application",
        sourceGraphqlType: undefined,
        extensions: {
          via: undefined,
          tags: {
            behavior: undefined
          }
        }
      }
    }
  },
  executor: executor
};
const peopleCodec = recordCodec(spec_people);
const prioritiesIdentifier = sql.identifier("polymorphic", "priorities");
const spec_priorities = {
  name: "priorities",
  identifier: prioritiesIdentifier,
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
    title: {
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
      schemaName: "polymorphic",
      name: "priorities"
    },
    tags: {
      __proto__: null,
      omit: "create,update,delete,filter,order",
      behavior: ["-insert -update -delete -filter -filterBy -order -orderBy"]
    }
  },
  executor: executor
};
const prioritiesCodec = recordCodec(spec_priorities);
const relationalChecklistsIdentifier = sql.identifier("polymorphic", "relational_checklists");
const itemTypeCodec = enumCodec({
  name: "itemType",
  identifier: sql.identifier("polymorphic", "item_type"),
  values: ["TOPIC", "POST", "DIVIDER", "CHECKLIST", "CHECKLIST_ITEM"],
  description: undefined,
  extensions: {
    pg: {
      serviceName: "main",
      schemaName: "polymorphic",
      name: "item_type"
    },
    tags: {
      __proto__: null
    }
  }
});
const spec_relationalChecklists = {
  name: "relationalChecklists",
  identifier: relationalChecklistsIdentifier,
  attributes: {
    __proto__: null,
    checklist_item_id: {
      description: undefined,
      codec: TYPES.int,
      notNull: true,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    title: {
      description: undefined,
      codec: TYPES.text,
      notNull: true,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    id: {
      codec: TYPES.int,
      notNull: true,
      hasDefault: true,
      via: "relationalItemsByMyChecklistItemId",
      restrictedAccess: undefined,
      description: undefined,
      extensions: {
        tags: {}
      }
    },
    type: {
      codec: itemTypeCodec,
      notNull: true,
      hasDefault: true,
      via: "relationalItemsByMyChecklistItemId",
      restrictedAccess: undefined,
      description: undefined,
      extensions: {
        tags: {}
      }
    },
    parent_id: {
      codec: TYPES.int,
      notNull: false,
      hasDefault: false,
      via: "relationalItemsByMyChecklistItemId",
      restrictedAccess: undefined,
      description: undefined,
      extensions: {
        tags: {}
      }
    },
    root_topic_id: {
      codec: TYPES.int,
      notNull: false,
      hasDefault: false,
      via: "relationalItemsByMyChecklistItemId",
      restrictedAccess: undefined,
      description: undefined,
      extensions: {
        tags: {}
      }
    },
    author_id: {
      codec: TYPES.int,
      notNull: true,
      hasDefault: false,
      via: "relationalItemsByMyChecklistItemId",
      restrictedAccess: undefined,
      description: undefined,
      extensions: {
        tags: {}
      }
    },
    position: {
      codec: TYPES.bigint,
      notNull: true,
      hasDefault: true,
      via: "relationalItemsByMyChecklistItemId",
      restrictedAccess: undefined,
      description: undefined,
      extensions: {
        tags: {}
      }
    },
    created_at: {
      codec: TYPES.timestamptz,
      notNull: true,
      hasDefault: true,
      via: "relationalItemsByMyChecklistItemId",
      restrictedAccess: undefined,
      description: undefined,
      extensions: {
        tags: {}
      }
    },
    updated_at: {
      codec: TYPES.timestamptz,
      notNull: true,
      hasDefault: true,
      via: "relationalItemsByMyChecklistItemId",
      restrictedAccess: undefined,
      description: undefined,
      extensions: {
        tags: {}
      }
    },
    is_explicitly_archived: {
      codec: TYPES.boolean,
      notNull: true,
      hasDefault: true,
      via: "relationalItemsByMyChecklistItemId",
      restrictedAccess: undefined,
      description: undefined,
      extensions: {
        tags: {}
      }
    },
    archived_at: {
      codec: TYPES.timestamptz,
      notNull: false,
      hasDefault: false,
      via: "relationalItemsByMyChecklistItemId",
      restrictedAccess: undefined,
      description: undefined,
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
      schemaName: "polymorphic",
      name: "relational_checklists"
    },
    tags: {
      __proto__: null
    },
    relationalInterfaceCodecName: "relationalItems"
  },
  executor: executor
};
const relationalChecklistsCodec = recordCodec(spec_relationalChecklists);
const relationalItemRelationCompositePksIdentifier = sql.identifier("polymorphic", "relational_item_relation_composite_pks");
const relationalItemRelationCompositePksCodec = recordCodec({
  name: "relationalItemRelationCompositePks",
  identifier: relationalItemRelationCompositePksIdentifier,
  attributes: {
    __proto__: null,
    parent_id: {
      description: undefined,
      codec: TYPES.int,
      notNull: true,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    child_id: {
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
      schemaName: "polymorphic",
      name: "relational_item_relation_composite_pks"
    },
    tags: {
      __proto__: null
    }
  },
  executor: executor
});
const relationalTopicsIdentifier = sql.identifier("polymorphic", "relational_topics");
const relationalTopicsCodec = recordCodec({
  name: "relationalTopics",
  identifier: relationalTopicsIdentifier,
  attributes: {
    __proto__: null,
    topic_item_id: {
      description: undefined,
      codec: TYPES.int,
      notNull: true,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    title: {
      description: undefined,
      codec: TYPES.text,
      notNull: true,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    id: {
      codec: TYPES.int,
      notNull: true,
      hasDefault: true,
      via: "relationalItemsByMyTopicItemId",
      restrictedAccess: undefined,
      description: undefined,
      extensions: {
        tags: spec_relationalChecklists.attributes.id.extensions.tags
      }
    },
    type: {
      codec: itemTypeCodec,
      notNull: true,
      hasDefault: true,
      via: "relationalItemsByMyTopicItemId",
      restrictedAccess: undefined,
      description: undefined,
      extensions: {
        tags: spec_relationalChecklists.attributes.type.extensions.tags
      }
    },
    parent_id: {
      codec: TYPES.int,
      notNull: false,
      hasDefault: false,
      via: "relationalItemsByMyTopicItemId",
      restrictedAccess: undefined,
      description: undefined,
      extensions: {
        tags: spec_relationalChecklists.attributes.parent_id.extensions.tags
      }
    },
    root_topic_id: {
      codec: TYPES.int,
      notNull: false,
      hasDefault: false,
      via: "relationalItemsByMyTopicItemId",
      restrictedAccess: undefined,
      description: undefined,
      extensions: {
        tags: spec_relationalChecklists.attributes.root_topic_id.extensions.tags
      }
    },
    author_id: {
      codec: TYPES.int,
      notNull: true,
      hasDefault: false,
      via: "relationalItemsByMyTopicItemId",
      restrictedAccess: undefined,
      description: undefined,
      extensions: {
        tags: spec_relationalChecklists.attributes.author_id.extensions.tags
      }
    },
    position: {
      codec: TYPES.bigint,
      notNull: true,
      hasDefault: true,
      via: "relationalItemsByMyTopicItemId",
      restrictedAccess: undefined,
      description: undefined,
      extensions: {
        tags: spec_relationalChecklists.attributes.position.extensions.tags
      }
    },
    created_at: {
      codec: TYPES.timestamptz,
      notNull: true,
      hasDefault: true,
      via: "relationalItemsByMyTopicItemId",
      restrictedAccess: undefined,
      description: undefined,
      extensions: {
        tags: spec_relationalChecklists.attributes.created_at.extensions.tags
      }
    },
    updated_at: {
      codec: TYPES.timestamptz,
      notNull: true,
      hasDefault: true,
      via: "relationalItemsByMyTopicItemId",
      restrictedAccess: undefined,
      description: undefined,
      extensions: {
        tags: spec_relationalChecklists.attributes.updated_at.extensions.tags
      }
    },
    is_explicitly_archived: {
      codec: TYPES.boolean,
      notNull: true,
      hasDefault: true,
      via: "relationalItemsByMyTopicItemId",
      restrictedAccess: undefined,
      description: undefined,
      extensions: {
        tags: spec_relationalChecklists.attributes.is_explicitly_archived.extensions.tags
      }
    },
    archived_at: {
      codec: TYPES.timestamptz,
      notNull: false,
      hasDefault: false,
      via: "relationalItemsByMyTopicItemId",
      restrictedAccess: undefined,
      description: undefined,
      extensions: {
        tags: spec_relationalChecklists.attributes.archived_at.extensions.tags
      }
    }
  },
  description: undefined,
  extensions: {
    isTableLike: true,
    pg: {
      serviceName: "main",
      schemaName: "polymorphic",
      name: "relational_topics"
    },
    tags: {
      __proto__: null
    },
    relationalInterfaceCodecName: "relationalItems"
  },
  executor: executor
});
const singleTableItemRelationCompositePksIdentifier = sql.identifier("polymorphic", "single_table_item_relation_composite_pks");
const singleTableItemRelationCompositePksCodec = recordCodec({
  name: "singleTableItemRelationCompositePks",
  identifier: singleTableItemRelationCompositePksIdentifier,
  attributes: {
    __proto__: null,
    parent_id: {
      description: undefined,
      codec: TYPES.int,
      notNull: true,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    child_id: {
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
      schemaName: "polymorphic",
      name: "single_table_item_relation_composite_pks"
    },
    tags: {
      __proto__: null
    }
  },
  executor: executor
});
const relationalChecklistItemsIdentifier = sql.identifier("polymorphic", "relational_checklist_items");
const relationalChecklistItemsCodec = recordCodec({
  name: "relationalChecklistItems",
  identifier: relationalChecklistItemsIdentifier,
  attributes: {
    __proto__: null,
    checklist_item_item_id: {
      description: undefined,
      codec: TYPES.int,
      notNull: true,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    description: {
      description: undefined,
      codec: TYPES.text,
      notNull: true,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    note: {
      description: undefined,
      codec: TYPES.text,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    id: {
      codec: TYPES.int,
      notNull: true,
      hasDefault: true,
      via: "relationalItemsByMyChecklistItemItemId",
      restrictedAccess: undefined,
      description: undefined,
      extensions: {
        tags: spec_relationalChecklists.attributes.id.extensions.tags
      }
    },
    type: {
      codec: itemTypeCodec,
      notNull: true,
      hasDefault: true,
      via: "relationalItemsByMyChecklistItemItemId",
      restrictedAccess: undefined,
      description: undefined,
      extensions: {
        tags: spec_relationalChecklists.attributes.type.extensions.tags
      }
    },
    parent_id: {
      codec: TYPES.int,
      notNull: false,
      hasDefault: false,
      via: "relationalItemsByMyChecklistItemItemId",
      restrictedAccess: undefined,
      description: undefined,
      extensions: {
        tags: spec_relationalChecklists.attributes.parent_id.extensions.tags
      }
    },
    root_topic_id: {
      codec: TYPES.int,
      notNull: false,
      hasDefault: false,
      via: "relationalItemsByMyChecklistItemItemId",
      restrictedAccess: undefined,
      description: undefined,
      extensions: {
        tags: spec_relationalChecklists.attributes.root_topic_id.extensions.tags
      }
    },
    author_id: {
      codec: TYPES.int,
      notNull: true,
      hasDefault: false,
      via: "relationalItemsByMyChecklistItemItemId",
      restrictedAccess: undefined,
      description: undefined,
      extensions: {
        tags: spec_relationalChecklists.attributes.author_id.extensions.tags
      }
    },
    position: {
      codec: TYPES.bigint,
      notNull: true,
      hasDefault: true,
      via: "relationalItemsByMyChecklistItemItemId",
      restrictedAccess: undefined,
      description: undefined,
      extensions: {
        tags: spec_relationalChecklists.attributes.position.extensions.tags
      }
    },
    created_at: {
      codec: TYPES.timestamptz,
      notNull: true,
      hasDefault: true,
      via: "relationalItemsByMyChecklistItemItemId",
      restrictedAccess: undefined,
      description: undefined,
      extensions: {
        tags: spec_relationalChecklists.attributes.created_at.extensions.tags
      }
    },
    updated_at: {
      codec: TYPES.timestamptz,
      notNull: true,
      hasDefault: true,
      via: "relationalItemsByMyChecklistItemItemId",
      restrictedAccess: undefined,
      description: undefined,
      extensions: {
        tags: spec_relationalChecklists.attributes.updated_at.extensions.tags
      }
    },
    is_explicitly_archived: {
      codec: TYPES.boolean,
      notNull: true,
      hasDefault: true,
      via: "relationalItemsByMyChecklistItemItemId",
      restrictedAccess: undefined,
      description: undefined,
      extensions: {
        tags: spec_relationalChecklists.attributes.is_explicitly_archived.extensions.tags
      }
    },
    archived_at: {
      codec: TYPES.timestamptz,
      notNull: false,
      hasDefault: false,
      via: "relationalItemsByMyChecklistItemItemId",
      restrictedAccess: undefined,
      description: undefined,
      extensions: {
        tags: spec_relationalChecklists.attributes.archived_at.extensions.tags
      }
    }
  },
  description: undefined,
  extensions: {
    isTableLike: true,
    pg: {
      serviceName: "main",
      schemaName: "polymorphic",
      name: "relational_checklist_items"
    },
    tags: {
      __proto__: null
    },
    relationalInterfaceCodecName: "relationalItems"
  },
  executor: executor
});
const relationalDividersIdentifier = sql.identifier("polymorphic", "relational_dividers");
const relationalDividersCodec = recordCodec({
  name: "relationalDividers",
  identifier: relationalDividersIdentifier,
  attributes: {
    __proto__: null,
    divider_item_id: {
      description: undefined,
      codec: TYPES.int,
      notNull: true,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    title: {
      description: undefined,
      codec: TYPES.text,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    color: {
      description: undefined,
      codec: TYPES.text,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    id: {
      codec: TYPES.int,
      notNull: true,
      hasDefault: true,
      via: "relationalItemsByMyDividerItemId",
      restrictedAccess: undefined,
      description: undefined,
      extensions: {
        tags: spec_relationalChecklists.attributes.id.extensions.tags
      }
    },
    type: {
      codec: itemTypeCodec,
      notNull: true,
      hasDefault: true,
      via: "relationalItemsByMyDividerItemId",
      restrictedAccess: undefined,
      description: undefined,
      extensions: {
        tags: spec_relationalChecklists.attributes.type.extensions.tags
      }
    },
    parent_id: {
      codec: TYPES.int,
      notNull: false,
      hasDefault: false,
      via: "relationalItemsByMyDividerItemId",
      restrictedAccess: undefined,
      description: undefined,
      extensions: {
        tags: spec_relationalChecklists.attributes.parent_id.extensions.tags
      }
    },
    root_topic_id: {
      codec: TYPES.int,
      notNull: false,
      hasDefault: false,
      via: "relationalItemsByMyDividerItemId",
      restrictedAccess: undefined,
      description: undefined,
      extensions: {
        tags: spec_relationalChecklists.attributes.root_topic_id.extensions.tags
      }
    },
    author_id: {
      codec: TYPES.int,
      notNull: true,
      hasDefault: false,
      via: "relationalItemsByMyDividerItemId",
      restrictedAccess: undefined,
      description: undefined,
      extensions: {
        tags: spec_relationalChecklists.attributes.author_id.extensions.tags
      }
    },
    position: {
      codec: TYPES.bigint,
      notNull: true,
      hasDefault: true,
      via: "relationalItemsByMyDividerItemId",
      restrictedAccess: undefined,
      description: undefined,
      extensions: {
        tags: spec_relationalChecklists.attributes.position.extensions.tags
      }
    },
    created_at: {
      codec: TYPES.timestamptz,
      notNull: true,
      hasDefault: true,
      via: "relationalItemsByMyDividerItemId",
      restrictedAccess: undefined,
      description: undefined,
      extensions: {
        tags: spec_relationalChecklists.attributes.created_at.extensions.tags
      }
    },
    updated_at: {
      codec: TYPES.timestamptz,
      notNull: true,
      hasDefault: true,
      via: "relationalItemsByMyDividerItemId",
      restrictedAccess: undefined,
      description: undefined,
      extensions: {
        tags: spec_relationalChecklists.attributes.updated_at.extensions.tags
      }
    },
    is_explicitly_archived: {
      codec: TYPES.boolean,
      notNull: true,
      hasDefault: true,
      via: "relationalItemsByMyDividerItemId",
      restrictedAccess: undefined,
      description: undefined,
      extensions: {
        tags: spec_relationalChecklists.attributes.is_explicitly_archived.extensions.tags
      }
    },
    archived_at: {
      codec: TYPES.timestamptz,
      notNull: false,
      hasDefault: false,
      via: "relationalItemsByMyDividerItemId",
      restrictedAccess: undefined,
      description: undefined,
      extensions: {
        tags: spec_relationalChecklists.attributes.archived_at.extensions.tags
      }
    }
  },
  description: undefined,
  extensions: {
    isTableLike: true,
    pg: {
      serviceName: "main",
      schemaName: "polymorphic",
      name: "relational_dividers"
    },
    tags: {
      __proto__: null
    },
    relationalInterfaceCodecName: "relationalItems"
  },
  executor: executor
});
const relationalItemRelationsIdentifier = sql.identifier("polymorphic", "relational_item_relations");
const relationalItemRelationsCodec = recordCodec({
  name: "relationalItemRelations",
  identifier: relationalItemRelationsIdentifier,
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
    parent_id: {
      description: undefined,
      codec: TYPES.int,
      notNull: true,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    child_id: {
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
      schemaName: "polymorphic",
      name: "relational_item_relations"
    },
    tags: {
      __proto__: null
    }
  },
  executor: executor
});
const singleTableItemRelationsIdentifier = sql.identifier("polymorphic", "single_table_item_relations");
const singleTableItemRelationsCodec = recordCodec({
  name: "singleTableItemRelations",
  identifier: singleTableItemRelationsIdentifier,
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
    parent_id: {
      description: undefined,
      codec: TYPES.int,
      notNull: true,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    child_id: {
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
      schemaName: "polymorphic",
      name: "single_table_item_relations"
    },
    tags: {
      __proto__: null
    }
  },
  executor: executor
});
const logEntriesIdentifier = sql.identifier("polymorphic", "log_entries");
const spec_logEntries = {
  name: "logEntries",
  identifier: logEntriesIdentifier,
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
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    organization_id: {
      description: undefined,
      codec: TYPES.int,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    text: {
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
      schemaName: "polymorphic",
      name: "log_entries"
    },
    tags: {
      __proto__: null,
      ref: "author to:PersonOrOrganization singular",
      refVia: ["author via:people", "author via:organizations"]
    },
    refDefinitions: {
      __proto__: null,
      author: {
        singular: true,
        graphqlType: "PersonOrOrganization",
        sourceGraphqlType: undefined,
        extensions: {
          via: undefined,
          tags: {
            behavior: undefined
          }
        }
      }
    }
  },
  executor: executor
};
const logEntriesCodec = recordCodec(spec_logEntries);
const relationalPostsIdentifier = sql.identifier("polymorphic", "relational_posts");
const relationalPostsCodec = recordCodec({
  name: "relationalPosts",
  identifier: relationalPostsIdentifier,
  attributes: {
    __proto__: null,
    post_item_id: {
      description: undefined,
      codec: TYPES.int,
      notNull: true,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    title: {
      description: undefined,
      codec: TYPES.text,
      notNull: true,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    description: {
      description: undefined,
      codec: TYPES.text,
      notNull: false,
      hasDefault: true,
      extensions: {
        tags: {}
      }
    },
    note: {
      description: undefined,
      codec: TYPES.text,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    id: {
      codec: TYPES.int,
      notNull: true,
      hasDefault: true,
      via: "relationalItemsByMyPostItemId",
      restrictedAccess: undefined,
      description: undefined,
      extensions: {
        tags: spec_relationalChecklists.attributes.id.extensions.tags
      }
    },
    type: {
      codec: itemTypeCodec,
      notNull: true,
      hasDefault: true,
      via: "relationalItemsByMyPostItemId",
      restrictedAccess: undefined,
      description: undefined,
      extensions: {
        tags: spec_relationalChecklists.attributes.type.extensions.tags
      }
    },
    parent_id: {
      codec: TYPES.int,
      notNull: false,
      hasDefault: false,
      via: "relationalItemsByMyPostItemId",
      restrictedAccess: undefined,
      description: undefined,
      extensions: {
        tags: spec_relationalChecklists.attributes.parent_id.extensions.tags
      }
    },
    root_topic_id: {
      codec: TYPES.int,
      notNull: false,
      hasDefault: false,
      via: "relationalItemsByMyPostItemId",
      restrictedAccess: undefined,
      description: undefined,
      extensions: {
        tags: spec_relationalChecklists.attributes.root_topic_id.extensions.tags
      }
    },
    author_id: {
      codec: TYPES.int,
      notNull: true,
      hasDefault: false,
      via: "relationalItemsByMyPostItemId",
      restrictedAccess: undefined,
      description: undefined,
      extensions: {
        tags: spec_relationalChecklists.attributes.author_id.extensions.tags
      }
    },
    position: {
      codec: TYPES.bigint,
      notNull: true,
      hasDefault: true,
      via: "relationalItemsByMyPostItemId",
      restrictedAccess: undefined,
      description: undefined,
      extensions: {
        tags: spec_relationalChecklists.attributes.position.extensions.tags
      }
    },
    created_at: {
      codec: TYPES.timestamptz,
      notNull: true,
      hasDefault: true,
      via: "relationalItemsByMyPostItemId",
      restrictedAccess: undefined,
      description: undefined,
      extensions: {
        tags: spec_relationalChecklists.attributes.created_at.extensions.tags
      }
    },
    updated_at: {
      codec: TYPES.timestamptz,
      notNull: true,
      hasDefault: true,
      via: "relationalItemsByMyPostItemId",
      restrictedAccess: undefined,
      description: undefined,
      extensions: {
        tags: spec_relationalChecklists.attributes.updated_at.extensions.tags
      }
    },
    is_explicitly_archived: {
      codec: TYPES.boolean,
      notNull: true,
      hasDefault: true,
      via: "relationalItemsByMyPostItemId",
      restrictedAccess: undefined,
      description: undefined,
      extensions: {
        tags: spec_relationalChecklists.attributes.is_explicitly_archived.extensions.tags
      }
    },
    archived_at: {
      codec: TYPES.timestamptz,
      notNull: false,
      hasDefault: false,
      via: "relationalItemsByMyPostItemId",
      restrictedAccess: undefined,
      description: undefined,
      extensions: {
        tags: spec_relationalChecklists.attributes.archived_at.extensions.tags
      }
    }
  },
  description: undefined,
  extensions: {
    isTableLike: true,
    pg: {
      serviceName: "main",
      schemaName: "polymorphic",
      name: "relational_posts"
    },
    tags: {
      __proto__: null
    },
    relationalInterfaceCodecName: "relationalItems"
  },
  executor: executor
});
const firstPartyVulnerabilitiesIdentifier = sql.identifier("polymorphic", "first_party_vulnerabilities");
const spec_firstPartyVulnerabilities = {
  name: "firstPartyVulnerabilities",
  identifier: firstPartyVulnerabilitiesIdentifier,
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
    name: {
      description: undefined,
      codec: TYPES.text,
      notNull: true,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    cvss_score: {
      description: undefined,
      codec: TYPES.float,
      notNull: true,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    team_name: {
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
      schemaName: "polymorphic",
      name: "first_party_vulnerabilities"
    },
    tags: {
      __proto__: null,
      implements: "Vulnerability",
      ref: ["applications to:Application plural", "owners to:PersonOrOrganization plural"],
      refVia: ["applications via:aws_application_first_party_vulnerabilities;aws_applications", "applications via:gcp_application_first_party_vulnerabilities;gcp_applications", "owners via:aws_application_first_party_vulnerabilities;aws_applications;people", "owners via:aws_application_first_party_vulnerabilities;aws_applications;organizations", "owners via:gcp_application_first_party_vulnerabilities;gcp_applications;people", "owners via:gcp_application_first_party_vulnerabilities;gcp_applications;organizations"]
    },
    refDefinitions: {
      __proto__: null,
      applications: {
        singular: false,
        graphqlType: "Application",
        sourceGraphqlType: undefined,
        extensions: {
          via: undefined,
          tags: {
            behavior: undefined
          }
        }
      },
      owners: {
        singular: false,
        graphqlType: "PersonOrOrganization",
        sourceGraphqlType: undefined,
        extensions: {
          via: undefined,
          tags: {
            behavior: undefined
          }
        }
      }
    }
  },
  executor: executor
};
const firstPartyVulnerabilitiesCodec = recordCodec(spec_firstPartyVulnerabilities);
const thirdPartyVulnerabilitiesIdentifier = sql.identifier("polymorphic", "third_party_vulnerabilities");
const spec_thirdPartyVulnerabilities = {
  name: "thirdPartyVulnerabilities",
  identifier: thirdPartyVulnerabilitiesIdentifier,
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
    name: {
      description: undefined,
      codec: TYPES.text,
      notNull: true,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    cvss_score: {
      description: undefined,
      codec: TYPES.float,
      notNull: true,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    vendor_name: {
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
      schemaName: "polymorphic",
      name: "third_party_vulnerabilities"
    },
    tags: {
      __proto__: null,
      implements: "Vulnerability",
      ref: ["applications to:Application plural", "owners to:PersonOrOrganization plural"],
      refVia: ["applications via:aws_application_third_party_vulnerabilities;aws_applications", "applications via:gcp_application_third_party_vulnerabilities;gcp_applications", "owners via:aws_application_third_party_vulnerabilities;aws_applications;people", "owners via:aws_application_third_party_vulnerabilities;aws_applications;organizations", "owners via:gcp_application_third_party_vulnerabilities;gcp_applications;people", "owners via:gcp_application_third_party_vulnerabilities;gcp_applications;organizations"]
    },
    refDefinitions: {
      __proto__: null,
      applications: {
        singular: false,
        graphqlType: "Application",
        sourceGraphqlType: undefined,
        extensions: {
          via: undefined,
          tags: {
            behavior: undefined
          }
        }
      },
      owners: {
        singular: false,
        graphqlType: "PersonOrOrganization",
        sourceGraphqlType: undefined,
        extensions: {
          via: undefined,
          tags: {
            behavior: undefined
          }
        }
      }
    }
  },
  executor: executor
};
const thirdPartyVulnerabilitiesCodec = recordCodec(spec_thirdPartyVulnerabilities);
const awsApplicationsIdentifier = sql.identifier("polymorphic", "aws_applications");
const spec_awsApplications = {
  name: "awsApplications",
  identifier: awsApplicationsIdentifier,
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
    name: {
      description: undefined,
      codec: TYPES.text,
      notNull: true,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    last_deployed: {
      description: undefined,
      codec: TYPES.timestamptz,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    person_id: {
      description: undefined,
      codec: TYPES.int,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    organization_id: {
      description: undefined,
      codec: TYPES.int,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    aws_id: {
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
      schemaName: "polymorphic",
      name: "aws_applications"
    },
    tags: {
      __proto__: null,
      implements: "Application",
      ref: ["vulnerabilities to:Vulnerability plural", "owner to:PersonOrOrganization singular"],
      refVia: ["vulnerabilities via:(id)->aws_application_first_party_vulnerabilities(aws_application_id);(first_party_vulnerability_id)->first_party_vulnerabilities(id)", "vulnerabilities via:(id)->aws_application_third_party_vulnerabilities(aws_application_id);(third_party_vulnerability_id)->third_party_vulnerabilities(id)", "owner via:people", "owner via:organizations"]
    },
    refDefinitions: {
      __proto__: null,
      vulnerabilities: {
        singular: false,
        graphqlType: "Vulnerability",
        sourceGraphqlType: undefined,
        extensions: {
          via: undefined,
          tags: {
            behavior: undefined
          }
        }
      },
      owner: {
        singular: true,
        graphqlType: "PersonOrOrganization",
        sourceGraphqlType: undefined,
        extensions: {
          via: undefined,
          tags: {
            behavior: undefined
          }
        }
      }
    }
  },
  executor: executor
};
const awsApplicationsCodec = recordCodec(spec_awsApplications);
const gcpApplicationsIdentifier = sql.identifier("polymorphic", "gcp_applications");
const spec_gcpApplications = {
  name: "gcpApplications",
  identifier: gcpApplicationsIdentifier,
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
    name: {
      description: undefined,
      codec: TYPES.text,
      notNull: true,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    last_deployed: {
      description: undefined,
      codec: TYPES.timestamptz,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    person_id: {
      description: undefined,
      codec: TYPES.int,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    organization_id: {
      description: undefined,
      codec: TYPES.int,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    gcp_id: {
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
      schemaName: "polymorphic",
      name: "gcp_applications"
    },
    tags: {
      __proto__: null,
      implements: "Application",
      ref: ["vulnerabilities to:Vulnerability plural", "owner to:PersonOrOrganization singular"],
      refVia: ["vulnerabilities via:(id)->gcp_application_first_party_vulnerabilities(gcp_application_id);(first_party_vulnerability_id)->first_party_vulnerabilities(id)", "vulnerabilities via:(id)->gcp_application_third_party_vulnerabilities(gcp_application_id);(third_party_vulnerability_id)->third_party_vulnerabilities(id)", "owner via:people", "owner via:organizations"]
    },
    refDefinitions: {
      __proto__: null,
      vulnerabilities: {
        singular: false,
        graphqlType: "Vulnerability",
        sourceGraphqlType: undefined,
        extensions: {
          via: undefined,
          tags: {
            behavior: undefined
          }
        }
      },
      owner: {
        singular: true,
        graphqlType: "PersonOrOrganization",
        sourceGraphqlType: undefined,
        extensions: {
          via: undefined,
          tags: {
            behavior: undefined
          }
        }
      }
    }
  },
  executor: executor
};
const gcpApplicationsCodec = recordCodec(spec_gcpApplications);
const singleTableItemsIdentifier = sql.identifier("polymorphic", "single_table_items");
const spec_singleTableItems = {
  name: "singleTableItems",
  identifier: singleTableItemsIdentifier,
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
    type: {
      description: undefined,
      codec: itemTypeCodec,
      notNull: true,
      hasDefault: true,
      extensions: {
        tags: {}
      }
    },
    parent_id: {
      description: undefined,
      codec: TYPES.int,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    root_topic_id: {
      description: undefined,
      codec: TYPES.int,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    author_id: {
      description: undefined,
      codec: TYPES.int,
      notNull: true,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    position: {
      description: undefined,
      codec: TYPES.bigint,
      notNull: true,
      hasDefault: true,
      extensions: {
        tags: {}
      }
    },
    created_at: {
      description: undefined,
      codec: TYPES.timestamptz,
      notNull: true,
      hasDefault: true,
      extensions: {
        tags: {}
      }
    },
    updated_at: {
      description: undefined,
      codec: TYPES.timestamptz,
      notNull: true,
      hasDefault: true,
      extensions: {
        tags: {}
      }
    },
    is_explicitly_archived: {
      description: undefined,
      codec: TYPES.boolean,
      notNull: true,
      hasDefault: true,
      extensions: {
        tags: {}
      }
    },
    archived_at: {
      description: undefined,
      codec: TYPES.timestamptz,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    title: {
      description: undefined,
      codec: TYPES.text,
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
    note: {
      description: undefined,
      codec: TYPES.text,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    color: {
      description: undefined,
      codec: TYPES.text,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: {}
      }
    },
    priority_id: {
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
      schemaName: "polymorphic",
      name: "single_table_items"
    },
    tags: {
      __proto__: null,
      interface: "mode:single type:type",
      type: ["TOPIC name:SingleTableTopic attributes:title!", "POST name:SingleTablePost attributes:title>subject,description,note,priority_id", "DIVIDER name:SingleTableDivider attributes:title,color", "CHECKLIST name:SingleTableChecklist attributes:title", "CHECKLIST_ITEM name:SingleTableChecklistItem attributes:description,note,priority_id"],
      ref: ["rootTopic to:SingleTableTopic singular via:(root_topic_id)->polymorphic.single_table_items(id)", "rootChecklistTopic from:SingleTableChecklist to:SingleTableTopic singular via:(root_topic_id)->polymorphic.single_table_items(id)"]
    },
    refDefinitions: {
      __proto__: null,
      rootTopic: {
        singular: true,
        graphqlType: "SingleTableTopic",
        sourceGraphqlType: undefined,
        extensions: {
          via: "(root_topic_id)->polymorphic.single_table_items(id)",
          tags: {
            behavior: undefined
          }
        }
      },
      rootChecklistTopic: {
        singular: true,
        graphqlType: "SingleTableTopic",
        sourceGraphqlType: "SingleTableChecklist",
        extensions: {
          via: "(root_topic_id)->polymorphic.single_table_items(id)",
          tags: {
            behavior: undefined
          }
        }
      }
    }
  },
  executor: executor,
  polymorphism: {
    mode: "single",
    commonAttributes: ["id", "type", "parent_id", "root_topic_id", "author_id", "position", "created_at", "updated_at", "is_explicitly_archived", "archived_at"],
    typeAttributes: ["type"],
    types: {
      __proto__: null,
      TOPIC: {
        name: "SingleTableTopic",
        attributes: [{
          attribute: "title",
          isNotNull: true,
          rename: undefined
        }]
      },
      POST: {
        name: "SingleTablePost",
        attributes: [{
          attribute: "title",
          isNotNull: false,
          rename: "subject"
        }, {
          attribute: "description",
          isNotNull: false,
          rename: undefined
        }, {
          attribute: "note",
          isNotNull: false,
          rename: undefined
        }, {
          attribute: "priority_id",
          isNotNull: false,
          rename: undefined
        }]
      },
      DIVIDER: {
        name: "SingleTableDivider",
        attributes: [{
          attribute: "title",
          isNotNull: false,
          rename: undefined
        }, {
          attribute: "color",
          isNotNull: false,
          rename: undefined
        }]
      },
      CHECKLIST: {
        name: "SingleTableChecklist",
        attributes: [{
          attribute: "title",
          isNotNull: false,
          rename: undefined
        }]
      },
      CHECKLIST_ITEM: {
        name: "SingleTableChecklistItem",
        attributes: [{
          attribute: "description",
          isNotNull: false,
          rename: undefined
        }, {
          attribute: "note",
          isNotNull: false,
          rename: undefined
        }, {
          attribute: "priority_id",
          isNotNull: false,
          rename: undefined
        }]
      }
    }
  }
};
const singleTableItemsCodec = recordCodec(spec_singleTableItems);
const relationalItemsIdentifier = sql.identifier("polymorphic", "relational_items");
const spec_relationalItems = {
  name: "relationalItems",
  identifier: relationalItemsIdentifier,
  attributes: {
    __proto__: null,
    id: {
      description: undefined,
      codec: TYPES.int,
      notNull: true,
      hasDefault: true,
      extensions: {
        tags: spec_relationalChecklists.attributes.id.extensions.tags
      }
    },
    type: {
      description: undefined,
      codec: itemTypeCodec,
      notNull: true,
      hasDefault: true,
      extensions: {
        tags: spec_relationalChecklists.attributes.type.extensions.tags
      }
    },
    parent_id: {
      description: undefined,
      codec: TYPES.int,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: spec_relationalChecklists.attributes.parent_id.extensions.tags
      }
    },
    root_topic_id: {
      description: undefined,
      codec: TYPES.int,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: spec_relationalChecklists.attributes.root_topic_id.extensions.tags
      }
    },
    author_id: {
      description: undefined,
      codec: TYPES.int,
      notNull: true,
      hasDefault: false,
      extensions: {
        tags: spec_relationalChecklists.attributes.author_id.extensions.tags
      }
    },
    position: {
      description: undefined,
      codec: TYPES.bigint,
      notNull: true,
      hasDefault: true,
      extensions: {
        tags: spec_relationalChecklists.attributes.position.extensions.tags
      }
    },
    created_at: {
      description: undefined,
      codec: TYPES.timestamptz,
      notNull: true,
      hasDefault: true,
      extensions: {
        tags: spec_relationalChecklists.attributes.created_at.extensions.tags
      }
    },
    updated_at: {
      description: undefined,
      codec: TYPES.timestamptz,
      notNull: true,
      hasDefault: true,
      extensions: {
        tags: spec_relationalChecklists.attributes.updated_at.extensions.tags
      }
    },
    is_explicitly_archived: {
      description: undefined,
      codec: TYPES.boolean,
      notNull: true,
      hasDefault: true,
      extensions: {
        tags: spec_relationalChecklists.attributes.is_explicitly_archived.extensions.tags
      }
    },
    archived_at: {
      description: undefined,
      codec: TYPES.timestamptz,
      notNull: false,
      hasDefault: false,
      extensions: {
        tags: spec_relationalChecklists.attributes.archived_at.extensions.tags
      }
    }
  },
  description: undefined,
  extensions: {
    isTableLike: true,
    pg: {
      serviceName: "main",
      schemaName: "polymorphic",
      name: "relational_items"
    },
    tags: {
      __proto__: null,
      interface: "mode:relational",
      type: ["TOPIC references:relational_topics", "POST references:relational_posts", "DIVIDER references:relational_dividers", "CHECKLIST references:relational_checklists", "CHECKLIST_ITEM references:relational_checklist_items"]
    }
  },
  executor: executor,
  polymorphism: {
    mode: "relational",
    typeAttributes: ["type"],
    types: {
      __proto__: null,
      TOPIC: {
        name: "RelationalTopic",
        references: "relational_topics",
        relationName: "relationalTopicsByTheirTopicItemId"
      },
      POST: {
        name: "RelationalPost",
        references: "relational_posts",
        relationName: "relationalPostsByTheirPostItemId"
      },
      DIVIDER: {
        name: "RelationalDivider",
        references: "relational_dividers",
        relationName: "relationalDividersByTheirDividerItemId"
      },
      CHECKLIST: {
        name: "RelationalChecklist",
        references: "relational_checklists",
        relationName: "relationalChecklistsByTheirChecklistItemId"
      },
      CHECKLIST_ITEM: {
        name: "RelationalChecklistItem",
        references: "relational_checklist_items",
        relationName: "relationalChecklistItemsByTheirChecklistItemItemId"
      }
    }
  }
};
const relationalItemsCodec = recordCodec(spec_relationalItems);
const spec_Application = {
  name: "Application",
  identifier: sql.identifier("polymorphic", "applications"),
  attributes: {
    __proto__: null,
    id: {
      description: undefined,
      codec: TYPES.int,
      notNull: true,
      hasDefault: false,
      extensions: {
        tags: {
          notNull: true
        }
      }
    },
    name: {
      description: undefined,
      codec: TYPES.text,
      notNull: true,
      hasDefault: false,
      extensions: {
        tags: {
          notNull: true
        }
      }
    },
    last_deployed: {
      description: undefined,
      codec: TYPES.timestamptz,
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
      schemaName: "polymorphic",
      name: "applications"
    },
    tags: {
      __proto__: null,
      interface: "mode:union",
      name: "Application",
      behavior: "node",
      ref: ["vulnerabilities to:Vulnerability plural", "owner to:PersonOrOrganization singular"]
    },
    refDefinitions: {
      __proto__: null,
      vulnerabilities: {
        singular: false,
        graphqlType: "Vulnerability",
        sourceGraphqlType: undefined,
        extensions: {
          via: undefined,
          tags: {
            behavior: undefined
          }
        }
      },
      owner: {
        singular: true,
        graphqlType: "PersonOrOrganization",
        sourceGraphqlType: undefined,
        extensions: {
          via: undefined,
          tags: {
            behavior: undefined
          }
        }
      }
    }
  },
  executor: executor,
  polymorphism: {
    mode: "union"
  }
};
const spec_Vulnerability = {
  name: "Vulnerability",
  identifier: sql.identifier("polymorphic", "vulnerabilities"),
  attributes: {
    __proto__: null,
    id: {
      description: undefined,
      codec: TYPES.int,
      notNull: true,
      hasDefault: false,
      extensions: {
        tags: {
          notNull: true
        }
      }
    },
    name: {
      description: undefined,
      codec: TYPES.text,
      notNull: true,
      hasDefault: false,
      extensions: {
        tags: {
          notNull: true
        }
      }
    },
    cvss_score: {
      description: undefined,
      codec: TYPES.float,
      notNull: true,
      hasDefault: false,
      extensions: {
        tags: {
          notNull: true
        }
      }
    }
  },
  description: undefined,
  extensions: {
    isTableLike: false,
    pg: {
      serviceName: "main",
      schemaName: "polymorphic",
      name: "vulnerabilities"
    },
    tags: {
      __proto__: null,
      interface: "mode:union",
      name: "Vulnerability",
      behavior: "node",
      ref: ["applications to:Application plural", "owners to:PersonOrOrganization plural"]
    },
    refDefinitions: {
      __proto__: null,
      applications: {
        singular: false,
        graphqlType: "Application",
        sourceGraphqlType: undefined,
        extensions: {
          via: undefined,
          tags: {
            behavior: undefined
          }
        }
      },
      owners: {
        singular: false,
        graphqlType: "PersonOrOrganization",
        sourceGraphqlType: undefined,
        extensions: {
          via: undefined,
          tags: {
            behavior: undefined
          }
        }
      }
    }
  },
  executor: executor,
  polymorphism: {
    mode: "union"
  }
};
const spec_ZeroImplementation = {
  name: "ZeroImplementation",
  identifier: sql.identifier("polymorphic", "zero_implementation"),
  attributes: {
    __proto__: null,
    id: {
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
      schemaName: "polymorphic",
      name: "zero_implementation"
    },
    tags: {
      __proto__: null,
      interface: "mode:union",
      name: "ZeroImplementation",
      behavior: "node"
    }
  },
  executor: executor,
  polymorphism: {
    mode: "union"
  }
};
const registryConfig_pgResources_aws_application_first_party_vulnerabilities_aws_application_first_party_vulnerabilities = {
  executor: executor,
  name: "aws_application_first_party_vulnerabilities",
  identifier: "main.polymorphic.aws_application_first_party_vulnerabilities",
  from: awsApplicationFirstPartyVulnerabilitiesIdentifier,
  codec: awsApplicationFirstPartyVulnerabilitiesCodec,
  uniques: [{
    isPrimary: true,
    attributes: ["aws_application_id", "first_party_vulnerability_id"],
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
      schemaName: "polymorphic",
      name: "aws_application_first_party_vulnerabilities"
    },
    isInsertable: true,
    isUpdatable: true,
    isDeletable: true,
    tags: {
      omit: true,
      behavior: spec_awsApplicationFirstPartyVulnerabilities.extensions.tags.behavior
    }
  }
};
const registryConfig_pgResources_aws_application_third_party_vulnerabilities_aws_application_third_party_vulnerabilities = {
  executor: executor,
  name: "aws_application_third_party_vulnerabilities",
  identifier: "main.polymorphic.aws_application_third_party_vulnerabilities",
  from: awsApplicationThirdPartyVulnerabilitiesIdentifier,
  codec: awsApplicationThirdPartyVulnerabilitiesCodec,
  uniques: [{
    isPrimary: true,
    attributes: ["aws_application_id", "third_party_vulnerability_id"],
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
      schemaName: "polymorphic",
      name: "aws_application_third_party_vulnerabilities"
    },
    isInsertable: true,
    isUpdatable: true,
    isDeletable: true,
    tags: {
      omit: true,
      behavior: spec_awsApplicationThirdPartyVulnerabilities.extensions.tags.behavior
    }
  }
};
const registryConfig_pgResources_gcp_application_first_party_vulnerabilities_gcp_application_first_party_vulnerabilities = {
  executor: executor,
  name: "gcp_application_first_party_vulnerabilities",
  identifier: "main.polymorphic.gcp_application_first_party_vulnerabilities",
  from: gcpApplicationFirstPartyVulnerabilitiesIdentifier,
  codec: gcpApplicationFirstPartyVulnerabilitiesCodec,
  uniques: [{
    isPrimary: true,
    attributes: ["gcp_application_id", "first_party_vulnerability_id"],
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
      schemaName: "polymorphic",
      name: "gcp_application_first_party_vulnerabilities"
    },
    isInsertable: true,
    isUpdatable: true,
    isDeletable: true,
    tags: {
      omit: true,
      behavior: spec_gcpApplicationFirstPartyVulnerabilities.extensions.tags.behavior
    }
  }
};
const registryConfig_pgResources_gcp_application_third_party_vulnerabilities_gcp_application_third_party_vulnerabilities = {
  executor: executor,
  name: "gcp_application_third_party_vulnerabilities",
  identifier: "main.polymorphic.gcp_application_third_party_vulnerabilities",
  from: gcpApplicationThirdPartyVulnerabilitiesIdentifier,
  codec: gcpApplicationThirdPartyVulnerabilitiesCodec,
  uniques: [{
    isPrimary: true,
    attributes: ["gcp_application_id", "third_party_vulnerability_id"],
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
      schemaName: "polymorphic",
      name: "gcp_application_third_party_vulnerabilities"
    },
    isInsertable: true,
    isUpdatable: true,
    isDeletable: true,
    tags: {
      omit: true,
      behavior: spec_gcpApplicationThirdPartyVulnerabilities.extensions.tags.behavior
    }
  }
};
const organizationsUniques = [{
  isPrimary: true,
  attributes: ["organization_id"],
  description: undefined,
  extensions: {
    tags: {
      __proto__: null
    }
  }
}, {
  isPrimary: false,
  attributes: ["name"],
  description: undefined,
  extensions: {
    tags: {
      __proto__: null
    }
  }
}];
const registryConfig_pgResources_organizations_organizations = {
  executor: executor,
  name: "organizations",
  identifier: "main.polymorphic.organizations",
  from: organizationsIdentifier,
  codec: organizationsCodec,
  uniques: organizationsUniques,
  isVirtual: false,
  description: undefined,
  extensions: {
    description: undefined,
    pg: {
      serviceName: "main",
      schemaName: "polymorphic",
      name: "organizations"
    },
    isInsertable: true,
    isUpdatable: true,
    isDeletable: true,
    tags: {
      unionMember: "PersonOrOrganization"
    }
  }
};
const peopleUniques = [{
  isPrimary: true,
  attributes: ["person_id"],
  description: undefined,
  extensions: {
    tags: {
      __proto__: null
    }
  }
}, {
  isPrimary: false,
  attributes: ["username"],
  description: undefined,
  extensions: {
    tags: {
      __proto__: null
    }
  }
}];
const registryConfig_pgResources_people_people = {
  executor: executor,
  name: "people",
  identifier: "main.polymorphic.people",
  from: peopleIdentifier,
  codec: peopleCodec,
  uniques: peopleUniques,
  isVirtual: false,
  description: undefined,
  extensions: {
    description: undefined,
    pg: {
      serviceName: "main",
      schemaName: "polymorphic",
      name: "people"
    },
    isInsertable: true,
    isUpdatable: true,
    isDeletable: true,
    tags: {
      unionMember: "PersonOrOrganization",
      ref: "applications to:Application",
      refVia: spec_people.extensions.tags.refVia
    }
  }
};
const registryConfig_pgResources_priorities_priorities = {
  executor: executor,
  name: "priorities",
  identifier: "main.polymorphic.priorities",
  from: prioritiesIdentifier,
  codec: prioritiesCodec,
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
      schemaName: "polymorphic",
      name: "priorities"
    },
    isInsertable: true,
    isUpdatable: true,
    isDeletable: true,
    tags: {
      omit: "create,update,delete,filter,order",
      behavior: spec_priorities.extensions.tags.behavior
    }
  }
};
const relational_checklistsUniques = [{
  isPrimary: true,
  attributes: ["checklist_item_id"],
  description: undefined,
  extensions: {
    tags: {
      __proto__: null
    }
  }
}];
const registryConfig_pgResources_relational_checklists_relational_checklists = {
  executor: executor,
  name: "relational_checklists",
  identifier: "main.polymorphic.relational_checklists",
  from: relationalChecklistsIdentifier,
  codec: relationalChecklistsCodec,
  uniques: relational_checklistsUniques,
  isVirtual: false,
  description: undefined,
  extensions: {
    description: undefined,
    pg: {
      serviceName: "main",
      schemaName: "polymorphic",
      name: "relational_checklists"
    },
    isInsertable: true,
    isUpdatable: true,
    isDeletable: true,
    tags: {}
  }
};
const relational_item_relation_composite_pksUniques = [{
  isPrimary: true,
  attributes: ["parent_id", "child_id"],
  description: undefined,
  extensions: {
    tags: {
      __proto__: null
    }
  }
}];
const registryConfig_pgResources_relational_item_relation_composite_pks_relational_item_relation_composite_pks = {
  executor: executor,
  name: "relational_item_relation_composite_pks",
  identifier: "main.polymorphic.relational_item_relation_composite_pks",
  from: relationalItemRelationCompositePksIdentifier,
  codec: relationalItemRelationCompositePksCodec,
  uniques: relational_item_relation_composite_pksUniques,
  isVirtual: false,
  description: undefined,
  extensions: {
    description: undefined,
    pg: {
      serviceName: "main",
      schemaName: "polymorphic",
      name: "relational_item_relation_composite_pks"
    },
    isInsertable: true,
    isUpdatable: true,
    isDeletable: true,
    tags: {}
  }
};
const relational_topicsUniques = [{
  isPrimary: true,
  attributes: ["topic_item_id"],
  description: undefined,
  extensions: {
    tags: {
      __proto__: null
    }
  }
}];
const registryConfig_pgResources_relational_topics_relational_topics = {
  executor: executor,
  name: "relational_topics",
  identifier: "main.polymorphic.relational_topics",
  from: relationalTopicsIdentifier,
  codec: relationalTopicsCodec,
  uniques: relational_topicsUniques,
  isVirtual: false,
  description: undefined,
  extensions: {
    description: undefined,
    pg: {
      serviceName: "main",
      schemaName: "polymorphic",
      name: "relational_topics"
    },
    isInsertable: true,
    isUpdatable: true,
    isDeletable: true,
    tags: {}
  }
};
const single_table_item_relation_composite_pksUniques = [{
  isPrimary: true,
  attributes: ["parent_id", "child_id"],
  description: undefined,
  extensions: {
    tags: {
      __proto__: null
    }
  }
}];
const registryConfig_pgResources_single_table_item_relation_composite_pks_single_table_item_relation_composite_pks = {
  executor: executor,
  name: "single_table_item_relation_composite_pks",
  identifier: "main.polymorphic.single_table_item_relation_composite_pks",
  from: singleTableItemRelationCompositePksIdentifier,
  codec: singleTableItemRelationCompositePksCodec,
  uniques: single_table_item_relation_composite_pksUniques,
  isVirtual: false,
  description: undefined,
  extensions: {
    description: undefined,
    pg: {
      serviceName: "main",
      schemaName: "polymorphic",
      name: "single_table_item_relation_composite_pks"
    },
    isInsertable: true,
    isUpdatable: true,
    isDeletable: true,
    tags: {}
  }
};
const relational_checklist_itemsUniques = [{
  isPrimary: true,
  attributes: ["checklist_item_item_id"],
  description: undefined,
  extensions: {
    tags: {
      __proto__: null
    }
  }
}];
const registryConfig_pgResources_relational_checklist_items_relational_checklist_items = {
  executor: executor,
  name: "relational_checklist_items",
  identifier: "main.polymorphic.relational_checklist_items",
  from: relationalChecklistItemsIdentifier,
  codec: relationalChecklistItemsCodec,
  uniques: relational_checklist_itemsUniques,
  isVirtual: false,
  description: undefined,
  extensions: {
    description: undefined,
    pg: {
      serviceName: "main",
      schemaName: "polymorphic",
      name: "relational_checklist_items"
    },
    isInsertable: true,
    isUpdatable: true,
    isDeletable: true,
    tags: {}
  }
};
const relational_dividersUniques = [{
  isPrimary: true,
  attributes: ["divider_item_id"],
  description: undefined,
  extensions: {
    tags: {
      __proto__: null
    }
  }
}];
const registryConfig_pgResources_relational_dividers_relational_dividers = {
  executor: executor,
  name: "relational_dividers",
  identifier: "main.polymorphic.relational_dividers",
  from: relationalDividersIdentifier,
  codec: relationalDividersCodec,
  uniques: relational_dividersUniques,
  isVirtual: false,
  description: undefined,
  extensions: {
    description: undefined,
    pg: {
      serviceName: "main",
      schemaName: "polymorphic",
      name: "relational_dividers"
    },
    isInsertable: true,
    isUpdatable: true,
    isDeletable: true,
    tags: {}
  }
};
const relational_item_relationsUniques = [{
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
  attributes: ["parent_id", "child_id"],
  description: undefined,
  extensions: {
    tags: {
      __proto__: null
    }
  }
}];
const registryConfig_pgResources_relational_item_relations_relational_item_relations = {
  executor: executor,
  name: "relational_item_relations",
  identifier: "main.polymorphic.relational_item_relations",
  from: relationalItemRelationsIdentifier,
  codec: relationalItemRelationsCodec,
  uniques: relational_item_relationsUniques,
  isVirtual: false,
  description: undefined,
  extensions: {
    description: undefined,
    pg: {
      serviceName: "main",
      schemaName: "polymorphic",
      name: "relational_item_relations"
    },
    isInsertable: true,
    isUpdatable: true,
    isDeletable: true,
    tags: {}
  }
};
const single_table_item_relationsUniques = [{
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
  attributes: ["parent_id", "child_id"],
  description: undefined,
  extensions: {
    tags: {
      __proto__: null
    }
  }
}];
const registryConfig_pgResources_single_table_item_relations_single_table_item_relations = {
  executor: executor,
  name: "single_table_item_relations",
  identifier: "main.polymorphic.single_table_item_relations",
  from: singleTableItemRelationsIdentifier,
  codec: singleTableItemRelationsCodec,
  uniques: single_table_item_relationsUniques,
  isVirtual: false,
  description: undefined,
  extensions: {
    description: undefined,
    pg: {
      serviceName: "main",
      schemaName: "polymorphic",
      name: "single_table_item_relations"
    },
    isInsertable: true,
    isUpdatable: true,
    isDeletable: true,
    tags: {}
  }
};
const log_entriesUniques = [{
  isPrimary: true,
  attributes: ["id"],
  description: undefined,
  extensions: {
    tags: {
      __proto__: null
    }
  }
}];
const registryConfig_pgResources_log_entries_log_entries = {
  executor: executor,
  name: "log_entries",
  identifier: "main.polymorphic.log_entries",
  from: logEntriesIdentifier,
  codec: logEntriesCodec,
  uniques: log_entriesUniques,
  isVirtual: false,
  description: undefined,
  extensions: {
    description: undefined,
    pg: {
      serviceName: "main",
      schemaName: "polymorphic",
      name: "log_entries"
    },
    isInsertable: true,
    isUpdatable: true,
    isDeletable: true,
    tags: {
      ref: "author to:PersonOrOrganization singular",
      refVia: spec_logEntries.extensions.tags.refVia
    }
  }
};
const relational_postsUniques = [{
  isPrimary: true,
  attributes: ["post_item_id"],
  description: undefined,
  extensions: {
    tags: {
      __proto__: null
    }
  }
}];
const registryConfig_pgResources_relational_posts_relational_posts = {
  executor: executor,
  name: "relational_posts",
  identifier: "main.polymorphic.relational_posts",
  from: relationalPostsIdentifier,
  codec: relationalPostsCodec,
  uniques: relational_postsUniques,
  isVirtual: false,
  description: undefined,
  extensions: {
    description: undefined,
    pg: {
      serviceName: "main",
      schemaName: "polymorphic",
      name: "relational_posts"
    },
    isInsertable: true,
    isUpdatable: true,
    isDeletable: true,
    tags: {}
  }
};
const first_party_vulnerabilities_cvss_score_intFunctionIdentifer = sql.identifier("polymorphic", "first_party_vulnerabilities_cvss_score_int");
const third_party_vulnerabilities_cvss_score_intFunctionIdentifer = sql.identifier("polymorphic", "third_party_vulnerabilities_cvss_score_int");
const first_party_vulnerabilitiesUniques = [{
  isPrimary: true,
  attributes: ["id"],
  description: undefined,
  extensions: {
    tags: {
      __proto__: null
    }
  }
}];
const registryConfig_pgResources_first_party_vulnerabilities_first_party_vulnerabilities = {
  executor: executor,
  name: "first_party_vulnerabilities",
  identifier: "main.polymorphic.first_party_vulnerabilities",
  from: firstPartyVulnerabilitiesIdentifier,
  codec: firstPartyVulnerabilitiesCodec,
  uniques: first_party_vulnerabilitiesUniques,
  isVirtual: false,
  description: undefined,
  extensions: {
    description: undefined,
    pg: {
      serviceName: "main",
      schemaName: "polymorphic",
      name: "first_party_vulnerabilities"
    },
    isInsertable: true,
    isUpdatable: true,
    isDeletable: true,
    tags: {
      implements: "Vulnerability",
      ref: spec_firstPartyVulnerabilities.extensions.tags.ref,
      refVia: spec_firstPartyVulnerabilities.extensions.tags.refVia
    }
  }
};
const third_party_vulnerabilitiesUniques = [{
  isPrimary: true,
  attributes: ["id"],
  description: undefined,
  extensions: {
    tags: {
      __proto__: null
    }
  }
}];
const registryConfig_pgResources_third_party_vulnerabilities_third_party_vulnerabilities = {
  executor: executor,
  name: "third_party_vulnerabilities",
  identifier: "main.polymorphic.third_party_vulnerabilities",
  from: thirdPartyVulnerabilitiesIdentifier,
  codec: thirdPartyVulnerabilitiesCodec,
  uniques: third_party_vulnerabilitiesUniques,
  isVirtual: false,
  description: undefined,
  extensions: {
    description: undefined,
    pg: {
      serviceName: "main",
      schemaName: "polymorphic",
      name: "third_party_vulnerabilities"
    },
    isInsertable: true,
    isUpdatable: true,
    isDeletable: true,
    tags: {
      implements: "Vulnerability",
      ref: spec_thirdPartyVulnerabilities.extensions.tags.ref,
      refVia: spec_thirdPartyVulnerabilities.extensions.tags.refVia
    }
  }
};
const aws_applicationsUniques = [{
  isPrimary: true,
  attributes: ["id"],
  description: undefined,
  extensions: {
    tags: {
      __proto__: null
    }
  }
}];
const registryConfig_pgResources_aws_applications_aws_applications = {
  executor: executor,
  name: "aws_applications",
  identifier: "main.polymorphic.aws_applications",
  from: awsApplicationsIdentifier,
  codec: awsApplicationsCodec,
  uniques: aws_applicationsUniques,
  isVirtual: false,
  description: undefined,
  extensions: {
    description: undefined,
    pg: {
      serviceName: "main",
      schemaName: "polymorphic",
      name: "aws_applications"
    },
    isInsertable: true,
    isUpdatable: true,
    isDeletable: true,
    tags: {
      implements: "Application",
      ref: spec_awsApplications.extensions.tags.ref,
      refVia: spec_awsApplications.extensions.tags.refVia
    }
  }
};
const gcp_applicationsUniques = [{
  isPrimary: true,
  attributes: ["id"],
  description: undefined,
  extensions: {
    tags: {
      __proto__: null
    }
  }
}];
const registryConfig_pgResources_gcp_applications_gcp_applications = {
  executor: executor,
  name: "gcp_applications",
  identifier: "main.polymorphic.gcp_applications",
  from: gcpApplicationsIdentifier,
  codec: gcpApplicationsCodec,
  uniques: gcp_applicationsUniques,
  isVirtual: false,
  description: undefined,
  extensions: {
    description: undefined,
    pg: {
      serviceName: "main",
      schemaName: "polymorphic",
      name: "gcp_applications"
    },
    isInsertable: true,
    isUpdatable: true,
    isDeletable: true,
    tags: {
      implements: "Application",
      ref: spec_gcpApplications.extensions.tags.ref,
      refVia: spec_gcpApplications.extensions.tags.refVia
    }
  }
};
const single_table_items_meaning_of_lifeFunctionIdentifer = sql.identifier("polymorphic", "single_table_items_meaning_of_life");
const custom_delete_relational_itemFunctionIdentifer = sql.identifier("polymorphic", "custom_delete_relational_item");
const relational_items_meaning_of_lifeFunctionIdentifer = sql.identifier("polymorphic", "relational_items_meaning_of_life");
const single_table_itemsUniques = [{
  isPrimary: true,
  attributes: ["id"],
  description: undefined,
  extensions: {
    tags: {
      __proto__: null
    }
  }
}];
const registryConfig_pgResources_single_table_items_single_table_items = {
  executor: executor,
  name: "single_table_items",
  identifier: "main.polymorphic.single_table_items",
  from: singleTableItemsIdentifier,
  codec: singleTableItemsCodec,
  uniques: single_table_itemsUniques,
  isVirtual: false,
  description: undefined,
  extensions: {
    description: undefined,
    pg: {
      serviceName: "main",
      schemaName: "polymorphic",
      name: "single_table_items"
    },
    isInsertable: true,
    isUpdatable: true,
    isDeletable: true,
    tags: {
      interface: "mode:single type:type",
      type: spec_singleTableItems.extensions.tags.type,
      ref: spec_singleTableItems.extensions.tags.ref
    }
  }
};
const all_single_tablesFunctionIdentifer = sql.identifier("polymorphic", "all_single_tables");
const get_single_table_topic_by_idFunctionIdentifer = sql.identifier("polymorphic", "get_single_table_topic_by_id");
const relational_itemsUniques = [{
  isPrimary: true,
  attributes: ["id"],
  description: undefined,
  extensions: {
    tags: {
      __proto__: null
    }
  }
}];
const registryConfig_pgResources_relational_items_relational_items = {
  executor: executor,
  name: "relational_items",
  identifier: "main.polymorphic.relational_items",
  from: relationalItemsIdentifier,
  codec: relationalItemsCodec,
  uniques: relational_itemsUniques,
  isVirtual: false,
  description: undefined,
  extensions: {
    description: undefined,
    pg: {
      serviceName: "main",
      schemaName: "polymorphic",
      name: "relational_items"
    },
    isInsertable: true,
    isUpdatable: true,
    isDeletable: true,
    tags: {
      interface: "mode:relational",
      type: spec_relationalItems.extensions.tags.type
    }
  }
};
const registryConfig = {
  pgExecutors: {
    __proto__: null,
    main: executor
  },
  pgCodecs: {
    __proto__: null,
    awsApplicationFirstPartyVulnerabilities: awsApplicationFirstPartyVulnerabilitiesCodec,
    int4: TYPES.int,
    awsApplicationThirdPartyVulnerabilities: awsApplicationThirdPartyVulnerabilitiesCodec,
    gcpApplicationFirstPartyVulnerabilities: gcpApplicationFirstPartyVulnerabilitiesCodec,
    gcpApplicationThirdPartyVulnerabilities: gcpApplicationThirdPartyVulnerabilitiesCodec,
    organizations: organizationsCodec,
    text: TYPES.text,
    people: peopleCodec,
    priorities: prioritiesCodec,
    relationalChecklists: relationalChecklistsCodec,
    relationalItemRelationCompositePks: relationalItemRelationCompositePksCodec,
    relationalTopics: relationalTopicsCodec,
    singleTableItemRelationCompositePks: singleTableItemRelationCompositePksCodec,
    relationalChecklistItems: relationalChecklistItemsCodec,
    relationalDividers: relationalDividersCodec,
    relationalItemRelations: relationalItemRelationsCodec,
    singleTableItemRelations: singleTableItemRelationsCodec,
    logEntries: logEntriesCodec,
    relationalPosts: relationalPostsCodec,
    firstPartyVulnerabilities: firstPartyVulnerabilitiesCodec,
    float8: TYPES.float,
    thirdPartyVulnerabilities: thirdPartyVulnerabilitiesCodec,
    awsApplications: awsApplicationsCodec,
    timestamptz: TYPES.timestamptz,
    gcpApplications: gcpApplicationsCodec,
    bool: TYPES.boolean,
    singleTableItems: singleTableItemsCodec,
    itemType: itemTypeCodec,
    int8: TYPES.bigint,
    relationalItems: relationalItemsCodec,
    varchar: TYPES.varchar,
    bpchar: TYPES.bpchar,
    Application: recordCodec(spec_Application),
    Vulnerability: recordCodec(spec_Vulnerability),
    ZeroImplementation: recordCodec(spec_ZeroImplementation)
  },
  pgResources: {
    __proto__: null,
    aws_application_first_party_vulnerabilities: registryConfig_pgResources_aws_application_first_party_vulnerabilities_aws_application_first_party_vulnerabilities,
    aws_application_third_party_vulnerabilities: registryConfig_pgResources_aws_application_third_party_vulnerabilities_aws_application_third_party_vulnerabilities,
    gcp_application_first_party_vulnerabilities: registryConfig_pgResources_gcp_application_first_party_vulnerabilities_gcp_application_first_party_vulnerabilities,
    gcp_application_third_party_vulnerabilities: registryConfig_pgResources_gcp_application_third_party_vulnerabilities_gcp_application_third_party_vulnerabilities,
    organizations: registryConfig_pgResources_organizations_organizations,
    people: registryConfig_pgResources_people_people,
    priorities: registryConfig_pgResources_priorities_priorities,
    relational_checklists: registryConfig_pgResources_relational_checklists_relational_checklists,
    relational_item_relation_composite_pks: registryConfig_pgResources_relational_item_relation_composite_pks_relational_item_relation_composite_pks,
    relational_topics: registryConfig_pgResources_relational_topics_relational_topics,
    single_table_item_relation_composite_pks: registryConfig_pgResources_single_table_item_relation_composite_pks_single_table_item_relation_composite_pks,
    relational_checklist_items: registryConfig_pgResources_relational_checklist_items_relational_checklist_items,
    relational_dividers: registryConfig_pgResources_relational_dividers_relational_dividers,
    relational_item_relations: registryConfig_pgResources_relational_item_relations_relational_item_relations,
    single_table_item_relations: registryConfig_pgResources_single_table_item_relations_single_table_item_relations,
    log_entries: registryConfig_pgResources_log_entries_log_entries,
    relational_posts: registryConfig_pgResources_relational_posts_relational_posts,
    first_party_vulnerabilities_cvss_score_int: {
      executor,
      name: "first_party_vulnerabilities_cvss_score_int",
      identifier: "main.polymorphic.first_party_vulnerabilities_cvss_score_int(polymorphic.first_party_vulnerabilities)",
      from(...args) {
        return sql`${first_party_vulnerabilities_cvss_score_intFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: "r",
        required: true,
        notNull: false,
        codec: firstPartyVulnerabilitiesCodec
      }],
      isUnique: !false,
      codec: TYPES.int,
      uniques: [],
      isMutation: false,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "polymorphic",
          name: "first_party_vulnerabilities_cvss_score_int"
        },
        tags: {}
      },
      description: undefined
    },
    third_party_vulnerabilities_cvss_score_int: {
      executor,
      name: "third_party_vulnerabilities_cvss_score_int",
      identifier: "main.polymorphic.third_party_vulnerabilities_cvss_score_int(polymorphic.third_party_vulnerabilities)",
      from(...args) {
        return sql`${third_party_vulnerabilities_cvss_score_intFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: "r",
        required: true,
        notNull: false,
        codec: thirdPartyVulnerabilitiesCodec
      }],
      isUnique: !false,
      codec: TYPES.int,
      uniques: [],
      isMutation: false,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "polymorphic",
          name: "third_party_vulnerabilities_cvss_score_int"
        },
        tags: {}
      },
      description: undefined
    },
    first_party_vulnerabilities: registryConfig_pgResources_first_party_vulnerabilities_first_party_vulnerabilities,
    third_party_vulnerabilities: registryConfig_pgResources_third_party_vulnerabilities_third_party_vulnerabilities,
    aws_applications: registryConfig_pgResources_aws_applications_aws_applications,
    gcp_applications: registryConfig_pgResources_gcp_applications_gcp_applications,
    single_table_items_meaning_of_life: {
      executor,
      name: "single_table_items_meaning_of_life",
      identifier: "main.polymorphic.single_table_items_meaning_of_life(polymorphic.single_table_items)",
      from(...args) {
        return sql`${single_table_items_meaning_of_lifeFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: "sti",
        required: true,
        notNull: false,
        codec: singleTableItemsCodec
      }],
      isUnique: !false,
      codec: TYPES.int,
      uniques: [],
      isMutation: false,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "polymorphic",
          name: "single_table_items_meaning_of_life"
        },
        tags: {}
      },
      description: undefined
    },
    custom_delete_relational_item: {
      executor,
      name: "custom_delete_relational_item",
      identifier: "main.polymorphic.custom_delete_relational_item(polymorphic.relational_items)",
      from(...args) {
        return sql`${custom_delete_relational_itemFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: "nodeId",
        required: true,
        notNull: false,
        codec: relationalItemsCodec,
        extensions: {
          variant: "nodeId"
        }
      }],
      isUnique: !false,
      codec: TYPES.boolean,
      uniques: [],
      isMutation: true,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "polymorphic",
          name: "custom_delete_relational_item"
        },
        tags: {
          arg0variant: "nodeId"
        }
      },
      description: undefined
    },
    relational_items_meaning_of_life: {
      executor,
      name: "relational_items_meaning_of_life",
      identifier: "main.polymorphic.relational_items_meaning_of_life(polymorphic.relational_items)",
      from(...args) {
        return sql`${relational_items_meaning_of_lifeFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [{
        name: "ri",
        required: true,
        notNull: false,
        codec: relationalItemsCodec
      }],
      isUnique: !false,
      codec: TYPES.int,
      uniques: [],
      isMutation: false,
      hasImplicitOrder: false,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "polymorphic",
          name: "relational_items_meaning_of_life"
        },
        tags: {}
      },
      description: undefined
    },
    single_table_items: registryConfig_pgResources_single_table_items_single_table_items,
    all_single_tables: PgResource.functionResourceOptions(registryConfig_pgResources_single_table_items_single_table_items, {
      name: "all_single_tables",
      identifier: "main.polymorphic.all_single_tables()",
      from(...args) {
        return sql`${all_single_tablesFunctionIdentifer}(${sqlFromArgDigests(args)})`;
      },
      parameters: [],
      returnsArray: false,
      returnsSetof: true,
      isMutation: false,
      hasImplicitOrder: true,
      extensions: {
        pg: {
          serviceName: "main",
          schemaName: "polymorphic",
          name: "all_single_tables"
        },
        tags: {}
      },
      description: undefined
    }),
    get_single_table_topic_by_id: PgResource.functionResourceOptions(registryConfig_pgResources_single_table_items_single_table_items, {
      name: "get_single_table_topic_by_id",
      identifier: "main.polymorphic.get_single_table_topic_by_id(int4)",
      from(...args) {
        return sql`${get_single_table_topic_by_idFunctionIdentifer}(${sqlFromArgDigests(args)})`;
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
          schemaName: "polymorphic",
          name: "get_single_table_topic_by_id"
        },
        tags: {
          returnType: "SingleTableTopic"
        }
      },
      description: undefined
    }),
    relational_items: registryConfig_pgResources_relational_items_relational_items
  },
  pgRelations: {
    __proto__: null,
    awsApplicationFirstPartyVulnerabilities: {
      __proto__: null,
      firstPartyVulnerabilitiesByMyFirstPartyVulnerabilityId: {
        localCodec: awsApplicationFirstPartyVulnerabilitiesCodec,
        remoteResourceOptions: registryConfig_pgResources_first_party_vulnerabilities_first_party_vulnerabilities,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["first_party_vulnerability_id"],
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
      awsApplicationsByMyAwsApplicationId: {
        localCodec: awsApplicationFirstPartyVulnerabilitiesCodec,
        remoteResourceOptions: registryConfig_pgResources_aws_applications_aws_applications,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["aws_application_id"],
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
    awsApplicationThirdPartyVulnerabilities: {
      __proto__: null,
      thirdPartyVulnerabilitiesByMyThirdPartyVulnerabilityId: {
        localCodec: awsApplicationThirdPartyVulnerabilitiesCodec,
        remoteResourceOptions: registryConfig_pgResources_third_party_vulnerabilities_third_party_vulnerabilities,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["third_party_vulnerability_id"],
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
      awsApplicationsByMyAwsApplicationId: {
        localCodec: awsApplicationThirdPartyVulnerabilitiesCodec,
        remoteResourceOptions: registryConfig_pgResources_aws_applications_aws_applications,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["aws_application_id"],
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
    awsApplications: {
      __proto__: null,
      organizationsByMyOrganizationId: {
        localCodec: awsApplicationsCodec,
        remoteResourceOptions: registryConfig_pgResources_organizations_organizations,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["organization_id"],
        remoteAttributes: ["organization_id"],
        isUnique: true,
        isReferencee: false,
        description: undefined,
        extensions: {
          tags: {
            behavior: []
          }
        }
      },
      peopleByMyPersonId: {
        localCodec: awsApplicationsCodec,
        remoteResourceOptions: registryConfig_pgResources_people_people,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["person_id"],
        remoteAttributes: ["person_id"],
        isUnique: true,
        isReferencee: false,
        description: undefined,
        extensions: {
          tags: {
            behavior: []
          }
        }
      },
      awsApplicationFirstPartyVulnerabilitiesByTheirAwsApplicationId: {
        localCodec: awsApplicationsCodec,
        remoteResourceOptions: registryConfig_pgResources_aws_application_first_party_vulnerabilities_aws_application_first_party_vulnerabilities,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["id"],
        remoteAttributes: ["aws_application_id"],
        isUnique: false,
        isReferencee: true,
        description: undefined,
        extensions: {
          tags: {
            behavior: []
          }
        }
      },
      awsApplicationThirdPartyVulnerabilitiesByTheirAwsApplicationId: {
        localCodec: awsApplicationsCodec,
        remoteResourceOptions: registryConfig_pgResources_aws_application_third_party_vulnerabilities_aws_application_third_party_vulnerabilities,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["id"],
        remoteAttributes: ["aws_application_id"],
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
    firstPartyVulnerabilities: {
      __proto__: null,
      awsApplicationFirstPartyVulnerabilitiesByTheirFirstPartyVulnerabilityId: {
        localCodec: firstPartyVulnerabilitiesCodec,
        remoteResourceOptions: registryConfig_pgResources_aws_application_first_party_vulnerabilities_aws_application_first_party_vulnerabilities,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["id"],
        remoteAttributes: ["first_party_vulnerability_id"],
        isUnique: false,
        isReferencee: true,
        description: undefined,
        extensions: {
          tags: {
            behavior: []
          }
        }
      },
      gcpApplicationFirstPartyVulnerabilitiesByTheirFirstPartyVulnerabilityId: {
        localCodec: firstPartyVulnerabilitiesCodec,
        remoteResourceOptions: registryConfig_pgResources_gcp_application_first_party_vulnerabilities_gcp_application_first_party_vulnerabilities,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["id"],
        remoteAttributes: ["first_party_vulnerability_id"],
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
    gcpApplicationFirstPartyVulnerabilities: {
      __proto__: null,
      firstPartyVulnerabilitiesByMyFirstPartyVulnerabilityId: {
        localCodec: gcpApplicationFirstPartyVulnerabilitiesCodec,
        remoteResourceOptions: registryConfig_pgResources_first_party_vulnerabilities_first_party_vulnerabilities,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["first_party_vulnerability_id"],
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
      gcpApplicationsByMyGcpApplicationId: {
        localCodec: gcpApplicationFirstPartyVulnerabilitiesCodec,
        remoteResourceOptions: registryConfig_pgResources_gcp_applications_gcp_applications,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["gcp_application_id"],
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
    gcpApplicationThirdPartyVulnerabilities: {
      __proto__: null,
      thirdPartyVulnerabilitiesByMyThirdPartyVulnerabilityId: {
        localCodec: gcpApplicationThirdPartyVulnerabilitiesCodec,
        remoteResourceOptions: registryConfig_pgResources_third_party_vulnerabilities_third_party_vulnerabilities,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["third_party_vulnerability_id"],
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
      gcpApplicationsByMyGcpApplicationId: {
        localCodec: gcpApplicationThirdPartyVulnerabilitiesCodec,
        remoteResourceOptions: registryConfig_pgResources_gcp_applications_gcp_applications,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["gcp_application_id"],
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
    gcpApplications: {
      __proto__: null,
      organizationsByMyOrganizationId: {
        localCodec: gcpApplicationsCodec,
        remoteResourceOptions: registryConfig_pgResources_organizations_organizations,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["organization_id"],
        remoteAttributes: ["organization_id"],
        isUnique: true,
        isReferencee: false,
        description: undefined,
        extensions: {
          tags: {
            behavior: []
          }
        }
      },
      peopleByMyPersonId: {
        localCodec: gcpApplicationsCodec,
        remoteResourceOptions: registryConfig_pgResources_people_people,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["person_id"],
        remoteAttributes: ["person_id"],
        isUnique: true,
        isReferencee: false,
        description: undefined,
        extensions: {
          tags: {
            behavior: []
          }
        }
      },
      gcpApplicationFirstPartyVulnerabilitiesByTheirGcpApplicationId: {
        localCodec: gcpApplicationsCodec,
        remoteResourceOptions: registryConfig_pgResources_gcp_application_first_party_vulnerabilities_gcp_application_first_party_vulnerabilities,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["id"],
        remoteAttributes: ["gcp_application_id"],
        isUnique: false,
        isReferencee: true,
        description: undefined,
        extensions: {
          tags: {
            behavior: []
          }
        }
      },
      gcpApplicationThirdPartyVulnerabilitiesByTheirGcpApplicationId: {
        localCodec: gcpApplicationsCodec,
        remoteResourceOptions: registryConfig_pgResources_gcp_application_third_party_vulnerabilities_gcp_application_third_party_vulnerabilities,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["id"],
        remoteAttributes: ["gcp_application_id"],
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
    logEntries: {
      __proto__: null,
      organizationsByMyOrganizationId: {
        localCodec: logEntriesCodec,
        remoteResourceOptions: registryConfig_pgResources_organizations_organizations,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["organization_id"],
        remoteAttributes: ["organization_id"],
        isUnique: true,
        isReferencee: false,
        description: undefined,
        extensions: {
          tags: {
            behavior: []
          }
        }
      },
      peopleByMyPersonId: {
        localCodec: logEntriesCodec,
        remoteResourceOptions: registryConfig_pgResources_people_people,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["person_id"],
        remoteAttributes: ["person_id"],
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
    organizations: {
      __proto__: null,
      logEntriesByTheirOrganizationId: {
        localCodec: organizationsCodec,
        remoteResourceOptions: registryConfig_pgResources_log_entries_log_entries,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["organization_id"],
        remoteAttributes: ["organization_id"],
        isUnique: false,
        isReferencee: true,
        description: undefined,
        extensions: {
          tags: {
            behavior: []
          }
        }
      },
      awsApplicationsByTheirOrganizationId: {
        localCodec: organizationsCodec,
        remoteResourceOptions: registryConfig_pgResources_aws_applications_aws_applications,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["organization_id"],
        remoteAttributes: ["organization_id"],
        isUnique: false,
        isReferencee: true,
        description: undefined,
        extensions: {
          tags: {
            behavior: []
          }
        }
      },
      gcpApplicationsByTheirOrganizationId: {
        localCodec: organizationsCodec,
        remoteResourceOptions: registryConfig_pgResources_gcp_applications_gcp_applications,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["organization_id"],
        remoteAttributes: ["organization_id"],
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
    people: {
      __proto__: null,
      logEntriesByTheirPersonId: {
        localCodec: peopleCodec,
        remoteResourceOptions: registryConfig_pgResources_log_entries_log_entries,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["person_id"],
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
      singleTableItemsByTheirAuthorId: {
        localCodec: peopleCodec,
        remoteResourceOptions: registryConfig_pgResources_single_table_items_single_table_items,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["person_id"],
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
      relationalItemsByTheirAuthorId: {
        localCodec: peopleCodec,
        remoteResourceOptions: registryConfig_pgResources_relational_items_relational_items,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["person_id"],
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
      awsApplicationsByTheirPersonId: {
        localCodec: peopleCodec,
        remoteResourceOptions: registryConfig_pgResources_aws_applications_aws_applications,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["person_id"],
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
      gcpApplicationsByTheirPersonId: {
        localCodec: peopleCodec,
        remoteResourceOptions: registryConfig_pgResources_gcp_applications_gcp_applications,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["person_id"],
        remoteAttributes: ["person_id"],
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
    priorities: {
      __proto__: null,
      singleTableItemsByTheirPriorityId: {
        localCodec: prioritiesCodec,
        remoteResourceOptions: registryConfig_pgResources_single_table_items_single_table_items,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["id"],
        remoteAttributes: ["priority_id"],
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
    relationalChecklistItems: {
      __proto__: null,
      relationalItemsByMyChecklistItemItemId: {
        localCodec: relationalChecklistItemsCodec,
        remoteResourceOptions: registryConfig_pgResources_relational_items_relational_items,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["checklist_item_item_id"],
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
    relationalChecklists: {
      __proto__: null,
      relationalItemsByMyChecklistItemId: {
        localCodec: relationalChecklistsCodec,
        remoteResourceOptions: registryConfig_pgResources_relational_items_relational_items,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["checklist_item_id"],
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
    relationalDividers: {
      __proto__: null,
      relationalItemsByMyDividerItemId: {
        localCodec: relationalDividersCodec,
        remoteResourceOptions: registryConfig_pgResources_relational_items_relational_items,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["divider_item_id"],
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
    relationalItemRelationCompositePks: {
      __proto__: null,
      relationalItemsByMyChildId: {
        localCodec: relationalItemRelationCompositePksCodec,
        remoteResourceOptions: registryConfig_pgResources_relational_items_relational_items,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["child_id"],
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
      relationalItemsByMyParentId: {
        localCodec: relationalItemRelationCompositePksCodec,
        remoteResourceOptions: registryConfig_pgResources_relational_items_relational_items,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["parent_id"],
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
    relationalItemRelations: {
      __proto__: null,
      relationalItemsByMyChildId: {
        localCodec: relationalItemRelationsCodec,
        remoteResourceOptions: registryConfig_pgResources_relational_items_relational_items,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["child_id"],
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
      relationalItemsByMyParentId: {
        localCodec: relationalItemRelationsCodec,
        remoteResourceOptions: registryConfig_pgResources_relational_items_relational_items,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["parent_id"],
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
    relationalItems: {
      __proto__: null,
      peopleByMyAuthorId: {
        localCodec: relationalItemsCodec,
        remoteResourceOptions: registryConfig_pgResources_people_people,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["author_id"],
        remoteAttributes: ["person_id"],
        isUnique: true,
        isReferencee: false,
        description: undefined,
        extensions: {
          tags: {
            behavior: []
          }
        }
      },
      relationalItemsByMyParentId: {
        localCodec: relationalItemsCodec,
        remoteResourceOptions: registryConfig_pgResources_relational_items_relational_items,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["parent_id"],
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
      relationalTopicsByMyRootTopicId: {
        localCodec: relationalItemsCodec,
        remoteResourceOptions: registryConfig_pgResources_relational_topics_relational_topics,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["root_topic_id"],
        remoteAttributes: ["topic_item_id"],
        isUnique: true,
        isReferencee: false,
        description: undefined,
        extensions: {
          tags: {
            behavior: []
          }
        }
      },
      relationalItemsByTheirParentId: {
        localCodec: relationalItemsCodec,
        remoteResourceOptions: registryConfig_pgResources_relational_items_relational_items,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["id"],
        remoteAttributes: ["parent_id"],
        isUnique: false,
        isReferencee: true,
        description: undefined,
        extensions: {
          tags: {
            behavior: []
          }
        }
      },
      relationalTopicsByTheirTopicItemId: {
        localCodec: relationalItemsCodec,
        remoteResourceOptions: registryConfig_pgResources_relational_topics_relational_topics,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["id"],
        remoteAttributes: ["topic_item_id"],
        isUnique: true,
        isReferencee: true,
        description: undefined,
        extensions: {
          tags: {
            behavior: []
          }
        }
      },
      relationalPostsByTheirPostItemId: {
        localCodec: relationalItemsCodec,
        remoteResourceOptions: registryConfig_pgResources_relational_posts_relational_posts,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["id"],
        remoteAttributes: ["post_item_id"],
        isUnique: true,
        isReferencee: true,
        description: undefined,
        extensions: {
          tags: {
            behavior: []
          }
        }
      },
      relationalDividersByTheirDividerItemId: {
        localCodec: relationalItemsCodec,
        remoteResourceOptions: registryConfig_pgResources_relational_dividers_relational_dividers,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["id"],
        remoteAttributes: ["divider_item_id"],
        isUnique: true,
        isReferencee: true,
        description: undefined,
        extensions: {
          tags: {
            behavior: []
          }
        }
      },
      relationalChecklistsByTheirChecklistItemId: {
        localCodec: relationalItemsCodec,
        remoteResourceOptions: registryConfig_pgResources_relational_checklists_relational_checklists,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["id"],
        remoteAttributes: ["checklist_item_id"],
        isUnique: true,
        isReferencee: true,
        description: undefined,
        extensions: {
          tags: {
            behavior: []
          }
        }
      },
      relationalChecklistItemsByTheirChecklistItemItemId: {
        localCodec: relationalItemsCodec,
        remoteResourceOptions: registryConfig_pgResources_relational_checklist_items_relational_checklist_items,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["id"],
        remoteAttributes: ["checklist_item_item_id"],
        isUnique: true,
        isReferencee: true,
        description: undefined,
        extensions: {
          tags: {
            behavior: []
          }
        }
      },
      relationalItemRelationsByTheirChildId: {
        localCodec: relationalItemsCodec,
        remoteResourceOptions: registryConfig_pgResources_relational_item_relations_relational_item_relations,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["id"],
        remoteAttributes: ["child_id"],
        isUnique: false,
        isReferencee: true,
        description: undefined,
        extensions: {
          tags: {
            behavior: []
          }
        }
      },
      relationalItemRelationsByTheirParentId: {
        localCodec: relationalItemsCodec,
        remoteResourceOptions: registryConfig_pgResources_relational_item_relations_relational_item_relations,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["id"],
        remoteAttributes: ["parent_id"],
        isUnique: false,
        isReferencee: true,
        description: undefined,
        extensions: {
          tags: {
            behavior: []
          }
        }
      },
      relationalItemRelationCompositePksByTheirChildId: {
        localCodec: relationalItemsCodec,
        remoteResourceOptions: registryConfig_pgResources_relational_item_relation_composite_pks_relational_item_relation_composite_pks,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["id"],
        remoteAttributes: ["child_id"],
        isUnique: false,
        isReferencee: true,
        description: undefined,
        extensions: {
          tags: {
            behavior: []
          }
        }
      },
      relationalItemRelationCompositePksByTheirParentId: {
        localCodec: relationalItemsCodec,
        remoteResourceOptions: registryConfig_pgResources_relational_item_relation_composite_pks_relational_item_relation_composite_pks,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["id"],
        remoteAttributes: ["parent_id"],
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
    relationalPosts: {
      __proto__: null,
      relationalItemsByMyPostItemId: {
        localCodec: relationalPostsCodec,
        remoteResourceOptions: registryConfig_pgResources_relational_items_relational_items,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["post_item_id"],
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
    relationalTopics: {
      __proto__: null,
      relationalItemsByMyTopicItemId: {
        localCodec: relationalTopicsCodec,
        remoteResourceOptions: registryConfig_pgResources_relational_items_relational_items,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["topic_item_id"],
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
      relationalItemsByTheirRootTopicId: {
        localCodec: relationalTopicsCodec,
        remoteResourceOptions: registryConfig_pgResources_relational_items_relational_items,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["topic_item_id"],
        remoteAttributes: ["root_topic_id"],
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
    singleTableItemRelationCompositePks: {
      __proto__: null,
      singleTableItemsByMyChildId: {
        localCodec: singleTableItemRelationCompositePksCodec,
        remoteResourceOptions: registryConfig_pgResources_single_table_items_single_table_items,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["child_id"],
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
      singleTableItemsByMyParentId: {
        localCodec: singleTableItemRelationCompositePksCodec,
        remoteResourceOptions: registryConfig_pgResources_single_table_items_single_table_items,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["parent_id"],
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
    singleTableItemRelations: {
      __proto__: null,
      singleTableItemsByMyChildId: {
        localCodec: singleTableItemRelationsCodec,
        remoteResourceOptions: registryConfig_pgResources_single_table_items_single_table_items,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["child_id"],
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
      singleTableItemsByMyParentId: {
        localCodec: singleTableItemRelationsCodec,
        remoteResourceOptions: registryConfig_pgResources_single_table_items_single_table_items,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["parent_id"],
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
    singleTableItems: {
      __proto__: null,
      peopleByMyAuthorId: {
        localCodec: singleTableItemsCodec,
        remoteResourceOptions: registryConfig_pgResources_people_people,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["author_id"],
        remoteAttributes: ["person_id"],
        isUnique: true,
        isReferencee: false,
        description: undefined,
        extensions: {
          tags: {
            behavior: []
          }
        }
      },
      singleTableItemsByMyParentId: {
        localCodec: singleTableItemsCodec,
        remoteResourceOptions: registryConfig_pgResources_single_table_items_single_table_items,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["parent_id"],
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
      prioritiesByMyPriorityId: {
        localCodec: singleTableItemsCodec,
        remoteResourceOptions: registryConfig_pgResources_priorities_priorities,
        localCodecPolymorphicTypes: ["POST", "CHECKLIST_ITEM"],
        localAttributes: ["priority_id"],
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
      singleTableItemsByMyRootTopicId: {
        localCodec: singleTableItemsCodec,
        remoteResourceOptions: registryConfig_pgResources_single_table_items_single_table_items,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["root_topic_id"],
        remoteAttributes: ["id"],
        isUnique: true,
        isReferencee: false,
        description: undefined,
        extensions: {
          tags: {
            behavior: ["-*"]
          }
        }
      },
      singleTableItemsByTheirParentId: {
        localCodec: singleTableItemsCodec,
        remoteResourceOptions: registryConfig_pgResources_single_table_items_single_table_items,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["id"],
        remoteAttributes: ["parent_id"],
        isUnique: false,
        isReferencee: true,
        description: undefined,
        extensions: {
          tags: {
            behavior: []
          }
        }
      },
      singleTableItemsByTheirRootTopicId: {
        localCodec: singleTableItemsCodec,
        remoteResourceOptions: registryConfig_pgResources_single_table_items_single_table_items,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["id"],
        remoteAttributes: ["root_topic_id"],
        isUnique: false,
        isReferencee: true,
        description: undefined,
        extensions: {
          tags: {
            behavior: ["-*"]
          }
        }
      },
      singleTableItemRelationsByTheirChildId: {
        localCodec: singleTableItemsCodec,
        remoteResourceOptions: registryConfig_pgResources_single_table_item_relations_single_table_item_relations,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["id"],
        remoteAttributes: ["child_id"],
        isUnique: false,
        isReferencee: true,
        description: undefined,
        extensions: {
          tags: {
            behavior: []
          }
        }
      },
      singleTableItemRelationsByTheirParentId: {
        localCodec: singleTableItemsCodec,
        remoteResourceOptions: registryConfig_pgResources_single_table_item_relations_single_table_item_relations,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["id"],
        remoteAttributes: ["parent_id"],
        isUnique: false,
        isReferencee: true,
        description: undefined,
        extensions: {
          tags: {
            behavior: []
          }
        }
      },
      singleTableItemRelationCompositePksByTheirChildId: {
        localCodec: singleTableItemsCodec,
        remoteResourceOptions: registryConfig_pgResources_single_table_item_relation_composite_pks_single_table_item_relation_composite_pks,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["id"],
        remoteAttributes: ["child_id"],
        isUnique: false,
        isReferencee: true,
        description: undefined,
        extensions: {
          tags: {
            behavior: []
          }
        }
      },
      singleTableItemRelationCompositePksByTheirParentId: {
        localCodec: singleTableItemsCodec,
        remoteResourceOptions: registryConfig_pgResources_single_table_item_relation_composite_pks_single_table_item_relation_composite_pks,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["id"],
        remoteAttributes: ["parent_id"],
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
    thirdPartyVulnerabilities: {
      __proto__: null,
      awsApplicationThirdPartyVulnerabilitiesByTheirThirdPartyVulnerabilityId: {
        localCodec: thirdPartyVulnerabilitiesCodec,
        remoteResourceOptions: registryConfig_pgResources_aws_application_third_party_vulnerabilities_aws_application_third_party_vulnerabilities,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["id"],
        remoteAttributes: ["third_party_vulnerability_id"],
        isUnique: false,
        isReferencee: true,
        description: undefined,
        extensions: {
          tags: {
            behavior: []
          }
        }
      },
      gcpApplicationThirdPartyVulnerabilitiesByTheirThirdPartyVulnerabilityId: {
        localCodec: thirdPartyVulnerabilitiesCodec,
        remoteResourceOptions: registryConfig_pgResources_gcp_application_third_party_vulnerabilities_gcp_application_third_party_vulnerabilities,
        localCodecPolymorphicTypes: undefined,
        localAttributes: ["id"],
        remoteAttributes: ["third_party_vulnerability_id"],
        isUnique: false,
        isReferencee: true,
        description: undefined,
        extensions: {
          tags: {
            behavior: []
          }
        }
      }
    }
  }
};
const registry = makeRegistry(registryConfig);
const resource_single_table_itemsPgResource = registry.pgResources["single_table_items"];
const handler = {
  typeName: "SingleTableTopic",
  codec: handler_codec_base64JSON,
  deprecationReason: undefined,
  plan($record) {
    return list([constant("SingleTableTopic", false), $record.get("id")]);
  },
  getSpec($list) {
    return {
      id: inhibitOnNull(access($list, [1]))
    };
  },
  getIdentifiers(value) {
    return value.slice(1);
  },
  get(spec) {
    return resource_single_table_itemsPgResource.get(spec);
  },
  match(obj) {
    return obj[0] === "SingleTableTopic";
  }
};
const nodeIdCodecs = {
  __proto__: null,
  raw: {
    name: "raw",
    encode: Object.assign(function rawEncode(value) {
      return typeof value === "string" ? value : null;
    }, {
      isSyncAndSafe: true
    }),
    decode: Object.assign(function rawDecode(value) {
      return typeof value === "string" ? value : null;
    }, {
      isSyncAndSafe: true
    })
  },
  base64JSON: handler_codec_base64JSON,
  pipeString: {
    name: "pipeString",
    encode: Object.assign(function pipeStringEncode(value) {
      return Array.isArray(value) ? value.join("|") : null;
    }, {
      isSyncAndSafe: true
    }),
    decode: Object.assign(function pipeStringDecode(value) {
      return typeof value === "string" ? value.split("|") : null;
    }, {
      isSyncAndSafe: true
    })
  }
};
function hasRecord($row) {
  return "record" in $row && typeof $row.record === "function";
}
const argDetailsSimple_single_table_items_meaning_of_life = [];
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
const makeArgs_single_table_items_meaning_of_life = (args, path = []) => argDetailsSimple_single_table_items_meaning_of_life.map(details => makeArg(path, args, details));
const resource_single_table_items_meaning_of_lifePgResource = registry.pgResources["single_table_items_meaning_of_life"];
const otherSource_peoplePgResource = registry.pgResources["people"];
function qbWhereBuilder(qb) {
  return qb.whereBuilder();
}
const otherSource_single_table_item_relationsPgResource = registry.pgResources["single_table_item_relations"];
const otherSource_single_table_item_relation_composite_pksPgResource = registry.pgResources["single_table_item_relation_composite_pks"];
function BigIntSerialize(value) {
  return "" + value;
}
const handler2 = {
  typeName: "Person",
  codec: handler_codec_base64JSON,
  deprecationReason: undefined,
  plan($record) {
    return list([constant("people", false), $record.get("person_id")]);
  },
  getSpec($list) {
    return {
      person_id: inhibitOnNull(access($list, [1]))
    };
  },
  getIdentifiers(value) {
    return value.slice(1);
  },
  get(spec) {
    return otherSource_peoplePgResource.get(spec);
  },
  match(obj) {
    return obj[0] === "people";
  }
};
const otherSource_log_entriesPgResource = registry.pgResources["log_entries"];
const otherSource_relational_itemsPgResource = registry.pgResources["relational_items"];
const otherSource_aws_applicationsPgResource = registry.pgResources["aws_applications"];
const otherSource_gcp_applicationsPgResource = registry.pgResources["gcp_applications"];
const members = [{
  resource: otherSource_aws_applicationsPgResource,
  typeName: "AwsApplication",
  path: []
}, {
  resource: otherSource_gcp_applicationsPgResource,
  typeName: "GcpApplication",
  path: []
}];
const paths = [{
  resource: otherSource_aws_applicationsPgResource,
  hasReferencee: true,
  isUnique: false,
  layers: [{
    relationName: "awsApplicationsByTheirPersonId",
    localAttributes: registryConfig.pgRelations.people.awsApplicationsByTheirPersonId.localAttributes,
    remoteAttributes: registryConfig.pgRelations.people.awsApplicationsByTheirPersonId.remoteAttributes,
    resource: otherSource_aws_applicationsPgResource,
    isUnique: false
  }]
}, {
  resource: otherSource_gcp_applicationsPgResource,
  hasReferencee: true,
  isUnique: false,
  layers: [{
    relationName: "gcpApplicationsByTheirPersonId",
    localAttributes: registryConfig.pgRelations.people.gcpApplicationsByTheirPersonId.localAttributes,
    remoteAttributes: registryConfig.pgRelations.people.gcpApplicationsByTheirPersonId.remoteAttributes,
    resource: otherSource_gcp_applicationsPgResource,
    isUnique: false
  }]
}];
const resourceByTypeName = {
  __proto__: null,
  AwsApplication: otherSource_aws_applicationsPgResource,
  GcpApplication: otherSource_gcp_applicationsPgResource
};
function limitToTypes(ltt) {
  if (ltt) {
    return qb => qb.limitToTypes(ltt);
  } else {
    return () => {};
  }
}
const handler3 = {
  typeName: "LogEntry",
  codec: handler_codec_base64JSON,
  deprecationReason: undefined,
  plan($record) {
    return list([constant("log_entries", false), $record.get("id")]);
  },
  getSpec($list) {
    return {
      id: inhibitOnNull(access($list, [1]))
    };
  },
  getIdentifiers(value) {
    return value.slice(1);
  },
  get(spec) {
    return otherSource_log_entriesPgResource.get(spec);
  },
  match(obj) {
    return obj[0] === "log_entries";
  }
};
const otherSource_organizationsPgResource = registry.pgResources["organizations"];
const attributes = {};
const members2 = [{
  resource: otherSource_peoplePgResource,
  typeName: "Person",
  path: []
}, {
  resource: otherSource_organizationsPgResource,
  typeName: "Organization",
  path: []
}];
const paths2 = [{
  resource: otherSource_peoplePgResource,
  hasReferencee: false,
  isUnique: true,
  layers: [{
    relationName: "peopleByMyPersonId",
    localAttributes: registryConfig.pgRelations.logEntries.peopleByMyPersonId.localAttributes,
    remoteAttributes: registryConfig.pgRelations.logEntries.peopleByMyPersonId.remoteAttributes,
    resource: otherSource_peoplePgResource,
    isUnique: true
  }]
}, {
  resource: otherSource_organizationsPgResource,
  hasReferencee: false,
  isUnique: true,
  layers: [{
    relationName: "organizationsByMyOrganizationId",
    localAttributes: registryConfig.pgRelations.logEntries.organizationsByMyOrganizationId.localAttributes,
    remoteAttributes: registryConfig.pgRelations.logEntries.organizationsByMyOrganizationId.remoteAttributes,
    resource: otherSource_organizationsPgResource,
    isUnique: true
  }]
}];
const resourceByTypeName2 = {
  __proto__: null,
  Person: otherSource_peoplePgResource,
  Organization: otherSource_organizationsPgResource
};
const handler4 = {
  typeName: "Organization",
  codec: handler_codec_base64JSON,
  deprecationReason: undefined,
  plan($record) {
    return list([constant("organizations", false), $record.get("organization_id")]);
  },
  getSpec($list) {
    return {
      organization_id: inhibitOnNull(access($list, [1]))
    };
  },
  getIdentifiers(value) {
    return value.slice(1);
  },
  get(spec) {
    return otherSource_organizationsPgResource.get(spec);
  },
  match(obj) {
    return obj[0] === "organizations";
  }
};
const handler5 = {
  typeName: "AwsApplication",
  codec: handler_codec_base64JSON,
  deprecationReason: undefined,
  plan($record) {
    return list([constant("aws_applications", false), $record.get("id")]);
  },
  getSpec($list) {
    return {
      id: inhibitOnNull(access($list, [1]))
    };
  },
  getIdentifiers(value) {
    return value.slice(1);
  },
  get(spec) {
    return otherSource_aws_applicationsPgResource.get(spec);
  },
  match(obj) {
    return obj[0] === "aws_applications";
  }
};
const members_0_resource_aws_application_first_party_vulnerabilitiesPgResource = registry.pgResources["aws_application_first_party_vulnerabilities"];
const members_1_resource_aws_application_third_party_vulnerabilitiesPgResource = registry.pgResources["aws_application_third_party_vulnerabilities"];
const members3 = [{
  resource: members_0_resource_aws_application_first_party_vulnerabilitiesPgResource,
  typeName: "FirstPartyVulnerability",
  path: [{
    relationName: "firstPartyVulnerabilitiesByMyFirstPartyVulnerabilityId"
  }]
}, {
  resource: members_1_resource_aws_application_third_party_vulnerabilitiesPgResource,
  typeName: "ThirdPartyVulnerability",
  path: [{
    relationName: "thirdPartyVulnerabilitiesByMyThirdPartyVulnerabilityId"
  }]
}];
const paths_0_resource_first_party_vulnerabilitiesPgResource = registry.pgResources["first_party_vulnerabilities"];
const paths_1_resource_third_party_vulnerabilitiesPgResource = registry.pgResources["third_party_vulnerabilities"];
const paths3 = [{
  resource: paths_0_resource_first_party_vulnerabilitiesPgResource,
  hasReferencee: true,
  isUnique: false,
  layers: [{
    relationName: "awsApplicationFirstPartyVulnerabilitiesByTheirAwsApplicationId",
    localAttributes: registryConfig.pgRelations.awsApplications.awsApplicationFirstPartyVulnerabilitiesByTheirAwsApplicationId.localAttributes,
    remoteAttributes: registryConfig.pgRelations.awsApplications.awsApplicationFirstPartyVulnerabilitiesByTheirAwsApplicationId.remoteAttributes,
    resource: members_0_resource_aws_application_first_party_vulnerabilitiesPgResource,
    isUnique: false
  }, {
    relationName: "firstPartyVulnerabilitiesByMyFirstPartyVulnerabilityId",
    localAttributes: registryConfig.pgRelations.awsApplicationFirstPartyVulnerabilities.firstPartyVulnerabilitiesByMyFirstPartyVulnerabilityId.localAttributes,
    remoteAttributes: registryConfig.pgRelations.awsApplicationFirstPartyVulnerabilities.firstPartyVulnerabilitiesByMyFirstPartyVulnerabilityId.remoteAttributes,
    resource: paths_0_resource_first_party_vulnerabilitiesPgResource,
    isUnique: true
  }]
}, {
  resource: paths_1_resource_third_party_vulnerabilitiesPgResource,
  hasReferencee: true,
  isUnique: false,
  layers: [{
    relationName: "awsApplicationThirdPartyVulnerabilitiesByTheirAwsApplicationId",
    localAttributes: registryConfig.pgRelations.awsApplications.awsApplicationThirdPartyVulnerabilitiesByTheirAwsApplicationId.localAttributes,
    remoteAttributes: registryConfig.pgRelations.awsApplications.awsApplicationThirdPartyVulnerabilitiesByTheirAwsApplicationId.remoteAttributes,
    resource: members_1_resource_aws_application_third_party_vulnerabilitiesPgResource,
    isUnique: false
  }, {
    relationName: "thirdPartyVulnerabilitiesByMyThirdPartyVulnerabilityId",
    localAttributes: registryConfig.pgRelations.awsApplicationThirdPartyVulnerabilities.thirdPartyVulnerabilitiesByMyThirdPartyVulnerabilityId.localAttributes,
    remoteAttributes: registryConfig.pgRelations.awsApplicationThirdPartyVulnerabilities.thirdPartyVulnerabilitiesByMyThirdPartyVulnerabilityId.remoteAttributes,
    resource: paths_1_resource_third_party_vulnerabilitiesPgResource,
    isUnique: true
  }]
}];
const resourceByTypeName3 = {
  __proto__: null,
  FirstPartyVulnerability: paths_0_resource_first_party_vulnerabilitiesPgResource,
  ThirdPartyVulnerability: paths_1_resource_third_party_vulnerabilitiesPgResource
};
const attributes2 = {};
const members4 = [{
  resource: otherSource_peoplePgResource,
  typeName: "Person",
  path: []
}, {
  resource: otherSource_organizationsPgResource,
  typeName: "Organization",
  path: []
}];
const paths4 = [{
  resource: otherSource_peoplePgResource,
  hasReferencee: false,
  isUnique: true,
  layers: [{
    relationName: "peopleByMyPersonId",
    localAttributes: registryConfig.pgRelations.awsApplications.peopleByMyPersonId.localAttributes,
    remoteAttributes: registryConfig.pgRelations.awsApplications.peopleByMyPersonId.remoteAttributes,
    resource: otherSource_peoplePgResource,
    isUnique: true
  }]
}, {
  resource: otherSource_organizationsPgResource,
  hasReferencee: false,
  isUnique: true,
  layers: [{
    relationName: "organizationsByMyOrganizationId",
    localAttributes: registryConfig.pgRelations.awsApplications.organizationsByMyOrganizationId.localAttributes,
    remoteAttributes: registryConfig.pgRelations.awsApplications.organizationsByMyOrganizationId.remoteAttributes,
    resource: otherSource_organizationsPgResource,
    isUnique: true
  }]
}];
const resourceByTypeName4 = {
  __proto__: null,
  Person: otherSource_peoplePgResource,
  Organization: otherSource_organizationsPgResource
};
const handler6 = {
  typeName: "GcpApplication",
  codec: handler_codec_base64JSON,
  deprecationReason: undefined,
  plan($record) {
    return list([constant("gcp_applications", false), $record.get("id")]);
  },
  getSpec($list) {
    return {
      id: inhibitOnNull(access($list, [1]))
    };
  },
  getIdentifiers(value) {
    return value.slice(1);
  },
  get(spec) {
    return otherSource_gcp_applicationsPgResource.get(spec);
  },
  match(obj) {
    return obj[0] === "gcp_applications";
  }
};
const members_0_resource_gcp_application_first_party_vulnerabilitiesPgResource = registry.pgResources["gcp_application_first_party_vulnerabilities"];
const members_1_resource_gcp_application_third_party_vulnerabilitiesPgResource = registry.pgResources["gcp_application_third_party_vulnerabilities"];
const members5 = [{
  resource: members_0_resource_gcp_application_first_party_vulnerabilitiesPgResource,
  typeName: "FirstPartyVulnerability",
  path: [{
    relationName: "firstPartyVulnerabilitiesByMyFirstPartyVulnerabilityId"
  }]
}, {
  resource: members_1_resource_gcp_application_third_party_vulnerabilitiesPgResource,
  typeName: "ThirdPartyVulnerability",
  path: [{
    relationName: "thirdPartyVulnerabilitiesByMyThirdPartyVulnerabilityId"
  }]
}];
const paths5 = [{
  resource: paths_0_resource_first_party_vulnerabilitiesPgResource,
  hasReferencee: true,
  isUnique: false,
  layers: [{
    relationName: "gcpApplicationFirstPartyVulnerabilitiesByTheirGcpApplicationId",
    localAttributes: registryConfig.pgRelations.gcpApplications.gcpApplicationFirstPartyVulnerabilitiesByTheirGcpApplicationId.localAttributes,
    remoteAttributes: registryConfig.pgRelations.gcpApplications.gcpApplicationFirstPartyVulnerabilitiesByTheirGcpApplicationId.remoteAttributes,
    resource: members_0_resource_gcp_application_first_party_vulnerabilitiesPgResource,
    isUnique: false
  }, {
    relationName: "firstPartyVulnerabilitiesByMyFirstPartyVulnerabilityId",
    localAttributes: registryConfig.pgRelations.gcpApplicationFirstPartyVulnerabilities.firstPartyVulnerabilitiesByMyFirstPartyVulnerabilityId.localAttributes,
    remoteAttributes: registryConfig.pgRelations.gcpApplicationFirstPartyVulnerabilities.firstPartyVulnerabilitiesByMyFirstPartyVulnerabilityId.remoteAttributes,
    resource: paths_0_resource_first_party_vulnerabilitiesPgResource,
    isUnique: true
  }]
}, {
  resource: paths_1_resource_third_party_vulnerabilitiesPgResource,
  hasReferencee: true,
  isUnique: false,
  layers: [{
    relationName: "gcpApplicationThirdPartyVulnerabilitiesByTheirGcpApplicationId",
    localAttributes: registryConfig.pgRelations.gcpApplications.gcpApplicationThirdPartyVulnerabilitiesByTheirGcpApplicationId.localAttributes,
    remoteAttributes: registryConfig.pgRelations.gcpApplications.gcpApplicationThirdPartyVulnerabilitiesByTheirGcpApplicationId.remoteAttributes,
    resource: members_1_resource_gcp_application_third_party_vulnerabilitiesPgResource,
    isUnique: false
  }, {
    relationName: "thirdPartyVulnerabilitiesByMyThirdPartyVulnerabilityId",
    localAttributes: registryConfig.pgRelations.gcpApplicationThirdPartyVulnerabilities.thirdPartyVulnerabilitiesByMyThirdPartyVulnerabilityId.localAttributes,
    remoteAttributes: registryConfig.pgRelations.gcpApplicationThirdPartyVulnerabilities.thirdPartyVulnerabilitiesByMyThirdPartyVulnerabilityId.remoteAttributes,
    resource: paths_1_resource_third_party_vulnerabilitiesPgResource,
    isUnique: true
  }]
}];
const resourceByTypeName5 = {
  __proto__: null,
  FirstPartyVulnerability: paths_0_resource_first_party_vulnerabilitiesPgResource,
  ThirdPartyVulnerability: paths_1_resource_third_party_vulnerabilitiesPgResource
};
const attributes3 = {};
const members6 = [{
  resource: otherSource_peoplePgResource,
  typeName: "Person",
  path: []
}, {
  resource: otherSource_organizationsPgResource,
  typeName: "Organization",
  path: []
}];
const paths6 = [{
  resource: otherSource_peoplePgResource,
  hasReferencee: false,
  isUnique: true,
  layers: [{
    relationName: "peopleByMyPersonId",
    localAttributes: registryConfig.pgRelations.gcpApplications.peopleByMyPersonId.localAttributes,
    remoteAttributes: registryConfig.pgRelations.gcpApplications.peopleByMyPersonId.remoteAttributes,
    resource: otherSource_peoplePgResource,
    isUnique: true
  }]
}, {
  resource: otherSource_organizationsPgResource,
  hasReferencee: false,
  isUnique: true,
  layers: [{
    relationName: "organizationsByMyOrganizationId",
    localAttributes: registryConfig.pgRelations.gcpApplications.organizationsByMyOrganizationId.localAttributes,
    remoteAttributes: registryConfig.pgRelations.gcpApplications.organizationsByMyOrganizationId.remoteAttributes,
    resource: otherSource_organizationsPgResource,
    isUnique: true
  }]
}];
const resourceByTypeName6 = {
  __proto__: null,
  Person: otherSource_peoplePgResource,
  Organization: otherSource_organizationsPgResource
};
const pgResource_relational_item_relationsPgResource = registry.pgResources["relational_item_relations"];
const handler7 = {
  typeName: "RelationalItemRelation",
  codec: handler_codec_base64JSON,
  deprecationReason: undefined,
  plan($record) {
    return list([constant("relational_item_relations", false), $record.get("id")]);
  },
  getSpec($list) {
    return {
      id: inhibitOnNull(access($list, [1]))
    };
  },
  getIdentifiers(value) {
    return value.slice(1);
  },
  get(spec) {
    return pgResource_relational_item_relationsPgResource.get(spec);
  },
  match(obj) {
    return obj[0] === "relational_item_relations";
  }
};
const pgResource_relational_item_relation_composite_pksPgResource = registry.pgResources["relational_item_relation_composite_pks"];
const handler8 = {
  typeName: "RelationalItemRelationCompositePk",
  codec: handler_codec_base64JSON,
  deprecationReason: undefined,
  plan($record) {
    return list([constant("relational_item_relation_composite_pks", false), $record.get("parent_id"), $record.get("child_id")]);
  },
  getSpec($list) {
    return {
      parent_id: inhibitOnNull(access($list, [1])),
      child_id: inhibitOnNull(access($list, [2]))
    };
  },
  getIdentifiers(value) {
    return value.slice(1);
  },
  get(spec) {
    return pgResource_relational_item_relation_composite_pksPgResource.get(spec);
  },
  match(obj) {
    return obj[0] === "relational_item_relation_composite_pks";
  }
};
const handler9 = {
  typeName: "SingleTableItemRelation",
  codec: handler_codec_base64JSON,
  deprecationReason: undefined,
  plan($record) {
    return list([constant("single_table_item_relations", false), $record.get("id")]);
  },
  getSpec($list) {
    return {
      id: inhibitOnNull(access($list, [1]))
    };
  },
  getIdentifiers(value) {
    return value.slice(1);
  },
  get(spec) {
    return otherSource_single_table_item_relationsPgResource.get(spec);
  },
  match(obj) {
    return obj[0] === "single_table_item_relations";
  }
};
const handler10 = {
  typeName: "SingleTableItemRelationCompositePk",
  codec: handler_codec_base64JSON,
  deprecationReason: undefined,
  plan($record) {
    return list([constant("single_table_item_relation_composite_pks", false), $record.get("parent_id"), $record.get("child_id")]);
  },
  getSpec($list) {
    return {
      parent_id: inhibitOnNull(access($list, [1])),
      child_id: inhibitOnNull(access($list, [2]))
    };
  },
  getIdentifiers(value) {
    return value.slice(1);
  },
  get(spec) {
    return otherSource_single_table_item_relation_composite_pksPgResource.get(spec);
  },
  match(obj) {
    return obj[0] === "single_table_item_relation_composite_pks";
  }
};
const handler11 = {
  typeName: "SingleTablePost",
  codec: handler_codec_base64JSON,
  deprecationReason: undefined,
  plan($record) {
    return list([constant("SingleTablePost", false), $record.get("id")]);
  },
  getSpec($list) {
    return {
      id: inhibitOnNull(access($list, [1]))
    };
  },
  getIdentifiers(value) {
    return value.slice(1);
  },
  get(spec) {
    return resource_single_table_itemsPgResource.get(spec);
  },
  match(obj) {
    return obj[0] === "SingleTablePost";
  }
};
const argDetailsSimple_single_table_items_meaning_of_life2 = [];
const makeArgs_single_table_items_meaning_of_life2 = (args, path = []) => argDetailsSimple_single_table_items_meaning_of_life2.map(details => makeArg(path, args, details));
const otherSource_prioritiesPgResource = registry.pgResources["priorities"];
const handler12 = {
  typeName: "Priority",
  codec: handler_codec_base64JSON,
  deprecationReason: undefined,
  plan($record) {
    return list([constant("priorities", false), $record.get("id")]);
  },
  getSpec($list) {
    return {
      id: inhibitOnNull(access($list, [1]))
    };
  },
  getIdentifiers(value) {
    return value.slice(1);
  },
  get(spec) {
    return otherSource_prioritiesPgResource.get(spec);
  },
  match(obj) {
    return obj[0] === "priorities";
  }
};
const handler13 = {
  typeName: "SingleTableDivider",
  codec: handler_codec_base64JSON,
  deprecationReason: undefined,
  plan($record) {
    return list([constant("SingleTableDivider", false), $record.get("id")]);
  },
  getSpec($list) {
    return {
      id: inhibitOnNull(access($list, [1]))
    };
  },
  getIdentifiers(value) {
    return value.slice(1);
  },
  get(spec) {
    return resource_single_table_itemsPgResource.get(spec);
  },
  match(obj) {
    return obj[0] === "SingleTableDivider";
  }
};
const argDetailsSimple_single_table_items_meaning_of_life3 = [];
const makeArgs_single_table_items_meaning_of_life3 = (args, path = []) => argDetailsSimple_single_table_items_meaning_of_life3.map(details => makeArg(path, args, details));
const handler14 = {
  typeName: "SingleTableChecklist",
  codec: handler_codec_base64JSON,
  deprecationReason: undefined,
  plan($record) {
    return list([constant("SingleTableChecklist", false), $record.get("id")]);
  },
  getSpec($list) {
    return {
      id: inhibitOnNull(access($list, [1]))
    };
  },
  getIdentifiers(value) {
    return value.slice(1);
  },
  get(spec) {
    return resource_single_table_itemsPgResource.get(spec);
  },
  match(obj) {
    return obj[0] === "SingleTableChecklist";
  }
};
const argDetailsSimple_single_table_items_meaning_of_life4 = [];
const makeArgs_single_table_items_meaning_of_life4 = (args, path = []) => argDetailsSimple_single_table_items_meaning_of_life4.map(details => makeArg(path, args, details));
const handler15 = {
  typeName: "SingleTableChecklistItem",
  codec: handler_codec_base64JSON,
  deprecationReason: undefined,
  plan($record) {
    return list([constant("SingleTableChecklistItem", false), $record.get("id")]);
  },
  getSpec($list) {
    return {
      id: inhibitOnNull(access($list, [1]))
    };
  },
  getIdentifiers(value) {
    return value.slice(1);
  },
  get(spec) {
    return resource_single_table_itemsPgResource.get(spec);
  },
  match(obj) {
    return obj[0] === "SingleTableChecklistItem";
  }
};
const argDetailsSimple_single_table_items_meaning_of_life5 = [];
const makeArgs_single_table_items_meaning_of_life5 = (args, path = []) => argDetailsSimple_single_table_items_meaning_of_life5.map(details => makeArg(path, args, details));
const pgResource_relational_topicsPgResource = registry.pgResources["relational_topics"];
const handler16 = {
  typeName: "RelationalTopic",
  codec: handler_codec_base64JSON,
  deprecationReason: undefined,
  plan($record) {
    return list([constant("relational_topics", false), $record.get("topic_item_id")]);
  },
  getSpec($list) {
    return {
      topic_item_id: inhibitOnNull(access($list, [1]))
    };
  },
  getIdentifiers(value) {
    return value.slice(1);
  },
  get(spec) {
    return pgResource_relational_topicsPgResource.get(spec);
  },
  match(obj) {
    return obj[0] === "relational_topics";
  }
};
const pgResource_relational_postsPgResource = registry.pgResources["relational_posts"];
const handler17 = {
  typeName: "RelationalPost",
  codec: handler_codec_base64JSON,
  deprecationReason: undefined,
  plan($record) {
    return list([constant("relational_posts", false), $record.get("post_item_id")]);
  },
  getSpec($list) {
    return {
      post_item_id: inhibitOnNull(access($list, [1]))
    };
  },
  getIdentifiers(value) {
    return value.slice(1);
  },
  get(spec) {
    return pgResource_relational_postsPgResource.get(spec);
  },
  match(obj) {
    return obj[0] === "relational_posts";
  }
};
const pgResource_relational_dividersPgResource = registry.pgResources["relational_dividers"];
const handler18 = {
  typeName: "RelationalDivider",
  codec: handler_codec_base64JSON,
  deprecationReason: undefined,
  plan($record) {
    return list([constant("relational_dividers", false), $record.get("divider_item_id")]);
  },
  getSpec($list) {
    return {
      divider_item_id: inhibitOnNull(access($list, [1]))
    };
  },
  getIdentifiers(value) {
    return value.slice(1);
  },
  get(spec) {
    return pgResource_relational_dividersPgResource.get(spec);
  },
  match(obj) {
    return obj[0] === "relational_dividers";
  }
};
const pgResource_relational_checklistsPgResource = registry.pgResources["relational_checklists"];
const handler19 = {
  typeName: "RelationalChecklist",
  codec: handler_codec_base64JSON,
  deprecationReason: undefined,
  plan($record) {
    return list([constant("relational_checklists", false), $record.get("checklist_item_id")]);
  },
  getSpec($list) {
    return {
      checklist_item_id: inhibitOnNull(access($list, [1]))
    };
  },
  getIdentifiers(value) {
    return value.slice(1);
  },
  get(spec) {
    return pgResource_relational_checklistsPgResource.get(spec);
  },
  match(obj) {
    return obj[0] === "relational_checklists";
  }
};
const pgResource_relational_checklist_itemsPgResource = registry.pgResources["relational_checklist_items"];
const handler20 = {
  typeName: "RelationalChecklistItem",
  codec: handler_codec_base64JSON,
  deprecationReason: undefined,
  plan($record) {
    return list([constant("relational_checklist_items", false), $record.get("checklist_item_item_id")]);
  },
  getSpec($list) {
    return {
      checklist_item_item_id: inhibitOnNull(access($list, [1]))
    };
  },
  getIdentifiers(value) {
    return value.slice(1);
  },
  get(spec) {
    return pgResource_relational_checklist_itemsPgResource.get(spec);
  },
  match(obj) {
    return obj[0] === "relational_checklist_items";
  }
};
const handler21 = {
  typeName: "Query",
  codec: nodeIdCodecs.raw,
  match(specifier) {
    return specifier === "query";
  },
  getIdentifiers(_value) {
    return [];
  },
  getSpec() {
    return "irrelevant";
  },
  get() {
    return rootValue();
  },
  plan() {
    return constant`query`;
  }
};
const nodeIdHandlerByTypeName = {
  __proto__: null,
  Query: handler21,
  SingleTableTopic: handler,
  SingleTablePost: handler11,
  SingleTableDivider: handler13,
  SingleTableChecklist: handler14,
  SingleTableChecklistItem: handler15,
  Organization: handler4,
  Person: handler2,
  Priority: handler12,
  RelationalChecklist: handler19,
  RelationalItemRelationCompositePk: handler8,
  RelationalTopic: handler16,
  SingleTableItemRelationCompositePk: handler10,
  RelationalChecklistItem: handler20,
  RelationalDivider: handler18,
  RelationalItemRelation: handler7,
  SingleTableItemRelation: handler9,
  LogEntry: handler3,
  RelationalPost: handler17,
  FirstPartyVulnerability: {
    typeName: "FirstPartyVulnerability",
    codec: handler_codec_base64JSON,
    deprecationReason: undefined,
    plan($record) {
      return list([constant("first_party_vulnerabilities", false), $record.get("id")]);
    },
    getSpec($list) {
      return {
        id: inhibitOnNull(access($list, [1]))
      };
    },
    getIdentifiers(value) {
      return value.slice(1);
    },
    get(spec) {
      return paths_0_resource_first_party_vulnerabilitiesPgResource.get(spec);
    },
    match(obj) {
      return obj[0] === "first_party_vulnerabilities";
    }
  },
  ThirdPartyVulnerability: {
    typeName: "ThirdPartyVulnerability",
    codec: handler_codec_base64JSON,
    deprecationReason: undefined,
    plan($record) {
      return list([constant("third_party_vulnerabilities", false), $record.get("id")]);
    },
    getSpec($list) {
      return {
        id: inhibitOnNull(access($list, [1]))
      };
    },
    getIdentifiers(value) {
      return value.slice(1);
    },
    get(spec) {
      return paths_1_resource_third_party_vulnerabilitiesPgResource.get(spec);
    },
    match(obj) {
      return obj[0] === "third_party_vulnerabilities";
    }
  },
  AwsApplication: handler5,
  GcpApplication: handler6
};
const argDetailsSimple_all_single_tables = [];
const makeArgs_all_single_tables = (args, path = []) => argDetailsSimple_all_single_tables.map(details => makeArg(path, args, details));
const resource_all_single_tablesPgResource = registry.pgResources["all_single_tables"];
const getSelectPlanFromParentAndArgs = ($root, args, _info) => {
  const selectArgs = makeArgs_all_single_tables(args);
  return resource_all_single_tablesPgResource.execute(selectArgs);
};
const argDetailsSimple_get_single_table_topic_by_id = [{
  graphqlArgName: "id",
  postgresArgName: "id",
  pgCodec: TYPES.int,
  required: true,
  fetcher: null
}];
const makeArgs_get_single_table_topic_by_id = (args, path = []) => argDetailsSimple_get_single_table_topic_by_id.map(details => makeArg(path, args, details));
const resource_get_single_table_topic_by_idPgResource = registry.pgResources["get_single_table_topic_by_id"];
function specForHandler(handler) {
  function spec(nodeId) {
    // We only want to return the specifier if it matches
    // this handler; otherwise return null.
    if (nodeId == null) return null;
    try {
      const specifier = handler.codec.decode(nodeId);
      if (handler.match(specifier)) {
        return specifier;
      }
    } catch {
      // Ignore errors
    }
    return null;
  }
  spec.displayName = `specifier_${handler.typeName}_${handler.codec.name}`;
  spec.isSyncAndSafe = true; // Optimization
  return spec;
}
const fetcher = (() => {
  const fn = $nodeId => {
    const $decoded = lambda($nodeId, specForHandler(handler));
    return handler.get(handler.getSpec($decoded));
  };
  fn.deprecationReason = handler.deprecationReason;
  return fn;
})();
const fetcher2 = (handler => {
  const fn = $nodeId => {
    const $decoded = lambda($nodeId, specForHandler(handler));
    return handler.get(handler.getSpec($decoded));
  };
  fn.deprecationReason = handler.deprecationReason;
  return fn;
})(handler11);
const fetcher3 = (handler => {
  const fn = $nodeId => {
    const $decoded = lambda($nodeId, specForHandler(handler));
    return handler.get(handler.getSpec($decoded));
  };
  fn.deprecationReason = handler.deprecationReason;
  return fn;
})(handler13);
const fetcher4 = (handler => {
  const fn = $nodeId => {
    const $decoded = lambda($nodeId, specForHandler(handler));
    return handler.get(handler.getSpec($decoded));
  };
  fn.deprecationReason = handler.deprecationReason;
  return fn;
})(handler14);
const fetcher5 = (handler => {
  const fn = $nodeId => {
    const $decoded = lambda($nodeId, specForHandler(handler));
    return handler.get(handler.getSpec($decoded));
  };
  fn.deprecationReason = handler.deprecationReason;
  return fn;
})(handler15);
const fetcher6 = (handler => {
  const fn = $nodeId => {
    const $decoded = lambda($nodeId, specForHandler(handler));
    return handler.get(handler.getSpec($decoded));
  };
  fn.deprecationReason = handler.deprecationReason;
  return fn;
})(handler4);
const fetcher7 = (handler => {
  const fn = $nodeId => {
    const $decoded = lambda($nodeId, specForHandler(handler));
    return handler.get(handler.getSpec($decoded));
  };
  fn.deprecationReason = handler.deprecationReason;
  return fn;
})(handler2);
const fetcher8 = (handler => {
  const fn = $nodeId => {
    const $decoded = lambda($nodeId, specForHandler(handler));
    return handler.get(handler.getSpec($decoded));
  };
  fn.deprecationReason = handler.deprecationReason;
  return fn;
})(handler12);
const fetcher9 = (handler => {
  const fn = $nodeId => {
    const $decoded = lambda($nodeId, specForHandler(handler));
    return handler.get(handler.getSpec($decoded));
  };
  fn.deprecationReason = handler.deprecationReason;
  return fn;
})(handler19);
const fetcher10 = (handler => {
  const fn = $nodeId => {
    const $decoded = lambda($nodeId, specForHandler(handler));
    return handler.get(handler.getSpec($decoded));
  };
  fn.deprecationReason = handler.deprecationReason;
  return fn;
})(handler8);
const fetcher11 = (handler => {
  const fn = $nodeId => {
    const $decoded = lambda($nodeId, specForHandler(handler));
    return handler.get(handler.getSpec($decoded));
  };
  fn.deprecationReason = handler.deprecationReason;
  return fn;
})(handler16);
const fetcher12 = (handler => {
  const fn = $nodeId => {
    const $decoded = lambda($nodeId, specForHandler(handler));
    return handler.get(handler.getSpec($decoded));
  };
  fn.deprecationReason = handler.deprecationReason;
  return fn;
})(handler10);
const fetcher13 = (handler => {
  const fn = $nodeId => {
    const $decoded = lambda($nodeId, specForHandler(handler));
    return handler.get(handler.getSpec($decoded));
  };
  fn.deprecationReason = handler.deprecationReason;
  return fn;
})(handler20);
const fetcher14 = (handler => {
  const fn = $nodeId => {
    const $decoded = lambda($nodeId, specForHandler(handler));
    return handler.get(handler.getSpec($decoded));
  };
  fn.deprecationReason = handler.deprecationReason;
  return fn;
})(handler18);
const fetcher15 = (handler => {
  const fn = $nodeId => {
    const $decoded = lambda($nodeId, specForHandler(handler));
    return handler.get(handler.getSpec($decoded));
  };
  fn.deprecationReason = handler.deprecationReason;
  return fn;
})(handler7);
const fetcher16 = (handler => {
  const fn = $nodeId => {
    const $decoded = lambda($nodeId, specForHandler(handler));
    return handler.get(handler.getSpec($decoded));
  };
  fn.deprecationReason = handler.deprecationReason;
  return fn;
})(handler9);
const fetcher17 = (handler => {
  const fn = $nodeId => {
    const $decoded = lambda($nodeId, specForHandler(handler));
    return handler.get(handler.getSpec($decoded));
  };
  fn.deprecationReason = handler.deprecationReason;
  return fn;
})(handler3);
const fetcher18 = (handler => {
  const fn = $nodeId => {
    const $decoded = lambda($nodeId, specForHandler(handler));
    return handler.get(handler.getSpec($decoded));
  };
  fn.deprecationReason = handler.deprecationReason;
  return fn;
})(handler17);
const fetcher19 = (handler => {
  const fn = $nodeId => {
    const $decoded = lambda($nodeId, specForHandler(handler));
    return handler.get(handler.getSpec($decoded));
  };
  fn.deprecationReason = handler.deprecationReason;
  return fn;
})(nodeIdHandlerByTypeName.FirstPartyVulnerability);
const fetcher20 = (handler => {
  const fn = $nodeId => {
    const $decoded = lambda($nodeId, specForHandler(handler));
    return handler.get(handler.getSpec($decoded));
  };
  fn.deprecationReason = handler.deprecationReason;
  return fn;
})(nodeIdHandlerByTypeName.ThirdPartyVulnerability);
const fetcher21 = (handler => {
  const fn = $nodeId => {
    const $decoded = lambda($nodeId, specForHandler(handler));
    return handler.get(handler.getSpec($decoded));
  };
  fn.deprecationReason = handler.deprecationReason;
  return fn;
})(handler5);
const fetcher22 = (handler => {
  const fn = $nodeId => {
    const $decoded = lambda($nodeId, specForHandler(handler));
    return handler.get(handler.getSpec($decoded));
  };
  fn.deprecationReason = handler.deprecationReason;
  return fn;
})(handler6);
const members7 = [{
  resource: paths_0_resource_first_party_vulnerabilitiesPgResource,
  typeName: "FirstPartyVulnerability"
}, {
  resource: paths_1_resource_third_party_vulnerabilitiesPgResource,
  typeName: "ThirdPartyVulnerability"
}];
const resourceByTypeName7 = {
  __proto__: null,
  FirstPartyVulnerability: paths_0_resource_first_party_vulnerabilitiesPgResource,
  ThirdPartyVulnerability: paths_1_resource_third_party_vulnerabilitiesPgResource
};
const members8 = [{
  resource: otherSource_aws_applicationsPgResource,
  typeName: "AwsApplication"
}, {
  resource: otherSource_gcp_applicationsPgResource,
  typeName: "GcpApplication"
}];
const resourceByTypeName8 = {
  __proto__: null,
  AwsApplication: otherSource_aws_applicationsPgResource,
  GcpApplication: otherSource_gcp_applicationsPgResource
};
const members9 = [];
const resourceByTypeName9 = {
  __proto__: null
};
const argDetailsSimple_first_party_vulnerabilities_cvss_score_int = [];
const makeArgs_first_party_vulnerabilities_cvss_score_int = (args, path = []) => argDetailsSimple_first_party_vulnerabilities_cvss_score_int.map(details => makeArg(path, args, details));
const resource_first_party_vulnerabilities_cvss_score_intPgResource = registry.pgResources["first_party_vulnerabilities_cvss_score_int"];
const members10 = [{
  resource: members_0_resource_aws_application_first_party_vulnerabilitiesPgResource,
  typeName: "AwsApplication",
  path: [{
    relationName: "awsApplicationsByMyAwsApplicationId"
  }]
}, {
  resource: members_0_resource_gcp_application_first_party_vulnerabilitiesPgResource,
  typeName: "GcpApplication",
  path: [{
    relationName: "gcpApplicationsByMyGcpApplicationId"
  }]
}];
const paths7 = [{
  resource: otherSource_aws_applicationsPgResource,
  hasReferencee: true,
  isUnique: false,
  layers: [{
    relationName: "awsApplicationFirstPartyVulnerabilitiesByTheirFirstPartyVulnerabilityId",
    localAttributes: registryConfig.pgRelations.firstPartyVulnerabilities.awsApplicationFirstPartyVulnerabilitiesByTheirFirstPartyVulnerabilityId.localAttributes,
    remoteAttributes: registryConfig.pgRelations.firstPartyVulnerabilities.awsApplicationFirstPartyVulnerabilitiesByTheirFirstPartyVulnerabilityId.remoteAttributes,
    resource: members_0_resource_aws_application_first_party_vulnerabilitiesPgResource,
    isUnique: false
  }, {
    relationName: "awsApplicationsByMyAwsApplicationId",
    localAttributes: registryConfig.pgRelations.awsApplicationFirstPartyVulnerabilities.awsApplicationsByMyAwsApplicationId.localAttributes,
    remoteAttributes: registryConfig.pgRelations.awsApplicationFirstPartyVulnerabilities.awsApplicationsByMyAwsApplicationId.remoteAttributes,
    resource: otherSource_aws_applicationsPgResource,
    isUnique: true
  }]
}, {
  resource: otherSource_gcp_applicationsPgResource,
  hasReferencee: true,
  isUnique: false,
  layers: [{
    relationName: "gcpApplicationFirstPartyVulnerabilitiesByTheirFirstPartyVulnerabilityId",
    localAttributes: registryConfig.pgRelations.firstPartyVulnerabilities.gcpApplicationFirstPartyVulnerabilitiesByTheirFirstPartyVulnerabilityId.localAttributes,
    remoteAttributes: registryConfig.pgRelations.firstPartyVulnerabilities.gcpApplicationFirstPartyVulnerabilitiesByTheirFirstPartyVulnerabilityId.remoteAttributes,
    resource: members_0_resource_gcp_application_first_party_vulnerabilitiesPgResource,
    isUnique: false
  }, {
    relationName: "gcpApplicationsByMyGcpApplicationId",
    localAttributes: registryConfig.pgRelations.gcpApplicationFirstPartyVulnerabilities.gcpApplicationsByMyGcpApplicationId.localAttributes,
    remoteAttributes: registryConfig.pgRelations.gcpApplicationFirstPartyVulnerabilities.gcpApplicationsByMyGcpApplicationId.remoteAttributes,
    resource: otherSource_gcp_applicationsPgResource,
    isUnique: true
  }]
}];
const resourceByTypeName10 = {
  __proto__: null,
  AwsApplication: otherSource_aws_applicationsPgResource,
  GcpApplication: otherSource_gcp_applicationsPgResource
};
const attributes4 = {};
const members11 = [{
  resource: members_0_resource_aws_application_first_party_vulnerabilitiesPgResource,
  typeName: "Person",
  path: [{
    relationName: "awsApplicationsByMyAwsApplicationId"
  }, {
    relationName: "peopleByMyPersonId"
  }]
}, {
  resource: members_0_resource_aws_application_first_party_vulnerabilitiesPgResource,
  typeName: "Organization",
  path: [{
    relationName: "awsApplicationsByMyAwsApplicationId"
  }, {
    relationName: "organizationsByMyOrganizationId"
  }]
}, {
  resource: members_0_resource_gcp_application_first_party_vulnerabilitiesPgResource,
  typeName: "Person",
  path: [{
    relationName: "gcpApplicationsByMyGcpApplicationId"
  }, {
    relationName: "peopleByMyPersonId"
  }]
}, {
  resource: members_0_resource_gcp_application_first_party_vulnerabilitiesPgResource,
  typeName: "Organization",
  path: [{
    relationName: "gcpApplicationsByMyGcpApplicationId"
  }, {
    relationName: "organizationsByMyOrganizationId"
  }]
}];
const paths8 = [{
  resource: otherSource_peoplePgResource,
  hasReferencee: true,
  isUnique: false,
  layers: [{
    relationName: "awsApplicationFirstPartyVulnerabilitiesByTheirFirstPartyVulnerabilityId",
    localAttributes: registryConfig.pgRelations.firstPartyVulnerabilities.awsApplicationFirstPartyVulnerabilitiesByTheirFirstPartyVulnerabilityId.localAttributes,
    remoteAttributes: registryConfig.pgRelations.firstPartyVulnerabilities.awsApplicationFirstPartyVulnerabilitiesByTheirFirstPartyVulnerabilityId.remoteAttributes,
    resource: members_0_resource_aws_application_first_party_vulnerabilitiesPgResource,
    isUnique: false
  }, {
    relationName: "awsApplicationsByMyAwsApplicationId",
    localAttributes: registryConfig.pgRelations.awsApplicationFirstPartyVulnerabilities.awsApplicationsByMyAwsApplicationId.localAttributes,
    remoteAttributes: registryConfig.pgRelations.awsApplicationFirstPartyVulnerabilities.awsApplicationsByMyAwsApplicationId.remoteAttributes,
    resource: otherSource_aws_applicationsPgResource,
    isUnique: true
  }, {
    relationName: "peopleByMyPersonId",
    localAttributes: registryConfig.pgRelations.awsApplications.peopleByMyPersonId.localAttributes,
    remoteAttributes: registryConfig.pgRelations.awsApplications.peopleByMyPersonId.remoteAttributes,
    resource: otherSource_peoplePgResource,
    isUnique: true
  }]
}, {
  resource: otherSource_organizationsPgResource,
  hasReferencee: true,
  isUnique: false,
  layers: [{
    relationName: "awsApplicationFirstPartyVulnerabilitiesByTheirFirstPartyVulnerabilityId",
    localAttributes: registryConfig.pgRelations.firstPartyVulnerabilities.awsApplicationFirstPartyVulnerabilitiesByTheirFirstPartyVulnerabilityId.localAttributes,
    remoteAttributes: registryConfig.pgRelations.firstPartyVulnerabilities.awsApplicationFirstPartyVulnerabilitiesByTheirFirstPartyVulnerabilityId.remoteAttributes,
    resource: members_0_resource_aws_application_first_party_vulnerabilitiesPgResource,
    isUnique: false
  }, {
    relationName: "awsApplicationsByMyAwsApplicationId",
    localAttributes: registryConfig.pgRelations.awsApplicationFirstPartyVulnerabilities.awsApplicationsByMyAwsApplicationId.localAttributes,
    remoteAttributes: registryConfig.pgRelations.awsApplicationFirstPartyVulnerabilities.awsApplicationsByMyAwsApplicationId.remoteAttributes,
    resource: otherSource_aws_applicationsPgResource,
    isUnique: true
  }, {
    relationName: "organizationsByMyOrganizationId",
    localAttributes: registryConfig.pgRelations.awsApplications.organizationsByMyOrganizationId.localAttributes,
    remoteAttributes: registryConfig.pgRelations.awsApplications.organizationsByMyOrganizationId.remoteAttributes,
    resource: otherSource_organizationsPgResource,
    isUnique: true
  }]
}, {
  resource: otherSource_peoplePgResource,
  hasReferencee: true,
  isUnique: false,
  layers: [{
    relationName: "gcpApplicationFirstPartyVulnerabilitiesByTheirFirstPartyVulnerabilityId",
    localAttributes: registryConfig.pgRelations.firstPartyVulnerabilities.gcpApplicationFirstPartyVulnerabilitiesByTheirFirstPartyVulnerabilityId.localAttributes,
    remoteAttributes: registryConfig.pgRelations.firstPartyVulnerabilities.gcpApplicationFirstPartyVulnerabilitiesByTheirFirstPartyVulnerabilityId.remoteAttributes,
    resource: members_0_resource_gcp_application_first_party_vulnerabilitiesPgResource,
    isUnique: false
  }, {
    relationName: "gcpApplicationsByMyGcpApplicationId",
    localAttributes: registryConfig.pgRelations.gcpApplicationFirstPartyVulnerabilities.gcpApplicationsByMyGcpApplicationId.localAttributes,
    remoteAttributes: registryConfig.pgRelations.gcpApplicationFirstPartyVulnerabilities.gcpApplicationsByMyGcpApplicationId.remoteAttributes,
    resource: otherSource_gcp_applicationsPgResource,
    isUnique: true
  }, {
    relationName: "peopleByMyPersonId",
    localAttributes: registryConfig.pgRelations.gcpApplications.peopleByMyPersonId.localAttributes,
    remoteAttributes: registryConfig.pgRelations.gcpApplications.peopleByMyPersonId.remoteAttributes,
    resource: otherSource_peoplePgResource,
    isUnique: true
  }]
}, {
  resource: otherSource_organizationsPgResource,
  hasReferencee: true,
  isUnique: false,
  layers: [{
    relationName: "gcpApplicationFirstPartyVulnerabilitiesByTheirFirstPartyVulnerabilityId",
    localAttributes: registryConfig.pgRelations.firstPartyVulnerabilities.gcpApplicationFirstPartyVulnerabilitiesByTheirFirstPartyVulnerabilityId.localAttributes,
    remoteAttributes: registryConfig.pgRelations.firstPartyVulnerabilities.gcpApplicationFirstPartyVulnerabilitiesByTheirFirstPartyVulnerabilityId.remoteAttributes,
    resource: members_0_resource_gcp_application_first_party_vulnerabilitiesPgResource,
    isUnique: false
  }, {
    relationName: "gcpApplicationsByMyGcpApplicationId",
    localAttributes: registryConfig.pgRelations.gcpApplicationFirstPartyVulnerabilities.gcpApplicationsByMyGcpApplicationId.localAttributes,
    remoteAttributes: registryConfig.pgRelations.gcpApplicationFirstPartyVulnerabilities.gcpApplicationsByMyGcpApplicationId.remoteAttributes,
    resource: otherSource_gcp_applicationsPgResource,
    isUnique: true
  }, {
    relationName: "organizationsByMyOrganizationId",
    localAttributes: registryConfig.pgRelations.gcpApplications.organizationsByMyOrganizationId.localAttributes,
    remoteAttributes: registryConfig.pgRelations.gcpApplications.organizationsByMyOrganizationId.remoteAttributes,
    resource: otherSource_organizationsPgResource,
    isUnique: true
  }]
}];
const resourceByTypeName11 = {
  __proto__: null,
  Person: otherSource_peoplePgResource,
  Organization: otherSource_organizationsPgResource
};
const argDetailsSimple_third_party_vulnerabilities_cvss_score_int = [];
const makeArgs_third_party_vulnerabilities_cvss_score_int = (args, path = []) => argDetailsSimple_third_party_vulnerabilities_cvss_score_int.map(details => makeArg(path, args, details));
const resource_third_party_vulnerabilities_cvss_score_intPgResource = registry.pgResources["third_party_vulnerabilities_cvss_score_int"];
const members12 = [{
  resource: members_1_resource_aws_application_third_party_vulnerabilitiesPgResource,
  typeName: "AwsApplication",
  path: [{
    relationName: "awsApplicationsByMyAwsApplicationId"
  }]
}, {
  resource: members_1_resource_gcp_application_third_party_vulnerabilitiesPgResource,
  typeName: "GcpApplication",
  path: [{
    relationName: "gcpApplicationsByMyGcpApplicationId"
  }]
}];
const paths9 = [{
  resource: otherSource_aws_applicationsPgResource,
  hasReferencee: true,
  isUnique: false,
  layers: [{
    relationName: "awsApplicationThirdPartyVulnerabilitiesByTheirThirdPartyVulnerabilityId",
    localAttributes: registryConfig.pgRelations.thirdPartyVulnerabilities.awsApplicationThirdPartyVulnerabilitiesByTheirThirdPartyVulnerabilityId.localAttributes,
    remoteAttributes: registryConfig.pgRelations.thirdPartyVulnerabilities.awsApplicationThirdPartyVulnerabilitiesByTheirThirdPartyVulnerabilityId.remoteAttributes,
    resource: members_1_resource_aws_application_third_party_vulnerabilitiesPgResource,
    isUnique: false
  }, {
    relationName: "awsApplicationsByMyAwsApplicationId",
    localAttributes: registryConfig.pgRelations.awsApplicationThirdPartyVulnerabilities.awsApplicationsByMyAwsApplicationId.localAttributes,
    remoteAttributes: registryConfig.pgRelations.awsApplicationThirdPartyVulnerabilities.awsApplicationsByMyAwsApplicationId.remoteAttributes,
    resource: otherSource_aws_applicationsPgResource,
    isUnique: true
  }]
}, {
  resource: otherSource_gcp_applicationsPgResource,
  hasReferencee: true,
  isUnique: false,
  layers: [{
    relationName: "gcpApplicationThirdPartyVulnerabilitiesByTheirThirdPartyVulnerabilityId",
    localAttributes: registryConfig.pgRelations.thirdPartyVulnerabilities.gcpApplicationThirdPartyVulnerabilitiesByTheirThirdPartyVulnerabilityId.localAttributes,
    remoteAttributes: registryConfig.pgRelations.thirdPartyVulnerabilities.gcpApplicationThirdPartyVulnerabilitiesByTheirThirdPartyVulnerabilityId.remoteAttributes,
    resource: members_1_resource_gcp_application_third_party_vulnerabilitiesPgResource,
    isUnique: false
  }, {
    relationName: "gcpApplicationsByMyGcpApplicationId",
    localAttributes: registryConfig.pgRelations.gcpApplicationThirdPartyVulnerabilities.gcpApplicationsByMyGcpApplicationId.localAttributes,
    remoteAttributes: registryConfig.pgRelations.gcpApplicationThirdPartyVulnerabilities.gcpApplicationsByMyGcpApplicationId.remoteAttributes,
    resource: otherSource_gcp_applicationsPgResource,
    isUnique: true
  }]
}];
const resourceByTypeName12 = {
  __proto__: null,
  AwsApplication: otherSource_aws_applicationsPgResource,
  GcpApplication: otherSource_gcp_applicationsPgResource
};
const attributes5 = {};
const members13 = [{
  resource: members_1_resource_aws_application_third_party_vulnerabilitiesPgResource,
  typeName: "Person",
  path: [{
    relationName: "awsApplicationsByMyAwsApplicationId"
  }, {
    relationName: "peopleByMyPersonId"
  }]
}, {
  resource: members_1_resource_aws_application_third_party_vulnerabilitiesPgResource,
  typeName: "Organization",
  path: [{
    relationName: "awsApplicationsByMyAwsApplicationId"
  }, {
    relationName: "organizationsByMyOrganizationId"
  }]
}, {
  resource: members_1_resource_gcp_application_third_party_vulnerabilitiesPgResource,
  typeName: "Person",
  path: [{
    relationName: "gcpApplicationsByMyGcpApplicationId"
  }, {
    relationName: "peopleByMyPersonId"
  }]
}, {
  resource: members_1_resource_gcp_application_third_party_vulnerabilitiesPgResource,
  typeName: "Organization",
  path: [{
    relationName: "gcpApplicationsByMyGcpApplicationId"
  }, {
    relationName: "organizationsByMyOrganizationId"
  }]
}];
const paths10 = [{
  resource: otherSource_peoplePgResource,
  hasReferencee: true,
  isUnique: false,
  layers: [{
    relationName: "awsApplicationThirdPartyVulnerabilitiesByTheirThirdPartyVulnerabilityId",
    localAttributes: registryConfig.pgRelations.thirdPartyVulnerabilities.awsApplicationThirdPartyVulnerabilitiesByTheirThirdPartyVulnerabilityId.localAttributes,
    remoteAttributes: registryConfig.pgRelations.thirdPartyVulnerabilities.awsApplicationThirdPartyVulnerabilitiesByTheirThirdPartyVulnerabilityId.remoteAttributes,
    resource: members_1_resource_aws_application_third_party_vulnerabilitiesPgResource,
    isUnique: false
  }, {
    relationName: "awsApplicationsByMyAwsApplicationId",
    localAttributes: registryConfig.pgRelations.awsApplicationThirdPartyVulnerabilities.awsApplicationsByMyAwsApplicationId.localAttributes,
    remoteAttributes: registryConfig.pgRelations.awsApplicationThirdPartyVulnerabilities.awsApplicationsByMyAwsApplicationId.remoteAttributes,
    resource: otherSource_aws_applicationsPgResource,
    isUnique: true
  }, {
    relationName: "peopleByMyPersonId",
    localAttributes: registryConfig.pgRelations.awsApplications.peopleByMyPersonId.localAttributes,
    remoteAttributes: registryConfig.pgRelations.awsApplications.peopleByMyPersonId.remoteAttributes,
    resource: otherSource_peoplePgResource,
    isUnique: true
  }]
}, {
  resource: otherSource_organizationsPgResource,
  hasReferencee: true,
  isUnique: false,
  layers: [{
    relationName: "awsApplicationThirdPartyVulnerabilitiesByTheirThirdPartyVulnerabilityId",
    localAttributes: registryConfig.pgRelations.thirdPartyVulnerabilities.awsApplicationThirdPartyVulnerabilitiesByTheirThirdPartyVulnerabilityId.localAttributes,
    remoteAttributes: registryConfig.pgRelations.thirdPartyVulnerabilities.awsApplicationThirdPartyVulnerabilitiesByTheirThirdPartyVulnerabilityId.remoteAttributes,
    resource: members_1_resource_aws_application_third_party_vulnerabilitiesPgResource,
    isUnique: false
  }, {
    relationName: "awsApplicationsByMyAwsApplicationId",
    localAttributes: registryConfig.pgRelations.awsApplicationThirdPartyVulnerabilities.awsApplicationsByMyAwsApplicationId.localAttributes,
    remoteAttributes: registryConfig.pgRelations.awsApplicationThirdPartyVulnerabilities.awsApplicationsByMyAwsApplicationId.remoteAttributes,
    resource: otherSource_aws_applicationsPgResource,
    isUnique: true
  }, {
    relationName: "organizationsByMyOrganizationId",
    localAttributes: registryConfig.pgRelations.awsApplications.organizationsByMyOrganizationId.localAttributes,
    remoteAttributes: registryConfig.pgRelations.awsApplications.organizationsByMyOrganizationId.remoteAttributes,
    resource: otherSource_organizationsPgResource,
    isUnique: true
  }]
}, {
  resource: otherSource_peoplePgResource,
  hasReferencee: true,
  isUnique: false,
  layers: [{
    relationName: "gcpApplicationThirdPartyVulnerabilitiesByTheirThirdPartyVulnerabilityId",
    localAttributes: registryConfig.pgRelations.thirdPartyVulnerabilities.gcpApplicationThirdPartyVulnerabilitiesByTheirThirdPartyVulnerabilityId.localAttributes,
    remoteAttributes: registryConfig.pgRelations.thirdPartyVulnerabilities.gcpApplicationThirdPartyVulnerabilitiesByTheirThirdPartyVulnerabilityId.remoteAttributes,
    resource: members_1_resource_gcp_application_third_party_vulnerabilitiesPgResource,
    isUnique: false
  }, {
    relationName: "gcpApplicationsByMyGcpApplicationId",
    localAttributes: registryConfig.pgRelations.gcpApplicationThirdPartyVulnerabilities.gcpApplicationsByMyGcpApplicationId.localAttributes,
    remoteAttributes: registryConfig.pgRelations.gcpApplicationThirdPartyVulnerabilities.gcpApplicationsByMyGcpApplicationId.remoteAttributes,
    resource: otherSource_gcp_applicationsPgResource,
    isUnique: true
  }, {
    relationName: "peopleByMyPersonId",
    localAttributes: registryConfig.pgRelations.gcpApplications.peopleByMyPersonId.localAttributes,
    remoteAttributes: registryConfig.pgRelations.gcpApplications.peopleByMyPersonId.remoteAttributes,
    resource: otherSource_peoplePgResource,
    isUnique: true
  }]
}, {
  resource: otherSource_organizationsPgResource,
  hasReferencee: true,
  isUnique: false,
  layers: [{
    relationName: "gcpApplicationThirdPartyVulnerabilitiesByTheirThirdPartyVulnerabilityId",
    localAttributes: registryConfig.pgRelations.thirdPartyVulnerabilities.gcpApplicationThirdPartyVulnerabilitiesByTheirThirdPartyVulnerabilityId.localAttributes,
    remoteAttributes: registryConfig.pgRelations.thirdPartyVulnerabilities.gcpApplicationThirdPartyVulnerabilitiesByTheirThirdPartyVulnerabilityId.remoteAttributes,
    resource: members_1_resource_gcp_application_third_party_vulnerabilitiesPgResource,
    isUnique: false
  }, {
    relationName: "gcpApplicationsByMyGcpApplicationId",
    localAttributes: registryConfig.pgRelations.gcpApplicationThirdPartyVulnerabilities.gcpApplicationsByMyGcpApplicationId.localAttributes,
    remoteAttributes: registryConfig.pgRelations.gcpApplicationThirdPartyVulnerabilities.gcpApplicationsByMyGcpApplicationId.remoteAttributes,
    resource: otherSource_gcp_applicationsPgResource,
    isUnique: true
  }, {
    relationName: "organizationsByMyOrganizationId",
    localAttributes: registryConfig.pgRelations.gcpApplications.organizationsByMyOrganizationId.localAttributes,
    remoteAttributes: registryConfig.pgRelations.gcpApplications.organizationsByMyOrganizationId.remoteAttributes,
    resource: otherSource_organizationsPgResource,
    isUnique: true
  }]
}];
const resourceByTypeName13 = {
  __proto__: null,
  Person: otherSource_peoplePgResource,
  Organization: otherSource_organizationsPgResource
};
const decodeNodeId = makeDecodeNodeId([handler16, handler17, handler18, handler19, handler20]);
const details = [{
  remotePkAttributes: relational_topicsUniques[0].attributes,
  handler: handler16
}, {
  remotePkAttributes: relational_postsUniques[0].attributes,
  handler: handler17
}, {
  remotePkAttributes: relational_dividersUniques[0].attributes,
  handler: handler18
}, {
  remotePkAttributes: relational_checklistsUniques[0].attributes,
  handler: handler19
}, {
  remotePkAttributes: relational_checklist_itemsUniques[0].attributes,
  handler: handler20
}];
const getSpec = $nodeId => {
  const $specifier = decodeNodeId($nodeId);
  const $handlerMatches = list(details.map(({
    handler,
    remotePkAttributes
  }) => {
    const spec = handler.getSpec(access($specifier, handler.codec.name));
    return object({
      match: lambda($specifier, specifier => {
        const value = specifier?.[handler.codec.name];
        return value != null ? handler.match(value) : false;
      }),
      pks: list(remotePkAttributes.map(n => spec[n]))
    });
  }));
  const $pkValues = lambda($handlerMatches, handlerMatches => {
    const match = handlerMatches.find(pk => pk.match);
    return match?.pks;
  }, true);
  return relational_itemsUniques[0].attributes.reduce((memo, pkAttribute, i) => {
    memo[pkAttribute] = access($pkValues, i);
    return memo;
  }, Object.create(null));
};
const argDetailsSimple_custom_delete_relational_item = [{
  graphqlArgName: "nodeId",
  postgresArgName: "nodeId",
  pgCodec: relationalItemsCodec,
  required: true,
  fetcher($nodeId) {
    return otherSource_relational_itemsPgResource.get(getSpec($nodeId));
  }
}];
const makeArgs_custom_delete_relational_item = (args, path = []) => argDetailsSimple_custom_delete_relational_item.map(details => makeArg(path, args, details));
const resource_custom_delete_relational_itemPgResource = registry.pgResources["custom_delete_relational_item"];
const specFromArgs = args => {
  const $nodeId = args.getRaw(["input", "nodeId"]);
  return specFromNodeId(handler4, $nodeId);
};
const specFromArgs2 = args => {
  const $nodeId = args.getRaw(["input", "nodeId"]);
  return specFromNodeId(handler2, $nodeId);
};
const specFromArgs3 = args => {
  const $nodeId = args.getRaw(["input", "nodeId"]);
  return specFromNodeId(handler8, $nodeId);
};
const specFromArgs4 = args => {
  const $nodeId = args.getRaw(["input", "nodeId"]);
  return specFromNodeId(handler10, $nodeId);
};
const specFromArgs5 = args => {
  const $nodeId = args.getRaw(["input", "nodeId"]);
  return specFromNodeId(handler7, $nodeId);
};
const specFromArgs6 = args => {
  const $nodeId = args.getRaw(["input", "nodeId"]);
  return specFromNodeId(handler9, $nodeId);
};
const specFromArgs7 = args => {
  const $nodeId = args.getRaw(["input", "nodeId"]);
  return specFromNodeId(handler3, $nodeId);
};
const specFromArgs8 = args => {
  const $nodeId = args.getRaw(["input", "nodeId"]);
  return specFromNodeId(nodeIdHandlerByTypeName.FirstPartyVulnerability, $nodeId);
};
const specFromArgs9 = args => {
  const $nodeId = args.getRaw(["input", "nodeId"]);
  return specFromNodeId(nodeIdHandlerByTypeName.ThirdPartyVulnerability, $nodeId);
};
const specFromArgs10 = args => {
  const $nodeId = args.getRaw(["input", "nodeId"]);
  return specFromNodeId(handler5, $nodeId);
};
const specFromArgs11 = args => {
  const $nodeId = args.getRaw(["input", "nodeId"]);
  return specFromNodeId(handler6, $nodeId);
};
const specFromArgs12 = args => {
  const $nodeId = args.getRaw(["input", "nodeId"]);
  return specFromNodeId(handler4, $nodeId);
};
const specFromArgs13 = args => {
  const $nodeId = args.getRaw(["input", "nodeId"]);
  return specFromNodeId(handler2, $nodeId);
};
const specFromArgs14 = args => {
  const $nodeId = args.getRaw(["input", "nodeId"]);
  return specFromNodeId(handler8, $nodeId);
};
const specFromArgs15 = args => {
  const $nodeId = args.getRaw(["input", "nodeId"]);
  return specFromNodeId(handler10, $nodeId);
};
const specFromArgs16 = args => {
  const $nodeId = args.getRaw(["input", "nodeId"]);
  return specFromNodeId(handler7, $nodeId);
};
const specFromArgs17 = args => {
  const $nodeId = args.getRaw(["input", "nodeId"]);
  return specFromNodeId(handler9, $nodeId);
};
const specFromArgs18 = args => {
  const $nodeId = args.getRaw(["input", "nodeId"]);
  return specFromNodeId(handler3, $nodeId);
};
const specFromArgs19 = args => {
  const $nodeId = args.getRaw(["input", "nodeId"]);
  return specFromNodeId(nodeIdHandlerByTypeName.FirstPartyVulnerability, $nodeId);
};
const specFromArgs20 = args => {
  const $nodeId = args.getRaw(["input", "nodeId"]);
  return specFromNodeId(nodeIdHandlerByTypeName.ThirdPartyVulnerability, $nodeId);
};
const specFromArgs21 = args => {
  const $nodeId = args.getRaw(["input", "nodeId"]);
  return specFromNodeId(handler5, $nodeId);
};
const specFromArgs22 = args => {
  const $nodeId = args.getRaw(["input", "nodeId"]);
  return specFromNodeId(handler6, $nodeId);
};
export const typeDefs = /* GraphQL */`type SingleTableTopic implements SingleTableItem & Node {
  """
  A globally unique identifier. Can be used in various places throughout the system to identify this single value.
  """
  nodeId: ID!
  meaningOfLife: Int
  id: Int!
  type: ItemType!
  parentId: Int
  rootTopicId: Int
  authorId: Int!
  position: BigInt!
  createdAt: Datetime!
  updatedAt: Datetime!
  isExplicitlyArchived: Boolean!
  archivedAt: Datetime
  title: String!

  """Reads a single \`Person\` that is related to this \`SingleTableItem\`."""
  personByAuthorId: Person

  """
  Reads a single \`SingleTableItem\` that is related to this \`SingleTableItem\`.
  """
  singleTableItemByParentId: SingleTableItem

  """Reads and enables pagination through a set of \`SingleTableItem\`."""
  singleTableItemsByParentId(
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
    condition: SingleTableItemCondition

    """The method to use when ordering \`SingleTableItem\`."""
    orderBy: [SingleTableItemsOrderBy!] = [PRIMARY_KEY_ASC]
  ): SingleTableItemsConnection!

  """
  Reads and enables pagination through a set of \`SingleTableItemRelation\`.
  """
  singleTableItemRelationsByChildId(
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
    condition: SingleTableItemRelationCondition

    """The method to use when ordering \`SingleTableItemRelation\`."""
    orderBy: [SingleTableItemRelationsOrderBy!] = [PRIMARY_KEY_ASC]
  ): SingleTableItemRelationsConnection!

  """
  Reads and enables pagination through a set of \`SingleTableItemRelation\`.
  """
  singleTableItemRelationsByParentId(
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
    condition: SingleTableItemRelationCondition

    """The method to use when ordering \`SingleTableItemRelation\`."""
    orderBy: [SingleTableItemRelationsOrderBy!] = [PRIMARY_KEY_ASC]
  ): SingleTableItemRelationsConnection!

  """
  Reads and enables pagination through a set of \`SingleTableItemRelationCompositePk\`.
  """
  singleTableItemRelationCompositePksByChildId(
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
    condition: SingleTableItemRelationCompositePkCondition

    """The method to use when ordering \`SingleTableItemRelationCompositePk\`."""
    orderBy: [SingleTableItemRelationCompositePksOrderBy!] = [PRIMARY_KEY_ASC]
  ): SingleTableItemRelationCompositePksConnection!

  """
  Reads and enables pagination through a set of \`SingleTableItemRelationCompositePk\`.
  """
  singleTableItemRelationCompositePksByParentId(
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
    condition: SingleTableItemRelationCompositePkCondition

    """The method to use when ordering \`SingleTableItemRelationCompositePk\`."""
    orderBy: [SingleTableItemRelationCompositePksOrderBy!] = [PRIMARY_KEY_ASC]
  ): SingleTableItemRelationCompositePksConnection!

  """
  Reads a single \`SingleTableTopic\` that is related to this \`SingleTableTopic\`.
  """
  rootTopic: SingleTableTopic
}

interface SingleTableItem implements Node {
  """
  A globally unique identifier. Can be used in various places throughout the system to identify this single value.
  """
  nodeId: ID!
  id: Int!
  type: ItemType!
  parentId: Int
  rootTopicId: Int
  authorId: Int!
  position: BigInt!
  createdAt: Datetime!
  updatedAt: Datetime!
  isExplicitlyArchived: Boolean!
  archivedAt: Datetime

  """Reads a single \`Person\` that is related to this \`SingleTableItem\`."""
  personByAuthorId: Person

  """
  Reads a single \`SingleTableItem\` that is related to this \`SingleTableItem\`.
  """
  singleTableItemByParentId: SingleTableItem

  """Reads and enables pagination through a set of \`SingleTableItem\`."""
  singleTableItemsByParentId(
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
  ): SingleTableItemsConnection!

  """
  Reads and enables pagination through a set of \`SingleTableItemRelation\`.
  """
  singleTableItemRelationsByChildId(
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
  ): SingleTableItemRelationsConnection!

  """
  Reads and enables pagination through a set of \`SingleTableItemRelation\`.
  """
  singleTableItemRelationsByParentId(
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
  ): SingleTableItemRelationsConnection!

  """
  Reads and enables pagination through a set of \`SingleTableItemRelationCompositePk\`.
  """
  singleTableItemRelationCompositePksByChildId(
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
  ): SingleTableItemRelationCompositePksConnection!

  """
  Reads and enables pagination through a set of \`SingleTableItemRelationCompositePk\`.
  """
  singleTableItemRelationCompositePksByParentId(
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
  ): SingleTableItemRelationCompositePksConnection!

  """
  Reads a single \`SingleTableTopic\` that is related to this \`SingleTableItem\`.
  """
  rootTopic: SingleTableTopic
}

"""An object with a globally unique \`ID\`."""
interface Node {
  """
  A globally unique identifier. Can be used in various places throughout the system to identify this single value.
  """
  nodeId: ID!
}

enum ItemType {
  TOPIC
  POST
  DIVIDER
  CHECKLIST
  CHECKLIST_ITEM
}

"""
A signed eight-byte integer. The upper big integer values are greater than the
max value for a JavaScript number. Therefore all big integers will be output as
strings and not numbers.
"""
scalar BigInt

"""
A point in time as described by the [ISO
8601](https://en.wikipedia.org/wiki/ISO_8601) and, if it has a timezone, [RFC
3339](https://datatracker.ietf.org/doc/html/rfc3339) standards. Input values
that do not conform to both ISO 8601 and RFC 3339 may be coerced, which may lead
to unexpected results.
"""
scalar Datetime

type Person implements Node {
  """
  A globally unique identifier. Can be used in various places throughout the system to identify this single value.
  """
  nodeId: ID!
  personId: Int!
  username: String!

  """Reads and enables pagination through a set of \`LogEntry\`."""
  logEntriesByPersonId(
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
    condition: LogEntryCondition

    """The method to use when ordering \`LogEntry\`."""
    orderBy: [LogEntriesOrderBy!] = [PRIMARY_KEY_ASC]
  ): LogEntriesConnection!

  """Reads and enables pagination through a set of \`SingleTableItem\`."""
  singleTableItemsByAuthorId(
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
    condition: SingleTableItemCondition

    """The method to use when ordering \`SingleTableItem\`."""
    orderBy: [SingleTableItemsOrderBy!] = [PRIMARY_KEY_ASC]
  ): SingleTableItemsConnection!

  """Reads and enables pagination through a set of \`RelationalItem\`."""
  relationalItemsByAuthorId(
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
    condition: RelationalItemCondition

    """The method to use when ordering \`RelationalItem\`."""
    orderBy: [RelationalItemsOrderBy!] = [PRIMARY_KEY_ASC]
  ): RelationalItemsConnection!

  """Reads and enables pagination through a set of \`AwsApplication\`."""
  awsApplicationsByPersonId(
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
    condition: AwsApplicationCondition

    """The method to use when ordering \`AwsApplication\`."""
    orderBy: [AwsApplicationsOrderBy!] = [PRIMARY_KEY_ASC]
  ): AwsApplicationsConnection!

  """Reads and enables pagination through a set of \`GcpApplication\`."""
  gcpApplicationsByPersonId(
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
    condition: GcpApplicationCondition

    """The method to use when ordering \`GcpApplication\`."""
    orderBy: [GcpApplicationsOrderBy!] = [PRIMARY_KEY_ASC]
  ): GcpApplicationsConnection!

  """Reads and enables pagination through a set of \`Application\`."""
  applications(
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
    condition: ApplicationCondition

    """Filter results to only those of the given types"""
    only: [ApplicationType!] @deprecated(reason: "EXPERIMENTAL")

    """The method to use when ordering \`Application\`."""
    orderBy: [ApplicationsOrderBy!]
  ): ApplicationsConnection!
}

"""A connection to a list of \`LogEntry\` values."""
type LogEntriesConnection {
  """A list of \`LogEntry\` objects."""
  nodes: [LogEntry]!

  """
  A list of edges which contains the \`LogEntry\` and cursor to aid in pagination.
  """
  edges: [LogEntriesEdge]!

  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """The count of *all* \`LogEntry\` you could get from the connection."""
  totalCount: Int!
}

type LogEntry implements Node {
  """
  A globally unique identifier. Can be used in various places throughout the system to identify this single value.
  """
  nodeId: ID!
  id: Int!
  personId: Int
  organizationId: Int
  text: String!

  """Reads a single \`Organization\` that is related to this \`LogEntry\`."""
  organizationByOrganizationId: Organization

  """Reads a single \`Person\` that is related to this \`LogEntry\`."""
  personByPersonId: Person

  """
  Reads a single \`PersonOrOrganization\` that is related to this \`LogEntry\`.
  """
  author: PersonOrOrganization
}

type Organization implements Node {
  """
  A globally unique identifier. Can be used in various places throughout the system to identify this single value.
  """
  nodeId: ID!
  organizationId: Int!
  name: String!

  """Reads and enables pagination through a set of \`LogEntry\`."""
  logEntriesByOrganizationId(
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
    condition: LogEntryCondition

    """The method to use when ordering \`LogEntry\`."""
    orderBy: [LogEntriesOrderBy!] = [PRIMARY_KEY_ASC]
  ): LogEntriesConnection!

  """Reads and enables pagination through a set of \`AwsApplication\`."""
  awsApplicationsByOrganizationId(
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
    condition: AwsApplicationCondition

    """The method to use when ordering \`AwsApplication\`."""
    orderBy: [AwsApplicationsOrderBy!] = [PRIMARY_KEY_ASC]
  ): AwsApplicationsConnection!

  """Reads and enables pagination through a set of \`GcpApplication\`."""
  gcpApplicationsByOrganizationId(
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
    condition: GcpApplicationCondition

    """The method to use when ordering \`GcpApplication\`."""
    orderBy: [GcpApplicationsOrderBy!] = [PRIMARY_KEY_ASC]
  ): GcpApplicationsConnection!
}

"""A location in a connection that can be used for resuming pagination."""
scalar Cursor

"""
A condition to be used against \`LogEntry\` object types. All fields are tested
for equality and combined with a logical ‘and.’
"""
input LogEntryCondition {
  """Checks for equality with the object’s \`id\` field."""
  id: Int

  """Checks for equality with the object’s \`personId\` field."""
  personId: Int

  """Checks for equality with the object’s \`organizationId\` field."""
  organizationId: Int

  """Checks for equality with the object’s \`text\` field."""
  text: String
}

"""Methods to use when ordering \`LogEntry\`."""
enum LogEntriesOrderBy {
  NATURAL
  PRIMARY_KEY_ASC
  PRIMARY_KEY_DESC
  ID_ASC
  ID_DESC
  PERSON_ID_ASC
  PERSON_ID_DESC
  ORGANIZATION_ID_ASC
  ORGANIZATION_ID_DESC
  TEXT_ASC
  TEXT_DESC
}

"""A connection to a list of \`AwsApplication\` values."""
type AwsApplicationsConnection {
  """A list of \`AwsApplication\` objects."""
  nodes: [AwsApplication]!

  """
  A list of edges which contains the \`AwsApplication\` and cursor to aid in pagination.
  """
  edges: [AwsApplicationsEdge]!

  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """The count of *all* \`AwsApplication\` you could get from the connection."""
  totalCount: Int!
}

type AwsApplication implements Node & Application {
  """
  A globally unique identifier. Can be used in various places throughout the system to identify this single value.
  """
  nodeId: ID!
  id: Int!
  name: String!
  lastDeployed: Datetime
  personId: Int
  organizationId: Int
  awsId: String

  """
  Reads a single \`Organization\` that is related to this \`AwsApplication\`.
  """
  organizationByOrganizationId: Organization

  """Reads a single \`Person\` that is related to this \`AwsApplication\`."""
  personByPersonId: Person

  """Reads and enables pagination through a set of \`Vulnerability\`."""
  vulnerabilities(
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
    condition: VulnerabilityCondition

    """Filter results to only those of the given types"""
    only: [VulnerabilityType!] @deprecated(reason: "EXPERIMENTAL")

    """The method to use when ordering \`Vulnerability\`."""
    orderBy: [VulnerabilitiesOrderBy!]
  ): VulnerabilitiesConnection!

  """
  Reads a single \`PersonOrOrganization\` that is related to this \`AwsApplication\`.
  """
  owner: PersonOrOrganization
}

interface Application implements Node {
  """
  A globally unique identifier. Can be used in various places throughout the system to identify this single value.
  """
  nodeId: ID!
  id: Int!
  name: String!
  lastDeployed: Datetime

  """Reads and enables pagination through a set of \`Vulnerability\`."""
  vulnerabilities(
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

    """Filter results to only those of the given types"""
    only: [VulnerabilityType!] @deprecated(reason: "EXPERIMENTAL")
  ): VulnerabilitiesConnection!

  """
  Reads a single \`PersonOrOrganization\` that is related to this \`Application\`.
  """
  owner: PersonOrOrganization
}

"""A connection to a list of \`Vulnerability\` values."""
type VulnerabilitiesConnection {
  """A list of \`Vulnerability\` objects."""
  nodes: [Vulnerability]!

  """
  A list of edges which contains the \`Vulnerability\` and cursor to aid in pagination.
  """
  edges: [VulnerabilitiesEdge]!

  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """The count of *all* \`Vulnerability\` you could get from the connection."""
  totalCount: Int!
}

interface Vulnerability implements Node {
  """
  A globally unique identifier. Can be used in various places throughout the system to identify this single value.
  """
  nodeId: ID!
  id: Int!
  name: String!
  cvssScore: Float!

  """Reads and enables pagination through a set of \`Application\`."""
  applications(
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

    """Filter results to only those of the given types"""
    only: [ApplicationType!] @deprecated(reason: "EXPERIMENTAL")
  ): ApplicationsConnection!

  """Reads and enables pagination through a set of \`PersonOrOrganization\`."""
  owners: PersonOrOrganizationConnection!
}

"""A connection to a list of \`Application\` values."""
type ApplicationsConnection {
  """A list of \`Application\` objects."""
  nodes: [Application]!

  """
  A list of edges which contains the \`Application\` and cursor to aid in pagination.
  """
  edges: [ApplicationsEdge]!

  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """The count of *all* \`Application\` you could get from the connection."""
  totalCount: Int!
}

"""A \`Application\` edge in the connection."""
type ApplicationsEdge {
  """A cursor for use in pagination."""
  cursor: Cursor

  """The \`Application\` at the end of the edge."""
  node: Application
}

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

enum ApplicationType {
  AwsApplication
  GcpApplication
}

"""A connection to a list of \`PersonOrOrganization\` values."""
type PersonOrOrganizationConnection {
  """A list of \`PersonOrOrganization\` objects."""
  nodes: [PersonOrOrganization]!

  """
  A list of edges which contains the \`PersonOrOrganization\` and cursor to aid in pagination.
  """
  edges: [PersonOrOrganizationEdge]!

  """Information to aid in pagination."""
  pageInfo: PageInfo!
}

union PersonOrOrganization = Organization | Person

"""A \`PersonOrOrganization\` edge in the connection."""
type PersonOrOrganizationEdge {
  """A cursor for use in pagination."""
  cursor: Cursor

  """The \`PersonOrOrganization\` at the end of the edge."""
  node: PersonOrOrganization
}

"""A \`Vulnerability\` edge in the connection."""
type VulnerabilitiesEdge {
  """A cursor for use in pagination."""
  cursor: Cursor

  """The \`Vulnerability\` at the end of the edge."""
  node: Vulnerability
}

enum VulnerabilityType {
  FirstPartyVulnerability
  ThirdPartyVulnerability
}

"""
A condition to be used against \`Vulnerability\` object types. All fields are
tested for equality and combined with a logical ‘and.’
"""
input VulnerabilityCondition {
  """Checks for equality with the object’s \`id\` field."""
  id: Int

  """Checks for equality with the object’s \`name\` field."""
  name: String

  """Checks for equality with the object’s \`cvssScore\` field."""
  cvssScore: Float
}

"""Methods to use when ordering \`Vulnerability\`."""
enum VulnerabilitiesOrderBy {
  NATURAL
  ID_ASC
  ID_DESC
  NAME_ASC
  NAME_DESC
  CVSS_SCORE_ASC
  CVSS_SCORE_DESC
}

"""A \`AwsApplication\` edge in the connection."""
type AwsApplicationsEdge {
  """A cursor for use in pagination."""
  cursor: Cursor

  """The \`AwsApplication\` at the end of the edge."""
  node: AwsApplication
}

"""
A condition to be used against \`AwsApplication\` object types. All fields are
tested for equality and combined with a logical ‘and.’
"""
input AwsApplicationCondition {
  """Checks for equality with the object’s \`id\` field."""
  id: Int

  """Checks for equality with the object’s \`name\` field."""
  name: String

  """Checks for equality with the object’s \`lastDeployed\` field."""
  lastDeployed: Datetime

  """Checks for equality with the object’s \`personId\` field."""
  personId: Int

  """Checks for equality with the object’s \`organizationId\` field."""
  organizationId: Int

  """Checks for equality with the object’s \`awsId\` field."""
  awsId: String
}

"""Methods to use when ordering \`AwsApplication\`."""
enum AwsApplicationsOrderBy {
  NATURAL
  PRIMARY_KEY_ASC
  PRIMARY_KEY_DESC
  ID_ASC
  ID_DESC
  NAME_ASC
  NAME_DESC
  LAST_DEPLOYED_ASC
  LAST_DEPLOYED_DESC
  PERSON_ID_ASC
  PERSON_ID_DESC
  ORGANIZATION_ID_ASC
  ORGANIZATION_ID_DESC
  AWS_ID_ASC
  AWS_ID_DESC
}

"""A connection to a list of \`GcpApplication\` values."""
type GcpApplicationsConnection {
  """A list of \`GcpApplication\` objects."""
  nodes: [GcpApplication]!

  """
  A list of edges which contains the \`GcpApplication\` and cursor to aid in pagination.
  """
  edges: [GcpApplicationsEdge]!

  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """The count of *all* \`GcpApplication\` you could get from the connection."""
  totalCount: Int!
}

type GcpApplication implements Node & Application {
  """
  A globally unique identifier. Can be used in various places throughout the system to identify this single value.
  """
  nodeId: ID!
  id: Int!
  name: String!
  lastDeployed: Datetime
  personId: Int
  organizationId: Int
  gcpId: String

  """
  Reads a single \`Organization\` that is related to this \`GcpApplication\`.
  """
  organizationByOrganizationId: Organization

  """Reads a single \`Person\` that is related to this \`GcpApplication\`."""
  personByPersonId: Person

  """Reads and enables pagination through a set of \`Vulnerability\`."""
  vulnerabilities(
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
    condition: VulnerabilityCondition

    """Filter results to only those of the given types"""
    only: [VulnerabilityType!] @deprecated(reason: "EXPERIMENTAL")

    """The method to use when ordering \`Vulnerability\`."""
    orderBy: [VulnerabilitiesOrderBy!]
  ): VulnerabilitiesConnection!

  """
  Reads a single \`PersonOrOrganization\` that is related to this \`GcpApplication\`.
  """
  owner: PersonOrOrganization
}

"""A \`GcpApplication\` edge in the connection."""
type GcpApplicationsEdge {
  """A cursor for use in pagination."""
  cursor: Cursor

  """The \`GcpApplication\` at the end of the edge."""
  node: GcpApplication
}

"""
A condition to be used against \`GcpApplication\` object types. All fields are
tested for equality and combined with a logical ‘and.’
"""
input GcpApplicationCondition {
  """Checks for equality with the object’s \`id\` field."""
  id: Int

  """Checks for equality with the object’s \`name\` field."""
  name: String

  """Checks for equality with the object’s \`lastDeployed\` field."""
  lastDeployed: Datetime

  """Checks for equality with the object’s \`personId\` field."""
  personId: Int

  """Checks for equality with the object’s \`organizationId\` field."""
  organizationId: Int

  """Checks for equality with the object’s \`gcpId\` field."""
  gcpId: String
}

"""Methods to use when ordering \`GcpApplication\`."""
enum GcpApplicationsOrderBy {
  NATURAL
  PRIMARY_KEY_ASC
  PRIMARY_KEY_DESC
  ID_ASC
  ID_DESC
  NAME_ASC
  NAME_DESC
  LAST_DEPLOYED_ASC
  LAST_DEPLOYED_DESC
  PERSON_ID_ASC
  PERSON_ID_DESC
  ORGANIZATION_ID_ASC
  ORGANIZATION_ID_DESC
  GCP_ID_ASC
  GCP_ID_DESC
}

"""A \`LogEntry\` edge in the connection."""
type LogEntriesEdge {
  """A cursor for use in pagination."""
  cursor: Cursor

  """The \`LogEntry\` at the end of the edge."""
  node: LogEntry
}

"""A connection to a list of \`SingleTableItem\` values."""
type SingleTableItemsConnection {
  """A list of \`SingleTableItem\` objects."""
  nodes: [SingleTableItem]!

  """
  A list of edges which contains the \`SingleTableItem\` and cursor to aid in pagination.
  """
  edges: [SingleTableItemsEdge]!

  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """
  The count of *all* \`SingleTableItem\` you could get from the connection.
  """
  totalCount: Int!
}

"""A \`SingleTableItem\` edge in the connection."""
type SingleTableItemsEdge {
  """A cursor for use in pagination."""
  cursor: Cursor

  """The \`SingleTableItem\` at the end of the edge."""
  node: SingleTableItem
}

"""
A condition to be used against \`SingleTableItem\` object types. All fields are
tested for equality and combined with a logical ‘and.’
"""
input SingleTableItemCondition {
  """Checks for equality with the object’s \`id\` field."""
  id: Int

  """Checks for equality with the object’s \`type\` field."""
  type: ItemType

  """Checks for equality with the object’s \`parentId\` field."""
  parentId: Int

  """Checks for equality with the object’s \`rootTopicId\` field."""
  rootTopicId: Int

  """Checks for equality with the object’s \`authorId\` field."""
  authorId: Int

  """Checks for equality with the object’s \`position\` field."""
  position: BigInt

  """Checks for equality with the object’s \`createdAt\` field."""
  createdAt: Datetime

  """Checks for equality with the object’s \`updatedAt\` field."""
  updatedAt: Datetime

  """Checks for equality with the object’s \`isExplicitlyArchived\` field."""
  isExplicitlyArchived: Boolean

  """Checks for equality with the object’s \`archivedAt\` field."""
  archivedAt: Datetime
}

"""Methods to use when ordering \`SingleTableItem\`."""
enum SingleTableItemsOrderBy {
  NATURAL
  PRIMARY_KEY_ASC
  PRIMARY_KEY_DESC
  ID_ASC
  ID_DESC
  TYPE_ASC
  TYPE_DESC
  PARENT_ID_ASC
  PARENT_ID_DESC
  ROOT_TOPIC_ID_ASC
  ROOT_TOPIC_ID_DESC
  AUTHOR_ID_ASC
  AUTHOR_ID_DESC
  POSITION_ASC
  POSITION_DESC
  CREATED_AT_ASC
  CREATED_AT_DESC
  UPDATED_AT_ASC
  UPDATED_AT_DESC
  IS_EXPLICITLY_ARCHIVED_ASC
  IS_EXPLICITLY_ARCHIVED_DESC
  ARCHIVED_AT_ASC
  ARCHIVED_AT_DESC
}

"""A connection to a list of \`RelationalItem\` values."""
type RelationalItemsConnection {
  """A list of \`RelationalItem\` objects."""
  nodes: [RelationalItem]!

  """
  A list of edges which contains the \`RelationalItem\` and cursor to aid in pagination.
  """
  edges: [RelationalItemsEdge]!

  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """The count of *all* \`RelationalItem\` you could get from the connection."""
  totalCount: Int!
}

interface RelationalItem implements Node {
  """
  A globally unique identifier. Can be used in various places throughout the system to identify this single value.
  """
  nodeId: ID!
  id: Int!
  type: ItemType!
  parentId: Int
  rootTopicId: Int
  authorId: Int!
  position: BigInt!
  createdAt: Datetime!
  updatedAt: Datetime!
  isExplicitlyArchived: Boolean!
  archivedAt: Datetime

  """Reads a single \`Person\` that is related to this \`RelationalItem\`."""
  personByAuthorId: Person

  """
  Reads a single \`RelationalItem\` that is related to this \`RelationalItem\`.
  """
  relationalItemByParentId: RelationalItem

  """
  Reads a single \`RelationalTopic\` that is related to this \`RelationalItem\`.
  """
  relationalTopicByRootTopicId: RelationalTopic

  """Reads and enables pagination through a set of \`RelationalItem\`."""
  relationalItemsByParentId(
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
  ): RelationalItemsConnection!

  """
  Reads and enables pagination through a set of \`RelationalItemRelation\`.
  """
  relationalItemRelationsByChildId(
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
  ): RelationalItemRelationsConnection!

  """
  Reads and enables pagination through a set of \`RelationalItemRelation\`.
  """
  relationalItemRelationsByParentId(
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
  ): RelationalItemRelationsConnection!

  """
  Reads and enables pagination through a set of \`RelationalItemRelationCompositePk\`.
  """
  relationalItemRelationCompositePksByChildId(
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
  ): RelationalItemRelationCompositePksConnection!

  """
  Reads and enables pagination through a set of \`RelationalItemRelationCompositePk\`.
  """
  relationalItemRelationCompositePksByParentId(
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
  ): RelationalItemRelationCompositePksConnection!
}

"""A connection to a list of \`RelationalItemRelation\` values."""
type RelationalItemRelationsConnection {
  """A list of \`RelationalItemRelation\` objects."""
  nodes: [RelationalItemRelation]!

  """
  A list of edges which contains the \`RelationalItemRelation\` and cursor to aid in pagination.
  """
  edges: [RelationalItemRelationsEdge]!

  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """
  The count of *all* \`RelationalItemRelation\` you could get from the connection.
  """
  totalCount: Int!
}

type RelationalItemRelation implements Node {
  """
  A globally unique identifier. Can be used in various places throughout the system to identify this single value.
  """
  nodeId: ID!
  id: Int!
  parentId: Int!
  childId: Int!

  """
  Reads a single \`RelationalItem\` that is related to this \`RelationalItemRelation\`.
  """
  relationalItemByChildId: RelationalItem

  """
  Reads a single \`RelationalItem\` that is related to this \`RelationalItemRelation\`.
  """
  relationalItemByParentId: RelationalItem
}

"""A \`RelationalItemRelation\` edge in the connection."""
type RelationalItemRelationsEdge {
  """A cursor for use in pagination."""
  cursor: Cursor

  """The \`RelationalItemRelation\` at the end of the edge."""
  node: RelationalItemRelation
}

"""A connection to a list of \`RelationalItemRelationCompositePk\` values."""
type RelationalItemRelationCompositePksConnection {
  """A list of \`RelationalItemRelationCompositePk\` objects."""
  nodes: [RelationalItemRelationCompositePk]!

  """
  A list of edges which contains the \`RelationalItemRelationCompositePk\` and cursor to aid in pagination.
  """
  edges: [RelationalItemRelationCompositePksEdge]!

  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """
  The count of *all* \`RelationalItemRelationCompositePk\` you could get from the connection.
  """
  totalCount: Int!
}

type RelationalItemRelationCompositePk implements Node {
  """
  A globally unique identifier. Can be used in various places throughout the system to identify this single value.
  """
  nodeId: ID!
  parentId: Int!
  childId: Int!

  """
  Reads a single \`RelationalItem\` that is related to this \`RelationalItemRelationCompositePk\`.
  """
  relationalItemByChildId: RelationalItem

  """
  Reads a single \`RelationalItem\` that is related to this \`RelationalItemRelationCompositePk\`.
  """
  relationalItemByParentId: RelationalItem
}

"""A \`RelationalItemRelationCompositePk\` edge in the connection."""
type RelationalItemRelationCompositePksEdge {
  """A cursor for use in pagination."""
  cursor: Cursor

  """The \`RelationalItemRelationCompositePk\` at the end of the edge."""
  node: RelationalItemRelationCompositePk
}

"""A \`RelationalItem\` edge in the connection."""
type RelationalItemsEdge {
  """A cursor for use in pagination."""
  cursor: Cursor

  """The \`RelationalItem\` at the end of the edge."""
  node: RelationalItem
}

"""
A condition to be used against \`RelationalItem\` object types. All fields are
tested for equality and combined with a logical ‘and.’
"""
input RelationalItemCondition {
  """Checks for equality with the object’s \`id\` field."""
  id: Int

  """Checks for equality with the object’s \`type\` field."""
  type: ItemType

  """Checks for equality with the object’s \`parentId\` field."""
  parentId: Int

  """Checks for equality with the object’s \`rootTopicId\` field."""
  rootTopicId: Int

  """Checks for equality with the object’s \`authorId\` field."""
  authorId: Int

  """Checks for equality with the object’s \`position\` field."""
  position: BigInt

  """Checks for equality with the object’s \`createdAt\` field."""
  createdAt: Datetime

  """Checks for equality with the object’s \`updatedAt\` field."""
  updatedAt: Datetime

  """Checks for equality with the object’s \`isExplicitlyArchived\` field."""
  isExplicitlyArchived: Boolean

  """Checks for equality with the object’s \`archivedAt\` field."""
  archivedAt: Datetime
}

"""Methods to use when ordering \`RelationalItem\`."""
enum RelationalItemsOrderBy {
  NATURAL
  PRIMARY_KEY_ASC
  PRIMARY_KEY_DESC
  ID_ASC
  ID_DESC
  TYPE_ASC
  TYPE_DESC
  PARENT_ID_ASC
  PARENT_ID_DESC
  ROOT_TOPIC_ID_ASC
  ROOT_TOPIC_ID_DESC
  AUTHOR_ID_ASC
  AUTHOR_ID_DESC
  POSITION_ASC
  POSITION_DESC
  CREATED_AT_ASC
  CREATED_AT_DESC
  UPDATED_AT_ASC
  UPDATED_AT_DESC
  IS_EXPLICITLY_ARCHIVED_ASC
  IS_EXPLICITLY_ARCHIVED_DESC
  ARCHIVED_AT_ASC
  ARCHIVED_AT_DESC
}

"""
A condition to be used against \`Application\` object types. All fields are tested
for equality and combined with a logical ‘and.’
"""
input ApplicationCondition {
  """Checks for equality with the object’s \`id\` field."""
  id: Int

  """Checks for equality with the object’s \`name\` field."""
  name: String

  """Checks for equality with the object’s \`lastDeployed\` field."""
  lastDeployed: Datetime
}

"""Methods to use when ordering \`Application\`."""
enum ApplicationsOrderBy {
  NATURAL
  ID_ASC
  ID_DESC
  NAME_ASC
  NAME_DESC
  LAST_DEPLOYED_ASC
  LAST_DEPLOYED_DESC
}

"""A connection to a list of \`SingleTableItemRelation\` values."""
type SingleTableItemRelationsConnection {
  """A list of \`SingleTableItemRelation\` objects."""
  nodes: [SingleTableItemRelation]!

  """
  A list of edges which contains the \`SingleTableItemRelation\` and cursor to aid in pagination.
  """
  edges: [SingleTableItemRelationsEdge]!

  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """
  The count of *all* \`SingleTableItemRelation\` you could get from the connection.
  """
  totalCount: Int!
}

type SingleTableItemRelation implements Node {
  """
  A globally unique identifier. Can be used in various places throughout the system to identify this single value.
  """
  nodeId: ID!
  id: Int!
  parentId: Int!
  childId: Int!

  """
  Reads a single \`SingleTableItem\` that is related to this \`SingleTableItemRelation\`.
  """
  singleTableItemByChildId: SingleTableItem

  """
  Reads a single \`SingleTableItem\` that is related to this \`SingleTableItemRelation\`.
  """
  singleTableItemByParentId: SingleTableItem
}

"""A \`SingleTableItemRelation\` edge in the connection."""
type SingleTableItemRelationsEdge {
  """A cursor for use in pagination."""
  cursor: Cursor

  """The \`SingleTableItemRelation\` at the end of the edge."""
  node: SingleTableItemRelation
}

"""A connection to a list of \`SingleTableItemRelationCompositePk\` values."""
type SingleTableItemRelationCompositePksConnection {
  """A list of \`SingleTableItemRelationCompositePk\` objects."""
  nodes: [SingleTableItemRelationCompositePk]!

  """
  A list of edges which contains the \`SingleTableItemRelationCompositePk\` and cursor to aid in pagination.
  """
  edges: [SingleTableItemRelationCompositePksEdge]!

  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """
  The count of *all* \`SingleTableItemRelationCompositePk\` you could get from the connection.
  """
  totalCount: Int!
}

type SingleTableItemRelationCompositePk implements Node {
  """
  A globally unique identifier. Can be used in various places throughout the system to identify this single value.
  """
  nodeId: ID!
  parentId: Int!
  childId: Int!

  """
  Reads a single \`SingleTableItem\` that is related to this \`SingleTableItemRelationCompositePk\`.
  """
  singleTableItemByChildId: SingleTableItem

  """
  Reads a single \`SingleTableItem\` that is related to this \`SingleTableItemRelationCompositePk\`.
  """
  singleTableItemByParentId: SingleTableItem
}

"""A \`SingleTableItemRelationCompositePk\` edge in the connection."""
type SingleTableItemRelationCompositePksEdge {
  """A cursor for use in pagination."""
  cursor: Cursor

  """The \`SingleTableItemRelationCompositePk\` at the end of the edge."""
  node: SingleTableItemRelationCompositePk
}

"""
A condition to be used against \`SingleTableItemRelation\` object types. All
fields are tested for equality and combined with a logical ‘and.’
"""
input SingleTableItemRelationCondition {
  """Checks for equality with the object’s \`id\` field."""
  id: Int

  """Checks for equality with the object’s \`parentId\` field."""
  parentId: Int

  """Checks for equality with the object’s \`childId\` field."""
  childId: Int
}

"""Methods to use when ordering \`SingleTableItemRelation\`."""
enum SingleTableItemRelationsOrderBy {
  NATURAL
  PRIMARY_KEY_ASC
  PRIMARY_KEY_DESC
  ID_ASC
  ID_DESC
  PARENT_ID_ASC
  PARENT_ID_DESC
  CHILD_ID_ASC
  CHILD_ID_DESC
}

"""
A condition to be used against \`SingleTableItemRelationCompositePk\` object
types. All fields are tested for equality and combined with a logical ‘and.’
"""
input SingleTableItemRelationCompositePkCondition {
  """Checks for equality with the object’s \`parentId\` field."""
  parentId: Int

  """Checks for equality with the object’s \`childId\` field."""
  childId: Int
}

"""Methods to use when ordering \`SingleTableItemRelationCompositePk\`."""
enum SingleTableItemRelationCompositePksOrderBy {
  NATURAL
  PRIMARY_KEY_ASC
  PRIMARY_KEY_DESC
  PARENT_ID_ASC
  PARENT_ID_DESC
  CHILD_ID_ASC
  CHILD_ID_DESC
}

type SingleTablePost implements SingleTableItem & Node {
  """
  A globally unique identifier. Can be used in various places throughout the system to identify this single value.
  """
  nodeId: ID!
  meaningOfLife: Int
  id: Int!
  type: ItemType!
  parentId: Int
  rootTopicId: Int
  authorId: Int!
  position: BigInt!
  createdAt: Datetime!
  updatedAt: Datetime!
  isExplicitlyArchived: Boolean!
  archivedAt: Datetime
  subject: String
  description: String
  note: String
  priorityId: Int

  """Reads a single \`Person\` that is related to this \`SingleTableItem\`."""
  personByAuthorId: Person

  """
  Reads a single \`SingleTableItem\` that is related to this \`SingleTableItem\`.
  """
  singleTableItemByParentId: SingleTableItem

  """Reads a single \`Priority\` that is related to this \`SingleTableItem\`."""
  priorityByPriorityId: Priority

  """Reads and enables pagination through a set of \`SingleTableItem\`."""
  singleTableItemsByParentId(
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
    condition: SingleTableItemCondition

    """The method to use when ordering \`SingleTableItem\`."""
    orderBy: [SingleTableItemsOrderBy!] = [PRIMARY_KEY_ASC]
  ): SingleTableItemsConnection!

  """
  Reads and enables pagination through a set of \`SingleTableItemRelation\`.
  """
  singleTableItemRelationsByChildId(
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
    condition: SingleTableItemRelationCondition

    """The method to use when ordering \`SingleTableItemRelation\`."""
    orderBy: [SingleTableItemRelationsOrderBy!] = [PRIMARY_KEY_ASC]
  ): SingleTableItemRelationsConnection!

  """
  Reads and enables pagination through a set of \`SingleTableItemRelation\`.
  """
  singleTableItemRelationsByParentId(
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
    condition: SingleTableItemRelationCondition

    """The method to use when ordering \`SingleTableItemRelation\`."""
    orderBy: [SingleTableItemRelationsOrderBy!] = [PRIMARY_KEY_ASC]
  ): SingleTableItemRelationsConnection!

  """
  Reads and enables pagination through a set of \`SingleTableItemRelationCompositePk\`.
  """
  singleTableItemRelationCompositePksByChildId(
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
    condition: SingleTableItemRelationCompositePkCondition

    """The method to use when ordering \`SingleTableItemRelationCompositePk\`."""
    orderBy: [SingleTableItemRelationCompositePksOrderBy!] = [PRIMARY_KEY_ASC]
  ): SingleTableItemRelationCompositePksConnection!

  """
  Reads and enables pagination through a set of \`SingleTableItemRelationCompositePk\`.
  """
  singleTableItemRelationCompositePksByParentId(
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
    condition: SingleTableItemRelationCompositePkCondition

    """The method to use when ordering \`SingleTableItemRelationCompositePk\`."""
    orderBy: [SingleTableItemRelationCompositePksOrderBy!] = [PRIMARY_KEY_ASC]
  ): SingleTableItemRelationCompositePksConnection!

  """
  Reads a single \`SingleTableTopic\` that is related to this \`SingleTablePost\`.
  """
  rootTopic: SingleTableTopic
}

type Priority implements Node {
  """
  A globally unique identifier. Can be used in various places throughout the system to identify this single value.
  """
  nodeId: ID!
  id: Int!
  title: String!

  """Reads and enables pagination through a set of \`SingleTableItem\`."""
  singleTableItemsByPriorityId(
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
    condition: SingleTableItemCondition

    """The method to use when ordering \`SingleTableItem\`."""
    orderBy: [SingleTableItemsOrderBy!] = [PRIMARY_KEY_ASC]
  ): SingleTableItemsConnection!
}

type SingleTableDivider implements SingleTableItem & Node {
  """
  A globally unique identifier. Can be used in various places throughout the system to identify this single value.
  """
  nodeId: ID!
  meaningOfLife: Int
  id: Int!
  type: ItemType!
  parentId: Int
  rootTopicId: Int
  authorId: Int!
  position: BigInt!
  createdAt: Datetime!
  updatedAt: Datetime!
  isExplicitlyArchived: Boolean!
  archivedAt: Datetime
  title: String
  color: String

  """Reads a single \`Person\` that is related to this \`SingleTableItem\`."""
  personByAuthorId: Person

  """
  Reads a single \`SingleTableItem\` that is related to this \`SingleTableItem\`.
  """
  singleTableItemByParentId: SingleTableItem

  """Reads and enables pagination through a set of \`SingleTableItem\`."""
  singleTableItemsByParentId(
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
    condition: SingleTableItemCondition

    """The method to use when ordering \`SingleTableItem\`."""
    orderBy: [SingleTableItemsOrderBy!] = [PRIMARY_KEY_ASC]
  ): SingleTableItemsConnection!

  """
  Reads and enables pagination through a set of \`SingleTableItemRelation\`.
  """
  singleTableItemRelationsByChildId(
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
    condition: SingleTableItemRelationCondition

    """The method to use when ordering \`SingleTableItemRelation\`."""
    orderBy: [SingleTableItemRelationsOrderBy!] = [PRIMARY_KEY_ASC]
  ): SingleTableItemRelationsConnection!

  """
  Reads and enables pagination through a set of \`SingleTableItemRelation\`.
  """
  singleTableItemRelationsByParentId(
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
    condition: SingleTableItemRelationCondition

    """The method to use when ordering \`SingleTableItemRelation\`."""
    orderBy: [SingleTableItemRelationsOrderBy!] = [PRIMARY_KEY_ASC]
  ): SingleTableItemRelationsConnection!

  """
  Reads and enables pagination through a set of \`SingleTableItemRelationCompositePk\`.
  """
  singleTableItemRelationCompositePksByChildId(
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
    condition: SingleTableItemRelationCompositePkCondition

    """The method to use when ordering \`SingleTableItemRelationCompositePk\`."""
    orderBy: [SingleTableItemRelationCompositePksOrderBy!] = [PRIMARY_KEY_ASC]
  ): SingleTableItemRelationCompositePksConnection!

  """
  Reads and enables pagination through a set of \`SingleTableItemRelationCompositePk\`.
  """
  singleTableItemRelationCompositePksByParentId(
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
    condition: SingleTableItemRelationCompositePkCondition

    """The method to use when ordering \`SingleTableItemRelationCompositePk\`."""
    orderBy: [SingleTableItemRelationCompositePksOrderBy!] = [PRIMARY_KEY_ASC]
  ): SingleTableItemRelationCompositePksConnection!

  """
  Reads a single \`SingleTableTopic\` that is related to this \`SingleTableDivider\`.
  """
  rootTopic: SingleTableTopic
}

type SingleTableChecklist implements SingleTableItem & Node {
  """
  A globally unique identifier. Can be used in various places throughout the system to identify this single value.
  """
  nodeId: ID!
  meaningOfLife: Int
  id: Int!
  type: ItemType!
  parentId: Int
  rootTopicId: Int
  authorId: Int!
  position: BigInt!
  createdAt: Datetime!
  updatedAt: Datetime!
  isExplicitlyArchived: Boolean!
  archivedAt: Datetime
  title: String

  """Reads a single \`Person\` that is related to this \`SingleTableItem\`."""
  personByAuthorId: Person

  """
  Reads a single \`SingleTableItem\` that is related to this \`SingleTableItem\`.
  """
  singleTableItemByParentId: SingleTableItem

  """Reads and enables pagination through a set of \`SingleTableItem\`."""
  singleTableItemsByParentId(
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
    condition: SingleTableItemCondition

    """The method to use when ordering \`SingleTableItem\`."""
    orderBy: [SingleTableItemsOrderBy!] = [PRIMARY_KEY_ASC]
  ): SingleTableItemsConnection!

  """
  Reads and enables pagination through a set of \`SingleTableItemRelation\`.
  """
  singleTableItemRelationsByChildId(
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
    condition: SingleTableItemRelationCondition

    """The method to use when ordering \`SingleTableItemRelation\`."""
    orderBy: [SingleTableItemRelationsOrderBy!] = [PRIMARY_KEY_ASC]
  ): SingleTableItemRelationsConnection!

  """
  Reads and enables pagination through a set of \`SingleTableItemRelation\`.
  """
  singleTableItemRelationsByParentId(
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
    condition: SingleTableItemRelationCondition

    """The method to use when ordering \`SingleTableItemRelation\`."""
    orderBy: [SingleTableItemRelationsOrderBy!] = [PRIMARY_KEY_ASC]
  ): SingleTableItemRelationsConnection!

  """
  Reads and enables pagination through a set of \`SingleTableItemRelationCompositePk\`.
  """
  singleTableItemRelationCompositePksByChildId(
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
    condition: SingleTableItemRelationCompositePkCondition

    """The method to use when ordering \`SingleTableItemRelationCompositePk\`."""
    orderBy: [SingleTableItemRelationCompositePksOrderBy!] = [PRIMARY_KEY_ASC]
  ): SingleTableItemRelationCompositePksConnection!

  """
  Reads and enables pagination through a set of \`SingleTableItemRelationCompositePk\`.
  """
  singleTableItemRelationCompositePksByParentId(
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
    condition: SingleTableItemRelationCompositePkCondition

    """The method to use when ordering \`SingleTableItemRelationCompositePk\`."""
    orderBy: [SingleTableItemRelationCompositePksOrderBy!] = [PRIMARY_KEY_ASC]
  ): SingleTableItemRelationCompositePksConnection!

  """
  Reads a single \`SingleTableTopic\` that is related to this \`SingleTableChecklist\`.
  """
  rootTopic: SingleTableTopic

  """
  Reads a single \`SingleTableTopic\` that is related to this \`SingleTableChecklist\`.
  """
  rootChecklistTopic: SingleTableTopic
}

type SingleTableChecklistItem implements SingleTableItem & Node {
  """
  A globally unique identifier. Can be used in various places throughout the system to identify this single value.
  """
  nodeId: ID!
  meaningOfLife: Int
  id: Int!
  type: ItemType!
  parentId: Int
  rootTopicId: Int
  authorId: Int!
  position: BigInt!
  createdAt: Datetime!
  updatedAt: Datetime!
  isExplicitlyArchived: Boolean!
  archivedAt: Datetime
  description: String
  note: String
  priorityId: Int

  """Reads a single \`Person\` that is related to this \`SingleTableItem\`."""
  personByAuthorId: Person

  """
  Reads a single \`SingleTableItem\` that is related to this \`SingleTableItem\`.
  """
  singleTableItemByParentId: SingleTableItem

  """Reads a single \`Priority\` that is related to this \`SingleTableItem\`."""
  priorityByPriorityId: Priority

  """Reads and enables pagination through a set of \`SingleTableItem\`."""
  singleTableItemsByParentId(
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
    condition: SingleTableItemCondition

    """The method to use when ordering \`SingleTableItem\`."""
    orderBy: [SingleTableItemsOrderBy!] = [PRIMARY_KEY_ASC]
  ): SingleTableItemsConnection!

  """
  Reads and enables pagination through a set of \`SingleTableItemRelation\`.
  """
  singleTableItemRelationsByChildId(
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
    condition: SingleTableItemRelationCondition

    """The method to use when ordering \`SingleTableItemRelation\`."""
    orderBy: [SingleTableItemRelationsOrderBy!] = [PRIMARY_KEY_ASC]
  ): SingleTableItemRelationsConnection!

  """
  Reads and enables pagination through a set of \`SingleTableItemRelation\`.
  """
  singleTableItemRelationsByParentId(
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
    condition: SingleTableItemRelationCondition

    """The method to use when ordering \`SingleTableItemRelation\`."""
    orderBy: [SingleTableItemRelationsOrderBy!] = [PRIMARY_KEY_ASC]
  ): SingleTableItemRelationsConnection!

  """
  Reads and enables pagination through a set of \`SingleTableItemRelationCompositePk\`.
  """
  singleTableItemRelationCompositePksByChildId(
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
    condition: SingleTableItemRelationCompositePkCondition

    """The method to use when ordering \`SingleTableItemRelationCompositePk\`."""
    orderBy: [SingleTableItemRelationCompositePksOrderBy!] = [PRIMARY_KEY_ASC]
  ): SingleTableItemRelationCompositePksConnection!

  """
  Reads and enables pagination through a set of \`SingleTableItemRelationCompositePk\`.
  """
  singleTableItemRelationCompositePksByParentId(
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
    condition: SingleTableItemRelationCompositePkCondition

    """The method to use when ordering \`SingleTableItemRelationCompositePk\`."""
    orderBy: [SingleTableItemRelationCompositePksOrderBy!] = [PRIMARY_KEY_ASC]
  ): SingleTableItemRelationCompositePksConnection!

  """
  Reads a single \`SingleTableTopic\` that is related to this \`SingleTableChecklistItem\`.
  """
  rootTopic: SingleTableTopic
}

type RelationalTopic implements Node & RelationalItem {
  """
  A globally unique identifier. Can be used in various places throughout the system to identify this single value.
  """
  nodeId: ID!
  title: String!
  id: Int!
  type: ItemType!
  parentId: Int
  rootTopicId: Int
  authorId: Int!
  position: BigInt!
  createdAt: Datetime!
  updatedAt: Datetime!
  isExplicitlyArchived: Boolean!
  archivedAt: Datetime

  """Reads and enables pagination through a set of \`RelationalItem\`."""
  relationalItemsByRootTopicId(
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
    condition: RelationalItemCondition

    """The method to use when ordering \`RelationalItem\`."""
    orderBy: [RelationalItemsOrderBy!] = [PRIMARY_KEY_ASC]
  ): RelationalItemsConnection!

  """Reads a single \`Person\` that is related to this \`RelationalTopic\`."""
  personByAuthorId: Person

  """
  Reads a single \`RelationalItem\` that is related to this \`RelationalTopic\`.
  """
  relationalItemByParentId: RelationalItem

  """
  Reads a single \`RelationalTopic\` that is related to this \`RelationalTopic\`.
  """
  relationalTopicByRootTopicId: RelationalTopic

  """Reads and enables pagination through a set of \`RelationalItem\`."""
  relationalItemsByParentId(
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
    condition: RelationalItemCondition

    """The method to use when ordering \`RelationalItem\`."""
    orderBy: [RelationalItemsOrderBy!] = [PRIMARY_KEY_ASC]
  ): RelationalItemsConnection!

  """
  Reads and enables pagination through a set of \`RelationalItemRelation\`.
  """
  relationalItemRelationsByChildId(
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
    condition: RelationalItemRelationCondition

    """The method to use when ordering \`RelationalItemRelation\`."""
    orderBy: [RelationalItemRelationsOrderBy!] = [PRIMARY_KEY_ASC]
  ): RelationalItemRelationsConnection!

  """
  Reads and enables pagination through a set of \`RelationalItemRelation\`.
  """
  relationalItemRelationsByParentId(
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
    condition: RelationalItemRelationCondition

    """The method to use when ordering \`RelationalItemRelation\`."""
    orderBy: [RelationalItemRelationsOrderBy!] = [PRIMARY_KEY_ASC]
  ): RelationalItemRelationsConnection!

  """
  Reads and enables pagination through a set of \`RelationalItemRelationCompositePk\`.
  """
  relationalItemRelationCompositePksByChildId(
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
    condition: RelationalItemRelationCompositePkCondition

    """The method to use when ordering \`RelationalItemRelationCompositePk\`."""
    orderBy: [RelationalItemRelationCompositePksOrderBy!] = [PRIMARY_KEY_ASC]
  ): RelationalItemRelationCompositePksConnection!

  """
  Reads and enables pagination through a set of \`RelationalItemRelationCompositePk\`.
  """
  relationalItemRelationCompositePksByParentId(
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
    condition: RelationalItemRelationCompositePkCondition

    """The method to use when ordering \`RelationalItemRelationCompositePk\`."""
    orderBy: [RelationalItemRelationCompositePksOrderBy!] = [PRIMARY_KEY_ASC]
  ): RelationalItemRelationCompositePksConnection!
}

"""
A condition to be used against \`RelationalItemRelation\` object types. All fields
are tested for equality and combined with a logical ‘and.’
"""
input RelationalItemRelationCondition {
  """Checks for equality with the object’s \`id\` field."""
  id: Int

  """Checks for equality with the object’s \`parentId\` field."""
  parentId: Int

  """Checks for equality with the object’s \`childId\` field."""
  childId: Int
}

"""Methods to use when ordering \`RelationalItemRelation\`."""
enum RelationalItemRelationsOrderBy {
  NATURAL
  PRIMARY_KEY_ASC
  PRIMARY_KEY_DESC
  ID_ASC
  ID_DESC
  PARENT_ID_ASC
  PARENT_ID_DESC
  CHILD_ID_ASC
  CHILD_ID_DESC
}

"""
A condition to be used against \`RelationalItemRelationCompositePk\` object types.
All fields are tested for equality and combined with a logical ‘and.’
"""
input RelationalItemRelationCompositePkCondition {
  """Checks for equality with the object’s \`parentId\` field."""
  parentId: Int

  """Checks for equality with the object’s \`childId\` field."""
  childId: Int
}

"""Methods to use when ordering \`RelationalItemRelationCompositePk\`."""
enum RelationalItemRelationCompositePksOrderBy {
  NATURAL
  PRIMARY_KEY_ASC
  PRIMARY_KEY_DESC
  PARENT_ID_ASC
  PARENT_ID_DESC
  CHILD_ID_ASC
  CHILD_ID_DESC
}

type RelationalPost implements Node & RelationalItem {
  """
  A globally unique identifier. Can be used in various places throughout the system to identify this single value.
  """
  nodeId: ID!
  title: String!
  description: String
  note: String
  id: Int!
  type: ItemType!
  parentId: Int
  rootTopicId: Int
  authorId: Int!
  position: BigInt!
  createdAt: Datetime!
  updatedAt: Datetime!
  isExplicitlyArchived: Boolean!
  archivedAt: Datetime

  """Reads a single \`Person\` that is related to this \`RelationalPost\`."""
  personByAuthorId: Person

  """
  Reads a single \`RelationalItem\` that is related to this \`RelationalPost\`.
  """
  relationalItemByParentId: RelationalItem

  """
  Reads a single \`RelationalTopic\` that is related to this \`RelationalPost\`.
  """
  relationalTopicByRootTopicId: RelationalTopic

  """Reads and enables pagination through a set of \`RelationalItem\`."""
  relationalItemsByParentId(
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
    condition: RelationalItemCondition

    """The method to use when ordering \`RelationalItem\`."""
    orderBy: [RelationalItemsOrderBy!] = [PRIMARY_KEY_ASC]
  ): RelationalItemsConnection!

  """
  Reads and enables pagination through a set of \`RelationalItemRelation\`.
  """
  relationalItemRelationsByChildId(
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
    condition: RelationalItemRelationCondition

    """The method to use when ordering \`RelationalItemRelation\`."""
    orderBy: [RelationalItemRelationsOrderBy!] = [PRIMARY_KEY_ASC]
  ): RelationalItemRelationsConnection!

  """
  Reads and enables pagination through a set of \`RelationalItemRelation\`.
  """
  relationalItemRelationsByParentId(
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
    condition: RelationalItemRelationCondition

    """The method to use when ordering \`RelationalItemRelation\`."""
    orderBy: [RelationalItemRelationsOrderBy!] = [PRIMARY_KEY_ASC]
  ): RelationalItemRelationsConnection!

  """
  Reads and enables pagination through a set of \`RelationalItemRelationCompositePk\`.
  """
  relationalItemRelationCompositePksByChildId(
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
    condition: RelationalItemRelationCompositePkCondition

    """The method to use when ordering \`RelationalItemRelationCompositePk\`."""
    orderBy: [RelationalItemRelationCompositePksOrderBy!] = [PRIMARY_KEY_ASC]
  ): RelationalItemRelationCompositePksConnection!

  """
  Reads and enables pagination through a set of \`RelationalItemRelationCompositePk\`.
  """
  relationalItemRelationCompositePksByParentId(
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
    condition: RelationalItemRelationCompositePkCondition

    """The method to use when ordering \`RelationalItemRelationCompositePk\`."""
    orderBy: [RelationalItemRelationCompositePksOrderBy!] = [PRIMARY_KEY_ASC]
  ): RelationalItemRelationCompositePksConnection!
}

type RelationalDivider implements Node & RelationalItem {
  """
  A globally unique identifier. Can be used in various places throughout the system to identify this single value.
  """
  nodeId: ID!
  title: String
  color: String
  id: Int!
  type: ItemType!
  parentId: Int
  rootTopicId: Int
  authorId: Int!
  position: BigInt!
  createdAt: Datetime!
  updatedAt: Datetime!
  isExplicitlyArchived: Boolean!
  archivedAt: Datetime

  """Reads a single \`Person\` that is related to this \`RelationalDivider\`."""
  personByAuthorId: Person

  """
  Reads a single \`RelationalItem\` that is related to this \`RelationalDivider\`.
  """
  relationalItemByParentId: RelationalItem

  """
  Reads a single \`RelationalTopic\` that is related to this \`RelationalDivider\`.
  """
  relationalTopicByRootTopicId: RelationalTopic

  """Reads and enables pagination through a set of \`RelationalItem\`."""
  relationalItemsByParentId(
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
    condition: RelationalItemCondition

    """The method to use when ordering \`RelationalItem\`."""
    orderBy: [RelationalItemsOrderBy!] = [PRIMARY_KEY_ASC]
  ): RelationalItemsConnection!

  """
  Reads and enables pagination through a set of \`RelationalItemRelation\`.
  """
  relationalItemRelationsByChildId(
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
    condition: RelationalItemRelationCondition

    """The method to use when ordering \`RelationalItemRelation\`."""
    orderBy: [RelationalItemRelationsOrderBy!] = [PRIMARY_KEY_ASC]
  ): RelationalItemRelationsConnection!

  """
  Reads and enables pagination through a set of \`RelationalItemRelation\`.
  """
  relationalItemRelationsByParentId(
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
    condition: RelationalItemRelationCondition

    """The method to use when ordering \`RelationalItemRelation\`."""
    orderBy: [RelationalItemRelationsOrderBy!] = [PRIMARY_KEY_ASC]
  ): RelationalItemRelationsConnection!

  """
  Reads and enables pagination through a set of \`RelationalItemRelationCompositePk\`.
  """
  relationalItemRelationCompositePksByChildId(
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
    condition: RelationalItemRelationCompositePkCondition

    """The method to use when ordering \`RelationalItemRelationCompositePk\`."""
    orderBy: [RelationalItemRelationCompositePksOrderBy!] = [PRIMARY_KEY_ASC]
  ): RelationalItemRelationCompositePksConnection!

  """
  Reads and enables pagination through a set of \`RelationalItemRelationCompositePk\`.
  """
  relationalItemRelationCompositePksByParentId(
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
    condition: RelationalItemRelationCompositePkCondition

    """The method to use when ordering \`RelationalItemRelationCompositePk\`."""
    orderBy: [RelationalItemRelationCompositePksOrderBy!] = [PRIMARY_KEY_ASC]
  ): RelationalItemRelationCompositePksConnection!
}

type RelationalChecklist implements Node & RelationalItem {
  """
  A globally unique identifier. Can be used in various places throughout the system to identify this single value.
  """
  nodeId: ID!
  title: String!
  id: Int!
  type: ItemType!
  parentId: Int
  rootTopicId: Int
  authorId: Int!
  position: BigInt!
  createdAt: Datetime!
  updatedAt: Datetime!
  isExplicitlyArchived: Boolean!
  archivedAt: Datetime

  """Reads a single \`Person\` that is related to this \`RelationalChecklist\`."""
  personByAuthorId: Person

  """
  Reads a single \`RelationalItem\` that is related to this \`RelationalChecklist\`.
  """
  relationalItemByParentId: RelationalItem

  """
  Reads a single \`RelationalTopic\` that is related to this \`RelationalChecklist\`.
  """
  relationalTopicByRootTopicId: RelationalTopic

  """Reads and enables pagination through a set of \`RelationalItem\`."""
  relationalItemsByParentId(
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
    condition: RelationalItemCondition

    """The method to use when ordering \`RelationalItem\`."""
    orderBy: [RelationalItemsOrderBy!] = [PRIMARY_KEY_ASC]
  ): RelationalItemsConnection!

  """
  Reads and enables pagination through a set of \`RelationalItemRelation\`.
  """
  relationalItemRelationsByChildId(
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
    condition: RelationalItemRelationCondition

    """The method to use when ordering \`RelationalItemRelation\`."""
    orderBy: [RelationalItemRelationsOrderBy!] = [PRIMARY_KEY_ASC]
  ): RelationalItemRelationsConnection!

  """
  Reads and enables pagination through a set of \`RelationalItemRelation\`.
  """
  relationalItemRelationsByParentId(
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
    condition: RelationalItemRelationCondition

    """The method to use when ordering \`RelationalItemRelation\`."""
    orderBy: [RelationalItemRelationsOrderBy!] = [PRIMARY_KEY_ASC]
  ): RelationalItemRelationsConnection!

  """
  Reads and enables pagination through a set of \`RelationalItemRelationCompositePk\`.
  """
  relationalItemRelationCompositePksByChildId(
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
    condition: RelationalItemRelationCompositePkCondition

    """The method to use when ordering \`RelationalItemRelationCompositePk\`."""
    orderBy: [RelationalItemRelationCompositePksOrderBy!] = [PRIMARY_KEY_ASC]
  ): RelationalItemRelationCompositePksConnection!

  """
  Reads and enables pagination through a set of \`RelationalItemRelationCompositePk\`.
  """
  relationalItemRelationCompositePksByParentId(
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
    condition: RelationalItemRelationCompositePkCondition

    """The method to use when ordering \`RelationalItemRelationCompositePk\`."""
    orderBy: [RelationalItemRelationCompositePksOrderBy!] = [PRIMARY_KEY_ASC]
  ): RelationalItemRelationCompositePksConnection!
}

type RelationalChecklistItem implements Node & RelationalItem {
  """
  A globally unique identifier. Can be used in various places throughout the system to identify this single value.
  """
  nodeId: ID!
  description: String!
  note: String
  id: Int!
  type: ItemType!
  parentId: Int
  rootTopicId: Int
  authorId: Int!
  position: BigInt!
  createdAt: Datetime!
  updatedAt: Datetime!
  isExplicitlyArchived: Boolean!
  archivedAt: Datetime

  """
  Reads a single \`Person\` that is related to this \`RelationalChecklistItem\`.
  """
  personByAuthorId: Person

  """
  Reads a single \`RelationalItem\` that is related to this \`RelationalChecklistItem\`.
  """
  relationalItemByParentId: RelationalItem

  """
  Reads a single \`RelationalTopic\` that is related to this \`RelationalChecklistItem\`.
  """
  relationalTopicByRootTopicId: RelationalTopic

  """Reads and enables pagination through a set of \`RelationalItem\`."""
  relationalItemsByParentId(
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
    condition: RelationalItemCondition

    """The method to use when ordering \`RelationalItem\`."""
    orderBy: [RelationalItemsOrderBy!] = [PRIMARY_KEY_ASC]
  ): RelationalItemsConnection!

  """
  Reads and enables pagination through a set of \`RelationalItemRelation\`.
  """
  relationalItemRelationsByChildId(
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
    condition: RelationalItemRelationCondition

    """The method to use when ordering \`RelationalItemRelation\`."""
    orderBy: [RelationalItemRelationsOrderBy!] = [PRIMARY_KEY_ASC]
  ): RelationalItemRelationsConnection!

  """
  Reads and enables pagination through a set of \`RelationalItemRelation\`.
  """
  relationalItemRelationsByParentId(
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
    condition: RelationalItemRelationCondition

    """The method to use when ordering \`RelationalItemRelation\`."""
    orderBy: [RelationalItemRelationsOrderBy!] = [PRIMARY_KEY_ASC]
  ): RelationalItemRelationsConnection!

  """
  Reads and enables pagination through a set of \`RelationalItemRelationCompositePk\`.
  """
  relationalItemRelationCompositePksByChildId(
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
    condition: RelationalItemRelationCompositePkCondition

    """The method to use when ordering \`RelationalItemRelationCompositePk\`."""
    orderBy: [RelationalItemRelationCompositePksOrderBy!] = [PRIMARY_KEY_ASC]
  ): RelationalItemRelationCompositePksConnection!

  """
  Reads and enables pagination through a set of \`RelationalItemRelationCompositePk\`.
  """
  relationalItemRelationCompositePksByParentId(
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
    condition: RelationalItemRelationCompositePkCondition

    """The method to use when ordering \`RelationalItemRelationCompositePk\`."""
    orderBy: [RelationalItemRelationCompositePksOrderBy!] = [PRIMARY_KEY_ASC]
  ): RelationalItemRelationCompositePksConnection!
}

"""The root query type which gives access points into the data universe."""
type Query implements Node {
  """
  Exposes the root query type nested one level down. This is helpful for Relay 1
  which can only query top level fields if they are in a particular form.
  """
  query: Query!

  """
  The root query type must be a \`Node\` to work well with Relay 1 mutations. This just resolves to \`query\`.
  """
  nodeId: ID!

  """Fetches an object given its globally unique \`ID\`."""
  node(
    """The globally unique \`ID\`."""
    nodeId: ID!
  ): Node

  """Get a single \`Organization\`."""
  organizationByOrganizationId(organizationId: Int!): Organization

  """Get a single \`Organization\`."""
  organizationByName(name: String!): Organization

  """Get a single \`Person\`."""
  personByPersonId(personId: Int!): Person

  """Get a single \`Person\`."""
  personByUsername(username: String!): Person

  """Get a single \`Priority\`."""
  priorityById(id: Int!): Priority

  """Get a single \`RelationalChecklist\`."""
  relationalChecklistByChecklistItemId(checklistItemId: Int!): RelationalChecklist

  """Get a single \`RelationalItemRelationCompositePk\`."""
  relationalItemRelationCompositePkByParentIdAndChildId(parentId: Int!, childId: Int!): RelationalItemRelationCompositePk

  """Get a single \`RelationalTopic\`."""
  relationalTopicByTopicItemId(topicItemId: Int!): RelationalTopic

  """Get a single \`SingleTableItemRelationCompositePk\`."""
  singleTableItemRelationCompositePkByParentIdAndChildId(parentId: Int!, childId: Int!): SingleTableItemRelationCompositePk

  """Get a single \`RelationalChecklistItem\`."""
  relationalChecklistItemByChecklistItemItemId(checklistItemItemId: Int!): RelationalChecklistItem

  """Get a single \`RelationalDivider\`."""
  relationalDividerByDividerItemId(dividerItemId: Int!): RelationalDivider

  """Get a single \`RelationalItemRelation\`."""
  relationalItemRelationById(id: Int!): RelationalItemRelation

  """Get a single \`RelationalItemRelation\`."""
  relationalItemRelationByParentIdAndChildId(parentId: Int!, childId: Int!): RelationalItemRelation

  """Get a single \`SingleTableItemRelation\`."""
  singleTableItemRelationById(id: Int!): SingleTableItemRelation

  """Get a single \`SingleTableItemRelation\`."""
  singleTableItemRelationByParentIdAndChildId(parentId: Int!, childId: Int!): SingleTableItemRelation

  """Get a single \`LogEntry\`."""
  logEntryById(id: Int!): LogEntry

  """Get a single \`RelationalPost\`."""
  relationalPostByPostItemId(postItemId: Int!): RelationalPost

  """Get a single \`FirstPartyVulnerability\`."""
  firstPartyVulnerabilityById(id: Int!): FirstPartyVulnerability

  """Get a single \`ThirdPartyVulnerability\`."""
  thirdPartyVulnerabilityById(id: Int!): ThirdPartyVulnerability

  """Get a single \`AwsApplication\`."""
  awsApplicationById(id: Int!): AwsApplication

  """Get a single \`GcpApplication\`."""
  gcpApplicationById(id: Int!): GcpApplication

  """Reads and enables pagination through a set of \`SingleTableItem\`."""
  allSingleTables(
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
  ): SingleTableItemsConnection
  getSingleTableTopicById(id: Int): SingleTableTopic

  """Reads a single \`SingleTableTopic\` using its globally unique \`ID\`."""
  singleTableTopic(
    """
    The globally unique \`ID\` to be used in selecting a single \`SingleTableTopic\`.
    """
    nodeId: ID!
  ): SingleTableTopic

  """Reads a single \`SingleTablePost\` using its globally unique \`ID\`."""
  singleTablePost(
    """
    The globally unique \`ID\` to be used in selecting a single \`SingleTablePost\`.
    """
    nodeId: ID!
  ): SingleTablePost

  """Reads a single \`SingleTableDivider\` using its globally unique \`ID\`."""
  singleTableDivider(
    """
    The globally unique \`ID\` to be used in selecting a single \`SingleTableDivider\`.
    """
    nodeId: ID!
  ): SingleTableDivider

  """Reads a single \`SingleTableChecklist\` using its globally unique \`ID\`."""
  singleTableChecklist(
    """
    The globally unique \`ID\` to be used in selecting a single \`SingleTableChecklist\`.
    """
    nodeId: ID!
  ): SingleTableChecklist

  """
  Reads a single \`SingleTableChecklistItem\` using its globally unique \`ID\`.
  """
  singleTableChecklistItem(
    """
    The globally unique \`ID\` to be used in selecting a single \`SingleTableChecklistItem\`.
    """
    nodeId: ID!
  ): SingleTableChecklistItem

  """Reads a single \`Organization\` using its globally unique \`ID\`."""
  organization(
    """
    The globally unique \`ID\` to be used in selecting a single \`Organization\`.
    """
    nodeId: ID!
  ): Organization

  """Reads a single \`Person\` using its globally unique \`ID\`."""
  person(
    """The globally unique \`ID\` to be used in selecting a single \`Person\`."""
    nodeId: ID!
  ): Person

  """Reads a single \`Priority\` using its globally unique \`ID\`."""
  priority(
    """The globally unique \`ID\` to be used in selecting a single \`Priority\`."""
    nodeId: ID!
  ): Priority

  """Reads a single \`RelationalChecklist\` using its globally unique \`ID\`."""
  relationalChecklist(
    """
    The globally unique \`ID\` to be used in selecting a single \`RelationalChecklist\`.
    """
    nodeId: ID!
  ): RelationalChecklist

  """
  Reads a single \`RelationalItemRelationCompositePk\` using its globally unique \`ID\`.
  """
  relationalItemRelationCompositePk(
    """
    The globally unique \`ID\` to be used in selecting a single \`RelationalItemRelationCompositePk\`.
    """
    nodeId: ID!
  ): RelationalItemRelationCompositePk

  """Reads a single \`RelationalTopic\` using its globally unique \`ID\`."""
  relationalTopic(
    """
    The globally unique \`ID\` to be used in selecting a single \`RelationalTopic\`.
    """
    nodeId: ID!
  ): RelationalTopic

  """
  Reads a single \`SingleTableItemRelationCompositePk\` using its globally unique \`ID\`.
  """
  singleTableItemRelationCompositePk(
    """
    The globally unique \`ID\` to be used in selecting a single \`SingleTableItemRelationCompositePk\`.
    """
    nodeId: ID!
  ): SingleTableItemRelationCompositePk

  """
  Reads a single \`RelationalChecklistItem\` using its globally unique \`ID\`.
  """
  relationalChecklistItem(
    """
    The globally unique \`ID\` to be used in selecting a single \`RelationalChecklistItem\`.
    """
    nodeId: ID!
  ): RelationalChecklistItem

  """Reads a single \`RelationalDivider\` using its globally unique \`ID\`."""
  relationalDivider(
    """
    The globally unique \`ID\` to be used in selecting a single \`RelationalDivider\`.
    """
    nodeId: ID!
  ): RelationalDivider

  """
  Reads a single \`RelationalItemRelation\` using its globally unique \`ID\`.
  """
  relationalItemRelation(
    """
    The globally unique \`ID\` to be used in selecting a single \`RelationalItemRelation\`.
    """
    nodeId: ID!
  ): RelationalItemRelation

  """
  Reads a single \`SingleTableItemRelation\` using its globally unique \`ID\`.
  """
  singleTableItemRelation(
    """
    The globally unique \`ID\` to be used in selecting a single \`SingleTableItemRelation\`.
    """
    nodeId: ID!
  ): SingleTableItemRelation

  """Reads a single \`LogEntry\` using its globally unique \`ID\`."""
  logEntry(
    """The globally unique \`ID\` to be used in selecting a single \`LogEntry\`."""
    nodeId: ID!
  ): LogEntry

  """Reads a single \`RelationalPost\` using its globally unique \`ID\`."""
  relationalPost(
    """
    The globally unique \`ID\` to be used in selecting a single \`RelationalPost\`.
    """
    nodeId: ID!
  ): RelationalPost

  """
  Reads a single \`FirstPartyVulnerability\` using its globally unique \`ID\`.
  """
  firstPartyVulnerability(
    """
    The globally unique \`ID\` to be used in selecting a single \`FirstPartyVulnerability\`.
    """
    nodeId: ID!
  ): FirstPartyVulnerability

  """
  Reads a single \`ThirdPartyVulnerability\` using its globally unique \`ID\`.
  """
  thirdPartyVulnerability(
    """
    The globally unique \`ID\` to be used in selecting a single \`ThirdPartyVulnerability\`.
    """
    nodeId: ID!
  ): ThirdPartyVulnerability

  """Reads a single \`AwsApplication\` using its globally unique \`ID\`."""
  awsApplication(
    """
    The globally unique \`ID\` to be used in selecting a single \`AwsApplication\`.
    """
    nodeId: ID!
  ): AwsApplication

  """Reads a single \`GcpApplication\` using its globally unique \`ID\`."""
  gcpApplication(
    """
    The globally unique \`ID\` to be used in selecting a single \`GcpApplication\`.
    """
    nodeId: ID!
  ): GcpApplication
  allVulnerabilities(
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
    condition: VulnerabilityCondition

    """Filter results to only those of the given types"""
    only: [VulnerabilityType!] @deprecated(reason: "EXPERIMENTAL")

    """The method to use when ordering \`Vulnerability\`."""
    orderBy: [VulnerabilitiesOrderBy!]
  ): VulnerabilitiesConnection
  allApplications(
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
    condition: ApplicationCondition

    """Filter results to only those of the given types"""
    only: [ApplicationType!] @deprecated(reason: "EXPERIMENTAL")

    """The method to use when ordering \`Application\`."""
    orderBy: [ApplicationsOrderBy!]
  ): ApplicationsConnection
  allZeroImplementations(
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
    condition: ZeroImplementationCondition

    """The method to use when ordering \`ZeroImplementation\`."""
    orderBy: [ZeroImplementationsOrderBy!]
  ): ZeroImplementationsConnection

  """Reads and enables pagination through a set of \`Organization\`."""
  allOrganizations(
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
    condition: OrganizationCondition

    """The method to use when ordering \`Organization\`."""
    orderBy: [OrganizationsOrderBy!] = [PRIMARY_KEY_ASC]
  ): OrganizationsConnection

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

  """Reads and enables pagination through a set of \`Priority\`."""
  allPriorities(
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
  ): PrioritiesConnection

  """Reads and enables pagination through a set of \`RelationalChecklist\`."""
  allRelationalChecklists(
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
    condition: RelationalChecklistCondition

    """The method to use when ordering \`RelationalChecklist\`."""
    orderBy: [RelationalChecklistsOrderBy!] = [PRIMARY_KEY_ASC]
  ): RelationalChecklistsConnection

  """
  Reads and enables pagination through a set of \`RelationalItemRelationCompositePk\`.
  """
  allRelationalItemRelationCompositePks(
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
    condition: RelationalItemRelationCompositePkCondition

    """The method to use when ordering \`RelationalItemRelationCompositePk\`."""
    orderBy: [RelationalItemRelationCompositePksOrderBy!] = [PRIMARY_KEY_ASC]
  ): RelationalItemRelationCompositePksConnection

  """Reads and enables pagination through a set of \`RelationalTopic\`."""
  allRelationalTopics(
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
    condition: RelationalTopicCondition

    """The method to use when ordering \`RelationalTopic\`."""
    orderBy: [RelationalTopicsOrderBy!] = [PRIMARY_KEY_ASC]
  ): RelationalTopicsConnection

  """
  Reads and enables pagination through a set of \`SingleTableItemRelationCompositePk\`.
  """
  allSingleTableItemRelationCompositePks(
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
    condition: SingleTableItemRelationCompositePkCondition

    """The method to use when ordering \`SingleTableItemRelationCompositePk\`."""
    orderBy: [SingleTableItemRelationCompositePksOrderBy!] = [PRIMARY_KEY_ASC]
  ): SingleTableItemRelationCompositePksConnection

  """
  Reads and enables pagination through a set of \`RelationalChecklistItem\`.
  """
  allRelationalChecklistItems(
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
    condition: RelationalChecklistItemCondition

    """The method to use when ordering \`RelationalChecklistItem\`."""
    orderBy: [RelationalChecklistItemsOrderBy!] = [PRIMARY_KEY_ASC]
  ): RelationalChecklistItemsConnection

  """Reads and enables pagination through a set of \`RelationalDivider\`."""
  allRelationalDividers(
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
    condition: RelationalDividerCondition

    """The method to use when ordering \`RelationalDivider\`."""
    orderBy: [RelationalDividersOrderBy!] = [PRIMARY_KEY_ASC]
  ): RelationalDividersConnection

  """
  Reads and enables pagination through a set of \`RelationalItemRelation\`.
  """
  allRelationalItemRelations(
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
    condition: RelationalItemRelationCondition

    """The method to use when ordering \`RelationalItemRelation\`."""
    orderBy: [RelationalItemRelationsOrderBy!] = [PRIMARY_KEY_ASC]
  ): RelationalItemRelationsConnection

  """
  Reads and enables pagination through a set of \`SingleTableItemRelation\`.
  """
  allSingleTableItemRelations(
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
    condition: SingleTableItemRelationCondition

    """The method to use when ordering \`SingleTableItemRelation\`."""
    orderBy: [SingleTableItemRelationsOrderBy!] = [PRIMARY_KEY_ASC]
  ): SingleTableItemRelationsConnection

  """Reads and enables pagination through a set of \`LogEntry\`."""
  allLogEntries(
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
    condition: LogEntryCondition

    """The method to use when ordering \`LogEntry\`."""
    orderBy: [LogEntriesOrderBy!] = [PRIMARY_KEY_ASC]
  ): LogEntriesConnection

  """Reads and enables pagination through a set of \`RelationalPost\`."""
  allRelationalPosts(
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
    condition: RelationalPostCondition

    """The method to use when ordering \`RelationalPost\`."""
    orderBy: [RelationalPostsOrderBy!] = [PRIMARY_KEY_ASC]
  ): RelationalPostsConnection

  """
  Reads and enables pagination through a set of \`FirstPartyVulnerability\`.
  """
  allFirstPartyVulnerabilities(
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
    condition: FirstPartyVulnerabilityCondition

    """The method to use when ordering \`FirstPartyVulnerability\`."""
    orderBy: [FirstPartyVulnerabilitiesOrderBy!] = [PRIMARY_KEY_ASC]
  ): FirstPartyVulnerabilitiesConnection

  """
  Reads and enables pagination through a set of \`ThirdPartyVulnerability\`.
  """
  allThirdPartyVulnerabilities(
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
    condition: ThirdPartyVulnerabilityCondition

    """The method to use when ordering \`ThirdPartyVulnerability\`."""
    orderBy: [ThirdPartyVulnerabilitiesOrderBy!] = [PRIMARY_KEY_ASC]
  ): ThirdPartyVulnerabilitiesConnection

  """Reads and enables pagination through a set of \`AwsApplication\`."""
  allAwsApplications(
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
    condition: AwsApplicationCondition

    """The method to use when ordering \`AwsApplication\`."""
    orderBy: [AwsApplicationsOrderBy!] = [PRIMARY_KEY_ASC]
  ): AwsApplicationsConnection

  """Reads and enables pagination through a set of \`GcpApplication\`."""
  allGcpApplications(
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
    condition: GcpApplicationCondition

    """The method to use when ordering \`GcpApplication\`."""
    orderBy: [GcpApplicationsOrderBy!] = [PRIMARY_KEY_ASC]
  ): GcpApplicationsConnection

  """Reads and enables pagination through a set of \`SingleTableItem\`."""
  allSingleTableItems(
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
    condition: SingleTableItemCondition

    """The method to use when ordering \`SingleTableItem\`."""
    orderBy: [SingleTableItemsOrderBy!] = [PRIMARY_KEY_ASC]
  ): SingleTableItemsConnection

  """Reads and enables pagination through a set of \`RelationalItem\`."""
  allRelationalItems(
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
    condition: RelationalItemCondition

    """The method to use when ordering \`RelationalItem\`."""
    orderBy: [RelationalItemsOrderBy!] = [PRIMARY_KEY_ASC]
  ): RelationalItemsConnection
}

type FirstPartyVulnerability implements Node & Vulnerability {
  """
  A globally unique identifier. Can be used in various places throughout the system to identify this single value.
  """
  nodeId: ID!
  cvssScoreInt: Int
  id: Int!
  name: String!
  cvssScore: Float!
  teamName: String

  """Reads and enables pagination through a set of \`Application\`."""
  applications(
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
    condition: ApplicationCondition

    """Filter results to only those of the given types"""
    only: [ApplicationType!] @deprecated(reason: "EXPERIMENTAL")

    """The method to use when ordering \`Application\`."""
    orderBy: [ApplicationsOrderBy!]
  ): ApplicationsConnection!

  """Reads and enables pagination through a set of \`PersonOrOrganization\`."""
  owners: PersonOrOrganizationConnection!
}

type ThirdPartyVulnerability implements Node & Vulnerability {
  """
  A globally unique identifier. Can be used in various places throughout the system to identify this single value.
  """
  nodeId: ID!
  cvssScoreInt: Int
  id: Int!
  name: String!
  cvssScore: Float!
  vendorName: String

  """Reads and enables pagination through a set of \`Application\`."""
  applications(
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
    condition: ApplicationCondition

    """Filter results to only those of the given types"""
    only: [ApplicationType!] @deprecated(reason: "EXPERIMENTAL")

    """The method to use when ordering \`Application\`."""
    orderBy: [ApplicationsOrderBy!]
  ): ApplicationsConnection!

  """Reads and enables pagination through a set of \`PersonOrOrganization\`."""
  owners: PersonOrOrganizationConnection!
}

"""A connection to a list of \`ZeroImplementation\` values."""
type ZeroImplementationsConnection {
  """A list of \`ZeroImplementation\` objects."""
  nodes: [ZeroImplementation]!

  """
  A list of edges which contains the \`ZeroImplementation\` and cursor to aid in pagination.
  """
  edges: [ZeroImplementationsEdge]!

  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """
  The count of *all* \`ZeroImplementation\` you could get from the connection.
  """
  totalCount: Int!
}

interface ZeroImplementation implements Node {
  """
  A globally unique identifier. Can be used in various places throughout the system to identify this single value.
  """
  nodeId: ID!
  id: Int
  name: String
}

"""A \`ZeroImplementation\` edge in the connection."""
type ZeroImplementationsEdge {
  """A cursor for use in pagination."""
  cursor: Cursor

  """The \`ZeroImplementation\` at the end of the edge."""
  node: ZeroImplementation
}

"""
A condition to be used against \`ZeroImplementation\` object types. All fields are
tested for equality and combined with a logical ‘and.’
"""
input ZeroImplementationCondition {
  """Checks for equality with the object’s \`id\` field."""
  id: Int

  """Checks for equality with the object’s \`name\` field."""
  name: String
}

"""Methods to use when ordering \`ZeroImplementation\`."""
enum ZeroImplementationsOrderBy {
  NATURAL
  ID_ASC
  ID_DESC
  NAME_ASC
  NAME_DESC
}

"""A connection to a list of \`Organization\` values."""
type OrganizationsConnection {
  """A list of \`Organization\` objects."""
  nodes: [Organization]!

  """
  A list of edges which contains the \`Organization\` and cursor to aid in pagination.
  """
  edges: [OrganizationsEdge]!

  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """The count of *all* \`Organization\` you could get from the connection."""
  totalCount: Int!
}

"""A \`Organization\` edge in the connection."""
type OrganizationsEdge {
  """A cursor for use in pagination."""
  cursor: Cursor

  """The \`Organization\` at the end of the edge."""
  node: Organization
}

"""
A condition to be used against \`Organization\` object types. All fields are
tested for equality and combined with a logical ‘and.’
"""
input OrganizationCondition {
  """Checks for equality with the object’s \`organizationId\` field."""
  organizationId: Int

  """Checks for equality with the object’s \`name\` field."""
  name: String
}

"""Methods to use when ordering \`Organization\`."""
enum OrganizationsOrderBy {
  NATURAL
  PRIMARY_KEY_ASC
  PRIMARY_KEY_DESC
  ORGANIZATION_ID_ASC
  ORGANIZATION_ID_DESC
  NAME_ASC
  NAME_DESC
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

"""
A condition to be used against \`Person\` object types. All fields are tested for equality and combined with a logical ‘and.’
"""
input PersonCondition {
  """Checks for equality with the object’s \`personId\` field."""
  personId: Int

  """Checks for equality with the object’s \`username\` field."""
  username: String
}

"""Methods to use when ordering \`Person\`."""
enum PeopleOrderBy {
  NATURAL
  PRIMARY_KEY_ASC
  PRIMARY_KEY_DESC
  PERSON_ID_ASC
  PERSON_ID_DESC
  USERNAME_ASC
  USERNAME_DESC
}

"""A connection to a list of \`Priority\` values."""
type PrioritiesConnection {
  """A list of \`Priority\` objects."""
  nodes: [Priority]!

  """
  A list of edges which contains the \`Priority\` and cursor to aid in pagination.
  """
  edges: [PrioritiesEdge]!

  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """The count of *all* \`Priority\` you could get from the connection."""
  totalCount: Int!
}

"""A \`Priority\` edge in the connection."""
type PrioritiesEdge {
  """A cursor for use in pagination."""
  cursor: Cursor

  """The \`Priority\` at the end of the edge."""
  node: Priority
}

"""A connection to a list of \`RelationalChecklist\` values."""
type RelationalChecklistsConnection {
  """A list of \`RelationalChecklist\` objects."""
  nodes: [RelationalChecklist]!

  """
  A list of edges which contains the \`RelationalChecklist\` and cursor to aid in pagination.
  """
  edges: [RelationalChecklistsEdge]!

  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """
  The count of *all* \`RelationalChecklist\` you could get from the connection.
  """
  totalCount: Int!
}

"""A \`RelationalChecklist\` edge in the connection."""
type RelationalChecklistsEdge {
  """A cursor for use in pagination."""
  cursor: Cursor

  """The \`RelationalChecklist\` at the end of the edge."""
  node: RelationalChecklist
}

"""
A condition to be used against \`RelationalChecklist\` object types. All fields
are tested for equality and combined with a logical ‘and.’
"""
input RelationalChecklistCondition {
  """Checks for equality with the object’s \`title\` field."""
  title: String

  """Checks for equality with the object’s \`id\` field."""
  id: Int

  """Checks for equality with the object’s \`type\` field."""
  type: ItemType

  """Checks for equality with the object’s \`parentId\` field."""
  parentId: Int

  """Checks for equality with the object’s \`rootTopicId\` field."""
  rootTopicId: Int

  """Checks for equality with the object’s \`authorId\` field."""
  authorId: Int

  """Checks for equality with the object’s \`position\` field."""
  position: BigInt

  """Checks for equality with the object’s \`createdAt\` field."""
  createdAt: Datetime

  """Checks for equality with the object’s \`updatedAt\` field."""
  updatedAt: Datetime

  """Checks for equality with the object’s \`isExplicitlyArchived\` field."""
  isExplicitlyArchived: Boolean

  """Checks for equality with the object’s \`archivedAt\` field."""
  archivedAt: Datetime
}

"""Methods to use when ordering \`RelationalChecklist\`."""
enum RelationalChecklistsOrderBy {
  NATURAL
  PRIMARY_KEY_ASC
  PRIMARY_KEY_DESC
  TITLE_ASC
  TITLE_DESC
  ID_ASC
  ID_DESC
  TYPE_ASC
  TYPE_DESC
  PARENT_ID_ASC
  PARENT_ID_DESC
  ROOT_TOPIC_ID_ASC
  ROOT_TOPIC_ID_DESC
  AUTHOR_ID_ASC
  AUTHOR_ID_DESC
  POSITION_ASC
  POSITION_DESC
  CREATED_AT_ASC
  CREATED_AT_DESC
  UPDATED_AT_ASC
  UPDATED_AT_DESC
  IS_EXPLICITLY_ARCHIVED_ASC
  IS_EXPLICITLY_ARCHIVED_DESC
  ARCHIVED_AT_ASC
  ARCHIVED_AT_DESC
}

"""A connection to a list of \`RelationalTopic\` values."""
type RelationalTopicsConnection {
  """A list of \`RelationalTopic\` objects."""
  nodes: [RelationalTopic]!

  """
  A list of edges which contains the \`RelationalTopic\` and cursor to aid in pagination.
  """
  edges: [RelationalTopicsEdge]!

  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """
  The count of *all* \`RelationalTopic\` you could get from the connection.
  """
  totalCount: Int!
}

"""A \`RelationalTopic\` edge in the connection."""
type RelationalTopicsEdge {
  """A cursor for use in pagination."""
  cursor: Cursor

  """The \`RelationalTopic\` at the end of the edge."""
  node: RelationalTopic
}

"""
A condition to be used against \`RelationalTopic\` object types. All fields are
tested for equality and combined with a logical ‘and.’
"""
input RelationalTopicCondition {
  """Checks for equality with the object’s \`title\` field."""
  title: String

  """Checks for equality with the object’s \`id\` field."""
  id: Int

  """Checks for equality with the object’s \`type\` field."""
  type: ItemType

  """Checks for equality with the object’s \`parentId\` field."""
  parentId: Int

  """Checks for equality with the object’s \`rootTopicId\` field."""
  rootTopicId: Int

  """Checks for equality with the object’s \`authorId\` field."""
  authorId: Int

  """Checks for equality with the object’s \`position\` field."""
  position: BigInt

  """Checks for equality with the object’s \`createdAt\` field."""
  createdAt: Datetime

  """Checks for equality with the object’s \`updatedAt\` field."""
  updatedAt: Datetime

  """Checks for equality with the object’s \`isExplicitlyArchived\` field."""
  isExplicitlyArchived: Boolean

  """Checks for equality with the object’s \`archivedAt\` field."""
  archivedAt: Datetime
}

"""Methods to use when ordering \`RelationalTopic\`."""
enum RelationalTopicsOrderBy {
  NATURAL
  PRIMARY_KEY_ASC
  PRIMARY_KEY_DESC
  TITLE_ASC
  TITLE_DESC
  ID_ASC
  ID_DESC
  TYPE_ASC
  TYPE_DESC
  PARENT_ID_ASC
  PARENT_ID_DESC
  ROOT_TOPIC_ID_ASC
  ROOT_TOPIC_ID_DESC
  AUTHOR_ID_ASC
  AUTHOR_ID_DESC
  POSITION_ASC
  POSITION_DESC
  CREATED_AT_ASC
  CREATED_AT_DESC
  UPDATED_AT_ASC
  UPDATED_AT_DESC
  IS_EXPLICITLY_ARCHIVED_ASC
  IS_EXPLICITLY_ARCHIVED_DESC
  ARCHIVED_AT_ASC
  ARCHIVED_AT_DESC
}

"""A connection to a list of \`RelationalChecklistItem\` values."""
type RelationalChecklistItemsConnection {
  """A list of \`RelationalChecklistItem\` objects."""
  nodes: [RelationalChecklistItem]!

  """
  A list of edges which contains the \`RelationalChecklistItem\` and cursor to aid in pagination.
  """
  edges: [RelationalChecklistItemsEdge]!

  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """
  The count of *all* \`RelationalChecklistItem\` you could get from the connection.
  """
  totalCount: Int!
}

"""A \`RelationalChecklistItem\` edge in the connection."""
type RelationalChecklistItemsEdge {
  """A cursor for use in pagination."""
  cursor: Cursor

  """The \`RelationalChecklistItem\` at the end of the edge."""
  node: RelationalChecklistItem
}

"""
A condition to be used against \`RelationalChecklistItem\` object types. All
fields are tested for equality and combined with a logical ‘and.’
"""
input RelationalChecklistItemCondition {
  """Checks for equality with the object’s \`description\` field."""
  description: String

  """Checks for equality with the object’s \`note\` field."""
  note: String

  """Checks for equality with the object’s \`id\` field."""
  id: Int

  """Checks for equality with the object’s \`type\` field."""
  type: ItemType

  """Checks for equality with the object’s \`parentId\` field."""
  parentId: Int

  """Checks for equality with the object’s \`rootTopicId\` field."""
  rootTopicId: Int

  """Checks for equality with the object’s \`authorId\` field."""
  authorId: Int

  """Checks for equality with the object’s \`position\` field."""
  position: BigInt

  """Checks for equality with the object’s \`createdAt\` field."""
  createdAt: Datetime

  """Checks for equality with the object’s \`updatedAt\` field."""
  updatedAt: Datetime

  """Checks for equality with the object’s \`isExplicitlyArchived\` field."""
  isExplicitlyArchived: Boolean

  """Checks for equality with the object’s \`archivedAt\` field."""
  archivedAt: Datetime
}

"""Methods to use when ordering \`RelationalChecklistItem\`."""
enum RelationalChecklistItemsOrderBy {
  NATURAL
  PRIMARY_KEY_ASC
  PRIMARY_KEY_DESC
  DESCRIPTION_ASC
  DESCRIPTION_DESC
  NOTE_ASC
  NOTE_DESC
  ID_ASC
  ID_DESC
  TYPE_ASC
  TYPE_DESC
  PARENT_ID_ASC
  PARENT_ID_DESC
  ROOT_TOPIC_ID_ASC
  ROOT_TOPIC_ID_DESC
  AUTHOR_ID_ASC
  AUTHOR_ID_DESC
  POSITION_ASC
  POSITION_DESC
  CREATED_AT_ASC
  CREATED_AT_DESC
  UPDATED_AT_ASC
  UPDATED_AT_DESC
  IS_EXPLICITLY_ARCHIVED_ASC
  IS_EXPLICITLY_ARCHIVED_DESC
  ARCHIVED_AT_ASC
  ARCHIVED_AT_DESC
}

"""A connection to a list of \`RelationalDivider\` values."""
type RelationalDividersConnection {
  """A list of \`RelationalDivider\` objects."""
  nodes: [RelationalDivider]!

  """
  A list of edges which contains the \`RelationalDivider\` and cursor to aid in pagination.
  """
  edges: [RelationalDividersEdge]!

  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """
  The count of *all* \`RelationalDivider\` you could get from the connection.
  """
  totalCount: Int!
}

"""A \`RelationalDivider\` edge in the connection."""
type RelationalDividersEdge {
  """A cursor for use in pagination."""
  cursor: Cursor

  """The \`RelationalDivider\` at the end of the edge."""
  node: RelationalDivider
}

"""
A condition to be used against \`RelationalDivider\` object types. All fields are
tested for equality and combined with a logical ‘and.’
"""
input RelationalDividerCondition {
  """Checks for equality with the object’s \`title\` field."""
  title: String

  """Checks for equality with the object’s \`color\` field."""
  color: String

  """Checks for equality with the object’s \`id\` field."""
  id: Int

  """Checks for equality with the object’s \`type\` field."""
  type: ItemType

  """Checks for equality with the object’s \`parentId\` field."""
  parentId: Int

  """Checks for equality with the object’s \`rootTopicId\` field."""
  rootTopicId: Int

  """Checks for equality with the object’s \`authorId\` field."""
  authorId: Int

  """Checks for equality with the object’s \`position\` field."""
  position: BigInt

  """Checks for equality with the object’s \`createdAt\` field."""
  createdAt: Datetime

  """Checks for equality with the object’s \`updatedAt\` field."""
  updatedAt: Datetime

  """Checks for equality with the object’s \`isExplicitlyArchived\` field."""
  isExplicitlyArchived: Boolean

  """Checks for equality with the object’s \`archivedAt\` field."""
  archivedAt: Datetime
}

"""Methods to use when ordering \`RelationalDivider\`."""
enum RelationalDividersOrderBy {
  NATURAL
  PRIMARY_KEY_ASC
  PRIMARY_KEY_DESC
  TITLE_ASC
  TITLE_DESC
  COLOR_ASC
  COLOR_DESC
  ID_ASC
  ID_DESC
  TYPE_ASC
  TYPE_DESC
  PARENT_ID_ASC
  PARENT_ID_DESC
  ROOT_TOPIC_ID_ASC
  ROOT_TOPIC_ID_DESC
  AUTHOR_ID_ASC
  AUTHOR_ID_DESC
  POSITION_ASC
  POSITION_DESC
  CREATED_AT_ASC
  CREATED_AT_DESC
  UPDATED_AT_ASC
  UPDATED_AT_DESC
  IS_EXPLICITLY_ARCHIVED_ASC
  IS_EXPLICITLY_ARCHIVED_DESC
  ARCHIVED_AT_ASC
  ARCHIVED_AT_DESC
}

"""A connection to a list of \`RelationalPost\` values."""
type RelationalPostsConnection {
  """A list of \`RelationalPost\` objects."""
  nodes: [RelationalPost]!

  """
  A list of edges which contains the \`RelationalPost\` and cursor to aid in pagination.
  """
  edges: [RelationalPostsEdge]!

  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """The count of *all* \`RelationalPost\` you could get from the connection."""
  totalCount: Int!
}

"""A \`RelationalPost\` edge in the connection."""
type RelationalPostsEdge {
  """A cursor for use in pagination."""
  cursor: Cursor

  """The \`RelationalPost\` at the end of the edge."""
  node: RelationalPost
}

"""
A condition to be used against \`RelationalPost\` object types. All fields are
tested for equality and combined with a logical ‘and.’
"""
input RelationalPostCondition {
  """Checks for equality with the object’s \`title\` field."""
  title: String

  """Checks for equality with the object’s \`description\` field."""
  description: String

  """Checks for equality with the object’s \`note\` field."""
  note: String

  """Checks for equality with the object’s \`id\` field."""
  id: Int

  """Checks for equality with the object’s \`type\` field."""
  type: ItemType

  """Checks for equality with the object’s \`parentId\` field."""
  parentId: Int

  """Checks for equality with the object’s \`rootTopicId\` field."""
  rootTopicId: Int

  """Checks for equality with the object’s \`authorId\` field."""
  authorId: Int

  """Checks for equality with the object’s \`position\` field."""
  position: BigInt

  """Checks for equality with the object’s \`createdAt\` field."""
  createdAt: Datetime

  """Checks for equality with the object’s \`updatedAt\` field."""
  updatedAt: Datetime

  """Checks for equality with the object’s \`isExplicitlyArchived\` field."""
  isExplicitlyArchived: Boolean

  """Checks for equality with the object’s \`archivedAt\` field."""
  archivedAt: Datetime
}

"""Methods to use when ordering \`RelationalPost\`."""
enum RelationalPostsOrderBy {
  NATURAL
  PRIMARY_KEY_ASC
  PRIMARY_KEY_DESC
  TITLE_ASC
  TITLE_DESC
  DESCRIPTION_ASC
  DESCRIPTION_DESC
  NOTE_ASC
  NOTE_DESC
  ID_ASC
  ID_DESC
  TYPE_ASC
  TYPE_DESC
  PARENT_ID_ASC
  PARENT_ID_DESC
  ROOT_TOPIC_ID_ASC
  ROOT_TOPIC_ID_DESC
  AUTHOR_ID_ASC
  AUTHOR_ID_DESC
  POSITION_ASC
  POSITION_DESC
  CREATED_AT_ASC
  CREATED_AT_DESC
  UPDATED_AT_ASC
  UPDATED_AT_DESC
  IS_EXPLICITLY_ARCHIVED_ASC
  IS_EXPLICITLY_ARCHIVED_DESC
  ARCHIVED_AT_ASC
  ARCHIVED_AT_DESC
}

"""A connection to a list of \`FirstPartyVulnerability\` values."""
type FirstPartyVulnerabilitiesConnection {
  """A list of \`FirstPartyVulnerability\` objects."""
  nodes: [FirstPartyVulnerability]!

  """
  A list of edges which contains the \`FirstPartyVulnerability\` and cursor to aid in pagination.
  """
  edges: [FirstPartyVulnerabilitiesEdge]!

  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """
  The count of *all* \`FirstPartyVulnerability\` you could get from the connection.
  """
  totalCount: Int!
}

"""A \`FirstPartyVulnerability\` edge in the connection."""
type FirstPartyVulnerabilitiesEdge {
  """A cursor for use in pagination."""
  cursor: Cursor

  """The \`FirstPartyVulnerability\` at the end of the edge."""
  node: FirstPartyVulnerability
}

"""
A condition to be used against \`FirstPartyVulnerability\` object types. All
fields are tested for equality and combined with a logical ‘and.’
"""
input FirstPartyVulnerabilityCondition {
  """Checks for equality with the object’s \`id\` field."""
  id: Int

  """Checks for equality with the object’s \`name\` field."""
  name: String

  """Checks for equality with the object’s \`cvssScore\` field."""
  cvssScore: Float

  """Checks for equality with the object’s \`teamName\` field."""
  teamName: String
}

"""Methods to use when ordering \`FirstPartyVulnerability\`."""
enum FirstPartyVulnerabilitiesOrderBy {
  NATURAL
  PRIMARY_KEY_ASC
  PRIMARY_KEY_DESC
  ID_ASC
  ID_DESC
  NAME_ASC
  NAME_DESC
  CVSS_SCORE_ASC
  CVSS_SCORE_DESC
  TEAM_NAME_ASC
  TEAM_NAME_DESC
}

"""A connection to a list of \`ThirdPartyVulnerability\` values."""
type ThirdPartyVulnerabilitiesConnection {
  """A list of \`ThirdPartyVulnerability\` objects."""
  nodes: [ThirdPartyVulnerability]!

  """
  A list of edges which contains the \`ThirdPartyVulnerability\` and cursor to aid in pagination.
  """
  edges: [ThirdPartyVulnerabilitiesEdge]!

  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """
  The count of *all* \`ThirdPartyVulnerability\` you could get from the connection.
  """
  totalCount: Int!
}

"""A \`ThirdPartyVulnerability\` edge in the connection."""
type ThirdPartyVulnerabilitiesEdge {
  """A cursor for use in pagination."""
  cursor: Cursor

  """The \`ThirdPartyVulnerability\` at the end of the edge."""
  node: ThirdPartyVulnerability
}

"""
A condition to be used against \`ThirdPartyVulnerability\` object types. All
fields are tested for equality and combined with a logical ‘and.’
"""
input ThirdPartyVulnerabilityCondition {
  """Checks for equality with the object’s \`id\` field."""
  id: Int

  """Checks for equality with the object’s \`name\` field."""
  name: String

  """Checks for equality with the object’s \`cvssScore\` field."""
  cvssScore: Float

  """Checks for equality with the object’s \`vendorName\` field."""
  vendorName: String
}

"""Methods to use when ordering \`ThirdPartyVulnerability\`."""
enum ThirdPartyVulnerabilitiesOrderBy {
  NATURAL
  PRIMARY_KEY_ASC
  PRIMARY_KEY_DESC
  ID_ASC
  ID_DESC
  NAME_ASC
  NAME_DESC
  CVSS_SCORE_ASC
  CVSS_SCORE_DESC
  VENDOR_NAME_ASC
  VENDOR_NAME_DESC
}

"""
The root mutation type which contains root level fields which mutate data.
"""
type Mutation {
  customDeleteRelationalItem(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: CustomDeleteRelationalItemInput!
  ): CustomDeleteRelationalItemPayload

  """Creates a single \`Organization\`."""
  createOrganization(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: CreateOrganizationInput!
  ): CreateOrganizationPayload

  """Creates a single \`Person\`."""
  createPerson(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: CreatePersonInput!
  ): CreatePersonPayload

  """Creates a single \`RelationalItemRelationCompositePk\`."""
  createRelationalItemRelationCompositePk(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: CreateRelationalItemRelationCompositePkInput!
  ): CreateRelationalItemRelationCompositePkPayload

  """Creates a single \`SingleTableItemRelationCompositePk\`."""
  createSingleTableItemRelationCompositePk(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: CreateSingleTableItemRelationCompositePkInput!
  ): CreateSingleTableItemRelationCompositePkPayload

  """Creates a single \`RelationalItemRelation\`."""
  createRelationalItemRelation(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: CreateRelationalItemRelationInput!
  ): CreateRelationalItemRelationPayload

  """Creates a single \`SingleTableItemRelation\`."""
  createSingleTableItemRelation(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: CreateSingleTableItemRelationInput!
  ): CreateSingleTableItemRelationPayload

  """Creates a single \`LogEntry\`."""
  createLogEntry(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: CreateLogEntryInput!
  ): CreateLogEntryPayload

  """Creates a single \`FirstPartyVulnerability\`."""
  createFirstPartyVulnerability(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: CreateFirstPartyVulnerabilityInput!
  ): CreateFirstPartyVulnerabilityPayload

  """Creates a single \`ThirdPartyVulnerability\`."""
  createThirdPartyVulnerability(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: CreateThirdPartyVulnerabilityInput!
  ): CreateThirdPartyVulnerabilityPayload

  """Creates a single \`AwsApplication\`."""
  createAwsApplication(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: CreateAwsApplicationInput!
  ): CreateAwsApplicationPayload

  """Creates a single \`GcpApplication\`."""
  createGcpApplication(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: CreateGcpApplicationInput!
  ): CreateGcpApplicationPayload

  """
  Updates a single \`Organization\` using its globally unique id and a patch.
  """
  updateOrganization(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: UpdateOrganizationInput!
  ): UpdateOrganizationPayload

  """Updates a single \`Organization\` using a unique key and a patch."""
  updateOrganizationByOrganizationId(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: UpdateOrganizationByOrganizationIdInput!
  ): UpdateOrganizationPayload

  """Updates a single \`Organization\` using a unique key and a patch."""
  updateOrganizationByName(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: UpdateOrganizationByNameInput!
  ): UpdateOrganizationPayload

  """Updates a single \`Person\` using its globally unique id and a patch."""
  updatePerson(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: UpdatePersonInput!
  ): UpdatePersonPayload

  """Updates a single \`Person\` using a unique key and a patch."""
  updatePersonByPersonId(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: UpdatePersonByPersonIdInput!
  ): UpdatePersonPayload

  """Updates a single \`Person\` using a unique key and a patch."""
  updatePersonByUsername(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: UpdatePersonByUsernameInput!
  ): UpdatePersonPayload

  """
  Updates a single \`RelationalItemRelationCompositePk\` using its globally unique id and a patch.
  """
  updateRelationalItemRelationCompositePk(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: UpdateRelationalItemRelationCompositePkInput!
  ): UpdateRelationalItemRelationCompositePkPayload

  """
  Updates a single \`RelationalItemRelationCompositePk\` using a unique key and a patch.
  """
  updateRelationalItemRelationCompositePkByParentIdAndChildId(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: UpdateRelationalItemRelationCompositePkByParentIdAndChildIdInput!
  ): UpdateRelationalItemRelationCompositePkPayload

  """
  Updates a single \`SingleTableItemRelationCompositePk\` using its globally unique id and a patch.
  """
  updateSingleTableItemRelationCompositePk(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: UpdateSingleTableItemRelationCompositePkInput!
  ): UpdateSingleTableItemRelationCompositePkPayload

  """
  Updates a single \`SingleTableItemRelationCompositePk\` using a unique key and a patch.
  """
  updateSingleTableItemRelationCompositePkByParentIdAndChildId(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: UpdateSingleTableItemRelationCompositePkByParentIdAndChildIdInput!
  ): UpdateSingleTableItemRelationCompositePkPayload

  """
  Updates a single \`RelationalItemRelation\` using its globally unique id and a patch.
  """
  updateRelationalItemRelation(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: UpdateRelationalItemRelationInput!
  ): UpdateRelationalItemRelationPayload

  """
  Updates a single \`RelationalItemRelation\` using a unique key and a patch.
  """
  updateRelationalItemRelationById(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: UpdateRelationalItemRelationByIdInput!
  ): UpdateRelationalItemRelationPayload

  """
  Updates a single \`RelationalItemRelation\` using a unique key and a patch.
  """
  updateRelationalItemRelationByParentIdAndChildId(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: UpdateRelationalItemRelationByParentIdAndChildIdInput!
  ): UpdateRelationalItemRelationPayload

  """
  Updates a single \`SingleTableItemRelation\` using its globally unique id and a patch.
  """
  updateSingleTableItemRelation(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: UpdateSingleTableItemRelationInput!
  ): UpdateSingleTableItemRelationPayload

  """
  Updates a single \`SingleTableItemRelation\` using a unique key and a patch.
  """
  updateSingleTableItemRelationById(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: UpdateSingleTableItemRelationByIdInput!
  ): UpdateSingleTableItemRelationPayload

  """
  Updates a single \`SingleTableItemRelation\` using a unique key and a patch.
  """
  updateSingleTableItemRelationByParentIdAndChildId(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: UpdateSingleTableItemRelationByParentIdAndChildIdInput!
  ): UpdateSingleTableItemRelationPayload

  """Updates a single \`LogEntry\` using its globally unique id and a patch."""
  updateLogEntry(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: UpdateLogEntryInput!
  ): UpdateLogEntryPayload

  """Updates a single \`LogEntry\` using a unique key and a patch."""
  updateLogEntryById(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: UpdateLogEntryByIdInput!
  ): UpdateLogEntryPayload

  """
  Updates a single \`FirstPartyVulnerability\` using its globally unique id and a patch.
  """
  updateFirstPartyVulnerability(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: UpdateFirstPartyVulnerabilityInput!
  ): UpdateFirstPartyVulnerabilityPayload

  """
  Updates a single \`FirstPartyVulnerability\` using a unique key and a patch.
  """
  updateFirstPartyVulnerabilityById(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: UpdateFirstPartyVulnerabilityByIdInput!
  ): UpdateFirstPartyVulnerabilityPayload

  """
  Updates a single \`ThirdPartyVulnerability\` using its globally unique id and a patch.
  """
  updateThirdPartyVulnerability(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: UpdateThirdPartyVulnerabilityInput!
  ): UpdateThirdPartyVulnerabilityPayload

  """
  Updates a single \`ThirdPartyVulnerability\` using a unique key and a patch.
  """
  updateThirdPartyVulnerabilityById(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: UpdateThirdPartyVulnerabilityByIdInput!
  ): UpdateThirdPartyVulnerabilityPayload

  """
  Updates a single \`AwsApplication\` using its globally unique id and a patch.
  """
  updateAwsApplication(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: UpdateAwsApplicationInput!
  ): UpdateAwsApplicationPayload

  """Updates a single \`AwsApplication\` using a unique key and a patch."""
  updateAwsApplicationById(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: UpdateAwsApplicationByIdInput!
  ): UpdateAwsApplicationPayload

  """
  Updates a single \`GcpApplication\` using its globally unique id and a patch.
  """
  updateGcpApplication(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: UpdateGcpApplicationInput!
  ): UpdateGcpApplicationPayload

  """Updates a single \`GcpApplication\` using a unique key and a patch."""
  updateGcpApplicationById(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: UpdateGcpApplicationByIdInput!
  ): UpdateGcpApplicationPayload

  """Deletes a single \`Organization\` using its globally unique id."""
  deleteOrganization(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: DeleteOrganizationInput!
  ): DeleteOrganizationPayload

  """Deletes a single \`Organization\` using a unique key."""
  deleteOrganizationByOrganizationId(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: DeleteOrganizationByOrganizationIdInput!
  ): DeleteOrganizationPayload

  """Deletes a single \`Organization\` using a unique key."""
  deleteOrganizationByName(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: DeleteOrganizationByNameInput!
  ): DeleteOrganizationPayload

  """Deletes a single \`Person\` using its globally unique id."""
  deletePerson(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: DeletePersonInput!
  ): DeletePersonPayload

  """Deletes a single \`Person\` using a unique key."""
  deletePersonByPersonId(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: DeletePersonByPersonIdInput!
  ): DeletePersonPayload

  """Deletes a single \`Person\` using a unique key."""
  deletePersonByUsername(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: DeletePersonByUsernameInput!
  ): DeletePersonPayload

  """
  Deletes a single \`RelationalItemRelationCompositePk\` using its globally unique id.
  """
  deleteRelationalItemRelationCompositePk(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: DeleteRelationalItemRelationCompositePkInput!
  ): DeleteRelationalItemRelationCompositePkPayload

  """
  Deletes a single \`RelationalItemRelationCompositePk\` using a unique key.
  """
  deleteRelationalItemRelationCompositePkByParentIdAndChildId(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: DeleteRelationalItemRelationCompositePkByParentIdAndChildIdInput!
  ): DeleteRelationalItemRelationCompositePkPayload

  """
  Deletes a single \`SingleTableItemRelationCompositePk\` using its globally unique id.
  """
  deleteSingleTableItemRelationCompositePk(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: DeleteSingleTableItemRelationCompositePkInput!
  ): DeleteSingleTableItemRelationCompositePkPayload

  """
  Deletes a single \`SingleTableItemRelationCompositePk\` using a unique key.
  """
  deleteSingleTableItemRelationCompositePkByParentIdAndChildId(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: DeleteSingleTableItemRelationCompositePkByParentIdAndChildIdInput!
  ): DeleteSingleTableItemRelationCompositePkPayload

  """
  Deletes a single \`RelationalItemRelation\` using its globally unique id.
  """
  deleteRelationalItemRelation(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: DeleteRelationalItemRelationInput!
  ): DeleteRelationalItemRelationPayload

  """Deletes a single \`RelationalItemRelation\` using a unique key."""
  deleteRelationalItemRelationById(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: DeleteRelationalItemRelationByIdInput!
  ): DeleteRelationalItemRelationPayload

  """Deletes a single \`RelationalItemRelation\` using a unique key."""
  deleteRelationalItemRelationByParentIdAndChildId(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: DeleteRelationalItemRelationByParentIdAndChildIdInput!
  ): DeleteRelationalItemRelationPayload

  """
  Deletes a single \`SingleTableItemRelation\` using its globally unique id.
  """
  deleteSingleTableItemRelation(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: DeleteSingleTableItemRelationInput!
  ): DeleteSingleTableItemRelationPayload

  """Deletes a single \`SingleTableItemRelation\` using a unique key."""
  deleteSingleTableItemRelationById(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: DeleteSingleTableItemRelationByIdInput!
  ): DeleteSingleTableItemRelationPayload

  """Deletes a single \`SingleTableItemRelation\` using a unique key."""
  deleteSingleTableItemRelationByParentIdAndChildId(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: DeleteSingleTableItemRelationByParentIdAndChildIdInput!
  ): DeleteSingleTableItemRelationPayload

  """Deletes a single \`LogEntry\` using its globally unique id."""
  deleteLogEntry(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: DeleteLogEntryInput!
  ): DeleteLogEntryPayload

  """Deletes a single \`LogEntry\` using a unique key."""
  deleteLogEntryById(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: DeleteLogEntryByIdInput!
  ): DeleteLogEntryPayload

  """
  Deletes a single \`FirstPartyVulnerability\` using its globally unique id.
  """
  deleteFirstPartyVulnerability(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: DeleteFirstPartyVulnerabilityInput!
  ): DeleteFirstPartyVulnerabilityPayload

  """Deletes a single \`FirstPartyVulnerability\` using a unique key."""
  deleteFirstPartyVulnerabilityById(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: DeleteFirstPartyVulnerabilityByIdInput!
  ): DeleteFirstPartyVulnerabilityPayload

  """
  Deletes a single \`ThirdPartyVulnerability\` using its globally unique id.
  """
  deleteThirdPartyVulnerability(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: DeleteThirdPartyVulnerabilityInput!
  ): DeleteThirdPartyVulnerabilityPayload

  """Deletes a single \`ThirdPartyVulnerability\` using a unique key."""
  deleteThirdPartyVulnerabilityById(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: DeleteThirdPartyVulnerabilityByIdInput!
  ): DeleteThirdPartyVulnerabilityPayload

  """Deletes a single \`AwsApplication\` using its globally unique id."""
  deleteAwsApplication(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: DeleteAwsApplicationInput!
  ): DeleteAwsApplicationPayload

  """Deletes a single \`AwsApplication\` using a unique key."""
  deleteAwsApplicationById(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: DeleteAwsApplicationByIdInput!
  ): DeleteAwsApplicationPayload

  """Deletes a single \`GcpApplication\` using its globally unique id."""
  deleteGcpApplication(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: DeleteGcpApplicationInput!
  ): DeleteGcpApplicationPayload

  """Deletes a single \`GcpApplication\` using a unique key."""
  deleteGcpApplicationById(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: DeleteGcpApplicationByIdInput!
  ): DeleteGcpApplicationPayload
}

"""The output of our \`customDeleteRelationalItem\` mutation."""
type CustomDeleteRelationalItemPayload {
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

"""All input for the \`customDeleteRelationalItem\` mutation."""
input CustomDeleteRelationalItemInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  nodeId: ID
}

"""The output of our create \`Organization\` mutation."""
type CreateOrganizationPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`Organization\` that was created by this mutation."""
  organization: Organization

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`Organization\`. May be used by Relay 1."""
  organizationEdge(
    """The method to use when ordering \`Organization\`."""
    orderBy: [OrganizationsOrderBy!]! = [PRIMARY_KEY_ASC]
  ): OrganizationsEdge
}

"""All input for the create \`Organization\` mutation."""
input CreateOrganizationInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String

  """The \`Organization\` to be created by this mutation."""
  organization: OrganizationInput!
}

"""An input for mutations affecting \`Organization\`"""
input OrganizationInput {
  organizationId: Int
  name: String!
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
  personId: Int
  username: String!
}

"""The output of our create \`RelationalItemRelationCompositePk\` mutation."""
type CreateRelationalItemRelationCompositePkPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """
  The \`RelationalItemRelationCompositePk\` that was created by this mutation.
  """
  relationalItemRelationCompositePk: RelationalItemRelationCompositePk

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """
  An edge for our \`RelationalItemRelationCompositePk\`. May be used by Relay 1.
  """
  relationalItemRelationCompositePkEdge(
    """The method to use when ordering \`RelationalItemRelationCompositePk\`."""
    orderBy: [RelationalItemRelationCompositePksOrderBy!]! = [PRIMARY_KEY_ASC]
  ): RelationalItemRelationCompositePksEdge

  """
  Reads a single \`RelationalItem\` that is related to this \`RelationalItemRelationCompositePk\`.
  """
  relationalItemByChildId: RelationalItem

  """
  Reads a single \`RelationalItem\` that is related to this \`RelationalItemRelationCompositePk\`.
  """
  relationalItemByParentId: RelationalItem
}

"""All input for the create \`RelationalItemRelationCompositePk\` mutation."""
input CreateRelationalItemRelationCompositePkInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String

  """
  The \`RelationalItemRelationCompositePk\` to be created by this mutation.
  """
  relationalItemRelationCompositePk: RelationalItemRelationCompositePkInput!
}

"""An input for mutations affecting \`RelationalItemRelationCompositePk\`"""
input RelationalItemRelationCompositePkInput {
  parentId: Int!
  childId: Int!
}

"""
The output of our create \`SingleTableItemRelationCompositePk\` mutation.
"""
type CreateSingleTableItemRelationCompositePkPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """
  The \`SingleTableItemRelationCompositePk\` that was created by this mutation.
  """
  singleTableItemRelationCompositePk: SingleTableItemRelationCompositePk

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """
  An edge for our \`SingleTableItemRelationCompositePk\`. May be used by Relay 1.
  """
  singleTableItemRelationCompositePkEdge(
    """The method to use when ordering \`SingleTableItemRelationCompositePk\`."""
    orderBy: [SingleTableItemRelationCompositePksOrderBy!]! = [PRIMARY_KEY_ASC]
  ): SingleTableItemRelationCompositePksEdge

  """
  Reads a single \`SingleTableItem\` that is related to this \`SingleTableItemRelationCompositePk\`.
  """
  singleTableItemByChildId: SingleTableItem

  """
  Reads a single \`SingleTableItem\` that is related to this \`SingleTableItemRelationCompositePk\`.
  """
  singleTableItemByParentId: SingleTableItem
}

"""
All input for the create \`SingleTableItemRelationCompositePk\` mutation.
"""
input CreateSingleTableItemRelationCompositePkInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String

  """
  The \`SingleTableItemRelationCompositePk\` to be created by this mutation.
  """
  singleTableItemRelationCompositePk: SingleTableItemRelationCompositePkInput!
}

"""An input for mutations affecting \`SingleTableItemRelationCompositePk\`"""
input SingleTableItemRelationCompositePkInput {
  parentId: Int!
  childId: Int!
}

"""The output of our create \`RelationalItemRelation\` mutation."""
type CreateRelationalItemRelationPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`RelationalItemRelation\` that was created by this mutation."""
  relationalItemRelation: RelationalItemRelation

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`RelationalItemRelation\`. May be used by Relay 1."""
  relationalItemRelationEdge(
    """The method to use when ordering \`RelationalItemRelation\`."""
    orderBy: [RelationalItemRelationsOrderBy!]! = [PRIMARY_KEY_ASC]
  ): RelationalItemRelationsEdge

  """
  Reads a single \`RelationalItem\` that is related to this \`RelationalItemRelation\`.
  """
  relationalItemByChildId: RelationalItem

  """
  Reads a single \`RelationalItem\` that is related to this \`RelationalItemRelation\`.
  """
  relationalItemByParentId: RelationalItem
}

"""All input for the create \`RelationalItemRelation\` mutation."""
input CreateRelationalItemRelationInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String

  """The \`RelationalItemRelation\` to be created by this mutation."""
  relationalItemRelation: RelationalItemRelationInput!
}

"""An input for mutations affecting \`RelationalItemRelation\`"""
input RelationalItemRelationInput {
  id: Int
  parentId: Int!
  childId: Int!
}

"""The output of our create \`SingleTableItemRelation\` mutation."""
type CreateSingleTableItemRelationPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`SingleTableItemRelation\` that was created by this mutation."""
  singleTableItemRelation: SingleTableItemRelation

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`SingleTableItemRelation\`. May be used by Relay 1."""
  singleTableItemRelationEdge(
    """The method to use when ordering \`SingleTableItemRelation\`."""
    orderBy: [SingleTableItemRelationsOrderBy!]! = [PRIMARY_KEY_ASC]
  ): SingleTableItemRelationsEdge

  """
  Reads a single \`SingleTableItem\` that is related to this \`SingleTableItemRelation\`.
  """
  singleTableItemByChildId: SingleTableItem

  """
  Reads a single \`SingleTableItem\` that is related to this \`SingleTableItemRelation\`.
  """
  singleTableItemByParentId: SingleTableItem
}

"""All input for the create \`SingleTableItemRelation\` mutation."""
input CreateSingleTableItemRelationInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String

  """The \`SingleTableItemRelation\` to be created by this mutation."""
  singleTableItemRelation: SingleTableItemRelationInput!
}

"""An input for mutations affecting \`SingleTableItemRelation\`"""
input SingleTableItemRelationInput {
  id: Int
  parentId: Int!
  childId: Int!
}

"""The output of our create \`LogEntry\` mutation."""
type CreateLogEntryPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`LogEntry\` that was created by this mutation."""
  logEntry: LogEntry

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`LogEntry\`. May be used by Relay 1."""
  logEntryEdge(
    """The method to use when ordering \`LogEntry\`."""
    orderBy: [LogEntriesOrderBy!]! = [PRIMARY_KEY_ASC]
  ): LogEntriesEdge

  """Reads a single \`Organization\` that is related to this \`LogEntry\`."""
  organizationByOrganizationId: Organization

  """Reads a single \`Person\` that is related to this \`LogEntry\`."""
  personByPersonId: Person
}

"""All input for the create \`LogEntry\` mutation."""
input CreateLogEntryInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String

  """The \`LogEntry\` to be created by this mutation."""
  logEntry: LogEntryInput!
}

"""An input for mutations affecting \`LogEntry\`"""
input LogEntryInput {
  id: Int
  personId: Int
  organizationId: Int
  text: String!
}

"""The output of our create \`FirstPartyVulnerability\` mutation."""
type CreateFirstPartyVulnerabilityPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`FirstPartyVulnerability\` that was created by this mutation."""
  firstPartyVulnerability: FirstPartyVulnerability

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`FirstPartyVulnerability\`. May be used by Relay 1."""
  firstPartyVulnerabilityEdge(
    """The method to use when ordering \`FirstPartyVulnerability\`."""
    orderBy: [FirstPartyVulnerabilitiesOrderBy!]! = [PRIMARY_KEY_ASC]
  ): FirstPartyVulnerabilitiesEdge
}

"""All input for the create \`FirstPartyVulnerability\` mutation."""
input CreateFirstPartyVulnerabilityInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String

  """The \`FirstPartyVulnerability\` to be created by this mutation."""
  firstPartyVulnerability: FirstPartyVulnerabilityInput!
}

"""An input for mutations affecting \`FirstPartyVulnerability\`"""
input FirstPartyVulnerabilityInput {
  id: Int!
  name: String!
  cvssScore: Float!
  teamName: String
}

"""The output of our create \`ThirdPartyVulnerability\` mutation."""
type CreateThirdPartyVulnerabilityPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`ThirdPartyVulnerability\` that was created by this mutation."""
  thirdPartyVulnerability: ThirdPartyVulnerability

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`ThirdPartyVulnerability\`. May be used by Relay 1."""
  thirdPartyVulnerabilityEdge(
    """The method to use when ordering \`ThirdPartyVulnerability\`."""
    orderBy: [ThirdPartyVulnerabilitiesOrderBy!]! = [PRIMARY_KEY_ASC]
  ): ThirdPartyVulnerabilitiesEdge
}

"""All input for the create \`ThirdPartyVulnerability\` mutation."""
input CreateThirdPartyVulnerabilityInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String

  """The \`ThirdPartyVulnerability\` to be created by this mutation."""
  thirdPartyVulnerability: ThirdPartyVulnerabilityInput!
}

"""An input for mutations affecting \`ThirdPartyVulnerability\`"""
input ThirdPartyVulnerabilityInput {
  id: Int!
  name: String!
  cvssScore: Float!
  vendorName: String
}

"""The output of our create \`AwsApplication\` mutation."""
type CreateAwsApplicationPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`AwsApplication\` that was created by this mutation."""
  awsApplication: AwsApplication

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`AwsApplication\`. May be used by Relay 1."""
  awsApplicationEdge(
    """The method to use when ordering \`AwsApplication\`."""
    orderBy: [AwsApplicationsOrderBy!]! = [PRIMARY_KEY_ASC]
  ): AwsApplicationsEdge

  """
  Reads a single \`Organization\` that is related to this \`AwsApplication\`.
  """
  organizationByOrganizationId: Organization

  """Reads a single \`Person\` that is related to this \`AwsApplication\`."""
  personByPersonId: Person
}

"""All input for the create \`AwsApplication\` mutation."""
input CreateAwsApplicationInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String

  """The \`AwsApplication\` to be created by this mutation."""
  awsApplication: AwsApplicationInput!
}

"""An input for mutations affecting \`AwsApplication\`"""
input AwsApplicationInput {
  id: Int!
  name: String!
  lastDeployed: Datetime
  personId: Int
  organizationId: Int
  awsId: String
}

"""The output of our create \`GcpApplication\` mutation."""
type CreateGcpApplicationPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`GcpApplication\` that was created by this mutation."""
  gcpApplication: GcpApplication

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`GcpApplication\`. May be used by Relay 1."""
  gcpApplicationEdge(
    """The method to use when ordering \`GcpApplication\`."""
    orderBy: [GcpApplicationsOrderBy!]! = [PRIMARY_KEY_ASC]
  ): GcpApplicationsEdge

  """
  Reads a single \`Organization\` that is related to this \`GcpApplication\`.
  """
  organizationByOrganizationId: Organization

  """Reads a single \`Person\` that is related to this \`GcpApplication\`."""
  personByPersonId: Person
}

"""All input for the create \`GcpApplication\` mutation."""
input CreateGcpApplicationInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String

  """The \`GcpApplication\` to be created by this mutation."""
  gcpApplication: GcpApplicationInput!
}

"""An input for mutations affecting \`GcpApplication\`"""
input GcpApplicationInput {
  id: Int!
  name: String!
  lastDeployed: Datetime
  personId: Int
  organizationId: Int
  gcpId: String
}

"""The output of our update \`Organization\` mutation."""
type UpdateOrganizationPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`Organization\` that was updated by this mutation."""
  organization: Organization

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`Organization\`. May be used by Relay 1."""
  organizationEdge(
    """The method to use when ordering \`Organization\`."""
    orderBy: [OrganizationsOrderBy!]! = [PRIMARY_KEY_ASC]
  ): OrganizationsEdge
}

"""All input for the \`updateOrganization\` mutation."""
input UpdateOrganizationInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String

  """
  The globally unique \`ID\` which will identify a single \`Organization\` to be updated.
  """
  nodeId: ID!

  """
  An object where the defined keys will be set on the \`Organization\` being updated.
  """
  organizationPatch: OrganizationPatch!
}

"""
Represents an update to a \`Organization\`. Fields that are set will be updated.
"""
input OrganizationPatch {
  organizationId: Int
  name: String
}

"""All input for the \`updateOrganizationByOrganizationId\` mutation."""
input UpdateOrganizationByOrganizationIdInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  organizationId: Int!

  """
  An object where the defined keys will be set on the \`Organization\` being updated.
  """
  organizationPatch: OrganizationPatch!
}

"""All input for the \`updateOrganizationByName\` mutation."""
input UpdateOrganizationByNameInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  name: String!

  """
  An object where the defined keys will be set on the \`Organization\` being updated.
  """
  organizationPatch: OrganizationPatch!
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

"""All input for the \`updatePerson\` mutation."""
input UpdatePersonInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String

  """
  The globally unique \`ID\` which will identify a single \`Person\` to be updated.
  """
  nodeId: ID!

  """
  An object where the defined keys will be set on the \`Person\` being updated.
  """
  personPatch: PersonPatch!
}

"""
Represents an update to a \`Person\`. Fields that are set will be updated.
"""
input PersonPatch {
  personId: Int
  username: String
}

"""All input for the \`updatePersonByPersonId\` mutation."""
input UpdatePersonByPersonIdInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  personId: Int!

  """
  An object where the defined keys will be set on the \`Person\` being updated.
  """
  personPatch: PersonPatch!
}

"""All input for the \`updatePersonByUsername\` mutation."""
input UpdatePersonByUsernameInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  username: String!

  """
  An object where the defined keys will be set on the \`Person\` being updated.
  """
  personPatch: PersonPatch!
}

"""The output of our update \`RelationalItemRelationCompositePk\` mutation."""
type UpdateRelationalItemRelationCompositePkPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """
  The \`RelationalItemRelationCompositePk\` that was updated by this mutation.
  """
  relationalItemRelationCompositePk: RelationalItemRelationCompositePk

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """
  An edge for our \`RelationalItemRelationCompositePk\`. May be used by Relay 1.
  """
  relationalItemRelationCompositePkEdge(
    """The method to use when ordering \`RelationalItemRelationCompositePk\`."""
    orderBy: [RelationalItemRelationCompositePksOrderBy!]! = [PRIMARY_KEY_ASC]
  ): RelationalItemRelationCompositePksEdge

  """
  Reads a single \`RelationalItem\` that is related to this \`RelationalItemRelationCompositePk\`.
  """
  relationalItemByChildId: RelationalItem

  """
  Reads a single \`RelationalItem\` that is related to this \`RelationalItemRelationCompositePk\`.
  """
  relationalItemByParentId: RelationalItem
}

"""All input for the \`updateRelationalItemRelationCompositePk\` mutation."""
input UpdateRelationalItemRelationCompositePkInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String

  """
  The globally unique \`ID\` which will identify a single \`RelationalItemRelationCompositePk\` to be updated.
  """
  nodeId: ID!

  """
  An object where the defined keys will be set on the \`RelationalItemRelationCompositePk\` being updated.
  """
  relationalItemRelationCompositePkPatch: RelationalItemRelationCompositePkPatch!
}

"""
Represents an update to a \`RelationalItemRelationCompositePk\`. Fields that are set will be updated.
"""
input RelationalItemRelationCompositePkPatch {
  parentId: Int
  childId: Int
}

"""
All input for the \`updateRelationalItemRelationCompositePkByParentIdAndChildId\` mutation.
"""
input UpdateRelationalItemRelationCompositePkByParentIdAndChildIdInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  parentId: Int!
  childId: Int!

  """
  An object where the defined keys will be set on the \`RelationalItemRelationCompositePk\` being updated.
  """
  relationalItemRelationCompositePkPatch: RelationalItemRelationCompositePkPatch!
}

"""
The output of our update \`SingleTableItemRelationCompositePk\` mutation.
"""
type UpdateSingleTableItemRelationCompositePkPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """
  The \`SingleTableItemRelationCompositePk\` that was updated by this mutation.
  """
  singleTableItemRelationCompositePk: SingleTableItemRelationCompositePk

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """
  An edge for our \`SingleTableItemRelationCompositePk\`. May be used by Relay 1.
  """
  singleTableItemRelationCompositePkEdge(
    """The method to use when ordering \`SingleTableItemRelationCompositePk\`."""
    orderBy: [SingleTableItemRelationCompositePksOrderBy!]! = [PRIMARY_KEY_ASC]
  ): SingleTableItemRelationCompositePksEdge

  """
  Reads a single \`SingleTableItem\` that is related to this \`SingleTableItemRelationCompositePk\`.
  """
  singleTableItemByChildId: SingleTableItem

  """
  Reads a single \`SingleTableItem\` that is related to this \`SingleTableItemRelationCompositePk\`.
  """
  singleTableItemByParentId: SingleTableItem
}

"""All input for the \`updateSingleTableItemRelationCompositePk\` mutation."""
input UpdateSingleTableItemRelationCompositePkInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String

  """
  The globally unique \`ID\` which will identify a single \`SingleTableItemRelationCompositePk\` to be updated.
  """
  nodeId: ID!

  """
  An object where the defined keys will be set on the \`SingleTableItemRelationCompositePk\` being updated.
  """
  singleTableItemRelationCompositePkPatch: SingleTableItemRelationCompositePkPatch!
}

"""
Represents an update to a \`SingleTableItemRelationCompositePk\`. Fields that are set will be updated.
"""
input SingleTableItemRelationCompositePkPatch {
  parentId: Int
  childId: Int
}

"""
All input for the \`updateSingleTableItemRelationCompositePkByParentIdAndChildId\` mutation.
"""
input UpdateSingleTableItemRelationCompositePkByParentIdAndChildIdInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  parentId: Int!
  childId: Int!

  """
  An object where the defined keys will be set on the \`SingleTableItemRelationCompositePk\` being updated.
  """
  singleTableItemRelationCompositePkPatch: SingleTableItemRelationCompositePkPatch!
}

"""The output of our update \`RelationalItemRelation\` mutation."""
type UpdateRelationalItemRelationPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`RelationalItemRelation\` that was updated by this mutation."""
  relationalItemRelation: RelationalItemRelation

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`RelationalItemRelation\`. May be used by Relay 1."""
  relationalItemRelationEdge(
    """The method to use when ordering \`RelationalItemRelation\`."""
    orderBy: [RelationalItemRelationsOrderBy!]! = [PRIMARY_KEY_ASC]
  ): RelationalItemRelationsEdge

  """
  Reads a single \`RelationalItem\` that is related to this \`RelationalItemRelation\`.
  """
  relationalItemByChildId: RelationalItem

  """
  Reads a single \`RelationalItem\` that is related to this \`RelationalItemRelation\`.
  """
  relationalItemByParentId: RelationalItem
}

"""All input for the \`updateRelationalItemRelation\` mutation."""
input UpdateRelationalItemRelationInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String

  """
  The globally unique \`ID\` which will identify a single \`RelationalItemRelation\` to be updated.
  """
  nodeId: ID!

  """
  An object where the defined keys will be set on the \`RelationalItemRelation\` being updated.
  """
  relationalItemRelationPatch: RelationalItemRelationPatch!
}

"""
Represents an update to a \`RelationalItemRelation\`. Fields that are set will be updated.
"""
input RelationalItemRelationPatch {
  id: Int
  parentId: Int
  childId: Int
}

"""All input for the \`updateRelationalItemRelationById\` mutation."""
input UpdateRelationalItemRelationByIdInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  id: Int!

  """
  An object where the defined keys will be set on the \`RelationalItemRelation\` being updated.
  """
  relationalItemRelationPatch: RelationalItemRelationPatch!
}

"""
All input for the \`updateRelationalItemRelationByParentIdAndChildId\` mutation.
"""
input UpdateRelationalItemRelationByParentIdAndChildIdInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  parentId: Int!
  childId: Int!

  """
  An object where the defined keys will be set on the \`RelationalItemRelation\` being updated.
  """
  relationalItemRelationPatch: RelationalItemRelationPatch!
}

"""The output of our update \`SingleTableItemRelation\` mutation."""
type UpdateSingleTableItemRelationPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`SingleTableItemRelation\` that was updated by this mutation."""
  singleTableItemRelation: SingleTableItemRelation

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`SingleTableItemRelation\`. May be used by Relay 1."""
  singleTableItemRelationEdge(
    """The method to use when ordering \`SingleTableItemRelation\`."""
    orderBy: [SingleTableItemRelationsOrderBy!]! = [PRIMARY_KEY_ASC]
  ): SingleTableItemRelationsEdge

  """
  Reads a single \`SingleTableItem\` that is related to this \`SingleTableItemRelation\`.
  """
  singleTableItemByChildId: SingleTableItem

  """
  Reads a single \`SingleTableItem\` that is related to this \`SingleTableItemRelation\`.
  """
  singleTableItemByParentId: SingleTableItem
}

"""All input for the \`updateSingleTableItemRelation\` mutation."""
input UpdateSingleTableItemRelationInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String

  """
  The globally unique \`ID\` which will identify a single \`SingleTableItemRelation\` to be updated.
  """
  nodeId: ID!

  """
  An object where the defined keys will be set on the \`SingleTableItemRelation\` being updated.
  """
  singleTableItemRelationPatch: SingleTableItemRelationPatch!
}

"""
Represents an update to a \`SingleTableItemRelation\`. Fields that are set will be updated.
"""
input SingleTableItemRelationPatch {
  id: Int
  parentId: Int
  childId: Int
}

"""All input for the \`updateSingleTableItemRelationById\` mutation."""
input UpdateSingleTableItemRelationByIdInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  id: Int!

  """
  An object where the defined keys will be set on the \`SingleTableItemRelation\` being updated.
  """
  singleTableItemRelationPatch: SingleTableItemRelationPatch!
}

"""
All input for the \`updateSingleTableItemRelationByParentIdAndChildId\` mutation.
"""
input UpdateSingleTableItemRelationByParentIdAndChildIdInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  parentId: Int!
  childId: Int!

  """
  An object where the defined keys will be set on the \`SingleTableItemRelation\` being updated.
  """
  singleTableItemRelationPatch: SingleTableItemRelationPatch!
}

"""The output of our update \`LogEntry\` mutation."""
type UpdateLogEntryPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`LogEntry\` that was updated by this mutation."""
  logEntry: LogEntry

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`LogEntry\`. May be used by Relay 1."""
  logEntryEdge(
    """The method to use when ordering \`LogEntry\`."""
    orderBy: [LogEntriesOrderBy!]! = [PRIMARY_KEY_ASC]
  ): LogEntriesEdge

  """Reads a single \`Organization\` that is related to this \`LogEntry\`."""
  organizationByOrganizationId: Organization

  """Reads a single \`Person\` that is related to this \`LogEntry\`."""
  personByPersonId: Person
}

"""All input for the \`updateLogEntry\` mutation."""
input UpdateLogEntryInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String

  """
  The globally unique \`ID\` which will identify a single \`LogEntry\` to be updated.
  """
  nodeId: ID!

  """
  An object where the defined keys will be set on the \`LogEntry\` being updated.
  """
  logEntryPatch: LogEntryPatch!
}

"""
Represents an update to a \`LogEntry\`. Fields that are set will be updated.
"""
input LogEntryPatch {
  id: Int
  personId: Int
  organizationId: Int
  text: String
}

"""All input for the \`updateLogEntryById\` mutation."""
input UpdateLogEntryByIdInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  id: Int!

  """
  An object where the defined keys will be set on the \`LogEntry\` being updated.
  """
  logEntryPatch: LogEntryPatch!
}

"""The output of our update \`FirstPartyVulnerability\` mutation."""
type UpdateFirstPartyVulnerabilityPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`FirstPartyVulnerability\` that was updated by this mutation."""
  firstPartyVulnerability: FirstPartyVulnerability

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`FirstPartyVulnerability\`. May be used by Relay 1."""
  firstPartyVulnerabilityEdge(
    """The method to use when ordering \`FirstPartyVulnerability\`."""
    orderBy: [FirstPartyVulnerabilitiesOrderBy!]! = [PRIMARY_KEY_ASC]
  ): FirstPartyVulnerabilitiesEdge
}

"""All input for the \`updateFirstPartyVulnerability\` mutation."""
input UpdateFirstPartyVulnerabilityInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String

  """
  The globally unique \`ID\` which will identify a single \`FirstPartyVulnerability\` to be updated.
  """
  nodeId: ID!

  """
  An object where the defined keys will be set on the \`FirstPartyVulnerability\` being updated.
  """
  firstPartyVulnerabilityPatch: FirstPartyVulnerabilityPatch!
}

"""
Represents an update to a \`FirstPartyVulnerability\`. Fields that are set will be updated.
"""
input FirstPartyVulnerabilityPatch {
  id: Int
  name: String
  cvssScore: Float
  teamName: String
}

"""All input for the \`updateFirstPartyVulnerabilityById\` mutation."""
input UpdateFirstPartyVulnerabilityByIdInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  id: Int!

  """
  An object where the defined keys will be set on the \`FirstPartyVulnerability\` being updated.
  """
  firstPartyVulnerabilityPatch: FirstPartyVulnerabilityPatch!
}

"""The output of our update \`ThirdPartyVulnerability\` mutation."""
type UpdateThirdPartyVulnerabilityPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`ThirdPartyVulnerability\` that was updated by this mutation."""
  thirdPartyVulnerability: ThirdPartyVulnerability

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`ThirdPartyVulnerability\`. May be used by Relay 1."""
  thirdPartyVulnerabilityEdge(
    """The method to use when ordering \`ThirdPartyVulnerability\`."""
    orderBy: [ThirdPartyVulnerabilitiesOrderBy!]! = [PRIMARY_KEY_ASC]
  ): ThirdPartyVulnerabilitiesEdge
}

"""All input for the \`updateThirdPartyVulnerability\` mutation."""
input UpdateThirdPartyVulnerabilityInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String

  """
  The globally unique \`ID\` which will identify a single \`ThirdPartyVulnerability\` to be updated.
  """
  nodeId: ID!

  """
  An object where the defined keys will be set on the \`ThirdPartyVulnerability\` being updated.
  """
  thirdPartyVulnerabilityPatch: ThirdPartyVulnerabilityPatch!
}

"""
Represents an update to a \`ThirdPartyVulnerability\`. Fields that are set will be updated.
"""
input ThirdPartyVulnerabilityPatch {
  id: Int
  name: String
  cvssScore: Float
  vendorName: String
}

"""All input for the \`updateThirdPartyVulnerabilityById\` mutation."""
input UpdateThirdPartyVulnerabilityByIdInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  id: Int!

  """
  An object where the defined keys will be set on the \`ThirdPartyVulnerability\` being updated.
  """
  thirdPartyVulnerabilityPatch: ThirdPartyVulnerabilityPatch!
}

"""The output of our update \`AwsApplication\` mutation."""
type UpdateAwsApplicationPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`AwsApplication\` that was updated by this mutation."""
  awsApplication: AwsApplication

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`AwsApplication\`. May be used by Relay 1."""
  awsApplicationEdge(
    """The method to use when ordering \`AwsApplication\`."""
    orderBy: [AwsApplicationsOrderBy!]! = [PRIMARY_KEY_ASC]
  ): AwsApplicationsEdge

  """
  Reads a single \`Organization\` that is related to this \`AwsApplication\`.
  """
  organizationByOrganizationId: Organization

  """Reads a single \`Person\` that is related to this \`AwsApplication\`."""
  personByPersonId: Person
}

"""All input for the \`updateAwsApplication\` mutation."""
input UpdateAwsApplicationInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String

  """
  The globally unique \`ID\` which will identify a single \`AwsApplication\` to be updated.
  """
  nodeId: ID!

  """
  An object where the defined keys will be set on the \`AwsApplication\` being updated.
  """
  awsApplicationPatch: AwsApplicationPatch!
}

"""
Represents an update to a \`AwsApplication\`. Fields that are set will be updated.
"""
input AwsApplicationPatch {
  id: Int
  name: String
  lastDeployed: Datetime
  personId: Int
  organizationId: Int
  awsId: String
}

"""All input for the \`updateAwsApplicationById\` mutation."""
input UpdateAwsApplicationByIdInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  id: Int!

  """
  An object where the defined keys will be set on the \`AwsApplication\` being updated.
  """
  awsApplicationPatch: AwsApplicationPatch!
}

"""The output of our update \`GcpApplication\` mutation."""
type UpdateGcpApplicationPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`GcpApplication\` that was updated by this mutation."""
  gcpApplication: GcpApplication

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`GcpApplication\`. May be used by Relay 1."""
  gcpApplicationEdge(
    """The method to use when ordering \`GcpApplication\`."""
    orderBy: [GcpApplicationsOrderBy!]! = [PRIMARY_KEY_ASC]
  ): GcpApplicationsEdge

  """
  Reads a single \`Organization\` that is related to this \`GcpApplication\`.
  """
  organizationByOrganizationId: Organization

  """Reads a single \`Person\` that is related to this \`GcpApplication\`."""
  personByPersonId: Person
}

"""All input for the \`updateGcpApplication\` mutation."""
input UpdateGcpApplicationInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String

  """
  The globally unique \`ID\` which will identify a single \`GcpApplication\` to be updated.
  """
  nodeId: ID!

  """
  An object where the defined keys will be set on the \`GcpApplication\` being updated.
  """
  gcpApplicationPatch: GcpApplicationPatch!
}

"""
Represents an update to a \`GcpApplication\`. Fields that are set will be updated.
"""
input GcpApplicationPatch {
  id: Int
  name: String
  lastDeployed: Datetime
  personId: Int
  organizationId: Int
  gcpId: String
}

"""All input for the \`updateGcpApplicationById\` mutation."""
input UpdateGcpApplicationByIdInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  id: Int!

  """
  An object where the defined keys will be set on the \`GcpApplication\` being updated.
  """
  gcpApplicationPatch: GcpApplicationPatch!
}

"""The output of our delete \`Organization\` mutation."""
type DeleteOrganizationPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`Organization\` that was deleted by this mutation."""
  organization: Organization
  deletedOrganizationId: ID

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`Organization\`. May be used by Relay 1."""
  organizationEdge(
    """The method to use when ordering \`Organization\`."""
    orderBy: [OrganizationsOrderBy!]! = [PRIMARY_KEY_ASC]
  ): OrganizationsEdge
}

"""All input for the \`deleteOrganization\` mutation."""
input DeleteOrganizationInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String

  """
  The globally unique \`ID\` which will identify a single \`Organization\` to be deleted.
  """
  nodeId: ID!
}

"""All input for the \`deleteOrganizationByOrganizationId\` mutation."""
input DeleteOrganizationByOrganizationIdInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  organizationId: Int!
}

"""All input for the \`deleteOrganizationByName\` mutation."""
input DeleteOrganizationByNameInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  name: String!
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
  deletedPersonId: ID

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

"""All input for the \`deletePerson\` mutation."""
input DeletePersonInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String

  """
  The globally unique \`ID\` which will identify a single \`Person\` to be deleted.
  """
  nodeId: ID!
}

"""All input for the \`deletePersonByPersonId\` mutation."""
input DeletePersonByPersonIdInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  personId: Int!
}

"""All input for the \`deletePersonByUsername\` mutation."""
input DeletePersonByUsernameInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  username: String!
}

"""The output of our delete \`RelationalItemRelationCompositePk\` mutation."""
type DeleteRelationalItemRelationCompositePkPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """
  The \`RelationalItemRelationCompositePk\` that was deleted by this mutation.
  """
  relationalItemRelationCompositePk: RelationalItemRelationCompositePk
  deletedRelationalItemRelationCompositePkId: ID

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """
  An edge for our \`RelationalItemRelationCompositePk\`. May be used by Relay 1.
  """
  relationalItemRelationCompositePkEdge(
    """The method to use when ordering \`RelationalItemRelationCompositePk\`."""
    orderBy: [RelationalItemRelationCompositePksOrderBy!]! = [PRIMARY_KEY_ASC]
  ): RelationalItemRelationCompositePksEdge

  """
  Reads a single \`RelationalItem\` that is related to this \`RelationalItemRelationCompositePk\`.
  """
  relationalItemByChildId: RelationalItem

  """
  Reads a single \`RelationalItem\` that is related to this \`RelationalItemRelationCompositePk\`.
  """
  relationalItemByParentId: RelationalItem
}

"""All input for the \`deleteRelationalItemRelationCompositePk\` mutation."""
input DeleteRelationalItemRelationCompositePkInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String

  """
  The globally unique \`ID\` which will identify a single \`RelationalItemRelationCompositePk\` to be deleted.
  """
  nodeId: ID!
}

"""
All input for the \`deleteRelationalItemRelationCompositePkByParentIdAndChildId\` mutation.
"""
input DeleteRelationalItemRelationCompositePkByParentIdAndChildIdInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  parentId: Int!
  childId: Int!
}

"""
The output of our delete \`SingleTableItemRelationCompositePk\` mutation.
"""
type DeleteSingleTableItemRelationCompositePkPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """
  The \`SingleTableItemRelationCompositePk\` that was deleted by this mutation.
  """
  singleTableItemRelationCompositePk: SingleTableItemRelationCompositePk
  deletedSingleTableItemRelationCompositePkId: ID

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """
  An edge for our \`SingleTableItemRelationCompositePk\`. May be used by Relay 1.
  """
  singleTableItemRelationCompositePkEdge(
    """The method to use when ordering \`SingleTableItemRelationCompositePk\`."""
    orderBy: [SingleTableItemRelationCompositePksOrderBy!]! = [PRIMARY_KEY_ASC]
  ): SingleTableItemRelationCompositePksEdge

  """
  Reads a single \`SingleTableItem\` that is related to this \`SingleTableItemRelationCompositePk\`.
  """
  singleTableItemByChildId: SingleTableItem

  """
  Reads a single \`SingleTableItem\` that is related to this \`SingleTableItemRelationCompositePk\`.
  """
  singleTableItemByParentId: SingleTableItem
}

"""All input for the \`deleteSingleTableItemRelationCompositePk\` mutation."""
input DeleteSingleTableItemRelationCompositePkInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String

  """
  The globally unique \`ID\` which will identify a single \`SingleTableItemRelationCompositePk\` to be deleted.
  """
  nodeId: ID!
}

"""
All input for the \`deleteSingleTableItemRelationCompositePkByParentIdAndChildId\` mutation.
"""
input DeleteSingleTableItemRelationCompositePkByParentIdAndChildIdInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  parentId: Int!
  childId: Int!
}

"""The output of our delete \`RelationalItemRelation\` mutation."""
type DeleteRelationalItemRelationPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`RelationalItemRelation\` that was deleted by this mutation."""
  relationalItemRelation: RelationalItemRelation
  deletedRelationalItemRelationId: ID

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`RelationalItemRelation\`. May be used by Relay 1."""
  relationalItemRelationEdge(
    """The method to use when ordering \`RelationalItemRelation\`."""
    orderBy: [RelationalItemRelationsOrderBy!]! = [PRIMARY_KEY_ASC]
  ): RelationalItemRelationsEdge

  """
  Reads a single \`RelationalItem\` that is related to this \`RelationalItemRelation\`.
  """
  relationalItemByChildId: RelationalItem

  """
  Reads a single \`RelationalItem\` that is related to this \`RelationalItemRelation\`.
  """
  relationalItemByParentId: RelationalItem
}

"""All input for the \`deleteRelationalItemRelation\` mutation."""
input DeleteRelationalItemRelationInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String

  """
  The globally unique \`ID\` which will identify a single \`RelationalItemRelation\` to be deleted.
  """
  nodeId: ID!
}

"""All input for the \`deleteRelationalItemRelationById\` mutation."""
input DeleteRelationalItemRelationByIdInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  id: Int!
}

"""
All input for the \`deleteRelationalItemRelationByParentIdAndChildId\` mutation.
"""
input DeleteRelationalItemRelationByParentIdAndChildIdInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  parentId: Int!
  childId: Int!
}

"""The output of our delete \`SingleTableItemRelation\` mutation."""
type DeleteSingleTableItemRelationPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`SingleTableItemRelation\` that was deleted by this mutation."""
  singleTableItemRelation: SingleTableItemRelation
  deletedSingleTableItemRelationId: ID

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`SingleTableItemRelation\`. May be used by Relay 1."""
  singleTableItemRelationEdge(
    """The method to use when ordering \`SingleTableItemRelation\`."""
    orderBy: [SingleTableItemRelationsOrderBy!]! = [PRIMARY_KEY_ASC]
  ): SingleTableItemRelationsEdge

  """
  Reads a single \`SingleTableItem\` that is related to this \`SingleTableItemRelation\`.
  """
  singleTableItemByChildId: SingleTableItem

  """
  Reads a single \`SingleTableItem\` that is related to this \`SingleTableItemRelation\`.
  """
  singleTableItemByParentId: SingleTableItem
}

"""All input for the \`deleteSingleTableItemRelation\` mutation."""
input DeleteSingleTableItemRelationInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String

  """
  The globally unique \`ID\` which will identify a single \`SingleTableItemRelation\` to be deleted.
  """
  nodeId: ID!
}

"""All input for the \`deleteSingleTableItemRelationById\` mutation."""
input DeleteSingleTableItemRelationByIdInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  id: Int!
}

"""
All input for the \`deleteSingleTableItemRelationByParentIdAndChildId\` mutation.
"""
input DeleteSingleTableItemRelationByParentIdAndChildIdInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  parentId: Int!
  childId: Int!
}

"""The output of our delete \`LogEntry\` mutation."""
type DeleteLogEntryPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`LogEntry\` that was deleted by this mutation."""
  logEntry: LogEntry
  deletedLogEntryId: ID

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`LogEntry\`. May be used by Relay 1."""
  logEntryEdge(
    """The method to use when ordering \`LogEntry\`."""
    orderBy: [LogEntriesOrderBy!]! = [PRIMARY_KEY_ASC]
  ): LogEntriesEdge

  """Reads a single \`Organization\` that is related to this \`LogEntry\`."""
  organizationByOrganizationId: Organization

  """Reads a single \`Person\` that is related to this \`LogEntry\`."""
  personByPersonId: Person
}

"""All input for the \`deleteLogEntry\` mutation."""
input DeleteLogEntryInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String

  """
  The globally unique \`ID\` which will identify a single \`LogEntry\` to be deleted.
  """
  nodeId: ID!
}

"""All input for the \`deleteLogEntryById\` mutation."""
input DeleteLogEntryByIdInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  id: Int!
}

"""The output of our delete \`FirstPartyVulnerability\` mutation."""
type DeleteFirstPartyVulnerabilityPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`FirstPartyVulnerability\` that was deleted by this mutation."""
  firstPartyVulnerability: FirstPartyVulnerability
  deletedFirstPartyVulnerabilityId: ID

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`FirstPartyVulnerability\`. May be used by Relay 1."""
  firstPartyVulnerabilityEdge(
    """The method to use when ordering \`FirstPartyVulnerability\`."""
    orderBy: [FirstPartyVulnerabilitiesOrderBy!]! = [PRIMARY_KEY_ASC]
  ): FirstPartyVulnerabilitiesEdge
}

"""All input for the \`deleteFirstPartyVulnerability\` mutation."""
input DeleteFirstPartyVulnerabilityInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String

  """
  The globally unique \`ID\` which will identify a single \`FirstPartyVulnerability\` to be deleted.
  """
  nodeId: ID!
}

"""All input for the \`deleteFirstPartyVulnerabilityById\` mutation."""
input DeleteFirstPartyVulnerabilityByIdInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  id: Int!
}

"""The output of our delete \`ThirdPartyVulnerability\` mutation."""
type DeleteThirdPartyVulnerabilityPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`ThirdPartyVulnerability\` that was deleted by this mutation."""
  thirdPartyVulnerability: ThirdPartyVulnerability
  deletedThirdPartyVulnerabilityId: ID

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`ThirdPartyVulnerability\`. May be used by Relay 1."""
  thirdPartyVulnerabilityEdge(
    """The method to use when ordering \`ThirdPartyVulnerability\`."""
    orderBy: [ThirdPartyVulnerabilitiesOrderBy!]! = [PRIMARY_KEY_ASC]
  ): ThirdPartyVulnerabilitiesEdge
}

"""All input for the \`deleteThirdPartyVulnerability\` mutation."""
input DeleteThirdPartyVulnerabilityInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String

  """
  The globally unique \`ID\` which will identify a single \`ThirdPartyVulnerability\` to be deleted.
  """
  nodeId: ID!
}

"""All input for the \`deleteThirdPartyVulnerabilityById\` mutation."""
input DeleteThirdPartyVulnerabilityByIdInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  id: Int!
}

"""The output of our delete \`AwsApplication\` mutation."""
type DeleteAwsApplicationPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`AwsApplication\` that was deleted by this mutation."""
  awsApplication: AwsApplication
  deletedAwsApplicationId: ID

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`AwsApplication\`. May be used by Relay 1."""
  awsApplicationEdge(
    """The method to use when ordering \`AwsApplication\`."""
    orderBy: [AwsApplicationsOrderBy!]! = [PRIMARY_KEY_ASC]
  ): AwsApplicationsEdge

  """
  Reads a single \`Organization\` that is related to this \`AwsApplication\`.
  """
  organizationByOrganizationId: Organization

  """Reads a single \`Person\` that is related to this \`AwsApplication\`."""
  personByPersonId: Person
}

"""All input for the \`deleteAwsApplication\` mutation."""
input DeleteAwsApplicationInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String

  """
  The globally unique \`ID\` which will identify a single \`AwsApplication\` to be deleted.
  """
  nodeId: ID!
}

"""All input for the \`deleteAwsApplicationById\` mutation."""
input DeleteAwsApplicationByIdInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  id: Int!
}

"""The output of our delete \`GcpApplication\` mutation."""
type DeleteGcpApplicationPayload {
  """
  The exact same \`clientMutationId\` that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The \`GcpApplication\` that was deleted by this mutation."""
  gcpApplication: GcpApplication
  deletedGcpApplicationId: ID

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our \`GcpApplication\`. May be used by Relay 1."""
  gcpApplicationEdge(
    """The method to use when ordering \`GcpApplication\`."""
    orderBy: [GcpApplicationsOrderBy!]! = [PRIMARY_KEY_ASC]
  ): GcpApplicationsEdge

  """
  Reads a single \`Organization\` that is related to this \`GcpApplication\`.
  """
  organizationByOrganizationId: Organization

  """Reads a single \`Person\` that is related to this \`GcpApplication\`."""
  personByPersonId: Person
}

"""All input for the \`deleteGcpApplication\` mutation."""
input DeleteGcpApplicationInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String

  """
  The globally unique \`ID\` which will identify a single \`GcpApplication\` to be deleted.
  """
  nodeId: ID!
}

"""All input for the \`deleteGcpApplicationById\` mutation."""
input DeleteGcpApplicationByIdInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  id: Int!
}`;
export const plans = {
  SingleTableTopic: {
    __assertStep: assertPgClassSingleStep,
    nodeId($parent) {
      const specifier = handler.plan($parent);
      return lambda(specifier, nodeIdCodecs[handler.codec.name].encode);
    },
    meaningOfLife($in, args, _info) {
      if (!hasRecord($in)) {
        throw new Error(`Invalid plan, exepcted 'PgSelectSingleStep', 'PgInsertSingleStep', 'PgUpdateSingleStep' or 'PgDeleteSingleStep', but found ${$in}`);
      }
      const extraSelectArgs = makeArgs_single_table_items_meaning_of_life(args);
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
      if (resource_single_table_items_meaning_of_lifePgResource.isUnique && !resource_single_table_items_meaning_of_lifePgResource.codec.attributes && typeof resource_single_table_items_meaning_of_lifePgResource.from === "function") {
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
        const from = pgFromExpression($row, resource_single_table_items_meaning_of_lifePgResource.from, resource_single_table_items_meaning_of_lifePgResource.parameters, newSelectArgs);
        return pgClassExpression($row, resource_single_table_items_meaning_of_lifePgResource.codec, undefined)`${from}`;
      }
      // PERF: or here, if scalar add select to `$row`?
      return resource_single_table_items_meaning_of_lifePgResource.execute(selectArgs);
    },
    id($record) {
      return $record.get("id");
    },
    type($record) {
      return $record.get("type");
    },
    parentId($record) {
      return $record.get("parent_id");
    },
    rootTopicId($record) {
      return $record.get("root_topic_id");
    },
    authorId($record) {
      return $record.get("author_id");
    },
    position($record) {
      return $record.get("position");
    },
    createdAt($record) {
      return $record.get("created_at");
    },
    updatedAt($record) {
      return $record.get("updated_at");
    },
    isExplicitlyArchived($record) {
      return $record.get("is_explicitly_archived");
    },
    archivedAt($record) {
      return $record.get("archived_at");
    },
    title($record) {
      return $record.get("title");
    },
    personByAuthorId($record) {
      return otherSource_peoplePgResource.get({
        person_id: $record.get("author_id")
      });
    },
    singleTableItemByParentId($record) {
      return resource_single_table_itemsPgResource.get({
        id: $record.get("parent_id")
      });
    },
    singleTableItemsByParentId: {
      plan($record) {
        const $records = resource_single_table_itemsPgResource.find({
          parent_id: $record.get("id")
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
    singleTableItemRelationsByChildId: {
      plan($record) {
        const $records = otherSource_single_table_item_relationsPgResource.find({
          child_id: $record.get("id")
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
    singleTableItemRelationsByParentId: {
      plan($record) {
        const $records = otherSource_single_table_item_relationsPgResource.find({
          parent_id: $record.get("id")
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
    singleTableItemRelationCompositePksByChildId: {
      plan($record) {
        const $records = otherSource_single_table_item_relation_composite_pksPgResource.find({
          child_id: $record.get("id")
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
    singleTableItemRelationCompositePksByParentId: {
      plan($record) {
        const $records = otherSource_single_table_item_relation_composite_pksPgResource.find({
          parent_id: $record.get("id")
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
    rootTopic($record) {
      return resource_single_table_itemsPgResource.get({
        id: $record.get("root_topic_id")
      });
    }
  },
  BigInt: {
    serialize: BigIntSerialize,
    parseValue: BigIntSerialize,
    parseLiteral(ast) {
      if (ast.kind !== Kind.STRING) {
        throw new GraphQLError(`${"BigInt" ?? "This scalar"} can only parse string values (kind='${ast.kind}')`);
      }
      return ast.value;
    }
  },
  Datetime: {
    serialize: BigIntSerialize,
    parseValue: BigIntSerialize,
    parseLiteral(ast) {
      if (ast.kind !== Kind.STRING) {
        throw new GraphQLError(`${"Datetime" ?? "This scalar"} can only parse string values (kind='${ast.kind}')`);
      }
      return ast.value;
    }
  },
  Person: {
    __assertStep: assertPgClassSingleStep,
    nodeId($parent) {
      const specifier = handler2.plan($parent);
      return lambda(specifier, nodeIdCodecs[handler2.codec.name].encode);
    },
    personId($record) {
      return $record.get("person_id");
    },
    username($record) {
      return $record.get("username");
    },
    logEntriesByPersonId: {
      plan($record) {
        const $records = otherSource_log_entriesPgResource.find({
          person_id: $record.get("person_id")
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
    singleTableItemsByAuthorId: {
      plan($record) {
        const $records = resource_single_table_itemsPgResource.find({
          author_id: $record.get("person_id")
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
    relationalItemsByAuthorId: {
      plan($record) {
        const $records = otherSource_relational_itemsPgResource.find({
          author_id: $record.get("person_id")
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
    awsApplicationsByPersonId: {
      plan($record) {
        const $records = otherSource_aws_applicationsPgResource.find({
          person_id: $record.get("person_id")
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
    gcpApplicationsByPersonId: {
      plan($record) {
        const $records = otherSource_gcp_applicationsPgResource.find({
          person_id: $record.get("person_id")
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
    applications: {
      plan($parent) {
        const $record = undefined ? $parent.get("result") : $parent;
        for (let i = 0, l = paths.length; i < l; i++) {
          const path = paths[i];
          const firstLayer = path.layers[0];
          const member = members[i];
          member.match = firstLayer.localAttributes.reduce((memo, col, idx) => {
            memo[firstLayer.remoteAttributes[idx]] = {
              step: $record.get(col)
            };
            return memo;
          }, Object.create(null));
        }
        const $list = pgUnionAll({
          attributes: spec_Application.attributes,
          resourceByTypeName,
          members,
          name: "applications"
        });
        if (true) {
          return connection($list);
        } else if (false) {
          return $list.single();
        } else {
          return $list;
        }
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
        only($parent, $connection, fieldArgs) {
          const $union = $connection.getSubplan();
          const $ltt = fieldArgs.getRaw();
          $union.apply(lambda($ltt, limitToTypes));
        },
        orderBy(parent, $connection, value) {
          const $select = $connection.getSubplan();
          value.apply($select);
        }
      }
    }
  },
  LogEntriesConnection: {
    __assertStep: ConnectionStep,
    nodes($connection) {
      return $connection.nodes();
    },
    edges($connection) {
      return $connection.edges();
    },
    pageInfo($connection) {
      // TYPES: why is this a TypeScript issue without the 'any'?
      return $connection.pageInfo();
    },
    totalCount($connection) {
      return $connection.cloneSubplanWithoutPagination("aggregate").singleAsRecord().select(sql`count(*)`, TYPES.bigint, false);
    }
  },
  LogEntry: {
    __assertStep: assertPgClassSingleStep,
    nodeId($parent) {
      const specifier = handler3.plan($parent);
      return lambda(specifier, nodeIdCodecs[handler3.codec.name].encode);
    },
    id($record) {
      return $record.get("id");
    },
    personId($record) {
      return $record.get("person_id");
    },
    organizationId($record) {
      return $record.get("organization_id");
    },
    text($record) {
      return $record.get("text");
    },
    organizationByOrganizationId($record) {
      return otherSource_organizationsPgResource.get({
        organization_id: $record.get("organization_id")
      });
    },
    personByPersonId($record) {
      return otherSource_peoplePgResource.get({
        person_id: $record.get("person_id")
      });
    },
    author($parent) {
      const $record = undefined ? $parent.get("result") : $parent;
      for (let i = 0, l = paths2.length; i < l; i++) {
        const path = paths2[i];
        const firstLayer = path.layers[0];
        const member = members2[i];
        member.match = firstLayer.localAttributes.reduce((memo, col, idx) => {
          memo[firstLayer.remoteAttributes[idx]] = {
            step: $record.get(col)
          };
          return memo;
        }, Object.create(null));
      }
      const $list = pgUnionAll({
        attributes,
        resourceByTypeName: resourceByTypeName2,
        members: members2,
        name: "author"
      });
      if (false) {
        return connection($list);
      } else if (true) {
        return $list.single();
      } else {
        return $list;
      }
    }
  },
  Organization: {
    __assertStep: assertPgClassSingleStep,
    nodeId($parent) {
      const specifier = handler4.plan($parent);
      return lambda(specifier, nodeIdCodecs[handler4.codec.name].encode);
    },
    organizationId($record) {
      return $record.get("organization_id");
    },
    name($record) {
      return $record.get("name");
    },
    logEntriesByOrganizationId: {
      plan($record) {
        const $records = otherSource_log_entriesPgResource.find({
          organization_id: $record.get("organization_id")
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
    awsApplicationsByOrganizationId: {
      plan($record) {
        const $records = otherSource_aws_applicationsPgResource.find({
          organization_id: $record.get("organization_id")
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
    gcpApplicationsByOrganizationId: {
      plan($record) {
        const $records = otherSource_gcp_applicationsPgResource.find({
          organization_id: $record.get("organization_id")
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
  Cursor: {
    serialize: BigIntSerialize,
    parseValue: BigIntSerialize,
    parseLiteral(ast) {
      if (ast.kind !== Kind.STRING) {
        throw new GraphQLError(`${"Cursor" ?? "This scalar"} can only parse string values (kind='${ast.kind}')`);
      }
      return ast.value;
    }
  },
  LogEntryCondition: {
    id: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "id",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "id",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.int)}`;
            }
          });
        }
      }
    },
    personId: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "person_id",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "person_id",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.int)}`;
            }
          });
        }
      }
    },
    organizationId: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "organization_id",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "organization_id",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.int)}`;
            }
          });
        }
      }
    },
    text: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "text",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "text",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.text)}`;
            }
          });
        }
      }
    }
  },
  LogEntriesOrderBy: {
    PRIMARY_KEY_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            log_entriesUniques[0].attributes.forEach(attributeName => {
              queryBuilder.orderBy({
                attribute: attributeName,
                direction: "ASC",
                ...(undefined != null ? {
                  nulls: undefined ? "LAST" : "FIRST"
                } : null)
              });
            });
            queryBuilder.setOrderIsUnique();
          }
        }
      }
    },
    PRIMARY_KEY_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            log_entriesUniques[0].attributes.forEach(attributeName => {
              queryBuilder.orderBy({
                attribute: attributeName,
                direction: "DESC",
                ...(undefined != null ? {
                  nulls: undefined ? "LAST" : "FIRST"
                } : null)
              });
            });
            queryBuilder.setOrderIsUnique();
          }
        }
      }
    },
    ID_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "id",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (true) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    ID_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "id",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (true) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    PERSON_ID_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "person_id",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    PERSON_ID_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "person_id",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    ORGANIZATION_ID_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "organization_id",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    ORGANIZATION_ID_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "organization_id",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    TEXT_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "text",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    TEXT_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "text",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    }
  },
  AwsApplicationsConnection: {
    __assertStep: ConnectionStep,
    nodes($connection) {
      return $connection.nodes();
    },
    edges($connection) {
      return $connection.edges();
    },
    pageInfo($connection) {
      // TYPES: why is this a TypeScript issue without the 'any'?
      return $connection.pageInfo();
    },
    totalCount($connection) {
      return $connection.cloneSubplanWithoutPagination("aggregate").singleAsRecord().select(sql`count(*)`, TYPES.bigint, false);
    }
  },
  AwsApplication: {
    __assertStep: assertPgClassSingleStep,
    nodeId($parent) {
      const specifier = handler5.plan($parent);
      return lambda(specifier, nodeIdCodecs[handler5.codec.name].encode);
    },
    id($record) {
      return $record.get("id");
    },
    name($record) {
      return $record.get("name");
    },
    lastDeployed($record) {
      return $record.get("last_deployed");
    },
    personId($record) {
      return $record.get("person_id");
    },
    organizationId($record) {
      return $record.get("organization_id");
    },
    awsId($record) {
      return $record.get("aws_id");
    },
    organizationByOrganizationId($record) {
      return otherSource_organizationsPgResource.get({
        organization_id: $record.get("organization_id")
      });
    },
    personByPersonId($record) {
      return otherSource_peoplePgResource.get({
        person_id: $record.get("person_id")
      });
    },
    vulnerabilities: {
      plan($parent) {
        const $record = undefined ? $parent.get("result") : $parent;
        for (let i = 0, l = paths3.length; i < l; i++) {
          const path = paths3[i];
          const firstLayer = path.layers[0];
          const member = members3[i];
          member.match = firstLayer.localAttributes.reduce((memo, col, idx) => {
            memo[firstLayer.remoteAttributes[idx]] = {
              step: $record.get(col)
            };
            return memo;
          }, Object.create(null));
        }
        const $list = pgUnionAll({
          attributes: spec_Vulnerability.attributes,
          resourceByTypeName: resourceByTypeName3,
          members: members3,
          name: "vulnerabilities"
        });
        if (true) {
          return connection($list);
        } else if (false) {
          return $list.single();
        } else {
          return $list;
        }
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
        only($parent, $connection, fieldArgs) {
          const $union = $connection.getSubplan();
          const $ltt = fieldArgs.getRaw();
          $union.apply(lambda($ltt, limitToTypes));
        },
        orderBy(parent, $connection, value) {
          const $select = $connection.getSubplan();
          value.apply($select);
        }
      }
    },
    owner($parent) {
      const $record = undefined ? $parent.get("result") : $parent;
      for (let i = 0, l = paths4.length; i < l; i++) {
        const path = paths4[i];
        const firstLayer = path.layers[0];
        const member = members4[i];
        member.match = firstLayer.localAttributes.reduce((memo, col, idx) => {
          memo[firstLayer.remoteAttributes[idx]] = {
            step: $record.get(col)
          };
          return memo;
        }, Object.create(null));
      }
      const $list = pgUnionAll({
        attributes: attributes2,
        resourceByTypeName: resourceByTypeName4,
        members: members4,
        name: "owner"
      });
      if (false) {
        return connection($list);
      } else if (true) {
        return $list.single();
      } else {
        return $list;
      }
    }
  },
  VulnerabilitiesConnection: {
    __assertStep: ConnectionStep,
    nodes($connection) {
      return $connection.nodes();
    },
    edges($connection) {
      return $connection.edges();
    },
    pageInfo($connection) {
      // TYPES: why is this a TypeScript issue without the 'any'?
      return $connection.pageInfo();
    },
    totalCount($connection) {
      return $connection.cloneSubplanWithoutPagination("aggregate").singleAsRecord().select(sql`count(*)`, TYPES.bigint, false);
    }
  },
  ApplicationsConnection: {
    __assertStep: ConnectionStep,
    nodes($connection) {
      return $connection.nodes();
    },
    edges($connection) {
      return $connection.edges();
    },
    pageInfo($connection) {
      // TYPES: why is this a TypeScript issue without the 'any'?
      return $connection.pageInfo();
    },
    totalCount($connection) {
      return $connection.cloneSubplanWithoutPagination("aggregate").singleAsRecord().select(sql`count(*)`, TYPES.bigint, false);
    }
  },
  ApplicationsEdge: {
    __assertStep: assertEdgeCapableStep,
    cursor($edge) {
      return $edge.cursor();
    },
    node($edge) {
      return $edge.node();
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
  PersonOrOrganizationConnection: {
    __assertStep: ConnectionStep,
    nodes($connection) {
      return $connection.nodes();
    },
    edges($connection) {
      return $connection.edges();
    },
    pageInfo($connection) {
      // TYPES: why is this a TypeScript issue without the 'any'?
      return $connection.pageInfo();
    }
  },
  PersonOrOrganizationEdge: {
    __assertStep: assertEdgeCapableStep,
    cursor($edge) {
      return $edge.cursor();
    },
    node($edge) {
      return $edge.node();
    }
  },
  VulnerabilitiesEdge: {
    __assertStep: assertEdgeCapableStep,
    cursor($edge) {
      return $edge.cursor();
    },
    node($edge) {
      return $edge.node();
    }
  },
  VulnerabilityCondition: {
    id: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "id",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "id",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.int)}`;
            }
          });
        }
      }
    },
    name: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "name",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "name",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.text)}`;
            }
          });
        }
      }
    },
    cvssScore: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "cvss_score",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "cvss_score",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.float)}`;
            }
          });
        }
      }
    }
  },
  VulnerabilitiesOrderBy: {
    ID_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "id",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    ID_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "id",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    NAME_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "name",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    NAME_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "name",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    CVSS_SCORE_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "cvss_score",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    CVSS_SCORE_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "cvss_score",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    }
  },
  AwsApplicationsEdge: {
    __assertStep: assertEdgeCapableStep,
    cursor($edge) {
      return $edge.cursor();
    },
    node($edge) {
      return $edge.node();
    }
  },
  AwsApplicationCondition: {
    id: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "id",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "id",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.int)}`;
            }
          });
        }
      }
    },
    name: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "name",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "name",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.text)}`;
            }
          });
        }
      }
    },
    lastDeployed: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "last_deployed",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "last_deployed",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.timestamptz)}`;
            }
          });
        }
      }
    },
    personId: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "person_id",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "person_id",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.int)}`;
            }
          });
        }
      }
    },
    organizationId: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "organization_id",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "organization_id",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.int)}`;
            }
          });
        }
      }
    },
    awsId: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "aws_id",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "aws_id",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.text)}`;
            }
          });
        }
      }
    }
  },
  AwsApplicationsOrderBy: {
    PRIMARY_KEY_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            aws_applicationsUniques[0].attributes.forEach(attributeName => {
              queryBuilder.orderBy({
                attribute: attributeName,
                direction: "ASC",
                ...(undefined != null ? {
                  nulls: undefined ? "LAST" : "FIRST"
                } : null)
              });
            });
            queryBuilder.setOrderIsUnique();
          }
        }
      }
    },
    PRIMARY_KEY_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            aws_applicationsUniques[0].attributes.forEach(attributeName => {
              queryBuilder.orderBy({
                attribute: attributeName,
                direction: "DESC",
                ...(undefined != null ? {
                  nulls: undefined ? "LAST" : "FIRST"
                } : null)
              });
            });
            queryBuilder.setOrderIsUnique();
          }
        }
      }
    },
    ID_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "id",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (true) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    ID_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "id",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (true) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    NAME_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "name",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    NAME_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "name",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    LAST_DEPLOYED_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "last_deployed",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    LAST_DEPLOYED_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "last_deployed",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    PERSON_ID_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "person_id",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    PERSON_ID_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "person_id",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    ORGANIZATION_ID_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "organization_id",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    ORGANIZATION_ID_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "organization_id",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    AWS_ID_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "aws_id",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    AWS_ID_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "aws_id",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    }
  },
  GcpApplicationsConnection: {
    __assertStep: ConnectionStep,
    nodes($connection) {
      return $connection.nodes();
    },
    edges($connection) {
      return $connection.edges();
    },
    pageInfo($connection) {
      // TYPES: why is this a TypeScript issue without the 'any'?
      return $connection.pageInfo();
    },
    totalCount($connection) {
      return $connection.cloneSubplanWithoutPagination("aggregate").singleAsRecord().select(sql`count(*)`, TYPES.bigint, false);
    }
  },
  GcpApplication: {
    __assertStep: assertPgClassSingleStep,
    nodeId($parent) {
      const specifier = handler6.plan($parent);
      return lambda(specifier, nodeIdCodecs[handler6.codec.name].encode);
    },
    id($record) {
      return $record.get("id");
    },
    name($record) {
      return $record.get("name");
    },
    lastDeployed($record) {
      return $record.get("last_deployed");
    },
    personId($record) {
      return $record.get("person_id");
    },
    organizationId($record) {
      return $record.get("organization_id");
    },
    gcpId($record) {
      return $record.get("gcp_id");
    },
    organizationByOrganizationId($record) {
      return otherSource_organizationsPgResource.get({
        organization_id: $record.get("organization_id")
      });
    },
    personByPersonId($record) {
      return otherSource_peoplePgResource.get({
        person_id: $record.get("person_id")
      });
    },
    vulnerabilities: {
      plan($parent) {
        const $record = undefined ? $parent.get("result") : $parent;
        for (let i = 0, l = paths5.length; i < l; i++) {
          const path = paths5[i];
          const firstLayer = path.layers[0];
          const member = members5[i];
          member.match = firstLayer.localAttributes.reduce((memo, col, idx) => {
            memo[firstLayer.remoteAttributes[idx]] = {
              step: $record.get(col)
            };
            return memo;
          }, Object.create(null));
        }
        const $list = pgUnionAll({
          attributes: spec_Vulnerability.attributes,
          resourceByTypeName: resourceByTypeName5,
          members: members5,
          name: "vulnerabilities"
        });
        if (true) {
          return connection($list);
        } else if (false) {
          return $list.single();
        } else {
          return $list;
        }
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
        only($parent, $connection, fieldArgs) {
          const $union = $connection.getSubplan();
          const $ltt = fieldArgs.getRaw();
          $union.apply(lambda($ltt, limitToTypes));
        },
        orderBy(parent, $connection, value) {
          const $select = $connection.getSubplan();
          value.apply($select);
        }
      }
    },
    owner($parent) {
      const $record = undefined ? $parent.get("result") : $parent;
      for (let i = 0, l = paths6.length; i < l; i++) {
        const path = paths6[i];
        const firstLayer = path.layers[0];
        const member = members6[i];
        member.match = firstLayer.localAttributes.reduce((memo, col, idx) => {
          memo[firstLayer.remoteAttributes[idx]] = {
            step: $record.get(col)
          };
          return memo;
        }, Object.create(null));
      }
      const $list = pgUnionAll({
        attributes: attributes3,
        resourceByTypeName: resourceByTypeName6,
        members: members6,
        name: "owner"
      });
      if (false) {
        return connection($list);
      } else if (true) {
        return $list.single();
      } else {
        return $list;
      }
    }
  },
  GcpApplicationsEdge: {
    __assertStep: assertEdgeCapableStep,
    cursor($edge) {
      return $edge.cursor();
    },
    node($edge) {
      return $edge.node();
    }
  },
  GcpApplicationCondition: {
    id: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "id",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "id",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.int)}`;
            }
          });
        }
      }
    },
    name: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "name",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "name",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.text)}`;
            }
          });
        }
      }
    },
    lastDeployed: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "last_deployed",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "last_deployed",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.timestamptz)}`;
            }
          });
        }
      }
    },
    personId: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "person_id",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "person_id",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.int)}`;
            }
          });
        }
      }
    },
    organizationId: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "organization_id",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "organization_id",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.int)}`;
            }
          });
        }
      }
    },
    gcpId: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "gcp_id",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "gcp_id",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.text)}`;
            }
          });
        }
      }
    }
  },
  GcpApplicationsOrderBy: {
    PRIMARY_KEY_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            gcp_applicationsUniques[0].attributes.forEach(attributeName => {
              queryBuilder.orderBy({
                attribute: attributeName,
                direction: "ASC",
                ...(undefined != null ? {
                  nulls: undefined ? "LAST" : "FIRST"
                } : null)
              });
            });
            queryBuilder.setOrderIsUnique();
          }
        }
      }
    },
    PRIMARY_KEY_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            gcp_applicationsUniques[0].attributes.forEach(attributeName => {
              queryBuilder.orderBy({
                attribute: attributeName,
                direction: "DESC",
                ...(undefined != null ? {
                  nulls: undefined ? "LAST" : "FIRST"
                } : null)
              });
            });
            queryBuilder.setOrderIsUnique();
          }
        }
      }
    },
    ID_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "id",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (true) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    ID_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "id",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (true) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    NAME_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "name",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    NAME_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "name",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    LAST_DEPLOYED_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "last_deployed",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    LAST_DEPLOYED_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "last_deployed",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    PERSON_ID_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "person_id",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    PERSON_ID_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "person_id",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    ORGANIZATION_ID_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "organization_id",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    ORGANIZATION_ID_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "organization_id",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    GCP_ID_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "gcp_id",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    GCP_ID_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "gcp_id",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    }
  },
  LogEntriesEdge: {
    __assertStep: assertEdgeCapableStep,
    cursor($edge) {
      return $edge.cursor();
    },
    node($edge) {
      return $edge.node();
    }
  },
  SingleTableItemsConnection: {
    __assertStep: ConnectionStep,
    nodes($connection) {
      return $connection.nodes();
    },
    edges($connection) {
      return $connection.edges();
    },
    pageInfo($connection) {
      // TYPES: why is this a TypeScript issue without the 'any'?
      return $connection.pageInfo();
    },
    totalCount($connection) {
      return $connection.cloneSubplanWithoutPagination("aggregate").singleAsRecord().select(sql`count(*)`, TYPES.bigint, false);
    }
  },
  SingleTableItemsEdge: {
    __assertStep: assertEdgeCapableStep,
    cursor($edge) {
      return $edge.cursor();
    },
    node($edge) {
      return $edge.node();
    }
  },
  SingleTableItemCondition: {
    id: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "id",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "id",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.int)}`;
            }
          });
        }
      }
    },
    type: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "type",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "type",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, itemTypeCodec)}`;
            }
          });
        }
      }
    },
    parentId: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "parent_id",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "parent_id",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.int)}`;
            }
          });
        }
      }
    },
    rootTopicId: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "root_topic_id",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "root_topic_id",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.int)}`;
            }
          });
        }
      }
    },
    authorId: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "author_id",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "author_id",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.int)}`;
            }
          });
        }
      }
    },
    position: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "position",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "position",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.bigint)}`;
            }
          });
        }
      }
    },
    createdAt: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "created_at",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "created_at",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.timestamptz)}`;
            }
          });
        }
      }
    },
    updatedAt: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "updated_at",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "updated_at",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.timestamptz)}`;
            }
          });
        }
      }
    },
    isExplicitlyArchived: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "is_explicitly_archived",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "is_explicitly_archived",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.boolean)}`;
            }
          });
        }
      }
    },
    archivedAt: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "archived_at",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "archived_at",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.timestamptz)}`;
            }
          });
        }
      }
    }
  },
  SingleTableItemsOrderBy: {
    PRIMARY_KEY_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            single_table_itemsUniques[0].attributes.forEach(attributeName => {
              queryBuilder.orderBy({
                attribute: attributeName,
                direction: "ASC",
                ...(undefined != null ? {
                  nulls: undefined ? "LAST" : "FIRST"
                } : null)
              });
            });
            queryBuilder.setOrderIsUnique();
          }
        }
      }
    },
    PRIMARY_KEY_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            single_table_itemsUniques[0].attributes.forEach(attributeName => {
              queryBuilder.orderBy({
                attribute: attributeName,
                direction: "DESC",
                ...(undefined != null ? {
                  nulls: undefined ? "LAST" : "FIRST"
                } : null)
              });
            });
            queryBuilder.setOrderIsUnique();
          }
        }
      }
    },
    ID_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "id",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (true) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    ID_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "id",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (true) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    TYPE_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "type",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    TYPE_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "type",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    PARENT_ID_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "parent_id",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    PARENT_ID_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "parent_id",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    ROOT_TOPIC_ID_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "root_topic_id",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    ROOT_TOPIC_ID_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "root_topic_id",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    AUTHOR_ID_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "author_id",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    AUTHOR_ID_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "author_id",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    POSITION_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "position",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    POSITION_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "position",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    CREATED_AT_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "created_at",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    CREATED_AT_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "created_at",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    UPDATED_AT_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "updated_at",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    UPDATED_AT_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "updated_at",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    IS_EXPLICITLY_ARCHIVED_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "is_explicitly_archived",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    IS_EXPLICITLY_ARCHIVED_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "is_explicitly_archived",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    ARCHIVED_AT_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "archived_at",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    ARCHIVED_AT_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "archived_at",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    }
  },
  RelationalItemsConnection: {
    __assertStep: ConnectionStep,
    nodes($connection) {
      return $connection.nodes();
    },
    edges($connection) {
      return $connection.edges();
    },
    pageInfo($connection) {
      // TYPES: why is this a TypeScript issue without the 'any'?
      return $connection.pageInfo();
    },
    totalCount($connection) {
      return $connection.cloneSubplanWithoutPagination("aggregate").singleAsRecord().select(sql`count(*)`, TYPES.bigint, false);
    }
  },
  RelationalItemRelationsConnection: {
    __assertStep: ConnectionStep,
    nodes($connection) {
      return $connection.nodes();
    },
    edges($connection) {
      return $connection.edges();
    },
    pageInfo($connection) {
      // TYPES: why is this a TypeScript issue without the 'any'?
      return $connection.pageInfo();
    },
    totalCount($connection) {
      return $connection.cloneSubplanWithoutPagination("aggregate").singleAsRecord().select(sql`count(*)`, TYPES.bigint, false);
    }
  },
  RelationalItemRelation: {
    __assertStep: assertPgClassSingleStep,
    nodeId($parent) {
      const specifier = handler7.plan($parent);
      return lambda(specifier, nodeIdCodecs[handler7.codec.name].encode);
    },
    id($record) {
      return $record.get("id");
    },
    parentId($record) {
      return $record.get("parent_id");
    },
    childId($record) {
      return $record.get("child_id");
    },
    relationalItemByChildId($record) {
      return otherSource_relational_itemsPgResource.get({
        id: $record.get("child_id")
      });
    },
    relationalItemByParentId($record) {
      return otherSource_relational_itemsPgResource.get({
        id: $record.get("parent_id")
      });
    }
  },
  RelationalItemRelationsEdge: {
    __assertStep: assertEdgeCapableStep,
    cursor($edge) {
      return $edge.cursor();
    },
    node($edge) {
      return $edge.node();
    }
  },
  RelationalItemRelationCompositePksConnection: {
    __assertStep: ConnectionStep,
    nodes($connection) {
      return $connection.nodes();
    },
    edges($connection) {
      return $connection.edges();
    },
    pageInfo($connection) {
      // TYPES: why is this a TypeScript issue without the 'any'?
      return $connection.pageInfo();
    },
    totalCount($connection) {
      return $connection.cloneSubplanWithoutPagination("aggregate").singleAsRecord().select(sql`count(*)`, TYPES.bigint, false);
    }
  },
  RelationalItemRelationCompositePk: {
    __assertStep: assertPgClassSingleStep,
    nodeId($parent) {
      const specifier = handler8.plan($parent);
      return lambda(specifier, nodeIdCodecs[handler8.codec.name].encode);
    },
    parentId($record) {
      return $record.get("parent_id");
    },
    childId($record) {
      return $record.get("child_id");
    },
    relationalItemByChildId($record) {
      return otherSource_relational_itemsPgResource.get({
        id: $record.get("child_id")
      });
    },
    relationalItemByParentId($record) {
      return otherSource_relational_itemsPgResource.get({
        id: $record.get("parent_id")
      });
    }
  },
  RelationalItemRelationCompositePksEdge: {
    __assertStep: assertEdgeCapableStep,
    cursor($edge) {
      return $edge.cursor();
    },
    node($edge) {
      return $edge.node();
    }
  },
  RelationalItemsEdge: {
    __assertStep: assertEdgeCapableStep,
    cursor($edge) {
      return $edge.cursor();
    },
    node($edge) {
      return $edge.node();
    }
  },
  RelationalItemCondition: {
    id: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "id",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "id",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.int)}`;
            }
          });
        }
      }
    },
    type: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "type",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "type",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, itemTypeCodec)}`;
            }
          });
        }
      }
    },
    parentId: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "parent_id",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "parent_id",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.int)}`;
            }
          });
        }
      }
    },
    rootTopicId: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "root_topic_id",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "root_topic_id",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.int)}`;
            }
          });
        }
      }
    },
    authorId: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "author_id",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "author_id",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.int)}`;
            }
          });
        }
      }
    },
    position: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "position",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "position",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.bigint)}`;
            }
          });
        }
      }
    },
    createdAt: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "created_at",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "created_at",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.timestamptz)}`;
            }
          });
        }
      }
    },
    updatedAt: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "updated_at",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "updated_at",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.timestamptz)}`;
            }
          });
        }
      }
    },
    isExplicitlyArchived: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "is_explicitly_archived",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "is_explicitly_archived",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.boolean)}`;
            }
          });
        }
      }
    },
    archivedAt: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "archived_at",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "archived_at",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.timestamptz)}`;
            }
          });
        }
      }
    }
  },
  RelationalItemsOrderBy: {
    PRIMARY_KEY_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            relational_itemsUniques[0].attributes.forEach(attributeName => {
              queryBuilder.orderBy({
                attribute: attributeName,
                direction: "ASC",
                ...(undefined != null ? {
                  nulls: undefined ? "LAST" : "FIRST"
                } : null)
              });
            });
            queryBuilder.setOrderIsUnique();
          }
        }
      }
    },
    PRIMARY_KEY_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            relational_itemsUniques[0].attributes.forEach(attributeName => {
              queryBuilder.orderBy({
                attribute: attributeName,
                direction: "DESC",
                ...(undefined != null ? {
                  nulls: undefined ? "LAST" : "FIRST"
                } : null)
              });
            });
            queryBuilder.setOrderIsUnique();
          }
        }
      }
    },
    ID_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "id",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (true) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    ID_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "id",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (true) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    TYPE_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "type",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    TYPE_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "type",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    PARENT_ID_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "parent_id",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    PARENT_ID_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "parent_id",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    ROOT_TOPIC_ID_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "root_topic_id",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    ROOT_TOPIC_ID_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "root_topic_id",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    AUTHOR_ID_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "author_id",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    AUTHOR_ID_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "author_id",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    POSITION_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "position",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    POSITION_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "position",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    CREATED_AT_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "created_at",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    CREATED_AT_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "created_at",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    UPDATED_AT_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "updated_at",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    UPDATED_AT_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "updated_at",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    IS_EXPLICITLY_ARCHIVED_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "is_explicitly_archived",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    IS_EXPLICITLY_ARCHIVED_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "is_explicitly_archived",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    ARCHIVED_AT_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "archived_at",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    ARCHIVED_AT_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "archived_at",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    }
  },
  ApplicationCondition: {
    id: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "id",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "id",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.int)}`;
            }
          });
        }
      }
    },
    name: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "name",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "name",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.text)}`;
            }
          });
        }
      }
    },
    lastDeployed: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "last_deployed",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "last_deployed",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.timestamptz)}`;
            }
          });
        }
      }
    }
  },
  ApplicationsOrderBy: {
    ID_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "id",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    ID_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "id",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    NAME_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "name",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    NAME_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "name",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    LAST_DEPLOYED_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "last_deployed",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    LAST_DEPLOYED_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "last_deployed",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    }
  },
  SingleTableItemRelationsConnection: {
    __assertStep: ConnectionStep,
    nodes($connection) {
      return $connection.nodes();
    },
    edges($connection) {
      return $connection.edges();
    },
    pageInfo($connection) {
      // TYPES: why is this a TypeScript issue without the 'any'?
      return $connection.pageInfo();
    },
    totalCount($connection) {
      return $connection.cloneSubplanWithoutPagination("aggregate").singleAsRecord().select(sql`count(*)`, TYPES.bigint, false);
    }
  },
  SingleTableItemRelation: {
    __assertStep: assertPgClassSingleStep,
    nodeId($parent) {
      const specifier = handler9.plan($parent);
      return lambda(specifier, nodeIdCodecs[handler9.codec.name].encode);
    },
    id($record) {
      return $record.get("id");
    },
    parentId($record) {
      return $record.get("parent_id");
    },
    childId($record) {
      return $record.get("child_id");
    },
    singleTableItemByChildId($record) {
      return resource_single_table_itemsPgResource.get({
        id: $record.get("child_id")
      });
    },
    singleTableItemByParentId($record) {
      return resource_single_table_itemsPgResource.get({
        id: $record.get("parent_id")
      });
    }
  },
  SingleTableItemRelationsEdge: {
    __assertStep: assertEdgeCapableStep,
    cursor($edge) {
      return $edge.cursor();
    },
    node($edge) {
      return $edge.node();
    }
  },
  SingleTableItemRelationCompositePksConnection: {
    __assertStep: ConnectionStep,
    nodes($connection) {
      return $connection.nodes();
    },
    edges($connection) {
      return $connection.edges();
    },
    pageInfo($connection) {
      // TYPES: why is this a TypeScript issue without the 'any'?
      return $connection.pageInfo();
    },
    totalCount($connection) {
      return $connection.cloneSubplanWithoutPagination("aggregate").singleAsRecord().select(sql`count(*)`, TYPES.bigint, false);
    }
  },
  SingleTableItemRelationCompositePk: {
    __assertStep: assertPgClassSingleStep,
    nodeId($parent) {
      const specifier = handler10.plan($parent);
      return lambda(specifier, nodeIdCodecs[handler10.codec.name].encode);
    },
    parentId($record) {
      return $record.get("parent_id");
    },
    childId($record) {
      return $record.get("child_id");
    },
    singleTableItemByChildId($record) {
      return resource_single_table_itemsPgResource.get({
        id: $record.get("child_id")
      });
    },
    singleTableItemByParentId($record) {
      return resource_single_table_itemsPgResource.get({
        id: $record.get("parent_id")
      });
    }
  },
  SingleTableItemRelationCompositePksEdge: {
    __assertStep: assertEdgeCapableStep,
    cursor($edge) {
      return $edge.cursor();
    },
    node($edge) {
      return $edge.node();
    }
  },
  SingleTableItemRelationCondition: {
    id: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "id",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "id",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.int)}`;
            }
          });
        }
      }
    },
    parentId: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "parent_id",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "parent_id",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.int)}`;
            }
          });
        }
      }
    },
    childId: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "child_id",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "child_id",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.int)}`;
            }
          });
        }
      }
    }
  },
  SingleTableItemRelationsOrderBy: {
    PRIMARY_KEY_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            single_table_item_relationsUniques[0].attributes.forEach(attributeName => {
              queryBuilder.orderBy({
                attribute: attributeName,
                direction: "ASC",
                ...(undefined != null ? {
                  nulls: undefined ? "LAST" : "FIRST"
                } : null)
              });
            });
            queryBuilder.setOrderIsUnique();
          }
        }
      }
    },
    PRIMARY_KEY_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            single_table_item_relationsUniques[0].attributes.forEach(attributeName => {
              queryBuilder.orderBy({
                attribute: attributeName,
                direction: "DESC",
                ...(undefined != null ? {
                  nulls: undefined ? "LAST" : "FIRST"
                } : null)
              });
            });
            queryBuilder.setOrderIsUnique();
          }
        }
      }
    },
    ID_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "id",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (true) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    ID_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "id",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (true) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    PARENT_ID_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "parent_id",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (true) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    PARENT_ID_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "parent_id",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (true) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    CHILD_ID_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "child_id",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    CHILD_ID_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "child_id",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    }
  },
  SingleTableItemRelationCompositePkCondition: {
    parentId: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "parent_id",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "parent_id",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.int)}`;
            }
          });
        }
      }
    },
    childId: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "child_id",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "child_id",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.int)}`;
            }
          });
        }
      }
    }
  },
  SingleTableItemRelationCompositePksOrderBy: {
    PRIMARY_KEY_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            single_table_item_relation_composite_pksUniques[0].attributes.forEach(attributeName => {
              queryBuilder.orderBy({
                attribute: attributeName,
                direction: "ASC",
                ...(undefined != null ? {
                  nulls: undefined ? "LAST" : "FIRST"
                } : null)
              });
            });
            queryBuilder.setOrderIsUnique();
          }
        }
      }
    },
    PRIMARY_KEY_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            single_table_item_relation_composite_pksUniques[0].attributes.forEach(attributeName => {
              queryBuilder.orderBy({
                attribute: attributeName,
                direction: "DESC",
                ...(undefined != null ? {
                  nulls: undefined ? "LAST" : "FIRST"
                } : null)
              });
            });
            queryBuilder.setOrderIsUnique();
          }
        }
      }
    },
    PARENT_ID_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "parent_id",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (true) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    PARENT_ID_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "parent_id",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (true) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    CHILD_ID_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "child_id",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    CHILD_ID_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "child_id",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    }
  },
  SingleTablePost: {
    __assertStep: assertPgClassSingleStep,
    nodeId($parent) {
      const specifier = handler11.plan($parent);
      return lambda(specifier, nodeIdCodecs[handler11.codec.name].encode);
    },
    meaningOfLife($in, args, _info) {
      if (!hasRecord($in)) {
        throw new Error(`Invalid plan, exepcted 'PgSelectSingleStep', 'PgInsertSingleStep', 'PgUpdateSingleStep' or 'PgDeleteSingleStep', but found ${$in}`);
      }
      const extraSelectArgs = makeArgs_single_table_items_meaning_of_life2(args);
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
      if (resource_single_table_items_meaning_of_lifePgResource.isUnique && !resource_single_table_items_meaning_of_lifePgResource.codec.attributes && typeof resource_single_table_items_meaning_of_lifePgResource.from === "function") {
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
        const from = pgFromExpression($row, resource_single_table_items_meaning_of_lifePgResource.from, resource_single_table_items_meaning_of_lifePgResource.parameters, newSelectArgs);
        return pgClassExpression($row, resource_single_table_items_meaning_of_lifePgResource.codec, undefined)`${from}`;
      }
      // PERF: or here, if scalar add select to `$row`?
      return resource_single_table_items_meaning_of_lifePgResource.execute(selectArgs);
    },
    id($record) {
      return $record.get("id");
    },
    type($record) {
      return $record.get("type");
    },
    parentId($record) {
      return $record.get("parent_id");
    },
    rootTopicId($record) {
      return $record.get("root_topic_id");
    },
    authorId($record) {
      return $record.get("author_id");
    },
    position($record) {
      return $record.get("position");
    },
    createdAt($record) {
      return $record.get("created_at");
    },
    updatedAt($record) {
      return $record.get("updated_at");
    },
    isExplicitlyArchived($record) {
      return $record.get("is_explicitly_archived");
    },
    archivedAt($record) {
      return $record.get("archived_at");
    },
    subject($record) {
      return $record.get("title");
    },
    description($record) {
      return $record.get("description");
    },
    note($record) {
      return $record.get("note");
    },
    priorityId($record) {
      return $record.get("priority_id");
    },
    personByAuthorId($record) {
      return otherSource_peoplePgResource.get({
        person_id: $record.get("author_id")
      });
    },
    singleTableItemByParentId($record) {
      return resource_single_table_itemsPgResource.get({
        id: $record.get("parent_id")
      });
    },
    priorityByPriorityId($record) {
      return otherSource_prioritiesPgResource.get({
        id: $record.get("priority_id")
      });
    },
    singleTableItemsByParentId: {
      plan($record) {
        const $records = resource_single_table_itemsPgResource.find({
          parent_id: $record.get("id")
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
    singleTableItemRelationsByChildId: {
      plan($record) {
        const $records = otherSource_single_table_item_relationsPgResource.find({
          child_id: $record.get("id")
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
    singleTableItemRelationsByParentId: {
      plan($record) {
        const $records = otherSource_single_table_item_relationsPgResource.find({
          parent_id: $record.get("id")
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
    singleTableItemRelationCompositePksByChildId: {
      plan($record) {
        const $records = otherSource_single_table_item_relation_composite_pksPgResource.find({
          child_id: $record.get("id")
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
    singleTableItemRelationCompositePksByParentId: {
      plan($record) {
        const $records = otherSource_single_table_item_relation_composite_pksPgResource.find({
          parent_id: $record.get("id")
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
    rootTopic($record) {
      return resource_single_table_itemsPgResource.get({
        id: $record.get("root_topic_id")
      });
    }
  },
  Priority: {
    __assertStep: assertPgClassSingleStep,
    nodeId($parent) {
      const specifier = handler12.plan($parent);
      return lambda(specifier, nodeIdCodecs[handler12.codec.name].encode);
    },
    id($record) {
      return $record.get("id");
    },
    title($record) {
      return $record.get("title");
    },
    singleTableItemsByPriorityId: {
      plan($record) {
        const $records = resource_single_table_itemsPgResource.find({
          priority_id: $record.get("id")
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
  SingleTableDivider: {
    __assertStep: assertPgClassSingleStep,
    nodeId($parent) {
      const specifier = handler13.plan($parent);
      return lambda(specifier, nodeIdCodecs[handler13.codec.name].encode);
    },
    meaningOfLife($in, args, _info) {
      if (!hasRecord($in)) {
        throw new Error(`Invalid plan, exepcted 'PgSelectSingleStep', 'PgInsertSingleStep', 'PgUpdateSingleStep' or 'PgDeleteSingleStep', but found ${$in}`);
      }
      const extraSelectArgs = makeArgs_single_table_items_meaning_of_life3(args);
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
      if (resource_single_table_items_meaning_of_lifePgResource.isUnique && !resource_single_table_items_meaning_of_lifePgResource.codec.attributes && typeof resource_single_table_items_meaning_of_lifePgResource.from === "function") {
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
        const from = pgFromExpression($row, resource_single_table_items_meaning_of_lifePgResource.from, resource_single_table_items_meaning_of_lifePgResource.parameters, newSelectArgs);
        return pgClassExpression($row, resource_single_table_items_meaning_of_lifePgResource.codec, undefined)`${from}`;
      }
      // PERF: or here, if scalar add select to `$row`?
      return resource_single_table_items_meaning_of_lifePgResource.execute(selectArgs);
    },
    id($record) {
      return $record.get("id");
    },
    type($record) {
      return $record.get("type");
    },
    parentId($record) {
      return $record.get("parent_id");
    },
    rootTopicId($record) {
      return $record.get("root_topic_id");
    },
    authorId($record) {
      return $record.get("author_id");
    },
    position($record) {
      return $record.get("position");
    },
    createdAt($record) {
      return $record.get("created_at");
    },
    updatedAt($record) {
      return $record.get("updated_at");
    },
    isExplicitlyArchived($record) {
      return $record.get("is_explicitly_archived");
    },
    archivedAt($record) {
      return $record.get("archived_at");
    },
    title($record) {
      return $record.get("title");
    },
    color($record) {
      return $record.get("color");
    },
    personByAuthorId($record) {
      return otherSource_peoplePgResource.get({
        person_id: $record.get("author_id")
      });
    },
    singleTableItemByParentId($record) {
      return resource_single_table_itemsPgResource.get({
        id: $record.get("parent_id")
      });
    },
    singleTableItemsByParentId: {
      plan($record) {
        const $records = resource_single_table_itemsPgResource.find({
          parent_id: $record.get("id")
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
    singleTableItemRelationsByChildId: {
      plan($record) {
        const $records = otherSource_single_table_item_relationsPgResource.find({
          child_id: $record.get("id")
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
    singleTableItemRelationsByParentId: {
      plan($record) {
        const $records = otherSource_single_table_item_relationsPgResource.find({
          parent_id: $record.get("id")
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
    singleTableItemRelationCompositePksByChildId: {
      plan($record) {
        const $records = otherSource_single_table_item_relation_composite_pksPgResource.find({
          child_id: $record.get("id")
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
    singleTableItemRelationCompositePksByParentId: {
      plan($record) {
        const $records = otherSource_single_table_item_relation_composite_pksPgResource.find({
          parent_id: $record.get("id")
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
    rootTopic($record) {
      return resource_single_table_itemsPgResource.get({
        id: $record.get("root_topic_id")
      });
    }
  },
  SingleTableChecklist: {
    __assertStep: assertPgClassSingleStep,
    nodeId($parent) {
      const specifier = handler14.plan($parent);
      return lambda(specifier, nodeIdCodecs[handler14.codec.name].encode);
    },
    meaningOfLife($in, args, _info) {
      if (!hasRecord($in)) {
        throw new Error(`Invalid plan, exepcted 'PgSelectSingleStep', 'PgInsertSingleStep', 'PgUpdateSingleStep' or 'PgDeleteSingleStep', but found ${$in}`);
      }
      const extraSelectArgs = makeArgs_single_table_items_meaning_of_life4(args);
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
      if (resource_single_table_items_meaning_of_lifePgResource.isUnique && !resource_single_table_items_meaning_of_lifePgResource.codec.attributes && typeof resource_single_table_items_meaning_of_lifePgResource.from === "function") {
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
        const from = pgFromExpression($row, resource_single_table_items_meaning_of_lifePgResource.from, resource_single_table_items_meaning_of_lifePgResource.parameters, newSelectArgs);
        return pgClassExpression($row, resource_single_table_items_meaning_of_lifePgResource.codec, undefined)`${from}`;
      }
      // PERF: or here, if scalar add select to `$row`?
      return resource_single_table_items_meaning_of_lifePgResource.execute(selectArgs);
    },
    id($record) {
      return $record.get("id");
    },
    type($record) {
      return $record.get("type");
    },
    parentId($record) {
      return $record.get("parent_id");
    },
    rootTopicId($record) {
      return $record.get("root_topic_id");
    },
    authorId($record) {
      return $record.get("author_id");
    },
    position($record) {
      return $record.get("position");
    },
    createdAt($record) {
      return $record.get("created_at");
    },
    updatedAt($record) {
      return $record.get("updated_at");
    },
    isExplicitlyArchived($record) {
      return $record.get("is_explicitly_archived");
    },
    archivedAt($record) {
      return $record.get("archived_at");
    },
    title($record) {
      return $record.get("title");
    },
    personByAuthorId($record) {
      return otherSource_peoplePgResource.get({
        person_id: $record.get("author_id")
      });
    },
    singleTableItemByParentId($record) {
      return resource_single_table_itemsPgResource.get({
        id: $record.get("parent_id")
      });
    },
    singleTableItemsByParentId: {
      plan($record) {
        const $records = resource_single_table_itemsPgResource.find({
          parent_id: $record.get("id")
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
    singleTableItemRelationsByChildId: {
      plan($record) {
        const $records = otherSource_single_table_item_relationsPgResource.find({
          child_id: $record.get("id")
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
    singleTableItemRelationsByParentId: {
      plan($record) {
        const $records = otherSource_single_table_item_relationsPgResource.find({
          parent_id: $record.get("id")
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
    singleTableItemRelationCompositePksByChildId: {
      plan($record) {
        const $records = otherSource_single_table_item_relation_composite_pksPgResource.find({
          child_id: $record.get("id")
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
    singleTableItemRelationCompositePksByParentId: {
      plan($record) {
        const $records = otherSource_single_table_item_relation_composite_pksPgResource.find({
          parent_id: $record.get("id")
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
    rootTopic($record) {
      return resource_single_table_itemsPgResource.get({
        id: $record.get("root_topic_id")
      });
    },
    rootChecklistTopic($record) {
      return resource_single_table_itemsPgResource.get({
        id: $record.get("root_topic_id")
      });
    }
  },
  SingleTableChecklistItem: {
    __assertStep: assertPgClassSingleStep,
    nodeId($parent) {
      const specifier = handler15.plan($parent);
      return lambda(specifier, nodeIdCodecs[handler15.codec.name].encode);
    },
    meaningOfLife($in, args, _info) {
      if (!hasRecord($in)) {
        throw new Error(`Invalid plan, exepcted 'PgSelectSingleStep', 'PgInsertSingleStep', 'PgUpdateSingleStep' or 'PgDeleteSingleStep', but found ${$in}`);
      }
      const extraSelectArgs = makeArgs_single_table_items_meaning_of_life5(args);
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
      if (resource_single_table_items_meaning_of_lifePgResource.isUnique && !resource_single_table_items_meaning_of_lifePgResource.codec.attributes && typeof resource_single_table_items_meaning_of_lifePgResource.from === "function") {
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
        const from = pgFromExpression($row, resource_single_table_items_meaning_of_lifePgResource.from, resource_single_table_items_meaning_of_lifePgResource.parameters, newSelectArgs);
        return pgClassExpression($row, resource_single_table_items_meaning_of_lifePgResource.codec, undefined)`${from}`;
      }
      // PERF: or here, if scalar add select to `$row`?
      return resource_single_table_items_meaning_of_lifePgResource.execute(selectArgs);
    },
    id($record) {
      return $record.get("id");
    },
    type($record) {
      return $record.get("type");
    },
    parentId($record) {
      return $record.get("parent_id");
    },
    rootTopicId($record) {
      return $record.get("root_topic_id");
    },
    authorId($record) {
      return $record.get("author_id");
    },
    position($record) {
      return $record.get("position");
    },
    createdAt($record) {
      return $record.get("created_at");
    },
    updatedAt($record) {
      return $record.get("updated_at");
    },
    isExplicitlyArchived($record) {
      return $record.get("is_explicitly_archived");
    },
    archivedAt($record) {
      return $record.get("archived_at");
    },
    description($record) {
      return $record.get("description");
    },
    note($record) {
      return $record.get("note");
    },
    priorityId($record) {
      return $record.get("priority_id");
    },
    personByAuthorId($record) {
      return otherSource_peoplePgResource.get({
        person_id: $record.get("author_id")
      });
    },
    singleTableItemByParentId($record) {
      return resource_single_table_itemsPgResource.get({
        id: $record.get("parent_id")
      });
    },
    priorityByPriorityId($record) {
      return otherSource_prioritiesPgResource.get({
        id: $record.get("priority_id")
      });
    },
    singleTableItemsByParentId: {
      plan($record) {
        const $records = resource_single_table_itemsPgResource.find({
          parent_id: $record.get("id")
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
    singleTableItemRelationsByChildId: {
      plan($record) {
        const $records = otherSource_single_table_item_relationsPgResource.find({
          child_id: $record.get("id")
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
    singleTableItemRelationsByParentId: {
      plan($record) {
        const $records = otherSource_single_table_item_relationsPgResource.find({
          parent_id: $record.get("id")
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
    singleTableItemRelationCompositePksByChildId: {
      plan($record) {
        const $records = otherSource_single_table_item_relation_composite_pksPgResource.find({
          child_id: $record.get("id")
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
    singleTableItemRelationCompositePksByParentId: {
      plan($record) {
        const $records = otherSource_single_table_item_relation_composite_pksPgResource.find({
          parent_id: $record.get("id")
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
    rootTopic($record) {
      return resource_single_table_itemsPgResource.get({
        id: $record.get("root_topic_id")
      });
    }
  },
  RelationalTopic: {
    __assertStep: assertPgClassSingleStep,
    nodeId($parent) {
      const specifier = handler16.plan($parent);
      return lambda(specifier, nodeIdCodecs[handler16.codec.name].encode);
    },
    title($record) {
      return $record.get("title");
    },
    id($record) {
      return $record.get("id");
    },
    type($record) {
      return $record.get("type");
    },
    parentId($record) {
      return $record.get("parent_id");
    },
    rootTopicId($record) {
      return $record.get("root_topic_id");
    },
    authorId($record) {
      return $record.get("author_id");
    },
    position($record) {
      return $record.get("position");
    },
    createdAt($record) {
      return $record.get("created_at");
    },
    updatedAt($record) {
      return $record.get("updated_at");
    },
    isExplicitlyArchived($record) {
      return $record.get("is_explicitly_archived");
    },
    archivedAt($record) {
      return $record.get("archived_at");
    },
    relationalItemsByRootTopicId: {
      plan($record) {
        const $records = otherSource_relational_itemsPgResource.find({
          root_topic_id: $record.get("topic_item_id")
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
    personByAuthorId($record) {
      const $people = otherSource_peoplePgResource.find();
      let previousAlias = $people.alias;
      const relational_itemsAlias = sql.identifier(Symbol("relational_items"));
      $people.join({
        type: "inner",
        from: otherSource_relational_itemsPgResource.from,
        alias: relational_itemsAlias,
        conditions: [sql`${previousAlias}.${sql.identifier("person_id")} = ${relational_itemsAlias}.${sql.identifier("author_id")}`]
      });
      previousAlias = relational_itemsAlias;
      $people.where(sql`${previousAlias}.${sql.identifier("id")} = ${$people.placeholder($record.get("topic_item_id"))}`);
      return $people.single();
    },
    relationalItemByParentId($record) {
      const $relational_items = otherSource_relational_itemsPgResource.find();
      let previousAlias = $relational_items.alias;
      const relational_itemsAlias = sql.identifier(Symbol("relational_items"));
      $relational_items.join({
        type: "inner",
        from: otherSource_relational_itemsPgResource.from,
        alias: relational_itemsAlias,
        conditions: [sql`${previousAlias}.${sql.identifier("id")} = ${relational_itemsAlias}.${sql.identifier("parent_id")}`]
      });
      previousAlias = relational_itemsAlias;
      $relational_items.where(sql`${previousAlias}.${sql.identifier("id")} = ${$relational_items.placeholder($record.get("topic_item_id"))}`);
      return $relational_items.single();
    },
    relationalTopicByRootTopicId($record) {
      const $relational_topics = pgResource_relational_topicsPgResource.find();
      let previousAlias = $relational_topics.alias;
      const relational_itemsAlias = sql.identifier(Symbol("relational_items"));
      $relational_topics.join({
        type: "inner",
        from: otherSource_relational_itemsPgResource.from,
        alias: relational_itemsAlias,
        conditions: [sql`${previousAlias}.${sql.identifier("topic_item_id")} = ${relational_itemsAlias}.${sql.identifier("root_topic_id")}`]
      });
      previousAlias = relational_itemsAlias;
      $relational_topics.where(sql`${previousAlias}.${sql.identifier("id")} = ${$relational_topics.placeholder($record.get("topic_item_id"))}`);
      return $relational_topics.single();
    },
    relationalItemsByParentId: {
      plan($record) {
        const $relational_items = otherSource_relational_itemsPgResource.find();
        let previousAlias = $relational_items.alias;
        const relational_itemsAlias = sql.identifier(Symbol("relational_items"));
        $relational_items.join({
          type: "inner",
          from: otherSource_relational_itemsPgResource.from,
          alias: relational_itemsAlias,
          conditions: [sql`${previousAlias}.${sql.identifier("parent_id")} = ${relational_itemsAlias}.${sql.identifier("id")}`]
        });
        previousAlias = relational_itemsAlias;
        $relational_items.where(sql`${previousAlias}.${sql.identifier("id")} = ${$relational_items.placeholder($record.get("topic_item_id"))}`);
        return connection($relational_items);
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
    relationalItemRelationsByChildId: {
      plan($record) {
        const $relational_item_relations = pgResource_relational_item_relationsPgResource.find();
        let previousAlias = $relational_item_relations.alias;
        const relational_itemsAlias = sql.identifier(Symbol("relational_items"));
        $relational_item_relations.join({
          type: "inner",
          from: otherSource_relational_itemsPgResource.from,
          alias: relational_itemsAlias,
          conditions: [sql`${previousAlias}.${sql.identifier("child_id")} = ${relational_itemsAlias}.${sql.identifier("id")}`]
        });
        previousAlias = relational_itemsAlias;
        $relational_item_relations.where(sql`${previousAlias}.${sql.identifier("id")} = ${$relational_item_relations.placeholder($record.get("topic_item_id"))}`);
        return connection($relational_item_relations);
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
    relationalItemRelationsByParentId: {
      plan($record) {
        const $relational_item_relations = pgResource_relational_item_relationsPgResource.find();
        let previousAlias = $relational_item_relations.alias;
        const relational_itemsAlias = sql.identifier(Symbol("relational_items"));
        $relational_item_relations.join({
          type: "inner",
          from: otherSource_relational_itemsPgResource.from,
          alias: relational_itemsAlias,
          conditions: [sql`${previousAlias}.${sql.identifier("parent_id")} = ${relational_itemsAlias}.${sql.identifier("id")}`]
        });
        previousAlias = relational_itemsAlias;
        $relational_item_relations.where(sql`${previousAlias}.${sql.identifier("id")} = ${$relational_item_relations.placeholder($record.get("topic_item_id"))}`);
        return connection($relational_item_relations);
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
    relationalItemRelationCompositePksByChildId: {
      plan($record) {
        const $relational_item_relation_composite_pks = pgResource_relational_item_relation_composite_pksPgResource.find();
        let previousAlias = $relational_item_relation_composite_pks.alias;
        const relational_itemsAlias = sql.identifier(Symbol("relational_items"));
        $relational_item_relation_composite_pks.join({
          type: "inner",
          from: otherSource_relational_itemsPgResource.from,
          alias: relational_itemsAlias,
          conditions: [sql`${previousAlias}.${sql.identifier("child_id")} = ${relational_itemsAlias}.${sql.identifier("id")}`]
        });
        previousAlias = relational_itemsAlias;
        $relational_item_relation_composite_pks.where(sql`${previousAlias}.${sql.identifier("id")} = ${$relational_item_relation_composite_pks.placeholder($record.get("topic_item_id"))}`);
        return connection($relational_item_relation_composite_pks);
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
    relationalItemRelationCompositePksByParentId: {
      plan($record) {
        const $relational_item_relation_composite_pks = pgResource_relational_item_relation_composite_pksPgResource.find();
        let previousAlias = $relational_item_relation_composite_pks.alias;
        const relational_itemsAlias = sql.identifier(Symbol("relational_items"));
        $relational_item_relation_composite_pks.join({
          type: "inner",
          from: otherSource_relational_itemsPgResource.from,
          alias: relational_itemsAlias,
          conditions: [sql`${previousAlias}.${sql.identifier("parent_id")} = ${relational_itemsAlias}.${sql.identifier("id")}`]
        });
        previousAlias = relational_itemsAlias;
        $relational_item_relation_composite_pks.where(sql`${previousAlias}.${sql.identifier("id")} = ${$relational_item_relation_composite_pks.placeholder($record.get("topic_item_id"))}`);
        return connection($relational_item_relation_composite_pks);
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
  RelationalItemRelationCondition: {
    id: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "id",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "id",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.int)}`;
            }
          });
        }
      }
    },
    parentId: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "parent_id",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "parent_id",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.int)}`;
            }
          });
        }
      }
    },
    childId: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "child_id",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "child_id",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.int)}`;
            }
          });
        }
      }
    }
  },
  RelationalItemRelationsOrderBy: {
    PRIMARY_KEY_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            relational_item_relationsUniques[0].attributes.forEach(attributeName => {
              queryBuilder.orderBy({
                attribute: attributeName,
                direction: "ASC",
                ...(undefined != null ? {
                  nulls: undefined ? "LAST" : "FIRST"
                } : null)
              });
            });
            queryBuilder.setOrderIsUnique();
          }
        }
      }
    },
    PRIMARY_KEY_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            relational_item_relationsUniques[0].attributes.forEach(attributeName => {
              queryBuilder.orderBy({
                attribute: attributeName,
                direction: "DESC",
                ...(undefined != null ? {
                  nulls: undefined ? "LAST" : "FIRST"
                } : null)
              });
            });
            queryBuilder.setOrderIsUnique();
          }
        }
      }
    },
    ID_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "id",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (true) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    ID_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "id",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (true) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    PARENT_ID_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "parent_id",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (true) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    PARENT_ID_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "parent_id",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (true) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    CHILD_ID_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "child_id",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    CHILD_ID_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "child_id",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    }
  },
  RelationalItemRelationCompositePkCondition: {
    parentId: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "parent_id",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "parent_id",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.int)}`;
            }
          });
        }
      }
    },
    childId: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "child_id",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "child_id",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.int)}`;
            }
          });
        }
      }
    }
  },
  RelationalItemRelationCompositePksOrderBy: {
    PRIMARY_KEY_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            relational_item_relation_composite_pksUniques[0].attributes.forEach(attributeName => {
              queryBuilder.orderBy({
                attribute: attributeName,
                direction: "ASC",
                ...(undefined != null ? {
                  nulls: undefined ? "LAST" : "FIRST"
                } : null)
              });
            });
            queryBuilder.setOrderIsUnique();
          }
        }
      }
    },
    PRIMARY_KEY_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            relational_item_relation_composite_pksUniques[0].attributes.forEach(attributeName => {
              queryBuilder.orderBy({
                attribute: attributeName,
                direction: "DESC",
                ...(undefined != null ? {
                  nulls: undefined ? "LAST" : "FIRST"
                } : null)
              });
            });
            queryBuilder.setOrderIsUnique();
          }
        }
      }
    },
    PARENT_ID_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "parent_id",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (true) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    PARENT_ID_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "parent_id",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (true) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    CHILD_ID_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "child_id",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    CHILD_ID_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "child_id",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    }
  },
  RelationalPost: {
    __assertStep: assertPgClassSingleStep,
    nodeId($parent) {
      const specifier = handler17.plan($parent);
      return lambda(specifier, nodeIdCodecs[handler17.codec.name].encode);
    },
    title($record) {
      return $record.get("title");
    },
    description($record) {
      return $record.get("description");
    },
    note($record) {
      return $record.get("note");
    },
    id($record) {
      return $record.get("id");
    },
    type($record) {
      return $record.get("type");
    },
    parentId($record) {
      return $record.get("parent_id");
    },
    rootTopicId($record) {
      return $record.get("root_topic_id");
    },
    authorId($record) {
      return $record.get("author_id");
    },
    position($record) {
      return $record.get("position");
    },
    createdAt($record) {
      return $record.get("created_at");
    },
    updatedAt($record) {
      return $record.get("updated_at");
    },
    isExplicitlyArchived($record) {
      return $record.get("is_explicitly_archived");
    },
    archivedAt($record) {
      return $record.get("archived_at");
    },
    personByAuthorId($record) {
      const $people = otherSource_peoplePgResource.find();
      let previousAlias = $people.alias;
      const relational_itemsAlias = sql.identifier(Symbol("relational_items"));
      $people.join({
        type: "inner",
        from: otherSource_relational_itemsPgResource.from,
        alias: relational_itemsAlias,
        conditions: [sql`${previousAlias}.${sql.identifier("person_id")} = ${relational_itemsAlias}.${sql.identifier("author_id")}`]
      });
      previousAlias = relational_itemsAlias;
      $people.where(sql`${previousAlias}.${sql.identifier("id")} = ${$people.placeholder($record.get("post_item_id"))}`);
      return $people.single();
    },
    relationalItemByParentId($record) {
      const $relational_items = otherSource_relational_itemsPgResource.find();
      let previousAlias = $relational_items.alias;
      const relational_itemsAlias = sql.identifier(Symbol("relational_items"));
      $relational_items.join({
        type: "inner",
        from: otherSource_relational_itemsPgResource.from,
        alias: relational_itemsAlias,
        conditions: [sql`${previousAlias}.${sql.identifier("id")} = ${relational_itemsAlias}.${sql.identifier("parent_id")}`]
      });
      previousAlias = relational_itemsAlias;
      $relational_items.where(sql`${previousAlias}.${sql.identifier("id")} = ${$relational_items.placeholder($record.get("post_item_id"))}`);
      return $relational_items.single();
    },
    relationalTopicByRootTopicId($record) {
      const $relational_topics = pgResource_relational_topicsPgResource.find();
      let previousAlias = $relational_topics.alias;
      const relational_itemsAlias = sql.identifier(Symbol("relational_items"));
      $relational_topics.join({
        type: "inner",
        from: otherSource_relational_itemsPgResource.from,
        alias: relational_itemsAlias,
        conditions: [sql`${previousAlias}.${sql.identifier("topic_item_id")} = ${relational_itemsAlias}.${sql.identifier("root_topic_id")}`]
      });
      previousAlias = relational_itemsAlias;
      $relational_topics.where(sql`${previousAlias}.${sql.identifier("id")} = ${$relational_topics.placeholder($record.get("post_item_id"))}`);
      return $relational_topics.single();
    },
    relationalItemsByParentId: {
      plan($record) {
        const $relational_items = otherSource_relational_itemsPgResource.find();
        let previousAlias = $relational_items.alias;
        const relational_itemsAlias = sql.identifier(Symbol("relational_items"));
        $relational_items.join({
          type: "inner",
          from: otherSource_relational_itemsPgResource.from,
          alias: relational_itemsAlias,
          conditions: [sql`${previousAlias}.${sql.identifier("parent_id")} = ${relational_itemsAlias}.${sql.identifier("id")}`]
        });
        previousAlias = relational_itemsAlias;
        $relational_items.where(sql`${previousAlias}.${sql.identifier("id")} = ${$relational_items.placeholder($record.get("post_item_id"))}`);
        return connection($relational_items);
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
    relationalItemRelationsByChildId: {
      plan($record) {
        const $relational_item_relations = pgResource_relational_item_relationsPgResource.find();
        let previousAlias = $relational_item_relations.alias;
        const relational_itemsAlias = sql.identifier(Symbol("relational_items"));
        $relational_item_relations.join({
          type: "inner",
          from: otherSource_relational_itemsPgResource.from,
          alias: relational_itemsAlias,
          conditions: [sql`${previousAlias}.${sql.identifier("child_id")} = ${relational_itemsAlias}.${sql.identifier("id")}`]
        });
        previousAlias = relational_itemsAlias;
        $relational_item_relations.where(sql`${previousAlias}.${sql.identifier("id")} = ${$relational_item_relations.placeholder($record.get("post_item_id"))}`);
        return connection($relational_item_relations);
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
    relationalItemRelationsByParentId: {
      plan($record) {
        const $relational_item_relations = pgResource_relational_item_relationsPgResource.find();
        let previousAlias = $relational_item_relations.alias;
        const relational_itemsAlias = sql.identifier(Symbol("relational_items"));
        $relational_item_relations.join({
          type: "inner",
          from: otherSource_relational_itemsPgResource.from,
          alias: relational_itemsAlias,
          conditions: [sql`${previousAlias}.${sql.identifier("parent_id")} = ${relational_itemsAlias}.${sql.identifier("id")}`]
        });
        previousAlias = relational_itemsAlias;
        $relational_item_relations.where(sql`${previousAlias}.${sql.identifier("id")} = ${$relational_item_relations.placeholder($record.get("post_item_id"))}`);
        return connection($relational_item_relations);
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
    relationalItemRelationCompositePksByChildId: {
      plan($record) {
        const $relational_item_relation_composite_pks = pgResource_relational_item_relation_composite_pksPgResource.find();
        let previousAlias = $relational_item_relation_composite_pks.alias;
        const relational_itemsAlias = sql.identifier(Symbol("relational_items"));
        $relational_item_relation_composite_pks.join({
          type: "inner",
          from: otherSource_relational_itemsPgResource.from,
          alias: relational_itemsAlias,
          conditions: [sql`${previousAlias}.${sql.identifier("child_id")} = ${relational_itemsAlias}.${sql.identifier("id")}`]
        });
        previousAlias = relational_itemsAlias;
        $relational_item_relation_composite_pks.where(sql`${previousAlias}.${sql.identifier("id")} = ${$relational_item_relation_composite_pks.placeholder($record.get("post_item_id"))}`);
        return connection($relational_item_relation_composite_pks);
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
    relationalItemRelationCompositePksByParentId: {
      plan($record) {
        const $relational_item_relation_composite_pks = pgResource_relational_item_relation_composite_pksPgResource.find();
        let previousAlias = $relational_item_relation_composite_pks.alias;
        const relational_itemsAlias = sql.identifier(Symbol("relational_items"));
        $relational_item_relation_composite_pks.join({
          type: "inner",
          from: otherSource_relational_itemsPgResource.from,
          alias: relational_itemsAlias,
          conditions: [sql`${previousAlias}.${sql.identifier("parent_id")} = ${relational_itemsAlias}.${sql.identifier("id")}`]
        });
        previousAlias = relational_itemsAlias;
        $relational_item_relation_composite_pks.where(sql`${previousAlias}.${sql.identifier("id")} = ${$relational_item_relation_composite_pks.placeholder($record.get("post_item_id"))}`);
        return connection($relational_item_relation_composite_pks);
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
  RelationalDivider: {
    __assertStep: assertPgClassSingleStep,
    nodeId($parent) {
      const specifier = handler18.plan($parent);
      return lambda(specifier, nodeIdCodecs[handler18.codec.name].encode);
    },
    title($record) {
      return $record.get("title");
    },
    color($record) {
      return $record.get("color");
    },
    id($record) {
      return $record.get("id");
    },
    type($record) {
      return $record.get("type");
    },
    parentId($record) {
      return $record.get("parent_id");
    },
    rootTopicId($record) {
      return $record.get("root_topic_id");
    },
    authorId($record) {
      return $record.get("author_id");
    },
    position($record) {
      return $record.get("position");
    },
    createdAt($record) {
      return $record.get("created_at");
    },
    updatedAt($record) {
      return $record.get("updated_at");
    },
    isExplicitlyArchived($record) {
      return $record.get("is_explicitly_archived");
    },
    archivedAt($record) {
      return $record.get("archived_at");
    },
    personByAuthorId($record) {
      const $people = otherSource_peoplePgResource.find();
      let previousAlias = $people.alias;
      const relational_itemsAlias = sql.identifier(Symbol("relational_items"));
      $people.join({
        type: "inner",
        from: otherSource_relational_itemsPgResource.from,
        alias: relational_itemsAlias,
        conditions: [sql`${previousAlias}.${sql.identifier("person_id")} = ${relational_itemsAlias}.${sql.identifier("author_id")}`]
      });
      previousAlias = relational_itemsAlias;
      $people.where(sql`${previousAlias}.${sql.identifier("id")} = ${$people.placeholder($record.get("divider_item_id"))}`);
      return $people.single();
    },
    relationalItemByParentId($record) {
      const $relational_items = otherSource_relational_itemsPgResource.find();
      let previousAlias = $relational_items.alias;
      const relational_itemsAlias = sql.identifier(Symbol("relational_items"));
      $relational_items.join({
        type: "inner",
        from: otherSource_relational_itemsPgResource.from,
        alias: relational_itemsAlias,
        conditions: [sql`${previousAlias}.${sql.identifier("id")} = ${relational_itemsAlias}.${sql.identifier("parent_id")}`]
      });
      previousAlias = relational_itemsAlias;
      $relational_items.where(sql`${previousAlias}.${sql.identifier("id")} = ${$relational_items.placeholder($record.get("divider_item_id"))}`);
      return $relational_items.single();
    },
    relationalTopicByRootTopicId($record) {
      const $relational_topics = pgResource_relational_topicsPgResource.find();
      let previousAlias = $relational_topics.alias;
      const relational_itemsAlias = sql.identifier(Symbol("relational_items"));
      $relational_topics.join({
        type: "inner",
        from: otherSource_relational_itemsPgResource.from,
        alias: relational_itemsAlias,
        conditions: [sql`${previousAlias}.${sql.identifier("topic_item_id")} = ${relational_itemsAlias}.${sql.identifier("root_topic_id")}`]
      });
      previousAlias = relational_itemsAlias;
      $relational_topics.where(sql`${previousAlias}.${sql.identifier("id")} = ${$relational_topics.placeholder($record.get("divider_item_id"))}`);
      return $relational_topics.single();
    },
    relationalItemsByParentId: {
      plan($record) {
        const $relational_items = otherSource_relational_itemsPgResource.find();
        let previousAlias = $relational_items.alias;
        const relational_itemsAlias = sql.identifier(Symbol("relational_items"));
        $relational_items.join({
          type: "inner",
          from: otherSource_relational_itemsPgResource.from,
          alias: relational_itemsAlias,
          conditions: [sql`${previousAlias}.${sql.identifier("parent_id")} = ${relational_itemsAlias}.${sql.identifier("id")}`]
        });
        previousAlias = relational_itemsAlias;
        $relational_items.where(sql`${previousAlias}.${sql.identifier("id")} = ${$relational_items.placeholder($record.get("divider_item_id"))}`);
        return connection($relational_items);
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
    relationalItemRelationsByChildId: {
      plan($record) {
        const $relational_item_relations = pgResource_relational_item_relationsPgResource.find();
        let previousAlias = $relational_item_relations.alias;
        const relational_itemsAlias = sql.identifier(Symbol("relational_items"));
        $relational_item_relations.join({
          type: "inner",
          from: otherSource_relational_itemsPgResource.from,
          alias: relational_itemsAlias,
          conditions: [sql`${previousAlias}.${sql.identifier("child_id")} = ${relational_itemsAlias}.${sql.identifier("id")}`]
        });
        previousAlias = relational_itemsAlias;
        $relational_item_relations.where(sql`${previousAlias}.${sql.identifier("id")} = ${$relational_item_relations.placeholder($record.get("divider_item_id"))}`);
        return connection($relational_item_relations);
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
    relationalItemRelationsByParentId: {
      plan($record) {
        const $relational_item_relations = pgResource_relational_item_relationsPgResource.find();
        let previousAlias = $relational_item_relations.alias;
        const relational_itemsAlias = sql.identifier(Symbol("relational_items"));
        $relational_item_relations.join({
          type: "inner",
          from: otherSource_relational_itemsPgResource.from,
          alias: relational_itemsAlias,
          conditions: [sql`${previousAlias}.${sql.identifier("parent_id")} = ${relational_itemsAlias}.${sql.identifier("id")}`]
        });
        previousAlias = relational_itemsAlias;
        $relational_item_relations.where(sql`${previousAlias}.${sql.identifier("id")} = ${$relational_item_relations.placeholder($record.get("divider_item_id"))}`);
        return connection($relational_item_relations);
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
    relationalItemRelationCompositePksByChildId: {
      plan($record) {
        const $relational_item_relation_composite_pks = pgResource_relational_item_relation_composite_pksPgResource.find();
        let previousAlias = $relational_item_relation_composite_pks.alias;
        const relational_itemsAlias = sql.identifier(Symbol("relational_items"));
        $relational_item_relation_composite_pks.join({
          type: "inner",
          from: otherSource_relational_itemsPgResource.from,
          alias: relational_itemsAlias,
          conditions: [sql`${previousAlias}.${sql.identifier("child_id")} = ${relational_itemsAlias}.${sql.identifier("id")}`]
        });
        previousAlias = relational_itemsAlias;
        $relational_item_relation_composite_pks.where(sql`${previousAlias}.${sql.identifier("id")} = ${$relational_item_relation_composite_pks.placeholder($record.get("divider_item_id"))}`);
        return connection($relational_item_relation_composite_pks);
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
    relationalItemRelationCompositePksByParentId: {
      plan($record) {
        const $relational_item_relation_composite_pks = pgResource_relational_item_relation_composite_pksPgResource.find();
        let previousAlias = $relational_item_relation_composite_pks.alias;
        const relational_itemsAlias = sql.identifier(Symbol("relational_items"));
        $relational_item_relation_composite_pks.join({
          type: "inner",
          from: otherSource_relational_itemsPgResource.from,
          alias: relational_itemsAlias,
          conditions: [sql`${previousAlias}.${sql.identifier("parent_id")} = ${relational_itemsAlias}.${sql.identifier("id")}`]
        });
        previousAlias = relational_itemsAlias;
        $relational_item_relation_composite_pks.where(sql`${previousAlias}.${sql.identifier("id")} = ${$relational_item_relation_composite_pks.placeholder($record.get("divider_item_id"))}`);
        return connection($relational_item_relation_composite_pks);
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
  RelationalChecklist: {
    __assertStep: assertPgClassSingleStep,
    nodeId($parent) {
      const specifier = handler19.plan($parent);
      return lambda(specifier, nodeIdCodecs[handler19.codec.name].encode);
    },
    title($record) {
      return $record.get("title");
    },
    id($record) {
      return $record.get("id");
    },
    type($record) {
      return $record.get("type");
    },
    parentId($record) {
      return $record.get("parent_id");
    },
    rootTopicId($record) {
      return $record.get("root_topic_id");
    },
    authorId($record) {
      return $record.get("author_id");
    },
    position($record) {
      return $record.get("position");
    },
    createdAt($record) {
      return $record.get("created_at");
    },
    updatedAt($record) {
      return $record.get("updated_at");
    },
    isExplicitlyArchived($record) {
      return $record.get("is_explicitly_archived");
    },
    archivedAt($record) {
      return $record.get("archived_at");
    },
    personByAuthorId($record) {
      const $people = otherSource_peoplePgResource.find();
      let previousAlias = $people.alias;
      const relational_itemsAlias = sql.identifier(Symbol("relational_items"));
      $people.join({
        type: "inner",
        from: otherSource_relational_itemsPgResource.from,
        alias: relational_itemsAlias,
        conditions: [sql`${previousAlias}.${sql.identifier("person_id")} = ${relational_itemsAlias}.${sql.identifier("author_id")}`]
      });
      previousAlias = relational_itemsAlias;
      $people.where(sql`${previousAlias}.${sql.identifier("id")} = ${$people.placeholder($record.get("checklist_item_id"))}`);
      return $people.single();
    },
    relationalItemByParentId($record) {
      const $relational_items = otherSource_relational_itemsPgResource.find();
      let previousAlias = $relational_items.alias;
      const relational_itemsAlias = sql.identifier(Symbol("relational_items"));
      $relational_items.join({
        type: "inner",
        from: otherSource_relational_itemsPgResource.from,
        alias: relational_itemsAlias,
        conditions: [sql`${previousAlias}.${sql.identifier("id")} = ${relational_itemsAlias}.${sql.identifier("parent_id")}`]
      });
      previousAlias = relational_itemsAlias;
      $relational_items.where(sql`${previousAlias}.${sql.identifier("id")} = ${$relational_items.placeholder($record.get("checklist_item_id"))}`);
      return $relational_items.single();
    },
    relationalTopicByRootTopicId($record) {
      const $relational_topics = pgResource_relational_topicsPgResource.find();
      let previousAlias = $relational_topics.alias;
      const relational_itemsAlias = sql.identifier(Symbol("relational_items"));
      $relational_topics.join({
        type: "inner",
        from: otherSource_relational_itemsPgResource.from,
        alias: relational_itemsAlias,
        conditions: [sql`${previousAlias}.${sql.identifier("topic_item_id")} = ${relational_itemsAlias}.${sql.identifier("root_topic_id")}`]
      });
      previousAlias = relational_itemsAlias;
      $relational_topics.where(sql`${previousAlias}.${sql.identifier("id")} = ${$relational_topics.placeholder($record.get("checklist_item_id"))}`);
      return $relational_topics.single();
    },
    relationalItemsByParentId: {
      plan($record) {
        const $relational_items = otherSource_relational_itemsPgResource.find();
        let previousAlias = $relational_items.alias;
        const relational_itemsAlias = sql.identifier(Symbol("relational_items"));
        $relational_items.join({
          type: "inner",
          from: otherSource_relational_itemsPgResource.from,
          alias: relational_itemsAlias,
          conditions: [sql`${previousAlias}.${sql.identifier("parent_id")} = ${relational_itemsAlias}.${sql.identifier("id")}`]
        });
        previousAlias = relational_itemsAlias;
        $relational_items.where(sql`${previousAlias}.${sql.identifier("id")} = ${$relational_items.placeholder($record.get("checklist_item_id"))}`);
        return connection($relational_items);
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
    relationalItemRelationsByChildId: {
      plan($record) {
        const $relational_item_relations = pgResource_relational_item_relationsPgResource.find();
        let previousAlias = $relational_item_relations.alias;
        const relational_itemsAlias = sql.identifier(Symbol("relational_items"));
        $relational_item_relations.join({
          type: "inner",
          from: otherSource_relational_itemsPgResource.from,
          alias: relational_itemsAlias,
          conditions: [sql`${previousAlias}.${sql.identifier("child_id")} = ${relational_itemsAlias}.${sql.identifier("id")}`]
        });
        previousAlias = relational_itemsAlias;
        $relational_item_relations.where(sql`${previousAlias}.${sql.identifier("id")} = ${$relational_item_relations.placeholder($record.get("checklist_item_id"))}`);
        return connection($relational_item_relations);
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
    relationalItemRelationsByParentId: {
      plan($record) {
        const $relational_item_relations = pgResource_relational_item_relationsPgResource.find();
        let previousAlias = $relational_item_relations.alias;
        const relational_itemsAlias = sql.identifier(Symbol("relational_items"));
        $relational_item_relations.join({
          type: "inner",
          from: otherSource_relational_itemsPgResource.from,
          alias: relational_itemsAlias,
          conditions: [sql`${previousAlias}.${sql.identifier("parent_id")} = ${relational_itemsAlias}.${sql.identifier("id")}`]
        });
        previousAlias = relational_itemsAlias;
        $relational_item_relations.where(sql`${previousAlias}.${sql.identifier("id")} = ${$relational_item_relations.placeholder($record.get("checklist_item_id"))}`);
        return connection($relational_item_relations);
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
    relationalItemRelationCompositePksByChildId: {
      plan($record) {
        const $relational_item_relation_composite_pks = pgResource_relational_item_relation_composite_pksPgResource.find();
        let previousAlias = $relational_item_relation_composite_pks.alias;
        const relational_itemsAlias = sql.identifier(Symbol("relational_items"));
        $relational_item_relation_composite_pks.join({
          type: "inner",
          from: otherSource_relational_itemsPgResource.from,
          alias: relational_itemsAlias,
          conditions: [sql`${previousAlias}.${sql.identifier("child_id")} = ${relational_itemsAlias}.${sql.identifier("id")}`]
        });
        previousAlias = relational_itemsAlias;
        $relational_item_relation_composite_pks.where(sql`${previousAlias}.${sql.identifier("id")} = ${$relational_item_relation_composite_pks.placeholder($record.get("checklist_item_id"))}`);
        return connection($relational_item_relation_composite_pks);
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
    relationalItemRelationCompositePksByParentId: {
      plan($record) {
        const $relational_item_relation_composite_pks = pgResource_relational_item_relation_composite_pksPgResource.find();
        let previousAlias = $relational_item_relation_composite_pks.alias;
        const relational_itemsAlias = sql.identifier(Symbol("relational_items"));
        $relational_item_relation_composite_pks.join({
          type: "inner",
          from: otherSource_relational_itemsPgResource.from,
          alias: relational_itemsAlias,
          conditions: [sql`${previousAlias}.${sql.identifier("parent_id")} = ${relational_itemsAlias}.${sql.identifier("id")}`]
        });
        previousAlias = relational_itemsAlias;
        $relational_item_relation_composite_pks.where(sql`${previousAlias}.${sql.identifier("id")} = ${$relational_item_relation_composite_pks.placeholder($record.get("checklist_item_id"))}`);
        return connection($relational_item_relation_composite_pks);
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
  RelationalChecklistItem: {
    __assertStep: assertPgClassSingleStep,
    nodeId($parent) {
      const specifier = handler20.plan($parent);
      return lambda(specifier, nodeIdCodecs[handler20.codec.name].encode);
    },
    description($record) {
      return $record.get("description");
    },
    note($record) {
      return $record.get("note");
    },
    id($record) {
      return $record.get("id");
    },
    type($record) {
      return $record.get("type");
    },
    parentId($record) {
      return $record.get("parent_id");
    },
    rootTopicId($record) {
      return $record.get("root_topic_id");
    },
    authorId($record) {
      return $record.get("author_id");
    },
    position($record) {
      return $record.get("position");
    },
    createdAt($record) {
      return $record.get("created_at");
    },
    updatedAt($record) {
      return $record.get("updated_at");
    },
    isExplicitlyArchived($record) {
      return $record.get("is_explicitly_archived");
    },
    archivedAt($record) {
      return $record.get("archived_at");
    },
    personByAuthorId($record) {
      const $people = otherSource_peoplePgResource.find();
      let previousAlias = $people.alias;
      const relational_itemsAlias = sql.identifier(Symbol("relational_items"));
      $people.join({
        type: "inner",
        from: otherSource_relational_itemsPgResource.from,
        alias: relational_itemsAlias,
        conditions: [sql`${previousAlias}.${sql.identifier("person_id")} = ${relational_itemsAlias}.${sql.identifier("author_id")}`]
      });
      previousAlias = relational_itemsAlias;
      $people.where(sql`${previousAlias}.${sql.identifier("id")} = ${$people.placeholder($record.get("checklist_item_item_id"))}`);
      return $people.single();
    },
    relationalItemByParentId($record) {
      const $relational_items = otherSource_relational_itemsPgResource.find();
      let previousAlias = $relational_items.alias;
      const relational_itemsAlias = sql.identifier(Symbol("relational_items"));
      $relational_items.join({
        type: "inner",
        from: otherSource_relational_itemsPgResource.from,
        alias: relational_itemsAlias,
        conditions: [sql`${previousAlias}.${sql.identifier("id")} = ${relational_itemsAlias}.${sql.identifier("parent_id")}`]
      });
      previousAlias = relational_itemsAlias;
      $relational_items.where(sql`${previousAlias}.${sql.identifier("id")} = ${$relational_items.placeholder($record.get("checklist_item_item_id"))}`);
      return $relational_items.single();
    },
    relationalTopicByRootTopicId($record) {
      const $relational_topics = pgResource_relational_topicsPgResource.find();
      let previousAlias = $relational_topics.alias;
      const relational_itemsAlias = sql.identifier(Symbol("relational_items"));
      $relational_topics.join({
        type: "inner",
        from: otherSource_relational_itemsPgResource.from,
        alias: relational_itemsAlias,
        conditions: [sql`${previousAlias}.${sql.identifier("topic_item_id")} = ${relational_itemsAlias}.${sql.identifier("root_topic_id")}`]
      });
      previousAlias = relational_itemsAlias;
      $relational_topics.where(sql`${previousAlias}.${sql.identifier("id")} = ${$relational_topics.placeholder($record.get("checklist_item_item_id"))}`);
      return $relational_topics.single();
    },
    relationalItemsByParentId: {
      plan($record) {
        const $relational_items = otherSource_relational_itemsPgResource.find();
        let previousAlias = $relational_items.alias;
        const relational_itemsAlias = sql.identifier(Symbol("relational_items"));
        $relational_items.join({
          type: "inner",
          from: otherSource_relational_itemsPgResource.from,
          alias: relational_itemsAlias,
          conditions: [sql`${previousAlias}.${sql.identifier("parent_id")} = ${relational_itemsAlias}.${sql.identifier("id")}`]
        });
        previousAlias = relational_itemsAlias;
        $relational_items.where(sql`${previousAlias}.${sql.identifier("id")} = ${$relational_items.placeholder($record.get("checklist_item_item_id"))}`);
        return connection($relational_items);
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
    relationalItemRelationsByChildId: {
      plan($record) {
        const $relational_item_relations = pgResource_relational_item_relationsPgResource.find();
        let previousAlias = $relational_item_relations.alias;
        const relational_itemsAlias = sql.identifier(Symbol("relational_items"));
        $relational_item_relations.join({
          type: "inner",
          from: otherSource_relational_itemsPgResource.from,
          alias: relational_itemsAlias,
          conditions: [sql`${previousAlias}.${sql.identifier("child_id")} = ${relational_itemsAlias}.${sql.identifier("id")}`]
        });
        previousAlias = relational_itemsAlias;
        $relational_item_relations.where(sql`${previousAlias}.${sql.identifier("id")} = ${$relational_item_relations.placeholder($record.get("checklist_item_item_id"))}`);
        return connection($relational_item_relations);
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
    relationalItemRelationsByParentId: {
      plan($record) {
        const $relational_item_relations = pgResource_relational_item_relationsPgResource.find();
        let previousAlias = $relational_item_relations.alias;
        const relational_itemsAlias = sql.identifier(Symbol("relational_items"));
        $relational_item_relations.join({
          type: "inner",
          from: otherSource_relational_itemsPgResource.from,
          alias: relational_itemsAlias,
          conditions: [sql`${previousAlias}.${sql.identifier("parent_id")} = ${relational_itemsAlias}.${sql.identifier("id")}`]
        });
        previousAlias = relational_itemsAlias;
        $relational_item_relations.where(sql`${previousAlias}.${sql.identifier("id")} = ${$relational_item_relations.placeholder($record.get("checklist_item_item_id"))}`);
        return connection($relational_item_relations);
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
    relationalItemRelationCompositePksByChildId: {
      plan($record) {
        const $relational_item_relation_composite_pks = pgResource_relational_item_relation_composite_pksPgResource.find();
        let previousAlias = $relational_item_relation_composite_pks.alias;
        const relational_itemsAlias = sql.identifier(Symbol("relational_items"));
        $relational_item_relation_composite_pks.join({
          type: "inner",
          from: otherSource_relational_itemsPgResource.from,
          alias: relational_itemsAlias,
          conditions: [sql`${previousAlias}.${sql.identifier("child_id")} = ${relational_itemsAlias}.${sql.identifier("id")}`]
        });
        previousAlias = relational_itemsAlias;
        $relational_item_relation_composite_pks.where(sql`${previousAlias}.${sql.identifier("id")} = ${$relational_item_relation_composite_pks.placeholder($record.get("checklist_item_item_id"))}`);
        return connection($relational_item_relation_composite_pks);
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
    relationalItemRelationCompositePksByParentId: {
      plan($record) {
        const $relational_item_relation_composite_pks = pgResource_relational_item_relation_composite_pksPgResource.find();
        let previousAlias = $relational_item_relation_composite_pks.alias;
        const relational_itemsAlias = sql.identifier(Symbol("relational_items"));
        $relational_item_relation_composite_pks.join({
          type: "inner",
          from: otherSource_relational_itemsPgResource.from,
          alias: relational_itemsAlias,
          conditions: [sql`${previousAlias}.${sql.identifier("parent_id")} = ${relational_itemsAlias}.${sql.identifier("id")}`]
        });
        previousAlias = relational_itemsAlias;
        $relational_item_relation_composite_pks.where(sql`${previousAlias}.${sql.identifier("id")} = ${$relational_item_relation_composite_pks.placeholder($record.get("checklist_item_item_id"))}`);
        return connection($relational_item_relation_composite_pks);
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
  Query: {
    __assertStep() {
      return true;
    },
    query() {
      return rootValue();
    },
    nodeId($parent) {
      const specifier = handler21.plan($parent);
      return lambda(specifier, nodeIdCodecs[handler21.codec.name].encode);
    },
    node(_$root, args) {
      return node(nodeIdHandlerByTypeName, args.getRaw("nodeId"));
    },
    organizationByOrganizationId(_$root, args) {
      return otherSource_organizationsPgResource.get({
        organization_id: args.getRaw("organizationId")
      });
    },
    organizationByName(_$root, args) {
      return otherSource_organizationsPgResource.get({
        name: args.getRaw("name")
      });
    },
    personByPersonId(_$root, args) {
      return otherSource_peoplePgResource.get({
        person_id: args.getRaw("personId")
      });
    },
    personByUsername(_$root, args) {
      return otherSource_peoplePgResource.get({
        username: args.getRaw("username")
      });
    },
    priorityById(_$root, args) {
      return otherSource_prioritiesPgResource.get({
        id: args.getRaw("id")
      });
    },
    relationalChecklistByChecklistItemId(_$root, args) {
      return pgResource_relational_checklistsPgResource.get({
        checklist_item_id: args.getRaw("checklistItemId")
      });
    },
    relationalItemRelationCompositePkByParentIdAndChildId(_$root, args) {
      return pgResource_relational_item_relation_composite_pksPgResource.get({
        parent_id: args.getRaw("parentId"),
        child_id: args.getRaw("childId")
      });
    },
    relationalTopicByTopicItemId(_$root, args) {
      return pgResource_relational_topicsPgResource.get({
        topic_item_id: args.getRaw("topicItemId")
      });
    },
    singleTableItemRelationCompositePkByParentIdAndChildId(_$root, args) {
      return otherSource_single_table_item_relation_composite_pksPgResource.get({
        parent_id: args.getRaw("parentId"),
        child_id: args.getRaw("childId")
      });
    },
    relationalChecklistItemByChecklistItemItemId(_$root, args) {
      return pgResource_relational_checklist_itemsPgResource.get({
        checklist_item_item_id: args.getRaw("checklistItemItemId")
      });
    },
    relationalDividerByDividerItemId(_$root, args) {
      return pgResource_relational_dividersPgResource.get({
        divider_item_id: args.getRaw("dividerItemId")
      });
    },
    relationalItemRelationById(_$root, args) {
      return pgResource_relational_item_relationsPgResource.get({
        id: args.getRaw("id")
      });
    },
    relationalItemRelationByParentIdAndChildId(_$root, args) {
      return pgResource_relational_item_relationsPgResource.get({
        parent_id: args.getRaw("parentId"),
        child_id: args.getRaw("childId")
      });
    },
    singleTableItemRelationById(_$root, args) {
      return otherSource_single_table_item_relationsPgResource.get({
        id: args.getRaw("id")
      });
    },
    singleTableItemRelationByParentIdAndChildId(_$root, args) {
      return otherSource_single_table_item_relationsPgResource.get({
        parent_id: args.getRaw("parentId"),
        child_id: args.getRaw("childId")
      });
    },
    logEntryById(_$root, args) {
      return otherSource_log_entriesPgResource.get({
        id: args.getRaw("id")
      });
    },
    relationalPostByPostItemId(_$root, args) {
      return pgResource_relational_postsPgResource.get({
        post_item_id: args.getRaw("postItemId")
      });
    },
    firstPartyVulnerabilityById(_$root, args) {
      return paths_0_resource_first_party_vulnerabilitiesPgResource.get({
        id: args.getRaw("id")
      });
    },
    thirdPartyVulnerabilityById(_$root, args) {
      return paths_1_resource_third_party_vulnerabilitiesPgResource.get({
        id: args.getRaw("id")
      });
    },
    awsApplicationById(_$root, args) {
      return otherSource_aws_applicationsPgResource.get({
        id: args.getRaw("id")
      });
    },
    gcpApplicationById(_$root, args) {
      return otherSource_gcp_applicationsPgResource.get({
        id: args.getRaw("id")
      });
    },
    allSingleTables: {
      plan($parent, args, info) {
        const $select = getSelectPlanFromParentAndArgs($parent, args, info);
        return connection($select, {
          // nodePlan: ($item) => $item,
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
    getSingleTableTopicById($root, args, _info) {
      const selectArgs = makeArgs_get_single_table_topic_by_id(args);
      return resource_get_single_table_topic_by_idPgResource.execute(selectArgs);
    },
    singleTableTopic(_$parent, args) {
      const $nodeId = args.getRaw("nodeId");
      return fetcher($nodeId);
    },
    singleTablePost(_$parent, args) {
      const $nodeId = args.getRaw("nodeId");
      return fetcher2($nodeId);
    },
    singleTableDivider(_$parent, args) {
      const $nodeId = args.getRaw("nodeId");
      return fetcher3($nodeId);
    },
    singleTableChecklist(_$parent, args) {
      const $nodeId = args.getRaw("nodeId");
      return fetcher4($nodeId);
    },
    singleTableChecklistItem(_$parent, args) {
      const $nodeId = args.getRaw("nodeId");
      return fetcher5($nodeId);
    },
    organization(_$parent, args) {
      const $nodeId = args.getRaw("nodeId");
      return fetcher6($nodeId);
    },
    person(_$parent, args) {
      const $nodeId = args.getRaw("nodeId");
      return fetcher7($nodeId);
    },
    priority(_$parent, args) {
      const $nodeId = args.getRaw("nodeId");
      return fetcher8($nodeId);
    },
    relationalChecklist(_$parent, args) {
      const $nodeId = args.getRaw("nodeId");
      return fetcher9($nodeId);
    },
    relationalItemRelationCompositePk(_$parent, args) {
      const $nodeId = args.getRaw("nodeId");
      return fetcher10($nodeId);
    },
    relationalTopic(_$parent, args) {
      const $nodeId = args.getRaw("nodeId");
      return fetcher11($nodeId);
    },
    singleTableItemRelationCompositePk(_$parent, args) {
      const $nodeId = args.getRaw("nodeId");
      return fetcher12($nodeId);
    },
    relationalChecklistItem(_$parent, args) {
      const $nodeId = args.getRaw("nodeId");
      return fetcher13($nodeId);
    },
    relationalDivider(_$parent, args) {
      const $nodeId = args.getRaw("nodeId");
      return fetcher14($nodeId);
    },
    relationalItemRelation(_$parent, args) {
      const $nodeId = args.getRaw("nodeId");
      return fetcher15($nodeId);
    },
    singleTableItemRelation(_$parent, args) {
      const $nodeId = args.getRaw("nodeId");
      return fetcher16($nodeId);
    },
    logEntry(_$parent, args) {
      const $nodeId = args.getRaw("nodeId");
      return fetcher17($nodeId);
    },
    relationalPost(_$parent, args) {
      const $nodeId = args.getRaw("nodeId");
      return fetcher18($nodeId);
    },
    firstPartyVulnerability(_$parent, args) {
      const $nodeId = args.getRaw("nodeId");
      return fetcher19($nodeId);
    },
    thirdPartyVulnerability(_$parent, args) {
      const $nodeId = args.getRaw("nodeId");
      return fetcher20($nodeId);
    },
    awsApplication(_$parent, args) {
      const $nodeId = args.getRaw("nodeId");
      return fetcher21($nodeId);
    },
    gcpApplication(_$parent, args) {
      const $nodeId = args.getRaw("nodeId");
      return fetcher22($nodeId);
    },
    allVulnerabilities: {
      plan() {
        const $list = pgUnionAll({
          attributes: spec_Vulnerability.attributes,
          resourceByTypeName: resourceByTypeName7,
          members: members7,
          name: "Vulnerability"
        });
        return true ? connection($list) : $list;
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
        only($parent, $connection, fieldArgs) {
          const $union = $connection.getSubplan();
          const $ltt = fieldArgs.getRaw();
          $union.apply(lambda($ltt, limitToTypes));
        },
        orderBy(parent, $connection, value) {
          const $select = $connection.getSubplan();
          value.apply($select);
        }
      }
    },
    allApplications: {
      plan() {
        const $list = pgUnionAll({
          attributes: spec_Application.attributes,
          resourceByTypeName: resourceByTypeName8,
          members: members8,
          name: "Application"
        });
        return true ? connection($list) : $list;
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
        only($parent, $connection, fieldArgs) {
          const $union = $connection.getSubplan();
          const $ltt = fieldArgs.getRaw();
          $union.apply(lambda($ltt, limitToTypes));
        },
        orderBy(parent, $connection, value) {
          const $select = $connection.getSubplan();
          value.apply($select);
        }
      }
    },
    allZeroImplementations: {
      plan() {
        const $list = pgUnionAll({
          attributes: spec_ZeroImplementation.attributes,
          resourceByTypeName: resourceByTypeName9,
          members: members9,
          name: "ZeroImplementation"
        });
        return true ? connection($list) : $list;
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
    allOrganizations: {
      plan() {
        return connection(otherSource_organizationsPgResource.find());
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
        return connection(otherSource_peoplePgResource.find());
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
    allPriorities: {
      plan() {
        return connection(otherSource_prioritiesPgResource.find());
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
    allRelationalChecklists: {
      plan() {
        return connection(pgResource_relational_checklistsPgResource.find());
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
    allRelationalItemRelationCompositePks: {
      plan() {
        return connection(pgResource_relational_item_relation_composite_pksPgResource.find());
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
    allRelationalTopics: {
      plan() {
        return connection(pgResource_relational_topicsPgResource.find());
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
    allSingleTableItemRelationCompositePks: {
      plan() {
        return connection(otherSource_single_table_item_relation_composite_pksPgResource.find());
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
    allRelationalChecklistItems: {
      plan() {
        return connection(pgResource_relational_checklist_itemsPgResource.find());
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
    allRelationalDividers: {
      plan() {
        return connection(pgResource_relational_dividersPgResource.find());
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
    allRelationalItemRelations: {
      plan() {
        return connection(pgResource_relational_item_relationsPgResource.find());
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
    allSingleTableItemRelations: {
      plan() {
        return connection(otherSource_single_table_item_relationsPgResource.find());
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
    allLogEntries: {
      plan() {
        return connection(otherSource_log_entriesPgResource.find());
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
    allRelationalPosts: {
      plan() {
        return connection(pgResource_relational_postsPgResource.find());
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
    allFirstPartyVulnerabilities: {
      plan() {
        return connection(paths_0_resource_first_party_vulnerabilitiesPgResource.find());
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
    allThirdPartyVulnerabilities: {
      plan() {
        return connection(paths_1_resource_third_party_vulnerabilitiesPgResource.find());
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
    allAwsApplications: {
      plan() {
        return connection(otherSource_aws_applicationsPgResource.find());
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
    allGcpApplications: {
      plan() {
        return connection(otherSource_gcp_applicationsPgResource.find());
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
    allSingleTableItems: {
      plan() {
        return connection(resource_single_table_itemsPgResource.find());
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
    allRelationalItems: {
      plan() {
        return connection(otherSource_relational_itemsPgResource.find());
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
  FirstPartyVulnerability: {
    __assertStep: assertPgClassSingleStep,
    nodeId($parent) {
      const specifier = nodeIdHandlerByTypeName.FirstPartyVulnerability.plan($parent);
      return lambda(specifier, nodeIdCodecs[nodeIdHandlerByTypeName.FirstPartyVulnerability.codec.name].encode);
    },
    cvssScoreInt($in, args, _info) {
      if (!hasRecord($in)) {
        throw new Error(`Invalid plan, exepcted 'PgSelectSingleStep', 'PgInsertSingleStep', 'PgUpdateSingleStep' or 'PgDeleteSingleStep', but found ${$in}`);
      }
      const extraSelectArgs = makeArgs_first_party_vulnerabilities_cvss_score_int(args);
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
      if (resource_first_party_vulnerabilities_cvss_score_intPgResource.isUnique && !resource_first_party_vulnerabilities_cvss_score_intPgResource.codec.attributes && typeof resource_first_party_vulnerabilities_cvss_score_intPgResource.from === "function") {
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
        const from = pgFromExpression($row, resource_first_party_vulnerabilities_cvss_score_intPgResource.from, resource_first_party_vulnerabilities_cvss_score_intPgResource.parameters, newSelectArgs);
        return pgClassExpression($row, resource_first_party_vulnerabilities_cvss_score_intPgResource.codec, undefined)`${from}`;
      }
      // PERF: or here, if scalar add select to `$row`?
      return resource_first_party_vulnerabilities_cvss_score_intPgResource.execute(selectArgs);
    },
    id($record) {
      return $record.get("id");
    },
    name($record) {
      return $record.get("name");
    },
    cvssScore($record) {
      return $record.get("cvss_score");
    },
    teamName($record) {
      return $record.get("team_name");
    },
    applications: {
      plan($parent) {
        const $record = undefined ? $parent.get("result") : $parent;
        for (let i = 0, l = paths7.length; i < l; i++) {
          const path = paths7[i];
          const firstLayer = path.layers[0];
          const member = members10[i];
          member.match = firstLayer.localAttributes.reduce((memo, col, idx) => {
            memo[firstLayer.remoteAttributes[idx]] = {
              step: $record.get(col)
            };
            return memo;
          }, Object.create(null));
        }
        const $list = pgUnionAll({
          attributes: spec_Application.attributes,
          resourceByTypeName: resourceByTypeName10,
          members: members10,
          name: "applications"
        });
        if (true) {
          return connection($list);
        } else if (false) {
          return $list.single();
        } else {
          return $list;
        }
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
        only($parent, $connection, fieldArgs) {
          const $union = $connection.getSubplan();
          const $ltt = fieldArgs.getRaw();
          $union.apply(lambda($ltt, limitToTypes));
        },
        orderBy(parent, $connection, value) {
          const $select = $connection.getSubplan();
          value.apply($select);
        }
      }
    },
    owners($parent) {
      const $record = undefined ? $parent.get("result") : $parent;
      for (let i = 0, l = paths8.length; i < l; i++) {
        const path = paths8[i];
        const firstLayer = path.layers[0];
        const member = members11[i];
        member.match = firstLayer.localAttributes.reduce((memo, col, idx) => {
          memo[firstLayer.remoteAttributes[idx]] = {
            step: $record.get(col)
          };
          return memo;
        }, Object.create(null));
      }
      const $list = pgUnionAll({
        attributes: attributes4,
        resourceByTypeName: resourceByTypeName11,
        members: members11,
        name: "owners"
      });
      if (true) {
        return connection($list);
      } else if (false) {
        return $list.single();
      } else {
        return $list;
      }
    }
  },
  ThirdPartyVulnerability: {
    __assertStep: assertPgClassSingleStep,
    nodeId($parent) {
      const specifier = nodeIdHandlerByTypeName.ThirdPartyVulnerability.plan($parent);
      return lambda(specifier, nodeIdCodecs[nodeIdHandlerByTypeName.ThirdPartyVulnerability.codec.name].encode);
    },
    cvssScoreInt($in, args, _info) {
      if (!hasRecord($in)) {
        throw new Error(`Invalid plan, exepcted 'PgSelectSingleStep', 'PgInsertSingleStep', 'PgUpdateSingleStep' or 'PgDeleteSingleStep', but found ${$in}`);
      }
      const extraSelectArgs = makeArgs_third_party_vulnerabilities_cvss_score_int(args);
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
      if (resource_third_party_vulnerabilities_cvss_score_intPgResource.isUnique && !resource_third_party_vulnerabilities_cvss_score_intPgResource.codec.attributes && typeof resource_third_party_vulnerabilities_cvss_score_intPgResource.from === "function") {
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
        const from = pgFromExpression($row, resource_third_party_vulnerabilities_cvss_score_intPgResource.from, resource_third_party_vulnerabilities_cvss_score_intPgResource.parameters, newSelectArgs);
        return pgClassExpression($row, resource_third_party_vulnerabilities_cvss_score_intPgResource.codec, undefined)`${from}`;
      }
      // PERF: or here, if scalar add select to `$row`?
      return resource_third_party_vulnerabilities_cvss_score_intPgResource.execute(selectArgs);
    },
    id($record) {
      return $record.get("id");
    },
    name($record) {
      return $record.get("name");
    },
    cvssScore($record) {
      return $record.get("cvss_score");
    },
    vendorName($record) {
      return $record.get("vendor_name");
    },
    applications: {
      plan($parent) {
        const $record = undefined ? $parent.get("result") : $parent;
        for (let i = 0, l = paths9.length; i < l; i++) {
          const path = paths9[i];
          const firstLayer = path.layers[0];
          const member = members12[i];
          member.match = firstLayer.localAttributes.reduce((memo, col, idx) => {
            memo[firstLayer.remoteAttributes[idx]] = {
              step: $record.get(col)
            };
            return memo;
          }, Object.create(null));
        }
        const $list = pgUnionAll({
          attributes: spec_Application.attributes,
          resourceByTypeName: resourceByTypeName12,
          members: members12,
          name: "applications"
        });
        if (true) {
          return connection($list);
        } else if (false) {
          return $list.single();
        } else {
          return $list;
        }
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
        only($parent, $connection, fieldArgs) {
          const $union = $connection.getSubplan();
          const $ltt = fieldArgs.getRaw();
          $union.apply(lambda($ltt, limitToTypes));
        },
        orderBy(parent, $connection, value) {
          const $select = $connection.getSubplan();
          value.apply($select);
        }
      }
    },
    owners($parent) {
      const $record = undefined ? $parent.get("result") : $parent;
      for (let i = 0, l = paths10.length; i < l; i++) {
        const path = paths10[i];
        const firstLayer = path.layers[0];
        const member = members13[i];
        member.match = firstLayer.localAttributes.reduce((memo, col, idx) => {
          memo[firstLayer.remoteAttributes[idx]] = {
            step: $record.get(col)
          };
          return memo;
        }, Object.create(null));
      }
      const $list = pgUnionAll({
        attributes: attributes5,
        resourceByTypeName: resourceByTypeName13,
        members: members13,
        name: "owners"
      });
      if (true) {
        return connection($list);
      } else if (false) {
        return $list.single();
      } else {
        return $list;
      }
    }
  },
  ZeroImplementationsConnection: {
    __assertStep: ConnectionStep,
    nodes($connection) {
      return $connection.nodes();
    },
    edges($connection) {
      return $connection.edges();
    },
    pageInfo($connection) {
      // TYPES: why is this a TypeScript issue without the 'any'?
      return $connection.pageInfo();
    },
    totalCount($connection) {
      return $connection.cloneSubplanWithoutPagination("aggregate").singleAsRecord().select(sql`count(*)`, TYPES.bigint, false);
    }
  },
  ZeroImplementationsEdge: {
    __assertStep: assertEdgeCapableStep,
    cursor($edge) {
      return $edge.cursor();
    },
    node($edge) {
      return $edge.node();
    }
  },
  ZeroImplementationCondition: {
    id: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "id",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "id",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.int)}`;
            }
          });
        }
      }
    },
    name: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "name",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "name",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.text)}`;
            }
          });
        }
      }
    }
  },
  ZeroImplementationsOrderBy: {
    ID_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "id",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    ID_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "id",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    NAME_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "name",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    NAME_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "name",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    }
  },
  OrganizationsConnection: {
    __assertStep: ConnectionStep,
    nodes($connection) {
      return $connection.nodes();
    },
    edges($connection) {
      return $connection.edges();
    },
    pageInfo($connection) {
      // TYPES: why is this a TypeScript issue without the 'any'?
      return $connection.pageInfo();
    },
    totalCount($connection) {
      return $connection.cloneSubplanWithoutPagination("aggregate").singleAsRecord().select(sql`count(*)`, TYPES.bigint, false);
    }
  },
  OrganizationsEdge: {
    __assertStep: assertEdgeCapableStep,
    cursor($edge) {
      return $edge.cursor();
    },
    node($edge) {
      return $edge.node();
    }
  },
  OrganizationCondition: {
    organizationId: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "organization_id",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "organization_id",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.int)}`;
            }
          });
        }
      }
    },
    name: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "name",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "name",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.text)}`;
            }
          });
        }
      }
    }
  },
  OrganizationsOrderBy: {
    PRIMARY_KEY_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            organizationsUniques[0].attributes.forEach(attributeName => {
              queryBuilder.orderBy({
                attribute: attributeName,
                direction: "ASC",
                ...(undefined != null ? {
                  nulls: undefined ? "LAST" : "FIRST"
                } : null)
              });
            });
            queryBuilder.setOrderIsUnique();
          }
        }
      }
    },
    PRIMARY_KEY_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            organizationsUniques[0].attributes.forEach(attributeName => {
              queryBuilder.orderBy({
                attribute: attributeName,
                direction: "DESC",
                ...(undefined != null ? {
                  nulls: undefined ? "LAST" : "FIRST"
                } : null)
              });
            });
            queryBuilder.setOrderIsUnique();
          }
        }
      }
    },
    ORGANIZATION_ID_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "organization_id",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (true) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    ORGANIZATION_ID_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "organization_id",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (true) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    NAME_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "name",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (true) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    NAME_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "name",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (true) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    }
  },
  PeopleConnection: {
    __assertStep: ConnectionStep,
    nodes($connection) {
      return $connection.nodes();
    },
    edges($connection) {
      return $connection.edges();
    },
    pageInfo($connection) {
      // TYPES: why is this a TypeScript issue without the 'any'?
      return $connection.pageInfo();
    },
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
  PersonCondition: {
    personId: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "person_id",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "person_id",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.int)}`;
            }
          });
        }
      }
    },
    username: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "username",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "username",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.text)}`;
            }
          });
        }
      }
    }
  },
  PeopleOrderBy: {
    PRIMARY_KEY_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            peopleUniques[0].attributes.forEach(attributeName => {
              queryBuilder.orderBy({
                attribute: attributeName,
                direction: "ASC",
                ...(undefined != null ? {
                  nulls: undefined ? "LAST" : "FIRST"
                } : null)
              });
            });
            queryBuilder.setOrderIsUnique();
          }
        }
      }
    },
    PRIMARY_KEY_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            peopleUniques[0].attributes.forEach(attributeName => {
              queryBuilder.orderBy({
                attribute: attributeName,
                direction: "DESC",
                ...(undefined != null ? {
                  nulls: undefined ? "LAST" : "FIRST"
                } : null)
              });
            });
            queryBuilder.setOrderIsUnique();
          }
        }
      }
    },
    PERSON_ID_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "person_id",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (true) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    PERSON_ID_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "person_id",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (true) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    USERNAME_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "username",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (true) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    USERNAME_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "username",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (true) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    }
  },
  PrioritiesConnection: {
    __assertStep: ConnectionStep,
    nodes($connection) {
      return $connection.nodes();
    },
    edges($connection) {
      return $connection.edges();
    },
    pageInfo($connection) {
      // TYPES: why is this a TypeScript issue without the 'any'?
      return $connection.pageInfo();
    },
    totalCount($connection) {
      return $connection.cloneSubplanWithoutPagination("aggregate").singleAsRecord().select(sql`count(*)`, TYPES.bigint, false);
    }
  },
  PrioritiesEdge: {
    __assertStep: assertEdgeCapableStep,
    cursor($edge) {
      return $edge.cursor();
    },
    node($edge) {
      return $edge.node();
    }
  },
  RelationalChecklistsConnection: {
    __assertStep: ConnectionStep,
    nodes($connection) {
      return $connection.nodes();
    },
    edges($connection) {
      return $connection.edges();
    },
    pageInfo($connection) {
      // TYPES: why is this a TypeScript issue without the 'any'?
      return $connection.pageInfo();
    },
    totalCount($connection) {
      return $connection.cloneSubplanWithoutPagination("aggregate").singleAsRecord().select(sql`count(*)`, TYPES.bigint, false);
    }
  },
  RelationalChecklistsEdge: {
    __assertStep: assertEdgeCapableStep,
    cursor($edge) {
      return $edge.cursor();
    },
    node($edge) {
      return $edge.node();
    }
  },
  RelationalChecklistCondition: {
    title: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "title",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "title",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.text)}`;
            }
          });
        }
      }
    },
    id: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "id",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "id",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.int)}`;
            }
          });
        }
      }
    },
    type: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "type",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "type",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, itemTypeCodec)}`;
            }
          });
        }
      }
    },
    parentId: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "parent_id",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "parent_id",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.int)}`;
            }
          });
        }
      }
    },
    rootTopicId: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "root_topic_id",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "root_topic_id",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.int)}`;
            }
          });
        }
      }
    },
    authorId: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "author_id",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "author_id",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.int)}`;
            }
          });
        }
      }
    },
    position: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "position",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "position",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.bigint)}`;
            }
          });
        }
      }
    },
    createdAt: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "created_at",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "created_at",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.timestamptz)}`;
            }
          });
        }
      }
    },
    updatedAt: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "updated_at",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "updated_at",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.timestamptz)}`;
            }
          });
        }
      }
    },
    isExplicitlyArchived: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "is_explicitly_archived",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "is_explicitly_archived",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.boolean)}`;
            }
          });
        }
      }
    },
    archivedAt: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "archived_at",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "archived_at",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.timestamptz)}`;
            }
          });
        }
      }
    }
  },
  RelationalChecklistsOrderBy: {
    PRIMARY_KEY_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            relational_checklistsUniques[0].attributes.forEach(attributeName => {
              queryBuilder.orderBy({
                attribute: attributeName,
                direction: "ASC",
                ...(undefined != null ? {
                  nulls: undefined ? "LAST" : "FIRST"
                } : null)
              });
            });
            queryBuilder.setOrderIsUnique();
          }
        }
      }
    },
    PRIMARY_KEY_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            relational_checklistsUniques[0].attributes.forEach(attributeName => {
              queryBuilder.orderBy({
                attribute: attributeName,
                direction: "DESC",
                ...(undefined != null ? {
                  nulls: undefined ? "LAST" : "FIRST"
                } : null)
              });
            });
            queryBuilder.setOrderIsUnique();
          }
        }
      }
    },
    TITLE_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "title",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    TITLE_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "title",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    ID_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "id",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    ID_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "id",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    TYPE_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "type",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    TYPE_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "type",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    PARENT_ID_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "parent_id",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    PARENT_ID_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "parent_id",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    ROOT_TOPIC_ID_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "root_topic_id",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    ROOT_TOPIC_ID_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "root_topic_id",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    AUTHOR_ID_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "author_id",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    AUTHOR_ID_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "author_id",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    POSITION_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "position",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    POSITION_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "position",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    CREATED_AT_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "created_at",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    CREATED_AT_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "created_at",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    UPDATED_AT_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "updated_at",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    UPDATED_AT_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "updated_at",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    IS_EXPLICITLY_ARCHIVED_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "is_explicitly_archived",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    IS_EXPLICITLY_ARCHIVED_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "is_explicitly_archived",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    ARCHIVED_AT_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "archived_at",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    ARCHIVED_AT_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "archived_at",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    }
  },
  RelationalTopicsConnection: {
    __assertStep: ConnectionStep,
    nodes($connection) {
      return $connection.nodes();
    },
    edges($connection) {
      return $connection.edges();
    },
    pageInfo($connection) {
      // TYPES: why is this a TypeScript issue without the 'any'?
      return $connection.pageInfo();
    },
    totalCount($connection) {
      return $connection.cloneSubplanWithoutPagination("aggregate").singleAsRecord().select(sql`count(*)`, TYPES.bigint, false);
    }
  },
  RelationalTopicsEdge: {
    __assertStep: assertEdgeCapableStep,
    cursor($edge) {
      return $edge.cursor();
    },
    node($edge) {
      return $edge.node();
    }
  },
  RelationalTopicCondition: {
    title: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "title",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "title",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.text)}`;
            }
          });
        }
      }
    },
    id: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "id",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "id",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.int)}`;
            }
          });
        }
      }
    },
    type: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "type",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "type",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, itemTypeCodec)}`;
            }
          });
        }
      }
    },
    parentId: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "parent_id",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "parent_id",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.int)}`;
            }
          });
        }
      }
    },
    rootTopicId: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "root_topic_id",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "root_topic_id",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.int)}`;
            }
          });
        }
      }
    },
    authorId: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "author_id",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "author_id",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.int)}`;
            }
          });
        }
      }
    },
    position: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "position",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "position",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.bigint)}`;
            }
          });
        }
      }
    },
    createdAt: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "created_at",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "created_at",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.timestamptz)}`;
            }
          });
        }
      }
    },
    updatedAt: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "updated_at",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "updated_at",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.timestamptz)}`;
            }
          });
        }
      }
    },
    isExplicitlyArchived: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "is_explicitly_archived",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "is_explicitly_archived",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.boolean)}`;
            }
          });
        }
      }
    },
    archivedAt: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "archived_at",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "archived_at",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.timestamptz)}`;
            }
          });
        }
      }
    }
  },
  RelationalTopicsOrderBy: {
    PRIMARY_KEY_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            relational_topicsUniques[0].attributes.forEach(attributeName => {
              queryBuilder.orderBy({
                attribute: attributeName,
                direction: "ASC",
                ...(undefined != null ? {
                  nulls: undefined ? "LAST" : "FIRST"
                } : null)
              });
            });
            queryBuilder.setOrderIsUnique();
          }
        }
      }
    },
    PRIMARY_KEY_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            relational_topicsUniques[0].attributes.forEach(attributeName => {
              queryBuilder.orderBy({
                attribute: attributeName,
                direction: "DESC",
                ...(undefined != null ? {
                  nulls: undefined ? "LAST" : "FIRST"
                } : null)
              });
            });
            queryBuilder.setOrderIsUnique();
          }
        }
      }
    },
    TITLE_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "title",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    TITLE_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "title",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    ID_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "id",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    ID_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "id",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    TYPE_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "type",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    TYPE_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "type",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    PARENT_ID_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "parent_id",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    PARENT_ID_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "parent_id",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    ROOT_TOPIC_ID_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "root_topic_id",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    ROOT_TOPIC_ID_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "root_topic_id",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    AUTHOR_ID_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "author_id",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    AUTHOR_ID_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "author_id",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    POSITION_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "position",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    POSITION_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "position",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    CREATED_AT_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "created_at",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    CREATED_AT_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "created_at",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    UPDATED_AT_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "updated_at",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    UPDATED_AT_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "updated_at",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    IS_EXPLICITLY_ARCHIVED_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "is_explicitly_archived",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    IS_EXPLICITLY_ARCHIVED_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "is_explicitly_archived",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    ARCHIVED_AT_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "archived_at",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    ARCHIVED_AT_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "archived_at",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    }
  },
  RelationalChecklistItemsConnection: {
    __assertStep: ConnectionStep,
    nodes($connection) {
      return $connection.nodes();
    },
    edges($connection) {
      return $connection.edges();
    },
    pageInfo($connection) {
      // TYPES: why is this a TypeScript issue without the 'any'?
      return $connection.pageInfo();
    },
    totalCount($connection) {
      return $connection.cloneSubplanWithoutPagination("aggregate").singleAsRecord().select(sql`count(*)`, TYPES.bigint, false);
    }
  },
  RelationalChecklistItemsEdge: {
    __assertStep: assertEdgeCapableStep,
    cursor($edge) {
      return $edge.cursor();
    },
    node($edge) {
      return $edge.node();
    }
  },
  RelationalChecklistItemCondition: {
    description: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "description",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "description",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.text)}`;
            }
          });
        }
      }
    },
    note: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "note",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "note",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.text)}`;
            }
          });
        }
      }
    },
    id: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "id",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "id",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.int)}`;
            }
          });
        }
      }
    },
    type: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "type",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "type",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, itemTypeCodec)}`;
            }
          });
        }
      }
    },
    parentId: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "parent_id",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "parent_id",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.int)}`;
            }
          });
        }
      }
    },
    rootTopicId: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "root_topic_id",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "root_topic_id",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.int)}`;
            }
          });
        }
      }
    },
    authorId: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "author_id",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "author_id",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.int)}`;
            }
          });
        }
      }
    },
    position: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "position",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "position",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.bigint)}`;
            }
          });
        }
      }
    },
    createdAt: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "created_at",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "created_at",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.timestamptz)}`;
            }
          });
        }
      }
    },
    updatedAt: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "updated_at",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "updated_at",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.timestamptz)}`;
            }
          });
        }
      }
    },
    isExplicitlyArchived: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "is_explicitly_archived",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "is_explicitly_archived",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.boolean)}`;
            }
          });
        }
      }
    },
    archivedAt: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "archived_at",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "archived_at",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.timestamptz)}`;
            }
          });
        }
      }
    }
  },
  RelationalChecklistItemsOrderBy: {
    PRIMARY_KEY_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            relational_checklist_itemsUniques[0].attributes.forEach(attributeName => {
              queryBuilder.orderBy({
                attribute: attributeName,
                direction: "ASC",
                ...(undefined != null ? {
                  nulls: undefined ? "LAST" : "FIRST"
                } : null)
              });
            });
            queryBuilder.setOrderIsUnique();
          }
        }
      }
    },
    PRIMARY_KEY_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            relational_checklist_itemsUniques[0].attributes.forEach(attributeName => {
              queryBuilder.orderBy({
                attribute: attributeName,
                direction: "DESC",
                ...(undefined != null ? {
                  nulls: undefined ? "LAST" : "FIRST"
                } : null)
              });
            });
            queryBuilder.setOrderIsUnique();
          }
        }
      }
    },
    DESCRIPTION_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "description",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    DESCRIPTION_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "description",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    NOTE_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "note",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    NOTE_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "note",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    ID_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "id",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    ID_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "id",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    TYPE_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "type",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    TYPE_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "type",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    PARENT_ID_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "parent_id",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    PARENT_ID_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "parent_id",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    ROOT_TOPIC_ID_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "root_topic_id",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    ROOT_TOPIC_ID_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "root_topic_id",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    AUTHOR_ID_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "author_id",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    AUTHOR_ID_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "author_id",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    POSITION_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "position",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    POSITION_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "position",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    CREATED_AT_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "created_at",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    CREATED_AT_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "created_at",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    UPDATED_AT_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "updated_at",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    UPDATED_AT_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "updated_at",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    IS_EXPLICITLY_ARCHIVED_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "is_explicitly_archived",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    IS_EXPLICITLY_ARCHIVED_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "is_explicitly_archived",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    ARCHIVED_AT_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "archived_at",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    ARCHIVED_AT_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "archived_at",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    }
  },
  RelationalDividersConnection: {
    __assertStep: ConnectionStep,
    nodes($connection) {
      return $connection.nodes();
    },
    edges($connection) {
      return $connection.edges();
    },
    pageInfo($connection) {
      // TYPES: why is this a TypeScript issue without the 'any'?
      return $connection.pageInfo();
    },
    totalCount($connection) {
      return $connection.cloneSubplanWithoutPagination("aggregate").singleAsRecord().select(sql`count(*)`, TYPES.bigint, false);
    }
  },
  RelationalDividersEdge: {
    __assertStep: assertEdgeCapableStep,
    cursor($edge) {
      return $edge.cursor();
    },
    node($edge) {
      return $edge.node();
    }
  },
  RelationalDividerCondition: {
    title: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "title",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "title",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.text)}`;
            }
          });
        }
      }
    },
    color: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "color",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "color",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.text)}`;
            }
          });
        }
      }
    },
    id: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "id",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "id",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.int)}`;
            }
          });
        }
      }
    },
    type: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "type",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "type",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, itemTypeCodec)}`;
            }
          });
        }
      }
    },
    parentId: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "parent_id",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "parent_id",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.int)}`;
            }
          });
        }
      }
    },
    rootTopicId: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "root_topic_id",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "root_topic_id",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.int)}`;
            }
          });
        }
      }
    },
    authorId: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "author_id",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "author_id",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.int)}`;
            }
          });
        }
      }
    },
    position: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "position",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "position",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.bigint)}`;
            }
          });
        }
      }
    },
    createdAt: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "created_at",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "created_at",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.timestamptz)}`;
            }
          });
        }
      }
    },
    updatedAt: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "updated_at",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "updated_at",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.timestamptz)}`;
            }
          });
        }
      }
    },
    isExplicitlyArchived: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "is_explicitly_archived",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "is_explicitly_archived",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.boolean)}`;
            }
          });
        }
      }
    },
    archivedAt: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "archived_at",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "archived_at",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.timestamptz)}`;
            }
          });
        }
      }
    }
  },
  RelationalDividersOrderBy: {
    PRIMARY_KEY_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            relational_dividersUniques[0].attributes.forEach(attributeName => {
              queryBuilder.orderBy({
                attribute: attributeName,
                direction: "ASC",
                ...(undefined != null ? {
                  nulls: undefined ? "LAST" : "FIRST"
                } : null)
              });
            });
            queryBuilder.setOrderIsUnique();
          }
        }
      }
    },
    PRIMARY_KEY_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            relational_dividersUniques[0].attributes.forEach(attributeName => {
              queryBuilder.orderBy({
                attribute: attributeName,
                direction: "DESC",
                ...(undefined != null ? {
                  nulls: undefined ? "LAST" : "FIRST"
                } : null)
              });
            });
            queryBuilder.setOrderIsUnique();
          }
        }
      }
    },
    TITLE_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "title",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    TITLE_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "title",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    COLOR_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "color",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    COLOR_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "color",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    ID_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "id",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    ID_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "id",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    TYPE_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "type",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    TYPE_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "type",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    PARENT_ID_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "parent_id",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    PARENT_ID_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "parent_id",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    ROOT_TOPIC_ID_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "root_topic_id",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    ROOT_TOPIC_ID_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "root_topic_id",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    AUTHOR_ID_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "author_id",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    AUTHOR_ID_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "author_id",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    POSITION_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "position",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    POSITION_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "position",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    CREATED_AT_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "created_at",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    CREATED_AT_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "created_at",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    UPDATED_AT_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "updated_at",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    UPDATED_AT_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "updated_at",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    IS_EXPLICITLY_ARCHIVED_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "is_explicitly_archived",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    IS_EXPLICITLY_ARCHIVED_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "is_explicitly_archived",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    ARCHIVED_AT_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "archived_at",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    ARCHIVED_AT_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "archived_at",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    }
  },
  RelationalPostsConnection: {
    __assertStep: ConnectionStep,
    nodes($connection) {
      return $connection.nodes();
    },
    edges($connection) {
      return $connection.edges();
    },
    pageInfo($connection) {
      // TYPES: why is this a TypeScript issue without the 'any'?
      return $connection.pageInfo();
    },
    totalCount($connection) {
      return $connection.cloneSubplanWithoutPagination("aggregate").singleAsRecord().select(sql`count(*)`, TYPES.bigint, false);
    }
  },
  RelationalPostsEdge: {
    __assertStep: assertEdgeCapableStep,
    cursor($edge) {
      return $edge.cursor();
    },
    node($edge) {
      return $edge.node();
    }
  },
  RelationalPostCondition: {
    title: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "title",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "title",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.text)}`;
            }
          });
        }
      }
    },
    description: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "description",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "description",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.text)}`;
            }
          });
        }
      }
    },
    note: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "note",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "note",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.text)}`;
            }
          });
        }
      }
    },
    id: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "id",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "id",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.int)}`;
            }
          });
        }
      }
    },
    type: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "type",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "type",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, itemTypeCodec)}`;
            }
          });
        }
      }
    },
    parentId: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "parent_id",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "parent_id",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.int)}`;
            }
          });
        }
      }
    },
    rootTopicId: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "root_topic_id",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "root_topic_id",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.int)}`;
            }
          });
        }
      }
    },
    authorId: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "author_id",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "author_id",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.int)}`;
            }
          });
        }
      }
    },
    position: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "position",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "position",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.bigint)}`;
            }
          });
        }
      }
    },
    createdAt: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "created_at",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "created_at",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.timestamptz)}`;
            }
          });
        }
      }
    },
    updatedAt: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "updated_at",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "updated_at",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.timestamptz)}`;
            }
          });
        }
      }
    },
    isExplicitlyArchived: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "is_explicitly_archived",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "is_explicitly_archived",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.boolean)}`;
            }
          });
        }
      }
    },
    archivedAt: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "archived_at",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "archived_at",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.timestamptz)}`;
            }
          });
        }
      }
    }
  },
  RelationalPostsOrderBy: {
    PRIMARY_KEY_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            relational_postsUniques[0].attributes.forEach(attributeName => {
              queryBuilder.orderBy({
                attribute: attributeName,
                direction: "ASC",
                ...(undefined != null ? {
                  nulls: undefined ? "LAST" : "FIRST"
                } : null)
              });
            });
            queryBuilder.setOrderIsUnique();
          }
        }
      }
    },
    PRIMARY_KEY_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            relational_postsUniques[0].attributes.forEach(attributeName => {
              queryBuilder.orderBy({
                attribute: attributeName,
                direction: "DESC",
                ...(undefined != null ? {
                  nulls: undefined ? "LAST" : "FIRST"
                } : null)
              });
            });
            queryBuilder.setOrderIsUnique();
          }
        }
      }
    },
    TITLE_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "title",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    TITLE_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "title",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    DESCRIPTION_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "description",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    DESCRIPTION_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "description",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    NOTE_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "note",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    NOTE_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "note",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    ID_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "id",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    ID_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "id",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    TYPE_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "type",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    TYPE_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "type",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    PARENT_ID_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "parent_id",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    PARENT_ID_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "parent_id",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    ROOT_TOPIC_ID_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "root_topic_id",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    ROOT_TOPIC_ID_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "root_topic_id",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    AUTHOR_ID_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "author_id",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    AUTHOR_ID_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "author_id",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    POSITION_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "position",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    POSITION_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "position",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    CREATED_AT_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "created_at",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    CREATED_AT_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "created_at",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    UPDATED_AT_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "updated_at",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    UPDATED_AT_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "updated_at",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    IS_EXPLICITLY_ARCHIVED_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "is_explicitly_archived",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    IS_EXPLICITLY_ARCHIVED_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "is_explicitly_archived",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    ARCHIVED_AT_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "archived_at",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    ARCHIVED_AT_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "archived_at",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    }
  },
  FirstPartyVulnerabilitiesConnection: {
    __assertStep: ConnectionStep,
    nodes($connection) {
      return $connection.nodes();
    },
    edges($connection) {
      return $connection.edges();
    },
    pageInfo($connection) {
      // TYPES: why is this a TypeScript issue without the 'any'?
      return $connection.pageInfo();
    },
    totalCount($connection) {
      return $connection.cloneSubplanWithoutPagination("aggregate").singleAsRecord().select(sql`count(*)`, TYPES.bigint, false);
    }
  },
  FirstPartyVulnerabilitiesEdge: {
    __assertStep: assertEdgeCapableStep,
    cursor($edge) {
      return $edge.cursor();
    },
    node($edge) {
      return $edge.node();
    }
  },
  FirstPartyVulnerabilityCondition: {
    id: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "id",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "id",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.int)}`;
            }
          });
        }
      }
    },
    name: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "name",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "name",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.text)}`;
            }
          });
        }
      }
    },
    cvssScore: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "cvss_score",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "cvss_score",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.float)}`;
            }
          });
        }
      }
    },
    teamName: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "team_name",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "team_name",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.text)}`;
            }
          });
        }
      }
    }
  },
  FirstPartyVulnerabilitiesOrderBy: {
    PRIMARY_KEY_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            first_party_vulnerabilitiesUniques[0].attributes.forEach(attributeName => {
              queryBuilder.orderBy({
                attribute: attributeName,
                direction: "ASC",
                ...(undefined != null ? {
                  nulls: undefined ? "LAST" : "FIRST"
                } : null)
              });
            });
            queryBuilder.setOrderIsUnique();
          }
        }
      }
    },
    PRIMARY_KEY_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            first_party_vulnerabilitiesUniques[0].attributes.forEach(attributeName => {
              queryBuilder.orderBy({
                attribute: attributeName,
                direction: "DESC",
                ...(undefined != null ? {
                  nulls: undefined ? "LAST" : "FIRST"
                } : null)
              });
            });
            queryBuilder.setOrderIsUnique();
          }
        }
      }
    },
    ID_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "id",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (true) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    ID_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "id",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (true) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    NAME_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "name",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    NAME_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "name",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    CVSS_SCORE_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "cvss_score",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    CVSS_SCORE_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "cvss_score",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    TEAM_NAME_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "team_name",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    TEAM_NAME_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "team_name",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    }
  },
  ThirdPartyVulnerabilitiesConnection: {
    __assertStep: ConnectionStep,
    nodes($connection) {
      return $connection.nodes();
    },
    edges($connection) {
      return $connection.edges();
    },
    pageInfo($connection) {
      // TYPES: why is this a TypeScript issue without the 'any'?
      return $connection.pageInfo();
    },
    totalCount($connection) {
      return $connection.cloneSubplanWithoutPagination("aggregate").singleAsRecord().select(sql`count(*)`, TYPES.bigint, false);
    }
  },
  ThirdPartyVulnerabilitiesEdge: {
    __assertStep: assertEdgeCapableStep,
    cursor($edge) {
      return $edge.cursor();
    },
    node($edge) {
      return $edge.node();
    }
  },
  ThirdPartyVulnerabilityCondition: {
    id: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "id",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "id",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.int)}`;
            }
          });
        }
      }
    },
    name: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "name",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "name",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.text)}`;
            }
          });
        }
      }
    },
    cvssScore: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "cvss_score",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "cvss_score",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.float)}`;
            }
          });
        }
      }
    },
    vendorName: {
      apply($condition, val) {
        if (val === null) {
          $condition.where({
            type: "attribute",
            attribute: "vendor_name",
            callback(expression) {
              return sql`${expression} is null`;
            }
          });
        } else {
          $condition.where({
            type: "attribute",
            attribute: "vendor_name",
            callback(expression) {
              return sql`${expression} = ${sqlValueWithCodec(val, TYPES.text)}`;
            }
          });
        }
      }
    }
  },
  ThirdPartyVulnerabilitiesOrderBy: {
    PRIMARY_KEY_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            third_party_vulnerabilitiesUniques[0].attributes.forEach(attributeName => {
              queryBuilder.orderBy({
                attribute: attributeName,
                direction: "ASC",
                ...(undefined != null ? {
                  nulls: undefined ? "LAST" : "FIRST"
                } : null)
              });
            });
            queryBuilder.setOrderIsUnique();
          }
        }
      }
    },
    PRIMARY_KEY_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            third_party_vulnerabilitiesUniques[0].attributes.forEach(attributeName => {
              queryBuilder.orderBy({
                attribute: attributeName,
                direction: "DESC",
                ...(undefined != null ? {
                  nulls: undefined ? "LAST" : "FIRST"
                } : null)
              });
            });
            queryBuilder.setOrderIsUnique();
          }
        }
      }
    },
    ID_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "id",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (true) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    ID_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "id",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (true) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    NAME_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "name",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    NAME_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "name",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    CVSS_SCORE_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "cvss_score",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    CVSS_SCORE_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "cvss_score",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    VENDOR_NAME_ASC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "vendor_name",
              direction: "ASC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    },
    VENDOR_NAME_DESC: {
      extensions: {
        __proto__: null,
        grafast: {
          apply(queryBuilder) {
            queryBuilder.orderBy({
              attribute: "vendor_name",
              direction: "DESC",
              ...(undefined != null ? {
                nulls: undefined ? "LAST" : "FIRST"
              } : null)
            });
            if (false) {
              queryBuilder.setOrderIsUnique();
            }
          }
        }
      }
    }
  },
  Mutation: {
    __assertStep: __ValueStep,
    customDeleteRelationalItem: {
      plan($root, args, _info) {
        const selectArgs = makeArgs_custom_delete_relational_item(args, ["input"]);
        const $result = resource_custom_delete_relational_itemPgResource.execute(selectArgs, "mutation");
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
    createOrganization: {
      plan(_, args) {
        const $insert = pgInsertSingle(otherSource_organizationsPgResource, Object.create(null));
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
        const $insert = pgInsertSingle(otherSource_peoplePgResource, Object.create(null));
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
    createRelationalItemRelationCompositePk: {
      plan(_, args) {
        const $insert = pgInsertSingle(pgResource_relational_item_relation_composite_pksPgResource, Object.create(null));
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
    createSingleTableItemRelationCompositePk: {
      plan(_, args) {
        const $insert = pgInsertSingle(otherSource_single_table_item_relation_composite_pksPgResource, Object.create(null));
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
    createRelationalItemRelation: {
      plan(_, args) {
        const $insert = pgInsertSingle(pgResource_relational_item_relationsPgResource, Object.create(null));
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
    createSingleTableItemRelation: {
      plan(_, args) {
        const $insert = pgInsertSingle(otherSource_single_table_item_relationsPgResource, Object.create(null));
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
    createLogEntry: {
      plan(_, args) {
        const $insert = pgInsertSingle(otherSource_log_entriesPgResource, Object.create(null));
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
    createFirstPartyVulnerability: {
      plan(_, args) {
        const $insert = pgInsertSingle(paths_0_resource_first_party_vulnerabilitiesPgResource, Object.create(null));
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
    createThirdPartyVulnerability: {
      plan(_, args) {
        const $insert = pgInsertSingle(paths_1_resource_third_party_vulnerabilitiesPgResource, Object.create(null));
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
    createAwsApplication: {
      plan(_, args) {
        const $insert = pgInsertSingle(otherSource_aws_applicationsPgResource, Object.create(null));
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
    createGcpApplication: {
      plan(_, args) {
        const $insert = pgInsertSingle(otherSource_gcp_applicationsPgResource, Object.create(null));
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
    updateOrganization: {
      plan(_$root, args) {
        const $update = pgUpdateSingle(otherSource_organizationsPgResource, specFromArgs(args));
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
    updateOrganizationByOrganizationId: {
      plan(_$root, args) {
        const $update = pgUpdateSingle(otherSource_organizationsPgResource, {
          organization_id: args.getRaw(['input', "organizationId"])
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
    updateOrganizationByName: {
      plan(_$root, args) {
        const $update = pgUpdateSingle(otherSource_organizationsPgResource, {
          name: args.getRaw(['input', "name"])
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
    updatePerson: {
      plan(_$root, args) {
        const $update = pgUpdateSingle(otherSource_peoplePgResource, specFromArgs2(args));
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
    updatePersonByPersonId: {
      plan(_$root, args) {
        const $update = pgUpdateSingle(otherSource_peoplePgResource, {
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
    updatePersonByUsername: {
      plan(_$root, args) {
        const $update = pgUpdateSingle(otherSource_peoplePgResource, {
          username: args.getRaw(['input', "username"])
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
    updateRelationalItemRelationCompositePk: {
      plan(_$root, args) {
        const $update = pgUpdateSingle(pgResource_relational_item_relation_composite_pksPgResource, specFromArgs3(args));
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
    updateRelationalItemRelationCompositePkByParentIdAndChildId: {
      plan(_$root, args) {
        const $update = pgUpdateSingle(pgResource_relational_item_relation_composite_pksPgResource, {
          parent_id: args.getRaw(['input', "parentId"]),
          child_id: args.getRaw(['input', "childId"])
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
    updateSingleTableItemRelationCompositePk: {
      plan(_$root, args) {
        const $update = pgUpdateSingle(otherSource_single_table_item_relation_composite_pksPgResource, specFromArgs4(args));
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
    updateSingleTableItemRelationCompositePkByParentIdAndChildId: {
      plan(_$root, args) {
        const $update = pgUpdateSingle(otherSource_single_table_item_relation_composite_pksPgResource, {
          parent_id: args.getRaw(['input', "parentId"]),
          child_id: args.getRaw(['input', "childId"])
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
    updateRelationalItemRelation: {
      plan(_$root, args) {
        const $update = pgUpdateSingle(pgResource_relational_item_relationsPgResource, specFromArgs5(args));
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
    updateRelationalItemRelationById: {
      plan(_$root, args) {
        const $update = pgUpdateSingle(pgResource_relational_item_relationsPgResource, {
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
    updateRelationalItemRelationByParentIdAndChildId: {
      plan(_$root, args) {
        const $update = pgUpdateSingle(pgResource_relational_item_relationsPgResource, {
          parent_id: args.getRaw(['input', "parentId"]),
          child_id: args.getRaw(['input', "childId"])
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
    updateSingleTableItemRelation: {
      plan(_$root, args) {
        const $update = pgUpdateSingle(otherSource_single_table_item_relationsPgResource, specFromArgs6(args));
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
    updateSingleTableItemRelationById: {
      plan(_$root, args) {
        const $update = pgUpdateSingle(otherSource_single_table_item_relationsPgResource, {
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
    updateSingleTableItemRelationByParentIdAndChildId: {
      plan(_$root, args) {
        const $update = pgUpdateSingle(otherSource_single_table_item_relationsPgResource, {
          parent_id: args.getRaw(['input', "parentId"]),
          child_id: args.getRaw(['input', "childId"])
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
    updateLogEntry: {
      plan(_$root, args) {
        const $update = pgUpdateSingle(otherSource_log_entriesPgResource, specFromArgs7(args));
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
    updateLogEntryById: {
      plan(_$root, args) {
        const $update = pgUpdateSingle(otherSource_log_entriesPgResource, {
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
    updateFirstPartyVulnerability: {
      plan(_$root, args) {
        const $update = pgUpdateSingle(paths_0_resource_first_party_vulnerabilitiesPgResource, specFromArgs8(args));
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
    updateFirstPartyVulnerabilityById: {
      plan(_$root, args) {
        const $update = pgUpdateSingle(paths_0_resource_first_party_vulnerabilitiesPgResource, {
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
    updateThirdPartyVulnerability: {
      plan(_$root, args) {
        const $update = pgUpdateSingle(paths_1_resource_third_party_vulnerabilitiesPgResource, specFromArgs9(args));
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
    updateThirdPartyVulnerabilityById: {
      plan(_$root, args) {
        const $update = pgUpdateSingle(paths_1_resource_third_party_vulnerabilitiesPgResource, {
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
    updateAwsApplication: {
      plan(_$root, args) {
        const $update = pgUpdateSingle(otherSource_aws_applicationsPgResource, specFromArgs10(args));
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
    updateAwsApplicationById: {
      plan(_$root, args) {
        const $update = pgUpdateSingle(otherSource_aws_applicationsPgResource, {
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
    updateGcpApplication: {
      plan(_$root, args) {
        const $update = pgUpdateSingle(otherSource_gcp_applicationsPgResource, specFromArgs11(args));
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
    updateGcpApplicationById: {
      plan(_$root, args) {
        const $update = pgUpdateSingle(otherSource_gcp_applicationsPgResource, {
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
    deleteOrganization: {
      plan(_$root, args) {
        const $delete = pgDeleteSingle(otherSource_organizationsPgResource, specFromArgs12(args));
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
    deleteOrganizationByOrganizationId: {
      plan(_$root, args) {
        const $delete = pgDeleteSingle(otherSource_organizationsPgResource, {
          organization_id: args.getRaw(['input', "organizationId"])
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
    deleteOrganizationByName: {
      plan(_$root, args) {
        const $delete = pgDeleteSingle(otherSource_organizationsPgResource, {
          name: args.getRaw(['input', "name"])
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
    deletePerson: {
      plan(_$root, args) {
        const $delete = pgDeleteSingle(otherSource_peoplePgResource, specFromArgs13(args));
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
    deletePersonByPersonId: {
      plan(_$root, args) {
        const $delete = pgDeleteSingle(otherSource_peoplePgResource, {
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
    deletePersonByUsername: {
      plan(_$root, args) {
        const $delete = pgDeleteSingle(otherSource_peoplePgResource, {
          username: args.getRaw(['input', "username"])
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
    deleteRelationalItemRelationCompositePk: {
      plan(_$root, args) {
        const $delete = pgDeleteSingle(pgResource_relational_item_relation_composite_pksPgResource, specFromArgs14(args));
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
    deleteRelationalItemRelationCompositePkByParentIdAndChildId: {
      plan(_$root, args) {
        const $delete = pgDeleteSingle(pgResource_relational_item_relation_composite_pksPgResource, {
          parent_id: args.getRaw(['input', "parentId"]),
          child_id: args.getRaw(['input', "childId"])
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
    deleteSingleTableItemRelationCompositePk: {
      plan(_$root, args) {
        const $delete = pgDeleteSingle(otherSource_single_table_item_relation_composite_pksPgResource, specFromArgs15(args));
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
    deleteSingleTableItemRelationCompositePkByParentIdAndChildId: {
      plan(_$root, args) {
        const $delete = pgDeleteSingle(otherSource_single_table_item_relation_composite_pksPgResource, {
          parent_id: args.getRaw(['input', "parentId"]),
          child_id: args.getRaw(['input', "childId"])
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
    deleteRelationalItemRelation: {
      plan(_$root, args) {
        const $delete = pgDeleteSingle(pgResource_relational_item_relationsPgResource, specFromArgs16(args));
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
    deleteRelationalItemRelationById: {
      plan(_$root, args) {
        const $delete = pgDeleteSingle(pgResource_relational_item_relationsPgResource, {
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
    deleteRelationalItemRelationByParentIdAndChildId: {
      plan(_$root, args) {
        const $delete = pgDeleteSingle(pgResource_relational_item_relationsPgResource, {
          parent_id: args.getRaw(['input', "parentId"]),
          child_id: args.getRaw(['input', "childId"])
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
    deleteSingleTableItemRelation: {
      plan(_$root, args) {
        const $delete = pgDeleteSingle(otherSource_single_table_item_relationsPgResource, specFromArgs17(args));
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
    deleteSingleTableItemRelationById: {
      plan(_$root, args) {
        const $delete = pgDeleteSingle(otherSource_single_table_item_relationsPgResource, {
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
    deleteSingleTableItemRelationByParentIdAndChildId: {
      plan(_$root, args) {
        const $delete = pgDeleteSingle(otherSource_single_table_item_relationsPgResource, {
          parent_id: args.getRaw(['input', "parentId"]),
          child_id: args.getRaw(['input', "childId"])
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
    deleteLogEntry: {
      plan(_$root, args) {
        const $delete = pgDeleteSingle(otherSource_log_entriesPgResource, specFromArgs18(args));
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
    deleteLogEntryById: {
      plan(_$root, args) {
        const $delete = pgDeleteSingle(otherSource_log_entriesPgResource, {
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
    deleteFirstPartyVulnerability: {
      plan(_$root, args) {
        const $delete = pgDeleteSingle(paths_0_resource_first_party_vulnerabilitiesPgResource, specFromArgs19(args));
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
    deleteFirstPartyVulnerabilityById: {
      plan(_$root, args) {
        const $delete = pgDeleteSingle(paths_0_resource_first_party_vulnerabilitiesPgResource, {
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
    deleteThirdPartyVulnerability: {
      plan(_$root, args) {
        const $delete = pgDeleteSingle(paths_1_resource_third_party_vulnerabilitiesPgResource, specFromArgs20(args));
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
    deleteThirdPartyVulnerabilityById: {
      plan(_$root, args) {
        const $delete = pgDeleteSingle(paths_1_resource_third_party_vulnerabilitiesPgResource, {
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
    deleteAwsApplication: {
      plan(_$root, args) {
        const $delete = pgDeleteSingle(otherSource_aws_applicationsPgResource, specFromArgs21(args));
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
    deleteAwsApplicationById: {
      plan(_$root, args) {
        const $delete = pgDeleteSingle(otherSource_aws_applicationsPgResource, {
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
    deleteGcpApplication: {
      plan(_$root, args) {
        const $delete = pgDeleteSingle(otherSource_gcp_applicationsPgResource, specFromArgs22(args));
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
    deleteGcpApplicationById: {
      plan(_$root, args) {
        const $delete = pgDeleteSingle(otherSource_gcp_applicationsPgResource, {
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
  CustomDeleteRelationalItemPayload: {
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
  CustomDeleteRelationalItemInput: {
    clientMutationId: {
      apply(qb, val) {
        qb.setMeta("clientMutationId", val);
      }
    },
    nodeId: undefined
  },
  CreateOrganizationPayload: {
    __assertStep: assertExecutableStep,
    clientMutationId($mutation) {
      const $insert = $mutation.getStepForKey("result");
      return $insert.getMeta("clientMutationId");
    },
    organization($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    organizationEdge($mutation, fieldArgs) {
      const $result = $mutation.getStepForKey("result", true);
      if (!$result) {
        return constant(null);
      }
      const $select = (() => {
        if ($result instanceof PgDeleteSingleStep) {
          return pgSelectFromRecord($result.resource, $result.record());
        } else {
          const spec = organizationsUniques[0].attributes.reduce((memo, attributeName) => {
            memo[attributeName] = $result.get(attributeName);
            return memo;
          }, Object.create(null));
          return otherSource_organizationsPgResource.find(spec);
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
  CreateOrganizationInput: {
    clientMutationId: {
      apply(qb, val) {
        qb.setMeta("clientMutationId", val);
      }
    },
    organization: {
      apply(qb, arg) {
        if (arg != null) {
          return qb.setBuilder();
        }
      }
    }
  },
  OrganizationInput: {
    "__baked": createObjectAndApplyChildren,
    organizationId: {
      apply(obj, val, {
        field,
        schema
      }) {
        obj.set("organization_id", bakedInputRuntime(schema, field.type, val));
      }
    },
    name: {
      apply(obj, val, {
        field,
        schema
      }) {
        obj.set("name", bakedInputRuntime(schema, field.type, val));
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
          const spec = peopleUniques[0].attributes.reduce((memo, attributeName) => {
            memo[attributeName] = $result.get(attributeName);
            return memo;
          }, Object.create(null));
          return otherSource_peoplePgResource.find(spec);
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
    clientMutationId: {
      apply(qb, val) {
        qb.setMeta("clientMutationId", val);
      }
    },
    person: {
      apply(qb, arg) {
        if (arg != null) {
          return qb.setBuilder();
        }
      }
    }
  },
  PersonInput: {
    "__baked": createObjectAndApplyChildren,
    personId: {
      apply(obj, val, {
        field,
        schema
      }) {
        obj.set("person_id", bakedInputRuntime(schema, field.type, val));
      }
    },
    username: {
      apply(obj, val, {
        field,
        schema
      }) {
        obj.set("username", bakedInputRuntime(schema, field.type, val));
      }
    }
  },
  CreateRelationalItemRelationCompositePkPayload: {
    __assertStep: assertExecutableStep,
    clientMutationId($mutation) {
      const $insert = $mutation.getStepForKey("result");
      return $insert.getMeta("clientMutationId");
    },
    relationalItemRelationCompositePk($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    relationalItemRelationCompositePkEdge($mutation, fieldArgs) {
      const $result = $mutation.getStepForKey("result", true);
      if (!$result) {
        return constant(null);
      }
      const $select = (() => {
        if ($result instanceof PgDeleteSingleStep) {
          return pgSelectFromRecord($result.resource, $result.record());
        } else {
          const spec = relational_item_relation_composite_pksUniques[0].attributes.reduce((memo, attributeName) => {
            memo[attributeName] = $result.get(attributeName);
            return memo;
          }, Object.create(null));
          return pgResource_relational_item_relation_composite_pksPgResource.find(spec);
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
    relationalItemByChildId($record) {
      return otherSource_relational_itemsPgResource.get({
        id: $record.get("result").get("child_id")
      });
    },
    relationalItemByParentId($record) {
      return otherSource_relational_itemsPgResource.get({
        id: $record.get("result").get("parent_id")
      });
    }
  },
  CreateRelationalItemRelationCompositePkInput: {
    clientMutationId: {
      apply(qb, val) {
        qb.setMeta("clientMutationId", val);
      }
    },
    relationalItemRelationCompositePk: {
      apply(qb, arg) {
        if (arg != null) {
          return qb.setBuilder();
        }
      }
    }
  },
  RelationalItemRelationCompositePkInput: {
    "__baked": createObjectAndApplyChildren,
    parentId: {
      apply(obj, val, {
        field,
        schema
      }) {
        obj.set("parent_id", bakedInputRuntime(schema, field.type, val));
      }
    },
    childId: {
      apply(obj, val, {
        field,
        schema
      }) {
        obj.set("child_id", bakedInputRuntime(schema, field.type, val));
      }
    }
  },
  CreateSingleTableItemRelationCompositePkPayload: {
    __assertStep: assertExecutableStep,
    clientMutationId($mutation) {
      const $insert = $mutation.getStepForKey("result");
      return $insert.getMeta("clientMutationId");
    },
    singleTableItemRelationCompositePk($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    singleTableItemRelationCompositePkEdge($mutation, fieldArgs) {
      const $result = $mutation.getStepForKey("result", true);
      if (!$result) {
        return constant(null);
      }
      const $select = (() => {
        if ($result instanceof PgDeleteSingleStep) {
          return pgSelectFromRecord($result.resource, $result.record());
        } else {
          const spec = single_table_item_relation_composite_pksUniques[0].attributes.reduce((memo, attributeName) => {
            memo[attributeName] = $result.get(attributeName);
            return memo;
          }, Object.create(null));
          return otherSource_single_table_item_relation_composite_pksPgResource.find(spec);
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
    singleTableItemByChildId($record) {
      return resource_single_table_itemsPgResource.get({
        id: $record.get("result").get("child_id")
      });
    },
    singleTableItemByParentId($record) {
      return resource_single_table_itemsPgResource.get({
        id: $record.get("result").get("parent_id")
      });
    }
  },
  CreateSingleTableItemRelationCompositePkInput: {
    clientMutationId: {
      apply(qb, val) {
        qb.setMeta("clientMutationId", val);
      }
    },
    singleTableItemRelationCompositePk: {
      apply(qb, arg) {
        if (arg != null) {
          return qb.setBuilder();
        }
      }
    }
  },
  SingleTableItemRelationCompositePkInput: {
    "__baked": createObjectAndApplyChildren,
    parentId: {
      apply(obj, val, {
        field,
        schema
      }) {
        obj.set("parent_id", bakedInputRuntime(schema, field.type, val));
      }
    },
    childId: {
      apply(obj, val, {
        field,
        schema
      }) {
        obj.set("child_id", bakedInputRuntime(schema, field.type, val));
      }
    }
  },
  CreateRelationalItemRelationPayload: {
    __assertStep: assertExecutableStep,
    clientMutationId($mutation) {
      const $insert = $mutation.getStepForKey("result");
      return $insert.getMeta("clientMutationId");
    },
    relationalItemRelation($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    relationalItemRelationEdge($mutation, fieldArgs) {
      const $result = $mutation.getStepForKey("result", true);
      if (!$result) {
        return constant(null);
      }
      const $select = (() => {
        if ($result instanceof PgDeleteSingleStep) {
          return pgSelectFromRecord($result.resource, $result.record());
        } else {
          const spec = relational_item_relationsUniques[0].attributes.reduce((memo, attributeName) => {
            memo[attributeName] = $result.get(attributeName);
            return memo;
          }, Object.create(null));
          return pgResource_relational_item_relationsPgResource.find(spec);
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
    relationalItemByChildId($record) {
      return otherSource_relational_itemsPgResource.get({
        id: $record.get("result").get("child_id")
      });
    },
    relationalItemByParentId($record) {
      return otherSource_relational_itemsPgResource.get({
        id: $record.get("result").get("parent_id")
      });
    }
  },
  CreateRelationalItemRelationInput: {
    clientMutationId: {
      apply(qb, val) {
        qb.setMeta("clientMutationId", val);
      }
    },
    relationalItemRelation: {
      apply(qb, arg) {
        if (arg != null) {
          return qb.setBuilder();
        }
      }
    }
  },
  RelationalItemRelationInput: {
    "__baked": createObjectAndApplyChildren,
    id: {
      apply(obj, val, {
        field,
        schema
      }) {
        obj.set("id", bakedInputRuntime(schema, field.type, val));
      }
    },
    parentId: {
      apply(obj, val, {
        field,
        schema
      }) {
        obj.set("parent_id", bakedInputRuntime(schema, field.type, val));
      }
    },
    childId: {
      apply(obj, val, {
        field,
        schema
      }) {
        obj.set("child_id", bakedInputRuntime(schema, field.type, val));
      }
    }
  },
  CreateSingleTableItemRelationPayload: {
    __assertStep: assertExecutableStep,
    clientMutationId($mutation) {
      const $insert = $mutation.getStepForKey("result");
      return $insert.getMeta("clientMutationId");
    },
    singleTableItemRelation($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    singleTableItemRelationEdge($mutation, fieldArgs) {
      const $result = $mutation.getStepForKey("result", true);
      if (!$result) {
        return constant(null);
      }
      const $select = (() => {
        if ($result instanceof PgDeleteSingleStep) {
          return pgSelectFromRecord($result.resource, $result.record());
        } else {
          const spec = single_table_item_relationsUniques[0].attributes.reduce((memo, attributeName) => {
            memo[attributeName] = $result.get(attributeName);
            return memo;
          }, Object.create(null));
          return otherSource_single_table_item_relationsPgResource.find(spec);
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
    singleTableItemByChildId($record) {
      return resource_single_table_itemsPgResource.get({
        id: $record.get("result").get("child_id")
      });
    },
    singleTableItemByParentId($record) {
      return resource_single_table_itemsPgResource.get({
        id: $record.get("result").get("parent_id")
      });
    }
  },
  CreateSingleTableItemRelationInput: {
    clientMutationId: {
      apply(qb, val) {
        qb.setMeta("clientMutationId", val);
      }
    },
    singleTableItemRelation: {
      apply(qb, arg) {
        if (arg != null) {
          return qb.setBuilder();
        }
      }
    }
  },
  SingleTableItemRelationInput: {
    "__baked": createObjectAndApplyChildren,
    id: {
      apply(obj, val, {
        field,
        schema
      }) {
        obj.set("id", bakedInputRuntime(schema, field.type, val));
      }
    },
    parentId: {
      apply(obj, val, {
        field,
        schema
      }) {
        obj.set("parent_id", bakedInputRuntime(schema, field.type, val));
      }
    },
    childId: {
      apply(obj, val, {
        field,
        schema
      }) {
        obj.set("child_id", bakedInputRuntime(schema, field.type, val));
      }
    }
  },
  CreateLogEntryPayload: {
    __assertStep: assertExecutableStep,
    clientMutationId($mutation) {
      const $insert = $mutation.getStepForKey("result");
      return $insert.getMeta("clientMutationId");
    },
    logEntry($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    logEntryEdge($mutation, fieldArgs) {
      const $result = $mutation.getStepForKey("result", true);
      if (!$result) {
        return constant(null);
      }
      const $select = (() => {
        if ($result instanceof PgDeleteSingleStep) {
          return pgSelectFromRecord($result.resource, $result.record());
        } else {
          const spec = log_entriesUniques[0].attributes.reduce((memo, attributeName) => {
            memo[attributeName] = $result.get(attributeName);
            return memo;
          }, Object.create(null));
          return otherSource_log_entriesPgResource.find(spec);
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
    organizationByOrganizationId($record) {
      return otherSource_organizationsPgResource.get({
        organization_id: $record.get("result").get("organization_id")
      });
    },
    personByPersonId($record) {
      return otherSource_peoplePgResource.get({
        person_id: $record.get("result").get("person_id")
      });
    }
  },
  CreateLogEntryInput: {
    clientMutationId: {
      apply(qb, val) {
        qb.setMeta("clientMutationId", val);
      }
    },
    logEntry: {
      apply(qb, arg) {
        if (arg != null) {
          return qb.setBuilder();
        }
      }
    }
  },
  LogEntryInput: {
    "__baked": createObjectAndApplyChildren,
    id: {
      apply(obj, val, {
        field,
        schema
      }) {
        obj.set("id", bakedInputRuntime(schema, field.type, val));
      }
    },
    personId: {
      apply(obj, val, {
        field,
        schema
      }) {
        obj.set("person_id", bakedInputRuntime(schema, field.type, val));
      }
    },
    organizationId: {
      apply(obj, val, {
        field,
        schema
      }) {
        obj.set("organization_id", bakedInputRuntime(schema, field.type, val));
      }
    },
    text: {
      apply(obj, val, {
        field,
        schema
      }) {
        obj.set("text", bakedInputRuntime(schema, field.type, val));
      }
    }
  },
  CreateFirstPartyVulnerabilityPayload: {
    __assertStep: assertExecutableStep,
    clientMutationId($mutation) {
      const $insert = $mutation.getStepForKey("result");
      return $insert.getMeta("clientMutationId");
    },
    firstPartyVulnerability($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    firstPartyVulnerabilityEdge($mutation, fieldArgs) {
      const $result = $mutation.getStepForKey("result", true);
      if (!$result) {
        return constant(null);
      }
      const $select = (() => {
        if ($result instanceof PgDeleteSingleStep) {
          return pgSelectFromRecord($result.resource, $result.record());
        } else {
          const spec = first_party_vulnerabilitiesUniques[0].attributes.reduce((memo, attributeName) => {
            memo[attributeName] = $result.get(attributeName);
            return memo;
          }, Object.create(null));
          return paths_0_resource_first_party_vulnerabilitiesPgResource.find(spec);
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
  CreateFirstPartyVulnerabilityInput: {
    clientMutationId: {
      apply(qb, val) {
        qb.setMeta("clientMutationId", val);
      }
    },
    firstPartyVulnerability: {
      apply(qb, arg) {
        if (arg != null) {
          return qb.setBuilder();
        }
      }
    }
  },
  FirstPartyVulnerabilityInput: {
    "__baked": createObjectAndApplyChildren,
    id: {
      apply(obj, val, {
        field,
        schema
      }) {
        obj.set("id", bakedInputRuntime(schema, field.type, val));
      }
    },
    name: {
      apply(obj, val, {
        field,
        schema
      }) {
        obj.set("name", bakedInputRuntime(schema, field.type, val));
      }
    },
    cvssScore: {
      apply(obj, val, {
        field,
        schema
      }) {
        obj.set("cvss_score", bakedInputRuntime(schema, field.type, val));
      }
    },
    teamName: {
      apply(obj, val, {
        field,
        schema
      }) {
        obj.set("team_name", bakedInputRuntime(schema, field.type, val));
      }
    }
  },
  CreateThirdPartyVulnerabilityPayload: {
    __assertStep: assertExecutableStep,
    clientMutationId($mutation) {
      const $insert = $mutation.getStepForKey("result");
      return $insert.getMeta("clientMutationId");
    },
    thirdPartyVulnerability($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    thirdPartyVulnerabilityEdge($mutation, fieldArgs) {
      const $result = $mutation.getStepForKey("result", true);
      if (!$result) {
        return constant(null);
      }
      const $select = (() => {
        if ($result instanceof PgDeleteSingleStep) {
          return pgSelectFromRecord($result.resource, $result.record());
        } else {
          const spec = third_party_vulnerabilitiesUniques[0].attributes.reduce((memo, attributeName) => {
            memo[attributeName] = $result.get(attributeName);
            return memo;
          }, Object.create(null));
          return paths_1_resource_third_party_vulnerabilitiesPgResource.find(spec);
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
  CreateThirdPartyVulnerabilityInput: {
    clientMutationId: {
      apply(qb, val) {
        qb.setMeta("clientMutationId", val);
      }
    },
    thirdPartyVulnerability: {
      apply(qb, arg) {
        if (arg != null) {
          return qb.setBuilder();
        }
      }
    }
  },
  ThirdPartyVulnerabilityInput: {
    "__baked": createObjectAndApplyChildren,
    id: {
      apply(obj, val, {
        field,
        schema
      }) {
        obj.set("id", bakedInputRuntime(schema, field.type, val));
      }
    },
    name: {
      apply(obj, val, {
        field,
        schema
      }) {
        obj.set("name", bakedInputRuntime(schema, field.type, val));
      }
    },
    cvssScore: {
      apply(obj, val, {
        field,
        schema
      }) {
        obj.set("cvss_score", bakedInputRuntime(schema, field.type, val));
      }
    },
    vendorName: {
      apply(obj, val, {
        field,
        schema
      }) {
        obj.set("vendor_name", bakedInputRuntime(schema, field.type, val));
      }
    }
  },
  CreateAwsApplicationPayload: {
    __assertStep: assertExecutableStep,
    clientMutationId($mutation) {
      const $insert = $mutation.getStepForKey("result");
      return $insert.getMeta("clientMutationId");
    },
    awsApplication($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    awsApplicationEdge($mutation, fieldArgs) {
      const $result = $mutation.getStepForKey("result", true);
      if (!$result) {
        return constant(null);
      }
      const $select = (() => {
        if ($result instanceof PgDeleteSingleStep) {
          return pgSelectFromRecord($result.resource, $result.record());
        } else {
          const spec = aws_applicationsUniques[0].attributes.reduce((memo, attributeName) => {
            memo[attributeName] = $result.get(attributeName);
            return memo;
          }, Object.create(null));
          return otherSource_aws_applicationsPgResource.find(spec);
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
    organizationByOrganizationId($record) {
      return otherSource_organizationsPgResource.get({
        organization_id: $record.get("result").get("organization_id")
      });
    },
    personByPersonId($record) {
      return otherSource_peoplePgResource.get({
        person_id: $record.get("result").get("person_id")
      });
    }
  },
  CreateAwsApplicationInput: {
    clientMutationId: {
      apply(qb, val) {
        qb.setMeta("clientMutationId", val);
      }
    },
    awsApplication: {
      apply(qb, arg) {
        if (arg != null) {
          return qb.setBuilder();
        }
      }
    }
  },
  AwsApplicationInput: {
    "__baked": createObjectAndApplyChildren,
    id: {
      apply(obj, val, {
        field,
        schema
      }) {
        obj.set("id", bakedInputRuntime(schema, field.type, val));
      }
    },
    name: {
      apply(obj, val, {
        field,
        schema
      }) {
        obj.set("name", bakedInputRuntime(schema, field.type, val));
      }
    },
    lastDeployed: {
      apply(obj, val, {
        field,
        schema
      }) {
        obj.set("last_deployed", bakedInputRuntime(schema, field.type, val));
      }
    },
    personId: {
      apply(obj, val, {
        field,
        schema
      }) {
        obj.set("person_id", bakedInputRuntime(schema, field.type, val));
      }
    },
    organizationId: {
      apply(obj, val, {
        field,
        schema
      }) {
        obj.set("organization_id", bakedInputRuntime(schema, field.type, val));
      }
    },
    awsId: {
      apply(obj, val, {
        field,
        schema
      }) {
        obj.set("aws_id", bakedInputRuntime(schema, field.type, val));
      }
    }
  },
  CreateGcpApplicationPayload: {
    __assertStep: assertExecutableStep,
    clientMutationId($mutation) {
      const $insert = $mutation.getStepForKey("result");
      return $insert.getMeta("clientMutationId");
    },
    gcpApplication($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    gcpApplicationEdge($mutation, fieldArgs) {
      const $result = $mutation.getStepForKey("result", true);
      if (!$result) {
        return constant(null);
      }
      const $select = (() => {
        if ($result instanceof PgDeleteSingleStep) {
          return pgSelectFromRecord($result.resource, $result.record());
        } else {
          const spec = gcp_applicationsUniques[0].attributes.reduce((memo, attributeName) => {
            memo[attributeName] = $result.get(attributeName);
            return memo;
          }, Object.create(null));
          return otherSource_gcp_applicationsPgResource.find(spec);
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
    organizationByOrganizationId($record) {
      return otherSource_organizationsPgResource.get({
        organization_id: $record.get("result").get("organization_id")
      });
    },
    personByPersonId($record) {
      return otherSource_peoplePgResource.get({
        person_id: $record.get("result").get("person_id")
      });
    }
  },
  CreateGcpApplicationInput: {
    clientMutationId: {
      apply(qb, val) {
        qb.setMeta("clientMutationId", val);
      }
    },
    gcpApplication: {
      apply(qb, arg) {
        if (arg != null) {
          return qb.setBuilder();
        }
      }
    }
  },
  GcpApplicationInput: {
    "__baked": createObjectAndApplyChildren,
    id: {
      apply(obj, val, {
        field,
        schema
      }) {
        obj.set("id", bakedInputRuntime(schema, field.type, val));
      }
    },
    name: {
      apply(obj, val, {
        field,
        schema
      }) {
        obj.set("name", bakedInputRuntime(schema, field.type, val));
      }
    },
    lastDeployed: {
      apply(obj, val, {
        field,
        schema
      }) {
        obj.set("last_deployed", bakedInputRuntime(schema, field.type, val));
      }
    },
    personId: {
      apply(obj, val, {
        field,
        schema
      }) {
        obj.set("person_id", bakedInputRuntime(schema, field.type, val));
      }
    },
    organizationId: {
      apply(obj, val, {
        field,
        schema
      }) {
        obj.set("organization_id", bakedInputRuntime(schema, field.type, val));
      }
    },
    gcpId: {
      apply(obj, val, {
        field,
        schema
      }) {
        obj.set("gcp_id", bakedInputRuntime(schema, field.type, val));
      }
    }
  },
  UpdateOrganizationPayload: {
    __assertStep: ObjectStep,
    clientMutationId($mutation) {
      const $result = $mutation.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    organization($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    organizationEdge($mutation, fieldArgs) {
      const $result = $mutation.getStepForKey("result", true);
      if (!$result) {
        return constant(null);
      }
      const $select = (() => {
        if ($result instanceof PgDeleteSingleStep) {
          return pgSelectFromRecord($result.resource, $result.record());
        } else {
          const spec = organizationsUniques[0].attributes.reduce((memo, attributeName) => {
            memo[attributeName] = $result.get(attributeName);
            return memo;
          }, Object.create(null));
          return otherSource_organizationsPgResource.find(spec);
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
  UpdateOrganizationInput: {
    clientMutationId: {
      apply(qb, val) {
        qb.setMeta("clientMutationId", val);
      }
    },
    nodeId: undefined,
    organizationPatch: {
      apply(qb, arg) {
        if (arg != null) {
          return qb.setBuilder();
        }
      }
    }
  },
  OrganizationPatch: {
    "__baked": createObjectAndApplyChildren,
    organizationId: {
      apply(obj, val, {
        field,
        schema
      }) {
        obj.set("organization_id", bakedInputRuntime(schema, field.type, val));
      }
    },
    name: {
      apply(obj, val, {
        field,
        schema
      }) {
        obj.set("name", bakedInputRuntime(schema, field.type, val));
      }
    }
  },
  UpdateOrganizationByOrganizationIdInput: {
    clientMutationId: {
      apply(qb, val) {
        qb.setMeta("clientMutationId", val);
      }
    },
    organizationId: undefined,
    organizationPatch: {
      apply(qb, arg) {
        if (arg != null) {
          return qb.setBuilder();
        }
      }
    }
  },
  UpdateOrganizationByNameInput: {
    clientMutationId: {
      apply(qb, val) {
        qb.setMeta("clientMutationId", val);
      }
    },
    name: undefined,
    organizationPatch: {
      apply(qb, arg) {
        if (arg != null) {
          return qb.setBuilder();
        }
      }
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
          const spec = peopleUniques[0].attributes.reduce((memo, attributeName) => {
            memo[attributeName] = $result.get(attributeName);
            return memo;
          }, Object.create(null));
          return otherSource_peoplePgResource.find(spec);
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
  UpdatePersonInput: {
    clientMutationId: {
      apply(qb, val) {
        qb.setMeta("clientMutationId", val);
      }
    },
    nodeId: undefined,
    personPatch: {
      apply(qb, arg) {
        if (arg != null) {
          return qb.setBuilder();
        }
      }
    }
  },
  PersonPatch: {
    "__baked": createObjectAndApplyChildren,
    personId: {
      apply(obj, val, {
        field,
        schema
      }) {
        obj.set("person_id", bakedInputRuntime(schema, field.type, val));
      }
    },
    username: {
      apply(obj, val, {
        field,
        schema
      }) {
        obj.set("username", bakedInputRuntime(schema, field.type, val));
      }
    }
  },
  UpdatePersonByPersonIdInput: {
    clientMutationId: {
      apply(qb, val) {
        qb.setMeta("clientMutationId", val);
      }
    },
    personId: undefined,
    personPatch: {
      apply(qb, arg) {
        if (arg != null) {
          return qb.setBuilder();
        }
      }
    }
  },
  UpdatePersonByUsernameInput: {
    clientMutationId: {
      apply(qb, val) {
        qb.setMeta("clientMutationId", val);
      }
    },
    username: undefined,
    personPatch: {
      apply(qb, arg) {
        if (arg != null) {
          return qb.setBuilder();
        }
      }
    }
  },
  UpdateRelationalItemRelationCompositePkPayload: {
    __assertStep: ObjectStep,
    clientMutationId($mutation) {
      const $result = $mutation.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    relationalItemRelationCompositePk($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    relationalItemRelationCompositePkEdge($mutation, fieldArgs) {
      const $result = $mutation.getStepForKey("result", true);
      if (!$result) {
        return constant(null);
      }
      const $select = (() => {
        if ($result instanceof PgDeleteSingleStep) {
          return pgSelectFromRecord($result.resource, $result.record());
        } else {
          const spec = relational_item_relation_composite_pksUniques[0].attributes.reduce((memo, attributeName) => {
            memo[attributeName] = $result.get(attributeName);
            return memo;
          }, Object.create(null));
          return pgResource_relational_item_relation_composite_pksPgResource.find(spec);
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
    relationalItemByChildId($record) {
      return otherSource_relational_itemsPgResource.get({
        id: $record.get("result").get("child_id")
      });
    },
    relationalItemByParentId($record) {
      return otherSource_relational_itemsPgResource.get({
        id: $record.get("result").get("parent_id")
      });
    }
  },
  UpdateRelationalItemRelationCompositePkInput: {
    clientMutationId: {
      apply(qb, val) {
        qb.setMeta("clientMutationId", val);
      }
    },
    nodeId: undefined,
    relationalItemRelationCompositePkPatch: {
      apply(qb, arg) {
        if (arg != null) {
          return qb.setBuilder();
        }
      }
    }
  },
  RelationalItemRelationCompositePkPatch: {
    "__baked": createObjectAndApplyChildren,
    parentId: {
      apply(obj, val, {
        field,
        schema
      }) {
        obj.set("parent_id", bakedInputRuntime(schema, field.type, val));
      }
    },
    childId: {
      apply(obj, val, {
        field,
        schema
      }) {
        obj.set("child_id", bakedInputRuntime(schema, field.type, val));
      }
    }
  },
  UpdateRelationalItemRelationCompositePkByParentIdAndChildIdInput: {
    clientMutationId: {
      apply(qb, val) {
        qb.setMeta("clientMutationId", val);
      }
    },
    parentId: undefined,
    childId: undefined,
    relationalItemRelationCompositePkPatch: {
      apply(qb, arg) {
        if (arg != null) {
          return qb.setBuilder();
        }
      }
    }
  },
  UpdateSingleTableItemRelationCompositePkPayload: {
    __assertStep: ObjectStep,
    clientMutationId($mutation) {
      const $result = $mutation.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    singleTableItemRelationCompositePk($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    singleTableItemRelationCompositePkEdge($mutation, fieldArgs) {
      const $result = $mutation.getStepForKey("result", true);
      if (!$result) {
        return constant(null);
      }
      const $select = (() => {
        if ($result instanceof PgDeleteSingleStep) {
          return pgSelectFromRecord($result.resource, $result.record());
        } else {
          const spec = single_table_item_relation_composite_pksUniques[0].attributes.reduce((memo, attributeName) => {
            memo[attributeName] = $result.get(attributeName);
            return memo;
          }, Object.create(null));
          return otherSource_single_table_item_relation_composite_pksPgResource.find(spec);
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
    singleTableItemByChildId($record) {
      return resource_single_table_itemsPgResource.get({
        id: $record.get("result").get("child_id")
      });
    },
    singleTableItemByParentId($record) {
      return resource_single_table_itemsPgResource.get({
        id: $record.get("result").get("parent_id")
      });
    }
  },
  UpdateSingleTableItemRelationCompositePkInput: {
    clientMutationId: {
      apply(qb, val) {
        qb.setMeta("clientMutationId", val);
      }
    },
    nodeId: undefined,
    singleTableItemRelationCompositePkPatch: {
      apply(qb, arg) {
        if (arg != null) {
          return qb.setBuilder();
        }
      }
    }
  },
  SingleTableItemRelationCompositePkPatch: {
    "__baked": createObjectAndApplyChildren,
    parentId: {
      apply(obj, val, {
        field,
        schema
      }) {
        obj.set("parent_id", bakedInputRuntime(schema, field.type, val));
      }
    },
    childId: {
      apply(obj, val, {
        field,
        schema
      }) {
        obj.set("child_id", bakedInputRuntime(schema, field.type, val));
      }
    }
  },
  UpdateSingleTableItemRelationCompositePkByParentIdAndChildIdInput: {
    clientMutationId: {
      apply(qb, val) {
        qb.setMeta("clientMutationId", val);
      }
    },
    parentId: undefined,
    childId: undefined,
    singleTableItemRelationCompositePkPatch: {
      apply(qb, arg) {
        if (arg != null) {
          return qb.setBuilder();
        }
      }
    }
  },
  UpdateRelationalItemRelationPayload: {
    __assertStep: ObjectStep,
    clientMutationId($mutation) {
      const $result = $mutation.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    relationalItemRelation($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    relationalItemRelationEdge($mutation, fieldArgs) {
      const $result = $mutation.getStepForKey("result", true);
      if (!$result) {
        return constant(null);
      }
      const $select = (() => {
        if ($result instanceof PgDeleteSingleStep) {
          return pgSelectFromRecord($result.resource, $result.record());
        } else {
          const spec = relational_item_relationsUniques[0].attributes.reduce((memo, attributeName) => {
            memo[attributeName] = $result.get(attributeName);
            return memo;
          }, Object.create(null));
          return pgResource_relational_item_relationsPgResource.find(spec);
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
    relationalItemByChildId($record) {
      return otherSource_relational_itemsPgResource.get({
        id: $record.get("result").get("child_id")
      });
    },
    relationalItemByParentId($record) {
      return otherSource_relational_itemsPgResource.get({
        id: $record.get("result").get("parent_id")
      });
    }
  },
  UpdateRelationalItemRelationInput: {
    clientMutationId: {
      apply(qb, val) {
        qb.setMeta("clientMutationId", val);
      }
    },
    nodeId: undefined,
    relationalItemRelationPatch: {
      apply(qb, arg) {
        if (arg != null) {
          return qb.setBuilder();
        }
      }
    }
  },
  RelationalItemRelationPatch: {
    "__baked": createObjectAndApplyChildren,
    id: {
      apply(obj, val, {
        field,
        schema
      }) {
        obj.set("id", bakedInputRuntime(schema, field.type, val));
      }
    },
    parentId: {
      apply(obj, val, {
        field,
        schema
      }) {
        obj.set("parent_id", bakedInputRuntime(schema, field.type, val));
      }
    },
    childId: {
      apply(obj, val, {
        field,
        schema
      }) {
        obj.set("child_id", bakedInputRuntime(schema, field.type, val));
      }
    }
  },
  UpdateRelationalItemRelationByIdInput: {
    clientMutationId: {
      apply(qb, val) {
        qb.setMeta("clientMutationId", val);
      }
    },
    id: undefined,
    relationalItemRelationPatch: {
      apply(qb, arg) {
        if (arg != null) {
          return qb.setBuilder();
        }
      }
    }
  },
  UpdateRelationalItemRelationByParentIdAndChildIdInput: {
    clientMutationId: {
      apply(qb, val) {
        qb.setMeta("clientMutationId", val);
      }
    },
    parentId: undefined,
    childId: undefined,
    relationalItemRelationPatch: {
      apply(qb, arg) {
        if (arg != null) {
          return qb.setBuilder();
        }
      }
    }
  },
  UpdateSingleTableItemRelationPayload: {
    __assertStep: ObjectStep,
    clientMutationId($mutation) {
      const $result = $mutation.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    singleTableItemRelation($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    singleTableItemRelationEdge($mutation, fieldArgs) {
      const $result = $mutation.getStepForKey("result", true);
      if (!$result) {
        return constant(null);
      }
      const $select = (() => {
        if ($result instanceof PgDeleteSingleStep) {
          return pgSelectFromRecord($result.resource, $result.record());
        } else {
          const spec = single_table_item_relationsUniques[0].attributes.reduce((memo, attributeName) => {
            memo[attributeName] = $result.get(attributeName);
            return memo;
          }, Object.create(null));
          return otherSource_single_table_item_relationsPgResource.find(spec);
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
    singleTableItemByChildId($record) {
      return resource_single_table_itemsPgResource.get({
        id: $record.get("result").get("child_id")
      });
    },
    singleTableItemByParentId($record) {
      return resource_single_table_itemsPgResource.get({
        id: $record.get("result").get("parent_id")
      });
    }
  },
  UpdateSingleTableItemRelationInput: {
    clientMutationId: {
      apply(qb, val) {
        qb.setMeta("clientMutationId", val);
      }
    },
    nodeId: undefined,
    singleTableItemRelationPatch: {
      apply(qb, arg) {
        if (arg != null) {
          return qb.setBuilder();
        }
      }
    }
  },
  SingleTableItemRelationPatch: {
    "__baked": createObjectAndApplyChildren,
    id: {
      apply(obj, val, {
        field,
        schema
      }) {
        obj.set("id", bakedInputRuntime(schema, field.type, val));
      }
    },
    parentId: {
      apply(obj, val, {
        field,
        schema
      }) {
        obj.set("parent_id", bakedInputRuntime(schema, field.type, val));
      }
    },
    childId: {
      apply(obj, val, {
        field,
        schema
      }) {
        obj.set("child_id", bakedInputRuntime(schema, field.type, val));
      }
    }
  },
  UpdateSingleTableItemRelationByIdInput: {
    clientMutationId: {
      apply(qb, val) {
        qb.setMeta("clientMutationId", val);
      }
    },
    id: undefined,
    singleTableItemRelationPatch: {
      apply(qb, arg) {
        if (arg != null) {
          return qb.setBuilder();
        }
      }
    }
  },
  UpdateSingleTableItemRelationByParentIdAndChildIdInput: {
    clientMutationId: {
      apply(qb, val) {
        qb.setMeta("clientMutationId", val);
      }
    },
    parentId: undefined,
    childId: undefined,
    singleTableItemRelationPatch: {
      apply(qb, arg) {
        if (arg != null) {
          return qb.setBuilder();
        }
      }
    }
  },
  UpdateLogEntryPayload: {
    __assertStep: ObjectStep,
    clientMutationId($mutation) {
      const $result = $mutation.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    logEntry($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    logEntryEdge($mutation, fieldArgs) {
      const $result = $mutation.getStepForKey("result", true);
      if (!$result) {
        return constant(null);
      }
      const $select = (() => {
        if ($result instanceof PgDeleteSingleStep) {
          return pgSelectFromRecord($result.resource, $result.record());
        } else {
          const spec = log_entriesUniques[0].attributes.reduce((memo, attributeName) => {
            memo[attributeName] = $result.get(attributeName);
            return memo;
          }, Object.create(null));
          return otherSource_log_entriesPgResource.find(spec);
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
    organizationByOrganizationId($record) {
      return otherSource_organizationsPgResource.get({
        organization_id: $record.get("result").get("organization_id")
      });
    },
    personByPersonId($record) {
      return otherSource_peoplePgResource.get({
        person_id: $record.get("result").get("person_id")
      });
    }
  },
  UpdateLogEntryInput: {
    clientMutationId: {
      apply(qb, val) {
        qb.setMeta("clientMutationId", val);
      }
    },
    nodeId: undefined,
    logEntryPatch: {
      apply(qb, arg) {
        if (arg != null) {
          return qb.setBuilder();
        }
      }
    }
  },
  LogEntryPatch: {
    "__baked": createObjectAndApplyChildren,
    id: {
      apply(obj, val, {
        field,
        schema
      }) {
        obj.set("id", bakedInputRuntime(schema, field.type, val));
      }
    },
    personId: {
      apply(obj, val, {
        field,
        schema
      }) {
        obj.set("person_id", bakedInputRuntime(schema, field.type, val));
      }
    },
    organizationId: {
      apply(obj, val, {
        field,
        schema
      }) {
        obj.set("organization_id", bakedInputRuntime(schema, field.type, val));
      }
    },
    text: {
      apply(obj, val, {
        field,
        schema
      }) {
        obj.set("text", bakedInputRuntime(schema, field.type, val));
      }
    }
  },
  UpdateLogEntryByIdInput: {
    clientMutationId: {
      apply(qb, val) {
        qb.setMeta("clientMutationId", val);
      }
    },
    id: undefined,
    logEntryPatch: {
      apply(qb, arg) {
        if (arg != null) {
          return qb.setBuilder();
        }
      }
    }
  },
  UpdateFirstPartyVulnerabilityPayload: {
    __assertStep: ObjectStep,
    clientMutationId($mutation) {
      const $result = $mutation.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    firstPartyVulnerability($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    firstPartyVulnerabilityEdge($mutation, fieldArgs) {
      const $result = $mutation.getStepForKey("result", true);
      if (!$result) {
        return constant(null);
      }
      const $select = (() => {
        if ($result instanceof PgDeleteSingleStep) {
          return pgSelectFromRecord($result.resource, $result.record());
        } else {
          const spec = first_party_vulnerabilitiesUniques[0].attributes.reduce((memo, attributeName) => {
            memo[attributeName] = $result.get(attributeName);
            return memo;
          }, Object.create(null));
          return paths_0_resource_first_party_vulnerabilitiesPgResource.find(spec);
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
  UpdateFirstPartyVulnerabilityInput: {
    clientMutationId: {
      apply(qb, val) {
        qb.setMeta("clientMutationId", val);
      }
    },
    nodeId: undefined,
    firstPartyVulnerabilityPatch: {
      apply(qb, arg) {
        if (arg != null) {
          return qb.setBuilder();
        }
      }
    }
  },
  FirstPartyVulnerabilityPatch: {
    "__baked": createObjectAndApplyChildren,
    id: {
      apply(obj, val, {
        field,
        schema
      }) {
        obj.set("id", bakedInputRuntime(schema, field.type, val));
      }
    },
    name: {
      apply(obj, val, {
        field,
        schema
      }) {
        obj.set("name", bakedInputRuntime(schema, field.type, val));
      }
    },
    cvssScore: {
      apply(obj, val, {
        field,
        schema
      }) {
        obj.set("cvss_score", bakedInputRuntime(schema, field.type, val));
      }
    },
    teamName: {
      apply(obj, val, {
        field,
        schema
      }) {
        obj.set("team_name", bakedInputRuntime(schema, field.type, val));
      }
    }
  },
  UpdateFirstPartyVulnerabilityByIdInput: {
    clientMutationId: {
      apply(qb, val) {
        qb.setMeta("clientMutationId", val);
      }
    },
    id: undefined,
    firstPartyVulnerabilityPatch: {
      apply(qb, arg) {
        if (arg != null) {
          return qb.setBuilder();
        }
      }
    }
  },
  UpdateThirdPartyVulnerabilityPayload: {
    __assertStep: ObjectStep,
    clientMutationId($mutation) {
      const $result = $mutation.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    thirdPartyVulnerability($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    thirdPartyVulnerabilityEdge($mutation, fieldArgs) {
      const $result = $mutation.getStepForKey("result", true);
      if (!$result) {
        return constant(null);
      }
      const $select = (() => {
        if ($result instanceof PgDeleteSingleStep) {
          return pgSelectFromRecord($result.resource, $result.record());
        } else {
          const spec = third_party_vulnerabilitiesUniques[0].attributes.reduce((memo, attributeName) => {
            memo[attributeName] = $result.get(attributeName);
            return memo;
          }, Object.create(null));
          return paths_1_resource_third_party_vulnerabilitiesPgResource.find(spec);
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
  UpdateThirdPartyVulnerabilityInput: {
    clientMutationId: {
      apply(qb, val) {
        qb.setMeta("clientMutationId", val);
      }
    },
    nodeId: undefined,
    thirdPartyVulnerabilityPatch: {
      apply(qb, arg) {
        if (arg != null) {
          return qb.setBuilder();
        }
      }
    }
  },
  ThirdPartyVulnerabilityPatch: {
    "__baked": createObjectAndApplyChildren,
    id: {
      apply(obj, val, {
        field,
        schema
      }) {
        obj.set("id", bakedInputRuntime(schema, field.type, val));
      }
    },
    name: {
      apply(obj, val, {
        field,
        schema
      }) {
        obj.set("name", bakedInputRuntime(schema, field.type, val));
      }
    },
    cvssScore: {
      apply(obj, val, {
        field,
        schema
      }) {
        obj.set("cvss_score", bakedInputRuntime(schema, field.type, val));
      }
    },
    vendorName: {
      apply(obj, val, {
        field,
        schema
      }) {
        obj.set("vendor_name", bakedInputRuntime(schema, field.type, val));
      }
    }
  },
  UpdateThirdPartyVulnerabilityByIdInput: {
    clientMutationId: {
      apply(qb, val) {
        qb.setMeta("clientMutationId", val);
      }
    },
    id: undefined,
    thirdPartyVulnerabilityPatch: {
      apply(qb, arg) {
        if (arg != null) {
          return qb.setBuilder();
        }
      }
    }
  },
  UpdateAwsApplicationPayload: {
    __assertStep: ObjectStep,
    clientMutationId($mutation) {
      const $result = $mutation.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    awsApplication($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    awsApplicationEdge($mutation, fieldArgs) {
      const $result = $mutation.getStepForKey("result", true);
      if (!$result) {
        return constant(null);
      }
      const $select = (() => {
        if ($result instanceof PgDeleteSingleStep) {
          return pgSelectFromRecord($result.resource, $result.record());
        } else {
          const spec = aws_applicationsUniques[0].attributes.reduce((memo, attributeName) => {
            memo[attributeName] = $result.get(attributeName);
            return memo;
          }, Object.create(null));
          return otherSource_aws_applicationsPgResource.find(spec);
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
    organizationByOrganizationId($record) {
      return otherSource_organizationsPgResource.get({
        organization_id: $record.get("result").get("organization_id")
      });
    },
    personByPersonId($record) {
      return otherSource_peoplePgResource.get({
        person_id: $record.get("result").get("person_id")
      });
    }
  },
  UpdateAwsApplicationInput: {
    clientMutationId: {
      apply(qb, val) {
        qb.setMeta("clientMutationId", val);
      }
    },
    nodeId: undefined,
    awsApplicationPatch: {
      apply(qb, arg) {
        if (arg != null) {
          return qb.setBuilder();
        }
      }
    }
  },
  AwsApplicationPatch: {
    "__baked": createObjectAndApplyChildren,
    id: {
      apply(obj, val, {
        field,
        schema
      }) {
        obj.set("id", bakedInputRuntime(schema, field.type, val));
      }
    },
    name: {
      apply(obj, val, {
        field,
        schema
      }) {
        obj.set("name", bakedInputRuntime(schema, field.type, val));
      }
    },
    lastDeployed: {
      apply(obj, val, {
        field,
        schema
      }) {
        obj.set("last_deployed", bakedInputRuntime(schema, field.type, val));
      }
    },
    personId: {
      apply(obj, val, {
        field,
        schema
      }) {
        obj.set("person_id", bakedInputRuntime(schema, field.type, val));
      }
    },
    organizationId: {
      apply(obj, val, {
        field,
        schema
      }) {
        obj.set("organization_id", bakedInputRuntime(schema, field.type, val));
      }
    },
    awsId: {
      apply(obj, val, {
        field,
        schema
      }) {
        obj.set("aws_id", bakedInputRuntime(schema, field.type, val));
      }
    }
  },
  UpdateAwsApplicationByIdInput: {
    clientMutationId: {
      apply(qb, val) {
        qb.setMeta("clientMutationId", val);
      }
    },
    id: undefined,
    awsApplicationPatch: {
      apply(qb, arg) {
        if (arg != null) {
          return qb.setBuilder();
        }
      }
    }
  },
  UpdateGcpApplicationPayload: {
    __assertStep: ObjectStep,
    clientMutationId($mutation) {
      const $result = $mutation.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    gcpApplication($object) {
      return $object.get("result");
    },
    query() {
      return rootValue();
    },
    gcpApplicationEdge($mutation, fieldArgs) {
      const $result = $mutation.getStepForKey("result", true);
      if (!$result) {
        return constant(null);
      }
      const $select = (() => {
        if ($result instanceof PgDeleteSingleStep) {
          return pgSelectFromRecord($result.resource, $result.record());
        } else {
          const spec = gcp_applicationsUniques[0].attributes.reduce((memo, attributeName) => {
            memo[attributeName] = $result.get(attributeName);
            return memo;
          }, Object.create(null));
          return otherSource_gcp_applicationsPgResource.find(spec);
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
    organizationByOrganizationId($record) {
      return otherSource_organizationsPgResource.get({
        organization_id: $record.get("result").get("organization_id")
      });
    },
    personByPersonId($record) {
      return otherSource_peoplePgResource.get({
        person_id: $record.get("result").get("person_id")
      });
    }
  },
  UpdateGcpApplicationInput: {
    clientMutationId: {
      apply(qb, val) {
        qb.setMeta("clientMutationId", val);
      }
    },
    nodeId: undefined,
    gcpApplicationPatch: {
      apply(qb, arg) {
        if (arg != null) {
          return qb.setBuilder();
        }
      }
    }
  },
  GcpApplicationPatch: {
    "__baked": createObjectAndApplyChildren,
    id: {
      apply(obj, val, {
        field,
        schema
      }) {
        obj.set("id", bakedInputRuntime(schema, field.type, val));
      }
    },
    name: {
      apply(obj, val, {
        field,
        schema
      }) {
        obj.set("name", bakedInputRuntime(schema, field.type, val));
      }
    },
    lastDeployed: {
      apply(obj, val, {
        field,
        schema
      }) {
        obj.set("last_deployed", bakedInputRuntime(schema, field.type, val));
      }
    },
    personId: {
      apply(obj, val, {
        field,
        schema
      }) {
        obj.set("person_id", bakedInputRuntime(schema, field.type, val));
      }
    },
    organizationId: {
      apply(obj, val, {
        field,
        schema
      }) {
        obj.set("organization_id", bakedInputRuntime(schema, field.type, val));
      }
    },
    gcpId: {
      apply(obj, val, {
        field,
        schema
      }) {
        obj.set("gcp_id", bakedInputRuntime(schema, field.type, val));
      }
    }
  },
  UpdateGcpApplicationByIdInput: {
    clientMutationId: {
      apply(qb, val) {
        qb.setMeta("clientMutationId", val);
      }
    },
    id: undefined,
    gcpApplicationPatch: {
      apply(qb, arg) {
        if (arg != null) {
          return qb.setBuilder();
        }
      }
    }
  },
  DeleteOrganizationPayload: {
    __assertStep: ObjectStep,
    clientMutationId($mutation) {
      const $result = $mutation.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    organization($object) {
      return $object.get("result");
    },
    deletedOrganizationId($object) {
      const $record = $object.getStepForKey("result");
      const specifier = handler4.plan($record);
      return lambda(specifier, handler_codec_base64JSON.encode);
    },
    query() {
      return rootValue();
    },
    organizationEdge($mutation, fieldArgs) {
      const $result = $mutation.getStepForKey("result", true);
      if (!$result) {
        return constant(null);
      }
      const $select = (() => {
        if ($result instanceof PgDeleteSingleStep) {
          return pgSelectFromRecord($result.resource, $result.record());
        } else {
          const spec = organizationsUniques[0].attributes.reduce((memo, attributeName) => {
            memo[attributeName] = $result.get(attributeName);
            return memo;
          }, Object.create(null));
          return otherSource_organizationsPgResource.find(spec);
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
  DeleteOrganizationInput: {
    clientMutationId: {
      apply(qb, val) {
        qb.setMeta("clientMutationId", val);
      }
    },
    nodeId: undefined
  },
  DeleteOrganizationByOrganizationIdInput: {
    clientMutationId: {
      apply(qb, val) {
        qb.setMeta("clientMutationId", val);
      }
    },
    organizationId: undefined
  },
  DeleteOrganizationByNameInput: {
    clientMutationId: {
      apply(qb, val) {
        qb.setMeta("clientMutationId", val);
      }
    },
    name: undefined
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
    deletedPersonId($object) {
      const $record = $object.getStepForKey("result");
      const specifier = handler2.plan($record);
      return lambda(specifier, handler_codec_base64JSON.encode);
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
          const spec = peopleUniques[0].attributes.reduce((memo, attributeName) => {
            memo[attributeName] = $result.get(attributeName);
            return memo;
          }, Object.create(null));
          return otherSource_peoplePgResource.find(spec);
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
  DeletePersonInput: {
    clientMutationId: {
      apply(qb, val) {
        qb.setMeta("clientMutationId", val);
      }
    },
    nodeId: undefined
  },
  DeletePersonByPersonIdInput: {
    clientMutationId: {
      apply(qb, val) {
        qb.setMeta("clientMutationId", val);
      }
    },
    personId: undefined
  },
  DeletePersonByUsernameInput: {
    clientMutationId: {
      apply(qb, val) {
        qb.setMeta("clientMutationId", val);
      }
    },
    username: undefined
  },
  DeleteRelationalItemRelationCompositePkPayload: {
    __assertStep: ObjectStep,
    clientMutationId($mutation) {
      const $result = $mutation.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    relationalItemRelationCompositePk($object) {
      return $object.get("result");
    },
    deletedRelationalItemRelationCompositePkId($object) {
      const $record = $object.getStepForKey("result");
      const specifier = handler8.plan($record);
      return lambda(specifier, handler_codec_base64JSON.encode);
    },
    query() {
      return rootValue();
    },
    relationalItemRelationCompositePkEdge($mutation, fieldArgs) {
      const $result = $mutation.getStepForKey("result", true);
      if (!$result) {
        return constant(null);
      }
      const $select = (() => {
        if ($result instanceof PgDeleteSingleStep) {
          return pgSelectFromRecord($result.resource, $result.record());
        } else {
          const spec = relational_item_relation_composite_pksUniques[0].attributes.reduce((memo, attributeName) => {
            memo[attributeName] = $result.get(attributeName);
            return memo;
          }, Object.create(null));
          return pgResource_relational_item_relation_composite_pksPgResource.find(spec);
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
    relationalItemByChildId($record) {
      return otherSource_relational_itemsPgResource.get({
        id: $record.get("result").get("child_id")
      });
    },
    relationalItemByParentId($record) {
      return otherSource_relational_itemsPgResource.get({
        id: $record.get("result").get("parent_id")
      });
    }
  },
  DeleteRelationalItemRelationCompositePkInput: {
    clientMutationId: {
      apply(qb, val) {
        qb.setMeta("clientMutationId", val);
      }
    },
    nodeId: undefined
  },
  DeleteRelationalItemRelationCompositePkByParentIdAndChildIdInput: {
    clientMutationId: {
      apply(qb, val) {
        qb.setMeta("clientMutationId", val);
      }
    },
    parentId: undefined,
    childId: undefined
  },
  DeleteSingleTableItemRelationCompositePkPayload: {
    __assertStep: ObjectStep,
    clientMutationId($mutation) {
      const $result = $mutation.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    singleTableItemRelationCompositePk($object) {
      return $object.get("result");
    },
    deletedSingleTableItemRelationCompositePkId($object) {
      const $record = $object.getStepForKey("result");
      const specifier = handler10.plan($record);
      return lambda(specifier, handler_codec_base64JSON.encode);
    },
    query() {
      return rootValue();
    },
    singleTableItemRelationCompositePkEdge($mutation, fieldArgs) {
      const $result = $mutation.getStepForKey("result", true);
      if (!$result) {
        return constant(null);
      }
      const $select = (() => {
        if ($result instanceof PgDeleteSingleStep) {
          return pgSelectFromRecord($result.resource, $result.record());
        } else {
          const spec = single_table_item_relation_composite_pksUniques[0].attributes.reduce((memo, attributeName) => {
            memo[attributeName] = $result.get(attributeName);
            return memo;
          }, Object.create(null));
          return otherSource_single_table_item_relation_composite_pksPgResource.find(spec);
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
    singleTableItemByChildId($record) {
      return resource_single_table_itemsPgResource.get({
        id: $record.get("result").get("child_id")
      });
    },
    singleTableItemByParentId($record) {
      return resource_single_table_itemsPgResource.get({
        id: $record.get("result").get("parent_id")
      });
    }
  },
  DeleteSingleTableItemRelationCompositePkInput: {
    clientMutationId: {
      apply(qb, val) {
        qb.setMeta("clientMutationId", val);
      }
    },
    nodeId: undefined
  },
  DeleteSingleTableItemRelationCompositePkByParentIdAndChildIdInput: {
    clientMutationId: {
      apply(qb, val) {
        qb.setMeta("clientMutationId", val);
      }
    },
    parentId: undefined,
    childId: undefined
  },
  DeleteRelationalItemRelationPayload: {
    __assertStep: ObjectStep,
    clientMutationId($mutation) {
      const $result = $mutation.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    relationalItemRelation($object) {
      return $object.get("result");
    },
    deletedRelationalItemRelationId($object) {
      const $record = $object.getStepForKey("result");
      const specifier = handler7.plan($record);
      return lambda(specifier, handler_codec_base64JSON.encode);
    },
    query() {
      return rootValue();
    },
    relationalItemRelationEdge($mutation, fieldArgs) {
      const $result = $mutation.getStepForKey("result", true);
      if (!$result) {
        return constant(null);
      }
      const $select = (() => {
        if ($result instanceof PgDeleteSingleStep) {
          return pgSelectFromRecord($result.resource, $result.record());
        } else {
          const spec = relational_item_relationsUniques[0].attributes.reduce((memo, attributeName) => {
            memo[attributeName] = $result.get(attributeName);
            return memo;
          }, Object.create(null));
          return pgResource_relational_item_relationsPgResource.find(spec);
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
    relationalItemByChildId($record) {
      return otherSource_relational_itemsPgResource.get({
        id: $record.get("result").get("child_id")
      });
    },
    relationalItemByParentId($record) {
      return otherSource_relational_itemsPgResource.get({
        id: $record.get("result").get("parent_id")
      });
    }
  },
  DeleteRelationalItemRelationInput: {
    clientMutationId: {
      apply(qb, val) {
        qb.setMeta("clientMutationId", val);
      }
    },
    nodeId: undefined
  },
  DeleteRelationalItemRelationByIdInput: {
    clientMutationId: {
      apply(qb, val) {
        qb.setMeta("clientMutationId", val);
      }
    },
    id: undefined
  },
  DeleteRelationalItemRelationByParentIdAndChildIdInput: {
    clientMutationId: {
      apply(qb, val) {
        qb.setMeta("clientMutationId", val);
      }
    },
    parentId: undefined,
    childId: undefined
  },
  DeleteSingleTableItemRelationPayload: {
    __assertStep: ObjectStep,
    clientMutationId($mutation) {
      const $result = $mutation.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    singleTableItemRelation($object) {
      return $object.get("result");
    },
    deletedSingleTableItemRelationId($object) {
      const $record = $object.getStepForKey("result");
      const specifier = handler9.plan($record);
      return lambda(specifier, handler_codec_base64JSON.encode);
    },
    query() {
      return rootValue();
    },
    singleTableItemRelationEdge($mutation, fieldArgs) {
      const $result = $mutation.getStepForKey("result", true);
      if (!$result) {
        return constant(null);
      }
      const $select = (() => {
        if ($result instanceof PgDeleteSingleStep) {
          return pgSelectFromRecord($result.resource, $result.record());
        } else {
          const spec = single_table_item_relationsUniques[0].attributes.reduce((memo, attributeName) => {
            memo[attributeName] = $result.get(attributeName);
            return memo;
          }, Object.create(null));
          return otherSource_single_table_item_relationsPgResource.find(spec);
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
    singleTableItemByChildId($record) {
      return resource_single_table_itemsPgResource.get({
        id: $record.get("result").get("child_id")
      });
    },
    singleTableItemByParentId($record) {
      return resource_single_table_itemsPgResource.get({
        id: $record.get("result").get("parent_id")
      });
    }
  },
  DeleteSingleTableItemRelationInput: {
    clientMutationId: {
      apply(qb, val) {
        qb.setMeta("clientMutationId", val);
      }
    },
    nodeId: undefined
  },
  DeleteSingleTableItemRelationByIdInput: {
    clientMutationId: {
      apply(qb, val) {
        qb.setMeta("clientMutationId", val);
      }
    },
    id: undefined
  },
  DeleteSingleTableItemRelationByParentIdAndChildIdInput: {
    clientMutationId: {
      apply(qb, val) {
        qb.setMeta("clientMutationId", val);
      }
    },
    parentId: undefined,
    childId: undefined
  },
  DeleteLogEntryPayload: {
    __assertStep: ObjectStep,
    clientMutationId($mutation) {
      const $result = $mutation.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    logEntry($object) {
      return $object.get("result");
    },
    deletedLogEntryId($object) {
      const $record = $object.getStepForKey("result");
      const specifier = handler3.plan($record);
      return lambda(specifier, handler_codec_base64JSON.encode);
    },
    query() {
      return rootValue();
    },
    logEntryEdge($mutation, fieldArgs) {
      const $result = $mutation.getStepForKey("result", true);
      if (!$result) {
        return constant(null);
      }
      const $select = (() => {
        if ($result instanceof PgDeleteSingleStep) {
          return pgSelectFromRecord($result.resource, $result.record());
        } else {
          const spec = log_entriesUniques[0].attributes.reduce((memo, attributeName) => {
            memo[attributeName] = $result.get(attributeName);
            return memo;
          }, Object.create(null));
          return otherSource_log_entriesPgResource.find(spec);
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
    organizationByOrganizationId($record) {
      return otherSource_organizationsPgResource.get({
        organization_id: $record.get("result").get("organization_id")
      });
    },
    personByPersonId($record) {
      return otherSource_peoplePgResource.get({
        person_id: $record.get("result").get("person_id")
      });
    }
  },
  DeleteLogEntryInput: {
    clientMutationId: {
      apply(qb, val) {
        qb.setMeta("clientMutationId", val);
      }
    },
    nodeId: undefined
  },
  DeleteLogEntryByIdInput: {
    clientMutationId: {
      apply(qb, val) {
        qb.setMeta("clientMutationId", val);
      }
    },
    id: undefined
  },
  DeleteFirstPartyVulnerabilityPayload: {
    __assertStep: ObjectStep,
    clientMutationId($mutation) {
      const $result = $mutation.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    firstPartyVulnerability($object) {
      return $object.get("result");
    },
    deletedFirstPartyVulnerabilityId($object) {
      const $record = $object.getStepForKey("result");
      const specifier = nodeIdHandlerByTypeName.FirstPartyVulnerability.plan($record);
      return lambda(specifier, handler_codec_base64JSON.encode);
    },
    query() {
      return rootValue();
    },
    firstPartyVulnerabilityEdge($mutation, fieldArgs) {
      const $result = $mutation.getStepForKey("result", true);
      if (!$result) {
        return constant(null);
      }
      const $select = (() => {
        if ($result instanceof PgDeleteSingleStep) {
          return pgSelectFromRecord($result.resource, $result.record());
        } else {
          const spec = first_party_vulnerabilitiesUniques[0].attributes.reduce((memo, attributeName) => {
            memo[attributeName] = $result.get(attributeName);
            return memo;
          }, Object.create(null));
          return paths_0_resource_first_party_vulnerabilitiesPgResource.find(spec);
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
  DeleteFirstPartyVulnerabilityInput: {
    clientMutationId: {
      apply(qb, val) {
        qb.setMeta("clientMutationId", val);
      }
    },
    nodeId: undefined
  },
  DeleteFirstPartyVulnerabilityByIdInput: {
    clientMutationId: {
      apply(qb, val) {
        qb.setMeta("clientMutationId", val);
      }
    },
    id: undefined
  },
  DeleteThirdPartyVulnerabilityPayload: {
    __assertStep: ObjectStep,
    clientMutationId($mutation) {
      const $result = $mutation.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    thirdPartyVulnerability($object) {
      return $object.get("result");
    },
    deletedThirdPartyVulnerabilityId($object) {
      const $record = $object.getStepForKey("result");
      const specifier = nodeIdHandlerByTypeName.ThirdPartyVulnerability.plan($record);
      return lambda(specifier, handler_codec_base64JSON.encode);
    },
    query() {
      return rootValue();
    },
    thirdPartyVulnerabilityEdge($mutation, fieldArgs) {
      const $result = $mutation.getStepForKey("result", true);
      if (!$result) {
        return constant(null);
      }
      const $select = (() => {
        if ($result instanceof PgDeleteSingleStep) {
          return pgSelectFromRecord($result.resource, $result.record());
        } else {
          const spec = third_party_vulnerabilitiesUniques[0].attributes.reduce((memo, attributeName) => {
            memo[attributeName] = $result.get(attributeName);
            return memo;
          }, Object.create(null));
          return paths_1_resource_third_party_vulnerabilitiesPgResource.find(spec);
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
  DeleteThirdPartyVulnerabilityInput: {
    clientMutationId: {
      apply(qb, val) {
        qb.setMeta("clientMutationId", val);
      }
    },
    nodeId: undefined
  },
  DeleteThirdPartyVulnerabilityByIdInput: {
    clientMutationId: {
      apply(qb, val) {
        qb.setMeta("clientMutationId", val);
      }
    },
    id: undefined
  },
  DeleteAwsApplicationPayload: {
    __assertStep: ObjectStep,
    clientMutationId($mutation) {
      const $result = $mutation.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    awsApplication($object) {
      return $object.get("result");
    },
    deletedAwsApplicationId($object) {
      const $record = $object.getStepForKey("result");
      const specifier = handler5.plan($record);
      return lambda(specifier, handler_codec_base64JSON.encode);
    },
    query() {
      return rootValue();
    },
    awsApplicationEdge($mutation, fieldArgs) {
      const $result = $mutation.getStepForKey("result", true);
      if (!$result) {
        return constant(null);
      }
      const $select = (() => {
        if ($result instanceof PgDeleteSingleStep) {
          return pgSelectFromRecord($result.resource, $result.record());
        } else {
          const spec = aws_applicationsUniques[0].attributes.reduce((memo, attributeName) => {
            memo[attributeName] = $result.get(attributeName);
            return memo;
          }, Object.create(null));
          return otherSource_aws_applicationsPgResource.find(spec);
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
    organizationByOrganizationId($record) {
      return otherSource_organizationsPgResource.get({
        organization_id: $record.get("result").get("organization_id")
      });
    },
    personByPersonId($record) {
      return otherSource_peoplePgResource.get({
        person_id: $record.get("result").get("person_id")
      });
    }
  },
  DeleteAwsApplicationInput: {
    clientMutationId: {
      apply(qb, val) {
        qb.setMeta("clientMutationId", val);
      }
    },
    nodeId: undefined
  },
  DeleteAwsApplicationByIdInput: {
    clientMutationId: {
      apply(qb, val) {
        qb.setMeta("clientMutationId", val);
      }
    },
    id: undefined
  },
  DeleteGcpApplicationPayload: {
    __assertStep: ObjectStep,
    clientMutationId($mutation) {
      const $result = $mutation.getStepForKey("result");
      return $result.getMeta("clientMutationId");
    },
    gcpApplication($object) {
      return $object.get("result");
    },
    deletedGcpApplicationId($object) {
      const $record = $object.getStepForKey("result");
      const specifier = handler6.plan($record);
      return lambda(specifier, handler_codec_base64JSON.encode);
    },
    query() {
      return rootValue();
    },
    gcpApplicationEdge($mutation, fieldArgs) {
      const $result = $mutation.getStepForKey("result", true);
      if (!$result) {
        return constant(null);
      }
      const $select = (() => {
        if ($result instanceof PgDeleteSingleStep) {
          return pgSelectFromRecord($result.resource, $result.record());
        } else {
          const spec = gcp_applicationsUniques[0].attributes.reduce((memo, attributeName) => {
            memo[attributeName] = $result.get(attributeName);
            return memo;
          }, Object.create(null));
          return otherSource_gcp_applicationsPgResource.find(spec);
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
    organizationByOrganizationId($record) {
      return otherSource_organizationsPgResource.get({
        organization_id: $record.get("result").get("organization_id")
      });
    },
    personByPersonId($record) {
      return otherSource_peoplePgResource.get({
        person_id: $record.get("result").get("person_id")
      });
    }
  },
  DeleteGcpApplicationInput: {
    clientMutationId: {
      apply(qb, val) {
        qb.setMeta("clientMutationId", val);
      }
    },
    nodeId: undefined
  },
  DeleteGcpApplicationByIdInput: {
    clientMutationId: {
      apply(qb, val) {
        qb.setMeta("clientMutationId", val);
      }
    },
    id: undefined
  }
};
export const schema = makeGrafastSchema({
  typeDefs: typeDefs,
  plans: plans
});
