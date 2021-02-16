import { format } from 'date-fns'

export const dateFormat = (time) => {
  return format(new Date(time), 'MMM-dd m:k');
}