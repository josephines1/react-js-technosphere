export default function Card({ item }) {
  return (
    <div className="box box p-4 bg-white rounded-md shadow-lg">
      {item.img ? (
        <img
          src={item.img}
          alt={item.name}
          className="h-[200px] w-full object-cover rounded-md mb-4"
        />
      ) : item.icon ? (
        <i
          className={`${item.icon} text-amber-500 text-4xl md:text-6xl lg:text-8xl mx-auto block w-fit mb-2 md:mb-4`}
        ></i>
      ) : null}
      <h2 className="text-lg md:text-2xl font-medium mb-2 text-center">
        {item.name}
      </h2>
      <p className="text-center text-xs/loose opacity-60">{item.desc}</p>
    </div>
  );
}
