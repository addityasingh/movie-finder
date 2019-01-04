import { importSchema } from 'graphql-import';

export default importSchema(__dirname + '/query.graphql') as any;