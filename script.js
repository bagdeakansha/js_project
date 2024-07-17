async function fun(){
    let r=await fetch("http://localhost:3000/student")
    let c=await r.json()
    let sh= document.getElementById('showdata')
    let d=c.map((e)=>`
    <tr>
       <td>${e.id}</td>
       <td>${e.name}</td>
       <td>${e.flight_time}</td>
       <td>${e.flight_name}</td>
       <td>${e.city}</td>
       <td><button onclick="mydelete(${e.id})" id="btn">Delete</button> </td>
       <td><button onclick="myupdate(${e.id})" id="btn1">Edit</button> </td>

    </tr>


    `).join("")
    sh.innerHTML=d
    
}
fun()

function addd(){
    let data={
        id:document.getElementById('id').value, 
        name:document.getElementById('stname').value, 
        city:document.getElementById('city').value, 
        flight_name:document.getElementById('marks').value, 
        flight_time:document.getElementById('age').value, 
    }
    fetch("http://localhost:3000/student",{
        method:"POST",
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(data)
    })
    .then(res=>alert("inserted"))
    .catch(rs=>alert("error"))
}
function mydelete(id){
    fetch(`http://localhost:3000/student/${id}`,{
        method:'DELETE'
    })
    .then(res=>alert("successfully deleted"))
}



// var storeid=0
// function myupdate(id){
//     storeid=id;
//     document.getElementById("myfrm").style.display="block"
//     document.getElementById('id1').value=id
// }
var storeid=0
async function myupdate(id){
    storeid=id
    let res = await fetch(`http://localhost:3000/student/${id}`)
    let r=await res. json()
    let p=`<input type="text" value="${r.id}" id="id1"> <br>
         <input type="text" value="${r.name}" id="name1"> <br>
    <input type="text" value="${r.city}" id="city1"> <br>
    <input type="text" value="${r.flight_name}" id="marks1">  <br>
    <input type="text" value="${r.flight_time}" id="age1"> <br></br>
    <input type="submit" onclick="finalUpdate()"> <br></br>
    `

    document.getElementById('demo').innerHTML=p
}

function finalUpdate(){
    let y={
        id:document.getElementById("id1").value,
        name:document.getElementById("name1").value,
        city:document.getElementById("city1").value,
        flight_name:document.getElementById("marks1").value,
        flight_time:document.getElementById("age1").value,
    }
    console.log(y);
    fetch(`http://localhost:3000/student/${storeid}`,{
        method:'PUT',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(y)
    })
    .then(res=>alert("Updated"))
    .catch(res=>alert("Error"))
}

// function update(){
//     let mydata={
//         id:document.getElementById('id1').value,
//         name:document.getElementById('name1').value,
//         flight_time:document.getElementById('age1').value,
//         flight_name:document.getElementById('marks1').value,
//         city:document.getElementById('city1').value,
//     }
//     fetch(`http://localhost:3000/student/${storeid}`,{
//         method:"PUT",
//         headers:{
//             'Content-type':'application/json'
//         },
//         body:JSON.stringify(mydata)
//     })
//     .then(res=>alert("edit successfully"))
//     .catch(res=>alert("error"))
// }
// function fun2(){
//          let div1=document.getElementById("tog")
//         div1.classList.toggle("main")
// }
// async function myupdate(id){
//     stid=id
//     let mydata= await fetch("http://localhost:3000/student")
//     let con=await mydata.json()
//     let show=document.getElementById('demo')
//     let y=`
//     <input type="text" value="${e.id}"> <br>
//     <input type="text" value="${e.name}"> <br>
//     <input type="text" value="${e.city}"> <br>
//     <input type="text" value="${e.marks}"> <br>
//     <input type="text" value="${e.age}"> <br>
//     `
//     show.innerHTML=y  
// }
// function edit(){
//     let myddd={
//         id:document.getElementById('id1').value,
//         name:document.getElementById('name1').value,
//         city:document.getElementById('city1').value,
//         flight_name:document.getElementById('marks1').value,
//         flight_time:document.getElementById('age1').value
//     }

//     fetch('http://localhost:3000/student/${stid}',{
//         method:'PUT',
//         headers:{
//             'Content-type':'application/json'
//         },
//         body:JSON.stringify(myddd)
//     })
//     .then(res=>alert("Edit ho gya..."))
//     .catch(r=>alert("Error"))
    
//}
