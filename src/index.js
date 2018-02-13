import {TalkService} from '.\\common\\talk.service'
import {Layout} from '.\\layout\\index'
import {SpeakerList} from '.\\speakers\\list\\index'

const ts = new TalkService()
const ly = new Layout()
const spl = new SpeakerList(ts)

alert('Conférence App démarré !');

// On affiche les prenoms des speakers dans la console à l'aide de la fonction findAllSpeakersn de TalkService
// Cette fonction retourne une promesse de tableau
ts.findAllSpeakers()
  .then(sps=> console.log(sps.map(sp=>sp.firstname)));

// On utilise la methode render de layout pour remplir le body de l'élement html avec src/layout/layout.html.*
ly.render();
spl.render('main-view')
