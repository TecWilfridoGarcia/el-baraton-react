import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import { MobileNav } from './styles'
import { Dropdown, Menu } from 'semantic-ui-react'

const Nav = ({ categories }) => {
  console.log('from nav component', categories)
  return (

    <div>
      
      <nav className=" purple darken-4 pinned main-z-index">
        <div className="nav-wrapper">
          <a href="#!" className="brand-logo">El Baratón</a>
          <ul className="right hide-on-med-and-down">
            {categories.map(categorie => (
              <li key={categorie.id} className='padding-helper'>
                <Menu horizontal className="purple darken-4">
                  <Dropdown item text={categorie.name} className="purple darken-4">
                    <Dropdown.Menu className="purple darken-4">
                      {categorie.sublevels.map(subCategorie => (
                        <Dropdown.Item className="purple darken-4" >{subCategorie.name}</Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </Menu>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <MobileNav>
        {categories.map(categorie => (
          <li key={categorie.id}><a href="#">{categorie.name}</a></li>
        ))}
      </MobileNav>
    </div>
  )
}

export default Nav