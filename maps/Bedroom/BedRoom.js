import utils from "../../utils.js";
import Iterable from "../../Iterable.js";
import smartphone from "./Smartphone.js";
import window from "./Window.js";
import fridge from "./Fridge.js";
import computer from "./Computer.js";

export default {
  lowerSrc: "images/maps/any.png",
  upperSrc: "images/maps/anyLower.png",
  gameObjects: {
    hero: new Iterable({
      x: utils.withGrid(3),
      y: utils.withGrid(5),
      isPlayerControlled: true,
      src: "images/characters/hero.png",
    }),
    smartphone,
    window,
    fridge,
    computer,
  },
  walls: {
    [utils.asGridCoord(4, 4)]: true,

    [utils.asGridCoord(1, 2)]: true,

    [utils.asGridCoord(1, 0)]: true,
    [utils.asGridCoord(2, 0)]: true,
    [utils.asGridCoord(3, 0)]: true,
    [utils.asGridCoord(4, 0)]: true,
    [utils.asGridCoord(6, 0)]: true,
    [utils.asGridCoord(7, 0)]: true,

    [utils.asGridCoord(1, 6)]: true,
    [utils.asGridCoord(2, 6)]: true,
    [utils.asGridCoord(3, 7)]: true,
    [utils.asGridCoord(4, 6)]: true,
    [utils.asGridCoord(5, 6)]: true,
    [utils.asGridCoord(6, 6)]: true,
    [utils.asGridCoord(7, 6)]: true,

    [utils.asGridCoord(0, 1)]: true,
    [utils.asGridCoord(0, 2)]: true,
    [utils.asGridCoord(0, 3)]: true,
    [utils.asGridCoord(0, 4)]: true,
    [utils.asGridCoord(0, 5)]: true,

    [utils.asGridCoord(6, 1)]: true,
    [utils.asGridCoord(6, 2)]: true,
    [utils.asGridCoord(6, 3)]: true,
    [utils.asGridCoord(6, 4)]: true,
    [utils.asGridCoord(6, 5)]: true,
  },
  cutsceneSpaces: {
    [utils.asGridCoord(3, 6)]: [
      {
        required: ["TALKED_ONCE_DOOR"],
        events: [
          {
            type: "textMessage",
            text: "Melhor nem abrir a porta.",
          },
          { who: "hero", type: "walk", direction: "up" },
        ],
      },
      {
        events: [
          {
            type: "textMessage",
            text: "Nossa, ta muito frio e escuro lá fora.",
          },
          { type: "textMessage", text: "Melhor ficar por aqui." },
          { type: "addStoryFlag", flag: "TALKED_ONCE_DOOR" },
          { who: "hero", type: "walk", direction: "up" },
        ],
      },
    ],
  },
};
