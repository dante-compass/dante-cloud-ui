import { moment } from '@herodotus-cloud/core';

export default function useDateTime() {
  const humanize = (date: string): string => {
    return moment.duration(date, 'seconds').humanize();
  };

  const defaultFormat = (date: string) => {
    if (date) {
      return moment(date).format('YYYY-MM-DD HH:mm:ss');
    } else {
      return '';
    }
  };

  return {
    humanize,
    defaultFormat,
  };
}
