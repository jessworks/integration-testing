import { createHtml } from "../createHtml";
import { IMovie } from "../models/Movie";

describe('create HTML', () => {
    test('should print movies and append those to container', () => {
        //assign
        const movies: IMovie[] = [
            {Title: 'Any Film', imdbID: '456' , Type: 'Comedy' , Poster: 'An image' , Year: '2002'}
        ];
        const container = document.createElement("div");

        //act
        createHtml(movies, container);

        //assert
        expect(container.children.length).toBe(movies.length);
        
    });
});