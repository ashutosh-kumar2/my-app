import Home from './pages/Home';
import FindTheService from './pages/FindTheService';
import DisabilityInfo from './pages/DisabilityInfo';
import EssentialDocs from './pages/EssentialDocs';
import Resources from './pages/Resources';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/FindTheService" element={<FindTheService/>}/>
      <Route path="/DisabilityInfo" element={<DisabilityInfo/>}/>
      <Route path="/EssentialDocs" element={<EssentialDocs/>}/>
      <Route path="/Resources" element={<Resources/>}/>
    </Routes>
    </BrowserRouter>
  );
}
export default App;