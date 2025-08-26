export const cacheMessageUtil = (revalidateTime?: number | null): string => {
  const time = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');

  let msg = '<!-- ';

  msg += `\n🚀 ISR: Served from Redis Cache! \n⌛ Last updated: ${time}. `;

  if (revalidateTime) {
    msg += `\n⏭️ Next refresh is after ${revalidateTime} seconds. `;
  }

  msg += ' \n-->';

  return msg;
};
