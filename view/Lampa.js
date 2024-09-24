export default class Lampa{
    #elem;
    #index;
    #szuloElem;
    #divElem;
    kattintas;

    constructor(elem, index, szuloElem){
        this.#elem = elem;
        this.#index = index;
        this.#szuloElem = szuloElem;
        this.#megjelenit()
        this.kattintas = $(".card:last-child")
        this.#szinbeallit()
        this.#elemKatt()

    }

    #megjelenit(){
        let txt = `
        <div class="card col-lg-4">
            <p>${this.#elem}</p> 
        </div>
        `;
        this.#szuloElem.append(txt)
    }

    #szinbeallit(){
        if (this.#elem === false){
            this.kattintas.addClass("felkapcs")
        }else if(this.#elem === true){
            this.kattintas.removeClass("felkapcs")
        }
    }

    #elemKatt(){
        this.kattintas.on("click", () =>{
            const kattEsemeny = new CustomEvent("katt", {detail:this.#index})
            window.dispatchEvent(kattEsemeny)
        })
    }
}