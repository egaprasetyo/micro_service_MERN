const jwt = require('jsonwebtoken');

const JWT_SECRET = 'bwamicro!23';

// const token = jwt.sign(
//     {
//         data: {
//             kelas: 'bwamicro'
//         }
//     },
//     JWT_SECRET
// );

jwt.sign({data:{kelas: 'bwamicro'}}, JWT_SECRET, (err, token)=>{
    console.log(token)
});
