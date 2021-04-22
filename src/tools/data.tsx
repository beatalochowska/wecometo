export const exfeatures = ["pool", "fecne", "park"];
export const exnumbers = [1, 2, 3];

const features_proportion = [
  "stock",
  "stock",
  "fence",
  "fence",
  "park",
  "park",
  "bis",
  "pool",
  "work",
];

const generateFeatures = (): string[] => {
  const allFeatures: string[] = [];
  for (let i = 0; i < 9; i++) {
    allFeatures.push(...features_proportion);
  }

  return allFeatures;
};

export const features = generateFeatures();
