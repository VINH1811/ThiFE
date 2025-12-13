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
                <div>
                    <h4>${event.id}</h4>
                    <h4>${event.title}</h4>
                    <p>${event.location}</p>
                    <p>${event.date}</p>
                    <p>${event.time}</p>
                    <p>${event.organizer}</p>
                    <p>${event.description}</p>
                    <p>${event.createAt}</p>
                    <button class="btn btn-danger" onclick=themYeuThich(${event.id})">Tim</button>
                </div>
                `;
            });
            $('#danhSachSK').html(html);
        }
    });
}
function hienThiSKTheoNgay(){
    var ngay = $('#ngay').val();
    $.ajax({
        url: 'https://692b135b7615a15ff24ea9d3.mockapi.io/events',
        type: 'GET',
        dataType: 'json',
        success: function(data){
            var DSSK = '';
            data.forEach(function(event){
                if (event.date == ngay){
                    DSSK += `
                    <div>
                        <h4>${event.id}</h4>
                        <h4>${event.title}</h4>
                        <p>${event.location}</p>
                        <p>${event.date}</p>
                        <p>${event.time}</p>
                        <p>${event.organizer}</p>
                        <p>${event.description}</p>
                        <p>${event.createAt}</p>
                        <button class="btn btn-danger" onclick=themYeuThich(${event.id})">Tim</button>
                    </div>
                    `;
                }
            });
            $('#danhSachSK').html(html);
        }
    });
}

function hienThiSKTheoTen(){
    var ten = $('#ten').val();
    $.ajax({
        url: 'https://692b135b7615a15ff24ea9d3.mockapi.io/events',
        type: 'GET',
        dataType: 'json',
        success: function(data){
            var DSSK = '';
            data.forEach(function(event){
                if (event.title == ten){
                    DSSK += `
                    <div>
                        <h4>${event.id}</h4>
                        <h4>${event.title}</h4>
                        <p>${event.location}</p>
                        <p>${event.date}</p>
                        <p>${event.time}</p>
                        <p>${event.organizer}</p>
                        <p>${event.description}</p>
                        <p>${event.createAt}</p>
                        <button class="btn btn-danger" onclick=themYeuThich(${event.id})">Tim</button>
                    </div>
                    `;
                }
            });
            $('#danhSachSK').html(html);
        }
    });
}