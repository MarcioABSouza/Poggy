import Iterable from "../../Iterable.js";
import utils from "../../utils.js";

export default new Iterable({
  x: utils.withGrid(2),
  y: utils.withGrid(2),
  isPlayerControlled: false,
  src: "images/objects/computer.png",
  talking: [
    {
      events: [
        {
          type: "interactingMenu",
          textOptions: [
            { label: "Google", description: "Faça uma busca!" },
            {
              label: "Terminal",
              description: "Execute comandos",
              options: [
                {
                  label: "Ping",
                  description: "Verificar status da rede",
                  events: [
                    { type: "textMessage", text: "Ping" },
                    { type: "textMessage", text: "Nenhum pacote retornado" },
                    { type: "textMessage", text: "Falha ao executar" },
                  ],
                },
                {
                  label: "Search",
                  description: "Buscar arquivos",
                  events: [
                    { type: "textMessage", text: "Procurando arquivos" },
                    { type: "textMessage", text: "Nenhuma arquivo encontrado" }
                  ],
                }
              ],
            },
          ],
          reactionsToVocabulary: {
            DontKnow: [
              {
                type: "textMessage",
                text: "Sua pesquisa não retornou nenhum resultado.",
              },
            ],
            P330: [
              { type: "textMessage", text: "Celular mais vendido no Brasil." },
              {
                type: "textMessage",
                text: "Hakers descobriram um código pra desbloqueio de qualquer aparelho.",
              },
              { type: "textMessage", text: "Um deles é o #SnaSugm" },
              { type: "addStoryFlag", flag: "DISCOVERED_P330" },
            ],
          },
        },
      ],
    },
  ],
});
