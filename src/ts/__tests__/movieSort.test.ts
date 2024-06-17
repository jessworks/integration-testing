import { IMovie } from "../models/Movie";
import { movieSort } from "../movieSort";

describe('sort movies', () => {
    const movies: IMovie[] = [
        {Title: 'Best Film', imdbID: '123' , Type: 'Drama' , Poster: 'Another image' , Year: '1983'},
        {Title: 'Any Film', imdbID: '456' , Type: 'Comedy' , Poster: 'An image' , Year: '2002'},
        {Title: 'Classic Film', imdbID: '789' , Type: 'Thriller' , Poster: 'Yet another image' , Year: '2014'}
    ];

    test('Movies should be sorted in ascending order', () => {
        const sortedMovies = movieSort(movies);

        expect(sortedMovies.map(m => m.Title)).toEqual([
            'Any Film',
            'Best Film',
            'Classic Film'
        ]);
    });

    test('Movies should be sorted in descending order', () => {
        const sortedMovies = movieSort(movies, false);

        expect(sortedMovies.map(m => m.Title)).toEqual([
            'Classic Film',
            'Best Film',
            'Any Film'
        ]);
    });
});