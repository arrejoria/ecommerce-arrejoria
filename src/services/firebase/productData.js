
export const getProductData = (doc) => {

    const data = doc.data()
    const productFormatted = {
        id: doc.id,
        name: data.name,
        image: data.image,
        price: data.price,
        stock: data.stock,
        category: data.category,
        description: data.description
    }
    return productFormatted
}