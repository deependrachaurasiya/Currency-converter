import React from 'react'
import { useState } from 'react'

function App() {
    const [amount, setAmount] = useState("");
    const [convertedAmount, setConvertedAmount] = useState("")

    const handleConvert = () => {
        const conversionRate = 0.012
        setConvertedAmount((parseFloat(amount) * conversionRate).toFixed(2))
    };

    return (
        <div className='w-full h-full flex justify-center p-28 fixed align-bottom bg-black'>

            {/* is a first heading div  */}
            <div className='w-[450px] h-[400px] rounded-xl shadow-3xl bg-gray-400 bg-opacity-10 backdrop-blur-xl'>
                <h1 className='bg-orange-500 h-6 rounded-xl mt-6 flex justify-center items-center ml-32 font-bold shadow-xl text-gray-900 w-[200px]'>Currency Converter</h1>

                <div>

                    <input
                        type='currency'
                        id='currency'
                        name='currency'
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className='rounded-md h-10 pl-1 w-64 mt-20 ml-12 outline-0 bg-gray-400  text-3xl'
                    />
                    <select
                        id="options"
                        name="options"
                        className=" block w-20 px-4 py-2 ml-80 mt-[-39px] h-10  border-gray-400 bg-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    >
                        <option value="">INR</option>
                       
                    </select>
                </div>

                <div>
                    <input
                        type='currency'
                        id='currency'
                        name='currency'
                        value={convertedAmount}
                        readOnly
                        className='rounded-md h-10 pl-1 w-64 mt-10 ml-12 outline-0 bg-gray-400  text-3xl'
                    />

                    <select
                        id="options"
                        name="options"
                        className=" block w-20 px-4 py-2 ml-80 mt-[-39px] h-10  border-gray-400 bg-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    >
                        <option value="">INR</option>
                        <option value="option1">EUR</option>
                        <option value="option2">USD</option>
                        <option value="option3">JPY</option>
                        <option value="option3">GBP</option>
                    </select>
                    <button className='border rounded-md h-10 w-96 mt-14 ml-9 bg-orange-500 font-bold text-black border-none ' onClick={handleConvert}>Converter Currency</button>

                </div>
            </div>
        </div>
    )
}

export default App
