import Card from "./components/card";
import Header from "./components/header";
import SearchBar from "./components/searchBar";
import SearchPokemon from "./searchPokemon/page";

export default function Home({
  searchParams,
}: {
  searchParams?: { query?: string };
}) {
  const query = searchParams?.query || "";
  return (
    <>
      <Header />
      <main className="p-8 mx-auto my-0">
        <SearchPokemon query={query} />
      </main>
    </>
  );
}
