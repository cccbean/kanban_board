import { useParams } from "react-router-dom"

export const Prototype = () => {
  let { projectName } = useParams();
  console.log(projectName)

  return <div>
    Prototype for {projectName?.replace(/-/g, ' ')} page
  </div>
}