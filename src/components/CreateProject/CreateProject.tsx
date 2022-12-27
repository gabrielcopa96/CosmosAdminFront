import { ChangeEvent, Dispatch, ReactElement, SetStateAction, useState } from "react";
import { useAppSelector } from "../../hooks/useRedux";
import ButtonNewProjects from "../../helpers/ButtonNewProjects";
import { Link } from "react-router-dom";
import Modal from "../Modal/Modal";

const CreateProject = (): ReactElement => {

  const [open, setOpen]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(false);
  const { user } = useAppSelector(state => state.login)


  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-200">
      {
        !user?.projects.length && (
          <>
            <div className="flex flex-col gap-2">
              <h2 className="font-extrabold text-4xl">Te damos la bienvenida a <span className="text-indigo-700 text-5xl">Cosmos.</span></h2>
              <p className="text-center font-bold text-3xl mb-3 mt-1">Empeza creando tu primer proyecto</p>
            </div>
            <div>
              <button
                type="button"
                onClick={() => setOpen(!open)}
                className="relative block w-full rounded-lg border-2 border-dashed border-indigo-600 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <ButtonNewProjects />
              </button>
            </div>
            <Link className="mt-6 text-lg text-indigo-700 font-bold" to="/dashboard">Omitir</Link>
            {
              open && (
                <Modal open={open} setOpen={setOpen} />
              )
            }
          </>
        )
      }
    </div>
  );
};

export default CreateProject;
