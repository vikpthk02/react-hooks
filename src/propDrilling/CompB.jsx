import React from 'react';
import CompC from './CompC';

// By PropsDrilling
const CompB = ({ props }) => {
    return (
        <div>
            <CompC props={props} />
        </div>
    );
}

// By ContextAPI
// const CompB = () => {
//     return (
//         <div>
//             <CompC />
//         </div>
//     );
// }
export default CompB;
