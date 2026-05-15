import { useState } from 'react';

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export default function ScheduleTable({ winter, summer }) {
  const [season, setSeason] = useState('winter');

  const currentSchedule = season === 'winter' ? winter : summer;
  const seasonTime = season === 'winter' ? '5:30 PM - 7:30 PM' : '6:00 PM - 8:00 PM';

  const scheduleByDay = {};
  daysOfWeek.forEach(day => {
    scheduleByDay[day] = currentSchedule.filter(s => s.day === day);
  });

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-6 justify-center">
        <span className="text-sm text-gray-500 self-center mr-2">Season:</span>
        <button
          onClick={() => setSeason('winter')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            season === 'winter'
              ? 'bg-tennis-green text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Winter (5:30 - 7:30)
        </button>
        <button
          onClick={() => setSeason('summer')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            season === 'summer'
              ? 'bg-tennis-green text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Summer (6:00 - 8:00)
        </button>
      </div>

      <div className="overflow-x-auto">
        <div className="grid grid-cols-7 gap-px bg-gray-300 min-w-[700px] rounded-lg overflow-hidden">
          {daysOfWeek.map(day => {
            const sessions = scheduleByDay[day];
            return (
              <div key={day} className="bg-surface min-h-[120px]">
                <div className="bg-navy text-white text-center font-semibold px-2 py-3 text-sm">
                  {day.slice(0, 3)}
                </div>
                <div className="p-2">
                  {sessions.length === 0 ? (
                    <p className="text-gray-400 text-xs text-center py-2">—</p>
                  ) : (
                    sessions.map((s, i) => (
                      <div
                        key={i}
                        className="bg-tennis-green/10 text-tennis-green-dark text-xs font-medium text-center rounded px-1 py-1.5 mb-1"
                      >
                        {s.class}
                      </div>
                    ))
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
