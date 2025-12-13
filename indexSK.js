$(document).ready(function(){
    hienThiSK();
})
function hienThiSK(){
    $.ajax({
        url: 'https://692b135b7615a15ff24ea9d3.mockapi.io/events',
        type: 'GET',
        dataType: 'json',
        success: function(data){
            var DSSK = '';
            data.forEach(function(event){
                DSSK += `
                <tr>
                    <td>${event.id}</td>
                    <td>${event.title}</td>
                    <td>${event.location}</td>
                    <td>${event.date}</td>
                    <td>${event.time}</td>
                    <td>${event.organizer}</td>
                    <td>${event.description}</td>
                    <td>${event.createAt}</td>
                    
                    <td><a class="btn btn-warning" href="sua?id=${event.id}">Sửa</a></td>
                    <td><button class="btn btn-danger" onclick=xoaSK(${event.id})">Xóa</button></td>
                </tr>
                `;
            });
            $('#danhSachSK').html(html);
        }
    });
}
function xoaSK(id){
    if(confirm('Bạn có chắc muốn xóa sự kiện này không?')){
        $.ajax({
            url: 'https://692b135b7615a15ff24ea9d3.mockapi.io/events/' + id,
            type: 'DELETE',
            success: function(){
                alert('Xóa sự kiện thành công');
                hienThiSK();
            }
        });
    }
}


