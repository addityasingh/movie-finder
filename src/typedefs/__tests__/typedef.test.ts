import { GraphQLSchema, parse, specifiedRules, validate } from "graphql";
import { buildSchemaFromTypeDefinitions } from "graphql-tools";
import { ITypeDefinitions } from "graphql-tools/dist/Interfaces";
import { importSchema } from 'graphql-import';

describe("typedefs", () => {
  let typedefs: ITypeDefinitions;
  let schema: GraphQLSchema;

  test("should be able to read root query typedef file", () => {
    typedefs = importSchema(__dirname + "/../query.graphql");
    expect(typedefs).not.toBeNull();
  });

  test("should be able to build GraphQL Schema", () => {
    schema = buildSchemaFromTypeDefinitions(typedefs);
    expect(schema).not.toBeNull();
  });

  test("validate schema against spec", () => {
    validate(schema, parse('query{Movie(title:"game"){Title}}'), specifiedRules);
  });
});
