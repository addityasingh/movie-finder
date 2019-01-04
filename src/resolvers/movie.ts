import { OMDB } from '../connector';

export default {
    Query: {
        Movie: (_obj, args, context, info) => {
            return OMDB.search(args.title)
        }
    }
}