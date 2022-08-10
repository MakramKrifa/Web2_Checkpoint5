import './App.css';
import Adresse from './Component/Profile/Address';
import FullName from './Component/Profile/FullName';
import ProfilePhoto from './Component/Profile/ProfilePhoto';

function App() {
  return (
    <div className="App">
      <div className="AppContainer">
        <ProfilePhoto/>
        <FullName/>
        <Adresse/>
      </div>
    </div>
  );
}

export default App;
