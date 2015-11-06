var app = angular.module('Calculadora', ['LocalStorageModule'])

app.config(function (localStorageServiceProvider) {
  localStorageServiceProvider
    .setPrefix('calculadora')
    .setStorageType('localStorage');
});


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