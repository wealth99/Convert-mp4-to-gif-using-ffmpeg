var ffmpeg = require('ffmpeg');
var ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
var ffprobePath = require('@ffprobe-installer/ffprobe').Path;
var ffmpeg = require('fluent-ffmpeg');

ffmpeg.setFfmpegPath(ffmpegPath);
ffmpeg.setFfprobePath(ffprobePath);

ffmpeg("./mp4/example.mp4") // 변경할 mp4 위치
.setStartTime('00:00:00') // 시작위치
.setDuration('13') // 시작부터 얼마나 할지
.size('1280x720') // 사이즈
.fps(60) // fps 설정 
.output(`./gif/${Date.now() + '.gif'}`) // gif 어디에 다운받을지
.on('end', function(err) {
    if(!err) {
        console.log('conversion done');
    }
})
.on('error', function(err) {
    console.log(err);
}).run()