
 
            window.player = dashjs.MediaPlayer().create();
            var bitratesinfo=[];
            (function(){
                var url = document.querySelector("#main_video_src").src;
                
                player.initialize(document.querySelector("#main_video"), url, true); 
const defaultOptions = {};
              player.on("streamInitialized", function () {
    bitratesinfo = player.getBitrateInfoListFor("video");
    //console.log('My bitrate:' + bitratesinfo.length);
   
   var bitrate=[];
   for(i=0;i<bitratesinfo.length;i++)
     {
       bitrate.push(bitratesinfo[i]['height']);
     }
                
   defaultOptions.quality = {
        default: bitrate[0],
        options: bitrate,
        // this ensures Plyr to use mpeg-dash to update quality level
        forced: true,        
        onChange:(e) => updateQuality(e),
      }
                console.log(bitrate);
    window.Plyrplayer = new Plyr('#main_video', defaultOptions);
     let settingsp = player.getSettings();
       settingsp.streaming.abr.autoSwitchBitrate = true;
     console.log("call autoswitchquality() for dynamic quality switch")	   
     
});;
    
    function updateQuality(newQuality)
   {
     let settingsp = player.getSettings()
     //console.log(newQuality);
     if(newQuality=='auto')
       {
         settingsp.streaming.abr.autoSwitchBitrate = true; 
         console.log(player.getQualityFor('video'));
       }
     else
       {
         settingsp.streaming.abr.autoSwitchBitrate = false;
         var numbertoset=0;
         for(i=0;i<bitratesinfo.length;i++)
           {
             if(bitratesinfo[i]['height']==newQuality)
               {
                 numbertoset=i;
               }
           }
         player.setQualityFor('video', numbertoset);
         console.log("here set:",newQuality," ,if auto switch quality",settingsp.streaming.abr.autoSwitchBitrate);
       }
   }
              
            
            })();
			
			function autoswitchquality()
			{
				let settingsp = player.getSettings();
       settingsp.streaming.abr.autoSwitchBitrate = true;
	   return 0;
			}

