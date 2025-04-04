import { Copyright, Github, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-black text-white">
      <div className="xl:py-10">
        <div className="w-full p-4">
          <div className="mx-auto flex flex-col gap-10 md:gap-20 xl:w-[80%] ">
            <div className="flex items-center justify-center gap-5 md:gap-10">
              <Image
                src={"/favicon.png"}
                alt={"logo"}
                width={60}
                height={60}
                className="mr-5 rounded-2xl "
              />
              <div className="font-geist-sans font-semibold text-2xl sm:text-4xl md:text-5xl lg:text-7xl">
                ABT | OPEN SOURCE
              </div>
            </div>
            <div className="grid w-full grid-cols-2 gap-10 font-geist-mono md:gap-auto">
              <div className="flex flex-col gap-4">
                <div className="font-semibold">Products</div>
                <ul className="flex flex-col gap-2 text-sm *:text-neutral-500 *:hover:text-primary">
                  <li>
                    <Link href={"https://github.com/abt-opensource/fluttercon"}>
                      Fluttercon
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={
                        "https://github.com/abt-opensource/flutter-essentials"
                      }
                    >
                      Flutter Essentials
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                <div className="font-semibold">Company</div>
                <ul className="flex flex-col gap-2 text-sm *:text-neutral-500 *:hover:text-primary">
                  <li>
                    <Link href={"/about-us"}>About us</Link>
                  </li>
                  <li>
                    <Link href={"https://androtechbuddy.com/why-us/"}>
                      Why us
                    </Link>
                  </li>
                  <li>
                    <Link href={"https://androtechbuddy.com/team/"}>Team</Link>
                  </li>
                  <li>
                    <Link href={"https://androtechbuddy.com/careers/"}>
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link href={"https://androtechbuddy.com/partnerships/"}>
                      Partners & Certifications
                    </Link>
                  </li>
                  <li>
                    <Link href={"https://androtechbuddy.com/reviews-awards/"}>
                      Reviews & Awards
                    </Link>
                  </li>
                  <li>
                    <Link href={"https://androtechbuddy.com/work/"}>
                      Our Works
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-neutral-700 border-t">
        <div className="flex items-center justify-between py-4 sm:px-8">
          <div className="flex items-center gap-1 text-sm">
            <Link
              href={"https://androtechbuddy.com/"}
              className="flex items-center gap-1 "
            >
              <span className="hover:text-primary">androtechbuddy.com</span>
            </Link>
            <Copyright size={12} />
            2024
          </div>
          <div className="flex items-center gap-1 sm:gap-4">
            <Link href={"https://github.com/abt-opensource"}>
              <Github />
            </Link>
            <Link
              href={"https://www.linkedin.com/company/androbuddytechnologies/"}
            >
              <Linkedin />
            </Link>
            <Link
              href={
                "https://x.com/AndroTechBuddy?t=5WC8lpGK6CU7tWeEq6xoEg&s=08"
              }
            >
              <Twitter />
            </Link>
            <Link
              href={
                "https://www.instagram.com/androbuddy_ig?igsh=dDJrMGZxajVkM2Vr"
              }
            >
              <Instagram />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
