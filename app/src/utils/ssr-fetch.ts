import {cache} from 'react';
import 'server-only';

/** 
 * Data fetching utility to ensure data fetching is done server side and never on the client
*/

export const preload = (id:string) => {
  void ssrFetch(id);
}

export const  ssrFetch = cache(async (id:string) => {
  // function here
})