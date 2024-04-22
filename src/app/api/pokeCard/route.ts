import { flattenObject, reOrderArray } from "@/app/utils";

// get pokemon list
export async function getPokemonList() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon");
  const pokemonList = await response.json();
  return pokemonList;
}

// get pokemon details
export async function getPokemonDetails(pokemon: string) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  try {
    const pokemonDetalis = await response.json();
    const types = pokemonDetalis.types?.map((item: any) => item.type.name);
    const status = pokemonDetalis.stats.map((stat: any) => flattenObject(stat))
    const statistics =  reOrderArray(status, 5, 3)
    const statisticsB =  reOrderArray(statistics, 4, 5)
    console.log(statistics)
    const payload = {
      id: pokemonDetalis.id,
      name: pokemonDetalis.name,
      image: pokemonDetalis.sprites.other.dream_world.front_default,
      categories: types,
      stats: statisticsB,
    };
    console.log(payload)
    return payload;
  } catch (e: any) {
    console.log("error:", e.message);
  }
}
