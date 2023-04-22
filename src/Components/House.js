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
        <>
        <table className='table'>
            <thead>
                <tr>
                    <th scope='col'>Name</th>
                    <th scope='col'>Area</th>
                    <th scope='col'>Action</th>
                </tr>
            </thead>
            {house.rooms.map((room, index) => (
            <tbody>
                <tr>
                    <td>{`${room.name}`}</td>
                    <td>{`${room.area}`}</td>
                    <td><button className='btn btn-outline-danger btn-sm' id='btn' onClick={(e) => deleteRoom(room._id)}>Delete Room</button></td>
                </tr>
            </tbody>))}
        </table>
        </>
    );
    
    const deleteHouse = async (house) => {
        await housesApi.remove(house);
        updateHouse();
    };  


    return (
        <>
        <div className='card'>
            <div className='card-header'>
            <h3>{house.name}</h3>
            <button className='btn btn-danger btn-sm' onClick={(e) => deleteHouse(house)}>Delete</button>
            </div>
            <div className='card-body'>
            <NewRoomForm addNewRoom={addNewRoom} />
            
            {
                rooms({ rooms, houseId: house._id, deleteRoom})
            }
          
            
        </div></div><br/> </>
    );
    
};
