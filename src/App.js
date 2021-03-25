import './App.css';
import NavigationBar from './components/NavigationBar';
import FilterList from './components/FilterList';

function App() {
  const cities = ['Kaunas', 'Vilnius', 'Prienai'];
  const experiences = ['kava', 'maistas', 'istorija', 'baugu'];

  return (
    <div className="app">
      <NavigationBar />
      <div className="content">
        <FilterList title={`rinkis miestą:`} filters={cities}/>
        <FilterList title="rinkis patirtį:" filters={experiences}/>
      </div>
    </div>
  );
}

export default App;
