import { paramList } from '../../static/data';
import Param from "./Param"

const ParamList = () => {
  return (
    <ul>
      {
        paramList.map(param => (
          <Param 
            key={param}
            param={param}
          />
        ))
      }
    </ul>
  )
}

export default ParamList
