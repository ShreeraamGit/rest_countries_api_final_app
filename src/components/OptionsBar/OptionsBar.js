import { useState } from "react";
import { Select } from "@chakra-ui/react";
import downArrowLogo from "../OptionsBar/downArrow.svg";
import { v4 as uuidv4 } from "uuid";

function OptionsBar(props) {
  const { categories, handlerFunction } = props;
  return (
    <div className="dropdown">
      <label tabindex="0" className="btn m-1 bg-[#2b3945] lg:text-xl">
        Filter By Region
      </label>
      <ul
        tabindex="0"
        className="dropdown-content lg:text-xl text-white bg-[#2b3945] menu p-1 shadow rounded-box w-52"
      >
        {categories.map((items) => (
          <li key={uuidv4()}>
            <button key={uuidv4()} value={items} onClick={handlerFunction}>
              {items}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OptionsBar;
