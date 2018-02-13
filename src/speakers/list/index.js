
import $ from 'jquery'

export class SpeakerList{

  constructor(talkService) {
    this.talkService = talkService;
  }
  render(idView){
      this.talkService.findAllSpeakers().then(sps=> {

      const html = '<ul>'
      + sps.map(sp=>sp.firstname).map(firstname => `<li>${firstname}</li>`).join('')
      + '</ul>'

        $(`#${idView}`).html(html)

    });


}

}
