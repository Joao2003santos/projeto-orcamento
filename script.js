const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu); 



function multiplicar() {

  const manta3mmDesc = 530
  const manta3mmAlum = 602
  const manta2mmMorpl = 610
  const plastipegante = 392
  const diplas = 93
  const texsapSemi = 73
  const texsapFlex = 215
  const texsapSuper = 240
  const maoDeObra = 42
  var l1 = window.document.getElementById('largura')
  var c1 = window.document.getElementById('comprimento')
  var larg = Number(l1.value)
  var comp = Number(c1.value)
  var medida1 = larg * comp
  var l2 = window.document.getElementById('largura2')
  var c2 = window.document.getElementById('comprimento2')
  var larg2 = Number(l2.value)
  var comp2 = Number(c2.value)
  var medida2 = larg2 * comp2
  var l3 = window.document.getElementById('largura3')
  var c3 = window.document.getElementById('comprimento3')
  var larg3 = Number(l3.value)
  var comp3 = Number(c3.value)
  var medida3 = larg3 * comp3
  var l4 = window.document.getElementById('largura4')
  var c4 = window.document.getElementById('comprimento4')
  var p4 = window.document.getElementById('profundidade')
  var larg4 = Number(l4.value)
  var comp4 = Number(c4.value)
  var prof4 = Number(p4.value)
  prof4 = prof4 + 0.1
  var medida4 = ((larg4 * prof4) * 2) + ((comp4 * prof4) * 2) + (comp4 * larg4)




  //Área com manta 3mm Desc
  var qtdMantaMorter = (medida1 * 1.10 / 7)
  var qtdPlastipegante = qtdMantaMorter / 10
  var qtdDiplas = qtdMantaMorter / 10
  var totalprod = qtdMantaMorter * manta3mmDesc + qtdDiplas * diplas + qtdPlastipegante * plastipegante
  var totalMaodeObra = medida1 * maoDeObra
  var totalOrcamento = qtdMantaMorter * manta3mmDesc + qtdDiplas * diplas + qtdPlastipegante * plastipegante + totalMaodeObra
  res1.innerHTML = `<p> A área deu  Total de ${medida1} m2 </p> <p>Irá utilizar: </p> <p>${qtdMantaMorter} rolos de Morterplas 3 mm </p> <p> ${qtdPlastipegante} baldes de Plastipegante </p> <p>${qtdDiplas} sacos de Diplas</p> <p> Total de produtos R$ ${totalprod} </p> <p> Mão de obra R$ ${totalMaodeObra}</p> <p> Total de R$${totalOrcamento}</p>`



  // Área com manta 3mm Desc
  var qtdMantaMorterA = (medida2 * 1.15 / 7)
  var qtdPlastipeganteA = qtdMantaMorterA / 10
  var qtdDiplasA = qtdMantaMorterA / 10
  var totalprodA = qtdMantaMorterA * manta3mmAlum + qtdMantaMorterA * plastipegante
  var totalMaodeObraA = medida2 * maoDeObra
  var totalOrcamentoA = qtdMantaMorterA * manta3mmAlum + qtdMantaMorterA * plastipegante + totalMaodeObraA
  res2.innerHTML = `A área deu  Total de ${medida2} m2 </p> <p> Irá utilizar: </p> ${qtdMantaMorterA} rolos de Morteplas Alumínio 3 mm</p> <p> ${qtdPlastipeganteA} baldes de Plastipegante</p> <p> Total de produtos R$ ${totalprodA} </p> <p>Mão de obra R$ ${totalMaodeObraA}</p> Total de R$${totalOrcamentoA}</p>`



  // Área com manta 2mm Morplava Alumínio
  var qtdMantaMorpl = ((medida3 * 1.30) * 1.15) / 10
  var qtdPlastipegante3 = qtdMantaMorpl / 10
  var totalprod3 = qtdMantaMorpl * manta2mmMorpl + qtdPlastipegante3 * plastipegante
  var totalMaodeObra3 = medida3 * (maoDeObra * 1.3)
  var totalOrcamento3 = qtdMantaMorpl * manta2mmMorpl + qtdPlastipegante3 * plastipegante + totalMaodeObra3
  res3.innerHTML = `A área deu  Total de ${medida3} m2 </p> <p> Irá utilizar: </p> ${qtdMantaMorpl} rolos de Morplava 2 mm </p> <p> ${qtdPlastipegante3} baldes de Plastipegante</p> <p> Total de produtos R$ ${totalprod3} </p><p> Mão de obra R$ ${totalMaodeObra3}</p> Total de R$${totalOrcamento3}</p>`

  // Área com manta 2mm Morplava Alumínio
  var qtdMantaMorterp = (medida4 * 1.10 / 7)
  var qtdPlastipegante4 = qtdMantaMorterp / 10
  var qtdDiplas = (qtdMantaMorterp / 3.34)
  var totalprod4 = qtdMantaMorterp * manta3mmDesc + qtdPlastipegante4 * plastipegante + qtdDiplas * diplas
  var totalMaodeObra4 = medida4 * maoDeObra
  var totalOrcamento4 = totalprod4 + totalMaodeObra4
  res4.innerHTML = `A área deu  Total de ${medida4} m2 </p> <p> Irá utilizar: </p> ${qtdMantaMorterp} rolos de Morterplas 3 mm</p> <p> ${qtdPlastipegante4} baldes de Plastipegante </p> <p>${qtdDiplas} sacos de Diplas</p> <p> Total de produtos R$ ${totalprod4} </p><p> Mão de obra R$ ${totalMaodeObra4}</p> Total de R$${totalOrcamento4}</p>`


}


function multiplicar_50() {

  const manta3mmDesc = 358.25
  const manta3mmAlum = 402.31
  const manta2mmMorpl = 414.76
  const plastipegante = 266.41
  const diplas = 61.85
  const texsapSemi = 73
  const texsapFlex = 215
  const texsapSuper = 240
  const maoDeObra = 42
  var l1 = window.document.getElementById('largura_50')
  var c1 = window.document.getElementById('comprimento_50')
  var larg = Number(l1.value)
  var comp = Number(c1.value)
  var medida1 = larg * comp
  var l2 = window.document.getElementById('largura2_50')
  var c2 = window.document.getElementById('comprimento2_50')
  var larg2 = Number(l2.value)
  var comp2 = Number(c2.value)
  var medida2 = larg2 * comp2
  var l3 = window.document.getElementById('largura3_50')
  var c3 = window.document.getElementById('comprimento3_50')
  var larg3 = Number(l3.value)
  var comp3 = Number(c3.value)
  var medida3 = larg3 * comp3
  var l4 = window.document.getElementById('largura4_50')
  var c4 = window.document.getElementById('comprimento4_50')
  var p4 = window.document.getElementById('profundidade_50')
  var larg4 = Number(l4.value)
  var comp4 = Number(c4.value)
  var prof4 = Number(p4.value)
  prof4 = prof4 + 0.1
  var medida4 = ((larg4 * prof4) * 2) + ((comp4 * prof4) * 2) + (comp4 * larg4)




  //Área com manta 3mm Desc
  var qtdMantaMorter = Math.ceil(medida1 * 1.10 / 7)
  var qtdPlastipegante = Math.ceil(qtdMantaMorter / 10)
  var qtdDiplas = Math.ceil(qtdMantaMorter / 10)
  var totalprod = qtdMantaMorter * manta3mmDesc + qtdDiplas * diplas + qtdPlastipegante * plastipegante
  var totalMaodeObra = medida1 * maoDeObra
  var totalOrcamento = qtdMantaMorter * manta3mmDesc + qtdDiplas * diplas + qtdPlastipegante * plastipegante + totalMaodeObra
  res1_50.innerHTML = `<p>A área Total de ${medida1} m2 </p> <p> Irá utilizar: </p> <p> ${qtdMantaMorter} rolos de Morterplas 3 mm </p> <p> ${qtdPlastipegante} baldes de Plastipegante </p> <p>${qtdDiplas} sacos de Diplas</p> <p> Total de produtos R$ ${totalprod} </p> <p> Mão de obra R$ ${totalMaodeObra}</p> <p> Total de R$${totalOrcamento}`



  // Área com manta 3mm Desc
  var qtdMantaMorterA = Math.ceil(medida2 * 1.15 / 7)
  var qtdPlastipeganteA = Math.ceil(qtdMantaMorterA / 10)
  var totalprodA = qtdMantaMorterA * manta3mmAlum + qtdPlastipeganteA * plastipegante
  var totalMaodeObraA = medida2 * maoDeObra
  var totalOrcamentoA = qtdMantaMorterA * manta3mmAlum + qtdPlastipeganteA * plastipegante + totalMaodeObraA
  res2_50.innerHTML = `<p>A área Total de ${medida2} m2 </p> <p> irá utilizar:</p> <p> ${qtdMantaMorterA} rolos de Morteplas Alumínio 3 mm </p> <p> ${qtdPlastipeganteA} baldes de Plastipegante </p> <p> Total de produtos R$ ${totalprodA} </p> <p>M ão de obra R$ ${totalMaodeObraA}</p> <p>Total de R$${totalOrcamentoA}`



  // Área com manta 2mm Morplava Alumínio
  var qtdMantaMorpl = Math.ceil(((medida3 * 1.30) * 1.15) / 10)
  var qtdPlastipegante3 = Math.ceil(qtdMantaMorpl / 10)
  var totalprod3 = qtdMantaMorpl * manta2mmMorpl + qtdPlastipegante3 * plastipegante
  var totalMaodeObra3 = Math.ceil(medida3 * (maoDeObra * 1.3))
  var totalOrcamento3 = qtdMantaMorpl * manta2mmMorpl + qtdPlastipegante3 * plastipegante + totalMaodeObra3
  res3_50.innerHTML = `<p>A área Total de ${medida3} m2 </p> <p>Irá utilizar:</p> <p> ${qtdMantaMorpl} rolos de Morplava 2 mm </p> <p>${qtdPlastipegante3} baldes de Plastipegante </p> <p> Total de produtos R$ ${totalprod3} </p> <p>Mão de obra R$ ${totalMaodeObra3}</p> <p>Total de R$${totalOrcamento3}`


  // Área com manta 2mm Morplava Alumínio
  var qtdMantaMorterp = Math.ceil((medida4 * 1.10 / 7))
  var qtdPlastipegante4 = Math.ceil(qtdMantaMorterp / 10)
  var qtdDiplas = Math.ceil(qtdMantaMorterp / 3.34)
  var totalprod4 = qtdMantaMorterp * manta3mmDesc + qtdPlastipegante4 * plastipegante + qtdDiplas * diplas
  var totalMaodeObra4 = Math.ceil(medida4 * maoDeObra)
  var totalOrcamento4 = qtdMantaMorterp * manta3mmDesc + qtdPlastipegante4 * plastipegante + qtdDiplas * diplas + totalMaodeObra4
  res4_50.innerHTML = `<p>A área Total de ${medida4} m2 </p> <p>Irá utilizar: </P> ${qtdMantaMorterp} rolos de Morterplas 3mm</p> <p> ${qtdPlastipegante4} baldes de Plastipegante</p> <p>${qtdDiplas} sacos de Diplas</p> <p> Total de produtos R$ ${totalprod4} </p><p> Mão de obra R$ ${totalMaodeObra4}</p> <p>Total de R$${totalOrcamento4}</p>`
  
}

