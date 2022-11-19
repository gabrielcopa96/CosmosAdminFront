import { ReactElement, SetStateAction, Dispatch } from "react";
import useFormikValid from "../../hooks/useFormikValid";
import { fetchRegister } from "../../redux/async";

type PropsRegister = {
    setActionPage: Dispatch<SetStateAction<"login" | "register">>;
}

const Register = ({ setActionPage }: PropsRegister): ReactElement<HTMLElement> => {

    const { handleSubmit, values, handleChange, errors, isSubmitting, onSubmit } = useFormikValid({ email: '', password: '', username: '', firstName: '', lastName: '' }, "register", fetchRegister)


    return (
        <>
            <div className="flex flex-1 flex-col justify-center h-screen px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24 bg-indigo-700">
                <div className="mx-24 w-full max-w-sm lg:w-96">
                    <div>
                        <h2 className="mt-6 text-4xl text-center font-bold tracking-tight text-gray-200">
                            Registrate
                        </h2>
                    </div>

                    <div className="mt-8">
                        <div className="mt-6">
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div>
                                    <label
                                        htmlFor="firstName"
                                        className="block text-sm font-medium text-gray-400"
                                    >
                                        Nombre
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            id="firstName"
                                            name="firstName"
                                            value={values.firstName}
                                            onChange={handleChange}
                                            type="text"
                                            placeholder="nombre"
                                            className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="lastName"
                                        className="block text-sm font-medium text-gray-400"
                                    >
                                        Apellido
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            id="lastName"
                                            name="lastName"
                                            value={values.lastName}
                                            onChange={handleChange}
                                            type="text"
                                            placeholder="apellido"
                                            className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="username"
                                        className="block text-sm font-medium text-gray-400"
                                    >
                                        Username
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            id="username"
                                            name="username"
                                            value={values.username}
                                            onChange={handleChange}
                                            type="text"
                                            placeholder="username"
                                            className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-400"
                                    >
                                        Email
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            value={values.email}
                                            onChange={handleChange}
                                            placeholder="email"
                                            className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <label
                                        htmlFor="password"
                                        className="block text-sm font-medium text-gray-400"
                                    >
                                        Password
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            value={values.password}
                                            onChange={handleChange}
                                            placeholder="password"
                                            className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="flex w-full justify-center rounded-md border border-transparent bg-slate-800 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-slate-600 focus:outline-none focus:ring-2 focus:bg-slate-700 focus:ring-offset-2"
                                    >
                                        Registrarme
                                    </button>
                                </div>
                            </form>
                            <div className="flex flex-col mt-6">
                                <button
                                    onClick={() => setActionPage("login")}
                                    className="flex w-full justify-center rounded-md border border-transparent bg-slate-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-slate-800 focus:outline-none focus:ring-2 focus:bg-slate-700 focus:ring-offset-2"
                                >
                                    Volver al login
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register;