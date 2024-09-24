import LOModell from "../modell/LOModell.js";
import Jatekter from "../view/Jatekter.js";

export default class LOController {
  constructor() {
    this.terulet = $(".jatekter");
    this.LOModell = new LOModell();
    new Jatekter(this.LOModell.getList(), this.terulet);
    this.#esemenyKezelo();
  }

  #esemenyKezelo() {
    $(window).on("katt", (event) => {
      console.log(event.detail);
      this.LOModell.dbNovelo(event.detail);
      new Jatekter(this.LOModell.getList(), this.terulet);
    });
  }
}
