export default function TileLink({ item }) {
  return (
    <a
      href={item.href}
      className="social-box p-4 rounded-md hover:shadow-lg hover:text-amber-500 text-center min-h-[100px] flex flex-col items-center justify-center bg-white transition-all"
    >
      <i className={`text-4xl ${item.icon} mb-2`}></i>
      <p className="text-sm opacity-80">{item.text}</p>
    </a>
  );
}
