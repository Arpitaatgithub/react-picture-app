import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization : 'Client-ID DpKJw0TYn--taBmojPY26Os2_46RbdJv-2eqnTXExv0'
    }
});