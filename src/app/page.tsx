import Card from "./components/card";
import Header from "./components/header";
import SearchBar from "./components/searchBar";


export default function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}){
  const selected = searchParams['pokemon'] ?? '';
  return (
    <>
      <Header />
        <main className="p-8 mx-auto my-0">
          <SearchBar />
          <Card data={selected} />
        </main>
    </>
  );
}
