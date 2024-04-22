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
    const payload = {
      id: pokemonDetalis.id,
      name: pokemonDetalis.name,
      image: pokemonDetalis.sprites.other.dream_world.front_default,
      categories: types,
      stats: pokemonDetalis?.stats,
    };

    return payload;
  } catch (e) {
    console.log("error:", e.message);
  }
}
