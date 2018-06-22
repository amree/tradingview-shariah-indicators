function monitorTraffic(response) {
  console.log(response);
  chrome.tabs.query(
    {
      url: ['https://www.tradingview.com/screener*']
    },
    function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { status: 'ready' }, function(response) {});
    }
  );
}

chrome.webRequest.onCompleted.addListener(
  monitorTraffic,
  {
    urls: [
      'https://scanner.tradingview.com/malaysia/scan'
    ]
  }
);
