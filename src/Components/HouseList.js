import React from 'react';
import { House } from './House';
import { housesApi } from '../Rest/HousesAPI';
import NewHouseForm from './NewHouseForm';


export default class HouseList extends React.Component {
    state = {
        houses: [],
    };

    componentDidMount() {
        this.fetchHouses();
    };

    fetchHouses = async () => {
        const houses = await housesApi.get();
        this.setState({ houses });
    };

    updateHouse = async (updatedHouse) => {
        await housesApi.put(updatedHouse);
        this.fetchHouses();
    }; 

    addHouse = (house) => {
        housesApi.post(house);
        this.fetchHouses();
    };

    render() {
        return (
            <>
            <div>
                <NewHouseForm
                    addHouse={this.addHouse}/>
                <div className='house-list'>
                    {this.state.houses.map((house) => (
                        <House
                            house={house}
                            houses={this.houses}
                            key={house._id}
                            updateHouse={this.updateHouse}
                             />
                    ))}
                </div><br/>
            </div>
            </>
        )   
    }
}
