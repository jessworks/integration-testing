import { displayNoResult } from "../displayNoResult";

describe('No results message', () => {
    test('Display a no results message', () => {
        //assign
        let divContainer = document.createElement("div");
        let expectedMessage = "Inga sökresultat att visa";

        // act
        displayNoResult(divContainer);

        // assert
        expect(divContainer.innerHTML).toContain(expectedMessage);
    });
});