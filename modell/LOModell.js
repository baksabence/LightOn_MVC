export default class LOModell{
    #allapotLista = [false, false, false, false, false, false, false, false, false]
    #db;
    #index;

    constructor(){
        this.#db = 0;
        this.#index = 0;
        this.#listaInit()
    }

    #listaInit(){
        for (let index = 0; index < this.#allapotLista.length; index++) {
            let rand = Math.random();
            if(rand < 0.5){
                this.#allapotLista[index] = true
            }else{
                this.#allapotLista[index] = false
            }
            
        }
        console.log(this.#allapotLista)
    }

    getList(){
        return this.#allapotLista
    }

    dbNovelo(index){
        console.log(this.#allapotLista[index])
        this.#allapotLista[index] =!this.#allapotLista[index] 
        console.log(this.#allapotLista[index])
        console.log(this.#allapotLista)
    }

}