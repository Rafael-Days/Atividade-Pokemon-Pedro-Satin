document.addEventListener('DOMContentLoaded', () => {
    // console.log(queryString())
    asyncFoo()
})


async function asyncFoo() {
    const main = document.querySelector("main")
    
    // nav

    // primeira section
    const section1 = document.createElement('section')
    const h2_1 = document.createElement('h2')
    const p1 = document.createElement('p')

    h2_1.textContent = 'Informações sobre Squirtle'
    p1.textContent = 'Squirtle é um Pokémon do tipo Água. É o Pokémon inicial da região de Kanto e evolui para Wartortle.'
    section1.appendChild(h2_1)
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

    // quarta section
    const section4 = document.createElement('section')
    const h2_4 = document.createElement('h2')
    const p4_1 = document.createElement('p')
    const p4_2 = document.createElement('p')
    const p4_3 = document.createElement('p')

    h2_4.textContent = 'Squirtle: O Amigo Aquático'
    p4_1.textContent = 'Squirtle, com sua aparência simpática e sua habilidade em controlar a água, conquistou o coração de treinadores Pokémon ao redor do mundo. Sendo o inicial de água na região de Kanto, Squirtle é uma escolha popular para aqueles que buscam equilíbrio e versatilidade em suas equipes.'
    p4_2.textContent = 'Sua concha nas costas não apenas oferece proteção, mas também é um símbolo de resistência. Ao evoluir para Wartortle e, posteriormente, para Blastoise, Squirtle se transforma em uma força formidável, dominando ataques aquáticos que podem surpreender adversários em batalhas.'
    p4_3.textContent = 'Além de suas habilidades de batalha, Squirtle é conhecido por seu carisma. Treinadores muitas vezes descrevem a relação com seu Squirtle como uma amizade profunda, tornando-o não apenas um companheiro de lutas, mas um amigo leal ao longo de suas jornadas.'    
    section4.appendChild(h2_4)
    section4.appendChild(p4_1)
    section4.appendChild(p4_2)
    section4.appendChild(p4_3)
    main.appendChild(section4)

    // quinta section
    
}