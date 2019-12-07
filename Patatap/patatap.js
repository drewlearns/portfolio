var keyData = {
	a: {
		color: "purple",
		sound: new Howl({ src: ['assets/clay.mp3'] })
	},
	s: {
		color: "green",
		sound: new Howl({ src: ['assets/bubbles.mp3'] })
	},
	d: {
		color: "yellow",
		sound: new Howl({ src: ['assets/confetti.mp3'] })
	},
	f: {
		color: "blue",
		sound: new Howl({ src: ['assets/corona.mp3'] })
	},
	g: {
		color: "orange",
		sound: new Howl({ src: ['assets/dotted-spiral.mp3'] })
	},
	h: {
		color: "teal",
		sound: new Howl({ src: ['assets/flash-1.mp3'] })
	},
	h: {
		color: "#FFEBCD",
		sound: new Howl({ src: ['assets/flash-2.mp3'] })
	},
	j: {
		color: "#FF8C00",
		sound: new Howl({ src: ['assets/flash-3.mp3'] })
	},
	k: {
		color: "#90EE90",
		sound: new Howl({ src: ['assets/glimmer.mp3'] })
	},
	l: {
		color: "#FFF8DC",
		sound: new Howl({ src: ['assets/moon.mp3'] })
	},
	q: {
		color: "#B8860B",
		sound: new Howl({ src: ['assets/pinwheel.mp3'] })
	},
	w: {
		color: "#778899",
		sound: new Howl({ src: ['assets/piston-1.mp3'] })
	},
	e: {
		color: "#7CFC00",
		sound: new Howl({ src: ['assets/piston-2.mp3'] })
	},
	r: {
		color: "#3CB371",
		sound: new Howl({ src: ['assets/piston-2.mp3'] })
	},
	t: {
		color: "#F0FFF0",
		sound: new Howl({ src: ['assets/piston-3.mp3'] })
	},
	y: {
		color: "#FFB6C1",
		sound: new Howl({ src: ['assets/prism-1.mp3'] })
	},
	u: {
		color: "#98FB98",
		sound: new Howl({ src: ['assets/prism-2.mp3'] })
	},
	o: {
		color: "#FA8072",
		sound: new Howl({ src: ['assets/splits.mp3'] })
	},
	p: {
		color: "#FA8072",
		sound: new Howl({ src: ['assets/squiggle.mp3'] })
	},
	z: {
		color: "#ADFF2F",
		sound: new Howl({ src: ['assets/strike.mp3'] })
	},
	x: {
		color: "#FFFAF0",
		sound: new Howl({ src: ['assets/suspension.mp3'] })
	},
	c: {
		color: "#1E90FF",
		sound: new Howl({ src: ['assets/timer.mp3'] })
	},
	v: {
		color: "#0000CD",
		sound: new Howl({ src: ['assets/timer.mp3'] })
	},
	b: {
		color: "#E0FFFF",
		sound: new Howl({ src: ['assets/ufo.mp3'] })
	},
	n: {
		color: "#FFD700",
		sound: new Howl({ src: ['assets/veil.mp3'] })
	},
	m: {
		color: "#FFD700",
		sound: new Howl({ src: ['assets/wipe.mp3'] })
	},
	',': {
		color: "#800000",
		sound: new Howl({ src: ['assets/zig-zag.mp3'] })
	},
	1: {
		color: "#800000",
		sound: new Howl({ src: ['assets/boom.wav'] })
	},
	1: {
		color: "#00CED1",
		sound: new Howl({ src: ['assets/clap.wav'] })
	},
	2: {
		color: "#808000",
		sound: new Howl({ src: ['assets/hihat.wav'] })
	},
	3: {
		color: "##F0F8FF",
		sound: new Howl({ src: ['assets/kick.wav'] })
	},
	4: {
		color: "#0000CD",
		sound: new Howl({ src: ['assets/openhat.wav'] })
	},
	5: {
		color: "#9400D3",
		sound: new Howl({ src: ['assets/ride.wav'] })
	},
	6: {
		color: "#D2B48C",
		sound: new Howl({ src: ['assets/snare.wav'] })
	},
	7: {
		color: "#FFF5EE",
		sound: new Howl({ src: ['assets/tink.wav'] })
	},
	7: {
		color: "#1dd7dc",
		sound: new Howl({ src: ['assets/tink.wav'] })
	},
	8: {
		color: "#c8cc31",
		sound: new Howl({ src: ['assets/tom.wav'] })
	},
	9: {
		color: "#346f66",
		sound: new Howl({ src: ['assets/prism-3.mp3'] })
	},
	0: {
		color: "#09ca30",
		sound: new Howl({ src: ['assets/glimmer.mp3'] })
	}
}

var circles = [];

function onKeyDown(event) {
	if (keyData[event.key]) {
		var maxPoint = new Point(view.size.width, view.size.height);
		var randomPoint = Point.random();
		var point = maxPoint * randomPoint;
		var newCircle = new Path.Circle(point, v = 500);
		newCircle.fillColor = keyData[event.key].color
		keyData[event.key].sound.play();
		circles.push(newCircle);
	}
}

function onFrame(event) {
	for (var i = 0; i < circles.length; i++) {
		circles[i].fillColor.hue += 3;
		circles[i].scale(.9)
		if (circles[i].area < 1) {
			circles[i].remove(); // remove the circle from the canvas
			circles.splice(i, 1); // remove the circle from the array
		}
	}
}
