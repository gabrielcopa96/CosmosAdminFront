import { ReactElement } from "react";
import { useAppSelector } from "../../hooks/useRedux";

const CreateProject = (): ReactElement => {

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
                onClick={() => console.log('se hizo click')}
                className="relative block w-full rounded-lg border-2 border-dashed border-indigo-600 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <svg
                  className="mx-auto h-12 w-12 text-indigo-700"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 14v20c0 4.418 7.163 8 16 8 1.381 0 2.721-.087 4-.252M8 14c0 4.418 7.163 8 16 8s16-3.582 16-8M8 14c0-4.418 7.163-8 16-8s16 3.582 16 8m0 0v14m0-4c0 4.418-7.163 8-16 8S8 28.418 8 24m32 10v6m0 0v6m0-6h6m-6 0h-6"
                  />
                </svg>
                <span className="mt-2 block text-sm font-medium text-gray-900">
                  Crea un nuevo proyecto
                </span>
              </button>
            </div>
            <a className="mt-6 text-lg text-indigo-700 font-bold" href="#">Omitir</a>
          </>
        )
      }
    </div>
  );
};

export default CreateProject;
