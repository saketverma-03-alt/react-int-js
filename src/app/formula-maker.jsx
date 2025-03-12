const FormulaWords = ["BASIC", "HRA", "CA", "SA", "ESIC"];

export const Component = () => {
  return (
    <main className="grid h-screen w-full place-items-center">
      <div className="shadow-sm p-4">
        <div className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="Formula"
            className="border p-2 py-1"
          />
          <button className="px-2 py-1  rounded-md w-fit ml-auto bg-sky-400 text-white">
            Validate & Save
          </button>
        </div>
        <div className="flex gap-1 mt-4 items-baseline">
          <label>Formula Words</label>
          {FormulaWords.map((word, index) => {
            return (
              <button key={index} className="px-2 py-1 bg-slate-200 rounded-md">
                {word}
              </button>
            );
          })}
        </div>
      </div>
    </main>
  );
};
