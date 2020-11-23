// var firebaseConfig = {
//     //プロジェクトを識別する
//     apiKey: "AIzaSyCOAEGicbFCY8QRoyHveNtSJ62uub6i_o0",
//     authDomain: "sample-chatapp28.firebaseapp.com",
//     databaseURL: "https://sample-chatapp28.firebaseio.com",
//     projectId: "sample-chatapp28",
//     storageBucket: "sample-chatapp28.appspot.com",
//     messagingSenderId: "119003099753",
//     appId: "1:119003099753:web:b37acf23cc4785b3f828f8"
//     //ここまで
// };

// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore().collection('chat')

// // 日時をいい感じの形式にする関数
// function convertFromFirestoreTimestampToDatetime(timestamp) {
//     const _d = timestamp ? new Date(timestamp * 1000) : new Date();
//     const Y = _d.getFullYear();
//     const m = (_d.getMonth() + 1).toString().padStart(2, '0');
//     const d = _d.getDate().toString().padStart(2, '0');
//     const H = _d.getHours().toString().padStart(2, '0');
//     const i = _d.getMinutes().toString().padStart(2, '0');
//     const s = _d.getSeconds().toString().padStart(2, '0');
//     return `${Y}/${m}/${d} ${H}:${i}:${s}`;
// }

// // 送信ボタンクリック時にデータを送信する処理
// $('#send').on('click', function () {
//     const data = {
//         name: $('#name').val(),
//         text: $('#text').val(),
//         time: firebase.firestore.FieldValue.serverTimestamp(),
//     };
//     db.add(data);
//     $('#text').val('');
// });
// $(window).keydown(function (e) {
//     if (e.keyCode == 13) {
//         const data = {
//             name: $('#name').val(),
//             text: $('#text').val(),
//             time: firebase.firestore.FieldValue.serverTimestamp(),
//         };
//         db.add(data);
//         $('#text').val('');
//     }
// });

// // データをリアルタイムに取得する処理
// db.orderBy('time', 'desc').onSnapshot(function (querySnapshot) {
//     // まずはconsole.log()で出力してデータの形を確認！
//     const dataArray = [];
//     querySnapshot.docs.forEach(function (doc) {
//         const data = {
//             id: doc.id,
//             data: doc.data(),
//         };
//         dataArray.push(data);
//     });
//     console.log(dataArray);

//     const tagArray = [];
//     dataArray.forEach(function (data) {
//         const tag = `
//               <li id= "${data.id}" >
//                 <p>${data.data.name}</p>
//                 <p>${data.data.text}</p>
//                 <p>${convertFromFirestoreTimestampToDatetime(data.data.time.seconds)}</p>
//               </li >
//               `;
//         tagArray.push(tag);
//     });
//     $('#output').html(tagArray);
// });