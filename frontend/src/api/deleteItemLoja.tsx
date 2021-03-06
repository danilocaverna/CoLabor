const DeleteItemLoja = async (item: any) => {
    return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open("DELETE", "https://5im5aom4s4.execute-api.sa-east-1.amazonaws.com/final/lojaitem", true);
        xhr.onload = async function () {
            if (this.status >= 200 && this.status < 300) {
                let resp = await JSON.parse(xhr.response);  
                if(xhr && xhr.response && resp)
                    resolve(resp.data);
                else
                    resolve(false);
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror = function () {
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
        xhr.send(JSON.stringify(item));
    });
}

export default DeleteItemLoja;