// console.log('Hallo World')
// $.ajax({
//     url: "http://192.168.100.26:3000/get_product",
//     type: "GET",
//     dataType: "json",
//     success: function(data) {
//         console.log(data)
//         $.each(data, function(i, data) {
//             $('#daftar-produk').append(`<div class="w-full lg:w-1/2 xl:w-1/3">
//                     <div class="rounded-xl shadow-lg bg-white overflow-hidden mb-10 dark:bg-slate-800">
//                         <img src="http://192.168.100.26:3000/image/${data.gambar}" alt="Programming" class="w-full">

//                         <div class="py-8 px-6">
//                             <h3 class=" mb-3 text-xl font-semibold text-dark truncate dark:text-white">${data.nama}
//                             </h3>
//                             <p class="text-secondary mb-4 font-medium text-base">${data.description}</p>
//                                 <h3 class=" mb-3 text-xl font-semibold text-dark truncate dark:text-white">${data.harga}
//                                 </h3>
//                             <a href="#"
//                                 class="font-medium text-white text-sm bg-red-700 py-2 px-4 rounded-lg hover:opacity-90">Baca
//                                 Selengkapnya</a>
//                         </div>
//                     </div>
//                 </div>`)
//         })
//     }
// })