import './App.css';
import CreateLocation from './pages/CreateLocation';
import { useSelector } from 'react-redux';

function App() {
  const { field_config } = useSelector((state) => state?.getData?.getFieldConfig)
  return (
    <div className="App">
      <CreateLocation field_config={field_config}/>
    </div>
  );
}

export default App;
