
const firebaseURL = import.meta.env.VITE_FIREBASE_DB_URL;

// Get menu items start
export const getMenu = async () => {
    const res = await fetch(firebaseURL + 'menu/items.json');
    const data = await res.json();

    const data2 = Object.entries(data).map(([key, value]) => ({
        id: key,
        ...value
    }))

    return data2;
}

// Add menu

export const addMenu = async (val) => {

    const data = val;

    try {
        const res = await fetch(firebaseURL + 'menu/items.json', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })

        if (!res.ok) {
            throw new Error('Having issue to add item!');
        }

        const result = await res.json();
        return result;

    } catch (error) {
        console.error(error);
        throw error;
    }
}

// Edit menu
export const editMenu = async (val) => {

    const data = val;

    try {
        const res = await fetch(firebaseURL + 'menu/items/' + data.id + '.json', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        if (!res.ok) {
            throw new Error('Failed to update menu item');
        }

        const result = await res.json();
        return result;

    } catch (error) {
        console.error(error);
        throw error;
    }
}


// delete menu

export const deleteMenuItem = async (val) => {

    try {
        const res = await fetch(firebaseURL + 'menu/items/' + val + '.json', {
            method: 'DELETE',
        })

        if (!res.ok) {
            console.error('Having issue to delete item!');
            return false;
        }
        return true;

    } catch (error) {
        console.error(error);
        return false;
    }
}


// Get menu items 
export const getEditMenu = async (val) => {
    try {

        const res = await fetch(firebaseURL + 'menu/items/' + val + '.json');
        if (!res.ok) {
            throw new Error('not able to get menu items')
        }
        const data = await res.json();
        return data;

    } catch (error) {
        console.error(error);
        return null;
    }
}


// get all booking details
export const getBookingDetails = async () => {

    try {

        const res = await fetch(firebaseURL + 'tableBook.json');

        if (!res.ok) {
            throw new Error('Not able to get table booking data')
        }

        const data = await res.json();

        const data2 = Object.entries(data).map(([key, value]) => ({
            id: key,
            ...value,
        }))

        return data2;

    } catch (error) {
        console.error(error);
        return null;
    }

}


// get single booking details
export const getSingleBookingDetails = async (val) => {

    try {

        const res = await fetch(firebaseURL + 'tableBook/' + val + '.json');

        if (!res.ok) {
            throw new Error('Not able to get table booking data')
        }

        const data = await res.json();

        return data;

    } catch (error) {
        console.error(error);
        return null;
    }

}


// add status in bookings 

export const addSingleBookingStatus = async (val) => {

    console.log(val);

    try {

        const res = await fetch(firebaseURL + 'tableBook/' + val?.idBox + '.json', {
            method: 'PATCH',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ status: val?.status })
        });

        if (!res.ok) {
            throw new Error('unable to add status');
        }

        return true

    } catch (error) {
        console.error(error)
        return false
    }

}


// Timestamp + Random Number (Recommended)

export const createOrderId = (val) => {
    return `${val}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 5)}`;
};


// get order start
export const getOrder = async () => {

    try {

        const res = await fetch(`${firebaseURL}order.json`);

        if (!res.ok) {
            throw new Error('unable to get order data');
        }

        const data = await res.json();

        const data2 = Object.entries(data).map(([key, value]) => ({
            id: key,
            ...value
        }))

        console.log(data2, 'orderorderorderorderorder');

        return data2;

    } catch (error) {
        console.error(error);
        return null;
    }

}


export const getSingleOrder = async (val) => {

    try {

        const res = await fetch(`${firebaseURL}order/${val}.json`);

        if (!res.ok) {
            throw new Error('unable to get single order data');
        }

        return await res.json();

    } catch (error) {
        console.log(error);
        return null;
    }

}