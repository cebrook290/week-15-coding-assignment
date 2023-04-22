import React, { useState } from 'react'
import { housesApi } from '../Rest/HousesAPI';

export default function NewHouseForm(props) {
    const [name, setName] = useState('');
    
    const onSubmit = (e) => {
        e.preventDefault();
        if (name) {
            props.addHouse({name})
            setName('');
        } else {
            console.log('invalid input')
        }
    };

  return (
    <>
    <div>
      <form onSubmit={onSubmit}> 
      <input 
        className='form-control' 
        type='text'  
        placeholder='Enter New House'
        onChange={(e) => setName (e.target.value)}
        value={name}>
        </input><br/>  
      <button className='btn btn-secondary form-control' type='submit'>Create</button> 
    </form>
    </div><br/> </>
  )
}
