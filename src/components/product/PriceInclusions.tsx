import { FiCheck, FiX } from "react-icons/fi";

const TOUR_INCLUDES = [
  "Transport: Vehicles during tour (Private or Join in Small Group tour), boat included in tour program",
  "Entrance fees included in tour program",
  "English speaking tour guide",
  "Hotels and cruises: 3★, request at a additional price — 4★, 5★",
  "Meals as indicated on tour program",
];

const TOUR_EXCLUDES = [
  "Visa to Vietnam",
  "Early check-in and late check-out",
  "Meals not mentioned on tour program",
  "Drinks and personal expenses",
  "Bank fees relating to payment",
  "All others not clearly mentioned in the tour program",
];

const CRUISE_INCLUDES = [
  "Welcome drinks",
  "Tourist sites entrance fee",
  "Experienced English speaking guide",
  "2 bottles of drinking water in cabin",
  "Free tea & café in breakfast",
  "Meals in tour: 01 lunch, 01 dinner, 01 breakfast and 01 brunch",
  "Kayaking or rowing boat",
  "Fish / squid fishing",
  "On Board Insurance",
];

const CRUISE_EXCLUDES = [
  "Round trip shuttle bus pick up & drop off in Hanoi Old Quarter area",
  "Massage service on board",
  "Other drinks, tips & personal expenses",
  "Visa, flight tickets & hotel room",
  "Surcharge tourist site ticket due to changes from government policy",
  "All services not mentioned in the inclusions",
  "Surcharges apply during Christmas, New Year's Eve, and Vietnamese Tet Holidays (Lunar New Year)",
];

interface Props {
  productType?: "tour" | "cruise";
}

const PriceInclusions = ({ productType = "tour" }: Props) => {
  const includes = productType === "cruise" ? CRUISE_INCLUDES : TOUR_INCLUDES;
  const excludes = productType === "cruise" ? CRUISE_EXCLUDES : TOUR_EXCLUDES;
  const label    = productType === "cruise" ? "Cruise" : "Tour";

  return (
    <section className="max-w-3xl mx-auto px-6 pb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-base font-bold text-gray-900 font-sans mb-4">{label} Price Includes</h3>
          <ul className="space-y-3">
            {includes.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <FiCheck className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600 font-sans">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-base font-bold text-gray-900 font-sans mb-4">{label} Price Excludes</h3>
          <ul className="space-y-3">
            {excludes.map((item, i) => (
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
};

export default PriceInclusions;
