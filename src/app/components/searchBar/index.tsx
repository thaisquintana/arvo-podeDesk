"use client";

import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Search } from "lucide-react";

export default function SearchBar() {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();
  const [pokemon, setPokemon] = useState("");

  const onSubmit = (e: React.KeyboardEvent) => {
    const params = new URLSearchParams(searchParams);

    if (e.key === "Enter") {
      if (pokemon) {
        params.set("query", pokemon);
      } else {
        params.delete("query");
      }
      replace(`${pathName}?${params.toString()}`);
    }
  };
  return (
    <div className="flex items-center relative max-w-screen-xl mx-auto">
      <input
        type="text"
        placeholder="Search"
        className="rounded-lg w-full p-3 border	border-gray-500 bg-transparent text-gray-700 placeholder-gray-700 focus:border-blue-500 focus:bg-gray-200 focus-visible:outline-none lowercase"
        onKeyDown={onSubmit}
        onChange={(e) => setPokemon(e.target.value)}
      />
      <Search className="absolute right-4 text-gray-700" />
    </div>
  );
}
