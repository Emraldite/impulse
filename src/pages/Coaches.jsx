import PhotoPlaceholder from '../components/PhotoPlaceholder';
import coachesData from '../data/coaches.json';

export default function Coaches() {
  const { headCoach, assistantCoaches } = coachesData;

  return (
    <main className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-navy mb-4 text-center">Our Coaches</h1>
        <p className="text-xl text-gray-600 mb-12 text-center">
          Meet the team dedicated to your success
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">Head Coach</h2>
            {headCoach.photo ? (
              <img src={headCoach.photo} alt={headCoach.name} className="w-full h-64 object-cover rounded-lg mb-4" />
            ) : (
              <PhotoPlaceholder name="Coach" />
            )}
            <h3 className="text-xl font-bold text-navy mb-2">{headCoach.name}</h3>
            <p className="text-gray-600 mb-4">{headCoach.bio}</p>
            {headCoach.certifications?.length > 0 && (
              <div className="mb-4">
                <h4 className="font-bold text-navy mb-2">Certifications</h4>
                <ul className="list-disc list-inside text-gray-600">
                  {headCoach.certifications.map((cert, index) => (
                    <li key={index}>{cert}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">Assistant Coaches</h2>
            <p className="text-gray-600 mb-4">{assistantCoaches}</p>
          </div>
        </div>
      </div>
    </main>
  );
}