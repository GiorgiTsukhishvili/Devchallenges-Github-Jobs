export const useCalculateDate = (date: string | undefined) => {
  const calculatedDate = () => {
    const time = date ? Math.round((Date.now() - +new Date(date)) / 60000) : 0;

    if (time < 60) {
      return time + " minutes ago";
    } else if (time < 1440) {
      return Math.round(time / 60) + " hours ago";
    } else {
      return Math.round(time / 60 / 24) + " days ago";
    }
  };

  return { calculatedDate };
};
