// BulletList.jsx
// Supports items as strings OR objects: { text: string, children?: [...] }
export default function BulletList({ items }) {
  if (!Array.isArray(items)) return null;

  return (
    <ul className="list-disc w-[40rem] mr-[8rem] px-5 py-1 space-y-2 text-gray-800 dark:text-gray-200 marker:text-violet-500">
      {items.map((item, idx) => {
        // Simple string/number item
        if (typeof item === "string" || typeof item === "number") {
          return (
            <li key={idx} className="leading-snug">
              {item}
            </li>
          );
        }

        // Object with nested children
        if (item && typeof item === "object") {
          return (
            <li key={idx} className="leading-snug">
              {item.text}
              {Array.isArray(item.children) && item.children.length > 0 && (
                <div className="mt-2">
                  <BulletList items={item.children} />
                </div>
              )}
            </li>
          );
        }

        // Fallback (unsupported item)
        return null;
      })}
    </ul>
  );
}
