import Config from "react-native-config";
const ENVRIRONMENT = Config.EVNRONMENT || "DEV";
const DEV_BASE_URL = Config.DEV_BASE_API_URL || 'http://localhost:8000';
const PROD_BASE_URL = Config.PROD_BASE_API_URL  || 'http://localhost:8000';

const BASE_API_URL = ENVRIRONMENT === "DEV" ? (DEV_BASE_URL + '/api') : (PROD_BASE_URL + '/api');
const BASE_URL = ENVRIRONMENT === "DEV" ? DEV_BASE_URL : PROD_BASE_URL;

export {
    BASE_URL,
    BASE_API_URL
}