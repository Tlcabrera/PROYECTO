


function calcularLlamada(){
  
  let cantidad=document.getElementById('cantidad').value
  let tipollamada=document.getElementById('tipollamada').value
  let mensaje=document.getElementById("resultado")
  let llamada
//  console.log(valor)
  
	if(parseInt(tipollamada)===1){
		llamada=200*cantidad
		mensaje.innerHTML= `El valor de la llamada es: ${llamada}`
		
	}
	else{
		llamada=300*cantidad
		alert("El valor de la llamada es "+llamada)		
	}
  


}


function calcularAreacu(){
	let lado=document.getElementById('lado').value
  	let mensaje=document.getElementById("resultado")

  	let area=lado*lado
  	mensaje.innerHTML= `El área del cuadrado es: ${area} cm <sup>2</sup>`
}