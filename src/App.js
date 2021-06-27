import { Route, Switch } from 'react-router-dom';
import AllMeetups from "./pages/AllMeetups";
import NewMeetup from "./pages/NewMeetup";
import Favorite from "./pages/Favorite";
import MainNavigation from "./components/MainNavigation";

function App() {
  return (
    <div>
      <MainNavigation />
      <Switch>
        <Route path='/'>
          <AllMeetups />
        </Route>
        <Route path='/new-meetup'>
          <NewMeetup />
        </Route>
        <Route path='favorite'>
          <Favorite />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
