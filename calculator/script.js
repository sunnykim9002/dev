let bufferData = '';
document.addEventListener('DOMContentLoaded', ()=>{
    document.querySelector('.numpad').addEventListener('mousedown',(e)=>{
        console.log(e.target.tagName + e.target.innerText);
        switch(e.target.innerText){
            case "AC":
                //초기화
                bufferData = '';
                document.querySelector('.pane').innerText = '0';
                break;
            case "=":
                //계산 결과를 표시하고 버퍼 초기화(초기화를 후에 해야 함)
                document.querySelector('.pane').innerText = calc(bufferData);
                bufferData = ''
                break;
            default:
                //버퍼에 입력 숫자와 연산자 누적
                if(!(bufferData == '' && e.target.innerText == '0')){
                    bufferData += ''+e.target.innerText;
                    document.querySelector('.pane').innerText = bufferData;
                }
                break;
        }
    })
})