import { useState } from 'react';

export default function ScheduleTable({ schedule }) {
  const [selectedDay, setSelectedDay] = useState('All');

  const days = ['All', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  const filteredSchedule = selectedDay === 'All' 
    ? schedule 
    : schedule.filter(s => s.day === selectedDay);

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-6">
        {days.map((day) => (
          <button
            key={day}
            onClick={() => setSelectedDay(day)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              selectedDay === day
                ? 'bg-tennis-green text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {day}
          </button>
        ))}
      </div>

      {filteredSchedule.length === 0 ? (
        <p className="text-gray-500">No classes scheduled for this day.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="px-4 py-3 text-left">Day</th>
                <th className="px-4 py-3 text-left">Time</th>
                <th className="px-4 py-3 text-left">Location</th>
                <th className="px-4 py-3 text-left">Level</th>
                <th className="px-4 py-3 text-left">Coach</th>
              </tr>
            </thead>
            <tbody>
              {filteredSchedule.map((session, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="px-4 py-3 border-b">{session.day}</td>
                  <td className="px-4 py-3 border-b">{session.time}</td>
                  <td className="px-4 py-3 border-b">{session.location}</td>
                  <td className="px-4 py-3 border-b">{session.level}</td>
                  <td className="px-4 py-3 border-b">{session.coach}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}