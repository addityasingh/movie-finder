import fetch from 'node-fetch';

const omdb = {
    search: (args) => fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=1b153612&t=${args}`)
        .then(res => res.json())
}

export default omdb;