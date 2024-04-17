import './App.css';
import { Usercontext } from './usercontext';
import Card from './components/card';

function App() {
  return (
    <Usercontext.Provider value={{ name: 'John', age: 25}}>
      <h4>Example Application for using context</h4>
      <Card/>
    </Usercontext.Provider>
  );
}
export default App;
