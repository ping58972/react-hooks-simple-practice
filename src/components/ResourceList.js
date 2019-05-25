import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ResourceList = ({resource}) => {
    const [resouss, setResouss] = useState([]);
  const  fetchResource = async (resource) => {
       const res = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
       setResouss(res.data);
    }
    
    useEffect(()=> {
        fetchResource(resource);
    }, [resource]);
    
        return (
            <ul>
                {resouss.map(record=> <li key={record.id}>{record.title}</li> )}
            </ul>
        );
    
}
// class ResourceList extends Component {
//     state = {resou: "posts", resources: []}
//   async  componentDidMount() {
//        const res = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);
//        this.setState({resources: res.data});
//     }
    
//     async componentDidUpdate(prevProps) {
//         if(prevProps.resource !== this.props.resource){
//             const res = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);
//        this.setState({resources: res.data});
//         }
//     }
//     render() {
//         return (
//             <div>
//                 {this.state.resources.length}
//             </div>
//         );
//     }
// }

export default ResourceList;
