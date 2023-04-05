import React from "react";
import TableHeader from "./tableHeader";
import UserData from "./UserData";

function Table() {
  return (
    <div className="bootstrapTable">
      <table className="table">
        <TableHeader />
        <tbody>
          <UserData />
        </tbody>
      </table>
    </div>
  );
}

export default Table;
