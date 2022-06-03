import React, { useState } from "react";
import { useDebouncedEffect } from "../../../hooks/useDebouncedEffect";

export default function Search({ setSearchString }) {
  const [internal_search, setInternalSearch] = useState("");

  useDebouncedEffect(
    () => setSearchString && setSearchString(internal_search),
    [internal_search],
    500
  );

  return (
    <div className="position-relative search-field">
      <input
        type="text"
        placeholder="Search Cars..."
        value={internal_search}
        onChange={(e) => setInternalSearch(e.target.value)}
      />
      <i className="align-items-center d-flex fa-search fas justify-content-center" />
    </div>
  );
}
