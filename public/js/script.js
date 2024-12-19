console.log('Hallo World')
$.ajax({
    url: "http://192.168.100.26:3000/get_product",
    type: "GET",
    dataType: "json",
    success: function(data) {
        console.log(data)
        $.each(data, function(i, data) {
            $('#list-product').append(`<div class="w-[23rem] flex flex-wrap flex-col border border-aaa shadow-sm bg-slate-100 rounded">
                    <div class=" mb-4 relative overflow-hidden">
                        <img src="http://192.168.100.26:3000/image/${data.gambar}" alt="" class="">
                    </div>
                    <div class=" w-full pl-3 pr-3 flex flex-wrap flex-col">
                        <h5 class="w-full font-Poppins font-bold text-xl mb-3 whitespace-nowrap overflow-hidden text-ellipsis">${data.nama}</h5>
                        <p class="mb-3">${data.description}</p>
                        <h5 class="font-bold text-lg mb-3">Rp. ${data.harga}</h5>
                        <a href="" class="mb-3">Beli seakrang</a>
                    </div>
                </div>`)
        })
    }
})