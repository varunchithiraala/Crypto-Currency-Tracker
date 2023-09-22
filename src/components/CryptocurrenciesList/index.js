// Write your JS code here
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

const CryptocurrenciesList = props => {
  const {cryptoCurrenciesData} = props

  return (
    <div className="crypto-currencies-container">
      <h1 className="crypto-currencies-heading">Cryptocurrency Tracker</h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
        className="crypto-currencies-image"
        alt="cryptocurrency"
      />
      <div className="crypto-currencies-list-container">
        <div className="crypto-currencies-header">
          <p className="crypto-currency-coin-type-heading">Coin Types</p>
          <div className="usd-and-euro-values-heading-container">
            <p className="coin-value-heading">USD</p>
            <p className="coin-value-heading">EURO</p>
          </div>
        </div>
        <ul className="crypto-currencies-list">
          {cryptoCurrenciesData.map(eachCryptoCurrencyData => (
            <CryptocurrencyItem
              key={eachCryptoCurrencyData.id}
              cryptoCurrencyData={eachCryptoCurrencyData}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CryptocurrenciesList
