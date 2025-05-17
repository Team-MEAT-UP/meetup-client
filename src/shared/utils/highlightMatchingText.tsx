export const highlightMatchingText = (text: string, query: string): (string | JSX.Element)[] => {
  if (!query) return [text];

  const parts = text.split(new RegExp(`(${query})`, "gi"));

  return parts.map((part, index) =>
    part.toLowerCase() === query.toLowerCase() ? (
      <span key={index} className="font-bold text-md text-gray-90">
        {part}
      </span>
    ) : (
      part
    )
  );
};
