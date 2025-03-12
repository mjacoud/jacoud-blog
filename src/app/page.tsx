import { Container } from "./Components/Container";
import { Feed } from "./Components/Feed";
import {Footer} from "./Components/Footer";
import { Header } from "./Components/Header";
import { Navbar } from "./Components/Navbar";
import { PaginationMenu } from "./Components/Pagination";
import image from './assets/Image.png'


const mockdata = [
  {
    id: '1',
    date: new Date(),
    imgsrc: image,
    title: 'Title 1',
    content: 'Testing content with new feature called lorem ipsum testing content with new feature called lorem ipsum',
    tags: ['Node', 'Typescript'],
  },
  {
    id: '2',
    date: new Date(),
    imgsrc: image,
    title: 'Title 2',
    content: 'Testing content with new feature called lorem ipsum testing content with new feature called lorem ipsum',
    tags: ['React', 'JavaScript'],
  },
  {
    id: '3',
    date: new Date(),
    imgsrc: image,
    title: 'Title 3',
    content: 'Testing content with new feature called lorem ipsum testing content with new feature called lorem ipsum',
    tags: ['CSS', 'HTML'],
  },
];


export default function Home() {
  return (
   <>
    <Navbar/>
    <Container>      
      <Header title="Recent blog posts"/>
        <Feed data={mockdata} type="recent"/>
        <Header title="All blog posts"/>
        <Feed data={mockdata} type="all"/>
      <PaginationMenu/>
      <Footer/>
    </Container>
   </>
  );
}
 