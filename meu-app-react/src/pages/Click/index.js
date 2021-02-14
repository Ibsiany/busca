import React, {useState} from 'react'

function ClickedLinkCount(props) {
   const {url, name, about} = props;
   const [count, setCount] = useState(0);
   
   return (
    <div>
        <a 
            href={url} 
            target="_blank" 
            onClick={() => {setCount(count+1)}}>{name}
        </a> 
        <p>{about}</p>
        <span>{count} visita(s) no site.</span>
    </div> 
    );
}

export default ClickedLinkCount;