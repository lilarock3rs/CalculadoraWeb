var app= angular.module('Calculadora',[]);

app.service('ServicioCalculadora', function(){
	

	this.suma= function(PrimerOperador,SegundoOperador)
	{ return PrimerOperador+SegundoOperador };

	this.resta=function(PrimerOperador,SegundoOperador)
	{ return PrimerOperador-SegundoOperador };
	

	this.multiplicacion=function(PrimerOperador,SegundoOperador)
	{ return PrimerOperador*SegundoOperador };

	this.division=function(PrimerOperador,SegundoOperador)
	{ return PrimerOperador/SegundoOperador };

	this.mplus=0;
	this.mminor=0;

});


// Procedimiento

app.controller('CalculadoraCtrl', function($scope, ServicioCalculadora){

		$scope.hacerSuma = function() {
		$scope.mensaje= $scope.PrimerOperador+"+"+ $scope.SegundoOperador;
		$scope.resultado= ServicioCalculadora.suma($scope.PrimerOperador,$scope.SegundoOperador);
	}
		$scope.hacerResta=function(){
		$scope.mensaje= $scope.PrimerOperador+"-"+ $scope.SegundoOperador;
		$scope.resultado= ServicioCalculadora.resta($scope.PrimerOperador,$scope.SegundoOperador);
	}

		$scope.hacerMultiplicacion=function(){
		$scope.mensaje= $scope.PrimerOperador+"*"+ $scope.SegundoOperador;
		$scope.resultado= ServicioCalculadora.multiplicacion($scope.PrimerOperador,$scope.SegundoOperador);
	}

		$scope.hacerDivision=function(){
		$scope.mensaje= $scope.PrimerOperador+"/"+ $scope.SegundoOperador;
		$scope.resultado= ServicioCalculadora.division($scope.PrimerOperador,$scope.SegundoOperador);
	}
/*Operaciones Especiales*/
		$scope.hacerMPlus=function(){
		$scope.mensaje = "Suma de " + $scope.resultado + " con el valor guardado " + ServicioCalculadora.mplus;
		$scope.resultado = ServicioCalculadora.suma($scope.resultado, ServicioCalculadora.mplus);
	}


		$scope.hacerMMinor=function(){
		$scope.mensaje = "Resta de " + $scope.resultado + " con el valor guardado " + ServicioCalculadora.mminor;
		$scope.resultado = ServicioCalculadora.resta($scope.resultado, ServicioCalculadora.mminor);
	}

		$scope.hacerMSave=function(){	
		ServicioCalculadora.mplus=$scope.resultado;
		ServicioCalculadora.mminor=$scope.resultado;
		$scope.mensaje="Resultado Grabado!";
	}

		$scope.hacerMClean=function(){	
		$scope.mensaje = "Borrado del almacenamiento";
		console.log= $scope.resultado;
		return $scope.resultado=0;


	}

	});