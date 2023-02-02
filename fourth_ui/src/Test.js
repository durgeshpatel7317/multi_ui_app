import React from 'react';
import axios from 'axios';

class Test extends React.Component {
    constructor(props) {
        super(props);
        this.getDataFromServer = this.getDataFromServer.bind(this);
        this.postDataToServer = this.postDataToServer.bind(this);
    }

    render() {
        return (
            <>
                <div>
                    <button style={{marginRight: '20px'}} onClick={this.getDataFromServer}>Get data from server</button>
                    <button onClick={this.postDataToServer}>Post data to server</button>
                </div>
            </>
        )
    }

    getDataFromServer() {
        axios.get('/api-service/api/resources')
            .then(response => {
                console.log('value of response is ', response.data);
            });
    }

    postDataToServer() {
        const reqBody = {
            name: 'React',
            address: 'India'
        };
        axios.post('/api-service/api/resources', reqBody)
            .then(response => {
                console.log('value of response is ', response.data);
            });
    }
}

export default Test;