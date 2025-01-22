export default function HomeAbout({ image = " " }) {
  return (
    <section id="about">
      <div className="container py-12 md:py-24 px-4 mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-between space-x-0 md:space-x-12">
        <div className="box">
          <img
            src={image}
            alt="About Image"
            className="w-[400px] md:w-auto mx-auto hidden md:block"
          />
        </div>
        <div className="box">
          <h1 className="font-bold text-3xl md:text-4xl/tight lg:text-5xl mb-2 bar-underline">
            Tentang Kami
          </h1>
          <p className="mb-8 text-base/loose">
            Kami adalah perusahaan teknologi yang menggabungkan kekuatan
            Software, Internet of Things (IoT), dan Data untuk menciptakan
            solusi yang relevan dan berdaya saing. Dengan tim ahli di bidangnya,
            kami berkomitmen untuk memberikan solusi yang tidak hanya efisien
            tetapi juga mudah diterapkan dalam berbagai industri, dari
            manufaktur hingga layanan kesehatan.
          </p>
        </div>
      </div>
    </section>
  );
}
