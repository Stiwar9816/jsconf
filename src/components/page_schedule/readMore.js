export let readMore = () => {

if ('querySelector' in document &&
			'localStorage' in window &&
			'addEventListener' in window) {

			let toggleButtons = document.querySelectorAll('.toggle-content');
			let fullTextWrappers = document.querySelectorAll('.fulltext');
			let fullText;
			let toggleButtonText;


			[].forEach.call(fullTextWrappers, function(fullTextWrapper) {
				// hide all full text on load
				fullTextWrapper.setAttribute('hidden', true);
			});

			[].forEach.call(toggleButtons, function(toggleButton) {
				// show toggle more buttons
				toggleButton.removeAttribute('hidden');

				// add listener for each button
				toggleButton.addEventListener('click', function () {

					fullTextWrapper = this.parentElement.querySelector('.fulltext');
					toggleButtonText = this.querySelector('.text');

					// change attributes and text if full text is shown/hidden
					console.log(fullTextWrapper.hasAttribute('hidden'));
					if (!fullTextWrapper.hasAttribute('hidden')) {
						toggleButtonText.innerText = 'Show More';
						fullTextWrapper.setAttribute('hidden', true);
						toggleButton.setAttribute('aria-expanded', false);
					} else {
						toggleButtonText.innerText = 'Show Less';
						fullTextWrapper.removeAttribute('hidden');
						toggleButton.setAttribute('aria-expanded', true);
					}
				});
      })
    }

  }
