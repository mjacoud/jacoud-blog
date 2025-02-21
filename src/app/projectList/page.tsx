import { Container } from "../Components/Container";
import { Footer } from "../Components/Footer";
import { Header } from "../Components/Header";
import { Navbar } from "../Components/Navbar";
import { Post } from "../Components/Post";
import image from '../assets/Image.png'

export default function Page() {
  return (
   <>
    <Navbar/>
    <Container>      
      <Header title="Project List"/>
      <Post date={new Date()} imgsrc={image} key='1' title="title4" content="testing content with new feature called lorem ipsum testing content with new feature called lorem ipsum" tags={['Node','Typescript']}/>
      <Footer/>
    </Container>
   </>
  );
}
 