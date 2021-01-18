import React, {Fragment, useState} from "react";

const LikeButton = () => {
    const [megusta, setMeGusta] = useState(true);
    
    return (
        <Fragment>
            <button onClick={() => setMeGusta(!megusta)} className={megusta ? "likebutton" : "likebutton2"}>
                {megusta ? "Le diste me gusta" : "Dale me gusta"}
            </button>
        </Fragment>
    )
}
export default LikeButton;