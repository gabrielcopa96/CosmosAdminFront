import { ReactElement } from "react";
import CreateProject from "../../components/CreateProject/CreateProject"
import Dashboard from "../../components/Dashboard/Dashboard";
import ProjectChoice from "../../components/ProjectChoice/ProjectChoice";
import SideBar from "../../components/SideBar/SideBar";
import { useAppSelector } from "../../hooks/useRedux";

const Welcome = (): ReactElement => {

  const { user } = useAppSelector(state => state.login);

  return (
    <>
      {
        user.projects.length > 0 ? <SideBar /> : <CreateProject />
      }
    </>
  )
}

export default Welcome;