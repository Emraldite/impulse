import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import PhotoPlaceholder from '../components/PhotoPlaceholder';

export default function Home() {
  return (
    <main>
      <Hero />

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-navy mb-8 text-center">Why Choose Us?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl mb-4"></div>
              <h3 className="text-xl font-bold text-navy mb-2">Expert Coaching</h3>
              <p className="text-gray-600">Learn from experienced coaches dedicated to helping you improve your game.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="text-4xl mb-4"></div>
              <h3 className="text-xl font-bold text-navy mb-2">Convenient Locations</h3>
              <p className="text-gray-600">Locations in Fulshear, Tays, and more to serve you better.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="text-4xl mb-4"></div>
              <h3 className="text-xl font-bold text-navy mb-2">Small Groups</h3>
              <p className="text-gray-600">Maximum # students per group class for personalized attention.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-navy mb-8 text-center">Our Locations</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold text-navy mb-4">Fulshear</h3>
              <p className="text-gray-600 mb-4">Fulshear, TX</p>
              <div className="h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Google Maps embed coming soon</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold text-navy mb-4">Tays</h3>
              <p className="text-gray-600 mb-4">Tays, TX</p>
              <div className="h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Google Maps embed coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-navy mb-4">Ready to Start?</h2>
          <p className="text-xl text-gray-600 mb-8">Contact us today to book your first lesson.</p>
          <Link
            to="/contact"
            className="inline-block bg-tennis-green hover:bg-tennis-green-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}