import layout from './layout.html'
var $ = require('jquery')


export class Layout{
  render(){

  $("body").html(layout);

  }
}
