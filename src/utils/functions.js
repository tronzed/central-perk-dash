
import { resume } from "react-dom/server";
import { toast } from "react-toastify";
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


// Get menu items start
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