import { MyWorkoutCard } from "../components/MyWorkoutCard";

export default function MyWorkouts() {
  return (
    <div className="rounded-xl mx-5 my-3 bg-platinum overflow-hidden flex flex-col justify-center items-center">
      <h1 className="w-full pl-4 pt-3 pb-2 font-extrabold text-3xl text-DeepPurple mb-2">
        My Workouts
      </h1>
      <div className="">
        <MyWorkoutCard/>
        <MyWorkoutCard/>
        <MyWorkoutCard/>
      </div>
    </div>
  );
}
