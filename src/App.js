import logo from './logo.svg';
import './App.css';
import DojoComponent from './components/Dojo';
import TodolistComponent from './components/Todolist';

function App() {
  return (
    <div className="App">
      <h2>Hello from App</h2>
      <DojoComponent/>
      <TodolistComponent/>
    </div>
  );
}

export default App;
