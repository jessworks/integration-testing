import { IMovie } from "./models/Movie";
import { getData } from "./services/movieService";
import { createHtml } from "./createHtml";
import { displayNoResult } from "./displayNoResult";

let movies: IMovie[] = [];

export async function handleSubmit() {
  let searchText = (document.getElementById("searchText") as HTMLInputElement).value;
  
  let container: HTMLDivElement = document.getElementById("movieContainer") as HTMLDivElement;
  container.innerHTML = "";
  
  try {
  movies = await getData(searchText);
  
  if (movies.length > 0) {
    createHtml(movies, container);
    } else {
      displayNoResult(container);
    }
  } catch {
    displayNoResult(container);
  }
};