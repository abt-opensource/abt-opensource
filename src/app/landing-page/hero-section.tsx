import { Button } from "@/primitives/button";
import { MoveRight } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div>
      <div className="flex min-h-screen items-center p-4 text-white md:p-10">
        <div className="flex flex-col items-center justify-center">
          <h1 className="mb-4 font-extrabold text-6xl max-sm:text-4xl sm:px-10 md:px-20 md:leading-17 lg:mb-8 ">
            Innovating Through Open Source
          </h1>
          <p className="mb-4 font-semibold max-sm:text-xs sm:px-10 md:px-20 lg:mb-8 lg:px-50">
            At Androbuddy Technologies, we believe in the power of open source
            to drive innovation. Explore our projects, contribute, and be a part
            of a collaborative future!
          </p>
          <Link href="#cards">
            <Button className="mt-10 font-semibold">
              Explore Projects <MoveRight />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
