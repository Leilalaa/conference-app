import $ from 'jquery'

export class SessionList{

  constructor(talkService) {
    this.talkService = talkService;
  }
  render(idView){
      this.talkService.findAllSessions().then(sps=> {

      const html = sps.map(sp=>sp.title).map(title => `<div class = "col-md-8"><a href=#>${title} <img class="rounded mx-auto d-block" width=30px
    src="../../images/Greater_than_sign.png" style='float:right;'></a></div><br/>`).join('')

        $(`#${idView}`).html(html)

    });


}

}
