if ($(window).width() >= 991.98) {
	gsap.from(".title-bar", 1, {
		y: -100,
		autoAlpha: 0,
		ease: "Power3.easeInOut"
	});

	gsap.from("nav li", 1, {
		y: -100,
		autoAlpha: 0,
		ease: "Power3.easeInOut",
		delay: 0.3
	});

	gsap.from(".hero .container", {
		y: 0,
		autoAlpha: 0,
		ease: "Power3.easeInOut",
		delay: 1
	});

	var controller = new ScrollMagic.Controller();

	// timeline1

	var timeline1 = new gsap.timeline();

	timeline1.from(".about_us .info", 1, {
		x: 100,
		autoAlpha: 0,
		ease: "back.out(1.7)"
	});

	// scene1
	var scene1 = new ScrollMagic.Scene({
		triggerElement: ".about_us",
		triggerHook: 0.4,
		reverse: false
	})
		// .addIndicators()
		.setTween(timeline1)
		.addTo(controller);

	// timeline2

	var timeline2 = new gsap.timeline();

	timeline2.from(".experience .experience-info", 1, {
		y: 100,
		autoAlpha: 0,
		ease: "back.out(1.7)",
		stagger: 0.2
	});

	// scene2
	var scene2 = new ScrollMagic.Scene({
		triggerElement: ".experience",
		triggerHook: 0.6,
		reverse: false
	})
		// .addIndicators()
		.setTween(timeline2)
		.addTo(controller);

	// timeline3

	var timeline3 = new gsap.timeline();

	timeline3.from(".achievement .counter", 1, {
		y: 100,
		autoAlpha: 0,
		ease: "back.out(1.7)"
	});

	// scene3
	var scene3 = new ScrollMagic.Scene({
		triggerElement: ".achievement",
		triggerHook: 0.5,
		reverse: false
	})
		// .addIndicators()
		.setTween(timeline3)
		.addTo(controller);

	// timeline4

	var timeline4 = new gsap.timeline();

	timeline4
		.from(".our-destination .section-heading", {
			y: 100,
			autoAlpha: 0,
			ease: "back.out(1.7)"
		})
		.from(".our-destination .service", {
			y: 100,
			autoAlpha: 0,
			ease: "back.out(1.7)"
		});

	// scene4
	var scene4 = new ScrollMagic.Scene({
		triggerElement: ".our-destination",
		triggerHook: 0.3,
		reverse: false
	})
		// .addIndicators()
		.setTween(timeline4)
		.addTo(controller);

	// timeline5
	var timeline5 = new gsap.timeline();
	timeline5
		.from(".contact img", {
			x: -100,
			autoAlpha: 0,
			ease: "back.out(1.7)"
		})
		.from(".contact .col-lg-5", {
			x: 100,
			autoAlpha: 0,
			ease: "back.out(1.7)"
		});

	// scene5
	var scene5 = new ScrollMagic.Scene({
		triggerElement: ".contact",
		triggerHook: 0.3,
		reverse: false
	})
		// .addIndicators()
		.setTween(timeline5)
		.addTo(controller);

	// timeline6
	var timeline6 = new gsap.timeline();
	timeline6
		.from(".our-team .info", {
			y: 100,
			autoAlpha: 0,
			ease: "back.out(1.7)"
		})
		.from(".our-team .col-lg-3", {
			y: 100,
			autoAlpha: 0,
			ease: "back.out(1.7)"
		});

	// scene6
	var scene6 = new ScrollMagic.Scene({
		triggerElement: ".our-team",
		triggerHook: 0.5,
		reverse: false
	})
		// .addIndicators()
		.setTween(timeline6)
		.addTo(controller);

	// timeline6
	var timeline7 = new gsap.timeline();
	timeline7
		.from(".testimonial .info", {
			y: 100,
			autoAlpha: 0,
			ease: "back.out(1.7)"
		})
		.from(".testimonial .row", {
			y: 100,
			autoAlpha: 0,
			ease: "back.out(1.7)"
		});

	// scene6
	var scene6 = new ScrollMagic.Scene({
		triggerElement: ".testimonial",
		triggerHook: 0.5,
		reverse: false
	})
		// .addIndicators()
		.setTween(timeline7)
		.addTo(controller);
}
