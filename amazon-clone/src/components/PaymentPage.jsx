import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const PaymentPage = () => {
    const notify = () => toast("Payment successful !");  
  return (
<div className="flex justify-center items-center min-h-screen bg-blue-300"> 
    <div className="h-auto w-80 bg-white p-3 rounded-lg">
        <p className="text-xl flex justify-center items-center mx-auto font-semibold">Payment Details</p>
        <div className="input_text mt-6 relative"> <input type="text" className="h-12 pl-7 hover:border border-gray-500 outline-none px-2 focus:border-blue-900 transition-all w-full border-b " placeholder="jasmeen bano" /> <span class="absolute left-0 text-sm -top-4">Cardholder Name</span> <i class="absolute left-2 top-4 text-gray-400 fa fa-user"></i> </div>
        <div className="input_text mt-8 relative"> <input type="text" className="h-12 pl-7  hover:border border-gray-500 outline-none px-2 focus:border-blue-900 transition-all w-full border-b " placeholder="0000 0000 0000 0000" data-slots="0" data-accept="\d" size="19" /> <span class="absolute left-0 text-sm -top-4">Card Number</span> <i class="absolute left-2 top-[14px] text-gray-400 text-sm fa fa-credit-card"></i> </div>
        <div className="mt-8 flex gap-5 ">
            <div className="input_text relative w-full"> <input type="text" className="h-12 pl-7  hover:border border-gray-500 outline-none px-2 focus:border-blue-900 transition-all w-full border-b " placeholder="mm/yyyy" data-slots="my" /> <span class="absolute left-0 text-sm -top-4">Expiry</span> <i class="absolute left-2 top-4 text-gray-400 fa fa-calendar-o"></i> </div>
            <div className="input_text relative w-full"> <input type="text" className="h-12 pl-7  hover:border border-gray-500 outline-none px-2 focus:border-blue-900 transition-all w-full border-b " placeholder="000" data-slots="0" data-accept="\d" size="3" /> <span class="absolute left-0 text-sm -top-4">CVV</span> <i class="absolute left-2 top-4 text-gray-400 fa fa-lock"></i> </div>
        </div>
        {/* <p className="text-lg text-center mt-4 text-gray-600 font-semibold">Payment amount:$12.98</p> */}
        <div className="flex justify-center mt-4"> <button onClick={notify} className="outline-none pay h-12 bg-orange-600 text-white mb-3 hover:bg-orange-700 rounded-lg w-1/2 cursor-pointer transition-all">Pay</button> </div>
    </div>
    <ToastContainer
position="bottom-left"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
</div>
  )
}

export default PaymentPage
