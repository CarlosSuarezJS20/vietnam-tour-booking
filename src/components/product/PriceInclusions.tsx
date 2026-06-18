import { FiCheck, FiX } from "react-icons/fi";

const INCLUDES = [
  "Transport: Vehicles during tour (Private or Join in Small Group tour), boat included in tour program",
  "Entrance fees included in tour program",
  "English speaking tour guide",
  "Hotels and cruises: 3★, request at a additional price — 4★, 5★",
  "Meals as indicated on tour program",
];

const EXCLUDES = [
  "Visa to Vietnam",
  "Early check-in and late check-out",
  "Meals not mentioned on tour program",
  "Drinks and personal expenses",
  "Bank fees relating to payment",
  "All others not clearly mentioned in the tour program",
];

const PriceInclusions = () => (
  <section className="max-w-3xl mx-auto px-6 pb-16">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Includes */}
      <div>
        <h3 className="text-base font-bold text-gray-900 font-sans mb-4">Tour Price Includes</h3>
        <ul className="space-y-3">
          {INCLUDES.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <FiCheck className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" />
              <span className="text-sm text-gray-600 font-sans">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Excludes */}
      <div>
        <h3 className="text-base font-bold text-gray-900 font-sans mb-4">Tour Price Excludes</h3>
        <ul className="space-y-3">
          {EXCLUDES.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <FiX className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-gray-600 font-sans">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default PriceInclusions;
