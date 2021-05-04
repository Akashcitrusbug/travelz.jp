import React from 'react';
import RegistrationPage from './pages/registration';
import { Provider } from 'react-redux'
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <RegistrationPage />
      </div>
    </Provider>
  );
}

export default App;
