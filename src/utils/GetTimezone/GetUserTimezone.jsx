export const getUserTimezoneOffset = () => {
  const date = new Date();
  const offsetMinutes = date.getTimezoneOffset();
  const offsetHours = Math.abs(offsetMinutes / 60);
  const offsetSign = offsetMinutes < 0 ? "+" : "-";

  const formattedOffset = `${offsetSign}${String(offsetHours).padStart(2, "0")}${String(
    offsetMinutes % 60
  ).padStart(2, "0")}`;

  return formattedOffset;
};
