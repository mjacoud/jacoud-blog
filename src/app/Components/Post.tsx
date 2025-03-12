import Image, { StaticImageData } from "next/image";
import arrowUp from '../assets/icons/arrow-up-right.png'
import Link from "next/link";

interface PostProps {
    title: string;
    content: string;
    imgsrc: string | StaticImageData; // StaticImageData é um tipo temporário, que será substituído por um link para a imagem
    date: Date
    tags:string[]
    type:string
    }

export const Post:React.FC<PostProps> = ({title,content,date,imgsrc,tags,type}:PostProps) => {
  
  const formatedDate = (date:Date) => {
    const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    
    const currentMonth = date.getMonth()
    const day = date.getDate()
    const currentWeekDay = date.getDay()
    const year = date.getFullYear()
    return `${weekDays[currentWeekDay]}, ${day} ${months[currentMonth]} ${year}`
  }
  
  const tagColors: { [key: string]: string } = {
    Javascript: 'bg-yellow-200 text-yellow-800',
    Typescript: 'bg-blue-200 text-blue-800',
    React: 'bg-cyan-200 text-cyan-800',
    CSS: 'bg-purple-200 text-purple-800',
    Node: 'bg-red-200 text-red-800',
    // Add more tags and their colors here
};

  return (
    <>
     {type == "main" ?
     <div>
        <Link href={`/${title}`}>
          <Image src={imgsrc} alt="post image" width={0} height={0} sizes="100vw" className="pb-10 w-full h-auto md:h-[20rem]"/>
                <div className="font-inter font-semibold text-purple-400 text-sm md:text-base ">{formatedDate(date)}</div>
                <div className="flex justify-between align-bottom">
                <h2 className="py-4 text-3xl font-inter font-semibold dark:text-weakPurple">{title}</h2>
          <Image src={arrowUp} alt="arrow-up" width={40} height={68}/>
                </div>
                <p className="pb-6 font-inter text-gray-400  md:text-lg">{content}</p>
        </Link>
                <div className="flex flex-wrap gap-2 pb-10">
        {tags.map(tag=>
        <span key={tag} className={`px-2 py-1 rounded-full text-sm font-medium md:text-base ${tagColors[tag] || 'bg-gray-200 text-gray-600'}`}>
        {tag}
    </span>
        )}
        </div>
    </div>
  : 
  <div className="flex">
    <div>
      <Link href={`/${title}`}>
            <Image src={imgsrc} alt="post image" width={0} height={0} sizes="100vw" className="pb-10 w-full h-auto md:h-[19rem] md:w-[50rem] xl:h-[20rem]"/>
          </Link>
    </div>
    <div className="pl-20 xl:pl-10">
                  <div className="font-inter font-semibold text-strongPurple text-sm md:text-base ">{formatedDate(date)}</div>
                  <div className="flex justify-between align-bottom">
                  <h2 className="py-4 text-3xl font-inter font-semibold dark:text-weakPurple">{title}</h2>
            <Image src={arrowUp} alt="arrow-up" width={40} height={68}/>
                  </div>
                  <p className="pb-6 font-inter text-gray-400  md:text-lg">{content}</p>
                  <div className="flex flex-wrap gap-2 pb-10">
          {tags.map(tag=>
          <span key={tag} className={`px-2 py-1 rounded-full text-sm font-medium md:text-base ${tagColors[tag] || 'bg-gray-200 text-gray-600'}`}>
          {tag}
      </span>
          )}     
        </div>
    </div>
  
  </div>
}
  </>
  )
}