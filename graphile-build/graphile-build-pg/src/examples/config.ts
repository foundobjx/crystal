/*
 * This file contains configuration that's used across many of the examples.
 * Mostly it's where you tell it what database you want it to run the GraphQL
 * schema against.
 */

import "graphile-config";

import type { WithPgClient } from "@dataplan/pg";
import {
  defaultPreset as graphileBuildPreset,
  QueryQueryPlugin,
  SwallowErrorsPlugin,
} from "graphile-build";
import { Pool } from "pg";

import { defaultPreset as graphileBuildPgPreset } from "../index.js";
import { getWithPgClientFromPgConfig } from "../pgConfigs.js";

// You should set these to be the values you want to use for demonstration
const DATABASE_CONNECTION_STRING = "postgres:///pagila";
const DATABASE_SCHEMAS: string[] = ["public", "app_public"];

/* ************************************************************************** */
/* **                                                                      ** */
/* **         BELOW HERE IS WHERE THE CODE LIVES, ABOVE IS CONFIG          ** */
/* **                                                                      ** */
/* ************************************************************************** */

declare global {
  namespace GraphileBuild {
    interface GraphileResolverContext {
      pgSettings: {
        [key: string]: string;
      } | null;
      withPgClient: WithPgClient;
    }
  }
}

export function getPool() {
  const pool = new Pool({
    connectionString: DATABASE_CONNECTION_STRING,
  });
  pool.on("error", (e) => {
    console.log("Client error", e);
  });
  return pool;
}

const EnumManglingPlugin: GraphileConfig.Plugin = {
  name: "EnumManglingPlugin",
  description:
    "Mangles enum value names so that they're more likely to be compatible with GraphQL",
  version: "0.0.0",
  inflection: {
    replace: {
      // Help make enums more forgiving
      enumValue(previous, options, value, codec) {
        const base = previous?.call(this, value, codec) ?? value;
        return base
          .replace(/[^A-Za-z0-9_]+/g, "_")
          .replace(/^__+/, "_")
          .replace(/__+$/, "_");
      },
    },
  },
};

export async function makeSharedPresetAndClient(pool: Pool) {
  const preset: GraphileConfig.Preset = {
    extends: [graphileBuildPreset, graphileBuildPgPreset],
    plugins: [QueryQueryPlugin, SwallowErrorsPlugin, EnumManglingPlugin],
    pgConfigs: [
      {
        name: "main",
        schemas: DATABASE_SCHEMAS,
        pgSettingsKey: "pgSettings",
        withPgClientKey: "withPgClient",
        adaptor: "@dataplan/pg/adaptors/node-postgres",
        adaptorSettings: {
          pool,
        },
      },
    ],
    gather: {
      // pgJwtType: ["public", "jwt_token"],
    },
    schema: {
      // pgJwtSecret: "secret",
    },
  };

  const withPgClient = await getWithPgClientFromPgConfig(preset.pgConfigs![0]!);

  return {
    preset,
    withPgClient,
  };
}
