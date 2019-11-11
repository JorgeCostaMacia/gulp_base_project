module.exports = {
    getDate: () => {
        let d = new Date();

        let year = d.getFullYear();
        let month = ("00" + (d.getMonth() + 1)).slice(-2);
        let day = ("00" + d.getDate()).slice(-2);

        let hour = ("00" + d.getHours()).slice(-2);
        let minute = ("00" + d.getMinutes()).slice(-2);
        let second = ("00" + d.getSeconds()).slice(-2);

        return `${day}/${month}/${year} ${hour}:${minute}:${second}`;
    }
};