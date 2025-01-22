import { useEffect, useState, useRef } from "react";
import Card from "../components/cards/Card";

function HomeServices() {
  const [services, setServices] = useState([]);
  const loaded = useRef(false);

  useEffect(() => {
    if (loaded.current === false) {
      fetch("/react-js-technosphere/json/data.json")
        .then((response) => response.json())
        .then((data) => setServices(data["services"]))
        .then(() => (loaded.current = true));
    }
  });

  return (
    <section id="services">
      <div className="container px-4 mx-auto py-24">
        <h1 className="font-bold text-3xl md:text-4xl/tight lg:text-5xl mb-2 bar-underline mx-auto">
          Layanan
        </h1>
        <p className="mb-8 text-base/loose text-center">
          Temukan cara kami membantu Anda mencapai efisiensi, keamanan, dan
          pertumbuhan yang berkelanjutan.
        </p>
        <div className="services-container grid grid-flow-row lg:grid-cols-3 md:max-w-[80%] mx-auto lg:max-w-full gap-4">
          {services.map((service) => (
            <Card item={service} key={service.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeServices;
