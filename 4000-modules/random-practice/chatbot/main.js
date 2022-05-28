window.onload = function() {
    var messageContainer = document.querySelector('.messageContainer');
    var inputSelector = document.querySelector('.writeMessage input');
    var sendMsgBtn = document.querySelector('.writeMessage button');
    var userGreetings = ['hi', 'hello', 'hiya', 'hey'];
    var botGreetings = ['Hello, I am Gladys', 'Leave me alone', 'Nice to meet you', 'I am a broken bot'];
    var botRandomResponse = ['I have never heard of it', 'Whatever', "I don't understand", "I could ask you the same thing"];
    
    inputSelector.focus();
    
    sendMsgBtn.addEventListener('click', sendMessage);
    inputSelector.addEventListener('keyup', checkEnter);

    function checkEnter(e) {
        if (e.key === "Enter") {
            sendMessage();
            inputSelector.value = "";
        }
    }

    function sendMessage() {
        var messageText = inputSelector.value;
        if (filterGreetings(messageText)) {
            createMessage('myMessage', 'Sava', messageText);
            setTimeout(function() {
                createMessage('botsMessage', 'Gladys', botGreetings[Math.floor(Math.random() * botGreetings.length)]);
            })
        } else {
            createMessage('myMessage', 'Sava', messageText);
            setTimeout(function() {
                createMessage('botsMessage', 'Gladys', botRandomResponse[Math.floor(Math.random() * botRandomResponse.length)]);
            }, 500)
        }
        console.log('message sent');
    }

    
    
    function createMessage(msgClass, msgAuthor, msgText) {
        var messageBubble = document.createElement('div');
        var messageAuthor = document.createElement('span'); messageAuthor.innerText = msgAuthor;
        var messageText = document.createElement('p');
        messageText.innerText = msgText;
        
        messageBubble.appendChild(messageAuthor);
        messageBubble.appendChild(messageText);
        messageBubble.classList.add(msgClass);
        messageBubble.classList.add('message');
        
        messageContainer.appendChild(messageBubble);
    }
    
    function filterGreetings(message) {
        if (userGreetings.includes(message.toLowerCase())) {

            return true;
        } else {
            return false;
        }
    }
}