import { SSTConfig } from "sst";
import {handler} from './src/main'
import type { FunctionalStack } from "sst/constructs/FunctionalStack.js";

export default {
  config(_input) {
    return {
      name: "teste-fastify",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(handler as FunctionalStack<any>);
  }
} satisfies SSTConfig;
