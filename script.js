// // AULA 27 - MÉTODOS NUMÉRICOS

// // ParseFloat - Converte uma String em um Number com virgula
// console.log('12.999');
// console.log(Number.parseFloat('12.999'));

// //ParseInt - Converte uma String em um Number inteiro 
// console.log('10');
// console.log(16.96);

// //toFixed - Deixa com quantas casas decimais for passada por parametro
// console.log(23.5151515.toFixed(1));

// //isNaN - Retorna True or False se for ou não um Number
// console.log(isNaN('teste'));

// // MAX_VALUE E MIN_VALUE
// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);

// AULA 28 - FUNÇÕES DE STRING (toUpperCase, toLowerCase, length)

//length - Verifica o comprimento da frase, palavra, lista, etc...
// var nome = 'otavio'
// console.log(nome.length);

// var obj = 'bola'
// console.log(obj.length);

// //indexOf - Retorna o que tem no indice ou indice da palavra passado(a) por parametro
// console.log(nome[3]);

// var frase = 'O rato roeu a roupa do rei de Roma'
// console.log(frase.indexOf('roeu'));

// //slice - Remove a palavra ou letra passando por parametro o indice inicial e final

// var roeu = frase.slice(7, 11)
// console.log(roeu);

// replace - Troca a palavra ou letra passada por parametro 

// var novaFrase = frase.replace('roeu','teste')
// console.log(novaFrase);

// AULA 29 - FUNÇÕES DE STRING PARTE 2

//toLowerCase - Modifica a frase para caixa baixa(minuscula)

// var frase = 'Esta é a Frase que Vamos Manipular'
// console.log(frase.toLowerCase());

// //toUpperCase - Modifica a frase para caixa alta(Maiuscula)

// var fraseCaixaAlta = 'Esta é a Frase que Vamos Manipular'
// console.log(fraseCaixaAlta.toUpperCase());

// //trim - Remove os espaços

// var nome = '   otavio     '
// console.log(nome.trim());

// //split - Converte uma frase em um array(passa o separador por parametro)

// var frase = 'Esta é a Frase que Vamos Manipular'
// console.log(frase.split(' '));

// var tags = 'PHP, JavaScript, HTML, CSS'
// console.log(tags.split(', '))

// //lastIndexOf - Retorna(último) o que tem no indice ou indice da palavra passado(a) por parametro

// var fraseDois = 'Eu quero a última palavra teste dessa frase de teste'
// console.log(fraseDois.indexOf('teste'));
// console.log(fraseDois.lastIndexOf('teste'));

// AULA 30 e 31 - FUNÇÕES DE ARRAY

// push - Adiciona um elemento ao final do array (arr.push())
// pop - Remove o elemento no final do array (arr.pop())
// unshift - Adiciona um elemento no inicio do array (arr.unshift())
// shift - Remove um elemento no inicio do array (arr.shift())
// acessar o último elemento - (arr[arr.length - 1])
// isArray - Confere se o tipo de dado é um array - Array.isArray(arr)
// splice - Adiciona um elemento no meio do array (arr.splice(indice em que vai add,qts elementos vai remover,qual valor vai add))
// indexOf - Localiza o indice do elemento que deseja - arr.indexOf(index)
// join - Transforma um array em uma string - arr.join(',') A vrigula é usada como separador
// reverse - Inverte as posições dos elementos no array - arr.reverse()

// AULA 32 - CRIANDO OBJETOS COM MÉTODOS

// let pessoa = {
//     nome: 'Otávio',
//     idade: 27,
//     falar: function(){
//         console.log('Olá, tudo bem?');
//     },
//     soma: function (a,b) {
//         return a + b
//     }
//}
// console.log(pessoa.nome);
// pessoa.falar()
// var soma = pessoa.soma(2, 2)
// console.log(soma);

// AULA 33 - UTILIZANDO O THIS

// let pessoa = {
//     nome: 'Otávio',
//     idade: 27,
//     falar: function(){
//         console.log('Olá, tudo bem?');
//     },
//     dizerNome: function() {
//         console.log('O meu nome é' + this.nome);
//     }
//     aniversario: function() {
//         this.idade+=1
//     }
// }
// pessoa.dizerNome()
// pessoa.aniversario()

// AULA 34 e 35 - DOM(DOCUMENT OBJECT MODEL) - Interface de programação para HTML

//TAGS
// let titulo = document.getElementsByTagName('h1')[0]
// let lis = document.getElementsByTagName('li')

// //ID
// let pragrafo = document.getElementById('paragrafo')

// //CLASS
// let itensDaLista = document.getElementsByClassName('item')

// AULA 36 - querySelector e querySelectorAll 
// let itensClasse = document.getElementsByClassName('item')
// let itensQuery = document.querySelectorAll('#lista2 li')  // querySelectorAll (# acessa ID) (TAG não precisa de nada)
// let itensQuery2 = document.querySelectorAll('#lista .item') // querySelectorAll (. acessa CLASS) (TAG não precisa de nada)

// let lista = document.querySelector('#lista') // querySelector
// let primeiraLista = document.querySelector('ul') // querySelector
// let span = document.querySelector('#paragrafo span') // querySelector

// AULA 37 - ALTERAR CONTEÚDO DO ELEMENTO (textContent e innerHTML),

// let title = document.querySelector('#tittle') // selecionar elemento
// title.innerHTML = 'Testando o texto alterado!' // innerHTML
// let subtitle = document.querySelector('.subtitle') // textContent - mais utilizado e recomendado
// subtitle.textContent = 'Testando o textContent'

// AULA 38 - CRIANDO ELEMENTOS DOM (createElement)

// var novoParagrafo = document.createElement('p')
// var texto = document.createTextNode('Texto do paragráfo')
// novoParagrafo.appendChild(texto)                           // Inserindo elemento no body
// console.log(novoParagrafo);

// var body = document.querySelector('body')
// body.appendChild(novoParagrafo)

// var container = document.getElementById('container')
// var el = document.createElement('span')                     // Inserindo elemento em um container
// el.appendChild(document.createTextNode('texto do span'))
// container.appendChild(el)

// AULA 39 - REMOVENDO ELEMENTOS (removeChild)

// var container = document.querySelector('#container')
// var p = document.querySelector('#container p')
// container.removeChild(p)

// // Remover o elemento
// var subtitle = document.querySelector('.subtitle')
// subtitle.remove()

// AULA 40 - INSERINDO ELEMENTOS (appendChild e insertBefore)

// var el = document.createElement('div')
// el.classList = 'div-criada'
// var container = document.querySelector('#container')

// container.appendChild('el') // inserindo elemento filho

// var el2 = document.createElement('div')
// el2.classList = 'div-before' // insertBefore - Insere Antes
// var el3 = document.querySelector('#container .div-criada')
// container.insertBefore(el2, el3)

// AULA 41 - TROCANDO ELEMENTOS (replaceChild)

// var el = document.createElement('h3')
// el.classList = 'testando-classe'
// var texto = document.createTextNode('Este é o texto do h3')
// el.appendChild(texto)

// var title = document.querySelector('#title') // Selecionar o elemento que quero trocar

// var pai = title.parentNode // Selecionar o pai do el

// pai.replaceChild(el, title) // Trocar os elemento (o que vai substituir, o que vai ser substituido)

// AULA 42 - ADICIONANDO ATRIBUTOS (setAttribute)

// var title = document.querySelector('#title')
// title.setAttribute('class','testando-atributo')    // (primeiro - adiciona o parametro(classe,id,etc), segundo - o valor p/ parametro)
// var btn = document.querySelector('#btn')
// btn.setAttribute('disabled','disabled')
// var subtitle = document.querySelector('.subtitle')
// subtitle.setAttribute('id','titulo-2')

// var lista = document.querySelector('#lista')
// lista.removeAttribute('id')   // Removendo atributo (removeAttribute)

// AULA 43 - ADICIONANDO(ALTERANDO) CSS PELO DOM

// var title = document.querySelector('#title') // Seleciona o elemento(querySelector)
// title.style.color = 'red' // Adiciona o estilo(manipula o CSS)
// title.style.backgroundColor = 'yellow'

// Adicionar vários elementos de uma vez
// subtitle.style.cssText = 'color: blue; background-color: pink; font-size: 50px'

// AULA 44 - PROPRIEDADES DE DOCUMENT
// console.log(document.body);
// console.log(document.head);
// console.log(document.URL); // URL da página atual
// console.log(document.title);
// document.title = 'Aula 42' // Alterando o valor do title atraves das propriedades DOM

// AULA 45 - CALLBACK FUNCTIONS
// function exibir(num) {
//     console.log('A operação resultou em: ' + num);
// } 

// function soma(a, b, callback) {
//     var op = a * b
//     callback(op)
// }

// function multiplicacao(a, b, cb) {
//     var op = a * b
//     cb(op)
// }
// soma(2, 2, exibir)
// multiplicacao(2, 4, exibir)

// AULA 46 - SETTIMEOUT E SETINTERVAL

// console.log('Antes do setTimeout');
// setTimeout(function () {
//     console.log('Testando o setTimeout');
// }, 2000) // Tempo em milisegundos
// console.log('Depois do setTimeout');

//  setInterval(function () {
//     console.log('Testando o setInterval');
//  }, 1000) // Tempo em milisegundos

// AULA 47 - CLEARTIMEOUT E CLEARINTERVAL
// var x = 0
// var myTimer = setTimeout(function() {
//     console.log('O x é 0')
// }, 1500)
//                                         // clearTimeout na prática
// x = 5
// if (x > 0) {
//     clearTimeout(myTimer)
//     console.log('O x passou de 0');
// }

// var myInterval = setInterval(function(){
//     console.log('Imprimindo interval')
// }, 500)
//                                                // clearInterval na prática
// setTimeout(function(){
//     console.log('Não precisamos mais repetir')
//     clearInterval(myInterval)
// }, 1500)

// AULA 48 - EVENTOS E ONLOAD
// window.onload(function() {
//     console.log('Carregou o DOM');
// })

// AULA 49 - EVENTOS CLICK E DBLCLICK DO DOM

// let btn = document.querySelector('#btn')
// btn.addEventListener('click', function() {
//     console.log('clicou');
// })

// let title = document.querySelector('#title')
// title.addEventListener('click', function() {   // click afetando outros elementos
//     console.log('teste');
//     this.style.color = 'red'
// })

// let subtitle = document.querySelector('.subtitle')
// subtitle.addEventListener('dblclick', function () {   // click duplo
//     console.log('click duplo');
// })

// AULA 50 - EVENTOS MOUSEOVER E MOUSEOUT

// let title = document.querySelector('#title')
// title.addEventListener('mouseover',function() { // Add o evento que qnd passar o mouse, vai realizar a ação.
//     this.style.backgroundColor = 'yellow'  // A ação é o title ficar com a cor de fundo amarela quando for passado o mouse
// })

// title.addEventListener('mouseout', function () { // Add o evento que qnd retira o mouse, vai realizar a ação.
//     this.style.backgroundColor = 'white' // A ação é o title ficar com a cor de fundo branca, após retirar o mouse.
// })

// let criandoTag = document.createElement('p')
// criandoTag.classList = 'hide'
// let addTextoTag = document.createTextNode('Contém algum texto!')
// criandoTag.appendChild(addTextoTag)

// let subtitle = document.querySelector('.subtitle')
// subtitle.addEventListener('mouseover', function () { // Quando passar o mouse, vai remover o texto criado.
//     let legenda = document.querySelector('#legenda')
//     legenda.classList.remove('hide')
// })

// subtitle.addEventListener('mouseout', function () {
//     let legenda = document.querySelector('#legenda') // Quando retirar o mouse, vai add novamente o texto criado.
//     legenda.classList.add('hide')
// })

// AULA 51 - EVENTOS KEYDOWN E KEYUP
// document.addEventListener('keydown', function (event) {
//     if (event.key === 'Enter') {  // keydown é ativado quando uma tecla é pressionada.
//         console.log('Apertou Enter');
//     }
// })
// document.addEventListener('keyup', function (e) {
//     if (e.key === 'Enter') { // keyup é ativado quando a tecla pressionada volta ao posição normal
//         console.log('Soltou o Enter');
//     }
// })

// AULA 52 - CRIANDO O PROJETO DO CURSO