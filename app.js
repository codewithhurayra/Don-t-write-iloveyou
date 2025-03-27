const hideicons = document.querySelector('.hideicons');
const showicon = document.querySelector('.showicon');
const showMsg = document.querySelector('.message-box');
const typeMsg = document.querySelector('.input-box');
const sendBtn = document.querySelector('.sendbtn');
let isblocked = false;
sendBtn.addEventListener('click', () =>{
    if(isblocked){
        alert('You are blocked because she dislikes you.');
        return;
    }

    const message = typeMsg.value.trim();
    if(message){
        if(message.toLowerCase() === 'i love you'){
            const blockedMsg = document.createElement('p');
            blockedMsg.classList.add('msg', 'Blocked');
            blockedMsg.textContent = "You are blocked";
            showMsg.appendChild(blockedMsg);
            isblocked = true;
            typeMsg.value = '';
            return;
        }
        const newMessage = document.createElement('p');
        newMessage.classList.add('msg')
        newMessage.textContent = message;
        showMsg.appendChild(newMessage);
        typeMsg.value = '';
    }else{
        alert('kuch type tu kar')
    }
});

showicon.addEventListener('click', () =>{
    if(hideicons.style.display === 'block'){
        hideicons.style.display = 'none'
    }else{
        hideicons.style.display = 'block'
    }
})