import { Outlet, Link } from 'react-router-dom'

function ToolsLayout() {

    return (
      <>
    
       
          <ul>
          <li>
              <Link to="/">Volver al inicio</Link>
            </li>
            <li>
              <Link to="/herramientas/herramienta-1">Calcular Patrimonio Neto</Link>
            </li>
            <li>
              <Link to="/herramientas/herramienta-2">Herramienta 2</Link>
            </li>
            <li>
              <Link to="/herramientas/herramienta-3">Herramienta 3</Link>
            </li>
            
          </ul>
        

        <Outlet />
     
      </>
    )
  }
  
  export default ToolsLayout