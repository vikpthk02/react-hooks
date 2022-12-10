import React, { useContext } from 'react'
// import { AppContext } from './hooks/useContext/ContextAPI';
// C:\Users\Mr. Vivek Pathak\reacthooks-redux\src\components\hooks\useContext\ContextAPI.jsx

// BY PROPS-DRILLING
const CompC = ({ props }) => {
    const { firstname, lastname, age } = props;
    return (
        <div>
            <h2>FirstName - {firstname}</h2>
            <br />
            <h2>LastName - {lastname}</h2>
            <br />
            <h2>Age - {age}</h2>

        </div>
    )
}


// BY CONTEXTAPI
// const CompC = () => {
//     const UserData = useContext(AppContext);
//     return (
//         <div>
//             <h1>Name - {UserData.Name}</h1>
//             <br />
//             <h1>Age - {UserData.Age}</h1>

//         </div>
//     )
// }

export default CompC
