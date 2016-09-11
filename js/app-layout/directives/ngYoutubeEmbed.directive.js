const ngYoutubeEmbed = function() {

return {
    restrict: "E",
    template: '<div ng-bind-html="youtubeEmbedFrame"></div>',
    scope: {
        url: "=",
        autoplay: "@autoplay",
        autohide: "@autohide",
        ccloadpolicy: "@ccloadpolicy",
        color: "@color",
        controls: "@controls",
        disablekb: "@disablekb",
        end: "@end",
        fs: "@fs",
        hl: "@hl",
        ivloadpolicy: "@ivloadpolicy",
        playlist: "@playlist",
        playsinline: "@playsinline",
        rel: "@rel",
        showinfo: "@showinfo",
        start: "@start",
        theme: "@theme",
        width: "@width",
        height: "@height",
        gaming: "@gaming"
    },
    
    controller: ["$scope", "$sce", function(a, b) {
        function c(b) {
            var c = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/,
                d = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
            "true" === a.gaming && (c = /^(?:https?:\/\/)?(?:www\.)?(?:gaming.youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/, d = /^.*(\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/);
            var e = (b.match(d), b.match(c));
            if (null != e) {
                var f = e[1];
                return f
            }
        }
        var d = a.url;
        if (void 0 != d) {
            if (a.playlistArray = [], void 0 != a.playlist)
                for (var e = a.playlist.split(","), f = 0; f < e.length; f++) a.playlistArray.push(c(e[f]));
            var g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y;
            g = "true" == a.autoplay ? 1 : 0, h = "true" == a.autohide ? 1 : 0, i = "true" == a.ccloadpolicy ? 1 : 0, j = "white" == a.color ? "white" : "red", k = "false" == a.controls ? 0 : 1, l = "false" == a.disablekb ? 0 : 1, m = a.end ? a.end : "", n = "false" == a.fs ? 0 : 1, o = a.hl ? a.hl : "", p = "false" == a.ivloadpolicy ? 0 : 1, q = a.playlistArray, r = "true" == a.playsinline ? 1 : 0, s = "false" == a.rel ? 0 : 1, t = "false" == a.showinfo ? 0 : 1, u = a.start ? a.start : "", v = a.theme ? a.theme : "", y = a.gaming ? a.gaming : "", w = void 0 != a.width ? a.width : "500px", x = void 0 != a.height ? a.height : "350px", a.$watch("url", function(d) {
                if (d) {
                    var e, f = c(d);
                    e = y ? "<iframe width=" + w + " height=" + x + ' src="https://gaming.youtube.com/embed/' + f + "?autoplay=" + g + "&autohide=" + h + "&cc_load_policy=" + i + "&color=" + j + "&controls=" + k + "&disablekb=" + l + "&end=" + m + "&fs=" + n + "&hl=" + o + "&playlist=" + q + "&playsinline=" + r + "&rel=" + s + "&showinfo=" + t + "&start=" + u + "&theme=" + v + '" frameborder="0" allowfullscreen></iframe>' : "<iframe width=" + w + " height=" + x + ' src="https://www.youtube.com/embed/' + f + "?autoplay=" + g + "&autohide=" + h + "&cc_load_policy=" + i + "&color=" + j + "&controls=" + k + "&disablekb=" + l + "&end=" + m + "&fs=" + n + "&hl=" + o + "&playlist=" + q + "&playsinline=" + r + "&rel=" + s + "&showinfo=" + t + "&start=" + u + "&theme=" + v + '" frameborder="0" allowfullscreen></iframe>', a.youtubeEmbedFrame = b.trustAsHtml(e)
                }
            })
        }
    }]
}

};

ngYoutubeEmbed.$inject = [];

export default ngYoutubeEmbed;