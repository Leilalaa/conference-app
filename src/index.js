import {TalkService} from '.\\common\\talk.service'
const ts = new TalkService()

// On affiche les prenoms des speakers dans la console à l'aide de la fonction findAllSpeakersn de TalkService
// Cette fonction retourne une promesse de tableau
ts.findAllSpeakers()
  .then(sps=> console.log(sps.map(sp=>sp.firstname)));

alert('Conférence App démarré !');
//ts.findAllSpeakers().then();
