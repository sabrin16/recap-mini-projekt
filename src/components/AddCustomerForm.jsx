import { useState } from "react"

const AddCustomerForm = ({ addCustomer }) => {

  const [customerName, setcustomerName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if(customerName.trim() === '') return

    addCustomer(customerName)
    setcustomerName('')
  } 

  return (
    <form className="flex" onSubmit={handleSubmit}>
      <input value={customerName} onChange={(e) => setcustomerName(e.target.value)} type="text" className="border border-sky-800 flex-1 px-2 py-1 rounded-l-lg" />
      <button className="bg-sky-800 text-white font-semibold px-5 rounded-r-lg hover:bg-sky-900 transition-colors">Add Customer</button>
    </form>
  )
}
export default AddCustomerForm