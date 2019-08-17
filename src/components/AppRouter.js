import React from 'react';
import { Route } from 'react-router-dom';
import WelcomePage from './WelcomePage';
import CharacterList from './CharacterList';
import LocationList from './LocationsList';
import EpisodeList from './EpisodesList';

function AppRouter({name}){
    return(
        <div>
            <Route exact path='/' component={WelcomePage} />
            <Route path='/characters' render={(props) => <CharacterList {...props} name={name} />} />
            <Route path='/locations' render={(props) => <LocationList {...props} name={name} />} />
            <Route path='/episodes' render={(props) => <EpisodeList {...props} name={name} />} />
        </div>
    );
}

export default AppRouter;