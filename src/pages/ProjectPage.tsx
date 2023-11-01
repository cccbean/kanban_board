import { useParams } from "react-router-dom"
import Header from "../components/Header";
import Kanban from "../components/Kanban";

interface ProjectPageProps {
  projects: string[];
  setProjects: React.Dispatch<React.SetStateAction<string[]>>;
  theme: string;
	themeSwitcher: () => void;
}

export const ProjectPage = ({ projects, setProjects, theme, themeSwitcher }:ProjectPageProps) => {
  let { projectName } = useParams();

  if (projectName) {
    projectName = projectName.replace(/-/g, ' ');
  } else {
    projectName = '';
  }

  return <div className="h-screen flex flex-col">
    <Header title={projectName} projects={projects} setProjects={setProjects} theme={theme} themeSwitcher={themeSwitcher} />
    <Kanban key={projectName} title={projectName} />
  </div>
}
