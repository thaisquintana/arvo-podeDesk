export default function Card() {
    return (
      <div className="my-10 p-4 bg-gray-300 rounded-lg">
        <p className="mr-1 font-semibold">Nome</p>
        <div className="flex justify-between my-8">
          <div className="w-6/12">
            <img src="" alt="pokemon image" />
          </div>
          <div className="w-6/12">
            <ul className="flex flex-col">
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
                <p className="mr-1 font-semibold">Sp Attack:</p>
                <label>00</label>
              </li>
                <li className="flex w-3/12">
                <p className="mr-1 font-semibold">Sp Defense:</p>
                <label>00</label>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  