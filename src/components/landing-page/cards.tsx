import Image from "next/image";

const cardData = [
  {
    icon: "/flutercon.jpg",
    title: "FLUTTERCON",
    description:
      "Flutercon is an open-source icon library featuring 1500+ carefully crafted icons, specially designed for Flutter applications.",
  },
  {
    icon: "/fluteressentials.png",
    title: "FLUTTER-ESSENTIAL",
    description:
      "Flutter Essentials is an open-source project template that provides all the necessary configurations for Flutter development.",
  },
];

const Cards = () => {
  return (
    <>
      <div className="flex min-h-screen items-center justify-center " id="cards">
        <div className="flex flex-col sm:gap-12 md:flex-row">
          {cardData.map((card, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            <div key={index} className="">
              <div className="card-content w-[350px] rounded-xl bg-cardBg p-8 text-center shadow-lg backdrop-blur-lg transition-transform duration-300 hover:shadow-lg sm:w-[400px]">
                <div className="flex justify-center">
                  <Image
                    src={card.icon}
                    alt={card.title}
                    width={75}
                    height={75}
                    className="drop-shadow-lg"
                  />
                </div>

                <h2 className="mt-8 font-bold text-3xl text-white tracking-wide">
                  {card.title}
                </h2>

                <p className="mt-4 text-white leading-7">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <FeatureCard/> */}
    </>
  );
};

export default Cards;
