/*
	Stellar by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$main = $('#main');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '361px',   '480px'  ],
			xxsmall:  [ null,      '360px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Nav.
		var $nav = $('#nav');

		if ($nav.length > 0) {

			// Shrink effect.
				$main
					.scrollex({
						mode: 'top',
						enter: function() {
							$nav.addClass('alt');
						},
						leave: function() {
							$nav.removeClass('alt');
						},
					});

			// Links.
				var $nav_a = $nav.find('a');

				$nav_a
					.scrolly({
						speed: 1000,
						offset: function() { return $nav.height(); }
					})
					.on('click', function() {

						var $this = $(this);

						// External link? Bail.
							if ($this.attr('href').charAt(0) != '#')
								return;

						// Deactivate all links.
							$nav_a
								.removeClass('active')
								.removeClass('active-locked');

						// Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
							$this
								.addClass('active')
								.addClass('active-locked');

					})
					.each(function() {

						var	$this = $(this),
							id = $this.attr('href'),
							$section = $(id);

						// No section for this link? Bail.
							if ($section.length < 1)
								return;

						// Scrollex.
							$section.scrollex({
								mode: 'middle',
								initialize: function() {

									// Deactivate section.
										if (browser.canUse('transition'))
											$section.addClass('inactive');

								},
								enter: function() {

									// Activate section.
										$section.removeClass('inactive');

									// No locked links? Deactivate all links and activate this section's one.
										if ($nav_a.filter('.active-locked').length == 0) {

											$nav_a.removeClass('active');
											$this.addClass('active');

										}

									// Otherwise, if this section's link is the one that's locked, unlock it.
										else if ($this.hasClass('active-locked'))
											$this.removeClass('active-locked');

								}
							});

					});

		}

	// Scrolly.
		$('.scrolly').scrolly({
			speed: 1000
		});

})(jQuery);

function showbuttspace() {
	let buttspace = document.getElementById("buttspace");
	buttspace.style.display = "flex";
	toggleButtons();
}

function hidebuttspace() {
	let buttspace = document.getElementById("buttspace");
	buttspace.style.display = "none";
	toggleButtons();
}

function showbuttspace1() {
	let buttspace1 = document.getElementById("buttspace1");
	buttspace1.style.display = "flex";
	toggleButtons1();
}

function hidebuttspace1() {
	let buttspace1 = document.getElementById("buttspace1");
	buttspace1.style.display = "none";
	toggleButtons1();
}
function showbuttspace2() {
	let buttspace2 = document.getElementById("buttspace2");
	buttspace2.style.display = "flex";
	toggleButtons2();
}

function hidebuttspace2() {
	let buttspace2 = document.getElementById("buttspace2");
	buttspace2.style.display = "none";
	toggleButtons2();
}

function showbuttspace3() {
	let buttspace3 = document.getElementById("buttspace3");
	buttspace3.style.display = "flex";
	toggleButtons3();
}

function hidebuttspace3() {
	let buttspace3 = document.getElementById("buttspace3");
	buttspace3.style.display = "none";
	toggleButtons3();
}

function showbuttspace4() {
	let buttspace4 = document.getElementById("buttspace4");
	buttspace4.style.display = "flex";
	toggleButtons4();
}

function hidebuttspace4() {
	let buttspace4 = document.getElementById("buttspace4");
	buttspace4.style.display = "none";
	toggleButtons4();
}
function showbuttspace5() {
	let buttspace5 = document.getElementById("buttspace5");
	buttspace5.style.display = "flex";
	toggleButtons5();
}

function hidebuttspace5() {
	let buttspace5 = document.getElementById("buttspace5");
	buttspace5.style.display = "none";
	toggleButtons5();
}

function toggleButtons() {
	let hideButton = document.querySelector(".button.button-hidden");
	let showButton = document.querySelector(".button.button-shown");
	hideButton.className = "button button-shown"; // add the hide buttspace button
	showButton.className = "button button-hidden"; // remove the show buttspace button
}

function toggleButtons1() {
	let hideButton1 = document.querySelector(".button.button-hidden1");
	let showButton1 = document.querySelector(".button.button-shown1");
	hideButton1.className = "button button-shown1"; // add the hide buttspace button
	showButton1.className = "button button-hidden1"; // remove the show buttspace button
}
function toggleButtons2() {
	let hideButton2 = document.querySelector(".button.button-hidden2");
	let showButton2 = document.querySelector(".button.button-shown2");
	hideButton2.className = "button button-shown2"; // add the hide buttspace button
	showButton2.className = "button button-hidden2"; // remove the show buttspace button
}
function toggleButtons3() {
	let hideButton3 = document.querySelector(".button.button-hidden3");
	let showButton3 = document.querySelector(".button.button-shown3");
	hideButton3.className = "button button-shown3"; // add the hide buttspace button
	showButton3.className = "button button-hidden3"; // remove the show buttspace button
}
function toggleButtons4() {
	let hideButton4 = document.querySelector(".button.button-hidden4");
	let showButton4 = document.querySelector(".button.button-shown4");
	hideButton4.className = "button button-shown4"; // add the hide buttspace button
	showButton4.className = "button button-hidden4"; // remove the show buttspace button
}
function toggleButtons5() {
	let hideButton5 = document.querySelector(".button-hidden5");
	let showButton5 = document.querySelector(".button-shown5");
	hideButton5.className = "button-shown5"; // add the hide buttspace button
	showButton5.className = "button-hidden5"; // remove the show buttspace button
}
