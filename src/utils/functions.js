
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

// Add menu

export const editMenu = (val) => {
    const data = val;
    fetch(firebaseURL + 'menu/items.json', {
        method: 'POST',
        header: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)

    }).then(
        alert('added')
    );
}


// delete menu

export const deleteMenuItem = (val) => {


    fetch(firebaseURL + 'menu/items/' + val + '.json', {
        method: 'DELETE',
    }).then(
        console.log(val,'Deleted')
    );

}