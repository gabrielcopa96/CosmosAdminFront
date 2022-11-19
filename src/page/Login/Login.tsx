import { ReactElement, useState, ChangeEvent, SetStateAction, Dispatch } from "react";
import useFormikValid from "../../hooks/useFormikValid";
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";

type PropsLogin = {
    setActionPage: Dispatch<SetStateAction<"login" | "register">>;
}

const Login = ({ setActionPage }: PropsLogin): ReactElement<HTMLElement> => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const { handleSubmit, values, handleChange, errors, isSubmitting, onSubmit } = useFormikValid({ email: '', password: '', })
    return (
        <>
            <div className="flex flex-1 flex-col justify-center h-screen px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24 bg-indigo-700">
                <div className="mx-24 w-full max-w-sm lg:w-96">
                    <div>
                        <h2 className="mt-6 text-4xl text-center font-bold tracking-tight text-gray-200">
                            Iniciar Sesión
                        </h2>
                    </div>

                    <div className="mt-8">
                        <div className="mt-6">
                            <form className="space-y-6" onSubmit={onSubmit}>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-400"
                                    >
                                        Email o Username
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            value={values.email}
                                            onChange={handleChange}
                                            placeholder="username o email"
                                            required
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
                                            required
                                            className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="text-sm">
                                        <a
                                            href="#"
                                            className="font-medium text-lime-50 hover:text-indigo-500"
                                        >
                                            Forgot your password?
                                        </a>
                                    </div>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="flex w-full justify-center rounded-md border border-transparent bg-slate-800 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-slate-600 focus:outline-none focus:ring-2 focus:bg-slate-700 focus:ring-offset-2"
                                    >
                                        Iniciar sesión
                                    </button>
                                </div>
                            </form>
                            <div className="flex flex-col gap-3">
                                <div className="text-lime-50 text-center mt-6">
                                    <p>O registrate</p>
                                </div>
                                <div>
                                    <button
                                        onClick={() => setActionPage("register")}
                                        className="flex w-full justify-center rounded-md border border-transparent bg-slate-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-slate-800 focus:outline-none focus:ring-2 focus:bg-slate-700 focus:ring-offset-2"
                                    >
                                        Registrarse
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login