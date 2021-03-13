import React, {Component} from "react";
import RealState from "./RealState";


const api_url = "http://localhost:3001/api/v1/real_state_entities"

class RealStateList extends Component{
    constructor(props) {
        super(props)
        // List of Real States => Array of Real States responded by the API
        this.state = {
            items: []
        }
    }

    componentDidMount(){
        this.getTasks();
    }

    getTasks(){
        fetch(api_url)
        .then(response => response.json())
        .then(response_items => {
            this.setState({
                items: response_items
            })
        }); 
    }

    render() {
        return(
            <div>
                <RealState />
                <ul id="real_state_list">
                    {this.state.items.map((item) => (
                        <li key={item.id}>{item.name}, {item.real_state_type}, {item.street}, {item.external_number},
                        Rooms:{item.rooms},Bathrooms:{item.bathrooms}
                        </li>
                    ))}
                    
                </ul>
            </div>
        )
    }
}

export default RealStateList;