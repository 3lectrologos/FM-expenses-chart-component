import Image from 'next/image'
import { promises as fs } from 'fs'
import { Data } from '@/app/types'
import Chart from '@/app/Chart'

function Balance({ amount }: { amount: number }) {
  return (
    <div className={`flex flex-row bg-softred justify-between rounded-lg p-5`}>
      <div className={`flex flex-col text-white gap-y-0`}>
        <span className={`text-[15px] text-verypaleorange`}>
          My balance
        </span>
        <span className={`text-[24px] font-semibold text-verypaleorange`}>
          ${amount}
        </span>
      </div>
      <div className={`relative w-[60px] mr-0.5`}>
        <Image src={'/logo.svg'} alt={'logo'} fill />
      </div>
    </div>
  )
}

function Total({ amount, percentage }: { amount: number, percentage: number }) {
  return (
    <div className={`flex flex-row justify-between`}>
      <div className={`flex flex-col`}>
        <span className={`text-mediumbrown text-[15px]`}>
          Total this month
        </span>
        <span className={`text-darkbrown text-[29px] font-bold`}>
          ${amount}
        </span>
      </div>
      <div className={`flex flex-col justify-end text-darkbrown text-[15px] leading-[19px] text-right`}>
        <span className={`font-bold`}>
          {(percentage >= 0 ? '+' : '') + percentage.toFixed(1)}%
        </span>
        <span className={`text-mediumbrown`}>
          from last month
        </span>
      </div>
    </div>
  )
}

function Details({ data }: { data: Data }) {
  return (
    <div className={`flex flex-col gap-y-6 bg-white px-5 py-6 rounded-lg`}>
      <h1 className={`text-darkbrown text-[24px] font-bold mb-6`}>
        Spending - Last 7 days
      </h1>
      <Chart data={data} currentDay={'wed'} />
      <div className={`w-full h-[2px] bg-cream`}>
      </div>
      <Total amount={478.33} percentage={2.4} />
    </div>
  )
}

export default async function Home() {
  const file = await fs.readFile(process.cwd() + '/app/data.json', 'utf-8')
  const data = JSON.parse(file)
  return (
    <div className={`flex flex-col bg-cream min-h-screen px-4 py-16`}>
      <div className={`flex flex-col gap-y-4`}>
        <Balance amount={921.48} />
        <Details data={data} />
      </div>
    </div>
  )
}
