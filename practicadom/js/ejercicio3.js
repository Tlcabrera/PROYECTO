function calculadora() {

	let num1=document.getElementById('num1').value
	let num2=document.getElementById('num2').value
	let res
	let op=document.getElementById('operacion').value
	op=parseInt(op)
	
	
	switch(op){
		case 1:
		res=parseInt(num1)+parseInt(num2)
		alert("La suma entre "+num1+" y "+num2+"\n es "+res);
		break;

		case 2:
		res=num1-num2
		alert("La resta entre "+num1+" y "+num2+"\n es "+res);
		break;
	}
	
}


fr