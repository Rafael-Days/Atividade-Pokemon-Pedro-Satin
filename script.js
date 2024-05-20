document.addEventListener('DOMContentLoaded', () => {
    // console.log(queryString())
    asyncFoo()
})


async function asyncFoo() {
    const main = document.querySelector("main")
    
    // nav

    // primeira section
    const section1 = document.createElement('section')
    section1.setAttribute('id', 'info-squirtle');
    const h2_1 = document.createElement('h2')
    const div1 = document.createElement('div')
    const img1_1 = document.createElement('img')
    const img1_2 = document.createElement('img')
    const p1 = document.createElement('p')

    h2_1.textContent = 'Informações sobre Squirtle'
    p1.textContent = 'Squirtle é um Pokémon do tipo Água. É o Pokémon inicial da região de Kanto e evolui para Wartortle.'
    img1_1.setAttribute('src', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png');
    img1_2.setAttribute('src', 'https://archives.bulbagarden.net/media/upload/thumb/7/79/Squirtle_SSBU.png/200px-Squirtle_SSBU.png');
    section1.appendChild(h2_1)
    section1.appendChild(div1)
    div1.appendChild(img1_1)
    div1.appendChild(img1_2)
    section1.appendChild(p1)
    main.appendChild(section1)

    // segunda section
    const section2 = document.createElement('section')
    const h2_2 = document.createElement('h2')
    const p2 = document.createElement('p')

    h2_2.textContent = 'Características'
    p2.textContent = 'Squirtle é conhecido por sua concha nas costas, que oferece proteção adicional. Ele possui ataques de água poderosos, como Water Gun e Hydro Pump.'
    section2.appendChild(h2_2)
    section2.appendChild(p2)
    main.appendChild(section2)

    // terceira section
    const section3 = document.createElement('section')
    const h2_3 = document.createElement('h2')
    const ul3 = document.createElement('ul')
    const li3_1 = document.createElement('li')
    const li3_2 = document.createElement('li')
    const li3_3 = document.createElement('li')

    h2_3.textContent = 'Curiosidades'
    li3_1.textContent = 'Squirtle é um dos Pokémon mais populares e adoráveis.'
    li3_2.textContent = 'Seu nome deriva das palavras "squirrel" (esquilo) e "turtle" (tartaruga).'
    li3_3.textContent = 'Squirtle é frequentemente escolhido por treinadores para começar sua jornada Pokémon.'
    ul3.appendChild(li3_1)
    ul3.appendChild(li3_2)
    ul3.appendChild(li3_3)
    section3.appendChild(h2_3)
    section3.appendChild(ul3)
    main.appendChild(section3)

    // primeiro article
    const article1 = document.createElement('article')
    const h2_4 = document.createElement('h2')
    const p4_1 = document.createElement('p')
    const p4_2 = document.createElement('p')
    const p4_3 = document.createElement('p')

    h2_4.textContent = 'Squirtle: O Amigo Aquático'
    p4_1.textContent = 'Squirtle, com sua aparência simpática e sua habilidade em controlar a água, conquistou o coração de treinadores Pokémon ao redor do mundo. Sendo o inicial de água na região de Kanto, Squirtle é uma escolha popular para aqueles que buscam equilíbrio e versatilidade em suas equipes.'
    p4_2.textContent = 'Sua concha nas costas não apenas oferece proteção, mas também é um símbolo de resistência. Ao evoluir para Wartortle e, posteriormente, para Blastoise, Squirtle se transforma em uma força formidável, dominando ataques aquáticos que podem surpreender adversários em batalhas.'
    p4_3.textContent = 'Além de suas habilidades de batalha, Squirtle é conhecido por seu carisma. Treinadores muitas vezes descrevem a relação com seu Squirtle como uma amizade profunda, tornando-o não apenas um companheiro de lutas, mas um amigo leal ao longo de suas jornadas.'    
    article1.appendChild(h2_4)
    article1.appendChild(p4_1)
    article1.appendChild(p4_2)
    article1.appendChild(p4_3)
    main.appendChild(article1)

    // quarta section
    const section4 = document.createElement('section')
    const h2_a1 = document.createElement('h2')
    const ul4 = document.createElement('ul')
    const aa1_1 = document.createElement('a')
    const aa1_2 = document.createElement('a')
    const lia1_1 = document.createElement('li')
    aa1_1.textContent = 'Pokédex - Squirtle';
    aa1_1.setAttribute('href', 'https://www.pokemon.com/br/pokedex/squirtle');
    const lia1_2 = document.createElement('li')
    aa1_2.textContent = 'Pokédex - Squirtle';
    aa1_2.setAttribute('href', 'https://bulbapedia.bulbagarden.net/wiki/Squirtle_(Pok%C3%A9mon)');

    h2_a1.textContent = 'Recursos Adicionais'
    aa1_1.textContent = 'Pokédex - Squirtle'
    aa1_2.textContent = 'Bulbapedia - Squirtle'
    aa1_1.addEventListener('click', redirecionarParaLink);
    aa1_2.addEventListener('click', redirecionarParaLink);
    lia1_1.appendChild(aa1_1)
    lia1_2.appendChild(aa1_2)
    ul4.appendChild(lia1_1)
    ul4.appendChild(lia1_2)
    section4.appendChild(h2_a1)
    section4.appendChild(ul4)
    main.appendChild(section4)

    // quinta section
    const section5 = document.createElement('section')
    section5.setAttribute('id', 'evolucao');
    const h2_5 = document.createElement('h2')
    const ul5 = document.createElement('ul')

    const li5_1 = document.createElement('li')
    const a5_1 = document.createElement('a')
    const fig5_1 = document.createElement('figure')
    const img5_1 = document.createElement('img')
    const fc5_1 = document.createElement('figcaption')

    const li5_2 = document.createElement('li')
    const a5_2 = document.createElement('a')
    const fig5_2 = document.createElement('figure')
    const img5_2 = document.createElement('img')
    const fc5_2 = document.createElement('figcaption')

    const li5_3 = document.createElement('li')
    const a5_3 = document.createElement('a')
    const fig5_3 = document.createElement('figure')
    const img5_3 = document.createElement('img')
    const fc5_3 = document.createElement('figcaption')

    h2_5.textContent = 'Evoluções'
    fc5_1.textContent = '1. Squirtle'
    img5_1.setAttribute('src', 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png');
    fc5_2.textContent = '2. Wartortle'
    img5_2.setAttribute('src', 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/008.png');
    fc5_3.textContent = '3. Blastoise'
    img5_3.setAttribute('src', 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png');

    section5.appendChild(h2_5)
    section5.appendChild(ul5)

    ul5.appendChild(li5_1)
    li5_1.appendChild(a5_1)
    a5_1.appendChild(fig5_1)
    fig5_1.appendChild(img5_1)
    fig5_1.appendChild(fc5_1)

    ul5.appendChild(li5_2)
    li5_2.appendChild(a5_2)
    a5_2.appendChild(fig5_2)
    fig5_2.appendChild(img5_2)
    fig5_2.appendChild(fc5_2)

    ul5.appendChild(li5_3)
    li5_3.appendChild(a5_3)
    a5_3.appendChild(fig5_3)
    fig5_3.appendChild(img5_3)
    fig5_3.appendChild(fc5_3)

    main.appendChild(section5)
}



function redirecionarParaLink(event) {  //quarta section
    event.preventDefault();
    const url = this.getAttribute('href'); 
    window.location.href = url;
}
