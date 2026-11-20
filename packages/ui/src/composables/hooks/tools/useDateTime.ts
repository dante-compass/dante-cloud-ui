import { moment } from "@herodotus/core";

export default function useDateTime() {
  const humanize = (date: string): string => {
    if (date) {
      return moment.duration(date, "seconds").humanize();
    } else {
      return "";
    }
  };

  const defaultFormat = (date: string) => {
    if (date) {
      return moment(date).format("YYYY-MM-DD HH:mm:ss");
    } else {
      return "";
    }
  };

  return {
    humanize,
    defaultFormat,
  };
}
