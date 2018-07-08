var embed = new Twitch.Embed("twitch-embed", {
    width: '100%',
    height: 480,
    channel: 'gkmngrgn',
    layout: 'video',
    autoplay: false
});

embed.addEventListener(Twitch.Embed.VIDEO_READY, () => {
    var player = embed.getPlayer();
    player.play();
});
