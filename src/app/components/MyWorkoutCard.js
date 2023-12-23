export const MyWorkoutCard = () => {
  return (
    <div className=" bg-Purple m-3 rounded-xl relative hover:cursor-pointer max-w-xl h-32 overflow-hidden">
      <img
        src={`bestcardio.jpg`}
        className="object-cover rounded-xl opacity-50 transform scale-x-[-1]"
      ></img>
      <p className="absolute left-5 top-4 text-slate-100 font-bold text-platinum">
        Chest Workout
      </p>
      <ul className="text-platinum list-disc absolute top-12 left-7">
        <li>4 pushups</li>
        <li>4 situps</li>
        <li>4 starjumps ...</li>
      </ul>{" "}
      <p className="absolute top-2 right-3 rounded-full text-platinum flex  w-7 h-7 items-center justify-center text-3xl bg-platinum bg-opacity-0 active:bg-opacity-60 transition-[0.2s]">...</p>
    </div>
  );
};
