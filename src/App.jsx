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

  const options = Object.keys(CurrencyInfo);

  const swap = () =>{
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmout(amount)
  }

  const convert = () =>{
    setConvertedAmout(CurrencyInfo[to] * amount)
  }

  return (
    <>
    
    <div
        className="h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat gap-1"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1714722473709-4f1002b45c87?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        
        }}
    >
    
        <div className="w-full flex flex-wrap justify-center items-center flex-col">
        <h3 className='text-white text-3xl pb-4 font-medium '>CurrX<span className='text-red-500'>Change</span></h3>
        <p className='text-white text-2xl pb-10 font-normal tracking-wide'>Don't Get Swindled,<span className='text-red-900'>Get Converted</span> </p>
            <div className="w-full max-w-lg    mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                       
                    }}
                >
                
                    <div className="w-full mb-1 ">
                        <InputBox
                            label="From"
                            amount={amount}
                            onAmountChange={(amount) => setAmount(amount)}
                            onCurrencyChange={(amount) => setFrom(amount)}
                            currencyOptions={options}
                            selectCurrency={from}
                            
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                            
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            
                            onCurrencyChange={(amount) => setTo(amount)}
                            currencyOptions={options}
                            selectCurrency={to}
                            
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
    </>
);
}

export default App
