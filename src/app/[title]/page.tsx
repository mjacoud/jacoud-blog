
import React from 'react'
import { Container } from '../Components/Container'
import { Navbar } from '../Components/Navbar'
import { SubscribeForm } from '../Components/SubscribeForm'
import { Footer } from '../Components/Footer'

export default async function Page ({params}: {params: Promise<{ title: string }>}){
  

  return (
    <>
    <Navbar/>
    <Container>
      <div>
        <h4>date</h4>
        <h2>Title</h2>
        <div> Content</div>
        <div>
          <span>Newsletter</span>
          <h3>Stories and interviews</h3>
          <p>Description</p>
        </div>
        <SubscribeForm/>
      </div>
    </Container>
    <Footer/>
    </>
  )
}