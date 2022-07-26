"use strict";
/*function soma(a:number,b:number){
    return a+b;
}

console.log(soma(1,1));*/
exports.__esModule = true;
exports.numero = void 0;
/*
interface IAnimal {
    nome: string;
    tipo: 'terrestre' | 'aquatico';
    domestico:boolean;
    executarRugido(altura:number):void;
}

interface IFelino extends IAnimal {
    visaoNoturna: boolean
}

interface ICanino extends IAnimal{
    porte:'pequeno'|'medio'|'grande'
}

type IDomestico = IFelino | ICanino;

const animal: IDomestico = {
    domestico:true,
    nome: 'cachorro',
    porte:'grande',
    tipo: 'terrestre',
    executarRugido : (altura)=>(`${altura}dB`)
}

animal.executarRugido(4);*/
/*
const input = document.getElementById('input') as HTMLInputElement;

input.addEventListener('input',(event)=>{
    const i = event.currentTarget as HTMLInputElement;
    console.log(i.value);
});**/
//generic types
/*
function adicionaApendiceALista(array,valor){
    return array.map(item=>item+valor);
}

adicionaApendiceALista([1,2,3],1);*/
/*interface IUsuario {
    id:string;
    email:string;
}

interface IAdmin extends IUsuario{
    cargo:'gerente'|'coordenador'|'supervisor';
}

function redirecione(usuario:IAdmin|IUsuario){
    if('cargo' in usuario){
        //redirecionamento para a area de administração
    }

    //redirecionamento para a area do usuario
}*/
/*interface IUsuario {
    id:string;
    email:string;
    cargo?:'funcionario'|'gerente'|'coordenador'|'supervisor';
}

function redirecione(usuario:IUsuario){
    if(usuario.cargo){
        //redirecionar(usuario.cargo)
    }

    //redirecionar para a area de usuario

}*/
/*interface Cachorro{
    readonly nome:string;
    readonly idade:number;
    readonly parqueFavorito?:string;
}

class MeuCachorro implements Cachorro{
    idade;
    nome;

    constructor(nome,idade){
        this.nome = nome;
        this.idade = idade;
    }
}

const cao = new MeuCachorro('Apolo',14);
console.log(cao)*/
/*import $ from 'jquery';

$.fn.extend({
    novaFuncao(){
        console.log('Chamou nova funcao');
    }
});

$('body').novaFuncao();*/
exports.numero = 2;
