import ContactForm from '../components/ContactForm';
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <main className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-navy mb-4 text-center">Contact Us</h1>
        <p className="text-xl text-gray-600 mb-12 text-center">
          Get in touch to book your first lesson
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="bg-surface border-2 border-gray-200 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-navy mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>

          <div>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-navy mb-4">Get in Touch</h2>
              <p className="text-gray-600 mb-4">
                Prefer to call? Reach us at:
              </p>
              <p className="text-gray-600 mb-4">+1 626 236-2902</p>
            </div>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-navy mb-4">Locations</h2>
              <p className="text-gray-600 mb-2"><strong>Fulshear High School:</strong> 9302 Charger Way, Fulshear, TX 77441</p>
              <p className="text-gray-600 mb-2"><strong>Tays Junior High:</strong> 26721 Hawks Prairie Blvd, Katy, TX 77494</p>
              <p className="text-gray-600 mb-2"><strong>Gene Tomas High School:</strong> 24945 Easton Ramsey Wy, Richmond, TX 77406</p>
            </div>
            <div>
              <Link
                to="/schedule"
                className="inline-block bg-navy hover:bg-navy-light text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                View Schedule
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}