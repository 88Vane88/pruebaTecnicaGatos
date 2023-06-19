import { useEffect, useState } from "react"

const CAT_PREFIX_IMAGE_URL = `https://cataas.com`

export function useCatImage({fact}){ //CUSTOMHOOKS 
  const [imageUrl, setImageUrl] = useState()

  //PARA RECUPERAR IMG CADA VEZ QUE TENEMOS UNA CITA NUEVA
  useEffect(()=>{
    if (!fact) return //si no hay fact, return, sino el resto
    const threeFirstWords=fact.split('').slice(0,3).join('')
        //fact.split('',3).join('')

        fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`)
          .then(res=>res.res.json())
          .then(response =>{
            const {url}=response
            setImageUrl(url)
          })
  },[fact]) 
  
  return {imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}`}
}