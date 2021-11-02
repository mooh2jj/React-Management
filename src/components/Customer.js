import React from "react";
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'

const Customer = (props) => {
    return (
        // <div>
        //     <CustomerProfile 
        //         id={props.id}
        //         image={props.image}
        //         name={props.name}
        //     />
        //     <CustomerInfo 
        //         birthday={props.birthday}
        //         gender={props.gender}
        //         job={props.job}
        //     />
        // </div>
        <TableRow>
            <TableCell>{props.id}</TableCell>
            <TableCell><img src={props.image} alt="profile image"/></TableCell>
            <TableCell>{props.name}</TableCell>
            <TableCell>{props.birthday}</TableCell>
            <TableCell>{props.gender}</TableCell>
            <TableCell>{props.job}</TableCell>
        </TableRow>
    )
}

// const CustomerProfile = (props) => {
//     return (
//         <div>
//             <img src={props.image} alt="profile" />
//             <h2>{props.name}({props.id})</h2>
//         </div>
//     )
// }

// const CustomerInfo = (props) => {
//     return (
//         <div>
//             <p>{props.birthday}</p>
//             <p>{props.gender}</p>
//             <p>{props.job}</p>
//         </div>
//     )
// }

export default Customer;
