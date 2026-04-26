export default function PhotoPlaceholder({ name = "Photo" }) {
  return (
    <div className="bg-gradient-to-br from-tennis-green to-tennis-green-dark w-full h-64 rounded-lg flex items-center justify-center">
      <p className="text-white text-lg font-medium">{name} Coming Soon</p>
    </div>
  );
}