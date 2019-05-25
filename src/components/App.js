import React, { useState } from 'react';
import ResourceList from './ResourceList';

const App = () => {
    const [resourcess, oosetResource] = useState('posts')
        return (
            <div className="ui container">
                <div>
                    <button onClick={()=> oosetResource('posts')} className="ui button primary">
                        Posts
                    </button>
                    <button onClick={()=> oosetResource('todos')} className="ui button secondary">
                        Todos
                    </button>
                </div>
                <ResourceList resource ={resourcess}/>
            </div>
        );
    
}

export default App;
