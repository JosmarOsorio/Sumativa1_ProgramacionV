//Comprobar la siguiente expresión es verdadera o falsa, documentar su respuesta.  Por: Josmar osorio. Para: Programación V-UBA

let x = 15
let y = 2
!( x == "15" || x === y ) && !(y !== 2 && x <= y)

/*Analizando por partes podemos ver primeramente a la expresion "x == "15"" la cual resulta ser verdadera ya que la variable "x" es igual a 15. Luego tenemos tambien a la expresion
"x === y" la cual resulta ser falsa ya que la variable "x" no es estrictamente igual a la variable "y". Teniendo esto en cuenta vemos que la expresion completa del lado izquierdo
se encuentra negada por lo cual se invierten los resultados anteriores, y al tratarse de una comparacion OR esto nos dice que si una comparacion es verdadera entonces la 
expresion es verdadera. Entonces podemos dceir que !( x == "15" || x === y ) es falsa debido a la negacion.

Por otro lado haciendo al revision del lado drecho de la expresion tenemos "y !== 2" esto comapara que la vairbale "y" sea diferente a 2 lo cual es falso ya que "y = 2".
Luego tenemos la expresion x <= y  la cual es falta debido a que la variable "x" es mayor a la vairable "y". Esta parte de la expresion tambien se encuentra negada por lo tanto se
invierten los resultados quedando la expresion "!(y !== 2 && x <= y)" como verdadera.

Por ultimos podemos decir que la expresion completa es falsa debidio a que ambas comparativas dan un resultado diferente en su analisis.*/