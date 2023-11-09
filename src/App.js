import './App.css';
import SideBar from './components/SideBar';
import Header from './components/Header';
import MainPage from './components/MainPage';
import Chart from './components/Chart';

function App() {
  return (
    <div className='flex'>
      <SideBar/>
      <div className='w-full'>  
      <Header/>
      <MainPage/>
      <Chart/>
      </div>
   
    </div>
  );
}

export default App;

