// document.addEventListener('DOMContentLoaded', function() {
//   const btn = document.getElementById('dogButton');
//   btn.addEventListener('click', dogify)
// })

// chrome.runtime.sendMessage({key: 'popupInit'}, function (response) {
//   ;
//  });
const dogifyButton = document.getElementById('dogButton');
dogifyButton.addEventListener('click', () => {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
     chrome.tabs.sendMessage(tabs[0].id, {greeting: 'popupInit'}, function(response) {
       console.log(`don't leave me on read`);
       console.log(response);
     });
   });
})