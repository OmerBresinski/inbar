import React from "react";
import Image from "../Image";

const Avatar = () => {
    return <Image src={AVATAR_SRC} radius="50%" height={"84px"} width={"84px"} alt="Inbar Even Zur" />;
};

const AVATAR_SRC =
    "https://media-exp1.licdn.com/dms/image/C4E03AQFvz3olA7VWDA/profile-displayphoto-shrink_800_800/0/1634473995714?e=1640822400&v=beta&t=X26kZePLOszzQnAoK4ytcbt_BCu8CRa7pDzR0HoFrM4";

export default Avatar;
