import { useParams } from "react-router-dom"
import Header from "../components/Header";
import Kanban from "../components/Kanban";

interface ProjectPageProps {
  projects: string[];
  setProjects: React.Dispatch<React.SetStateAction<string[]>>;
}

export const ProjectPage = ({ projects, setProjects }:ProjectPageProps) => {
  const { projectName } = useParams();

  return <div>
    <Header title={projectName ? projectName?.replace(/-/g, ' ') : ''} projects={projects} setProjects={setProjects} />
    <Kanban key={projectName} title={projectName?.replace(/-/g, ' ')} projects={projects} />
  </div>
}
