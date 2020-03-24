var embed = new Twitch.Embed("twitch-embed", {
    width: '100%',
    height: 540,
    channel: 'goedev',
    layout: 'video',
    autoplay: true
});

embed.addEventListener(Twitch.Embed.VIDEO_READY, () => {
    var player = embed.getPlayer();
    player.play();
});
