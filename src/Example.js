import React from 'react';

const Example = () => {

    var Data = [ { category: 1, person: "x", filename: "file1.txt" },
    { category: 1, person: "y", filename: "file2.txt" },
    { category: 2, person: "x", filename: "file3.txt" },
    { category: 1, person: "x", filename: "file4.txt" },
    { category: 1, person: "y", filename: "file5.txt" }
    ];
    // Data.filter( item => console.log( item.category == 1 && item.category ) );
    var a = [];
    for ( var i = 0; i < Data.length; i++ ) {
        if ( Data[ i ].category == Data[ i ].category && Data[ i ].person == Data[ i ].person ) {
            console.log( a.push[ Data[ i ].filename ] );
        }
    }

    return (
        <div>

        </div>
    );
};

export default Example;




