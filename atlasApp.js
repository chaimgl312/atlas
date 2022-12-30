import { declareEvents } from "./atlasForm.js";
import { doApi } from "./atlasList.js";

const init = () =>{
doApi("israel");
declareEvents(doApi);
}

init();