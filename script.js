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

// AULA 38 -