import React, { Component } from 'react';
import './App.css';
import CCOutput from './CCOutput/CCOutput';
import CustomerInput from './CustomerInput/CustomerInput';

class App extends Component {
  state = {
    name: 'Steve R. Perry',
    ccNum: 'XXXX XXXX XXXX XXXX',
    cvv: 'XXX',
    expDate: 'MM/YY',
  };

  changeNameHandler = (name) => {
    this.setState({
      name: name.target.value,
    });
  };

  changeCCHandler = (ccNum) => {
    this.setState({
      ccNum: ccNum.target.value,
    });
  };

  changeCVVHandler = (cvv) => {
    this.setState({
      cvv: cvv.target.value,
    });
  };

  changeExpDateHandler = (exp) => {
    this.setState({
      expDate: exp.target.value,
    });
  };

  render() {
    return (
      <div className='App'>
        <CCOutput
          name={this.state.name}
          ccNum={this.state.ccNum}
          expDate={this.state.expDate}
          cvv={this.state.cvv}
        />
        <CustomerInput
          changeName={this.changeNameHandler}
          changeExp={this.changeExpDateHandler}
          changeCC={this.changeCCHandler}
          changeCVV={this.changeCVVHandler}
        />
      </div>
    );
  }
}

export default App;
