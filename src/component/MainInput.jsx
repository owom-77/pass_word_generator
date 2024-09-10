import React, { useId } from 'react'

export default function MainInput({
    className = '',
    label,
    amountChange,
    amount,
    options = [],
    setCurrency = 'usd',
    amountDisable = false,
    currencyChange,
}) {

    let id = useId();

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                {label && (<label
                className="text-black/40 mb-2 inline-block"
                htmlFor={id}
                >{label}</label>)}

                <input
                className="outline-none w-full bg-transparent py-1.5"
                type = 'number'
                value = {amount}
                onChange={(e)=>amountChange && amountChange(Number(e.target.value))}
                amountDisable = {amountDisable}
                />
                
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>

                <select
                className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                onChange={(e)=> currencyChange && currencyChange(e.target.value)}
                value={setCurrency}
                >
                    {options?.map((val)=>(
                        <option value={val} key={val}>{val}</option>
                    ))}
                </select>

            </div>
        </div>
    );
}