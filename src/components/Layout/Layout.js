import React from 'react';
import classes from './Layout.css'

const layout=(props) =>{
    return <div>
        <div>Toolbar, Sidedrawer, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </div>;
}

export default layout;