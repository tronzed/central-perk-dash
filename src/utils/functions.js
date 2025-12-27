
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

export const addMenu = (val) => {
    const data = val;
    fetch(firebaseURL + 'menu/items.json', {
        method: 'POST',
        header: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)

    }).then(
        alert('added')
    );
}

// Edit menu
export const editMenu = (val) => {
    const data = val;
    fetch(firebaseURL + 'menu/items/' + data.id + '.json', {
        method: 'PUT',
        header: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)

    }).then(
        console.log('added')
    );
}


// delete menu

export const deleteMenuItem = (val) => {
    fetch(firebaseURL + 'menu/items/' + val + '.json', {
        method: 'DELETE',
    }).then(
        console.log(val, 'Deleted')
    );
}


// Get menu items start
export const getEditMenu = async (val) => {
    const res = await fetch(firebaseURL + 'menu/items/' + val + '.json');
    const data = await res.json();
    return data;
}