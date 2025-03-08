/* eslint-disable graphile-export/exhaustive-deps, graphile-export/export-methods, graphile-export/export-instances, graphile-export/export-subclasses, graphile-export/no-nested */
import { expect } from "chai";
import { it } from "mocha";

import { grafast, lambda, makeGrafastSchema } from "../dist/index.js";

it("can create a schema with an input", async () => {
  const schema = makeGrafastSchema({
    plans: {
      Query: {
        a(_, { $a }) {
          return lambda($a, (a) => JSON.stringify(a));
        },
      },
    },
    typeDefs: /* GraphQL */ `
      type Query {
        a(a: A!): String!
      }

      input A {
        str: String
      }
    `,
  });
  const result = await grafast({ schema, source: `{ a(a: {str: "hello!"})}` });
  expect(result.errors).to.be.undefined;
  expect(result.data.a).to.eq('{"str":"hello!"}');
});
