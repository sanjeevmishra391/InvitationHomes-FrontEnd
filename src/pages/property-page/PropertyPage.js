import React, {Component} from 'react'
import './property-page-style.css'
import { Rating, Button, IconButton, Snackbar } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';

const property = {
    _id: "6178d48a6be5ee55888d0a8e",
    name: "Stephen Wedding Hall",
    type: "Wedding Hall",
    description: "A nice place to make your marriage beautiful",
    basePrice: "50,000",
    facilities: [
        "Wi-Fi",
        "AC",
        "Security",
        "Parking"
    ],
    imgUrl: "https://images.unsplash.com/photo-1601482441062-b9f13131f33a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
    address: {
        colony: "George Colony",
        city: "Mumbai",
        state: "Maharashtra",
        pincode: 210239,
        _id: "6178d48a6be5ee55888d0a8d"
    },
    __v: 0
}

function SimpleSnackbar(props) {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
    props.handleClick()
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <Button onClick={handleClick} 
            variant="contained" 
            sx={{backgroundColor: '#277ab6'}}
            size='large'>Book Now</Button>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Property Booked"
        action={action}
      />
    </div>
  );
}


class PropertyPage extends Component {

    constructor(props) {
        super(props);
        this.state= {
            propertyData: property
        }
    }

    async componentDidMount() {
        let data = await this.getPropertyData()
        this.setState({propertyData: data});
    }

    getPropertyData = async () => {
        return fetch(`https://arcane-taiga-18190.herokuapp.com/api/property/${this.props.match.params.id}`)
        .then(res => res.json())
        .then(data => {
            return data;
        })
        .catch(err => console.log(err))
    }

    handleClick = () => {
        console.log("Booked", this.state.propertyData._id);
    }

    render() {
        let {name, imgUrl, rating, description, facilities, basePrice, address} = this.state.propertyData
        let facility = "";
        facilities.forEach(ele => {
            facility = ele + ", " + facility;
        })
        return (
            <div className='property'>
                <div className='container'>
                    <div className='property-block'>
                        <div className='property-img'>
                            <img src={imgUrl} alt='property' />
                         </div>
                        <div className='property-detail'>
                            <p className='card-title'>{name}</p>
                            <p className='card-text'>{description}</p>
                            <p className=''><span className='card-price'>Rs. {basePrice}</span></p>
                            <p>{address.city}</p>
                            <p>{facility}</p>
                            <Rating name="read-only" value={Number(rating)} precision={0.5} readOnly sx={{color: '#277ab6'}}/>
                            <div className='btn-wrapper'>
                                <SimpleSnackbar handleClick={this.handleClick} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PropertyPage;