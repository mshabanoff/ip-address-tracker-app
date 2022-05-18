import Card from './Card'

import './Detail.css'

const Details = (props) => {
    
    return (
        <div className="container details">
            <div className="row">
            <Card title="IP ADDRESS" content = {props.detail.ip}/>
            <Card title="LOCATION" content = {props.detail.location.city +', ' + props.detail.location.country + '\n' + props.detail.location.postalCode}/>
            <Card title="TIMEZONE" content = {'UTC ' + props.detail.location.timezone}/>
            <Card title="ISP" content = {props.detail.isp}/>
            </div>
        </div>
    )
    
}

export default Details
