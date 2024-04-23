import { getArtless } from '../service/http-artless';
import { Artless } from '../model/artless';

let art: Array<Artless> = [];

function initialize () {
    getArtless()
        .then(response => {
                            art = response.data;
                        })
    };

export default initialize;

const getInitialize = () => initialize;

export { getInitialize, art };
