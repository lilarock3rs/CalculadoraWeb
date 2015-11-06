/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ws;

import javax.jws.WebService;
import javax.jws.WebMethod;
import javax.jws.WebParam;
import logic.Calculator;

/**
 *
 * @author Laura Alvarez
 */
@WebService(serviceName = "wsCalc")

public class wsCalc {

    /**
     * This is a sample web service operation
     */
    
    Calculator calc1= new Calculator();
    
    @WebMethod(operationName = "suma")
    public int suma(@WebParam(name = "a") int a,@WebParam(name = "b") int b) {
        return calc1.suma(a,b);
    }
    
       @WebMethod(operationName = "resta")
    public int resta(@WebParam(name = "a") int a,@WebParam(name = "b") int b) {
        return calc1.resta(a,b);
    }
    
           @WebMethod(operationName = "multiplicacion")
    public int multiplicacion (@WebParam(name = "a") int a,@WebParam(name = "b") int b) {
        return calc1.multiplicacion(a,b);
    }
    
           @WebMethod(operationName = "division")
    public int division (@WebParam(name = "a") int a,@WebParam(name = "b") int b) {
        return calc1.division(a,b);
    }
}
