import React, { Component } from "react";
import './tipCalc.css';

class TipCalculator extends Component {
    constructor(props) {
        super(props)

        this.state = {
            bill: 100,
            tip: 20, 
            split: 2 }
    }

    render() {
      const totalTip  = this.state.bill * this.state.tip / 100;
      const totalBill = this.state.bill + totalTip;
      const totalSplit = totalBill / this.state.split;

      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Bill
            <input 
              name = "bill"
              type = "number" 
              value = {this.state.bill} 
              onChange={(e) => this.setState({ bill: parseFloat(e.target.value) })}/>
          </label>
          <label>
            Tip
            <input 
              name = "tip"
              type = "number" 
              value = {this.state.tip} 
              onChange={(e) => this.setState({ tip: parseFloat(e.target.value) })}/>
          </label>
          <label>
            Split
            <input 
              name = "split"
              type = "number" 
              value = {this.state.split} 
              onChange={(e) => this.setState({ split: parseFloat(e.target.value) })}/>
          </label>

    

          <h2>Tip Amount: ${totalTip.toFixed(2)}</h2>
          <h2>Bill Total: ${totalBill.toFixed(2)}</h2>
          <h2>Total Per Person: ${totalSplit.toFixed(2)}</h2>

        </form>
      );
    }
}

export default TipCalculator