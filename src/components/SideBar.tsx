import { Button } from "./Button";
import '../styles/sidebar.scss';
interface Genres {
  id: number;
  title: string;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
}
interface Props {
  genres: Genres[];
  selectedGenreId: number;
  handleGenreChange: Function;
}


export function SideBar({genres, selectedGenreId, handleGenreChange}: Props) {

  function handleClickButton(id: number) {
    handleGenreChange(id);
  }
  
  return (
    <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={genre.id}
              id={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>

      </nav>
  )
}