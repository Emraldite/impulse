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

        {/* Head Coach */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-navy mb-6">Head Coach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div>
              {headCoach.photo ? (
                <img src={headCoach.photo} alt={headCoach.name} className="w-full h-80 object-cover rounded-lg" />
              ) : (
                <PhotoPlaceholder name={headCoach.name} />
              )}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-navy mb-3">{headCoach.name}</h3>
              <p className="text-gray-700 mb-4">{headCoach.bio}</p>
              {headCoach.philosophy && (
                <div className="bg-gray-50 border-l-4 border-tennis-green p-4 mb-4">
                  <p className="text-gray-700 italic">"{headCoach.philosophy}"</p>
                </div>
              )}
              {headCoach.certifications?.length > 0 && (
                <div>
                  <h4 className="font-bold text-navy mb-2">Certifications</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    {headCoach.certifications.map((cert, index) => (
                      <li key={index}>{cert}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Assistant Coaches */}
        <section>
          <h2 className="text-2xl font-bold text-navy mb-6">Assistant Coaches</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {assistantCoaches.map((coach, index) => (
              <div key={index} className="bg-surface border-2 border-gray-200 rounded-lg p-6 hover:border-tennis-green transition-colors">
                {coach.photo ? (
                  <img src={coach.photo} alt={coach.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                ) : (
                  <PhotoPlaceholder name={coach.name} />
                )}
                <h3 className="text-lg font-bold text-navy mb-2">{coach.name}</h3>
                <p className="text-gray-600 text-sm">{coach.bio}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
