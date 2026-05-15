import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-navy to-navy-light text-white py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Houston Impulse Tennis Academy
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-6">
          Build Your Game. Build Your Confidence.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link
            to="/contact"
            className="bg-tennis-green hover:bg-tennis-green-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Get Started
          </Link>
          <Link
            to="/programs"
            className="border-2 border-tennis-green text-tennis-green hover:bg-tennis-green hover:text-navy px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            View Programs
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-navy/50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-tennis-green mb-2">Group Lessons</h3>
            <p className="text-gray-300">No experience needed to get started</p>
          </div>
          <div className="bg-navy/50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-tennis-green mb-2">Private Lessons</h3>
            <p className="text-gray-300">One-on-one focused training</p>
          </div>
          <div className="bg-navy/50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-tennis-green mb-2">For Every Player</h3>
            <p className="text-gray-300">Kids, teens, and adults welcome</p>
          </div>
        </div>
      </div>
    </section>
  );
}