
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import bows from 'bows';
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
    let key = 0;
    let html = [];
    for (let i in obj){
      // log('menuData i', i);
      if (i == 'name'){
        log('i is name');
        html.push(<h1 key={ key } >{ obj[i] }</h1>);
        key++;
      }

      if(i == 'children'){
        obj[i].forEach((value) => {
          let navBlock = []
          for (let i in value){
            if (i == 'name'){
              log('i is name');
              navBlock.push(<h2 key={ key } ><a href=''>{ value[i] }</a></h2>);
              key++;
            }

            if(i == 'children'){
              log('second children', value[i]);
              let subList = [];
              value[i].forEach((value2) => {
                log('value2', value2, value2['name']);
                subList.push(<li key={ key }><a href=''>{ value2['name'] }</a></li>);
                key++;
              })

              navBlock.push(<ul key={ key }>{
                subList.map((arrayItem) => { return arrayItem; })
              }
              </ul>);
              key++;
            }
          }
          html.push(<div className='nav-block' key={ key }>{
            navBlock.map((arrayItem) => { return arrayItem; })
          }
          </div>);
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
