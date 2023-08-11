
let Links = {
    setcolor:function(color){
    //     let links = document.querySelectorAll('a');
    //     for(let i = 0;i < links.length;i++){
    //     links[i].style.color = color;
    //     }
    $('a').css('color',color);
     }    
}//jQuery는 $로 시작한다.

let Body = {
    setColor:function (color){
    // document.querySelector('body').style.color = color;
    $('body').css('color',color);
    },
    setBackgroundcolor:function (color){
    // document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor',color);
    }
}


function night_day_handler(self){
    if(self.value === 'night'){
        Body.setBackgroundcolor('black');
        Body.setColor('white');
        self.value = 'day';

        Links.setcolor('powderblue');
    } else {
        Body.setBackgroundcolor('white');
        Body.setColor('black');
        self.value = 'night';

        Links.setcolor('aqua')
    }
}
