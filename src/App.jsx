import { create } from 'zustand'
import './App.css'


const useAppStore = create((set)=>({
  count: 0,
  increase: () => {
    set((state) => ({
      count: state.count + 1
    }))
  },
  decrease: () => {
    set((state) => ({
      count: state.count -1
    }))
  }
}))

function App() {
   const store = useAppStore()
  console.log(store)

  return (
    <>
    
      <h1>{store.count}</h1>
      <button type='button' onClick={store.increase}> increase</button>
      <button type='button' onClick={store.decrease}> decrease</button>
    
    </>
  )
}

export default App
