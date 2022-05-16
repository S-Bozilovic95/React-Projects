import axios from 'axios';
import { ApiKey } from './apiKey';

export default axios.create({
    baseURL:`http://www.omdbapi.com/?i=tt3896198&${ApiKey}`
});
