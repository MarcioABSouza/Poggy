class EventState {
  constructor() {
    this.fridge = [
      {
        events: [
          {
            type: "interactingMenu",
            textOptions: [
              {
                label: "Geladeira",
                description: "Seus alimentos estão aqui",
                options: [
                  {
                    label: "Chocolate",
                    amount:1,
                    place:'fridge',
                    description: `Chocolate Amargo`,
                    events: [
                      { type: "textMessage", text: "Glup, glup..." },
                      { type: "consumeItem", label:'Chocolate', place:'fridge' },
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ];

    this.computer = [
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
                      {
                        type: "textMessage",
                        text: "Nenhuma arquivo encontrado",
                      },
                    ],
                  },
                ],
              },
              {
                label: "LieFood",
                description: "Peça comida aqui!",
                options: [
                  {
                    label: "Bolinho de Carne",
                    description: "Feito com carne bovina",
                    events: [
                      {
                        type: "buyItem",
                        label: "Bolinho de Carne",
                        price: 3,
                        place: "fridge"
                      },
                      { type: "textMessage", text: "Adquirido!" }
                    ],
                  },
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
                {
                  type: "textMessage",
                  text: "Celular mais vendido no Brasil.",
                },
                {
                  type: "textMessage",
                  text: "Hakers descobriram um código pra desbloqueio de qualquer aparelho.",
                },
                { type: "textMessage", text: "Um deles é o #SnaSugm" },
                { type: "addStoryFlag", flag: "DISCOVERED_P330" },
              ],
              Tempo: [
                { type: "textMessage", text: "Um ciclone se aproxima!"},
                { type: "textMessage", text: "Meteorologistas dizem que é o pior dos últimos 20 anos"},
                { type: "textMessage", text: "Protejam-se em casa!!"},
              ]
            },
          },
        ],
      },
    ];

    this.window = [
      {
        required: ["TALKED_ONCE_MIRROR"],
        events: [
          {
            type: "textMessage",
            text: "Acho que não tem muito pra mim ver lá fora...",
          },
        ],
      },
      {
        events: [
          { type: "textMessage", text: "Nossa ta bem escuro... " },
          { type: "textMessage", text: "Que dia será hoje?" },
          { type: "textMessage", text: "Perdi a noção do #Tempo" },
          { type: "addStoryFlag", flag: "TALKED_ONCE_MIRROR" },
        ],
      },
    ];

    this.smartphone = [
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
              {
                label: "Tela de Desbloqueio",
                description: "Insira sua senha.",
              },
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
          {
            type: "textMessage",
            text: "Ta bloqueado. Parece um Samsung #P330",
          },
        ],
      },
    ];
  }
}

export default EventState;
