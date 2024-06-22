import React, { useContext } from "react";
import { CellValueContext } from "./CellValueContext";

type rowType = number;
type colType = number;

const CellInput = ({row, col}: {
  row: rowType,
  col: colType,
}) => {
  const {cellValue, handleCellValue, activeCell, setActiveCell} = useContext(CellValueContext) || {};

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    handleCellValue?.(row, col, e.target.value);
  }
  return (
    <input
      name={`cell-${row+1}-${col+1}`}
      autoFocus={activeCell?.row === row && activeCell?.col === col}
      value={cellValue?.[row]?.[col] || ''}
      onFocus={() => {
        setActiveCell?.({row, col});
      }}
      onChange={handleInputChange}
      type="text"
      className="w-full border-sky-600 border-2 bg-transparent rounded py-2 text-center"
    />
  )
}

export default CellInput