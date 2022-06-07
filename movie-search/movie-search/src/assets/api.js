import axios from 'axios';
import { ApiKey } from './ApiKey';

export default axios.create({
    baseURL:`https://www.omdbapi.com/`
})
