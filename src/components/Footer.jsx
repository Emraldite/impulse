import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-navy text-white py-8 mt-auto">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold text-tennis-green mb-4">Houston Impulse Tennis</h3>
            <p className="text-gray-300">Professional tennis instruction. Small group and private lessons designed to build real technique and a love for tennis</p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/programs" className="text-gray-300 hover:text-tennis-green">Programs</Link></li>
              <li><Link to="/schedule" className="text-gray-300 hover:text-tennis-green">Schedule</Link></li>
              <li><Link to="/coaches" className="text-gray-300 hover:text-tennis-green">Coaches</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-tennis-green">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2">
              <p className="text-gray-300">hitallc20@gmail.com</p>
              <p className="text-gray-300">+1 626 236-2901</p>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Houston Impulse Tennis Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}