interface headerProps{
    title: string;
}

export const Header = ({title}: headerProps) => {
  return (
    <div className="py-10 text-2xl font-bold xl:text-5xl xl:pt-36">{title}</div>
  )
}
