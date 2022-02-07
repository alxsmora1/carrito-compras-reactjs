import { Component } from 'react';
import Producto  from './Producto';

const  styles = {
    productos: {
        display: 'flex',
        displayDirection: 'row',
        justifyContent: 'space-between',
        gap: '10px 30px',
        padding: '10px',
        flexFlow: 'row wrap'
    }
}

class Productos extends Component {
    render()
    {   
        const { productos, agregarAlCarrito } = this.props;

        return (
            <div style={styles.productos}>
                {productos.map(producto => 
                    <Producto
                    agregarAlCarrito={agregarAlCarrito}
                    key={producto.name}
                    producto={producto}
                    />
                )}
            </div>
        )
    }
}

export default Productos;