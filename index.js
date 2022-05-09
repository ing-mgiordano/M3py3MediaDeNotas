const nota1 = parseInt(prompt('Ingrese la nota 1',0))
const nota2 = parseInt(prompt('Ingrese la nota 2',0))
const nota3 = parseInt(prompt('Ingrese la nota 3',0))


const resultMedia = `El resultado de la media de ${nota1}||${nota2}||${nota3} es: ${(nota1+nota2+nota3)/3}`


document.getElementById('resultMed').innerHTML = resultMedia