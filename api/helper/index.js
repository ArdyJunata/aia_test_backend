const convert = require('xml-js');

exports.xmltojson = (xml) => {
    return JSON.parse(convert.xml2json(xml, { compact: true, spaces: 4 }));
}