const YoutubeService = function($q, FILESERVER) {
    const key = FILESERVER.PARAMS.API_KEY;
    const plistId = FILESERVER.PARAMS.LIST_ID;
    
    let deferred = $q.defer();

    this.onClientLoad = onClientLoad;
    // this.videoIds = videoIds;
   
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
    };

    // function videoIds(data) {
    //     for(var i = 0; i < data.length; i++) {
    //           let vId = data[i].snippet.resourceId.videoId;
    //           vm.videoIds.push('https://www.youtube.com/watch?v='+vId);
    //         }
    //         console.log(vm.videoIds);
    // }
};
YoutubeService.$inject = ['$q','FILESERVER'];

export default YoutubeService;