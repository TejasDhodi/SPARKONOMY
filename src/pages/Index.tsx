import CreateInvoice from '../components/CreateInvoice'
import TimePeriod from '../components/TimePeriod'
import Revenue from '../components/Revenue'
import Invoices from '../components/Invoices'

const Index = () => {
  return (
    <div className='bg-white w-full rounded-tl-[46px] rounded-tr-[46px] py-6 px-4'>
      <CreateInvoice />
      <TimePeriod />
      <Revenue />
      <Invoices />
    </div>
  )
}

export default Index
