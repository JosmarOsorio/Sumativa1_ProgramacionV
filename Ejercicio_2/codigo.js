//Escribir un script en que muestre un mensaje de bienvenida, Fecha y hora. El script se encuentra en un archivo externo codigo.js. Por: Josmar osorio. Para: Programación V-UBA

let fecha = new Date(); //Creamos una variable llamada fecha para obtener la fecha y la hora actual 
alert("Hola bienvenido, hoy es " + fecha.toLocaleDateString() + " y son las " + fecha.toLocaleTimeString() + ".") /*Utilizamos fecha.toLocaleDateString() y 
fecha.toLocaleTimeString() para mostrar la fecha actual y la hora respectivamente*/
