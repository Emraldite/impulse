import ScheduleTable from '../components/ScheduleTable';
import scheduleData from '../data/schedule.json';

export default function Schedule() {
  return (
    <main className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-navy mb-4 text-center">Group Lessons</h1>
        <p className="text-xl text-gray-600 mb-4 text-center">
          Weekly recurring schedule
        </p>

        <div className="rounded-lg p-3 mb-2 text-center text-sm" style={{ backgroundColor: '#81c784', borderColor: '#4caf50', color: '#1a3a1a' }}>
          <strong>Temporary:</strong> Tays in the morning, Fulshear in the afternoon
        </div>

        <p className="text-sm text-gray-500 text-center mb-8">Winter: 5:30 PM - 7:30 PM &nbsp;|&nbsp; Summer: 6:00 PM - 8:00 PM</p>

        <ScheduleTable schedule={scheduleData.winter} />
      </div>
    </main>
  );
}
