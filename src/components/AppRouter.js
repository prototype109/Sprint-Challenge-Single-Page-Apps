import React from 'react';
import { Route } from 'react-router-dom';
import WelcomePage from './WelcomePage';
import CharacterList from './CharacterList';
import LocationList from './LocationsList';

function AppRouter(){
    return(
        <div>
            <Route path='/' component={WelcomePage} />
            <Route path='/characters' component={CharacterList} />
            <Route path='/locations' component={LocationList} />
        </div>
    );
}

export default AppRouter;