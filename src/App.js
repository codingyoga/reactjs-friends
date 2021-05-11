import './App.css';
import Tasks from './Tasks';
import MetaTags from 'react-meta-tags';


function App() {
  return (
    <div className="App">
      <div class="wrapper">
          <MetaTags>
            <title>React Friends</title>
            <meta id="meta-description" name="description" content="Fun and Good way to learn Reactjs , HandsOn training with examples." />
            <meta id="og-title" property="og:title" content="MyApp" />
            {/* <meta id="og-image" property="og:image" content="/assets/beer.gif" /> */}
          </MetaTags>
      </div>
      <Tasks />
    </div>
  );
}

export default App;
