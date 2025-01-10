import { useEffect, useState } from "react";

function Japamala() {
  const [danaCount, setDanaCount] = useState(0);
  const [japaCount, setJapaCount] = useState(0);
  const [inputJapaCount, setInputJapaCount] = useState(0);

  console.log(danaCount, japaCount, inputJapaCount);

  function countJapa() {
    if (japaCount === 0) {
      console.log("Beep");
      const beep = new Audio("beep.mp3");
      beep.play();
    } else {
      setDanaCount((prev) => prev + 1);
      setInputJapaCount((prev) => prev - 1);
    }
  }

  function resetJapa() {
    setDanaCount(0);
    setInputJapaCount(0);
  }
  function handleJapaCount(event) {
    setInputJapaCount(event.target.value);
  }

  useEffect(() => {
    setJapaCount(inputJapaCount);
  }, [inputJapaCount]);

  return (
    <div className="flex flex-col px-11 py-5  gap-5">
      <h1 className="bg-red-700 p-5 text-center">{danaCount}</h1>
      <button
        className="p-11 border border-red-500 rounded-md bg-red-600"
        onClick={countJapa}
      >
        Japa
      </button>
      <div className="flex gap-11 justify-center">
        <button
          className="p-5 border border-red-500 rounded-md bg-red-600"
          onClick={resetJapa}
        >
          Reset
        </button>
        <input
          type="number"
          value={inputJapaCount}
          placeholder="Set Japa Count"
          className="p-5 bg-orange-300 text-red-500 rounded-lg border border-orange-500"
          onChange={handleJapaCount}
        />
      </div>
      <h1>Remaining Count: {inputJapaCount}</h1>
    </div>
  );
}

export default Japamala;
