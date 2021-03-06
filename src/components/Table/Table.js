import React from "react";
import "./Table.css";
import numeral from "numeral";

function Table({ countries, casesType }) {
  return (
    <div className="table">
      <table>
        <tbody>
          {countries.map((country, index) => (
            <tr key={index}>
              <td>{country.country}</td>
              <td>
                <strong>{numeral(country[casesType]).format("0,0")}</strong>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
