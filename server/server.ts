import express from 'express';
import cors from 'cors';
import { postgraphile } from 'postgraphile';
import ConnectionFilterPlugin from 'postgraphile-plugin-connection-filter';
// import * as plugins from "@graphile-contrib/pg-simplify-inflector";

const app = express();

app.use(cors());

const postgraphileOptions = {
  graphqlRoute: '/graphql',
  graphiqlRoute: '/graphiql',
  subscriptions: true,
  watchPg: true,
  dynamicJson: true,
  setofFunctionsContainNulls: false,
  ignoreRBAC: false,
  showErrorStack: true,
  extendedErrors: ['hint', 'detail', 'errcode'],
  appendPlugins: [ConnectionFilterPlugin],
  exportGqlSchemaPath: 'schema.graphql',
  graphiql: true,
  enhanceGraphiql: true,
  allowExplain() {
    // TODO: customise condition!
    return true;
  },
  enableQueryBatching: true,
  legacyRelations: 'omit',
  // pgSettings(req) {
  //   /* TODO */
  // },
};

app.use(
  postgraphile(
    process.env.DATABASE_URL?.split('?')[0] || 'postgresql://postgres:postgres@localhost:6500/graphql',
    'public',
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    postgraphileOptions as any
  )
);

app.listen(process.env.PORT || 3100, function () {
  console.log('Start server!');
});
