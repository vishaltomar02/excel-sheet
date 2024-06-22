import CellInput from "./CellInput";
import cx from "classnames";

function getColHeader(num: number = 678){
  console.log(num);
  let result = "";
  while(num/26 > 0) {
    num--;
    const remainder = num % 26;
    const letter = String.fromCharCode(65 + remainder);
    result = letter + result;
    num = Math.floor(num/ 26);
  }
  return result;
}

getColHeader();

export const ExcelSheet = ({rows, cols}: {rows: number, cols: number}) => {

  function renderCells() {
    return Array.from({length: rows+1}, (_, rowIdx) => {
      console.log(rowIdx)
      return <div className='rows flex flex-row gap-0' key={`row ${rowIdx+1}`}>
        {Array.from({length: cols+1}, (_, colIdx) => {
        return <div className={
          cx('input-container w-52 p-1 flex justify-center items-center', {
            'sticky top-0 bg-white text-black': rowIdx === 0 || colIdx === 0
          })
          }
          key={`row-${rowIdx+1}-col-${colIdx+1}`}>
          {
            colIdx === 0 ? rowIdx === 0 ? null : <div>{rowIdx}</div> :
            rowIdx === 0 ? <div>{getColHeader(colIdx)}</div> :
          <CellInput
            row={rowIdx}
            col={colIdx}
          />
          }
        </div>
      })}
      </div>
    })
  }
  return (
    <section className='excel-container mt-4 flex flex-col overflow-auto relative'>
      <span>
        ExcelSheet
      </span>
      <div className='excel-sheet-viewer absolute'>
        {renderCells()}
      </div>
    </section>
  )
}
