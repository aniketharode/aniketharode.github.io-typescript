var YouTube = /** @class */ (function () {
    function YouTube() {
        var _this = this;
        this.setTopSelling = function (x) {
            _this.topselling = x;
        };
        this.getTopSelling = function () {
            console.log("Top Selling YouTube Movies:-" + _this.topselling);
        };
        this.setRecomended = function () {
            var x = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                x[_i] = arguments[_i];
            }
            _this.recomended = x;
        };
        this.getRecomended = function () {
            console.log("Recomended:-" + _this.recomended);
        };
        this.setNotification = function (x) {
            _this.notificaton = x;
        };
        this.getNotification = function () {
            console.log("You have " + _this.notificaton + " notifiaction");
        };
        this.setSongs = function (songs) {
            _this.songs = songs;
        };
        this.getSongs = function () {
            return _this.songs;
        };
        this.songsDetails = function (song) {
            if (song.match("O sathi")) {
                var x = [
                    {
                        song: { "views": "1,234,567", "likes": "1k", "dislikes": 100 }
                    }
                ];
                console.log("song is " + song + "\nviews:- " + x[0].song.views + "\nlikes:- " + x[0].song.likes + "\ndislikes:-" + x[0].song.dislikes);
            }
            else {
                console.log("no matching");
            }
        };
        this.callFunction = function () {
            //this.setNotification(9);
            _this.getNotification();
            //this.setRecomended("top selling mobile","fifa 2018","xyz","abcdss","india cricket");
            _this.getRecomended();
            //this.setSongs("O sathi");
            _this.songsDetails(_this.getSongs());
            _this.getLikedVideos();
            //this.setSubscription("Sony Music","Cricket","FIFA2018","Trailers");
            _this.getSubscription();
        };
    }
    YouTube.prototype.getLikedVideos = function () {
        var x;
        var y;
        var z;
        x = ["Fifa 2018", 12123444];
        y = ["crciket ", 532323293];
        z = ["best goals", 141527];
        console.log("liked videos :-\n" + x + "\n" + y + "\n" + z);
    };
    YouTube.prototype.setSubscription = function () {
        var sub = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            sub[_i] = arguments[_i];
        }
        this.subscription = sub;
    };
    YouTube.prototype.getSubscription = function () {
        console.log("Here are the subscribed videos\n" + this.subscription);
    };
    return YouTube;
}());
var youtube = new YouTube();
var array = ["thor", "avengers"];
youtube.setTopSelling(array);
youtube.getTopSelling();
youtube.setNotification(9);
youtube.setRecomended("top selling mobile", "fifa 2018", "xyz", "abcdss", "india cricket");
youtube.setSongs("O sathi");
youtube.setSubscription("Sony Music", "Cricket", "FIFA2018", "Trailers");
youtube.callFunction();
