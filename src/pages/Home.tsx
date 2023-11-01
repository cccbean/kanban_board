import { Project } from "../App"
import Header from "../components/Header"

interface HomeProps {
  projects: string[];
  setProjects: React.Dispatch<React.SetStateAction<string[]>>;
}

export const Home = ({ projects, setProjects }:HomeProps) => {
  return (
    <div className="">
      <Header title='' projects={projects} setProjects={setProjects} />
      Hellooo, looks like you don't have any projects (this will auto reroute to the first project page?). Would you like to create one?
    </div>
  )
}