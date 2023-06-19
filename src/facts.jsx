const CAT_ENDPOINT_RANDOM_FACT= `https://catfact.ninja/fact`

export const getRandomFact=async ()=>{
  const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
  const data //de data recuperamos fact
    = await res.json()
  const { fact } = data; //de data recuperamos fact
  return fact
}

/* NO ASYNC
export const getRandomFacts=async ()=>{
   return fetch(CAT_ENDPOINT_RANDOM_FACT)
  .then(res=>res.json())
  .then(data=>{
    const {fact}=data //de data recuperamos fact
    return fact
  })
}
*/