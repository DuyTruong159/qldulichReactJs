// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './Footer';
import Headers from './Header';
import { Route, BrowserRouter, Switch, Link } from 'react-router-dom';
import Body from './Body';
import CustomerProtect from './CustomerProtect';
import Contact from './Contact';
import AboutUs from './AboutUs';
import Tour from './Tour';


export default function App() {
  return (
      <>
        <BrowserRouter>
        <Headers />
        <Switch>
          <Route exact path = "/" component={Body}/>
          <Route exact path = "/customer_protect" component={CustomerProtect}/>
          <Route exact path = "/contact" component={Contact}/>
          <Route exact path = "/about_us" component={AboutUs}/>
          <Route exact path = "/tour" component={Tour}/>
        </Switch>
        </BrowserRouter>
        <Footer />
      </>
  );
}

