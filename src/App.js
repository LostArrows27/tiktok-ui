import '~/component/GlobalStyle/GlobalStyles.scss';
import { BrowserRouter as Router, Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import { publicRoutes } from './routes';
import { DefaultLayout } from '~/layouts';
import { Fragment } from 'react';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((a, b) => {
            const Page = a.component;
            let Layout = DefaultLayout;
            if (a.layout) Layout = a.layout; // same as a.layout !== undefined, which mean, dont have a.layout
            else if (a.layout === null) Layout = Fragment;
            // if a route not have common point to another page, it will have null layout
            // if a route have common point, it will have DefaultLayout (Header, Sidebar)
            return (
              <Route
                key={b}
                path={a.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              ></Route>
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
