import Header from '../components/Header';
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Content4 from '../components/Content4';
const FindTheService = () => {
    return(
        <>
        <Header/>
        <Banner/>
        <Navbar/>
        <div className='bg-gray-400 h-6'></div>
        <Content4/>
        <div className='bg-gray-400'>
            <Footer/>
        </div>
        
        </>
    )
};

export default FindTheService;