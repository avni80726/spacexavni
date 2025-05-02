import React from 'react';

function NumberList() {
    //   const numbers = [1, 2, 3, 4, 5];

    //   return (
    //     <div>
    //       <h2>Numbers:</h2>
    //       <ul>
    //         {numbers.map((num) => (
    //           <li key={num}>{num}</li>
    //         ))}
    //       </ul>
    //     </div>
    //   );

    const people = [
        { name: 'Alice', age: 25 },
        { name: 'Bob', age: 30 },
        { name: 'Charlie', age: 35 }
    ];
    return (
        <div>
            <h2>people:</h2>
            <ul>
                {people.map((person, index) => (
                    <li key={index}>
                        {person.name} ,{person.age}
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default NumberList;
