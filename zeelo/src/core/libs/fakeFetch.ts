// not used, it's here to explain there's some other options from the json-server
// Will not create a test for this because is not used in the app itself. Please keep in mind.

interface ApiCall {
    method: string;
    endpoint: string;
    params: string; //The perfect way this params will create an uri for the api but for the example itself we will just keep simple to have 1 param the id.
    body: string;
}

export const fakeGetItem = async (apiCall: ApiCall, callback: Function) => {

    return new Promise((resolve) => {
        const { params } = apiCall;
        const item = fakeFetcherItemsDB.find(itemDB => itemDB.id === params); 
        setTimeout(function () {
            resolve(item);
        }, 250);
    }).then((values) => {
        callback(values);
        return values;
    })

}

const fakeFetcherItemsDB = [
    {
        id: '1',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1388184640l/7235533.jpg',
        title: 'The Way of Kings',
        author: "Brandon Sanderson",
        price: 19.99
    },
    {
        id: '2',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1388184640l/7235533.jpg',
        title: 'Mistborn: The Final Empire',
        author: "Brandon Sanderson",
        price: 19.99
    },
    {
        id: '3',
        image: 'https://cdn.businessinsider.es/sites/navi.axelspringer.es/public/styles/bi_570/public/media/image/2021/02/bi-2238511.jpg?itok=QqcsF0YZ',
        title: 'Rick Rolled',
        author: "Rick Astley",
        price: 999.99
    },

]