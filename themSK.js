function themSK(){
    var title = $('#title').val();
    var location = $('#location').val();
    var date = $('#date').val();
    var time = $('#time').val();
    var organizer = $('#organizer').val();
    var description = $('#description').val();

    var isValid = true
    $('#titleErr').text('')
    $('#locationErr').text('')
    $('#dateErr').text('')
    $('#timeErr').text('')
    $('#organizerErr').text('')
    $('#descriptionErr').text('')

    if (title = ''){
        $('#titleErr').text('vui lòng nhập title')
        isValid = false
    }
    if (location = ''){
        $('#locationErr').text('vui lòng nhập location')
        isValid = false
    }
    if (date = ''){
        $('#dateErr').text('vui lòng nhập date')
        isValid = false
    }
    if (time = ''){
        $('#timeErr').text('vui lòng nhập time')
        isValid = false
    }
    if (organizer = ''){
        $('#organizerErr').text('vui lòng nhập organizer')
        isValid = false
    }
    if (description = ''){
        $('#descriptionErr').text('vui lòng nhập description')
        isValid = false
    }
    if(isValid){
        return
    }
    $.ajax({
        url: 'https://692b135b7615a15ff24ea9d3.mockapi.io/events',
        type: 'GET',
        dataType: 'json',
        success: function(data){
            var coTitle = data.some(function(sk){
                return sk.title == title;
            });
            if(coTitle){
                $('#titleErr').text('Title đã tồn tại');
                return;
            }
            $.ajax({
                url: 'https://692b135b7615a15ff24ea9d3.mockapi.io/events',
                type: 'POST',
                data: {
                    title: title,
                    date: date,
                    location: location,
                    description: description,
                    time: time,
                    organizer: organizer,
                    createAt: new Date().toISOString()
                },
                success: function(){
                    alert('Thêm sự kiện thành công');
                    window.location.href = 'indexSK.html';
                }
            });
        },

    }) 
}