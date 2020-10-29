# plyr-mpeg-dash-player
An implementation of mpeg-dash player for plyr player with quality control.
This is an implementation of mpeg-dash playback on plyr player with quality switch control.
Plyr player: https://github.com/sampotts/plyr
Dash.js : https://github.com/Dash-Industry-Forum/dash.js?
Image: ![alt text](./plyr-dash-player.JPG?raw=true)

Requirememnts:
See playr-dash-stream.html file in repo.
1) A video tag with id="main_video"
2) A source tag with id="main_video_src" and src="path/to/your/mpd/file.mpd"
3)Ofcourse plyr js and css and dashjs js .

Issues:
1) There is no 'Auto' switch in quality options. Somehow plyr doesnt allow passing characters as quality option.
2) Choosing quality turns off auto bitrate switch of mpeg-dash. If you want to keep it on after switching, just take a look at updateQuality() function.
3) I dont know if plyr captions work or not. Haven't tested it. Should work.

Testing:
player is the window object created when dashjs is initialised. Type player in console to get it's info.
Plyrplayer is the object created when plyr player is initialised.
You can add 'auto' switch quality using workaround. Just add a number not in quality option in bitrate array. Update the same in updateQuality(). This displays that number in quality option. Just workaround it using some js.
Call autoswitchquality() in console to turn on auto bitrate switch.

License: Fell free to use modify it and use commercially. This is just a small implemetation i did. All rights belong to respective authors of the plyr and dashjs.
