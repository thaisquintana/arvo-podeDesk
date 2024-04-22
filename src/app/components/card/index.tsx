import { getPokemonDetails } from "@/app/api/pokeCard/route";
import { StatisticData, TermSearch } from "./types";
import { flattenObject } from "@/app/utils";

export default async function Card({ query }: TermSearch) {
  const pokemon = await getPokemonDetails(query);
  return (
    <div className="my-10 p-4 bg-gray-300 rounded-lg shadow">
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
      <div className="flex justify-between my-8">
        <div className="w-3/12">
          <img src={pokemon.image} alt={pokemon.name} />
        </div>
        <div className="w-6/12">
          <ul className="grid gap-4 grid-cols-2">
            {pokemon.stats?.map((status: StatisticData) => {
              const statistic = flattenObject(status);
              return (
                <li className="flex w-3/12" key={statistic?.stat_name}>
                  <p className="mr-1 font-semibold">{statistic?.stat_name}:</p>
                  <label>{statistic?.base_stat}</label>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
