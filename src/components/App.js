import React, { PureComponent } from 'react';

import uuid from 'uuid/v4';
import { Header } from './Header';
import { Footer } from './Footer';
import { Form } from './Form';
import { ListItems } from './ListItems';

let arrCopy = [];

//In the newer versions of React we don't need to declare a constructor.
//The constructor and super props are inserted in the background by React.
//If you console.log App you will see this...
export class App extends PureComponent {
  state = {
    listArr: [],
    str: ''
  };

  //Declaring these methods here outside the React Render method makes them
  //Class methods and not functions. Therefore the 'this' keyword is needed
  //to reference them. Any functions declared within the React render method
  //would be functions, and as long as they are arrow functions no binding
  //is needed. Also the 'this' keyword is not necessary. I'm not sure
  //which way is convention or better. They both work the same.
  handleChange = e => {
    this.setState({ str: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    let item = { str: this.state.str, uuid: uuid() };
    arrCopy = [...this.state.listArr];
    arrCopy.push(item);
    this.setState({ listArr: arrCopy });
    item = {};
    arrCopy = [];
    this.setState({ str: '' });
  };

  handleDelete = uuid => {
    const itemList = [...this.state.listArr];
    const temp = itemList.filter(item => item.uuid !== uuid);
    this.setState({ listArr: temp });
  };

  render() {
    return (
      <>
        <Header />
        <div className="container">
          <Form
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            str={this.state.str}
          />
          <ul>
            <ListItems
              itemList={this.state.listArr}
              handleDelete={this.handleDelete}
            />
          </ul>
        </div>
        <Footer />
      </>
    );
  }
}
