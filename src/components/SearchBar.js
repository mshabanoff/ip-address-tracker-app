import { Fragment, useRef} from 'react';

import './SearchBar.css'

import arrow from '../assets/icon-arrow.svg';


const SearchBox = (props) => {

    const input = useRef()

    return (
        <Fragment>
                <div className="container text-center mt-3">
                <input onKeyDown={(e) => { if(e.key === 'Enter') if(input.current.value !== '') props.setIp(input.current.value) }} type="text" ref={input} placeholder="Search for any IP address or domain" />
                <button onClick = {() => { if(input.current.value !== '') props.setIp(input.current.value) }}> <img src={arrow} width='11' alt="Go"/> </button>
                </div>
        </Fragment>
    )


}

export default SearchBox;