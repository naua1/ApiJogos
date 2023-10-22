const Url = 'https://www.cheapshark.com/api/1.0/games?title='
const corpo = document.getElementById('jogos')
const input = document.getElementById('pesquisa')
const  botao = document.getElementById('btn')

const fetchJogos = async (param) =>{
    const res = await fetch(`${Url}${param}`)
    return res.json();

} 

botao.addEventListener('click', async function render() {
    let link = await fetchJogos(input.value)
    corpo.innerHTML = " "
    console.log(link)
    for(let i = 0; i <= link.length; i++){
    corpo.innerHTML += `<div class='cartao'> <img 
    class='imagem' src=" 
    ${link[i].thumb}" alt="foto do jogo"> <p class='title'>
    ${link[i].external}</p>  <p class='title'> Price: 
    ${link[i].cheapest
    }</p> </div>`
}
})

    











   