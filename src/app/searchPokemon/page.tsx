"use client";

import { ArrowUpIcon } from "lucide-react";
import Card from "../components/card";
import { TermSearch } from "../components/card/types";
import SearchBar from "../components/searchBar";

export default function SearchPokemon({ query }: TermSearch) {
  return (
    <>
      <SearchBar />
      {query ? (
        <Card query={query} />
      ) : (
        <div className="p-8 mx-auto my-0 w-full flex justify-center items-center flex-col">
          <ArrowUpIcon className="mt-8" />
          <p className="mt-8">Type Pokemon's name and click enter to search.</p>
        </div>
      )}
    </>
  );
}
