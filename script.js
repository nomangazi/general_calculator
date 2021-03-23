var frm = document.querySelector('form')

function val(result){
    frm.disp.value = frm.disp.value + result;
}

function calculate(){
    if(form.disp.value == ''){
        alert('please enter number');
    }else{
        frm.disp.value = eval(frm.disp.value);
    }
}

var btn = frm.veql;
btn.addEventListener('dblclick',function(){
    frm.disp.value = ''; //when we click on equal button the result will be clear display.
})