import {Lista} from './lista.js';
import {bootbox_prompt,bootbox_alert} from '../utils/dialog.js';

let lista=null;

export async function insertar_al_inicio(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista(canvas);		
    }
    
    var DATO = await bootbox_prompt("ingrese valor de nodo");
    if(DATO==null){
        
        
        return ;
    }


    try{
        if(lista.buscar(DATO)==true)
            throw new Error("EL NODO YA SE INGRESO");

        lista.inserta_inicio(DATO);
        lista.dibujarNodosLog();	
        lista.dibujarNodos(DATO);
    
    }catch(e){

        await bootbox_alert(e.message);
    }
}////////////////////////////////////////////////////////
export async function insertar_al_final(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista(canvas);		
    }
    
    try{
        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }

        var DATO = await bootbox_prompt("ingrese valor de nodo");
        if(DATO==null){
        
           
            return ;
         }
    

        if(lista.buscar(DATO)==true)
                throw new Error("EL NODO YA SE INGRESO");

        lista.inserta_final(DATO);
        lista.dibujarNodosLog();	
        lista.dibujarNodos(DATO);
    
    }catch(e){

       await bootbox_alert(e.message);
    }

}//////////////////////////////////////////////////////////
export async function insertar_antes_x(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista(canvas);		
    }
    
    try{

        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }
        
        var DATO = await bootbox_prompt("ingrese valor de DATO");
        if(DATO==null){
            return ;
         }
    
     

        if(lista.buscar(DATO)==true)
                throw new Error("EL NODO YA SE INGRESO");

        var X = await bootbox_prompt("ingrese valor de X");
        if(X==null)
                return;
        
        lista.inserta_antes_X(DATO,X);
        lista.dibujarNodosLog();	
        lista.dibujarNodos(DATO);
        
    }catch(e){

        await bootbox_alert(e.message);
    }

}/////////////////////////////////////////////////////////
export async function insertar_despues_x(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista(canvas);		
    }
    
    try{

        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }
        
        var DATO = await bootbox_prompt("ingrese valor de DATO");
        if(DATO==null)
                return;
        
        

        if(lista.buscar(DATO)==true)
                throw new Error("EL NODO YA SE INGRESO");

        var X = await bootbox_prompt("ingrese valor de X");
        if(X==null)
                return;
        
        lista.inserta_despues_X(DATO,X);
        lista.dibujarNodosLog();	
        lista.dibujarNodos(DATO);
        
    }catch(e){

        await bootbox_alert(e.message);
    }

}

/////////////////////////////////////////////////////////
export async function elimina_inicio(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista(canvas);		
    }

    try{//intento o ejecucion 
        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }

        lista.elimina_inicio();
        lista.dibujarNodosLog();	
        lista.dibujarNodos();

        await bootbox_alert("NODO ELIMINADOS SATISFACTORIAMENTE");
    
    }catch(e){//si hay algun problema en el try
        await bootbox_alert(e.message);
    }
}/////////////////////////////////////////////////////////
export async function eliminar_ultimoNodo(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista(canvas);		
    }

    try{
        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }

        lista.eliminar_ultimo_nodo();
        lista.dibujarNodosLog();	
        lista.dibujarNodos();

        await bootbox_alert("NODO ELIMINADOS SATISFACTORIAMENTE");
    
    }catch(e){

        await bootbox_alert(e.message);
    }
}/////////////////////////////////////////////////////////
export async function eliminar_nodoX(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista(canvas);		
    }

    try{

        
        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }
        
             

        var X = await bootbox_prompt("ingrese valor de X");
        if(X==null)
                return;
        
        
        

        lista.eliminar_nodo_X(X);
        lista.dibujarNodosLog();	
        lista.dibujarNodos();

        await bootbox_alert("NODO ELIMINADO SATISFACTORIAMENTE");
    
    }catch(e){

        await bootbox_alert(e.message);
    }
}/////////////////////////////////////////////////////////
export async function eliminar_antesX(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista(canvas);		
    }

    try{

        
        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }
        
             

        var X = await bootbox_prompt("ingrese valor de X");
        if(X==null)
                return;        

        lista.eliminar_antes_X(X);
        lista.dibujarNodosLog();	
        lista.dibujarNodos();

        await bootbox_alert("NODO ELIMINADO SATISFACTORIAMENTE");
    
    }catch(e){

        await bootbox_alert(e.message);
    }
}/////////////////////////////////////////////////////////
export async function eliminar_despuesX(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista(canvas);		
    }

    try{

        
        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }
        
             

        var X = await bootbox_prompt("ingrese valor de X");
        if(X==null)
                return;
         if(X == 0){
            window.alert("por favor ingrese un valor");
            return ;
        }
        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }

        lista.eliminar_despues_X(X);
        lista.dibujarNodosLog();	
        lista.dibujarNodos();

        await bootbox_alert("NODO ELIMINADO SATISFACTORIAMENTE");
    
    }catch(e){

        await bootbox_alert(e.message);
    }
}/////////////////////////////////////////////////////////