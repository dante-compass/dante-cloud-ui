import type { SelectItem } from "../declarations";

export const DURATION_UNITS: Array<SelectItem<string>> = [
  { text: "年", value: "years" },
  { text: "月", value: "months" },
  { text: "周", value: "weeks" },
  { text: "天", value: "days" },
  { text: "小时", value: "hours" },
  { text: "分", value: "minutes" },
  { text: "秒", value: "seconds" },
];
