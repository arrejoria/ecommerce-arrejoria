import {db} from './index';
import {query, where, collection, getDocs} from 'firebase/firestore';

import { getProductData } from './productData';
export const getProducts = (categoryId) => {
    return new Promise((resolve, reject) => {
     const collectionRef = categoryId ? (
            query(collection(db, 'products'), where('category', '==', categoryId)))
            : (collection(db, 'products'));

     
            getDocs(collectionRef).then(response => { 
                const productsFormatted = response.docs.map(doc => {
                  return getProductData(doc); 
                });
                resolve(productsFormatted);
              }).catch(error => {
                reject(error)
              })
    });
}