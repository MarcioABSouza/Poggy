import Iterable from "../../Iterable.js";
import utils from "../../utils.js";

export default new Iterable({
  x: utils.withGrid(2),
  y: utils.withGrid(2),
  isPlayerControlled: false,
  src: "images/objects/computer.png"
});
