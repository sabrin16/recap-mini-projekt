const CustomerListItem = ({ customer, deleteCustomer }) => {
  return (
    <li className="flex justify-between items-center">
      <div className="flex items-center">
        <p className="w-[100px]">{customer.id.slice(0, 6)}</p>
        <p className="font-semibold text-lg">{ customer.name }</p>
      </div>
      <button onClick={() => deleteCustomer(customer.id)} className="bg-red-800 text-white px-5 py-1 rounded-lg hover:bg-red-900 transition-colors">Remove Customers</button>
    </li>
  )
}
export default CustomerListItem