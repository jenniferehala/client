import React, { useEffect } from 'react';

function Course_List() {
    const [chapter,setChapters ] = useState([]);

    useEffect(() => {
        axios.get("https://localhost:8000/api/stack/findAllChapters")
            
    })

    return (
        <div>
            {
                allStacks.map
            }

        </div>);
}

export default Course_List;
