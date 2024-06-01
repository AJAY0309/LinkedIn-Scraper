function scrapeProfile() {
    // Helper function to safely get text content of an element
    const getElementText = (selector) => {
        const element = document.querySelector(selector);
        return element ? element.innerText : null; // Trim the text to remove leading and trailing whitespace
    };

    // Helper function to safely get integer value from text content of an element
    const getElementTextInt = (selector) => {
        const text = getElementText(selector);
        return text ? parseInt(text.replace(/[^0-9]/g, ''), 10) : null; // Use parseInt with base 10
    };

    {
        /* <div class="SieiDjRhCbpLUgDYSZYAuGNqSYySZgAFVBY mt2">
        <!---->        <span class="text-body-small inline t-black--light break-words">
                  Hyderabad, Telangana, India
                </span>
                  <span class="XIVQGXGpRHzEcCVClIeHfOAraUzfTWriPRgEg t-black--light">
                    <a href="/in/nikhil-kota-14b19a210/overlay/contact-info/" id="top-card-text-details-contact-info" class="ember-view link-without-visited-state cursor-pointer text-heading-small inline-block break-words">
                      Contact info
                    </a>
                  </span>
              </div> */
    }

    // Delay to allow dynamic content to load (adjust the delay as needed)
    setTimeout(() => {
        // Scraping profile data
        let profileData = {
            name: getElementText('.text-heading-xlarge'),
            url: window.location.href,
            about: getElementText('.inline-show-more-text--is-collapsed span'),
            bio: getElementText('.text-body-medium'),
            location: getElementText('.mt2 > .text-body-small'),
            follower_count: getElementTextInt('.pvs-header__optional-link .visually-hidden'),
            connection_count: getElementTextInt('.link-without-visited-state .t-bold'),
        };

        console.log("Scraped profile data: ", profileData);

        // Sending scraped data to the backend server
        fetch('http://localhost:3000/api/profiles', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(profileData)
            })
            .then(response => response.json())
            .then(data => console.log("Server response: ", data))
            .catch(error => console.error('Error:', error));
    }, 5000);
}

scrapeProfile();