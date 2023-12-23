import { BackButton } from "@/app/components/BackButton";

export default function AboutPage({ params }) {
  return (
      <div className="h-screen pt-9 px-7">
        <div className="grid grid-cols-2 gap-3 relative">
          <img src="../Image.png" className="rounded-xl"></img>
          <p className="absolute bottom-1 left-2 bg-platinum bg-opacity-70 rounded-xl px-2 border-[1px] hover:cursor-pointer text-sm">
            Change
          </p>
          <div>
            <h2 className="font-semibold text-xl">Jacob Garner</h2>
            <p className="italic pl-1">{params.username}</p>
          </div>
        </div>

      </div>
  );
}
