import React, {Component} from 'react';
import NavContainer from '../src/containers/NavContainer'
import VisibleProductList from '../src/containers/VisibleProductList'
import Banner from '../src/components/Banner'
import ShoppingCartContainer from '../src/containers/ShoppingCartContainer'
import './App.css'

class App extends Component {
  render() {
    return(
      <div className="App">
        <NavContainer/>
        <Banner />
        <section className="container-fluid">
          <div className="row">
            <div className="col s12 m9 l9 order-products">
              <VisibleProductList />
            </div>
            <aside className="col s12 m3 l3 order-cart">
              <ShoppingCartContainer />
            </aside>
          </div>
        </section>
      </div>
    )
  }
}

export default App;
