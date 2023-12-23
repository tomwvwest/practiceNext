export const PostCard = () => {
  return (
    <div className=" bg-Purple m-3 rounded-xl relative hover:cursor-pointer max-w-xl">
      <img src={`bestcardio.jpg`} className="object-cover rounded-xl opacity-50 transform scale-x-[-1]"></img>
      <p className="absolute left-5 top-4 text-slate-100 font-bold text-platinum">My Gymie</p>
      <ul className="text-platinum list-disc absolute top-12 left-7">
        <li>4 pushups</li>
        <li>4 situps</li>
        <li>4 starjumps ...</li>
      </ul>
      <p className="absolute bottom-3 left-5 text-platinum">Comments (3)</p>
    </div>
  )
}