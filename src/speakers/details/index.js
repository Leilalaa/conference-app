import template from './detailSpeaker.html'

export class detailSpeaker {

  render(idView) {
      $(`#${idView}`).html(template)
  }
}
