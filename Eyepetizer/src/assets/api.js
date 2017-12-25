export default async (url, originQuery = {}, method = 'get') => {
    if (!url) {
        return new Error('必须接受一个 uri 参数');
    }
    const query = Object.entries(originQuery).map(item => item.join('=')).join('&');

    url = `${url}${query}`;

    try {
        const res = await axios.request({
            url,
            method,
            timeout: 10000
        });
        return res.data || {};
    } catch (e) {
        throw e;
    }
}