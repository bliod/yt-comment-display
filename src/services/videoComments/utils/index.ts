export const isTimestampWithin24Hours = (timestamp: Date): boolean => {
  const currentTime = new Date();
  const timeDifference = currentTime.getTime() - timestamp.getTime();
  const hoursDifference = timeDifference / (1000 * 60 * 60);
  return hoursDifference <= 24;
};
