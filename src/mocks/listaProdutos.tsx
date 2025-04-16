const lista_produtos = {
    itens: {
        titulo: "Veja nossos produtos!",
        lista: [
            {
                id: 1,
                nome: "Jogo de Banheiro",
                descricao: "Estes jogos são compostos de 3 peças: capa para tampa, tapete e porta papel. Temos várias opções de cores e modelos.",
                imagem: require('../../assets/produtos/produto03.jpeg'),
            },
            {
                id: 2,
                nome: "Jogo Americano",
                descricao: "Estes jogos são compostos de 4 peças (serviço para 4 pessoas). Temos várias opções de cores e modelos.",
                imagem: require('../../assets/produtos/produto02.jpeg'),
            },
            {
                id: 3,
                nome: "Panos de Prato",
                descricao: "descricao do pano de prato",
                imagem: require('../../assets/produtos/produto01.jpeg'),
            },
        ]
    }
}
export default lista_produtos;