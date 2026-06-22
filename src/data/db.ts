// Mock in-memory database.
// Resolvers handle all joins between collections.

export const tourCategories = [
  { id: "1", slug: "private-tours", label: "Private Tours" },
  { id: "2", slug: "mature-travellers", label: "Mature Travellers" },
  { id: "3", slug: "luxury",        label: "Luxury Tours" },
  { id: "4", slug: "beach",         label: "Beach Holidays" },
  { id: "5", slug: "honeymoon",     label: "Honeymoon Tours" },
  { id: "6", slug: "family",        label: "Family Tours" },
  { id: "7", slug: "cultural",      label: "Cultural Tours" },
  { id: "8", slug: "group-tours",   label: "Small Group Tours" },
  { id: "9", slug: "day-trips",     label: "Day Trips" },
];

export const regions = [
  { id: "1", key: "north",   label: "North Vietnam",   image: "https://asiaeyestravel.com/uploads/source/nhung/mai-chau/thai-stil-house.webp" },
  { id: "2", key: "central", label: "Central Vietnam", image: "https://asiaeyestravel.com/uploads/source/blog/phuquoc/970x650/vietnam-beach-holiday-deals.webp" },
  { id: "3", key: "south",   label: "South Vietnam",   image: "https://asiaeyestravel.com/uploads/source/nhung/hue-sightseeing-with-ancient-costumes-with-ancient-costumes/vong-canh-hill.webp" },
];

export const cities = [
  // North
  { id: "1",  name: "Hanoi",            regionId: "1" },
  { id: "2",  name: "Ha Long Bay",      regionId: "1" },
  { id: "3",  name: "Ninh Binh",        regionId: "1" },
  { id: "4",  name: "Sapa",             regionId: "1" },
  { id: "5",  name: "Mai Chau",         regionId: "1" },
  { id: "6",  name: "Pu Luong",         regionId: "1" },
  { id: "7",  name: "Lan Ha Bay",       regionId: "1" },
  { id: "8",  name: "Bai Tu Long Bay",  regionId: "1" },
  { id: "9",  name: "Ha Giang",         regionId: "1" },
  { id: "10", name: "Cat Ba",           regionId: "1" },
  { id: "11", name: "Ba Be",            regionId: "1" },
  // Central
  { id: "12", name: "Hue",              regionId: "2" },
  { id: "13", name: "Hoi An",           regionId: "2" },
  { id: "14", name: "Da Nang",          regionId: "2" },
  { id: "15", name: "Phong Nha",        regionId: "2" },
  { id: "16", name: "Dong Hoi",         regionId: "2" },
  { id: "17", name: "Quang Tri",        regionId: "2" },
  { id: "18", name: "Tam Giang Lagoon", regionId: "2" },
  { id: "19", name: "Vinh Moc",         regionId: "2" },
  // South
  { id: "20", name: "Ho Chi Minh City", regionId: "3" },
  { id: "21", name: "Mekong Delta",     regionId: "3" },
  { id: "22", name: "Phu Quoc",         regionId: "3" },
  { id: "23", name: "Can Tho",          regionId: "3" },
  { id: "24", name: "Chau Doc",         regionId: "3" },
  { id: "25", name: "Ben Tre",          regionId: "3" },
  { id: "26", name: "Cai Be",           regionId: "3" },
  { id: "27", name: "Cu Chi Tunnels",   regionId: "3" },
  { id: "28", name: "Nha Trang",        regionId: "3" },
  { id: "29", name: "Con Dao",          regionId: "3" }
];

export const tours = [
  {
    id:          "1",
    title:       "15 Days Vietnam Highlights Journey for Mature Travellers",
    imageUrl:    "https://asiaeyestravel.com/uploads/source/nhung/15/lang.webp",
    description: `15 Days Vietnam Highlights Journey for Seniors is specially designed for senior travelers seeking comfort, culture, and unforgettable experiences. From Ho Chi Minh City and the peaceful Mekong Delta to Hoi An, Hue, Hanoi, Halong Bay, and Ninh Binh, every destination offers a perfect blend of scenery, history, and relaxation. ravel with Asia Eyes Travel and stay in carefully selected 4 or 5-star hotels, enjoy private guided tours, relaxed sightseeing, and a completely stress-free journey tailored for senior comfort.`,
    itinerary:   `Day 1:  Arrival in Ho Chi Minh City
Upon arrival at Tan Son Nhat International Airport , you will be welcomed by your Asia Eyes Travel guide and transferred to your hotel. Spend the remainder of the day at leisure to relax after your flight.
In the evening, enjoy a gentle stroll along Nguyen Hue Walking Street and soak up the lively atmosphere of Vietnam's largest city. Overnight in Ho Chi Minh City.
Suggested hotel:
5 -Star Hotel: Hotel Majestic Saigon or The Myst Dong Khoi or similar
Includes: Accommodation , airport transfer, private tour with English speaking guide. Excludes: Early check-in and meals.

Day 2:  Mekong Delta
08:00 AM: Asia Eyes Travel guide picks you up from your hotel. Depart for Ben Tre , the “land of coconuts” in the Mekong Delta , passing lush rice fields and countryside.
Board a boat to cruise tranquil waterways lined with coconut palms. Visit local villages and coconut candy workshops to see traditional handicrafts. Enjoy a sampan boat ride through narrow canals, taste tropical fruits, and listen to Southern Vietnamese folk music. Lunch at a riverside restaurant. Return to Ho Chi Minh City by late afternoon. Suggested hotel:
5 -Star Hotel: Caravelle Saigon, Hotel Nikko Saigon or similar
Includes: Accommodation with breakfast, private tour with an English speaking guide, entrance fees, lunch, boat trip, sampan ride, lunch Exclusions: Dinner and personal expenses.

Day 3:  Ho Chi Minh City Free Day
Today is entirely free for you to explore Ho Chi Minh City at your own pace. You may revisit Ben Thanh Market for shopping, relax at a café on Dong Khoi Street, or visit museums like War Remnants Museum.
Optional: Book a relaxing spa treatment or enjoy a memorable Saigon River dinner cruise in the evening. Your guide is available to help arrange activities. Check with the Asia Eyes Travel team for the best local experiences, dining recommendations, and exclusive evening tours to make the most of your time in Ho Chi Minh City.
Includes : Accommodation with breakfast. Excludes : Lunch, dinner, optional tours, entrance fees, personal expenses, tips, transfers

Day 4:  Ho Chi Minh City – Da Nang – Hoi An
Fly to Da Nang this morning. Upon arrival, transfer to charming Hoi An Ancient Town . After hotel check-in, join a leisurely walking tour through lantern-lit streets , historic merchant houses , and riverside cafés . The ancient town is pedestrian-friendly and flat. Enjoy free time in the evening to admire the town at its most magical when lanterns glow. Suggested hotel :
5 Star hotel: Four Seasons Resort The Nam Hai, Anantara Hoi An Resort... or similar
Includes : Accommodation with breakfast, domestic flight Hochiminh - Da Nang, private airport transfers Excludes : Lunch, dinner, personal expenses, tips

Day 5:  Hoi An Countryside Jeep Tour
From 07:30 AM , embark on an unforgettable Hoi An Countryside Jeep Adventure. This journey beyond the ancient town into the tranquil countryside, where emerald rice paddies, vegetable gardens, and picturesque rural landscapes reveal the authentic charm of central Vietnam.
Along the way, visit a local family farm and gain fascinating insights into traditional agricultural practices that have sustained generations. Meet local artisans and discover age-old crafts, including weaving, rice wine production, and woodcarving. You'll also learn how rural communities have embraced innovation through bird’s nest farming and aquaculture.
A highlight of the day is a delicious home-cooked lunch shared with a local family, offering a genuine cultural exchange and warm Vietnamese hospitality . After this enriching experience, return to Hoi An , bringing home wonderful memories of the countryside, its people, and their enduring traditions.
Includes : Accommodation with breakfast, private Jeep tour with English speaking guide, entrance fees, bottled water, lunch. Exclusions: Dinner and personal expenses.

Day 6:  Hoi An Leisure Day
Full day free at your own pace. You may relax at your resort, enjoy a spa treatment, or join an optional cooking class to learn Hoi An specialties. This flexible day is designed for mature travelers to recharge. Includes : Accommodation with breakfast Exclusions: Lunch, dinner and personal expenses.

Day 7: Hoi An – Hue by Heritage Train
This morning, transfer to Da Nang Railway Station for a scenic journey on the Heritage Train to Hue. The train winds along the stunning Hai Van Pass , offering panoramic views of Lang Co Bay and the East Sea . Enjoy large windows and comfortable seats as you cross one of Vietnam’s most beautiful coastal routes.
Arrive in Hue , Vietnam’s former imperial capital . Check in to your hotel and enjoy the evening free to stroll along the Perfume River banks. Suggested hotel :
5 Star hotel or similar: Azerai La Residence Hue / Pilgrimage Village Hue
Includes : Accommodation with breakfast, Heritage train ticket Da Nang–Hue, private transfers pick up and drop off train station. Excludes : Lunch, dinner, entrance fees, personal expenses, tips

Day 8:  Imperial Hue Heritage Tour
Discover the rich imperial heritage of Hue, the former royal capital of Vietnam. Begin your day with a visit to the magnificent Imperial City of Hue , a UNESCO World Heritage Site that served as the political and cultural center of the Nguyen Dynasty. Continue to the serene Tomb of Minh Mang , renowned for its harmonious architecture and beautiful natural surroundings, followed by the impressive Tomb of Khai Dinh , famous for its unique blend of Vietnamese and European architectural styles.
Enjoy a delicious local lunch at a traditional restaurant. Then arrive at the historic Thien Mu Pagoda , Hue’s most iconic landmark, featuring its elegant seven-story tower overlooking the river.
Return to your hotel in the late afternoon with unforgettable memories of Hue’s royal legacy, architectural treasures, and cultural charm.
Includes : Accommodation with breakfast, private tour with English speaking guide, entrance fees, lunch Exclusions: Dinner and personal expenses.

Day 9:  Hue fly to Hanoi
After breakfast, transfer to the airport for your short domestic flight to Hanoi , Vietnam’s vibrant capital city. Upon arrival, your Asia Eyes Travel guide and driver and guide will welcome you and transfer you to your hotel for check-in. In the afternoon, enjoy a leisurely exploration of Hanoi’s historic heart. Stroll around the picturesque Hoan Kiem Lake , a beloved symbol of the city, and visit the charming Ngoc Son Temple , located on a small island connected by the iconic red Huc Bridge.
Continue your walk through the elegant French Quarter, where tree-lined boulevards, colonial villas, and grand historic buildings reflect Hanoi’s unique blend of Eastern and Western influences. The evening is free for you to explore the lively Hanoi Old Quarter at your own pace. Wander through its bustling streets, discover local cafés and boutiques, or sample Hanoi’s famous street food specialties. Suggested Hotels:
5-Star Hotels: Sofitel Legend Metropole Hanoi, Capella Hanoi, or similar
Includes : Accommodation with breakfast, domestic flight Hue – Hanoi, private airport transfers, English-speaking guide. Excludes : Lunch, dinner, entrance fees, personal expenses.

Day 10:  Hanoi After Dark Discovery by Scooter
At 07:30 AM , your experienced guide and friendly female scooter riders will meet you at your hotel for an exciting evening adventure through the vibrant streets of Hanoi.
Your journey begins at Café Giang, t he birthplace of Hanoi’s legendary egg coffee. Sip this rich and creamy local specialty while learning about the family recipe that has been cherished for generations.
Continue to the elegant Hanoi Opera House, one of the city's finest examples of French colonial architecture.
Ride through bustling local markets where Hanoi residents shop for fresh produce and daily necessities, providing a fascinating glimpse into everyday life. Venture deeper into the city’s hidden alleys and narrow lanes, discovering old houses, vibrant neighborhoods, and authentic corners of Hanoi rarely visited by tourists. Visit key landmarks including Train Street, Ho Chi Minh Mausoleum (exterior), Huu Tiep Lake with its wartime B-52 wreckage, and the historic Long Bien Bridge, designed by the same company behind the Eiffel Tower . Snap memorable photos at this storied bridge that witnessed Vietnam’s struggles for independence.
As the evening unfolds, enjoy the lively atmosphere of the capital while gaining unique insights into Hanoi’s history, culture, and local lifestyle. Return to your hotel with unforgettable memories of one of Vietnam’s most captivating cities.
Includes: Accommodation with breakfast, private scooter tour with English-speaking guide, female scooter riders, egg coffee, entrance fees where applicable, streetfood.
Excludes: Dinner, drinks, gratuities, personal expenses.
Note: The Ho Chi Minh Mausoleum is viewed from the outside only during this tour. The itinerary may be adjusted depending on weather and traffic conditions to ensure the best possible experience.

Day 11:  Ninh Binh Excursion
Escape the bustle of Hanoi and journey to Ninh Binh, often referred to as the "Halong Bay on Land" for its spectacular limestone mountains, winding rivers, and peaceful countryside landscapes.
Upon arrival, visit the magnificent Trang An Landscape Complex , a UNESCO World Heritage Site renowned for its breathtaking natural beauty and cultural significance. Board a traditional sampan boat and glide along serene waterways that weave through dramatic limestone karsts, mysterious caves, and lush valleys. This tranquil boat journey offers some of the most stunning scenery in northern Vietnam.
After a delicious local lunch, continue to Hoa Lu Ancient Capital , the political center of Vietnam during the Dinh and Early Le Dynasties in the 10th and 11th centuries. Explore the historic temples dedicated to King Dinh Tien Hoang and King Le Dai Hanh while learning about an important chapter in Vietnam’s royal history.
In the late afternoon, return to Hanoi and enjoy the remainder of the evening at your leisure.
Overnight in Ninh Binh
Suggested Hotels:
5-Star Hotels: Emeralda Resort Ninh Binh, Vedana Resort Ninh Binh, or similar.
Includes: Accommodation with breakfast, private tour with English-speaking guide, entrance fees, boat trip, lunch.
Excludes: Dinner, drinks, personal expenses.

Day 12:  Ninh Binh Free Day
Enjoy a relaxing day at your own pace in the peaceful countryside of Ninh Binh. Surrounded by dramatic limestone mountains, lush rice fields, and tranquil waterways, today offers the perfect opportunity to unwind and experience the region's natural beauty.
You may choose to relax at your resort, enjoy its facilities, or explore the surrounding countryside independently.
Optional activities include cycling through picturesque villages, visiting local markets, discovering hidden temples and pagodas, or enjoying a traditional Vietnamese spa treatment.
For those seeking further exploration, optional excursions can be arranged to nearby attractions such as Tam Coc, Mua Cave, Bich Dong Pagoda, or Van Long Nature Reserve.
Spend the remainder of the day soaking in the serene atmosphere that makes Ninh Binh one of Vietnam’s most charming destinations.
Overnight in Ninh Binh.
Includes: Accommodation with breakfast.
Excludes: Lunch, dinner, optional activities, transportation, entrance fees, drinks, personal expenses.

Day 13:  Ninh Binh - Halong (Overnight in Cruise)
7:00 – 7:15 AM: Our driver will pick you up and transfer you to Halong Bay.
11:45 AM: Upon arrival in Halong, our cruise crew of Peony Cruise will welcome you on board for check-in and lunch, while you begin cruising to admire the beauty of Halong Bay and Lan Ha Bay .
In the afternoon, you will join various cruise activities such as kayaking, swimming, and cooking classes, among others
Enjoying the sunset party on board is a perfect moment for photography enthusiasts to capture the breathtaking sunset.
7:00 PM: You will enjoy a romantic dinner on the cruise.
Overnight on board.
Inclusions: Accommodation with breakfast, shuttle bus to Halong, entrance fees, lunch and dinner, English speaking guide in board, kayak or bamboo.
Exclusions: Drinks and personal expenses

Day 14: Halong - Hanoi
6:00 AM: In the morning, start your day with a relaxing Tai Chi session while enjoying the sunrise over the bay.
Afterward, enjoy breakfast on board as the cruise makes its way toward Gia Luận Pier . From there, you’ll take an excursion to the Cat Ba Biosphere Reserve , where you will visit the impressive Trung Trang Cave , known for its stunning stalactite formations and unique ecosystem.
After the exploration, return to the boat to check out and prepare your luggage. While cruising back, you’ll enjoy lunch on board before disembarking at Tuan Chau Marina.
11:30 – 12:00 PM: Upon disembarkation and transfer to Hanoi. Evening at leisure in the capital. Suggested hotel :
5 Star hotel: Sofitel Legend Metropole Hanoi, Capella Hanoi or similar
Includes : Breakfast, brunch on cruise, shuttle bus from Halong - HaNoi, accommodation. Excludes : Dinner, drinks, personal expenses

Day 15: Hanoi Departure
Enjoy your free time at leisure until your private transfer to Noi Bai International Airport for your departure flight. Depending on your flight schedule, you may choose to relax at the hotel, enjoy a final stroll through Hanoi’s charming streets, or do some last-minute shopping for souvenirs.
On behalf of Asia Eyes Travel , thank you for choosing us to accompany you on this special adventure. We wish you a pleasant journey home and look forward to welcoming you back to Vietnam in the future.
Includes : Breakfast and private airport transfer Excludes : Late check out, personal expenses.`,
    duration:    "15 Days/ 14 Nights",
    price:       2180,
    categoryIds:  ["1", "2"],
    cityIds:      ["2", "3", "1", "13", "12", "20"],
    featuredTour: true,
    onSale:       true,
    saleDiscountPercentage: 15,
  },
  {
    id:          "2",
    title:       "Authentic North Vietnam Tour 8 Days",
    imageUrl:    "https://asiaeyestravel.com/uploads/source/elite-2d1n.png",
    description: `Join Asia Eyes Travel on an incredible 8-day Authentic North Vietnam Tour and discover some of the most beautiful destinations in North Vietnam , including Hanoi , Mai Chau , Ninh Binh , and Ha Long Bay .
From the bustling streets and rich heritage of Hanoi to the peaceful countryside and ethnic villages of Mai Chau , this journey offers a perfect balance of cultural discovery and natural beauty. Continue exploring the stunning limestone landscapes and scenic waterways of Ninh Binh before relaxing on a luxury overnight cruise in the world-famous Ha Long Bay.
Carefully designed by Asia Eyes Travel, this 8-day private tour in North Vietnam combines comfort, authentic local experiences, breathtaking landscapes, and personalized service for an unforgettable journey through Northern Vietnam.`,
    itinerary:   `Day 1:  Hanoi Arrival - Welcome to Vietnam
Upon your arrival at Hanoi , Asia Eyes Travel's tour guide and driver will warmly welcome you at the airport and transfer you to your hotel in Hanoi Old Quarter . After check-in, enjoy free time to relax after your flight or explore the charming streets of Hanoi at your own pace.
Suggested hotels: 4-star or 5-star hotel on request
4★ Hanoi Tirant Hotel – 38 Gia Ngư Street, Hoàn Kiếm District, Hanoi – Tel: 024 6265 5999
5★ Apricot Hotel Hanoi – 136 Hàng Trống Street, Hoàn Kiếm District, Hanoi – Tel: 024 3828 9595
Includes: Accommodation, private transfer, tour guide Excludes: Meals, early check-in

Day 2:  Hanoi Excursion
Your first stop is the Ho Chi Minh Mausoleum Complex , followed by the Temple of Literature – Quoc Tu Giam, Vietnam’s first university, established in 1070. Surrounded by peaceful courtyards and traditional architecture, this historic site offers deep insight into Vietnam’s cultural and educational heritage.
Continue to the Vietnam Museum of Ethnology, one of the country’s most fascinating museums, where you can discover the traditions, cultures, and daily life of Vietnam’s diverse ethnic communities.
After lunch, visit Hoa Lo Prison, also known as the “Hanoi Hilton,” to learn about Vietnam’s colonial past and wartime history.
In the afternoon, return to your hotel in the late afternoon. Overnight in Hanoi.
Inclusions : Accommodation with breakfast, private tour with English speaking guide, entrance fees and lunch. Exclusions: Dinner and personal expenses.

Day 3:  Hanoi Free Day
Includes: Accommodation with breakfast Excludes: Lunch, dinner, and optional tours

Day 4:  Explore the Peaceful Valley of Mai Chau
After breakfast, depart from Hanoi for a scenic journey to Mai Chau Valley , a peaceful countryside region surrounded by lush green mountains and rice fields.
Along the way, enjoy the beautiful landscapes and stop at panoramic viewpoints to admire the rural scenery of Northern Vietnam. Upon arrival in Mai Chau, enjoy lunch at a traditional local restaurant.
In the afternoon, take a relaxing cycling tour through Mai Chau’s ethnic villages and rice fields. Ride along quiet countryside paths, pass traditional stilt houses, and experience the authentic daily life of the Thai ethnic people . The gentle pace of the tour allows you to fully enjoy the peaceful atmosphere and stunning natural scenery of the valley.
Later, check in at your hotel and enjoy free time to relax.
Overnight in Mai Chau.
Suggested hotels: 3-star or 4-star hotel on request
3★ Sol Bungalows Resort - Mai Hạ, Mai Châu, Phú Thọ - Tel: 0218 6548 709
4★ Mai Chau Ecolodge – Nà Chiềng, Mai Chau, Phu Tho – Tel: 0218 3819 888
Inclusions: Accommodation with breakfast, private tour with english speaking guide, entrance fees, lunch.
Exclusions: Dinner and personal expenses.

Day 5:  Mai Chau - Ninh Binh Discovery
After breakfast, say goodbye to the peaceful valley of Mai Chau and continue your journey to Ninh Binh , often known as “Halong Bay on land” thanks to its spectacular limestone karst landscapes and serene countryside scenery.
Upon arrival, visit the ancient capital of Hoa Lu, the former political center of Vietnam in the 10th century. Explore the historic temples dedicated to King Dinh and King Le, and learn more about the early history of the country.
Continue to Tam Coc for a relaxing boat trip along the peaceful river, passing through limestone caves, rice fields, and stunning rural landscapes.
Later, check in at your hotel and enjoy free time to relax in the tranquil atmosphere of Ninh Binh. Overnight in Ninh Binh.
Suggested hotels: 3-star or 5-star hotel on request
3★ Lalita Ninh Binh Resort
5★ Emeralda Resort Ninh Binh
Inclusions: Accommodation with breakfast, private transportation, English speaking guide, entrance fees, boat trip, and lunch. Exclusions: Dinner and personal expenses.

Day 6:  Ninh Binh – Halong Bay: Overnight Luxury Cruise
4★ Sena Cruises or similar – International Harbour, Tuan Chau, Ha Long, Quang Ninh – Tel: 0974 001 062
5★ Peony Cruise – 34 International Harbour, Tuan Chau, Ha Long, Quang Ninh – Tel: +84 935 946 688

Day 7:  Halong Bay - Hanoi
Wake up early to witness the magical sunrise over Ha Long Bay as the bay slowly comes to life in the soft morning light.
Start the day with a relaxing Tai Chi session on the sundeck or simply enjoy the peaceful atmosphere surrounded by limestone karsts and emerald waters.
After breakfast, continue cruising through the stunning landscape and visit one of the bay’s beautiful caves or floating fishing villages. (Depending on the cruise itinerary)
Return to the boat for brunch while the cruise slowly sails back toward the harbor.
Disembark around midday and transfer back to Hanoi . Upon arrival, check in at your hotel and enjoy free time to relax, explore the Old Quarter. Overnight in Hanoi.
Includes: Accommodation with breakfast, shuttle bus from Halong Bay to Hanoi, and brunch Excludes: Dinner and personal expenses

Day 8:  Hanoi Departure
After breakfast, enjoy your free time for shopping or simply relaxing and cherishing your final moments in Hanoi. At the scheduled time, our driver will transfer you to Noi Bai International Airport for your onward flight.
Asia Eyes Travel sincerely thanks you for choosing us for your North Vietnam 8-day tour. We are truly grateful for your trust, and it has been our honor to accompany you on this journey. We hope to welcome you, your family, and your friends again for another wonderful adventure in Vietnam.
Includes: Breakfast at the hotel and private transfer to the airport Excludes: Tour guide and late check-out
Note: If you would like to extend your trip to Central or Southern Vietnam, please do not hesitate to let us know.`,
    duration:    "8 Days/ 7 Nights",
    price:       680,
    categoryIds: ["1"],
    cityIds:     ["5", "2", "3", "1"],
    featuredTour: false,
    onSale:       true,
    saleDiscountPercentage: 15,
  },
  {
    id:          "3",
    title:       "North Vietnam Itinerary 7 Days",
    imageUrl:    "https://asiaeyestravel.com/uploads/source/nhung/mai-chau/thai-stil-house.webp",
    description: `Begin your Private North Vietnam Itinerary 7 Days with Asia Eyes Travel and discover the most captivating highlights of Northern Vietnam in comfort and style. This carefully curated journey takes you from the vibrant charm of Hanoi to the tranquil valleys of Mai Chau and the untouched beauty of Pu Luong Nature Reserve . Continue through the dramatic limestone scenery of Ninh Binh , and conclude with a luxurious overnight cruise in Ha Long Bay . Perfect for travelers seeking authentic culture, stunning landscapes, and a truly private, unforgettable Vietnam experience.`,
    itinerary:   `Day 1:  Welcome to Hanoi
Enjoy the rest of the day at your own pace, relax after your flight, sip traditional Vietnamese coffee at a local café, or take a leisurely stroll through the bustling streets of the historic Old Quarter.
Overnight in Hanoi .
4★ Hanoi Tirant Hotel – 38 Gia Ngư Street, Hoàn Kiếm District, Hanoi – Tel: 024 6265 5999
5★ Apricot Hotel Hanoi – 136 Hàng Trống Street, Hoàn Kiếm District, Hanoi – Tel: 024 3828 9595

Day 2:  Hanoi – Mai Chau: Valley of Peace
Arrive in the peaceful valley of lush rice paddies and traditional Thai ethnic villages. In the afternoon, enjoy cycling or walking through local hamlets, discovering rustic stilt houses and experiencing authentic countryside life.
Overnight in Mai Chau
4★ Mai Chau Ecolodge - Nà Chiềng, Mai Chau, Phu Tho - Tel: 0218 3819 888
5★ Avana Retreat - Xóm Pạnh, Bao La, Phu Tho - Tel: 0218 3819 868

Day 3:  Mai Chau – Pu Luong: Into the Hidden Gem
After a traditional local lunch, begin an easy trek through peaceful valley trails and authentic Thai ethnic villages. Along the way, admire terraced fields, interact with local villagers, and enjoy panoramic views of one of Northern Vietnam’s hidden gems. Visit bamboo water wheels and crystal-clear streams that reflect traditional farming life.
In the late afternoon, return to your lodge to relax in the tranquil atmosphere. Enjoy a local dinner before an overnight stay in the heart of Pu Luong Nature Reserve .
Includes : Eco-lodge or homestay with breakfast, private transfer, English-speaking guide, local guide, lunch, dinner Excludes : Personal expenses

Day 4:  Pu Luong – Ninh Binh: "Ha Long Bay on Land"
Later, travel to Ninh Binh , often called “Ha Long Bay on Land” for its dramatic limestone karsts and tranquil rivers. Upon arrival, explore stunning landscapes, hidden caves, and peaceful countryside scenery. Choose a sampan boat ride through Tam Coc or Trang An Scenic Landscape Complex , or visit ancient temples and pagodas rich in culture and history. Overnight in Ninh Binh.
Suggested hotels: 3-star or 5-star hotel on request
3★ Lalita Ninh Binh Resort
5★ Emeralda Resort Ninh Binh
Includes : Accommodation with breakfast, private transfer, English-speaking guide, lunch, entrance fees. Excludes : Dinner and personal expenses

Day 5:  Ninh Binh – Halong Bay: Overnight Luxury Cruise
Upon arrival, board your luxury overnight cruise and enjoy a welcome drink while sailing through breathtaking scenery. Savor a delicious onboard seafood lunch as the boat passes towering karsts and hidden islets.
In the afternoon, take part in kayaking, cave exploration, or relax on a quiet beach. Later, enjoy sunset views and a gourmet dinner featuring fresh local specialties. Spend the night in your private cabin surrounded by the magical beauty of the bay.
4★ Sena Cruises or similar – International Harbour, Tuan Chau, Ha Long, Quang Ninh – Tel: 0974 001 062
5★ Peony Cruise – 34 International Harbour, Tuan Chau, Ha Long, Quang Ninh – Tel: +84 935 946 688

Day 6:  Halong bay - Hanoi
Wake up early to witness a magical sunrise over Ha Long Bay , as the bay comes alive in soft morning light. Enjoy a Tai Chi session on the sundeck or relax amidst limestone karsts and emerald waters. After breakfast, continue cruising and visit a cave or floating fishing village, depending on the itinerary.
Return for brunch as the cruise sails back to the harbor, then transfer to Hanoi . Upon arrival, check in at your hotel and enjoy free time to explore the Old Quarter or discover Hanoi’s street food and café culture. Overnight in Hanoi.

Day 7:  Hanoi Departure
Enjoy your final morning in Hanoi with breakfast at the hotel and some free time to relax before your departure. At the scheduled time, our driver will provide a private transfer to Noi Bai International Airport for your onward flight.
Asia Eyes Travel sincerely thanks you for choosing us and looks forward to welcoming you again. If you wish to extend your trip, we are always happy to design more Vietnam tours for you.
Includes : Breakfast at hotel and private transfer to airport Excludes : Late check-out.`,
    duration:    "7 Days/ 6 Nights",
    price:       680,
    categoryIds: ["1"],
    cityIds:     ["6", "5", "2", "3", "1"],
    featuredTour: false,
    onSale:       true,
    saleDiscountPercentage: 15,
  },
  {
    id:          "4",
    title:       "North Vietnam tour 6 Days",
    imageUrl:    "https://asiaeyestravel.com/uploads/source/destinations/ninh-binh/tam-co-ninh-binh.webp",
    description: `Discover an unforgettable Northern Vietnam tour 6 Days with Asia Eyes Travel , starting in vibrant Hanoi with an exciting scooter street food tour . Continue to the peaceful countryside of Pu Luong Nature Reserve , famous for its rice terraces and traditional villages. Explore Ninh Binh , known as “Halong Bay on land,” with stunning limestone landscapes. End your adventure with a luxury cruise in Bai Tu Long Bay .`,
    itinerary:   `Day 1:   Arrival in Hanoi
Take your time to relax after your journey or enjoy a gentle walk around the city. Explore peaceful lakes, lively streets, and beautiful French colonial buildings that make Hanoi so special and full of charm.
Overnight in Hanoi
Suggested hotels: 4-star or 5-star hotel on request
4★ Hanoi Tirant Hotel – 38 Gia Ngư Street, Hoàn Kiếm District, Hanoi – Tel: 024 6265 5999
5★ Apricot Hotel Hanoi – 136 Hàng Trống Street, Hoàn Kiếm District, Hanoi – Tel: 024 3828 9595
Inclusions: Accommodation, private airport transfer with an English-speaking guide. Exclusions: Early check-in.

Day 2:   Hanoi Scooter Food Tour
After breakfast at your hotel, around 9:00 AM , our driver will pick you up to begin an exciting journey through Hanoi .
Experience Hanoi like a local on a fun scooter street food tour , riding through the lively Old Quarter and bustling backstreets. Along the way, you will taste famous Vietnamese dishes such as pho, bun cha, banh mi, and egg coffee , while discovering hidden street food spots loved by locals.
This is the perfect way to explore Hanoi’s culture, flavors, and vibrant daily life.
Overnight in Hanoi.
Inclusions: Accommodation with breakfast, scooter tour with street food, entrance fees, English-speaking guide.
Exclusions: Dinner and personal expenses.

Day 3:   Hanoi – Pu Luong Nature Reserve
At 8:00 AM, Asia Eyes Travel driver and tour guide will pick you up from Hanoi and begin a scenic journey to the peaceful Pu Luong Nature Reserve . Along the way, enjoy beautiful countryside views, mountains, and rural life of Northern Vietnam.
Upon arrival, discover Pu Luong’s untouched beauty, famous for its terraced rice fields, traditional Thai ethnic villages, bamboo forests, and hidden valleys. You will enjoy a light and relaxing trek through local villages, where you can experience authentic daily life and admire breathtaking natural scenery.
In the evening, relax and unwind at a comfortable eco-lodge surrounded by nature, fresh air, and peaceful mountain views.
Suggested hotel: Pu Luong Ecolodge
Inclusions: Breakfast with accommodation, private tour with English speaking tour guide, entrance fees and lunch
Exclusions: Dinner and personal expenses.

Day 4:  Pu Luong Nature Reserve – Ninh Binh (Hoa Lu & Trang An / Tam Coc)
Continue your journey with a peaceful boat trip in Trang An or Tam Coc, drifting through limestone caves and dramatic karst landscapes. In the afternoon, enjoy cycling through quiet villages and endless green rice fields, experiencing the charm of rural Vietnam.
Overnight in Ninh Binh
Suggested hotels: 3-star or 5-star hotel on request
3★ Lalita Ninh Binh Resort
5★ Emeralda Resort Ninh Binh
Inclusions: Breakfast with accommodation, private tour with English speaking tour guide, entrance fees and lunch
Exclusions: Dinner and personal expenses.

Day 5: Ninh Binh – Bai Tu Long Bay
After breakfast in Ninh Binh , around 7:30 AM, our driver and tour guide will pick you up and transfer you to Bai Tu Long Bay , where you will board a beautiful overnight cruise.
Enjoy a welcome lunch on board as you sail through thousands of limestone islands rising dramatically from emerald waters. In the afternoon, take part in exciting activities such as kayaking, swimming, or visiting floating fishing villages, or simply relax on the sundeck and admire the peaceful scenery.
As the sun sets, the bay transforms into a magical landscape of golden light and calm waters.
Suggested 4★ Cruises in Bai Tu Long Bay:
4★ Signature Cruise
Inclusions: Private transfer, cruise activities, entrance fees, all meals on board, English-speaking guide on board, luxury cruise cabin.
Exclusions: Beverages, spa treatments, tips, personal expenses.

Day 6:  Ha Long Bay – Hanoi Departure
Wake up early to enjoy the peaceful sunrise over the bay and fresh morning air. You may join cruise activities before enjoying brunch on board as the vessel gently sails back to the harbor. Upon disembarkation, our driver will transfer you to Hanoi Airport for your departure flight. Your tour ends with Asia Eyes Travel.
On behalf of Asia Eyes Travel, my name is Thuc Nguyen, and I would like to sincerely thank you for choosing us for your 6-day, 5-night holiday in Northern Vietnam . We hope to welcome you, your family, and your friends again on your next trip to Vietnam.
P.S. We would be delighted to continue being your trusted travel companion if you plan to explore Central or Southern Vietnam in the future.`,
    duration:    "6 Days / 5 Nights",
    price:       560,
    categoryIds: ["1"],
    cityIds:     ["8", "6", "2", "3", "1"],
    featuredTour: false,
    onSale:       true,
    saleDiscountPercentage: 15,
  },
  {
    id:          "5",
    title:       "5-Day South Vietnam Tour Package",
    imageUrl:    "https://asiaeyestravel.com/uploads/source/nhung/mekong-life/cu-chi.webp",
    description: `A 5-day South Vietnam tour package combines culture, history, and river life. Explore Ho Chi Minh City , the historic Cu Chi Tunnels , and enjoy a Mekong Delta cruise . Experience local cuisine and cultural activities with options for small group tours or private tours . Asia Eyes Travel offers well-designed itineraries with comfort, convenience, and local expertise, creating a balanced journey through southern Vietnam’s highlights for travelers seeking both discovery and relaxation.`,
    itinerary:   `Day 1:  Ho Chi Minh City Arrival
Upon arrival in Ho Chi Minh City, you will be warmly welcomed by Asia Eyes Travel and transferred to your hotel in the vibrant city center.
After check-in, enjoy free time to explore the city. In the evening, you may take a walk along Bui Vien Walking Street . Overnight in Ho Chi Minh City.
Inclusions: Accommodation, private airport transfer with an English-speaking tour guide. Exclusions: All meals, early check-in.

Day 2:  Cu Chi Tunnels & City Highlights
7:45 AM: Start your day with a visit to the legendary Cu Chi Tunnels , an underground network used during the Vietnam War. Explore hidden passages and learn about wartime history and survival.
Continue with a Ho Chi Minh City tour , visiting highlights such as the War Remnants Museum , Notre-Dame Cathedral , Central Post Office , and the Reunification Palace .
Enjoy lunch at a local restaurant before free time for shopping or exploration. Overnight in Ho Chi Minh City.
Inclusions: Accommodation with breakfast, transportation, entrance fees, English-speaking guide, lunch Exclusions: Dinner and personal expenses

Day 3:  Mekong Delta Full Day Trip
7:30 AM: Depart for a full-day trip to the lush Mekong Delta , often called the “rice bowl” of Vietnam. Cruise along scenic waterways, passing coconut groves and traditional villages, and visit local workshops to learn how coconut candy and handicrafts are made.
Enjoy a peaceful boat ride through palm-lined canals and experience authentic rural life with fresh tropical fruits. A local lunch with regional specialties is included, along with optional cycling or sampan rides. Return to Ho Chi Minh City in the afternoon.
Inclusions: Accommodation with breakfast, transportation, entrance fees, English-speaking guide, lunch Exclusions: Dinner and personal expenses

Day 4: Ho Chi Minh City – Free Day
Today is yours to fully enjoy with free time in Ho Chi Minh City . You can revisit your favorite attractions, explore hidden alleys, or join optional experiences such as a Vespa food tour or a street food tour .
Discover modern shopping malls, local boutiques, or relax at a rooftop café with panoramic city views. Culture lovers may visit museums or art galleries, while food enthusiasts can dive deeper into Vietnamese street food . This flexible day allows you to tailor your experience based on your interests, whether relaxation or exploration. Overnight in Ho Chi Minh City.
Inclusions: Accommodation with breakfast Exclusions: Lunch and dinner and personal expenses

Day 5: Ho Chi Minh City Departure
Enjoy your final morning with leisure time before check-out.
Depending on your flight schedule, you may have time for last-minute shopping or a short walk around the city.
Transfer to the airport for your onward journey, marking the end of your memorable South Vietnam tour . This trip combines history , culture , and local experiences , leaving you with lasting impressions of Vietnam’s vibrant south.
Inclusions: Accommodation with breakfast and private airport transfer. Exclusions: Late check-out.`,
    duration:    "5 Days/ 4 Nights",
    price:       450,
    categoryIds: ["1"],
    cityIds:     ["27", "21", "20"],
    featuredTour: false,
    onSale:       false,
    saleDiscountPercentage: null,
  },
  {
    id:          "6",
    title:       "South Vietnam Tour Package 4 Days",
    imageUrl:    "https://asiaeyestravel.com/uploads/source/blog/hcm/tour-xe-may-hcmcsaigon.jpg",
    description: `The South Vietnam Tour Package 4 Days highlights the best of Southern Vietnam from Ho Chi Minh City . Explore the city on a Saigon Vespa tour , visit the historic Cu Chi Tunnels , and enjoy a scenic Mekong Delta cruise with local villages and sampan rides. This itinerary blends culture , history , and authentic experiences for a short immersive journey. Asia Eyes Travel offers well-designed small group and private tours for a seamless travel experience.`,
    itinerary:   `Day 1:  Arrival in Ho Chi Minh City
Upon arrival in Ho Chi Minh City , you will be warmly welcomed by Asia Eyes Travel and transferred to your hotel in the vibrant city center.
After check-in, enjoy free time to relax or explore the city at your own pace. In the evening, you may stroll through Bui Vien Walking Street , famous for its lively nightlife and street atmosphere. Overnight in Ho Chi Minh City.
Inclusions: Accommodation, private airport transfer with an English-speaking tour guide. Exclusions: All meals, early check-in.

Day 2:  Cu Chi Tunnels Half-Day Trip
7:30 AM: Our tour guide and driver will pick you up from your hotel in Ho Chi Minh City and depart for the Cu Chi Tunnels .
Upon arrival, explore the famous Cu Chi Tunnels , one of the most important historical sites in Vietnam . This underground network played a key role during the Vietnam War , demonstrating the resilience and creativity of Vietnamese soldiers.
Discover hidden bunkers, crawl through narrow tunnels, and learn about wartime survival strategies. Visit exhibitions featuring weapons and reconstructed living areas.
This Cu Chi Tunnels tour offers a powerful and educational experience, combining history , culture , and a deeper understanding of Vietnam’s past.
1:30 PM: Return to your hotel in Ho Chi Minh City. In the afternoon, enjoy free time to explore the city or join an optional Vespa street food tour .
Inclusions: Accommodation with breakfast, transportation, entrance fees, English-speaking guide, lunch Exclusions: Dinner and personal expenses

Day 3: Day trip to Mekong Delta (My Tho - Ben Tre)
7:30 AM: Begin your journey to the stunning Mekong Delta , known as the “rice bowl” of Vietnam.
Travel through peaceful countryside and board a boat to explore winding waterways surrounded by coconut palms and traditional villages. Visit local workshops to see how coconut candy and handicrafts are made.
Continue with a relaxing sampan ride through narrow canals and enjoy fresh tropical fruits along the way. A traditional Vietnamese lunch with regional dishes is included before returning to Ho Chi Minh City in the afternoon.
Inclusions: Accommodation with breakfast, transportation, entrance fees, English-speaking guide, lunch. Exclusions: Dinner and personal expenses.

Day 4:  Ho Chi Minh Departure
Today is yours to relax and enjoy at leisure, with time for last-minute exploration before your departure. When ready, our driver will transfer you to the airport for your flight home or onward journey.
We hope you had a memorable experience with Asia Eyes Travel and look forward to welcoming you again for your next Vietnam adventure. Safe travels and thank you for choosing us.
Inclusions: Accommodation with breakfast and private airport transfer. Exclusions: Late check-out.`,
    duration:    "4 Days/ 3 Nights",
    price:       330,
    categoryIds: ["1"],
    cityIds:     ["27", "21", "20"],
    featuredTour: false,
    onSale:       false,
    saleDiscountPercentage: null,
  },
  {
    id:          "7",
    title:       "15 Days Vietnam Private Tour for Mature Travellers",
    imageUrl:    "https://asiaeyestravel.com/uploads/source/blog/phuquoc/970x650/vietnam-beach-holiday-deals.webp",
    description: `With private transfers, quality hotels, and gentle sightseeing, this tour is ideal for Vietnam tours for seniors , retiree travel packages , and slow travel Vietnam itineraries , offering a safe and relaxing journey across Vietnam.`,
    itinerary:   `Day 1:  Xin Chao Hanoi, Vietnam Arrival
Welcome to Hanoi, the cultural heart of Vietnam. Upon arrival at Noi Bai International Airport, you will be warmly welcomed by a private driver and guide from Asia Eyes Travel and transferred to your luxury hotel in the city center. After check-in, take time to relax and recover from your journey.
In the afternoon, enjoy an hour cyclo ride through the Old Quarter, followed by a relaxing traditional massage experience. The day ends with a welcome dinner hosted by our team, offering a great introduction to Vietnamese cuisine, culture, and your upcoming tour program, ensuring a smooth and enjoyable start to your journey.
Suggested hotels: 4-star or 5-star hotel on request
4★ Hanoi Tirant Hotel – 38 Gia Ngư Street, Hoàn Kiếm District, Hanoi – Tel: 024 6265 5999
5★ Apricot Hotel Hanoi – 136 Hàng Trống Street, Hoàn Kiếm District, Hanoi – Tel: 024 3828 9595
Inclusions: Accommodation, private airport transfer with an English Speaking guide, massage, and welcome dinner.
Exclusion: Early check-in, meals not mentioned

Day 2:   Hanoi Heritage Train Half-Day Tour
7: 45 AM: Begin a unique journey through Hanoi from a different perspective, slow travel , refined, and rich in cultural storytelling . The Hanoi Heritage Train (also known as the “Hanoi 5 Gates” train) is more than just transportation; it’s an immersive travel experience . Instead of rushing from one landmark to another, you’ll glide through the city’s stories, with live performances , craft demonstrations , and iconic scenery woven seamlessly into the journey.
Sit back, sip lotus tea , watch the Red River shimmer beneath Long Bien Bridge , and let the music and narratives unfold around you. This is a moving museum , where Hanoi culture , history , and contemporary spirit come alive in harmony. Designed with the concept of slow travel , the experience invites you not just to see, but to truly feel and connect with Vietnam heritage at a deeper level.
13:40 – 14:00 Return to Hanoi.
In the afternoon, you’ll have free time to explore the city at your own pace.
Includes: Accommodation with breakfast, train ticket, English Speaking guide and lunch. Excludes: Dinner and personal expensive

Day 3:   Hanoi – Free Day
Enjoy a relaxing and flexible day in Hanoi , ideal for unwinding at your own pace. Take time to recharge with a rejuvenating spa experience, discover the city’s vibrant café culture, or wander through the atmospheric streets of the Old Quarter , where history and local life blend seamlessly.
Optional experiences:
Hanoi Street Food Tours: 45 USD per person
Hanoi Scooter tours: 60 USD/ Pax
Hanoi Jeep Tours: 58 USD per person
Inclusions: Accommodation with breakfast. Exclusions: Lunch and dinner, spa treatments, optional tours, and personal expenses.

Day 4:  Hanoi - Ninh Binh
08:00 AM Your tour guide and driver will pick you up from your hotel in Hanoi for a scenic drive to Ninh Binh (90 km away). Visit Hoa Lu , Vietnam’s ancient capital , and explore the historic Dinh King Temple and Le King Temple dating back to the 10th century. Enjoy a Vietnamese lunch at a local restaurant. In the afternoon, visit Trang An , a UNESCO World Heritage Site , and take a sampan boat ride through limestone karsts , caves , and peaceful waterways . Overnight in Ninh Binh .
Suggested hotels: 3-star or 5-star hotel on request
3★ Lalita Ninh Binh Resort
5★ Emeralda Resort Ninh Binh
Includes : Accommodation with breakfast. lunch, private transfer, entrace fees and English Speaking guide
Excludes: Dinner and personal expense

Day 5:  Ninh Binh – Free Day
Enjoy a relaxing free day in Ninh Binh , where you can explore at your own pace and take in its natural beauty . Cycle through peaceful villages and rice paddies , visit the iconic Tam Coc , or hike up Mua Cave for stunning panoramic views of limestone mountains and rivers. You can also unwind at your hotel surrounded by nature. Don’t miss the chance to try local specialties like goat meat and crispy rice at nearby restaurants.
Inclusion: Accommodation with breakfast Excludes: Lunch, dinner, personal expenses, drinks.

Day 6:  Ninh Binh to Halong Bay (Overnight on Cruise)
After breakfast, your private car will pick you up for a scenic journey to Ha Long Bay , approximately 190 km from Hanoi.
Around 11:45 AM, arrive at Ha Long Bay and receive a warm welcome from the cruise crew before boarding. Enjoy a delicious lunch on board as the cruise sails through the breathtaking seascape.
In the afternoon, join activities such as kayaking , swimming , or relax on the sundeck while admiring the limestone islands , emerald waters , and the serene beauty of Ha Long Bay and Lan Ha Bay .
Spend the evening and overnight on the luxury cruise , immersing yourself in this UNESCO natural wonder .
4★ Sena Cruises or similar – International Harbour, Tuan Chau, Ha Long, Quang Ninh – Tel: 0974 001 062
5★ Peony Cruise – 34 International Harbour, Tuan Chau, Ha Long, Quang Ninh – Tel: +84 935 946 688
Inclusions: Accommodation with breakfast, lunch, dinner on cruise, 2 days 1 night on luxury cruise, English Speaking guide on boat; entrance fees; private transfer. Exclusions: Drinks and personal expenses.

Day 7:  Halong Bay to Hue – Flight to Central Vietnam
06:30 – 07:30 Start your morning with a breakfast on board while cruising through Ha Long Bay .
After breakfast, continue to enjoy relaxing cruise activities and admire the stunning limestone karsts and emerald waters . A delightful lunch on board will be served as the cruise sails through this breathtaking seascape.
11:50 Disembark and return to the harbor, then transfer to Hanoi Airport for your flight to Hue . Upon arrival at Phu Bai Airport , meet your guide and transfer to the historic city of Hue . Overnight in Hue .
Suggested hotels: 4 -star or 5-star hotel on request
4★ Senna Hue Hotel
5★ Silk Path Grand Hue Hotel
Inclusions: Accommodation with breakfast, lunch, domestic flight to Hue, private transfer. Exclusions: Dinner, drinks, and personal expenses.

Day 8:  Hue City Tour: Discover Imperial City, Tombs & Local Culture
Discover the charm of Hue on a full-day Hue City Tour , where history, culture, and imperial heritage blend beautifully. Visit Thien Mu Pagoda , set along the peaceful Perfume River, offering a serene and spiritual atmosphere. Continue to the royal tombs of the Nguyen Dynasty, including Minh Mang Tomb , known for its harmony with nature, and Khai Dinh Tomb , famous for its unique mix of Eastern and Western architecture and intricate decorations.
Inclusions: Accommodation with breakfast, lunch, entrance fees, private transfer and English Speaking guide Exclusions: Dinner, drinks and personal expenses.

Day 9:  Hue to Da Nang by Heritage Train: Scenic Coastal Journey
Travel from Hue to Hoi An aboard a scenic heritage train, one of the most memorable journeys in central Vietnam. Pass through rice fields, villages, and stunning coastline before crossing the famous Hai Van Pass , offering breathtaking sea views. Relax in comfort as landscapes change from mountains to beaches. Upon arrival in Da Nang, transfer to Hoi An. This journey perfectly combines relaxation, culture, and unforgettable scenery.
Suggested hotels: 4 -star or 5-star hotel on request
4★ Hoian Delicacy Hotel
5★ Palm Garden Resort
Inclusions: Accommodation with breakfast, private transfer, train ticket and English Speaking guide Exclusions: Lunch, dinner, drinks and personal expenses.

Day 10:  Hoi An Countryside Jeep Tour: Explore Rural Vietnam
Discover the charm of the countryside with an unforgettable Hoi An Jeep Tour , one of the most exciting ways to experience local life in central Vietnam. Travel beyond the old town through peaceful villages , lush rice fields , and scenic backroads, where authentic culture comes to life.
08:00 AM Your guide and vintage jeep pick you up in Hoi An, beginning a journey into the tranquil countryside. Pass coconut groves and rural landscapes, meet friendly locals, and enjoy delicious local cuisine along the way. This experience blends adventure , culture , and real Vietnamese life .
Inclusions: Accommodation with breakfast, private jeep car, lunch, and English Speaking guide
Exclusions: Dinner, drinks, and personal expenses.

Day 15:  Da Nang Departure – Farewell Vietnam
Today is all yours to relax and enjoy at your own pace. You might take a final stroll , spend some time by the beach , or simply unwind before your journey ahead. When it’s time, your driver will take you to the airport transfer for your onward flight, whether you’re heading home or continuing your travels.
We hope you’ve had a wonderful time exploring Vietnam with Asia Eyes Travel . It’s been a pleasure to accompany you on this journey , and we look forward to welcoming you back again in the future. Wishing you safe travels !
Includes : Breakfast and private airport transfer. Excludes: Late check-out`,
    duration:    "15 Days/ 14 Nights",
    price:       1680,
    categoryIds: ["1", "2"],
    cityIds:     ["2", "3", "1", "13", "12"],
    featuredTour: false,
    onSale:       false,
    saleDiscountPercentage: null,
  },
  {
    id:          "8",
    title:       "Luxury Vietnam Tour 10 Days for Mature Travellers",
    imageUrl:    "https://asiaeyestravel.com/uploads/source/blog/halong/cruise/seastars/sea-stars-cruise-halong.webp",
    description: `Asia Eyes Travel offers a Luxury Vietnam Tour 10 Days for Seniors, a private and slow-paced journey designed for comfort and relaxation. Explore Hanoi , peaceful Ninh Binh , enjoy a luxury overnight cruise in Ha Long Bay , then continue to Hue and the charming town of Hoi An . A highlight is the Heritage Train from Hue to Da Nang with stunning coastal views. The tour includes 5-star hotels , private transfers, and gentle sightseeing for a safe Vietnam experience.`,
    itinerary:   `Day 1:  Xin Chao Hanoi, Vietnam Arrival
Welcome to Hanoi , the cultural heart of Vietnam. Upon arrival at Noi Bai International Airport , the Asia Eyes Travel team will warmly welcome you and transfer you to a 5-star luxury hotel in the city center of Hanoi. After check-in, you will have time to rest and recover after your journey.
In the late afternoon, we will take you for a relaxing spa and massage experience, followed by a welcome dinner introducing you to authentic Vietnamese cuisine in a comfortable and elegant setting.
Suggested hotel: Melia Hotel Hanoi
Inclusions: Private airport transfer, 5-star hotel in Hanoi, English-speaking guide, dinner Exclusions: Meals not mentioned, early check-in

Day 2:  Hanoi Sightseeing Tour
Our Asia Eyes Travel guide and driver will pick you up at your hotel in Hanoi to begin a full-day city exploration of Vietnam’s capital.
Start your journey at the Ho Chi Minh Mausoleum Complex , a major national landmark that includes the Presidential Palace and Ho Chi Minh’s Stilt House, offering deep insight into the life and legacy of Vietnam’s beloved leader.
Continue to the Temple of Literature – Quoc Tu Giam , Vietnam’s first university, dedicated to Confucius and ancient scholars, featuring elegant traditional architecture and peaceful gardens.
Next, visit the Vietnam Museum of Ethnology , where you will discover the cultural heritage, traditions, and daily life of Vietnam’s 54 ethnic groups through both indoor and outdoor exhibits.
Enjoy a delicious Vietnamese lunch at a selected local restaurant in Hanoi .
In the afternoon, explore the historic Hoa Lo Prison (Hanoi Hilton) to learn about Vietnam’s colonial past and wartime history through powerful preserved exhibits and stories.
End the day with a relaxing cyclo ride through Hanoi’s Old Quarter , discovering narrow streets, colonial architecture, bustling markets, and authentic local life.
Includes: Accommodation with breakfast, lunch, private transfer, English-speaking guide, entrance fees Excludes: Dinner and personal expenses

Day 3:  Ninh Binh Tour: Nature & Heritage Experience
Continue to the UNESCO-listed Trang An Landscape Complex , where you will enjoy a peaceful boat trip through spectacular limestone karsts, caves, and calm waterways. This relaxing sampan ride is ideal for seniors as it requires minimal effort while offering breathtaking scenery.
In the late afternoon, check in to your luxury resort in Ninh Binh and relax in a peaceful natural setting surrounded by mountains and rice fields. The day focuses on cultural discovery, scenic landscapes, and a slow-paced travel experience.
Suggested hotel: Emeralda Resort Ninh Binh
Includes: Accommodation with breakfast, lunch, private transfer, English-speaking tour guide, entrance fees Excludes: Dinner and personal expenses

Day 4:  Ninh Binh – Bai Tu Long Bay Luxury Overnight Cruise
After breakfast, travel by private transfer to the iconic Ha Long Bay , one of Vietnam’s most stunning natural wonders. Upon arrival, board your 4–5-star luxury cruise and enjoy a welcome drink while settling into your elegant cabin.
Cruise through the emerald waters of Ha Long Bay , surrounded by dramatic limestone karsts and breathtaking seascapes. Enjoy a gourmet lunch on board as you begin your relaxing journey.
Spend the afternoon at your own pace—relax on the sundeck, admire the scenery from your private balcony cabin, or join optional onboard activities for light exploration and leisure.
In the evening, enjoy a fine dining experience on board, featuring delicious cuisine served in a peaceful and romantic atmosphere surrounded by spectacular views of the bay.
Suggested Cruise: Overnight 2 days 1 night on Grand Pioneers Halong Bay Cruise
Includes: 2-day, 1-night cruise, private transfer, English-speaking tour guide on board, meals on board, cruise activities Excludes: Drinks and personal expenses
Note: All itineraries in the Ha Long Bay region are subject to change depending on the specific cruise program, weather conditions, tidal levels, and local authority regulations without prior notice.

Day 5:  Halong Bay, Hanoi and Fly to Hue
Start your day with a gentle Tai Chi session on the sundeck, followed by breakfast while cruising through the breathtaking Ha Long Bay . Enjoy the peaceful scenery of limestone karsts and emerald waters before a relaxed brunch onboard.
After disembarkation, transfer directly to Hanoi Airport for your flight to Hue . Upon arrival, meet your driver and transfer to your luxury hotel in Hue , where you can relax and unwind after the journey.
This day is designed for smooth travel, comfort, and seamless transitions, ensuring a stress-free experience, especially suitable for senior travelers.
Overnight in Hue City at Senna Hue Hotel
Includes: Cruise with breakfast, lunch, private transfer, flight ticket to Hue Excludes: Dinner, drinks, and other personal expenses

Day 6:  Hue City Tour – Culture & Tranquility
Start with a peaceful boat trip on the Perfume River to visit the iconic Thien Mu Pagoda . Continue to the UNESCO-listed Imperial Citadel of Hue , then explore royal heritage sites including Khai Dinh Tomb and Minh Mang Tomb .
Visit the vibrant Dong Ba Market , where you can experience local life and shop for traditional products, before enjoying authentic Hue cuisine for lunch.
In the afternoon, you are free to explore Hue City at your own pace.
Suggested hotel: Senna Hue Hotel
Includes: Accommodation with breakfast, lunch, private tour with English-speaking guide, entrance fees Excludes: Dinner, drinks, and other personal expenses

Day 7: Hue - Danang By Heritage Train – Hoi An Free
Upon arrival in Da Nang , continue by private transfer to Hoi An Ancient Town and check in to your luxury resort. The rest of the day is free at leisure to relax or explore the charming streets of Hoi An at your own pace.
Suggested hotel: Royal Hoi An
Inclusions: Accommodation with breakfast, train ticket, private transfers Exclusions: Dinner, drinks, and other personal expenses

Day 8: Hoi An Jeep Tour: Countryside Experience
Meet local farmers, observe traditional farming, and learn about daily life in Central Vietnam. Continue to craft villages where locals produce rice paper, pottery, and woven mats, offering an authentic cultural experience.
Enjoy a lunch at a local family home , where you will taste traditional Vietnamese dishes and experience genuine local hospitality.
Stop at beautiful countryside spots for photos and enjoy the fresh air. Depending on the route, you may also visit coastal areas near Hoi An , including fishing villages and beaches.
After the tour, return to Hoi An and enjoy free time to relax or explore the ancient town.
Inclusions: Accommodation with breakfast, train ticket, private Jeep car, entrance fees and lunch at local family Exclusions: Dinner, drinks, and other personal expenses

Day 9: Hoi An – Free & Leisure
Enjoy a full day at leisure in Hoi An Ancient Town , a UNESCO World Heritage Site known for its timeless charm and tranquil atmosphere. This is your opportunity to slow down and experience the destination at your own pace.
Relax at your luxury resort, indulge in spa treatments, or take a gentle stroll through lantern-lit streets, discovering boutique shops, cafés, and hidden corners of this enchanting town.
This day is dedicated to rest, relaxation, and personal exploration, allowing you to fully embrace the peaceful rhythm and cultural beauty of Hoi An .
Inclusions: Accommodation with breakfast Excludes: Lunch, dinner, drinks, and other personal expenses

Day 10:  Danang Departure
Enjoy a relaxed morning before your private transfer to Da Nang International Airport . Your luxury Vietnam journey comes to an end, leaving you with unforgettable memories of culture, stunning scenery, and comfortable experiences, perfectly designed for a senior-friendly travel style.
On behalf of Asia Eyes Travel , I am Thuc Nguyen. I would like to sincerely thank you for choosing us for your special holiday in Vietnam. We hope to welcome you again on your next journey.
Inclusions: Breakfast, private airport transfer Excludes: Late check-out
Note: If you wish to enjoy more time in the charming town of Hoi An or continue exploring the vibrant beauty of Southern Vietnam, we highly recommend discovering our carefully designed Ho Chi Minh City Tours .`,
    duration:    "10 Days/ 9 Nights",
    price:       1680,
    categoryIds: ["1", "2", "3"],
    cityIds:     ["2", "3", "1", "14", "13", "12"],
    featuredTour: false,
    onSale:       false,
    saleDiscountPercentage: null,
  },
  {
    id:          "9",
    title:       "Vietnam Beach Vacation Package 16 Days",
    imageUrl:    "https://asiaeyestravel.com/uploads/source/blog/phuquoc/phu-quoc-family-tour-guide.webp",
    description: `Discover the ultimate Vietnam beach vacation package 16 days , combining culture, nature, and beaches from North to South Vietnam. This journey covers top destinations including Hanoi , the peaceful beauty of Ninh Binh , the stunning Lan Ha Bay and Ha Long Bay (2 nights cruise) , the charming Hoi An Ancient Town , and the tropical paradise of Phu Quoc Island .
Enjoy a perfect balance of sightseeing, adventure, and beach relaxation , with unforgettable experiences throughout the trip. This 16-day Vietnam itinerary is ideal for travelers seeking a complete and memorable holiday with Asia Eyes Travel .`,
    itinerary:   `Day 1 Hanoi Arrival
Arrive in Hanoi , the capital of Vietnam. Asia Eyes Travel warmly welcomes you and transfers you to your hotel for check-in . Enjoy free time to relax or explore the vibrant Old Quarter , followed by a welcome dinner . Overnight in Hanoi .
Includes: Accommodation, private transfer, tour guide Excludes: Early check-in

Day 2:  Hanoi Jeep Tour
Enjoy an exciting Hanoi Jeep Tour , one of the best ways to explore the city’s hidden gems and local life . Visit iconic attractions such as Long Bien Bridge , Huu Tiep Lake , Train Street , and bustling local markets. Along the way, experience authentic Hanoi street food and discover the rich culture, history, and daily life of Vietnam’s capital, Hanoi . This immersive journey offers a unique perspective of the city beyond the typical tourist routes. Overnight in Hanoi.
Includes: Accommodation with breakfast, Jeep car, tour guide, entrance fees, lunch and drinks Excludes: Dinner

Day 3: Hanoi Free Day
Enjoy a free day in Hanoi at your own pace. You can go shopping , explore famous attractions, relax in local cafés , or join optional tours to discover more of the city’s culture and history . This is a great opportunity to experience the charm of Vietnam’s capital in your own way. Whether you prefer sightseeing or leisure , Hanoi offers plenty of activities to enjoy. Overnight in Hanoi.
Optional: A photo tour in Hanoi is available on request.

Day 4:  Hanoi - Ninh Binh
At 8:00 AM , enjoy a private car transfer from Hanoi to Ninh Binh , famously known as “Halong Bay on land.” Explore the historic Dinh and Le Temples , take a peaceful boat trip in Tam Coc surrounded by limestone mountains and rice fields, and hike to the Mua Cave Viewpoint for stunning panoramic views. This journey offers a perfect blend of culture, nature, and adventure . Overnight in Ninh Binh.
Includes: Accommodation with breakfast, private transfer, tour guide, entrance fees, lunch Excludes: Dinner

Day 5: Ninh Binh Free Day
Enjoy a free day in Ninh Binh at your own pace. You can relax , explore the peaceful countryside, visit traditional villages and ancient temples , or enjoy a scenic cycling tour through rice fields and limestone landscapes. This is a perfect opportunity to experience the natural beauty of Ninh Binh , often called “Halong Bay on land.” Overnight in Ninh Binh.
Includes: Accommodation with breakfast Excludes: Lunch and dinner

Day 6:  Ninh Binh - Lan Ha Bay
Transfer from Ninh Binh to Lan Ha Bay and board a luxury cruise to begin your journey through one of Vietnam’s most stunning seascapes. Enjoy a delicious lunch on board while sailing through breathtaking limestone formations and emerald waters . In the afternoon, take part in exciting activities such as kayaking and swimming , or simply relax and admire the peaceful scenery. Overnight on the cruise.
Includes: Accommodation, kayaking, tour guide on boat, meals on boat Excludes: Drinks

Day 7: Discover Lan Ha Bay
Wake up surrounded by the breathtaking scenery of Lan Ha Bay and enjoy a peaceful morning on the cruise. Continue exploring the bay with activities such as kayaking , visiting the traditional Viet Hai Village , and swimming in crystal-clear waters. This immersive experience offers a perfect blend of nature, culture, and relaxation . Overnight on the cruise.
Includes: Accommodation, day boat trip, bicycle in Viet Hai Village, tour guide, meals on boat Excludes: Drinks

Day 8:  Lan Ha Bay – Ha Long Bay – Fly to Hoi An
Enjoy your final morning cruising through the breathtaking waters of Ha Long Bay and Lan Ha Bay, surrounded by stunning limestone formations. After brunch on board, return to the harbor and transfer to Da Nang Airport for your flight, followed by a transfer to Hoi An Ancient Town . Upon arrival, check in at your hotel and relax. Overnight in Hoi An.
Includes: Private transfer, accommodation with breakfast and lunch Excludes: Dinner

Day 9:  Hoi An Jeep Tour
Enjoy an exciting Hoi An Jeep Tour to explore the beautiful countryside surrounding the ancient town. Travel through peaceful rice fields , traditional villages , and local handicraft workshops , experiencing authentic rural life in Central Vietnam. This journey offers a unique blend of culture, nature, and local experiences in Hoi An. Overnight in Hoi An.
Includes: Accommodation, jeep with driver, tour guide, lunch and drinks Excludes: Dinner

Day 10/11: Hoi An Free Days
Enjoy free days in Hoi An at your own pace. Relax at nearby beaches such as An Bang Beach , wander through the charming Hoi An Ancient Town , or shop for tailor-made clothing and souvenirs . You may also join optional activities such as a Vietnamese cooking class , cycling tours , or boat rides along the river . These days offer the perfect balance of relaxation, culture, and local experiences . Overnight in Hoi An.
Includes: Accommodation with breakfast Excludes: Lunch and dinner

Day 12:  Hoi An - Danang - Fly to Phu Quoc
Transfer to Da Nang Airport for your flight to Phu Quoc Island , Vietnam’s tropical paradise known for its white sandy beaches and crystal-clear waters . Upon arrival, you will be transferred to your hotel for check-in and relaxation . Enjoy the rest of the day at leisure, exploring the island or unwinding by the beach. Overnight in Phu Quoc .
Includes: Accommodation with breakfast, private transfer (pick-up and drop-off) Excludes: Lunch and dinner

Day 13 -15: Phu Quoc Free Days
Enjoy free days in Phu Quoc Island , Vietnam’s tropical paradise. Relax on beautiful white-sand beaches , go snorkeling in crystal-clear waters, or join exciting island-hopping tours to explore nearby islets. You can also unwind at luxury resorts, enjoy fresh seafood, or discover local markets and sunset spots around the island. These days offer the perfect balance of relaxation, adventure, and natural beauty in Phu Quoc . Overnight in Phu Quoc .
Includes: Accommodation with breakfast
Excludes: Lunch and dinner

Day 16:  Phu Quoc Departure
Enjoy free time until your private transfer to Phu Quoc Airport for your departure flight. This marks the end of your unforgettable Vietnam beach holiday with Asia Eyes Travel . Thank you for traveling with us, and we hope to welcome you again on your next journey. Safe travels and see you next time!`,
    duration:    "16 Days 15 Nights",
    price:       2680,
    categoryIds: ["4"],
    cityIds:     ["2", "3", "1", "13", "22"],
    featuredTour: false,
    onSale:       false,
    saleDiscountPercentage: null,
  },
  {
    id:          "10",
    title:       "Northern Vietnam Itinerary 6 Days",
    imageUrl:    "https://asiaeyestravel.com/uploads/source/blog/hanoi/hanoi-jeep-tours-b-52.jpg",
    description: `This Northern Vietnam itinerary 6 days is a perfect journey to explore the highlights of Northern Vietnam , including the vibrant capital Hanoi , the stunning landscapes of Ninh Binh , and the world-famous Halong Bay cruise experience . Discover rich culture, breathtaking nature, and authentic local life as you travel through some of the most iconic destinations in Vietnam. This 6-day Vietnam travel itinerary offers the ideal combination of culture, adventure, and relaxation , making it perfect for first-time visitors and nature lovers alike.`,
    itinerary:   `Day 1: Hanoi Arrival
Arrive in Hanoi , the cultural capital of Vietnam . You will be warmly welcomed by your Asia Eyes Travel tour guide and transferred to your hotel for check-in .
Enjoy free time to relax or explore the Hanoi Old Quarter , taste local street food , and experience the vibrant atmosphere of the city . Overnight in Hanoi .
Includes: Accommodation, private transfer, tour guide Excludes: Early check-in

Day 2:  Hanoi Jeep Tour
Join an exciting Hanoi Jeep Tour to explore the hidden gems of the city . Visit iconic landmarks such as Long Bien Bridge , Huu Tiep Lake , Train Street , local markets , and traditional areas . Enjoy authentic Vietnamese food and drinks along the way. Overnight in Hanoi .
Includes: Accommodation, jeep with driver, tour guide, lunch and drinks Excludes: Dinner

Day 3: Hanoi - Ninh Binh
Travel to Ninh Binh , known as “Halong Bay on land.” Visit Trang An Scenic Landscape Complex or Tam Coc , enjoy a peaceful boat trip through limestone mountains , and explore the Mua Cave viewpoint for panoramic views . Overnight in Ninh Binh .
Includes: Accommodation, day trip, tour guide, entrance fees, lunch Excludes: Dinner

Day 4:  Ninh Binh- Halong Bay
Depart for Halong Bay , one of Vietnam’s most famous natural wonders . Board your cruise and enjoy lunch while sailing through stunning limestone islands . In the afternoon, take part in activities such as kayaking , swimming , and cave exploration . Overnight on the cruise .
Includes: Transfer, accommodation, kayaking, onboard tour guide, entrance fees, breakfast, lunch, dinner Excludes: Drinks

Day 5:  Halong Bay - Hanoi
Wake up in the middle of the breathtaking bay and enjoy morning cruise activities . After brunch , return to the harbor and transfer back to Hanoi . Spend the evening at leisure or shopping in the Old Quarter . Overnight in Hanoi .
Includes: Transfer, accommodation, breakfast, lunch Excludes: Dinner

Day 6:  Hanoi Departure
Enjoy free time in Hanoi before your transfer to the airport for your departure flight . This marks the end of your unforgettable Northern Vietnam 6-day itinerary , filled with culture, nature, and memorable experiences .
Includes: Transfer, breakfast Excludes: Late check-out`,
    duration:    "6 Days 5 Nights",
    price:       450,
    categoryIds: ["1"],
    cityIds:     ["2", "3", "1"],
    featuredTour: false,
    onSale:       false,
    saleDiscountPercentage: null,
  },
  {
    id:          "11",
    title:       "Vietnam Travel Itinerary 14 Days",
    imageUrl:    "https://asiaeyestravel.com/uploads/source/blog/hoian/hoian-jeep-tour-wommen.jpg",
    description: `This Vietnam travel itinerary 14 days takes you from Hanoi to the mountains of Sapa , the landscapes of Ninh Binh , and the stunning Halong Bay cruise , then continues to the cultural highlights of Hue and Hoi An Ancient Town . It is a perfect journey combining nature, culture, and local experiences for an unforgettable trip across Vietnam.`,
    itinerary:   `Day 1:  Hanoi Arrival
Arrive in Hanoi , where Asia Eyes Travel will warmly welcome you and transfer you to your hotel for check-in . In the evening, enjoy free time to explore the vibrant Old Quarter , taste authentic Vietnamese street food , and experience the lively atmosphere of the capital city . This is the perfect introduction to Vietnam’s culture, history, and daily life . Overnight in Hanoi .
Includes: Private transfer, accommodation, tour guide Excludes: Early check-in

Day 2:  Hanoi Scooter Tour
Join an exciting Hanoi scooter tour to explore the city’s hidden corners and local life . Visit Huu Tiep Lake , the historic Long Bien Bridge , the famous Train Street , and bustling local markets . Along the way, enjoy authentic Vietnamese street food and refreshing drinks at traditional eateries . This immersive experience offers a unique way to discover the culture, history, and daily rhythm of Vietnam’s capital . Overnight in Hanoi .
Includes: Accommodation, scooter with driver, tour guide, breakfast, lunch, and drinks Excludes: Dinner

Day 3:  Hanoi – Sapa by Night Train
Enjoy a free day in Hanoi , giving you time to relax or explore the city at your own pace . In the evening, at 09:30 PM , Asia Eyes Travel’s tour guide and driver will pick you up and transfer you to the train station to board an overnight train from Hanoi to Sapa at 10:30 PM . Relax onboard and enjoy the journey toward the northern mountains of Vietnam . This comfortable overnight experience is the perfect way to prepare for your upcoming adventure in Sapa . Overnight on the train .
Today’s optional tour: You can visit craft villages around urban Hanoi , offering a chance to explore traditional handicrafts and experience local artisan life .
Includes: Private transfer to train station, accommodation with breakfast, train ticket to Sapa Excludes: Dinner and late check-out

Day 4:  Sapa – Lao Chai – Ta Van (Homestay)
Arrive at Lao Cai Station , where your guide will warmly welcome you and transfer you to Sapa for breakfast . At 09:00 AM , begin a scenic trek to Lao Chai and Ta Van villages , passing through stunning rice terraces and mountain landscapes . Along the way, meet local ethnic communities and experience their traditional way of life . This immersive journey offers a deep connection with Sapa’s culture and nature . Overnight at a local homestay in Sapa .
Includes: Transfer, accommodation, tour guide, breakfast, lunch, and dinner Excludes: Drinks

Day 5:  Cat Cat Village – Fansipan (Optional)
In the morning, transfer to Cat Cat Village to explore traditional Hmong culture and scenic waterfalls . In the afternoon, if weather permits, take the cable car to Fansipan Mountain , known as the “Roof of Indochina” , and enjoy breathtaking panoramic views from the highest peak in Vietnam . This experience offers a perfect combination of culture and nature in Sapa . Overnight in Sapa .
Includes: Transfer, accommodation, tour guide, breakfast, lunch, and dinner Excludes: Drinks

Day 6:  Sapa - Hanoi
At 07:30 AM, take a shuttle bus back to Hanoi . Enjoy scenic views along the way and relax upon arrival in the city . Spend the rest of the day at leisure or explore Hanoi at your own pace . Overnight in Hanoi .
Includes: Shuttle bus, accommodation, breakfast, and lunch
Excludes: Dinner

Day 7:  Hanoi - Ninh Binh
Depart at 07:45 AM from Hanoi to Ninh Binh , often called “Halong Bay on land” for its stunning limestone landscapes . Visit the historic Dinh and Le Temples , then enjoy a peaceful boat trip in Trang An to explore beautiful caves and rivers surrounded by nature . Continue your journey with a hike up Mua Cave , where you can admire breathtaking panoramic views of the countryside . This Ninh Binh tour offers a perfect mix of culture, nature, and adventure . Overnight in Ninh Binh .
Includes: Transfer, accommodation, entrance fees, tour guide, breakfast, and lunch Excludes: Drinks

Day 8: Ninh Binh - Halong Bay Cruise
At 07:30 AM, depart from Ninh Binh and transfer to Halong Bay , one of Vietnam’s most iconic destinations . Upon arrival, board your cruise at around 11:45 AM and enjoy a delicious lunch while sailing through the breathtaking limestone seascape . In the afternoon, take part in exciting activities such as kayaking , swimming , and cave exploration . Relax on deck and admire the stunning sunset over the bay . This is a perfect blend of adventure and relaxation in the heart of nature . Overnight on the cruise in Halong Bay .
Includes: Transfer, cruise, entrance fees, kayaking, tour guide on board, breakfast, lunch, and dinner Excludes: Drinks

Day 9: Halong Bay - Hanoi - Flight to Hue
Enjoy breakfast and morning activities on your Halong Bay cruise , surrounded by stunning limestone landscapes . After brunch on board , return to the dock and transfer to Hanoi Airport for a short flight to Hue . Upon arrival, Asia Eyes Travel will warmly welcome you and transfer you to your hotel for check-in and relaxation . This marks your transition from Northern Vietnam to the cultural heart of Central Vietnam . Overnight in Hue .
Includes: Transfer, flight ticket, breakfast, and lunch Excludes: Drinks

Day 10:  Hue City Tour – Heritage Train to Hoi An
At 08:00 AM, enjoy a guided Hue city tour , visiting iconic landmarks such as Thien Mu Pagoda , Khai Dinh Tomb , and Minh Mang Tomb , which showcase the rich heritage of Vietnam’s imperial history . In the afternoon, take a scenic heritage train from Hue to Da Nang , passing along one of the most beautiful coastal routes in Vietnam . Upon arrival in Da Nang , continue your transfer to Hoi An Ancient Town for check-in and relaxation . This day offers a perfect combination of culture, history, and scenic travel experiences . Overnight in Hoi An .
Includes: Private transfer, heritage train, entrance fees, tour guide, breakfast, and lunch Excludes: Drinks and dinner

Day 11:  Hoi An Jeep Tour
At 07:45 AM, begin an exciting jeep tour around the Hoi An countryside , exploring peaceful villages , lush rice fields , and traditional local workshops . Along the way, experience authentic rural life in Central Vietnam and learn about local culture and daily activities from friendly communities . This immersive journey offers a unique perspective beyond Hoi An Ancient Town , combining adventure and cultural discovery . Return to Hoi An in the afternoon and enjoy free time at leisure . Overnight in Hoi An .
Includes: Accommodation, jeep driver, entrance fees, tour guide, breakfast, and lunch Excludes: Drinks

Day 12 & Day 13:  Hoi An Free Days
Enjoy free days in Hoi An Ancient Town , one of Vietnam’s most charming destinations . Wander through lantern-lit streets , explore historic temples , and admire the unique blend of Vietnamese, Chinese, and Japanese architecture . You can also relax at An Bang Beach , shop for tailor-made clothing , or enjoy coffee at a riverside café . Optional activities include cooking classes , cycling tours , or sunset boat rides . These days offer the perfect balance of relaxation, culture, and local experiences . Overnight in Hoi An .
Includes: Accommodation with breakfast Excludes: Lunch and dinner

Day 14:  Danang Departure
Enjoy your final moments in Hoi An Ancient Town before your transfer to Da Nang Airport for your departure flight . Depending on your schedule, you may have free time for last-minute shopping or relaxation . This marks the end of your unforgettable Vietnam journey with Asia Eyes Travel , filled with rich culture , stunning landscapes , and authentic local experiences . We hope to welcome you again soon . Safe travels!
Includes: Breakfast Excludes: Late check-out`,
    duration:    "14 Days 13 Nights",
    price:       980,
    categoryIds: ["1"],
    cityIds:     ["2", "3", "4", "1", "13", "12"],
    featuredTour: false,
    onSale:       true,
    saleDiscountPercentage: 15,
  },
  {
    id:          "12",
    title:       "Private Vietnam Itinerary 15 Days",
    imageUrl:    "https://asiaeyestravel.com/uploads/source/thuc/phu-quoc/ninh-binh.webp",
    description: `This private Vietnam itinerary 15 days offers a complete journey from South to North Vietnam, combining Vietnam culture , history, and natural beauty. Explore vibrant Ho Chi Minh City , the Mekong Delta tour , charming Hoi An Ancient Town , historic Hue city tour , and the capital Hanoi . Discover breathtaking landscapes in Ninh Binh and enjoy an unforgettable Halong Bay cruise . This itinerary is perfect for travelers seeking a well-balanced experience with both adventure and relaxation across Vietnam.`,
    itinerary:   `Day 1:  Ho Chi Minh City Arrival
Overnight in Ho Chi Minh City.
Inclusions: Accommodation, private airport transfer with an English-speaking guide. Exclusions: Early check-in and meals.

Day 2:  Cu Chi Tunnels
Upon arrival, explore the narrow tunnel system and learn how it was ingeniously constructed for survival and defense. Discover hidden trapdoors, underground kitchens, meeting rooms, and defensive structures that reflect the resilience of Vietnamese soldiers. Your guide will provide detailed explanations and stories that bring wartime history to life.
You may also experience a short section of the tunnels and view original wartime artifacts, gaining a deeper understanding of daily life underground during the conflict.
After the visit, enjoy lunch at a local restaurant before returning to Ho Chi Minh City in the afternoon. The rest of the day is free at your leisure, with options such as visiting Ben Thanh Market , enjoying a coffee, or relaxing at your hotel.
Overnight in Ho Chi Minh City.
Includes: Accommodation with breakfast, private transfer, English-speaking guide, entrance fees, and lunch. Excludes: Dinner and personal expenses.

Day 3:  Mekong Delta – Ben Tre – Can Tho
8:00 AM: Depart for Ben Tre in the Mekong Delta , a peaceful region famous for its lush coconut groves and tranquil waterways. Upon arrival, embark on a relaxing boat trip through narrow canals shaded by water palms, offering a close look at the authentic rural life of the Mekong Delta.
Visit local workshops to learn how coconut-based products are made, and enjoy fresh tropical fruits along the way. Continue your journey through the countryside, experiencing traditional village life and the warm hospitality of local people, before heading to Can Tho , the heart of the Mekong Delta.
In the evening, unwind by the river and enjoy the calm, laid-back atmosphere of this vibrant region.
Overnight in Can Tho.
Includes: Accommodation with breakfast, private transfer, English-speaking guide, entrance fees, and lunch. Excludes: Dinner and personal expenses.

Day 4:  Can Tho - Fly to Danang - Hoi An
After the visit, return to the hotel for breakfast and check-out, then transfer to the airport for your flight to Da Nang . Upon arrival, continue your journey to Hoi An Ancient Town , a UNESCO World Heritage Site known for its lantern-lit streets, ancient architecture, and charming riverside ambiance.
Spend the evening at leisure exploring this magical town.
Overnight in Hoi An.
Includes: Accommodation with breakfast, private transfer, English-speaking guide, entrance fees and flight ticket Excludes: Lunch, dinner and personal expenses.

Day 5: Hoi An Jeep Tour
Explore the countryside around Hoi An on an exciting jeep tour . Travel through lush rice fields, peaceful local villages, and scenic coastal roads while learning about the daily life and traditions of Central Vietnam.
Visit traditional workshops along the way and interact with friendly locals to gain a deeper understanding of their crafts and rural lifestyle. This immersive journey offers a perfect blend of adventure, culture, and authentic local experiences.
After the tour, return to Hoi An Ancient Town and enjoy a relaxing evening at leisure, soaking in the charming atmosphere of this UNESCO World Heritage Site.
Overnight in Hoi An.
Includes: Accommodation with breakfast, private Jeep tour, English-speaking guide, entrance fees, and lunch. Excludes: Dinner and personal expenses.

Day 6 & Day 7:  Hoi An Free Days
Enjoy two relaxing free days in Hoi An at your own pace. You may explore the charming Ancient Town , visit historic temples, shop for tailor-made clothing, or simply unwind at An Bang Beach . Optional activities include cooking classes, cycling tours through the countryside, or rejuvenating spa treatments.
In the evening, admire the magical glow of colorful lanterns and enjoy riverside dining along the Thu Bon River . These days offer the perfect balance of relaxation, cultural discovery, and coastal charm.
Overnight in Hoi An.
Includes: Accommodation with breakfast Excludes: Lunch, dinner and personal expenses.

Day 8: Hoi An - Hue City Tour
Visit the majestic Imperial City , a UNESCO World Heritage Site, and explore its ancient palaces, gates, and temples that once served as the home of the Nguyen Dynasty. Continue to the iconic Thien Mu Pagoda , beautifully located on the banks of the Perfume River , and then visit some of the royal tombs that reflect Vietnam’s fascinating imperial history.
Enjoy the peaceful and poetic atmosphere of Hue as you take in the tranquil riverside scenery.
Overnight in Hue.
Includes: Accommodation with breakfast, private transfer, English-speaking guide, entrance fees and lunch Excludes: Dinner and personal expenses.

Day 9: Hue - Fly to Hanoi
Transfer to the airport for your flight to Hanoi , the capital of Vietnam. Upon arrival, you will be met by your Asia Eyes Travel tour guide and transferred to your hotel.
In the afternoon, enjoy free time to explore the city at your own pace. You may wander through the charming Hanoi Old Quarter , visit the peaceful Hoan Kiem Lake , or sample delicious local street food at nearby restaurants and stalls. The vibrant energy, rich culture, and historic atmosphere of Hanoi offer a memorable first impression of the capital.
Overnight in Hanoi.
Includes: Accommodation with breakfast, private transfer, English-speaking guide, flight ticket Excludes: Lunch, dinner and personal expenses.

Day 10: Hanoi City Tour
Your first stop is the Ho Chi Minh Mausoleum Complex , followed by the Temple of Literature – Quoc Tu Giam , Vietnam’s first university, established in 1070. Surrounded by peaceful courtyards and traditional architecture, this historic site offers deep insight into Vietnam’s cultural and educational heritage.
Continue to the Vietnam Museum of Ethnology , one of the country’s most fascinating museums, where you can discover the traditions, cultures, and daily life of Vietnam’s diverse ethnic communities.
After lunch, visit Hoa Lo Prison , also known as the “Hanoi Hilton,” to learn about Vietnam’s colonial past and wartime history.
In the afternoon, return to your hotel in the late afternoon.
Overnight in Hanoi.
Inclusions: Accommodation with breakfast, private tour with English-speaking guide, entrance fees, and lunch. Exclusions: Dinner and personal expenses.

Day 11: Hanoi - Ninh Binh
Enjoy a scenic boat trip through the stunning waterways of Trang An or Tam Coc , gliding past towering cliffs, caves, and lush rice fields. Continue to visit ancient temples that reflect the region’s rich cultural and historical heritage.
In the afternoon, explore the countryside by bicycle, passing quiet villages and beautiful rural scenery. This peaceful destination offers a perfect blend of natural beauty and cultural discovery.
Overnight in Ninh Binh.
Inclusions: Accommodation with breakfast, private tour with English-speaking guide, entrance fees, and lunch. Exclusions: Dinner and personal expenses.

Day 12:  Ninh Binh - Halong Bay
Enjoy a variety of onboard and outdoor activities such as kayaking through hidden lagoons, swimming in the clear waters, and exploring stunning limestone caves. In the afternoon, relax on the sundeck and take in the breathtaking scenery of the bay.
As evening approaches, unwind on deck and admire the spectacular sunset over the UNESCO World Heritage landscape, followed by a peaceful night on board.
Overnight on cruise.
Inclusions: Accommodation with breakfast, 2 days 1 night cruise with full meals onboard Exclusions: Drinks and personal expenses.

Day 13:  Halong Bay - Hanoi
You will then be transferred back to Hanoi .
Upon arrival, enjoy free time in the evening to explore the city at your own pace, shop for souvenirs, or simply relax after your journey.
Overnight in Hanoi.
Inclusions: Accommodation with breakfast, lunch and shuttle bus to Hanoi Exclusions: Dinner and personal expenses.

Day 14:   Hanoi Free Day
Spend the rest of the day relaxing at a local café or shopping for souvenirs in the Old Quarter, or simply enjoy the vibrant atmosphere of Vietnam’s capital.
Overnight in Hanoi.
Includes: Accommodation with breakfast Excludes: Lunch, dinner and personal expenses

Day 15:  Hanoi Departure
On behalf of Asia Eyes Travel , I am Thuc Nguyen . I would like to sincerely thank you for choosing Asia Eyes Travel for your special trip to Vietnam, and I look forward to welcoming you again on your next journey.
Inclusions: Breakfast and private airport transfer Exclusions: Late check-out.`,
    duration:    "15 Days 14 Nights",
    price:       1980,
    categoryIds: ["1"],
    cityIds:     ["2", "3", "1", "13", "12", "23", "27", "21", "20"],
    featuredTour: false,
    onSale:       true,
    saleDiscountPercentage: 15,
  },
  {
    id:          "13",
    title:       "Vietnam Itinerary 12 Days",
    imageUrl:    "https://asiaeyestravel.com/uploads/source/blog/hoian/hoi-an-scooter-tours.webp",
    description: `Discover the best of Vietnam with this unforgettable 12-Day Vietnam Itinerary combining culture, nature, and authentic local experiences. Explore the vibrant Hanoi Old Quarter , the peaceful landscapes of Ninh Binh , and enjoy a luxurious Halong Bay Cruise in Ha Long Bay . Continue to historic Hue before traveling aboard the iconic Heritage Train to charming Hoi An . Experience a memorable Hoi An Countryside Scooter Tour and relax by the beach, creating the perfect balance of adventure, culture, and relaxation.`,
    itinerary:   `Day 1:  Hanoi Arrival
Arrive in Hanoi , the vibrant capital of Vietnam . Upon arrival, you will be warmly welcomed by Asia Eyes Travel and transferred to your hotel for check-in and relaxation after your journey. Depending on your arrival time, take a leisurely walk through the charming Old Quarter , famous for its narrow streets and bustling atmosphere . This is a perfect opportunity to experience local life and sample some of Hanoi street food , offering an authentic introduction to Vietnamese culture and cuisine .
Includes: Private transfer, accommodation, tour guide, dinner Excludes: Early check-in

Day 2: Hanoi Scooter Tour
Enjoy an exciting scooter tour through Hanoi’s hidden alleys and vibrant streets . Ride across the historic Long Bien Bridge , visit Huu Tiep Lake , and explore bustling local markets to experience daily life like a true local . Along the way, taste authentic Vietnamese cuisine at carefully selected eateries , offering a rich culinary journey . This immersive experience is perfect for discovering the city’s culture, history, and flavors from a unique perspective .
Includes: Scooter with driver, accommodation, tour guide, lunch and drinks Excludes: Dinner

Day 3: Hanoi Free Day to Explore in Hanoi
Enjoy a Hanoi free day at your own pace , discovering the charm of Vietnam’s capital . Wander through the bustling Old Quarter , visit Hoan Kiem Lake , or explore cultural sites like temples and museums . You can relax at a local café , try authentic street food , or shop for unique souvenirs . A free day in Hanoi offers the perfect balance of culture, food, and relaxation , allowing you to experience the city like a local .

Day 4: Hanoi - Ninh Binh
08:00 AM: Travel to Ninh Binh , often referred to as “Halong Bay on land” for its stunning limestone landscapes . Visit Tam Coc or Trang An and enjoy a peaceful boat ride through dramatic karsts and rivers . Continue exploring with a visit to Dinh and Le Temple , followed by a hike to Mua Cave for panoramic views . End the day with a relaxing bike ride through scenic rice fields . Overnight in Ninh Binh .
Includes: Private transfer, accommodation, tour guide, entrance fees, lunch, bicycle Excludes: Dinner

Day 5:  Ninh Binh - Halong Bay
08:00: Depart from Ninh Binh with a private transfer to Halong Bay . Upon arrival, board a luxury cruise and begin your journey through the breathtaking limestone islands . Enjoy activities such as kayaking , visiting spectacular caves , and relaxing on deck while watching the sunset over the bay . This unforgettable experience offers both adventure and comfort . Overnight on the cruise .
Includes: Private transfer, accommodation, tour guide, entrance fees, lunch, dinner Excludes: Drinks

Day 6: Halong Bay - Fly to Hue
This morning, join the final cruise activities in Halong Bay and enjoy lunch on board while admiring the scenic limestone landscapes . After disembarkation , your driver will transfer you to the airport for a short flight to Hue . Upon arrival at Phu Bai Airport , you will be warmly welcomed by Asia Eyes Travel’s tour guide and driver , then transferred to your hotel for check-in and relaxation .
Includes: Private transfer, flight ticket, accommodation, tour guide, lunch Excludes: Drinks

Day 7:  Hue City Tour & Heritage Train Journey to Hoi An
At 08:00 AM , your tour guide will pick you up at your hotel for a half-day tour in Hue . Explore the magnificent Imperial City , visit the iconic Thien Mu Pagoda with scenic views of the Perfume River , and discover the royal tombs of Minh Mang or Khai Dinh . Enjoy a delicious lunch at a local restaurant .
At 02:00 PM , you will be transferred to the train station to board a heritage train to Danang . Upon arrival at Danang train station , you will be picked up and transferred to Hoi An . Overnight in Hoi An .
Includes: Private transfer, train ticket, accommodation, entrance fees, tour guide, breakfast, lunch Excludes: Drinks

Day 8:  Hoi An Scooter Tour
Discover the charm of the countryside with an exciting Hoi An scooter tour , one of the best ways to explore local life in Central Vietnam . Ride through peaceful villages , lush rice fields , and scenic backroads while experiencing authentic Vietnamese culture and daily activities . This Hoi An countryside tour offers a unique perspective beyond the Hoi An Ancient Town , combined with delicious local cuisine along the way. It’s a perfect blend of adventure travel and cultural immersion in Vietnam , ideal for travelers seeking a deeper connection with the destination .
Includes: Scooter with driver, accommodation, entrance fees, lunch Excludes: Dinner

Day 9 & Day 10 / Day 11:  Hoi An Free Days
Enjoy your leisure time in Hoi An , one of Vietnam’s most charming destinations . Wander through the ancient streets , visit historic temples , and admire the colorful lantern markets that make the town so unique. You can also relax at nearby beaches like An Bang or explore local cafés , tailor shops , and cultural sites at your own pace. These free days offer the perfect balance of relaxation and discovery in the heart of Central Vietnam .
Includes: Accommodation with breakfast Excludes: Lunch and dinner

Day 12:  Hoi An – Danang Departure
Enjoy your final moments in Hoi An before your transfer to Danang Airport for your departure flight . Depending on your schedule, you may have free time to relax , do some last-minute shopping , or explore nearby cafés . This marks the end of your memorable Vietnam itinerary 10 days , filled with cultural experiences , stunning landscapes , and unforgettable moments .
Includes: Breakfast, private transfer to airport Excludes: Late check-out`,
    duration:    "12 Days/ 11 Nights",
    price:       1250,
    categoryIds: ["1"],
    cityIds:     ["2", "3", "1", "13", "12"],
    featuredTour: false,
    onSale:       false,
    saleDiscountPercentage: null,
  },
  {
    id:          "14",
    title:       "Vietnam Itinerary 10 Days",
    imageUrl:    "https://asiaeyestravel.com/uploads/source/blog/halong/cruise/seastars/sea-stars-cruise-halong-bay.webp",
    description: `This Vietnam itinerary 10 days is the perfect journey to discover the cultural charm of Vietnam , natural beauty of Vietnam , and its vibrant lifestyle. From the bustling streets of Hanoi Old Quarter to the peaceful countryside of Mai Chau Valley and the stunning landscapes of Halong Bay cruise , ending in the lantern-lit town of Hoi An Ancient Town , this trip offers a complete and unforgettable Vietnam travel experience .`,
    itinerary:   `Day 1:  Hanoi Arrival
Arrive in Hanoi , the vibrant capital of Vietnam . Upon arrival, you will be warmly welcomed by Asia Eyes Travel and transferred to your hotel for check-in and relaxation after your journey. Depending on your arrival time, take a leisurely walk through the charming Old Quarter , famous for its narrow streets and bustling atmosphere . This is a perfect opportunity to experience local life and sample some of Hanoi street food , offering an authentic introduction to Vietnamese culture and cuisine .
Includes: Private transfer, accommodation, tour guide, dinner Excludes: Early check-in

Day 2:  Hanoi – Scooter Tour
Enjoy an exciting Hanoi scooter tour through the city’s hidden alleys and vibrant streets . Ride across the historic Long Bien Bridge , visit Huu Tiep Lake , and explore bustling local markets to experience daily life in Hanoi like a true local. Along the way, taste authentic Vietnamese cuisine at carefully selected eateries, offering a rich culinary journey . This immersive experience is perfect for discovering the city’s culture , history , and local flavors from a unique perspective.
Includes: Scooter with driver, accommodation, tour guide, lunch and drinks Excludes: Dinner

Day 3:  Hanoi – Mai Chau
Travel from Hanoi to Mai Chau Valley , a peaceful destination known for its scenic rice fields and traditional villages . Upon arrival, meet local ethnic communities and gain insight into their unique culture and daily life . Enjoy a relaxing bike ride in Mai Chau , passing lush rice paddies and charming stilt houses . This tranquil experience offers a perfect escape from the city and a deeper connection with rural Vietnam . Overnight in Mai Chau .
Includes: Private transfer, accommodation, tour guide, lunch, bicycle Excludes: Dinner

Day 4: Mai Chau - Ninh Binh
Travel to Ninh Binh , often referred to as “Halong Bay on land” for its stunning limestone landscapes . Visit Tam Coc or Trang An and enjoy a peaceful boat ride through dramatic karsts and rivers . Continue exploring with a visit to Dinh and Le Temple , followed by a hike to Mua Cave for panoramic views . End the day with a relaxing bike ride through scenic rice fields .
Overnight in Ninh Binh .
Includes: Private transfer, accommodation, tour guide, entrance fees, lunch, bicycle Excludes: Dinner

Day 5: Ninh Binh - Halong Bay
08:00: Depart from Ninh Binh with a private transfer to Halong Bay . Upon arrival, board a luxury cruise and begin your journey through the breathtaking limestone islands . Enjoy activities such as kayaking , visiting spectacular caves , and relaxing on deck while watching the sunset over the bay . This unforgettable experience offers both adventure and comfort .
Overnight on the cruise.
Includes: Private transfer, accommodation, tour guide, entrance fees, lunch, dinner Excludes: Drinks

Day 6: Halong Bay – Fly to Danang – Hoi An
Continue your cruise in Halong Bay and join morning activities such as Tai Chi or sightseeing . Enjoy lunch on board before returning to the dock . Transfer to Hanoi Airport for a short flight to Danang . Upon arrival, Asia Eyes Travel will transfer you to Hoi An Ancient Town for check-in and relaxation . Overnight in Hoi An .
Includes: Private transfer, flight ticket from Hanoi to Danang, accommodation, entrance fees, lunch Excludes: Dinner

Day 7: Hoi An Scooter Tour
Discover the charm of the countryside with an exciting Hoi An scooter tour , one of the best ways to explore local life in Central Vietnam . Ride through peaceful villages , lush rice fields , and scenic backroads while experiencing authentic culture and daily activities . This Hoi An countryside tour offers a unique perspective beyond the old town , combined with delicious local cuisine along the way. It’s a perfect blend of adventure and cultural immersion .
Includes: Scooter with driver, accommodation, entrance fees, lunch Excludes: Dinner

Day 8 & Day 9: Hoi An Free Days
Enjoy your leisure time in Hoi An , one of Vietnam’s most charming destinations . Wander through the ancient streets , visit historic temples , and admire the colorful lantern markets that make the town so unique. You can also relax at nearby beaches like An Bang or explore local cafés , tailor shops , and cultural sites at your own pace. These free days offer the perfect balance of relaxation and discovery in the heart of Central Vietnam .
Includes: Accommodation with breakfast Excludes: Lunch and dinner

Day 10: Hoi An - Danang Departure
Enjoy your final moments in Hoi An before your transfer to Danang Airport for your departure flight . Depending on your schedule, you may have free time to relax , do some last-minute shopping , or explore nearby cafés . This marks the end of your memorable Vietnam itinerary 10 days , filled with cultural experiences , stunning landscapes , and unforgettable moments .
Includes: Breakfast, private transfer to airport Excludes: Late check-out`,
    duration:    "10 Days/ 9 Nights",
    price:       1590,
    categoryIds: ["1"],
    cityIds:     ["2", "3", "1", "13", "12"],
    featuredTour: false,
    onSale:       false,
    saleDiscountPercentage: null,
  },
  {
    id:          "15",
    title:       "Best Vietnam Itinerary for 17 Days",
    imageUrl:    "https://asiaeyestravel.com/uploads/source/tours/tourphotos/thuc-photos/ninh-binh/best-vietnam-tours-and-travel-packages.webp",
    description: `Discover the beauty of Vietnam with this 17-day itinerary covering the country’s most iconic destinations from North to Central Vietnam. Start your journey in Hanoi , explore the vibrant Old Quarter , and experience local culture through street food tours and motorbike tours . Trek through the stunning Sapa rice terraces and stay with ethnic minority families . Continue to Ninh Binh , known as “Halong Bay on land” , before cruising through the breathtaking Halong Bay .
The adventure continues to Phong Nha Cave and Paradise Cave , two of Vietnam’s most spectacular natural wonders, followed by a historical journey through the DMZ Vietnam to Hue . Enjoy a scenic train ride to Da Nang and relax in charming Hoi An with beach time , countryside tours , and cultural experiences . This Vietnam 17-day itinerary offers the perfect blend of nature, culture, history, and relaxation .`,
    itinerary:   `Day 1:  Hanoi Arrival
Welcome to Hanoi , Vietnam. Upon arrival, our driver and tour guide will meet you at the airport and transfer you to your hotel for check-in and relaxation.
If time permits, you may explore the vibrant Old Quarter , discover the daily life of local people through its narrow streets, and enjoy authentic Vietnamese cuisine .
Overnight in Hanoi .
Includes: Private transfer, accommodation, tour guide Excludes: Early check-in

Day 2:  Hanoi City Tour & Motorbike Experience
At 09:00 AM, your guide and scooter drivers will pick you up from your hotel to begin your exploration of Hanoi . Visit iconic landmarks such as the Hanoi Opera House , Long Bien Bridge , Hoa Lo Prison , Train Street , and Huu Tiep Lake , where the wreckage of a B-52 bomber still remains, offering deep insight into the city’s history. Along the way, enjoy a delicious Hanoi street food tour , an excellent opportunity to immerse yourself in the rich flavors and vibrant local culture of the capital.
Overnight in Hanoi .
Includes: Accommodation, scooter with driver, tour guide, breakfast, lunch, and drinks Excludes: Dinner

Day 3:  Hanoi – Sapa
This morning is free at your leisure to explore Hanoi at your own pace—perhaps enjoy local cafés or stroll through the vibrant Old Quarter .
In the evening (around 9:00 PM), your guide will escort you to the train station to board the overnight train from Hanoi to Lao Cai (Sa Pa) .
Overnight on the train.
Includes: Accommodation with breakfast, transfer to train station, train ticket, tour guide Excludes: Late check-out
Today’s optional tour: You can visit craft villages around urban Hanoi.

Day 4:     Sapa – Lao Chai – Ta Van Villages (Homestay)
Arrive at Lao Cai Station around 06:00 AM, where your driver will meet you and transfer you to Sa Pa for breakfast. Afterward, begin your trekking journey to explore the villages of the H’mong , Red Dao , and Giay ethnic minorities . Along the way, admire the breathtaking rice terraces and stunning mountain landscapes .
In the afternoon, check in at your homestay . You will have time to explore the village, interact with local people , and, if you wish, join your host family in preparing a traditional meal .
Overnight at a homestay in Sa Pa .
Includes: Transfer, accommodation, tour guide, breakfast, lunch, and dinner Excludes: Drinks

Day 5:  Cat Cat village Discovery
After breakfast, our driver pick-up you to Cat Cat Village , home to the H’mong ethnic group , where you can explore traditional houses, a picturesque waterfall, and stunning mountain scenery . This visit offers great insight into local culture and daily life .
After lunch, return to Sa Pa town and check in at your hotel. The afternoon is free for you to explore the local market , shop for handicrafts , or enjoy a relaxing walk around town.
Overnight at a hotel in Sa Pa .
Includes: Transfer, accommodation, entrance fees, tour guide, breakfast and lunch Excludes: Drinks

Day 6:  Sapa – Hanoi by luxury Minivan
At 08:00 AM, depart for Hanoi by private car (approximately 5–6 hours). Enjoy scenic views along the way as you travel back to the capital city of Vietnam, passing through beautiful countryside landscapes.
Upon arrival in Hanoi , check in at your hotel and relax. The rest of the day is at your leisure to explore the city, rest, or enjoy local cuisine at your own pace.
Overnight in Hanoi .
Includes: Transfer, accommodation, breakfast and lunch Excludes: Drinks

Day 7:  Hanoi – Ninh Binh
Travel to Ninh Binh , often referred to as “ Halong Bay on land ” for its stunning limestone landscapes. Visit Trang An , a UNESCO World Heritage Site, where you will enjoy a peaceful boat ride through caves and rivers surrounded by dramatic karst scenery. Continue to Hoa Lu Ancient Capital to explore the historic temples of King Dinh and King Le , gaining insight into Vietnam’s early history.
In the afternoon, take a leisurely cycling trip through the countryside , passing lush rice fields and charming local villages.
Overnight in Ninh Binh .
Includes: Accommodation with breakfast, transfer, entrance fees, lunch Excludes: Dinner

Day 8:  Ninh Binh – Halong Bay
At 08:00 AM, depart for Halong Bay by private transfer (approximately 3.5 hours).
Upon arrival around 11:45 AM, board your Halong Bay cruise and enjoy a welcome drink followed by lunch while sailing through the stunning limestone karst formations .
In the afternoon, take part in activities such as kayaking , cave exploration , or relaxing on deck while admiring the breathtaking scenery. Don’t miss the magical sunset over Halong Bay .
Overnight on the cruise in Halong Bay .
Includes: Transfer, accommodation, breakfast, kayaking, lunch and dinner. Excludes: Drinks

Day 9:  Halong – Hanoi
Continue exploring Halong Bay in the morning following the cruise itinerary. Enjoy the peaceful scenery, or relax on board while admiring the breathtaking limestone landscapes.
After brunch (around 11:30 AM), return to the harbor and transfer back to Hanoi .
Overnight in Hanoi .
Includes: Transfer, accommodation, breakfast, lunch Excludes: Drinks

Day 10:  Hanoi – Dong Hoi
Transfer to Noi Bai Airport for your morning flight to Dong Hoi .
Upon arrival, you will be warmly welcomed and transferred to your hotel in Phong Nha . The rest of the day is at your leisure to relax or explore the area at your own pace.
Overnight in Phong Nha .
Includes: Transfer, accommodation with breakfast, flight ticket, tour guide Excludes: Early check-in, lunch and dinner

Day 11:  Explore Phong Nha & Paradise Cave
At 08:30 AM, depart for an exciting Phong Nha cave tour to explore two of Vietnam’s most famous natural wonders: Phong Nha Cave and Paradise Cave . These spectacular caves are renowned for their stunning limestone formations, impressive stalactites, and stalagmites formed over millions of years. This journey offers a perfect Phong Nha travel experience for nature lovers and adventure seekers. In the afternoon, return to your hotel and relax. Overnight in Dong Hoi .
Includes: Private transfer, accommodation, entrance fees, tour guide, breakfast, lunch Excludes: Drinks

Day 12:  Dong Hoi – DMZ – Hue
Travel to Hue , stopping along the way to explore the historic DMZ (Demilitarized Zone) . Visit the Vinh Moc Tunnels and Hien Luong Bridge , important historical sites from the Vietnam War , offering deep insight into Vietnam’s history and heritage.
Continue your journey to Hue , the former imperial capital of Vietnam, and check in at your hotel for relaxation.
Overnight in Hue .
Includes: Private transfer, accommodation, entrance fees, tour guide, breakfast, lunch Excludes: Drinks

Day 13: Hue City Tour – Heritage Train to Da Nang – Hoi An
In the morning, visit Thien Mu Pagoda , Minh Mang Tomb , and Khai Dinh Tomb , three iconic landmarks showcasing the imperial heritage of the Nguyen Dynasty and the rich history of Hue .
After lunch, transfer to the train station for a scenic Hue to Da Nang train journey , one of the most beautiful coastal routes in Vietnam , offering stunning sea and mountain views.
Upon arrival in Da Nang , continue your transfer to Hoi An Ancient Town for check-in and relaxation. Overnight in Hoi An .
Includes: Private transfer, train ticket, accommodation, entrance fees, tour guide, breakfast, lunch Excludes: Drinks

Day 14:  Hoi An Jeep Tour (Half Day)
At 08:00 AM, your jeep tour in Hoi An begins as your guide picks you up to explore the surrounding countryside. Travel through peaceful villages , lush rice fields , and vibrant local markets , experiencing authentic rural life in Central Vietnam .
After the tour, enjoy lunch with a local family and taste delicious home-cooked Vietnamese dishes .
In the afternoon, enjoy free time to explore Hoi An Ancient Town at your own pace, wandering through lantern-lit streets and historic architecture. Overnight in Hoi An .
Includes: Accommodation, jeep tour, entrance fees, tour guide, breakfast, lunch Excludes: Dinner

Day 15–16:  Hoi An – Free Days
Enjoy relaxing days in the charming town of Hoi An , one of Vietnam’s most beautiful ancient towns . Explore the well-preserved Hoi An Ancient Town , famous for its lantern-lit streets , historic architecture, and the iconic Japanese Covered Bridge .
You may join a Vietnamese cooking class , cycle to An Bang Beach , or visit local tailors for custom-made clothing . These activities offer the perfect balance of culture, relaxation, and local experiences .
Overnight in Hoi An .
Includes: Accommodation, breakfast Excludes: Lunch and dinner

Day 17:  Hoi An – Da Nang Departure
Free time at your leisure until your private transfer to Da Nang Airport for your departure flight.
This marks the end of your unforgettable journey in Vietnam . On behalf of Asia Eyes Travel DMC Vietnam , we sincerely thank you for choosing us for your trip. We hope you had a wonderful experience exploring Vietnam’s culture, nature, and local life.
We look forward to welcoming you and your friends again on another memorable journey in the future.
Includes: Breakfast and private transfer to airport Excludes: Late check-out`,
    duration:    "17 Days/ 16 Nights",
    price:       1890,
    categoryIds: ["1"],
    cityIds:     ["3", "4", "1", "15", "13", "12"],
    featuredTour: false,
    onSale:       false,
    saleDiscountPercentage: null,
  },
  {
    id:          "16",
    title:       "Vietnam 11 Days Itinerary from Ho Chi Minh City",
    imageUrl:    "https://asiaeyestravel.com/uploads/source/destinations/beach-holiday-vietnam.webp",
    description: `Explore Southern Vietnam with this 11-day Vietnam tour from Ho Chi Minh City to Phu Quoc , operated by Asia Eyes Travel . Start in Ho Chi Minh City , visiting iconic landmarks and the historic Cu Chi Tunnels . Enjoy a flexible day with optional street food tour or walking tours .
Continue to the Mekong Delta , experience local life, and stay at a traditional homestay. Discover Can Tho and the vibrant Cai Rang Floating Market before heading to Chau Doc to explore Cham culture and Tra Su Cajuput Forest .
End your journey on Phu Quoc Island with relaxing beach days and tropical experiences. This itinerary perfectly combines culture, nature, and beach relaxation for an unforgettable Vietnam holiday with Asia Eyes Travel .`,
    itinerary:   `Day 1:  Arrival in Ho Chi Minh City
Arrive at Tan Son Nhat International Airport , where you will be warmly welcomed by Asia Eyes Travel.
Transfer to your hotel for check-in and relaxation.
Depending on your arrival time, enjoy a gentle introduction to the city with a short walk or a visit to local cafés.
Overnight in Ho Chi Minh City.
Includes : Private transfer from hotel to airport, Accomodation.
Accomodation: 4* or 5* star on request
Saigon Prince Hotel or similar
Address: 63 Nguyễn Huệ, Bến Nghé, Quận 1, Thành phố Hồ Chí Minh
Phone: 028 3822 2999
New World Saigon Hotel or similar
Address: 76 Lê Lai, Phường Bến Thành, Quận 1, Thành phố Hồ Chí Minh Phone: 028 3822 8888

Day 2:  City Highlights & Cu Chi Tunnels
Explore the vibrant city with visits to iconic landmarks such as Notre-Dame Cathedral , Central Post Office , and the War Remnants Museum .
In the afternoon, journey to the Cu Chi Tunnels to discover the fascinating underground network from the Vietnam War. Return to the city for overnight stay.
Includes : Breakfast, Lunch, Private transfer round trip, English speaking guide, All entrance fees, Accommodation or Join in Small group City tour.
Accomodation: 4* or 5* star on request
Saigon Prince Hotel or similar
Address: 63 Nguyễn Huệ, Bến Nghé, Quận 1, Thành phố Hồ Chí Minh
Phone: 028 3822 2999
New World Saigon Hotel or similar
Address: 76 Lê Lai, Phường Bến Thành, Quận 1, Thành phố Hồ Chí Minh Phone: 028 3822 8888

Day 3:  Free Day with Optional Experiences
Enjoy a full day at leisure to explore at your own pace. Optional experiences include a Vespa street food tour, sampling authentic local cuisine, or a guided walking tour through lively markets and historic neighborhoods. Overnight in Ho Chi Minh City.
Includes : Breakfast, Accommodation.
Accomodation: 4* or 5* star on request
Saigon Prince Hotel or similar
Address: 63 Nguyễn Huệ, Bến Nghé, Quận 1, Thành phố Hồ Chí Minh
Phone: 028 3822 2999
New World Saigon Hotel or similar
Address: 76 Lê Lai, Phường Bến Thành, Quận 1, Thành phố Hồ Chí Minh Phone: 028 3822 8888

Day 4:  Mekong Delta Discovery – Homestay Experience in Mekong Delta
Travel to the Mekong Delta , a region famous for its waterways and lush landscapes. Cruise along peaceful canals, visit local workshops, and connect with local communities. Enjoy traditional meals and experience authentic rural life.
Overnight at a local homestay.
Includes : Breakfast, Lunch, Private transfer, English speaking guide, Boat trip, All entrance fees, Accommodation.

Day 5:  Ben Tre Exploration & Transfer to Can Tho
Continue your Mekong journey in Ben Tre with activities such as cycling through coconut villages or relaxing boat rides. Later, transfer to Can Tho, the bustling center of the delta. Overnight in Can Tho.
Includes : Breakfast, Lunch, Private transfer, English speaking guide, Boat trip, All entrance fees, Accommodation.
Victoria Can Tho Resort

Day 6:  Cai Rang Floating Market & Transfer to Chau Doc
Start early with a boat trip to Cai Rang Floating Market, where you can witness vibrant river trading. Afterward, journey to Chau Doc, a charming town near the Cambodian border. Overnight in Chau Doc.
Includes : Breakfast, Lunch, Private transfer, English speaking guide, Boat trip, All entrance fees, Accommodation.
Victoria Chau Doc Hotel

Day 7:  Cultural Discovery & Tra Su Cajuput Forest
Explore Chau Doc’s cultural diversity with a visit to Cham Village. Continue to Tra Su Cajuput Forest for a serene boat ride through lush green waterways and rich birdlife. Overnight in Chau Doc.
Includes : Breakfast, Lunch, Private transfer, English speaking guide, Boat trip, All entrance fees, Accommodation.
Victoria Chau Doc Hotel

Day 8:  Transfer to Phu Quoc Island – Beach Escape
Transfer to the airport for your flight to Phu Quoc Island. Upon arrival, head to your beach resort and enjoy the tropical surroundings. Overnight in Phu Quoc.
Includes : Breakfast, Private transfer airport, Domestic flight ticket, Accommodation.
Crowne Plaza Phu Quoc
Radisson Blu Resort, Phu Quoc

Day 9–10:  Phu Quoc Island – Relax & Explore
Spend your days at leisure enjoying white sandy beaches and crystal-clear waters. Optional activities include snorkeling, island hopping, or visiting local villages and farms. Overnight in Phu Quoc.
Includes : Breakfast, Accommodation.
Crowne Plaza Phu Quoc
Radisson Blu Resort, Phu Quoc

Day 11:  Departure
Enjoy your final moments before transferring to the airport for your onward flight. End of your memorable Vietnam journey.
Includes: Breakfast, Private transfer to the airport
On behalf of Asia Eyes Travel , I am Thuc Nguyen, and I sincerely thank you for choosing us for your journey. It has been our pleasure to accompany you, and we hope you had a memorable experience. Wishing you a smooth and pleasant trip ahead, and we look forward to welcoming you again on your next adventure.
Thank you very much for choosing Asia Eyes Travel DMC Vietnam!`,
    duration:    "11 Days/10 Nights",
    price:       1890,
    categoryIds: ["1"],
    cityIds:     ["22", "23", "24", "25", "27", "21", "20"],
    featuredTour: false,
    onSale:       false,
    saleDiscountPercentage: null,
  },
  {
    id:          "17",
    title:       "Hoi An Lantern Making & Tra Que Farming Bike Half Tour",
    imageUrl:    "https://asiaeyestravel.com/uploads/source/nhung/3-villages/den-long-ho-an.webp",
    description: `Experience the charm of Hoi An with this Hoi An lantern making tour combined with a Tra Que farming experience . Cycle through scenic countryside to Tra Que Vegetable Village , where you will become a real farmer with hands-on activities. Continue to a local workshop to join a lantern making class in Hoi An and create your own souvenir. This Hoi An bike tour offers a perfect mix of culture, creativity, and authentic rural life.`,
    itinerary:   ``,
    duration:    "Halfday",
    price:       45,
    categoryIds: ["9"],
    cityIds:     ["13"],
    featuredTour: false,
    onSale:       false,
    saleDiscountPercentage: null,
  },
  {
    id:          "18",
    title:       "Hue Authentic City Tour with Tam Giang Lagoon Experience",
    imageUrl:    "https://asiaeyestravel.com/uploads/source/nhung/hue-authentic-city-tour/hue-authentic-city-tour-u.webp",
    description: `Discover the charm of Hue Authentic City Tour with a full- day journey through history and nature. Visit the Hue Imperial Citadel , explore Ho Quyen – Voi Re , and cycle in Thuy Bieu Village . Enjoy a hands- on cooking class, local lunch, and herbal foot bath. In the afternoon, experience fishing with locals at Tam Giang Lagoon and visit Ru Cha Mangrove Forest , offering a unique eco- cultural adventure.`,
    itinerary:   ``,
    duration:    "Full day",
    price:       65,
    categoryIds: ["9"],
    cityIds:     ["18", "12"],
    featuredTour: false,
    onSale:       false,
    saleDiscountPercentage: null,
  },
  {
    id:          "19",
    title:       "Discover Hue with Ao Dai Experience",
    imageUrl:    "https://asiaeyestravel.com/uploads/source/nhung/hue-sightseeing-with-ancient-costumes-with-ancient-costumes/vong-canh-hill.webp",
    description: `Capture stunning memories on a Hue Ao Dai photo tour as you explore the city’s most picturesque landmarks. Visit the colorful Hue Incense Village , enjoy panoramic views from Vong Canh Hill , and walk through the peaceful pine forests of Thien An Hill . Discover the elegant architecture of An Dinh Palace , a historic royal residence from the Nguyen Dynasty. Wearing traditional costumes, this unique Hue half- day sightseeing tour offers the perfect blend of culture, history, and photography in Vietnam’s ancient imperial city.`,
    itinerary:   ``,
    duration:    "Halfday",
    price:       55,
    categoryIds: ["9"],
    cityIds:     ["12"],
    featuredTour: false,
    onSale:       true,
    saleDiscountPercentage: 15,
  },
  {
    id:          "20",
    title:       "Discover the Beauty of Vietnam 10 Days | Heritage – Culture – Cuisine",
    imageUrl:    "https://asiaeyestravel.com/uploads/source/tours/tourphotos/thuc-photos/hanoi/vietnam-culture.webp",
    description: `Discover Vietnam with our 10-day tour , connecting Hanoi, Ninh Binh, Halong Bay, and Sapa . Begin in Hanoi , where temples, colonial architecture, and vibrant street food reflect rich culture. Explore Ninh Binh , “Halong Bay on land,” with serene rivers and limestone karsts. Cruise Halong Bay’s emerald waters and dramatic islands on a luxury boat. Conclude in Sapa , with breathtaking mountains, terraced rice fields, and colorful ethnic cultures. Enjoy authentic Vietnamese cuisine throughout this seamless journey of heritage, nature, and local experiences.
Contact us now for full tour details and exclusive travel deals: info@asiaeyestravel.com | WhatsApp: +84 935 946 688 (Thuc Nguyen)`,
    itinerary:   `Day 1:  Welcome to Hanoi
Upon your arrival at Noi Bai Airport, Asia Eyes Travel’s tour guide and driver will pick you up and transfer you to your hotel.
Today, you are free to relax after your long flight. Overnight in Hanoi.
Accommodation: 4★ or 5★ hotel upon request
Hanoi Tirant Hotel or similar
Apricot Hotel Hanoi or similar
Includes: Accommodation, private transfer, and English-speaking tour guide
Excludes: Meals and personal expenses
Note: Early check-in upon request

Day 2:  Experience Hanoi like a Local with a Private Scooter Tour
9:00 AM: Our female drivers will pick you up for an exciting Hanoi Scooter Tour around the city.
Your first stop is a famous local café where you will enjoy Hanoi’s iconic Egg Coffee , a unique specialty passed down through generations.
You will then ride past some of the city’s most iconic landmarks, including the Hanoi Opera House , local markets, the famous Train Street , Long Bien Bridge , Huu Tiep Lake , and more.
Along the way, our drivers will take you through hidden alleyways to discover old houses and experience authentic daily life in Hanoi, exploring places rarely visited by tourists.
Finally, enjoy Hanoi’s most famous Street Foods at a local restaurant, including:
Bun Cha (grilled pork with rice noodles and sweet fish sauce)
Banh Mi (Vietnamese baguette with French influence)
Pho Bo/Ga (beef or chicken noodle soup – Vietnam’s most iconic dish)
Notes:
The Ho Chi Minh Mausoleum is not included in this City Highlights & Street Food Tour due to time limitations.
The itinerary may change depending on weather and traffic conditions.
Includes: Accommodation with breakfast, scooter drivers, English-speaking guide, breakfast, street food lunch, and coffee tasting
Excludes: Dinner and personal expenses

Day 3:  Hanoi Free Day – Explore the Old Quarter
Enjoy a free day in Hanoi to explore the famous Hanoi Old Quarter at your own pace. This historic area is known for its narrow streets, colonial architecture, and vibrant local life. Take a relaxing walk around Hoan Kiem Lake , discover the famous 36 Ancient Streets , and experience authentic Hanoi Street Food such as Pho or Bun Cha .
You may also visit local markets, small temples, cafés, or souvenir shops, or simply sit at a sidewalk café and watch daily life unfold. This free day offers a perfect opportunity to experience the culture and atmosphere of Hanoi in an authentic way.
Includes: Accommodation with breakfast Excludes: Lunch, dinner, and personal expenses

Day 4:  Hanoi – Ninh Binh Small Group Tour
7:45 – 8:00 AM: We will begin our journey to Ninh Binh .
At 10:30 AM , we will arrive in Ninh Binh and visit the historic Hoa Lu Ancient Capital , the former capital of Vietnam. Here, you will explore the ancient Hoa Lu Temple , dedicated to the Dinh and Le Kings, offering a fascinating glimpse into Vietnam’s rich history and cultural heritage. Surrounded by dramatic limestone mountains, the temple provides a peaceful and spiritual atmosphere.
After visiting Hoa Lu, we will continue to the breathtaking Trang An Grottoes , where you will enjoy a relaxing boat trip through this UNESCO World Heritage Site. Known for its spectacular natural beauty, Trang An features majestic limestone karsts rising from lush rice fields and tranquil rivers. During the boat journey, you will pass through caves and admire the stunning landscapes that make this region one of the highlights of Northern Vietnam . Overnight in Ninh Binh .
Includes: Acomodation with breakfast, small-group Ninh Binh Tour (English-speaking guide, lunch, entrance fees, and boat trip)
Accommodation: 4★ or 5★ hotel/resort upon request
Lalita Ninh Binh Resort or similar
Emeralda Resort Ninh Binh or similar
Includes: Accommodation with breakfast, lunch, entrance fees, and boat trip
Excludes: Dinner and personal expenses

Day 5:  Ninh Binh – Bai Tu Long Bay
7:15 – 7:30 AM: We will pick you up and begin our journey to Halong Bay , located approximately 190 kilometers from Hanoi.
At 11:45 AM , we will arrive in Halong Bay , where you will receive a warm welcome from the cruise crew. You will then be transferred to the boat and enjoy a delicious lunch onboard while cruising through the stunning landscapes of Bai Tu Long Bay .
After lunch, you can join a variety of exciting activities such as kayaking , swimming , or simply relaxing on the sundeck while admiring the breathtaking scenery. The bay’s limestone islands, emerald waters, and peaceful atmosphere create the perfect setting for both relaxation and adventure.
You will spend the night on the cruise, giving you the opportunity to fully experience the tranquility and natural beauty of Bai Tu Long Bay . The evening onboard promises a peaceful and unforgettable experience surrounded by one of Vietnam’s most spectacular natural wonders.
Overnight on Cruise
Accommodation: 4★ or 5★ cruise upon request
Signature Cruise or similar
Paloma Cruise or similar
Includes: Accommodation with breakfast, shuttle bus, English-speaking guide onboard, overnight cruise, lunch, dinner, entrance fees, and cruise activities
Excludes: Drinks and personal expenses

Day 6:  Halong Bay – Sapa by Night Train
After breakfast, enjoy a variety of exciting cruise activities while continuing to admire the stunning scenery of Halong Bay . Later, savor a delightful brunch/lunch onboard as the cruise journeys through the breathtaking bay.
At 11:50 AM , you will disembark from the cruise and return to the port. Our driver will then transfer you back to Hanoi .
This afternoon, you will have free time until our driver and tour guide pick you up and transfer you to the train station for the overnight train to Sapa .
Accommodation: Private cabin on train ( King Sapa Train or similar)
Includes: Accommodation with breakfast, shuttle bus, breakfast, brunch/lunch on cruise, and English-speaking guide onboard
Excludes: Dinner and personal expenses

Day 7:  Explore Ethnic Minority Villages on a Private Tour
06:00 AM: Arrive at Lao Cai Train Station , where our tour guide and driver will welcome you and transfer you to Sapa Town .
Upon arrival, enjoy breakfast at the hotel. Your luggage can be stored at the hotel before beginning your village exploration.
Start your journey with a scenic walk through Lao Chai Village and Ta Van Village , home to the H’Mong and Dzay ethnic minorities. Stroll through beautiful rice terraces and traditional villages, take memorable photos, and interact with local people to learn more about their daily life and unique culture.
After lunch, continue with a guided walk to Cat Cat Village , located just 3 km from Sapa Town. This picturesque village is famous for the beautiful Cat Cat Waterfall and its stunning mountain scenery. You will have time to explore the village, take photos, and browse local handicraft shops for unique souvenirs.
Accommodation: 4★ or 5★ hotel/resort upon request
Bamboo Sapa Hotel or similar
Silk Path Grand Sapa Resort & Spa or similar
Note: Early check-in upon request
Includes: Accommodation with breakfast, lunch, private transfer, English-speaking tour guide, and entrance fees
Excludes: Dinner and personal expenses

Day 8:  Sapa – Free Day
Today is a free day to explore Sapa at your own pace. You can stroll through the local markets, discover charming streets, or, if the weather is clear, take a cable car to Fansipan Mountain , the highest peak in Indochina . Enjoy breathtaking views of the surrounding mountains and valleys. Sapa town itself offers a blend of ethnic culture, vibrant daily life, and stunning landscapes, making it a perfect destination for independent exploration and memorable photos.
06:00 AM: Arrive at Lao Cai Train Station , where our tour guide and driver will welcome you and transfer you to Sapa Town .
Upon arrival, enjoy breakfast at the hotel. Your luggage can be stored at the hotel before beginning your village exploration.
Start your journey with a scenic walk through Lao Chai Village and Ta Van Village , home to the H’Mong and Dzay ethnic minorities. Stroll through beautiful rice terraces and traditional villages, take memorable photos, and interact with local people to learn more about their daily life and unique culture.
After lunch, continue with a guided walk to Cat Cat Village , located just 3 km from Sapa Town. This picturesque village is famous for the beautiful Cat Cat Waterfall and its stunning mountain scenery. You will have time to explore the village, take photos, and browse local handicraft shops for unique souvenirs.
Includes: Accommodation with breakfast
Excludes: Lunch, dinner and personal expenses

Day 9:  Sapa – Hanoi by Limousine Van
This morning, you are free at leisure until our private car or shared limousine van picks you up for the transfer back to Hanoi .
In the evening, you are free to explore the vibrant Hanoi Old Quarter at your own pace. Enjoy the lively atmosphere, local cafés, street food, and charming ancient streets of Vietnam’s capital city.
Accommodation: 4★ or 5★ hotel upon request
Includes: Accommodation with breakfast and shared limousine van transfer
Excludes: Lunch, dinner, and personal expenses

Day 10:  Hanoi - Departure
Today, you are free at leisure until our driver picks you up and transfers you to the airport for your departure flight.
On behalf of Asia Eyes Travel , I am Thuc Nguyen . We sincerely appreciate your trust in our services and look forward to creating more unforgettable travel experiences with you on your next journey to Vietnam.
Includes: Accommodation with breakfast and airport transfer
Excludes: Late check-out and personal expenses`,
    duration:    "10 Days/ 9 Nights",
    price:       690,
    categoryIds: ["1", "7"],
    cityIds:     ["2", "3", "4", "1"],
    featuredTour: false,
    onSale:       true,
    saleDiscountPercentage: 15,
  },
  {
    id:          "21",
    title:       "Explore North and Central Vietnam 10 Days",
    imageUrl:    "https://asiaeyestravel.com/uploads/source/tours/anh-cua-thuc/ninh-binh%2C-trang-an.webp",
    description: `Explore & Experience Vietnam with 10 Days / 9 Nights offers a thoughtfully designed journey from the bustling capital of Hanoi to the timeless charm of Hoi An , combining culture, history, nature, and authentic local experiences. Wander through Hanoi’s Old Quarter by cyclo and enjoy a street food tour , travel by Vietnam Army Jeep to Ba Vi National Park and Duong Lam Ancient Village , and marvel at the breathtaking landscapes of Ninh Binh . Enjoy an unforgettable overnight Halong Bay cruise before heading to Central Vietnam, where you can explore and soak in the relaxed pace and historic beauty of Hoi An Ancient Town.`,
    itinerary:   `Day 1: Xin Chao Hanoi, Vietnam
Upon your arrival at Noi Bai Airport, Asia Eyes Travel’s tour guide and driver will pick you up and transfer you to the hotel. Today you are free to relax after a long flight. Overnight in Hanoi.
Includes: Private bus/ Car and tour guide
Excludes: Meals and personal expense
Accomodation : 4* or 5* star on request
Hanoi Tirant Hotel or similar
Address: 38 P. Gia Ngư, Hàng Bạc, Hoàn Kiếm, Hà Nội
Phone: 024 6265 5999
Apricot Hotel Hanoi or similar
Address: 136 P. Hàng Trống, Hàng Trống, Hoàn Kiếm, Hà Nội Phone: 024 3828 9595
Note: Early check-in upon request

Day 2:  Cyclo & Street Food Experience in the afternoon
This morning is free for you to explore Hanoi at your own pace. The Old Quarter is the perfect place to immerse yourself in the city’s charm and history. Wander through its narrow streets, each historically named after the goods once sold there, and discover a unique blend of French colonial architecture , ancient temples , and traditional Vietnamese houses . The lively atmosphere, with bustling markets , street vendors , and vibrant local life, makes the Old Quarter a truly fascinating destination.
In the afternoon at 4:00 PM, enjoy a Cyclo tour around Hoan Kiem Lake . Your ride will take you through the charming alleys of the Old Quarter and past the famous Train Street , then you’ll continue on foot to sample some of Hanoi’s best street food , including Egg coffee , Banh Mi , Pho , Bun Cha , and other local delicacies.
This combination of sightseeing , local culture , and culinary experiences offers a perfect introduction to the energy and flavors of Hanoi , leaving you with unforgettable memories of the city. Overnight in Hanoi .
Includes: Private bus/ Car and tour guide
Excludes: Meals and personal expense
Accomodation : 4* or 5* star on request
Hanoi Tirant Hotel or similar
Address: 38 P. Gia Ngư, Hàng Bạc, Hoàn Kiếm, Hà Nội
Phone: 024 6265 5999
Apricot Hotel Hanoi or similar
Address: 136 P. Hàng Trống, Hàng Trống, Hoàn Kiếm, Hà Nội Phone: 024 3828 9595
Note: Early check-in upon request

Day 3:  Private Jeep tour to Ba Vi moutain and Duong Lam village
Start your day at 7:00 AM with hotel pickup in Hanoi’s Old Quarter. Your friendly Asia Eyes Travel driver and guide will take you on a scenic drive from the bustling city to the peaceful Vietnamese countryside. At 9:00 AM, hop into a Vietnam Army Jeep for an off-road adventure through charming villages, green rice fields, and rural backroads. Meet local farmers, observe traditional farming, and experience the slow rhythm of village life. By 10:30 AM, ascend to Ba Vi National Park, driving through lush tropical jungles. At 11:00 AM, take a short trek to the Ho Chi Minh Temple atop Ba Vi Peak, enjoy panoramic mountain views, and learn about its spiritual and cultural significance. Return downhill to Duong Lam Ancient Village by 12:00 PM and enjoy an authentic, home-cooked Vietnamese lunch with a local family. At 1:30 PM, explore the historic village streets, visit Mong Phu Communal House, Mia Temple, and the memorials of Phung Hung and Ngo Quyen. Experience local life, learn traditional crafts, and enjoy tea with villagers. At 3:30 PM, relax during the scenic drive back to Hanoi, arriving at your hotel around 5:00 PM. Join our Hanoi Jeep Tours to Duong Lam for an unforgettable cultural and countryside experience. Overnight in Hanoi.

Day 4: Private Hanoi to Ninh Binh Tour
After enjoying a delicious breakfast, we will begin our journey to Ninh Binh . Along the way, we will make several scenic stops , giving you the perfect opportunity to capture the stunning views and take memorable photos of the beautiful countryside .
At 10:30 AM, we will arrive in Ninh Binh and head to Hoa Lu , the ancient capital of Vietnam. Here, you will visit the historic Hoa Lu Temple , dedicated to the Dinh and Le kings , offering a glimpse into Vietnam’s rich history and cultural heritage . Surrounded by dramatic limestone cliffs , the temple provides a peaceful and spiritual setting for exploration.
After visiting Hoa Lu , we will continue our journey to Trang An Grottoes , where you will embark on a relaxing boat trip to explore this UNESCO World Heritage site . Known for its remarkable natural beauty, Trang An is home to majestic limestone massifs that rise dramatically from the lush rice paddies . As you glide along the tranquil rivers, you will pass through caves and admire the stunning karst formations that make this area famous. Overnight in Ninh Binh .
Includes: Breakfast, small Tour group, lunch, entrance fees, English speaking tour guide
Excludes: Drinks, dinner and personal expense
Accomodation: 4* or 5* star on request
Lalita Ninh Binh Resort
Address: Thung Nham, Hoa Lư District, Ninh Bình Phone: 0229 3626 888
Emeralda Resort Ninh Binh
Address: Van Long Wetland Nature Reserve, Xã, Gia Vân, Gia Viễn, Ninh Bình Phone: 0229 3658 333

Day 5:  Ninh Binh - Halong Bay by private transfer
After having breakfast, your bus will pick you up and we will begin our drive to Halong Bay , located 190 kilometers away. At 11:45 AM, we will arrive in Halong Bay , where you will be warmly welcomed by the crew team . From there, you will be transferred to the boat and enjoy a delicious lunch onboard .
Following lunch, you can take part in a variety of activities, such as kayaking , swimming , or simply relaxing on the sundeck while soaking in the stunning beauty of Halong Bay and Lan Ha Bay . The bay's unique limestone islands , clear waters, and serene atmosphere provide the perfect backdrop for relaxation and adventure .
You will spend the night on the cruise , allowing you to fully experience the tranquility of Halong Bay and its breathtaking landscapes . The evening on the boat promises a peaceful and memorable stay, surrounded by the natural wonders of one of Vietnam’s most iconic destinations . Overnight on Cruise .
Includes: Private transfer, entrance fees, breakfast, lunch and dinner
Excludes: Drinks, personal expense
Accomodation: 4* or 5* star cruise on request
Sena Cruises or similar
Address : International Habour, Tuần Châu, Hạ Long, Quảng Ninh Phone : 0974 001 062
Peony Cruise or similar
Address: 16 P. Thi Sách, Ngô Thì Nhậm, Hai Bà Trưng, Hà Nội 100000 Phone: +84935946688

Day 6: Halong Bay – Hanoi Airport for Flight to Danang
6:30 AM - 7:30 AM: Start your day with a delicious breakfast served on board. After breakfast, enjoy a variety of exciting cruise activities , followed by a delightful lunch while taking in the stunning views of Halong Bay .
11:50 AM: Disembark from the cruise and return to the port. Our driver will transfer you to Hanoi Airport for your flight to Danang in the afternoon. Upon arrival at Danang Airport , our friendly tour guide and driver will greet you and transfer you to the charming town of Hoi An .
After checking in at your hotel , you are free to explore Hoi An at your own pace. Discover its picturesque streets, vibrant markets , and the beautiful mix of cultural influences that make this town so unique. Overnight in Hoi An .
Includes:
Includes: Private transfer, entrance fees, breakfast, lunch and flight ticket to Danang by Vietnam airline
Excludes: Drinks, personal expense
Accomodation: 4* or 5* star on request
Hoian Delicacy Hotel or similar
Address: No 116 Hùng Vương, Street, Hội An, Quảng Nam
Phone: 0386 272 471
Palm Garden Resort or similar
Address: Lạc Long Quân, Cửa Đại, Hội An, Quảng Nam Phone: 0235 3927 927

Day 7:  Private Hoi An – Countryside Jeep Tour
7:45 AM: Our Jeep car driver and tour guide will pick you up for an unforgettable journey through the countryside of Hoi An . Today, you'll visit a local farm , gaining insights into the cultivation of rice , vegetables , and various cereal crops , immersing yourself in the daily life of hardworking farmers .
You’ll also discover traditional rural occupations such as weaving , rice-wine making , and woodcarving , experiencing craftsmanship passed down through generations. Additionally, learn about modern industries like bird’s nest farming and aquaculture developing in the region.
To complete your countryside experience , you’ll be welcomed into a local family’s home for a delicious home-cooked meal , offering a unique and intimate look into the lives of middle-class Vietnamese families . It’s an incredible opportunity to learn about culture , values , and hospitality integral to rural Vietnam . Overnight in Hoi An .
Includes: Private Jeep tour with Enlish speaking tour guide, entrance fees, breakfast, lunch.
Excludes: Drinks, and personal expense
Accomodation: 4* or 5* star on request
Hoian Delicacy Hotel or similar
Address: No 116 Hùng Vương, Street, Hội An, Quảng Nam
Phone: 0386 272 471
Palm Garden Resort or similar
Address: Lạc Long Quân, Cửa Đại, Hội An, Quảng Nam Phone: 0235 3927 927

Day 8 & Day 9 Hoian - Free Days
Today is yours to relax and explore Hoi An Ancient Town at your own pace. Stroll through the charming streets of this UNESCO World Heritage site , admire traditional architecture, colorful lanterns, and unique boutiques. Don’t miss the Japanese Covered Bridge , a historic symbol of cultural exchange, and the bustling Hoi An Market , where you can experience local life and savor authentic street food.
Take the time to browse vibrant markets, visit tailor shops for custom garments, or join a hands-on cooking class to learn traditional recipes. Whether enjoying riverside restaurants, shopping for souvenirs, or simply soaking in the town’s peaceful ambiance, Hoi An offers the perfect balance of leisure and discovery. With its rich culture, flavors, and picturesque scenery, these moments will make your stay truly memorable. Overnight in Hoi An.
Includes: Breakfast
Excludes: Lunch, dinner, and personal expense
Accomodation: 4* or 5* star on request
Hoian Delicacy Hotel or similar
Address: No 116 Hùng Vương, Street, Hội An, Quảng Nam
Phone: 0386 272 471
Palm Garden Resort or similar
Address: Lạc Long Quân, Cửa Đại, Hội An, Quảng Nam Phone: 0235 3927 927

Day 10:  Hoian – Departure
Today is yours to unwind and enjoy at your own pace until it's time for your transfer to Danang International Airport for your departure flight.
On behalf of Asia Eyes Travel, I am Thuc Nguyen . We sincerely appreciate your trust in us and look forward to creating more unforgettable travel experiences with you on your next trip.
Includes: Breakfast and private transfer to airport
Excludes: Late check out`,
    duration:    "10 Days/ 9 Nights",
    price:       890,
    categoryIds: ["1"],
    cityIds:     ["2", "3", "1", "13"],
    featuredTour: false,
    onSale:       false,
    saleDiscountPercentage: null,
  },
  {
    id:          "22",
    title:       "Ultimate 15-Day Vietnam Tour Itinerary",
    imageUrl:    "https://asiaeyestravel.com/uploads/source/tours/vietnam-tours.jpg",
    description: `Begin your Vietnam journey in Hanoi , where ancient charm blends seamlessly with modern life. Discover the city’s famous street food before traveling to Ninh Binh , the former ancient capital known for its limestone mountains, rice fields, and peaceful countryside. Your adventure continues with a luxury Halong Bay cruise , sailing through emerald waters and breathtaking limestone cliffs, one of the top must-see destinations for any Vietnam vacation.
Fly to central Vietnam to explore Hoi An , a UNESCO World Heritage town renowned for its lantern-lit streets, traditional craft villages, and serene countryside. Next, head south to Ho Chi Minh City , a vibrant metropolis offering a blend of history, culture, and modern lifestyle.
Your journey concludes in the Mekong Delta , where lush waterways, floating markets, and authentic local life create an unforgettable experience.
This 15-day Vietnam itinerary from North to Central and South offers the perfect mix of culture, nature, cuisine, beaches, and history, making it an ideal choice for travelers seeking the best Vietnam tour package in 2026.`,
    itinerary:   `Day 1: Hanoi arrival
Upon your arrival at Noi Bai Airport, Asia Eyes Travel’s tour guide and driver will pick you up and transfer you to the hotel. Today you are free to relax after a long flight.
Overnight in Hanoi.
Includes: Private bus/ Car and tour guide
Excludes: Meals and personal expense
Accomodation : 4* or 5* star on request
Hanoi Tirant Hotel
Address: 38 P. Gia Ngư, Hàng Bạc, Hoàn Kiếm, Hà Nội
Phone: 024 6265 5999
Apricot Hotel Hanoi
Address: 136 P. Hàng Trống, Hàng Trống, Hoàn Kiếm, Hà Nội Phone: 024 3828 9595
Note: Early check-in upon request

Day  2: Discover the Hidden Beauty of Hanoi’s Handicraft Villages
9:00 AM: Our tour guide and driver will pick you up from your hotel to start a fascinating journey through Hanoi’s most charming traditional handicraft villages.
Your first stop is Van Phuc Silk Village , famous for its century-old silk weaving tradition. Here, you’ll observe the meticulous silk-making process and explore local shops offering a variety of high-quality silk products.
Next, continue to Quang Phu Cau Incense Village , where thousands of colorful incense sticks are hand-crafted and beautifully displayed, creating a stunning photo opportunity.
Afterward, drive to Duong Lam Ancient Village , a peaceful countryside area often called the “living museum” of Vietnamese rural life. Cycle or take an electric car through narrow alleys shaded by bamboo trees, and visit highlights such as Mong Phu Communal House, Mia Pagoda—one of Vietnam’s oldest pagodas—and the temples of Vietnamese kings.
Enjoy the tranquil scenery of rice fields, village gates, and banyan trees, and stop at a local home to taste “Che Lam,” a traditional sweet snack.
Return to Hanoi in the late afternoon after a day filled with culture, history, and authentic local charm.
Overnight in Hanoi.
Includes: Private transfer, English peaking tour guide, lunch
Excludes: Drinks, dinner and personal expense
Accomodation : 4* or 5* star on request
Hanoi Tirant Hotel
Address: 38 P. Gia Ngư, Hàng Bạc, Hoàn Kiếm, Hà Nội
Phone: 024 6265 5999
Apricot Hotel Hanoi
Address: 136 P. Hàng Trống, Hàng Trống, Hoàn Kiếm, Hà Nội Phone: 024 3828 9595

Day  3: Hanoi – Morning at Leisure & Cyclo Street Food Experience
This morning is free for you to explore Hanoi at your own pace. The Old Quarter is the perfect place to immerse yourself in the city’s charm and history. Wander through its narrow streets, each historically named after the goods once sold there, and discover a unique blend of French colonial architecture, ancient temples, and traditional Vietnamese houses. The lively atmosphere, with bustling markets, street vendors, and vibrant local life, makes the Old Quarter a truly fascinating destination.
In the afternoon at 5:00 PM , enjoy a Cyclo tour around Hoan Kiem Lake. Your ride will take you through the charming alleys of the Old Quarter and past the famous Train Street , where you can stop for a refreshing local drink. From there, you’ll continue on foot to sample some of Hanoi’s best street food, including Banh Mi, Pho, Bun Cha, and other local delicacies.
This combination of sightseeing, local culture, and culinary experiences offers a perfect introduction to the energy and flavors of Hanoi, leaving you with unforgettable memories of the city.
Overnight in Hanoi
Includes: Private transfer, English peaking tour guide, dinner and drinks
Excludes: Lunch and personal expense
Accomodation : 4* or 5* star on request
Hanoi Tirant Hotel
Address: 38 P. Gia Ngư, Hàng Bạc, Hoàn Kiếm, Hà Nội
Phone: 024 6265 5999
Apricot Hotel Hanoi
Address: 136 P. Hàng Trống, Hàng Trống, Hoàn Kiếm, Hà Nội Phone: 024 3828 9595

Day  4: Hanoi – Ninh Binh
After enjoying a delicious breakfast, we will begin our journey to Ninh Binh. Along the way, we will make several scenic stops, giving you the perfect opportunity to capture the stunning views and take memorable photos of the beautiful countryside.
At 10:30 AM , we will arrive in Ninh Binh and head to Hoa Lu, the ancient capital of Vietnam. Here, you will visit the historic Hoa Lu Temple , dedicated to the Dinh and Le kings, offering a glimpse into Vietnam’s rich history and cultural heritage. Surrounded by dramatic limestone cliffs, the temple provides a peaceful and spiritual setting for exploration.
After visiting Hoa Lu, we will continue our journey to Trang An Grottoes , where you will embark on a relaxing boat trip to explore this UNESCO World Heritage site. Known for its remarkable natural beauty, Trang An is home to majestic limestone massifs that rise dramatically from the lush rice paddies. As you glide along the tranquil rivers, you will pass through caves and admire the stunning karst formations that make this area famous.
Overnight in Ninh Binh
Includes: Breakfast, small Tour group, lunch, entrance fees, English speaking tour guide
Excludes: Drinks, dinner and personal expense
Accomodation: 4* or 5* star on request
Lalita Ninh Binh Resort
Address: Thung Nham, Hoa Lư District, Ninh Bình Phone: 0229 3626 888
Emeralda Resort Ninh Binh
Address: Van Long Wetland Nature Reserve, Xã, Gia Vân, Gia Viễn, Ninh Bình Phone: 0229 3658 333
Ninh Binh (Tam Coc, Trang An)( 95KM) from Hanoi

Day 5: Ninh Binh - Halong Bay
After having breakfast, your bus will pick you up and we will begin our drive to Halong Bay, located 190 kilometers away.
At 11:45 AM, we will arrive in Halong Bay, where you will be warmly welcomed by the crew team. From there, you will be transferred to the boat and enjoy a delicious lunch onboard.
Following lunch, you can take part in a variety of activities, such as kayaking, swimming, or simply relaxing on the sundeck while soaking in the stunning beauty of Halong Bay and Lan Ha Bay . The bay's unique limestone islands, clear waters, and serene atmosphere provide the perfect backdrop for relaxation and adventure.
You will spend the night on the cruise, allowing you to fully experience the tranquility of Halong Bay and its breathtaking landscapes. The evening on the boat promises a peaceful and memorable stay, surrounded by the natural wonders of one of Vietnam’s most iconic destinations.
Overnight on cruise.
Includes: Shuttle bus, entrance fees, breakfast, lunch and dinner
Excludes: Drinks, personal expense
Accomodation: 4* or 5* star cruise on request
Sena Cruises or similar
Address : International Habour, Tuần Châu, Hạ Long, Quảng Ninh Phone : 0974 001 062
Peony Cruise
Address: 16 P. Thi Sách, Ngô Thì Nhậm, Hai Bà Trưng, Hà Nội 100000 Phone: +84935946688
Halong Bay (190 KM) From Ninh Binh

Day 6: Halong Bay – Hanoi - Fly to Hoian
6:30 AM - 7:30 AM: Start your day with a delicious breakfast served on board.
After breakfast, enjoy a variety of exciting cruise activities, followed by a delightful lunch while you continue to take in the stunning views of Halong Bay.
11:50 AM: Disembark from the cruise and return to the port. Our driver will transfer you to Hanoi Airport for your flight to Danang in the afternoon.
Upon arrival at Danang Airport, our friendly tour guide and driver will greet you and transfer you to the charming town of Hoi An.
After checking in at your hotel, you are free to explore Hoi An at your own pace. Discover its picturesque streets, vibrant markets, and the beautiful mix of cultural influences that make this town so unique.
Overnight in Hoi An.
Includes: Shuttle bus, private transfer from/to airport, flight ticket, breakfast and brunch
Excludes: Drinks, personal expense
Accomodation: 4* or 5* star on request
Hoian Delicacy Hotel
Address: No 116 Hùng Vương, Street, Hội An, Quảng Nam
Phone: 0386 272 471
Palm Garden Resort
Address: Lạc Long Quân, Cửa Đại, Hội An, Quảng Nam Phone: 0235 3927 927

Day 7: Hoian – Countryside Jeep tour
7:45 AM: Our Jeep car driver and tour guide will pick you up for an unforgettable journey through the countryside of Hoi An.
Today, you'll visit a local farm, where you’ll gain insights into the cultivation of rice, vegetables, and various cereal crops, immersing yourself in the daily life of the hardworking farmers.
You’ll also discover traditional rural occupations such as weaving, rice-wine making, and woodcarving, experiencing the craftsmanship that has been passed down through generations. Additionally, you will learn about modern industries like bird’s nest farming and aquaculture that are becoming more prevalent in the region.
To complete your countryside experience, you’ll be welcomed into a local family’s home for a delicious, home-cooked meal, offering a unique and intimate look into the lives of middle-class Vietnamese families. It’s an incredible opportunity to learn about the culture, values, and hospitality that are integral to rural Vietnam.
Overnight in Hoi An.
Includes: Private transfer, breakfast, Jeep tour with lunch, entrance fees, English speaking guide
Excludes: Drinks, personal expense
Accomodation: 4* or 5* star on request
Hoian Delicacy Hotel
Address: No 116 Hùng Vương, Street, Hội An, Quảng Nam
Phone: 0386 272 471
Palm Garden Resort
Address: Lạc Long Quân, Cửa Đại, Hội An, Quảng Nam Phone: 0235 3927 927

Day 8,Day 9, Day 10: Hoi An – Free days
These days, you will have free time to explore Hoi An Ancient Town or go shopping. Hoi An is a paradise of hundreds of tailor shops, where you can have a special garment made to your liking. The city is also famous for its delicious local cuisine, so don’t miss the opportunity to enjoy signature dishes at riverside restaurants, or join a cooking class to fully experience the flavors of Hoi An.
Overnight in Hoi An.
Includes: Breakfast
Excludes: Lunch, dinner and personal expense
Accomodation: 4* or 5* star on request
Hoian Delicacy Hotel
Address: No 116 Hùng Vương, Street, Hội An, Quảng Nam
Phone: 0386 272 471
Palm Garden Resort
Address: Lạc Long Quân, Cửa Đại, Hội An, Quảng Nam Phone: 0235 3927 927

Day 11: Hoi An – Danang -  Fly to Ho Chi Minh
Today take a short, early morning flight to Ho Chi Minh City. Formerly known as Saigon, Ho Chi Minh City has a fascinating history and is arguably Vietnam’s capital of commerce and culture. After landing, take a sightseeing tour around the city. You will visit the Reunification Palace, Notre Dame Cathedral and the Opera House , then stop in at the War Remnants Museum to discover some of the sobering stories of the 20-year-long Vietnam/American War.
Overnight in Ho Chi Minh.
Includes: Private transfer form/to airport, flight ticket, breakfast, Small group city tour with lunch, English speaking guide
Excludes: Drinks, dinner and personal expense
Accomodation: 4* or 5* star on request
Saigon Prince Hotel or similar
Address: 63 Nguyễn Huệ, Bến Nghé, Quận 1, Thành phố Hồ Chí Minh
Phone: 028 3822 2999
New World Saigon Hotel or similar
Address: 76 Lê Lai, Phường Bến Thành, Quận 1, Thành phố Hồ Chí Minh Phone: 028 3822 8888
Ho Chi Minh City (District 1)

Day 12: Ho Chi Minh - Mekong Delta
8:00 AM: You will be picked up at your hotel in the morning, and we will bring you down to the Mekong Delta . On the way you will get a chance to view the beautiful scenery as we go past the stunning rice fields.
Upon arrival at Ben Tre , take a relaxing boat trip on the Mekong River to enjoy the fresh air and the charming stilt house at the river bank. Then, visit the authentic life of the locals and challenge yourself to bargaining at cottage handicraft shops. Take an adventurous sampan ride in palm shaded canals.
Arriving at one of the villages, the locals will serve you with fresh honey tea and tropical fruits whilst they will perform their traditional folk music. Experience the rural lifestyle as we pay a visit to a local family business, where they produce coconut candy…
Overnight in Ho Chi Minh.
Includes: Small Tour Group to Mekong Delta, English speaking guide, lunch, entrance fees, boat
Excludes: Drinks, dinner and personal expense
Accomodation : 4* or 5* star on request
Saigon Prince Hotel or similar
Address: 63 Nguyễn Huệ, Bến Nghé, Quận 1, Thành phố Hồ Chí Minh
Phone: 028 3822 2999
New World Saigon Hotel or similar
Address: 76 Lê Lai, Phường Bến Thành, Quận 1, Thành phố Hồ Chí Minh
Phone: 028 3822 8888

Day 13 & Day 14:  Ho Chi Minh – Free days
Enjoy these free days in Ho Chi Minh City to explore and discover the city at your own pace.
Optional Tour: If you would like to visit the Cu Chi Tunnels, we would be happy to arrange it for you (additional fees apply).
Overnight in Ho Chi Minh.
Includes: Breakfast
Excludes: Drinks, lunch, dinner and personal expense
Accomodation : 4* or 5* star on request
Saigon Prince Hotel or similar
Address: 63 Nguyễn Huệ, Bến Nghé, Quận 1, Thành phố Hồ Chí Minh
Phone: 028 3822 2999
New World Saigon Hotel or similar
Address: 76 Lê Lai, Phường Bến Thành, Quận 1, Thành phố Hồ Chí Minh
Phone: 028 3822 8888

Day 15: Ho Chi Minh - Departure
Today is yours to unwind and enjoy at your own pace until it's time for your transfer to Tan Son Nhat International Airport for your departure flight.
On behalf of Asia Eyes Travel, I am Thuc Nguyen . We sincerely appreciate your trust in us and look forward to creating more unforgettable travel experiences with you on your next trip.
Includes: Private transfer to airport
Excludes: English speaking tour guide
Accomodation: N/ A
Note: Late check-out upon request.`,
    duration:    "15 Days/ 14 Nights",
    price:       1450,
    categoryIds: ["1"],
    cityIds:     ["2", "3", "1", "13", "21", "20"],
    featuredTour: false,
    onSale:       false,
    saleDiscountPercentage: null,
  },
  {
    id:          "23",
    title:       "Discover Vietnam in 12 Days from North to South",
    imageUrl:    "https://asiaeyestravel.com/uploads/source/anh.jpg",
    description: `Asia Eyes Travel DMC Vietnam offers a 12-day Vietnam tour from North to South , exploring the country’s iconic destinations, rich culture , and stunning scenery. Begin in Hanoi , with ancient temples, colonial architecture, and famous street food . Visit Ninh Binh , known as “ Halong Bay on land ,” with limestone karsts and scenic boat rides. Spend a night on a Ha Long Bay cruise among limestone islands and hidden caves. Explore Hoi An Ancient Town and An Bang Beach , then fly to Ho Chi Minh City and discover the Cu Chi Tunnels , War Remnants Museum , and the Mekong Delta , including floating markets, tropical orchards, and local communities`,
    itinerary:   ``,
    duration:    "12 Days/ 11 Nights",
    price:       890,
    categoryIds: ["1"],
    cityIds:     ["2", "3", "1", "13", "21", "20"],
    featuredTour: false,
    onSale:       false,
    saleDiscountPercentage: null,
  },
  {
    id:          "24",
    title:       "11-Day Vietnam Highlights Tour",
    imageUrl:    "https://asiaeyestravel.com/uploads/source/tours/small-photo/hanoi/vietnam-(1).jpg",
    description: `Begin your 11-day journey through Vietnam’s most captivating destinations. Start in Ho Chi Minh City , where vibrant streets and rich history welcome you with open arms. Drift along the Mekong Delta , exploring peaceful canals and meeting friendly locals in riverside villages.
Fly to Danang - Hoi An , the lantern-lit town of timeless charm, and uncover the ancient secrets of My Son Sanctuary . Cross the breathtaking Hai Van Pass to Hue , the former imperial capital filled with royal tombs, pagodas, and poetic beauty.
Continue north to Hanoi , where tree-lined boulevards and hidden alleyways reveal a perfect blend of tradition and modern life. Discover the tranquil landscapes of Ninh Binh , the “Ha Long Bay on land,” before embarking on an unforgettable overnight cruise through the emerald waters and towering limestone cliffs of Ha Long Bay .
From vibrant cities to serene countryside and stunning seascapes, this journey captures the very soul of Vietnam.
For more information about hot deals, early bird promotions, or other Vietnam tours, please contact us at info@asiaeyestravel.com , For urgent inquiries, you may reach out directly to the company owner, Mr. Thuc , via WhatsApp at +84 935 946 688 for a quick response.`,
    itinerary:   `Day 1: Hello Vietnam (Xin Chao Vietnam)
Upon arrival at Tan Son Nhat International Airport, our Asia Eyes Travel tour guide and driver will warmly welcome you and transfer you to your hotel for check-in. Take the rest of the day to relax and recover after your long flight.
Overnight in Ho Chi Minh City.
Includes: Private bus/ Car and tour guide
Excludes: Meals and personal expense
Accomodation : 4* or 5* star on request
Saigon Prince Hotel or similar
Address: 63 Nguyễn Huệ, Bến Nghé, Quận 1, Thành phố Hồ Chí Minh
Phone: 028 3822 2999
New World Saigon Hotel or similar
Address: 76 Lê Lai, Phường Bến Thành, Quận 1, Thành phố Hồ Chí Minh
Phone: 028 3822 8888
Note: Early check-in upon request

Day 2: Full Day Trip to Mekong Delta
08:00 AM: Asia Eyes Travel tour guide and driver will pick you up at the hotel, then depart for the Mekong Delta. Along the way, enjoy the picturesque countryside views with vast, lush rice fields stretching to the horizon.
Upon arrival in Ben Tre, embark on a relaxing boat trip along the Mekong River. Take in the fresh breeze and admire the charming stilt houses lining the riverbanks. You’ll then explore local workshops, discover traditional handicrafts, and experience daily life in the delta, maybe even try your hand at bargaining like a local.
Enjoy a delicious lunch at a riverside restaurant before continuing your journey. Later, take a peaceful sampan ride through palm-shaded canals, the perfect way to soak up the Mekong’s natural beauty and serene atmosphere.
Overnight in Ho Chi Minh City.
Includes: Small Tour Group to Mekong Delta, English speaking guide, lunch, entrance fees, boat
Excludes: Drinks, dinner and personal expense
Accomodation : 4* or 5* star on request

Day 3: Ho Chi Minh City – Fly to Hoi An
Today, you will take a short flight from Ho Chi Minh City to Da Nang. Upon arrival, our tour guide and driver will meet you at the airport and transfer you to Hoi An, a UNESCO World Heritage Site renowned for its beautifully preserved ancient town and timeless charm. After checking in at your hotel, you are free to explore Hoi An Ancient Town at your own pace.
Overnight in Hoian:
Includes: Breakfast, Flight ticket, private transfer from/to airport
Excludes: Lunch, dinner, drinks and personal expense
Accomodation: 4* or 5* star on request
Hoian Delicacy Hotel
Address: No 116 Hùng Vương, Street, Hội An, Quảng Nam 560000
Phone: 0386 272 471
Palm Garden Resort
Address: Lạc Long Quân, Cửa Đại, Hội An, Quảng Nam
Phone: (+84) 0235 3927 927

Day 3:  Jeep Adventure to Hoi An Countryside
At 8:00 AM: Your Jeep tour begins as you head into the peaceful Hoi An countryside. Travel along quiet village roads and scenic trails, passing through lush rice paddies, coconut groves, and tranquil rivers. Along the way, you’ll visit local farming communities where traditional agricultural methods are still practiced. Watch farmers tending their fields and water buffaloes plowing the land — a scene that perfectly captures the rural beauty of Vietnam.
You’ll also have the opportunity to meet friendly locals, visit small workshops where villagers handcraft mats, rice paper, and pottery, and experience the warm hospitality of the region. Enjoy lunch with a local family before returning to Hoi An.
Overnight in Hoi An.
Includes: Breakfast, Jeep tour with lunch, entrance fees, English speaking guide
Excludes: Drinks, dinner and personal expense
Accomodation: 4* or 5* star on request

Day 4 & Day 5: Hoi An – Free Day to Explore
Days 4 and 5 are free for you to enjoy at your own pace and explore the timeless charm of Hoi An. You may take a leisurely bike ride to An Bang Beach, just a short distance from the Old Town, where soft white sands and gentle waves invite you to relax. Unwind under swaying palm trees, sip a cool drink by the sea, or simply soak in the peaceful coastal atmosphere.
Back in town, wander through narrow lantern-lit streets, admire the colorful architecture, and browse boutique shops offering handcrafted souvenirs, silk garments, and tailor-made clothing. As evening falls, the riverside transforms into a magical scene illuminated by hundreds of glowing lanterns — a truly unforgettable sight that captures the romantic spirit of Hoi An. Overnight in Hoi An.
Includes: Breakfast
Excludes: Lunch, dinner and personal expense
Accomodation: 4* or 5* star on request

Day 6: Journey from Hoi An to Hue City
8:00 AM: Our driver and tour guide will pick you up for the journey to Hue City. On the way, stop at the spectacular Hai Van Pass, one of Vietnam’s most scenic routes, where you can enjoy panoramic views of the mountains, coastline, and the sparkling blue waters of the East Sea — a perfect spot for memorable photos.
Upon arrival in Hue, begin exploring the city’s imperial treasures, starting with the iconic Thien Mu Pagoda, gracefully perched along the banks of the Perfume River. Continue your journey to the magnificent royal tombs of Emperors Khai Dinh and Tu Duc , whose elaborate architecture and tranquil surroundings reflect the grandeur of Vietnam’s imperial past. These masterpieces beautifully embody Hue’s rich history and timeless cultural elegance. Overnight in Hue.
Includes: Private transfer, entrance fees, lunch, English speaking tour guide
Excludes: Drinks and Personal expense
Accomodation: 4* or 5* star on request
White Lotus Hotel
Address: 05-07 Hoàng Hoa Thám, Phú Nhuận, Huế, Thành phố Huế 47000
Phone: 0234 3881 888
Senna Hue Hotel
Address: 7 Nguyễn Tri Phương, Phú Hội, Huế, Thành phố Huế 53000
Phone: 0234 3858 686

Day 7: Hue fly to Hanoi – Hanoi Evening Scooter Tour
This morning, you are free at leisure until our driver picks you up for your flight to Hanoi.
Upon arrival at Hanoi Airport, our driver and tour guide will meet you and transfer you to your hotel for check-in and relaxation.
At 5:00 PM: Y our scooter driver will pick you up to begin an exciting evening tour of Hanoi. Ride through the narrow alleys to explore hidden corners, old houses, and the daily life of local residents, places rarely seen by most tourists.
Beyond the small streets, you’ll also visit some of Hanoi’s highlights such as Train Street, Ho Chi Minh Mausoleum, and Huu Tiep Lake (B-52 Lake), where remnants of the Vietnam War remain.
End the evening by enjoying a delicious street food dinner and unlimited local drinks, experiencing Hanoi’s vibrant nightlife like a true local.
Includes: Private transfer, flight ticket, scooter tour with dinner and drinks, English peaking tour guide.
Excludes: Drinks, lunch, dinner, and personal expense
Accomodation: 4* or 5* star on request
Hanoi Tirant Hotel
Address: 38 P. Gia Ngư, Hàng Bạc, Hoàn Kiếm, Hà Nội - Phone: 024 6265 5999
Apricot Hotel Hanoi
Address: 136 P. Hàng Trống, Hàng Trống, Hoàn Kiếm, Hà Nội Phone: 024 3828 9595

Day 8: Explore the Beauty of Ninh Binh
8:30 AM: Our tour guide and driver will pick you up from your hotel to begin a scenic journey to Ninh Binh, a stunning region often referred to as the “Halong Bay on land.”
Our first stop is Hoa Lu, the ancient capital of Vietnam during the 10th and 11th centuries. Here, you’ll explore historic temples dedicated to the Dinh and Le Kings, surrounded by dramatic limestone karsts that create a breathtaking backdrop. After exploring Hoa Lu and learning about its rich history, enjoy a delicious lunch at a local restaurant.
In the afternoon, continue to the peaceful Trang An Scenic Landscape Complex, where you’ll take a relaxing boat trip through beautiful caves and lush landscapes, a serene and picturesque experience.
Return to your hotel in Ninh Binh for overnight.
Includes: Breakfast, small Tour group, lunch, entrance fees, English speaking tour guide
Excludes: Drinks, dinner and personal expense
Accomodation: 4* or 5* star on request
Lalita Ninh Binh Resort
Address: Thung Nham, Hoa Lư District, Ninh Bình Phone: 0229 3626 888
Emeralda Resort Ninh Binh
Address: Van Long Wetland Nature Reserve, Xã, Gia Vân, Gia Viễn, Ninh Bình 430000 Phone: 0229 3658 333

Day 9: Ninh Binh to Halong Bay – Overnight Cruise Experience
At 7:30 AM, our driver and tour guide will pick you up and transfer you to Halong Bay, one of Vietnam’s most breathtaking natural wonders.
11:40 AM | Cruise Check-in Arrive at the harbor and receive a warm welcome from the cruise team at the waiting lounge. Complete the check-in process and prepare to board your overnight cruise.
12:30 PM | Embark & Welcome Drink Step aboard and enjoy a refreshing welcome drink as you listen to a short safety briefing. Check into your cabin and get ready as the cruise begins to sail gently into the stunning Bai Tu Long Bay., Lan Ha Bay or Halong Bay
1:30 PM | Lunch on Board Savor a delicious Vietnamese set menu lunch while admiring the magnificent limestone landscapes and calm emerald waters.
3:30 PM | Afternoon Activities Get ready for an adventure as you kayak around Cap La Island, explore hidden lagoons and limestone cliffs, take a refreshing swim, or simply relax on the sundeck soaking in the tranquility.
6:30 PM | Sunset Party & Cooking Class Return to the boat and unwind with tea, coffee, fresh fruit, and snacks as the sun sets over the bay. Join a Vietnamese cooking class to learn how to make fresh spring rolls (Nem Cuon) or try your hand at vegetable carving.
7:30 PM | Dinner Time Enjoy a romantic dinner in the peaceful atmosphere of the bay, surrounded by starlit skies and gentle waves.
9:00 PM | Evening Leisure After dinner, you may try squid fishing with the crew, sip a drink during Happy Hour, or simply relax on the sundeck.
Overnight on the Cruise.
Includes: Breakfast, lunch, dinnner, shuttle bus, entrance fees, kayaking, English speaking tour guide on boat.
Excludes: Drinks, and personal expense
Halong Bay Cruises:
Accomodation: 4* or 5* star cruise on request
Sena Cruises or similar
Address: International Habour, Tuần Châu, Hạ Long, Quảng Ninh Phone: 0974 001 062
Peony Cruise
Address: 16 P. Thi Sách, Ngô Thì Nhậm, Hai Bà Trưng, Hà Nội 100000 Phone: +84935946688

Day 10: Halong Bay – Hanoi
6:45 AM | Breakfast Start your day with a Western-style breakfast while enjoying the peaceful morning atmosphere of the bay.
8:00 AM | Cave Exploration Visit a hidden cave known for its magnificent stalactites and panoramic views of Bai Tu Long Bay — a perfect spot for photos and quiet reflection before returning to the cruise.
9:00 AM | Check-out & Brunch Head back to the boat to freshen up and pack your luggage. Then, savor a traditional Vietnamese brunch as the cruise gently sails back toward the harbor.
11:45 AM | Disembark & Return to Hanoi Arrive at Ha Long International Harbor, where your driver will be waiting to transfer you back to Hanoi. Overnight in Hanoi.
Includes: Shuttle bus, entrance fees, breakfast and lunch
Excludes: Drinks, personal expense
Accomodation: 4* or 5* star on request

Day 11: Hanoi Farewell – Thank You for Traveling with Us!
Depending on your flight schedule, you may have some free time to relax or explore Hanoi at your own pace before your transfer to the airport.
At the appointed time, our driver will pick you up and take you to Noi Bai International Airport for your departure flight.
Asia Eyes Travel sincerely thanks you for choosing us and hopes to welcome you, your family, and your friends back to Vietnam in the near future.
Includes: Private transfer to airport
Excludes: English speaking tour guide
Accomodation: N/ A
Note: Late check-out upon request.`,
    duration:    "11 Days/ 10 Nights",
    price:       960,
    categoryIds: ["1"],
    cityIds:     ["2", "3", "1", "13", "12", "21", "20"],
    featuredTour: false,
    onSale:       false,
    saleDiscountPercentage: null,
  },
  {
    id:          "25",
    title:       "17 Days Across Vietnam &  Phu Quoc Island",
    imageUrl:    "https://asiaeyestravel.com/uploads/source/tours/the-beauty-of-phu-quoc-island.jpg",
    description: `Begin your journey from Hanoi, where ancient temples, tree-lined boulevards, and the lively Old Quarter offer a vibrant glimpse into local life. A short drive away, Ninh Binh and its majestic Trang An river caves reveal the tranquility of the countryside, with limestone cliffs rising dramatically above lush rice fields. Continue to Halong Bay , where an overnight cruise carries you through emerald waters and thousands of towering karst islands, a true natural wonder. Flying central, Hoi An captivates with colorful lanterns, heritage houses, and a peaceful riverside atmosphere. In the Mekong Delta , life unfolds along winding waterways, where floating markets and tropical orchards welcome travelers into a world shaped by rivers. Your journey concludes in pure bliss on Phu Quoc Island, home to white-sand beaches, crystal-clear waters, and unforgettable sunsets, the perfect tropical finale.`,
    itinerary:   `Day 1: Arrival in Hanoi
Welcome to Vietnam, the land of wonders!
Upon your arrival at Noi Bai Airport, the Asia Eyes Travel team will welcome you and transfer you to the hotel. After check-in, you will have free time to explore the city at your own pace.
Overnight in Hanoi.
Includes: Private bus/ Car and tour guide
Excludes: Meals and personal expense
Accomodation : 4* or 5* star on request
Hanoi Tirant Hotel
Address: 38 P. Gia Ngư, Hàng Bạc, Hoàn Kiếm, Hà Nội
Phone: 024 6265 5999
Apricot Hotel Hanoi
Address: 136 P. Hàng Trống, Hàng Trống, Hoàn Kiếm, Hà Nội Phone: 024 3828 9595
Note: Early check-in upon request

Day 2: Explore – Experience Hanoi like a local by Scooter
9:00 AM: Our female drivers will pick you up to begin an exciting scooter tour around Hanoi.
Your first stop will be at an iconic local café to try the famous egg coffee, a Hanoi specialty passed down through generations.
You'll then ride past some of the city's most emblematic landmarks, including the Hanoi Opera House , local markets, the iconic Train Street , Long Bien Bridge , Huu Tiep Lake , and more.
Our drivers will also guide you through hidden alleyways to discover old houses and get a glimpse of daily urban life — exploring corners of Hanoi rarely seen by tourists.
Finally, it’s time to taste some of Hanoi’s most iconic street foods. We’ll stop at a local restaurant to sample a delicious selection of specialties such as:
Bun cha (grilled pork with rice noodles and sweet fish sauce)
Banh mi (Vietnamese baguette sandwich with French influence)
Pho bo/ga (beef or chicken rice noodle soup, Vietnam’s most iconic dish)
Notes:
Please note that the Ho Chi Minh Mausoleum is not included in this “City Highlights & Street Food” tour, as visiting it properly requires more time. We recommend visiting it on your own so we can make the most of your time with us.
The itinerary is subject to change depending on the weather and traffic conditions on the day of the tour.
Includes: D rivers, English-speaking guide, breakfast and lunch.
Excludes: Dinner and personal expense

Day 3: Hanoi Cooking Class
9:00 AM: Our guide will meet you and take you to the market. The cooking class lasts about 4 hours, starting with a guided visit to a traditional market. Here, you will be introduced to the essential ingredients of Vietnamese cuisine and gain valuable insights into local herbs and spices—the soul of Asian cooking. You will also pick up some simple Vietnamese phrases to help you buy and bargain for ingredients, a skill that will be useful throughout your trip in Vietnam.
After gathering all the necessary ingredients, you will return to our kitchen to learn the principles and techniques of each dish. With the guidance of our chef, you will then prepare the dishes yourself and finally sit down to enjoy your own creations.
This class offers a genuine hands-on experience of Vietnamese cooking. From shopping and bargaining at the market to preparing dishes completely from scratch, it promises an unforgettable highlight of your journey in Vietnam. You will also leave with the confidence to impress your family and friends with authentic Vietnamese dishes once you return home.
Includes: Private transfer, English-speaking guide, breakfast and lunch.
Excludes: Dinner and personal expenses.

Day 4: Hanoi – Ninh Binh with small tour group
8:00 AM: after breakfast, our guide and driver will meet you at your hotel in Hanoi for a scenic drive to Ninh Binh, a land often referred to as “Halong Bay on land.” Upon arrival, your first stop will be Hoa Lu Ancient Capital , where you will explore the historic temples dedicated to Kings Dinh and Le , two national heroes of the 10th century. These ancient structures, set against a backdrop of limestone mountains, offer a fascinating glimpse into Vietnam’s early history.
Afterward, continue to the Trang An Scenic Landscape Complex , a UNESCO World Heritage Site. Here, you will embark on a peaceful boat trip , gliding along crystal-clear rivers that wind through dramatic karst formations, mysterious caves, and lush greenery. The stunning scenery creates a tranquil yet majestic atmosphere.
In the late afternoon, you will be transferred to your hotel. Overnight in Ninh Binh.
Includes: Breakfast, small Tour group, lunch, entrance fees, English speaking tour guide
Excludes: Drinks, dinner and personal expense
Accomodation: 4* or 5* star on request
Lalita Ninh Binh Resort
Address: Thung Nham, Hoa Lư District, Ninh Bình Phone: 0229 3626 888
Emeralda Resort Ninh Binh
Address: Van Long Wetland Nature Reserve, Xã, Gia Vân, Gia Viễn, Ninh Bình Phone: 0229 3658 333

Day 5: Ninh Binh – Free Day
Today, you will have a free day to discover the peaceful beauty of Ninh Binh. One of the best ways is to enjoy a cycling trip through lush rice fields and quiet village roads. Along the way, you can see local farmers at work, pass by rustic villages, and admire the dramatic limestone mountains rising from the countryside. Cycling in Ninh Binh not only offers a relaxing experience but also allows you to connect more deeply with local life and culture.
Overnight in Ninh Binh.
Includes: Breakfast,
Excludes: Lunch, dinner and personal expense

Day 6: Ninh Binh – Halong Bay Overnight on Luxury Cruise
7:10 – 7:30 AM: Our driver will pick you up and transfer you to Halong Bay .
11:45 AM: Upon arrival in Halong, our cruise crew will welcome you on board for check-in and lunch, while you begin cruising to admire the beauty of Halong Bay and Lan Ha Bay .
In the afternoon, you will join various cruise activities such as kayaking, swimming, and cooking classes, among others
Enjoying the sunset party on board is a perfect moment for photography enthusiasts to capture the breathtaking sunset.
7:00 PM: You will enjoy a romantic dinner on the cruise. Overnight on board.
Includes: Shuttle bus, entrance fees, breakfast, lunch and dinner
Excludes: Drinks, personal expense
Accomodation: 4* or 5* star cruise on request
Sena Cruises 4* or similar
Peony Cruise 5* or similar

Day 7: Halong Bay – Hanoi
6:00 AM: Start your morning with a relaxing Tai Chi session while enjoying the sunrise over the bay.
Afterward, enjoy breakfast and take part in the cruise’s morning activities.
10:00 AM: Check out and have lunch.
11:30 – 12:00 PM: Disembark and return to the port, where our driver will be waiting to transfer you back to Hanoi.
Upon arrival, check in at your hotel and enjoy the rest of the day at leisure to explore the city at your own pace.
Overnight in Hanoi.
Includes: shuttle bus from Halong to Hanoi, breakfast and brunch.
Excludes: Dinner and personal expenses.
Accomodation : 4* or 5* star on request
Hanoi Tirant Hotel
Address: 38 P. Gia Ngư, Hàng Bạc, Hoàn Kiếm, Hà Nội
Phone: 024 6265 5999
Apricot Hotel Hanoi
Address: 136 P. Hàng Trống, Hàng Trống, Hoàn Kiếm, Hà Nội Phone: 024 3828 9595

Day 8: Hanoi - Fly to Danang - Hoi An
After breakfast, and depending on your flight schedule, you will be transferred to Noi Bai Airport for your flight to Danang , Vietnam.
Upon arrival, our local driver and guide will welcome you at the airport and transfer you to your hotel in Hoi An. After check-in, enjoy the rest of the day at your leisure to relax or start exploring the charming ancient town of Hoi An, famous for its lantern-lit streets, local markets, and cultural heritage.
Overnight in the Ancient town of Hoian.
Includes: private transfer from/to airport, flight ticket, breakfast
Excludes: Drinks, personal expense
Accomodation: 4* or 5* star on request
Hoian Delicacy Hotel
Address: No 116 Hùng Vương, Street, Hội An, Quảng Nam
Phone: 0386 272 471
Palm Garden Resort
Address: Lạc Long Quân, Cửa Đại, Hội An, Quảng Nam Phone: 0235 3927 927

Day 9: Explore the Countryside of Hoian by Jeep Car
In the morning, your day begins with a unique Jeep adventure, as your local guide picks you up from the hotel for an off-the-beaten-path journey through the peaceful countryside surrounding Hoi An. You’ll visit a traditional fish farm, ride along scenic backroads flanked by vibrant rice paddies and tranquil canals, and stop at hidden cafés, admire local street art, and explore a peaceful pagoda tucked away in nature.
This immersive experience offers a deeper look into the authentic rhythm of rural life in Central Vietnam—far from the tourist crowds. After the tour, you’ll return to your hotel to relax and enjoy the rest of your day at leisure.
Overnight in the Ancient town of Hoian.
Includes: Jeep car, English speaking guide, entrance fees, breakfast and lunch
Excludes: Drinks, personal expense

Day 10: Hoian – Free Day
Today, you have the whole day to explore Hoi An at your own pace. Known as a shopping paradise, the town is filled with tailor shops offering quick service at reasonable prices, or you may join a cooking class to experience Vietnamese cuisine in a fun and authentic way.
In the afternoon, wander through the Ancient Town, admire centuries-old houses and assembly halls, shop for lanterns, silk, and exquisite handicrafts, or simply relax at a riverside café.
As the sun sets over the Thu Bon River and lanterns light up the streets, take a leisurely stroll through the vibrant alleys or enjoy a romantic dinner by the river.
Overnight in Hoi An.
Includes: Breakfast
Excludes: Lunch and dinner and personal expense

Day 11: Hoi An – Da Nang – Fly to Ho Chi Minh City, Afternoon city tour
This morning, after having breakfast you are free until our driver pick you up and transfer you to Danang international airport for your short flight to Ho Chi Minh City.
Upon arrival at Tan Son Nhat Airport, our driver and tour guide will welcome you and transfer you to the hotel. After check-in, enjoy lunch at a local restaurant before starting your afternoon city tour.
Highlights include the Independence Palace, History Museum, and Ben Thanh Market . After the tour, return to the hotel to relax.
Overnight in Ho Chi Minh.
Includes: Private transfer form/to airport, flight ticket, breakfast, Small group city tour with lunch, English speaking guide
Excludes: Drinks, dinner and personal expense
Accomodation: 4* or 5* star on request
Saigon Prince Hotel or similar
Address: 63 Nguyễn Huệ, Bến Nghé, Quận 1, Thành phố Hồ Chí Minh
Phone: 028 3822 2999
New World Saigon Hotel or similar
Address: 76 Lê Lai, Phường Bến Thành, Quận 1, Thành phố Hồ Chí Minh Phone: 028 3822 8888

Day 12: Ho Chi Minh - Mekong Delta Full Day Trip with small tour group
8:00 AM : You will be picked up from your hotel and driven to the Mekong Delta . Along the way, enjoy the scenic views of lush rice fields stretching across the countryside.
Upon arrival in Ben Tre , take a relaxing boat trip on the Mekong River to enjoy the fresh air and admire the charming stilt houses along the riverbanks.
Next, immerse yourself in the authentic local lifestyle and try your hand at bargaining in traditional handicraft shops.
End your journey with an adventurous sampan ride through the serene, palm-shaded canals.
Arriving at one of the villages, you will be welcomed with fresh honey tea and tropical fruits. Experience the rural lifestyle as we visit a local family business, where coconut candy is traditionally made. Enjoy a delicious lunch at a local family home before returning to Ho Chi Minh City. Overnight in Ho Chi Minh.
Includes: Small Tour Group to Mekong Delta, English speaking guide, lunch, entrance fees, boat
Excludes: Drinks, dinner and personal expense

Day 13: Ho Chi Minh – Fly to Phu Quoc Island
After breakfast at your hotel, our driver will pick you up and transfer you to Tan Son Nhat Airport for your flight to Phu Quoc Island.
Upon arrival at Phu Quoc Airport, our local driver will be waiting to greet you and transfer you to your hotel for check-in. The rest of the day is free at leisure to relax on the beach or enjoy the hotel facilities.
Overnight in Phu Quoc
Includes: Private transfer from/to airport, flight ticket, breakfast
Excludes: Lunch, dinner and personal expense
Accomodation: 4* or 5* star on request
Camia Resort & Spa
Address: Tổ 3, Ấp Ông Lang, Xã Cửa Dương, Phú Quốc, Kiên Giang
Phone: (+84) 961 045 899
Crown Plaza Phu Quoc Resort
Address: Khu Du Lich Bai Dai, Gành Dầu, Phú Quốc, Kiên Giang Phone: 0297 3683 999

Day 14/15/16: Free days in Phu Quoc Island
These days are completely free at your leisure to relax on the beach or explore Phu Quoc Island at your own pace.
You may take this opportunity to:
Relax at your resort and enjoy the white sandy beaches and crystal-clear waters.
Visit local attractions such as Dinh Cau Night Market, Ham Ninh fishing village, or Phu Quoc National Park.
Take optional tours (at your own expense) such as snorkeling, scuba diving, visiting pearl farms, or a boat trip to nearby islands.
Includes: Breakfast
Excludes: Lunch, dinner and personal expense

Day 17: Phu Quoc - Return flight home
Today, you will have free time to relax and enjoy at your leisure until it is time for your transfer to the airport for your flight departure flight. Includes: Private transfer to airport
Excludes: Late check-out`,
    duration:    "17 Days/ 16 Nights",
    price:       1980,
    categoryIds: ["1"],
    cityIds:     ["2", "3", "1", "13", "22", "20"],
    featuredTour: false,
    onSale:       true,
    saleDiscountPercentage: 15,
  },
  {
    id:          "26",
    title:       "7-Day Ethnic Culture & Mountain Adventure",
    imageUrl:    "https://asiaeyestravel.com/uploads/source/blog/hagiang/songnhoque-huongdan.jpg",
    description: `Discover the best of Northern Vietnam with 7-day Sapa – Ha Giang – Ba Be Lake tour from Asia Eyes Travel , a perfect journey for nature lovers and culture seekers. This carefully crafted itinerary takes you through the breathtaking rice terraces of Sapa, the legendary Ma Pi Leng Pass on the Ha Giang Loop, and the tranquil waters of Ba Be Lake – Vietnam’s hidden Ramsar site. Along the way, you'll explore remote ethnic villages, trek through stunning valleys, enjoy traditional meals with local families, and immerse yourself in the rich heritage of H’mong, Dao, Tay, and Lo Lo minorities . Whether you're looking for an off-the-beaten-path adventure or a meaningful cultural experience, this tour offers unforgettable moments in some of Vietnam’s most authentic and scenic regions.
Book your Northern Vietnam 7-day tour now for 2026/2027 and enjoy early bird deals, professional English-speaking guides, private transfers, and handpicked accommodations.`,
    itinerary:   `Day 1:  Arrival Day in Sapa
At 7:00 AM Our driver will pick you up from your hotel in Hanoi’s Old Quarter. We then depart for Sapa via the expressway, enjoying a comfortable 5.5-hour journey through the scenic northern countryside.
Upon arrival in Sapa around 1:30 PM, you’ll check in at your hotel and have some time to rest before the afternoon activity.
At 2:30 PM , we begin a leisurely trek to Cat Cat Village, home to the H’Mong ethnic minority. Located in a picturesque valley, this charming village offers a glimpse into traditional mountain life, with wooden houses, terraced fields, and a beautiful waterfall. You’ll have the opportunity to interact with local people, learn about their customs, and capture stunning photos of the landscape.
After the trek, return to your hotel to relax and enjoy the cool mountain atmosphere.
Overnight in Sapa.
Includes: Private transfer, English speaking tour guide and entrance fees
Excludes: Meals and personal expense
Accomodation : 4* or 5* star on request
Bamboo Sapa Hotel
Address: 18 Mường Hoa, TT. Sa Pa, Sa Pa, Lào Cai
Phone: 0214 3871 076
Hotel de la Coupole
Address: 1, Hoang Lien Street Sapa District, Lao Cai Province Phone: 0214 3629 999

Day 2:  Explore Lao Chai, Ta Van, and Ta Phin Villages – A Cultural Trekking Journey in Sapa
8:30 AM: your tour guide and driver will pick you up for a full day of exploring the rich culture and breathtaking landscapes of Sapa’s ethnic villages.
Your morning begins with a scenic drive and trek through Lao Chai and Ta Van -peaceful villages nestled in the heart of the Muong Hoa Valley. These are home to the Black H’Mong and Dzay ethnic minorities. As you walk along winding trails, you’ll be surrounded by terraced rice fields, mountain peaks, and bamboo forests. This is a great opportunity to meet local villagers, learn about their daily routines, traditional dress, and unique customs.
Around midday, return to Sapa town for lunch at a local restaurant and take a short rest.
In the afternoon, continue your journey to Ta Phin Village, known for its Red Dzao community. Here, you can observe local women making herbal medicine, traditional brocade, and perhaps even join in a herbal foot soak experience.
Return to Sapa in the late afternoon and enjoy a relaxing evening.
Overnight in Sapa.
Includes: Private transfer, English speaking tour guide, breakfast and lunch
Excludes: Drinks, dinner and personal expense
Accomodation : 4* or 5* star on request

Day 3:  Departure to Ha Giang
At 8:00 AM, our driver and tour guide will pick you up from Sapa and begin the journey to Ha Giang , a stunning mountainous region in Northern Vietnam.
Along the way, we’ll make several stops to visit local villages of ethnic minorities such as the Tay, Dao, and H’mong. These stops offer a great opportunity to learn about traditional customs, observe daily life in the highlands, and enjoy scenic views of the countryside.
You’ll have lunch at a local restaurant, where you can sample regional dishes and take a break before continuing the drive.
By late afternoon, we’ll arrive in Ha Giang City. You’ll check in at the hotel and have time to relax after a long journey. In the evening, feel free to explore the quiet charm of this small mountain town or simply rest in preparation for the adventures ahead in Dong Van Karst Plateau.
Overnight in Ha Giang.
Includes: Private transfer, English speaking tour guide, breakfast and lunch
Excludes: Drinks, dinner and personal expense
Accomodation : 3* or 4* star on request
Silk River Hotel
Address: 90 Nguyễn Trãi, P. Nguyễn Trãi, Hà Giang
Phone: 0889 775 678
De La Mont Hotel
Address: 426 Nguyễn Trãi, P. Nguyễn Trãi, Hà Giang Phone: 0888 316 668

Day 4:  Ha Giang Loop Highlights: Ha Giang City – Tham Ma Pass – Lo Lo Chai Village
We leave Ha Giang City and begin our journey through the stunning mountain landscapes of northern Vietnam. Our first highlight is Bac Sum Pass, followed by Quan Ba Pass-also known as Heaven’s Gate—where you can enjoy a panoramic view of Tam Son Valley and the famous Twin Mountains, often called the "Fairy Bosom."
We continue toward Yen Minh, stopping for lunch along the way. In the afternoon, we visit Tham Ma Pass, a scenic viewpoint where you may encounter H’mong children in traditional dress, offering a glimpse into local highland life.
Our journey then leads us to the historic Vuong Palace, a beautiful mansion once built for a H’mong king during the French colonial period. The palace’s unique architecture blends Chinese and H’mong influences, reflecting the area’s rich cultural history.
By late afternoon, we arrive in a quiet village of the Lo Lo ethnic group. You’ll stay overnight in a locally-run guesthouse, enjoying warm hospitality and a peaceful evening in the mountains.
Overnight in Lo Lo Village.
Includes: Private transfer, English speaking tour guide, breakfast and lunch
Excludes: Drinks, dinner and personal expense
Accomodation : Mun Chi Homestay

Day 5:  Visit Dong Van Karst Plateau, Ma Pi Leng Pass & Lo Lo Culture
We hit the road again for another day filled with the stunning highlights of the Dong Van Karst Plateau UNESCO Global Geopark. In the morning, we visit Lung Cu Flag Tower—the northernmost point of Vietnam. The large 54-square-meter flag flying proudly atop the tower symbolizes the unity of Vietnam’s 54 official ethnic groups.
The journey from Dong Van to Meo Vac is often considered the most scenic section of the entire Ha Giang Loop. A major highlight is the breathtaking Ma Pi Leng Pass, a winding mountain road that climbs up to 2,000 meters above sea level. From the top, you’ll be treated to sweeping views of towering cliffs, deep valleys, terraced rice fields, and the turquoise Nho Que River snaking through the dramatic Tu San Canyon.
In the late afternoon, we arrive in Meo Vac. You’ll have time to explore this charming mountain town, meet the friendly locals, and enjoy unique regional cuisine.
We spend the night at a hotel in Meo Vac.
Overnight in Meo Vac.
Includes: Private transfer, English speaking tour guide, breakfast and lunch
Excludes: Drinks, dinner and personal expense
Accomodation : Meo Vac Beehive House

Day 6:  Transfer to Ba Be Lake (195 km)
At 8:00 AM, our driver and tour guide will pick you up and begin the scenic journey to Ba Be Lake, located approximately 195 km from Ha Giang. Along the way, you’ll have the opportunity to stop at local villages, observe the daily life of ethnic communities, and take photos of the peaceful countryside.
Upon arrival in Ba Be, you’ll check in at a traditional homestay nestled by the lake. In the evening, enjoy a home-cooked dinner with your local host family and experience the warm hospitality of the Tay people.
Overnight at Ba Be Lake.
Includes: Private transfer, English speaking tour guide, breakfast and lunch
Excludes: Drinks, dinner and personal expense
Accomodation : Ba Be Farmstay

Day 7:  Explore Ba Be Lake – Return to Hanoi
After breakfast, begin your boat trip around the stunning Ba Be Lake with our local guide. Recently recognized by UNESCO as Vietnam’s third Ramsar site, Ba Be is one of the world’s important wetlands. Formed on a limestone bed filled with cracks and crevices, the lake is home to over 100 species of freshwater fish.
During the boat tour, you’ll visit several must-see sites including Widow Island, the peaceful Cam Village, and An Ma Temple, nestled on the lake’s edge. Afterward, enjoy a short hike along a forest trail leading to a panoramic viewpoint near the animal observation huts and ranger station, before returning to the harbor.
In the afternoon, after lunch, we begin the drive back to Hanoi (approx. 165 km), arriving in the early evening.
On behalf of Asia Eyes Travel , I’m Thuc Nguyen . It’s been a pleasure having your attention, and I hope to welcome you, your family, and friends to explore Northern Vietnam soon!
Includes: Private transfer, English speaking tour guide, breakfast, lunch.
Excludes: Drinks, dinner and personal expense`,
    duration:    "7 Days/ 6 Nights",
    price:       650,
    categoryIds: ["1", "7"],
    cityIds:     ["9", "11", "4", "1"],
    featuredTour: false,
    onSale:       false,
    saleDiscountPercentage: null,
  },
  {
    id:          "27",
    title:       "Exclusive 15-Day Vietnam Tour Deals 2026",
    imageUrl:    "https://asiaeyestravel.com/uploads/source/ninh-binh-vietnam.jpg",
    description: `Experience Vietnam on a 15-day tour through the North, Central, and South , blending culture, history, nature, and authentic local life. Explore Ho Chi Minh City ’s vibrant streets, cruise the peaceful Mekong Delta , wander Hoi An’s lantern-lit alleys , and visit Hue ’s imperial sites. Admire Sapa’s terraced rice fields and Halong Bay ’s stunning limestone cliffs and emerald waters. Enjoy a perfect balance of exploration and relaxation while immersing in local experiences, tasting regional cuisine, and discovering Vietnam like a true traveler.`,
    itinerary:   `Day 1:  Arrival Day in Saigon
Upon your arrival at Tan Son Nhat International Airport , our driver and tour guide will warmly welcome and transfer you to your hotel in the city center. The rest of the day is yours to relax after the flight or take a gentle walk around the vibrant streets of District 1. Overnight in Ho Chi Minh City.
Includes: Accommodation, private bus/car, and tour guide
Excludes: Meals and early check-in
Accomodation : 4* or 5* star on request
Saigon Prince Hotel or similar
Address: 63 Nguyễn Huệ, Bến Nghé, Quận 1, Thành phố Hồ Chí Minh
Phone: 028 3822 2999
New World Saigon Hotel or similar
Address: 76 Lê Lai, Phường Bến Thành, Quận 1, Thành phố Hồ Chí Minh
Phone: 028 3822 8888

Day 2: Mekong Delta Excursion from Saigon by Boat (My Tho and Ben Tre)
8:00 AM – Depart from Ho Chi Minh City and begin your scenic drive to the Mekong Delta, often called the "rice bowl of Vietnam" for its rich agricultural heritage and maze of rivers and canals.
Upon arrival, embark on a relaxing boat cruise along the legendary Mekong River . Let the gentle flow of water lead you through a vibrant landscape of stilt houses, floating markets (seasonal), and emerald rice paddies stretching to the horizon.
Hop on a traditional sampan and drift quietly through serene, palm-lined canals – a peaceful escape that reveals the calm rhythm of local life.
Along the way, visit local villages where you’ll:
Taste fresh tropical fruits straight from the orchard
Taste fresh tropical fruits straight from the orchard
Sip fragrant honey tea and enjoy sweet coconut candies
Sip fragrant honey tea and enjoy sweet coconut candies
Listen to Đờn ca tài tử – traditional Southern folk music recognized by UNESCO
Listen to Đờn ca tài tử – traditional Southern folk music recognized by UNESCO
Discover cottage industries, where locals skillfully handcraft products like rice paper, coconut treats, and handicrafts
Discover cottage industries, where locals skillfully handcraft products like rice paper, coconut treats, and handicrafts
The experience offers a deep connection to the daily lives, customs, and resilience of people living in this fertile region. A perfect blend of nature, culture, and flavor awaits you in the Mekong Delta. Overnight in Ho Chi Minh City.
Includes: Accommodation with breakfast, small group tour to the Mekong Delta, English-speaking guide, lunch, entrance fees.
Excludes: Dinner

Day 3:  Free Day in Ho Chi Minh City – Explore at Your Own Pace
Today is yours to discover Ho Chi Minh City — a vibrant blend of history, culture, and modern energy. Wander through this dynamic metropolis at your leisure and experience the city your way.
You may choose to:
Stroll around Dong Khoi Street , once known as Rue Catinat, filled with chic boutiques, cozy cafés, and French-colonial architecture.
Stroll around Dong Khoi Street , once known as Rue Catinat, filled with chic boutiques, cozy cafés, and French-colonial architecture.
Visit the War Remnants Museum or Reunification Palace for insight into Vietnam’s modern history.
Visit the War Remnants Museum or Reunification Palace for insight into Vietnam’s modern history.
Stop by the iconic Notre-Dame Cathedral and Central Post Office , remarkable remnants of the French era.
Stop by the iconic Notre-Dame Cathedral and Central Post Office , remarkable remnants of the French era.
Dive into the bustling energy of Ben Thanh Market , where you can shop for souvenirs, local snacks, and handmade crafts.
Dive into the bustling energy of Ben Thanh Market , where you can shop for souvenirs, local snacks, and handmade crafts.
Enjoy Vietnamese coffee or street food at a sidewalk café, watching daily life flow past.
Enjoy Vietnamese coffee or street food at a sidewalk café, watching daily life flow past.
In the evening, treat yourself to a rooftop cocktail with sweeping views of the Saigon skyline or take a relaxing dinner cruise along the Saigon River.
Whether you’re a foodie, history lover, or city explorer, Ho Chi Minh City offers countless ways to make this free day unforgettable. Overnight in Ho Chi Minh City.
Includes: Accommodation with breakfast.
Excludes: Lunch and dinner

Day 4:  Ho Chi Minh to Hoi An – Discover Central Vietnam’s Charm
After breakfast, our driver will transfer you to Tan Son Nhat airport for a short flight to Danang.
Upon arrival, our driver and tour guide will meet you and take you to Hoi An , a charming UNESCO World Heritage town. After check-in, enjoy your free time exploring lantern-lit streets, riverside cafés, or local tailor shops. Overnight in Hoian.
Includes: Private transfer from/to airport, flight ticket, breakfast, tour guide
Excludes: Lunch and personal expense
Accomodation: 4* or 5* star on request
Hoian Delicacy Hotel
Address: No 116 Hùng Vương, Street, Hội An, Quảng Nam
Phone: 0386 272 471
Palm Garden Resort
Address: Lạc Long Quân, Cửa Đại, Hội An, Quảng Nam Phone: 0235 3927 927

Day 5:  Hoi An Countryside Jeep Tour – Discover Village Life
8:00 AM: Say goodbye to the charming streets of Hoi An and embark on a scenic countryside adventure in a vintage open-air jeep. Wind your way through peaceful village roads lined with lush rice paddies, friendly farmers, and grazing water buffalo beneath swaying coconut palms.
Along the journey, you'll visit:
Traditional villages and meet local artisans practicing age-old crafts like rice noodle making and mat weaving.
Explore a fish sauce workshop or an organic herb garden, discovering how locals live in harmony with nature.
Cross rustic bamboo bridges, stop at ancient pagodas, and enjoy sweeping views of rivers, rice fields, and daily rural life.
Chat with villagers, sip freshly pressed sugarcane juice, and snap unforgettable photos far from the tourist trail.
This immersive half-day tour offers a perfect blend of natural beauty, cultural discovery, and meaningful local connections. Overnight in Hoi An.
Includes: Accommodation with breakfast, jeep tour with lunch, entrance fees, and English-speaking guide
Excludes: Drinks, dinner, and personal expenses

Day 6:  Hoi An Free Day – Explore, Relax, and Savor the Charm of the Ancient Town
Today is all yours to enjoy the magic of Hoi An at your own rhythm. Whether you seek relaxation, cultural discovery, or hands-on experiences, this charming riverside town offers something for everyone.
You might start the day by relaxing on the golden sands of Cua Dai Beach , where gentle waves and swaying palm trees create the perfect coastal escape.
For a more immersive cultural experience, join a Vietnamese cooking class, where you’ll shop at a local market, learn traditional recipes, and prepare your own delicious dishes under the guidance of a local chef.
Feeling active? Rent a bicycle and pedal through peaceful rice fields and countryside lanes, passing by water buffalo, lotus ponds, and smiling farmers. It's the best way to see daily rural life up close.
In the afternoon, head back into the Ancient Town , where you can:
Shop for handmade lanterns, silk garments, and artisanal crafts
Shop for handmade lanterns, silk garments, and artisanal crafts
Visit ancient houses, assembly halls, and riverside cafés
Visit ancient houses, assembly halls, and riverside cafés
Capture the golden glow of the sunset over the Thu Bon River
Capture the golden glow of the sunset over the Thu Bon River
As night falls, the lantern-lit streets of Hoi An create a magical atmosphere perfect for a leisurely walk or riverside dinner. Overnight in Hoi An.
Includes: Accommodation with breakfast
Excludes: Lunch and dinner

Day 7:  Hoi An to Hue via Hai Van Pass – Scenic Coastal Journey
After breakfast, set out for Hue , Vietnam’s former imperial capital, via the stunning Hai Van Pass — a coastal mountain road known for its dramatic sea views, misty peaks, and winding curves. Along the way, you will stop to admire panoramic vistas of the East Sea and Lang Co Bay — a photographer’s dream.
Upon arriving in Hue, begin your journey into Vietnam’s royal past with visits to some of the city’s most iconic landmarks:
Thien Mu Pagoda – a serene riverside pagoda perched on a hill, offering sweeping views of the Perfume River and rich spiritual history.
Thien Mu Pagoda – a serene riverside pagoda perched on a hill, offering sweeping views of the Perfume River and rich spiritual history.
Khai Dinh Tomb – a fascinating fusion of Eastern and Western architecture, adorned with intricate mosaics and imperial grandeur.
Khai Dinh Tomb – a fascinating fusion of Eastern and Western architecture, adorned with intricate mosaics and imperial grandeur.
Tu Duc Tomb – a poetic complex of pavilions, lakes, and pine-shaded pathways built as a peaceful retreat by one of Vietnam’s most thoughtful emperors.
Tu Duc Tomb – a poetic complex of pavilions, lakes, and pine-shaded pathways built as a peaceful retreat by one of Vietnam’s most thoughtful emperors.
Take in the romantic, nostalgic charm of Hue, where the echoes of the Nguyen Dynasty linger in quiet gardens, lotus ponds, and historic walls. Overnight in Hue
Includes: Accommodation with breakfast, small group tour, lunch, transfers, entrance fees, and English-speaking guide.
Excludes: Drinks, dinner, and personal expenses
Accomodation: 4* or 5* star on request
Silk Path Hue Hotel & Spa
Address: 2 Lê Lợi, Vĩnh Ninh, Huế, Thành phố Huế
Phone: 0234 3975 555
White Lotus Hotel Hue
Address: 05-07 Hoàng Hoa Thám, Phú Nhuận, Huế Phone : 0234 3881 888
Hue city (130km) form Hoi An

Day 8:  Hue fly to Hanoi
You will spend a peaceful morning exploring Hue before taking an afternoon flight to Hanoi. Upon arrival, our driver will transfer you to your hotel in the charming Old Quarter. In the evening, you can enjoy a leisurely stroll around Hoan Kiem Lake and savor a delightful dinner at a local restaurant. Overnight in Hanoi
Includes: Accommodation with breakfast, private airport transfers (to/from airport), flight tickets, and tour guide
Excludes: Lunch, dinner, and personal expenses
Accomodation : 4* or 5* star on request
Hanoi Tirant Hotel or similar
Address: 38 P. Gia Ngư, Hàng Bạc, Hoàn Kiếm, Hà Nội
Phone: 024 6265 5999
Apricot Hotel Hanoi or similar
Address: 136 P. Hàng Trống, Hàng Trống, Hoàn Kiếm, Hà Nội Phone: 024 3828 9595

Day 9:  Scooter Tour in Bustling Hanoi
8:00 AM – Kickstart your day with an unforgettable scooter tour through Hanoi , led by our friendly and experienced female drivers who know the city inside out. Climb onto the back of a motorbike — just like a local — and zip through a captivating mix of historic landmarks, hidden corners, and vibrant neighborhoods.
Begin with a visit to the legendary Café Giang , home of Hanoi’s signature egg coffee — a creamy, sweet treat that blends robust Vietnamese coffee with whipped egg yolk.
Then, ride through:
The grand Hanoi Opera House , a colonial masterpiece
The grand Hanoi Opera House , a colonial masterpiece
Bustling local markets filled with color, chatter, and street-side vendors
Bustling local markets filled with color, chatter, and street-side vendors
Narrow hidden alleys revealing the heartbeat of daily life
Narrow hidden alleys revealing the heartbeat of daily life
The iconic Train Street , where trains pass just inches from homes
The iconic Train Street , where trains pass just inches from homes
A photo stop outside the solemn Ho Chi Minh Mausoleum
A photo stop outside the solemn Ho Chi Minh Mausoleum
Huu Tiep Lake , where the wreckage of a B52 bomber still rests as a powerful reminder of history
Huu Tiep Lake , where the wreckage of a B52 bomber still rests as a powerful reminder of history
The historic Long Bien Bridge , designed by Gustave Eiffel, stretching across the Red River with panoramic views
The historic Long Bien Bridge , designed by Gustave Eiffel, stretching across the Red River with panoramic views
Feel the rhythm of the city, hear its stories from the backstreets, and take in Hanoi’s raw authenticity in a way few travelers do. Overnight in Hanoi
Includes: Accommodation with breakfast, small group scooter tour, lunch, and tour guide
Excludes: Dinner and personal expenses

Day 10:  Hanoi – Ninh Binh Day Trip – History, Scenery & Hidden Caves
Today, leave the bustling capital behind as you journey south to Ninh Binh , often called “Halong Bay on land” for its dramatic limestone landscapes and serene waterways. Your day of exploration begins with a visit to Hoa Lu , the ancient capital of Vietnam in the 10th and 11th centuries.
Things you can do:
Wander through the peaceful grounds of centuries-old temples dedicated to King Dinh and King Le, surrounded by green hills and quiet lotus ponds.
Head to the stunning Trang An Landscape Complex , a UNESCO World Heritage Site.
Hop on a traditional sampan boat and glide gently along crystal-clear waterways, weaving through a network of limestone caves , tranquil valleys, and lush karst peaks.
Along the way, you’ll pass hidden temples tucked into the mountains — a truly magical experience.
In the afternoon, challenge yourself with a short but rewarding hike up Mua Cave (Hang Múa) . Climb nearly 500 steps to reach the mountaintop viewpoint, where you'll be rewarded with a panoramic vista over rice fields, winding rivers, and jagged peaks stretching to the horizon — one of the most iconic views in northern Vietnam.
Return to Hanoi in the evening and enjoy a local dinner before heading to the railway station to board the overnight sleeper train to Sapa.
Includes: Small group tour, train ticket, breakfast, lunch, tour guide, entrance fees, and boat
Excludes: Drinks, dinner, and personal expenses
Accommodation: King Sapa Train or similar

Day 11:  Sapa – The Land of Ethnic Villages and Breathtaking Views
Arrive early at Lao Cai Station , where our driver will be waiting to transfer you to your hotel in Sapa . Enjoy a hearty breakfast and take in the crisp mountain air as the mist slowly lifts over the surrounding peaks.
After a short rest, begin your guided trek through the breathtaking Muong Hoa Valley , home to some of Vietnam’s most iconic landscapes and vibrant ethnic communities.
Your trekking route includes:
Y Linh Ho Village – a remote and peaceful village of the Black H’mong people , known for their unique culture, dark indigo clothing, and traditional farming lifestyle.
Y Linh Ho Village – a remote and peaceful village of the Black H’mong people , known for their unique culture, dark indigo clothing, and traditional farming lifestyle.
Lao Chai Village – where you’ll walk through vast terraces carved into the hillsides, offering postcard-perfect views at every turn.
Lao Chai Village – where you’ll walk through vast terraces carved into the hillsides, offering postcard-perfect views at every turn.
Ta Van Village – home to the Giay ethnic minority , where you can observe traditional stilt houses and learn how these communities live in harmony with nature.
Ta Van Village – home to the Giay ethnic minority , where you can observe traditional stilt houses and learn how these communities live in harmony with nature.
Along the way, immerse yourself in the daily rhythms of rural mountain life — farmers working the fields, children playing by the streams, and water buffalo grazing in the distance.
This journey offers not only a physical adventure, but a deep cultural encounter with Sapa’s ethnic mosaic and its breathtaking natural beauty. Overnight in Sapa
Includes: Accommodation with breakfast, small group tour with English-speaking guide, and lunch
Excludes: Drinks, dinner, and personal expenses
Accommodation: 4★ or 5★ hotel upon request
Bamboo Sapa Hotel
Address: 18 Mường Hoa, TT. Sa Pa, Sa Pa, Lào Cai
Phone: 0214 3871 076
Hotel de la Coupole
Address: 1, Hoang Lien Street Sapa District, Lao Cai Province Phone: 0214 3629 999
Sapa town

Day 12: Cat Cat Village: Culture, Crafts, and Mountain Views
Today, enjoy a relaxing cultural journey to Cat Cat Village , a picturesque settlement of the Black H’mong people nestled in a peaceful valley near Sapa. Known for its traditional crafts and breathtaking scenery, the village offers a glimpse into the daily life and heritage of one of Vietnam’s most iconic ethnic groups.
You can walk along stone-paved trails that wind through wooden stilt houses, watch locals weaving, dyeing fabrics with natural indigo, and operating water wheels and traditional looms. Don’t miss the beautiful Cat Cat Waterfall — an ideal spot for quiet moments and stunning photos.
Along the way, browse small local stalls offering handmade textiles, intricate silver jewelry, and one-of-a-kind souvenirs that reflect the region’s unique culture.
In the afternoon, return to Sapa town and enjoy some free time to explore at your own pace or simply relax.
You might:
Wander through local markets full of colors and spices
Enjoy a coffee at a mountaintop café with sweeping valley views
Take an optional cable car ride to the summit of Fansipan Mountain, the “Roof of Indochina”, where the clouds swirl around temple spires and you’ll feel on top of the world
Includes: Accommodation with breakfast, small group tour with English-speaking guide, and lunch
Excludes: Drinks, dinner, and personal expenses

Day 13:  Farewell Sapa – Back to Hanoi
After enjoying a peaceful morning in Sapa, you can take some time to soak in the cool mountain air or stroll around the vibrant local market for a last look at the colorful ethnic crafts. Around midday, you will board a comfortable bus for the scenic return journey to Hanoi, passing through winding mountain roads and lush valleys.
Upon arrival in Hanoi in the late afternoon, check into your hotel and relax after the trip. In the evening, you’re free to explore the bustling Old Quarter , known for its narrow streets, vibrant night markets, and unique street food culture. This is the perfect chance to sample iconic dishes like bun cha, pho, or banh mi , or simply enjoy a leisurely walk around Hoan Kiem Lake . Overnight in Hanoi
Includes: Accommodation with breakfast, luxury limousine shuttle
Excludes: Drinks, lunch, dinner, and personal expenses

Day 14:  Halong Bay Excursion
Leave the bustling streets of Hanoi behind and journey through the Red River Delta to the UNESCO World Heritage Site of Halong Bay — a natural marvel famed for its emerald waters and towering limestone islands.
Upon arrival, board your deluxe cruise ship and settle into your cabin. As the boat sets sail, enjoy a delicious onboard lunch while drifting past a surreal seascape of limestone karsts, hidden coves, and floating villages .
In the afternoon, join a variety of relaxing and adventurous activities :
Kayak through tranquil lagoons and explore hidden caves
Kayak through tranquil lagoons and explore hidden caves
Swim in the calm, jade-green waters
Swim in the calm, jade-green waters
Or simply unwind on the sundeck , soaking in panoramic views as the sun paints the sky in hues of orange and gold
Or simply unwind on the sundeck , soaking in panoramic views as the sun paints the sky in hues of orange and gold
In the evening, savor a fresh seafood dinner prepared by the onboard chef. Later, relax under the stars, join a squid fishing session, or enjoy onboard entertainment.
Overnight on Cruise.
Includes: 2 days/ 1 night on cruise, shuttle bus, entrance fees, breakfast, lunch, and dinner
Excludes: Drinks and personal expenses
Cruises: 4* or 5* star cruise on request
Sena Cruises or similar
Address : International Habour, Tuần Châu, Hạ Long, Quảng Ninh Phone : 0974 001 062
Peony Cruise
Address: 16 P. Thi Sách, Ngô Thì Nhậm, Hai Bà Trưng, Hà Nội 100000 Phone: +84935946688

Day 15:  Final Day: Halong Bay to Hanoi – Say Goodbye to Vietnam
You will wake up early to enjoy a refreshing Tai Chi session on the sundeck, followed by a delicious breakfast as the cruise glides through the breathtaking scenery of Halong Bay. After breakfast, you can take part in the morning activities offered by the cruise, such as exploring hidden caves or admiring the final panoramic views of the bay. Around midday, savor a delightful lunch onboard before the cruise returns to the dock.
Upon disembarkation, our driver will be waiting to transfer you to Hanoi Airport for your onward flight.
On behalf of Asia Eyes Travel , I’m Thuc Nguyen – thank you for letting us be part of your journey. Your trust means the world to us. We hope this trip brought you beautiful memories, and we look forward to welcoming you again someday!
Includes: Shuttle bus, private transfer from/to airport, breakfast and brunch
Excludes: Drinks, personal expense
Accomodation: Late check-out upon request.`,
    duration:    "15 Days/ 14 Nights",
    price:       1350,
    categoryIds: ["1"],
    cityIds:     ["2", "3", "4", "1", "13", "21", "20"],
    featuredTour: false,
    onSale:       false,
    saleDiscountPercentage: null,
  },
  {
    id:          "28",
    title:       "Best Vietnam 14-Day Itinerary",
    imageUrl:    "https://asiaeyestravel.com/uploads/source/mai-chau-ecolodge-vietnam.jpg",
    description: `Discover the best Vietnam 14-day itinerary starting in Hanoi , exploring the Hanoi Old Quarter , historic temples, and vibrant street food scene. Travel to Halong Bay , cruising among limestone karsts, visiting caves, and enjoying fresh seafood.
Next, explore Ninh Binh , known as “ Halong Bay on land ,” gliding through rivers and admiring stunning limestone landscapes. Visit Mai Chau for an authentic rural experience , cycling through rice fields and interacting with local ethnic communities.
Head south to Hue , the former imperial capital, visiting the Imperial Citadel , royal tombs, and enjoying the serene Perfume River . Conclude in Hoi An , a charming UNESCO World Heritage town , known for its lantern-lit streets, traditional houses , local culture , and delicious food .
This 14-day Vietnam itinerary offers the perfect mix of cultural immersion , natural beauty, and history, taking travelers from the North to Central Vietnam while creating unforgettable experiences and insights into the country’s rich heritage.`,
    itinerary:   `Day 1: Warm Welcome to Hanoi
A Warm Welcome to Vietnam! Upon your arrival at Noi Bai International Airport, our friendly local guide will be there to greet you with a warm smile and escort you to your hotel in Hanoi. Unwind and soak in the vibrant atmosphere of the city, then enjoy a delightful welcome dinner featuring authentic Vietnamese specialties, marking the perfect start to your unforgettable journey.
Overnight in Hanoi.
Includes: Private bus/ Car and tour guide
Excludes: Meals and personal expense
Accomodation : 4* or 5* star on request
Hanoi Tirant Hotel
Address: 38 P. Gia Ngư, Hàng Bạc, Hoàn Kiếm, Hà Nội
Phone: 024 6265 5999
Apricot Hotel Hanoi
Address: 136 P. Hàng Trống, Hàng Trống, Hoàn Kiếm, Hà Nội Phone: 024 3828 9595
Note: Early check-in upon request
Hanoi Old Quarter (Phố cổ Hà Nội)

Day 2:  Explore Hanoi by Jeep and Taste Local Street Food
You will discover the dynamic charm of Hanoi on a unique vintage Jeep tour , offering a perfect blend of history, culture, and local life.
Hop on a classic army-style Jeep and journey through the bustling streets of the Old Quarter
Explore lively local markets, hidden cafes, and lesser-known neighborhoods
Stop by key historical landmarks such as the Ho Chi Minh Mausoleum , Train Street , or Long Bien Bridge , and hear fascinating stories from your local guide
Along the way, you’ll catch a real glimpse of daily life in the capital: motorbikes weaving through traffic, vendors selling seasonal fruits, and locals chatting over egg coffee. This Jeep adventure is not just a tour—it’s a moving window into the heart of Hanoi.
Note: We do not go inside Ho Chi Minh Mausoleum on this tour to maximize your sightseeing time.
Includes: Breakfast at hotel, Small-Group Jeep Tour with lunch
Excludes: Dinner and personal expense
Accomodation : 4* or 5* star on request

Day 3:  Hanoi Free Day – Leisure and Exploration
Enjoy a relaxing free day to explore Hanoi at your own pace. You might take a leisurely stroll around Hoan Kiem Lake , visit historical sites like the Temple of Literature or the Vietnam Museum of Ethnology, or browse for local souvenirs in the bustling Old Quarter. Overnight in Hanoi
Includes: Breakfast
Excludes: Lunch, dinner, transfer, tour guide and personal expense
Accomodation : 4* or 5* star on request

Day 4:  From Bustling Hanoi to Tranquil Mai Chau
You will leave behind Hanoi’s bustling streets and travel to the tranquil beauty of Mai Chau , a picturesque valley embraced by towering mountains and emerald rice fields. This charming destination is home to the warm and welcoming Thai ethnic community, offering an authentic glimpse into their traditional way of life.
Overnight in Mai Chau
Includes: Breakfast, lunch, private transfer and tour guide
Excludes: Dinner and personal expense
Accomodation : 4* or 5* star on request
Mai Chau Ecolodge
Address: Nà Chiềng, Mai Châu, Hòa Bình
Phone: 0218 3819 888

Day 5:  Explore Mai Chau by Bike
You will have time to set off on a peaceful biking adventure through charming villages, lush rice paddies, and serene forest paths. Along the way, ypou can stop by local homes to witness traditional weaving and gain insights into the rich culture of the Thai ethnic people.
Pedal your way around Mai Chau and its nearby villages, soaking in the authentic rural scenery. As the sun dips behind the rolling hills, return to your lodge and relax in the crisp countryside air, wrapping up your day with a warm cultural experience unique to Mai Chau. Overnight in Mai Chau
Includes: Breakfast, lunch, private transfer, tour guide and bike
Excludes: Dinner and personal expense
Accomodation : 4* or 5* star on request

Day 6: Overland journey from Mai Chau to Ninh Binh
Travel to Ninh Binh , often referred to as “Ha Long Bay on land.” Upon arrival, explore ancient temples or relax at your accommodation amidst limestone mountains.
Explore the ancient capital Hoa Lu, with temples dedicated to the Dinh and Le Kings.
Enjoy a peaceful boat ride in Trang An, gliding through limestone caves and emerald waters.
Climb to the top of Mua Cave for panoramic views of rice paddies and dramatic karsts.
Return to Hanoi in the evening for dinner and board the overnight train to Sapa at 9:00 PM.
Overnight in Ninh Binh
Includes: Breakfast, small Tour group, lunch, entrance fees, English speaking tour guide
Excludes : Drinks, dinner and personal expense
Accomodation: 4* or 5* star on request
Lalita Ninh Binh Resort
Address: Thung Nham, Hoa Lư District, Ninh Bình Phone: 0229 3626 888
Emeralda Resort Ninh Binh
Address: Van Long Wetland Nature Reserve, Xã, Gia Vân, Gia Viễn, Ninh Bình Phone: 0229 3658 333
Ninh Binh (Tam Coc, Trang An)( 140KM) from Mai Chau

Day 7: Journey from Ninh Binh to Halong Bay with Overnight Cruise
Your journey to Halong Bay begins at 7 :30 AM , when our comfortable shuttle bus picks you up from your hotel and transfers you to the breathtaking UNESCO-listed site. By 11:45 AM , you’ll arrive at the pier, where our warm and welcoming cruise team will greet you. After check-in, enjoy a delightful lunch on board as the cruise begins gliding past the stunning limestone karsts of Halong and Lan Ha Bay.
In the afternoon ( around 3:30 PM ), take part in a variety of exciting activities—go kayaking through quiet lagoons, swim in the emerald waters, or join an engaging cooking class to discover the secrets of Vietnamese cuisine.
As the sun begins to set, gather on the deck for a relaxing sunset party—perfect for capturing unforgettable photos of the golden sky over the bay.
At 7:00 PM , indulge in a romantic dinner onboard, savoring a delicious meal surrounded by the serene beauty of Halong Bay. The evening is yours to unwind, breathe in the fresh sea air, and enjoy the peaceful charm of the night at sea. Overnight on Cruise
Includes: Shuttle bus, entrance fees, breakfast, lunch and dinner
Excludes: Drinks, personal expense
Accomodation: 4* or 5* star cruise on request
Sena Cruises or similar
Address : International Habour, Tuần Châu, Hạ Long, Quảng Ninh Phone : 0974 001 062
Peony Cruise
Address: 16 P. Thi Sách, Ngô Thì Nhậm, Hai Bà Trưng, Hà Nội 100000 Phone: +84935946688
Halong Bay (190 KM) From Ninh Binh

Day 8: Halong Bay - Hanoi fly to Hue City
Wake up to a serene morning in the heart of Halong Bay , where the gentle sounds of the water and the stunning limestone karsts create a perfect start to your day. Enjoy a hearty breakfast on board while taking in the final panoramic views of the bay.
After breakfast, join a light excursion, perhaps a short visit to a hidden cave or a leisurely kayak session to make the most of your last moments on the water.
As the cruise slowly heads back to the harbor, relax on the sundeck and capture a few last photos of this breathtaking landscape. Upon disembarkation, our driver will greet you and provide a comfortable transfer back to Hanoi airport for a short flight to Hue.
Upon arrival in Hue, our driver and tour guide will pick you up and transfer you to your hotel. Overnight in Hue City.
Includes: Transfer, breakfast and lunch
Excludes: Drinks, dinner and personal expense
Accomodation: 4* or 5* star on request
White Lotus Hotel
Address: 05-07 Hoàng Hoa Thám, Phú Nhuận, Huế, Thành phố Huế 47000
Phone: 0234 3881 888
Senna Hue Hotel
Address: 7 Nguyễn Tri Phương, Phú Hội, Huế, Thành phố Huế 53000
Phone: 0234 3858 686

Day 9:  Discover Hue’s Handicraft Villages by Scooter
Get ready for a thrilling and authentic experience as you explore Hue on the back of a scooter , guided by a friendly local. This adventure offers a unique perspective of the imperial city — blending history, culture, and local life.
Highlights of the tour include:
Ride with a local guide through peaceful streets, lush gardens, and charming alleyways only known to locals.
Visit ancient royal tombs of the Nguyen Dynasty emperors, where impressive architecture and historical stories bring Vietnam’s imperial past to life.
Explore traditional pagodas , learning about the city’s spiritual customs, Buddhist traditions, and local beliefs.
Stroll through bustling local markets , meet welcoming vendors, and witness the vibrant daily life of Hue’s residents.
Taste local specialties at hidden eateries beloved by locals, from flavorful Bún Bò Huế to Hue-style snacks.
This scooter adventure immerses you in the real Hue — where every turn leads to a story, a hidden gem, or a taste of authentic Vietnamese culture. Overnight in Hue

Day 10: From Imperial Hue to Ancient Hoi An by Heritage Train
Get ready for a thrilling and authentic experience as you explore Hue on the back of a scooter , guided by a friendly local. This adventure offers a unique perspective of the imperial city — blending history, culture, and local life.
Highlights of the tour include:
Ride with a local guide through peaceful streets, lush gardens, and charming alleyways only known to locals.
Ride with a local guide through peaceful streets, lush gardens, and charming alleyways only known to locals.
Visit ancient royal tombs of the Nguyen Dynasty emperors, where impressive architecture and historical stories bring Vietnam’s imperial past to life.
Visit ancient royal tombs of the Nguyen Dynasty emperors, where impressive architecture and historical stories bring Vietnam’s imperial past to life.
Explore traditional pagodas , learning about the city’s spiritual customs, Buddhist traditions, and local beliefs.
Explore traditional pagodas , learning about the city’s spiritual customs, Buddhist traditions, and local beliefs.
Stroll through bustling local markets , meet welcoming vendors, and witness the vibrant daily life of Hue’s residents.
Stroll through bustling local markets , meet welcoming vendors, and witness the vibrant daily life of Hue’s residents.
Taste local specialties at hidden eateries beloved by locals, from flavorful Bún Bò Huế to Hue-style snacks.
Taste local specialties at hidden eateries beloved by locals, from flavorful Bún Bò Huế to Hue-style snacks.
This scooter adventure immerses you in the real Hue — where every turn leads to a story, a hidden gem, or a taste of authentic Vietnamese culture.
Overnight in Hue
Includes: Small-Group Scooter Tour, breakfast, lunch and English speaking tour guide
Excludes: Drinks, dinner and personal expense
Accomodation: 4* or 5* star on request
White Lotus Hotel
Address: 05-07 Hoàng Hoa Thám, Phú Nhuận, Huế, Thành phố Huế 47000
Phone: 0234 3881 888
Senna Hue Hotel
Address: 7 Nguyễn Tri Phương, Phú Hội, Huế, Thành phố Huế 53000
Phone: 0234 3858 686

Day 11: Hoian Countryside Vespa Tour
Start your day at 7:45 AM as your Vespa driver picks you up for an immersive journey through the Hoi An countryside. Visit local farms to learn about rice, vegetable, and cereal cultivation, and observe farmers’ daily routines. Discover traditional crafts such as weaving, rice wine making , and woodcarving, as well as modern industries like bird’s nest farming and aquaculture. Conclude your tour with a delicious home-cooked meal at a local family’s house, offering an authentic glimpse into Vietnamese life and culture. Overnight in Hoi An
Includes: Vespa Drivers, Breakfast and lunch
Excludes: Drinks, dinner and personal expense
Accomodation: 4* or 5* star on request

Days 12:  Enjoy Your Free Days in Charming Hoi An
Today is completely free for you to discover the charm of Hoi An Ancient Town at your own rhythm. Stroll through the cobbled streets lined with art galleries, cafés, and preserved Chinese shophouses that whisper stories of the town’s vibrant trading past.
If you prefer a more active morning, rent a bicycle and ride through the emerald rice paddies, soaking in the countryside vibe on your way to Cua Dai Beach, perfect for sunbathing or simply unwinding by the gentle waves.
Wander through local markets filled with colorful lanterns, ceramics, and handmade crafts — ideal for picking up a unique souvenir. If you’re looking for a new outfit, drop by one of Hoi An’s renowned tailors , who can create a custom-made garment in just a day or two.
Don’t miss Hoi An’s culinary delights :
Enjoy a riverside meal with specialties like Cao Lầu, White Rose Dumplings, or Bánh Bao Bánh Vạc
Enjoy a riverside meal with specialties like Cao Lầu, White Rose Dumplings, or Bánh Bao Bánh Vạc
Or join a cooking class to learn the secrets behind these traditional dishes.
Or join a cooking class to learn the secrets behind these traditional dishes.
As evening falls, the town transforms into a glowing lantern wonderland — a perfect setting for an evening stroll or a boat ride on the Thu Bon River. Overnight in Hoi An
Includes: Breakfast
Excludes: Lunch, dinner, tour guide, transfer and personal expense
Accomodation: 4* or 5* star on request

Day 14: Hoi An – Departure
After breakfast, transfer to Da Nang International Airport for your flight home. Say goodbye to Vietnam, a country of breathtaking landscapes, rich cultural heritage, and unforgettable hospitality.
On behalf of the Asia Eyes Travel team, I am Thuc Nguyen , and I would like to sincerely thank you for traveling with us. I look forward to welcoming you, your family, and your friends to my beautiful country in the future!
Includes: Breakfast and private transfer to airport
Excludes: English speaking tour guide
Accomodation: N/ A
Note: Late check-out upon request.`,
    duration:    "14 Days/13 Nights",
    price:       1460,
    categoryIds: ["1"],
    cityIds:     ["5", "2", "3", "1", "13", "12"],
    featuredTour: false,
    onSale:       false,
    saleDiscountPercentage: null,
  },
  {
    id:          "29",
    title:       "Vietnam Travel Deals 15 Days From Hanoi",
    imageUrl:    "https://asiaeyestravel.com/uploads/source/hoi-an-vietnam.jpg",
    description: `Best 15-Day Vietnam Travel Offer by Asia Eyes Travel covers Hanoi , Sapa , Ha Long Bay , Hue , Hoi An , Ho Chi Minh City , and the Mekong Delta . This Vietnam tour package is available as a small tour group , ideal for families, couples, and solo travelers , combining rich culture, cuisine, history, and UNESCO sites .
Highlights include Hanoi capital , Sapa rice terraces , Ha Long Bay cruise , Hue Imperial City , Hoi An Ancient Town , and Mekong Delta river life , offering an unforgettable Vietnam travel experience with Asia Eyes Travel .`,
    itinerary:   `Day 1:  Arrival in Hanoi – Welcome to Vietnam
Welcome to Vietnam!
Upon arrival at Noi Bai International Airport , our Asia Eyes Travel guide and driver will warmly greet you and transfer you to your hotel in central Hanoi. Today is free for you to rest and adjust after your long flight.
Overnight in Hanoi
Includes: Private bus/ Car and tour guide
Excludes: Meals and personal expense
Accomodation : 4* or 5* star on request
Hanoi Tirant Hotel
Address: 38 P. Gia Ngư, Hàng Bạc, Hoàn Kiếm, Hà Nội
Phone: 024 6265 5999
Apricot Hotel Hanoi
Address: 136 P. Hàng Trống, Hàng Trống, Hoàn Kiếm, Hà Nội Phone: 024 3828 9595
Note: Early check-in upon request

Day 2:  Hanoi Scooter Tour – Discover Local Culture and History
9:00 AM: Start your Hanoi adventure on a unique scooter tour led by local male and female drivers.
Savor the famous egg coffee at Giang Café – the original place where this Hanoi specialty was born.
Visit the iconic Hanoi Opera House (built in 1911) for some memorable photos.
Explore bustling local markets and observe daily life.
Ride through narrow alleys to discover hidden French colonial houses.
See famous sights including Train Street, Ho Chi Minh Mausoleum (outside), Huu Tiep Lake (B52 wreck), and the historic Long Bien Bridge , designed by the same company that built the Eiffel Tower.
Note: We do not go inside Ho Chi Minh Mausoleum on this tour to maximize your sightseeing time.
Overnight in Hanoi
Includes: Small - group scooter tour, English peaking tour guide, lunch
Excludes: Dinner and personal expense
Accomodation : 4* or 5* star on request
Hanoi Tirant Hotel
Address: 38 P. Gia Ngư, Hàng Bạc, Hoàn Kiếm, Hà Nội
Phone: 024 6265 5999
Apricot Hotel Hanoi
Address: 136 P. Hàng Trống, Hàng Trống, Hoàn Kiếm, Hà Nội Phone: 024 3828 9595

Day 3: Ninh Binh – Hoa Lu, Trang An & Mua Cave – Night Train to Sapa
Depart for Ninh Binh at 8:00 AM – known as “Halong Bay on land.”
Explore the ancient capital Hoa Lu, with temples dedicated to the Dinh and Le Kings.
Enjoy a peaceful boat ride in Trang An, gliding through limestone caves and emerald waters.
Climb to the top of Mua Cave for panoramic views of rice paddies and dramatic karsts.
Return to Hanoi in the evening for dinner and board the overnight train to Sapa at 9:00 PM.
Overnight on Train
Includes: Private transfer , English peaking tour guide, lunch, entrance fees, boat and train tickets
Excludes: Dinner and personal expense
Accomodation : King Sapa Train

Day 4: Sapa – Trekking through Muong Hoa Valley
When you arrive at Lao Cai station early morning, our driver will greet and transfer you to Sapa for breakfast and rest.
At 9:00 AM, meet your guide for a scenic trek through Muong Hoa Valley:
Visit Y Linh Ho Village, home to the Black H’mong people.
Continue through Lao Chai and Ta Van Villages, surrounded by spectacular terraced rice fields.
Interact with locals and learn about their daily lives and cultures.
Overnight in Sapa
Includes: Private transfer, English speaking tour guide, breakfast and lunch
Excludes: Drinks, dinner and personal expense
Accomodation : 4* or 5* star on request
Bamboo Sapa Hotel
Address: 18 Mường Hoa, TT. Sa Pa, Sa Pa, Lào Cai
Phone: 0214 3871 076
Hotel de la Coupole
Address: 1, Hoang Lien Street Sapa District, Lao Cai Province Phone: 0214 3629 999
Sapa Town

Day 5:  Cat Cat – Fansipan: A Northern Vietnam Highlight
After breakfast, you will set out to explore Cat Cat Village, a charming village renowned for its breathtaking natural scenery and rich cultural heritage.
Its stunning Cat Cat Waterfall and traditional houses.
Local handicrafts and souvenirs.
In the afternoon, free time to explore Sapa Market, or take the cable car to Fansipan – the highest peak in Indochina (optional, at your own cost).
Overnight in Sapa
Includes: Private transfer, English speaking tour guide, breakfast
Excludes: Drinks, lunch, dinner and personal expense
Accomodation : 4* or 5* star on request
Bamboo Sapa Hotel
Address: 18 Mường Hoa, TT. Sa Pa, Sa Pa, Lào Cai
Phone: 0214 3871 076
Hotel de la Coupole
Address: 1, Hoang Lien Street Sapa District, Lao Cai Province Phone: 0214 3629 999

Day 6: Sapa to Hanoi by Tourist Bus
This morning, enjoy your free time to relax or explore Sapa at your own pace. If the weather is clear, you may choose to take the cable car ride to Fansipan Mountain, famously known as the “Roof of Indochina,” for breathtaking panoramic views over the Hoang Lien Son Range.
In the afternoon, at 2:00 PM , our driver will pick you up for the return journey to Hanoi , with an expected arrival around 6:30 PM .
Overnight in Hanoi
Includes: Shuttle bus and breakfast
Excludes: Drinks, lunch, dinner and personal expense
Accomodation : 4* or 5* star on request
Hanoi Tirant Hotel
Address: 38 P. Gia Ngư, Hàng Bạc, Hoàn Kiếm, Hà Nội
Phone: 024 6265 5999
Apricot Hotel Hanoi
Address: 136 P. Hàng Trống, Hàng Trống, Hoàn Kiếm, Hà Nội Phone: 024 3828 9595
Hotel de la Coupole
Address: 1, Hoang Lien Street Sapa District, Lao Cai Province Phone: 0214 3629 999

Day 7:  Hanoi to Halong Bay Cruise Experience
7:30 AM: Depart for Halong Bay, a UNESCO World Heritage Site.
Board a luxury cruise and settle into your cabin.
Join kayaking, swimming, or cave visits.
Enjoy a seafood dinner and sunset party onboard.
As the night falls gently over the limestone peaks, let the peaceful rhythm of Halong Bay remind you that every journey is not just about the places you visit, but the memories and moments you carry with you forever.
Overnight on Cruise
Includes: Shuttle bus, breakfast, lunch and dinner
Excludes: Drinks, personal expense
Accomodation: 4* or 5* star cruise on request
Sena Cruises or similar
Address : International Habour, Tuần Châu, Hạ Long, Quảng Ninh Phone : 0974 001 062
Peony Cruise
Address: 16 P. Thi Sách, Ngô Thì Nhậm, Hai Bà Trưng, Hà Nội 100000 Phone: +84935946688
Halong Bay (170 KM) From Hanoi

Day 8:  Flight from Halong Bay to Hue
After enjoying breakfast on the cruise and bidding farewell to the emerald waters of Halong Bay , you’ll disembark and transfer to Noi Bai International Airport in Hanoi for your short flight to Hue .
Upon arrival in Hue — the former imperial capital of Vietnam — you’ll be greeted and transferred to your hotel. The rest of the day is yours to relax, wander along the Perfume River, or simply enjoy the quiet charm of this UNESCO-recognized city.
Overnight in Hue
Includes: Shuttle bus, private transfer from/to airport, flight ticket, breakfast and brunch
Excludes: Drinks, personal expense
Accomodation: 4* or 5* star on request
White Lotus Hotel & Spa Hue
Address: 05-07 Hoàng Hoa Thám, Phú Nhuận, Huế
Phone: 0234 3881 888
Silk Path Grand Hue Hotel & Spa
Address: 2 Lê Lợi, Vĩnh Ninh, Huế Phone: 0234 3975 555

Day 9:  From Hue to Hoi An – City Tour
8:00 AM: Discover the imperial treasures of Hue:
Visit Thien Mu Pagoda along the Perfume River.
Explore the Royal Tombs of Khai Dinh and Tu Duc.
Taste the famous Bun Bo Hue noodle soup.
In the afternoon, drive along the scenic coastal road to Hoi An.
As you leave behind Hue’s royal heritage and journey along the picturesque coastal road to Hoi An , the day becomes a bridge between history and charm—connecting the grandeur of Vietnam’s imperial past with the timeless beauty of its lantern-lit ancient town.
Overnight in Hoi An
Includes: Private transfer, breakfast, entrance fees, English speaking guide and lunch
Excludes: Drinks, personal expense
Accomodation: 4* or 5* star on request
Hoian Delicacy Hotel
Address: No 116 Hùng Vương, Street, Hội An, Quảng Nam
Phone: 0386 272 471
Palm Garden Resort
Address: Lạc Long Quân, Cửa Đại, Hội An, Quảng Nam Phone: 0235 3927 927
Hoi An (Central Vietnam)

Day 10:  Explore Hoi An Countryside by Jeep – Authentic Local Experience
Experience the authentic rural life of Hoi An on a countryside tour:
Visit a local farm and learn about rice and vegetable cultivation.
Explore traditional industries like rice wine making, weaving, and wood carving.
Learn about modern practices like bird’s nest farming and aquaculture.
Enjoy a home-cooked lunch with a local family – a true cultural highlight.
This immersive countryside experience offers not just a glimpse, but a heartfelt connection to the traditions, flavors, and warm hospitality that define Hoi An’s rural life—leaving you with memories as rich and authentic as the culture itself.
Overnight in Hoi An
Includes: Private transfer, breakfast, Jeep tour with lunch, entrance fees, English speaking guide
Excludes: Drinks, personal expense
Accomodation: 4* or 5* star on request
Hoian Delicacy Hotel
Address: No 116 Hùng Vương, Street, Hội An, Quảng Nam
Phone: 0386 272 471
Palm Garden Resort
Address: Lạc Long Quân, Cửa Đại, Hội An, Quảng Nam Phone: 0235 3927 927

Day 11 Free Day in Hoi An
Today is your free day to enjoy Hoi An at your own pace:
Ride a bike to Cua Dai Beach
Shop for lanterns, ceramics, or custom-tailored clothes
Take a cooking class or explore riverside cafes
Overnight in Hoi An
Includes: Breakfast
Excludes: Drinks, meals, transfer, tour guide and personal expense
Accomodation: 4* or 5* star on request
Hoian Delicacy Hotel
Address: No 116 Hùng Vương, Street, Hội An, Quảng Nam
Phone: 0386 272 471
Palm Garden Resort
Address: Lạc Long Quân, Cửa Đại, Hội An, Quảng Nam Phone: 0235 3927 927

Day 12: Hoi An Departure – Flight to Ho Chi Minh City
Begin your day with breakfast, then you will have an early morning flight to Ho Chi Minh City - Vietnam’s dynamic southern hub where history, resilience, and modern energy converge. Upon arrival, embark on a city tour that takes you through some of Saigon’s most iconic landmarks.
Visit the Reunification Palace, Notre-Dame Cathedral, Central Post Office, and the War Remnants Museum.
Learn about Vietnam’s modern history and wartime legacy.
In the evening, dive into the city’s vibrant nightlife—explore lively streets, savor street food, and enjoy rooftop bars with stunning city views.
This journey through Ho Chi Minh City’s historic heart offers a profound understanding of Vietnam’s recent past, while setting the stage for the vibrant culture and bustling life that continue to shape the city today.
Overnight in Ho Chi Minh City
Includes: Private transfer form/to airport, flight ticket, breakfast, Small group city tour with lunch, English speaking guide
Excludes: Drinks, dinner and personal expense
Accomodation: 4* or 5* star on request
Saigon Prince Hotel or similar
Address: 63 Nguyễn Huệ, Bến Nghé, Quận 1, Thành phố Hồ Chí Minh
Phone: 028 3822 2999
New World Saigon Hotel or similar
Address: 76 Lê Lai, Phường Bến Thành, Quận 1, Thành phố Hồ Chí Minh Phone: 028 3822 8888
Ho Chi Minh City (District 1)

Day 13:  Explore the Mekong Delta – My Tho and Ben Tre Boat Tour
8:00 AM: Depart for the Mekong Delta – Vietnam’s agricultural heartland.
Enjoy a boat trip on the Mekong River
Take a sampan ride through palm-lined canals
Visit local villages, taste honey tea, coconut candy, and tropical fruits
Listen to traditional folk music and learn about cottage industries
Overnight in Ho Chi Minh City
Includes: Small Tour Group to Mekong Delta, English speaking guide, lunch, breakfast, entrance fees, boat
Excludes: Drinks, dinner and personal expense
Accomodation : 4* or 5* star on request
Saigon Prince Hotel or similar
Address: 63 Nguyễn Huệ, Bến Nghé, Quận 1, Thành phố Hồ Chí Minh
Phone: 028 3822 2999
New World Saigon Hotel or similar
Address: 76 Lê Lai, Phường Bến Thành, Quận 1, Thành phố Hồ Chí Minh
Phone: 028 3822 8888

Day 14: Free Day in Ho Chi Minh City with Optional Cu Chi Tunnels Tour
Enjoy a free day to explore the city on your own.
Optional: Join a guided tour to the Cu Chi Tunnels – an underground network used during the Vietnam War, showcasing the resilience and ingenuity of the Vietnamese soldiers.
Overnight in Ho Chi Minh City
Includes: Breakfast
Excludes: Meals and personal expense
Accomodation : 4* or 5* star on request
Saigon Prince Hotel or similar
Address: 63 Nguyễn Huệ, Bến Nghé, Quận 1, Thành phố Hồ Chí Minh
Phone: 028 3822 2999
New World Saigon Hotel or similar
Address: 76 Lê Lai, Phường Bến Thành, Quận 1, Thành phố Hồ Chí Minh
Phone: 028 3822 8888

Day 15:  Departure from Ho Chi Minh City
Enjoy your final morning in Vietnam. Our team will transfer you to Tan Son Nhat International Airport for your flight home and we hope this trip will leave you with unforgettable memories, lasting connections, and a deeper appreciation for the beauty of Vietnam. Whether it's your first visit or a return to rediscover the charm, we’re here to make every step meaningful.
Includes: Private transfer to airport
Excludes: English speaking tour guide
Accomodation: N/ A
Note: Late check-out upon request.`,
    duration:    "15 Days/ 14 Nights",
    price:       1568,
    categoryIds: ["1"],
    cityIds:     ["2", "3", "4", "1", "13", "12", "21", "20"],
    featuredTour: false,
    onSale:       false,
    saleDiscountPercentage: null,
  },
  {
    id:          "30",
    title:       "Vietnam War Tour 16 Days",
    imageUrl:    "https://asiaeyestravel.com/uploads/source/blog/hanoi/maison-centrale-hanoi.jpg",
    description: `Join Asia Eyes Travel on the 16-day Vietnam War Tour , where you’ll explore significant historical sites and experience Vietnam’s rich culture. This journey is ideal for veterans, families, and history enthusiasts.
The tour begins in Hanoi , visiting Hoa Lo Prison, a B-52 wreck, and the Vinh Moc Tunnels , then continues to the DMZ, Khe Sanh, Quang Tri, and the Ben Hai River , and concludes in the historic cities of Hue and Hoi An .
The itinerary also includes relaxing beach stays in destinations like Da Nang and overnight luxury cruises in Halong Bay , providing the perfect balance between historical exploration and leisure.
Let Asia Eyes Travel create a meaningful, unforgettable journey that combines history, culture, and relaxation.`,
    itinerary:   `Day 1:  Arrival in Hanoi
Upon your arrival at Noi Bai International Airport , you will be warmly greeted by our local guide and transferred by private vehicle to your hotel, ideally located in the heart of Hanoi’s historic Old Quarter . Take some time to relax after your journey and settle into the vibrant rhythm of the city. In the evening, gather with your guide and fellow travelers for a special welcome dinner at a local restaurant, where you’ll enjoy authentic Vietnamese cuisine. During dinner, your guide will provide an insightful briefing about the journey ahead, introducing the Vietnam War tour highlights , historical context, and important sites you will explore. This first evening sets the tone for a meaningful and reflective adventure through Vietnam’s past, offering a chance to connect with the group and gain a deeper understanding of the country’s rich and complex history before 1975.
Overnight in Hanoi.
Includes: Private bus/ Car and tour guide
Excludes: Meals and personal expense
Accomodation : 4* or 5* star on request
Hanoi Tirant Hotel
Address: 38 P. Gia Ngư, Hàng Bạc, Hoàn Kiếm, Hà Nội
Phone: 024 6265 5999
Apricot Hotel Hanoi
Address: 136 P. Hàng Trống, Hàng Trống, Hoàn Kiếm, Hà Nội Phone: 024 3828 9595
Note: Early check-in upon request

Day 2:  Hanoi – Historical War Sites
Morning: Begin your historical journey at Ho Chi Minh Mausoleum , the resting place of Vietnam’s revered leader. Walk through the serene Presidential Palace grounds, where important political decisions were made during the war years. Continue to the One Pillar Pagoda , a thousand-year-old Buddhist site and national symbol of resilience and hope.
Afternoon: Explore the infamous Hoa Lo Prison , also known as the “Hanoi Hilton,” where American POWs were incarcerated during the Vietnam War. Next, head to Huu Tiep Lake , where the visible wreckage of a downed B-52 bomber lies as a stark reminder of the U.S. air raids. Conclude the afternoon with a visit to the B-52 Victory Museum , which provides deep insight into Hanoi’s wartime defense strategies and civilian perseverance.
Evening: Enjoy a traditional cultural dinner in the vibrant Old Quarter , reflecting on the day’s discoveries.
Overnight in Hanoi.
Includes: Private transfer, English speaking tour guide, lunch and entrance fees
Excludes: Drinks, dinner and personal expense
Accomodation : 4* or 5* star on request
Hanoi Tirant Hotel
Address: 38 P. Gia Ngư, Hàng Bạc, Hoàn Kiếm, Hà Nội
Phone: 024 6265 5999
Apricot Hotel Hanoi
Address: 136 P. Hàng Trống, Hàng Trống, Hoàn Kiếm, Hà Nội Phone: 024 3828 9595

Day 3:  Day in Hanoi – Free Time to Relax or Explore the Old Quarter
Today is your free day in Hanoi, giving you the perfect opportunity to unwind or explore the capital city at your own pace. For those seeking relaxation, enjoy a slow morning with Vietnamese coffee at a local café, or consider a gentle stroll around Hoan Kiem Lake, where locals gather for tai chi and morning exercise.
If you're feeling adventurous, dive into the vibrant atmosphere of Hanoi’s Old Quarter — a maze of narrow streets alive with local shops, street food stalls, ancient temples, and colonial architecture. You might want to visit Dong Xuan Market, sample local delicacies like pho or bun cha, or discover hidden cafes tucked inside old French buildings.
Optional experiences such as a water puppet show , a traditional cooking class , or a guided street food tour are also available.
Overnight in Hanoi.
Includes: Breakfast
Excludes: Dinner, lunch, private transfer, English speaking guide and personal expense
Accomodation : 4* or 5* star on request
Hanoi Tirant Hotel
Address: 38 P. Gia Ngư, Hàng Bạc, Hoàn Kiếm, Hà Nội
Phone: 024 6265 5999
Apricot Hotel Hanoi
Address: 136 P. Hàng Trống, Hàng Trống, Hoàn Kiếm, Hà Nội Phone: 024 3828 9595

Day 4:  Hanoi to Ninh Binh – Historical Excursion
At 8:30 AM, we’ll pick you up from your hotel and head out on a scenic drive to Ninh Binh , a picturesque destination often called “Halong Bay on land” for its stunning limestone formations and lush countryside. Upon arrival, we’ll begin with a visit to the ancient capital of Hoa Lu , the former political center of Vietnam in the 10th and 11th centuries. Here, you'll explore historic temples and learn about the Dinh and Le dynasties that once ruled the region.
Afterward, enjoy a delicious lunch at a local restaurant featuring authentic Vietnamese cuisine.
In the afternoon, we’ll take you on a peaceful boat ride through the Trang An Landscape Complex, a UNESCO World Heritage Site. As you glide along calm rivers and pass through mysterious caves surrounded by dramatic limestone cliffs, you’ll experience the natural beauty and serenity that make Ninh Binh so special. This day promises a perfect mix of culture, history, and nature.
Overnight in Ninh Binh.
Includes: Breakfast, small Tour group, lunch, entrance fees, English speaking tour guide
Excludes: Drinks, dinner and personal expense
Accomodation: 4* or 5* star on request
Lalita Ninh Binh Resort
Address: Thung Nham, Hoa Lư District, Ninh Bình Phone: 0229 3626 888
Emeralda Resort Ninh Binh
Address: Van Long Wetland Nature Reserve, Xã, Gia Vân, Gia Viễn, Ninh Bình Phone: 0229 3658 333
Ninh Binh (Tam Coc, Trang An)( 95KM) from Hanoi

Day 5: Halong Bay Cruise Experience – A Day of Scenic Beauty and Relaxation
8:00 AM: Our driver will pick you up from your hotel for the journey to the stunning Halong Bay .
11:45 AM: Upon arrival, you’ll be warmly welcomed by the cruise team. After check-in, sit down to a delicious lunch as the boat begins its journey through the breathtaking scenery of Halong Bay and Lan Ha Bay, known for emerald waters and majestic limestone islands.
3:30 PM: In the afternoon, enjoy a variety of onboard activities. Go kayaking through quiet lagoons, take a refreshing swim, or join a Vietnamese cooking class to learn how to prepare local dishes.
As evening approaches, relax on the sundeck during a sunset party—perfect for enjoying the peaceful surroundings and snapping some stunning photos.
7:00 PM: Delight in a romantic dinner onboard, then spend the rest of the evening relaxing and taking in the magical nighttime atmosphere of Halong Bay.
Overnight on cruise.
Includes: Shuttle bus, entrance fees, breakfast, lunch and dinner
Excludes: Drinks, personal expense
Accomodation: 4* or 5* star cruise on request
Sena Cruises or similar
Address : International Habour, Tuần Châu, Hạ Long, Quảng Ninh Phone : 0974 001 062
Peony Cruise
Address: 16 P. Thi Sách, Ngô Thì Nhậm, Hai Bà Trưng, Hà Nội 100000 Phone: +84935946688
Halong Bay (190 KM) From Ninh Binh

Day 6:  Morning on Halong Bay & Return to Hanoi
6:30 AM – 7:30 AM: Start your day with a hearty breakfast served onboard. Enjoy a selection of fresh, flavorful dishes while taking in the early morning serenity of Halong Bay.
7:30 AM: After breakfast, take part in the cruise’s final activities. Whether you choose to kayak through calm waters, take a refreshing swim, or simply relax on the sundeck, it’s a perfect time to soak in the beauty of the bay one last time.
As the cruise continues, sit down for an early lunch while gliding past more dramatic limestone formations and emerald waters.
12:00 PM: After lunch, the boat returns to the harbor. Disembark and transfer to your bus for the comfortable drive back to Hanoi.
Overnight in Hanoi.
Includes: Shuttle bus, breakfast and lunch
Excludes: Dinner, tour guide and personal expense
Accomodation : 4* or 5* star on request
Hanoi Tirant Hotel
Address: 38 P. Gia Ngư, Hàng Bạc, Hoàn Kiếm, Hà Nội
Phone: 024 6265 5999
Apricot Hotel Hanoi
Address: 136 P. Hàng Trống, Hàng Trống, Hoàn Kiếm, Hà Nội Phone: 024 3828 9595

Day 7:  Hanoi to Quang Binh (Dong Hoi) – Flight
After breakfast, transfer to the airport for a short domestic flight to Dong Hoi, the gateway to the stunning central region of Vietnam. Upon arrival, you’ll be welcomed and taken to your hotel, ideally located along the tranquil coastline. Take the rest of the day to relax and recover from your journey.
Overnight in Phong Nha.
Includes: Private transfer form/to airport , flight tickets and breakfast
Excludes: Dinner, lunch and personal expense
Accomodation : 4* or 5* star on request
Poseido Hotel Quảng Bình
Address: 223 Trương Pháp, Việt Nam, Đồng Hới, Quảng Bình Phone: 0232 3535 555
Victory Road Villas
Address: Highway 20, Phong Nha, Bố Trạch, Quảng Bình Phone: 0886 199 599
Phong Nha, Quang Binh

Day 8:  Phong Nha Caves – Underground War Shelters
Start your day with a scenic drive from Dong Hoi or Phong Nha town to the Phong Nha-Ke Bang National Park , a UNESCO World Heritage Site known for its breathtaking limestone formations and rich wartime history.
8:30 AM: Begin your adventure with a visit to Phong Nha Cave , one of the most famous caves in Vietnam. Board a traditional boat for a peaceful ride along the Son River, passing lush landscapes and local villages. As you enter the cave, marvel at the impressive stalactites and stalagmites that line the vast underground river. The cave once served as a hiding and transportation route during the Vietnam War, adding a historical layer to its natural beauty.
11:30 AM: Enjoy a delicious local lunch at a riverside restaurant, sampling regional specialties.
1:00 PM: Continue to Paradise Cave (Dong Thien Duong) , often considered one of the most beautiful dry caves in Asia. A short electric buggy ride and a few stairs will lead you to a jaw-dropping view of its colossal chambers, intricate rock formations, and magical lighting. Walk along wooden pathways and admire nature’s artistry at its finest.
4:00 PM: Return to your hotel.
Overnight in Quang Binh
Includes: Breakfast, lunch, private transfer, entrance fees, boat and English speaking tour guide
Excludes: Drinks, dinner and personal expense
Accomodation: 4* or 5* star on request
Poseido Hotel Quảng Bình
Address: 223 Trương Pháp, Việt Nam, Đồng Hới, Quảng Bình Phone: 0232 3535 555
Victory Road Villas
Address: Highway 20, Phong Nha, Bố Trạch, Quảng Bình Phone: 0886 199 599

Day 9:  Vinh Moc Tunnels and Ben Hai River
Start: 8:30 AM
Begin your journey with a profound exploration of the Vinh Moc Tunnels, an extraordinary underground village where hundreds of civilians lived and took shelter during the intense American bombings of the Vietnam War. Walking through these narrow, damp passageways provides a moving glimpse into the determination and endurance of those who survived deep beneath the earth.
Continue to the Ben Hai River and Hien Luong Bridge , the historic demarcation line along the 17th parallel that once divided North and South Vietnam . These landmarks are powerful reminders of a nation once torn in two, yet also of its path to reunification.
The day’s historical journey continues through the Demilitarized Zone (DMZ) , one of the most heavily bombed areas during the war. Visit the Quang Tri Citadel, a site of fierce battles during the 1972 Easter Offensive.
Head westward to the Khe Sanh Combat Base , once a key U.S. Marine stronghold, famously under siege during the Tet Offensive. Then, stop by the Rockpile , a towering limestone formation used by U.S. forces as a strategic observation post, and cross the Dakrong Bridge , a crucial part of the Ho Chi Minh Trail .
In the late afternoon, continue your drive south to Hue, the former imperial captal of Vietnam. Check in at your hotel and unwind.
Overnight in Hue City.
Includes: Breakfast, lunch, private transfer, entrance fees and English speaking guide
Excludes: Drinks, dinner and personal expense
Accomodation: 4* or 5* star on request
White Lotus Hue Hotel
Address: 05-07 Hoang Hoa Tham, Phu Nhuan, Hue
Phone: 0234 3881 888
Silk Path Grand Hue Hotel
Address: 2 Le Loi, Vinh Ninh, Hue Phone: 0234 3975 555
Hue city (236 km) from Quang Binh

Day 10: Hue City Tour
Start: 8:00 AM
Begin your day as our knowledgeable guide and driver pick you up from your hotel for a journey into Hue’s imperial past.
The first stop is the iconic Thien Mu Pagoda , an elegant seven-story pagoda perched peacefully on the banks of the Perfume River . From here, enjoy a scenic boat cruise along the river, offering a serene glimpse into local life and the natural beauty of Hue’s countryside.
Next, step into the heart of Vietnam’s royal history with a visit to the Imperial City , a vast UNESCO World Heritage Site. Walk through imposing citadel gates and explore the remnants of palaces, temples, and ceremonial halls that once formed the seat of the Nguyen Dynasty.
Continue your exploration with visits to two of Hue’s most significant royal tombs. Khai Dinh Tomb stuns with its dramatic blend of Vietnamese and European architecture, while Tu Duc Tomb offers a more tranquil, poetic ambiance surrounded by lotus-filled lakes and pine forests.
After a delicious traditional lunch featuring Hue’s imperial cuisine, return to your hotel in the early afternoon. The rest of the day is free for you to relax or discover more of Hue at your own pace. Overnight in Hue.
Includes: Breakfast, lunch, private transfer, entrance fees, boat and English speaking tour guide
Excludes: Drinks, dinner and personal expense
Accomodation: 4* or 5* star on request
White Lotus Hue Hotel
Address: 05-07 Hoang Hoa Tham, Phu Nhuan, Hue
Phone: 0234 3881 888
Silk Path Grand Hue Hotel
Address: 2 Le Loi, Vinh Ninh, Hue Phone: 0234 3975 555

Day 12:  Hue to Da Nang via My Son – Hoi An
Start: 8:30 AM
Depart Hue and begin your journey south along the breathtaking Hai Van Pass , one of Vietnam’s most scenic coastal roads. As you ascend the winding route, enjoy panoramic views of mountains, lush forests, and the sparkling East Sea — a dramatic reminder of both natural beauty and wartime significance.
Arrive at the My Son Sanctuary , a UNESCO World Heritage Site that was once the spiritual heart of the Champa Kingdom. Though partially destroyed during the Vietnam War, the ruins still stand as a powerful symbol of resilience and ancient history. Explore the red brick towers and temples nestled in a quiet valley surrounded by jungle.
Afterward, continue to Hoi An , a beautifully preserved trading town known for its lantern-lit streets and riverside charm. Upon arrival, check in to your hotel and take the rest of the day to relax or begin exploring the historic town on your own. Overnight in Hoi An.
Includes: Private transfer, breakfast, lunch, entrance fees and English speaking guide
Excludes: Dinner and personal expense
Accomodation: 4* or 5* star on request
Hoian Delicacy Hotel
Address: No 116 Hùng Vương, Street, Hội An, Quảng Nam
Phone: 0386 272 471
Palm Garden Resort
Address: Lạc Long Quân, Cửa Đại, Hội An, Quảng Nam Phone: 0235 3927 927
Hoi An (125 km) from Hue

Day 13: My Lai Massacre Memorial Full-Day Tour
Start: 8:00 AM
Your full-day tour begins with a pick-up from your hotel in Hoi An or Da Nang. From there, we embark on a 2.5-hour drive to Quang Ngai Province, where the infamous My Lai Massacre took place during the Vietnam War.
10:30 AM - My Lai Memorial Site Upon arrival, visit the My Lai Massacre Memorial Site, dedicated to honoring the innocent lives lost in the tragic event of March 16, 1968. Explore the museum, which houses detailed exhibits, photographs, and personal accounts from survivors. Your guide will share the heartbreaking story of the massacre, providing historical context and deep insights into the human cost of the war. This somber visit allows you to pay respects and understand the horrors of the war from a civilian perspective.
12:30 PM - Traditional Vietnamese Lunch After the emotional visit, enjoy a traditional Vietnamese lunch in a nearby local restaurant, where you can experience the flavors of the region.
1:30 PM - Explore the Memorial Area In the afternoon, take a quiet walk around the My Lai Memorial area. Visit the mass graves, the memorial statue, and the site of the massacre, where survivors and family members continue to honor their lost loved ones. This peaceful and reflective environment is a powerful reminder of the toll of war.
3:30 PM - Visit My Lai Villages You will also have the opportunity to visit nearby villages that were once affected by the tragedy. Speak with locals, hear their stories, and learn about the rebuilding efforts post-war.
5:00 PM - Return to Hoi An.
Overnight in Hoi An.
Includes: Breakfast, lunch, Small group tour and English speaking guide
Excludes: Dinner and personal expense
Accomodation: 4* or 5* star on request
Hoian Delicacy Hotel
Address: No 116 Hùng Vương, Street, Hội An, Quảng Nam
Phone: 0386 272 471
Palm Garden Resort
Address: Lạc Long Quân, Cửa Đại, Hội An, Quảng Nam Phone: 0235 3927 927

Day 14–15:  Hoi An – Free Days
During these leisurely days in Hoi An, you’ll have the freedom to explore the town at your own pace. Begin by strolling through the Hoi An Ancient Town , a UNESCO World Heritage site, where you’ll be captivated by the charming streets adorned with traditional architecture, vibrant lanterns, and unique shops. Make sure to visit the iconic Japanese Covered Bridge, a symbol of Hoi An's rich cultural exchange, and the lively Hoi An Market, where you can immerse yourself in the local atmosphere and try delicious street food. Whether you’re savoring the local cuisine, shopping for souvenirs, or simply soaking in the town's peaceful ambiance, these days will be a perfect blend of relaxation and discovery.
Overnight in Hoi An.
Includes: Breakfast
Excludes: Lunch, dinner and personal expense
Accomodation: 4* or 5* star on request
Hoian Delicacy Hotel
Address: No 116 Hùng Vương, Street, Hội An, Quảng Nam
Phone: 0386 272 471
Palm Garden Resort
Address: Lạc Long Quân, Cửa Đại, Hội An, Quảng Nam Phone: 0235 3927 927

Day 16: Departure from Hoi An/Da Nang
Today marks the end of a meaningful journey with Asia Eyes Travel . Until your flight, take time to relax and reflect on the memories made during your time in Vietnam. As we say goodbye, please know how grateful we are to have shared this experience with you. We sincerely hope that one day, you, your friends, or your family will return to my beautiful country, Vietnam. Thank you for choosing Asia Eyes Travel to guide you through this unforgettable Vietnam War Tour. We look forward to welcoming you again on your next adventure!
Includes: Private transfer to airport
Excludes: English speaking tour guide
Accomodation: N/ A
Note: Late check-out upon request.`,
    duration:    "16 Days/15 Nights",
    price:       2890,
    categoryIds: ["1", "7"],
    cityIds:     ["2", "3", "1", "17", "16", "13", "12"],
    featuredTour: false,
    onSale:       false,
    saleDiscountPercentage: null,
  },
  {
    id:          "31",
    title:       "Vietnam War Memories Tour 19 Days",
    imageUrl:    "https://asiaeyestravel.com/uploads/source/blog/war/vietnam-war-memories-helloc.jpg",
    description: `The Vietnam War Memories Tour is a 19-day Vietnam War tour designed for elderly veterans who participated in the conflict before 1975. This immersive journey offers opportunities for remembrance, reflection, and reconnection with the land and people affected by the war.
Begin in Hanoi , exploring Hoa Lo Prison (“Hanoi Hilton”) and the Vietnam Military History Museum . Travel through Halong Bay , Ninh Binh , and central provinces, visiting key sites such as Dong Loc T-junction , Truong Son National Cemetery , and Quang Tri Citadel .
Experience the underground Vinh Moc Tunnels , the DMZ along the Ben Hai River , and pay tribute at the My Lai Memorial . In southern Vietnam, discover the Cu Chi Tunnels , Reunification Palace , and enjoy a scenic cruise through the Mekong Delta canals.
Accompanied by experienced bilingual guides, travelers enjoy gentle pacing, comfortable accommodations, and optional cultural exchanges with Vietnamese veterans. This Vietnam veteran tour provides a respectful, educational, and unforgettable journey, honoring history while reconnecting with Vietnam’s rich heritage.`,
    itinerary:   `Day 1: Arrival in Hanoi – The Beginning of a Journey of Remembrance
Upon arrival at the airport, the Asia Eyes Travel team will warmly welcome you and transfer you to your hotel in the city center. After check-in, you’ll have the afternoon free to relax and recover from your flight. Feel free to unwind, settle in, or take a gentle stroll around the neighborhood. In the evening, the Asia Eyes Travel team will pick you up for a welcome dinner at a local restaurant, where you’ll enjoy traditional Vietnamese cuisine in a cozy, friendly setting.
Includes: Private bus/ Car and tour guide
Excludes: Meals and personal expense
Accomodation : 4* or 5* star on request
Hanoi Tirant Hotel
Address: 38 P. Gia Ngư, Hàng Bạc, Hoàn Kiếm, Hà Nội
Phone: 024 6265 5999
Apricot Hotel Hanoi
Address: 136 P. Hàng Trống, Hàng Trống, Hoàn Kiếm, Hà Nội Phone: 024 3828 9595
Note: Early check-in upon request

Day 2:  A Journey of Remembrance and Connection in Hanoi
Start your journey with a visit to the Ho Chi Minh Mausoleum and Presidential Palace, where Vietnam's modern history began.
Next, explore the One Pillar Pagoda, a unique structure built in 1049, symbolizing purity and enlightenment.
Discover the Temple of Literature – Vietnam's first university, founded in 1070, where the nation's values of culture and knowledge are preserved.
Continue your journey at the Vietnam Military History Museum, featuring valuable artifacts, including aircraft, tanks, and many items from the war.
Visit Hoa Lo Prison – "Hanoi Hilton", where American POWs were held during the Vietnam War.
Stroll through Hanoi's Old Quarter , where you’ll enjoy a traditional egg coffee at Café Giang, a famous café known for its unique flavor.
Evening: Explore Hanoi by cyclo – experience this traditional form of transport in the capital.
Overnight in Hanoi.
Includes: Private transfer, English speaking guide, breakfast, lunch, private cyclo tour and entrance fees
Excludes: Dinner and personal expense
Accomodation : 4* or 5* star on request
Hanoi Tirant Hotel
Address: 38 P. Gia Ngư, Hàng Bạc, Hoàn Kiếm, Hà Nội
Phone: 024 6265 5999
Apricot Hotel Hanoi
Address: 136 P. Hàng Trống, Hàng Trống, Hoàn Kiếm, Hà Nội Phone: 024 3828 9595

Day 3:  Sharing History: A Special Meeting with Vietnam Veterans
After breakfast, guests will have free time to explore Hanoi. Depending on the schedule and availability, we may arrange a special cultural exchange or meeting with Vietnamese veterans – a valuable opportunity to share, connect, and gain a deeper understanding of the historical memories from both sides, from those who were once adversaries in war, now friends in peace.
Includes: Breakfast
Excludes: Meals and personal expense
Accomodation : 4* or 5* star on request
Hanoi Tirant Hotel
Address: 38 P. Gia Ngư, Hàng Bạc, Hoàn Kiếm, Hà Nội
Phone: 024 6265 5999
Apricot Hotel Hanoi
Address: 136 P. Hàng Trống, Hàng Trống, Hoàn Kiếm, Hà Nội Phone: 024 3828 9595

Day 4: Explore the Beauty of Halong Bay: A Relaxing and Memorable Cruise
8:00 AM: Our shuttle bus will pick you up from your hotel and transfer you to the breathtaking Halong Bay.
11:45 AM: Upon arrival in Halong Bay, our friendly crew will welcome you aboard. After checking in, enjoy a delicious lunch while cruising through the stunning landscapes of Halong Bay and the serene Lan Ha Bay, known for its dramatic limestone formations and crystal-clear waters.
3:30 PM: Engage in various exciting activities on the cruise, such as kayaking through the emerald waters, swimming in peaceful coves, or participating in a fun cooking class where you can learn to prepare traditional Vietnamese dishes.
As the day comes to an end, don't miss the sunset party on the boat – the perfect time for photography enthusiasts to capture the beautiful hues of the setting sun over the bay's karst peaks.
7:00 PM: Savor a romantic dinner on board, accompanied by beautiful views and a relaxing atmosphere. After dinner, unwind under the stars and enjoy the peaceful surroundings of the bay.
Overnight on Cruise
Includes: Shuttle bus, entrance fees, breakfast, lunch and dinner
Excludes: Drinks, personal expense
Accomodation: 4* or 5* star cruise on request
Sena Cruises or similar
Address : International Habour, Tuần Châu, Hạ Long, Quảng Ninh Phone : 0974 001 062
Peony Cruise
Address: 16 P. Thi Sách, Ngô Thì Nhậm, Hai Bà Trưng, Hà Nội 100000 Phone: +84935946688
Halong Bay (170 KM) from Hanoi

Day 4:  Halong Bay & Ninh Binh: A Journey Through Nature and Culture
6:30 AM – 7:30 AM: Start your day with a delicious breakfast served on board.
After breakfast, enjoy a range of engaging activities on the bay, relax, and take in the fresh air. Then, savor a light lunch as the cruise continues to glide through the breathtaking scenery of Halong Bay.
11:50 AM: Disembark from the cruise and return to the port. Our private car will be waiting to transfer you to Ninh Binh. Upon arrival, check in at your hotel and rest, preparing for the next memorable experiences in this beautiful region.
Overnight in Ninh Binh
Includes: Breakfast, brunch and shutte bus
Excludes: Drinks, dinner and personal expense
Accomodation: 4* or 5* star on request
Lalita Ninh Binh Resort
Address: Thung Nham, Hoa Lư District, Ninh Bình Phone: 0229 3626 888
Emeralda Resort Ninh Binh
Address: Van Long Wetland Nature Reserve, Xã, Gia Vân, Gia Viễn, Ninh Bình Phone: 0229 3658 333
Ninh Binh (Tam Coc, Trang An)( 95KM) from Hanoi

Day 5:  Explore the Cultural and Natural Beauty of Ninh Binh
Begin your day with a visit to the Dinh and Le Temples in Hoa Lu, the ancient capital of Vietnam. Nestled at the foot of lush limestone mountains, these temples honor King Dinh Tien Hoang and King Le Dai Hanh, two national heroes who laid the foundation for Vietnam’s independence in the 10th century. Their historical significance and unique architecture offer a deep insight into Vietnam’s royal past.
Next, continue to the UNESCO World Heritage Site Trang An Scenic Landscape Complex. Board a traditional sampan boat and drift along peaceful waterways that meander through caves, lush valleys, and dramatic limestone karsts. As you glide through the tranquil scenery, you’ll feel transported to a serene and untouched world.
This tour perfectly combines history and nature, offering travelers a glimpse into both Vietnam’s cultural heritage and its awe-inspiring natural landscapes. Ideal for those seeking a peaceful yet enriching experience, the Ninh Binh tour is a highlight of any Northern Vietnam itinerary.
Overnight in Ninh Binh
Includes: Breakfast, small Tour group, lunch, entrance fees, boat and English speaking tour guide
Excludes: Drinks, dinner and personal expense
Accomodation: 4* or 5* star on request
Lalita Ninh Binh Resort
Address: Thung Nham, Hoa Lư District, Ninh Bình Phone: 0229 3626 888
Emeralda Resort Ninh Binh
Address: Van Long Wetland Nature Reserve, Xã, Gia Vân, Gia Viễn, Ninh Bình Phone: 0229 3658 333

Day 6:  Ninh Binh - President Ho Chi Minh Native Home ( Nghe An ) - Ha Tinh
Depart from Ninh Binh and head south, passing through the peaceful provinces of Thanh Hoa and Nghe An. The first stop is the Kim Lien Relic Site in Nam Dan, Nghe An – the beloved hometown of President Ho Chi Minh.
Here, you will:
Visit the humble thatched house where President Ho Chi Minh was born and spent his childhood.
Pay respects at Chung Son Temple, dedicated to his ancestors.
Explore the Ho Chi Minh Museum – Nghe An branch, which houses many valuable artifacts and documents about his life and revolutionary journey.
Enjoy a traditional lunch at a local restaurant, sampling the unique flavors of Nghe An cuisine.
After lunch, continue your journey to Ha Tinh (approximately a 2-hour drive). Upon arrival, check in at the hotel and rest after the day’s travels.
In the evening, enjoy free time to explore the peaceful city of Ha Tinh. Overnight in Ha Tinh.
Includes: Breakfast, lunch, private transfer and English speaking tour guide
Excludes: Drinks, dinner and personal expense
Accomodation: 4* or 5* star on request
SongLam Waterfront Hotel
Address: Block 2, Xuan An Town, Nghi Xuan district, Ha Tinh Province Phone: 0239 3824 888
Muong Thanh Grand Ha Tinh Hotel
Address: QL1A, Kỳ Trinh, Thị xã Kỳ Anh, Hà Tĩnh Phone: 0239 3720 666
Ha Tinh (250 km) from Ninh Binh

Day 7:  Visit Dong Loc Junction and Explore Central Vietnam - Quang Binh
We will begin the journey by visiting Dong Loc Junction, a historic site renowned for the heroic sacrifice of 10 young female volunteers during the resistance against American forces. This place marks the spot where these brave women gave their youth and lives to protect the nation, telling a deeply moving story of courage and sacrifice.
After visiting the site, the group will enjoy lunch at a local restaurant, savoring regional specialties.
In the afternoon, continue the journey to Quang Binh. Along the way, guests will have the opportunity to stop at several rural villages, engage in conversations with local people, and learn about the life, customs, and warmth of the Central Vietnamese people. This is a wonderful chance to immerse in the slow pace of life and discover the simple beauty of this region.
Overnight in Quang Binh
Includes: Breakfast, lunch, private transfer, entrance fees and English speaking tour guide
Excludes: Drinks, dinner and personal expense
Accomodation: 4* or 5* star on request
Poseido Hotel Quảng Bình
Address: 223 Trương Pháp, Việt Nam, Đồng Hới, Quảng Bình Phone: 0232 3535 555
Victory Road Villas
Address: Highway 20, Phong Nha, Bố Trạch, Quảng Bình Phone: 0886 199 599
Phong Nha, Quang Binh (146 km) from Ha Tinh

Day 8:  Paradise Cave & Phong Nha Cave Exploration Tour
Morning:
08:30 AM: After breakfast at the hotel, our car and guide will pick you up for a trip to Paradise Cave, known as the “Palace in the Earth” and one of the most magnificent caves in Asia.
On the way, enjoy the peaceful scenery of the Phong Nha – Ke Bang National Park.
09:00 AM: Arrive at the Paradise Cave tourist area. Take a short walk through the pristine forest to reach the cave entrance and begin your journey into a stunning world of stalactites and stalagmites.
Lunch:
12:00 PM: Enjoy lunch at a local restaurant with Quang Binh specialties. Take a short rest after the meal.
Afternoon:
1:30 PM: Continue to Phong Nha Cave. You’ll take a boat trip on the clear blue Son River to access the cave.
Explore the beautiful inner caves, such as Tien (Fairy) Cave, Royal Palace Cave, and Bi Ky Cave, with their fascinating natural formations.
Learn from the guide about the cave’s historical role during the war, as it once served as a hiding and logistics base for Vietnamese soldiers.
4:30 PM: Return to your hotel. Free time to relax.
Overnight in Quang Binh
Includes: Breakfast, lunch, private transfer, entrance fees, boat and English speaking tour guide
Excludes: Drinks, dinner and personal expense
Accomodation: 4* or 5* star on request
Poseido Hotel Quảng Bình
Address: 223 Trương Pháp, Việt Nam, Đồng Hới, Quảng Bình Phone: 0232 3535 555
Victory Road Villas
Address: Highway 20, Phong Nha, Bố Trạch, Quảng Bình Phone: 0886 199 599

Day 9: Historic Destinations: Quang Tri and the Old Battlefields
1. Quang Tri Citadel A powerful symbol of resistance and sacrifice, the Quang Tri Citadel witnessed some of the fiercest battles of the Vietnam War, particularly in 1972. Today, it stands as a solemn historical site with preserved remnants and a dedicated museum, offering insight into the resilience and bravery of Vietnamese soldiers and civilians.
2. Lao Bao Prison Originally built by the French colonial authorities and later used during the Vietnam War, Lao Bao Prison is a poignant reminder of the harsh conditions endured by revolutionary fighters. The site reflects both colonial oppression and the indomitable spirit of those imprisoned.
3. Hien Luong Bridge & Ben Hai River Once marking the 17th parallel—the division between North and South Vietnam—Hien Luong Bridge is a deeply emotional site. Visitors can walk across the historic bridge, view the painted halves, and gain a deeper understanding of the personal and national impacts of the country's division.
4. Vinh Moc Tunnels This remarkable underground network allowed villagers and soldiers to live, work, and survive intense bombing raids. The Vinh Moc Tunnels provide a vivid window into wartime ingenuity and the harsh realities of underground life during the conflict.
5. Truong Son Martyrs’ Cemetery As the resting place of thousands of soldiers who died along the Ho Chi Minh Trail, this solemn cemetery honors the lives lost for national reunification. It’s a place of reflection, respect, and remembrance for visitors and veterans alike.
6. Cua Tung Cua Tung was once a strategic military zone during the war, targeted for its location and military significance. Today, it blends historical importance with natural coastal beauty, making it a meaningful stop for those tracing Vietnam’s wartime legacy.
7. Cua Viet An essential coastal battlefield, Cua Viet played a critical role in supplying and supporting the Vietnamese military. Exploring this site reveals stories of courage and the intense struggles faced during wartime operations along the coast.
After the visit, we continue the journey south to Hue. Overnight in Hue.
Includes: Breakfast, lunch, private transfer, entrance fees and English speaking tour guide
Excludes: Drinks, dinner and personal expense
Accomodation: 4* or 5* star on request
White Lotus Hue Hotel
Address: 05-07 Hoang Hoa Tham, Phu Nhuan, Hue
Phone: 0234 3881 888
Silk Path Grand Hue Hotel
Address: 2 Le Loi, Vinh Ninh, Hue Phone: 0234 3975 555
Hue City (240 km) form Quang Binh

Day 10:  Hue Heritage Discovery
At 8:00 AM, your day begins as our professional guide and driver pick you up from your hotel in Hue for a journey through the city’s rich imperial legacy.
Our first stop is the serene Thien Mu Pagoda , a centuries-old spiritual landmark gracefully situated by the banks of the Perfume River. From here, enjoy a peaceful boat cruise along the river, offering tranquil views of Hue’s lush surroundings and riverside life.
We then continue to explore the majestic Imperial City, a UNESCO World Heritage Site , where you’ll walk through grand gates, royal palaces, and ancient courtyards that once housed Vietnam’s emperors.
The tour proceeds to two of Hue’s most famous royal tombs: Khai Dinh Tomb , noted for its striking fusion of Eastern and Western architecture, and Tu Duc Tomb, a poetic complex that reflects the life and philosophy of the emperor it honors.
After enjoying a traditional lunch with local Hue specialties, we return to your hotel. The afternoon is yours to relax or explore more of Hue at your leisure.
Overnight in Hue
Includes: Breakfast, lunch, private transfer, entrance fees and English speaking tour guide
Excludes: Drinks, dinner and personal expense
Accomodation: 4* or 5* star on request
White Lotus Hue Hotel
Address: 05-07 Hoang Hoa Tham, Phu Nhuan, Hue
Phone: 0234 3881 888
Silk Path Grand Hue Hotel
Address: 2 Le Loi, Vinh Ninh, Hue Phone: 0234 3975 555

Day 11:  Hoi An Discovery via Hai Van Pass
After breakfast, we’ll begin your journey to Hoi An, traveling along one of Vietnam’s most picturesque routes. As we drive, you’ll be treated to stunning views of the Hai Van Pass, a coastal road renowned for its beauty. The winding path offers sweeping vistas of lush, green mountains and the sparkling East Sea, creating a perfect backdrop for unforgettable photos.
Along the way, you’ll have the chance to appreciate Vietnam’s diverse landscapes, from rugged mountain terrain to coastal beauty. The serene and tranquil surroundings make this drive an exceptional part of your trip, as the scenery transitions seamlessly between mountains and coastline.
Upon arrival in Hoi An, you’ll be ready to explore this UNESCO World Heritage site, famous for its ancient streets, vibrant lanterns, and charming atmosphere. It’s an ideal start to your exploration of this enchanting town.
Overnight in Hoi An
Includes: Private transfer, breakfast and English speaking guide
Excludes: Drinks, lunch, dinner and personal expense
Accomodation: 4* or 5* star on request
Hoian Delicacy Hotel
Address: No 116 Hùng Vương, Street, Hội An, Quảng Nam
Phone: 0386 272 471
Palm Garden Resort
Address: Lạc Long Quân, Cửa Đại, Hội An, Quảng Nam Phone: 0235 3927 927
Hoi An (125 km) from Hue

Day 12 Hoi An Countryside Vespa Adventure
7:45 AM – Your journey begins as our experienced and friendly Vespa drivers greet you at your hotel and guide you on an exciting ride through the peaceful rural landscapes surrounding Hoi An.
Your first stop is a local farm, where you’ll step into the daily lives of Vietnamese farmers. Learn how they cultivate rice, vegetables, and cereal crops, and gain a deeper appreciation for the dedication and resilience behind every harvest.
Continuing your ride deeper into the countryside, you'll explore traditional handicrafts that have stood the test of time — from rice-wine brewing and weaving to intricate woodcarving. Alongside these age-old skills, you’ll also discover modern rural industries such as bird’s nest farming and aquaculture, offering a fascinating blend of tradition and innovation.
The highlight of your tour is a visit to a local home, where you’ll be welcomed like family. Enjoy a delicious home-cooked Vietnamese meal, and engage in meaningful conversations that offer a glimpse into the lives and culture of local families.
As the tour winds down, take a moment to soak in the beauty and simplicity of the countryside, enriched by the genuine connections you’ve made — a truly unforgettable experience in the heart of Vietnam.
Overnight in Hoi An
Includes: Private transfer, breakfast, Small group vespa tour and English speaking guide
Excludes: Dinner and personal expense
Accomodation: 4* or 5* star on request
Hoian Delicacy Hotel
Address: No 116 Hùng Vương, Street, Hội An, Quảng Nam
Phone: 0386 272 471
Palm Garden Resort
Address: Lạc Long Quân, Cửa Đại, Hội An, Quảng Nam Phone: 0235 3927 927

Day 13:  Excursion to My Lai Village – A Memorial to the 1968 Tragedy
Depart for a meaningful visit to My Lai Village , the site of the tragic 1968 massacre during the Vietnam War. This somber yet important excursion offers a deeper understanding of the war’s impact on civilians.
Explore the My Lai Memorial Museum , which documents the history and aftermath of the massacre through photographs, artifacts, and personal stories. If arranged, you may also have the opportunity to interact with local villagers, gaining personal perspectives on the legacy of the past and the resilience of the community.
Stop at the Mother Thu Monument, a tribute to the strength and sacrifice of Vietnamese mothers during wartime.
After the visit, return to Hoi An in the afternoon.
Overnight in Hoi An
Includes: Private transfer, breakfast, lunch, entrance fees and English speaking guide
Excludes: Dinner and personal expense
Accomodation: 4* or 5* star on request
Hoian Delicacy Hotel
Address: No 116 Hùng Vương, Street, Hội An, Quảng Nam
Phone: 0386 272 471
Palm Garden Resort
Address: Lạc Long Quân, Cửa Đại, Hội An, Quảng Nam Phone: 0235 3927 927

Day 14 & Day 15: Leisure Days in Hoi An – Explore, Relax, and Indulge
During your leisurely days in Hoi An, enjoy the freedom to explore at your own pace. Begin by strolling through the Hoi An Ancient Town, a UNESCO World Heritage site, where every corner reveals traditional architecture, vibrant lanterns, and unique shops that capture the essence of this charming town. Be sure to visit the iconic Japanese Covered Bridge and immerse yourself in the lively atmosphere at Hoi An Market, a great place to experience the local culture.
If you're in the mood for relaxation, head to An Bang Beach, a peaceful retreat just outside the town. Spend your day unwinding by the sea, breathing in the fresh ocean air, and soaking up the sun. It's the perfect spot for a calm and refreshing day of leisure.
Hoi An is also renowned for its bespoke tailoring. Take advantage of the opportunity to visit local tailors and have custom-made suits, dresses, and accessories crafted just for you. Don’t forget to explore the town's many shops for one-of-a-kind souvenirs, including silk items, pottery, and handmade crafts that showcase the local artistry.
After a day of exploration and rest, enjoy a peaceful night in Hoi An, soaking in the tranquil ambiance and vibrant nightlife of this enchanting town.
Overnight in Hoi An
Includes: Breakfast
Excludes: Dinner, lunch and personal expense
Accomodation: 4* or 5* star on request
Hoian Delicacy Hotel
Address: No 116 Hùng Vương, Street, Hội An, Quảng Nam
Phone: 0386 272 471
Palm Garden Resort
Address: Lạc Long Quân, Cửa Đại, Hội An, Quảng Nam Phone: 0235 3927 927

Day 16:  Danang - Flight to Ho Chi Minh City.
Start your day with a morning flight from Da Nang to Ho Chi Minh City.
Upon arrival, a private transfer will take you to your hotel in the city center. After checking in, you’ll have some free time to explore the vibrant streets, admire the impressive skyscrapers, and soak in the dynamic atmosphere of this bustling metropolis.
For lunch, savor authentic V ietnamese cuisine at a local restaurant. Afterward, we will embark on a city tour, visiting iconic landmarks including the Notre-Dame Cathedral, the historic Central Post Office, and the War Remnants Museum . These sites will provide you with fascinating insights into the city's colonial past and its role in Vietnam's history.
Overnight in Ho Chi Minh
Includes: Private transfer form/to airport, flight ticket, breakfast, Small group city tour with lunch and English speaking guide
Excludes: Dinner and personal expense
Accomodation: 4* or 5* star on request
Saigon Prince Hotel or similar
Address: 63 Nguyễn Huệ, Bến Nghé, Quận 1, Thành phố Hồ Chí Minh
Phone: 028 3822 2999
New World Saigon Hotel or similar
Address: 76 Lê Lai, Phường Bến Thành, Quận 1, Thành phố Hồ Chí Minh Phone: 028 3822 8888
Ho Chi Minh City (District 1)

Day 17:  Cu Chi Tunnels Tour
8:30 AM: Our friendly guide and driver will pick you up from your hotel in Ho Chi Minh City. We will begin our journey to the famous Cu Chi Tunnels, located about 1.5 hours from the city center.
10:00 AM: Upon arrival, we will start the tour by exploring the Cu Chi Tunnels, a vast underground network that was used during the Vietnam War. Our guide will share the history and significance of the tunnels, and you will have the chance to crawl through some sections of the tunnels, experience the living conditions, and learn about the ingenious methods the Viet Cong used to survive and fight.
12:00 PM: After the tour, enjoy a traditional Vietnamese lunch at a local restaurant, where you can taste authentic dishes from the region.
1:00 PM: On the return journey to Ho Chi Minh City, you will have a chance to relax and reflect on the incredible experience.
Overnight in Ho Chi Minh
Includes: Private transfer, breakfast, lunch, entrance fees and English speaking guide
Excludes: Dinner and personal expense
Accomodation: 4* or 5* star on request
Saigon Prince Hotel or similar
Address: 63 Nguyễn Huệ, Bến Nghé, Quận 1, Thành phố Hồ Chí Minh
Phone: 028 3822 2999
New World Saigon Hotel or similar
Address: 76 Lê Lai, Phường Bến Thành, Quận 1, Thành phố Hồ Chí Minh Phone: 028 3822 8888

Day 18:  Explore Mekong Delta
8:00 AM: Our friendly guide and driver will pick you up from your hotel and we’ll begin our exciting journey to the Mekong Delta. During the drive, you’ll enjoy relaxing views of the Vietnamese countryside, passing expansive rice fields and picturesque landscapes. This scenic route provides a glimpse into the everyday life of local farmers, connected to the land they cultivate.
Upon arrival in the Mekong Delta, board a traditional boat for a peaceful ride along the Mekong River. Feel the cool breeze as you cruise along the water, surrounded by charming stilt houses on the riverbanks, which reflect the unique way of life in this water-centric region.
Along the way, you’ll visit several local villages, each with its own character. You’ll have the chance to explore local markets, interact with villagers, and learn about the vibrant culture and traditions of the Mekong Delta. This day trip offers a perfect mix of tranquility and insight, allowing you to experience a unique perspective of one of Vietnam’s most culturally rich regions.
Overnight in Ho Chi Minh
Includes: Private transfer, breakfast, lunch, entrance fees, boat and English speaking guide
Excludes: Dinner and personal expense
Accomodation: 4* or 5* star on request
Saigon Prince Hotel or similar
Address: 63 Nguyễn Huệ, Bến Nghé, Quận 1, Thành phố Hồ Chí Minh
Phone: 028 3822 2999
New World Saigon Hotel or similar
Address: 76 Lê Lai, Phường Bến Thành, Quận 1, Thành phố Hồ Chí Minh Phone: 028 3822 8888
Ben Tre, My Tho (80KM)

Day 19: Departure Day – Goodbye Ho Chi Minh City
Today marks the end of a meaningful journey. Until your flight, take time to relax and reflect on the memories made during your time in Vietnam. As we say goodbye, please know how grateful we are to have shared this experience with you. We sincerely hope that one day, you, your friends, or your family will return to this beautiful country—where a warm welcome will always await. Safe travels, and may your heart carry a piece of Vietnam wherever you go.
Includes: Private transfer to airport
Excludes: English speaking tour guide
Accomodation: N/ A
Note: Late check-out upon request.`,
    duration:    "19 Days/ 18 Nights",
    price:       4712,
    categoryIds: ["1", "7"],
    cityIds:     ["2", "3", "1", "17", "16", "13", "12", "20"],
    featuredTour: false,
    onSale:       true,
    saleDiscountPercentage: 15,
  },
  {
    id:          "32",
    title:       "Vietnam Tour for Mature Travellers 12 Days",
    imageUrl:    "https://asiaeyestravel.com/uploads/source/tours/cai-be/cai-be-mekong-delta.jpg",
    description: `This Vietnam tour for seniors 12 days by Asia Eyes Travel is designed for elderly travelers seeking a relaxing and comfortable journey through Vietnam. The itinerary includes Hanoi , Halong Bay cruise , Ninh Binh , Hue , and Hoi An Ancient Town , combining culture, nature, and leisure at a gentle pace.
Enjoy highlights such as Hoan Kiem Lake , Temple of Literature , scenic Halong Bay , peaceful Tam Coc in Ninh Binh , and the historic charm of Hue Imperial City and lantern-lit Hoi An .
This senior-friendly Vietnam itinerary by Asia Eyes Travel ensures comfort, flexibility, and meaningful experiences throughout the trip.`,
    itinerary:   `Day 1:  Arrival in Hanoi – Xin Chao!
Upon your arrival at Noi Bai International Airport, Asia Eyes Travel ’s tour guide and driver will welcome you and transfer you to your hotel. After checking in, you can relax and rest after the long flight. This is your time to recover and adjust to the new surroundings. You can either rest in the hotel or take a walk around the nearby area. This first day helps you recharge and get ready for the exciting sightseeing and experiences in the upcoming days at this fascinating destination.
Includes: Private bus/ Car and tour guide
Excludes: Meals and personal expense
Accomodation : 4* or 5* star on request
Hanoi Tirant Hotel
Address: 38 P. Gia Ngư, Hàng Bạc, Hoàn Kiếm, Hà Nội
Phone: 024 6265 5999
Apricot Hotel Hanoi
Address: 136 P. Hàng Trống, Hàng Trống, Hoàn Kiếm, Hà Nội Phone: 024 3828 9595
Note: Early check-in upon request

Day 2:   Hanoi Excursion
8:30 AM: Asia Eyes Travel’s tour guide and driver will pick you up at your hotel. Then, you will visit the Ho Chi Minh Mausoleum to explore the architectural and historical significance of Uncle Ho’s final resting place. Just next door is Ho Chi Minh’s house on stilts , and to one side of the Mausoleum is the One Pillar Pagoda , founded by King Ly Thai To in 1049. This structure has become an important symbol for the people of Hanoi. Afterward, continue on to the Buddhist Tran Quoc Pagoda at West Lake, one of the oldest pagodas in Vietnam.
After lunch, proceed to visit the Ethnology Museum (available on Sun, Tue, Thu & Sat), the Temple of Literature , and Quoc Tu Giam , Vietnam’s first university, constructed in 1070. Its gardens and well-preserved architecture will offer a relaxing glimpse into Vietnam’s past. You will then pass by Hoan Kiem Lake to see its peaceful waters and the beauty of Ngoc Son Temple. Finally, journey through Hanoi’s Old Quarter , where you’ll have the opportunity to shop and explore.
Overnight in Hanoi
Includes: Private transfer, breakfast, lunch, entrance fees and English speaking guide
Excludes: Dinner and personal expense

Day 3:   Hanoi Free Day to Explore the Old Quarter
If you have a free day in Hanoi , the Old Quarter is the perfect place to immerse yourself in the city’s charm and history. Wander through its narrow streets, each named after the goods once sold there, and discover a unique blend of French colonial architecture , ancient temples, and traditional Vietnamese houses. The lively atmosphere, with street vendors and bustling markets, makes the Old Quarter a fascinating destination.
When it comes to food, the Old Quarter is a paradise for street food lovers. Sample local dishes such as Pho Bo , Bun Cha , and Banh Cuon from street vendors and small local eateries. You will also find many shops selling unique souvenirs, including handmade crafts and traditional textiles.
In the evening, the Old Quarter comes alive with street performances, night markets, and cozy cafés. Whether you are enjoying a cup of Vietnamese coffee or shopping for souvenirs, this area offers an unforgettable cultural experience.
Overnight in Hanoi .
Includes: Accomodation: 4* or 5* star on request
Excludes: Lunch, dinner, transfer, tour guide and personal expense
Hanoi Tirant Hotel
Address: 38 P. Gia Ngư, Hàng Bạc, Hoàn Kiếm, Hà Nội
Phone: 024 6265 5999
Apricot Hotel Hanoi
Address: 136 P. Hàng Trống, Hàng Trống, Hoàn Kiếm, Hà Nội Phone: 024 3828 9595

Day 4:  Hanoi - Ninh Binh Excursion
8:30 AM: Asia Eyes Travel’s tour guide and driver will pick you up from your hotel, and we will begin our scenic journey to Ninh Binh, a stunning region often called the “Halong Bay on land.” Our first stop will be Hoa Lu, the ancient capital of Vietnam during the 10th and 11th centuries. Here, you will explore historic temples dedicated to the Dinh and Le kings, surrounded by dramatic limestone karsts that provide a breathtaking backdrop. After soaking in the rich history of Hoa Lu, we will enjoy a delicious lunch at a local restaurant.
In the afternoon, we will continue to the peaceful Trang An Complex , where you can cruise through beautiful caves and lush landscapes, offering a serene and picturesque experience.
Later in the day, we will return to the hotel, where you can check in and unwind. The remainder of the day is yours to relax and enjoy at your leisure, taking in the beauty and tranquility of Ninh Binh.
Overnight in Ninh Binh
Includes: Breakfast, small Tour group, lunch, entrance fees, English speaking tour guide
Excludes: Drinks, dinner and personal expense
Accomodation: 4* or 5* star on request
Lalita Ninh Binh Resort
Address: Thung Nham, Hoa Lư District, Ninh Bình Phone: 0229 3626 888
Emeralda Resort Ninh Binh
Address: Van Long Wetland Nature Reserve, Xã, Gia Vân, Gia Viễn, Ninh Bình Phone: 0229 3658 333
Ninh Binh (Tam Coc, Trang An)( 95KM) from Hanoi

Day 5: Overnight on Cruise in Halong Bay
8:00 AM: Our shuttle bus will pick you up from your hotel and transfer you to the breathtaking Halong Bay.
11:45 AM: Upon arrival in Halong Bay, our friendly crew will welcome you aboard. After checking in, enjoy a delicious lunch while cruising through the mesmerizing landscape of Halong Bay and the tranquil Lan Ha Bay, known for its dramatic limestone formations and crystal-clear waters.
3:30 PM: Indulge in various exciting activities on the cruise, such as kayaking through the emerald waters, swimming in serene coves, or participating in a fun cooking class where you can learn to prepare traditional Vietnamese dishes.
As the day comes to a close, don't miss the sunset party on the boat, an ideal time for photography enthusiasts to capture the stunning hues of the setting sun over the bay's karst peaks.
7:00 PM: Savor a romantic dinner on board, accompanied by beautiful views and a relaxed atmosphere. Afterward, unwind and relax under the stars, enjoying the peaceful surroundings of the bay.
Overnight on cruise.
Includes: Shuttle bus, entrance fees, breakfast, lunch and dinner
Excludes: Drinks, personal expense
Accomodation: 4* or 5* star cruise on request
Sena Cruises or similar
Address : International Habour, Tuần Châu, Hạ Long, Quảng Ninh Phone : 0974 001 062
Peony Cruise
Address: 16 P. Thi Sách, Ngô Thì Nhậm, Hai Bà Trưng, Hà Nội 100000 Phone: +84935946688
Halong Bay (190 KM) From Ninh Binh

Day 6:   Halong bay - Hanoi
Start your day at 6:30 with a peaceful Tai Chi session on the deck, accompanied by the gentle sunrise over Halong Bay. After breakfast, join more activities before the cruise makes its way back to the harbor. 12:00 Get on the transfer to return Hanoi. You’ll have time to relax or savor your last evening in the capital..
Overnight in Hanoi
Includes: Breakfast, brunch, shuttle bus
Excludes: Dinner and personal expense
Accomodation : 4* or 5* star on request
Hanoi Tirant Hotel
Address: 38 P. Gia Ngư, Hàng Bạc, Hoàn Kiếm, Hà Nội
Phone: 024 6265 5999
Apricot Hotel Hanoi
Address: 136 P. Hàng Trống, Hàng Trống, Hoàn Kiếm, Hà Nội Phone: 024 3828 9595

Day 7:   Hanoi fly to Hue City
Today, you will take a short flight to Hue, the former imperial capital of Vietnam. Upon arrival, our tour guide will pick you up and transfer you to your hotel for check-in.
Take some time to relax and explore the city at your own pace. You may choose to unwind at a riverside café, take a leisurely stroll along the Perfume River , or simply enjoy the peaceful ambiance of this historic city. In the late afternoon, consider walking through the charming streets of Hue, where remnants of the city’s royal past blend effortlessly with the vibrancy of modern life.
Overnight in Hue.
Includes: Private transfer form/to airport, breakfast, English speaking tour guide and flight ticket
Excludes: Drinks, lunch, dinner and Personal expense
Accomodation: 4* or 5* star on request
White Lotus Hotel
Address: 05-07 Hoàng Hoa Thám, Phú Nhuận, Huế, Thành phố Huế 47000
Phone: 0234 3881 888
Senna Hue Hotel
Address: 7 Nguyễn Tri Phương, Phú Hội, Huế, Thành phố Huế 53000
Phone: 0234 3858 686

Day 8:    Hue City Tour - Hoi An Ancient Town
At 8:00 AM, your exploration of Hue’s rich heritage continues as we visit the iconic Thien Mu Pagoda , gracefully perched along the Perfume River. This serene site offers stunning views and a deep connection to the spiritual history of the city. Next, we will visit the royal tombs of Khai Dinh and Tu Duc , two architectural masterpieces that reflect the grandeur and elegance of Vietnam’s imperial past. These tombs are not only historically significant but also set amidst breathtaking landscapes, offering a glimpse into the opulence of the Nguyen dynasty.
After enjoying a delicious lunch featuring local dishes, we will continue our journey with a scenic drive to Hoi An, located approximately 120 km from Hue. Upon arrival, you will check into your hotel and have free time to explore Hoi An Ancient Town. This UNESCO World Heritage site is known for its well-preserved architecture, charming streets, and vibrant atmosphere. Whether you wander through its picturesque alleys, shop for unique handicrafts, or enjoy a riverside café, Hoi An promises a truly enchanting experience. End your day with the opportunity to immerse yourself in the beauty and tranquility of this historic town.
Overnight in Hoi An
Includes: Private transfer, breakfast, lunch, English speaking tour guide and entrance fees
Excludes: Drinks, dinner and Personal expense
Accomodation: 4* or 5* star on request
Hoian Delicacy Hotel
Address: No 116 Hùng Vương, Street, Hội An, Quảng Nam 560000
Phone: 0386 272 471
Palm Garden Resort
Address: Lạc Long Quân, Cửa Đại, Hội An, Quảng Nam
Phone: (+84) 0235 3927 927

Day 9:   Explore Hoi An's Countryside Life by Jeep Car
At 8:00 AM, your adventure begins as our Jeep driver picks you up from your hotel for an exciting Hoi An countryside tour . Experience the vibrant rural life of Vietnam with a visit to a local farm, where you will learn about the cultivation of rice, vegetables, and cereal crops , and observe traditional farming techniques and daily activities of local farmers.
Continue your journey to explore traditional countryside crafts such as weaving, rice-wine making, and woodcarving , as well as modern local industries like bird’s nest farming and aquaculture , which play an important role in the regional economy.
Next, visit a local family’s home and enjoy a delicious home-cooked Vietnamese meal , offering a unique insight into the daily life and culture of a middle-class Vietnamese family.
This immersive experience provides a deeper understanding of Hoi An’s rural life , warm hospitality, and authentic traditions.
Includes: Private Jeep tour, breakfast, lunch at local home, English-speaking guide Excludes: Drinks, dinner, personal expenses

Day 10,  Day 11:   Hoi An – Leisure Days to Discover Its Charm
During these free days in Hoi An , take the time to fully immerse yourself in the beauty and charm of this enchanting town. Wander through the quaint streets lined with tailor shops , where you can have custom-made clothing crafted just for you. Relax by the river, sipping fresh coconut water as you watch the boats glide by, or find a peaceful spot at a beachside café to unwind with a good book and the soothing sound of the waves.
If you’re feeling adventurous, take a leisurely bike ride through the countryside or visit the ancient temples and lantern-lit streets that make Hoi An so unique. Don’t miss the opportunity to relax on the stunning beaches just outside town, where you can enjoy the sun and calm, clear waters.
As night falls, experience a magical moment by lighting a lantern, making a wish, and releasing it into the Thu Bon River , a beautiful tradition symbolizing peace and new beginnings.
Includes: Breakfast Excludes: Lunch and dinner

Day 12:  Hoian - Danang - Departure
Today is yours to relax and enjoy at your leisure. Take the time to explore any last-minute sights, relax by the beach, or simply unwind before your journey home. When the time comes, our driver will transfer you to the airport for your flight, whether you’re heading home or continuing your travels.
We truly hope you had a memorable experience with Asia Eyes Travel and that you’ll choose to join us again for your next adventure. It has been a pleasure to have you with us, and we look forward to welcoming you and your family back in the future. Safe travels, and thank you for letting us be a part of your journey!
Includes: Breakfast, private transfer to airport Excludes: Late check-out`,
    duration:    "12 Days/ 11 Nights",
    price:       1321,
    categoryIds: ["1", "2"],
    cityIds:     ["7", "3", "1", "13", "12"],
    featuredTour: false,
    onSale:       false,
    saleDiscountPercentage: null,
  },
  {
    id:          "33",
    title:       "Vietnam Family Tour 16 Days from North to South",
    imageUrl:    "https://asiaeyestravel.com/uploads/source/tours/family-trip-to-vietnam.jpg",
    description: `Experience the ultimate Vietnam Family Tour with a 16-day journey from Hanoi to Ho Chi Minh City. Explore the vibrant streets of Hanoi, the stunning mountains of Sapa, and the scenic landscapes of Ninh Binh. Cruise through Halong Bay , discover the historic charm of Hue and Hoi An, relax on Danang’s beaches, and visit the Cu Chi Tunnels and Mekong Delta. Perfect for families seeking culture, adventure, and relaxation, this fully guided tour offers unforgettable experiences, comfortable accommodations, and personalized service across Vietnam’s most iconic destinations.`,
    itinerary:   `Day 1:  Welcome to Hanoi capital
Upon your arrival at Noi Bai Airport, Asia Eyes Travel’s tour guide and driver will pick you up and transfer you to the hotel. Today you are free to relax after a long flight.
Overnight in Hanoi.
Includes: Private bus/ Car and tour guide
Excludes: Meals and personal expense
Accomodation : 4* or 5* star on request
Hanoi Tirant Hotel
Address: 38 P. Gia Ngư, Hàng Bạc, Hoàn Kiếm, Hà Nội
Phone: 024 6265 5999
Apricot Hotel Hanoi
Address: 136 P. Hàng Trống, Hàng Trống, Hoàn Kiếm, Hà Nội Phone: 024 3828 9595
Note: Early check-in upon request

Day 2:  Explore Hanoi’s Soul on a Scooter Tour
8:00 AM: Our female drivers and tour guide will pick you up at your hotel to start
a Hanoi Scooter Tours to visit Hanoi city. Firstly, you will go to a very famous coffee shop to enjoy Egg coffee that is founded in Hanoi, passed down through generations, is Café Giang (Giang Café). Next, our drivers will take you to the Hanoi Opera House built in 1911 to take some photos together as a little memory of Hanoi.
After that we take you to local markets to see people selling everyday essentials.
Joining to Paloma Motorbike Tour, we will take you around the small alleys to visit the old houses and daily life of urban people that are very little known by tourists when visiting Hanoi.
Apart from the small alleys, we will take you through the most highlight places such as: Train Street , Ho Chi Minh Mausoleum , Huu Tiep Lake (B52) where vestiges of war are left here.
A must-see place is the historic Long Bien bridge designed by Daydé & Pillé company (French company), the same one that also built the Eiffel tower in Paris. The bridge has witnessed two fierce resistance wars of the Vietnamese people. They are the war against the US and the French. Let take some more photos here for your memory. Tour ends at your hotel.
Notes:
Please keep in mind that we do not go inside the Ho Chi Minh Mausoleum on “Hanoi City sights and street food” tour. This attraction requires a lot of time to fully appreciate so we recommend that you visit them on your own so that we can make the most of time you have with us.
The above itinerary is subject to change, based on the day’s weather and traffic conditions.
Overnight in Hanoi.
Includes: Small group scoother tour, breakfast, lunch and entrance fees
Excludes: Dinner and personal expense
Accomodation : 4* or 5* star on request
Hanoi Tirant Hotel
Address: 38 P. Gia Ngư, Hàng Bạc, Hoàn Kiếm, Hà Nội
Phone: 024 6265 5999
Apricot Hotel Hanoi
Address: 136 P. Hàng Trống, Hàng Trống, Hoàn Kiếm, Hà Nội Phone: 024 3828 9595

Day 3:  Ninh Binh’s Natural Beauty and Overnight train to Sapa
8:00: Our guide and driver will meet you at the hotel and transfer you to Ninh Binh.
10:00: Arriving Glimmering Bai Dinh pagoda complexes, the largest pagoda, not only in Vietnam but also in Southeast of Asia. Scenically set on the foot hill of Dinh Mountain surrounded by amazing views of the exquisite river valley below and dotted and the limestone karsts dotted around which will take your breath away.
12:00: Enjoying the lunch at local restaurant with the great local cuisines.
13:30: Leaving for the Trang An Grottoes, an out-standing natural beauty of majestic limestone massif at 20 square kilometer rise dramatically out from rice paddy fields. Deep into the linked chains of towering mountain are pristine places of mystical valleys, numerous fresh water ponds, and jungle.
19:30: Arrive in Hanoi.
20:30: We transfer you to the Hanoi train station for night train to Sapa ( The train departs at 21:30 ).
Overnight on train.
Includes: Private transfer to train station, train tickets, Small group day tour, breakfast, lunch and tour guide
Excludes: Dinner and personal expense
Accomodation : King Sapa Train
Ninh Binh (95 km) form Hanoi

Day 4:  Sapa’s Enchanting Scenery
Upon arrival at Lao Cai train station, our driver will pick up and transfer you to the hotel in Sapa. Take a rest and having breakfast. Today at 9:00, our tour guide comes to pick you up. Then we will trek through the breathtaking Muong Hoa Valley , where the terraced landscapes seem to touch the sky. Begin with a visit to Y Linh Ho Village , home to the Black H’mong people , and make your way to Lao Chai and Ta Van Villages , where endless rice paddies surround you, offering stunning photo opportunities. Along the way, interact with locals, learn about their daily lives, and enjoy the serene atmosphere. In the afternoon, visit Ta Phin Village , inhabited by the Red Dao ethnic group , where you can explore their fascinating culture, colorful traditional attire, and unique herbal remedies.
Overnight in Sapa.
Includes: Private transfer, tour guide, breakfast, lunch and entrance fees
Excludes: Dinner and personal expense
Accomodation : 4* or 5* star on request
Hotel De La Coupole
Address: 1, Hoang Lien Street Sapa District, Lao Cai
Phone: 0214 3629 999
Bamboo Sapa Hotel
Address: 18 Mường Hoa, TT. Sa Pa, Sa Pa, Lào Cai Phone: 0214 3871 076
Sapa Town

Day 5:  Explore Cat Cat Waterfall
After a delightful breakfast, our knowledgeable tour guide will take you on a scenic 3-kilometer trek to Cat Cat Village, renowned for its stunning Cat Cat Waterfall . This enchanting village, surrounded by lush greenery and traditional wooden houses, is one of the best places in Sapa for capturing unforgettable photos. From the waterfall's cascading waters to the rustic beauty of the village, you’ll have ample opportunities to snap some incredible shots. Plus, you’ll find unique local handicrafts and souvenirs that make perfect keepsakes to share with family and friends.
In the afternoon, take some time to explore the vibrant local market in Sapa , where you can purchase fresh produce, colorful textiles, and traditional crafts. The market is a wonderful place to experience the lively atmosphere of the town and interact with the indigenous people. If the weather is clear, don’t miss the chance to take a cable car up to Fansipan Mountain, the highest peak in Indochina. From the summit, you’ll be treated to breathtaking panoramic views, making it another prime spot for photography.
After a day full of adventure and exploration, enjoy a peaceful evening and overnight stay in Sapa, reflecting on the beauty and culture of this incredible region.
Overnight in Sapa.
Includes: Private transfer, tour guide, breakfast and entrance fees
Excludes: Lunch, dinner and personal expense
Accomodation : 4* or 5* star on request
Hotel De La Coupole
Address: 1, Hoang Lien Street Sapa District, Lao Cai
Phone: 0214 3629 999
Bamboo Sapa Hotel
Address: 18 Mường Hoa, TT. Sa Pa, Sa Pa, Lào Cai Phone: 0214 3871 076

Day 6:  Return to Hanoi’s Warm Embrace by Bus
After a serene morning in Sapa, it’s time to say farewell to the majestic mountains. You’ll embark on a scenic bus ride back to Hanoi, where the evening is yours to unwind and explore at your leisure. Stroll through the vibrant streets of the Old Quarter, where the energy of the city blends with its historical charm.
Overnight in Hanoi.
Includes: Shuttle bus and breakfast
Excludes: Lunch, dinner, tour guide and personal expense
Accomodation : 4* or 5* star on request
Hanoi Tirant Hotel
Address: 38 P. Gia Ngư, Hàng Bạc, Hoàn Kiếm, Hà Nội
Phone: 024 6265 5999
Apricot Hotel Hanoi
Address: 136 P. Hàng Trống, Hàng Trống, Hoàn Kiếm, Hà Nội Phone: 024 3828 9595

Day 7:  Journey from Hanoi to Halong Bay – Stay Overnight on a Luxury Cruise
8:00 AM: Our shuttle bus will pick you up from your hotel and transfer you to the breathtaking Halong Bay.
11:45 AM: Upon arrival in Halong Bay, our friendly crew will welcome you aboard. After checking in, enjoy a delicious lunch while cruising through the mesmerizing landscape of Halong Bay and the tranquil Lan Ha Bay, known for its dramatic limestone formations and crystal-clear waters.
3:30 PM: Indulge in various exciting activities on the cruise, such as kayaking through the emerald waters, swimming in serene coves, or participating in a fun cooking class where you can learn to prepare traditional Vietnamese dishes.
As the day comes to a close, don't miss the sunset party on the boat, an ideal time for photography enthusiasts to capture the stunning hues of the setting sun over the bay's karst peaks.
7:00 PM: Savor a romantic dinner on board, accompanied by beautiful views and a relaxed atmosphere. Afterward, unwind and relax under the stars, enjoying the peaceful surroundings of the bay.
Overnight on cruise.
Includes: Shuttle bus, entrance fees, breakfast, lunch and dinner
Excludes: Drinks, personal expense
Accomodation: 4* or 5* star cruise on request
Sena Cruises or similar
Address : International Habour, Tuần Châu, Hạ Long, Quảng Ninh Phone : 0974 001 062
Peony Cruise
Address: 16 P. Thi Sách, Ngô Thì Nhậm, Hai Bà Trưng, Hà Nội 100000 Phone: +84935946688
Halong Bay (170 KM) From Hanoi

Day 8:  Halong Bay - Hanoi - Fly to Hue
Start your day at 6:30 with a peaceful Tai Chi session on the deck, accompanied by the gentle sunrise over Halong Bay. After breakfast, join more activities before the cruise makes its way back to the harbor.
12:00 Transfer to Hanoi. From there, you will continue directly to Noi Bai International Airport to catch your flight to Hue.
Upon arrival at Phu Bai Airport, our friendly tour guide and driver will greet you and transfer you to the charming city of Hue.
After checking in at your hotel, you are free to explore Hue at your own pace.
Overnight in Hue
Includes: Breakfast, lunch, private transfer form/to airport, shuttle bus, flight tickets and English speaking tour guide
Excludes: Drinks, dinner and personal expense
Accomodation: 4* or 5* star on request
White Lotus Hue Hotel
Address: 05-07 Hoang Hoa Tham, Phu Nhuan, Hue
Phone: 0234 3881 888
Silk Path Grand Hue Hotel
Address: 2 Le Loi, Vinh Ninh, Hue Phone: 0234 3975 555
Hue City

Day 9:  Discover Hue’s Timeless Beauty
8:00 Hue’s treasures continue to unfold today as you visit the iconic Thien Mu Pagoda , perched along the Perfume River , and the ornate royal tombs of Khai Dinh and Tu Duc . These architectural marvels reflect the city’s regal past and serene beauty. End your day with a delightful local dish, Bun Bo Hue , a spicy and flavorful noodle soup that’s a local specialty.
Overnight in Hue
Includes: Breakfast, lunch, entrance fees and English speaking tour guide
Excludes: Drinks, dinner and personal expense
Accomodation: 4* or 5* star on request
White Lotus Hue Hotel
Address: 05-07 Hoang Hoa Tham, Phu Nhuan, Hue
Phone: 0234 3881 888
Silk Path Grand Hue Hotel
Address: 2 Le Loi, Vinh Ninh, Hue Phone: 0234 3975 555

Day 10:  Hue to My Son and Hoi An
8:00 After breakfast, you’ll head toward Hoi An , but not before making a scenic stop at Hai Van Pass , one of Vietnam’s most stunning and famous mountain roads. As you ascend the pass, take in the breathtaking views of the coastline, lush mountains, and the winding road that stretches along the cliffs. This is the perfect spot for a photo opportunity to capture the beauty of Vietnam’s landscape. Continue your journey to My Son , the ancient Cham civilization site, where you’ll explore the impressive Hindu temples and towers dating back to the 4th century. The peaceful jungle surroundings only add to the mystique of this UNESCO World Heritage site. After your visit, drive onward to Hoi An, a town that feels like stepping back in time.
Overnight in Hoi An.
Includes: Private transfer, breakfast, lunch, entrance fees and English speaking guide
Excludes: Dinner and personal expense
Accomodation: 4* or 5* star on request
Hoian Delicacy Hotel
Address: No 116 Hùng Vương, Street, Hội An, Quảng Nam
Phone: 0386 272 471
Palm Garden Resort
Address: Lạc Long Quân, Cửa Đại, Hội An, Quảng Nam Phone: 0235 3927 927
Hoi An (125 km) from Hue

Day 11:  Explore Life in the Hoi An countryside by Vespa tour
8:00 AM: Our Vespa Drivers will pick you up at your hotel and begin your Hoi An Countryside Vespa . Visit a local farm, learn about rice, vegetable, and cereal crop cultivation, and experience the daily life of local farmers. Discover traditional occupations in the countryside, such as weaving, rice-wine making, and woodcarving. Learn about newer industries like bird’s nest farming and aquaculture. Head to a local family’s home for a delicious home-cooked meal, providing you with a unique insight into the lives of middle-class Vietnamese people. Reflect on your experiences and the new friendships formed during your day in the countryside. Note: If you do not like to take the Vespa tour, we can change to Jeep car.
Overnight in Hoi An.
Includes: Breakfast, lunch and Small group vespa tour
Excludes: Dinner and personal expense
Accomodation: 4* or 5* star on request
Hoian Delicacy Hotel
Address: No 116 Hùng Vương, Street, Hội An, Quảng Nam
Phone: 0386 272 471
Palm Garden Resort
Address: Lạc Long Quân, Cửa Đại, Hội An, Quảng Nam Phone: 0235 3927 927

Day 12:  A free day to explore Hoi An
This final full day is yours to savor every bit of Hoi An’s charm. Stroll through tailor shops for custom-made clothing, sip fresh coconut water by the river, or simply unwind with a book at a beachside café. As night falls, light a lantern, make a wish, and release it into the Thu Bon River —a magical way to end your journey.
Overnight in Hoi An.
Includes: Breakfast
Excludes: Lunch, dinner and personal expense
Accomodation: 4* or 5* star on request
Hoian Delicacy Hotel
Address: No 116 Hùng Vương, Street, Hội An, Quảng Nam
Phone: 0386 272 471
Palm Garden Resort
Address: Lạc Long Quân, Cửa Đại, Hội An, Quảng Nam Phone: 0235 3927 927

Day 13: Hoi An – Danang – Flight to Ho Chi Minh City
Today take a short, early morning flight to Ho Chi Minh City. Formerly known as Saigon, Ho Chi Minh City has a fascinating history and is arguably Vietnam’s capital of commerce and culture. After landing, take a sightseeing tour around the city. You will visit the Reunification Palace, Notre Dame Cathedral and the Opera House , then stop in at the War Remnants Museum to discover some of the sobering stories of the 20-year-long Vietnam/American War.
Overnight in Ho Chi Minh.
Includes: Private transfer form/to airport, flight ticket, breakfast, Small group city tour with lunch, English speaking guide
Excludes: Drinks, dinner and personal expense
Accomodation: 4* or 5* star on request
Saigon Prince Hotel or similar
Address: 63 Nguyễn Huệ, Bến Nghé, Quận 1, Thành phố Hồ Chí Minh
Phone: 028 3822 2999
New World Saigon Hotel or similar
Address: 76 Lê Lai, Phường Bến Thành, Quận 1, Thành phố Hồ Chí Minh Phone: 028 3822 8888
Ho Chi Minh City (District 1)

Day 14:  Ho Chi Minh City Tour and Cu Chi Tunnels
08:00 AM: You will be picked up at your hotel in Ho Chi Minh City to begin a city tour. Visit some of the city’s most iconic landmarks such as the War Remnants Museum, Reunification Palace (outside visit), Notre Dame Cathedral (outside visit), and the Central Post Office. This tour offers an insightful introduction to the city’s history, culture, and architecture.
After the city tour, enjoy lunch at a local restaurant.
Early afternoon: Continue your journey to Cu Chi District, located about 70 km northwest of the city.
Upon arrival at the Cu Chi Tunnels, watch a short documentary about the tunnel system and learn how it was constructed and used during the Vietnam War. Explore parts of the tunnels, including underground living areas, kitchens, and secret entrances. You may also choose to crawl through a short section of the tunnels (optional). Traditional wartime food such as boiled cassava with tea will be served.
Late afternoon: Transfer back to Ho Chi Minh City.
Evening: Arrive at your hotel and relax. Overnight in Ho Chi Minh City.
Includes: Breakfast, Small group city tour with lunch and English speaking guide
Excludes: Drinks, dinner and personal expense
Accomodation: 4* or 5* star on request
Saigon Prince Hotel or similar
Address: 63 Nguyễn Huệ, Bến Nghé, Quận 1, Thành phố Hồ Chí Minh
Phone: 028 3822 2999
New World Saigon Hotel or similar
Address: 76 Lê Lai, Phường Bến Thành, Quận 1, Thành phố Hồ Chí Minh Phone: 028 3822 8888

Day 15: Mekong Delta Excursion
8:00 AM: You will be picked up at your hotel in the morning, and we will bring you down to the Mekong Delta . On the way you will get a chance to view the beautiful scenery as we go past the stunning rice fields.
Upon arrival at Ben Tre , take a relaxing boat trip on the Mekong River to enjoy the fresh air and the charming stilt house at the river bank. Then, visit the authentic life of the locals and challenge yourself to bargaining at cottage handicraft shops. Take an adventurous sampan ride in palm shaded canals.
Arriving at one of the villages, the locals will serve you with fresh honey tea and tropical fruits whilst they will perform their traditional folk music. Experience the rural lifestyle as we pay a visit to a local family business, where they produce coconut candy…
Overnight in Ho Chi Minh.
Includes: Small Tour Group to Mekong Delta, English speaking guide, lunch, entrance fees, boat
Excludes: Drinks, dinner and personal expense
Accomodation : 4* or 5* star on request
Saigon Prince Hotel or similar
Address: 63 Nguyễn Huệ, Bến Nghé, Quận 1, Thành phố Hồ Chí Minh
Phone: 028 3822 2999
New World Saigon Hotel or similar
Address: 76 Lê Lai, Phường Bến Thành, Quận 1, Thành phố Hồ Chí Minh
Phone: 028 3822 8888

Day 16:  Departure from Ho Chi Minh City
Today is yours to unwind and enjoy at your own pace until it's time for your transfer to Tan Son Nhat International Airport for your departure flight.
On behalf of Asia Eyes Travel, I am Thuc Nguyen . We sincerely appreciate your trust in us and look forward to creating more unforgettable travel experiences with you on your next trip.
Includes: Private transfer to airport
Excludes: English speaking tour guide
Accomodation: N/ A
Note: Late check-out upon request.`,
    duration:    "16 Days/15 Nights",
    price:       1177,
    categoryIds: ["6"],
    cityIds:     ["2", "3", "4", "1", "14", "13", "12", "27", "21", "20"],
    featuredTour: false,
    onSale:       true,
    saleDiscountPercentage: 15,
  },
  {
    id:          "34",
    title:       "Vietnam Tour Deals 16 Days from North to Central",
    imageUrl:    "https://asiaeyestravel.com/uploads/source/tours/small-photo/halong/peony-cruises/peony-cruises-halong.jpg",
    description: `Vietnam Tour Deals 16 Days from North to Central starts from Hanoi and ends the central of Vietnam, you will explore and experience a Vietnam Package Tour with the culture, history, UNESCO World Heritage Site. Explore and experience the Hanoi Street food, overnight on luxury cruises in Halong Bay or Lan Ha Bay then visiting Ninh Binh is stunning with Trang An complex - A natural & cultural heritage, Sapa with magnificent mountainous views and opportunities to meet with hill tribes in the northern Vietnam. Then you will travel to Vietnam central: Visiting Hue Imperial City, Hoi An Ancient town - UNESCO World Heritage centre with a magical lantern-lit town for all tourist alike and explore and experience Hoian Countryside with Vespa Tours or Jeep car...
Notes:
If this tour itinerary is NOT suitable for your travel plan or any changes at any destination…. we will recreate the new tour program for your travel wishes.`,
    itinerary:   `Day 1:  Welcome to Hanoi capital
Upon your arrival at Noi Bai Airport , Asia Eyes Travel’ s tour guide and driver will pick you up and transfer you to the hotel. Today, you have free time until 5:00 PM. After that, you will enjoy a 1.5-hour cyclo tour to explore Hanoi’s Old Quarter . Then, you will take a l eisurely walk through the bustling streets , discovering the charm of narrow alleys , traditional shops , and the unique cultural atmosphere of the capital. This is a great opportunity to experience the vibrant local life, admire ancient architecture, and indulge in delicious street food . At the end of the tour, you will return to the hotel to relax and prepare for the next exciting activities.
Upon your arrival at Noi Bai Airport, Asia Eyes Travel’s tour guide and driver will pick you up and transfer you to the hotel. Today you are free to relax after a long flight.
Overnight in Hanoi.
Includes: Private bus/ Car and tour guide
Excludes: Meals and personal expense
Accomodation : 4* or 5* star on request
Hanoi Tirant Hotel
Address: 38 P. Gia Ngư, Hàng Bạc, Hoàn Kiếm, Hà Nội
Phone: 024 6265 5999
Apricot Hotel Hanoi
Address: 136 P. Hàng Trống, Hàng Trống, Hoàn Kiếm, Hà Nội Phone: 024 3828 9595
Note: Early check-in upon request

Day 2:  Explore Hanoi’s Soul on a Scooter Tour
In the morning 8:00: Our female drivers will pick you up and start a Hanoi Scooter Tour to visit Hanoi city. Firstly, you will go to a very famous coffee shop to enjoy Egg coffee that is founded in Hanoi, passed down through generations, is Café Giang (Giang Café). Next, our drivers will take you to the Hanoi Opera House built in 1911 to take some photos together as a little memory of Hanoi. After that we take you to local markets to see people selling everyday essentials. Joining to Paloma Motorbike Tour , we will take you around the small alleys to visit the old houses and daily life of urban people that are very little known by tourists when visiting Hanoi. Apart from the small alleys, we will take you through the most highlight places such as: Train Street, Ho Chi Minh Mausoleum, Huu Tiep Lake (B52) where vestiges of war are left here. A must-see place is the historic Long Bien bridge designed by Daydé & Pillé company (French company), the same one that also built the Effel tower in Paris. The bridge has witnessed two fierce resistance wars of the Vietnamese people. They are the war against the US and the French. Let take some more photos here for your memory. Notes:
Please keep in mind that we do not go inside the Ho Chi Minh Mausoleum on “Hanoi City sights and street food”tour. This attraction requires a lot of time to fully appreciate so we recommend that you visit them on your own so that we can make the most of time you have with us.
The above itinerary is subject to change, based on the day’s weather and traffic conditions.
Overnight in Hanoi.
Includes: Tour guide, breakfast, lunch and Small group scooter tour
Excludes: Drinks, dinner and personal expense
Accomodation : 4* or 5* star on request
Hanoi Tirant Hotel
Address: 38 P. Gia Ngư, Hàng Bạc, Hoàn Kiếm, Hà Nội
Phone: 024 6265 5999
Apricot Hotel Hanoi
Address: 136 P. Hàng Trống, Hàng Trống, Hoàn Kiếm, Hà Nội Phone: 024 3828 9595

Day 3:  Your free day
Today, the city is yours to explore at your own pace. Wander through Hanoi’s historical landmarks, sip egg coffee in a century-old café, or lose yourself in the bustle of Dong Xuan Market . For art lovers, a visit to the Fine Arts Museum will delight. The day ends with a relaxing stroll along the mosaic-tiled walls of the Hanoi Ceramic Road .
Overnight in Hanoi.
Includes: Breakfast
Excludes: Dinner, lunch and personal expense
Accomodation : 4* or 5* star on request
Hanoi Tirant Hotel
Address: 38 P. Gia Ngư, Hàng Bạc, Hoàn Kiếm, Hà Nội
Phone: 024 6265 5999
Apricot Hotel Hanoi
Address: 136 P. Hàng Trống, Hàng Trống, Hoàn Kiếm, Hà Nội Phone: 024 3828 9595

Day 4:  Ninh Binh’s Natural Beauty and Overnight train to Sapa
Today 8:00 we will take you to visit Ninh Binh , a region often called the “Halong Bay on land.” Begin your journey with a visit to Hoa Lu , the ancient capital of Vietnam in the 10th and 11th centuries. Explore the historic temples dedicated to the Dinh and Le kings, surrounded by dramatic limestone karsts. After soaking in the history of Hoa Lu, continue to the serene waters of Trang An Complex , where you’ll embark on a sampan boat ride through emerald waterways, passing under caves and surrounded by lush rice fields. For panoramic views, climb to the top of Mua Cave , where breathtaking vistas of the countryside await. As the day winds down, return to Hanoi for dinner and board the overnight train to Sapa (train leaves at 21:00).
Overnight on train
Includes: Breakfast, lunch, private transfer, boat, English speaking guide, train tickets
Excludes: Dinner and personal expense
Accomodation : King Sapa Train

Day 5: Sapa’s Enchanting Scenery
Upon arrival at Lao Cai train station, our driver will pick up and transfer you to the hotel in Sapa. Take a rest and having breakfast. Today at 9:00, our tour guide comes to pick you up. Then we will trek through the breathtaking Muong Hoa Valley , where the terraced landscapes seem to touch the sky. Begin with a visit to Y Linh Ho Village , home to the Black H’mong people , and make your way to Lao Chai and Ta Van Villages , where endless rice paddies surround you, offering stunning photo opportunities. Along the way, interact with locals, learn about their daily lives, and enjoy the serene atmosphere. In the afternoon, visit Ta Phin Village , inhabited by the Red Dao ethnic group , where you can explore their fascinating culture, colorful traditional attire, and unique herbal remedies.
Overnight in Sapa.
Includes: Private transfer, English speaking tour guide, breakfast and lunch
Excludes: Drinks, dinner and personal expense
Accomodation : 4* or 5* star on request
Bamboo Sapa Hotel
Address: 18 Mường Hoa, TT. Sa Pa, Sa Pa, Lào Cai
Phone: 0214 3871 076
Hotel de la Coupole
Address: 1, Hoang Lien Street Sapa District, Lao Cai Province Phone: 0214 3629 999
Sapa Town

Day 6:   Cat Cat Waterfall
After a delightful breakfast, our knowledgeable tour guide will take you on a scenic 3-kilometer trek to Cat Cat Village, renowned for its stunning Cat Cat Waterfall . This enchanting village, surrounded by lush greenery and traditional wooden houses, is one of the best places in Sapa for capturing unforgettable photos. From the waterfall's cascading waters to the rustic beauty of the village, you’ll have ample opportunities to snap some incredible shots. Plus, you’ll find unique local handicrafts and souvenirs that make perfect keepsakes to share with family and friends.
In the afternoon, take some time to explore the vibrant local market in Sapa , where you can purchase fresh produce, colorful textiles, and traditional crafts. The market is a wonderful place to experience the lively atmosphere of the town and interact with the indigenous people. If the weather is clear, don’t miss the chance to take a cable car up to Fansipan Mountain, the highest peak in Indochina. From the summit, you’ll be treated to breathtaking panoramic views, making it another prime spot for photography.
After a day full of adventure and exploration, enjoy a peaceful evening and overnight stay in Sapa, reflecting on the beauty and culture of this incredible region.
Overnight in Sapa.
Includes: Private transfer, English speaking tour guide, breakfast
Excludes: Dinner, lunch and personal expense
Accomodation : 4* or 5* star on request
Bamboo Sapa Hotel
Address: 18 Mường Hoa, TT. Sa Pa, Sa Pa, Lào Cai
Phone: 0214 3871 076
Hotel de la Coupole
Address: 1, Hoang Lien Street Sapa District, Lao Cai Province Phone: 0214 3629 999

Day 7:  Return to Hanoi’s Warm Embrace by Bus
After a serene morning in Sapa, it’s time to say farewell to the majestic mountains. You’ll embark on a scenic bus ride back to Hanoi, where the evening is yours to unwind and explore at your leisure. Stroll through the vibrant streets of the Old Quarter, where the energy of the city blends with its historical charm.
Overnight in Hanoi
Includes: Shuttle bus, tour guide and breakfast
Excludes: Lunch, dinner and personal expense
Accomodation : 4* or 5* star on request
Hanoi Tirant Hotel
Address: 38 P. Gia Ngư, Hàng Bạc, Hoàn Kiếm, Hà Nội
Phone: 024 6265 5999
Apricot Hotel Hanoi
Address: 136 P. Hàng Trống, Hàng Trống, Hoàn Kiếm, Hà Nội Phone: 024 3828 9595

Day 8:  Hanoi to Halong Bay – Overnight on a Luxury Cruise
8:00 AM: Our shuttle bus will pick you up from your hotel and transfer you to the breathtaking Halong Bay.
11:45 AM: Upon arrival in Halong Bay, our friendly crew will welcome you aboard. After checking in, enjoy a delicious lunch while cruising through the mesmerizing landscape of Halong Bay and the tranquil Lan Ha Bay, known for its dramatic limestone formations and crystal-clear waters.
3:30 PM: Indulge in various exciting activities on the cruise, such as kayaking through the emerald waters, swimming in serene coves, or participating in a fun cooking class where you can learn to prepare traditional Vietnamese dishes.
As the day comes to a close, don't miss the sunset party on the boat, an ideal time for photography enthusiasts to capture the stunning hues of the setting sun over the bay's karst peaks.
7:00 PM: Savor a romantic dinner on board, accompanied by beautiful views and a relaxed atmosphere. Afterward, unwind and relax under the stars, enjoying the peaceful surroundings of the bay.
Overnight on cruise.
Includes: Shuttle bus, breakfast, lunch and dinner
Excludes: Drinks, personal expense
Accomodation: 4* or 5* star cruise on request
Sena Cruises or similar
Address : International Habour, Tuần Châu, Hạ Long, Quảng Ninh Phone : 0974 001 062
Peony Cruise
Address: 16 P. Thi Sách, Ngô Thì Nhậm, Hai Bà Trưng, Hà Nội 100000 Phone: +84935946688
Halong Bay (174 KM) From Hanoi

Day 9: Morning Serenity and Return to Hanoi
Start your day at 6:30 with a peaceful Tai Chi session on the deck, accompanied by the gentle sunrise over Halong Bay. After breakfast, join more activities before the cruise makes its way back to the harbor. 12:00 Get on the transfer to return Hanoi. You’ll have time to relax or savor your last evening in the capital..
Overnight in Hanoi
Includes: Shuttle bus, breakfast and lunch
Excludes: Dinner and personal expense
Accomodation : 4* or 5* star on request
Hanoi Tirant Hotel
Address: 38 P. Gia Ngư, Hàng Bạc, Hoàn Kiếm, Hà Nội
Phone: 024 6265 5999
Apricot Hotel Hanoi
Address: 136 P. Hàng Trống, Hàng Trống, Hoàn Kiếm, Hà Nội Phone: 024 3828 9595

Day 10:  Hanoi - Fly Onward to Hue, the Ancient Imperial City
Today, you will take a short flight to Hue city , the former imperial capital of Vietnam . After arriving and checking into your hotel, take some time to relax and explore at your own pace. You might choose to unwind in a riverside café, stroll along the Perfume Rive r, or simply enjoy the peaceful atmosphere of this historic city.
In the late afternoon, consider a walk through the charming streets of Hue , where traces of the city’s royal past blend seamlessly with modern life. As evening sets in, enjoy dinner at a local restaurant and prepare for the historical wonders to come.
Overnight in Hue
Includes: Breakfast, private transfer form/to airport, flight tickets and English speaking tour guide
Excludes: Dinner, lunch and personal expense
Accomodation: 4* or 5* star on request
White Lotus Hue Hotel
Address: 05-07 Hoang Hoa Tham, Phu Nhuan, Hue
Phone: 0234 3881 888
Silk Path Grand Hue Hotel
Address: 2 Le Loi, Vinh Ninh, Hue Phone: 0234 3975 555
Hue City

Day 11: Discover Hue’s Timeless Beauty
8:00 Hue’s treasures continue to unfold today as you visit the iconic Thien Mu Pagoda , perched along the Perfume River , and the ornate royal tombs of Khai Dinh and Tu Duc . These architectural marvels reflect the city’s regal past and serene beauty. End your day with a delightful local dish, Bun Bo Hue , a spicy and flavorful noodle soup that’s a local specialty.
Overnight in Hue
Includes: Breakfast, lunch, private transfer, entrance fees and English speaking tour guide
Excludes: Dinner and personal expense
Accomodation: 4* or 5* star on request
White Lotus Hue Hotel
Address: 05-07 Hoang Hoa Tham, Phu Nhuan, Hue
Phone: 0234 3881 888
Silk Path Grand Hue Hotel
Address: 2 Le Loi, Vinh Ninh, Hue Phone: 0234 3975 555

Day 12:  A Day to relax in Hue
Take a full this day to relax or explore Hue at your own pace: Rent a bicycle to explore the lush countryside, relax in a riverside café, or visit a nearby village to experience local life. For a quiet afternoon, enjoy a traditional spa treatment to rejuvenate your senses.
Overnight in Hue
Includes: Breakfast
Excludes: Dinner, lunch, transfer, tour guide and personal expense
Accomodation: 4* or 5* star on request
White Lotus Hue Hotel
Address: 05-07 Hoang Hoa Tham, Phu Nhuan, Hue
Phone: 0234 3881 888
Silk Path Grand Hue Hotel
Address: 2 Le Loi, Vinh Ninh, Hue Phone: 0234 3975 555

Day 13: Hue - My son Sanctuary -  Hoian
8:00 After breakfast, you’ll head toward Hoi An , but not before making a scenic stop at Hai Van Pass , one of Vietnam’s most stunning and famous mountain roads. As you ascend the pass, take in the breathtaking views of the coastline, lush mountains, and the winding road that stretches along the cliffs. This is the perfect spot for a photo opportunity to capture the beauty of Vietnam’s landscape. Continue your journey to My Son , the ancient Cham civilization site, where you’ll explore the impressive Hindu temples and towers dating back to the 4th century. The peaceful jungle surroundings only add to the mystique of this UNESCO World Heritage site. After your visit, drive onward to Hoi An, a town that feels like stepping back in time.
Overnight in Hoi An.
Includes: Private transfer, breakfast, lunch, entrance fees and English speaking guide
Excludes: Dinner and personal expense
Accomodation: 4* or 5* star on request
Hoian Delicacy Hotel
Address: No 116 Hùng Vương, Street, Hội An, Quảng Nam
Phone: 0386 272 471
Palm Garden Resort
Address: Lạc Long Quân, Cửa Đại, Hội An, Quảng Nam Phone: 0235 3927 927
Hoi An (125 km) from Hue

Day 14:  Explore Life in the Hoi An Countryside by Vespa Tour
8:00 AM: Our Vespa Drivers will pick you up at your hotel and begin your Hoi An Countryside Vespa . Visit a local farm, learn about rice, vegetable, and cereal crop cultivation, and experience the daily life of local farmers. Discover traditional occupations in the countryside, such as weaving, rice-wine making, and woodcarving. Learn about newer industries like bird’s nest farming and aquaculture. Head to a local family’s home for a delicious home-cooked meal, providing you with a unique insight into the lives of middle-class Vietnamese people. Reflect on your experiences and the new friendships formed during your day in the countryside. Note: If you do not like to take the Vespa tour, we can change to Jeep car.
Overnight in Hoi An.
Includes: Small group vespa tour, breakfast, lunch and English speaking guide
Excludes: Dinner and personal expense
Accomodation: 4* or 5* star on request
Hoian Delicacy Hotel
Address: No 116 Hùng Vương, Street, Hội An, Quảng Nam
Phone: 0386 272 471
Palm Garden Resort
Address: Lạc Long Quân, Cửa Đại, Hội An, Quảng Nam Phone: 0235 3927 927

Day 15:  A Day to Savor Hoi An
This final full day is yours to savor every bit of Hoi An’s charm. Stroll through tailor shops for custom-made clothing, sip fresh coconut water by the river, or simply unwind with a book at a beachside café. As night falls, light a lantern, make a wish, and release it into the Thu Bon River —a magical way to end your journey.
Overnight in Hoi An.
Includes: Small group vespa tour, breakfast, lunch and English speaking guide
Excludes: Dinner and personal expense
Accomodation: 4* or 5* star on request
Hoian Delicacy Hotel
Address: No 116 Hùng Vương, Street, Hội An, Quảng Nam
Phone: 0386 272 471
Palm Garden Resort
Address: Lạc Long Quân, Cửa Đại, Hội An, Quảng Nam Phone: 0235 3927 927

Day 16:  Say Goodbye to Hoi An & Vietnam
Today, you are free at your leisure until it’s time for your transfer to the airport for your flight home or onward journey.
On behalf of the Asia Eyes Travel team, I am Thuc Nguyen, and I would like to sincerely thank you for traveling with us. I look forward to welcoming you, your family, and your friends to my beautiful country in the future!
Includes: Private transfer to airport
Excludes: English speaking tour guide
Accomodation: N/ A
Note: Late check-out upon request.`,
    duration:    "16 Days/15 Nights",
    price:       1536,
    categoryIds: ["1"],
    cityIds:     ["2", "3", "4", "1", "13", "12"],
    featuredTour: false,
    onSale:       false,
    saleDiscountPercentage: null,
  },
  {
    id:          "35",
    title:       "Vietnam Travel Package Deals 15 Days",
    imageUrl:    "https://asiaeyestravel.com/uploads/source/blog/hoian/du-khach-di-xe-jeep.jpg",
    description: `Discover the best of Vietnam on this 15-day travel package from Ho Chi Minh City . Explore the vibrant Mekong Delta , stroll through the charming streets of Hoi An , admire the scenic landscapes of Ninh Binh , trek the terraced mountains of Sapa , and enjoy a luxurious overnight cruise on Halong Bay . This carefully curated itinerary offers the perfect mix of culture, nature, and adventure , making it ideal for travelers seeking an unforgettable Vietnam experience.`,
    itinerary:   `Day 1: Welcome to Ho Chi Minh City - Xin Chao Vietnam
Anytime you arrive at Tan Son Nhat Airport ( Ho Chi Minh City), Asia Eyes Travel will pick you up at the airport and transfer you to hotel. Today, you are free to relax after long flight.
Overnight in Ho Chi Minh.
Includes: Private bus/ Car and tour guide
Excludes: Meals and personal expense
Accomodation: 4* or 5* star on request
Saigon Prince Hotel or similar
Address: 63 Nguyễn Huệ, Bến Nghé, Quận 1, Thành phố Hồ Chí Minh
Phone: 028 3822 2999
New World Saigon Hotel or similar
Address: 76 Lê Lai, Phường Bến Thành, Quận 1, Thành phố Hồ Chí Minh Phone: 028 3822 8888
Note: Early check-in upon request
Ho Chi Minh City (District 1)

Day 2:  Experience the Culture and Life of the Mekong Delta
8:00AM: You will be picked up at your hotel and we will bring you down to the Mekong Delta . On the way, you will get a chance to view the beautiful scenery as we go past the stunning rice fields. Upon arrival at My Tho , you will take a relaxing boat trip on the Mekong River to enjoy the fresh air and the charming stilt house at the riverbank and then, you visit the authentic life of the locals. We will visit some local family factory and watch the production of several local products, including coconut candy, rice paper, pop rice, jackfruit wine, banana wine, and souvenirs and you will learn how to make products and buy some to take home.
Overnight in Ho Chi Minh.
Includes: Small Tour Group to Mekong Delta, English speaking guide, lunch, entrance fees, boat
Excludes: Drinks, dinner and personal expense
Accomodation : 4* or 5* star on request
Saigon Prince Hotel or similar
Address: 63 Nguyễn Huệ, Bến Nghé, Quận 1, Thành phố Hồ Chí Minh
Phone: 028 3822 2999
New World Saigon Hotel or similar
Address: 76 Lê Lai, Phường Bến Thành, Quận 1, Thành phố Hồ Chí Minh
Phone: 028 3822 8888

Day 3: City Tour & Cu Chi Tunnels
8:00AM: We will pick you up at the hotel and start discovering the historical and cultural landmarks of Ho Chi Minh City. Visit the Reunification Palace , the War Remnants Museum , and the beautiful Notre-Dame Cathedral Basilica . After lunch, head to the Cu Chi Tunnels , an extensive underground network used during the Vietnam War. Experience the tunnels firsthand and learn about their historical significance.
Overnight in Ho Chi Minh.
Includes: Private transfer, English speaking guide, lunch and entrance fees
Excludes: Drinks, dinner and personal expense
Accomodation : 4* or 5* star on request
Saigon Prince Hotel or similar
Address: 63 Nguyễn Huệ, Bến Nghé, Quận 1, Thành phố Hồ Chí Minh
Phone: 028 3822 2999
New World Saigon Hotel or similar
Address: 76 Lê Lai, Phường Bến Thành, Quận 1, Thành phố Hồ Chí Minh
Phone: 028 3822 8888

Day 4:  Ho Chi Minh fly to Hoi An
This day, you are free until our driver comes to pick you up and transfer you to Tan Son Nhat International airport for a short flight to Danang. Arrive in Danang airport, our tour guide and driver will pick you up and transfer you to Hoi An. Today, you are free to explore Hoi An ancient town – UNESCO World Heritage Centre.
Overnight in Hoi An.
Includes: Private transfer from/to airport, flight ticket and breakfast
Excludes: Drinks, lunch, personal expense
Accomodation: 4* or 5* star on request
Hoian Delicacy Hotel
Address: No 116 Hùng Vương, Street, Hội An, Quảng Nam
Phone: 0386 272 471
Palm Garden Resort
Address: Lạc Long Quân, Cửa Đại, Hội An, Quảng Nam Phone: 0235 3927 927

Day 5:  Explore Hoi An countryside by Jeep car
7:45 AM: Jeep car will pick you up and begin to experience Hoi An countryside. Today, you will visit a local farm, learn about rice, vegetable, and cereal crop cultivation, and experience the daily life of local farmers. Discover traditional occupations in the countryside, such as weaving, rice-wine making, and woodcarving. Learn about newer industries like bird’s nest farming and aquaculture. Head to a local family’s home for a delicious home-cooked meal, providing you with a unique insight into the lives of middle-class Vietnamese people.
Overnight in Hoi An.
Includes: Breakfast, Small-group Jeep tour with lunch, English speaking guide
Excludes: Dinner and personal expense
Accomodation: 4* or 5* star on request
Hoian Delicacy Hotel
Address: No 116 Hùng Vương, Street, Hội An, Quảng Nam
Phone: 0386 272 471
Palm Garden Resort
Address: Lạc Long Quân, Cửa Đại, Hội An, Quảng Nam Phone: 0235 3927 927

Day 6:  Discover Hoi An your own way
Today is a free day to explore Hoi An . Maybe browse the cobbled streets and art galleries or hire a bike and cycle through rice paddies out to Cua Dai Beach . Maybe browse for paintings, ceramics and colourful cloth lanterns in the town’s markets and preserved Chinese shophouses. If you’re craving a new look, you could pay a visit to one of the hundreds of tailors and get something special made. Hoi An is also known for its delicious regional food, so be sure to enjoy a meal at a riverside restaurant or perhaps partake in a cooking class.
Overnight in Hoi An.
Includes: Breakfast
Excludes: Dinner, lunch, transfer, tour guide and personal expense
Accomodation: 4* or 5* star on request
Hoian Delicacy Hotel
Address: No 116 Hùng Vương, Street, Hội An, Quảng Nam
Phone: 0386 272 471
Palm Garden Resort
Address: Lạc Long Quân, Cửa Đại, Hội An, Quảng Nam Phone: 0235 3927 927

Day 7:  Depart Hoi An and fly to Hanoi
Depending on your flight schedule, our driver will transfer you to Da Nang Airport for your flight to Hanoi – the vibrant capital of Vietnam. Upon arrival at Noi Bai International Airport, the Asia Eyes Travel team will warmly welcome you and escort you to your hotel. Enjoy a free afternoon to explore Hanoi’s bustling Old Quarter, a maze of narrow streets filled with lively markets, charming boutiques, and irresistible street food.
Overnight in Hanoi.
Includes: Private bus/car and tour guide
Excludes: Meals and personal expense
Accomodation : 4* or 5* star on request
Hanoi Tirant Hotel
Address: 38 P. Gia Ngư, Hàng Bạc, Hoàn Kiếm, Hà Nội
Phone: 024 6265 5999
Apricot Hotel Hanoi
Address: 136 P. Hàng Trống, Hàng Trống, Hoàn Kiếm, Hà Nội Phone: 024 3828 9595

Day 8:  Scooter Tour through Hanoi’s Hidden Gems  – Night Train to Sapa
8:30 AM – Our friendly female drivers will pick you up for an exciting Hanoi Scooter Tour to explore the highlights and hidden gems of the city.
Your first stop is the legendary Giang Café , home of the original Egg Coffee - a Hanoi specialty passed down through generations.
Next, hop back on the scooter to visit iconic landmarks such as the Hanoi Opera House , Train Street, Long Bien Bridge, and the Ho Chi Minh Mausoleum . Along the way, you’ll pass through bustling local markets, where vendors sell fresh produce and daily essentials.
You’ll also visit Huu Tiep Lake , where the wreckage of a downed B-52 bomber remains , and ride through the narrow alleys of hidden neighborhoods to witness the daily lives of local Hanoians - an experience few tourists get to see.
Evening – Transfer to the train station and board the overnight train to Sapa, a charming mountain town known for its breathtaking landscapes and ethnic diversity. (Train departs at 9:30 PM.)
Overnight on the train.
Notes:
Please keep in mind that we do not go inside the Ho Chi Minh Mausoleum on “Hanoi City sights and street food” tour. This attraction requires a lot of time to fully appreciate so we recommend that you visit them on your own so that we can make the most of time you have with us.
The above itinerary is subject to change, based on the day’s weather and traffic conditions.
Overnight on train.
Includes: Small group scooter tour with lunch, breakfast, train tickets and English speaking guide
Excludes: Dinner and personal expense
Accomodation : King Sapa Train

Day 9:  Discover Villages and Authentic Local Experiences
6:00 AM: Arrive in at Lao Cai train station, our tour guide and driver will pick you up and transfer you to Sapa. Have breakfast and leave your luggage at hotel before going to visit the villages as Lao Chai and Ta Van villages, the home of H’Mon g and Dzay ethnic minorities . Take a walk around to the villages to take photos and chat with ethnic minorities. After having lunch, we continue to Ta Phin village – Home of Red Dzao ethnic minority. Then return to the hotel in Sapa.
Overnight in Sapa.
Includes: Private transfer, English speaking tour guide, breakfast and lunch
Excludes: Dinner and personal expense
Accomodation : 4* or 5* star on request
Bamboo Sapa Hotel
Address: 18 Mường Hoa, TT. Sa Pa, Sa Pa, Lào Cai
Phone: 0214 3871 076
Hotel de la Coupole
Address: 1, Hoang Lien Street Sapa District, Lao Cai Province Phone: 0214 3629 999
Sapa Town

Day 10:  Explore Cat Cat village
After breakfast, our tour guide will meet you and take you on a scenic trek to Cat Cat village (3KM), renowned for its stunning Cat Cat Waterfall. This charming village offers plenty of opportunities for beautiful photos, and you can also purchase unique souvenirs to bring back for your family and friends.
In the afternoon, you’ll have free time to explore the local market in Sapa, where you can shop for local products and immerse yourself in the vibrant atmosphere of the town. If the weather is clear, you may choose to take a cable car ride up to Fansipan Mountain, the highest peak in Indochina, and enjoy breathtaking panoramic views. Overnight in Sapa.
Overnight in Sapa.
Includes: Private transfer, English speaking tour guide and breakfast
Excludes: Dinner, lunch and personal expense
Accomodation : 4* or 5* star on request
Bamboo Sapa Hotel
Address: 18 Mường Hoa, TT. Sa Pa, Sa Pa, Lào Cai
Phone: 0214 3871 076
Hotel de la Coupole
Address: 1, Hoang Lien Street Sapa District, Lao Cai Province Phone: 0214 3629 999

Day 11:  Sapa – Return to Hanoi by Bus
This morning, you have the freedom to relax or explore at your own pace until our bus arrives to transfer you to Hanoi . Enjoy a comfortable journey as you make your way to the city. Upon arrival, you will check in at your hotel and have some time to refresh. After settling in, the rest of the day is yours to enjoy at leisure.
In the evening, step out and immerse yourself in the charm of Hanoi’s Old Quarter . Wander through its narrow streets, where the blend of ancient architecture, vibrant markets, and street food stalls create a lively atmosphere.
Overnight in Hanoi.
Includes: Shuttle bus and breakfast
Excludes: Lunch, dinner, tour guide and personal expense
Accomodation : 4* or 5* star on request
Hanoi Tirant Hotel
Address: 38 P. Gia Ngư, Hàng Bạc, Hoàn Kiếm, Hà Nội
Phone: 024 6265 5999
Apricot Hotel Hanoi
Address: 136 P. Hàng Trống, Hàng Trống, Hoàn Kiếm, Hà Nội Phone: 024 3828 9595

Day 12:  Hanoi to Halong Bay: Experience a Night on a Luxury Cruise
8:00 AM: Your exciting journey begins as our shuttle bus picks you up from your hotel, and we start our scenic drive to Halong Bay and the lesser-known, yet equally stunning Lan Ha Bay. These two iconic destinations, known for their emerald waters and towering limestone karsts, are perfect for travelers seeking both tranquility and adventure.
11:45 AM: Upon arrival at Halong Bay, a UNESCO World Heritage Site, and Lan Ha Bay , you will be warmly welcomed by our professional crew. After a brief introduction, you’ll be transferred to the cruise boat, where you can settle in and enjoy a delicious lunch while taking in the spectacular views of these two breathtaking bays. The limestone islands, lush greenery, and crystal-clear waters create the perfect atmosphere for a relaxing day ahead.
After lunch, you’ll have the chance to engage in a variety of activities. You can kayak through the serene waters of Lan Ha Bay , exploring hidden caves and floating fishing villages. Alternatively, enjoy a refreshing swim in the calm waters or simply unwind on the sundeck while soaking up the stunning landscapes of both Halong Bay and Lan Ha Bay.
Whether you choose to explore the bays more actively or relax and enjoy the panoramic views, both Halong Bay and Lan Ha Bay provide an unforgettable natural experience, making this day one you’ll cherish forever.
Overnight on cruise.
Includes: Shuttle bus, breakfast, lunch and dinner
Excludes: Drinks, personal expense
Accomodation: 4* or 5* star cruise on request
Sena Cruises or similar
Address : International Habour, Tuần Châu, Hạ Long, Quảng Ninh Phone : 0974 001 062
Peony Cruise
Address: 16 P. Thi Sách, Ngô Thì Nhậm, Hai Bà Trưng, Hà Nội 100000 Phone: +84935946688
Halong Bay (175 KM) From Hanoi

Day 13:  Journey from Halong to Ninh Binh
6:30 AM – 7:30 AM: Begin your day with a delicious breakfast served on board the cruise, offering a variety of fresh and flavorful dishes to fuel your morning. As you enjoy your meal, take in the breathtaking views of Halong Bay and Lan Ha Bay , setting the perfect tone for the day ahead.
7:30 AM: After breakfast, join the cruise’s exciting activities, whether it’s kayaking through the calm waters, swimming in the pristine bay, or simply relaxing on the deck, soaking in the stunning surroundings. The beauty of the bay will captivate you at every turn. As you continue to enjoy the serene atmosphere, a delicious lunch will be served on board, allowing you to indulge in Vietnamese cuisine while admiring the magnificent landscapes of Halong Bay.
12:00 PM: After a relaxing and enjoyable day on the water, it’s time to disembark and head back to the port. From there, you will board the bus for your journey to Ninh Binh , a region known for its dramatic karst landscapes, tranquil rivers, and lush greenery.
Overnight in Ninh Binh
Includes: Breakfast, lunch and shuttle bus
Excludes: Dinner and personal expense
Accomodation: 4* or 5* star on request
Lalita Ninh Binh Resort
Address: Thung Nham, Hoa Lư District, Ninh Bình Phone: 0229 3626 888
Emeralda Resort Ninh Binh
Address: Van Long Wetland Nature Reserve, Xã, Gia Vân, Gia Viễn, Ninh Bình Phone: 0229 3658 333
Ninh Binh (Tam Coc, Trang An)( 95KM) from Hanoi

Day 14:  Exploring the Natural and Cultural Wonders of Ninh Binh & Hanoi
8:30 AM: We pick you up at the hotel and start exploring the scenic beauty of Ninh Binh, often called ' Halong Bay on land. ' Take a boat ride through the Trang An Landscape Complex , passing through caves and along rivers framed by limestone peaks. Visit the ancient capital of Hoa Lu , the serene Bich Dong Pagoda , as well as Mua Cave .
In the afternoon, you will return to Hanoi for the overnight stay.
Overnight in Hanoi.
Includes: Private transfer, breakfast, lunch, entrance fees, boat and English speaking guide
Excludes: Dinner and personal expense
Accomodation : 4* or 5* star on request
Hanoi Tirant Hotel
Address: 38 P. Gia Ngư, Hàng Bạc, Hoàn Kiếm, Hà Nội
Phone: 024 6265 5999
Apricot Hotel Hanoi
Address: 136 P. Hàng Trống, Hàng Trống, Hoàn Kiếm, Hà Nội Phone: 024 3828 9595

Day 15:  Hanoi – Departure
Depending on your flight time, you may have some free time to explore or relax before our driver picks you up and transfers you to Noi Bai International Airport in Hanoi for your departure flight.
On behalf of Asia Eyes Travel, I am Thuc Nguyen, and I would like to sincerely thank you for traveling with us. We truly appreciate your trust and look forward to welcoming you again on your next holiday.
Includes: Private transfer to airport
Excludes: English speaking tour guide
Accomodation: N/ A
Note: Late check-out upon request.`,
    duration:    "15 Days/ 14 Nights",
    price:       1379,
    categoryIds: ["1"],
    cityIds:     ["2", "3", "4", "1", "13", "27", "21", "20"],
    featuredTour: false,
    onSale:       false,
    saleDiscountPercentage: null,
  },
  {
    id:          "36",
    title:       "Vietnam Cultural Tour 18 Days from Ho Chi Minh City",
    imageUrl:    "https://asiaeyestravel.com/uploads/source/blog/hoian/khach-doan-di-bo-hoian.jpg",
    description: `Experience an 18-day Vietnam tour by Asia Eyes Travel and explore the country’s most captivating destinations. Discover Hanoi , Sapa , Ha Long Bay , Hue , Hoi An , and Ho Chi Minh City while enjoying rich Vietnam cultural tours , history, cuisine, and stunning landscapes. This journey is ideal for families, couples, honeymooners, and solo travelers seeking an unforgettable adventure.`,
    itinerary:   `Day 1: Ho Chi Minh City - Arrival (N/A)
Welcome to Ho Chi Minh City! Upon your arrival, our friendly guide and driver from Asia Eyes Travel will warmly welcome you and transfer you to your hotel. Take some time to relax and settle in, or if you're feeling adventurous, step out into the lively streets of this dynamic city. Wander through the bustling markets, discover vibrant local life, and indulge in the mouthwatering street food that Ho Chi Minh City is famous for. Overnight in Ho Chi Minh.
Includes: Private bus/ Car and tour guide
Excludes: Meals and personal expense
Accomodation : 4* or 5* star on request
Saigon Prince Hotel or similar
Address: 63 Nguyễn Huệ, Bến Nghé, Quận 1, Thành phố Hồ Chí Minh
Phone: 028 3822 2999
New World Saigon Hotel or similar
Address: 76 Lê Lai, Phường Bến Thành, Quận 1, Thành phố Hồ Chí Minh
Phone: 028 3822 8888
Note: Early check-in upon request

Day 2: Ho Chi Minh City & Cu Chi Tunnels
8:00 Begin your day with a tour of Ho Chi Minh City. Visit the War Remnants Museum , where you can gain insight into Vietnam’s history through its poignant exhibits. Explore the Reunification Palace , a symbol of the country's reunification, and admire the stunning architecture of Notre-Dame Cathedral Basilica of Saigon . After a traditional Vietnamese lunch, head to the Cu Chi Tunnels , an extensive underground network used during the Vietnam War. Discover the ingenuity of the tunnel system and learn about the daily lives of those who lived there. Return to Ho Chi Minh City in the evening. Overnight in Ho Chi Minh.
Includes: Private transfer, English speaking guide, entrance fees, breakfast and lunch
Excludes: Dinner and personal expense
Accomodation : 4* or 5* star on request
Saigon Prince Hotel or similar
Address: 63 Nguyễn Huệ, Bến Nghé, Quận 1, Thành phố Hồ Chí Minh
Phone: 028 3822 2999
New World Saigon Hotel or similar
Address: 76 Lê Lai, Phường Bến Thành, Quận 1, Thành phố Hồ Chí Minh
Phone: 028 3822 8888

Day 3:  Travel from Ho Chi Minh to Can Tho via the scenic Mekong Delta
8:00 We will pick you up at the hotel and set off for the lush Mekong Delta region. Visit the Cai Be floating market and experience the vibrant trading scene on the water. Cruise along the Mekong River , exploring local villages where you can witness traditional crafts such as rice paper making and coconut candy production . Enjoy a delicious lunch featuring local specialties. In the afternoon, transfer to Can Tho and check into your hotel. Overnight in Can Tho.
Includes: Private transfer, English speaking guide, boat, breakfast and lunch
Excludes: Dinner and personal expense
Accomodation : 4* or 5* star on request
Can Tho Ecologe or similar
Address: 542 Area No.3, Ba Lang, Cai Rang, Can Tho
Phone: 0336 983 239
Charmant Suites a Boutique Hotel Can Tho or similar
Address: 45 Ngo Quyen, Ninh Kieu, Can Tho
Phone: 0292 3762 789
Can Tho (158 km) form Ho Chi Minh

Day 4:  Explore Cai Rang Market from Can Tho, Journey Back to Ho Chi Minh City
8:00 We will pick you up at the hotel and start the day by visiting the bustling Cai Rang floating market , the largest in the Mekong Delta . Observe the lively atmosphere as vendors sell their goods directly from their boats. Afterward, explore local fruit orchards and taste a variety of fresh tropical fruits. Return to Ho Chi Minh City in the afternoon. Overnight in Ho Chi Minh City.
Includes: Private transfer, English speaking guide, boat, breakfast and lunch
Excludes: Dinner and personal expense
Accomodation : 4* or 5* star on request
Saigon Prince Hotel or similar
Address: 63 Nguyễn Huệ, Bến Nghé, Quận 1, Thành phố Hồ Chí Minh
Phone: 028 3822 2999
New World Saigon Hotel or similar
Address: 76 Lê Lai, Phường Bến Thành, Quận 1, Thành phố Hồ Chí Minh
Phone: 028 3822 8888

Day 5:  Flight from Ho Chi Minh City to Danang, Transfer to Hoi An
Today, you will take a flight from Ho Chi Minh City to Danang . Upon arrival, we will pick up at the airport and transfer you to Hoi An, a UNESCO World Heritage site known for its well-preserved ancient architecture. Check into your hotel and spend the rest of the day exploring the charming streets of Hoi An, lined with lanterns and historic buildings. Perhaps enjoy a riverside dinner at one of the many delightful restaurants. Overnight in Hoi An.
Includes: Breakfast, flight ticket, private transfer from/to airport
Excludes: Lunch, dinner, drinks and personal expense
Accomodation: 4* or 5* star on request
Hoian Delicacy Hotel
Address: No 116 Hùng Vương, Street, Hội An, Quảng Nam 560000
Phone: 0386 272 471
Palm Garden Resort
Address: Lạc Long Quân, Cửa Đại, Hội An, Quảng Nam
Phone: (+84) 0235 3927 927

Day 6:  Hoi An Countryside Tour by Jeep
8:00 AM, begin your exciting adventure with jeep car tour through the peaceful countryside surrounding Hoi An . This immersive journey offers a unique glimpse into rural life in central Vietnam, far away from the tourist crowds.
As you wind through quiet village roads and scenic trails, you'll have the chance to visit traditional farming communities, where locals still practice time-honored agricultural techniques. Watch as farmers tend to lush green rice paddies using simple tools, and water buffaloes slowly plow the fields—a timeless scene that reflects the region’s deep connection to the land.
Throughout the tour, you’ll interact with local residents, gaining a deeper understanding of their daily lives, culture, and customs. Their warm hospitality and genuine smiles will make you feel right at home. Depending on the route, you may also stop by workshops where villagers make crafts, mats, or rice paper by hand.
Enjoy the refreshing breeze as you pass by picturesque landscapes of swaying palm trees, tranquil rivers, and vibrant vegetable gardens. Don’t forget your camera—this is the perfect setting for capturing beautiful moments.
At midday, sit down to a delicious lunch featuring a selection of regional specialties, freshly prepared using local ingredients. After this satisfying meal and enriching experience, return to your hotel to rest or continue exploring charming Hoi An at your own pace.
Overnight in Hoi An.
Includes: Breakfast, Small group Jeep tour with lunch, English speaking guide
Excludes: Dinner, drinks and personal expense
Accomodation: 4* or 5* star on request
Hoian Delicacy Hotel
Address: No 116 Hùng Vương, Street, Hội An, Quảng Nam 560000
Phone: 0386 272 471
Palm Garden Resort
Address: Lạc Long Quân, Cửa Đại, Hội An, Quảng Nam
Phone: (+84) 0235 3927 927

Day 7: Hoi An - Free Day
Today is yours to enjoy at leisure, giving you the perfect opportunity to discover the charm of Hoi An at your own pace. Whether you're in the mood for relaxation, adventure, or cultural immersion, this enchanting town has something for everyone.
Start your day by unwinding on An Bang Beach , just a short ride from the Old Town. Feel the soft white sand between your toes, take a refreshing dip in the sea, or simply lounge under a palm tree with a cool drink in hand. The peaceful atmosphere makes it an ideal spot to relax and soak up the coastal vibes.
If you’re feeling more active, stroll through the historic streets of Hoi An Ancient Town, a UNESCO World Heritage Site. Browse the many boutique shops fo r handcrafted souvenirs, lanterns, silk garments, or tailor-made clothing . The colorful architecture and charming lantern-lined alleys make every step feel like a walk through history.
For a deeper cultural experience, consider joining a Vietnamese cooking class . Visit a local market to pick out fresh ingredients and learn how to prepare traditional dishes such as spring rolls, pho, or banh xeo. It’s a fun and tasty way to connect with local traditions.
As evening falls, don’t miss the magical glow of lanterns lighting up the riverside - Hoi An truly comes alive at night. Overnight in Hoi An.
Includes: Breakfast
Excludes: Lunch, dinner, drinks, tour guide, transfer and personal expense
Accomodation: 4* or 5* star on request
Hoian Delicacy Hotel
Address: No 116 Hùng Vương, Street, Hội An, Quảng Nam 560000
Phone: 0386 272 471
Palm Garden Resort
Address: Lạc Long Quân, Cửa Đại, Hội An, Quảng Nam
Phone: (+84) 0235 3927 927

Day 8:  Hoi An - My Son Sanctuary - Hue
8:30: We will pick up at the hotel and depart for Hue, with a stop to visit My Son Sanctuary , an ancient cluster of Hindu temples that are a UNESCO World Heritage site . Wander through the atmospheric ruins and learn about the history and significance of the Cham civilization. Continue your journey to Hue, passing through the scenic Hai Van Pass with breathtaking views of the coast. Check into your hotel in Hue. Overnight in Hue.
Includes: Private transfer, entrance fees, lunch, English speaking tour guide
Excludes: Drinks, dinner and Personal expense
Accomodation: 4* or 5* star on request
White Lotus Hotel
Address: 05-07 Hoàng Hoa Thám, Phú Nhuận, Huế, Thành phố Huế 47000
Phone: 0234 3881 888
Senna Hue Hotel
Address: 7 Nguyễn Tri Phương, Phú Hội, Huế, Thành phố Huế 53000
Phone: 0234 3858 686

Day 9:  Hue City Tour
8:00 AM, our knowledgeable tour guide and driver will pick you up at your hotel to begin an unforgettable full-day exploration of Hue, the former imperial capital of Vietnam. Steeped in history and cultural significance, Hue offers a fascinating window into the country’s royal past.
Your journey starts with a visit to the Imperial Citadel, a sprawling complex recognized as a UNESCO World Heritage Site. Once the heart of the Nguyen Dynasty, the Citadel boasts impressive gates, palaces, temples, and the Forbidden Purple City—once reserved exclusively for the royal family.
Next, you’ll make your way to the iconic Thien Mu Pagoda, perched on the banks of the Perfume River. This seven-story pagoda, one of the oldest in Vietnam, is not only an architectural gem but also a spiritual symbol of Hue.
The tour continues with visits to the royal tombs of the Nguyen emperors , each offering a unique glimpse into imperial architecture and personal legacy. At the Tomb of Tu Duc , admire the tranquil setting and poetic design that reflect the emperor’s scholarly nature. Then, marvel at the Tomb of Khai Dinh, which blends traditional Vietnamese style with French colonial influence, featuring elaborate mosaics and a majestic hilltop view.
Around midday, enjoy a delicious lunch featuring authentic Hue-style cuisine , known for its refined flavors and royal presentation.
After a day immersed in imperial grandeur, return to your hotel for some rest and reflection.
Overnight in Hue.
Includes: Private transfer, entrance fees, lunch, English speaking tour guide
Excludes: Drinks, dinner and Personal expense
Accomodation: 4* or 5* star on request
White Lotus Hotel
Address: 05-07 Hoàng Hoa Thám, Phú Nhuận, Huế, Thành phố Huế 47000
Phone: 0234 3881 888
Senna Hue Hotel
Address: 7 Nguyễn Tri Phương, Phú Hội, Huế, Thành phố Huế 53000
Phone: 0234 3858 686

Day 10: Hue - Fly to Hanoi - 1/2 Day City Tour by Scooter or Jeep
Today, you will take a flight from Hue to Hanoi. Upon arrival, we will pick up at the airport and transfer you to the hotel. Depending on your arrival time, you can take a half-day city tour by Scooter or Jeep in the afternoon or evening. Visit iconic attractions such as the Ho Chi Minh Mausoleum , where the nation's beloved leader rests, Opera House, Hanoi's 36 icon streets , Giang Egg coffee, Train street and so on.
Overnight in Hanoi.
Includes: Private transfer, flight ticket, scooter tour with dinner and drinks, English peaking tour guide.
Excludes: Lunch and personal expense
Accomodation: 4* or 5* star on request
Hanoi Tirant Hotel
Address: 38 P. Gia Ngư, Hàng Bạc, Hoàn Kiếm, Hà Nội - Phone: 024 6265 5999
Apricot Hotel Hanoi
Address: 136 P. Hàng Trống, Hàng Trống, Hoàn Kiếm, Hà Nội Phone: 024 3828 9595

Day 11: Hanoi - Halong Bay
8:00 AM , your guide and driver will pick you up from your hotel in Hanoi for the scenic drive to Halong Bay, one of Vietnam’s most iconic destinations and a designated UNESCO World Heritage Site . Along the way, take in views of the Vietnamese countryside with its lush rice fields and traditional villages.
Upon arrival at the pier, board a luxury cruise ship and begin your journey through the breathtaking bay, famous for its emerald green waters and thousands of towering limestone karsts and islets. As the cruise sets sail, enjoy a welcome drink and settle into your comfortable cabin.
A fresh seafood lunch is served on board while you cruise past remarkable formations and floating fishing villages. In the afternoon, join a variety of engaging activities: explore a magnificent limestone cave, go kayaking through hidden lagoons, or take a refreshing swim in the bay’s crystal-clear waters.
As the sun begins to set, the boat will anchor in a quiet and scenic area. Enjoy some leisure time on the sun deck, take in the panoramic views, or unwind with a drink.
In the evening, savor a delicious dinner prepared by the onboard chef. The peaceful atmosphere of Halong Bay at night offers a magical setting for relaxation.
Overnight on cruise.
Includes: Breakfast, lunch, dinnner, shuttle bus, entrance fees, kayaking, English speaking tour guide on boat.
Excludes: Drinks, and personal expense
Accomodation: 4* or 5* star cruise on request
Sena Cruises or similar
Address: International Habour, Tuần Châu, Hạ Long, Quảng Ninh Phone: 0974 001 062
Peony Cruise
Address: 16 P. Thi Sách, Ngô Thì Nhậm, Hai Bà Trưng, Hà Nội 100000 Phone: +84935946688

Day 12: Halong Bay - Ninh Binh
6:00: Begin the day full of energy with the Tai Chi session and enjoy the sun just rising up beyond the horizon. 6:45 - 7:15: Breakfast is served while cruising back to Gia Luan jetty. (Breakfast time maybe adjust and follow the real itinerary) 7:30 - 9:00: You will join the tour of Cat Ba World Biosphere by transshipment. It takes 30 minutes to transfer from Gia Luan to Trung Trang – one of the most impressive caves in Cat Ba Island, Vietnam. The limestone cave has thousands of stalactites in various shapes, offering geological values with a typical cave ecosystem. 9:30: Return to the main boat from the cave and the guests will do the cabin check out. and have lunch. 10:30 - 11:00: Disembark the Peony Cruises and transferred back to Tuan Chau Marina. Brunch is served at the restaurant. Settle the bar bill by the desk at the restaurant (if any) 11:30 - 12:00: The guests are ready at Tuan Chau Marina and get on car to Ninh Binh.
Overnight in Ninh Binh.
Includes: Breakfast, lunch, shuttle bus small
Excludes: Drinks, dinner and personal expense
Accomodation: 4* or 5* star on request
Lalita Ninh Binh Resort
Address: Thung Nham, Hoa Lư District, Ninh Bình Phone: 0229 3626 888
Emeralda Resort Ninh Binh
Address: Van Long Wetland Nature Reserve, Xã, Gia Vân, Gia Viễn, Ninh Bình 430000 Phone: 0229 3658 333

Day 13: Discover the stunning landscapes of Ninh Binh - Hanoi - Sapa by Night Train
8:30 AM – Begin your day with a pickup from your hotel.
Your journey starts at the ancient capital of Hoa Lu, once the heart of Vietnam’s political and cultural life during the 10th and 11th centuries. Explore the historical temples dedicated to Kings Dinh and Le and learn about the important role this ancient site played in shaping the nation’s early history.
Next, take a peaceful boat ride through the Trang An Landscape Complex , a UNESCO World Heritage Site. Glide through serene waterways, passing through dramatic limestone caves and lush greenery. This unique landscape, often referred to as “Halong Bay on land”, offers some of the most picturesque scenery in Vietnam.
After the boat ride, hike up to Mua Cave , where you’ll be rewarded with panoramic views of the surrounding countryside, including the stunning karst mountains and rice paddies of Ninh Binh.
In the evening, return to Hanoi and prepare for your overnight adventure, as you board the night train to Sapa at 9:30 PM.
Overnight on the train.
Includes: Breakfast, small Tour group, lunch, entrance fees, English speaking tour guide, train ticket
Excludes: Drinks, dinner and personal expense
Accomodation: King Sapa Train

Day 14: Sapa Arrival & Sightseeing
6:00 AM – Upon arrival at Lao Cai station, our guide will welcome you and transfer you to your hotel in Sapa. Take some time to rest and enjoy a hearty breakfast, preparing for a full day of exploration.
9:00 AM – Meet your local tour guide, who will lead you on a journey through the stunning Muong Hoa Valley. Known for its breathtaking views, this valley is filled with terraced rice fields and offers a glimpse into the lives of the indigenous ethnic groups of the region. Along the way, stop at the picturesque villages of Lao Chai and Ta Van, home to the H’mong and Dzay communities.
As you explore, learn about the unique cultures, traditions, and daily lives of these ethnic groups. The valley's natural beauty provides an idyllic backdrop for discovering Vietnam’s rural heritage.
In the midst of your exploration, enjoy a picnic lunch surrounded by lush landscapes and towering mountains, further enhancing the charm of this peaceful setting. Afterward, continue your journey through the valley before heading back to Sapa town in the late afternoon.
Overnight in Sapa.
Includes: Private transfer, English speaking tour guide, breakfast and lunch
Excludes: Drinks, dinner and personal expense
Accomodation : 4* or 5* star on request
Bamboo Sapa Hotel
Address: 18 Mường Hoa, TT. Sa Pa, Sa Pa, Lào Cai
Phone: 0214 3871 076
Hotel de la Coupole
Address: 1, Hoang Lien Street Sapa District, Lao Cai Province Phone: 0214 3629 999
Sapa town

Day 15: Free Day in Sapa – Explore at Your Own Pace
Today, enjoy a free day in Sapa, allowing you to explore the stunning mountain town at your own pace. Sapa is a place full of natural beauty and cultural diversity, so you have the freedom to choose your own adventure.
If you're up for more exploration, consider visiting additional local villages such as Cat Cat or Sin Chai, where you can learn more about the lives of the ethnic minority groups that call Sapa home. The scenic landscapes and unique culture make these villages a must-see for any traveler.
For those who enjoy hiking, there are numerous trails that lead through the surrounding mountains, offering breathtaking views of terraced rice fields and lush valleys. If you're looking for a more relaxed experience, take a cable car ride to the top of Fansipan, Vietnam’s highest peak, and marvel at the panoramic views of the entire region.
Alternatively, simply unwind and enjoy the peaceful atmosphere of Sapa. The fresh air and stunning surroundings are perfect for relaxing and taking in the natural beauty of this mountainous region.
In the evening, return to your hotel and rest.
Overnight in Sapa.
Includes: Breakfast
Excludes: Drinks, lunch, dinner and personal expense
Accomodation : 4* or 5* star on request
Bamboo Sapa Hotel
Address: 18 Mường Hoa, TT. Sa Pa, Sa Pa, Lào Cai
Phone: 0214 3871 076
Hotel de la Coupole
Address: 1, Hoang Lien Street Sapa District, Lao Cai Province Phone: 0214 3629 999

Day 16: Sapa - Hanoi by Bus
Today, you will have a free morning before departing from Sapa and return to Hanoi by bus . Check into your hotel and spend the rest of the day at your leisure. Perhaps explore more of Hanoi's vibrant street life or enjoy a leisurely dinner in the Old Quarter. Overnight in Hanoi.
Includes: Breakfast, shuttle bus
Excludes: Lunch, dinner and personal expense
Accomodation: 4* or 5* star on request
Hanoi Tirant Hotel
Address: 38 P. Gia Ngư, Hàng Bạc, Hoàn Kiếm, Hà Nội - Phone: 024 6265 5999
Apricot Hotel Hanoi
Address: 136 P. Hàng Trống, Hàng Trống, Hoàn Kiếm, Hà Nội Phone: 024 3828 9595

Day 17: Fee Day in Hanoi – Explore the Capital at Your Leisure
Today, enjoy a free day in Hanoi, giving you the opportunity to discover more of the vibrant capital at your own pace. Hanoi is a city full of history, culture, and charm, offering plenty of things to see and do.
You can start by visiting some of the city's famous museums such as the Vietnam Museum of History or the Ho Chi Minh Mausoleum , where you can dive deeper into Vietnam's past and heritage. Alternatively, stroll through the Old Quarter, famous for its narrow streets, colonial architecture, and bustling markets. It's the perfect place to pick up unique souvenirs or handmade goods to remember your trip.
Overnight in Hanoi.
Includes: Breakfast
Excludes: Lunch, dinner, tour guide, transfer and personal expense
Accomodation: 4* or 5* star on request
Hanoi Tirant Hotel
Address: 38 P. Gia Ngư, Hàng Bạc, Hoàn Kiếm, Hà Nội - Phone: 024 6265 5999
Apricot Hotel Hanoi
Address: 136 P. Hàng Trống, Hàng Trống, Hoàn Kiếm, Hà Nội Phone: 024 3828 9595

Day 18: Hanoi – Departure
Today, you have the day at your leisure until it's time for us to transfer you to the airport for your return flight or onward journey. On behalf of Asia Eyes Travel, I, Thuc Nguyen, would like to express my heartfelt thanks for choosing to travel with us. It has been our pleasure to have you with us, and we hope you had a memorable experience in Vietnam. We look forward to welcoming you, your family, and your friends on future trips.
Includes: Private transfer to airport
Excludes: English speaking tour guide
Accomodation: N/ A
Note: Late check-out upon request.`,
    duration:    "18 Days/ 17 Nights",
    price:       1728,
    categoryIds: ["1", "7"],
    cityIds:     ["2", "3", "4", "1", "14", "13", "12", "23", "21", "20"],
    featuredTour: false,
    onSale:       true,
    saleDiscountPercentage: 15,
  },
  {
    id:          "37",
    title:       "Vietnam Travel by Train from North to Central 15 Days",
    imageUrl:    "https://asiaeyestravel.com/uploads/source/tours/cai-be/vietnam-travel-by-train-).jpg",
    description: `Vietnam is renowned for its diverse landscapes, vibrant culture, and rich history. Traveling by train across this beautiful country offers a unique opportunity to experience its natural wonders and cultural heritage from a different perspective. If you are looking to explore the northern and central regions of Vietnam , our 15-Day Vietnam Travel by Train is the perfect way to immerse yourself in the country's stunning beauty, meet local people, and visit some of its most iconic landmarks.
Unique Perspective: Traveling by train allows you to enjoy stunning scenic views that are often missed by other modes of transport.
Cultural Immersion: Meet locals, experience traditional Vietnamese culture, and visit authentic landmarks.
Comfortable Travel: Enjoy the comfort of a sleeper train, perfect for long-distance travel across Vietnam’s northern and central regions.
Expert Guides: Learn about Vietnam’s history and culture from experienced local guides throughout the journey.
For more information on this unforgettable Vietnam travel by train adventure, including detailed itineraries and pricing, contact us at info@asiaeyestravel.com or WhatsApp (+84) 935 946 688 (Mr. Thuc). Don't miss out on this unique opportunity to explore Vietnam by train with Asia Eyes Travel.`,
    itinerary:   `Day 1: Welcome to Hanoi, Vietnam
Upon your arrival at Noi Bai Airport , the guide and driver from Asia Eyes Travel will meet you at the airport and transfer you to your hotel. After completing the check-in process, you will have free time to rest and relax after your long flight.
5:00 PM: Our tour guide and cyclo drivers will pick you up and take you on a 1.5-hour drive to explore the Old Quarter. You will then take a walk to observe the daily life of the local people.
Overnight in Hanoi
Includes: Private bus/ Car and tour guide
Excludes: Meals and personal expense
Accomodation : 4* or 5* star on request
Hanoi Tirant Hotel
Address: 38 P. Gia Ngư, Hàng Bạc, Hoàn Kiếm, Hà Nội
Phone: 024 6265 5999
Apricot Hotel Hanoi
Address: 136 P. Hàng Trống, Hàng Trống, Hoàn Kiếm, Hà Nội Phone: 024 3828 9595
Note: Early check-in upon request

Day 2: Explore Hanoi City by Scooter - Overnight train to Sapa
In the morning, you have free time to explore at your leisure.
12:30 PM: Our female scooter drivers will pick you up for a scooter tour to explore Hanoi . The first stop will be the famous Café Giang, where you can enjoy Hanoi’s signature egg coffee, a drink passed down through generations.
Next, we’ll visit iconic landmarks such as the Hanoi Opera House , local markets selling everyday goods, Train Street, Long Bien Bridge, the Ho Chi Minh Mausoleum, and Huu Tiep Lake (home to a B52 wreck). The drivers will also take you through narrow alleys to discover old houses and the everyday life of locals, hidden gems not typically seen by tourists in Hanoi.
During the tour, you will also have the chance to sample Hanoi’s renowned street food, including pho, bun cha, banh mi, and other local specialties.
After four hours of exploring the city by scooter with the Vietnamese women in traditional ao dai, you will return to your hotel to relax and enjoy a leisurely walk around the city. Later, at 9:30 PM, you will head to the train station to board the overnight train to Sapa.
Notes:
Please keep in mind that we do not go inside the Ho Chi Minh Mausoleum on “Hanoi City sights and street food” tour. This attraction requires a lot of time to fully appreciate so we recommend that you visit them on your own so that we can make the most of time you have with us.
Please keep in mind that we do not go inside the Ho Chi Minh Mausoleum on “Hanoi City sights and street food” tour. This attraction requires a lot of time to fully appreciate so we recommend that you visit them on your own so that we can make the most of time you have with us.
The above itinerary is subject to change, based on the day’s weather and traffic conditions.
The above itinerary is subject to change, based on the day’s weather and traffic conditions.
Overnight on train
Includes: Breakfast, Small group scooter tour with lunch, English speaking guide and train tickets
Excludes: Drinks, dinner and personal expense
Accomodation : King Sapa Train

Day 3: Sapa Arrival - Minority Villages
Upon arrival, our driver will greet you at the Lao Cai train station and transfer you to Sapa. After check-in, enjoy some time to rest and have breakfast to refresh for the day ahead.
9:00 AM: Our driver and tour guide will pick you up for a scenic journey to visit the picturesque Lao Chai and Ta Van villages. These villages are home to the H’Mong and Dzay ethnic minorities, where you can immerse yourself in their unique culture and witness their traditional way of life.
12:30 PM: After exploring the villages, return to Sapa town for a delicious lunch, where you can savor local specialties and recharge for the afternoon’s adventure.
In the afternoon, we’ll continue our journey to Ta Phin village , nestled in a stunning valley. This village is home to the Red Dzao and H’Mong minorities, offering a rich cultural experience amidst breathtaking landscapes.
4:00 PM: After a day filled with cultural exploration and scenic beauty, we’ll head back to the hotel to relax.
Overnight in Sapa.
Includes: Private transfer, English speaking tour guide, breakfast and lunch
Excludes: Drinks, dinner and personal expense
Accomodation : 4* or 5* star on request
Bamboo Sapa Hotel
Address: 18 Mường Hoa, TT. Sa Pa, Sa Pa, Lào Cai
Phone: 0214 3871 076
Hotel de la Coupole
Address: 1, Hoang Lien Street Sapa District, Lao Cai Province Phone: 0214 3629 999
Sapa town

Day 4: Explore Cat Cat waterfall - Overnight Train to Hanoi
After breakfast, our tour guide will meet you and take you on a scenic trek to Cat Cat village (3KM), renowned for its stunning Cat Cat Waterfall. This charming village offers plenty of opportunities for beautiful photos, and you can also purchase unique souvenirs to bring back for your family and friends.
In the afternoon, you’ll have free time to explore the local market in Sapa , where you can shop for local products and immerse yourself in the vibrant atmosphere of the town. If the weather is clear, you may choose to take a cable car ride up to Fansipan Mountain, the highest peak in Indochina, and enjoy breathtaking panoramic views.
4:30 PM: Our driver will pick you up from your hotel and transfer you to the train station, where you'll board an overnight train back to Hanoi.
Overnight on the train
Includes: Breakfast, English peaking tour guide, lunch, train ticket, entrance fees
Excludes: Drinks, dinner and personal expense
Accomodation : King Sapa Train

Day 5: Discover the Wonders of Halong Bay – Overnight on Cruise
Arriving in Hanoi station in the early morning. Our driver will pick you up and transfer you to your hotel to have breakfast before going to Halong bay.
8:00 AM: Our shuttle bus will pick you up at your hotel and transfer you to the stunning Halong Bay .
11:45 AM: Upon arrival in Halong, our friendly crew will welcome you aboard the cruise. After check-in, you’ll enjoy a delicious lunch as the boat sets sail, offering you the chance to admire the breathtaking beauty of Halong Bay and Lan Ha Bay .
3:30 PM: Participate in exciting activities on board, such as kayaking , swimming , or even joining a cooking class to learn how to prepare some traditional Vietnamese dishes.
As the day winds down, join the sunset party on the deck of the boat, an ideal moment for photography enthusiasts to capture the stunning views of the sun setting over the bay.
7:00 PM: Savor a romantic dinner aboard the cruise, enjoying a delicious meal while surrounded by the tranquility of Halong Bay. Afterward, you can relax and unwind, soaking in the peaceful atmosphere.
Overnight on cruise
Includes: Shuttle bus, entrance fees, breakfast, lunch and dinner
Excludes: Drinks, personal expense
Accomodation: 4* or 5* star cruise on request
Sena Cruises or similar
Address : International Habour, Tuần Châu, Hạ Long, Quảng Ninh Phone : 0974 001 062
Peony Cruise
Address: 16 P. Thi Sách, Ngô Thì Nhậm, Hai Bà Trưng, Hà Nội 100000 Phone: +84935946688
Halong Bay (170 km) from Hanoi

Day 6:  Halong - Ninh Binh
6:30 AM – 7:30 AM: Enjoy a delicious breakfast served on board the cruise, offering a variety of fresh and tasty options to start your day.
7:30 AM: Join in the cruise’s exciting activities, such as kayaking , swimming, or relaxing on the deck. You’ll also have the opportunity to indulge in a delicious lunch on the cruise while continuing to enjoy the stunning views of Halong Bay.
12:00 PM: After lunch, it’s time to disembark and head back to the port. From there, you will board the bus for your journey to Ninh Binh , where you can explore more of Vietnam’s beautiful landscapes.
Overnight in Ninh Binh
Includes: Breakfast, lunch and shuttle bus
Excludes: Drinks, dinner and personal expense
Accomodation: 4* or 5* star on request
Lalita Ninh Binh Resort
Address: Thung Nham, Hoa Lư District, Ninh Bình Phone: 0229 3626 888
Emeralda Resort Ninh Binh
Address: Van Long Wetland Nature Reserve, Xã, Gia Vân, Gia Viễn, Ninh Bình Phone: 0229 3658 333
Ninh Binh (Tam Coc, Trang An)

Day 7:  Explore Ninh Binh - Night train to Dong Hoi
8:30 AM: We will pick you up from your hotel and begin your journey to explore the ancient capital of Hoa Lu , where you’ll visit the temples of the Dinh and Le Kings , dating back to the 10th century. These historical sites offer insight into Vietnam’s rich past and the legacy of these influential dynasties.
Next, we’ll continue to the Trang An Landscape Complex , a UNESCO World Heritage site known for its breathtaking waterways and limestone caves. You’ll enjoy a relaxing boat ride, navigating through the stunning natural landscape that has captivated travelers for centuries.
In the afternoon, we’ll take you on a hike to Mua Cave , where you’ll be rewarded with a panoramic view of the lush countryside and the beautiful rice paddies below.
In the evening, we will transfer you to the train station to catch your overnight train to Dong Hoi , where you will continue your adventure in Vietnam.
Ove rnight on the train
Includes: Breakfast, English peaking tour guide, lunch, train ticket, entrance fees, boat
Excludes: Drinks, dinner and personal expense
Accomodation :

Day 8:  Explore Caves in Phong Nha
Arrive in Dong Hoi, our tour guide and driver will wait for you at the train station and transfer you to Phong Nha for breakfast.
After having breakfast, we start our new day to visit: Paradise Cave
Your journey along the legendary Ho Chi Minh trail, through the old forests with shady trees and the sounds of birds singing and gibbons calling. You will arrive at the parking lot of Paradise Cave - the longest dry cave in Asia. After visiting the Paradise cave , we are going to restaurant for lunch.
In the afternoon: Visit Phong Nha Cave - The first wonder of the cave
You will take a cruise on the poetic Son river associated with a long history, to admire the captivating beauty. Occasionally, we come across images of the countryside on both sides of the river, which are very familiar. Images of children herding buffaloes and playing in the river, people fishing on the river, or young girls in the countryside next to the green corn fields. An extremely beautiful landscape painting. Phong Nha Cave has the longest underground river in Asia, along with the most magical and magnificent stalactite system. 4:00 PM: Return to hotel for overnight.
Overnight in Quang Binh
Includes: Breakfast, lunch, entrance fees, English speaking guide,
Excludes: Drinks, dinner and personal expense
Accomodation: 4* or 5* star on request
Victory Road Villas
Address: Highway 20, Phong Nha, Bố Trạch, Quảng Bình Phone: 0886 199 599
Poseido Hotel Quang Binh
Address: 223 Trương Phap, Viet Nam, Dong Hoi, Quang Binh Phone: 0232 3535 555

Day 9:  Phong Nha - Vinh Moc tunnels - Hue City
8:00 AM: Pick-up at the hotel. The tour guide will pick you up at the hotel in the city area and begin the exciting journey.
9:00 AM: Visit to Vinh Moc Tunnels , one of the prominent historical sites in Central Vietnam . You will learn about the history of the tunnels' construction and their role during the Vietnam War. This underground system stretches over 2 km, where the people of Vinh Moc lived and fought during the harsh years of war. Visitors will explore the tunnels, living quarters, food storage rooms, and the underground transportation network. This is a profound experience that helps you better understand the wartime life of the people in Central Vietnam. After the visit, the guide will take you to a local restaurant for lunch before continuing the journey to Hue - a UNESCO World Heritage city . During the trip, you will have the chance to admire the majestic landscape of Central Vietnam and enjoy the peaceful atmosphere throughout the journey.
Overnight in Hue
Includes: Breakfast, lunch, private transfer, entrance fees and English speaking tour guide
Excludes: Drinks, dinner and personal expense
Accomodation: 4* or 5* star on request
White Lotus Hue Hotel
Address: 05-07 Hoang Hoa Tham, Phu Nhuan, Hue
Phone: 0234 3881 888
Silk Path Grand Hue Hotel
Address: 2 Le Loi, Vinh Ninh, Hue Phone: 0234 3975 555

Day 10:  Hue City Tour - Hoi An
8:00 AM : Our tour guide and driver will pick you up from your hotel to begin your full-day Hue City Tour . The day starts with a visit to the iconic Thien Mu Pagoda , one of Hue's most famous landmarks. From here, you will embark on a relaxing boat ride along the scenic Perfume River , enjoying the tranquil atmosphere and beautiful surroundings.
After the boat ride, we will head to the Imperial City , a UNESCO World Heritage Site. We will visit the royal tombs of the emperors, such as Khai Dinh and Tu Duc , where you can admire the impressive architecture and learn about the fascinating history of the Nguyen Dynasty .
After a delicious local lunch, we will continue our journey to Hoi An . On the way, our driver will take you through the Hai Van Pass , one of the most scenic coastal routes in Vietnam, offering stunning views of the mountains and the ocean.
This tour is the perfect way to experience the rich history and natural beauty of Hue before continuing your adventure to the charming town of Hoi An .
Overnight in Hoi An.
Includes: Private transfer, breakfast, lunch, entrance fees, boat and English speaking guide
Excludes: Dinner and personal expense
Accomodation: 4* or 5* star on request
Hoian Delicacy Hotel
Address: No 116 Hùng Vương, Street, Hội An, Quảng Nam
Phone: 0386 272 471
Palm Garden Resort
Address: Lạc Long Quân, Cửa Đại, Hội An, Quảng Nam Phone: 0235 3927 927
Hoi An (125 km) from Hue

Day 11:  Hoi An Countryside by Scooter or Jeep
7:45 AM: Your adventure begins as our friendly Vespa drivers pick you up from your hotel and whisk you away on a scenic Hoi An Countryside Vespa Tour .
Your first stop is a local farm, where you'll have the opportunity to immerse yourself in the daily rhythm of rural life. Discover how rice, vegetables, and cereal crops are cultivated, and gain insight into the hard work of the local farmers who tend to these fields.
Next, venture deeper into the countryside to explore traditional crafts like weaving, rice-wine making, and woodcarving, which have been passed down through generations. You’ll also learn about modern industries such as bird’s nest farming and aquaculture , adding an intriguing contrast to the age-old practices.
Afterward, enjoy a warm and inviting home-cooked meal with a local family, where you’ll be treated to authentic Vietnamese dishes and gain a unique perspective on the lives of middle-class families in the region.
As the day comes to a close, reflect on the wonderful experiences you’ve had and the new friendships formed as you say goodbye to the charming countryside, carrying with you memories of an unforgettable journey.
Overnight in Hoi An.
Includes: Breakfast, Small group Jeep/ Scooter tour with lunch and English speaking guide
Excludes: Dinner and personal expense
Accomodation: 4* or 5* star on request
Hoian Delicacy Hotel
Address: No 116 Hùng Vương, Street, Hội An, Quảng Nam
Phone: 0386 272 471
Palm Garden Resort
Address: Lạc Long Quân, Cửa Đại, Hội An, Quảng Nam Phone: 0235 3927 927

Day 12/ Day 13 and Day 14:  Enjoy Your Leisure Days in Hoi An
During these leisure days in Hoi An , you have the freedom to explore at your own pace. Start by wandering through the Hoi An Ancient Town , a UNESCO World Heritage site, where you’ll be enchanted by the charming streets lined with traditional architecture, colorful lanterns, and quaint shops. Don’t forget to visit the Japanese Covered Bridge and the bustling Hoi An Market to experience local culture firsthand.
For those seeking relaxation, An Bang Beach offers a tranquil escape. Spend your time lounging by the sea, enjoying the fresh breeze, and soaking up the sun. The beach is perfect for a peaceful day of rest.
Hoi An is also known for its bespoke tailoring . Take the opportunity to shop for tailor-made clothing , where you can have custom suits, dresses, and accessories made just for you. In addition, explore local shops for unique souvenirs such as silk products, pottery, and traditional handicrafts.
After a day of exploration and relaxation, enjoy an overnight stay in Hoi An, immersing yourself in the serene atmosphere and vibrant night life of this charming town.
Overnight in Hoi An.
Includes: Breakfast
Excludes: Dinner, lunch and personal expense
Accomodation: 4* or 5* star on request
Hoian Delicacy Hotel
Address: No 116 Hùng Vương, Street, Hội An, Quảng Nam
Phone: 0386 272 471
Palm Garden Resort
Address: Lạc Long Quân, Cửa Đại, Hội An, Quảng Nam Phone: 0235 3927 927

Day 15: Hoi An to Danang – Departure
Depending on your flight schedule, we will arrange a transfer to Da Nang International Airport for your departure. This marks the end of your unforgettable journey in Vietnam .
On behalf of Asia Eyes Travel, I am Thuc Nguyen , and I would like to express my sincere gratitude for choosing us. We look forward to welcoming you, your family and your friends on your next trip to my beautiful country.
Includes: Private transfer to airport
Excludes: English speaking tour guide
Accomodation: N/ A
Note: Late check-out upon request.`,
    duration:    "15 Days/14 Nights",
    price:       1450,
    categoryIds: ["1"],
    cityIds:     ["2", "3", "4", "1", "15", "13", "12"],
    featuredTour: false,
    onSale:       true,
    saleDiscountPercentage: 15,
  },
  {
    id:          "38",
    title:       "Mekong Delta and Phu Quoc Island 10-Day Itinerary",
    imageUrl:    "https://asiaeyestravel.com/uploads/source/tours/phu-quoc/phu-quoc-island-(1).jpg",
    description: `Asia Eyes Travel offers the Best South Vietnam Tour 10-Day Itinerary with Phu Quoc Beach , combining cultural experiences, Mekong Delta adventures, and tropical beach relaxation. Explore vibrant Ho Chi Minh City , cruise through the peaceful Mekong Delta , and unwind on the beautiful beaches of Phu Quoc Island . Enjoy luxury resorts, authentic local cuisine, and unforgettable experiences on this perfectly designed Southern Vietnam journey.`,
    itinerary:   `Day 1:  Arrival in Ho Chi Minh City
Our Suggested Hotels (4★ & 5★):
5★: Sheraton Saigon Grand Opera Hotel 4★: Saigon Prince Hotel (or similar hotels)
Includes: Accommodation, private transportation, English-speaking tour guide.
Excludes: Meals and personal expenses.

Day 2: Ho Chi Minh City – Free Day
Spend a full day at your own pace exploring the vibrant energy of Ho Chi Minh City . Relax at your hotel or venture out to discover bustling streets, lively markets, and charming cafés.
For those seeking a taste of local culture, join a street food tour or Vespa Tour (optional) to enjoy authentic Vietnamese cuisine. You can also relax at a café and watch daily city life unfold. Shop for souvenirs, local handicrafts, or fashion at Saigon Square and other local markets, where the sights, sounds, and aromas create an unforgettable atmosphere.
In the evening, enjoy the city’s vibrant nightlife, stroll along the riverside, or have dinner at a local restaurant or on a river cruise. With a free day in Ho Chi Minh City, you can tailor your experience to your interests and enjoy the city at your own rhythm. Overnight in Ho Chi Minh City.
Includes: Accommodation with breakfast.
Excludes: Lunch, dinner, and personal expenses.

Day 3:  Ho Chi Minh City – Experience the Mekong Delta
Depart from your hotel in Ho Chi Minh City in the morning and travel to Ben Tre , the heart of the Mekong Delta (approximately 2 hours by private car), enjoying scenic views of rivers, lush coconut palms, and charming villages along the way. Upon arrival, embark on a boat ride along the peaceful canals , surrounded by traditional houses and coconut palms. Visit local workshops to see how coconut candy is made , sample fresh tropical fruits, and explore small villages to experience the daily life of the local people. Take a short cycling tour through the countryside to fully appreciate the picturesque rural landscapes.
Enjoy a delicious traditional Vietnamese lunch by the rive r , featuring local specialties made from fresh Delta ingredients. After lunch, visit a local market or take a leisurely walk around the village. Check in at your homestay and spend the afternoon at your own pace, exploring nearby fruit farms or relaxing in the tranquil surroundings.
Overnight in Ben Tre
Includes: Accommodation with breakfast, lunch, dinner, private transportation, boat, entrance fees, and an English-speaking tour guide.
Excludes: Drinks and personal expenses.

Day 4:  Ben Tre - Can Tho
In the afternoon, transfer by private car to Can Tho , the vibrant capital of the Mekong Delta .
Upon arrival, check in at your hotel and relax after a day of exploration. Enjoy an optional evening stroll along the riverside promenade to soak up the peaceful atmosphere and observe the local nightlife.
Our Suggested Hotels (4★ & 5★):
5★: Sheraton Can Tho 4★: Charmant Suites a Boutique Hotel Can Tho
Includes: Accommodation with breakfast, lunch, private transportation, entrance fees, and an English-speaking tour guide.
Excludes: Dinner and personal expenses.

Day 5:  Can Tho - Chau Doc ( 165 KM)
This morning, we embark on a scenic drive to Chau Doc , a charming border town located near Cambodia, known for its rich cultural diversity and tranquil riverside landscapes. Upon arrival, you will have the opportunity to immerse yourself in the serene beauty of the Tra Su Cajuput Forest , a unique wetland area famous for its peaceful canals, lush greenery, and abundant birdlife.
Take a gentle boat ride through the forest, gliding past towering cajuput trees reflected in the calm waters, while observing herons, kingfishers, and other native birds in their natural habitat. This is a perfect spot for photography enthusiasts and nature lovers alike, offering a peaceful escape from the bustling city life.
After a day of exploration, relax and unwind at your hotel in Chau Doc, enjoying the local hospitality and preparing for the next leg of your Mekong Delta journey. Overnight in Chau Doc.
Our Suggested Hotels (4★):
4★: Victoria Chau Doc Hotel
Includes: Accommodation with breakfast, lunch, private transportation, entrance fees, and an English-speaking tour guide.
Excludes: Dinner and personal expenses.

Day 6:  Explore Cham Floating Village and Phu Quoc island
After breakfast, head to the Cham Floating Village , a traditional fishing community where you can experience the local way of life. Watch fishermen at work, stroll along the riverbanks, and admire the colorful boats that line the waterways.
Next, transfer from Giach Gia Pier and enjoy a scenic ferry ride across the sparkling waters to Phu Quoc Island . Upon arrival, check in at your beach resort and take some time to relax on the pristine sandy beaches, soak up the sun, or simply enjoy the gentle ocean breeze.
In the evening, savor fresh seafood at a local restaurant while watching the sun set over the horizon, painting the sky in breathtaking colors. This marks the perfect beginning to your tropical escape. Overnight in Phu Quoc.
5★: Crowne Plaza Phu Quoc or Salinda Resort Phu Quoc Island
Includes: Accommodation with breakfast, private transportation, ferry tickets, and an English-speaking tour guide for the ferry transfer.
Excludes: Lunch, dinner, and personal expenses.
Note :
At the ferry terminal, your driver and tour guide will say goodbye before you board the ferry to Phu Quoc Island . Upon arrival, our local driver will welcome you and transfer you comfortably to your hotel.

Day 7, Day 8 & Day 9:  Phu Quoc Island Free Days
For adventure lovers, optional activities include snorkeling , diving , kayaking , and island hopping across crystal-clear waters. In the evenings, enjoy relaxing spa treatments or a romantic sunset cruise overlooking the turquoise sea. Overnight in Phu Quoc .
Includes: Accommodation with breakfast
Excludes: Lunch, dinner, and personal expenses.

Day 10:  Phu Quoc Farewell: Memories and Departure from Vietnam’s Tropical Paradise
Notes :
After the trip, if you would like to extend your journey to Central Vietnam , Northern Vietnam , or explore other Vietnam Tour Packages , please contact us. We will be delighted to create a customized tour program tailored to your preferences.
On behalf of Asia Eyes Travel , I am Thuc Nguyen , and I would like to sincerely thank you for traveling with us. We truly look forward to welcoming you, your family, and friends on your next vacation in beautiful Vietnam.
Includes: Accommodation with breakfast, private transfer to airport
Excludes: Late check-out at hotels.`,
    duration:    "10 Days/ 9 Nights",
    price:       1950,
    categoryIds: ["1"],
    cityIds:     ["22", "24", "25", "26", "20"],
    featuredTour: false,
    onSale:       false,
    saleDiscountPercentage: null,
  },
  {
    id:          "39",
    title:       "Discover Northern Vietnam 10 Days",
    imageUrl:    "https://asiaeyestravel.com/uploads/source/best-of-vietnam-package-tour-in-14-days-1721724582675023425.png",
    description: `Experience the best of Northern Vietnam on this 10-day journey through its most iconic destinations. Begin in Hanoi , exploring the Old Quarter , Hoan Kiem Lake , and savoring street food , with an optional Hanoi Scooter Tour and a visit to Train Street . Travel to Sapa to trek terraced rice fields and visit ethnic minority villages like Lao Chai and Ta Van . Then, explore Ninh Binh , known as “ Ha Long Bay on land ,” with limestone peaks, Trang An Grottoes , and Bai Dinh Pagoda .
A highlight is Ha Long Bay , spending a night on a luxury cruise and visiting Cat Ba Island for pristine beaches and scenic hikes. This tour blends culture , adventure , street food experiences , and natural beauty , with expert local guides and luxury accommodations . Perfect for nature lovers , history enthusiasts , and adventure seekers , this 10-day Northern Vietnam itinerary promises unforgettable experiences and memories.`,
    itinerary:   `Day 1:  Welcome to Hanoi - Xin Chao Vietnam
Whenever you arrive at Noi Bai Airport , Asia Eyes Travel’s friendly team will be there to greet you and provide a seamless transfer to your hotel.
This afternoon, embark on a unique Cyclo tour , a charming and leisurely way to explore the city. For 1 hour and 30 minutes, ride through Hanoi’s lively streets , taking in the sights, sounds, and vibrant atmosphere. Afterward, enjoy a guided walking tour through the historic Old Quarter , where you’ll discover its rich heritage, bustling markets, and hidden gems. This immersive experience offers the perfect introduction to Hanoi’s culture and daily life.
Overnight in Hanoi.
Includes: Private bus/ Car and tour guide
Excludes: Meals and personal expense
Accomodation : 4* or 5* star on request
Hanoi Tirant Hotel
Address: 38 P. Gia Ngư, Hàng Bạc, Hoàn Kiếm, Hà Nội
Phone: 024 6265 5999
Apricot Hotel Hanoi
Address: 136 P. Hàng Trống, Hàng Trống, Hoàn Kiếm, Hà Nội Phone: 024 3828 9595
Note: Early check-in upon request

Day 2:  Discover Hanoi by Jeep car
8:30 AM: Our tour guide and jeep driver will pick you up, and you will start your trip with the following destinations:
We start our trip to drive you though a popular coffee and lemon-tea street see how local people enjoy and meeting their friend then we continue to the historical place at the old church of Hanoi for meeting to join with another in the group, and meet our guide and you will learn the history of Joseph's Cathedral and nice places for take picture.
Jump up to the Jeep again, we continue to enjoy the most famous food in Hanoi at the hidden gem street with Bun Cha and Nem (spring rolls) of traditional family do their cook Bun Cha since 1925, especially Obama also came to eat here when he come to visit Vietnam 2016
Next driver stop in the French quarter where you see beautiful architecture of colonial building at night, chance to get beautiful picture for you Hanoi at night our Hanoi Jeep team will stop for you at the front see the Opera house see the view of the French quarter, and learn some history.
Then we get on the Jeep and go to the next place for food, before the food place we will ride through pass the beautiful ceramic road and Chuong Duong Bridge to enjoy fresh air from bridge and see huge of the red river and you will make stop at Long Bien Bridge for enjoy over of Hanoi city.
The exciting rides in organized, chaotic traffic takes you to a local restaurant with authentic food and then to small alleys to try a different version of Pho, "Pho Chien Phong, Chien Trung, Pho Cuon" and many different Vietnamese dishes that are world famous and the opportunity to try all typical of the food here
Ride around the big lake is a romantic sight of Hanoi that most travelers rarely have the chance to see. Continue with the trip, drive around Hanoi city and drive pass Ho Chi Minh mausoleum stop for take picture of the night time.
A few minutes, drive to next stop for Egg coffee shop next to the railway train track we will have time to walk and have chance to see train come through and enjoy your Egg coffee.
After enjoy all tour will take you back to your hotel.
Overnight in Hanoi.
Includes: Small group jeep tour, English-speaking guide, breakfast and lunch.
Excludes: Dinner and personal expense
Accomodation : 4* or 5* star on request
Hanoi Tirant Hotel
Address: 38 P. Gia Ngư, Hàng Bạc, Hoàn Kiếm, Hà Nội
Phone: 024 6265 5999
Apricot Hotel Hanoi
Address: 136 P. Hàng Trống, Hàng Trống, Hoàn Kiếm, Hà Nội Phone: 024 3828 9595

Day 4:  Ninh Binh – Cat Ba by Bus
Early morning at 7:30 AM: Driver will pick you up and transfer you to Cat Ba Island (160 KM).
11:45 AM: Arrive in Cat Ba Island, check in hotel and you are free to explore the island by your own way.
There are some beautiful beaches in Cat Ba Such as: Cat Co 1, Cat Co 2. Or if you can drive motorbike, you can rent one to explore the Cat Ba national park.
Overnight in Cat Ba.
Includes: Breakfast and transfer
Excludes: Drinks, lunch, dinner and personal expense
Accomodation: 4* or 5* star on request
Paradise Cat Ba hotel or similar
Address: 231 Một Tháng Tư, TT. Cát Bà, Hải Phòng Phone: 0225 3688 789
Flamingo Cat Ba Beach Resort or similar
Address: Cat Ba Town, Cat Hai District, Hai Phong Phone: 0225 3888 686

Day 5:  Cat Ba – Free day
Today, you are free to explore Cat Ba Island or relax on beach.
Overnight in Cat Ba.
Includes: Breakfast
Excludes: Drinks, lunch, dinner and personal expense
Accomodation: 4* or 5* star on request
Paradise Cat Ba hotel or similar
Address: 231 Một Tháng Tư, TT. Cát Bà, Hải Phòng Phone: 0225 3688 789
Flamingo Cat Ba Beach Resort or similar
Address: Cat Ba Town, Cat Hai District, Hai Phong Phone: 0225 3888 686

Day 6:  Cat Ba – Overnight on Cruise in Lan Ha Bay
10:00 AM: Our driver will pick you up at hotel and take you to Gia Luan dock and you will get on cruise.
Check in and have lunch.
After having luch, you will join cruise activities such as: Swimming, Kayaking, cooking class.
Overnight on board.
Includes: Transfer, entrance fees, breakfast, lunch and dinner
Excludes: Drinks, personal expense
Accomodation: 4* or 5* star cruise on request
Sena Cruises or similar
Address : International Habour, Tuần Châu, Hạ Long, Quảng Ninh Phone : 0974 001 062
Peony Cruise
Address: 16 P. Thi Sách, Ngô Thì Nhậm, Hai Bà Trưng, Hà Nội 100000 Phone: +84935946688
Halong Bay

Day 7:  Cat Ba – Halong Bay - Hanoi - Night train to Sapa
6:30 -7:30 AM: Breakfast is served.
7:30 AM: You will join cruise’s activities.
9:30 AM: Check-out and then have lunch.
12:00 PM: Disembark and move back the port and get on bus to Hanoi.
2:30 PM: - 3:00 PM: You will arrive in Hanoi, you are free in the afternoon to explore Hanoi old quarter and have your own dinner before transferring you to train station for a night train to Sapa.
Overnight on train
Includes: Shuttle bus, transfer to train station, train ticket, breakfast and lunch
Excludes: Drinks, dinner and personal expense
Accomodation : King Sapa Train

Day 8:  Sapa Trekking
6:00 AM: You will arrive at Lao Cai train station. And our driver will pick you up and transfer you to Sapa (38km).
Having breakfast at hotel.
9:00 AM: Our driver and tour guide will pick you up to visit the Lao Chai and Ta Van villages where you can see the daily life of the ethnic minorities H’Mong and Dzay.
12:30 PM: You will go back to Sa Pa town for lunch
After having lunch, you will keep going to Ta Phin village , the home of Red Dzao ethnic minority
with colorful field view and people.
Late in the afternoon, you will go back to hotel for relaxing after a long day trip.
Overnight in Sapa.
Includes: Private transfer, English speaking tour guide, breakfast and lunch
Excludes: Drinks, dinner and personal expense
Accomodation : 4* or 5* star on request
Bamboo Sapa Hotel
Address: 18 Mường Hoa, TT. Sa Pa, Sa Pa, Lào Cai
Phone: 0214 3871 076
Hotel de la Coupole
Address: 1, Hoang Lien Street Sapa District, Lao Cai Province Phone: 0214 3629 999
Sapa Town

Day 9:  Sapa – Cat Cat village
After breakfast, our tour guide will pick you up and you start trekking to Cat Cat village (3KM). Where is famous with Cat Cat water waterfall. And surely you will have many beautiful photos this place and you also can by some souvenir for your family or friend in this village.
In the afternoon, you are free to explore Sapa local market or if the weather is clear, you can buy a cable car to visit Fansipan mountain.
Overnight in Sapa.
Includes: Private transfer, English speaking tour guide, entrance fee and breakfast
Excludes: Drinks, lunch, dinner and personal expense
Accomodation : 4* or 5* star on request
Bamboo Sapa Hotel
Address: 18 Mường Hoa, TT. Sa Pa, Sa Pa, Lào Cai
Phone: 0214 3871 076
Hotel de la Coupole
Address: 1, Hoang Lien Street Sapa District, Lao Cai Province Phone: 0214 3629 999

Day 10:  Sapa – Hanoi by bus
After breakfast, we will arrange a luxury van to transfer you to Hanoi, where you are expected to arrive around 1:30 PM. Your journey with us concludes here.
On behalf of Asia Eyes Travel, I am Thuc Nguyen. I would like to sincerely thank you for choosing us and hope to welcome you again on your next journey!
Note:
If you are continuing your adventure to other destinations with us, such as Hue, Hoi An, or Ho Chi Minh City, we will transfer you to the airport for your flight to your next destination as per your request
Includes: Breakfast and shuttle bus
Excludes: Drinks, lunch, dinner and personal expense`,
    duration:    "10 Day/ 9 Nights",
    price:       950,
    categoryIds: ["1"],
    cityIds:     ["10", "2", "3", "4", "1"],
    featuredTour: false,
    onSale:       false,
    saleDiscountPercentage: null,
  },
  {
    id:          "40",
    title:       "Vietnam Beach Holiday 16 Days",
    imageUrl:    "https://asiaeyestravel.com/uploads/source/blog/phuquoc/970x650/phu-quoc-beach-tour-guide.webp",
    description: `Discover a wonderful beach holiday in Vietnam with a 16-day journey across the country, where you will experience vibrant culture, breathtaking landscapes, and unforgettable adventures. This comprehensive tour takes you to famous destinations such as Hanoi, Ninh Binh, Halong Bay, Hue, Hoi An, and Ho Chi Minh City , culminating in a luxurious beach retreat in Vietnam’s Con Dao archipelago . Whether you’re a history lover, a foodie, or a beach enthusiast, this itinerary promises unforgettable memories!`,
    itinerary:   `Day 1: Arrival in Hanoi
Welcome to Hanoi, Vietnam's vibrant capital! Upon your arrival flight, Asia Eyes Travel will greet and transfer you to your hotel. Spend the rest of the day exploring at your leisure, perhaps taking a stroll around Hoan Kiem Lake or enjoying the bustling Old Quarter. Overnight in Hanoi.
Accommodation:
4-star hotels: Tirant hotel or similar hotels
5-star hotels: De l'Opera Hanoi - MGallery similar hotels
Meals: N/A

Day 2: Explore Hanoi’s Treasures
Start your journey with a full-day Hanoi city tour. Visit historical landmarks such as the Ho Chi Minh Mausoleum , the One Pillar Pagoda , and the iconic Temple of Literature . Take a leisurely walk through the French Quarter and enjoy a traditional Vietnamese lunch.
In the afternoon, explore the bustling streets of the Old Quarter. Overnight in Hanoi.
Accommodation:
4-star hotels: Tirant hotel or similar hotels
5-star hotels: De l'Opera Hanoi - MGallery similar hotels
Meals: Breakfast and lunch

Day 3: Experience the Magic of Ninh Binh
8:00 AM: Depart from Hanoi and embark on a journey to Ninh Binh, a destination often referred to as "Ha Long Bay on land." Renowned for its stunning landscapes and rich cultural heritage, Ninh Binh is a must-visit for anyone exploring Vietnam.
Morning: Explore Bai Dinh Pagoda Your adventure begins at Bai Dinh Pagoda, one of the best places to visit in Ninh Binh. This sprawling Buddhist complex, the largest in Southeast Asia, is known for its massive bronze Buddha statues, serene courtyards, and panoramic views of the surrounding countryside. A visit here offers both spiritual enrichment and breathtaking scenery.
Afternoon: Boat Ride through Trang An Next, head to Trang An for an unforgettable boat ride. These UNESCO-listed sites are among the top attractions in Ninh Binh, famous for their dramatic limestone karsts, tranquil waterways, and lush greenery. As you glide along the river, you’ll pass through mysterious caves and admire ancient temples nestled in the natural landscape.
Overnight in Ninh Binh.
Accommodation:
4-star Hotels: Hidden Charm Hotel & Resort or Similar
5-star hotels: Nham Village Resort or Similar
Meals: Breakfast and lunch

Day 4: Explore the Enchanting Halong Bay
7:30 AM: You will start your new day with a scenic drive from Ninh Binh to Halong Bay.
11:45 AM: Arrival and Boarding Your Cruise Upon arrival at Halong Bay, you’ll be warmly greeted by the cruise crew and guided on board. After check-in, enjoy a delicious lunch while the cruise begins its journey through the stunning landscapes of Halong Bay and Lan Ha Bay. Marvel at the limestone karsts rising dramatically from the water, a view that defines the beauty of Halong Bay tours.
15:30 PM: Activities on Halong Bay In the afternoon, dive into the activities offered by your cruise: Kayaking: Paddle through calm waters, exploring hidden caves and lagoons that showcase the untouched beauty of Halong Bay. Swimming: Take a refreshing dip in the crystal-clear waters, surrounded by limestone cliffs. Cooking Class: Learn to make traditional Vietnamese dishes, adding a culinary twist to your Halong Bay adventure. Halong Bay tours are designed to provide a mix of relaxation and active exploration, catering to all types of travelers.
17:30 PM: Sunset Party on the Cruise As the day winds down, gather on the deck for a sunset party. Enjoy drinks and light refreshments while watching the sun dip below the horizon, casting golden hues across the water. For photography enthusiasts, this is the perfect time to capture the mesmerizing beauty of Halong Bay.
19:00 PM: Romantic Dinner on the Cruise Conclude your day with a romantic dinner aboard the cruise. Savor a variety of freshly prepared dishes as you dine under the stars, surrounded by the serene waters of Halong Bay. Overnight on Cruise.
Halong Bay and Lan Ha Bay Cruises
4-star cruises in Lan Ha Bay Sena cruises or similar cruises 5-star cruises in Halong Bay - Mon Cheri cruises
4-star cruises in Lan Ha Bay Sena cruises or similar cruises
5-star cruises in Halong Bay - Mon Cheri cruises
Meals: Breakfast, lunch and dinner

Day 5: Halong Bay – Hanoi –  Flight to Hue
Wake up to a spectacular sunrise over Halong Bay . After breakfast, visit more attractions in the bay or join a cooking class onboard. Return to Hanoi in the afternoon for a flight to Hue, Vietnam's imperial city and cultural heart.
Arive in Hue airport, Asia Eyes Travel will pick you up and transfer you to hotel.
Check in hotel and you are free to explore the beauty of Hue at night. Overnight in Hue.
Accommodation:
4-star hotels: White lotus hotel or similar hotels
5-star hotels: Silk Path Grand Hue Hotel or similar hotels
Meals: Breakfast and lunch

Day 6: Exploring the Rich History and Charms of Hue – Hoi An
8:30 AM: You will start your day to explore Hue's rich history. Visit the Imperial City , a sprawling complex of palaces, temples, and gates. Continue to Thien Mu Pagoda , overlooking the Perfume River, and stop by the royal tombs of Minh Mang or Khai Dinh .
Have lunch at the local restaurant.
In the afternoon, take the scenic drive to Hoi An via the Hai Van Pass , offering breathtaking coastal views.
Arrive in Hoi An, Check in hotel and you are free to discover Hoi An. Overnight in Hoi An.
Accommodation:
4-star hotels: Delicacy Hotel or similar hotels
5-star hotels: Royal Hoi An – Gallery or similar hotels
Meals: Breakfast and lunch

Day 7: Explore Hoi An’s Hidden Gems with a Jeep Tour
Discover the countryside around Hoi An on a Jeep tour . Visit local villages, explore rice paddies, and see traditional crafts being made. Stop by Tra Que Vegetable Village to learn about organic farming practices or enjoy a coffee break with stunning views.
Accommodation:
4-star hotels: Delicacy Hotel or similar hotels
5-star hotels: Royal Hoi An – Gallery or similar hotels
Meals: Breakfast and lunch

Day 8 & Day 9: Hoi An Free Days
These days, you will enjoy leisure days in the charming town of Hoi An . Explore the well-preserved Ancient Town, known for its lantern-lit streets, historic buildings, and Japanese Bridge . Take part in a local cooking class, cycle to An Bang Beach for some relaxation, or shop for tailor-made clothing at one of the town's famous tailors. Overnight in Hoi An.
Accommodation:
4-star hotels: Delicacy Hotel or similar hotels
5-star hotels: Royal Hoi An – Gallery or similar hotels
Meals: Breakfast

Day 10: Hoi An - Fly to Ho Chi Minh City
Today, you will take a short flight to Ho Chi Minh City in the morning. Ho Chi Minh City is the bustling southern hub of Vietnam.
Upon arrival in Ho Chi Minh City, Asia Eyes Travel will pick you up and transfer you to your hotel. After checking in, our tour guide will take you to a restaurant for lunch.
After lunch, you will begin a half-day city tour to visit landmarks such as the Reunification Palace, Notre-Dame Cathedral, and Ben Thanh Market.
Accommodation:
4-star hotels: Saigon Prince Hotel or similar hotels
5-star hotels: Caravelle Saigon or similar hotels
Meals: Breakfast

Day 11: Mekong Delta Sightseeing
Experience the lush waterways of the Mekong Delta on a full-day tour. Cruise through small canals, visit traditional villages, and explore the floating markets. Taste fresh tropical fruits and learn about local handicrafts. Overnight in Ho Chi Minh.
Accommodation:
4-star hotels: Saigon Prince Hotel or similar hotels
5-star hotels: Caravelle Saigon or similar hotels
Meals: Breakfast and lunch

Day 12: Ho Chi Minh City – Flight to Con Dao Island
Today, you will take a short flight to Con Dao Island, a hidden gem and tranquil paradise off the southern coast of Vietnam.
Upon arrival, spend the afternoon unwinding on the island’s pristine beaches, or venture into its lush, untouched landscapes. Whether you choose to relax by the crystal-clear waters or explore the scenic beauty of the island, Con Dao offers a perfect escape into nature. Overnight on Con Dao island.
Accommodation:
4-star hotels: The Secret Con Dao or similar hotels
5-star hotels: Six Senses Con Dao or similar hotels
Meals: Breakfast

Day 13, 14 & 15: Con Dao island - Free Days
These three full days of leisure in Con Dao or go to swim in crystal-clear waters, snorkel to explore vibrant coral reefs, or hike through Con Dao National Park. Visit historical landmarks such as Con Dao Prison for a deeper understanding of Vietnam's history. Overnights on Con Dao island.
Accommodation:
4-star hotels: The Secret Con Dao or similar hotels
5-star hotels: Six Senses Con Dao or similar hotels
Meals: Breakfast

Day 16: Con Dao – Ho Chi Minh – Departure
Today, you are free until our driver picks you up and transfers you to the airport for your flight back to Tan Son Nhat Airport, where you will take your departure flight. Your journey with us comes to an end.
Thank you very much for choosing Asia Eyes Travel for your special trip. It has been our pleasure to accompany you, and we look forward to welcoming you on your next adventure!
Thank you very much for choosing Asia Eyes Travel`,
    duration:    "16 Days/15 Nights",
    price:       2112,
    categoryIds: ["4"],
    cityIds:     ["2", "3", "1", "13", "12", "29", "21", "20"],
    featuredTour: false,
    onSale:       true,
    saleDiscountPercentage: 15,
  },
  {
    id:          "41",
    title:       "Travel Vietnam By Bus 18 Days",
    imageUrl:    "https://asiaeyestravel.com/uploads/source/blog/bus/travel-vietnam-by-bus.jpg",
    description: `Experience one of the Best Vienam Bus Tours with Asia Eyes Travel through Vietnam with small tour groups , designed to offer a truly local experience. This 18-day adventure by bus allows you to immerse yourself in Vietnam ese culture, sample a variety of local dishes, and stay with welcoming local hosts. Discover how to navigate Vietnam by bus and make the most of your trip while saving money !`,
    itinerary:   `Day 1:  Arrive in Hanoi – Warm Welcome & Transfer
On your arrival at Noi Bai International Airport, your friendly Asia Eyes Travel guide and driver will greet you and transfer you to your hotel in Hanoi. After check-in, enjoy some free time to explore the city at your own pace. In the evening, join a group meeting and welcome dinner.
Overnight in Hanoi.
Includes: Private bus/ Car and tour guide
Excludes: Meals and personal expense
Accomodation : 4* or 5* star on request
Hanoi Tirant Hotel
Address: 38 P. Gia Ngư, Hàng Bạc, Hoàn Kiếm, Hà Nội
Phone: 024 6265 5999
Apricot Hotel Hanoi
Address: 136 P. Hàng Trống, Hàng Trống, Hoàn Kiếm, Hà Nội Phone: 024 3828 9595
Note: Early check-in upon request

Day 2:  Hanoi Scooter & Street Food Adventure
Afterward, continue your journey through Hanoi to visit iconic landmarks and local attractions such as the Hanoi Opera House , bustling local markets where residents shop for daily essentials, the famous Train Street , Ho Chi Minh Mausoleum , Long Bien Bridge , and Huu Tiep Lake (B52 Lake) .
During the tour, our drivers will also take you through hidden small alleys to discover old houses and experience the authentic daily life of local urban residents, places that are rarely visited by tourists exploring Hanoi.
Overnight in Hanoi.
Notes:
Please keep in mind that we do not go inside the Ho Chi Minh Mausoleum on “Hanoi City sights and street food” tour. This attraction requires a lot of time to fully appreciate so we recommend that you visit them on your own so that we can make the most of time you have with us.
Please keep in mind that we do not go inside the Ho Chi Minh Mausoleum on “Hanoi City sights and street food” tour. This attraction requires a lot of time to fully appreciate so we recommend that you visit them on your own so that we can make the most of time you have with us.
The above itinerary is subject to change, based on the day’s weather and traffic conditions.
The above itinerary is subject to change, based on the day’s weather and traffic conditions.
Includes: Small group scooter tour, English speaking guide, breakfast and lunch
Excludes: Dinner and personal expense

Day 3:  Relax and Discover Hanoi on Your Free Day
Includes: Breakfast
Excludes: Dinner, lunch and personal expense

Day 4:  Scenic Bus Journey from Hanoi to Sapa
1:30 PM: Arrive in Sapa and check in at your hotel. After that, you are free to relax or walk around to explore the local market and surrounding area.
Overnight in Sapa
Accommodation:
3-star hotel: Sapa De hotel or similar hotel
4-star hotels: Bamboo Sapa hotel or similar hotel
Meals: Breakfast

Day 5:  Explore the Majestic Terraces and Villages of Sapa
After having breakfast at the hotel.
9:00 AM: Our driver and tour guide will pick you up to visit the Lao Chai and Ta Van villages where you can see the daily life of the ethnic minorities – H’Mong and Dzay minorities.
12:30 PM: You will go back to Sa Pa town for lunch.
After having lunch, we keep going to visit Ta Phin village where is the home of Red Dzao and H’Mong minorities with amazing landscape.
4:00 PM: Return to the hotel. Overnight in Sapa.

Day 6:  Sapa to Hanoi – Comfortable Bus Ride
This morning, you're free until the driver comes to pick you up at 2:00 pm and transfer you to Hanoi. You will arrive in Hanoi about 6:30 pm.
Accommodation:
3-star hotel: Eliana Signature Hotel or similar hotels
4-star hotels: Tirant hotel or similar hotels
Meals: Breakfast

Day 7:  Explore Halong Bay on a Magical Overnight Cruise
11:45 AM: Arrive in Ha Long and receive a warm welcome from the cruise crew before boarding the cruise. Enjoy lunch while cruising through the stunning landscapes of Ha Long Bay and Lan Ha Bay .
3:30 PM: Join exciting cruise activities such as kayaking, swimming, and a Vietnamese cooking class. Later, enjoy a sunset party on the sundeck, a perfect moment for photography lovers to capture the breathtaking sunset over the bay.
7:00 PM: Enjoy a romantic dinner onboard the cruise.
Overnight on cruise.
Ha Long Bay & Lan Ha Bay Cruises: 4-star cruise: Sena Cruise or similar
Meals: Breakfast, lunch, and dinner

Day 18:  Ho Chi Minh City – Farewell & Departure
On behalf of Asia Eyes Travel , I, Thuc Nguyen , sincerely thank you for traveling with us. We hope you had an unforgettable journey through Vietnam and look forward to welcoming you again on your next adventure with Asia Eyes Travel . Safe travels and see you again soon!`,
    duration:    "18 Days/ 17 Nights",
    price:       1530,
    categoryIds: ["1"],
    cityIds:     ["2", "3", "4", "1", "19", "15", "13", "12", "21", "20"],
    featuredTour: false,
    onSale:       true,
    saleDiscountPercentage: 15,
  },
  {
    id:          "42",
    title:       "Northern Vietnam 6 Days",
    imageUrl:    "https://asiaeyestravel.com/uploads/source/destinations/vietnam-luxury-tours.png",
    description: `Experience the wonders of Northern Vietnam on this 6-day tour, exploring the region’s top destinations. Start in Hanoi , the lively capital, famous for French colonial architecture , ancient temples, the Old Quarter , and vibrant Hanoi street food . Visit landmarks like the Temple of Literature , Ho Chi Minh Mausoleum , and Hoan Kiem Lake . Next, cruise Halong Bay , a UNESCO World Heritage Site , with emerald waters, limestone islands, hidden caves, and floating villages. Finally, explore Ninh Binh , known as “ Ha Long Bay on land ,” featuring dramatic limestone peaks, scenic rivers, Tam Coc , and ancient temples in Hoa Lu , offering unforgettable cultural and natural experiences`,
    itinerary:   `Day 1:   Hanoi Arrival
Welcome to Hanoi, the cultural heart of Vietnam. Upon arrival at Noi Bai International Airport, the Asia Eyes Travel team will warmly welcome you and transfer you to a 5-star luxury hotel in the city center of Hanoi. After check-in, you will have time to rest and recover after your journey.
In the late afternoon, we will take you for a relaxing spa and massage experience, followed by a welcome dinner introducing you to authentic Vietnamese cuisine in a comfortable and elegant setting.
Overnight in Hanoi.
Inclusions: Private airport transfer, accommodation, English-speaking guide
Exclusions: Meals not mentioned, early check-in

Day 2:  Hanoi – Ninh Binh – Overnight Train to Sapa
7:45 – 8:00 AM: Our guide and driver will meet you at your hotel and start 100kms, your journey through verdant landscape of country side.
10:00 AM: Arriving Glimmering Bai Dinh pagoda complexes, the largest pagoda, not only in Vietnam but also in Southeast of Asia. Scenically set on the foot hill of Dinh Mountain surrounded by amazing views of the exquisite river valley below and dotted and the limestone karsts dotted around which will take your breath away.
12:00 PM: Having lunch at local restaurant.
13:30 PM: Leaving for the Trang An Grottoes, an out-standing natural beauty of majestic limestone massif at 20 square kilometer rise dramatically out from rice paddy fields. Deep into the linked chains of towering mountain are pristine places of mystical valleys, numerous fresh water ponds, and jungle.
17:15 PM: Returning to your bus and then come back to Hanoi.
21:00 PM: Our tour guide will pick you up at the hotel and transfer to train station for a night train to Sapa.
Note: This morning, you will check out and leave your luggest at hotel, you will take it back after trip to Ninh Binh to Sapa or you can leave your luggest at hotel if you dont want to take a big luggest.
Includes: Accommodation with breakfast, a small-group tour to Ninh Binh, a shared cabin on the overnight train, entrance fees, and lunch.
Excludes: Dinner and personal expenses.

Day 3:  Sapa Sightseeing (Lao Chai, Ta Van & Cat Cat Villages)
06:00 AM: Arrive at Lao Cai Railway Station, where our shuttle bus will meet you and transfer you to Sapa (approximately 38 km).
Enjoy breakfast at the hotel.
09:00 AM: Meet your guide and driver for a visit to Lao Chai and Ta Van villages, home to the H'Mong and Dzay ethnic minorities. This excursion offers a fascinating insight into the daily life, traditional customs, and stunning terraced rice fields of the local communities.
12:30 PM: Return to Sapa town for lunch at a local restaurant.
In the afternoon, continue your exploration with a visit to Cat Cat Village, a picturesque H'Mong village nestled in the Muong Hoa Valley. Stroll through the village, admire traditional wooden houses, learn about local handicrafts, and enjoy the beautiful mountain scenery and the picturesque Cat Cat Waterfall.
Return to your hotel and enjoy the rest of the evening at leisure.
Overnight in Sapa
Accommodation:
4-star hotel: Bamboo Sapa Hotel or similar
4-star hotel: Bamboo Sapa Hotel or similar
5-star hotel: Silk Path Grand Sapa Resort & Spa or similar
5-star hotel: Silk Path Grand Sapa Resort & Spa or similar
Meals: Breakfast and Lunch

Day 4:  Sapa – Hanoi by Luxury Minivan
Enjoy a free morning at leisure in Sapa. You may relax at the hotel, explore the town on your own, visit the local market, or simply enjoy the beautiful mountain scenery.
02:00 PM: Our driver will pick you up from your hotel and transfer you back to Hanoi by limousine bus.
07:00 PM - 7:30 PM: Arrive in Hanoi and check in to your hotel.
The remainder of the evening is free for you to explore Hanoi's Old Quarter, sample local street food, or enjoy the city's vibrant atmosphere at your own pace.
Accommodation:
4-star hotels: Tirant hotel or similar hotels
5-star hotels: De l'Opera Hanoi - MGallery similar hotels
Meals: Breakfast

Day 5:  Hanoi – Halong Bay – Overnight on Cruise
7:45 – 8:00 AM : Our driver will pick you up and transfer you to Halong Bay.
11:45 AM: Arrive in Halong, you are welcomed by our crew and boarding to check in and have lunch while cruising to see the beauty of Halong Bay and Lan Ha Bay.
15:30 PM: You will join some cruise’s activities, such as: kayaking, swimming, cooking class…
Enjoy sunset party on boat is an ideal time for photography enthusiasts to capture the stunning moment of sunset.
19:00 PM: Enjoy a romantic dinner on cruise.
Halong Bay and Lan Ha Bay Cruises
4-star cruises in Lan Ha Bay Sena cruises or similar cruises 5-star cruises in Halong Bay - Mon Cheri cruises
4-star cruises in Lan Ha Bay Sena cruises or similar cruises
5-star cruises in Halong Bay - Mon Cheri cruises
Meals: Breakfast, lunch and dinner

Day 6:  Halong Bay – Hanoi Departure
6:30 AM -7:30 AM: Breakfast is served on boat.
After breakfast, we will join cruise’s activities as visiting the cave in Cat Ba Island and having lunch.
11:40 AM: Disembark and move back the port and the driver will take you to Hanoi airport for the flight to next destination.
Note: if you do not stay in Hanoi on this day. You should book flight tickets to other destination from 5:00 PM to make sure you are on time for the flight.
Accommodation: N/A
Meals: Breakfast, Lunch
On behalf of Asia Eyes Travel, I am Thuc Nguyen. I would like to sincerely thank you for choosing us and hope to welcome you again on your next journey!`,
    duration:    "6 Days/ 5 Nights",
    price:       576,
    categoryIds: ["1"],
    cityIds:     ["2", "3", "4", "1"],
    featuredTour: false,
    onSale:       true,
    saleDiscountPercentage: 15,
  },
  {
    id:          "43",
    title:       "Explore Vietnam’s Hidden Gems 15 Days",
    imageUrl:    "https://asiaeyestravel.com/uploads/source/blog/quangbinh/song-chay-game-thuyen.jpg",
    description: `Discover Vietnam’s hidden gems on this 15-day journey blending culture, history, and nature . Start in Hanoi , then cruise through Ha Long Bay . Continue to Phong Nha – Ke Bang National Park to explore Paradise Cave and Dark Cave . Visit imperial Hue , then charming Hoi An . End in Ho Chi Minh City , exploring vibrant streets before a scenic trip to the Mekong Delta . This itinerary offers a perfect balance of adventure , relaxation , and authentic Vietnam experiences .`,
    itinerary:   `Day 1:  Hanoi arrival
Welcome to Vietnam ! Upon your arrival at Noi Bai International Airport , our friendly Asia Eyes Travel guide and driver will be waiting to greet you and transfer you comfortably to your hotel in Hanoi .
After a long flight, take your time to relax and settle in, enjoy the city at your own pace, and unwind in comfort.
Overnight in Hanoi .
Includes: Private transfer, accommodation, tour guide Excludes: Early check-in

Day 2: Hanoi Scooter Tour: Explore and Experience Like a Local
9:00 AM: Your exciting Hanoi Scooter Tour begins as our friendly drivers pick you up from your hotel. Get ready to explore the city and experience its unique charm like a true local!
Egg Coffee Experience: Kick off the tour at a renowned coffee shop to savor Hanoi’s signature egg coffee, a delightful tradition not to be missed. Hanoi Opera House: Visit the iconic Opera House, built in 1911, for a quick photo session to capture memorable moments of your trip. Local Markets: Immerse yourself in Hanoi’s vibrant markets, where locals shop for daily essentials, offering a glimpse into everyday life. Hidden Alleys and Urban Life: Ride through narrow alleys to uncover old houses and the authentic lifestyle of Hanoi’s urban residents—hidden gems often overlooked by tourists. Key Highlights: Discover Hanoi’s must-see landmarks, including: Train Street: A bustling street where trains pass just inches away from homes. Ho Chi Minh Mausoleum (exterior): Admire this iconic site from the outside. Huu Tiep Lake (B-52): See remnants of a war-era B-52 bomber submerged in this peaceful lake. Long Bien Bridge: Explore this historic bridge designed by the French Daydé & Pillé company, which also built the Eiffel Tower. A symbol of resilience, it stands as a witness to Vietnam’s wars for independence. End of Tour: The tour concludes with a return to your hotel, leaving you with unforgettable memories of Hanoi’s history, culture, and local lifestyle. Important Notes: The tour does not include entry to the Ho Chi Minh Mausoleum to make the most of your time. We recommend visiting it separately for a deeper experience. Itinerary may be adjusted based on weather and traffic conditions to ensure a safe and enjoyable experience. Join us for an unforgettable journey through Hanoi’s hidden gems and iconic sights!
Includes: Accommodation with breakfast, scooter tour, lunch and drinks Excludes: Lunch, Dinner and optinal tours

Day 3: Halong Bay & Lan Ha Bay Cruise Itinerary
8:00 AM: Start your day with a pick-up from your location and transfer to Halong Bay. Relax and enjoy the scenic drive as you head toward this UNESCO World Heritage Site.
11:45 AM: Upon arrival in Halong, our friendly crew will welcome you aboard. Settle into your cabin and enjoy a delicious lunch as the cruise begins its journey through the breathtaking landscapes of Halong Bay and Lan Ha Bay .
3:30 PM: Participate in exciting onboard activities such as kayaking through emerald waters, swimming in pristine bays, or joining a fun cooking class to learn about Vietnamese cuisine.
Sunset Party: As the day winds down, enjoy a sunset party on the deck. This is the perfect time for photography lovers to capture the magical hues of the setting sun over the bay.
7:00 PM: Indulge in a romantic dinner aboard the cruise, savoring exquisite dishes while surrounded by the tranquil beauty of the bay.
Overnight on Cruise: Drift off to sleep in your comfortable cabin, lulled by the gentle waves of Halong Bay. Wake up refreshed and ready for another day of adventure!
Includes: Accommodation with breakfast, 2 Days 1 Nighs on Luxury Mon Cheri Cruise Excludes: Drinks & Personal Expenses

Day 4:  Morning Halong Bay Activities and Return to Hanoi
6:30-7:30 AM : Start your day with a delightful breakfast served onboard, enjoying the serene morning views of Halong Bay.
After Breakfast : Participate in the cruise's morning activities, immersing yourself in the beauty of the bay. Relish a delicious lunch as the cruise concludes its journey.
11:40 AM : Disembark at the port and begin your transfer back to Hanoi.
2:30 PM : Arrive in Hanoi, where you have free time to explore the city at your own pace.
Overnight in Hanoi : Rest and recharge in your Hanoi accommodation, ready for the next adventure.
Includes: Accommodation with breakfast, luxury minivan transfer and lunch Excludes: Dinner, drinks and personal expenses

Day 5: Morning Transfer to Dong Hoi and Phong Nha Cave Exploration
Start your day with a transfer to the airport for a short flight to Dong Hoi . Upon arrival at Dong Hoi Airport , our team from Asia Eyes Travel will warmly welcome you and transfer you to your hotel. After check-in, get ready to explore the stunning Phong Nha Cave , part of a UNESCO World Heritage Site and one of Vietnam’s most impressive natural wonders.
In the afternoon, enjoy free time to discover the scenic beauty of Phong Nha at your own pace.
Includes: Accommodation with breakfast, private tour with lunch, entance fees and Enlish speaking tour guide.
Excludes: Dinner, drinks, and personal expenses

Day 6:  Phong Nha - Ke Bang National Park
08:30 AM Begin your day with a visit to Thien Duong (Paradise) Cave , the longest cave in Vietnam. Discovered in 2005 by the British Cave Research Association, this natural wonder is famous for its stunning limestone formations and breathtaking scenery.
After exploring the cave, enjoy a local lunch before returning to your hotel.
Overnight in Phong Nha , where you can relax and recharge in the peaceful natural surroundings of this beautiful destination.
Includes: Accommodation with breakfast, private tour with lunch, entance fees and Enlish speaking tour guide.
Excludes: Dinner, drinks, and personal expenses.

Day 7:   Journey from Dong Hoi to Hue via the DMZ
8:30 AM : Depart Dong Hoi for the Vietnam Demilitarized Zone (DMZ) in Quang Tri Province (130km, ~2.5-hour drive). Visit the Ben Hai River and Freedom Bridge (Hien Luong Bridge) , marking the historic dividing line between North and South Vietnam from 1954 to 1976.
Explore the Vinh Moc Tunnels , an extraordinary underground network built in 1965–66 to shelter villagers from heavy bombing. Visit the on-site museum for context, and hear firsthand stories from a Vietnamese veteran.
Lunch : Enjoy a meal at a local restaurant.
Afternoon : Continue to the Quang Tri Citadel , a historical 19th-century fort and significant site of the 1972 Battle of Quang Tri during the Vietnam War.
Transfer to Hue City.
Overnight in Hue : Relax and prepare for the next day’s exploration.
Includes: Accommodation with breakfast, private tour with lunch, entance fees and Enlish speaking tour guide.
Excludes: Dinner, drinks, and personal expenses

Day 8:  Hue City Tour and Scenic Heritage Train to Da Nang
Discover the rich history of Hue with visits to the Imperial Citadel , and the royal tombs of Minh Mang and Khai Dinh , along with ancient pagodas. After the city tour, at 2:00 PM , continue your journey to Hoi An via the scenic Hai Van Pass by heritage train , enjoying breathtaking coastal views along the way. Arrive in Hoi An , a charming UNESCO-listed ancient town , and check in to your hotel.
Inclusions: Accommodation with breakfast, private transfer, train ticket and tour guide. Exclusions: Lunch, dinner, drinks and personal expenses.

Day 9:  Hoi An Jeep Tour: A Journey Through Countryside Traditions
8:00 AM: Our driver will pick you up from your hotel to begin your exciting Hoi An Jeep Tour.
Start with a visit to a local farm, where you’ll learn about the cultivation of rice, vegetables, and cereals while experiencing the daily routines of local farmers. Discover traditional rural occupations, such as weaving, rice-wine making, and woodcarving, along with newer industries like bird’s nest farming and aquaculture.
Next, enjoy a delicious home-cooked meal at a local family’s home , offering a unique glimpse into the lives of middle-class Vietnamese families.
Reflect on your day’s experiences and the new friendships formed as you conclude your countryside adventure.
Inclusions: Accommodation with breakfast, private Jeep car , lunch, and English-speaking guide .
Exclusions: Dinner, drinks, and personal expenses.

Day 10 to Day 11: Hoi An – Free Days
During your free days in Hoi An, enjoy the freedom to explore this charming town at your own pace. Wander through its cobbled streets, visit local art galleries, or rent a bike to cycle through picturesque rice paddies to Cua Dai Beach .
Explore the town’s bustling markets and preserved Chinese shophouses , where you can shop for paintings, ceramics, and colorful cloth lanterns. If you're in the mood for something new, visit one of the many skilled tailors to have a custom piece made just for you.
Hoi An is also famous for its delicious local cuisine. Be sure to savor a meal at a riverside restaurant or take part in a cooking class to learn how to prepare traditional dishes.
Inclusions: Accommodation with breakfast.
Exclusions: Meals and personal expenses.

Day 12: Hoi An – Flight to Ho Chi Minh City
Today, you will take a short flight to Ho Chi Minh City , formerly known as Saigon . This vibrant city, rich in history, is considered the heart of Vietnam's commerce and culture.
Upon arrival at Tan Son Nhat Airport, Asia Eyes Travel team will greet you and transfer you to your hotel. After check-in, enjoy a delicious lunch at a local restaurant.
In the afternoon, visit key landmarks, including the Reunification Palace , Notre Dame Cathedral , and the Opera House. Then, head to the War Remnants Museum to learn about the powerful and poignant stories of the Vietnam/American War.
Overnight in Ho Chi Minh City: Relax and enjoy the rest of your evening in this dynamic city.
Inclusions: Accommodation with breakfast. lunch, private Chi Minh City tour, entrance fees, flight tickets.
Exclusions: Lunch, dinner and personal expenses.

Day 13:  Mekong Delta Day Trip
08:00 AM: After being picked up from your hotel, begin your journey to the Mekong Delta , passing beautiful rice fields and peaceful countryside landscapes.
Upon arrival in My Tho , board a boat for a relaxing cruise along the Mekong River , enjoying fresh air and views of traditional stilt houses along the riverbanks.
Discover the local lifestyle, visit small handicraft workshops , and experience a peaceful sampan boat ride through palm-lined canals. This Mekong Delta Day Trip offers an authentic glimpse into river life and the natural charm of Southern Vietnam.
Return to Ho Chi Minh City in the late afternoon for a relaxing evening.
Includes: Acomodation with breakfast, private tour with lunch, boat and English speaking tour guide Excludes: Dinner and personal expenses

Day 14:  Free Day in Ho Chi Minh City
Enjoy a full day to explore the vibrant city at your own pace, whether relaxing, sightseeing, or enjoying some shopping.
Optional Tour: For those interested in history, you may join a visit to the Cu Chi Tunnels , a remarkable site that offers insight into the Vietnam War and the incredible underground network used during the conflict. This experience provides a deeper understanding of Vietnam’s history and resilience.
Includes: Acomodation with breakfast Excludes: Dinner and personal expenses

Day 15:  Ho Chi Minh City – Departure Day
Enjoy your final morning in Vietnam. Our team from Asia Eyes Travel will provide a comfortable private transfer to Tan Son Nhat International Airport for your departure flight. We sincerely hope this journey has created unforgettable memories, meaningful experiences, and a deeper appreciation of Vietnam’s rich culture and natural beauty.
Whether this is your first visit or a return to rediscover the charm of Vietnam, Asia Eyes Travel is always delighted to accompany you and make every moment of your journey truly special.
Includes: Breakfast and private airport transfer to aiport. Excludes: English-speaking tour guide Note: Late check-out available upon request
Thank you for traveling with Asia Eyes Travel . We look forward to welcoming you again in the near future. If you wish to continue exploring Southeast Asia, you can also discover our Cambodia tours and Thailand tours on our website.`,
    duration:    "15 Days/ 14 Nights",
    price:       1680,
    categoryIds: ["1", "7"],
    cityIds:     ["2", "1", "16", "13", "12", "21", "20"],
    featuredTour: false,
    onSale:       true,
    saleDiscountPercentage: 15,
  },
  {
    id:          "44",
    title:       "Ho Chi Minh Half Day Tour – Culture & History Journey",
    imageUrl:    "https://asiaeyestravel.com/uploads/source/nhung/ho-chi-minh-city-12/am-sgn.webp",
    description: `Experience the best of Ho Chi Minh City Half Day Tour in a premium small group of up to 12 travelers. Visit iconic landmarks like Independence Palace , Notre Dame Cathedral , and the War Remnants Museum . Explore vibrant Chinatown ( Cho Lon) and the historic Thien Hau Pagoda . Choose the afternoon option to enjoy a scenic Saigon River Water Bus ride, offering stunning skyline views and a perfect cultural insight into the city.`,
    itinerary:   ``,
    duration:    "Half Day",
    price:       35,
    categoryIds: ["9"],
    cityIds:     ["20"],
    featuredTour: false,
    onSale:       true,
    saleDiscountPercentage: 15,
  },
  {
    id:          "45",
    title:       "Romantic Vietnam 15 Days for Couple",
    imageUrl:    "https://asiaeyestravel.com/uploads/source/tours/tourphotos/honeymoon-tours.jpg",
    description: `Experience the magic of Vietnam with our 15-day honeymoon tour , perfect for romance, culture, and stunning landscapes. Explore Hanoi’s French colonial architecture and lively Old Quarter, cruise the emerald waters of Ha Long Bay on a luxury overnight cruise , and enjoy scenic rivers and limestone mountains in Ninh Binh . Trek terraced rice fields and ethnic villages in Sapa, discover the imperial history of Hue, and wander the lantern-lit streets of Hoi An. Our Vietnam honeymoon tours with Asia Eyes Travel combine culture, adventure, luxury, and romance to create unforgettable memories for couples.`,
    itinerary:   `Day 1: Welcome to Hanoi – Discover the Capital
Whenever you arrive at Noi Bai Airport, our Asia Eyes Travel tour guide and driver will warmly welcome you and transfer you safely and comfortably to your hotel.
After check-in, you will have free time to explore Hanoi, immersing yourself in the vibrant atmosphere of this thousand-year-old capital. To enhance your experience, we have arranged a one-hour cyclo tour at 5:30 PM, taking you on a scenic ride through Hanoi’s Old Quarter. Sitting in a traditional cyclo, you will pass through tree-lined streets, admire ancient architectural landmarks, and experience the unique blend of tradition and modernity that defines Hanoi.
After this delightful tour, you will have free time to discover the Old Quarter at night, enjoy Hanoi’s famous street food, and soak in the lively, bustling ambiance of the city.
Accommodation:
5-star hotels in Hanoi: De l'Opera Hanoi - MGallery similar hotels
Meals: N/A

Day 2: Explore the Hidden & Iconic Hanoi by Jeep
08:00 AM – Your adventure through Hanoi begins as our tour guide and driver pick you up for an exciting Jeep tour. Buckle up as we navigate through a maze of alleyways that only locals truly know, giving you a rare glimpse into authentic Hanoi life . Along the way, you’ll meet local people and hear untold stories about the city’s hidden gems.
Cruising along the tree-lined boulevards of this former Indochinese capital, you’ll admire the distinct French colonial architecture , passing by the embassy district, Hanoi Opera House , and the iconic Long Bien Bridge —each landmark holding a fascinating piece of history.
Next, the Jeep will take you to the vibrant West Lake, the largest lake in Hanoi, often referred to as the city's “natural air conditioner.” Surrounding the lake are numerous spiritual sites steeped in legend, thanks to its unique Feng Shui location. Our expert guide will unravel the hidden charm of these sacred places, offering insights into Hanoi’s deep-rooted traditions.
12:00 PM – The tour concludes, leaving you with unforgettable memories of both old and modern Hanoi.
Accommodation:
5-star hotels in Hanoi: De l'Opera Hanoi - MGallery similar hotels
Meals: Breakfast and lunch

Day 3: Discover Hanoi’s Old Quarter at Your Own Pace
Today, you have a free day to explore Hanoi’s Old Quarter at your leisure. Stroll through the bustling streets, where each corner tells a story of the city's rich history and vibrant culture.
Take your time to admire the centuries-old architecture, visit traditional markets, and browse through countless shops selling silk, handicrafts, and souvenirs. Don't miss the chance to try authentic Vietnamese street food, such as P ho , B un Cha, Banh Mi , and egg coffee, all of which capture the essence of Hanoi’s culinary heritage.
If you’re interested in history, explore famous landmarks like Hoan Kiem Lake, Ngoc Son Temple, or Dong Xuan Market. In the evening, soak in the lively atmosphere by watching a water puppet show or simply enjoying a cup of coffee at a charming café.
Enjoy your free day in Hanoi, embracing its unique charm and energy at your own pace!
Accommodation:
5-star hotels in Hanoi: De l'Opera Hanoi - MGallery similar hotels
Meals: Breakfast

Day 4: Discover the Timeless Beauty of Ninh Binh
08:00 AM – Our driver and tour guide will pick you up from your hotel as we set off on a scenic journey to Ninh Binh province (110 km from Hanoi), a land rich in history and breathtaking landscapes.
11:00 AM – Explore the ancient capital of Hoa Lu , home to the Dinh and Le King Temples , which date back to the 17th century. Learn about Vietnam’s imperial past while admiring the stunning architecture nestled among dramatic limestone mountains.
12:00 PM – Savor a delicious local lunch, featuring the authentic flavors of Ninh Binh cuisine.
01:30 PM – Board a traditional sampan boat for a mesmerizing journey through Trang An , a UNESCO -listed landscape known for its serene waterways, towering limestone mountains, and mysterious caves. As you drift along the winding river, you’ll pass through hidden grottoes, lush valleys, and sacred temples, immersing yourself in nature’s untouched beauty—an unforgettable experience for photography enthusiasts.
03:30 PM – Enjoy a leisurely cycling trip along quiet village roads , passing charming rural landscapes , serene waterways, and towering limestone formations, offering a glimpse into local life.
04:00 PM – Return to the car and transfer to your hotel in Ninh Binh, where you will spend the night.
Accommodation:
5-star hotels: Emeralda Resort Ninh Binh
Meals: Breakfast and lunch

Day 5: Journey to Halong Bay
08:00 AM – Our driver will pick you up from your hotel and begin the scenic drive to Halong Bay, where a breathtaking seascape of limestone karsts and emerald waters awaits.
11:45 AM – Upon arrival in Halong, you will be warmly welcomed by our cruise team. Step aboard, check in, and indulge in a delicious lunch as the cruise sets sail, gliding through the stunning landscapes of Halong Bay and Lan Ha Bay .
03:30 PM – The afternoon is yours to enjoy a variety of exciting activities. Paddle through hidden lagoons on a kayak, take a refreshing swim in crystal-clear waters, or join a cooking class to learn the secrets of Vietnamese cuisine.
As the sun begins to set, unwind with a sunset party on deck, the perfect opportunity for photography lovers to capture the bay in its most magical light.
07:00 PM – Savor a romantic dinner on board, surrounded by the tranquil beauty of Halong Bay . Let the gentle waves and starlit sky create an unforgettable dining experience
Halong Bay and Lan Ha Bay Cruises
5-star cruises: Mon Cheri cruise or similar cruises
5-star cruises: Mon Cheri cruise or similar cruises
Meals: Breakfast, lunch and dinner

Day 6: A Scenic Farewell to Halong & Journey to Sapa
06:30 AM – 07:30 AM: Start your morning with a delightful breakfast on board, enjoying the peaceful atmosphere of Halong Bay as the sun rises over the emerald waters. Breathe in the fresh sea air and take in the final breathtaking views of this natural wonder.
After breakfast, immerse yourself in the last onboard activities offered by the cruise—whether it's a light morning excursion or simply unwinding on deck as the cruise makes its way back to shore. A delicious lunch will be served before disembarkation.
11:40 AM: Arrive at the port, where your driver will be waiting to transfer you back to Hanoi . Sit back and relax on the comfortable journey, reflecting on your Halong Bay adventure.
2:30 PM: Arrive in Hanoi, where you will have free time to explore the city's vibrant streets, visit local markets, or indulge in some authentic Vietnamese cuisine for dinner at your own pace.
9:30 PM: Our tour guide and driver will pick you up and transfer you to the Hanoi train station . Get ready for an unforgettable overnight train journey to Sapa .
Train to Sapa: Private cabin
Meals: Breakfast and lunch

Day 7: Explore the Beauty of  villages
06:00 AM – Arrive at Lao Cai Train Station , where our driver will be waiting to transfer you to Sapa (38 km). The scenic drive through misty mountains and lush valleys will give you a first glimpse of the stunning landscapes awaiting you.
Upon arrival, enjoy a hearty breakfast at the hotel to recharge before embarking on an unforgettable Sapa trekking tour.
09:00 AM – Our tour guide and driver will pick you up for a trek to Lao Chai and Ta Van villages, home to the H’Mong and Dzay ethnic minorities. Wander through breathtaking rice terraces, cross wooden bridges, and witness the authentic rural lifestyle of the locals. This trek offers spectacular views of Muong Hoa Valley, making it a paradise for nature lovers and photographers.
12:30 PM – Return to Sapa town for a delicious lunch, where you can relax and soak in the charming atmosphere of this mountain retreat.
In the afternoon, continue the Sapa trekking tour to Ta Phin Village , known for its stunning landscapes and rich cultural heritage. This is the homeland of the Red Dzao and H’Mong people, famous for their traditional herbal baths and intricate embroidery. Stroll through the village, interact with the locals, and admire the serene beauty of the terraced fields and surrounding mountains.
This immersive trekking experience offers a deeper understanding of Sapa’s ethnic cultures while taking you through some of the most picturesque landscapes in Vietnam .
Accommodation:
5-star hotels: Silk Path Grand Sapa Resort & Spa
Meals: Breakfast and lunch

Day 8: Discover the Charm of Cat Cat Village & Explore Sapa
After enjoying breakfast, our tour guide will pick you up for a 3 km trek to Cat Cat Village , one of Sapa’s most famous ethnic villages . Nestled in a picturesque valley, Cat Cat is home to the H’Mong people and is renowned for its stunning waterfall , traditional wooden houses, and vibrant handicrafts . Stroll through the village, capture breathtaking photos, and browse for unique souvenirs such as handmade textiles and silver jewelry for your family and friends.
In the afternoon, you will have free time to explore Sapa’s local market, where you can immerse yourself in the daily life of ethnic communities. If the weather is clear, consider taking the cable car to Fansipan Mountain, the "Roof of Indochina," for a spectacular panoramic view of the surrounding peaks and valleys.
Accommodation:
5-star hotels: Silk Path Grand Sapa Resort & Spa
Meals: Breakfast and lunch

Day 9: Sapa - Hanoi to the Ancient Capital of Hue
08:00 AM – Our luxury Van from Asia Eyes Travel will pick you up from your hotel and transfer you to Hanoi Airport for your flight to Hue , the former imperial capital of Vietnam. Enjoy a smooth and comfortable ride as you prepare for the next leg of your journey.
Upon arrival at Hue Airport , our tour guide and driver from Asia Eyes Travel will be waiting to welcome you. You will then be transferred to your hotel in Hue, where you can check in and relax after a long day trip.
Take the rest of the day to explore the city at your own pace. Stroll along the Perfume River , visit local markets, or enjoy the peaceful ambiance of Hue’s tree-lined streets.
Accommodation: 4★ or 5★ Hotels
Senna Hue Hotel or similar hotels
5-star hotels: Silk Path Grand Hue Hotel or similar hotels
Meals: Breakfast

Day 10:  Hue’s Royal Heritage and Heritage Train Journey to Hoi An
08:00 AM: Your tour guide and driver will pick you up from your hotel and take you to the Perfume River for a leisurely cruise. Admire the tranquil scenery as you visit the iconic Thien Mu Pagoda , a seven-story landmark of Vietnam. Continue to the lush valley where the Nguyen emperors’ grand tombs are located. Explore the Minh Mang Tomb with its serene beauty and the Khai Dinh Tomb , blending Eastern and Western architecture. Enjoy lunch at a traditional Hue garden restaurant, savoring local flavors.
After having lunch, we will transfer you to the train station for the heritage train to Danang. Enjoy scenic views along the way, including the breathtaking Hai Van Pass , where mountains meet the sea and panoramic vistas await for memorable photos.
Upon arrival in Danang , you will be transferred to Hoi An Old Town . Check in at your hotel and unwind, then take some time to explore the lantern-lit streets and riverside charm in the evening.
Overnight in Hoi An, soaking in the town’s magical atmosphere.
Accommodation: 4★ or 5★ Hotels
Hoi An Delicacy Hotel & Spa
Bliss Hoi An Beach Resort & Wellness or similar resort
Meals: Breakfast and lunch

Day 11: Explore Hoi An Countryside on a Jeep Tour – Villages & Local Life
This morning, after breakfast, you will check out of your hotel. After completing the countryside jeep tour, you will be transferred to your beach resort to relax and enjoy some leisure time.
8: 00 AM: Our tour guide and Jeep Car driver will pick you up from your hotel, and together, we’ll set off on an exciting journey through the peaceful countryside of Hoi An.
Your first stop is a local farm, where you’ll gain hands-on experience in rice, vegetable, and cereal crop cultivation, learning the traditional techniques passed down through generations. Get a glimpse into the daily life of local farmers and even try your hand at some farming activities.
Next, explore traditional rural occupations such as weaving, rice-wine making, and woodcarving. You’ll also discover how modern industries like bird’s nest farming and aquaculture are shaping the local economy.
A highlight of the day is a home-cooked meal at a local family's house, where you’ll enjoy authentic Vietnamese dishes and gain insight into the daily lives of middle-class Vietnamese families.
After lunch, we’ll drive back to your hotel, leaving you with unforgettable memories of Hoi An ’s countryside charm.

Day 12,  Day 13 & Day 14:  Free Days
During these free days, relax on Hoi An’s white sand beaches and enjoy your luxury resort. Lounge under the sun, swim in turquoise waters, or stroll along the shore. Try water activities like snorkeling or kayaking, savor local cuisine at beachfront restaurants, and unwind in a serene, luxurious setting for an unforgettable and peaceful escape.

Day 15:  Farewell & See You Again!
Today, enjoy some free time to relax and explore Hoi An at your own pace until our driver picks you up and transfers you to Da Nang Airport for your onward flight. Your journey with us comes to an end, but the memories will last a lifetime.
On behalf of Asia Eyes Travel , I’m Thuc Nguyen. It has been a pleasure to accompany you on this adventure. Thank you for choosing us, and we look forward to welcoming you, your family, and friends back for another unforgettable journey through Vietnam. Safe travels, and see you again soon!
Notes:
If this itinerary is not suitable, or if prices or plans change, we will happily create a new custom tour program for you.
If this itinerary is not suitable, or if prices or plans change, we will happily create a new custom tour program for you.
Should you wish to spend more time in Hoi An or any other destination, we can organize additional accommodation (subject to availability).
Should you wish to spend more time in Hoi An or any other destination, we can organize additional accommodation (subject to availability).`,
    duration:    "15 Days/ 14 Nights",
    price:       1970,
    categoryIds: ["5"],
    cityIds:     ["2", "3", "4", "1", "13", "12"],
    featuredTour: false,
    onSale:       false,
    saleDiscountPercentage: null,
  },
  {
    id:          "46",
    title:       "Vietnam Honeymoon Package 9 Days",
    imageUrl:    "https://asiaeyestravel.com/uploads/source/tours/phu-quoc/vietnam-honeymoon-package-9-days.jpg",
    description: `1. Hanoi, Vietnam
The capital of Vietnam, Hanoi is renowned for its blend of French colonial architecture, ancient temples, the vibrant Old Quarter, and its world-famous street food scene, making it an ideal start to a romantic honeymoon .
Both Ha Long Bay and Lan Ha Bay are UNESCO World Heritage sites, known for their breathtaking limestone islands and peaceful waters. The best way to experience these natural wonders is through an overnight cruise, creating unforgettable memories with your loved one.
3. Ninh Binh
Located about 100 kilometers south of Hanoi , Ninh Binh offers untouched natural beauty, with dramatic limestone mountains, peaceful rivers, and fascinating caves. It's a perfect place to relax and enjoy nature with your partner.
4. Sapa Moutain
In the northwest of Vietnam, Sapa is famous for its spectacular terraced rice fields and vibrant ethnic minority communities. The area offers both cultural exploration and stunning landscapes, making it an ideal spot for a memorable honeymoon.`,
    itinerary:   `Day 1:  Hanoi arrival
Whenever you arrive at Noi Bai Airport, Asia Eyes Travel’s tour guide and driver will warmly welcome you and transfer you to your hotel.
After that, you will have free time to explore Hanoi at your own pace, immersing yourself in the vibrant culture and dynamic rhythm of this thousand-year-old capital.
Includes: Private Airport pick-up, English-speaking tour guide
Excludes: Meals, drinks, personal expenses
Accommodation :
4-star Hotels in Hanoi: Tirant hotel or similar hotels
5-star hotels in Hanoi: De l'Opera Hanoi - MGallery similar hotels

Day 2:  Explore Hanoi by Jeep Car
08:00 AM: The tour guide and driver will come to pick you up will drive through a maze of alleyways known ONLY by locals, make contact with people and get to know the behind-the-scenes stories. The jeep will take you through the green boulevards of Indochina's capital, where you can see the influence of French architecture. The embassy area, Hanoi Opera House, Long Bien Bridge, and other Hanoi landmarks will be passed through. Then you will get to know the new parts of Hanoi Westlake, Hanoi's largest lake, is known as the city's "air conditioner." Due to the lake's unique "Feng shui" location, dozens of spiritual sites have been created all around it. Our knowledgeable tour guide will explain everything and take you around the city.
Zipping around the West Lake, passing through the city's most peaceful areas, with ancient villages nestled around the West Lake, Truc Bach Lake
A frantic Hanoi with thousands of skyscrapers in the city's new areas
We not only take you on an exciting journey through Hanoi traffic, but we also introduce you to traditional Hanoian cuisine. "SPARE US YOUR HUNGRY BELLY," please (vegan and vegetarian options are available).
12:00 p.m: The tour ends.
Includes: Jeep city tour, professional driver, English-speaking tour guide, breakfast, lunch
Excludes: Drinks, personal expenses
Accommodation :
4-star Hotels in Hanoi: Tirant hotel or similar hotels
5-star hotels in Hanoi: De l'Opera Hanoi - MGallery similar hotel

Day 3:  Ninh Binh Discovery – Majestic and Tranquil Beauty
08:00 AM – Our driver and tour guide will pick you up at your hotel and depart for Ninh Binh, a land often referred to as the " Ha Long Bay on land " due to its breathtaking natural scenery. The 2.5-hour drive offers stunning views of vast rice fields and peaceful countryside villages along the way.
11:00 AM – Upon arrival, you will visit Hoa Lu Ancient Capital , a significant historical site in Vietnam. Here, you will explore the Dinh King Temple and Le King Temple, two ancient architectural masterpieces from the 17th century that preserve the rich cultural and historical heritage of the Dinh and Early Le dynasties.
12:00 PM – Enjoy a delicious lunch at a local restaurant, featuring Ninh Binh’s specialties such as mountain goat meat, crispy rice, and other traditional delicacies.
1:30 PM – Continue your journey with a boat trip through the Trang An Landscape Complex , a UNESCO World Heritage Site. As you glide along the emerald-green waters in a traditional sampan, you will marvel at the towering limestone cliffs, mysterious caves, and the serene countryside scenery with rice paddies and tranquil streams. This is a perfect opportunity for photography enthusiasts to capture the breathtaking natural beauty of the region.
3:30 PM – Experience a leisurely cycling trip along scenic rural roads, passing by a network of canals, small traditional villages, and the picturesque landscape of Northern Vietnam’s countryside.
4:00 PM – Conclude your journey as you return to the car and transfer back to your hotel, wrapping up a memorable day exploring the stunning beauty of Ninh Binh.
Includes: Private transfer, English-speaking tour guide, breakfast, lunch, entrance fees , boat trip, cycling activity on requests or join small Ninh Binh Group tour.
Excludes: Dinner, drinks, personal expenses
Accommodation:
4-star Hotels: Hidden Charm Hotel & Resort or Similar
5-star hotels: Nham Village Resort or Similar

Day  4:  Halong Bay Cruise Experience
8:00 AM: Our driver will pick you up and transfer you to Halong Bay.
11:45 AM: Arrive in Halong, you are welcomed by our crew and boarding to check in and have lunch while cruising to see the beauty of Halong Bay and Lan Ha Bay.
15:30 PM: You will join some cruise’s activities, such as: kayaking, swimming, cooking class…
Enjoy sunset party on boat is an ideal time for photography enthusiasts to capture the stunning moment of sunset.
19:00 PM: Enjoy a romantic dinner on cruise.
Includes: Transfer to Halong Bay, overnight cruise, English-speaking cruise guide, entrance fees, breakfast, lunch, dinner
Excludes: Beverages, personal expenses
Accommodation:
4-star cruises: Sena cruise or similar cruises
5-star cruises: Mon Cheri cruise or similar cruises

Day 5:  Morning Cruise & Journey to Sapa by Night train
06:30 AM – 07:30 AM – Start your day with a delightful breakfast on board, enjoying the peaceful morning atmosphere of Ha Long Bay .
After breakfast, take part in the cruise’s activities, offering you more time to immerse yourself in the breathtaking scenery of the bay. Then, savor a delicious lunch before preparing to disembark.
11:40 AM – Check out of the cruise and transfer back to the port, where our driver will be waiting to take you back to Hanoi.
02:30 PM – Arrive in Hanoi, where you will have free time to explore the city at your own pace and enjoy dinner at a local restaurant of your choice before your next adventure.
08:30 PM – Our tour guide and driver will pick you up and transfer you to the train station for your overnight journey to Sapa.
09:30 PM – The overnight train to Sapa departs, offering you a comfortable and scenic ride to your next destination.
Includes: Breakfast, lunch, cruise activities, transfer Halong Bay – Hanoi, private transfer to train station, overnight train to Sapa (4-berth or 2-berth cabin)
Excludes: Dinner, drinks, personal expenses
Accommodation:
4-star train: 4 Berth Cabin
5-star train: 2 Berth Cabin

Day 6:  Sapa - Excursion
06:00 AM – Arrive at Lao Cai train station , where our driver will be waiting to transfer you to Sapa. The 38 km journey offers stunning views of misty mountains and picturesque terraced fields.
Upon arrival in Sapa, enjoy a hearty breakfast at the hotel, preparing for an exciting day of exploration.
09:00 AM – Our driver and tour guide will take you to visit Lao Chai and Ta Van villages , home to the H’Mong and Dzay ethnic minorities. Strolling through these peaceful villages, you will have the opportunity to observe the daily life of the locals, admire the breathtaking terraced rice fields, and learn about the rich traditions and customs of the ethnic communities.
12:30 PM – Return to Sapa town for lunch at a local restaurant, where you can savor authentic regional dishes.
After lunch, continue your journey to Ta Phin village, a beautiful valley inhabited by the Red Dzao and H’Mong ethnic groups. This charming village is known for its spectacular landscapes, rich cultural heritage, and traditional herbal baths of the Red Dzao people . Take your time to explore the village, interact with the locals, and enjoy the serene beauty of the surrounding mountains.
Includes: Transfer Lao Cai – Sapa, English-speaking tour guide, breakfast, lunch
Excludes: Dinner, drinks, personal expenses
Accommodation:
4-star hotels: Bamboo Sapa hotel or similar hotel
5-star hotels: Silk Path Grand Sapa Resort & Spa

Day 7:  Discovering Cat Cat Village
After enjoying breakfast at the hotel, our tour guide will pick you up for a trek to Cat Cat Village , l ocated 3 km from Sapa town. This charming village is home to the H’Mong ethnic people and is famous for its stunning C at Cat Waterfall. As you stroll through the scenic trails, you will have countless opportunities to capture breathtaking photos of the traditional wooden houses , terraced rice fields, and the picturesque waterfall. Additionally, you can explore local handicraft shops and buy unique souvenirs for your family and friends.
In the afternoon, you will have free time to explore Sapa’s local market, where you can discover a variety of handmade textiles, ethnic crafts, and delicious local specialties.
If the weather is clear, you may also choose to take a cable car ride to Fansipan Mountain , the “ Roof of Indochina ”, standing at 3,143 meters above sea level. From the summit, you can admire the breathtaking panoramic views of the Hoang Lien Son mountain range and the cloud-covered valleys below.
Includes: English-speaking tour guide, breakfast, lunch, entrance fee
Excludes: Fansipan cable car ticket (optional), drinks, dinner, personal expenses
Accommodation:
4-star hotels: Bamboo Sapa hotel or similar hotel
5-star hotels: Silk Path Grand Sapa Resort & Spa

Day 8:  Sapa - Hanoi
This morning, you will have free time until the driver arrives to pick you up and transfer you to Hanoi. It’s a great opportunity to relax, enjoy the peaceful morning atmosphere, or take a stroll around the hotel before heading out.
Upon arrival in Hanoi, you will be taken to your hotel for check-in and rest. In the evening, you are free to explore this ancient city. Hanoi at night has its own unique charm, with bustling old streets, famous sidewalk eateries, and cultural landmarks like Hoan Kiem Lake , Ngoc Son Temple, and the pedestrianized area. This is the perfect time to experience the rhythm of the city and discover the captivating beauty of the capital.
Includes: Breakfast, Shared luxury limousine transfer Sapa – Hanoi
Excludes: Lunch, dinner, drinks, personal expenses
Accommodation:
4-star Hotels in Hanoi: Tirant hotel or similar hotels
5-star hotels in Hanoi: De l'Opera Hanoi - MGallery similar hotels

Day 9:  Farewell Vietnam – Until We Meet Again
This morning, you're free until the driver comes to pick you up and transfer you to Hanoi Airport for your next destination.
On behalf of Asia Eyes Travel, I am Thuc Nguyen, and it has been our pleasure to accompany you on this journey. Thank you for choosing us, and we sincerely hope to welcome you and your family again on your next trip!
Includes: Breakfast, Private airport transfer
Excludes: Meals, tour guide, personal expenses
Thank you very much for choosing Asia Eyes Travel Vietnam DMC`,
    duration:    "9 DAYS/ 8 NIGHTS",
    price:       1230,
    categoryIds: ["5"],
    cityIds:     ["2", "3", "4", "1"],
    featuredTour: false,
    onSale:       true,
    saleDiscountPercentage: 15,
  },
  {
    id:          "47",
    title:       "Luxury Honeymoon Trip to Vietnam in 14 Days",
    imageUrl:    "https://asiaeyestravel.com/uploads/source/destinations/vietnam-honeymoon-tours.jpg",
    description: `Hanoi Capital: Hanoi is the capital of Vietnam is famous with French style old buildings, Temple, Old Quarter Area and food.
Ha Long Bay: Halong Bay is UNESCO world heritage site and famous for its fresh and calm water filled with thousands of islands and islets and overnight cruises.
Ninh Binh: Ninh Binh located in the Northern Vietnam (100kms from Hanoi Capital): Unique with wild natural scenery and charming mountains and amazing caves.
Sapa: Sapa is located in the northwest Vietnam, it is famous for colorful and charming of terraces rice fields and ethnic minorities.
Hoi An: Hoian is located in the center of Vietnam, Hoi An is a beautiful, old town with historic architecture, traditional culture and textiles.`,
    itinerary:   `Day 1:  Welcome to Hanoi, Vietnam - A Journey Begins with Asia Eyes Travel
Upon your arrival in Hanoi, our friendly driver and tour guide from Asia Eyes Travel will warmly welcome you at the airport and transfer you to your hotel, ensuring a smooth and comfortable start to your journey.
6:30 PM – Immerse yourself in the charm of Hanoi’s Old Quarter with a one-hour Cyclo tour . As you gently glide through the bustling streets, you'll witness the perfect blend of history, culture, and daily life, passing by centuries-old architecture, vibrant markets, and hidden alleyways filled with local charm.
After the Cyclo tour, a romantic dinner awaits you at a carefully selected restaurant, where you’ll indulge in authentic Vietnamese cuisine, thoughtfully arranged by our Asia Eyes Travel team .
Enjoy your first magical evening in Hanoi, where tradition and modernity come together in perfect harmony.
Accommodation:
4-star Hotels in Hanoi: Tirant hotel or similar hotels
5-star hotels in Hanoi: De l'Opera Hanoi - MGallery similar hotels
Meals: Welcome dinner

Day 2:  Hanoi Fabulous Food and Sights tour by Scooter
09:00 AM: Your friendly driver and experienced tour guide from Asia Eyes Travel will pick you up at your hotel to begin an exciting journey through the heart of Hanoi.
Your first stop is Café Giang, the birthplace of the famous Vietnamese Egg Coffee. Enjoy this rich and creamy specialty in a traditional and historic setting that reflects Hanoi’s unique café culture.
Next, visit the Hanoi Opera House , a stunning French colonial landmark built in 1911. This elegant building is one of the city’s most iconic architectural highlights and a perfect photo stop.
Continue to a local market, where you will experience the vibrant daily life of Hanoi residents. Explore fresh produce, spices, and local street food while observing the city’s authentic atmosphere.
The journey then takes you through hidden alleys and ancient neighborhoods, offering a glimpse into Hanoi’s traditional houses and everyday local life that most visitors rarely see.
We then visit some of Hanoi’s most famous landmarks, including Train Street, where trains pass closely through a narrow residential area, the Ho Chi Minh Mausoleum, a historic site honoring Vietnam’s national leader, and Huu Tiep Lake, home to the preserved B-52 wreckage from the war.
A highlight of the tour is Long Bien Bridge, designed by French engineers behind the Eiffel Tower. This historic bridge has witnessed more than a century of change and stands as a symbol of Hanoi’s resilience.
At the end of the tour, you will return to your hotel with unforgettable memories of your Hanoi experience.
Notes:
Please keep in mind that we do not go inside the Ho Chi Minh Mausoleum on “Hanoi City sights and street food”tour. This attraction requires a lot of time to fully appreciate so we recommend that you visit them on your own so that we can make the most of time you have with us.
The above itinerary is subject to change, based on the day’s weather and traffic conditions.
Accommodation:
4-star Hotels in Hanoi: Tirant hotel or similar hotels
5-star hotels in Hanoi: De l'Opera Hanoi - MGallery similar hotels
Meals: Breakfast and dinner

Day 3:  Explore Bai Dinh Pagoda & Trang An Grottoes  – Sapa by Night Train
7:30 AM – Our guide and driver will meet you at your hotel to begin an unforgettable 110km journey through the picturesque Vietnamese countryside. Along the way, enjoy stunning views of lush rice fields, peaceful villages, and majestic limestone mountains.
10:00 AM – Arrive at the Bai Dinh Pagoda Complex , the largest Buddhist temple in Southeast Asia . Nestled at the foot of Dinh Mountain, this breathtaking site is surrounded by a serene river valley and towering karst formations. Marvel at the grand golden Buddha statues, intricate carvings, and the 500-Arhat Corridor, all while soaking in the spiritual ambiance of this sacred place.
12:00 PM – Enjoy a delicious Vietnamese lunch at a local restaurant, savoring the region’s authentic flavors.
1:30 PM – Depart for T rang An Grottoes, a UNESCO -listed wonder known for its majestic limestone karsts and mystical cave system. Board a traditional sampan boat and glide through a labyrinth of hidden valleys, crystal-clear waterways, and lush greenery, where you can witness unspoiled natural beauty at every turn.
5:15 PM – Return to Hanoi, where you’ll have dinner before boarding the night train to Sapa at 9:30 PM.
Train to Sapa
4-star train: 4 Berth Cabin
5-star train: 2 Berth Cabin
Meals: Breakfast and lunch

Day 4:  Discover the Beauty of Sapa – A Cultural & Scenic Journey
6:00 AM – Arrive at Lao Cai train station, where our driver will be waiting to transfer you to Sapa (a scenic 38km drive). Enjoy the breathtaking mountain landscapes along the way as the morning mist gently lifts, revealing Sapa’s rolling hills and terraced rice fields.
Upon arrival, check in at your hotel and enjoy a hearty breakfast, preparing for an exciting day ahead.
9:00 AM – Meet your tour guide and driver, then embark on a journey to explore the Lao Chai and Ta Van villages. Immerse yourself in the rich traditions and daily life of the H’Mong and Dzay ethnic minorities, known for their colorful attire, warm hospitality, and centuries-old customs. Walk through stunning rice terraces, bamboo forests, and peaceful valleys, making this a must-visit cultural experience in Sapa.
12:30 PM – Return to Sapa town for a delicious local lunch. Afterward, enjoy a leisurely afternoon, where you can relax, explore the town.
Accommodation:
4-star hotels: Bamboo Sapa hotel or similar hotel
5-star hotels: Silk Path Grand Sapa Resort & Spa
Meals: Breakfast and lunch

Day 5:  Explore the Charm of Cat Cat Village & Sapa
After a delightful breakfast, our tour guide will meet you for an exciting 3 km trek to Cat Cat Village , one of Sapa’s most iconic ethnic villages . Tucked away in a scenic valley, this village is home to the H’Mong people and is famous for its majestic waterfall, traditional wooden houses, and intricate handicrafts. Stroll along the stone-paved paths, admire the lush terraced fields, and soak in the serene atmosphere. Don’t forget to capture stunning photos and explore the local workshops , where artisans create beautiful handmade textiles, silver jewelry, and unique souvenirs for you to bring home.
In the afternoon, you’ll have free time to discover Sapa’ s bustling local market, where you can experience the vibrant culture of the ethnic communities. If the weather is favorable, consider an exciting cable car ride up Fansipan Mountain, known as the "Roof of Indochina," for a breathtaking panoramic view of the misty mountain peaks and lush valleys.
Accommodation:
4-star hotels: Bamboo Sapa hotel or similar hotel
5-star hotels: Silk Path Grand Sapa Resort & Spa
Meals: Breakfast and lunch

Day 6:  Journey Back to Hanoi
At 11:30 AM, our shuttle bus will pick you up for a comfortable journey back to Hanoi, passing through scenic countryside landscapes. Along the way, enjoy the views of lush rice fields, small villages, and winding rivers, offering a glimpse into Vietnam’s rural charm.
By 5:00 PM, you will arrive in Hanoi, where you can relax at your hotel or explore the bustling city streets at your own pace.
Accommodation:
4-star Hotels in Hanoi: Tirant hotel or similar hotels
5-star hotels in Hanoi: De l'Opera Hanoi - MGallery similar hotels
Meals: Breakfast

Day 7:  Exploring the Beauty of Halong Bay & Lan Ha Bay
At 8:30 AM, our driver and tour guide will pick you up from your hotel and transfer you to Halong Bay , one of Vietnam’s most breathtaking natural wonders. Enjoy the scenic drive through the countryside, passing charming villages and lush rice fields.
By 11:45 AM, you will arrive at the Halong cruise terminal, where you will be warmly welcomed by the cruise crew. After check-in, embark on a luxurious 5-star cruise, such as Poeny Cruises or Elite of the Seas Cruises . Savor a delicious lunch onboard as the cruise sails through the stunning seascape of Halong Bay and Lan Ha Bay, where towering limestone karsts rise majestically from the emerald waters.
At 3:30 PM, dive into adventure with exciting activities like kayaking through hidden lagoons and swimming in crystal-clear waters, surrounded by breathtaking scenery.
As the day winds down, 5:30 PM marks the start of a sunset party on the deck, the perfect moment to relax, sip a cocktail, and capture the beauty of the golden sky reflecting on the bay.
At 7:00 PM, indulge in a romantic dinner onboard, featuring a variety of Vietnamese and international dishes. Let the tranquil ambiance of the bay enhance your dining experience as you unwind for the evening.
Halong Bay and Lan Ha Bay Cruises
4-star cruises: Poeny Cruises or similar cruises
5-star cruises: Elite of the Seas Cruises or similar cruises
Meals: Breakfast, lunch and dinner

Day 8:  Morning Cruise & Journey to Hoi An
6:30 - 7:30 AM: Begin your day with a hearty breakfast onboard while taking in the breathtaking views of Halong Bay.
7:30 AM: Join the cruise’s morning activities, such as a relaxing Tai Chi session, a short excursion, or simply enjoying the peaceful atmosphere on deck.
9:30 AM: Return to your cabin for check-out, then savor a delightful lunch as the cruise makes its way back to the port.
12:00 PM: Disembark and transfer to the shuttle bus for your journey to Hanoi Airport.
Upon arrival at the airport, board your flight to Da Nang. Once you land, our Asia Eyes Travel tour guide will warmly welcome you and transfer you to Hoi An.
Accommodation:
4-star hotels: Delicacy Hotel or similar hotels
5-star hotels: Royal Hoi An – Gallery or similar hotels
Meals: Breakfast and lunch

Day 9:   Hoian countryside tour jeep car
8:00 AM: Our Vespa Drivers or Jeep car will pick you up and begin to experience Hoian countryside. Today you will visit a local farm, learn about rice, vegetable, and cereal crop cultivation, and experience the daily life of local farmers. Discover traditional occupations in the countryside, such as weaving, rice-wine making, and woodcarving. Learn about newer industries like bird’s nest farming and aquaculture. Head to a local family’s home for a delicious home-cooked meal, providing you with a unique insight into the lives of middle-class Vietnamese people.
Accommodation:
4-star hotels: Delicacy Hotel or similar hotels
5-star hotels: Royal Hoi An – Gallery or similar hotels
Meals: Breakfast and lunch

Day 10/Day 11/Day 12/Day 13:  Enjoy Your Free Days in Hoi An
During your free days in Hoi An , take the opportunity to explore this charming ancient town at your own pace. Wander through the cobbled streets lined with art galleries, preserved Chinese shophouses , and bustling local markets, where you can browse for paintings, ceramics , and vibrant cloth lanterns.
For a more immersive experience, rent a bicycle and ride through the lush rice paddies on your way to Cua Dai Beach, where you can relax by the sea. If you're in the mood for something special, visit one of Hoi An’s renowned tailors and have a custom outfit made just for you.
Hoi An is also a food lover’s paradise, so be sure to indulge in its famous local cuisine at a riverside restaurant. For a hands-on experience, join a cooking class and learn to prepare traditional Vietnamese dishes.
Accommodation:
4-star hotels: Delicacy Hotel or similar hotels
5-star hotels: Royal Hoi An – Gallery or similar hotels
Meals: Breakfast

Day 14:  Farewell & See You Again!
Today, you’ll have some free time to relax and enjoy Hoi An at your own pace until our driver picks you up and transfers you to Da Nang Airport for your onward flight. Your journey with us comes to an end, but the memories will last forever.
On behalf of Asia Eyes Travel , I’m Thuc Nguyen, and it has been our pleasure to accompany you on this adventure. Thank you for choosing us, and we truly hope to welcome you, your family, and your friends back on another unforgettable journey through Vietnam in the future. Safe travels, and see you again soon!
Notes:
If this tour itinerary is NOT suitable for your plan, prices or any changes…. we will recreate the new tour program for you.
If you wish to spend more time in Hoian or any places during the tour, we’ll be happy to organize additional accommodation (subject to availability)
Thank you very much for choosing Asia Eyes Travel DMC Vietnam`,
    duration:    "14 Days/ 13 Nights",
    price:       1845,
    categoryIds: ["1", "3", "5"],
    cityIds:     ["2", "3", "4", "1", "13"],
    featuredTour: false,
    onSale:       false,
    saleDiscountPercentage: null,
  },
  {
    id:          "48",
    title:       "Best Vietnam Beach Holidays in 18 Days",
    imageUrl:    "https://asiaeyestravel.com/uploads/source/blog/hoian/hotel/victoria-hoi-an-beach-sunse.webp",
    description: `An unforgettable Vietnam Beach Holiday in 18 Days , traveling from Hanoi to Ho Chi Minh City . Explore breathtaking landscapes, vibrant cities, and pristine beaches along the coast. This itinerary covers Hanoi , Halong Bay , Ninh Binh , Hue , Hoi An , Nha Trang , and Ho Chi Minh City , blending cultural heritage with tropical relaxation.`,
    itinerary:   `Day 1: Hanoi arrival - Xin Chao Vietnam!
Anytime you arrive in Noi Bai Airport, Asia Eyes Travel’s tour guide and driver will pick you up and transfer you to hotel.
Then you have free time to explore Hanoi by yourself.
Accommodations:
4-star hotels: Tirant Hotel or similar hotels
5-star hotels: Apricot Hotel or similar hotels
Meals: N/A

Day 2: Hanoi Fabulous food and sights tour by scooter ( 4 Hours )
9:00 AM: Our female drivers and tour guide will pick you up at your hotel to start a tour to visit Hanoi city.
Firstly, you will go to a very famous coffee shop to enjoy Egg coffee that is founded in Hanoi, passed down through generations. Next, our drivers will take you to the Hanoi Opera House built in 1911 to take some photos together as a little memory of Hanoi.
After that we take you to local markets to see people selling everyday essentials.
Joining to Paloma Motorbike Tour, we will take you around the small alleys to visit the old houses and daily life of urban people that are very little known by tourists when visiting Hanoi.
Apart from the small alleys, we will take you through the most highlight places such as: Train Street , Ho Chi Minh Mausoleum , Huu Tiep Lake (B52) where vestiges of war are left here.
A must-see place is the historic Long Bien bridge designed by Daydé & Pillé company (French company), the same one that also built the Effel tower in Paris. The bridge has witnessed two fierce resistance wars of the Vietnamese people. They are the war against the US and the French. Let take some more photos here for your memory. Tour ends at your hotel.
Notes:
Please keep in mind that we do not go inside the Ho Chi Minh Mausoleum on “Hanoi City sights and street food”tour. This attraction requires a lot of time to fully appreciate so we recommend that you visit them on your own so that we can make the most of time you have with us.
The above itinerary is subject to change, based on the day’s weather and traffic conditions.
Meals: Breakfast and lunch

Day 3: Hanoi - Ninh Binh
7:30 AM: Our guide and driver will meet you at your hotel start 110kms, your journey through verdant landscape of country side.
10:00 AM: Arriving Glimmering Bai Dinh pagoda complexes, the largest pagoda, not only in Vietnam but also in Southeast of Asia. Scenically set on the foot hill of Dinh Mountain surrounded by amazing views of the exquisite river valley below and dotted and the limestone karsts dotted around which will take your breath away.
12:00 PM: Having lunch at local restaurant.
13:30 PM: Leaving for the Trang An Grottoes, an out-standing natural beauty of majestic limestone massif at 20 square kilometer rise dramatically out from rice paddy fields. Deep into the linked chains of towering mountain are pristine places of mystical valleys, numerous fresh water ponds, and jungle.
17:15 PM: Returning to car and transfer you to Bungalow for overnight in Ninh Binh.
Accommodation:
4-star hotels: Hidden Charm Hotel & Resort or Similar resort
5-star hotels: Emeralda Resort Tam Coc or Similar resorts
Meals: Breakfast and lunch

Day 4: Ninh Binh - Halong Bay
7:30 AM: We will pick you up and transfer to Halong Bay.
11:45 AM: Arrive at Halong, you are welcomed by our crew and boarding to check in and have lunch while cruising to see the beauty of Halong Bay and Lan Ha Bay.
15:30 PM: You will join cruise's activities such as: Kayaking and swimming .
17:30 PM: Enjoy sunset party.
19:00 PM: Enjoy a romantic dinner on cruise and overnight on cruise.
4-star cruises: Sena cruises or similar cruises
5-star cruises: Mon Cheri cruises or similar cruises
Meals: Breakfast, lunch and dinner

Day 5:  Lan Ha Bay - Viet Hai village
6:00 – Start your day with an energizing Tai Chi session and watch the sunrise over the bay. 6:45 – 7:15 – Breakfast is served. 8:00 – 8:30 – Transfer to a day-trip boat and cruise to the serene Lan Ha Bay , or relax on the main cruise if you prefer. 10:30 – 11:00 – Arrive at Viet Hai village . Explore by bicycle or e-cart through tropical rainforest and limestone mountains. Discover local life and traditional bamboo and mud-thatched houses. 12:15 – 13:30 – Return to the boat for lunch , cruising toward the kayaking and swimming spot. 13:30 – Enjoy kayaking in a quiet lagoon or swimming directly from the boat. 16:30 – Return to the main cruise. 19:30 – Dinner is served. 21:00 – 22:00 – Relax on deck, enjoy the nightlife of the bay , and overnight on the cruise.
4-star cruises: Sena cruises or similar cruises
5-star cruises: Mon Cheri cruises or similar cruises
Meals: Breakfast, lunch and dinner

Day 6: Halong Bay - Hanoi  - Hue
6:30 -7:30 AM: Breakfast is served.
7:30 AM: You will join cruise's activities.
9:30 AM: Check-out and then have lunch.
12:00 PM: Disembark and move back the port and get on your car to Hanoi Airport for the fight to Hue City.
Upon arrival Phu Bai airport, you will be picked up and transferred to hotel.
Accommodation:
4-star hotels: White lotus hotel or similar hotels
5-star hotels: Silk Path Grand Hue Hotel or similar hotels
Meals: Breakfast and lunch

Day 7: Hue excursion - Hoi An
8.00AM: Our guide and driver meet you at the hotel and transfer you to the boat landing for a leisure boat trip along the Perfume River to visit the towering Thien Mu Pagoda, one of the most famous Vietnamese landmarks.
We then take a short drive into a lush valley of the river where seven tombs were built for seven Nguyen Emperors. We will visit two of the tombs: Minh Mang tomb and Khai Dinh tomb to help you understand more about Royal’s life and architecture.
12:00 PM: We are going to have lunch and enjoy classic Hue cuisine at a restaurant in a beautiful garden setting.
In the afternoon: Our driver and tour guide will drive you to Hoi An.
On the way, you will stop in Hai Van pass to take photos.
Arrive in Hoi An, check in hotel and relax.
Accommodation:
4-star hotels: Delicacy Hotel or similar hotels
5-star hotels: Royal Hoi An – Gallery or similar hotels
Meals: Breakfast and lunch

Day 8: Hoian countryside tour by vespa or jeep car
7:45 AM: Our Vespa Drivers or Jeep car will pick you up and begin to experience Hoian countryside. Today you will visit a local farm, learn about rice, vegetable, and cereal crop cultivation, and experience the daily life of local farmers. Discover traditional occupations in the countryside, such as weaving, rice-wine making, and woodcarving. Learn about newer industries like bird’s nest farming and aquaculture. Head to a local family’s home for a delicious home-cooked meal, providing you with a unique insight into the lives of middle-class Vietnamese people.
Accommodation:
4-star hotels: Delicacy Hotel or similar hotels
5-star hotels: Royal Hoi An – Gallery or similar hotels
Meals: Breakfast and lunch

Day 9/ Day 10/ Day 11: Hoian - Free days
These free days, you are free to explore Hoi An. Maybe browse the cobbled streets and art galleries or hire a bike and cycle through rice paddies out to Cua Dai Beach. Maybe browse for paintings, ceramics and colorful lanterns in the town’s markets and preserved Chinese shophouses. If you’re craving a new look, you could pay a visit to one of the hundreds of tailors and get something special made. Hoi An is also known for its delicious regional food, so be sure to enjoy a meal at a riverside restaurant or perhaps partake in a cooking class.
Accommodation:
4-star hotels: Delicacy Hotel or similar hotels
5-star hotels: Royal Hoi An – Gallery or similar hotels
Meals: Breakfast

Day 12: Hoian - Nha Trang
Today you are free until our driver pick you up and transfer you to airport for your flight to Nha Trang.
Arrive in Nha Trang airport, we will pick you up and transfer you to hotel for relaxing.
Accommodation:
4-star hotels: Liberty Central Nha Trang
5-star hotels: Boma Resort Nha Trang
Meals: Breakfast

Day 13/ Day 14/ Day 15: Nha Trang - Free Days
During these free days, you are free to relax and enjoy your time at your own pace. Unwind on the pristine beaches, soak up the sun, or take a refreshing swim in the crystal-clear waters. For those seeking adventure, consider a boat trip to explore nearby islands, go snorkeling to discover vibrant marine life, or try other exciting water activities. Whether you choose to indulge in local cuisine, visit charming coastal villages, or simply relax with a stunning ocean view, these days are yours to enjoy.
Accommodation:
4-star hotels: Liberty Central Nha Trang
5-star hotels: Boma Resort Nha Trang
Meals: Breakfast

Day 16: Nha Trang - Ho Chi Minh City
Today, you have free time to relax and explore at your own pace before our driver picks you up and transfers you to the airport for your flight to Ho Chi Minh City. Take this opportunity to enjoy a peaceful morning, grab a coffee at a local café, or take a last stroll around the area.
Upon arrival at Tan Son Nhat Airport, our tour guide and driver will be waiting to welcome you. From there, you will be transferred to your hotel, where you can unwind and get ready for the next part of your journey. Depending on your arrival time, you may wish to explore the vibrant streets of Ho Chi Minh City, visit a nearby market, or simply relax after your flight.
Accommodation:
4-star hotels: Saigon Prince Hotel or similar hotels
5-star hotels: Caravelle Saigon or similar hotels
Meals: Breakfast

Day 17: Ho Chi Minh - Mekong Delta
8:00AM: You will be picked up at your hotel in the morning, and we will bring you down to the Mekong Delta. On the way, you will get a chance to view the beautiful scenery as we go past the stunning rice fields.
Upon arrival at My Tho, take a relaxing boat trip on the Mekong River to enjoy the fresh air and the charming stilt house at the riverbank and then, you visit the authentic life of the locals and challenge yourself to bargaining at cottage handicraft shops. Take an adventurous sampan ride in palm shaded canals.
Accommodation:
4-star hotels: Saigon Prince Hotel or similar hotels
5-star hotels: Caravelle Saigon or similar hotels
Meals: Breakfast and lunch

Day 18 Ho Chi Minh - Departure
Today, you have free time to relax or explore until our driver picks you up and transfers you to the airport for your flight to your next destination.
On behalf of Asia Eyes Travel , I am Thuc Nguyen, and I sincerely thank you for choosing us for your journey. It has been our pleasure to accompany you, and we hope you had a memorable experience. Wishing you a smooth and pleasant trip ahead, and we look forward to welcoming you again on your next adventure.
Thank you very much for choosing Asia Eyes Travel DMC Vietnam!`,
    duration:    "18 DAYS/ 17 NIGHTS",
    price:       2350,
    categoryIds: ["4"],
    cityIds:     ["2", "3", "1", "13", "12", "28", "20"],
    featuredTour: false,
    onSale:       false,
    saleDiscountPercentage: null,
  },
  {
    id:          "49",
    title:       "Vietnam Luxury Beach Holiday 12 Days",
    imageUrl:    "https://asiaeyestravel.com/uploads/source/tours/phu-quoc/luxury-beach-holiday-12-days.jpg",
    description: `If you're planning a Luxury Beach Holiday 12 Days, these top destinations offer a diverse experience of culture, history, nature, and luxury. From vibrant cities to serene landscapes, these spots will provide unforgettable memories, perfect for a honeymoon trip, family trip, or solo adventure. Discover some of the Best Vacations in Vietnam through this itinerary and enjoy Vietnam Beach Holidays that rival the world’s best.
1. Hanoi Capital:
Start your journey in Hanoi , Vietnam’s vibrant capital, where French colonial charm meets traditional culture. Explore the Old Quarter with its narrow streets and markets, visit the iconic Hoan Kiem Lake and the historic Temple of Literature , and admire the colonial architecture of the French Quarter . Hanoi offers a perfect blend of culture, history, and authentic cuisine, making it an essential part of any Luxury Vietnam Tour . With top-tier hotels, fine dining, and art galleries, Hanoi is an ideal starting point for your adventure.
2. Ha Long Bay - Overnight on Luxury Cruises:
No trip to Vietnam is complete without visiting Ha Long Bay, a UNESCO World Heritage site famous for its emerald waters and thousands of limestone islands. Ideal for both relaxation and adventure, Halong Bay offers overnight cruises where you can enjoy luxurious cabins and dining under the stars. Cruises Included dactivities like kayaking, snorkeling, and exploring hidden caves and beaches, making it the perfect destination for both relaxation and adventure during your Vietnam Beach Holiday.
3. Ninh Binh
Next, head to Ninh Binh, located about 100 km south of Hanoi. Often referred to as “Halong Bay on land,” Ninh Binh is a place of stunning natural beauty, where you’ll find rolling mountains, river valleys, and unique caves to explore. Take a boat ride along the Tam Coc River to witness the dramatic limestone formations that rise out of the water, passing rice paddies and charming rural villages along the way. The Trang An Landscape Complex, also a UNESCO site, offers scenic hikes, ancient temples, and panoramic views that showcase the natural splendor of Northern Vietnam. A visit to Ninh Binh adds an immersive experience of nature and history to any Luxury Vietnam Tour .
4. Phu Quoc Island - Romantic Beaches
For those seeking the best beaches in Vietnam for a honeymoon or a beautiful island getaway, Phu Quoc Island is unbeatable. Located off Vietnam's southern coast, Phu Quoc is known for its pristine white sands, crystal-clear waters, and lush tropical landscapes. Phu Quoc Beach , one of the island’s top spots, is perfect for relaxation, water sports, and breathtaking sunset views. Honeymooners will appreciate the privacy of secluded beach resorts, while families can enjoy lively night markets and beachside activities. Whether exploring coral reefs or savoring fresh seafood, Phu Quoc is a must-visit for any Vietnam Beach Holiday itinerary .
5. Ho Chi Minh City (Saigon)
End your tour in Ho Chi Minh City , Vietnam’s largest and most cosmopolitan city, once known as the "Pearl of the Far East." With its vibrant energy, the city seamlessly combines rich history with modern attractions. Visit landmarks like the Notre-Dame Cathedral Basilica of Saigon, the historic Reunification Palace, and the lively Ben Thanh Market. Ho Chi Minh City also boasts a dynamic nightlife and top-tier restaurants, making it a perfect destination for luxury travelers. For those seeking a mix of history, shopping, and fine dining, Saigon is a must-see for the best vacations in Vietnam.`,
    itinerary:   `Day 1: Hanoi Arrival
No matter what time you arrive at Noi Bai Airport, Asia Eyes Travel’s tour guide and driver will warmly welcome you and transfer you to your hotel. After check-in, you’ll have free time to relax or explore Hanoi at your own pace.
At 5:30 PM, we will arrange a one-hour cyclo tour for you to discover the charm of Hanoi’s Old Quarter. As you ride through the narrow streets, you’ll pass by ancient houses, traditional shops, and bustling local markets, all while enjoying the unique atmosphere of the city. This is a wonderful opportunity to experience Hanoi’s vibrant culture in a slow and relaxing way.
Accommodation:
4-star Hotels in Hanoi: Tirant hotel or similar hotels
5-star hotels in Hanoi: De l'Opera Hanoi - MGallery similar hotels
Meals: N/A

Day 2:  Experience Hanoi like a local by scooter
8:30 AM: Our female drivers will pick you up and start a tour to visit Hanoi city. Firstly, you will go to a very famous coffee shop to enjoy Egg coffee that is founded in Hanoi, passed down through generations, is Café Giang (Giang Café). And then we drive you to the Hanoi Opera House, local markets to see people selling everyday essentials, Train Street, Ho Chi Minh, Long Bien bridge , Mausoleum, Huu Tiep Lake (B52)…
Our driver will take you around the small alleys to visit the old houses and daily life of urban people that are very little known by tourists when visiting Hanoi.
Notes:
Please keep in mind that we do not go inside the Ho Chi Minh Mausoleum on “Hanoi City sights and street food” tour. This attraction requires a lot of time to fully appreciate so we recommend that you visit them on your own so that we can make the most of time you have with us.
The above itinerary is subject to change, based on the day’s weather and traffic conditions.
Accommodation:
4-star Hotels in Hanoi: Tirant hotel or similar hotels
5-star hotels in Hanoi: De l'Opera Hanoi - MGallery similar hotels
Meals: Breakfast and lunch

Day 3:  Hanoi – Ninh Binh – Overnight in Ninh Binh
7:30 AM: Our tour guide and driver will meet you at hotel transfer you to Ninh Binh.
10:00 AM: Arriving Glimmering Bai Dinh pagoda complexes, the largest pagoda, not only in Vietnam but also in Southeast of Asia. Scenically set on the foot hill of Dinh Mountain surrounded by amazing views of the exquisite river valley below and dotted and the limestone karsts dotted around which will take your breath away.
13:30 PM: Leaving for the Trang An Grottoes, an out-standing natural beauty of majestic limestone massif at 20 square kilometer rise dramatically out from rice paddy fields.
Late in the afternoon, you will go back to Hotel/ Resort in Ninh Binh for overnight.
Accommodation:
4-star Hotels: Hidden Charm Hotel & Resort or Similar
5-star hotels: Nham Village Resort
Meals: Breakfast and lunch

Day 4:  Ninh Binh – Halong Bay – Overnight on cruise
7:30 AM: Our luxury van or private car will pick you up at your hotel and transfer to Halong Bay
12:15 PM: Arrive at Halong, you are welcomed by our crew and boarding to check in and have lunch while cruising to see the beauty of Halong Bay and Lan Ha Bay.
15:30 PM: You will join cruise’s activities as kayaking and swimming.
17:30 PM: Return to Cruise. Enjoy sunset party on boat is a ideal time for photography enthusiasts to capture the stunning moment of sunset at Lan Ha Bay .
19:00 PM: Enjoy a romantic dinner on cruise and enjoy drink at bar on sundeck.
Halong Bay and Lan Ha Bay Cruises
4-star cruises: Sena cruise or similar cruises 5-star cruises: Mon Cheri cruise or similar cruises
4-star cruises: Sena cruise or similar cruises
5-star cruises: Mon Cheri cruise or similar cruises
Meals: Breakfast, lunch and dinner

Day 5:  Halong Bay – Hanoi
6:30 AM - 7:30 AM: Enjoy a delightful breakfast on board while taking in the serene beauty of the bay.
After breakfast, take part in the cruise’s planned activities, allowing you to fully immerse yourself in the stunning natural surroundings. Savor a delicious lunch as the journey continues.
11:40 AM: It’s time to disembark and return to the port. From there, board the bus for a comfortable ride back to Hanoi, bringing wonderful memories of your cruise experience with you.
Accommodation:
4-star Hotels in Hanoi: Tirant hotel or similar hotels
5-star hotels in Hanoi: De l'Opera Hanoi - MGallery similar hotels
Meals: Breakfast and lunch

Day 6:  Hanoi – Phu Quoc
After breakfast, enjoy your free time until your scheduled transfer to Noi Bai Airport for your flight to Phu Quoc.
Upon arrival at Phu Quoc Airport, our driver will warmly welcome you and take you to your hotel for check-in.
Relax and unwind - Overnight in Phu Quoc.
Accommodation:
4-star Hotels: Camia Resort & Spa or similar hotels
5-star hotels: Crowne Plaza Phu Quoc similar hotels
Meals: Breakfast

Day 7/Day 8/Day 9/Day 10:  Phu Quoc – Free days
Phu Quoc Island, located off the southwest coast of Vietnam, is the perfect destination for those seeking both adventure and relaxation. These days, you are free to explore the island’s stunning landscapes or unwind on its pristine beaches. Known for its crystal-clear waters, white sandy beaches, and vibrant coral reefs, Phu Quoc is ideal for travelers looking to escape the hustle and bustle of city life.
Spend your days relaxing on famous beaches like Long Beach , Bai Sao , and Ganh Dau , where you can soak up the sun and enjoy the peaceful surroundings. If you're feeling adventurous, you can explore the Vinpearl Safari , hike through Phu Quoc National Park , or visit the Dinh Cau Night Market for local delicacies and souvenirs.
Accommodation:
4-star Hotels: Camia Resort & Spa or similar hotels
5-star hotels: Crowne Plaza Phu Quoc similar hotels
Meals: Breakfast

Day 11: Phu Quoc – Ho Chi Minh city
Today, you are free to relax and enjoy your morning at leisure until our driver arrives to pick you up for your flight to Ho Chi Minh City.
Once you land at Tan Son Nhat International Airport , our driver will meet you and transfer you to your hotel for check-in. Take some time to settle in and get ready for an exciting day ahead.
In the afternoon, you’ll have the freedom to explore Ho Chi Minh City at your own pace. Whether you choose to visit the city's iconic landmarks like the Notre-Dame Cathedral or the S aigon Central Post Office , or stroll through vibrant streets like Dong Khoi Street , the options are endless. Experience the blend of French colonial architecture, modern skyscrapers, and the lively atmosphere of this bustling metropolis.
Overnight in Ho Chi Minh City
Accommodation:
4-star hotels: Saigon Prince Hotel or similar hotels
5-star hotels: Caravelle Saigon or similar hotels
Meals: Breakfast

Day 12:  Ho Chi Minh – Departure
After enjoying breakfast at the hotel, take your time to relax or explore at your own pace until our driver arrives to transfer you to the airport for your flight home.
On behalf of Asia Eyes Travel, I am Thuc Nguyen, and I would like to express my sincere gratitude for choosing us. We truly appreciate your trust and hope to welcome you, your family, and your friends on your next vacation.
Wishing you safe travels and unforgettable journeys ahead. See you again soon!
Note: If you wish to spend more time in Ho Chi Minh City, we’ll be happy to organise additional accommodations (subject to availability).
Thank you for choosing Asia Eyes Travel DMC Vietnam`,
    duration:    "12 Days/ 11 Nights",
    price:       1920,
    categoryIds: ["1", "3", "4"],
    cityIds:     ["2", "3", "1", "22", "20"],
    featuredTour: false,
    onSale:       false,
    saleDiscountPercentage: null,
  },
  {
    id:          "50",
    title:       "Vietnam Group Tour Package 11 Days",
    imageUrl:    "https://asiaeyestravel.com/uploads/source/vietnam-tour-promotion-11-days.png",
    description: `Discover Vietnam on an 11-day group tour , exploring its iconic destinations from Hanoi , Halong Bay , and Hoi An to Ho Chi Minh City . Experience authentic Vietnamese culture , local cuisine, and traditional activities while admiring breathtaking landscapes including mountains, beaches, and rice fields. Enjoy a hassle-free, all-inclusive itinerary with professional guides and high-quality services. Traveling in a group lets you connect with like-minded travelers , share unforgettable moments, and create lasting memories on this immersive Vietnam adventure .`,
    itinerary:   ``,
    duration:    "11 Days/10 Nights",
    price:       1056,
    categoryIds: ["8"],
    cityIds:     ["2", "3", "1", "13", "21", "20"],
    featuredTour: false,
    onSale:       false,
    saleDiscountPercentage: null,
  },
  {
    id:          "51",
    title:       "Unforgettable 16-Day Vietnam Travel Experience",
    imageUrl:    "https://asiaeyestravel.com/uploads/source/tours/tourphotos/lux.jpg",
    description: `Experience the charm and beauty of Vietnam with our Unforgettable 16-Day Vietnam Travel Experience . This journey takes you from the vibrant streets of Ho Chi Minh City to the historic Hoi An , the imperial heritage of Hue , and the bustling capital Hanoi . Perfect for travelers seeking cultural adventure , scenic landscapes , and authentic local experiences .
Join our Vietnam small group tour for a personal and relaxed journey, ensuring comfort, flexibility, and connection with fellow explorers. Take advantage of our Vietnam tour deals 2026 , including guided tours, accommodations, and transportation, making it easy to explore the best of Vietnam .
Whether you are seeking relaxation, adventure, or cultural discovery, Ninh Binh Tours by Asia Eyes Travel offers a unique blend of natural wonders and heritage. For more information about special offers, please contact us at: info@asiaeyestravel.com or WhatsApp: +84 935 946 688 (Thuc Nguyen).`,
    itinerary:   `Day 1: Welcome to Ho Chi Minh City
Welcome to Ho Chi Minh City! As soon as you arrive at Tan Son Nhat Airport, our Asia Eyes Travel team will be there to greet you and take you to your hotel. Enjoy a well-deserved rest and ease into your first day in Vietnam.
Includes: Private transfer with English speaking tour guide.
Excludes: Meals
Accommodation:
Saigon Prince Hotel or Similar 4*
Saigon Prince Hotel or Similar 4*
Address: 63 Nguyễn Huệ, Bến Nghé, Quận 1, Thành phố Hồ Chí Minh
Phone: 028 3822 2999
Caravelle Hotel or Similar 5*
Caravelle Hotel or Similar 5*
Address: 19-23 Lam Son Square, Bến Nghé, Quận 1, Thành phố Hồ Chí Minh
Phone: 028 3823 4999

Day  2: Experience the Culture and Life of the Mekong Delta
Start your day at 8:00 AM with hotel pickup for a scenic drive to the Mekong Delta. Admire the beautiful rice fields and countryside views along the way. In Ben Tre, enjoy a peaceful boat ride on the Mekong River, see stilt houses, and experience the local riverside life. Visit family-run workshops to see how coconut candy, rice paper, jackfruit wine, banana wine, and other local products are made. Try your hand at crafting these items and bring home some authentic souvenirs. Perfect for travelers seeking a true Vietnam small group tour experience.
Includes: Small Tour Group to Mekong Delta, English speaking guide, lunch, entrance fees, boat
Excludes: Drinks, dinner and personal expense
Accommodation:
Saigon Prince Hotel or Similar 4*
Saigon Prince Hotel or Similar 4*
Address: 63 Nguyễn Huệ, Bến Nghé, Quận 1, Thành phố Hồ Chí Minh
Phone: 028 3822 2999
Caravelle Hotel or Similar 5*
Caravelle Hotel or Similar 5*
Address: 19-23 Lam Son Square, Bến Nghé, Quận 1, Thành phố Hồ Chí Minh

Day 3: Free Time to Explore Ho Chi Minh City
During your free day in Ho Chi Minh City , take a leisurely stroll through bustling streets and experience the city’s vibrant blend of modern energy and colonial charm. Visit iconic landmarks like Notre-Dame Cathedral and the Central Post Office , or wander along Nguyen Hue Walking Street to soak in the lively atmosphere. Stop at a local café to enjoy rich Vietnamese coffee , and explore Ben Thanh Market for souvenirs, handicrafts, and local snacks. As evening falls, relax with a rooftop drink overlooking the glittering skyline or enjoy a scenic dinner cruise along the Saigon River .
Includes: Breakfast
Excludes: Lunch and dinner and personal expense
Accommodation:
Saigon Prince Hotel or Similar 4*
Saigon Prince Hotel or Similar 4*
Address: 63 Nguyễn Huệ, Bến Nghé, Quận 1, Thành phố Hồ Chí Minh
Phone: 028 3822 2999
Caravelle Hotel or Similar 5*
Caravelle Hotel or Similar 5*
Address: 19-23 Lam Son Square, Bến Nghé, Quận 1, Thành phố Hồ Chí Minh
Phone: 028 3823 4999

Day 4: Flight from Ho Chi Minh City to Hoi An
After a relaxing morning, our driver will transfer you to Tan Son Nhat Airport for your short flight to Danang . Upon arrival, meet your guide and driver who will escort you to Hoi An , a picturesque UNESCO World Heritage Town . Today is yours to wander freely through lantern-lined streets, visit historic landmarks, enjoy local cuisine, or simply soak in the charming atmosphere of this cultural gem.
Includes: Breakfast, private transfer and flight ticket
Excludes: Lunch, dinner and personal expense
Accomodation: 4* or 5* star on request
Hoian Delicacy Hotel
Address: No 116 Hùng Vương, Street, Hội An, Quảng Nam 560000
Phone: 0386 272 471
Bliss Hoi An Beach Resort & Wellness 5*
Address: Bình Minh, Thăng Bình District, Quảng Nam
Phone: (+84) 0235 3874 888

Day 5: Hoi An Countryside Jeep Tour – Local Life & Cultural Experience
Start your day at 7:45 AM when your jeep picks you up for an immersive journey into the Hoi An countryside . Visit local farms to learn about rice, vegetables, and cereal cultivation, and observe the daily life of farmers. Experience traditional crafts like weaving, rice-wine making, and woodcarving, and discover modern industries such as bird’s nest farming and aquaculture. End your tour with a flavorful home-cooked meal at a local family’s house, offering a genuine glimpse into Vietnamese daily life.
Includes: Breakfast, small jeep tour group, lunch, entrance fees
Excludes: Lunch, dinner and personal expense
Accomodation: 4* or 5* star on request
Hoian Delicacy Hotel
Address: No 116 Hùng Vương, Street, Hội An, Quảng Nam 560000
Phone: 0386 272 471
Bliss Hoi An Beach Resort & Wellness 5*
Address: Bình Minh, Thăng Bình District, Quảng Nam
Phone: (+84) 0235 3874 888

Day 6: Free Day in Hoi An: Explore, Shop & Taste Local Delights
Today is a free day to enjoy Hoi An Ancient Town at your own pace. Stroll along the cobbled streets, visit art galleries, or rent a bike to cycle through scenic rice paddies out to Cua Dai Beach . Explore local markets and preserved Chinese shophouses for paintings, ceramics, and colorful cloth lanterns. For a unique souvenir, visit one of Hoi An’s famous tailors and have something custom-made. Don’t miss tasting the town’s delicious regional cuisine at riverside restaurants, or join a cooking class to learn authentic Vietnamese recipes.
Includes: Breakfast
Excludes: Lunch, dinner and personal expense
Accomodation: 4* or 5* star on request
Hoian Delicacy Hotel
Address: No 116 Hùng Vương, Street, Hội An, Quảng Nam 560000
Phone: 0386 272 471
Bliss Hoi An Beach Resort & Wellness 5*
Address: Bình Minh, Thăng Bình District, Quảng Nam
Phone: (+84) 0235 3874 888

Day 7: Hue Historical Tour: Imperial City, Pagodas & Tombs
At 8:00 AM, your tour guide will pick you up at your hotel for a full-day Hue tour . Explore the magnificent Imperial City , visit the iconic Thien Mu Pagoda with scenic views of the Perfume River , and see the royal tombs of Minh Mang or Khai Dinh . Enjoy a tasty lunch at a local restaurant before heading back to your hotel in Hue for overnight.
Includes: Breakfast, private tour, entrance fees, lunch and English speaking tour guide
Excludes: Dinner and personal expense
Accomodation: 4* or 5* star on request
Senna Hue Hotel
Silk Path Grand Hue Hotel

Day 8: Journey from Hue to Hanoi by Flight
Depending on your flight schedule, our driver will transfer you to Phu Bai Airport for your flight to Hanoi – the vibrant capital of Vietnam. Upon arrival at Noi Bai International Airport, the Asia Eyes Travel team will warmly welcome you and escort you to your hotel. Enjoy a free afternoon to explore Hanoi’s bustling Old Quarter, a maze of narrow streets filled with lively markets, charming boutiques, and irresistible street food.
Includes: Breakfast, private transfer, flight ticket
Excludes: Lunch, dinner and personal expense
Accomodation: 4* or 5* star on request
Heritage Ham Long Hotel & Spa
Address: 42-44A P.Hàm Long, Street, Hoàn Kiếm, Hà Nội 10000 Phone: 024 3366 6966
Hotel de l'Opera - MGallery Hanoi
Address: 29 Tràng Tiền, Hoàn Kiếm, Hà Nội 010000 Phone: 024 6282 5555

Day 9: Hanoi Scooter & Street Food Tour: Egg Coffee, Old Alleys & Historic Sites
At 9:00 AM, our female drivers will pick you up for an exciting Hanoi Scooter Tour around the city. Begin with a visit to Café Giang , the legendary coffee shop famous for its Hanoi Egg Coffee , a recipe passed down through generations. Next, stop at the Hanoi Opera House (built in 1911) for memorable photos.
Explore local markets to see everyday life, then ride through hidden alleys on the Paloma Motorbike Tour to discover old houses and urban life rarely seen by tourists. Highlights include Train Street , Ho Chi Minh Mausoleum (outside), Huu Tiep Lake (B52) , and the historic Long Bien Bridge , built by the same French company that constructed the Eiffel Tower. Capture unforgettable memories of Hanoi’s culture and history.
Notes: We do not enter Ho Chi Minh Mausoleum on this tour. The itinerary may change depending on weather and traffic conditions.
Includes: Breakfast, scooter tour with drivers, food and drink are unlimited, English speaking tour guide
Excludes: Dinner and personal expense
Accomodation: 4* or 5* star on request
Heritage Ham Long Hotel & Spa
Address: 42-44A P.Hàm Long, Street, Hoàn Kiếm, Hà Nội 10000 Phone: 024 3366 6966
Hotel de l'Opera - MGallery Hanoi
Address: 29 Tràng Tiền, Hoàn Kiếm, Hà Nội 010000 Phone: 024 6282 5555

Day 10: Ninh Binh Day Trip: Hoa Lu, Trang An & Mua Cave & Night train to Sapa
At 8:00 AM, start a journey to Ninh Binh , often called the “Halong Bay on land.” Start with a visit to Hoa Lu , the ancient capital of Vietnam during the 10th and 11th centuries, exploring historic temples dedicated to the Dinh and Le kings , set against dramatic limestone karsts. Continue to the serene Trang An Complex and enjoy a sampan boat ride through emerald waterways, passing under natural caves and surrounded by lush rice paddies. For panoramic views, climb to the top of Mua Cave and take in breathtaking scenery of the countryside. In the late afternoon, return to Hanoi.
At 8:30 PM, our tour guide will pick you up and transfer you to the train station for an overnight train to Sapa .
Includes: Breakfast, Small tour group, entrance fees, lunch, English speaking tour guide
Excludes: Drinks, Dinner and personal expense
Accomodation: Train to Sapa (Private cabin)
Train to Sapa

Day 11: Sapa arrive & Discover Villages and Authentic Local Experiences
At 6:00 AM, arrive at Lao Cai train station , where your Asia Eyes Travel tour guide and driver will pick you up and transfer you to Sapa . Enjoy breakfast and leave your luggage at the hotel before visiting Lao Chai and Ta Van villages , homes of the H’Mong and Dzay ethnic minorities . Walk through the villages, take photos, and interact with locals to experience their traditional lifestyle.
Includes: Breakfast, Lunch, transfer, entrance fees, English speaking tour guide
Excludes: Drinks, Dinner and personal expense
Accomodation: 4* or 5* star on request
Bamboo Hotel & Spa or Similar
Address: 18 Mường Hoa, TT. Sa Pa, Sa Pa, Lào Cai Phone: 0214 3871 076
Silk Path Grand Sapa Resort & Spa or Similar
Address: Doi Quan 6, Group 5, Sa Pa, Lào Cai 330000 Phone: 0214 3788 555

Day 12:  Explore Cat Cat Village
After breakfast, your Asia Eyes Travel tour guide will meet you for a scenic trek to Cat Cat Village (3 km), famous for the picturesque Cat Cat Waterfall . Capture beautiful photos of the village, meet local residents, and purchase unique handmade souvenirs for your family and friends.
In the afternoon, enjoy free time at Sapa market , where you can shop for local products and soak in the lively town atmosphere. Weather permitting, take a cable car ride up Fansipan Mountain , the highest peak in Indochina, for breathtaking panoramic views.
Includes: Breakfast, transfer, entrance fees, English speaking tour guide
Excludes: Drinks, dinner and personal expense
Accomodation: 4* or 5* star on request
Bamboo Hotel & Spa or Similar
Address: 18 Mường Hoa, TT. Sa Pa, Sa Pa, Lào Cai Phone: 0214 3871 076
Silk Path Grand Sapa Resort & Spa or Similar
Address: Doi Quan 6, Group 5, Sa Pa, Lào Cai 330000 Phone: 0214 3788 555

Day 13: Journey from Sapa to Hanoi by Bus
This morning, enjoy free time to relax or explore Sapa at your own pace until our shuttle bus arrives to transfer you to Hanoi. Enjoy a comfortable journey to the city. Upon arrival, check in at your hotel and take some time to refresh.
In the evening, wander through Hanoi’s Old Quarter , where narrow streets, ancient architecture, bustling markets, and street food stalls create a lively and charming atmosphere. Experience the city’s vibrant culture and savor local flavors at your leisure.
Includes: Breakfast, shuttle bus to Hanoi
Excludes: Lunch, dinner, English speaking tour guide
Accomodation: 4* or 5* star on request
Heritage Ham Long Hotel & Spa
Address: 42-44A P.Hàm Long, Street, Hoàn Kiếm, Hà Nội 10000 Phone: 024 3366 6966
Hotel de l'Opera - MGallery Hanoi
Address: 29 Tràng Tiền, Hoàn Kiếm, Hà Nội 010000 Phone: 024 6282 5555

Day 14: Halong Bay: A Paradise of Limestone Peaks
At 8:00 AM, your exciting journey begins as our Asia Eyes Travel shuttle bus picks you up from your hotel for a scenic drive to Halong Bay and the lesser-known, yet equally stunning Lan Ha Bay . Known for emerald waters and towering limestone karsts, these bays offer the perfect combination of tranquility and adventure.
Arrive at Halong Bay , a UNESCO World Heritage Site, around 11:45 AM and meet our professional crew. Board your cruise boat, settle in, and enjoy a delicious lunch while taking in spectacular views of limestone islands, lush greenery, and crystal-clear waters.
After lunch, you can kayak through serene waters, explore hidden caves, visit floating fishing villages, swim in calm waters, or relax on the sundeck while soaking up the breathtaking landscapes. Halong Bay and Lan Ha Bay offer an unforgettable natural experience for all travelers.
Halong Bay Cruises:
Includes: Breakfast, lunch, dinner, shuttle bus to Halong bay, English speaking tour guide on boat
Excludes: Drinks, personal expense
Accomodation: 4* or 5* star cruise on request
Sena Cruises or similar
Address: International Habour, Tuần Châu, Hạ Long, Quảng Ninh Phone: 0974 001 062
Peony Cruise
Address: 16 P. Thi Sách, Ngô Thì Nhậm, Hai Bà Trưng, Hà Nội 100000 Phone: +84935946688

Day 15: Halong Bay – Hanoi
6:30 AM – 7:30 AM: Start your day with a delicious breakfast on board, featuring fresh and flavorful dishes while enjoying the breathtaking views of Halong Bay and Lan Ha Bay . The stunning scenery sets the perfect tone for an unforgettable day.
7:30 AM: After breakfast, participate in the cruise’s activities – kayak through calm waters, swim in the pristine bay, or relax on the deck while taking in the incredible landscapes. Enjoy a delicious lunch on board, savoring traditional Vietnamese cuisine as you admire the magnificent scenery.
12:00 PM: After a relaxing day on the water, disembark and board the bus back to Hanoi with memories of a stunning natural experience.
Includes: Breakfast, lunch, shuttle bus to Hanoi
Excludes: Drinks, dinner and personal expense
Accomodation: 4* or 5* star on request
Heritage Ham Long Hotel & Spa
Address: 42-44A P.Hàm Long, Street, Hoàn Kiếm, Hà Nội 10000 Phone: 024 3366 6966
Hotel de l'Opera - MGallery Hanoi
Address: 29 Tràng Tiền, Hoàn Kiếm, Hà Nội 010000 Phone: 024 6282 5555

Day 16: Hanoi Airport Transfer & Goodbye from Asia Eyes Travel
Depending on your flight schedule, you may have some free time to relax or explore Hanoi before our driver picks you up and transfers you to Noi Bai International Airport for your departure.
On behalf of Asia Eyes Travel , I am Thuc Nguyen, and I sincerely thank you for choosing to travel with us. We deeply appreciate your trust and look forward to welcoming you again on your next holiday in Vietnam.
Includes: Breakfast, private transfer to airport
Excludes: English speaking tour guide
Accomodation: N/ A
Note: Late check-out upon request.`,
    duration:    "16 Days/15 Nights",
    price:       1560,
    categoryIds: ["1"],
    cityIds:     ["2", "3", "4", "1", "13", "12", "21", "20"],
    featuredTour: false,
    onSale:       true,
    saleDiscountPercentage: 15,
  },
  {
    id:          "52",
    title:       "Vietnam Luxury Beach Holiday 18 Days - Summer Deals 2026",
    imageUrl:    "https://asiaeyestravel.com/uploads/source/symphony-(3).jpg",
    description: `Embark on an unforgettable Vietnam Luxury Beach Holiday 18 days with Asia Eyes Travel, where stunning landscapes, rich culture, and beautiful beaches await you. This itinerary highlights the 7 best destinations to showcase the diverse beauty and experiences of Vietnam. Perfect for those seeking a Vietnam beach vacation , this journey will leave you with lasting memories.
This Vietnam Luxury Beach Holiday 18 days offers a perfect blend of cultural exploration and beach relaxation across Vietnam’s most beautiful destinations. Whether you're interested in Vietnam beach tours or simply want to unwind in paradise, this trip promises to deliver. From the bustling streets of Hanoi to the tranquil beaches of Phu Quoc , each location provides a unique experience that showcases the rich diversity of this enchanting country. Join us for the best Vietnam beach tours , and make your holiday a memorable one!
Handpicked luxury beachfront resorts & cruises
Perfect balance of cultural experiences & beach relaxation
Private guided tours for a personalized experience
Explore Vietnam’s top beach destinations with exclusive activities`,
    itinerary:   `Day 1:  Hanoi arrival - Xin Chao Vietnam!
Our driver and tour guide will pick you up at the airport and transfer you to hotel.
After checking into your hotel and settling in, you’ll have the rest of the day to explore at your own pace or simply relax and enjoy the comforts of your hotel or you can choose to take a leisurely walk around the city, visit a nearby attraction, or enjoy the delicious local cuisine.
Accommodation:
4-star Hotels in Hanoi: Tirant hotel or similar hotels
5-star hotels in Hanoi: De l'Opera Hanoi - MGallery similar hotels
Meals: N/A

Day 2: Hanoi Fabulous food and sights tour by scooter (4 hours)
8:00 AM: Our female drivers and tour guide will pick you up at your hotel to begin your exciting Hanoi city tour.
First, we will take you to a famous coffee shop to try Egg Coffee, a unique beverage that originated in Hanoi. The café, Café Giang (Giang Café), has been serving this delicious drink for generations.
Next, our drivers will take you to the Hanoi Opera House, built in 1911, where you can take photos to capture the essence of this beautiful landmark.
Afterward, we will visit local markets where you can observe people selling everyday essentials, offering a glimpse into daily life in Hanoi.
Joining the Paloma Motorbike Tour, you will explore the small alleys and old houses, experiencing the authentic daily life of Hanoi’s urban residents, far from the typical tourist paths.
We will also pass through iconic spots such as Hanoi Train Street , Ho Chi Minh Mausoleum, and Huu Tiep Lake (B52), where you can see remnants of the war.
A highlight of the tour is the historic Long Bien Bridge, designed by the same company that built the Eiffel Tower in Paris. The bridge has stood through two major wars in Vietnam and offers a great photo opportunity.
The tour concludes with a drop-off at your hotel.
Notes:
Please keep in mind that we do not go inside the Ho Chi Minh Mausoleum on “Hanoi City sights and street food”tour. This attraction requires a lot of time to fully appreciate so we recommend that you visit them on your own so that we can make the most of time you have with us.
The above itinerary is subject to change, based on the day’s weather and traffic conditions.
Accommodation:
4-star Hotels in Hanoi: Tirant hotel or similar hotels
5-star hotels in Hanoi: De l'Opera Hanoi - MGallery similar hotels
Meals: Breakfast and lunch

Day 3: Hanoi – Ninh Binh
7:30 AM: Our guide and driver will meet you at your hotel to begin your 110 km journey through the lush countryside landscape.
10:00 AM: Arrive at the stunning Bai Dinh Pagoda complex , the largest pagoda not only in Vietnam but also in Southeast Asia. Set against the foothills of Dinh Mountain, it offers breathtaking views of the river valley below and the surrounding limestone karsts.
12:00 PM: Enjoy a delicious lunch at a local restaurant.
1:30 PM: Depart for the Trang An Grottoes, a remarkable natural wonder. The towering limestone massif rises dramatically from the rice paddies, covering an area of 20 square kilometers. As you explore, you will discover mystical valleys, freshwater ponds, and lush jungles.
5:15 PM: Return to the car and head back to Hanoi. You will overnight in Hanoi.
Accommodation:
4-star Hotels: Hidden Charm Hotel & Resort or Similar
5-star hotels: Nham Village Resort
Meals: Breakfast and lunch

Day  4: Ninh Binh - Halong Bay - Overnight on cruise
8:00 AM: We will pick you up from your hotel and transfer you to Halong Bay .
11:45 AM: Arrive at Halong Bay, where you will be greeted by our crew. Board the cruise, check in, and enjoy lunch while cruising through the stunning landscapes of Halong Bay and Lan Ha Bay.
3:30 PM: Join the cruise activities, including kayaking and swimming in the calm waters.
5:30 PM: Relax and enjoy a sunset party on board, taking in the breathtaking views.
7:00 PM: Indulge in a romantic dinner aboard the cruise, surrounded by the serene beauty of the bay.
Halong Bay and Lan Ha Bay Cruises
4-star cruises: Sena cruise or similar cruises 5-star cruises: Mon Cheri cruise or similar cruises
4-star cruises: Sena cruise or similar cruises
5-star cruises: Mon Cheri cruise or similar cruises
Meals: Breakfast, lunch and dinner

Day  5: Discover Lan Ha Bay – Viet Hai village
6:00 AM: Start your day with an energizing Tai Chi session, followed by the breathtaking sunrise over the bay.
6:45 AM – 7:15 AM: Breakfast is served at the restaurant.
8:00 AM – 8:30 AM: Guests will be transferred to a day trip boat and set sail for the tranquil Lan Ha Bay, where you can enjoy the peaceful beauty of the bay. If you prefer, you can relax on the cruise instead of going on the day trip.
10:30 AM – 11:00 AM: Upon reaching Viet Hai jetty, guests can enjoy an exciting cycling tour or take an e-cart ride through the tropical rainforest and towering limestone mountains. Experience the village life and learn how locals live in bamboo-thatched houses, with walls made of straw and mud, designed to protect from rain and wind.
12:15 PM – 1:30 PM: Return to the day trip boat for lunch as you cruise toward the kayaking and swimming spot.
1:30 PM: Explore a secluded lagoon by kayak or enjoy a refreshing swim off the boat.
4:30 PM: Return to the main cruise.
7:30 PM: Dinner is served.
9:00 PM – 10:00 PM: Enjoy the bay's nightlife from the deck, soaking in the music and atmosphere.
Overnight on the cruise.
Halong Bay and Lan Ha Bay Cruises
4-star cruises: Sena cruise or similar cruises 5-star cruises: Mon Cheri cruise or similar cruises
4-star cruises: Sena cruise or similar cruises
5-star cruises: Mon Cheri cruise or similar cruises
Meals: Breakfast, lunch and dinner

Day 6: Halong Bay – Hanoi – Hue
6:30 AM - 7:30 AM: Breakfast will be served.
7:30 AM: You will join the cruise’s activities and enjoy the beautiful surroundings.
9:30 AM: Check-out from the cruise and then enjoy a delicious lunch.
12:00 PM: Disembark and head back to the port. You will then take a bus to Hanoi Airport for your flight to Hue City.
Upon arrival at Phu Bai Airport, our driver will pick you up and transfer you to your hotel.
Accommodation:
4-star hotels: White lotus hotel or similar hotels
5-star hotels: Silk Path Grand Hue Hotel or similar hotels
Meals: Breakfast and lunch

Day 7: Hue city tour – Hoi An
8:00 AM: Our guide and driver will meet you at the hotel and transfer you to the boat landing for a leisurely boat trip along the Perfume River. Enjoy the scenic views as we head towards the towering Thien Mu Pagoda, one of Vietnam’s most iconic landmarks.
Next, we’ll take a short drive to a lush valley along the river where the tombs of seven Nguyen Emperors were built. We will visit two of these royal tombs: the Minh Mang tomb and the Khai Dinh tomb, giving you insight into the lives and architecture of the Vietnamese royalty.
12:00 PM: Enjoy a delicious lunch featuring classic Hue cuisine, renowned for its rich flavors and history.
In the afternoon, our driver and guide will take you on a scenic drive to Hoi An. On the way, we will stop at Hai Van Pass for some stunning photo opportunities.
Arrive in Hoi An, check in to your hotel, and relax after a day of exploration.
Accommodation:
4-star hotels: Delicacy Hotel or similar hotels
5-star hotels: Royal Hoi An – Gallery or similar hotels
Meals: Breakfast and lunch

Day  8: Hoian countryside tour by vespa
7:45 AM: Our Vespa drivers will pick you up, and you'll begin your journey through the scenic Hoi An countryside. Today, you will visit a local farm, where you’ll learn about the cultivation of rice, vegetables, and cereal crops, while also experiencing the daily life of local farmers. Explore traditional rural occupations such as weaving, rice-wine making, and woodcarving. You’ll also discover newer industries like bird’s nest farming and aquaculture. Afterward, head to a local family's home for a delicious home-cooked meal, offering a unique opportunity to gain insight into the lives of middle-class Vietnamese families. This experience will give you a deeper understanding of the culture and lifestyle of the Vietnamese countryside.
Accommodation:
4-star hotels: Delicacy Hotel or similar hotels
5-star hotels: Royal Hoi An – Gallery or similar hotels
Meals: Breakfast and lunch

Day  9/ Day 10/ Day 11:  Hoi An – Free days
During these free days, you have the freedom to explore the charming town of Hoi An at your own pace. Stroll through its picturesque cobbled streets, visit art galleries, or rent a bike to cycle through the scenic rice paddies that lead to Cua Dai Beach. Explore the vibrant markets and preserved Chinese shophouses, where you can shop for paintings, ceramics, and colorful lanterns. For those looking for a unique souvenir, Hoi An is famous for its skilled tailors, and you can have a custom-made outfit to suit your style. Don't miss the chance to savor Hoi An's renowned regional cuisine—enjoy a meal by the riverside or join a cooking class to learn how to prepare traditional dishes. Whether you’re seeking relaxation, adventure, or a cultural experience, Hoi An offers something special for everyone.
Accommodation:
4-star hotels: Delicacy Hotel or similar hotels
5-star hotels: Royal Hoi An – Gallery or similar hotels
Meals: Breakfast

Day 12:  Hoi An – Flight to Saigon
Today, you will take a short flight to Ho Chi Minh City, formerly known as Saigon. As Vietnam’s bustling center of commerce and culture, the city is rich in history and vibrant energy. Upon arrival, enjoy a sightseeing tour around the city’s iconic landmarks. Visit the Reunification Palace, a symbol of Vietnam's history, and explore the beautiful Notre Dame Cathedral and the impressive Opera House. Next, head to the War Remnants Museum, where you can learn about the powerful and emotional stories of the Vietnam War. This tour offers a unique opportunity to experience both the historical depth and modern dynamism of Ho Chi Minh City, providing a memorable glimpse into the country’s past and present.
Accommodation:
4-star hotels: Saigon Prince Hotel or similar hotels
5-star hotels: Caravelle Saigon or similar hotels
Meals: Breakfast and lunch

Day 13:  Ho Chi Minh City – Mekong Delta Adventure
In the morning, you will be picked up from your hotel and transferred to the Mekong Delta. Along the way, enjoy the scenic views as we pass through lush rice fields. Upon reaching Ben Tre, embark on a relaxing boat trip along the Mekong River. This journey offers a chance to take in the fresh air and admire the traditional stilt houses along the riverbanks. After the boat ride, enjoy a delicious lunch at a local restaurant, where you can savor fresh regional dishes. This day offers a peaceful escape, giving you a glimpse into the tranquil life of the Mekong Delta while enjoying its natural beauty.
Accommodation:
4-star hotels: Saigon Prince Hotel or similar hotels
5-star hotels: Caravelle Saigon or similar hotels
Meals: Breakfast and lunch

Day 14:  Ho Chi Minh City – Phu Quoc Island
After enjoying breakfast at the hotel, you will be transferred to Tan Son Nhat Airport for a short flight to Phu Quoc Island. Upon your arrival, our driver will be waiting to pick you up and take you to your hotel. Once at the hotel, you can check in and take some time to unwind and relax after your journey. The rest of the day is free for you to enjoy at your leisure. You can choose to rest, explore the surroundings, or visit nearby attractions. Phu Quoc, known for its beautiful beaches and tranquil atmosphere, offers the perfect setting for relaxation and rejuvenation.
Accommodation:
4-star Hotels: Camia Resort & Spa or similar hotels
5-star hotels: Crowne Plaza Phu Quoc similar hotels
Meals: Breakfast

Day 15/ Day 16/ Day 17:  Relaxing Days on Phu Quoc Beach
Phu Quoc, with its stunning beaches and peaceful natural scenery, is the perfect destination for a relaxing getaway. If you're feeling adventurous, you can take part in exciting activities such as snorkeling to explore vibrant coral reefs or taking a cable car ride to visit the picturesque Thom Island.
Accommodation:
4-star Hotels: Camia Resort & Spa or similar hotels
5-star hotels: Crowne Plaza Phu Quoc similar hotels
Meals : Breakfast

Day 18:  Phu Quoc – Departure
Today, you are free to enjoy your time at leisure until our driver arrives to transfer you to the airport for your flight home. On behalf of Asia Eyes Travel , I am Thuc Nguyen , and I would like to sincerely thank you for trusting us with your special holiday in Vietnam, We look forward to welcoming you, your family, or your friends on future journeys. Wishing you a smooth and safe trip home, and we hope to see you again soon!
Thank you very much for choosing Asia Eyes Travel Vietnam DMC`,
    duration:    "18 Days/ 17 Nights",
    price:       2820,
    categoryIds: ["1", "3", "4"],
    cityIds:     ["2", "3", "4", "1", "13", "12", "22", "21", "20"],
    featuredTour: false,
    onSale:       false,
    saleDiscountPercentage: null,
  },
  {
    id:          "53",
    title:       "Experience Vietnam Like a Local 17 Days - Small Tour Group",
    imageUrl:    "https://asiaeyestravel.com/uploads/source/halong-bay-cruises-activities.jpg",
    description: `Discover Vietnam on a 17-day homestay tour with Asia Eyes Travel , from Hanoi’s street food and scooter tours to the Sapa mountains and authentic ethnic minority homestays . Cruise the iconic Halong Bay , explore Ninh Binh’s landscapes , and enjoy Hoi An Ancient Town with cooking classes and scenic rides. Conclude in the Mekong Delta , visiting floating markets and experiencing local river culture. This immersive tour combines Vietnamese culture, food, traditions, and stunning landscapes for an unforgettable adventure.`,
    itinerary:   ``,
    duration:    "17 Days/16 Nights",
    price:       1275,
    categoryIds: ["7", "8"],
    cityIds:     ["2", "3", "4", "1", "13", "12", "21", "20"],
    featuredTour: false,
    onSale:       false,
    saleDiscountPercentage: null,
  },
  {
    id:          "54",
    title:       "Vietnam 16 Days Tour",
    imageUrl:    "https://asiaeyestravel.com/uploads/source/destinations/hanoi.png",
    description: `The Vietnam 16 Days Tour by Asia Eyes Travel is a complete journey from North to South Vietnam, covering culture, history, cuisine, and nature.
Explore Hanoi , Mai Chau , Ninh Binh , and enjoy a stunning Halong Bay cruise . Discover central Vietnam with Hue imperial sites and Hoi An Ancient Town with countryside jeep tours. End in Ho Chi Minh City and the Mekong Delta for vibrant city life and river experiences.`,
    itinerary:   `Day 1: Hanoi arrival
Upon arrival at Noi Bai International Airport , Asia Eyes Travel will warmly welcome you and provide a comfortable private transfer to your hotel in Hanoi. After check-in, you will have free time to relax and recover from your long flight.
Suggested hotels: 4-star or 5-star hotel on request
4★ Hanoi Tirant Hotel – 38 Gia Ngư Street, Hoàn Kiếm District, Hanoi – Tel: 024 6265 5999
5★ Apricot Hotel Hanoi – 136 Hàng Trống Street, Hoàn Kiếm District, Hanoi – Tel: 024 3828 9595
Includes: Accommodation, private transfer, English-speaking tour guide Excludes: Meals and personal expenses
Note: Early check-in available upon request

Day 2: Hanoi street food tour by scooter
At 9:00 AM, our female drivers from Asia Eyes Travel will pick you up to start an exciting Hanoi Scooter Tour exploring the city in a unique and local way.
Your first stop is a famous local café to enjoy the traditional Egg Coffee at Café Giang , a signature drink originated in Hanoi and passed down through generations.
Next, visit the iconic Hanoi Opera House , built in 1911, where you can take memorable photos. Continue to local markets to observe daily life and experience the authentic atmosphere of Hanoi.
The journey then takes you through hidden small alleys and old houses, offering a real glimpse into local urban life that most tourists rarely see. You will also pass famous highlights such as Train Street , Ho Chi Minh Mausoleum area , and Huu Tiep Lake (B52 Lake) , where historical war remnants remain.
A special stop is the historic Long Bien Bridge , designed by the French company Daydé & Pillé, the same company behind the Eiffel Tower. The bridge has witnessed many important historical events in Vietnam, making it a meaningful photo stop.
Important notes: The Ho Chi Minh Mausoleum is viewed from outside only. Visiting conditions may change depending on weather and traffic.
Includes: Accommodation with breakfast, private scooter tour, drinks, lunch, drivers, entrance fees, English-speaking guide Excludes: Dinner and personal expenses

Day 3: Hanoi – Mai Chau
At 8:00 AM, our driver and tour guide will meet you at your hotel to begin your journey to Mai Chau , located about 150 kilometers from Hanoi. This is a private tour, giving you the flexibility to enjoy scenic stops along the way for photos and to admire the beautiful countryside landscape.
During the drive, you will pass the Hoa Binh Hydropower Plant in Hoa Binh City, one of the most important engineering landmarks in the region. You will have a short stop here to explore and take photos before continuing your journey.
After visiting the hydropower area, we will continue driving towards Mai Chau , where stunning valleys and peaceful rice fields await. Upon arrival, enjoy a delicious lunch at a local restaurant featuring traditional Vietnamese cuisine.
After lunch, check in at a comfortable 4-star accommodation , such as Mai Chau Ecolodge , where you can relax and enjoy the peaceful natural surroundings. The rest of the day is free at your leisure to unwind and prepare for the next day’s exploration of Mai Chau’s culture and scenery.
Suggested hotels: 4-star hotel (Mai Chau Ecolodge)
Includes: Accommodation with breakfast, private tour to Mai Chau, lunch, entrance fees, English-speaking tour guide. Excludes: Drinks, dinner, and personal expenses

Day 4: Mai Chau cycling
At 8:00 AM, after breakfast, you will start an early day to make the most of your time in Mai Chau . Set off on an exciting cycling adventure, traveling from village to village over approximately 30 kilometers. Along the way, you will have the chance to meet and interact with local Thai and Muong ethnic minorities , who are well known for their traditional weaving skills and will be happy to share their craftsmanship with you.
Continue cycling through the beautiful villages of the Mai Chau Valley , including Pom Coong, Van Mai, and Xam Khoe . This is a great opportunity to observe local daily life, connect with villagers, and see traditional farming activities such as rice cultivation, buffalo herding, and logging.
After a rewarding morning of exploration, enjoy a delicious lunch in Mai Chau town with local specialties. In the afternoon, return to your hotel in Mai Chau to relax and reflect on your meaningful cultural experience.
Includes: Accommodation with breakfast, lunch, entrance fees, bicycle, English-speaking tour guide Excludes: Drinks, dinner, and personal expenses

Day 5: Mai Chau – Ninh Binh
After breakfast, we depart for Ninh Binh , with scenic stops along the way to enjoy and photograph the countryside.
Around 10:30 AM, we arrive at Hoa Lu Ancient Capital , the former capital of Vietnam. Here, you will visit the Hoa Lu Temples dedicated to the Dinh and Le Kings and learn about Vietnam’s early history, surrounded by dramatic limestone mountains.
Next, continue to Trang An Grottoes , a UNESCO World Heritage Site. Enjoy a relaxing boat trip through rivers, caves, and stunning limestone karsts rising from green rice fields. Known as “Halong Bay on land,” Trang An offers breathtaking natural beauty and peaceful landscapes.
After a full day of exploration, transfer to your hotel in Ninh Binh for relaxation.
Suggested hotels: 3-star or 5-star hotel on request
3★ Lalita Ninh Binh Resort
4★ Emeralda Resort Ninh Binh
Includes: Accommodation with breakfast, private transfer, lunch, entrance fees, English-speaking tour guide Excludes: Dinner, personal expenses

Day 6: Ninh Binh – Halong Bay – Lan Ha bay
At around 11:45 AM, we will arrive at the harbor and be warmly welcomed by the cruise crew. You will then board the boat and enjoy a delicious lunch while the cruise begins sailing through the stunning bay.
In the afternoon, you can join activities such as kayaking, swimming, or simply relaxing on the sundeck and admiring the breathtaking scenery. Halong Bay is famous for its emerald waters, towering limestone islands, and peaceful atmosphere, offering the perfect combination of relaxation and exploration.
You will spend the night on a comfortable cruise, enjoying a peaceful evening surrounded by one of Vietnam’s most iconic natural wonders.
Suggested cruises: 4-star or 5-star cruise on request
4* Sena Cruises or similar – International Harbour, Tuan Chau, Ha Long, Quang Ninh – Tel: 0974 001 062
5*Peony Cruise – 34 International Harbour, Tuan Chau, Ha Long, Quang Ninh – Tel: +84 935 946 688
Includes: Accommodation with breakfast, lunch, dinner, shuttle bus, entrance fees, kayaking, English-speaking guide on boat Excludes: Drinks and personal expenses

Day 7: Halong Bay –  Hue city
6:30 AM to 7:30 AM, breakfast is served onboard the cruise. After breakfast, you can join light activities such as sightseeing or simply relax and enjoy the peaceful beauty of Halong Bay.
At around 12:00 PM, you will check out from the cruise and return to the harbor. From there, you will take a shuttle bus back to Hanoi for your flight to Hue City.
Upon arrival in Hue, our tour guide and driver will welcome you and transfer you to your hotel for check-in. The rest of the day is free for you to rest and relax after your journey.
Suggested hotels: 4-star or 5-star hotel on request
4★ White Lotus Hotel – 05–07 Hoang Hoa Tham Street, Phu Nhuan Ward, Hue City – Tel: 0234 3881 888
5★ Senna Hue Hotel – 7 Nguyen Tri Phuong Street, Phu Hoa Ward, Hue City – Tel: 0234 3858 686
Includes: Accommodation with breakfast, shuttle bus from Halong Bay to Hanoi, breakfast, lunch, English-speaking tour guide, flight ticket to Hue Excludes: Dinner s and personal expenses

Day 8:  Hue Sightseeing
At 8:00 AM, our guide and driver will meet you at your hotel and transfer you to the boat landing for a relaxing cruise along the Perfume River . During the boat trip, you will visit the iconic Thien Mu Pagoda , one of the most famous spiritual landmarks in Vietnam.
After the river cruise, continue by car to a peaceful valley where the royal tombs of the Nguyen Dynasty are located. You will explore two highlights, the Minh Mang Tomb and Khai Dinh Tomb , learning about imperial history and admiring their unique architectural styles.
Next, return to the city center to visit the Imperial Citadel and the Forbidden Purple City , the former royal residence of the Nguyen emperors. This historical complex offers deep insight into Vietnam’s royal heritage.
If time and weather permit, enjoy a beautiful sunset over the Perfume River to end your day in Hue.
Includes: Accommodation with breakfast, small group tour, entrance fees, lunch, English-speaking guide Excludes: Drinks, dinner, personal expenses

Day 9: Heritage Train from Hue to Da Nang
At 6:30 AM, we will pick you up and transfer you to Hue Railway Station for your journey from Hue to Da Nang by the Heritage Train at 7:05 AM. Enjoy a scenic ride along one of Vietnam’s most beautiful coastal rail routes, offering breathtaking views of mountains, beaches, and ocean landscapes.
Upon arrival in Da Nang , you will be met by our driver and continue by private transfer to Hoi An Ancient Town . After check-in at your luxury resort, the rest of the day is free at leisure for you to relax or explore the charming streets of Hoi An at your own pace.
Suggested hotels: 4-star or 5-star hotel on request
4★ Hoian Delicacy Hotel – No. 116 Hung Vuong Street, Hoi An, Quang Nam – Tel: 0386 272 471
5★ Palm Garden Resort – Lac Long Quan Street, Cua Dai, Hoi An, Quang Nam – Tel: (+84) 0235 3927 927
Includes: Accommodation with breakfast, train ticket, private transfers Excludes: Lunch, dinner, drinks, and personal expenses

Day 10: Hoian countryside vespa tour
You will first visit a local farm in the Hoi An countryside to learn about rice, vegetable, and cereal cultivation, gaining insight into the daily life of Vietnamese farmers. As the journey continues through the countryside, you will discover traditional crafts such as weaving, rice wine making, and wood carving, which have been preserved through generations. You will also learn about emerging local industries such as bird’s nest farming and aquaculture.
Next, you will visit a local family home in Hoi An , where you will enjoy a delicious home-cooked meal. This experience offers an authentic glimpse into the daily life of a Vietnamese family and provides a meaningful cultural connection.
Throughout the tour, you will enjoy the peaceful Hoi An countryside and create memorable experiences with local people.
Includes: Accommodation with breakfast, group Vespa tour with lunch, entrance fees, English-speaking guide Excludes: Dinner, drinks, and personal expenses

Day 11 & Day 12: Hoian – Free days
On these free days, you have the freedom to explore Hoi An at your own pace. Wander through the charming cobbled streets of Hoi An Ancient Town , visit local art galleries, or rent a bicycle to cycle through scenic rice paddies toward Cua Dai Beach . The town’s vibrant markets are perfect for discovering unique souvenirs such as paintings, ceramics, and colorful lanterns, as well as exploring well-preserved Chinese shophouses.
If you wish, you can also visit skilled local tailors in Hoi An to have custom-made clothing designed just for you. The town is also famous for its rich cuisine, so enjoy riverside dining or join a cooking class to learn traditional Vietnamese dishes.
With so many experiences available, Hoi An offers the perfect balance of relaxation, culture, and local discovery.
Includes: Accommodation with breakfast Excludes: Lunch, dinner, drinks, and personal expenses

Day 13: Hoian – Ho Chi Minh city
Upon arrival, you will enjoy a half-day city tour. Visit the iconic Reunification Palace , the elegant Notre Dame Cathedral , and the historic Saigon Opera House . Continue to the War Remnants Museum , where you will discover powerful stories from the Vietnam–America war and gain deeper insight into the country’s history.
Suggested hotels: 4-star or 5-star hotel on request
4★ Saigon Prince Hotel or similar – 63 Nguyen Hue Street, Ben Nghe Ward, District 1, Ho Chi Minh City – Tel: 028 3822 2999
5★ New World Saigon Hotel or similar – 76 Le Lai Street, Ben Thanh Ward, District 1, Ho Chi Minh City – Tel: 028 3822 8888
Includes: Accommodation with breakfast, private car/bus, English-speaking guide, entrance fees, lunch, flight ticket Excludes: Dinner and personal expenses
Note: Early check-in available upon request

Day 14: Ho Chi Minh City – Mekong Delta
On the way, you will enjoy beautiful countryside scenery, passing vast green rice fields that showcase the peaceful rural landscapes of southern Vietnam.
Upon arrival in the Mekong Delta , you will embark on a relaxing boat trip along the Mekong River. This tranquil cruise allows you to enjoy the fresh air and admire traditional stilt houses along the riverbanks. You will also visit local villages to experience daily life and discover the unique culture of the Mekong region.
Includes: Accommodation with breakfast, small group tour, lunch, boat trip, English-speaking guide Excludes: Meals and personal expenses

Day 15: Ho Chi Minh – Free day
Enjoy a free day in Ho Chi Minh City to explore the city at your own pace, discover local markets, cafés, shopping streets, and cultural attractions.
Alternatively, you can join an optional Cu Chi Tunnels tour , where you will gain an in-depth understanding of guerrilla warfare during the Vietnam War. This historic underground network, used by the Viet Cong, is located in the jungle outside the city. You will have the chance to explore parts of the tunnels and learn how soldiers lived, worked, and survived underground during wartime conditions.
Includes: Accommodation with breakfast, small group tour (optional) Excludes: Meals and personal expenses

Day 16: Ho Chi Minh – Departure
We sincerely hope you have had a wonderful journey with us. Thank you for choosing Asia Eyes Travel DMC Vietnam for your holiday. We look forward to welcoming you and your family again on your next trip to Vietnam.
Includes: Breakfast, Private airport transfer Excludes: English-speaking tour guide
Note: Late check-out available upon request.`,
    duration:    "16 Days/15 Nights",
    price:       1520,
    categoryIds: ["1"],
    cityIds:     ["5", "2", "3", "1", "13", "12", "21", "20"],
    featuredTour: false,
    onSale:       false,
    saleDiscountPercentage: null,
  },
  {
    id:          "55",
    title:       "Experience Vietnam 15 Days",
    imageUrl:    "https://asiaeyestravel.com/uploads/source/blog/hoian/du-khach-di-xe-jeep.jpg",
    description: `Take a remarkable 15-day journey through Vietnam, where you’ll discover the country’s rich culture, stunning landscapes, and vibrant cities. Start your adventure in Hanoi , the heart of Vietnam, with its bustling streets and historical charm. From there, explore the natural beauty of Halong Bay , famous for its emerald waters and towering limestone formations. Continue to Sapa, known for its breathtaking terraced rice fields and remote hill tribe villages.
In central Vietnam, delve into the cultural heritage of Hue, home to ancient temples and the Imperial City, and Hoi An, a well-preserved town brimming with history and charm. Finish your tour in the southern regions, where the dynamic energy of Ho Chi Minh City (Saigon) awaits, along with a serene exploration of the Mekong Delta’s waterways.
This 15-day tour package offers an unforgettable Vietnam experience with a perfect blend of city exploration, cultural immersion, and scenic beauty. Whether you’re interested in history, nature, or local culture, this itinerary is tailored to ensure a memorable and enriching journey.`,
    itinerary:   `Day 1: Welcome to Hanoi
Upon arrival at Noi Bai International Airport , your friendly Asia Eyes Travel guide and driver will warmly welcome you and transfer you comfortably to your hotel in Hanoi.
After check-in and some time to relax, you will have free time to unwind after your long flight.
Suggested hotels: 4-star or 5-star hotel on request
4★ Hanoi Tirant Hotel – 38 Gia Ngu Street, Hoan Kiem District, Hanoi – Tel: 024 6265 5999
5★ Apricot Hotel Hanoi – 136 Hang Trong Street, Hoan Kiem District, Hanoi – Tel: 024 3828 9595
Includes: Accommodation, private transfer, English-speaking guide Excludes: Meals and personal expenses
Note: Early check-in available upon request

Day 2: Fabulous food and sights tour by scooter
At 8:00 AM, our female drivers and tour guide will pick you up from your hotel to begin an exciting Hanoi Scooter Tour .
Your first stop is a famous local coffee shop to enjoy the traditional Egg Coffee at Café Giang , a signature drink originating in Hanoi and passed down through generations.
Next, visit the elegant Hanoi Opera House , built in 1911, where you can take memorable photos. Continue to local markets to observe daily life and experience the authentic atmosphere of the city.
Join the scooter ride through hidden small alleys, exploring old houses and local neighborhoods that are rarely seen by tourists. You will also visit highlights such as Train Street , the Ho Chi Minh Mausoleum area , and Huu Tiep Lake (B52 Lake) , where historical war remnants remain.
A special stop is the historic Long Bien Bridge , designed by the French company Daydé & Pillé, the same company behind the Eiffel Tower. This bridge has witnessed important historical events in Vietnam. The tour ends with a return to your hotel.
Important notes: The Ho Chi Minh Mausoleum is viewed from outside only. The itinerary may change depending on weather and traffic conditions.
Includes: Accommodation with breakfast, lunch, scooter tour with drivers and English-speaking guide, entrance fees. Excludes: Dinner and personal expenses

Day 3: Day Trip to Ninh Binh & Night Train to Sapa
08:00: Our guide and driver will meet you at your hotel and transfer you to Ninh Binh .
10:00: Arrive at the magnificent Bai Dinh Pagoda Complex , the largest pagoda in Vietnam and Southeast Asia. Nestled at the foot of Dinh Mountain, it is surrounded by stunning limestone karsts and a beautiful river valley, offering breathtaking panoramic views.
12:00: Enjoy lunch at a local restaurant with authentic Vietnamese cuisine.
13:30: Continue to Trang An Grottoes , a UNESCO World Heritage Site known for its spectacular limestone mountains rising from rice fields. Explore mystical valleys, caves, freshwater lakes, and lush jungle scenery on a peaceful boat trip.
19:30: Return to Hanoi .
20:30: Transfer to Hanoi Train Station for the night train to Sapa (departure at 21:30).
Train to Sapa: Private cabin on train
Includes: Accommodation with breakfast, lunch,small tour group to Ninh Binh, English-speaking guide, entrance fees and train ticket. Excludes: Dinner and personal expenses

Day 4: Sapa – Visit villages for local experiences
After breakfast, you can leave your luggage at the hotel before starting your journey to explore Lao Chai and Ta Van villages , home to the H’Mong and Dzay ethnic minorities . Enjoy a scenic walk through terraced rice fields, admire breathtaking mountain landscapes, take photos, and interact with local people to learn about their culture and daily life.
After lunch, you are free to discover Sapa at your own pace.
Suggested hotels: 4-star or 5-star hotel on request
4★ Bamboo Sapa Hotel or similar
5★ Silk Path Grand Sapa Resort & Spa
Includes: Accommodation with breakfast, lunch, private tour, English-speaking guide, entrance fees Excludes: Dinner and personal expenses

Day 5: Explore Cat Cat Village & Free Time in Sapa
After breakfast, our tour guide will meet you and take you on a scenic trek to Cat Cat Village (3 km), famous for its beautiful landscapes and the stunning Cat Cat Waterfall . This traditional village offers wonderful photo opportunities and a chance to shop for unique handmade souvenirs for your family and friends.
In the afternoon, you will have free time to explore the Sapa local market , where you can enjoy the lively atmosphere and discover local products and handicrafts. If the weather is clear, you may choose to take the Fansipan Cable Car , reaching the highest peak in Indochina and enjoying breathtaking panoramic mountain views. Overnight in Sapa.
Includes: Accommodation with breakfast, lunch, private tour, English-speaking guide, entrance fees Excludes: Dinner and personal expenses

Day 6: Morning in Sapa & Return to Hanoi
This morning, you are free to relax or explore Sapa at your own pace, or visit the local market to experience the lively morning atmosphere and daily trading activities.
At 2:00 PM, our driver will pick you up and transfer you back to Hanoi . Enjoy a comfortable journey as you travel through scenic mountain and countryside landscapes on the way to the capital.
Upon arrival in Hanoi , you will check in at your hotel and have time to rest and refresh after the journey. In the evening, you are free to explore the Hanoi Old Quarter , enjoy famous street food, or relax in one of the city’s charming coffee shops. This is a perfect opportunity to experience the vibrant culture and energy of Hanoi.
Includes: Accommodation with breakfast, shuttle bus to Hanoi Excludes: Lunch, dinner, and personal expenses
Note: If you would like to return to Hanoi in the morning, we are happy to arrange it for you.

Day 7: Halong Bay Cruise Itinerary – Overnight on cruise
11:45 – Upon arrival, you will be warmly welcomed by the cruise crew before boarding. Check in and enjoy a delicious lunch while the cruise sails through the breathtaking landscapes of Ha Long Bay and Lan Ha Bay .
15:30 – Take part in exciting onboard activities such as kayaking through serene waters, swimming in the emerald sea, or joining a fun cooking class to learn local specialties.
As the sun begins to set, enjoy a sunset party on deck—an unforgettable moment to capture the golden beauty of Ha Long Bay .
19:00 – Indulge in a romantic dinner onboard, enjoying exquisite cuisine while admiring the peaceful night scenery of the bay.
Halong Bay & Lan Ha Bay Cruises:
4★ Sena Cruises or similar
5★ Mon Cheri Cruises or similar
Includes: 2-day, 1-night cruise, private transfer, English-speaking guide on board, meals on board, cruise activities Excludes: Drinks and personal expenses
Note: All itineraries in the Ha Long Bay region are subject to change depending on cruise program, weather conditions, tidal levels, and local authority regulations without prior notice.

Day 8: Morning Cruise & Fly to Hue
6:30 – 7:30 AM: Start your day with a delightful breakfast onboard while enjoying the breathtaking views of Ha Long Bay .
After breakfast, take part in relaxing onboard activities before enjoying a delicious lunch as the cruise continues sailing through the calm and scenic waters of the bay.
11:40 AM: Disembark from the cruise and return to the port. From there, you will take a shuttle bus back to Hanoi , followed by a transfer to the airport for your flight to Hue .
Upon arrival in Hue , our friendly guide and driver will welcome you and transfer you to your hotel for check-in. The rest of the day is free for you to relax or explore the charming city at your own pace.
Accommodation:
4★ White Lotus Hotel or similar
5★ Silk Path Grand Hue Hotel or similar
Includes: Cruise with breakfast, lunch, private transfer, flight ticket to Hue Excludes: Dinner, drinks, and personal expenses

Day 9: Hue City Tour & Transfer to Hoi An
Continue by road to a peaceful valley where the royal tombs of the Nguyen Dynasty are located. You will visit two highlights: the Minh Mang Tomb and Khai Dinh Tomb , offering insight into imperial life, history, and unique Vietnamese architecture.
12:30: Enjoy lunch at a local restaurant serving traditional Hue cuisine in a beautiful garden setting.
After lunch, transfer to the train station to take the Heritage Train to Da Nang . Upon arrival, our driver will meet you and transfer you to Hoi An .
Suggested hotels: 4-star or 5-star hotel on request
4★ Delicacy Hotel or similar
5★ Royal Hoi An – Gallery or similar
Includes: Accommodation with breakfast, lunch, private city tour, train ticket, entrance fees Excludes: Dinner and personal expenses

Day 10: Hoi An Countryside vespa tour
Visit a local farm in the Hoi An countryside , where you will learn about rice, vegetable, and cereal cultivation and experience the daily life of local farmers. Continue to explore traditional rural crafts such as weaving, rice wine making, and wood carving. You will also learn about modern local industries like bird’s nest farming and aquaculture.
Next, visit a local family home to enjoy a delicious home-cooked meal, offering a genuine insight into the lifestyle of middle-class Vietnamese families. This experience allows you to connect with local people and enjoy meaningful cultural exchange in Hoi An .
Note: If you prefer not to ride a Vespa, the tour can be arranged by Jeep car instead.
Includes: Accommodation with breakfast, lunch, countryside tour by Vespa or Jeep Excludes: Dinner and personal expenses

Day 11: Free Day to Explore Hoi An
Today is a free day to explore Hoi An . Maybe browse the cobbled streets and art galleries or hire a bike and cycle through rice paddies out to Cua Dai Beach . Maybe browse for paintings, ceramics and colourful cloth lanterns in the town’s markets and preserved Chinese shophouses . If you’re craving a new look, you could pay a visit to one of the hundreds of tailors and get something special made. Hoi An is also known for its delicious regional food, so be sure to enjoy a meal at a riverside restaurant or perhaps partake in a cooking class .
Includes: Accommodation with breakfast Excludes: Lunch, dinner and personal expenses

Day 12: Morning Flight to Ho Chi Minh City & Sightseeing Tour
This morning, you will take an early flight to Ho Chi Minh City , formerly known as Saigon . This vibrant metropolis is Vietnam’s main commercial hub and a dynamic cultural center with a rich historical heritage.
Upon arrival, Asia Eyes Travel ’s tour guide and driver will welcome you at the airport and begin a city sightseeing tour. Visit the iconic Reunification Palace , the historic Notre Dame Cathedral , and the elegant Saigon Opera House , all reflecting the city’s colonial charm and cultural significance. Continue to the War Remnants Museum , where powerful exhibits provide deep insight into the Vietnam War and its lasting impact.
Suggested hotels: 4-star or 5-star hotel on request
4★ Saigon Prince Hotel or similar
5★ Caravelle Saigon or similar
Includes: Accommodation with breakfast, lunch, private tour, entrance fees, English-speaking guide Excludes: Dinner and personal expenses

Day 13: Mekong Delta Exploration Itinerary
Upon arrival in Ben Tre , you will begin a relaxing boat trip along the Mekong River , where you can enjoy the fresh air and admire traditional stilt houses along the riverbanks. Continue your journey by exploring local handicraft workshops and experiencing the authentic daily life of the Mekong people, including opportunities to interact and shop with local vendors.
Next, enjoy a traditional sampan boat ride through narrow palm-lined canals, offering a peaceful and immersive experience of the Mekong Delta’s natural beauty and calm atmosphere.
Includes: Accommodation with breakfast, lunch, small group tour, entrance fees, English-speaking guide Excludes: Dinner and personal expenses

Day 14: Ho Chi Minh – Free day
Today, you are free to explore the vibrant Ho Chi Minh City at your own pace. Discover its rich history, dynamic culture, and iconic landmarks, or enjoy shopping at bustling local markets and modern shopping malls. This is the perfect opportunity to experience the city in your own way, whether you prefer sightseeing, café hopping, or finding unique souvenirs.
Includes: Accommodation with breakfast Excludes: Lunch, dinner, and personal expenses

Day 15: Ho Chi Minh – Departure
We sincerely hope you have had a wonderful experience traveling with Asia Eyes Travel DMC Vietnam and created lasting memories during your journey. Thank you very much for choosing our services.
We look forward to welcoming you and your family again on your next adventure in Vietnam.
Includes: Private airport transfer Excludes: English-speaking guide Accommodation: N/A
Note: Late check-out available upon request.`,
    duration:    "15 Days/14 Nights",
    price:       1450,
    categoryIds: ["1"],
    cityIds:     ["2", "3", "4", "1", "13", "12", "21", "20"],
    featuredTour: false,
    onSale:       true,
    saleDiscountPercentage: 15,
  },
  {
    id:          "56",
    title:       "Best Of Vietnam Package Tour in 14 Days",
    imageUrl:    "https://asiaeyestravel.com/uploads/source/best-of-vietnam-package-tour-in-14-days.png",
    description: `Best of Vietnam Package Tour in 14 Days starts from Hanoi and ends in central Vietnam. You will explore and experience a Vietnam package tour that covers culture, history, and UNESCO World Heritage sites. Explore the Hanoi street food , enjoy an overnight stay on luxury cruises in Halong Bay or Lan Ha Bay , and then visit the stunning Ninh Binh with the Trang An Complex, a natural and cultural heritage site. Continue your journey to Sapa , where you’ll be amazed by the magnificent mountainous views and have opportunities to meet the hill tribes of northern Vietnam.
Next, travel to central Vietnam to visit the Hue Imperial City and the Hoi An Ancient Town — a UNESCO World Heritage site. Experience the magical, lantern-lit streets of Hoi An , which attract tourists from around the world. You will also explore the Hoi An countryside with Vespa tours or Jeep rides , offering a deeper insight into rural life.
For more details about the 14-day tour package, please contact us for more information and the best price at info@asiaeyestravel.com or WhatsApp : +84935946688 (Thuc Nguyen)`,
    itinerary:   ``,
    duration:    "14 Days/ 13 Nights",
    price:       1345,
    categoryIds: ["1"],
    cityIds:     ["2", "3", "4", "1", "13", "12"],
    featuredTour: false,
    onSale:       true,
    saleDiscountPercentage: 15,
  },
  {
    id:          "57",
    title:       "Luxury Vietnam Beach Holiday 15 Days",
    imageUrl:    "https://asiaeyestravel.com/uploads/source/destinations/beach-tours-amp-holiday.png",
    description: `Hanoi: is the capital of Vietnam is famous with French style old buildings, Temple, Old Quarter Area and food.
Ha Long Bay is UNESCO world heritage site and famous for its fresh and calm water filled with thousands of islands and islets and overnight cruises.
Ninh Binh: located in the Northern Vietnam (100kms from Hanoi Capital): Unique with wild natural scenery and charming mountains and amazing caves.
Hoi An: Located in the center of Vietnam, Hoi An is a beautiful, old town with historic architecture, traditional culture and textiles.
Nha Trang is a vibrant resort city in southern Vietnam, is celebrated for its stunning beaches.`,
    itinerary:   `Day 1: Hello Vietnam - Xin Chao Vietnam
Upon your arrival at Noi Bai International Airport , the friendly Asia Eyes Travel tour guide and driver will warmly welcome you and transfer you to your hotel.
After check-in, you are free to relax or explore the beauty of Hanoi Capital at your own pace, discovering its charming streets, historic sites, and local life.
Includes: Private Airport pick-up, English-speaking tour guide
Excludes: Meals, personal expenses
Accommodation :
4-star Hotels in Hanoi: Tirant hotel or similar hotels
5-star hotels in Hanoi: De l'Opera Hanoi - MGallery similar hotels

Day 2: Experience Scooter Tour combines with street food & drink
In the morning 8:00: Our female drivers and tour guide will pick you up at your hotel to start a tour to visit Hanoi city.
Firstly, you will go to a very famous coffee shop to enjoy Egg coffee that is founded in Hanoi, passed down through generations, is Café Giang (Giang Café). Next, our drivers will take you to the Hanoi Opera House built in 1911 to take some photos together as a little memory of Hanoi.
After that we take you to local markets to see people selling everyday essentials.
Joining to Paloma Motorbike Tour, we will take you around the small alleys to visit the old houses and daily life of urban people that are very little known by tourists when visiting Hanoi.
Apart from the small alleys, we will take you through the most highlight places such as: Train Street , Ho Chi Minh Mausoleum , Huu Tiep Lake (B52) where vestiges of war are left here.
A must-see place is the historic Long Bien bridge designed by Daydé & Pillé company (French company), the same one that also built the Effel tower in Paris. The bridge has witnessed two fierce resistance wars of the Vietnamese people. They are the war against the US and the French. Let take some more photos here for your memory. Tour ends at your hotel.
Notes:
Please keep in mind that we do not go inside the Ho Chi Minh Mausoleum on “Hanoi City sights and street food”tour. This attraction requires a lot of time to fully appreciate so we recommend that you visit them on your own so that we can make the most of time you have with us.
The above itinerary is subject to change, based on the day’s weather and traffic conditions.
Includes: Scooter tour with experienced drivers, English-speaking tour guide, helmet, rain poncho (if needed), egg coffee, breakfast, lunch
Excludes: Drinks beyond program, personal expenses
Accommodation :
4-star Hotels in Hanoi: Tirant hotel or similar hotels
5-star hotels in Hanoi: De l'Opera Hanoi - MGallery similar hotel

Day 3: Hanoi – Ninh Binh – Overnight in Ninh Binh
At 7:30 AM , our guide and driver will meet you at your hotel and begin a scenic 110-kilometer journey through the peaceful countryside. Along the way, you can enjoy views of green fields, small villages, and daily local life.
At 10:00 AM , you arrive at the impressive Bai Dinh Pagoda Complex , the largest pagoda in Vietnam and Southeast Asia. Located at the foot of Dinh Mountain , the pagoda is surrounded by beautiful river valleys and dramatic limestone mountains. The breathtaking scenery and peaceful atmosphere make this place truly special.
At 12:00 PM , enjoy lunch at a local restaurant, where you will taste delicious Vietnamese local cuisine .
At 1:30 PM , continue your journey to the Trang An Grottoes , a famous natural site with towering limestone mountains rising from rice fields. This area is known for its quiet valleys, freshwater ponds, and lush jungle landscapes.
Overnight in Ninh Binh .
Includes: Private transfer, English-speaking tour guide or Joined Small Ninh Binh Group tour, breakfast, lunch, entrance fees, boat trip
Excludes : Dinner, drinks, personal expenses
Accommodation :
4-star Hotels: Hidden Charm Hotel & Resort or Similar
5-star hotels: Nham Village Resort

Day 4: Ninh Binh – Halong Bay – Overnight on boat
At 7:30 AM , our luxury van will pick you up at your hotel and transfer you to Halong Bay . Enjoy a comfortable drive through the countryside before reaching the bay. At 11:45 AM , you arrive in Halong, where the friendly cruise crew will warmly welcome you. You will board the cruise, check in, and enjoy a delicious lunch while the boat slowly cruises through the stunning scenery of Halong Bay and Lan Ha Bay , famous for their limestone islands and emerald waters.
In the afternoon at 3:30 PM , you will take part in exciting cruise activities such as kayaking, swimming , or joining a Vietnamese cooking class . Later, relax on the deck and enjoy a sunset party , an ideal moment for photography lovers to capture beautiful sunset views over the bay.
At 7:00 PM , enjoy a romantic dinner on board , surrounded by the peaceful atmosphere of the bay.
Includes: Luxury van transfer, cruise program, English-speaking cruise guide, breakfast, lunch, dinner, entrance fees, kayaking, swimming, cooking class
Excludes: Drinks, personal expenses
Halong Bay and Lan Ha Bay Cruises
4-star cruises: Sena cruise or similar cruises
5-star cruises: Mon Cheri cruise or similar cruises

Day 5: Halong Bay – Hanoi – Flight to Hoian
From 6:30 AM to 7:30 AM , breakfast is served on board, allowing you to enjoy a relaxing morning with beautiful views of the bay. After breakfast, you will continue to take part in the cruise’s activities, such as sightseeing or light exploration, before enjoying an early lunch on the cruise.
At 11:50 AM , you will disembark from the cruise and return to the port. From there, you will get on a bus for a transfer to Hanoi Airport to catch your flight to Danang .
Upon arrival at Danang Airport , our friendly driver will be waiting to welcome you. You will then be transferred by private vehicle to your resort in Hoi An . After check-in, you can relax and enjoy the peaceful atmosphere of this charming coastal town.
Includes: Breakfast, lunch, cruise activities, shuttle bus to Hanoi airport, domestic flight Hanoi – Danang , airport pick-up, private transfer to Hoi An hotel
Excludes: Dinner, drinks, personal expenses
Accommodation:
4-star hotels: Delicacy Hotel or similar hotels
5-star hotels: Royal Hoi An – Gallery or similar hotels

Day 6: Legend Jeep journey to explore Hoi An countryside
Experience Hoi An in a unique and exciting way with the Hoi An Jeep Tour , combining authentic countryside views and highlighted sightseeing. This tour allows you to explore the daily lifestyle of local people while learning about the rich history of Hoi An. Along the journey, you will have the chance to stop at one of the top trending local coffee spots , a must-visit place to enjoy local flavors and relax like a local.
Your adventure continues as you travel beyond the town center, driving through a network of zigzag back roads and quiet local villages . As the jeep moves deeper into the countryside, you will be surrounded by beautiful panoramic views of lush green rice paddies stretching across the landscape. This experience offers a perfect mix of culture, nature, and local life, giving you unforgettable memories of Hoi An’s peaceful countryside.
Includes: Jeep countryside tour, English-speaking tour guide, breakfast, lunch
Excludes: Drinks, dinner, personal expenses
Accommodation :
4-star hotels: Delicacy Hotel or similar hotels
5-star hotels: Royal Hoi An – Gallery or similar hotels

Day 7/8/9:  Hoian – Free days
These free days to explore Hoi An. Maybe browse the cobbled streets and art galleries or hire a bike and cycle through rice paddies out to Cua Dai Beach. Maybe browse for paintings, ceramics and colourful cloth lanterns in the town’s markets and preserved Chinese shophouses. If you’re craving a new look, you could pay a visit to one of the hundreds of tailors and get something special made. Hoi An is also known for its delicious regional food, so be sure to enjoy a meal at a riverside restaurant or perhaps partake in a cooking class.
Includes: Breakfast
Excludes: Lunch, dinner, tours, transfers, personal expenses
Accommodation :
4-star hotels: Delicacy Hotel or similar hotels
5-star hotels: Royal Hoi An – Gallery or similar hotels

Day 10:  Hoi An – Danang – Flight to Nha Trang
These days, you will have your own free time to relax and explore at your own pace. You can visit a local market, where you’ll experience the vibrant atmosphere, discover fresh produce, and shop for unique souvenirs. If you’re looking for adventure, consider taking a boat trip to explore nearby islands, enjoy stunning coastal views, or even try snorkeling in crystal-clear waters. Whether you prefer unwinding on the beach, indulging in delicious local cuisine, or discovering hidden gems, these days are yours to enjoy. Make the most of your time and create unforgettable memories!
Includes: Breakfast, private transfer to airport, domestic flight Danang – Nha Trang
Excludes: Lunch, dinner, drinks, personal expenses
Accommodations :
4-star hotels: Havana Nha Trang Hotel or similar hotels
5-star hotels: Sheraton Nha Trang Hotel & Spa or similar hotels

Day 15: Nha Trang - Departure
Today, you have free time until our driver arrives to pick you up and transfer you to the airport for your flight to your next destination. We hope you have enjoyed every moment of your journey with us, creating unforgettable memories along the way.
Includes: Private airport transfer
Excludes: Meals, tour guide, personal expenses and late check - out
On behalf of Asia Eyes Travel, I am Thuc Nguyen. I would like to sincerely thank you for choosing us and hope to welcome you again on your next journey!`,
    duration:    "15 DAYS/ 14 NIGHTS",
    price:       2370,
    categoryIds: ["1", "3", "4"],
    cityIds:     ["2", "3", "1", "13", "28"],
    featuredTour: false,
    onSale:       true,
    saleDiscountPercentage: 15,
  },
];


export const cruises = [
  {
    id: "c1",
    title: "Heritage Luxury Day Cruise",
    imageUrl: "https://asiaeyestravel.com/uploads/source/nhung/heritage-cruise-day/overview-anh-tau.webp",
    description: `Halong Heritage Luxury Day Cruise is designed for travelers who appreciate a classic heritage travel style inspired by the European Renaissance . This elegant yacht offers a relaxing Ha Long Bay day tour (6–8 hours) with spacious lounges, a luxury restaurant, and premium interiors. Guests enjoy top-class amenities including an outdoor Jacuzzi , a wide panoramic sundeck , and complimentary towels. The itinerary departs from Tuan Chau International Marina , passing iconic islets before visiting Sung Sot Cave , Luon Cave by kayak or bamboo boat , and Titop Island for swimming or panoramic trekking. The experience is completed with a gentle sunset tea party cruise and a premium seafood buffet lunch , ideal for families, couples, and culture-loving travelers seeking a timeless 5-star Ha Long Bay cruise experience .`,
    itinerary: `FULL DAY From Hanoi to the Wonders of Ha Long Bay
07:45 – 08:15
: Hotel pick-up in Hanoi Old Quarter by limousine. Our tour guide and driver welcome you and begin a comfortable journey to Ha Long Bay.
10:30 – 10:45
: Short break en route for 20–25 minutes to stretch your legs, use restroom facilities, or enjoy a light snack.
11:30 – 11:45
: Welcome aboard Heritage Cruise at Tuan Chau International Port. Complete onboard check-in and enjoy a refreshing welcome drink while the crew introduces the itinerary.
12:00 – 13:15
: Lunch on board. Savor a luxurious buffet featuring fresh Ha Long seafood while cruising past iconic landmarks such as Stone Dog Islet, Stone Incense Burner, and the famous Kissing Rocks.
13:30 – 14:15
: Visit Surprising Cave (Sung Sot Cave), one of the largest and most beautiful caves in Ha Long Bay, admired for its magnificent stalactites and stalagmites.
14:30 – 15:15
: Explore Luon Cave by kayaking or bamboo boat rowed by local residents, gliding through a tranquil lagoon surrounded by towering limestone cliffs.
15:30 – 16:30
: Visit Titov Island. Swim at the sandy beach, hike to the summit for breathtaking panoramic views of Ha Long Bay, or relax in the onboard Jacuzzi.
16:45
: Sunset party onboard. Enjoy complimentary fruits, cakes, juices, and tea while watching the sun set as the cruise heads back to Tuan Chau Port.
17:45 – 18:00
: Disembark at the harbor and transfer back to Hanoi by comfortable limousine.
20:30 – 20:45
: Hotel drop-off in Hanoi Old Quarter. End of services.`,
    duration: "Full Day",
    price: 65,
    cityIds: ["2"],
    sourceUrl: "https://asiaeyestravel.com/halong-heritage-luxury-day-cruise",
    onSale:    false,
    saleDiscountPercentage: null,
  },
  {
    id: "c2",
    title: "Leona day cruise Halong Bay",
    imageUrl: "https://asiaeyestravel.com/uploads/source/nhung/leona-cruise-day-trip/da-cat-anh.webp",
    description: `Leona Day Cruise Halong Bay is one of the most luxurious day cruises in Ha Long Bay , designed in a refined boutique yacht style for upscale travelers. Featuring a modern white steel hull , elegant neutral interiors, and hotel-like comfort , Leona delivers a premium experience for those seeking exclusivity and style. This luxury Ha Long Bay day tour (7–8 hours) departs from Ha Long International Cruise Port , visiting iconic highlights such as Sung Sot Cave and Titop Island , where guests can enjoy swimming or light trekking . The journey also includes immersive activities like kayaking in Halong Bay or a bamboo boat at Luon Cave , along with time to relax at the outdoor swimming pool or unwind in private balcony cabins . Curated by Asia Eyes Travel , the experience is elevated with an international seafood buffet and a vibrant sunset party cruise featuring DJ or live music , making it perfect for luxury travelers , VIP guests , and those seeking a truly unforgettable Ha Long Bay luxury cruise experience .`,
    itinerary: `FULL DAY From Hanoi to the Wonders of Ha Long Bay
07:00
: Meet our driver at your hotel in Hanoi Old Quarter.
07:15
: Depart Hanoi for Quang Ninh Province via the new expressway aboard an ultra-luxurious chauffeur-driven limousine.
10:00
: Arrive at Ha Long International Cruise Port and complete express check-in for a smooth and seamless boarding experience.
10:30
: Enjoy a refreshing welcome drink while admiring the breathtaking scenery of Ha Long Bay, with majestic limestone mountains rising from emerald waters.
11:15
: Savor a delightful lunch at the 5-star restaurant onboard Leona Cruise while cruising past thousands of spectacular limestone karsts in this UNESCO World Heritage Site.
12:15
: Begin the first excursion to Luon Cave, known for its arched entrance, ancient rock formations, and natural habitat of golden monkeys. Experience kayaking or a bamboo boat ride in this peaceful setting.
13:30
: Explore Sung Sot Cave (Surprising Cave), the largest and most impressive cave in Ha Long Bay, featuring magnificent stalactites and stalagmites formed over millions of years.
14:15
: Visit Titov Island, famous for its crescent-shaped beach and crystal-clear waters. Swim, relax on the shore, or hike to the summit for a stunning panoramic view of Ha Long Bay.
15:30
: Unwind at a sunset party with music and light refreshments while cruising through the most picturesque areas of the bay as the sun gently sets.
17:30
: Disembark at the harbor. Farewell and thank you for traveling with us—we look forward to welcoming you again on your next journey.`,
    duration: "Full Day",
    price: 65,
    cityIds: ["2"],
    sourceUrl: "https://asiaeyestravel.com/leona-day-cruise-halong-bay",
    onSale:       true,
    saleDiscountPercentage: 15,
  },
  {
    id: "c3",
    title: "Lan Ha Bay Serenity Grandeur Day Cruise",
    imageUrl: "https://asiaeyestravel.com/uploads/source/nhung/serenity-grandeur-day-cruise/serenity-grandeur-cruises-(3).webp",
    description: `Lan Ha Bay Serenity Grandeur Day Cruise is the most advanced 6-star luxury day cruise in Lan Ha Bay – Cat Ba , officially launched in June 2025 and setting new standards for luxury cruises in Vietnam through 2026 . Designed in a stunning European-style super yacht concept , this iconic vessel delivers an unforgettable 8-hour Lan Ha Bay day tour for luxury travelers and high-end groups . The cruise features exceptional onboard facilities, including three water relaxation zones , a Jacuzzi , a swimming pool onboard , and a unique floating sea pool , along with an exciting water slide into the bay . Guests can explore top attractions such as Cai Beo Ancient Fishing Village , Viet Hai Village in Cat Ba National Park , and hidden lagoons through kayaking in Lan Ha Bay or swimming at Ba Trai Dao Beach and Turtle Islet . Curated by Asia Eyes Travel , the journey is enhanced with a premium seafood buffet (100+ Asian–European dishes) and a stylish sunset party cruise , making it the perfect choice for luxury seekers , VIP travelers , and those looking for an exclusive Lan Ha Bay luxury cruise experience .`,
    itinerary: `FULL DAY Hanoi - Cat Ba Island - Lan Ha bay
7:00 – 7:30
: Pick up guests from hotels in Hanoi Old Quarter and depart for Cat Ba Island.
10:15 – 10:30
: Arrive on Cat Ba Island and enjoy a scenic coastal drive from Cai Vieng Port to Ben Beo Harbor.
11:00
: Warm welcome aboard
Serenity Cruises
. Enjoy a refreshing welcome drink while the tour guide provides key information about the cruise, itinerary, and important notes.
11:30 – 12:20
: Enjoy a delicious lunch onboard. A buffet lunch will be served for groups of over 40 guests.
13:00
: Visit Viet Hai Port. Disembark and transfer by electric tram or bicycle to Viet Hai Village. Experience a fish foot massage, stroll through traditional houses, or interact with local residents for an authentic cultural encounter.
14:30
: Kayaking and swimming in the tranquil waters of Lan Ha Bay.
15:40
: Cruise back toward Beo Pier. Relax on the sundeck with refreshing drinks while enjoying the peaceful bay scenery.
16:15
: Enjoy a small sunset party with fresh fruits, cookies, and tea served onboard.
16:45
: Return to Ben Beo Harbor, say goodbye to Lan Ha Bay and the Serenity Cruises team, then transfer back to Hanoi by shuttle bus.
20:30
: Arrive in Hanoi Old Quarter, concluding an unforgettable journey.`,
    duration: "Full Day",
    price: 69,
    cityIds: ["2"],
    sourceUrl: "https://asiaeyestravel.com/lan-ha-bay-serenity-grandeur-day-cruise",
    onSale:    false,
    saleDiscountPercentage: null,
  },
  {
    id: "c4",
    title: "Jade Sails Day Cruise Lan Ha Bay",
    imageUrl: "https://asiaeyestravel.com/uploads/source/nhung/jade-sails/cruise.webp",
    description: `Jade Sails Day Cruise is a luxury 5-star day cruise in Lan Ha Bay , offering a quieter and more elegant alternative to traditional cruises in Ha Long Bay. This modern yacht provides an unforgettable 8-hour Lan Ha Bay day tour , perfect for travelers seeking comfort, scenery, and relaxation. Many visitors search for the Jade Sails Day Cruise price before booking this premium experience. The cruise departs from Tuan Chau Marina and sails past the scenic Da Chong Islet. Guests can kayak or take a bamboo boat at Dark and Bright Cave, swim in clear waters, or relax on the sundeck. The trip includes a gourmet lunch and sunset party, making it ideal for couples and families. Contact Asia Eyes Travel for the best Jade Sails Day Cruise price and deals.`,
    itinerary: `FULL DAY Hanoi - Lan Ha bay
07:00
: Meet our driver at your hotel in Hanoi Old Quarter.
07:15
: Depart Hanoi for Quang Ninh Province via the new expressway aboard an ultra-luxurious chauffeur-driven limousine. A short stop will be made at a Pearl Farm for restrooms and refreshments, ensuring a comfortable journey.
10:00
: Welcome aboard
JadeSails Cruise
with a warm greeting from the professional crew.
11:30
: Enjoy a freshly prepared lunch served onboard while cruising through stunning seascapes and limestone islands.
12:45
: Take a local rowing boat to explore the enchanting
Dark & Bright Caves
, surrounded by dramatic limestone formations and serene lagoons.
14:30
: Kayaking and swimming at
Ao Ech area
in Lan Ha Bay, famous for its tranquil waters and untouched natural beauty.
15:30
: Participate in a fun and informative Vietnamese cooking demonstration onboard.
16:00
: Relax at a sunset party while the cruise gently sails back toward Tuan Chau Marina, enjoying light refreshments and scenic views.
17:30
: Disembark and return to Hanoi comfortably by limousine via the expressway.
19:30
: Drop-off at your hotel doorstep. End of services.`,
    duration: "Full Day",
    price: 70,
    cityIds: ["2"],
    sourceUrl: "https://asiaeyestravel.com/jade-sails-day-cruise",
    onSale:    false,
    saleDiscountPercentage: null,
  },
  {
    id: "c5",
    title: "Catamaran Premium Day Cruise",
    imageUrl: "https://asiaeyestravel.com/uploads/source/nhung/catamaran-premium/cataraman-cruise.webp",
    description: `The Halong Catamaran Premium is a 5-star luxury day cruise in Ha Long Bay and Lan Ha Bay , proudly operated by one of Vietnam’s leading cruise providers. Designed for premium travelers, partners, and international guests, this elegant one-day catamaran cruise uniquely combines Ha Long Bay and Lan Ha Bay in one itinerary . Guests explore the untouched beauty of Ba Trai Dao and Ao Ech , available exclusively on this cruise. Exciting activities include kayaking, optional water motor sports, speedboat village discovery , water slides, and relaxing hammock nets. Onboard experiences feature a refined sunset tea party , breathtaking seascape views, and an engaging Vietnamese cooking class . With strong partnerships across global travel agencies, The Halong Catamaran Premium is an ideal choice for families, couples, and luxury seekers looking for a dynamic yet relaxing 5-star day cruise experience .`,
    itinerary: `FULL DAY: Hanoi - Lan Ha bay - Hanoi
07:45 – 08:30
: Hotel pick-up in Hanoi Old Quarter by our English-speaking tour guide. Pick-up time is approximate due to morning traffic and multiple hotels. Please be ready at your hotel lobby to help expedite the process.
10:00 – 10:15
: Short lavatory break en route. Stretch your legs, use the facilities, or grab a quick snack (and a coffee break for our driver) before continuing the journey.
11:30 – 11:45
: Arrive at Tuan Chau Marina and board the cruise. Our friendly crew will welcome you onboard with a complimentary drink and a short safety briefing as the cruise sets sail.
12:00 – 13:00
: Lunch on board. Enjoy exquisite dishes prepared by our award-winning chef, perfectly paired with cocktails, fine wines, and beers. Drinking water is provided throughout the journey; other beverages are chargeable.
14:00 – 15:00
: Kayaking or bamboo boat excursion to Bright & Dark Cave. Paddle through a hidden grotto into a peaceful private lagoon surrounded by dramatic limestone walls, while listening to local legends shared by your guide.
15:15 – 15:45
: Frog Pond area – swimming and water activities in Lan Ha Bay. Enjoy the trampoline, water slide, swimming, or simply relax onboard and soak in the natural beauty of this serene bay.
16:00
: Cooking demonstration. Learn about one of Vietnam’s most famous traditional dishes and try making fresh Vietnamese summer rolls yourself—an informative and fun cultural experience.
16:30
: Sunset ceremony with tea and cakes. Complimentary Vietnamese tea, fresh fruits, and pastries are served as the cruise sails back amid stunning sunset colors across the bay.
17:45 – 18:00
: Disembark and transfer back to Hanoi by limousine. A short stop will be made along the way before continuing on the highway.
20:00 – 20:30
: Hotel drop-off in Hanoi Old Quarter. Thank you for choosing
Catamaran Premium Day Cruise
for a once-in-a-lifetime experience.
Note: On weekends, some streets in the Old Quarter are closed for walking zones. In such cases, guests will be dropped off at the nearest convenient point.`,
    duration: "Full Day",
    price: 75,
    cityIds: ["2"],
    sourceUrl: "https://asiaeyestravel.com/catamaran-premium-day-cruise",
    onSale:       true,
    saleDiscountPercentage: 15,
  },
  {
    id: "c6",
    title: "Luna Day Cruise Halong Bay",
    imageUrl: "https://asiaeyestravel.com/uploads/source/nhung/luna-cruise-day-cruise/luna-cruise.webp",
    description: `Luna Halong Cruise is the largest cruise in Ha Long Bay , accommodating up to 550 guests and offering a premium luxury cruise experience . Featuring a unique glass-bottom swimming pool , elegant design, and diverse Asian and European cuisine , it delivers comfort and style for modern travelers. With Asia Eyes Travel , guests can enjoy a well-curated Ha Long Bay cruise with vibrant onboard entertainment and world-class service. Ideal for luxury travelers , groups , and corporate events , Luna Halong Cruise stands as a symbol of elegance in Ha Long Bay tourism .`,
    itinerary: `FULL DAY: Hanoi - Halong Bay -Hanoi
6:00 AM – 6:30 AM
: Our limousine bus picks up guests from hotels in Hanoi Old Quarter.
Note: Due to specific traffic conditions in the Old Quarter (especially weekend walking streets), pick-up times may vary slightly. Kindly wait at your hotel lobby from 6:30 AM.
08:30
: Check in at Ha Long International Cruise Port, Bai Chay Ward, Ha Long City, then transfer to Luna Ha Long Cruise.
09:30
: The cruise sets sail, officially beginning the journey to explore the breathtaking beauty of Ha Long Bay.
10:45
: Visit Surprising Cave (Sung Sot Cave), a spectacular limestone cave ranked among the top 10 most beautiful caves in the world by the Czech Association of Travel Agents and Brokers.
11:45
: Explore Titop Island, where guests can swim in crystal-clear turquoise waters or climb to the summit for a stunning panoramic view of Ha Long Bay.
12:30
: Enjoy a premium lunch at Luna Ha Long Cruise’s luxurious restaurant, featuring nearly 100 refined Asian and European dishes.
13:45
: Optional visit to Luon Cave, one of the most unique caves in Ha Long Bay. Experience a peaceful bamboo boat ride rowed by locals or enjoy kayaking through the tranquil lagoon.
15:00
: Relax with a sunset teabreak and live music party on the 4th-floor sundeck, surrounded by magnificent bay views.
16:30
: Disembark at the port. End of the tour with unforgettable memories of Ha Long Bay.`,
    duration: "Full Day",
    price: 70,
    cityIds: ["2"],
    sourceUrl: "https://asiaeyestravel.com/luna-day-cruise",
    onSale:    false,
    saleDiscountPercentage: null,
  },
  {
    id: "c7",
    title: "Dolphin Day Cruise Halong Bay",
    imageUrl: "https://asiaeyestravel.com/uploads/source/nhung/dolphin-cruise---day-cruise/dolpin-cruise.webp",
    description: `Dolphin Day Cruise Halong Bay is the newest 6-star luxury day cruise in Ha Long Bay , officially launched in September 2025 , designed as a floating Beach Club cruise and an all-in-one entertainment complex. This premium Ha Long Bay day tour (7–8 hours) offers record-breaking amenities, including the largest four-season saltwater swimming pool (268m²) on the bay, an outdoor Jacuzzi , and a spectacular Domestage for DJ parties and live music. The 5-deck yacht features a 360-degree panoramic lounge , a restaurant serving international buffet lunch with over 100 Asian–European dishes , and 16 private bungalows. The itinerary includes Sung Sot Cave , Titop Island , kayaking or bamboo boat at Luon Cave , and a stylish sunset party cruise , perfect for luxury travelers, events, and high-end leisure seekers.`,
    itinerary: `FULL DAY Hanoi - Halong Bay
7:00 AM – 7:30 AM
: Our limousine bus will pick up guests from hotels located in Hanoi Old Quarter.
Note: Due to specific traffic conditions in the Old Quarter (especially weekend walking streets), pick-up times may vary slightly. Kindly wait at your hotel lobby from 7:00 AM.
9:30 AM – 10:30 AM
: Warm welcome at Ha Long International Cruise Port, where our team assists with check-in procedures.
10:30 AM – 11:00 AM
: Transfer by electric car to Dolphin Cruise. Embark the vessel and begin a scenic journey into the bay.
11:00 AM – 12:30 PM
: Enjoy a refreshing welcome drink while listening to safety briefings, cruise regulations, and an overview of the Ha Long Bay itinerary.
12:30 PM – 2:00 PM
: Visit the magnificent Surprise Cave, famous for its spectacular formations of thousands of stalactites and stalagmites.
2:00 PM – 3:15 PM
: Return onboard and continue cruising toward Luon Cave. Explore the tranquil lagoon by gliding through a natural water tunnel, surrounded by serene landscapes and rich wildlife.
3:15 PM – 4:30 PM
: The final highlight of the journey: Titop Island, offering panoramic views or time to relax on the beach.
4:30 PM – 5:30 PM
: Cruise back to the harbor while savoring light snacks, enjoying romantic live music at sunset, or unwinding in Vietnam’s largest luxury pool onboard.
5:30 PM – 5:45 PM
: Arrive back at the harbor and disembark, concluding a memorable Ha Long Bay experience.`,
    duration: "Full Day",
    price: 73,
    cityIds: ["2"],
    sourceUrl: "https://asiaeyestravel.com/dolphin-day-cruise-halong-bay",
    onSale:    false,
    saleDiscountPercentage: null,
  },
  {
    id: "c8",
    title: "Aqua Of The Seas 3 days 2 nights",
    imageUrl: "https://asiaeyestravel.com/uploads/source/nhung/aqua-of-the-sea-5-star/aqua-of-the-sea.webp",
    description: `Aqua Of The Seas is a meticulously engineered 5-star metal super-yacht , launched in 2023 and designed to set a new benchmark for luxury cruising in Ha Long Bay and Lan Ha Bay . The yacht features 32 spacious luxury cabins ranging from 38m² to 160m², all equipped with private balconies , floor-to-ceiling windows , and refined ocean-view bathtubs . The 3 Days 2 Nights itinerary is thoughtfully curated, combining kayaking and swimming at Tra Bau , a hands-on Vietnamese cooking class , exploration of Dark & Bright Cave by bamboo boat , and night squid fishing , delivering a balanced journey of sophistication, immersion, and authentic bay exploration. To secure the best available offer and exclusive privileges , travelers are advised to contact the Asia Eyes Travel team for tailored assistance and preferred rates.`,
    itinerary: `Day 1: From Hanoi to Tuan Chau – Begin Your Lan Ha Bay Cruise
08:15–08:35:
Pick-up from Hanoi Old Quarter via modern expressway transfer.
11:30:
Arrive at
27B – Tuan Chau International Port
and complete check-in procedures at the waiting lounge.
12:00:
Transfer by speedboat to
Aqua Of The Seas Cruise
. Guests are warmly welcomed onboard with a refreshing welcome drink and a brief introduction to the cruise itinerary and safety guidelines.
13:00:
Enjoy a buffet lunch while cruising through the magnificent
Ha Long Bay
and
Lan Ha Bay
, admiring spectacular limestone formations rising from emerald waters.
15:00:
Aqua Of The Seas Cruise arrives at
Tra Bau area
in Lan Ha Bay. Guests can enjoy kayaking and swimming in the calm, crystal-clear sea.
17:00:
Relax onboard or head to the sundeck to witness a stunning sunset, join the
Sunset Party
, and participate in a Vietnamese cooking class featuring authentic local dishes.
19:30:
Dinner is served with a refined set menu in the elegant onboard restaurant.
20:30:
Cheerful evening activities including card games, chess, karaoke, and squid fishing.
Overnight:
Stay overnight on
Aqua Of The Seas Cruise
.
Day 2: A Gentle Morning of Tai Chi, Viet Hai Village Visit & Bay Activities
06:00:
Start your day with a peaceful Tai Chi session on the sundeck, breathing in the fresh morning air and embracing the serene beauty of Lan Ha Bay.
07:00:
Enjoy breakfast onboard as the cruise glides gently past a spectacular maze of large and small limestone islands.
08:00:
Transfer to the day cruise and begin the journey south of Lan Ha Bay toward the tranquil Viet Hai Village.
08:30:
Arrive at Viet Hai Village and enjoy a 5 km cycling excursion through lush jungle paths and picturesque countryside, discovering a secluded village nestled deep within Cat Ba National Park and surrounded by towering mountains. Electric cars are available for guests who prefer not to cycle.
12:30:
Return to the day cruise and savor a traditional Vietnamese lunch served onboard.
14:00:
Kayaking adventure in Lan Ha Bay at Tai Keo Islet, exploring nearby fishing villages by kayak, or relax with swimming at the pristine Ba Trai Dao natural beach with crystal-clear waters.
16:00:
Return to Aqua Of The Seas Cruise and enjoy leisure time, join the sunset party at the outdoor bar, or unwind on the sundeck while admiring the breathtaking bay scenery.
19:15:
Dinner is served with a flavorful set menu at the elegant onboard restaurant.
21:30:
Evening leisure time to enjoy the magical night view of Lan Ha Bay at the bar, relax on the sundeck, sing karaoke, or experience squid fishing.
Overnight:
Stay overnight on Aqua Of The Seas Cruise.
Day 3: Tai Chi at Sunrise, Cat Ba Military Hospital Cave & Leisure Cruise to Tuan Chau - Hanoi
06:00:
Start your day with a peaceful Tai Chi session on the sundeck, an ideal way to embrace the tranquil beauty of the bay. Early risers may wake up from 05:30 to admire the sunrise.
06:30:
Enjoy breakfast onboard while the cruise gently sails through the bay.
07:15:
Transfer to Cat Ba Island to visit the Military Hospital Cave, one of the most remarkable historical sites on the island. Beyond its impressive natural formations, the cave once served as a secret field hospital built deep inside a limestone mountain during the resistance war against the United States.
09:30:
Return to the cruise and prepare for check-out procedures.
09:45:
Relish a delightful brunch buffet at the onboard restaurant.
10:45:
Leave the cruise and transfer by tender boat back to Tuan Chau Marina.
11:15:
Disembark at Tuan Chau Marina, bid farewell, and conclude your memorable journey.`,
    duration: "3 Days/ 2 Nights",
    price: 280,
    cityIds: ["2"],
    sourceUrl: "https://asiaeyestravel.com/aqua-of-the-seas-3-days-2-nights",
    onSale:       true,
    saleDiscountPercentage: 15,
  },
  {
    id: "c9",
    title: "Aqua Of The Seas 2 days 1 night",
    imageUrl: "https://asiaeyestravel.com/uploads/source/nhung/aqua-of-the-sea-5-star/aqua-of-the-sea.webp",
    description: `Aqua Of The Seas is a premium 5-star metal super-yacht launched in 2023, offering an upscale 2 Days 1 Night luxury cruise across Ha Long Bay and Lan Ha Bay . The yacht features 32 luxury cabins ranging from 38m² to 160m², all designed with private balconies , floor-to-ceiling windows, and ocean-view bathtubs, including the exclusive President Cabin with a private living area. Departing from Tuan Chau Marina , the itinerary highlights Tra Bau with kayaking , swimming, and relaxation at the outdoor infinity pool . Guests enjoy a sunset party, Vietnamese cooking class , fine dining, and night squid fishing . Day two includes sunrise Tai Chi , a bamboo boat visit to the iconic Dark & Bright Cave , and a leisurely brunch before disembarkation.`,
    itinerary: `Day 1: From Hanoi to Tuan Chau – Begin Your Lan Ha Bay Cruise
08:15–08:35:
Pick-up from Hanoi Old Quarter via modern expressway transfer.
11:30:
Arrive at
27B – Tuan Chau International Port
and complete check-in procedures at the waiting lounge.
12:00:
Transfer by speedboat to
Aqua Of The Seas Cruise
. Guests are warmly welcomed onboard with a refreshing welcome drink and a brief introduction to the cruise itinerary and safety guidelines.
13:00:
Enjoy a buffet lunch while cruising through the magnificent
Ha Long Bay
and
Lan Ha Bay
, admiring spectacular limestone formations rising from emerald waters.
15:00:
Aqua Of The Seas Cruise arrives at
Tra Bau area
in Lan Ha Bay. Guests can enjoy kayaking and swimming in the calm, crystal-clear sea.
17:00:
Relax onboard or head to the sundeck to witness a stunning sunset, join the
Sunset Party
, and participate in a Vietnamese cooking class featuring authentic local dishes.
19:30:
Dinner is served with a refined set menu in the elegant onboard restaurant.
20:30:
Cheerful evening activities including card games, chess, karaoke, and squid fishing.
Overnight:
Stay overnight on
Aqua Of The Seas Cruise
.
Day 2: Tai Chi Session – Cat Ba Military Hospital Cave – Tuan Chau Island – Hanoi
06:00:
Begin your day with a gentle
Tai Chi session on the sundeck
, a perfect way to embrace the tranquil beauty of the bay. Early risers may wake up from
05:30
to admire the peaceful sunrise.
06:30:
Enjoy breakfast onboard as the cruise glides through calm and scenic waters.
07:15:
Transfer to
Cat Ba Island
to explore
Military Hospital Cave
, one of the island’s most remarkable historical sites. Beyond its impressive natural formations, the cave once served as a secret field hospital hidden deep inside a limestone mountain during the resistance war against the United States.
09:30:
Return to
Aqua Of The Seas Cruise
and prepare for check-out.
09:45:
Delight in a flavorful
brunch buffet
served at the onboard restaurant.
10:45:
Disembark from the cruise and transfer by tender boat back to
Tuan Chau Port
.
11:15:
Arrive at Tuan Chau Port, bid farewell, and conclude your memorable cruise journey.`,
    duration: "2 Days/ 1 Night",
    price: 140,
    cityIds: ["2"],
    sourceUrl: "https://asiaeyestravel.com/aqua-of-the-seas-2-days-1-night",
    onSale:    false,
    saleDiscountPercentage: null,
  },
  {
    id: "c10",
    title: "Aqua Legend Cruise 3 Days 2 Nights",
    imageUrl: "https://asiaeyestravel.com/uploads/source/nhung/aqua-legend-5star-cruise/aqualegend-cruise.webp",
    description: `Aqua Legend Cruise is a newly launched 5-star boutique cruise (2025–2026), delivering an intimate and refined 3 Days 2 Nights luxury cruise across Lan Ha Bay and Ha Long Bay . With only 22 luxury cabins featuring private balconies , floor-to-ceiling windows, and marble bathrooms, the cruise ensures privacy and comfort throughout the journey. The extended itinerary allows deeper exploration, from kayaking in Ao Ech or Tra Bau , sunset parties and Happy Hour deals on Day 1, to discovering Viet Hai Village in Cat Ba Island and swimming at the secluded Ba Trai Dao Beach on Day 2. Guests also enjoy a hands-on Vietnamese cooking class , bamboo boat visits to the iconic Dark & Bright Cave , sunrise Tai Chi , and a relaxing brunch before returning to Tuan Chau Marina .`,
    itinerary: `Day 1: From Hanoi to Tuan Chau – Begin Your Lan Ha Bay Cruise
08:15–08:35:
Pick-up in Hanoi Old Quarter via expressway, ensuring a smooth and comfortable journey.
11:45–12:00:
Check-in procedures at
Lot 27B – Tuan Chau International Marina
waiting lounge.
12:00:
Transfer by tender boat to the cruise. Guests are warmly welcomed onboard with a complimentary drink, complete cabin check-in, and enjoy free time to relax while lunch is being prepared.
13:15:
Enjoy a refined lunch at the restaurant as the cruise gently sails through
Lan Ha Bay
, passing spectacular limestone islands surrounded by emerald waters.
15:00:
Swimming time at one of the most beautiful and unspoiled areas of the bay, immersed in pristine nature.
16:30:
Relax on the sundeck and take in panoramic bay views — an ideal moment for photography.
17:00:
Join a
Vietnamese cooking class
on the sundeck, guided by the cruise’s professional staff.
17:45:
Enjoy the
Sunset Party
with fresh fruits, soft music, and a tranquil atmosphere as the sun sets over the bay.
19:00:
Delight in an elegant dinner featuring beautifully presented dishes crafted by the onboard chef.
20:30:
Free time to unwind and enjoy the peaceful ambiance of the bay.
Overnight on board.
Day 2: Viet Hai Village – Lan Ha Bay
05:45:
Tai Chi session on the sundeck while watching the sunrise over the bay.
06:15:
Breakfast at the restaurant, preparing for a full day of exploration.
08:00 – 08:30:
Pick-up at Tra Bau area, one of the most tranquil locations in Lan Ha Bay.
08:30 – 09:00:
Travel by small day boat through limestone formations toward Viet Hai Village.
10:00:
Viet Hai Village discovery with a cycling tour of approximately 5 km through an ancient village hidden deep within Cat Ba National Park. Electric cars are available for guests who prefer not to cycle.
11:30:
Continue exploring remote areas of Lan Ha Bay by small boat.
12:00:
Lunch at a quiet and scenic spot surrounded by pristine natural landscapes.
13:00 – 14:00:
Kayaking excursion to explore Tai Queo Cave, a tunnel-like cave leading to a secluded lagoon known as the “Dragon Eye” of Lan Ha Bay.
14:00 – 14:30:
Free time for swimming and relaxation in crystal-clear waters.
16:00 – 16:30:
Relax on the sundeck with fresh fruit while cruising through the Tra Bau area.
17:00 – 18:00:
Return to the overnight cruise and enjoy private leisure time onboard.
19:00:
Deluxe dinner served with expertly crafted dishes by the cruise chef.
20:30:
Free time to unwind and enjoy the serene nighttime scenery. Overnight on board.
Day 3: Explore Bright Cave & Dark Cave – Ha Long Bay – Hanoi
05:45:
Sunrise Tai Chi session on the sundeck.
06:30:
Light breakfast at the restaurant.
07:30:
Explore Bright Cave and Dark Cave by bamboo boat or kayak, admiring the mystical beauty of this World Natural Heritage Site.
09:00 – 09:30:
Check-out procedures and settle personal expenses.
09:45:
Early lunch served while the cruise sails back toward the harbor.
11:00:
Transfer by tender boat back to Tuan Chau Marina.
12:00:
Goodbye and end of the program.`,
    duration: "3 Days/ 2 Nights",
    price: 250,
    cityIds: ["2"],
    sourceUrl: "https://asiaeyestravel.com/aqua-legend-cruise-3-days-2-nights",
    onSale:       true,
    saleDiscountPercentage: 15,
  },
  {
    id: "c11",
    title: "Velar of the Sea 3 days 2 nights",
    imageUrl: "https://asiaeyestravel.com/uploads/source/nhung/velar-of-the-sea/anh-tau.webp",
    description: `Velar of the Sea embodies timeless elegance — a 5-star super-yacht crafted for an exclusive Lan Ha Bay cruise . Its intimate collection of 29 luxury cabins , each graced with private balconies and refined amenities, offers a sanctuary of calm and privacy. The 3 Days 2 Nights itinerary unfolds like a gentle poem: from the mystical Dark & Bright Cave by bamboo boat , to emerald swims in Tra Bau , sunrise Tai Chi on deck, sunset parties , authentic Vietnamese cooking classes , and starlit night squid fishing . Day by day — from Viet Hai Village cycling to the secluded Ba Trai Dao Beach lagoon — every moment harmonizes understated opulence with soulful discovery, creating an unforgettable premium Lan Ha Bay luxury cruise .`,
    itinerary: `Day 1: From Hanoi to Lan Ha Bay – A Journey into Tranquil Beauty
08:00:
Pick up at the meeting point in Hanoi and depart to Halong bay
12:15 – 13:00:
Transfer by tender boat to Velar of the Seas Cruise.
13:15:
Enjoy a fabulous lunch at the onboard restaurant. During lunch, the cruise begins sailing through the magnificent Lan Ha Bay — a peaceful geological extension of Ha Long Bay, less visited and wonderfully tranquil.
14:45 – 16:10:
Visit Bright Cave (the tunnel cave) by bamboo boat rowed by local fishermen or enjoy kayaking on your own. Discover a serene round lake surrounded by lush greenery and towering limestone cliffs.
16:45 – 17:30:
Enjoy swimming in the emerald waters of the Tra Bau area or relax at the swimming pool on the first deck.
17:30:
Join the Sunset Party at Velar Sky Bar with fresh fruits and snacks. Happy Hour offers attractive drink prices as you watch the sun slowly set into the sea — creating unforgettable memories.
18:00:
Participate in a Vietnamese cooking demonstration and learn how to prepare delicious traditional appetizers guided by our chef.
19:00:
Indulge in a unique Signature Dinner served at our distinctive restaurant.
20:30 – 22:30:
Evening leisure time. Relax with exotic cocktails at the bar, enjoy spa services, try squid fishing, play games, sing karaoke, or unwind on the rooftop deck under the illuminated night sky.
Overnight on board.
Day 2: Viet Hai Village & Ba Trai Dao Beach – Culture Meets Secluded Paradise
06:00:
Be an early riser and join a refreshing Tai Chi session on the sundeck. Sunrise photography is highly recommended.
07:00:
Enjoy breakfast at the restaurant.
08:00:
Join a day cruise and transfer to Viet Hai Village, a small village nestled deep in the jungle and surrounded by high mountains in the heart of Cat Ba National Park.
10:30:
Upon arrival, enjoy a bicycle ride or electric car journey along forest paths through lush rainforest scenery. Pass rice fields, visit an ancient local house made of straw, mud, and bamboo, and learn about the culture, customs, and daily life of the local people in Viet Hai Village.
12:00:
Return to the day cruise to continue exploring Lan Ha Bay. Lunch is served onboard.
13:30:
The cruise heads to the pristine Ba Trai Dao Beach — the most beautiful beach in Lan Ha Bay, known for its white sand, crystal-clear water, and peaceful atmosphere. Guests are free to swim or kayak (activities depend on tidal conditions).
14:45:
Board the day cruise for transfer back to Velar of the Seas Cruise.
15:30:
Return to Velar of the Seas Cruise and relax on board. Enjoy leisure time on the sundeck, take in panoramic bay views, or participate in onboard activities.
19:00:
Enjoy another exquisite Signature Dinner at the restaurant.
20:30:
Evening relaxation continues with cocktails at the bar, spa treatments, squid fishing, games, karaoke, or quiet moments under the starry sky.
Overnight on board.
Day 3: Lan Ha Bay – Tuan Chau Marina Disembarkation - Hanoi
06:00 – 06:25:
Greet the first light of the day on the sundeck with a Tai Chi session, or enjoy tea, coffee, or juice while admiring the stunning morning scenery.
06:30 – 07:30:
Light breakfast is served at the restaurant, including pastries, tea, and coffee.
07:30 – 08:15:
Transfer by tender to explore the Tra Bau area — a famous filming location for
Kong: Skull Island
(2018).
09:00 – 09:30:
Prepare for check-out. Please pack your luggage and place it outside your cabin by 09:00 for collection. Return room keys and settle any outstanding bills.
09:30 – 10:20:
Enjoy brunch at the restaurant on the 4th deck while the cruise gently sails back toward the harbor.
10:20:
Transfer by tender boat back to the dock.
11:15:
Arrival at Tuan Chau Marina. End of the journey.`,
    duration: "3 Days/ 2 Nights",
    price: 280,
    cityIds: ["2"],
    sourceUrl: "https://asiaeyestravel.com/velar-of-the-sea-3-days-2-nights",
    onSale:    false,
    saleDiscountPercentage: null,
  },
  {
    id: "c12",
    title: "Velar of the Sea 2 days 1 night",
    imageUrl: "https://asiaeyestravel.com/uploads/source/nhung/velar-of-the-sea/anh-tau.webp",
    description: `Velar of the Sea invites you to a peaceful escape aboard a 5-star super-yacht crafted for mindful luxury in Lan Ha Bay . Its 29 luxury cabins , each with private balconies and thoughtful amenities, create a sanctuary of calm and privacy. The gentle 2 Days 1 Night journey flows with intention, unveiling the quiet beauty of Lan Ha Bay . Drift through Tra Bau for serene kayaking and swimming , glide into the ethereal Dark & Bright Cave by bamboo boat , greet the day with sunrise Tai Chi , unwind at sunset gatherings , immerse in Vietnamese cooking classes , and connect with the night through tranquil squid fishing . Every moment on Velar of the Sea nurtures balance, presence, and deep relaxation — the essence of a premium Lan Ha Bay luxury cruise .`,
    itinerary: `Day 1: From Hanoi to Lan Ha Bay – A Journey into Tranquil Beauty
08:00:
Pick up at the meeting point in Hanoi and depart to Halong bay
12:15:
Transfer by tender boat to Velar of the Seas Cruise.
13:15:
Enjoy a fabulous lunch at the onboard restaurant. During lunch, the cruise begins sailing through the magnificent Lan Ha Bay — a tranquil geological extension of Ha Long Bay, less visited and wonderfully peaceful.
14:45 – 16:10:
Visit Bright Cave (the tunnel cave) by bamboo boat rowed by local fishermen or kayak on your own. Discover a serene round lake surrounded by lush greenery and towering limestone cliffs.
16:45 – 17:30:
Enjoy swimming in the emerald waters of the Tra Bau area or relax at the swimming pool on the first deck.
17:30:
Join the Sunset Party at Velar Sky Bar with fresh fruits and snacks. Happy Hour offers attractive drink prices as you watch the sun gently sink into the sea — an unforgettable moment for every traveler on board.
18:00:
Participate in a Vietnamese cooking demonstration and learn how to prepare delicious traditional appetizers under the guidance of our chef.
19:00:
Indulge in a unique Signature Dinner served at our distinctive restaurant.
20:30 – 22:30:
Evening leisure time. Relax with exotic cocktails at the bar, enjoy spa services, try squid fishing, play games, sing karaoke, or unwind on the rooftop deck beneath the illuminated night sky.
Overnight on board.
Day 2: Lan Ha Bay – Tuan Chau Marina – Return to Hanoi
06:00 – 06:25:
Greet the first light of the day on the sundeck with a Tai Chi session, or enjoy an early cup of tea, coffee, or juice while admiring the breathtaking scenery.
06:30 – 07:30:
Light breakfast is served at the restaurant, including pastries, tea, and coffee.
07:30 – 08:15:
Transfer by tender to explore the Tra Bau area — a famous filming location for
Kong: Skull Island
(2018).
09:00 – 09:30:
Pack your luggage and prepare for check-out. Please place your luggage outside your cabin by 09:00 for collection, return your room key, and settle any outstanding bills.
09:30 – 10:20:
Enjoy brunch at the restaurant on the 4th deck while the cruise gently sails back toward the harbor.
10:20:
Transfer by tender boat back to the dock.
11:15:
Arrival at Tuan Chau Marina. End of the journey.`,
    duration: "2 Days/ 1 Night",
    price: 140,
    cityIds: ["2"],
    sourceUrl: "https://asiaeyestravel.com/velar-of-the-sea-2-days-1-night",
    onSale:       true,
    saleDiscountPercentage: 15,
  },
  {
    id: "c13",
    title: "Dragon Bay Premium Cruise 3 days 2 nights",
    imageUrl: "https://asiaeyestravel.com/uploads/source/nhung/dragon-bay-premium-cruise/anh-tau-moi.webp",
    description: `Dragon Bay Premium Cruise is a distinguished 5-star boutique cruise, delivering a refined luxury experience across Ha Long Bay and Lan Ha Bay . The vessel features 26 elegantly appointed cabins , designed in a timeless Indochine style, each offering a private balcony and floor-to-ceiling windows that provide generous space, refined comfort, and uninterrupted panoramic views of the bay. The 3 Days 2 Nights itinerary is thoughtfully crafted to explore tranquil and less-crowded areas, allowing guests to discover iconic destinations such as Bright and Dark Cave , the traditional Viet Hai Village on Cat Ba Island , and the serene Tra Bau area . A carefully curated selection of activities, including kayaking , cycling , swimming , morning Tai Chi , sunset gatherings , and night squid fishing , ensures a balanced and memorable luxury cruising experience.`,
    itinerary: `Day 1: Hanoi - Tuan Chau Harbor - Lan Ha Bay - Dark & Bright Cave
08:00 - 08:30
You will be picked up from your hotel in Hanoi Old Quarter Streets and transfer to Tuan Chau harbor by shuttle bus
11:45
Arrive at Tuan Chau harbor.
11:45 - 12:30
Transfer by tender boat to Dragonbay Premium Cruise.
12:30
The Cruise Manager and crew member welcome you onboard with guiding information and safety briefing. Enjoy a fabulous lunch in our restaurant.
During lunch time, our cruise starts to sail through the magnificent Lan Ha Bay, a geological extension of Halong Bay which is less visited, less inhabited and therefore has the extra appeal of being a more peaceful place.
Check in your cabin.
14:30 - 16:00
Visit Bright Cave by bamboo boat rowed by the local fishermen, a serene round lake surrounded by lush trees and high stone cliffs.
16:00 - 17:00
Explore Lan Ha bay by doing kayaking around Tra Bau or enjoy swimming in the emerald water.
17:00
We return to Dragonbay Premium Cruise and join some interesting activities such as cooking demonstration, sunset party and relaxing on the sundeck to catch the daily spectacular of a gorgeous panorama.
Don’t miss the Happy Hour at our bar as well.
After that, the captain will let the cruise stop at a quiet area of the bay.
19:00
A special dinner of fresh seafood and an assortment of appetizing delicacies will be served.
20:45
In the late evening, take your leisure time to chat at the bar, playing games, squid fishing, singing karaoke …
Overnight onboard.
Day 2: Visit Viet Hai village - Kayak in Lan Ha Bay
06:00
Be an early riser and attend healthy Tai Chi practice on the sundeck. Sunrise photography is awesome.
06:45 - 07:30
Enjoy breakfast in the restaurant.
08:00 - 08:15
You will join a day cruise and transfer to Viet Hai, a small village in the midst of jungles, covered by high mountains. The village is located in the heart of Cat Ba National Park, which belongs to Cat Hai district of Hai Phong city.
10:00
Upon arrival, take a bike ride along the small path through the rain forests. Enjoy stunning scenery of rice fields on the way, stop at the village to relax, and visit an ancient local house. Meet the culture, customs and daily life of the local people.
12:00
Back to the day cruise for a visit to Lan Ha Bay. Lunch will be served on board.
13:30
The cruise takes you to the pristine beach area - Ba Trai Dao beach. This is the most beautiful beach in Lan Ha Bay with nature's amazing white sand, very quiet and less touristic, you are free to swim or participate in kayaking activity.
15:15
Get on the day cruise for a transfer back to Dragonbay Premium Cruise.
16:30
We return to Dragonbay Premium Cruise and join some interesting activities such as cooking demonstration, sunset party and relax on the sundeck to catch the daily spectacular of a gorgeous panorama.
Don’t miss the Happy Hour at our bar as well.
After that, the captain will let the cruise stop at a quiet area of the bay.
19:00
A special dinner of fresh seafood and an assortment of appetizing delicacies will be served.
20:45
In the late evening, take your leisure time to chat at the bar, playing games, squid fishing, singing karaoke …
Overnight onboard.
Day 3: Lan Ha bay - Tuan Chau Harbor - Hanoi
06:00
Be an early riser and attend healthy Tai Chi practice on the sundeck. Sunrise photography is awesome.
06:30 - 07:15
Enjoy breakfast in the restaurant.
07:20 - 08:20
Hop on Tender cruise, we’ll take you on a sightseeing tour for the scenery of Lan Ha Bay you may have missed.
09:00 - 09:30
It’s time to pack your things, do the check-out procedure. Make sure not to forget your belongings.
10:00
Enjoy brunch on the cruise.
10:45
Travel on a tender boat back to Tuan Chau Harbor. Make your farewell to the crew.
11:45 - 12:00
Get into the shuttle bus for a return to Hanoi.
15:00 - 15:30
Drop off at your hotel in Hanoi Old Quarter (If the transfer is booked with Dragonbay Premium Cruise).`,
    duration: "3 Days/ 2 Nights",
    price: 260,
    cityIds: ["2"],
    sourceUrl: "https://asiaeyestravel.com/dragon-bay-premium-cruise-3-days-2-nights",
    onSale:    false,
    saleDiscountPercentage: null,
  },
  {
    id: "c14",
    title: "Dragon Bay Premium Cruise 2 days 1 night",
    imageUrl: "https://asiaeyestravel.com/uploads/source/nhung/dragon-bay-premium-cruise/anh-tau-moi.webp",
    description: `Dragon Bay Premium Cruise is a refined 5-star luxury cruise offering a boutique experience across Ha Long Bay and Lan Ha Bay . The cruise features 26 luxury cabins with elegant Indochine design , each equipped with private balconies and floor-to-ceiling windows for panoramic bay views. The 2 Days 1 Night itinerary focuses on tranquil routes, visiting peaceful areas such as Ao Ech or Tra Bau , and includes a bamboo boat journey through the iconic Dark & Bright Cave . Guests can enjoy a variety of curated activities including kayaking , swimming , morning Tai Chi , sunset parties , and exciting night squid fishing . With premium facilities, attentive service, and recognition from the TripAdvisor Travelers’ Choice 2025 , Dragon Bay Premium Cruise delivers a memorable and well-balanced luxury cruise experience in the bay.`,
    itinerary: `Day 1: Hanoi - Tuan Chau Harbor - Lan Ha Bay - Dark & Bright Cave
08:00 - 08:30
You will be picked up from your hotel in Hanoi Old Quarter Streets and transfer to Tuan Chau harbor by shuttle bus
(If the transfer is booked with Dragonbay Premium Cruise).
11:45
Arrive at Tuan Chau harbor.
11:45 - 12:30
Transfer by tender boat to Dragonbay Premium Cruise.
12:30
The Cruise Manager and crew member welcome you onboard with guiding information and safety briefing. Enjoy a fabulous lunch in our restaurant.
During lunch time, our cruise starts to sail through the magnificent Lan Ha Bay, a geological extension of Halong Bay which is less visited, less inhabited and therefore has the extra appeal of being a more peaceful place.
Check in your cabin.
14:30 - 16:00
Visit Bright Cave by bamboo boat rowed by the local fishermen, a serene round lake surrounded by lush trees and high stone cliffs.
16:00 - 17:00
Explore Lan Ha bay by doing kayaking around Tra Bau or enjoy swimming in the emerald water.
17:00
We return to Dragonbay Premium Cruise and join some interesting activities such as cooking demonstration, sunset party and relaxing on the sundeck to catch the daily spectacular of a gorgeous panorama.
Don’t miss the Happy Hour at our bar as well.
After that, the captain will let the cruise stop at a quiet area of the bay.
19:00
A special dinner of fresh seafood and an assortment of appetizing delicacies will be served.
20:45
In the late evening, take your leisure time to chat at the bar, playing games, squid fishing, singing karaoke …
Overnight onboard.
Day 2: Lan Ha bay - Tuan Chau Harbor - Hanoi
06:00
Be an early riser and attend healthy Tai Chi practice on the sundeck. Sunrise photography is awesome.
06:30 - 07:15
Enjoy breakfast in the restaurant.
07:20 - 08:20
Hop on Tender cruise, we’ll take you on a sightseeing tour for the scenery of Lan Ha Bay you may have missed.
09:00 - 09:30
It’s time to pack your things, do the check-out procedure. Make sure not to forget your belongings.
10:00
Enjoy brunch on the cruise.
10:45
Travel on a tender boat back to Tuan Chau Harbor. Make your farewell to the crew.
11:45 - 12:00
Get into the shuttle bus for a return to Hanoi.
15:00 - 15:30
Drop off at your hotel in Hanoi Old Quarter (If the transfer is booked with Dragonbay Premium Cruise).
End of services.`,
    duration: "2 Days/ 1 Night",
    price: 130,
    cityIds: ["2"],
    sourceUrl: "https://asiaeyestravel.com/dragon-bay-premium-cruise-2-days-1-night",
    onSale:    false,
    saleDiscountPercentage: null,
  },
  {
    id: "c15",
    title: "Halora Nova Cruise 3 Days 2 nights",
    imageUrl: "https://asiaeyestravel.com/uploads/source/nhung/halora-nova-cruise/haloranovacruisesss.webp",
    description: `Halora Nova Cruise features 40 premium cabins , each from 35 sqm , thoughtfully designed in an elegant Indochine–modern style. Every cabin includes a private sea-view balcony , providing generous space, refined comfort, and panoramic views of Lan Ha Bay for a truly relaxing stay. The 3 Days 2 Nights Lan Ha Bay itinerary departs from Tuan Chau Marina with a smooth speedboat transfer to the main cruise. This extended journey allows deeper exploration of tranquil highlights such as Tra Bau lagoons , the enchanting Dark & Bright Cave , and the traditional Viet Hai Village on Cat Ba Island , offering a perfect blend of nature and local culture. Activities are carefully curated to balance active exploration and relaxation , including kayaking in Tra Bau , cycling through Viet Hai Village , sunrise Tai Chi , Vietnamese cooking classes , sunset parties on the sundeck , and exciting night squid fishing , creating a refined and immersive Lan Ha Bay luxury cruise experience .`,
    itinerary: `Day 1: Hanoi - Lan Ha bay
08:00 – 08:30:
Pick-up in Hanoi – Shuttle bus picks up guests at hotels in Hanoi Old Quarter or in front of Hanoi Opera House (No. 1 Trang Tien Street, Hoan Kiem District) and transfers to Ha Long Bay.
11:15
The guest has been received at the Halora Nova Lounge. Please finalize the check-in and enjoy the complimentary welcome drink.
12:00 – 12:15
The Halora high-speed ferry is prepared to convey our patrons across the crystalline, cerulean waters to the mother vessel.
12:45
We warmly welcome our esteemed guests aboard the Halora Nova yacht. You are invited to listen to a comprehensive introduction of the itinerary and safety guidelines, presented by our dedicated and amiable team.
13:00
Indulge in a sumptuous midday meal at our opulent restaurant, as the yacht gracefully cruises through the magnificent limestone karsts of Lan Ha Bay.
15:00
Discover the serene landscapes of the Ao Ech or Tra Bau areas. Guests may choose to enjoy a refreshing swim or paddle a kayak, immersing themselves in the tranquil beauty of Lan Ha Bay.
17:30 – 19:00
Join either the Tea Mixing Workshop or the traditional
To He
Making Session. Thereafter, relax and admire the breathtaking sunset over Lan Ha Bay.
Our esteemed guests will then savour a lavish dinner at the Halora Restaurant in an especially romantic setting.
21:00
After dinner, guests are invited to unwind with spa and massage services, enjoy a glass of fine wine, or participate in night squid fishing beneath the star-filled sky.
Day 2: Awakening with Nature & Viet Hai Village Experience
05:45 – 06:15
: Wake up early to watch the sunrise on the ship’s deck, admiring the first golden rays painting the sea in a peaceful and magical atmosphere.
06:15 – 06:35
: Join a morning meditation class to rediscover tranquility, inner balance, and renewed energy for the day.
06:45 – 07:30
: Enjoy a light breakfast in a calm and serene setting while taking in the surrounding views.
09:30 – 09:45
: Transfer by shuttle boat to begin the day’s exploration.
09:45
: Discover Viet Hai Village, a pristine village hidden deep within the Cat Ba rainforest. Cycle through forest paths, embrace pure tranquility, and recharge your energy on an inspiring journey.
11:30
: Enjoy a fresh seafood lunch at a local restaurant.
14:00 – 14:15
: Return to Halora Nova Cruise and relax at leisure, unwind by the pool, enjoy spa treatments, or indulge in afternoon tea while admiring the tranquil bay scenery.
Day 3: Farewell to Lan Ha Bay & Return to Hanoi
05:45 – 06:15
: Wake up to watch the sunrise on the ship’s deck, admiring the first golden rays painting the sea in a peaceful and magical atmosphere.
06:15 – 06:35
: Join a morning meditation class to rediscover tranquility, balance, and renewed energy for the day.
06:45 – 07:30
: Enjoy a light breakfast in a calm and peaceful setting.
07:30
: Discover the Bright–Dark Cave, a pristine space where light, water, and magical rock formations blend together to create a pure natural masterpiece.
09:30 – 09:45
: Guests complete check-out procedures.
09:45
: Enjoy a light lunch at the restaurant while the cruise returns to port.
10:45
: Transfer by speedboat from Halora Nova Cruise to Tuan Chau International Passenger Port.
11:15 – 11:20
: Arrival at Tuan Chau International Passenger Port, marking the end of the cruise itinerary.`,
    duration: "3 Days/ 2 Nights",
    price: 360,
    cityIds: ["2"],
    sourceUrl: "https://asiaeyestravel.com/halora-nova-cruise-3-days-2-nights",
    onSale:       true,
    saleDiscountPercentage: 15,
  },
  {
    id: "c16",
    title: "Paradise Legacy cruise 3 Days 2 Nights",
    imageUrl: "https://asiaeyestravel.com/uploads/source/nhung/paradise-legacy/anhtau.webp",
    description: `Paradise Legacy Cruise offers 42 luxury cabins , including 36 connecting rooms , making it ideal for families and large groups . On the 3 Days 2 Nights itinerary in Halong Bay , guests can explore impressive caves such as Sung Sot Cave , the largest cave in Halong Bay , or Me Cung Cave , famous for thousand-year-old stalactites and panoramic views overlooking a peaceful lake surrounded by limestone mountains . Guests may enjoy kayaking in the Tung Sau pearl farming area or experience a traditional bamboo boat ride rowed by locals at Cua Van floating village , one of the oldest villages in the bay . The journey also includes hiking Titov Island for panoramic Halong Bay views , relaxing on white sandy beaches , and visiting Tung Sau village to learn about the traditional pearl cultivation process .`,
    itinerary: `Day 1: From Hanoi to Ha Long: The Journey Begins
08:00 – 08:30:
Pick-up in Hanoi – Shuttle bus picks up guests at hotels in Hanoi Old Quarter or in front of Hanoi Opera House (No. 1 Trang Tien Street, Hoan Kiem District) and transfers to Ha Long Bay.
12:00 – 12:30
: Arrival & check-in – Arrive at Tuan Chau Island and begin the cruise check-in process. Guests receive a short briefing about the itinerary and safety regulations while enjoying a welcome drink aboard Paradise Legacy.
13:00 – 14:30
: Lunch – Enjoy lunch at Elegance Restaurant while Paradise Legacy cruises past the beautiful islets of Ha Long Bay.
14:30 – 15:30
: Titov island excursion – Visit Titov Island, named after Russian cosmonaut Gherman Stepanovich Titov. Guests may hike to the summit for a panoramic view of Ha Long Bay or swim at the island’s beach.
16:00 – 17:00
: Tung Sau pearl farm – Visit Tung Sau Pearl Farm to explore the pearl cultivation process or enjoy kayaking experience.
17:15 – 19:00
: Sunset activities – At sunset, Paradise Legacy anchors overnight. This is the perfect time to enjoy afternoon tea, happy hour (buy one get one free from 17:15 to 18:45), and a cooking demonstration featuring a notable Vietnamese dish at the Grand Sundeck or Delight Lounge.
19:00 – 20:30
: Dinner – Savor a premium à la carte dinner served by staff in traditional Vietnamese five-piece Ao Dai at Elegance Restaurant, and capture memorable moments with the onboard manager.
20:30 – 23:00
: Evening activities – After dinner, enjoy drinks and a spectacular live band performance or relax with board games at Delight Lounge. Guests may also join squid fishing at the back of the boat.
Day 2: Exploration the Bay
06:30
: Tai chi session – Boost your energy for the new day with a Tai Chi session at the Grand Sundeck.
07:45
: Breakfast – Enjoy a buffet breakfast at Elegance Restaurant.
09:00 – 09:30
: Transfer to Paradise Explorer – Transfer to Paradise Explorer Cruise to immerse yourself in a magnificent excursion in Ha Long Bay.
10:00 – 11:00
: Scenic cruising – Enjoy splendid panoramic views aboard Paradise Explorer as the cruise passes iconic sites of Ha Long Bay such as Ho Dong Tien Cave, Trong Cave, Trinh Nu Cave, Hang Dau Islet, and Hang Than Islet.
11:00 – 12:00
: Tien Ong cave excursion – Visit Tien Ong Cave, a magnificent cave with primitive charm and a system of stalactites and stalagmites formed thousands of years ago. Archaeologists have discovered human bones and artifacts dating back to 10,000 BC – 8,000 BC.
12:30
: Lunch on Paradise Explorer – Savour a delightful lunch as Paradise Explorer anchors in a tranquil and scenic area of Ha Long Bay.
13:30
: Cua Van fishing village – Visit Cua Van Fishing Village, the first floating cultural village for fishers in Vietnam. Enjoy kayaking or a bamboo boat experience.
14:30 – 15:30
: Afternoon tea – Enjoy afternoon tea onboard Paradise Explorer while admiring spectacular views of Ha Long Bay.
15:15 – 15:30
: Return to Paradise Legacy – Transfer back to Paradise Legacy Cruise and continue the incredible voyage aboard this masterpiece cruise.
17:00
: Overnight anchoring – At sunset, Paradise Legacy anchors overnight in the bay.
17:15 – 19:00
: Sunset activities – Join a cooking class featuring a renowned Vietnamese dish at the Grand Sundeck or Delight Lounge. This is also the perfect time to enjoy happy hour (buy one get one free from 17:15 to 18:45) while immersing yourself in live music performances.
19:00
: Dinner – Savour a scrumptious dinner featuring delightful dishes prepared by the talented onboard chef.
20:30 – 23:00
: Evening activities – After dinner, enjoy drinks and live music at Delight Lounge, join squid fishing at the back of the cruise, watch movies in your cabin, or relax with natural treatments at Le Parfum Spa.
Day 3: Morning Cave Adventure in Ha Long Bay & Hanoi Transfer
06:30
: Tai chi session – Boost your energy for the new day with a Tai Chi session at the Grand Sundeck.
07:00
: Light breakfast – Enjoy a light breakfast with freshly baked pastries, coffee, and tea at Elegance Restaurant.
07:45 – 08:45
: Me Cung cave excursion – Visit Me Cung Cave, a site rich in historical and cultural significance. Inside, the cave opens into an ancient world, leading visitors through a magnificent underground palace.
08:50
: Breakfast on board – Breakfast is served at Elegance Restaurant while the cruise passes Thien Cung Cave, Dau Go Cave, and the iconic Fighting Cock Islet.
09:40 – 10:15
: Check-out & leisure time – Settle bills and return room keys at the reception area, then enjoy remaining moments at Delight Lounge or on the sundeck while admiring the stunning views of Ha Long Bay.
10:15 – 10:30
: Disembarkation – Paradise Legacy returns to Tuan Chau Marina. Guests disembark and conclude their journey.`,
    duration: "3 Days/ 2 Nights",
    price: 380,
    cityIds: ["2"],
    sourceUrl: "https://asiaeyestravel.com/paradise-legacy-cruise-3-days-2-nights",
    onSale:       true,
    saleDiscountPercentage: 15,
  },
];

export default { tourCategories, regions, cities, tours, cruises };
