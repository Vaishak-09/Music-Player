let mflag=0,pflag=0,fflag=0,vol=0.2,avol=1,sval=0,dur=0,i=0;
let audio=new Audio(),songs;
function selectaudio(i)
{
    songs=["audio1.mp3","audio2.mp3","audio3.mp3","audio4.mp3","audio5.mp3"]
    document.getElementById("seekbar").value=0;
    audio=new Audio(songs[i]);
    audio.currentTime=0;
    return audio;

}
function pclick()
{
    if(fflag==0)
    {
        audio=selectaudio(i);
        document.getElementById("seekbar").value=sval;
        fflag=1;
    }
    if(pflag==0)
    {
        audio.currentTime=sval;
        play();
    } 
    else if(pflag==1)
    {
        pause();
    }   
}
function play()     
{  
    audio.play()
    audio.volume=vol;
    dur=audio.duration;
    console.log(dur);
    document.getElementById("seekbar").max=dur;
    document.getElementById("pbtn").innerHTML="| |";
    document.getElementById("pbtn").style.padding="1px 3px 1px 3px";
    document.getElementById("pbtn").style.fontSize="25px";
    pflag=1;
    document.getElementById("box").style.animationName="panimation";
    document.getElementById("box").style.animationDuration=avol+"s";
    document.getElementById("box").style.animationIterationCount="infinite";

}
function pause()
{
    audio.pause()
    document.getElementById("pbtn").innerHTML="▶";
    document.getElementById("pbtn").style.padding="4px 3px 0px 10px";
    document.getElementById("pbtn").style.fontSize="35px";
    pflag=0;
    document.getElementById("box").style.animation="";
   

}
function pre()
{
    audio.pause()
    i=i-1;
    if(i<0)
    {
        i=4;
    }
    audio=selectaudio(i);
    play();
}
function nxt()
{
    audio.pause()
    i=i+1;
    if(i>4)
    {
        i=0;
    }
    audio=selectaudio(i);
    play();
}

function volume(v)
{
    vol=v;
    audio.volume=vol;
    mflag=0;
    avol=1.2-vol;
    document.getElementById("box").style.animationDuration=avol+"s";

}
function mute()
{
    if(mflag==0)
    {
    audio.volume=0;
    mflag=1;
    }
    else if(mflag==1)
    {
        audio.volume=vol;
        mflag=0;
    }
   
}

function seekaudio(val)
{
audio.currentTime=val;
sval=val;
console.log(sval);
}
function stopseek()
{
    document.getElementById("seekbar").value=val;
}