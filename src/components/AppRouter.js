import React from 'react';
import { Route } from 'react-router-dom';
import WelcomePage from './WelcomePage';
import CharacterList from './CharacterList';

function AppRouter(){
    return(
        <div>
            <Route path='/' component={WelcomePage} />
            <Route path='/characters' component={CharacterList} />
        </div>
    );
}

export default AppRouter;