import { useState } from 'react';
import { Button } from './Button';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface AllGenres {
  genres: GenreResponseProps[];
  handleClickButton: (id: number) => void;
  selectedGenreId: number;
}


export function SideBar({ genres, handleClickButton, selectedGenreId }: AllGenres) {
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      {console.log(genres)}

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            id={String(genre.id)}
            key={genre.id}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  );
}