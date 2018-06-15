var About = /** @class */ (function () {
    function About() {
        var _this = this;
        this.setEducation = function () {
            var x = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                x[_i] = arguments[_i];
            }
            _this.education = x;
        };
        this.getEducation = function () {
            for (var i = 0; i < _this.education.length; i++) {
                var x = ["My Education:-", _this.education[i]];
                //  console.log("My Education:-");
                console.log(x[0] + "\n" + x[1]);
            }
        };
        this.setPlacesLived = function () {
            var x = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                x[_i] = arguments[_i];
            }
            _this.placesLived = x;
        };
        this.getPlacesLived = function () {
            console.log("Places i lived " + _this.placesLived);
        };
        this.setContactInfo = function (x) {
            if (x.search("@") > 1)
                _this.contactinfo = x;
            else {
                console.log("email should have the @ symbol");
            }
        };
        this.getContactInfo = function () {
            console.log("contact info:-\n " + _this.contactinfo);
        };
        this.setSports = function () {
            var x = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                x[_i] = arguments[_i];
            }
            _this.sports = x;
        };
        this.getSports = function () {
            console.log("favourite sports are " + _this.sports[0] + " and " + _this.sports[1]);
        };
        this.setMusic = function () {
            var x = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                x[_i] = arguments[_i];
            }
            _this.music = x;
        };
        this.getMusic = function () {
            console.log("Music:-\n" + _this.music);
        };
        this.setMovie = function () {
            var x = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                x[_i] = arguments[_i];
            }
            _this.music = x;
        };
        this.getMovie = function () {
            console.log("Movie:-\n" + _this.music);
        };
        this.setFriend = function () {
            var x = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                x[_i] = arguments[_i];
            }
            _this.music = x;
        };
        this.getFriend = function () {
            console.log("Friends are:-\n" + _this.music);
        };
        this.getCallInstance = function () {
            about.getEducation();
            about.getPlacesLived();
            about.getContactInfo();
            about.getSports();
            about.getMusic();
            about.getMovie();
        };
    }
    return About;
}());
var about = new About();
about.setEducation("Kendriya Vidyalaya", "GH Raison College");
about.setPlacesLived("Nagpur", "Mumbai");
about.setContactInfo("aniketh@xyz.com");
about.setSports("cricket", "football");
about.setMusic("xyz", "pqr");
about.setMovie("abcd", "efgh");
about.getCallInstance();
