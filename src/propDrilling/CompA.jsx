import React from 'react'
import CompB from './CompB';

// By PropsDrilling
const CompA = ({ props }) => {
    const { firstname, lastname, age } = props;
    console.log(firstname, lastname, age);
    return (
        <div>

            <div>
                <h1>FirstName - {firstname}</h1>
                <br />
                <h1>LastName - {lastname}</h1>
                <br />
                <h1>Age - {age}</h1>

            </div>
            <CompB props={props} />

        </div>
    );
}

// By ContextAPI
// const CompA = () => {
//     return (
//         <div>

//             <CompB />

//         </div>
//     );
// }
export default CompA;
