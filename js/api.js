var form = document.getElementById('form')

form.addEventListener('submit', function(e){

    e.preventDefault()

    var topic = document.getElementById('topic').value
    var when = document.getElementById('when').value
    var what = document.getElementById('what').value
    var who = document.getElementById('who').value
    var where = document.getElementById('where').value
    var why = document.getElementById('why').value

    fetch("http://5fa48362aac2.ngrok.io/generate",{
        method:'POST',
        body:JSON.stringify({
            topic:topic,
            when:when,
            what:what,
            who:who,
            where:where,
            why:why
        }),
        headers:{
            "Content-Type":"application/json"
        }
    })
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
        var messages = document.getElementById('messages')

        messages.innerHTML = `<p>${data.p1}${data.p2}${data.p3}</p>`
    })
})