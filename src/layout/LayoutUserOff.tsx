import { Routes, Route, Outlet } from "react-router-dom";
import Login from "../page/Login/LoginAndRegister";
import Welcome from "../page/Welcome/Welcome";

const MainLayoutUserOff = () => {
  return (
    <div>
      {/* Aqui iria el componente que se mantenderia fijo */}
      <Outlet />
    </div>
  );
};

const LayoutUserOff = () => {
  return (
    <>
      <Routes>
        <Route element={<MainLayoutUserOff />}>
          {/* Aca van a ir todos mis componentes junto a sus rutas */}
          {/* Todos aquellos que no necesiten una autorizacion para realizar una peticion */}
          <Route path="/" element={<Login />}/>
        </Route>
      </Routes>
    </>
  );
};

export default LayoutUserOff;
