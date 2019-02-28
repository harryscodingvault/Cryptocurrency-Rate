class CryptoAPI{
    async getCryptoCurrenciesList(){
        const url = await fetch('https://api.coinmarketcap.com/v1/ticker/');

        const cryptoCurrencies = await url.json();

        return{
            cryptoCurrencies
        }
    }
}