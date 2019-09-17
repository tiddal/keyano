window.onload = function() {
	var canvas = document.getElementById('myCanvas');
	var circles = [];
	paper.setup(canvas);
	with (paper) {
		view.onKeyDown = function(event) {
			if (keyData[event.key]) {
				var max = new Point(view.size.width, view.size.height);
				var random = Point.random();
				var origin = new Point(max.x * random.x, max.y * random.y);
				var circle = new Path.Circle(origin, 200);
				keyData[event.key].sound.play();
				circle.fillColor = keyData[event.key].color;
				circles.push(circle);
			}
		};
		view.onFrame = function(event) {
			circles.forEach((element, i, o) => {
				element.fillColor.hue++;
				element.scale(0.93);
				if (element.area < 1) {
					element.remove();
					o.splice(i, 1);
				}
			});
		};
	}
};
