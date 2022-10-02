import { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Navigation } from './routes/navigation/Navigation';
import { Home } from './routes/home/Home';
import "bootstrap/dist/css/bootstrap.min.css"
import { Quienes } from './routes/quienes/Quienes'
function App() {

 /*  const [] */
  return (
      <div>
          <Routes>
              <Route path='/' element={<Navigation />}> {/* Ruta para captar errores */}
                  <Route index element={<Home />}/>
                  <Route path='quienes' element={<Quienes />}/>
                  <Route path='menu' element={''}/>
                  <Route path='reserva' element={''}/>
              </Route>
          </Routes>
      </div>
  );
}

export default App;
