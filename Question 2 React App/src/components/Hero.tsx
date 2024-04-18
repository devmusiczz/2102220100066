const Hero = () => {
  return (
    <div className="bg-[#e3edf6] mt-4">
      <div className="container grid md:grid-cols-2 py-8">
        <div className="flex items-center">
          <div className="max-w-[450px] space-y-4">
            <p className="text-topHeadingSecondary">
              Starting At <span className="font-bold">Rs2999</span>
            </p>

            <h2 className="text-topHeadingPrimary font-bold text-4xl md:text-5xl">
              The best note book collection 2024
            </h2>

            <h3>
              Exclusive offer <span className="text-red-600">-10% </span>off
              this week
            </h3>

            <a
              className="inline-block bg-white px-6 py-3 hover:bg-accent hover:text-white rounded-lg mt-4"
              href="#"
            >
              Shop Now
            </a>
          </div>
        </div>

        <div>
          <img
            className="ml-auto"
            src="https://1worldsync.com/wp-content/uploads/2023/04/Blog-HeroImage-Ebook-1-295x300.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
