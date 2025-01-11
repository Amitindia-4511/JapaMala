import { useEffect, useState } from "react";
// import useStore from "../store/store";

function Japamala() {
  //   const [danaCount, setDanaCount] = useState(0);
  const [japaCount, setJapaCount] = useState(0);
  const [inputJapaCount, setInputJapaCount] = useState(1);
  //   const { selectedBead } = useStore();
  let sourceImage = "";
  let imageNumber = 1;
  //   if (selectedBead === "Rudraksha") {
  //     for (let i = 0; i <= japaCount; i++) {
  //       imageNumber = japaCount % 48;
  //     }
  //     sourceImage = `/Rudraksha/Rudraksha${imageNumber}.png`;
  //   }
  imageNumber = japaCount % 48;
  sourceImage = `/Rudraksha/Rudraksha${imageNumber}.png`;

  function countJapa() {
    if (japaCount === 0) {
      console.log("Beep");
      const beep = new Audio("beep.mp3");
      beep.play();
    } else {
      //   setDanaCount((prev) => prev + 1);
      setInputJapaCount((prev) => prev - 1);
    }
  }

  function resetJapa() {
    // setDanaCount(0);
    setInputJapaCount(0);
  }
  function handleJapaCount(event) {
    setInputJapaCount(event.target.value);
  }

  useEffect(() => {
    setJapaCount(inputJapaCount);
  }, [inputJapaCount]);

  return (
    <div className="h-screen flex flex-col gap-5 items-center justify-center overflow-hidden">
      <div className="sm:w-1/2 sm:h-1/2 flex items-center justify-center">
        <img
          loading="lazy"
          src={sourceImage}
          alt=""
          className="w-auto h-auto max-w-full max-h-full object-contain"
        />
      </div>
      <button
        className="p-11 w-[90%] border border-red-500 rounded-md bg-red-600 text-red-900 font-extrabold text-5xl"
        onClick={countJapa}
      >
        Japa
      </button>
      <div className="flex gap-5 justify-center">
        <button
          className="p-3 border border-red-500 rounded-md bg-red-600"
          onClick={resetJapa}
        >
          Reset
        </button>
        <input
          type="number"
          value={inputJapaCount}
          placeholder="Set Japa Count"
          className="p-3 w-1/2 text-center text-xl bg-orange-300 text-red-500 rounded-lg border border-orange-500"
          onChange={handleJapaCount}
        />
      </div>
      <h1>Remaining Count: {inputJapaCount}</h1>
    </div>
  );
}

export default Japamala;
