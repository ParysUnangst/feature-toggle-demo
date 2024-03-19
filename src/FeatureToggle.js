// import the react library
import React from 'react';

// define the function component named FeatureToggle
// Accepts props : isEnabled (boolean) and featureName (string)
const FeatureToggle = ({ isEnabled, featureName }) => {
  return (
    <div>
    {/* conditonal(boolean) rendering */}
    {/* if isEnabled is true, render featureName */}
    {/* if isEnabled is false, render "Feature [FeatureName] is disabled */}
      {isEnabled ? (
        <p>{featureName}</p>
      ) : (
        <p>{`Feature ${featureName} is disabled`}</p>
      )}
    </div>
  );
};

// export the featuretoggle component for use in other files
export default FeatureToggle;
