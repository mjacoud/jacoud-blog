import Image, { StaticImageData } from "next/image";

interface PostProps {
    title: string;
    content: string;
    imgsrc: string | StaticImageData; // StaticImageData é um tipo temporário, que será substituído por um link para a imagem
    date: Date
    tags:string[]
    }

export const Post:React.FC<PostProps> = ({title,content,date,imgsrc,tags}:PostProps) => {
  
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
    <div>
      <Image src={imgsrc} alt="post image" width={500} height={300} className="pb-10"/>
      <div className="font-inter font-semibold text-dateColor">{formatedDate(date)}</div>
      <h2 className="py-4 text-3xl font-inter font-semibold">{title}</h2>
      <p className="pb-6 font-inter text-gray-400">{content}</p>
      <div className="flex flex-wrap gap-2 pb-10">
        {tags.map(tag=>
        <span key={tag} className={`px-2 py-1 rounded-full text-sm font-medium ${tagColors[tag] || 'bg-gray-200 text-gray-600'}`}>
        {tag}
    </span>
        )}
        </div>
    </div>
  )
}