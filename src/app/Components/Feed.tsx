import { StaticImageData } from "next/image";
import { Post } from "./Post";

interface PostProps {
    title: string;
    content: string;
    imgsrc: string | StaticImageData; // StaticImageData é um tipo temporário, que será substituído por um link para a imagem
    date: Date
    tags:string[]
    }

interface feedProps {
  data: PostProps[]
}

export const Feed = ({data}:feedProps) => {
  return (

    <div>
      {data.map((post)=>
        <Post content={post.content} date={post.date} tags={post.tags} imgsrc={post.imgsrc} title={post.title} key={post.title}/>
      )}

    </div>
  )
}

