import CustomerListItem from "./CustomerListItem"

const CustomerList = ({ customers, deleteCustomer }) => {

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
      <div className="flex items-center">
        <p className="font-bold text-xl w-[100px]">Id</p>
        <p className="font-bold text-xl">Name</p>
      </div>
        <p></p>
      </div>
      <ul className="space-y-4">
        {
          customers.length > 0 && customers.map(customer => (
            <CustomerListItem key={customer.id} customer={customer} deleteCustomer={deleteCustomer} />
          ))
        }
        {
          customers.length <= 0 && <p className="font-semibold text-lg">No customers to show</p>
        }
      </ul>
    </div>
  )
}
export default CustomerList