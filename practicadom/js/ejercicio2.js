function conversion(){

  let grados=document.getElementById('grados').value
  let gradosde=document.getElementById('de').value
  let gradosa=document.getElementById('a').value

  //gradosde=parseInt(gradosde)
  //gradosa=parseInt(gradosa)

  if(gradosde==="Fa" && gradosa==="Ce"){
    let resultado=(parseFloat(grados)-32)*5/9
    alert(" "+grados+" °F "+" equivalen a "+resultado.toFixed(3)+" °C")
  }
  else if(gradosde===1 && gradosa===3){
    let resultado=((parseFloat(grados)-32)*5/9)+273.15
    alert(" "+grados+" °F "+" equivalen a "+resultado.toFixed(3)+" °K")
  }
  else if(gradosde===2 && gradosa===1){
    let resultado=((parseFloat(grados)*9/5))+32
    alert(" "+grados+" °F "+" equivalen a "+resultado.toFixed(3)+" °C")
  }
  else if(gradosde===2 && gradosa===3){
    let resultado=parseFloat(grados)+273.15
    alert(" "+grados+" °C "+" equivalen a "+resultado.toFixed(3)+" °K")
  }
  else if(gradosde===3 && gradosa===1){
    let resultado=((parseFloat(grados)-273.15)*9/5)+32
    alert(" "+grados+" °K "+" equivalen a "+resultado.toFixed(3)+" °F")
  }
  else if(gradosde===3 && gradosa===2){
    let resultado=parseFloat(grados)-273.15
    console.log(resultado)
    alert(" "+grados+" °K "+" equivalen a "+resultado.toFixed(3)+" °C")
  }
}