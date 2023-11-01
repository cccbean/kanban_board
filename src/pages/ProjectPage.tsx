import { useParams } from "react-router-dom"
import Header from "../components/Header";
import { Project } from "../App";

interface ProjectPageProps {
  projects: Project[];
  setProjects: React.Dispatch<React.SetStateAction<Project[]>>;
}

export const ProjectPage = ({ projects, setProjects }:ProjectPageProps) => {
  const { projectName } = useParams();

  return <div>
    <Header title={projectName} projects={projects} setProjects={setProjects} />
    This project is called {projectName}
  </div>
}
