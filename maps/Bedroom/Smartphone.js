import Iterable from "../../Iterable.js";
import utils from "../../utils.js";

export default new Iterable({
  x: utils.withGrid(1),
  y: utils.withGrid(2),
  isPlayerControlled: false,
  src: "images/objects/cellphone.png",
  behaviorLoop: [{ type: "stand", direction: "down" }],
  talking: [
    {
      required: ["CELULAR_DESBLOQUEADO", "DISCOVERED_P330"],
      events: [
        { type: "textMessage", text: "Bip! Bem vindo ao Black OS" },
        { type: "textMessage", text: "Bateria 38%" },
        { type: "textMessage", text: "Sem sinal" },
      ],
    },
    {
      required: ["DISCOVERED_P330"],
      events: [
        {
          type: "interactingMenu",
          textOptions: [
            { label: "Tela de Desbloqueio", description: "Insira sua senha." },
          ],
          reactionsToVocabulary: {
            DontKnow: [{ type: "textMessage", text: "Senha incorreta" }],
            SnaSugm: [
              { type: "textMessage", text: "Celular desbloqueado." },
              { type: "addStoryFlag", flag: "CELULAR_DESBLOQUEADO" },
            ],
          },
        },
      ],
    },
    {
      events: [
        { type: "textMessage", text: "Um celular." },
        { type: "textMessage", text: "Ta bloqueado. Parece um Samsung #P330" },
      ],
    },
  ],
});
