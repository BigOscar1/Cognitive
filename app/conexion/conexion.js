class Conexion {

    async get(url) {
        const getUrl = await fetch(url);
        const data = await getUrl.json();
        return data;

    }

    async post(json, url) {
        const item = JSON.stringify(json);

        const res = await fetch(url, {
            method: 'POST',
            body: item,
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = res.json();
        return data;
    }

    async put(json, url) {
        const item = JSON.stringify(json);

        const res = await fetch(url, {
            method: 'PUT',
            body: item,
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = res.json();
        return data;
    }

    getUrl(){
        return 'http://localhost:3771';
    }


}