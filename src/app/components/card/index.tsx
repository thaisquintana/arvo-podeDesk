import { getPokemonDetails } from "@/app/api/pokeCard/route";
import { StatisticData, TermSearch } from "./types";
import { NotResultFound } from "@/lib/exceptions";

export default async function Card({ query }: TermSearch) {
  const pokemon = await getPokemonDetails(query);

  if(!pokemon) throw new NotResultFound()

  return (
    
    <div className="my-10 p-8 bg-gray-300 rounded-lg shadow max-w-screen-xl mx-auto">
 
      <div className="flex my-8">
        <p className="mr-1 font-semibold capitalize text-lg">
          #{pokemon.id} {pokemon.name} -{" "}
        </p>
        {pokemon.categories?.map((type: string) => (
          <p className="mr-1 font-semibold capitalize text-lg" key={type}>
            {type}
          </p>
        ))}
      </div>
      <div className="flex justify-between my-8 gap-32 flex-row items-start">
        <div className="w-6/12">
          <img src={pokemon.image} alt={pokemon.name} className="w-6/12"/>
        </div>
        <div className="w-full">
          <ul className="grid gap-4 grid-cols-2">
            {pokemon.stats?.map((status: StatisticData) => {
              const specialName = status.stat_name.replace('special-', 'SP. ')

              return (
                <li className="flex w-6/12" key={status.stat_name}>
                  <p className="mr-1 font-semibold capitalize">{specialName}:</p>
                  <label>{status.base_stat}</label>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
