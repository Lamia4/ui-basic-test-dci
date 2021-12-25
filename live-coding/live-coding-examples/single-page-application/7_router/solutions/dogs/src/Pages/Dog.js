
import React from 'react';

function Dog({ dog, allDogs })
{
    const currentDog = dog.name

  return (
    <div>
      {
        allDogs.map((dog, i) =>
        {
          return <div key={ i }>
            <a
                style={{ color: `${ dog.name === currentDog ? "red" : "black" }` }}
             href={`/dogs/${ dog.name }`}>{ dog.name }</a>
          </div>
        })
      }
        <br/>

        {
            dog.name
        }
    </div>
  );
}


export default Dog;