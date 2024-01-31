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