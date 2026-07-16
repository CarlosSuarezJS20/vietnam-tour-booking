export const DAYS_THRESHOLD = 7;

export const isNewProduct = (createdAt: string): boolean => {
  try {
    const created = new Date(createdAt);
    const now = new Date();

    // Check if date is valid
    if (isNaN(created.getTime())) {
      return false;
    }

    // Calculate difference in milliseconds
    const diffMs = now.getTime() - created.getTime();

    // Convert to days
    const diffDays = diffMs / (1000 * 60 * 60 * 24);

    return diffDays <= DAYS_THRESHOLD;
  } catch {
    return false;
  }
};
