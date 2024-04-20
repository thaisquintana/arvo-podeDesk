"use client";

import { getPokemonDetails } from "@/app/api/pokeCard/route";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";

export default function SearchBar() {
  const [pokemon, setPokemon] = useState<string>("");

  const onSubmit = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      history.replaceState({}, '', `?pokemon=${pokemon}`)
    }
  };
  return (
    <div className="flex items-center relative">
      <input
        type="text"
        placeholder="Search"
        className="rounded-lg w-full p-3 border	border-gray-500 bg-transparent text-gray-700 placeholder-gray-700 focus:border-blue-500 focus:bg-gray-200 focus-visible:outline-none"
        onKeyDown={onSubmit}
        onChange={(e) => setPokemon(e.target.value)}
      />
      <Search className="absolute right-4 text-gray-700" />
    </div>
  );
}
