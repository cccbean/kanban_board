import { useParams } from "react-router-dom"
import Header from "../components/Header";
import Kanban from "../components/Kanban";

interface ProjectPageProps {
  projects: string[];
  setProjects: React.Dispatch<React.SetStateAction<string[]>>;
}

export const ProjectPage = ({ projects, setProjects }:ProjectPageProps) => {
  let { projectName } = useParams();

  if (projectName) {
    projectName = projectName.replace(/-/g, ' ');
  } else {
    projectName = '';
  }

  return <div className="h-screen flex flex-col">
    <Header title={projectName} projects={projects} setProjects={setProjects} />
    <Kanban key={projectName} title={projectName} projects={projects} />
  </div>
}
