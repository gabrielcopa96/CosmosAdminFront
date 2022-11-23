import { useEffect } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import LoginAndRegister from "../page/Login/LoginAndRegister";
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
          <Route path="/" element={<LoginAndRegister />}/>
          <Route path="/home" element={<Welcome />}/>
        </Route>
      </Routes>
    </>
  );
};

export default LayoutUserOff;
