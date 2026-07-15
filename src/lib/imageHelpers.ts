export const getPrimaryImage = (
  images: Array<{ id: string; url: string; isPrimary: boolean }> | undefined
): string | undefined => {
  if (!images || images.length === 0) return undefined;
  return images.find(img => img.isPrimary)?.url || images[0]?.url;
};
