import {listaCircularLigada} from './listaCircular.js';
import {bootbox_prompt,bootbox_alert} from '../utils/dialog.js';

let lista2=null;

export async function insertar_al_inicio(){
    var canvas=document.getElementById('tutorial1'); 
    if(lista2==null){
        lista2=new listaCircularLigada(canvas);		
    }

    var DATO = await bootbox_prompt("ingrese valor de nodo");
    if(DATO==null || DATO.trim()=="")
        return;
    
    //try{
        if(lista2.isVacio()==false){
            if(lista2.buscar(DATO)==true){
                throw new Error("EL NODO YA SE INGRESO");
               }

        }
       
        DATO=DATO.trim();
        lista2.inserta_inicio(DATO);
        lista2.dibujarNodosLog();	
        lista2.dibujarNodos(DATO);

       
        lista2.ver();

    /*}catch(e){

        await bootbox_alert(e.message);
    }*/
}


export async function insertar_al_final(){
    var canvas=document.getElementById('tutorial2'); 

    if(lista2==null){
        lista2=new listaCircularLigada(canvas);		
    }
    try{
        if(lista2.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }
        var DATO = await bootbox_prompt("ingrese valor de nodo");
        if(DATO==null || DATO.trim()=="")
        return;

    
        if(lista2.buscar(DATO)==true){
            throw new Error("EL NODO YA SE INGRESO");
        }
        DATO=DATO.trim();
        lista2.inserta_final(DATO);
        lista2.ver();
        lista2.dibujarNodos();


    }catch(e){

        await bootbox_alert(e.message);
    }
}////



export async function insertarAntes_X(){
    var canvas=document.getElementById('tutorial2'); 

    if(lista2==null){
        lista2=new listaCircularLigada(canvas);		
    }
    try{
        if(lista2.isVacio() == true){
            throw new Error("LA LISTA ESTA VACIA");
        }

        var DATO = await bootbox_prompt("ingrese valor de nodo");
        if(DATO==null || DATO.trim()=="") return;

        if(lista2.buscar(DATO)==true)
            throw new Error("EL NODO YA SE INGRESO");


        var X = await bootbox_prompt("ingrese el valor de X");
        if(X== null || X.trim() == "") return ;
                
        DATO=DATO.trim();
        lista2.inserta_antes_X(DATO, X);
        lista2.ver();
        lista2.dibujarNodos();


    }catch(e){

        await bootbox_alert(e.message);
    }
}////




export async function insertarDespues_X(){
    var canvas=document.getElementById('tutorial2'); 

    if(lista2==null){
        lista2=new listaCircularLigada(canvas);		
    }
    try{

        var DATO = await bootbox_prompt("ingrese valor de nodo");
        if(DATO==null || DATO.trim()=="")
            return;
        if(lista2.buscar(DATO)==true)
            throw new Error("EL NODO YA SE INGRESO");

        var X = await bootbox_prompt("ingrese el valor de X");
        if(X== null || X.trim() == ""){
            return ;
        }
    
        DATO=DATO.trim();
        lista2.inserta_despues_X(DATO, X);
        lista2.ver();
        lista2.dibujarNodos();


    }catch(e){

        await bootbox_alert(e.message);
    }
}////

export async function eliminar_primer_nodo(){
    var canvas=document.getElementById('tutorial2'); 

    if(lista2==null){
        lista2=new listaCircularLigada(canvas);		
    }
    try{ 
        if(lista2.isVacio()==true){
            throw new Error("LA LISTA ESTA VACIA");
        }

        lista2.eliminar_primer_nodo();
        lista2.ver();
        lista2.dibujarNodos();

     await bootbox_alert("NODO ELIMINADOS SATISFACTORIAMENTE");
    
    }catch(e){
        await bootbox_alert(e.message);
    }

}

export async function eliminar_ultimo_nodo(){
    var canvas=document.getElementById('tutorial2'); 

    if(lista2==null){
        lista2=new listaCircularLigada(canvas);		
    }

    try{
        if(lista2.isVacio()==true){
            throw new Error("LA LISTA ESTA VACIA");
        }

        lista2.eliminar_ultimo_nodo();
        lista2.ver();
        lista2.dibujarNodos();

        await bootbox_alert("NODO ELIMINADOS SATISFACTORIAMENTE");
    
    }catch(e){

        await bootbox_alert(e.message);
    }


}

export async function eliminar_nodo_X(){
    var canvas=document.getElementById('tutorial2'); 

    if(lista2==null){
        lista2=new listaCircularLigada(canvas);		
    }

    try{
        if(lista2.isVacio()==true){
            throw new Error("LA LISTA ESTA VACIA");
        }
        var X = await bootbox_prompt("ingrese valor de X");
        if(X==null)
                return;

        lista2.eliminar_nodo_X(X);
        lista2.ver();
        lista2.dibujarNodos();

        await bootbox_alert("NODO ELIMINADOS SATISFACTORIAMENTE");
    
    }catch(e){

        await bootbox_alert(e.message);
    }


}

export async function eliminar_despues_X(){
    var canvas=document.getElementById('tutorial2'); 

    if(lista2==null){
        lista2=new listaCircularLigada(canvas);		
    }

    try{
        if(lista2.isVacio()==true){
            throw new Error("LA LISTA ESTA VACIA");
        }
        var X = await bootbox_prompt("ingrese valor de X");
        if(X==null)
                return;

        lista2.eliminar_despues_X(X);
        lista2.ver();
        lista2.dibujarNodos();


        await bootbox_alert("NODO ELIMINADOS SATISFACTORIAMENTE");
    
    }catch(e){

        await bootbox_alert(e.message);
    }
}

export async function eliminar_antes_X(){
    var canvas=document.getElementById('tutorial2'); 

    if(lista2==null){
        lista2=new listaCircularLigada(canvas);		
    }

    try{
        if(lista2.isVacio()==true){
            throw new Error("LA LISTA ESTA VACIA");
        }
        var X = await bootbox_prompt("ingrese valor de X");
        if(X==null)
                return;

        lista2.eliminar_antes_X(X);
        lista2.ver();
        lista2.dibujarNodos();

        await bootbox_alert("NODO ELIMINADOS SATISFACTORIAMENTE");
    
    }catch(e){

        await bootbox_alert(e.message);
    }
}
