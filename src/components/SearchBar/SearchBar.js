import { useState } from "react";
import { Input } from "@chakra-ui/react";

function SearchBar(props) {
  const { handler, captureHandler, message } = props;
  return (
    <div className="text-white md:w-3/6 lg:text-xl">
      <Input
        className=""
        onKeyPress={handler}
        onChange={captureHandler}
        value={message}
        type="text"
        id="message"
        name="message"
        placeholder="Search for a country"
        size="lg"
        focusBorderColor=""
      />
    </div>
  );
}

export default SearchBar;
