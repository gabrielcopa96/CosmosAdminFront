// import { useEffect } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Toast from "../helpers/Toast";


const useNavigationPath = (navigation: string, status: string) => {
        const navigate = useNavigate();

        useEffect((): any => {
            if (status === "success") {
                Toast("top-end", "success", "Success");
                setTimeout(() => {
                    navigate(navigation)
                }, 3000)
            }
            if(status === "failed"){
                Toast("top-end", "error", "error")
            }
        }, [status])
}

export default useNavigationPath;