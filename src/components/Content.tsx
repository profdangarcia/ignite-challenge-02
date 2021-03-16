import { MovieCard } from "./MovieCard";
import '../styles/content.scss';
interface Movies {
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}
interface Props {
  movies: Movies[];
  sectionTitle: string;
}

export function Content({movies, sectionTitle}: Props) {
  
  return (
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {sectionTitle}</span></span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard
              key={movie.Title} 
              title={movie.Title} 
              poster={movie.Poster} 
              runtime={movie.Runtime} 
              rating={movie.Ratings[0].Value} 
            />
          ))}
        </div>
      </main>
    </div>
  )
}