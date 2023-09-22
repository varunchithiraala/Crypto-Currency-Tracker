// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrenciesList from '../CryptocurrenciesList'
import './index.css'

class CryptocurrencyTracker extends Component {
  state = {
    isLoading: true,
    cryptoCurrenciesData: [],
  }

  componentDidMount() {
    this.getCryptoCurrenciesList()
  }

  getCryptoCurrenciesList = async () => {
    const dataResponse = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const fetchedData = await dataResponse.json()
    const updatedFetchedData = fetchedData.map(eachFetchedData => ({
      currencyName: eachFetchedData.currency_name,
      id: eachFetchedData.id,
      usdValue: eachFetchedData.usd_value,
      euroValue: eachFetchedData.euro_value,
      currencyLogo: eachFetchedData.currency_logo,
    }))
    this.setState({
      cryptoCurrenciesData: updatedFetchedData,
      isLoading: false,
    })
  }

  render() {
    const {isLoading, cryptoCurrenciesData} = this.state

    return (
      <div className="crypto-currency-app-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <CryptocurrenciesList cryptoCurrenciesData={cryptoCurrenciesData} />
        )}
      </div>
    )
  }
}

export default CryptocurrencyTracker
