if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js").then(() => {
    console.log("Service worker registered");
  });
}

// run this to trigger the prompt when required
// window.addEventListener("beforeinstallprompt", (event) => {
//   console.log("beforeinstallprompt fired");
//   event.preventDefault();
//   deferredPrompt = event;
//   return false;
// });

// if (deferredPrompt) {
//   deferredPrompt.prompt();
//   deferredPrompt.userChoice.then((choiceResult) => {
//     console.log(choiceResult.outcome);
//     if (choiceResult.outcome == "dismissed") {
//       console.log("User cancelled installation");
//     }
//     else {
//       console.log("User added to home screen");
//     }
//   });
//   deferredPrompt = null;
// }
