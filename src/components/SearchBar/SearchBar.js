import { useState } from "react";
import { Input } from "@chakra-ui/react";

function SearchBar(props) {
  const { handler, captureHandler, message } = props;
  return (
    <div className="mt-5 p-5 text-white">
      <Input
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
