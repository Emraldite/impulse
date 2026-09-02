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
          
          <p className="text-gray-700 text-lg leading-relaxed text-center max-w-4xl mx-auto">
            At Houston Impulse Tennis Academy, our mission is to develop confident, skilled players by combining expert coaching with a passion for the game. Whether you're picking up a racket for the first time or sharpening your competitive edge, we provide a supportive environment where every player can grow, compete, and thrive.          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-surface">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-navy mb-8 text-center">Our Locations</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-surface p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold text-navy mb-4 flex flex-wrap gap-x-2">
                Fulshear High School
                <span className="text-sm font-normal text-gray-500 self-center">9302 Charger Way, Fulshear, TX 77441</span>
              </h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3465.7859618014527!2d-95.88906112457809!3d29.696984575100334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864122da44368879%3A0x77018c04b5fa8ac6!2sM4W7%2BF7%2C%209302%20Charger%20Way%2C%20Fulshear%2C%20TX%2077441!5e0!3m2!1sen!2sus!4v1778820460404!5m2!1sen!2sus"
                width="100%"
                height="299"
                className="rounded-lg"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Fulshear location"
              ></iframe>
            </div>
            
            <div className="bg-surface p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold text-navy mb-4 flex flex-wrap gap-x-2">
                Tays Junior High
                <span className="text-sm font-normal text-gray-500 self-center">26721 Hawk's Prairie Blvd, Katy, TX 77494</span>
              </h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.3396595560857!2d-95.82921872457645!3d29.738881575078878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864123efa45509a7%3A0x5b5a0519520e179d!2sJames%20and%20Sharon%20Tays%20Junior%20High%20School!5e0!3m2!1sen!2sus!4v1778820410860!5m2!1sen!2sus"
                width="100%"
                height="299"
                className="rounded-lg"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Tays location"
              ></iframe>
            </div>

            <div className="bg-surface p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold text-navy mb-4 flex flex-wrap gap-x-2">
                Gene Tomas High School
                <span className="text-sm font-normal text-gray-500 self-center">24945 Easton Ramsey Wy, Richmond, TX 77406</span>
              </h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3467.2579121817894!2d-95.80946949999999!3d29.680013100000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8641214ffa4786a3%3A0xee64bfbeda7c979b!2sGene%20Tomas%20High%20School!5e0!3m2!1sen!2sus!4v1788315916479!5m2!1sen!2sus"
                width="100%"
                height="299"
                className="rounded-lg"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Gene Tomas High School location"
              ></iframe>
              <p className="mt-2 text-center">
                <a href="https://maps.app.goo.gl/qWZgH7f2UxjjmrUM6?g_st=i&utm_campaign=ac-im" target="_blank" rel="noopener noreferrer" className="text-navy hover:underline text-sm">
                  Open in Google Maps
                </a>
              </p>
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