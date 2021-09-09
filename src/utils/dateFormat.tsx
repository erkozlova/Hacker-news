import { format } from "date-fns";

export const dateFormat = (time: number) => {
  return format(new Date(time * 1000), "MM.dd k:mm");
};
