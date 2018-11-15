import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getRestaurant } from '../Apis';

class Restaurants extends Component {
    // Get data trước
    componentWillMount() {
        getRestaurant(this.props.restaurantId);
    }
    render() {
        const restaurantDetail = this.props.restaurantDetail;
        console.log(restaurantDetail);
        if (!this.props.restaurantDetail) return <div>Loading...</div>;
        return (
            <div>
                <h2>{", " + restaurantDetail}</h2>
            </div>
        );
    }
}
function mapStateToProps(state, ownProps) {
    const restaurantId = ownProps.match.params.id;
    // const data = "a: "+ state._root.entries;
    // console.log(data);
    return {
        restaurantId,
        restaurantDetail: state.getIn(['restaurantDetail', restaurantId])
    };
}
export default connect(mapStateToProps)(Restaurants);