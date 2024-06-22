import { Dispatch, ReactElement, SetStateAction, createContext, useState } from "react";

export const CellValueContext = createContext<{
  cellValue: string[][], setActiveCell: Dispatch<SetStateAction<{row: number, col: number}>>,
  activeCell: {row: number, col: number},
  handleCellValue: (row: number, col: number, value: string) => void
} | undefined>(undefined);

function getInitialCellValue(rows: number, cols: number) {
  return Array.from({length: rows + 1}, () => Array.from({length: cols + 1}, () => ''));
}
export const CellValueProvider = ({children}: {children: ReactElement}) => {
  const [cellValue, setCellValue] = useState<Array<Array<string>>>(() => getInitialCellValue(20,100));
  const [activeCell, setActiveCell] = useState({row: 0, col: 0});

  function handleCellValue(row: number, col: number, value: string) {
    setCellValue((prev) => {
      const prevCopy = prev.map((row) => row.slice());
      prevCopy[row][col] = value;
      return prevCopy;
    });
  }

  return (
    <CellValueContext.Provider value={{
      cellValue,
      setActiveCell,
      activeCell,
      handleCellValue,
    }}>
      {children}
    </CellValueContext.Provider>
  )
}