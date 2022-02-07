import { Component } from 'react';
import Button from './Button';

const styles = {
    producto: {
        border: 'solid 1px #eee',
        boxShadow: '0 5px 5px 0 rgb(0, 0, 0, 0.1)',
        padding:'10px 15px',
        width: '20%',
        borderRadius: '5px'
    },
    img: {
        width: '100%',
        height: '240px'
    }
}
class Producto extends Component {
  render() {
    const { producto, agregarAlCarrito } = this.props;
    return (
    <div style={styles.producto}>
        <img style={styles.img} alt={producto.name} src={producto.img}/>
        <h3>{producto.name}</h3>
        <p>{producto.price}</p>
        <Button onClick={() => agregarAlCarrito(producto)}>
          Agregla al carrito
        </Button>
    </div> 
    );
  }
}

export default Producto;