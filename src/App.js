import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './components/UI/Layout/Layout';
import cmp from './helpers/navHelper';

class App extends Component {
   render() {
    let routes = (
         <Switch>
            <Route path="/" exact component={cmp.home} />  
            <Route path="/about-swamiji/" component={cmp.aboutSwamiji} />
            <Route path="/about-gayathri-maha-purashcharana/" component={cmp.gmp} />
            <Route path="/about-deergha-sathra-yagam/" component={cmp.dsy} />
            <Route path="/our-privacy-policy/" component={cmp.privacyPolicy} />
            <Route path="/our-terms-and-conditions/" component={cmp.tsAndCs} />
            <Route path="/contact-us/" component={cmp.contact} />
            <Route component={cmp.notFound} />
         </Switch>
    );

    return (
        <Layout>
         {routes}
        </Layout>
    );
  };
}

export default App;