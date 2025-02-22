import React from 'react'
import { Suspense,lazy } from 'react'
const LazyComp = lazy(()=>import ("../UseState"))
const LazyLoadingSuspense = () => {
  return (
    <div>
      <Suspense fallback={<h1>Loading..</h1>}>
      <h1>This is Lazy Component</h1>
    <LazyComp/>
    </Suspense></div>
  )
}

export default LazyLoadingSuspense