
//? export defualt ile paylasildigi icin süslü parantezsiz ve herhangi bir isimle import edilebildi

//? export default ile payalşıldığı için süslü parantezsi ve herhangi bir isimle import edilebildi.
import displayCoins from "./displayCoins"

//? named export
export const getCoins = async (keyword) => {
  
  

  const URL = `https://api.coinranking.com/v2/coins?search=${keyword}`

  const options = {
    headers: { "x-access-token": import.meta.env.VITE_API_KEY },
  }

  try {
    const res = await fetch(URL, options)
    const json = await res.json()

    if (!json.data.coins[0]) {
      alert("Coin can not be found")
    } else {
      displayCoins(json.data.coins[0])
    }
  } catch (error) {
    console.log(error)
  }
}
