var app = angular.module('Calculadora', ['LocalStorageModule'])

app.config(function (localStorageServiceProvider) {
  localStorageServiceProvider
    .setPrefix('calculadora')
    .setStorageType('localStorage');
});


app.service('ServicioCalculadora', function(){
	


	this.suma= function(PrimerOperando,SegundoOperando)
	{ return PrimerOperando+SegundoOperando };

	this.resta=function(PrimerOperando,SegundoOperando)
	{ return PrimerOperando-SegundoOperando };
	

	this.multiplicacion=function(PrimerOperando,SegundoOperando)
	{ return PrimerOperando*SegundoOperando };

	this.division=function(PrimerOperando,SegundoOperando)
	{ return PrimerOperando/SegundoOperando };


 this.mplus=0;
  this.mminor=0;


});