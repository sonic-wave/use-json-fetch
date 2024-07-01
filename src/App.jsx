import { useState } from 'react'
import './App.css'
import useJsonFetch from './hooks/useJsonFetch'
import { DataFC } from './components/DataFC/DataFC';
import { ErrorFC } from './components/ErrorFC/ErrorFC';
import { LoadingFC } from './components/LoadingFC/LoadingFC';

function App() {

  return (
    <>
      <DataFC />
      <ErrorFC />
      <LoadingFC />
    </>
  )
}

export default App
