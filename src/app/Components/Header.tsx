interface headerProps{
    title: string;
}

export const Header = ({title}: headerProps) => {
  return (
    <div className="py-10 text-2xl font-bold">{title}</div>
  )
}
