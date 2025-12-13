$('#btnDangKi').click(function(e){
    e.preventDefault();

    var name = $('#name').val();
    var email = $('#email').val();
    var password = $('#password').val();

    var isValid = true;
    
    $('#nameErr').text('');
    $('#emailErr').text('');
    $('#passwordErr').text('');


    if(name == ''){
        $('#nameErr').text('Vui lòng nhập tên đăng nhập');
        isValid = false;
    }
    if(email == ''){
        $('#emailErr').text('Vui lòng nhập email');
        isValid = false;
    }
    if(password == ''){
        $('#passwordErr').text('Vui lòng nhập mật khẩu');
        isValid = false;
    }
    if(password.length < 6){
        $('#passwordErr').text('Mật khẩu phải có ít nhất 6 ký tự');
        isValid = false;
    }
    if(email.indexOf('@') == -1){
        $('#emailErr').text('Email không hợp lệ');
        isValid = false;
    }

    if(!isValid){
        return
    }

    $.ajax({
        url: 'https://692b135b7615a15ff24ea9d3.mockapi.io/user',
        type: 'GET',
        dataType: 'json',
        success: function(data){
            var coEmail = data.some(function(user){
                return user.email == email;
            });
            if(coEmail){
                $('#emailErr').text('Email đã tồn tại');
                return;
            }
            $.ajax({
                url: 'https://692b135b7615a15ff24ea9d3.mockapi.io/user',
                type: 'POST',
                data: {
                    name: name,
                    email: email,
                    password: password,
                    createAt: new Date().toISOString()
                },
                success: function(){
                    alert('Đăng ký thành công');
                    window.location.href = 'login.html';
                }
            });
        },

    })
});
$('#btnDangKi').click(function(e){
    e.preventDefault();
    var name = $('#name').val();
    var password = $('#password').val();
    var isValid = true;
    
    $('#nameErr').text('');
    $('#passwordErr').text('');

    if(name == ''){
        $('#nameErr').text('Vui lòng nhập tên đăng nhập');
        isValid = false;
    }
    if(password == ''){
        $('#passwordErr').text('Vui lòng nhập mật khẩu');
        isValid = false;
    }
    if(!isValid){
        return
    }
    $.ajax({
        url: 'https://692b135b7615a15ff24ea9d3.mockapi.io/user',
        type: 'GET',
        dataType: 'json',
        success: function(data){
            data.forEach(u => {
                if(u.name == !name && u.password == !password){
                    $('#passwordErr').text('sai tên đăng nhập hoặc mật khẩu');
                }
                else{
                    alert('Đăng nhập thành công');
                    window.location.href = 'index.html';
                }
            });
        },

    })
});