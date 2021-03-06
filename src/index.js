import 'bootstrap/dist/css/bootstrap.min.css'
import SearchExample from './_examples_/search-example/SearchExample'
import Layout from './layout-components/Layout'
import Header from './layout-components/header/Header'
import Navbar from './layout-components/navbar/Navbar'
import Footer from './layout-components/footer/Footer'
import Sidebar from './layout-components/sidebar/Sidebar'

//FontAwesome//
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStroopwafel, faAngleRight, faAngleLeft, faUser, faLink, faUnlink } from '@fortawesome/free-solid-svg-icons'
library.add(faStroopwafel, faAngleRight, faAngleLeft, faUser, faLink, faUnlink)
//FontAwesome//

export {
  SearchExample,
  Layout,
  Header,
  Navbar,
  Footer,
  Sidebar
}
