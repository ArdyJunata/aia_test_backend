const axios = require('axios').default;
const {
    xmltojson
} = require('../helper');

exports.imageList = async (req, res) => {
    try {
        const { tags } = req.query;
        const url = `https://api.flickr.com/services/feeds/photos_public.gne?tags=${tags}`;
        const result = await axios.get(url);
        
        const feedData = xmltojson(result.data).feed.entry;

        const data = feedData?.map((d) => {
            return {
                title: d?.title?._text ?? "untitled",
                url_feed: d.link[0]._attributes.href,
                url_img: d.link[1]._attributes.href
            }
        });

        res.status(200).json({
            message: 'success getting feed',
            count: data?.length,
            data: data?? []
        })

    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}