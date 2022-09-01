$(document).ready(readyNow);

function readyNow() {
    console.log('test');
    $('body').on('keypress',pressEvent)
}

function pressEvent(e) {
    
    $('.insert').empty()

    const key = e.key;
    const code = e.code;
    const charCode = e.keyCode;
    
    $('#press').addClass('none');

    $('.insert')
        .append(`
        <div class="key">
        ${ key === ' ' ? 'space' : key} 
        <small>event.key</small>
     </div>

     <div class="key">
     ${charCode} 
         <small>event.KeyCode</small>
     </div>
     <div class="key">
        ${code}
         <small>event.code</small>
     </div>
        `)
       
}