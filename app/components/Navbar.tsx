import Image from "next/image";
import { NavbarText } from "../Text";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <nav className="flex flex-col items-center py-8 px-12 justify-between bg-white2">
      <div className="relative flex w-full space-between items-center font-bold font-secondary ">
        <div className="mx-auto relative">
          <Logo />
        </div>
        <div className="absolute top-1 right-4 flex gap-4">
          <Image src="/search.svg" alt="search" width={24} height={24} />
          <Image src="/profile.svg" alt="profile" width={24} height={24} />
          <Image src="/cart.svg" alt="cart" width={24} height={24} />
        </div>
      </div>

      <div className="flex gap-10 mt-10 items-center justify-between font-secondary">
        {NavbarText.map((text, index) => (
          <div
            key={index}
            className="cursor-pointer hover:border-b hover:border-gray1 text-sm tracking-tighter pb-2 last:bg-gray4 last:rounded-2xl last:hover:bg-black last:hover:text-white  last:p-2 "
          >
            {text}
          </div>
        ))}
      </div>
    </nav>
  );
}
