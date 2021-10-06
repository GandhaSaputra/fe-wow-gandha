// import { Routes } from "../config/config";
import {useContext, useEffect} from 'react';
import {Switch, Route, useHistory} from 'react-router-dom';
// import { Home, LandingPage, Profile, Subscribe, NotFound, DetailBook, ReadBook, Admin, AddBook } from './pages';

import LandingPage from './LandingPage/LandingPage';
import Home from './Home/Home';
import Admin from './Admin/Admin';
import Profile from './Profile/Profile';
import Subscribe from './Subscribe/Subscribe';
import NotFound from './NotFound/NotFound';
import DetailBook from './DetailBook/DetailBook';
import ReadBook from './ReadBook/ReadBook';
import AddBook from './AddBook/AddBook';

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import { UserContext } from '../config/UserContext/UserContext';

import {API, setAuthToken}  from '../config/api/api';

if (localStorage.token) {
    setAuthToken(localStorage.token);
}

function App() {
  let history = useHistory();
  const [state, dispatch] = useContext(UserContext);

  useEffect(() => {
    if (!state.isLogin) {
      history.push("/");
    } else {
      if (state.user.role === "admin") {
        history.push("/admin");
      } else if (state.user.role === "customer") {
        history.push("/home");
      }
    }
  }, [state]);

  const checkUser = async () => {
    const response = await API.get('/check-auth');
    if(response.status === 404) {
      return dispatch({
        type: "AUTH_ERROR",
      });
    }

    let payload = response.data.data.user;
    payload.token = localStorage.token;
    dispatch({
      type: "USER_SUCCESS",
      payload: payload
    })
  }

  useEffect(() => {
    checkUser();
  }, [])
  

  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/home" component={Home}/>
      <Route exact path="/profile" component={Profile}/>
      <Route exact path="/subscribe" component={Subscribe}/>
      <Route exact path="/detail-book/:bookID" component={DetailBook}/>
      <Route exact path="/read-book" component={ReadBook}/>
      <Route exact path="/admin" component={Admin}/>
      <Route exact path="/add-book" component={AddBook}/>
      <Route exact path="*" component={NotFound}/>
    </Switch>
  );
}

export default App;
