// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement("script");

tag.src = "http://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementByTageName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. THis function create an <iframe> (and youtube player)
//    after the API code downloads.
function onYouTubeIfameAPIReady() {
  new YT.Player("player", {
    videoId: "0TA-CjM6wwY",
    playerVars: {
      autoplay: true,
      loop: true,
      playlist: "0TA-CjM6wwY",
    },
    events: {
      onReady: function (event) {
        event.target.mute();
      },
    },
  });
}
