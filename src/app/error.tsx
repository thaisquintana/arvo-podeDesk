"use client"; // Error components must be Client Components

import { InboxIcon } from "lucide-react";
import SearchBar from "./components/searchBar";
import Header from "./components/header";

const Error = ({
  error,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
    
  return (
    <>
      <Header />
      <main className="p-8 mx-auto my-0">
        <SearchBar />
        <div className="p-8 mx-auto my-0 w-full flex justify-center items-center flex-col">
          <InboxIcon className="mt-8" />
          <p className="mt-8">{error.message || 'No results found.'}</p>
        </div>
      </main>
    </>
  );
};

export default Error;
