function useTimeAgo(postedAt: string | Date) {
  const now = Date.now();
  //判斷如果是 Date ，使用 getTime() 取得時間戳。
  //string 類型，使用 new Date(postedAt).getTime()。
  const past =
    postedAt instanceof Date
      ? postedAt.getTime()
      : new Date(postedAt).getTime();
  const diff = now - past;
  const minutes = Math.floor(diff / 60 / 1000);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (isNaN(past)) {
    return "Invalid date"; // 處理無效日期的情況
  }
  if (years > 0) return `${years} years ago`;
  if (months > 0) return `${months} months ago`;
  if (days > 0) return `${days} days ago`;
  if (hours > 0) return `${hours} hours ago`;
  if (minutes > 0) return `${minutes} minutes ago`;
  return `1 minutes ago`;
}

export default useTimeAgo;
