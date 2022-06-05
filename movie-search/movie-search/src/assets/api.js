import axios from 'axios';
import { ApiKey } from './ApiKey';

export default axios.create({
    baseURL:`http://www.omdbapi.com/`
})
