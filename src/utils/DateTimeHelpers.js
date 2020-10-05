export const getFullDate = date => {
  const day = new Date(date).getDate();
  const months = new Date(date).getMonth() + 1;
  const year = new Date(date).getFullYear();

  return `${day}/${months < 10 ? `0${months}` : months}/${year}`;
};

export const getDayMonthDate = date => {
  const day = new Date(date).getDate();
  const months = new Date(date).getMonth() + 1;

  return `${day}.${months < 10 ? `0${months}` : months}`;
};

export const getFullTime = date => {
  const hour = new Date(date).getHours();
  const minutes = new Date(date).getMinutes();

  return `${hour < 10 ? `0${hour}` : hour} : ${minutes < 10 ? `0${minutes}` : minutes}`;
};
