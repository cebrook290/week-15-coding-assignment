import $ from 'jquery';

const HOUSES_ENDPOINT = 'https://ancient-taiga-31359.herokuapp.com/api/houses';

class HousesApi {
    get = async () => {
        try {
            const resp = await fetch(HOUSES_ENDPOINT);
            const data = await resp.json();
            return data;   
        } catch(e) {
            console.log('Oops, looks like get Houses had an issue.', e);
        } 
    }

    post = (house) => {
        return $.post(HOUSES_ENDPOINT, house)
    };
    

    put = async (house) => {
        try {
            const resp = await fetch(`${HOUSES_ENDPOINT}/${house._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(house)
            });
            return await resp.json();
        } catch(e) {
            console.log('Oops, looks like updating houses had an issue.', e)
        }
    }

    remove = async (house) => {
        try {
            const resp = await fetch(`${HOUSES_ENDPOINT}/${house._id}`, {
                method: 'DELETE'
            });
            return await resp.json();
        } catch(e) {
            console.log('Oh dear, we cannot delete this house', e)
        }
    }
}

export const housesApi = new HousesApi();
