import { Component } from "react";
import Productos from "./components/Productos";
import Layout from "./components/Layout";
import Title from "./components/Title";
import Navbar from "./components/Navbar";

class App extends Component {
  state = {
    productos: [
      { name: "Tomate", price: 27, img: "/media/productos/tomate.jpg" },
      { name: "Cebolla", price: 27, img: "/media/productos/cebolla.jpg" },
      { name: "Papa", price: 27, img: "/media/productos/papa.jpg" },
      { name: "Zanahoria", price: 27, img: "/media/productos/zanahoria.png" },
      { name: "Limon", price: 27, img: "/media/productos/limon.jpg" },
      { name: "Chicharos", price: 27, img: "/media/productos/arbejas.jpg" },
      { name: "Lechuga", price: 27, img: "/media/productos/lechuga.jpg" },
    ],
  };

  render() {
    return (
      <div>
        <Navbar />
        <Layout>
          <Title />
          <Productos
            agregarAlCarrito={() => console.log("No hace nada")}
            productos={this.state.productos}
          />
        </Layout>
      </div>
    );
  }
}

export default App;
