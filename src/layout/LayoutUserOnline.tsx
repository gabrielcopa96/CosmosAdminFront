import { Routes, Route, Outlet } from 'react-router-dom';
import SideBar from '../components/SideBar/SideBar';


const MainLayoutUserOn = () => {
    return (
      <div>
        {/* Aqui iria el componente que se mantenderia fijo */}
        <Outlet />
      </div>
    );
  };

const LayoutUserOnline = () => {
  return (
    <>
        <Routes>
            <Route element={<MainLayoutUserOn />}>
                {/* Aca van a ir todos mis componentes junto a sus rutas */}
                <Route path="/" element={<SideBar />}/>
            </Route>
        </Routes>
    </>
  )
}

export default LayoutUserOnline