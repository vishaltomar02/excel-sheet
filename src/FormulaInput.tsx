import { useContext } from "react"
import { CellValueContext } from "./CellValueContext";

export const FormulaInput = () => {
  const context = useContext(CellValueContext);

  if (!context) {
    // Handle the case where context is undefined, e.g., by throwing an error or providing a fallback
    throw new Error("CellValueContext must be used within a CellValueProvider");
  }

  const {cellValue, handleCellValue,  activeCell} = context;
  console.log(activeCell, cellValue)
  return (
    <div>
      <input
        name="formula-input"
        value={cellValue[activeCell.row][activeCell.col]}
        onChange={(e) => {handleCellValue(activeCell.row, activeCell.col, e.target.value);}}
        type="text"
        className="w-52 border-sky-600 border-2 bg-black rounded py-2 text-center"
      />
    </div>
  )
}
