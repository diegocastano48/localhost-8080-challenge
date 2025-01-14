
//Requerimos la dependencia de fetch
const fetch = require('node-fetch');
//Requerimos la dependencia de express
const express = require('express');
//intanciamos express
const router = express.Router();

router.get("/valida-cadena",(req,res)=>{
    // Validar cadena de texto
    try {
        function validar_texto(a){
            let str = a;
            let caracter ="!";
            var indices = [];
            for(var i = 0; i < str.length; i++) {
                if (str[i].toLowerCase() === caracter) indices.push(i);
            };
           
            if(indices.length>2){
                console.log();
                console.log("La cadena de texto tiene " +indices.length+" signos de ! y le quito 1");        
                console.log(str.slice(0,-1));
                console.log();              
            }else{
                console.log();
                console.log("La cadena de texto solo tiene " +indices.length+" signos de !");        
                console.log(str);
                console.log();               
            }   
        }    
        validar_texto("hola!!!");
        res.send("Por favor visualice la respuesta de este endpoint en la consola de node js");
       
        
    } catch (error) {
        res.status(400).send("No se pudo obtener ningun resultado");
    }    
    
});

router.get('/array-convert',(req,res)=>{
    try {
        let new_array=[];
function transform_array(arreglo){
    for (let a = 0; a < arreglo.length; a++) {
        for (let b = 0; b < arreglo.length; b++) {
            let element = arreglo[a][b];            
            if(!isNaN(element)){
                new_array.push(element);               
            }            
        }        
    }
    console.log();
    console.log("Arreglo bidimensional");
    console.log(arreglo);
    console.log();

    console.log("Arreglo ordenado ASC solo enteros");
    new_array.sort(function(a,b){return a-b})
    console.log(new_array);

    console.log();
    console.log("Arreglo ordenado DESC solo enteros");
    new_array.sort(function(a,b){return b-a})
    console.log(new_array);
    console.log();
    }
    transform_array([[1,6,'a'],[2,4,'c']]);
    res.send("Por favor visualice la respuesta de este endpoint en la consola de node js");

    } catch (error) {
        res.status(400).send("No se pudo obtener ningun resultado");
    }
});

router.get('/suma-array',(req,res)=>{
    try {
    let new_data = [];
    let suma_total=0;
    let suma_ent=0;
    let suma_par=0;
    let suma_impar=0;
    function suma_array(arreglo){    
    for (let index = 0; index < arreglo.length; index++) {
        const element = arreglo[index];
        if (!isNaN(element)) {
            new_data.push(element);            
        }             
    }
    
    for (const key in new_data) {
        // === Suma total de la matriz ===//
        suma_total += parseInt(new_data[key]); 
        
        // === Suma de sus enteros positivos ===//
        if(new_data[key]>0){
            suma_ent += new_data[key];
        }
        
        // === Suma de de los números pares ===//
        if(new_data[key] % 2 == 0){
            suma_par += new_data[key];
        } 
        
        // === Suma de de los números impares ===//
        if(new_data[key] % 2 != 0){
            suma_impar += new_data[key];
        }  
    }
    console.log();
    console.log("Matriz");
    console.log(new_data);
    console.log();
    console.log("Suma total de la matriz");
    console.log("Total: "+suma_total);
    console.log();
    console.log("La suma de sus entero positivos");
    console.log("Total: "+suma_ent);
    console.log();
    console.log("La suma de los numero pares");
    console.log("Total: "+suma_par);
    console.log();
    console.log("La suma de los numero impares");
    console.log("Total: "+suma_impar);
    console.log();

    }
    suma_array([]);
    res.send("Por favor visualice la respuesta de este endpoint en la consola de node js");
    } catch (error) {
        res.status(400).send("No se pudo obtener ningun resultado");
    }
});

router.get('/encuentra-el-error',(req,res)=>{
    // ==== Encuentra el error: ====//

/* en este punto encontré dos errores
1) Los métodos en javascrip no llevan la palabra reservada public
2) Como este método es asincrono la palabra async para que pueda funcionar
correntamente debe ir de la mano con la palabra await
*/

// ==== Creamos un a clase llamada Challenge ====//
class Challenge{
    // ====Creamos el contructor====//
    constructor(){
    }

    //==Creamos un método asincrono llamado average que recibe dos parametros==//
   average(a,b){
    try {
        const response = a + b / 2;
        return response;        
    } catch (e) {
        throw new TypeError("Ha ocurrido un error con este reto");
    }    
    
    }   
}
    console.log();
    console.log("Respuesta:");
    console.log("Como ésta es un función asincrona que devuelve una promesa ASYNC requiere de AWAIT para que se cumpla. Ademas los metódos en javascrit no se declaran con la palabra reservada PUBLIC");   
    console.log();
    res.send("Por favor visualice la respuesta de este endpoint en la consola de node js");
});

router.get('/mis-vacas',(req,res)=>{
    try {
        // arreglo
const produccion_diaria =[
    {dia:1,vaca_a:4,prod:7.0,vaca_b:5,prod2:10.1,vaca_c:50,prod3:10.3},
    {dia:2,vaca_a:4,prod:5.7,vaca_b:5,prod2:11.2,vaca_c:50,prod3:11.0},
    {dia:3,vaca_a:4,prod:4.9,vaca_b:5,prod2:7.2,vaca_c:50,prod3:9.9},
    {dia:4,vaca_a:4,prod:10.6,vaca_b:5,prod2:8.1,vaca_c:50,prod3:10.3},
    {dia:5,vaca_a:4,prod:9.7,vaca_b:5,prod2:9.2,vaca_c:50,prod3:9.4},
    {dia:6,vaca_a:4,prod:7.3,vaca_b:5,prod2:10.8,vaca_c:50,prod3:11.7},
    {dia:7,vaca_a:4,prod:9.3,vaca_b:5,prod2:11.9,vaca_c:50,prod3:8.9}
    
];

let dia1=0,dia2=0,dia3=0,dia4=0,dia5=0,dia6=0,dia7=0;
let prod_vacas =[];
//Validamos con la funcion filter si el numero de vacas el menor de 4
const data1= produccion_diaria.filter(x => x.vaca_a <4 || x.vaca_a >50 || x.vaca_b <4 || x.vaca_b >50 || x.vaca_c <4 || x.vaca_c >50);

//Validamos con la funcion filter si la producción de leche está entre 0.0 y 11.9
const data2= produccion_diaria.filter(x => x.prod <0.0 || x.prod >11.9 || x.prod2 <0.0 || x.prod2 >11.9 || x.prod3 <0.0 || x.prod3 >11.9);

//Validamos si las variables data1 y data2 est'an vacia
if(data1 == ""){
    if(data2 == ""){
    //Sumamo la producción del dia 1
    const elem1 = produccion_diaria[0];    
    dia1 =parseFloat(elem1.prod) + parseFloat(elem1.prod2) + parseFloat(elem1.prod3);

    // Validamos que vaca produjo mas leche en el dia 1
    if(parseFloat(elem1.prod) >= parseFloat(elem1.prod2) & parseFloat(elem1.prod) >= parseFloat(elem1.prod3) ){
        prod_vacas.push({dia:elem1.dia,vaca:elem1.vaca_a,prod:elem1.prod});
    }else if(parseFloat(elem1.prod2) >= parseFloat(elem1.prod) & parseFloat(elem1.prod2) >= parseFloat(elem1.prod3) ){
        prod_vacas.push({dia:elem1.dia,vaca:elem1.vaca_b,prod:elem1.prod2});
    }else{
        prod_vacas.push({dia:elem1.dia,vaca:elem1.vaca_c,prod:elem1.prod3});
    }
    
    //Sumamo la producción del dia 2
    const elem2 = produccion_diaria[1];    
    dia2 = parseFloat(elem2.prod) + parseFloat(elem2.prod2) + parseFloat(elem2.prod3);

    // Validamos que vaca produjo mas leche en el dia 2
    if(parseFloat(elem2.prod) >= parseFloat(elem2.prod2) & parseFloat(elem2.prod) >= parseFloat(elem2.prod3) ){
        prod_vacas.push({dia:elem2.dia,vaca:elem2.vaca_a,prod:elem2.prod});
    }else if(parseFloat(elem2.prod2) >= parseFloat(elem2.prod) & parseFloat(elem2.prod2) >= parseFloat(elem2.prod3) ){
        prod_vacas.push({dia:elem2.dia,vaca:elem2.vaca_b,prod:elem2.prod2});
    }else{
        prod_vacas.push({dia:elem2.dia,vaca:elem2.vaca_c,prod:elem2.prod3});
    } 
    
    //Sumamo la producción del dia 3
    const elem3 = produccion_diaria[2];
    dia3 = parseFloat(elem3.prod) + parseFloat(elem3.prod2) + parseFloat(elem3.prod3);

    // Validamos que vaca produjo mas leche en el dia 3
    if(parseFloat(elem3.prod) >= parseFloat(elem3.prod2) & parseFloat(elem3.prod) >= parseFloat(elem3.prod3) ){
        prod_vacas.push({dia:elem3.dia,vaca:elem3.vaca_a,prod:elem3.prod});
    }else if(parseFloat(elem3.prod2) >= parseFloat(elem3.prod) & parseFloat(elem3.prod2) >= parseFloat(elem3.prod3) ){
        prod_vacas.push({dia:elem3.dia,vaca:elem3.vaca_b,prod:elem3.prod2});
    }else{
        prod_vacas.push({dia:elem3.dia,vaca:elem3.vaca_c,prod:elem3.prod3});
    } 
   
    //Sumamo la producción del dia 4
    const elem4 = produccion_diaria[3];
    dia4 = parseFloat(elem4.prod) + parseFloat(elem4.prod2) + parseFloat(elem4.prod3); 

    // Validamos que vaca produjo mas leche en el dia 4
    if(parseFloat(elem4.prod) >= parseFloat(elem4.prod2) & parseFloat(elem4.prod) >= parseFloat(elem4.prod3) ){
        prod_vacas.push({dia:elem4.dia,vaca:elem4.vaca_a,prod:elem4.prod});
    }else if(parseFloat(elem4.prod2) >= parseFloat(elem4.prod) & parseFloat(elem4.prod2) >= parseFloat(elem4.prod3) ){
        prod_vacas.push({dia:elem4.dia,vaca:elem4.vaca_b,prod:elem4.prod2});
    }else{
        prod_vacas.push({dia:elem4.dia,vaca:elem4.vaca_c,prod:elem4.prod3});
    } 
    
    //Sumamo la producción del dia 5
    const elem5 = produccion_diaria[4];
    dia5 = parseFloat(elem5.prod) + parseFloat(elem5.prod2) + parseFloat(elem5.prod3);

    // Validamos que vaca produjo mas leche en el dia 5
    if(parseFloat(elem5.prod) >= parseFloat(elem5.prod2) & parseFloat(elem5.prod) >= parseFloat(elem5.prod3) ){
        prod_vacas.push({dia:elem5.dia,vaca:elem5.vaca_a,prod:elem5.prod});
    }else if(parseFloat(elem5.prod2) >= parseFloat(elem5.prod) & parseFloat(elem5.prod2) >= parseFloat(elem5.prod3) ){
        prod_vacas.push({dia:elem5.dia,vaca:elem5.vaca_b,prod:elem5.prod2});
    }else{
        prod_vacas.push({dia:elem5.dia,vaca:elem5.vaca_c,prod:elem5.prod3});
    } 
    
    //Sumamo la producción del dia 6
    const elem6 = produccion_diaria[5];
    dia6 = parseFloat(elem6.prod) +parseFloat(elem6.prod2) + parseFloat(elem6.prod3);

    // Validamos que vaca produjo mas leche en el dia 6
    if(parseFloat(elem6.prod) >= parseFloat(elem6.prod2) & parseFloat(elem6.prod) >= parseFloat(elem6.prod3) ){
        prod_vacas.push({dia:elem6.dia,vaca:elem6.vaca_a,prod:elem6.prod});
    }else if(parseFloat(elem6.prod2) >= parseFloat(elem6.prod) & parseFloat(elem6.prod2) >= parseFloat(elem6.prod3) ){
        prod_vacas.push({dia:elem6.dia,vaca:elem6.vaca_b,prod:elem6.prod2});
    }else{
        prod_vacas.push({dia:elem6.dia,vaca:elem6.vaca_c,prod:elem6.prod3});
    } 
    
    //Sumamo la producción del dia 7
    const elem7 = produccion_diaria[6];
    dia7 = parseFloat(elem7.prod) + parseFloat(elem7.prod2) + parseFloat(elem7.prod3);

    // Validamos que vaca produjo mas leche en el dia 7
    if(parseFloat(elem7.prod) >= parseFloat(elem7.prod2) & parseFloat(elem7.prod) >= parseFloat(elem7.prod3) ){
        prod_vacas.push({dia:elem7.dia,vaca:elem7.vaca_a,prod:elem7.prod});
    }else if(parseFloat(elem7.prod2) >= parseFloat(elem7.prod) & parseFloat(elem7.prod2) >= parseFloat(elem7.prod3) ){
        prod_vacas.push({dia:elem7.dia,vaca:elem7.vaca_b,prod:elem7.prod2});
    }else{
        prod_vacas.push({dia:elem7.dia,vaca:elem7.vaca_c,prod:elem7.prod3});
    } 
   
    //Se imprime la producción de leche por dia
    console.log();
    console.log("Producción total de leche por día");
    console.log("Dia 1: "+ dia1.toFixed(1) + " Litros");
    console.log("Dia 2: "+ dia2.toFixed(1) + " Litros");
    console.log("Dia 3: "+ dia3.toFixed(1) + " Litros");
    console.log("Dia 4: "+ dia4.toFixed(1) + " Litros");
    console.log("Dia 5: "+ dia5.toFixed(1) + " Litros");
    console.log("Dia 6: "+ dia6.toFixed(1) + " Litros");
    console.log("Dia 7: "+ dia7.toFixed(1) + " Litros");
    
    // Obtner el día con mayor producción de leche
    if(dia1 > dia2 & dia1 > dia3 & dia1 > dia4 & dia1 > dia5 & dia1 > dia6 & dia1 > dia7){
        console.log();
        console.log("Dia con mayor producción");
        console.log("Dia 1: "+dia1.toFixed(1)+ " Litros");
        console.log();
    }else if(dia2 > dia1 & dia2 > dia3 & dia2 > dia4 & dia2 > dia5 & dia2 > dia6 & dia2 > dia7){
        console.log();
        console.log("Dia con mayor producción");
        console.log("Dia 2: "+dia2.toFixed(1)+ " Litros");
        console.log();
    }else if(dia3 > dia1 & dia3 > dia2 & dia3 > dia4 & dia3 > dia5 & dia3 > dia6 & dia3 > dia7){
        console.log();
        console.log("Dia con mayor producción");
        console.log("Dia 3: "+dia3.toFixed(1)+ " Litros");
        console.log();
    }else if(dia4 > dia1 & dia4 > dia2 & dia4 > dia3 & dia4 > dia5 & dia4 > dia6 & dia4 > dia7){
        console.log();
        console.log("Dia con mayor producción");
        console.log("Dia 4: "+dia4.toFixed(1)+ " Litros");
        console.log();
    }else if(dia5 > dia1 & dia5 > dia2 & dia5 > dia3 & dia5 > dia4 & dia5 > dia6 & dia5 > dia7){
        console.log();
        console.log("Dia con mayor producción");
        console.log("Dia 5: "+dia5.toFixed(1)+ " Litros");
        console.log();
    }else if(dia6 > dia1 & dia6 > dia2 & dia6 > dia3 & dia6 > dia4 & dia6 > dia5 & dia6 > dia7){
        console.log();
        console.log("Dia con mayor producción");
        console.log("Dia 6: "+dia6.toFixed(1)+ " Litros");
        console.log();
    }else{
        console.log();
        console.log("Dia con mayor producción");
        console.log("Dia 7: "+dia7.toFixed(1)+ " Litros");    
    }

    // Obtner el día con menor producción de leche
    if(dia1 < dia2 & dia1 < dia3 & dia1 < dia4 & dia1 < dia5 & dia1 < dia6 & dia1 < dia7){
        console.log();
        console.log("Dia con menor producción");
        console.log("Dia 1: "+dia1.toFixed(1)+ " Litros");
        console.log();
    }else if(dia2 < dia1 & dia2 < dia3 & dia2 < dia4 & dia2 < dia5 & dia2 < dia6 & dia2 < dia7){
        console.log();
        console.log("Dia con menor producción");
        console.log("Dia 2: "+dia2.toFixed(1)+ " Litros");
        console.log();
    }else if(dia3 < dia1 & dia3 < dia2 & dia3 < dia4 & dia3 < dia5 & dia3 < dia6 & dia3 < dia7){
        console.log();
        console.log("Dia con menor producción");
        console.log("Dia 3: "+dia3.toFixed(1)+ " Litros");
        console.log();
    }else if(dia4 < dia1 & dia4 < dia2 & dia4 < dia3 & dia4 < dia5 & dia4 < dia6 & dia4 < dia7){
        console.log();
        console.log("Dia con menor producción");
        console.log("Dia 4: "+dia4.toFixed(1)+ " Litros");
        console.log();
    }else if(dia5 < dia1 & dia5 < dia2 & dia5 < dia3 & dia5 < dia4 & dia5 < dia6 & dia5 < dia7){
        console.log();
        console.log("Dia con menor producción");
        console.log("Dia 5: "+dia5.toFixed(1)+ " Litros");
        console.log();
    }else if(dia6 < dia1 & dia6 < dia2 & dia6 < dia3 & dia6 < dia4 & dia6 < dia5 & dia6 < dia7){
        console.log();
        console.log("Dia con menor producción");
        console.log("Dia 6: "+dia6.toFixed(1)+ " Litros");
        console.log();
    }else{
        console.log();
        console.log("Dia con menor producción");
        console.log("Dia 7: "+dia7.toFixed(1)+ " Litros");
        console.log();
    }

    console.log("Vacas que dieron mas leche por día");
    for (let index = 0; index < prod_vacas.length; index++) {
        let dia = index + 1;
        const element = prod_vacas[index];
        console.log("Dia: "+dia+ " Vaca: "+element.vaca+ " Leche: "+element.prod+ " Litros");        
    }
    console.log();
    }
    else{
        console.log();
        console.log("Hay litros de leche mayor a lo permitido");
        console.log();
    }   
    }
    else{
        console.log();
        console.log("Hay cantidad de vacas mayor o nemor a lo permitido");
        console.log();
    }
    res.send("Por favor visualice la respuesta de este endpoint en la consola de node js");

    } catch (error) {
        res.status(400).send("No se pudo obtener ningun resultado");
    }
});

router.get('/consumir-api-guia',(req,res)=>{
    try {       

        //Consumir la api
        const consumirPeticion = async()=>{
            const req = await fetch("https://api.coordinadora.com/cm-model-testing/api/v1/talentos/");
            const data = await req.json();
            console.log(JSON.stringify(data));
        }
        consumirPeticion(); 
        res.send("Por favor visualice la respuesta de este endpoint en la consola de node js");       
    } catch (error) {
        res.status(400).send("No se pudo obtener ningun resultado"); 
    }
});

router.get('/consumir-api-etiqueta',(req,res)=>{
    try {       

        //Consumir la api
        const consumirPeticion = async()=>{
            const req = await fetch("https://api.coordinadora.com/cm-model-testing/api/v1/talentos/checkpoint");
            const data = await req.json();
            console.log(JSON.stringify(data));
        }
        consumirPeticion(); 
        res.send("Por favor visualice la respuesta de este endpoint en la consola de node js");       
    } catch (error) {
        res.status(400).send("No se pudo obtener ningun resultado"); 
    }
});
module.exports = router;