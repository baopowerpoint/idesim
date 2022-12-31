import React from "react";

function Balances() {
  return (
    <div className="p-3 w-full">
      {" "}
      <h1 className="text-headline5 font-600">Thanh toán</h1>
      <div className="mt-5 rounded-lg border border-dark4 p-5 bg-dark3">
        <h1 className="my-2 text-headline6 font-600 ">Số dư</h1>
        <div className="flex items-center gap-5  ">
          <p>Số dư hiện tại:</p>
          <p>0 VNĐ</p>
        </div>
        <h1 className="my-2 text-headline6 font-600 mt-5">Lịch sử giao dịch</h1>
        <div className="flex items-center gap-5  ">
          <p className="font-300 text-body text-green-400">
            Bạn đã nạp 200.000 VNĐ thông qua Momo
          </p>
        </div>
      </div>
    </div>
  );
}

export default Balances;
