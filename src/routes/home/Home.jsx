import { Banner } from "../../components/banner/Banner"
import { Outlet } from 'react-router-dom'
import { Formulario } from "../../components/Formulario"
export const Home = () => {
  return (
    <div>
        <Banner />
        <Formulario />
        <Outlet />
    </div>
  )
}
