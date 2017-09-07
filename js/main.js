//DATOS DE VALIDACION DE LOS IMPUT
function guardarDatos{
	locoalStorage.nombre = document.getElementById('nombre').value;
	locoalStorage.password =document.getElementById('password').value;
}

function recuperarDatos{
	if ((locoalStorage.nombre != undefined) && (locoalStorage.password != undefined)) {
		document.getElementById('datos').innerHTML = "nombre:"+ locoalStorage.nombre + "<br/> password:"+ locoalStorage.password;
	} else {
		document.getElementById('datos').innerHTML = "No has introducido tu nombre y tu password";
	}
}