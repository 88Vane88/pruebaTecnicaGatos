import { useEffect, useState } from "react"
import { getRandomFact } from "./facts"

export function useCatFacts(){
  const [fact, setFact]=useState()

  const refreshRandomCats = ()=>{
    getRandomFact().then(setFact)
  }
  //PARA RECUPERAR LA CITA AL CARGAR LA PÁGINA
  useEffect(()=>{
    refreshRandomCats()
  },[])

  return {fact, refreshRandomCats}
}
