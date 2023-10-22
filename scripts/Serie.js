var Serie = /** @class */ (function () {
    function Serie(id, name, channel, seasons, description, webpage, image) {
        this.id = id;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.description = description;
        this.webpage = webpage;
        this.image = image;
    }
    Serie.prototype.darPromedio = function (array) {
        var promedio = 0;
        for (var index = 0; index < array.length; index++) {
            promedio += array[index].seasons;
        }
        return promedio / array.length;
    };
    return Serie;
}());
export { Serie };
