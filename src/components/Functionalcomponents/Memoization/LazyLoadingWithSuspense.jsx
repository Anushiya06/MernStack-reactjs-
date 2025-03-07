import {lazy,Suspense} from 'react'
const LazyComponent=lazy(()=>import("../About"))
const LazyLoadingWithSuspense = () => {
  return (
    <div>
      <Suspense fallback={<h1>Loading...</h1>}>
      <h2>This is LazyLoading Componenet with suspense</h2>
      <LazyComponent/>
      </Suspense>
    </div>
  )
}

export default LazyLoadingWithSuspense