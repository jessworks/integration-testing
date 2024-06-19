import { IMovie } from "../../models/Movie";


export const moviesMock: IMovie[] = [
    {Title: 'Best Film', imdbID: '123' , Type: 'Drama' , Poster: 'Another image' , Year: '1983'},
    {Title: 'Any Film', imdbID: '456' , Type: 'Comedy' , Poster: 'An image' , Year: '2002'},
    {Title: 'Classic Film', imdbID: '789' , Type: 'Thriller' , Poster: 'Yet another image' , Year: '2014'}
];


export const getData = async (searchText: string): Promise<IMovie[]> => {
    return new Promise((resolve, reject) => {
        if (searchText === '') {
            reject([]);
        } else {
            resolve(moviesMock);
        }
    });
};
