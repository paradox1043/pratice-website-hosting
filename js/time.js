function updateTime(){
    let date=new Date();

    let day=document.getElementById('day');
    day.innerText=date.toLocaleDateString('en-US',{weekday:'long'});

    let curdate=document.getElementById('date');
    const myday = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();

    const dateString = myday +" "+ month +" "+ year;
    curdate.innerText=dateString;

    let time=document.getElementById('time');
    time.innerText=date.toLocaleTimeString(undefined, { hour12: false });

}
function getTime(){
    let date=new Date();

    let time=document.getElementById('gettime');
    time.innerText=date.toLocaleTimeString(undefined, { hour12: false });
}



setInterval(updateTime,1000);
setInterval(getTime,1000);
