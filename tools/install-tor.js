var http = require('http');

function DownloadAndUnzip(URL){
    var unzip = require('unzip');

    var request = http.get(URL, function(response) {
        response.pipe(unzip.Extract({path:'./'}))

        const extract = require('extract-zip')

        async function main () {
            try {
                await extract(source, { dir: target })
                console.log('Extraction complete')
            } catch (err) {
                // handle any errors
            }
        }
    });
}


