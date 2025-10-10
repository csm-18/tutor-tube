// BulletList.jsx
// Supports items as strings or objects: { text: string, children?: [...] }

export default function BulletList({ items }) {
  if (!Array.isArray(items)) return null;

  return (
    <ul
      className="
        list-disc
        text-gray-800 dark:text-gray-100 marker:text-violet-500
        space-y-2
        leading-snug
        
        /* Responsive sizing & spacing */
        w-full sm:w-[22rem] md:w-[35rem] lg:w-[40rem]
        px-4 sm:px-6 md:px-8
        py-1
        mx-auto md:mr-[4rem] lg:mr-[8rem]
      "
    >
      {items.map((item, idx) => {
        // Simple string / number item
        if (typeof item === "string" || typeof item === "number") {
          return (
            <li key={idx} className="leading-snug">
              {item}
            </li>
          );
        }

        // Object item: can contain nested children
        if (item && typeof item === "object") {
          return (
            <li key={idx} className="leading-snug">
              {item.text}
              {Array.isArray(item.children) && item.children.length > 0 && (
                <div className="mt-2 ml-4 sm:ml-6">
                  <BulletList items={item.children} />
                </div>
              )}
            </li>
          );
        }

        // Fallback
        return null;
      })}
    </ul>
  );
}