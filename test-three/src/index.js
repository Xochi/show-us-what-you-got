
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import bows from 'bows';
import * as Jquery from 'jquery';
import menuData from '../menu-data.json';

const log = bows('Nav Menu');
const navContainer = document.querySelector('main#nav-container');
log('menuData', menuData.children);

class Nav extends Component {

  constructor() {
    super();
    this.state =  {menuComponent : this.parseMenu()};
    // log('menuComponent', menuComponent);
  }

  parseMenu() {
    let obj = menuData;
    let a = 0;
    let html = [];
    for (let i in obj){
      // log('menuData i', i);
      if (i == 'name'){
        log('i is name');
        html.push(<h1 key={ a } >{ obj[i] }</h1>);
        a++;
      }

      if(i == 'children'){

        obj[i].forEach((value) => {
          for (let i in value){
            if (i == 'name'){
              log('i is name');
              html.push(<h2 key={ a } ><a href=''>{ value[i] }</a></h2>);
              a++;
            }

            if(i == 'children'){
              log('second children', value[i]);
              value[i].forEach((value2) => {
                for (let i in value2){
                  if (i == 'name'){
                    html.push(<h3 key={ a } ><a href=''>{ value2[i] }</a></h3>);
                    a++;
                  }
                }
              });
            }
          }
        });
      }
    }
    log('html is', html);
    return html;
  }

  render() {
    log('render called, menuComponent', this.state.menuComponent);
    return(
      <div>
        { this.state.menuComponent.map((currentValue, i) => { return currentValue;}) }
      </div>
    );
  }

}

ReactDOM.render(<Nav />, navContainer);
