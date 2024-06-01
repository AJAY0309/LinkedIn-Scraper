function scrapeProfile() {
    // Helper function to safely get text content of an element
    const getElementText = (selector) => {
        const element = document.querySelector(selector);
        return element ? element.innerText : null;
    };

    // Helper function to safely get integer value from text content of an element
    const getElementTextInt = (selector) => {
        const text = getElementText(selector);
        return text ? parseInt(text.replace(/[^0-9]/g, ''), 10) : null;
    };


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