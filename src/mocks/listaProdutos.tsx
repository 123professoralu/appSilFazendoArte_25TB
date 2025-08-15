const lista_produtos = {
    itens: {
        titulo: "Veja nossos produtos!",
        lista: [
            {
                id: 1,
                nome: "Jogo de Banheiro",
                descricao: "Estes jogos são compostos de 3 peças: capa para tampa, tapete e porta papel. Temos várias opções de cores e modelos.",
                imagem: require('../../assets/produtos/produto03.jpeg'),
                slider: [
                    require('../../assets/produtos/pano_prato/produto1.jpeg'),
                    require('../../assets/produtos/pano_prato/produto2.jpeg'),
                    require('../../assets/produtos/pano_prato/produto3.jpeg'),
                    require('../../assets/produtos/pano_prato/produto4.jpeg'),
                    require('../../assets/produtos/pano_prato/produto5.jpeg'),
                ]
            },
            {
                id: 2,
                nome: "Jogo Americano",
                descricao: "Estes jogos são compostos de 4 peças (serviço para 4 pessoas). Temos várias opções de cores e modelos.",
                imagem: require('../../assets/produtos/produto02.jpeg'),
                slider: [
                    require('../../assets/produtos/pano_prato/produto1.jpeg'),
                    require('../../assets/produtos/pano_prato/produto2.jpeg'),
                    require('../../assets/produtos/pano_prato/produto3.jpeg'),
                    require('../../assets/produtos/pano_prato/produto4.jpeg'),
                    require('../../assets/produtos/pano_prato/produto5.jpeg'),
                ]
            },
            {
                id: 3,
                nome: "Panos de Prato",
                descricao: "descricao do pano de prato",
                imagem: require('../../assets/produtos/produto01.jpeg'),
                slider: [
                    require('../../assets/produtos/pano_prato/produto1.jpeg'),
                    require('../../assets/produtos/pano_prato/produto2.jpeg'),
                    require('../../assets/produtos/pano_prato/produto3.jpeg'),
                    require('../../assets/produtos/pano_prato/produto4.jpeg'),
                    require('../../assets/produtos/pano_prato/produto5.jpeg'),
                ]
            },
        ]
    }
}
export default lista_produtos;