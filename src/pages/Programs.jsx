import ProgramCard from '../components/ProgramCard';
import programsData from '../data/programs.json';

export default function Programs() {
  const { group, private: privateLesson } = programsData;

  const groupDetails = [
    `Up to ${group.maxStudents} students per class`,
    `Levels: ${group.levels.join(', ')}`,
    'Skill-level groupings',
    'Personalized attention',
  ];

  const privateDetails = [
    'One-on-one instruction',
    privateLesson.duration,
    'Tailored to your skill level',
    'Flexible scheduling',
  ];

  return (
    <main className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-navy mb-4 text-center">Our Programs</h1>
        <p className="text-xl text-gray-600 mb-12 text-center">
          Professional tennis instruction for all skill levels
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <ProgramCard
            title={group.title}
            description={group.description}
            details={groupDetails}
            price={group.pricing}
            note={group.note}
          />
          <ProgramCard
            title={privateLesson.title}
            description={privateLesson.description}
            details={privateDetails}
            price={privateLesson.pricing}
            note={privateLesson.note}
          />
        </div>

        <div className="bg-tennis-green/10 border border-tennis-green rounded-lg p-6">
          <h2 className="text-2xl font-bold text-navy mb-4">Payment Information</h2>
          <p className="text-gray-700">
            <strong>Cash-only payment.</strong> Payment is collected at the start of each session. 
            Please bring payment to your first lesson.
          </p>
        </div>
      </div>
    </main>
  );
}