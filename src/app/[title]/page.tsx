
import React from 'react'
import { Container } from '../Components/Container'
import { Navbar } from '../Components/Navbar'
import { SubscribeForm } from '../Components/SubscribeForm'
import { Footer } from '../Components/Footer'

export default async function Page ({params}: {params: Promise<{ title: string }>}){
  
const tags = ['Javascript', 'React', 'CSS', 'Node']
const tagColors: { [key: string]: string } = {
    Javascript: 'bg-yellow-200 text-yellow-800',}
  return (
    <>
    <Navbar/>
    <Container>
      <div className='pt-10'>
        <h4 className='text-strongPurple  font-inter font-semibold text-sm '>Sunday, 1 jan 2025</h4>
        <h2 className='font-inter font-bold text-3xl py-5'>Grid system for better design user interface</h2>
        <div className='whitespace-pre-line'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet maxime deleniti aliquam eaque tenetur labore, aut, ut sit repellendus eveniet eum nihil quisquam earum blanditiis quas temporibus repudiandae, dignissimos dolore.
        Saepe animi assumenda eos quae doloribus dolores delectus excepturi neque a cupiditate! Quam, possimus accusamus, aliquam sed similique excepturi, dolorum cupiditate amet reprehenderit ad quo quas dolore repellendus tempora molestias.
        
        <p>
          Magnam quaerat impedit excepturi suscipit adipisci alias odit, facilis nisi. Odit quae minus et! Asperiores veniam voluptatibus eius. Quibusdam quis vitae temporibus natus quia facilis adipisci maxime praesentium. Voluptas, libero?
        </p>Iste unde temporibus velit veniam, voluptates soluta mollitia dolorem voluptatum et, nisi, quidem deserunt tempore quas atque non. Iusto alias, consectetur eveniet praesentium quas exercitationem enim amet dolores quidem distinctio.
        Incidunt delectus ea repellendus architecto doloribus alias quos numquam sit, natus quis dolores quasi consequuntur eius ducimus tenetur, beatae obcaecati dicta, neque deserunt officiis? Iusto animi atque eligendi consequuntur porro?
        </div>
        <div className='pt-6 gap-3 flex'>
          {tags.map(tag=>
          <span key={tag} className={`px-2 py-1 rounded-full text-sm font-medium ${tagColors[tag] || 'bg-gray-200 text-gray-600'}`}>
          {tag}
              </span>
          )}
        </div>
        <div className='flex flex-col items-center py-10'>     
          <span className='font-inter font-semibold text-sm text-strongPurple py-4'>Newsletter</span>
          <h3 className='text-2xl font-semibold '>Stories and interviews</h3>
          <p className='py-6 text-center'>Subscribe to learn about new product features, the latest in technology, solutions, and updates.</p>
        </div>
        <SubscribeForm/>
      </div>
    </Container>
    <Footer/>
    </>
  )
}