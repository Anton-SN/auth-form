import AuthForm from './Form/Auth';
import logo from '../images/logo.svg';
import './App.css';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <AuthForm />
    </header>
  </div>
);

export default App;
