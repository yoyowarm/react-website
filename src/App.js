import Header from './components/Header'
import Menu from './components/Menu'
import ProductList from './components/ProductList'
import VideoSection from './components/VideoSection'
import ArticleList from './components/ArticleList'
import PartnerList from './components/PartnerList'
import CompanyProfile from './components/CompanyProfile'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import logo from './assets/images/dlbs-logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='flex justify-center items-center pl-32 mb-32'>
        <Menu color="blue" class="!mt-40" left={<img className='w-24 mr-32' src={logo} alt="logo" />} />
      </div>
      <ProductList />
      <VideoSection />
      <ArticleList />
      <PartnerList />
      <CompanyProfile />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
