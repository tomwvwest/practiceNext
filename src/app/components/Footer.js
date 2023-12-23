import Link from "next/link";

export const Footer = () => {
  return (
    <div className="fixed bottom-0 h-14 border-t border-black w-full bg-platinum flex items-center">
      <ul className="w-full justify-between py-3 opacity-75 font-semibold grid grid-cols-5 text-center text-sm">
        <Link href="/">
          <li>For You</li>
        </Link>
        <Link href="/workouts">
          <li>MyWorkouts</li>
        </Link>
        <li>Log</li>
        <li>Browse</li>
        <li>Plan</li>
      </ul>
    </div>
  );
};
