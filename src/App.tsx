import React from 'react';
import ListContainer from './ListContainer';
import FirstButton from './buttons/FirstButton';
import SecondButton from './buttons/SecondButton';
import ThirdButton from './buttons/ThirdButton';
import FourthButton from './buttons/FourthButton';
import Loading from './Loading';
import { PermissionProvider } from './PermissionContext';

class App extends React.Component {
  render() {
    return (
      <div className="container mt-5">
            <div className="mb-4">
                <Loading />
            </div>

            <div className="mb-4">
                <ListContainer />
            </div>

            <PermissionProvider>
                <div className="d-flex justify-content-around mt-4">
                    <FirstButton className="btn btn-primary" />
                    <SecondButton className="btn btn-secondary" />
                    <ThirdButton className="btn btn-success" />
                    <FourthButton className="btn btn-warning" />
                </div>
            </PermissionProvider>
        </div>
    )
  }
}

export default App;