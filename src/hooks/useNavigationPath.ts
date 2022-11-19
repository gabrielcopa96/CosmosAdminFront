import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const useNavigationPath = (navigation: string, status: string) => {
        const navigate = useNavigate();

        useEffect(() => {
            if (status === "success") {
                return navigate(navigation)
            }
            if(status === "failed"){
                return alert('Fallo culiao')
            }
        }, [status])
}

export default useNavigationPath;