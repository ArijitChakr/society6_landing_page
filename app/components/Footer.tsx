import BigLogo from "./BigLogo";
import { footerText } from "../Text";

export default function Footer() {
  return (
    <div className="bg-gray4">
      <div className="mx-56 pt-16">
        <div className="border-b border-black">
          <div className="text-9xl w-72 mb-16 font-secondary">
            <BigLogo />
          </div>
        </div>
        <div className="flex justify-between items-start border-b border-black py-10">
          {footerText.map(({ heading, texts }, index) => (
            <div
              key={index}
              className="flex flex-col gap-3 my-10 justify-start max-w-[144px]"
            >
              <h2 className="uppercase font-bold text-sm tracking-wider">
                {heading}
              </h2>
              {texts.map((text, index) => (
                <p
                  key={index}
                  className="text-sm font-light tracking-wider cursor-pointer"
                >
                  {text}
                </p>
              ))}
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center py-5 text-xs">
          <p className="hover:border-b hover:border-black cursor-pointer">
            Privacy Notice
          </p>
          <p className="hover:border-b hover:border-black cursor-pointer">
            Cookie Notice
          </p>
          <p className="hover:border-b hover:border-black cursor-pointer">
            Notice of Collection
          </p>
          <p className="hover:border-b hover:border-black cursor-pointer">
            Terms of Service
          </p>
          <p className="hover:border-b hover:border-black cursor-pointer">
            Copyright & Trademark Policy
          </p>
          <p className="hover:border-b hover:border-black cursor-pointer">
            Accessibility
          </p>
        </div>
        <p className="text-center text-xs tracking-wider pt-10 pb-7">
          © 2025 Society6 Inc. All rights reserved.
        </p>
      </div>
    </div>
  );
}
