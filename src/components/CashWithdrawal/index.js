// Write your code here

import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {
    amount: 2000,
  }

  onDeleteAmount = id => {
    const {denominationsList} = this.props
    const amountToBeDeleteObject = denominationsList.filter(
      eachDenominationItem => eachDenominationItem.id === id,
    )
    this.setState(prevState => ({
      amount: prevState.amount - amountToBeDeleteObject.value,
    }))
    console.log(amountToBeDelete)
  }

  render() {
    const {denominationsList} = this.props
    const {amount} = this.state
    return (
      <div className="app-container">
        <div className="cash-withdrawal-card-container">
          <div className="profile-container">
            <p className="profile-icon">S</p>
            <p className="profile-name">Sarah Williams</p>
          </div>
          <div className="balance-container">
            <p className="bal-name">Your Balance</p>
            <div className="amount-container">
              <p className="amount">{amount}</p>
              <p className="currency-name">In Rupees</p>
            </div>
          </div>
          <div className="withdraw-container">
            <p className="withdraw-name">Withdraw</p>
            <p className="sum">CHOOSE SUM (IN RUPEES)</p>
            <ul className="denomination-container">
              {denominationsList.map(eachDenominationDetails => (
                <DenominationItem
                  denominationDetails={eachDenominationDetails}
                  key={eachDenominationDetails.id}
                  deleteAmount={this.onDeleteAmount}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
