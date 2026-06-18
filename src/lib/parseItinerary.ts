export interface ItineraryDay {
  day:   number;
  title: string;
  body:  string;
}

export const parseItinerary = (text: string): ItineraryDay[] => {
  const chunks = text.split(/(?=Day \d+:)/);
  const days: ItineraryDay[] = [];

  for (const chunk of chunks) {
    const match = chunk.match(/^Day (\d+):\s*(.+?)(?:\n|$)([\s\S]*)/);
    if (!match) continue;
    days.push({
      day:   parseInt(match[1], 10),
      title: match[2].trim(),
      body:  match[3].trim(),
    });
  }

  return days;
};
