import { useState } from 'react'
import InputBox from './Components/InputBox'
import useCurrencyInfo from './Hooks/useCurrencyInfo'

import './App.css'

function App() {
  const [amount, setAmount] = useState(0);
  const [from,setFrom] = useState('usd')
  const [to,setTo] = useState('inr');
  const [convertedAmount,setConvertedAmout] = useState(0)

  const CurrencyInfo = useCurrencyInfo(from)

  return (
    <>
      Hustler
    </>
  )
}

export default App
