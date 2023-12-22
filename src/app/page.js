import { PostContainer } from "./components/PostContainer";

export default function Home() {
  return (
    <main className=" rounded-xl mx-5 my-3 bg-platinum overflow-hidden flex flex-col justify-center items-center">
      <h1 className="w-full pl-4 pt-3 pb-2 font-extrabold text-3xl text-DeepPurple mb-5">
        For You
      </h1>
      <div className="grid grid-rows-1 gap-5">
        <PostContainer />
        <PostContainer />
        <PostContainer />
      </div>
    </main>
  );
}
