interface headerProps{
    title: string;
    type:string;
}

export const Header = ({title,type}: headerProps) => {
  return (
    <div className={`${type== 'primary' ? 'pt-24': 'md:pt-24'} pb-8 text-2xl font-bold xl:text-5xl xl:pt-36`}>{title}</div>
  )
}
