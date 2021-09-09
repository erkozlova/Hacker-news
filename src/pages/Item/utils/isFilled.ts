import { isEmpty as lodashIsEmpty } from "lodash";

export const isFilled = <T>(obj: T | {}): obj is T => {
  return !lodashIsEmpty(obj);
}