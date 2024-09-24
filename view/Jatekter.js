import Lampa from "./Lampa.js";

export default class Jatekter{
    #lista = []
    #szuloElem

    constructor(lista, szuloElem){
        this.#lista = lista;
        this.#szuloElem = szuloElem;
        this.#szuloElem.empty()
        this.jatekTerMegjelenit()
    }

    jatekTerMegjelenit(){
        this.#lista.forEach((lampa, index) => {
            new Lampa(lampa, index, this.#szuloElem)
        })
    }

}