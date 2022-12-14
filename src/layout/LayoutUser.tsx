import { Routes, Route, Outlet } from "react-router-dom";
import { useAppSelector } from "../hooks/useRedux";
import LoginAndRegister from "../page/Login/LoginAndRegister";
import Welcome from "../page/Welcome/Welcome";

const MainLayoutUser = () => {
  return (
    <div>
      {/* Aqui iria el componente que se mantenderia fijo */}
      <Outlet />
    </div>
  );
};

const LayoutUser = () => {

  const { user } = useAppSelector(state => state.login);

  return (
    <>
      <Routes>
        {
          user === null && (
            <Route element={<MainLayoutUser />}>
              {/* Aca van a ir todos mis componentes junto a sus rutas */}
              {/* Todos aquellos que no necesiten una autorizacion para realizar una peticion */}
              <Route path="/" element={<LoginAndRegister />} />
            </Route>
          )
        }
        {
          user && (
            <Route element={<MainLayoutUser />}>
              {/* Aca van a ir todos mis componentes junto a sus rutas */}
              {/* Todos aquellos que no necesiten una autorizacion para realizar una peticion */}
              <Route path="/" element={<Welcome />} />
            </Route>
          )
        }
      </Routes>
    </>
  );
};

export default LayoutUser;
