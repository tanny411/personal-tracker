import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavbar from './components/AppNavbar';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <AppNavbar/>
      <TodoList/>
    </div>
  );
}

export default App;
