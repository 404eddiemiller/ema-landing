// Spread blog post dates evenly over the last N days from the build date
// This gives the blog a regular publishing rhythm

const SPREAD_DAYS = 90;

export function getDisplayDate(index: number, totalPosts: number): Date {
  const now = new Date();
  const daysAgo = Math.round((index / Math.max(totalPosts - 1, 1)) * SPREAD_DAYS) + 2;
  const displayDate = new Date(now);
  displayDate.setDate(displayDate.getDate() - daysAgo);
  return displayDate;
}
