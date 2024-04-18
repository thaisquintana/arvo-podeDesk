import Header from "./components/header";
import SearchBar from "./components/searchBar";
import Card from "./components/card";


export default function Home() {
  return (
    <>
      <Header />
      <main className="p-8 mx-auto my-0">
        <SearchBar />
        <Card />
      </main>
    </>
  );
}
