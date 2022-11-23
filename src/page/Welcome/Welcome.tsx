import { ReactElement } from "react";
import CreateProject from "../../components/CreateProject/CreateProject"

const Welcome = (): ReactElement => {

  const token = localStorage.getItem('token');

  return (
    <>
        <CreateProject />
    </>
  )
}

export default Welcome;