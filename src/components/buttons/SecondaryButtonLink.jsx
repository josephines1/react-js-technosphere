export default function SecondaryButtonLink({ text = "", href = "" }) {
  return (
    <a
      href={href}
      className="border-teal-500 hover:border-teal-600 text-teal-500 border-2 px-5 py-2 rounded-full w-fit md:text-lg hover:bg-teal-600 transition-all hover:text-white font-medium"
    >
      {text}
    </a>
  );
}
