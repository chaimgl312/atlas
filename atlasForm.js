
export const declareEvents = (doApi) => {
    let id_input = document.querySelector("#id_input");
    let id_search = document.querySelector("#id_search");

    let atlas = document.querySelector("#id_atlas");
    atlas.addEventListener("click", () => {
        doApi(israel.innerHTML);
    })
    let usa = document.querySelector("#id_usa");
    usa.addEventListener("click", () => {
        doApi(usa.innerHTML);
    })
    let israel = document.querySelector("#id_israel");
    israel.addEventListener("click", () => {
        doApi(israel.innerHTML);
    })
    // let uk = document.querySelector("#id_uk");
    // uk.addEventListener("click", () => {
    //     doApi(gb.innerHTML);
    // })
    let france = document.querySelector("#id_france");
    france.addEventListener("click", () => {
        doApi(france.innerHTML);
    })
    let thailand = document.querySelector("#id_thailand");
    thailand.addEventListener("click", () => {
        doApi(thailand.innerHTML);
    })

    id_input.addEventListener("keydown", (e) => {
        if (e.key == "Enter") {
            doApi(id_input.value);
        }
    })
    id_search.addEventListener("click", () => {
        doApi(id_input.value);
    })
}