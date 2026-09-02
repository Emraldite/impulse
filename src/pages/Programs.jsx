import programsData from '../data/programs.json';

export default function Programs() {
  const { group, private: privateLesson, groupPricing, privatePricing } = programsData;

  return (
    <main className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-navy mb-4 text-center">Our Programs</h1>
        <p className="text-xl text-gray-600 mb-12 text-center">
          Professional tennis instruction for all skill levels
        </p>

        {/* Group Lesson Pricing */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-navy mb-1">Group Lesson Pricing</h2>
          <p className="text-gray-600 mb-4">{group.description} — {groupPricing.duration}, {groupPricing.period.toLowerCase()}</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-4 py-3 text-left">Days / Week</th>
                  <th className="px-4 py-3 text-left">Classes / Month</th>
                  <th className="px-4 py-3 text-left">Monthly Tuition</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-surface hover:bg-black/10">
                  <td className="px-4 py-3 border-b font-semibold">Drop-in (1 class)</td>
                  <td className="px-4 py-3 border-b">1 class</td>
                  <td className="px-4 py-3 border-b font-semibold">${groupPricing.dropInPrice}</td>
                </tr>
                {groupPricing.plans.map((plan, i) => (
                  <tr key={i} className="bg-surface hover:bg-black/10">
                    <td className="px-4 py-3 border-b">{plan.daysPerWeek} day{plan.daysPerWeek > 1 ? 's' : ''}</td>
                    <td className="px-4 py-3 border-b">{plan.classesPerMonth} classes</td>
                    <td className="px-4 py-3 border-b font-semibold">${plan.price}/mo</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Private Lesson Pricing */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-navy mb-1">Private Lesson Pricing</h2>
          <p className="text-gray-600 mb-4">{privateLesson.description}</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-4 py-3 text-left"></th>
                  <th className="px-4 py-3 text-left">1 student (1h)</th>
                  <th className="px-4 py-3 text-left">2 students (1h)</th>
                  <th className="px-4 py-3 text-left">3 students (1h)</th>
                  <th className="px-4 py-3 text-left">1 student (0.5h)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-surface hover:bg-black/10">
                  <td className="px-4 py-3 border-b font-semibold">Single charge</td>
                  <td className="px-4 py-3 border-b">${privatePricing.rates[0].single}</td>
                  <td className="px-4 py-3 border-b">${privatePricing.rates[1].single}</td>
                  <td className="px-4 py-3 border-b">${privatePricing.rates[2].single}</td>
                  <td className="px-4 py-3 border-b">${privatePricing.rates[3].single}</td>
                </tr>
                <tr className="bg-surface hover:bg-black/10">
                  <td className="px-4 py-3 border-b font-semibold">Monthly charge</td>
                  <td className="px-4 py-3 border-b">${privatePricing.rates[0].monthly}</td>
                  <td className="px-4 py-3 border-b">${privatePricing.rates[1].monthly}</td>
                  <td className="px-4 py-3 border-b">${privatePricing.rates[2].monthly}</td>
                  <td className="px-4 py-3 border-b">${privatePricing.rates[3].monthly}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-2 italic">Trial lessons follow the single charge rate.</p>
        </section>

        <div className="bg-tennis-green/10 border border-tennis-green rounded-lg p-6">
          <h2 className="text-2xl font-bold text-navy mb-4">Payment Information</h2>
          <p className="text-gray-700">
            Payment is collected at the start of each session. 
            Please bring payment to your first lesson.
          </p>
        </div>
      </div>
    </main>
  );
}
