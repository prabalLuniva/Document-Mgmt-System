import React from 'react'
import TopLayout from '../components/TopLayout'
import CreateChalani from '../components/CreateDocument/CreateChalaniDocument'
import NavBar from '../components/Navbar/Navbar'

const ChalaniDocument = () => {
  return (
    <div style={{margin:'5%'}}>
      <h1>Welcome to create chalani document page</h1>
      <TopLayout/>
      <NavBar/>
      <CreateChalani/>
    </div>
  )
}

export default ChalaniDocument
