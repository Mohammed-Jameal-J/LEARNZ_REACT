import React from 'react'

const Dashboard = () => {
    const isLoggedIn = true;
    // function (2)
    function website(isLoggedIn){
        if(isLoggedIn){
            return <p>Welcome to the dashboard!</p>
        } else {
            return <p>Please log in to access your dashboard.</p>
        }
    }
  return (
    <>
    <h3>Dashboard</h3>
    {/* terniary operator (1)*/}
    {/* {isLoggedIn ? (
        <> 
        <p>Welcome to the dashboard!</p>
        <h5>HI, Profile</h5>
        </>        
        ) : (<p>Please log in to access your dashboard.</p>)} */}
    {/* {website(isLoggedIn)} */}


    {/* logical AND operator (3)*/}

    {isLoggedIn && <p>Welcome to the dashboard!</p>}
    {!isLoggedIn && <p>Please log in to access your dashboard.</p>}
    </>
  )
}

export default Dashboard