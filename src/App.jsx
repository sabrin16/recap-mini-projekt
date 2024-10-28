import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

import AddCustomerForm from "./components/AddCustomerForm"
import CustomerList from "./components/CustomerList"
import Header from "./components/Header"

function App() {

  const [Customers, setCustomers] = useState([
    {
      id: uuidv4(),
      name: 'Hans Mattin Lassei',
    },
    {
      id: uuidv4(),
      name: 'Tommy Mattin Lassei',
    }
  ])

  const addCustomer = (customerName) => {
    setCustomers(state => {
      return [...state, { id: uuidv4(), name: customerName }]
    })
  }

  const deleteCustomer = (id) => {
    setCustomers(state => {
      return state.filter(customer => customer.id !== id)
    })
  }

  return (
    <>
      <Header title="Customers" />
      <main className="container mx-auto pt-8 space-y-8">
        <AddCustomerForm addCustomer={addCustomer} />
        <CustomerList customers={Customers} deleteCustomer={deleteCustomer} />
      </main>
    </>
  )
}
export default App