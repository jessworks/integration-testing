import axios from "axios";
import { getData } from "../services/movieService";
import { moviesMock } from "../services/__mocks__/movieService";


describe('get data', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });
    

    test('should return happy flow', async () => {
        const mockedAxios = jest.spyOn(axios, 'get');
        mockedAxios.mockResolvedValueOnce({
            data: { Search: moviesMock },
        })
        const searchText = 'Best Film';


        const movies = await getData(searchText);

        
        expect(mockedAxios).toHaveBeenCalled();
        expect(movies).toHaveLength(3);
        expect(movies[0].Title).toBe('Best Film');
    })


    test('should handle reject', async () => {
        const mockedAxios = jest.spyOn(axios, 'get');
        mockedAxios.mockRejectedValueOnce({ message: 'error'});
        const searchText = '';


        const movies = await getData(searchText);


        expect(movies).toHaveLength(0);
    })
});


