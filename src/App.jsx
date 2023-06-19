import './App.css'
import { useCatImage } from './useCatImage'
import { useCatFacts } from './useCatFact'


function App() {
  const {imageUrl}= useCatImage ({fact})
  const {fact,refreshRandomCats}= useCatFacts()

  const handleClick= async()=>{
  refreshRandomCats()
  }

  /*
   const handleClick= async()=>{
   const newFact= await getRandomFact()
   setFact(newFact)
  } */

  return (
    <main>
      <h1>APP DE GATITOS</h1>
      <button onClick={handleClick}>Refresh</button>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt={`Image extracted from ${fact}`}/>}
    </main>
  )
}

export default App
