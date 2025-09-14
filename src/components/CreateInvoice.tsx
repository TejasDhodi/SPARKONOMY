import { Plus } from 'lucide-react'
import React from 'react'

const CreateInvoice = () => {
    return (
        <>
        <div className='flex flex-col items-center gap-2 bg-commonGray w-full mx-auto h-auto rounded-[40px] p-2'>
            <button className='w-[65px] h-[65px] rounded-full flex items-center justify-center mb-2'>
                <img src="/Images/CreateInvoice.svg" alt="" />
            </button>
            <h1 className='bg-primaryGradient bg-clip-text text-transparent text-2xl font-bold'>Create New Invoice</h1>
            <p className='text-primary-gray mb-2 text-xs'>Start by creating and sending new invoice</p>
        </div>
        <p className='text-primary-purple text-center text-xs my-4'>Or Upload an existing invoice and set payment reminder</p>
        </>
    )
}

export default CreateInvoice
