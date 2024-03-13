import { Route, Routes } from 'react-router-dom';
import Layout from './components/UI/Layout/Layout';
import asyncComponent from './hoc/asyncComponent/asyncComponent';

const AsyncAboutAGPPage = asyncComponent(() => import('./components/Content/About/About'));
const AsyncAboutSwamijiPage = asyncComponent(() => import('./components/Content/About/AboutSwamiji/AboutSwamiji'));
const AsyncAboutGMPPage = asyncComponent(() => import('./components/Content/About/AboutGMP/AboutGMP'));
const AsyncAboutDSYPage = asyncComponent(() => import('./components/Content/About/AboutDSY/AboutDSY'));
const Async404Page = asyncComponent(() => import('./components/UI/PageNotFound/PageNotFound'));

const App = () => {
  const routes = (
    <Routes>
      <Route path="/" exact element={<AsyncAboutAGPPage />} />
      <Route path="/about-swamiji/" element={<AsyncAboutSwamijiPage />} />
      <Route path="/about-gayathri-maha-purashcharana/" element={<AsyncAboutGMPPage />} />
      <Route path="/about-deergha-sathra-yagam/" element={<AsyncAboutDSYPage />} />
      <Route path="/our-privacy-policy/" />
      <Route path="/our-terms-and-conditions/" />
      <Route element={<Async404Page />} />
    </Routes>
  );

  return (
    <Layout>
      {routes}
    </Layout>
  );
};

export default App;