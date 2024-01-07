let mflag=0,pflag=0,fflag=0,vol=0.2;
let audio,i=0;
function selectaudio(i)
{
    let songs=["audio1.mp3","audio2.mp3","audio3.mp3","audio4.mp3","audio5.mp3"]
    return new Audio(songs[i]);

}
function pclick()
{
    if(fflag==0)
    {
        audio=selectaudio(i);
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
    audio.volume=vol;
    document.getElementById("pbtn").innerHTML="| |";
    document.getElementById("pbtn").style.padding="1px 3px 1px 3px";
    document.getElementById("pbtn").style.fontSize="25px";

    audio.play() ;
    pflag=1;
    document.getElementById("box").style.animation="panimation 1s infinite";
    
}
function pause()
{
    audio.pause();
    document.getElementById("pbtn").innerHTML="▶";
    document.getElementById("pbtn").style.padding="4px 3px 0px 10px";
    document.getElementById("pbtn").style.fontSize="35px";

    pflag=0;
    document.getElementById("box").style.animation="";

}
function pre()
{
    audio.pause();
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
    audio.pause();
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