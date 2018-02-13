import {TalkService} from './common/talk.service'
import {Layout} from '.\\layout\\index'
import {SpeakerList} from '.\\speakers\\list\\index'
import {SessionList} from '.\\sessions\\list\\index'
import {Accueil} from './accueil'
const ts = new TalkService()
const ly = new Layout()
const spl = new SpeakerList(ts)
const ssl = new SessionList(ts)
const acc = new Accueil()

ly.render();

var router = () => {
if (location.hash == '#speakers-list') {
  //ly.render();
  spl.render('main-view');
} else if (location.hash == '#sessions-list') {
//  ly.render();
  ssl.render('main-view');
} else {
  acc.render('main-view')
}
}
window.addEventListener('load', () => {
  window.onhashchange = () => {
    router();
  };
  router();
});

alert('Conférence App démarré !');

// On affiche les prenoms des speakers dans la console à l'aide de la fonction findAllSpeakersn de TalkService
// Cette fonction retourne une promesse de tableau
//ts.findAllSpeakers()
//  .then(sps=> console.log(sps.map(sp=>sp.firstname)));

// On utilise la methode render de layout pour remplir le body de l'élement html avec src/layout/layout.html.*
//ly.render();
// On utilise la methode render de speakers pour afficher la liste de speakers dans le navogateur
//spl.render('main-view')
