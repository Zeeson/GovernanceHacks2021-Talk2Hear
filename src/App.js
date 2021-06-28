import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateProject from './components/projects/CreateProject'
import SpendingForm from './components/spending/SpendingForm'
import SpendingDetails from './components/spending/SpendingDetails'
import styled from 'styled-components'
import './App.css'
import desktopBg from './components/images/dBg.png'
import mobileBg from './components/images/mBg.png'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
            <Pic>
              <source media="(max-width: 650px)" srcset={mobileBg} />
              <source media="(min-width: 650px)" srcset={desktopBg} />
              <Img src={desktopBg} alt="" />
            </Pic>
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/project/:id' component={ProjectDetails} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <Route path='/create' component={CreateProject} />
          <Route path='/spending/form' component={SpendingForm} />
          <Route path='/spending/:id' component={SpendingDetails} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

const Pic = styled.picture`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100vh;
object-fit: cover;
z-index: -5;

`;
const Img = styled.img`
object-fit: cover;
width: 100%;
height: 100%;

@media (max-width: 680px) {
  min-height: 100vh;
}


`;

export default App;
