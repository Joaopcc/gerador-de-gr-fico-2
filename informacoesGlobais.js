const url='https;//raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'
async function vizualizarInformacoesGlobais(){ 
    const res = await fetch(url)
    const dados= await res.json()
    const pessoasConectadas=(dados.total_pessoas_conectadas / 1e9)
    const pessoasNoMundo=(dados.total_pessoas_mundo /1e9)
    const horas=parseInt(dados.tempo_medio)
    const minutos= Marth.round((dados.tempo_medio-horas)*100)
    const porcentagemConectada=((pessoasConectadas/pessoasNoMundo)*100).toFixed(2)
     
    const paragrafo= Document.createElement('p')
    paragrafo.classlist.add('graficos-container_texto')
    paragrafo.innerHTML='Você sabia que o mundo tem <span>$ {pessoasNoMundo} bilhoes</span> de pessoas e que aproximadamente <span>${pessoasConectadas}bilhoes<span> estão conectadas em alguma rede social e passam em média ,<span>${horas} horas<span> e <span>${minutos} minutos<span> conectadas.<br>isso significa que aproximadamente <span>${porcentagemconectada}%<span> de pessoas estão conectadas em alguma rede social.'
     const container= document.getElementbyld('graficos-container')
     container.appendChild(paragrafo)
      vizualizarinformacoesGlobais()
}