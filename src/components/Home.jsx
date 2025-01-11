import { Link } from "react-router-dom";
import useStore from "../store/store";

function Home() {
  const { setBeadType } = useStore();

  function setRudrakshaBead() {
    setBeadType("Rudraksha");
  }
  function setTulsiBead() {
    setBeadType("Tulsi");
  }
  return (
    <div className="flex flex-col h-screen items-center justify-center overflow-auto">
      <img src="Om.jpg" alt="Om" className="mb-5 w-[80%]" />
      <div className="flex justify-center gap-5 items-center mb-11">
        <button
          onClick={setRudrakshaBead}
          className="text-xl text-red-900 font-bold rounded-lg bg-red-500 p-5 from-cyan-500 transform transition-all duration-150 active:scale-90"
        >
          Rudraksha
        </button>
        <button
          disabled={true}
          onClick={setTulsiBead}
          className="text-xl text-red-900 font-bold rounded-lg bg-red-500 p-5 transform transition-all duration-150 active:scale-90"
        >
          Tulsi
        </button>
      </div>
      <Link
        to="/JapaMala"
        className="rounded-md border border-gray-600 px-11 py-3 bg-orange-400 hover:bg-red-500 hover:border-orange-700"
      >
        Enter
      </Link>
    </div>
  );
}

export default Home;
