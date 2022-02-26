import React from 'react';
import './Salary.css'
const Salary = (props) => {
    // console.log(props.salary)
    const salary=props.salary;
    let total=parseInt(0)
    for (let i = 0; i < salary.length; i++) {
        const playerSalary = salary[i];
        console.log(playerSalary)
        total=total+parseInt(playerSalary.salary)
        
    }
    return (
        <div className='salary'>
            <h4>Total player add:{props.salary.length}</h4>
            <h3 >Total  monthly salary:{total}</h3>

        </div>
    );
};

export default Salary;