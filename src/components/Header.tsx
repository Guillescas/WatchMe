interface IHeaderProps {
  selectedGenre: {
    title: string
  }
}

export function Header({ selectedGenre }: IHeaderProps) {
  return (
    <header>
      <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
    </header>
  );
}