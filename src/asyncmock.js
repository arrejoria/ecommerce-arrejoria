const products = [

    {
        category: 'games',
        id: '1',
        image: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/578/485/products/bf1-6cfb27dbc4cda3ab2d16537503855228-640-0.jpg',
        name: 'Street Fighter - Blanka',
        description: 'Ab enim voluptas rem quas nihil ut repellat impedit sed doloribus perspiciatis qui nesciunt cupiditate et magni autem ut quaerat voluptatem. Est aliquam dolor et facilis quibusdam ut provident rerum non cumque soluta.',
        price: '2100',
        stock: '5'
    }, {
        category: 'games',
        id: '2',
        image: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/578/485/products/mk1-81ebfc1335bee672ce16264564581357-640-0.jpg',
        name: 'Mario Kart 1992',
        description: 'Ab enim voluptas rem quas nihil ut repellat impedit sed doloribus perspiciatis qui nesciunt cupiditate et magni autem ut quaerat voluptatem. Est aliquam dolor et facilis quibusdam ut provident rerum non cumque soluta.',
        price: '2000',
        stock: '3'
    }, {
        category: 'games',
        id: '3',
        image: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/578/485/products/baja1-ff5f11144f70d80ec616533419111163-640-0.jpg',
        name: 'MK - Sub Zero',
        description: 'Ab enim voluptas rem quas nihil ut repellat impedit sed doloribus perspiciatis qui nesciunt cupiditate et magni autem ut quaerat voluptatem. Est aliquam dolor et facilis quibusdam ut provident rerum non cumque soluta.',
        price: '2000',
        stock: '2'
    }
    , {
        category: 'movies',
        id: '4',
        image: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/578/485/products/jk51-fd351d7aed666cb2da16252432945532-1024-1024.jpg',
        name: 'The Joker',
        description: 'Ab enim voluptas rem quas nihil ut repellat impedit sed doloribus perspiciatis qui nesciunt cupiditate et magni autem ut quaerat voluptatem. Est aliquam dolor et facilis quibusdam ut provident rerum non cumque soluta.',
        price: '2300',
        stock: '3'
    }, {
        category: 'anime',
        id: '5',
        image: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/578/485/products/va001-eebe34870cb3dc143616262715124751-640-0.jpg',
        name: 'Evangelion',
        description: 'Ab enim voluptas rem quas nihil ut repellat impedit sed doloribus perspiciatis qui nesciunt cupiditate et magni autem ut quaerat voluptatem. Est aliquam dolor et facilis quibusdam ut provident rerum non cumque soluta.',
        price: '2000',
        stock: '2'
    },{
        category:'anime',
        id: '6',
        image:'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/578/485/products/baja1-8f28cc006670f0a6dd16540207056996-640-0.jpg',
        name:'Astroboy',
        description: 'Ab enim voluptas rem quas nihil ut repellat impedit sed doloribus perspiciatis qui nesciunt cupiditate et magni autem ut quaerat voluptatem. Est aliquam dolor et facilis quibusdam ut provident rerum non cumque soluta.',
        price:'2000',
        stock:'3'
    }
]
export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve, reject)=>{
        setTimeout( ()=> {
            resolve(products.filter(prod => prod.category === categoryId));
        }, 900);
    });
}

export const getProducts = () => {
    return new Promise((resolve, reject)=>{
        setTimeout( ()=> {
            resolve(products);
        }, 2000);
    });
}

export const getProductById = (id) => {
    return new Promise((resolve, reject)=>{
        setTimeout( ()=> {
            resolve(products.find(prod => prod.id === id));
        }, 900);
    });
}