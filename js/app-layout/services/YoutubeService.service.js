const YoutubeService = function($q, FILESERVER) {
    const key = FILESERVER.PARAMS.API_KEY;
    const plistId = FILESERVER.PARAMS.LIST_ID;
    
    let deferred = $q.defer();

    this.onClientLoad = onClientLoad;
   
    function onClientLoad() {
        gapi.client.setApiKey(key);
        gapi.client.load('youtube', 'v3', function() {
            let request = gapi.client.youtube.playlistItems.list({
                part: 'snippet',
                playlistId: plistId,
                maxResults: 8
            });
            request.execute(function(response) {
                deferred.resolve(response.result);
            });
        });
        return deferred.promise;
    }
};
YoutubeService.$inject = ['$q','FILESERVER'];

export default YoutubeService;