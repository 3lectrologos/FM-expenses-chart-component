import Image from 'next/image'
import { promises as fs } from 'fs'
import { Data } from '@/app/types'
import Chart from '@/app/Chart'

function Balance({ amount }: { amount: number }) {
  return (
    <div className={`flex flex-row bg-softred justify-between rounded-lg p-5 md:rounded-[20px] md:pb-6 md:pt-[27px] md:px-8`}>
      <div className={`flex flex-col text-white md:gap-y-1`}>
        <span className={`text-[15px] text-verypaleorange md:text-[18px]`}>
          My balance
        </span>
        <span className={`text-[24px] font-semibold text-verypaleorange md:text-[32px]`}>
          ${amount}
        </span>
      </div>
      <div className={`relative w-[60px] mr-0.5 md:w-[72px] md:mr-1`}>
        <Image src={'/logo.svg'} alt={'logo'} fill />
      </div>
    </div>
  )
}

function Total({ amount, percentage }: { amount: number, percentage: number }) {
  return (
    <div className={`flex flex-row justify-between`}>
      <div className={`flex flex-col md:gap-y-2`}>
        <span className={`text-mediumbrown text-[15px] md:text-[18px]`}>
          Total this month
        </span>
        <span className={`text-darkbrown text-[30px] font-bold md:text-[48px] md:leading-[100%]`}>
          ${amount}
        </span>
      </div>
      <div className={`flex flex-col justify-end text-darkbrown text-[15px] leading-[19px] text-right md:text-[18px] md:leading-[24px]`}>
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
    <div className={`flex flex-col gap-y-6 bg-verypaleorange px-5 py-6 rounded-lg md:rounded-[20px] md:px-10 md:pt-8 md:pb-11 md:gap-y-8`}>
      <h1 className={`text-darkbrown text-[24px] font-bold mb-6 md:text-[32px] md:mb-8`}>
        Spending - Last 7 days
      </h1>
      <Chart data={data} currentDay={'wed'} />
      <div className={`w-full h-[2px] bg-cream rounded-sm`}>
      </div>
      <Total amount={478.33} percentage={2.4} />
    </div>
  )
}

export default async function Home() {
  const file = await fs.readFile(process.cwd() + '/app/data.json', 'utf-8')
  const data = JSON.parse(file)
  return (
    <div className={`flex flex-col bg-cream justify-center min-w-fit min-h-screen px-4 py-16`}>
      <div className={`flex flex-row justify-center`}>
        <div className={`grow flex flex-col gap-y-4 min-w-[300px] max-w-md md:max-w-[540px] md:gap-y-6`}>
          <Balance amount={921.48} />
          <Details data={data} />
        </div>
      </div>
    </div>
  )
}
