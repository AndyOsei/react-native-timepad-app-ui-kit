export const capitalize = (s?: string) => {
  if (typeof s !== "string") {
    return "";
  }
  const words = s.split(" ");

  return words
    .map((word) => {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join(" ");
};
