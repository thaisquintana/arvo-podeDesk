import { getPokemonDetails } from "@/app/api/pokeCard/route";

interface PokeInfo {
  data: string;
}

export default async function Card({ data }: PokeInfo) {
  const pokemon = await getPokemonDetails(data)
  
  return (
      <div className="my-10 p-4 bg-gray-300 rounded-lg shadow">
        <div className="flex my-8">
        <p className="mr-1 font-semibold capitalize text-lg">#{pokemon.id} {pokemon.name} - </p>
        {
          pokemon.categories.map((type: string) => <p className="mr-1 font-semibold capitalize text-lg" key={type}>{type}</p>)
        }
        </div>
        <div className="flex justify-between my-8">
          <div className="w-3/12">
            <img src={pokemon.image} alt={pokemon.name} />
          </div>
          <div className="w-6/12">
            <ul className="grid gap-4 grid-cols-2">
              <li className="flex w-3/12">
                <p className="mr-1 font-semibold">HP:</p>
                <label>00</label>
              </li>
                <li className="flex w-3/12">
                <p className="mr-1 font-semibold">Attack:</p>
                <label>00</label>
              </li>
                <li className="flex w-3/12">
                <p className="mr-1 font-semibold">Defense:</p>
                <label>00</label>
              </li>
                <li className="flex w-3/12">
                <p className="mr-1 font-semibold">Speed:</p>
                <label>00</label>
              </li>
                <li className="flex w-3/12">
                <p className="mr-1 font-semibold">SP. Attack:</p>
                <label>00</label>
              </li>
                <li className="flex w-3/12">
                <p className="mr-1 font-semibold">SP. Defense:</p>
                <label>00</label>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  