import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout.jsx';
import PrivateRoute from '../PrivateRoute/PrivateRoute.jsx';
import RestrictedRoute from '../RestrictedRoute/RestrictedRoute.jsx';
import Home from '../../pages/Home/Home.jsx';
import Registration from '../../pages/Registration/Registration.jsx';
import Login from '../../pages/Login/Login.jsx';
import Contacts from '../../pages/Contacts/Contacts.jsx';
import { refreshUser } from '../../redux/auth/operations.js';
import { selectIsRefreshing } from '../../redux/auth/selectors.js';
import css from './App.module.css';

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <p className={css.placeholder}>Refreshing user...</p>
  ) : (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<Registration />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
      </Routes>
    </Layout>
  );
}
