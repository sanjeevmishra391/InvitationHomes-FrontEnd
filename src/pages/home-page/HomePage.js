import React, { Component } from 'react'
import './home-page-style.css'
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';
import Card from '../../components/card/Card'

const properties = [
    { id: '1',
    imgUrl: 'https://images.unsplash.com/photo-1542665952-14513db15293?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
    name: 'Stephen Wedding Hall',
    address: 'George Town, Naini, Prayagraj, Uttar Pradesh, 211008',
    rating: '3',
    basePrice: '$120' },

    { id: '2',
    imgUrl: 'https://images.unsplash.com/photo-1542665952-14513db15293?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
    name: 'Stuart Wedding Hall',
    address: 'George Town, Naini, Prayagraj, Uttar Pradesh, 211008',
    rating: '3.5',
    basePrice: '$100' },

    { id: '3',
    imgUrl: 'https://images.unsplash.com/photo-1542665952-14513db15293?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
    name: 'Rachel Wedding Hall',
    address: 'George Town, Naini, Prayagraj, Uttar Pradesh, 211008',
    rating: '4',
    basePrice: '$200' } 
]

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            popularProperties: properties
        }
    }

    async componentDidMount() {
        let data = await this.getProperties();
        this.setState({popularProperties: data});
    }

    getProperties = async () => {
        return fetch('https://arcane-taiga-18190.herokuapp.com/api/property')
        .then(res => {
            console.log(res)
            return res.json()})
        .then(data => {
            return data;
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div className='homepage' key={2}>
                <section className='home-top'></section>
                <section className='home-top-below'>
                    <div className='container'>
                        <h2 className='oneliner'>Places that make your events a good memory to look back.</h2>
                    </div>
                </section>
                <section className='popular-property'>
                    <div className='container' key={3}>
                        <p className='section-title'>Popular Properties</p>
                        {/* <Link to='/property' className='shadow explore'>
                            <span>Explore More</span>
                            <ArrowForwardIosIcon className='arrow'/>
                        </Link> */}
                    </div>
                    <div className='property-items'>
                        {
                            this.state.popularProperties.map(({_id, imgUrl, name, address, rating, basePrice}) => {
                                return (<div className='card-wrapper'>
                                    <Link to={`/property/${_id}`}>
                                        <Card 
                                            key={_id} 
                                            url={imgUrl}
                                            title={name}
                                            text={`${address.colony}, ${address.city}, ${address.state}, ${address.pincode}`}
                                            rating={rating}
                                            priceTag='Base Price'
                                            price={`Rs. ${basePrice}`}
                                        />
                                    </Link>
                                </div>)
                            })
                        }
                    </div>
                </section>
            </div>
        );
    }
}

export default HomePage;