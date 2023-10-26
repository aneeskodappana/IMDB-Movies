import logo from './images/logo.png'
import searchIcon from './images/search-icon.png'

import './App.css';

function App() {
  return (
    <div className='header'>
     <div className="container">
      <img src={logo} alt="" height={30} />
      <div className='search-wrapper'>
          <img src={searchIcon} alt="" height={18} />
          <input type="text" placeholder='Find Movies, Series' />
      </div>

      <div>
        <button className='header-btn register-btn'>Register</button>
        <button className='header-btn'>Sign In</button>
      </div>
     </div>
    </div>
  );
}

export default App;
