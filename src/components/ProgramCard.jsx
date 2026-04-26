export default function ProgramCard({ title, description, details, price, note }) {
  return (
    <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-tennis-green transition-colors">
      <h3 className="text-2xl font-bold text-navy mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2 mb-4">
        {details.map((detail, index) => (
          <li key={index} className="flex items-center text-gray-700">
            <span className="text-tennis-green mr-2">✓</span>
            {detail}
          </li>
        ))}
      </ul>
      <p className="text-xl font-bold text-navy mb-2">{price}</p>
      {note && <p className="text-sm text-gray-500 italic">{note}</p>}
    </div>
  );
}