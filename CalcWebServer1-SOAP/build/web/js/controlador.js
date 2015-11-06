app.controller('CalculadoraCtrl', function($scope, ServicioCalculadora, localStorageService){


		$scope.hacerSuma = function() {
		$scope.mensaje= $scope.PrimerOperando+"+"+ $scope.SegundoOperando;
		$scope.resultado= ServicioCalculadora.suma($scope.PrimerOperando,$scope.SegundoOperando);
	}
		$scope.hacerResta=function(){
		$scope.mensaje= $scope.PrimerOperando+"-"+ $scope.SegundoOperando;
		$scope.resultado= ServicioCalculadora.resta($scope.PrimerOperando,$scope.SegundoOperando);
	}

		$scope.hacerMultiplicacion=function(){
		$scope.mensaje= $scope.PrimerOperando+"*"+ $scope.SegundoOperando;
		$scope.resultado= ServicioCalculadora.multiplicacion($scope.PrimerOperando,$scope.SegundoOperando);
	}

		$scope.hacerDivision=function(){
		$scope.mensaje= $scope.PrimerOperando+"/"+ $scope.SegundoOperando;
		$scope.resultado= ServicioCalculadora.division($scope.PrimerOperando,$scope.SegundoOperando);
	}
/*Operaciones Especiales*/
		$scope.hacerMPlus=function(){
		$scope.mensaje = "Suma de " + $scope.resultado + " con el valor guardado " + ServicioCalculadora.mplus;
		$scope.resultado = ServicioCalculadora.suma($scope.resultado, ServicioCalculadora.mplus);
		localStorageService.set('angular-almacenado',$scope.resultado);
	}


		$scope.hacerMMinor=function(){
		$scope.mensaje = "Resta de " + $scope.resultado + " con el valor guardado " + ServicioCalculadora.mminor;
		$scope.resultado = ServicioCalculadora.resta($scope.resultado, ServicioCalculadora.mminor);
		localStorageService.set('angular-almacenado',$scope.resultado);
	}

		$scope.hacerMSave=function(){	

		//Verifica el cambio de la variable resultado
		$scope.$watch('resultado', function(newValue, oldValue) {
  			localStorageService.set('angular-almacenado',$scope.resultado);
			});

		}
         
		$scope.mensaje="Resultado Grabado!";
		$scope.resultado= localStorageService.get('angular-almacenado');
		ServicioCalculadora.mplus=localStorageService.get('angular-almacenado');
		ServicioCalculadora.mminor=localStorageService.get('angular-almacenado');




		$scope.hacerMRead=function(){

		$scope.mensaje = "El Numero almacenado es";
		$scope.resultado = localStorageService.get('angular-almacenado');
		}


		$scope.hacerMClean=function(){	
		$scope.mensaje = "Borrado del almacenamiento";
		localStorageService.clearAll();
		return $scope.resultado=0;
	}

	});