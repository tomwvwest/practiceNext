import { PostCard } from "./PostCard";

export const PostContainer = () => {
  return (
    <div className="">
      <div className="flex items-center">
        <div className="w-11 h-11 rounded-full overflow-hidden">
          <img src="image.png"></img>
        </div>
        <div className="ml-3 opacity-70 text-sm text-DeepPurple">
          <p>Jacob Garner</p>
          <p>6:30pm 11/12/23</p>
        </div>
      </div>
      <PostCard />
      <hr className="opacity-20 mt-5"/>
    </div>
  );
};
