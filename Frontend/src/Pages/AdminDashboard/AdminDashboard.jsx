import {Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import './AdminDashboard.css'
import axios from 'axios';
import {useNavigate } from 'react-router-dom';


const AdminDashboard = () => {

    var [allimage, setallimage] = useState([]);
    const nav = useNavigate();

    useEffect(()=>{
        if(!sessionStorage.getItem('admin')){
          nav('/')
        }
      })

    const handleLogin = async () => {
        try {
          const response = await axios.get('http://localhost:5000/count');
          console.log(response.data);
         setallimage(response.data);

    
        } catch (error) {
          console.error('error', error);
        }
      };

      useEffect(()=>{
        handleLogin()
      },[])

    //   const usercount=`${allimage.count}`
    //   console.log(usercount);

  return (

    <>
    <header>
 
 <div className="logosec">
     <div className="logo">Admin Dashboard</div>
 </div>

</header>

<div className="main-container">
 <div className="navcontainer">
     <nav className="nav">
         <div className="nav-upper-options">
             <div className="nav-option option1">
                 <img src=
"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAB7CAMAAABjGQ9NAAAAYFBMVEX///8AAAD09PRycnLX19dqamoVFRUpKSmmpqbw8PCJiYk+Pj4tLS06OjrFxcWpqamBgYFERERiYmLn5+dWVla4uLje3t6/v78LCwvQ0NAfHx+goKCRkZGYmJh7e3tOTk7IDJV4AAAE20lEQVRoge2aiZajKhCGhbhh3BIjLonm/d/yVqEmLrSojXdmzuGb6T4Jij8UVFFgW5bBYDAYDAaDwfAvQJ/pRSut+NUwtXRAlpTi/1HKvnKrkn7jXe6cul4U7cCD2vjYK12Vbgmpc0ZPoPAIcdakbZDeMC6HoCBerVx/EZKfJG1ZMSGXlctX4q2Pya+IiLdyNSTRedLYM+3aRZtKCOBfGgTic3WWNpe7tYuO7XauHdHD2owXfvPMq0w6Gdhbrg1Boa477W6OHdDmTj087x1kMnFbhXVU+zLpjsNX6q9zQBuc3kkqbsd+K9TT/1Gbj+SKB4iHM8NXiQp+RDtLLtxySfQNtEUI6hO7Z+o17rZ/nrMU1p8HGn0UiBl0fXJXFiq177v7nYgOlayajDG74bPGKw6PVbC92ji/yzuuLuOOMnC4m/Uk4f7Av1mbRiDd4ESbGD0jWIDJzf4IuFn7SoiHMQGClgVGD7pSjJ9On1cpc6C92tf+Exj8JlxJLOlhX8sW8RGlk3o9EzigXfbaOXhx50gc1VJC7Il0hXe89Wr3/ablp1f01hm9sfB31w7RkIey47HjiCTZcYpN2t14vz4DLJLmmF6JK6QdMfuFRRQpELT6+vHvcEts6WzOIKR8yjjOKojkiQjl4HOkD6ku8VbzSrRYTxcXN/U7FyYe8EhNK/GIl+XA7B+iedDZfk3bsyA7hvbu0L5/+tZrVBTjZkOd8UICLXwqtbvHbddmEQlHhVVv9IbeJ2sYVwz4IW17NNMQzLeyd4IzOxyNMMUIp1u7mu0Q0s6bfDIrl2nfP/PLP6RdEFKMS+NuEbTFavi1uazfo5z1zY5owySKJ8UEd4iwjojMrRkWMC7Z3EFZ1CI1eRzSnvfbynELe4eIEmO4iPqGFeh0SMYHumCA3A5qz8d76HEAPX66H8O/evOM7Bxng/b1oDafzXOkwuXcQ8M7wvAWbu26KJB/tYNfa1PpTYlI+njfDLfIhjQMtC/+8+k3OrQxckr2H1SkDCntm/HxuLz/QLVox5N4/sXG7LxOIPK139VJszbmavJUMPfQc9Hwj8+E1KsNaWjvPgtYiokzfioGX9CsTVeyMQit5aRAszaOuCvb7sKYl/Nm6dbGRduT7XYxqM+cX7s2Lkh1sbghJ8sgrl9brIbp1O4itC7WD6n2LJ7v3YdiKCnTr+Ft4dTzaEszmHxJBsBwpPDjMPwSkbcNWvgZNq4hz/ZpW7E4gQ3TJsmTphVfFrOfyra8Mq579/5Pd1LfXeaG2VZtsv/Mo0ijoeFtLKuSB9uojpy3UGbHeWGz3x+0nnGmuV07XLl6rvZN2e8zXhoIlNqn4q7Z3FutWhJ39bqiMtRe77cLO/WTuNQbz1vOQD3XzuPP+veatvcHtR+klmdKOqDrVvV/SMy1kPyY/Aoyd74F1UdVzs7d5+DZwqVQvnvZT4xZkMKmr+ORS8liczsnvqofcohQmnrM4Lk/gO9Z/BlPWHDmZUlJymZROK6cHH+1NW7asO8eE5w3R8e0MhmuOGvTA/NG57xfborDVS3kclfJN0zjXxORUjZtqEfcs6WrnwY2OPNPJTrS+ZnjgL3//ck22ABsv6KMyaAPCNd0+KZPen+g3f3u7Ed2Cpel1A2PUe3+260tsdtgMBgMBoPBYPgr+Q/LNFW48ap6tgAAAABJRU5ErkJggg=="
                     className="nav-img"
                     alt="dashboard" />
                 <h3> Dashboard</h3>
             </div>

             <div className="nav-option option5">
                 <img src=
"data:image/png;base64,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"
                     className="nav-img"
                     alt="blog" />
                <Link to="/allproduct"><h3> All Products</h3></Link> 
             </div>

             <div className="nav-option option6">
                 <img src=
"data:image/jpeg;base64,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"
                     className="nav-img"
                     alt="settings" />
                 <Link to="/addproduct"><h3>Add Product</h3></Link>
             </div>

             <div className="nav-option option6">
                 <img src="data:image/png;base64,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"
                     className="nav-img"
                     alt="settings" />
                 <Link to="/orderrecived"><h3>Order Recevied</h3></Link>
             </div>

             <div className="nav-option logout">
                 <img src=
"data:image/png;base64,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"
                     className="nav-img"
                     alt="logout" />
               <Link to="/"><h3>Log Out</h3></Link>
             </div>

         </div>
     </nav>
 </div>
 <div className="main">

     <div className="searchbar2">
         <input type="text"
                name=""
                id=""
                placeholder="Search" />
         <div className="searchbtn">
           <img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20221210180758/Untitled-design-(28).png"
                 className="icn srchicn"
                 alt="search-button" />
           </div>
     </div>

            
     <div className="box-container">

         <div className="box box1">
             <div className="text">
                 <h2 className="topic-heading">{allimage.count}</h2>
                 <h2 className="topic">Total Users</h2>
             </div>
             <div className="mk">
             <img src="data:image/png;base64,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" alt="" />
             </div>
         </div>

         <div className="box box2">
             <div className="text">
                 <h2 className="topic-heading">{allimage.ccount}</h2>
                 <h2 className="topic">Total Product</h2>
             </div>
            <div className="mk">
            <img src=
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBYgPsWAmYhDkTja3xVNQ7QYX7PYafix8CKA&usqp=CAU"
                  alt="likes" />
            </div>
             
         </div>

         <div className="box box3">
             <div className="text">
                 <h2 className="topic-heading">{allimage.cccount}</h2>
                 <h2 className="topic">Oreder Recived</h2>
             </div>

             <div className="mk">
            <img src=
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBYgPsWAmYhDkTja3xVNQ7QYX7PYafix8CKA&usqp=CAU"
                  alt="likes" />
            </div>
         </div>

         <div className="box box4">
             <div className="text">
                 <h2 className="topic-heading">0</h2>
                 <h2 className="topic">Feedback</h2>
             </div>

             <div className="mk">
            <img src=
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBYgPsWAmYhDkTja3xVNQ7QYX7PYafix8CKA&usqp=CAU"
                  alt="likes" />
            </div>
         </div>
     </div>
  
 </div>

</div>
</>
  )
}

export default AdminDashboard