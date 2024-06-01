document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('start-scraping').addEventListener('click', function() {
        openAndScrapeMultipleTabs([
            'https://www.linkedin.com/in/vedavyasreddybommineni/',
            'https://www.linkedin.com/in/nikhil-kota-14b19a210/',
            'https://www.linkedin.com/in/meda-saketh-62220b24a/'
        ]);
    });
});

function openAndScrapeMultipleTabs(urls) {
    urls.forEach(url => {
        chrome.tabs.create({ url: url });
    });
}