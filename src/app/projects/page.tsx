import { Container } from "../Components/Container";
import { Feed } from "../Components/Feed";
import { Footer } from "../Components/Footer";
import { Header } from "../Components/Header";
import { Navbar } from "../Components/Navbar";
import image from '../assets/Image.png'

export default function Page() {

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

  return (
   <>
    <Navbar/>
    <Container>      
      <Header title="Project List" type="primary"/>
      <Feed type="recent" key='project' data={mockdata}/>
      <Header title="All Projects" type='secondary'/>
      <Feed type="All" key='project' data={mockdata}/>
      <Footer/>
    </Container>
   </>
  );
}
 