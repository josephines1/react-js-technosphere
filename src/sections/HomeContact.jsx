import { useEffect, useRef, useState } from "react";
import TileLink from "../components/tiles/TileLink";

export default function HomeContact() {
  const [contacts, setContacts] = useState([]);
  const loaded = useRef(false);

  useEffect(() => {
    if (loaded.current === false) {
      fetch("/json/data.json")
        .then((response) => response.json())
        .then((data) => setContacts(data["contacts"]))
        .then(() => (loaded.current = true));
    }
  });

  return (
    <section id="contact">
      <div className="container px-4 mx-auto py-24 grid grid-rows-2 md:grid-cols-2 md:grid-rows-none items-center justify-between space-x-0 md:space-x-12">
        <div className="box">
          <h1 className="font-bold text-3xl md:text-4xl/tight lg:text-5xl mb-2">
            Siap{" "}
            <div className="inline-flex items-center">
              <span className="bar-underline">Mewujudkan Ide </span>
            </div>
            Anda?
          </h1>
          <p className="mb-8 text-base/loose">
            Jangan ragu untuk menghubungi kami untuk diskusi lebih lanjut atau
            konsultasi gratis.
          </p>
        </div>
        <div className="box grid grid-cols-2 grid-rows-2 gap-4">
          {contacts.map((contact) => (
            <TileLink item={contact} key={contact.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
