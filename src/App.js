import './App.css';
import SideBar from './components/SideBar';
import Header from './components/Header';
import MainPage from './components/MainPage';
import Chart from './components/Chart';
import Artist from './components/Artist';

function App() {
  return (
    <div className='flex w-full'>
      <SideBar/>
      <div className='w-full'>  
      <Header/>
      <MainPage/>
      <Chart/>
      <Artist/>
      </div>
    </div>
  );
}

export default App;

  /*
      
  */