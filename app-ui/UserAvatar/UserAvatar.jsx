import React, { useEffect, useRef, useState } from 'react'
import { getImage } from '@/utils/helper';
import Image from 'next/image';


const UserAvatar = (props) => {

    const { data,
        height = 50,
        width = 50,
    } = props;

    const imageRef = useRef(null);

    const [imnage, setImage] = useState('')

    useEffect(() => {
        if (data?.photo) {
            setImage(getImage(data?.photo))
        }
    }
        , [data])

    const handleError = () => {
        setImage(data?.photo)
    }

    return (
        <>
            {imnage &&
                <Image
                    ref={imageRef}
                    onError={handleError}
                    src={imnage}
                    alt="user"

                    height={height}
                    width={width}
                />}
        </>
    )
}

export default UserAvatar