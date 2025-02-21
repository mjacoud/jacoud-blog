import { Container } from "./Components/Container";
import {Footer} from "./Components/Footer";
import { Header } from "./Components/Header";
import { Navbar } from "./Components/Navbar";
import { PaginationMenu } from "./Components/Pagination";
import { Post } from "./Components/Post";
import image from './assets/Image.png'

export default function Home() {
  return (
   <>
    <Navbar/>
    <Container>      
      <Header title="Recent blog posts"/>
      <Post date={new Date()} imgsrc={image} key='1' title="title1" content="testing content with new feature called lorem ipsum testing content with new feature called lorem ipsum" tags={['Node','Typescript']}/>
      <Post date={new Date()} imgsrc={image} key='2' title="title2" content="testing content with new feature called lorem ipsum testing content with new feature called lorem ipsum" tags={['Node','Typescript']}/>
      <Post date={new Date()} imgsrc={image} key='3' title="title3" content="testing content with new feature called lorem ipsum testing content with new feature called lorem ipsum" tags={['Node','Typescript']}/>
      <PaginationMenu/>
      <Footer/>
    </Container>
   </>
  );
}
 