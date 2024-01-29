const $gall = document.getElementById('gall');
const $$item = document.querySelectorAll('.gall-item');
const $btns = document.getElementById('btns');
const deg = 360 / $$item.length;
let gallDeg = 0;

const POS = {
    x : 0
}

/** 배치 */
function style_item(){
    const itemWidth = $$item[0].offsetWidth;
    const getZ = get_z({deg, itemWidth});
    $$item.forEach(($item,idx)=>{
        $item.style.transform = `rotateY(${idx * deg}deg) translateZ(${getZ}px)`;
    });
}//style_item

/** 거리 구해오기 */
function get_z(INFO = {}){
    const {deg,itemWidth} = INFO;
    const widthHalf = (itemWidth / 2);
    const radient = (Math.PI / 180 ) * (deg / 2);
    const r =  widthHalf / Math.tan(radient);
    const gap = Math.min(window.innerWidth, window.innerHeight) / 50;
    const result = parseInt(r);
    console.log(radient, Math.tan(radient), result);
    return result + gap;
}//get_z

/** 마우스 다운 */
function on_mouse_down(e){
    POS.x = e.clientX;
    window.addEventListener('mouseup',on_mouse_up,{once:true});
}//on_mouse_down

/** 터치 시작 */
function on_touch_start(e){
    POS.x = e.touches[0].clientX;
    window.addEventListener('touchend',on_touch_end,{once:true});
}

/** 마우스 업 */
function on_mouse_up(e){
    const newX = e.clientX - POS.x;
    cacul_final_deg(newX);
    $gall.addEventListener('mousedown', on_mouse_down, {once:true});
}//on_mouse_up

/** 터치 끝 */
function on_touch_end(e){
    const newX = e.changedTouches[0].clientX - POS.x;
    cacul_final_deg(newX);
    $gall.addEventListener('touchstart',on_touch_start,{once:true});
}//on_touch_end

/**
 * 회전시킬지 말지 정해서 gallDeg값 변경
 * @param {Number} newX 
 * @returns 
 */
function cacul_final_deg(newX){
    if(Math.abs(newX) < 50) return;
    const finalDeg = newX > 0 ?  deg : -1 * deg ;
    gallDeg += finalDeg;
    rotate_gallery();
}//cacul_final_deg

/**
 * 갤러리 회전시키기
 */
function rotate_gallery(){
    $gall.animate([{
        transform : `rotateY(${gallDeg}deg)`,
    }],{
        duration : 1000,
        fill : "both",
        easing : "ease-in-out"
    });
}//rotate_gallery

/* --------------------------- */
/* 실행 */
style_item();
$gall.addEventListener('mousedown', on_mouse_down, {once:true});
$gall.addEventListener('touchstart',on_touch_start,{once:true});

/* 윈도우 창 변경시 */
window.addEventListener('resize',()=>{
    style_item();
});

/* 버튼으로 움직이기 */
$btns.addEventListener('click',(e)=>{
    if(e.target.tagName != "BUTTON") return;
    const finalDeg = e.target.dataset.direction == "prev" ?  deg : -1 * deg ;
    gallDeg += finalDeg;
    rotate_gallery();
});