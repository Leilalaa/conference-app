import template from './accueil.html'

export class Accueil {

  render(idView) {
      $(`#${idView}`).html(template)
  }
}
