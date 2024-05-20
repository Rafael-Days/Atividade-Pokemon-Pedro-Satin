document.addEventListener('DOMContentLoaded', () => {
    asyncFoo()
})


async function asyncFoo() {
    const main = document.querySelector("main")
    const head = document.querySelector("head")
    const header = document.querySelector("header")
    const nav = document.querySelector("nav")
    const footer = document.querySelector("footer")
    
    // titulo
    const titile = document.createElement('title')
    titile.textContent = 'Página do Pokémon Squirtle'
    head.appendChild(titile)

    // header
    const a_Header = document.createElement('a')
    const h1_Header = document.createElement('h1')
    header.setAttribute('id', 'header');

    h1_Header.textContent = 'Squirtle'
    a_Header.appendChild(h1_Header)
    header.appendChild(a_Header)

    // nav
    const ul_nav = document.createElement('ul')
    const li_n1 = document.createElement('li')
    const li_n2 = document.createElement('li')
    const li_n3 = document.createElement('li')
    const li_n4 = document.createElement('li')
    const li_n5 = document.createElement('li')
    const li_n6 = document.createElement('li')

    const a_n1 = document.createElement('a')
    const a_n2 = document.createElement('a')
    const a_n3 = document.createElement('a')
    const a_n4 = document.createElement('a')
    const a_n5 = document.createElement('a')
    const a_n6 = document.createElement('a')

    a_n1.textContent = 'Informações sobre Squirtle'
    a_n2.textContent = 'Características'
    a_n3.textContent = 'Curiosidades'
    a_n4.textContent = 'Artigo sobre Squirtle'
    a_n5.textContent = 'Recursos Adicionais'
    a_n6.textContent = 'Evolução'

    a_n1.setAttribute('href', '#info-squirtle');
    a_n2.setAttribute('href', '#caracteristicas');
    a_n3.setAttribute('href', '#curiosidades');
    a_n4.setAttribute('href', '#artigo-squirtle');
    a_n5.setAttribute('href', '#recursos');
    a_n6.setAttribute('href', '#evolucao');

    li_n1.appendChild(a_n1)
    li_n2.appendChild(a_n2)
    li_n3.appendChild(a_n3)
    li_n4.appendChild(a_n4)
    li_n5.appendChild(a_n5)
    li_n6.appendChild(a_n6)
    ul_nav.appendChild(li_n1)
    ul_nav.appendChild(li_n2)
    ul_nav.appendChild(li_n3)
    ul_nav.appendChild(li_n4)
    ul_nav.appendChild(li_n5)
    ul_nav.appendChild(li_n6)

    nav.appendChild(ul_nav)

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
    section2.setAttribute('id', 'caracteristicas');
    const h2_2 = document.createElement('h2')
    const p2 = document.createElement('p')

    h2_2.textContent = 'Características'
    p2.textContent = 'Squirtle é conhecido por sua concha nas costas, que oferece proteção adicional. Ele possui ataques de água poderosos, como Water Gun e Hydro Pump.'
    section2.appendChild(h2_2)
    section2.appendChild(p2)
    main.appendChild(section2)

    // terceira section
    const section3 = document.createElement('section')
    section3.setAttribute('id', 'curiosidades');
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
    article1.setAttribute('id', 'artigo-squirtle');
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
    section4.setAttribute('id', 'recursos');
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

    //footer
    const p_f1 = document.createElement('p')
    const p_f2 = document.createElement('p')
    const a_f2 = document.createElement('a')
    const p_f3 = document.createElement('p')
    const a_f3 = document.createElement('a')
    const p_f4 = document.createElement('p')
    const a_f4 = document.createElement('a')

    p_f1.textContent = '\u00A9 2024 Página do Pokémon Squirtle. Todos os direitos reservados.' //não foi possivel usar: &copy;, usei então \u00A9
    p_f1.setAttribute('aria-label', 'Copyright');
    a_f2.textContent = 'Voltar para o topo';
    a_f3.textContent = 'Contato via e-mail';
    a_f4.textContent = 'Telefone: (55) 5555-5555';
    a_f2.setAttribute('href', '#header');
    a_f3.setAttribute('href', 'mailto:contato@squirtlepage.com');
    a_f4.setAttribute('href', 'tel:+5555555555');

    p_f2.appendChild(a_f2)
    p_f3.appendChild(a_f3)
    p_f4.appendChild(a_f4)
    footer.appendChild(p_f1)
    footer.appendChild(p_f2)
    footer.appendChild(p_f3)
    footer.appendChild(p_f4)
}



function redirecionarParaLink(event) {  //quarta section
    event.preventDefault();
    const url = this.getAttribute('href'); 
    window.location.href = url;
}
