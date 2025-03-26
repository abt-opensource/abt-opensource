import { Copyright, Github, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <div className="border-neutral-600 border-t xl:py-10">
        <div className="w-full p-4">
          <div className="mx-auto flex flex-col gap-10 xl:w-[80%] xl:flex-row xl:gap-50">
            <div>
              <Image
                src={"/favicon.png"}
                alt={"logo"}
                width={40}
                height={40}
                className="mr-5 rounded-2xl "
              />
              <div className="font-semibold">ABT | Open source</div>
            </div>
            <div className="grid w-full grid-cols-2 gap-10 md:gap-auto">
              <div className="flex flex-col gap-4">
                <div className="font-semibold">Products</div>
                <ul className="flex flex-col gap-2 text-sm *:text-neutral-500 *:hover:text-white">
                  <li>Flutercon</li>
                  <li>Fluter Essentials</li>
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                <div className="font-semibold">Company</div>
                <ul className="flex flex-col gap-2 text-sm *:text-neutral-500 *:hover:text-white">
                  <li>About us</li>
                  <li>FAQ</li>
                  <li>Contact</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-neutral-700 border-t">
        <div className="flex items-center justify-between px-8 py-4">
          <div>
            <p className="flex items-center gap-1 text-sm hover:text-[#2A39E8]">androtechbuddy.com<Copyright size={12}/> 2024</p>
          </div>
          <div className="flex items-center gap-4">
            <Github />
            <Linkedin />
            <Twitter />
            <Instagram />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
