import { useState } from "react";

export function useTableControls({ defaultType = "", defaultPerPage = 10, defaultCategory = "" } = {}) {
  const [perPage, setPerPage] = useState(defaultPerPage);
  const [type, setType] = useState(defaultType);
  const [category, setCategory] = useState(defaultCategory);

  return {
    perPage,
    setPerPage,
    type,
    setType,
    category,
    setCategory,
  };
}
