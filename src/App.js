import { Component } from "react";
import Productos from "./components/Productos";
import Layout from "./components/Layout";
import Title from "./components/Title";
import Navbar from "./components/Navbar";

class App extends Component {
  state = {
    productos: [
      { name: "Tomate", price: 27, img: "/carrito-compras-reactjs/media/productos/tomate.jpg" },
      { name: "Cebolla", price: 45, img: "/carrito-compras-reactjs/media/productos/cebolla.jpg" },
      { name: "Papa", price: 14, img: "/carrito-compras-reactjs/media/productos/papa.jpg" },
      { name: "Zanahoria", price: 12, img: "/carrito-compras-reactjs/media/productos/zanahoria.png" },
      { name: "Limon", price: 60, img: "/carrito-compras-reactjs/media/productos/limon.jpg" },
      { name: "Chicharos", price: 34, img: "/carrito-compras-reactjs/media/productos/arbejas.jpg" },
      { name: "Lechuga", price: 18, img: "/carrito-compras-reactjs/media/productos/lechuga.jpg" },
    ],
    carrito: [],
    esCarritoVisible: false,
  };

  agregarAlCarrito = (producto) => {
    const { carrito } = this.state;

    if (carrito.find((x) => x.name === producto.name)) {
      const newCarrito = carrito.map((x) =>
        x.name === producto.name
          ? {
              ...x,
              cantidad: x.cantidad + 1,
            }
          : x
      );
      return this.setState({
        carrito: newCarrito,
      });
    }

    return this.setState({
      carrito: this.state.carrito.concat({
        ...producto,
        cantidad: 1,
      }),
    });
  };

  mostrarCarrito = () => {
    if (!this.state.carrito.length) {
      return;
    }
    this.setState({ esCarritoVisible: !this.state.esCarritoVisible });
    console.log(this.state.esCarritoVisible);
  };

  render() {
    const { esCarritoVisible } = this.state;
    return (
      <div>
        <Navbar
          carrito={this.state.carrito}
          esCarritoVisible={esCarritoVisible}
          mostrarCarrito={this.mostrarCarrito}
        />
        <Layout>
          <Title />
          <Productos
            agregarAlCarrito={this.agregarAlCarrito}
            productos={this.state.productos}
          />
        </Layout>
      </div>
    );
  }
}

export default App;
