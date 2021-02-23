import { combineReducers } from "redux";
import { list } from "./list";
import { item } from "./item";
import { comments } from "./comments";

export default combineReducers({
  list,
  item,
  comments,
});
