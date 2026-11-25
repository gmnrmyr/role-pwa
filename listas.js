// Listas padrão do Rolê. O que você editar no app fica salvo no aparelho (localStorage)
// e só volta a este padrão com "restaurar padrão".
// dica = texto curto que aparece embaixo do item. Nada de dado sensível aqui:
// este arquivo pode ir pra um GitHub Pages público.
window.PADRAO = {
  versao: 1,
  abas: [
    {
      // lista de SP do Gui (Google Keep, ago–nov/2026), "essa tá boa"
      id: "mala", nome: "Mala", icone: "🧳",
      secoes: [
        { id: "nao-esquecer", nome: "Não esquecer", itens: [
          ["Rodar "viagem local" no note", "Modo viagem: kiosk em localhost, sem depender de casa"],
          ["Chaves", ""],
          ["Protetor solar", ""],
          ["Guarda-chuva pequeno e água", ""],
          ["Anéis", ""],
          ["Tapa-olho", ""],
          ["Kit pessoal + isopropílico", ""]
        ]},
        { id: "docs", nome: "Docs", itens: [
          ["Carteira, CNH, RG e cartões", ""]
        ]},
        { id: "eletronicos", nome: "Eletrônicos", itens: [
          ["Celular Mi", ""],
          ["iPhone", ""],
          ["Note Mac + carregador", ""],
          ["Carregadores (4) + 1 benjamin", ""],
          ["Fone", ""],
          ["Mouse", ""],
          ["Power bank", ""]
        ]},
        { id: "roupas", nome: "Roupas", itens: [
          ["4–7 cuecas", ""],
          ["4–6 meias", ""],
          ["4–6 camisetas", "Da última vez só couberam 3"],
          ["2–3 bermudas", ""],
          ["1 calça (sair)", ""],
          ["1 calça de dormir", ""],
          ["1 casaco", ""],
          ["1 chinelo + 2–3 sacos plásticos", ""],
          ["1 tênis", ""],
          ["1 sunga", "Se o lugar tiver hidro"]
        ]},
        { id: "higiene", nome: "Higiene", itens: [
          ["Escova + pasta", ""],
          ["Desodorante", ""],
          ["Barbeador", ""],
          ["Cortador de unha", ""],
          ["Melatonina", ""],
          ["Vibracall", ""]
        ]}
      ]
    },
    {
      id: "airbnb", nome: "Airbnb", icone: "🏠",
      secoes: [
        { id: "chegada", nome: "Chegada", itens: [
          ["Mandar endereço e código de acesso pra Fe", "Print do anúncio + código da porta"],
          ["Testar fechadura da porta e trinco das janelas", ""],
          ["Procurar câmera escondida no quarto e no banheiro", "Lanterna do celular rente a tomadas, detector de fumaça, carregadores e TV. Reflexo azulado = lente. Airbnb proíbe câmera nesses cômodos"],
          ["Achar saída, extintor e registro do gás", ""],
          ["Wi-Fi do Airbnb NÃO é rede segura", "Nunca marcar como rede confiável nos apps de banco (Inter, MP): é isso que mantém a trava de empréstimo ligada"],
          ["Fotos do imóvel como estava", "Evita cobrança de dano na saída"],
          ["Testar chuveiro, gás e tomadas", "SP é 127 V na maioria"]
        ]},
        { id: "durante", nome: "Durante", itens: [
          ["Separar documentos e cartões que NÃO saem", "Esconder em 2 lugares diferentes, nunca tudo junto"],
          ["Carregadores e power bank na tomada à noite", ""],
          ["Remédios à mão", ""]
        ]},
        { id: "saida", nome: "Saída", itens: [
          ["Varredura: tomadas (carregadores)", "O que mais fica pra trás"],
          ["Varredura: banheiro, gavetas, geladeira, embaixo da cama", ""],
          ["Documentos, cartões e chaves comigo", ""],
          ["Lixo e louça conforme a regra do anfitrião", ""],
          ["Luzes, ar, gás e janelas desligados/fechados", ""],
          ["Fotos da saída", ""],
          ["Chave devolvida / cofre trancado", ""],
          ["Check-out no app do Airbnb", ""]
        ]}
      ]
    },
    {
      id: "rua", nome: "Rua", icone: "🚶",
      secoes: [
        { id: "antes", nome: "Antes de sair", itens: [
          ["Bateria acima de 50% + power bank", ""],
          ["Só 1 cartão físico + documento", "O resto fica escondido no Airbnb"],
          ["Dinheiro trocado separado (uns R$50)", "Fora da carteira"],
          ["Apps de banco no modo rua / limite Pix baixo", "Ver aba 🔒 Bancos"],
          ["Localização em tempo real compartilhada com a Fe", ""],
          ["Rota e horário de volta combinados", ""]
        ]},
        { id: "na-rua", nome: "Na rua", itens: [
          ["Celular no bolso da frente, sem usar na calçada", "Nem na janela do carro"],
          ["Uber: conferir placa e nome antes de entrar", ""],
          ["Não sacar em caixa eletrônico de rua", ""]
        ]},
        { id: "voltou", nome: "Voltou", itens: [
          ["Conferir carteira, cartão e documento", ""],
          ["Celular e power bank carregando", ""]
        ]}
      ]
    },
    {
      id: "sos", nome: "Roubaram", icone: "🚨", emergencia: true,
      secoes: [
        { id: "ja", nome: "Na hora (de outro celular)", itens: [
          ["Acionar o Celular Seguro (gov.br)", "celularseguro.gov.br ou a pessoa de confiança aciona: bloqueia bancos e chip de uma vez"],
          ["Bloquear o chip na operadora", "Sem chip não chega SMS de código"],
          ["Bloquear/apagar o aparelho", "iPhone: icloud.com/find · Android: google.com/android/find"],
          ["Ligar pros bancos e bloquear cartões e Pix", "Número no verso do cartão ou no app em outro aparelho"],
          ["Trocar senha do Google / Apple ID e encerrar sessões", ""]
        ]},
        { id: "depois", nome: "Nas próximas horas", itens: [
          ["Boletim de ocorrência online", "SP: Delegacia Eletrônica (ssp.sp.gov.br)"],
          ["Avisar a família que o número pode mandar golpe", "\"Mudei de número\" / pedido de Pix"],
          ["Trocar senha do WhatsApp e ativar verificação em 2 etapas no aparelho novo", ""]
        ]},
        { id: "dias", nome: "Nos dias seguintes", itens: [
          ["Conferir o Registrato (Banco Central)", "registrato.bcb.gov.br: lista todo empréstimo no seu CPF"],
          ["Contestar no banco qualquer empréstimo ou Pix que não foi você", "Com o número do B.O."]
        ]}
      ]
    }
  ],
  // Travas por banco. estado: "sim" | "nao" | "?" (não conferido). trava = empréstimo bloqueado.
  bancos: [
    { id: "inter", dono: "Gui", banco: "Inter", como: "Central de Segurança → Modo Vigilante → incluir Empréstimos nas áreas bloqueadas fora da rede segura" },
    { id: "itau", dono: "Gui", banco: "Itaú", como: "Foto do perfil → Segurança → Modo Protegido. Conferir se cobre contratação de empréstimo" },
    { id: "mp", dono: "Gui", banco: "Mercado Pago", como: "Modo Blindado (limita Pix/transferência fora do Wi-Fi seguro). Conferir se cobre empréstimo" },
    { id: "nubank", dono: "Gui", banco: "Nubank", como: "Central de Proteção: limites de Pix. Pra empréstimo, pedir no chat pra desativar a contratação (não achei opção oficial no app)" }
  ],
  geral: [
    { id: "celseguro", txt: "Celular Seguro (gov.br) cadastrado, com pessoa de confiança", dica: "celularseguro.gov.br. Pessoa de confiança aciona o bloqueio se você não conseguir" },
    { id: "registrato", txt: "Registrato conferido este mês", dica: "registrato.bcb.gov.br (login gov.br): empréstimos e contas no seu CPF" },
    { id: "vigia", txt: "Vigia de empréstimo do homelab ligado", dica: "Avisa quando aparece contrato ou crédito de empréstimo nas contas sincronizadas" }
  ]
};
