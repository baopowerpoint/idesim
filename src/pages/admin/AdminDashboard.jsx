import React from "react";
import AreaChart from "../../components/chart/AreaChart";
import CustomerList from "../../components/list/CustomerList";
import TransactionList from "../../components/list/TransactionList";

function AdminDashboard() {
  return (
    <div className="mt-20 max-w-[600px] mx-auto">
      <h1 className="text-center text-headline4 font-700">Admindashboard</h1>
      <div className="mx-5 mt-10">
        <p className="mb-2 text-headline5 font-600">Giao dịch</p>
        <AreaChart />
      </div>
      <div className="mx-5">
        <p className="mb-2 text-headline5 font-600">Khách hàng</p>
        <CustomerList />
      </div>
      <div className="mx-5 mt-10">
        <p className="mb-2 text-headline5 font-600">Giao dịch</p>
        <TransactionList />
      </div>
    </div>
  );
}

export default AdminDashboard;
