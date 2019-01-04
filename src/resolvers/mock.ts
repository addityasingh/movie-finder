import { functions } from 'casual';
const casual = functions();

export default {
    Query: {
        Movie: () => ({
            Title: () => casual.title(),
            Actors: () => casual.name(),
            Genre: () => casual.title(),
            Awards: () => casual.text(),
            Country: () => casual.country(),
            Director: () => casual.text(),
            Language: () => casual.language_code(),
            Metascore: () => casual.building_number(),
            Plot: () => casual.sentence(),
            Poster: () => casual.url(),
            Rated: () => casual.text(),
            Ratings: () => casual.text(),
            Released: () => casual.year(),
            Response: () => casual.sentence(),
            Runtime: () => casual.building_number(),
            Type: () => casual.title(),
            Writer: () => casual.name(),
            Year: () => casual.year(),
            imdbID: () => casual.uuid(),
            imdbRating: () => casual.building_number(),
            imdbVotes: () => casual.building_number(),
            totalSeasons: () => casual.building_number(),
        })
    }
};