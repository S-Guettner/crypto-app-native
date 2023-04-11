import { Text, View , SafeAreaView} from "react-native"
import {Link} from "expo-router"
import { useEffect , useState} from "react"


export default function Page() {
  
  const [serverPing,setServerPing] = useState()
  const [coinData,setCoinData] = useState([])
  
  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/ping')
    .then(res => res.json())
    .then(data => {
      console.log(data.gecko_says)
      data.gecko_says ? setServerPing(true) : setServerPing(false)
    })
    /* .then(fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en')
          .then(res => res.json())
          .then(data => {
            console.log(data)
            setCoinData(data)
          })
    ) */
  },[])

  
  return (
    
      <SafeAreaView className="pt-10">
        <Text className="text-4xl text-red-700">Hello World</Text>
        <Text >This is the first page of your app.</Text>
        <Link className="border-2 p-2 " href='/details'>details</Link>
        <Text>server online: {`${serverPing}`}</Text>
        
      </SafeAreaView>
    
  )
}

