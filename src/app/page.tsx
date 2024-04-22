import { Suspense } from "react";
import Card from "./components/card";
import Header from "./components/header";
import SearchBar from "./components/searchBar";
import { ArrowUpIcon } from "lucide-react";
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
       <SearchBar />
        {query ? 
        (
          <Suspense fallback={<p className="p-8 max-w-screen-xl mx-auto my-0 flex justify-center">Loading...</p>}>
            <Card query={query} />
        </Suspense>
        )
        : (
          <div className="p-8 mx-auto my-0 w-full flex justify-center items-center flex-col">
          <ArrowUpIcon className="mt-8" />
          <p className="mt-8">Type Pokemon's name and click enter to search.</p>
        </div>
        )}
        
      </main>
    </>
  );
}
