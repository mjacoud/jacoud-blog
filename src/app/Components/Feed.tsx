'use client'

import { StaticImageData } from "next/image";
import { Post } from "./Post";
import { useWindowSize } from "../hooks/useWindowSize";

interface PostProps {
    title: string;
    content: string;
    imgsrc: string | StaticImageData; // StaticImageData é um tipo temporário, que será substituído por um link para a imagem
    date: Date
    tags:string[]
    }

interface feedProps {
  data: PostProps[]
  type:string
}

export const Feed = ({data,type}:feedProps) => {

  const olderPosts = data.slice(1)
 const windowSize = useWindowSize()

  return (
    <div >
      {type == "recent" ? 
      <div className="xl:grid xl:grid-cols-2 xl:gap-12">
         
          <Post content={data[0].content} date={data[0].date} tags={data[0].tags} imgsrc={data[0].imgsrc} title={data[0].title} type="main"/>

        <div>
          {olderPosts.map((post)=>
            <Post content={post.content} date={post.date} tags={post.tags} imgsrc={post.imgsrc} title={post.title} key={post.title} type={windowSize.width >= 768 ? "secondary" : "main"}/>
          )}
        </div>
        
      </div>
      
      : 
      <div className="md:grid md:grid-cols-2 md:gap-12 xl:grid-cols-3">
      {olderPosts.map((post)=>
        <Post content={post.content} date={post.date} tags={post.tags} imgsrc={post.imgsrc} title={post.title} key={post.title} type="main"/>
      )} 
      {olderPosts.map((post)=>
        <Post content={post.content} date={post.date} tags={post.tags} imgsrc={post.imgsrc} title={post.title} key={post.title} type="main"/>
      )} 
      </div>
      }
    </div>
  )
}

