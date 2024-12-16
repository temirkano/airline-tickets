export const formatDate = (dateString: string): string => {
  const [day, month, year] = dateString.split(".").map(Number);
  const date = new Date(year + 2000, month - 1, day);

  const dayOfWeek = date.toLocaleDateString("ru-RU", { weekday: "short" }); 
  const formattedDate = date.toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return `${formattedDate} ${dayOfWeek}`;
};
