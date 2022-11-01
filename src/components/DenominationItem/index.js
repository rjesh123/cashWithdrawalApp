// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationDetails, deleteAmount} = props
  const {value, id} = denominationDetails

  const onDeleteAmount = () => {
    deleteAmount(id)
  }

  return (
    <li className="denomination-item">
      <button className="value-button" type="button" onClick={onDeleteAmount}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
