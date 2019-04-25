$.ajax({
    type: "GET",
    url: 'https://jsonplaceholder.typicode.com/todos/',
    dataType: 'json',
    success: function (obj) {
  
            $('#example').DataTable({
                data: obj,
                columns: [
                    { data: "id" },
                    { data: "title" },
                    { data: "completed"}
                ]
            });
    },
    error: function (obj) {
        alert(obj.msg);
    }
});
