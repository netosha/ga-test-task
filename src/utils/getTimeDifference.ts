const getTimeDifference = (
  first: Date,
  second: Date,
): { hours: number; minutes: number; seconds: number; days: number } => {
  let delta = Math.abs(second.getTime() - first.getTime()) / 1000;
  const days = Math.floor(delta / 86400);
  delta -= days * 86400;
  const hours = Math.floor(delta / 3600) % 24;
  delta -= hours * 3600;
  const minutes = Math.floor(delta / 60) % 60;
  delta -= minutes * 60;
  const seconds = Math.floor(delta % 60);
  return { hours, minutes, seconds, days };
};

export default getTimeDifference;
