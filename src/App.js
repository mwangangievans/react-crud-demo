import './App.css';

import { Route , Switch } from 'react-router-dom'
import AllMeetup from './pages/AllMeetup'
import NewMeetup from './pages/NewMeetup'
import Favorites from './pages/Favorites';
import Layout from './components/layout/layout'

function App() {
  return (
    <div>
     <Layout>
     <Switch>
      <Route path='/' exact>
        <AllMeetup />
      </Route>
      <Route path='/new-meetup'>
        <NewMeetup />

      </Route>
      <Route path='/favorites'>
      <Favorites />
      </Route>

      </Switch>
     </Layout>
   
   
    </div>
   
  );
}

export default App;
