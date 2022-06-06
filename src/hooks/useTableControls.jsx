import { useState } from "react";

export function useTableControls({
  defaultStatus = "",
  defaultPerPage = 10,
  defaultSearchString = "",
  defaultFrom = "",
  defaultTo = "",
} = {}) {
  const [perPage, setPerPage] = useState(defaultPerPage);
  const [status, setStatus] = useState(defaultStatus);
  const [searchString, setSearchString] = useState(defaultSearchString);
  const [from, setFrom] = useState(defaultFrom);
  const [to, setTo] = useState(defaultTo);

  return {
    perPage,
    setPerPage,
    status,
    setStatus,
    searchString,
    setSearchString,
    from,
    setFrom,
    to,
    setTo,
  };
}
