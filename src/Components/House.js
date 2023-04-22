import React from 'react'
import { NewRoomForm } from './NewRoomForm';
import { housesApi } from '../Rest/HousesAPI';


export const House = ({house, updateHouse}) => {

    const deleteRoom = (roomId) => {
        const updatedHouse = {
            ...house,
            rooms: house.rooms.filter((x) => x._id !== roomId)
        };
        updateHouse(updatedHouse);
    }

    const addNewRoom = (room) =>  updateHouse({...house, rooms: [...house.rooms, room]});

    const rooms = () => (
        <ul>
            {house.rooms.map((room, index) => (
                <li key={index}>
                    <label>{`${room.name} Area: ${room.area}`}</label>
                    <button onClick={(e) => deleteRoom(room._id)}>Delete Room</button>
                </li>
            ))}
        </ul>
    );
    
    const deleteHouse = async (house) => {
        await housesApi.remove(house);
        updateHouse();
    };  


    return (
        <>
        <div>
            <h1>{house.name}</h1>
            {
                rooms({ rooms, houseId: house._id, deleteRoom})
            }
          <button onClick={(e) => deleteHouse(house)}>Delete House</button>
            <NewRoomForm addNewRoom={addNewRoom} />
        </div></>
    );
    
};
