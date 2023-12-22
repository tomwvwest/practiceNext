import styles from "../styles.module.css";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="sticky">
      <div className="border-b border-black flex justify-between w-full py-5 bg-DeepPurple items-center sticky z-10 px-10">
        <Link href="/">
          <h2 className="text-2xl w-3/6 font-bold text-platinum"> GYMIE </h2>
        </Link>
        <Link href="/profile/jacob123">
          <div className="w-11 h-11 rounded-full overflow-hidden">
            <img src="image.png"></img>
          </div>
        </Link>
      </div>
    </div>
  );
};
