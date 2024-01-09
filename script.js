let mflag=0,pflag=0,fflag=0,vol=0.2,avol=1,sval=0,dur=0,i=0;
let audio=new Audio(),songs;
function selectaudio(i)
{
    songs=["audio1.mp3","audio2.mp3","audio3.mp3","audio4.mp3","audio5.mp3","audio6.mp3","audio7.mp3"]
    document.getElementById("seekbar").value=0;
    audio=new Audio(songs[i]);

    return audio;

}
function pclick()
{
    if(fflag==0)
    {
        
        audio=selectaudio(0);
        document.getElementById("seekbar").value=sval;
        seekanimation();
        fflag=1;
    }
    if(pflag==0)
    {
        play();
    } 
    else if(pflag==1)
    {
        pause();
    }   
}
function play()     
{  
    audio.currentTime=document.getElementById("seekbar").value;
    audio.play()
    audio.volume=vol;
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
        i=6;
    }
    audio=selectaudio(i);
    play();
}
function nxt()
{
    audio.pause()
    i=i+1;
    if(i>6)
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
    avol=(1.2-vol)/vol;
    document.getElementById("box").style.animationDuration=avol+"s";

}
function mute()
{
    if(mflag==0)
    {
    audio.volume=0;
    document.getElementById("box").style.animationDuration="100s";
    mflag=1;
    }
    else if(mflag==1)
    {
        audio.volume=vol;
        document.getElementById("box").style.animationDuration=avol+"s";
        mflag=0;
    }
   
}

function seekaudio(val)
{
audio.currentTime=val;
sval=val;
}
function seekanimation()
{
    dur=audio.duration;
    document.getElementById("seekbar").max=dur;
    let ct=audio.currentTime;
    document.getElementById("seekbar").value=ct;
    setTimeout(seekanimation,1000);
}