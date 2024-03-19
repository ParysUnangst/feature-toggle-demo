import logo from './logo.svg';
// import the feature toggle component from featuretoggle.js
import FeatureToggle from './FeatureToggle';
import './App.css';

// define the app funtion
// rednder the featureToggle component multiple times with different props
function App() {
  return (
    <div className="App">
      {/* Feature A being enabled */}
      <FeatureToggle isEnabled={true} featureName="Feature A" />
      {/* Feature B being disabled */}
      <FeatureToggle isEnabled={false} featureName="Feature B" />
      {/* Feature C being enabled */}
      <FeatureToggle isEnabled={true} featureName="Feature C" />
    </div>
  );
}

// export the app component for use in other files
export default App;
