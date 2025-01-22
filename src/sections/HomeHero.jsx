import PrimaryButtonLink from "../components/buttons/PrimaryButtonLink";
import SecondaryButtonLink from "../components/buttons/SecondaryButtonLink";

export default function HomeHero({ image = " " }) {
  return (
    <section id="hero">
      <div className="container px-4 mx-auto pt-32 pb-24 grid grid-rows-2 md:grid-cols-2 md:grid-rows-none items-center justify-between gap-12">
        <div className="box">
          <h1 className="font-bold text-3xl md:text-4xl/tight lg:text-5xl mb-4">
            Solusi Cerdas untuk{" "}
            <span className="text-teal-500 md:block">Dunia yang Terhubung</span>
          </h1>
          <p className="mb-6 text-base/8">
            Menghadirkan inovasi melalui layanan Software, IoT, dan Data untuk
            mempercepat transformasi digital bisnis Anda.
          </p>
          <div className="button-group flex items-center gap-4">
            <PrimaryButtonLink text="Hubungi Kami" href="#contact" />
            <SecondaryButtonLink text="Mulai Jelajahi" href="#about" />
          </div>
        </div>
        <div className="box">
          <img
            src={image}
            alt="Hero Image"
            className="w-[400px] md:w-auto block mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
