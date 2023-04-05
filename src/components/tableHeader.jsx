import React from "react";

function tableHeader() {
  return (
    <thead className="thead-dark">
      <tr>
        <th scope="col" className="editColumn"></th>
        <th scope="col">First: </th>
        <th scope="col">Last</th>
        <th scope="col">Email</th>
      </tr>
    </thead>
  );
}

export default tableHeader;
