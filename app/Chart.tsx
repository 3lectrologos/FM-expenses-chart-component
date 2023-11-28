'use client'

import { Data } from '@/app/types'
import {useEffect} from "react";

function Bar({ name, percentage, highlight=false }: { name: string, percentage: number, highlight?: boolean }) {
  const style = {
    height: `${percentage.toFixed(2)}%`,
  }

  return (
    <div className={`basis-0 grow h-[150px] flex flex-col gap-y-3 justify-end`}>
      <div id={name} className={`${highlight ? 'bg-cyan' : 'bg-softred'} rounded`} style={style}>
      </div>
    </div>
  )
}

export default function Chart({ data, currentDay=undefined }: { data: Data, currentDay?: string }) {
  const maxAmount = Math.max(...data.map(({ amount }) => amount))
  return (
    <div className={`flex flex-col gap-y-[10px]`}>
      <div className={`flex flex-row justify-between gap-x-3`}>
        {data.map(({ day, amount }) => (
          <Bar key={day} name={day} percentage={100 * amount / maxAmount} highlight={day === currentDay} />
        ))}
      </div>
      <div className={`flex flex-row justify-between gap-x-3`}>
        {data.map(({ day, amount }) => (
          <span key={day} className={`basis-0 grow text-mediumbrown text-[12px] text-center`}>
            {day}
          </span>
        ))}
      </div>
    </div>
  )
}