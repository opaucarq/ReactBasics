import React, { useEffect, useState } from 'react'

export const userFetch = (url) => {
  const [state, setState] =  useState({
    data:null,
    isLoading: true,
    errors:null
  })

  const {data, isLoading, errors} = state
  useEffect(() =>{
    fetch(url)
    .then(response => response.json())
    .then(data => {
      setState({
        data,
        isLoading: false,
        errors: null
      })
    })
    .catch(error =>{
      setState({
        data: null,
        isLoading:false,
        errors: error
      })
    })
  }, [url])

  return (
    {
      data,
      isLoading,
      errors
    }
  
  )
}
