import $ from 'jquery'

export class SpeakerList{

  constructor(talkService) {
    this.talkService = talkService;
  }
  render(idView){
      this.talkService.findAllSpeakers().then(sps=> {

      const html =
      sps.map(sp=>sp.firstname).map(firstname => `<div class = "col-md-8"><a href=#>${firstname} <img class="rounded mx-auto d-block" width=30px
    src="../../images/Greater_than_sign.png" style='float:right;'></a></div><br/>`).join('')

        $(`#${idView}`).html(html)

    });


}

}
