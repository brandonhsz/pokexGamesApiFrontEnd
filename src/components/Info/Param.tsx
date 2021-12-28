interface Iprops {
  param: string;
}

const Param = ({param}:Iprops) => {
  return (
    <li>
      {param}
    </li>
  )
}

export default Param
