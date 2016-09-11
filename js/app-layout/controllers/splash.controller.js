const SplashCtrl = function(YoutubeService) {
    let vm = this;

    vm.url = 'https://www.youtube.com/watch?v=';
    vm.videoData = [];
    vm.videoTitles = []
    vm.activate = activate;
    vm.alert = alert;

    vm.customText = '';

    activate();

    function activate() {
        return getPlistItems();
    }

    function getPlistItems() {
        YoutubeService.onClientLoad().then((data) => {
            console.log(data.items);
            return data.items;
        })
        .then((data) => {

            for(var i = 0; i < data.length; i++) {
              let vid = data[i];
              vm.videoData.push(vid);
            }
          

        })
        .catch((err) => 'Whoops, something when wrong: '+ err);
    }

    function alert() {
        alert('you clicked me');
    }
    // function getPlistItems() {
    //     YoutubeService.playlist.then((data) => {
    //         return data;
    //     })
    //     .then((data) => {
    //         vm.playlist = [];
    //         return vm.playlist;
    //     })
    //     .catch((err) => 'Whoops, something when wrong: '+ err);
    // }

};

SplashCtrl.$inject = ['YoutubeService'];

export default SplashCtrl;