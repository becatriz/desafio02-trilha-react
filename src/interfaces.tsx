export interface MoviesProps {
    movies: Array<{
      imdbID: string;
      Title: string;
      Poster: string;
      Ratings: Array<{
      Source: string;
      Value: string;
      }>;
      Runtime: string;
      }>;
      category: string
  }

  export interface MovieProps {
      imdbID: string;
      Title: string;
      Poster: string;
      Ratings: Array<{
      Source: string;
      Value: string;
      }>;
      Runtime: string;
  }

  export interface GenreResponseProps {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
  }

  export interface genresProps {
    genres: Array<{
      id: number,
      title: string,
      name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    }>;
    clickButton: Function;
    genreId: number;
   
  }
  