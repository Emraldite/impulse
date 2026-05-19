const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export default function ScheduleTable({ schedule }) {
  const scheduleByDay = {};
  daysOfWeek.forEach(day => {
    scheduleByDay[day] = schedule.filter(s => s.day === day);
  });

  return (
    <div>
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
