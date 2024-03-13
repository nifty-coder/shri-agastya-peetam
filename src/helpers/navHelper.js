import asyncComponent from '../hoc/asyncComponent/asyncComponent';

const asyncAboutAGPPage = asyncComponent(() => import ('../components/Content/About/About'));
const asyncAboutSwamijiPage = asyncComponent(() => import ('../components/Content/About/AboutSwamiji/AboutSwamiji'));
const asyncAboutGMPPage = asyncComponent(() => import ('../components/Content/About/AboutGMP/AboutGMP'));
const asyncAboutDSYPage = asyncComponent(() => import ('../components/Content/About/AboutDSY/AboutDSY'));
const async404Page = asyncComponent(() => import ('../components/UI/PageNotFound/PageNotFound'));

const cmp = {
    home: asyncAboutAGPPage,
    aboutSwamiji: asyncAboutSwamijiPage,
    gmp: asyncAboutGMPPage,
    dsy: asyncAboutDSYPage,
    notFound: async404Page
};

export default cmp;