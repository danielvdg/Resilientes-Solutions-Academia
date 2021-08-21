import React, { Component } from 'react';
import Content from '../../Components/Content';

class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <section>
                <Content/>
            </section>
         );
    }
}
 
export default Homepage;