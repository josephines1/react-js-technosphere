export default function PrimaryButtonLink({
  text = "",
  href = "",
  size = "medium",
  bold = false,
}) {
  return (
    <a
      href={href}
      className={`${size == "small" ? "text-sm md:text-md" : "md:text-lg"} ${
        bold ? "font-bold" : "font-medium"
      } bg-teal-500 hover:bg-teal-600 border-teal-500 hover:border-teal-600 text-white border-2 px-5 py-2 rounded-full w-fit transition-all`}
    >
      {text}
    </a>
  );
}
