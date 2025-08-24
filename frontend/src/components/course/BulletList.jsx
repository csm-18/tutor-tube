export default function BulletList({ items }) {
  return (
    <ul className="list-disc w-[40rem] mr-[8rem] space-y-2 text-gray-800 dark:text-gray-200">
      {items.map((item, idx) => (
        <li key={idx} className="leading-snug">
          {item}
        </li>
      ))}
    </ul>
  );
}
