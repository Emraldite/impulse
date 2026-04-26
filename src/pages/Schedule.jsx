import ScheduleTable from '../components/ScheduleTable';
import scheduleData from '../data/schedule.json';

const combinedSchedule = [
  ...scheduleData.fulshear.map(s => ({ ...s, location: 'Fulshear' })),
  ...scheduleData.tays.map(s => ({ ...s, location: 'Tays' })),
];

export default function Schedule() {

  return (
    <main className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-navy mb-4 text-center">Class Schedule</h1>
        <p className="text-xl text-gray-600 mb-8 text-center">
          Weekly recurring schedule at both locations
        </p>

        <ScheduleTable schedule={combinedSchedule} />
      </div>
    </main>
  );
}