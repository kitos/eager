import React from 'react';
import AppBar from 'material-ui/lib/app-bar';

const AppComponent = ({children}) => (
    <div>
        <AppBar title="Eager" showMenuIconButton={false}/>
        {children}
    </div>
);

export default AppComponent;