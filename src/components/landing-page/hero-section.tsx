import { Button } from "@/primitives/button";
import { MoveRight } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div>
      <div className="flex min-h-screen w-full items-center justify-center p-4 text-white md:p-10">
        <div className="flex flex-col items-center justify-center font-geist-sans">
          <h1 className="text-center font-semibold text-7xl max-sm:text-4xl">
            ABT
          </h1>
          <h1 className="mb-4 text-center font-semibold text-7xl max-sm:text-4xl lg:mb-8 ">
            Open Source
          </h1>
          <p className="mb-4 w-10/12 text-center font-geist-mono text-base max-sm:text-xs sm:w-8/12 md:w-6/12 lg:mb-8">
            At Androbuddy Technologies, we believe in the power of open source
            to drive innovation. Explore our projects, contribute, and be a part
            of a collaborative future!
          </p>
          <Link href="#cards">
            <Button className="font-semibold">
              Explore Projects <MoveRight />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
