const API_DOMAIN = "https://z45kkv-8080.csb.app/";
export async function get(path){                                                                                    
    const response = await fetch(API_DOMAIN + path)
    const result = await response.json();
    return result;
}
export async function post(path, dataChange){
    const response = await fetch(API_DOMAIN + path, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(dataChange)
    })
    const result = await response.json();
    return result;
}
export async function del(path){
    const response = await fetch(API_DOMAIN + path, {
        method: "DELETE",        
      })
    const result = await response.json();
    return result;
}
export async function patch(path, dataChange){
    const response = await fetch(API_DOMAIN + path, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(dataChange)
    });
    const result = response.json();
    return result;
}