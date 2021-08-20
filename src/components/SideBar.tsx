
import { Button } from './Button';

import {genresProps} from "../interfaces"

export function SideBar({genres, clickButton, genreId}: genresProps) {
  return(
    <nav className="sidebar">
    <span>Watch<p>Me</p></span>

    <div className="buttons-container">
      {genres.map(genre => (
        <Button
          key={String(genre.id)}
          title={genre.title}
          iconName={genre.name}
          onClick={() => clickButton(genre.id)}
          selected={genreId === genre.id}
        />
      ))}
    </div>
  </nav>
  )
}