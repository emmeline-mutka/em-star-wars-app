import { useEffect, useState } from 'react';

const PeopleList = (props) => {
    const [listOfPeople, setListOfPeople] = useState([]);

    useEffect(() => {
        setListOfPeople(props.getPeople);
        console.log("Listan är här ", listOfPeople)
    }, []);

//     let dataList = listOfPeople.map((people, key) => {
//         return (
//             <div className="info-container" key={key}>
//                     <p className="people-name">{people.name}</p>
//             </div>
//         )
//     })

    return (
        <div className="people-content">
            <div className="people-wrapper">
               People list
            </div>
        </div>
    )
}

export default PeopleList;