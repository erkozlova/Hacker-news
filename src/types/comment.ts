export type Comment = {
  by: string;
  id: number;
  kids: number[];
  parent: number;
  text: string;
  type: string;
  time: number;
  path: number[];
  deleted?: boolean;
  comments: Record<number, Comment> | {};
};