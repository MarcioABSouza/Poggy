import Iterable from "../../Iterable.js";
import utils from "../../utils.js";

export default new Iterable({
  x: utils.withGrid(1),
  y: utils.withGrid(2),
  isPlayerControlled: false,
  src: "images/objects/cellphone.png",
  behaviorLoop: [{ type: "stand", direction: "down" }]
});
