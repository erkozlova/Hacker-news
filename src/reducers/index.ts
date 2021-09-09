import { combineReducers } from "redux";
import { list } from "./list";
import { item } from "./item";
import { comments } from "./comments";

const per = combineReducers({
  list,
  item,
  comments,
});
export default  per;
