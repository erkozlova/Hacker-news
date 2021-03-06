import { format } from "date-fns";

export const dateFormat = (time) => {
  return format(new Date(time * 1000), "MM.dd k:mm");
};
