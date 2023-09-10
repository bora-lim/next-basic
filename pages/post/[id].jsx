import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

function Detail() {
    const router = useRouter();
    console.log(router);

    const [load, setLoad] = useState(false);

    const id = router.query.id;
        const name = router.query.name;
        const age = router.query.age;

    useEffect(() => {
        if (typeof window !== undefined) {
            setLoad(true);
        }
        console.log(load);
    }, [load])

    return (
        <main>
            <p>{name}</p>
            <p>{age}</p>
        </main>
    )
}

export default Detail