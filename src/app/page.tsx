'use client'

import { Container } from "./Components/Container";
import { Feed } from "./Components/Feed";
import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";
import { Navbar } from "./Components/Navbar";
import { PaginationMenu } from "./Components/Pagination";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'



export default function Home() {
  const queryClient = new QueryClient()

  return (
    
      <QueryClientProvider client={queryClient}>
    <Navbar/>
    <Container>     
      <Header title="Recent blog posts" type="primary"/>
        <Feed type="recent"/>
        <Header title="All blog posts" type="secondary"/>
        <Feed type="all"/>
      <PaginationMenu/>
      <Footer/>
    </Container>
      </QueryClientProvider>
   
  );
}
  