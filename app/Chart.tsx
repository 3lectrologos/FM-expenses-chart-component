'use client'

import { Data } from '@/app/types'
import {useEffect} from "react";

function Bar({ name, amount, percentage, highlight=false }: { name: string, amount: number, percentage: number, highlight?: boolean }) {
  const style = {
    height: `${150 * percentage / 100}px`
  }
  const bgColor = highlight ? 'bg-cyan' : 'bg-softred'
  const hoverColor = highlight ? 'hover:bg-softercyan' : 'hover:bg-softerred'

  return (
    <div className={`relative`}>
      <div id={name} className={`peer transition ${bgColor} rounded hover:transition hover:cursor-pointer ${hoverColor}`} style={style}>
      </div>
      <div className={`transition-opacity opacity-0 absolute -top-2 left-1/2 transform -translate-x-1/2 -translate-y-full bg-darkbrown text-verypaleorange text-[12px] text-center font-semibold rounded-md p-1.5 peer-hover:transition-opacity peer-hover:opacity-100 md:text-[18px] md:p-2`}>
        ${amount}
      </div>
    </div>
  )
}

export default function Chart({ data, currentDay=undefined }: { data: Data, currentDay?: string }) {
  const maxAmount = Math.max(...data.map(({ amount }) => amount))
  return (
    <div className={`flex flex-col gap-y-[10px] md:gap-y-[8px]`}>
      <div className={`flex flex-row justify-between gap-x-3 md:gap-x-[18px]`}>
        {data.map(({ day, amount }) => (
          <div key={day} className={`basis-0 grow flex flex-col justify-end`}>
            <Bar name={day} amount={amount} percentage={100 * amount / maxAmount} highlight={day === currentDay} />
            <span key={day} className={`text-mediumbrown text-[12px] text-center md:text-[15px]`}>
              {day}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}