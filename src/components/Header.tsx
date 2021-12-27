interface Iprops {
  title: string;
}

const Header = ({title}:Iprops) => {
  return (
    <>
      <h1>{title}</h1>
    </>
  )
}

export default Header
