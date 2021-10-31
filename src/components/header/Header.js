import React from 'react'
import './header-style.css'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import InputIcon from '../input-icon/InputIcon';
import { Avatar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const cities = [
    {
        id: 12,
        name: 'Mumbai'
    },
    {
        id: 21,
        name: 'Prayagraj'
    },
    {
        id: 35,
        name: 'Agra'
    },
    {
        id: 47,
        name: 'Lucknow'
    }
]

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            mainSearch: '',
            selectedCity: 1
        }
    }

    handleSearchSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.mainSearch);
    }

    handleChange = (event) => {
        const {value, name} = event.target;
        this.setState({[name]: value});
    }

    handleEnter = (event) => {
        if(event.code === 'Enter') {
            event.preventDefault();
            this.handleSearchSubmit(event);
        } else {
            this.handleChange(event);
        }
    }

    handleSelect = (event) => {
        const cityId = event.target.value;
        this.setState({selectedCity: cityId}, () => {
            console.log(this.state.selectedCity);
        })
    }

    render() {
        return (
            <header>
                <div className='container' key={4}>
                    <div className='start'>
                        <div className='hamburger-icon'>
                            <MenuIcon />
                        </div>
                        <Link className='logo-container' to="/">
                            <span>InvitationHomes</span>
                        </Link>
                    </div>
                    <div className='center'>
                        <form className='search-form' onSubmit={this.handleSearchChange}>
                            <InputIcon 
                                name='mainSearch' 
                                type='search' 
                                value={this.state.mainSearch} 
                                handleChange={this.handleChange}
                                handleEnter={this.handleEnter}
                                placeholder="Search"
                                InputIcon={SearchIcon}
                                required 
                            />
                        </form>
                        <form className='city-form shadow'>
                            <select name="city" id="city" className='shadow' onChange={this.handleSelect} disabled>
                                {
                                    cities.map((city) => {
                                        return (
                                            <option key={city.id} className="option" value={city.id} name={city.name}>{city.name}</option>
                                        )
                                    })
                                }
                            </select>
                        </form>
                    </div>
                    <div className='end' >
                        {
                            this.props.currentUser ? 
                            <Link className='avatar-wrapper' to={`/user/${this.props.currentUser._id}`}>
                                <Avatar alt="User profile" src="https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png" />
                            </Link>
                            : 
                            <Link className='avatar-wrapper' to='/auth'>
                                <Avatar alt="Not logges user profile" src="" />
                            </Link>
                        }
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;