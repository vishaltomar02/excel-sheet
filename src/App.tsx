import './App.css'
import { CellValueProvider } from './CellValueContext'
import { ExcelSheet } from './ExcelSheet'
import { FormulaInput } from './FormulaInput'

function App() {

  return (
    <CellValueProvider>
      <main className='main-app'>
        <FormulaInput/>
        <ExcelSheet rows={20} cols={100}/>
    </main>
    </CellValueProvider>
  )
}

export default App
