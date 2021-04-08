import React, { Component } from 'react';
import './itemDetails.css';
import ErrorMessage from '../errorMessage/errorMessage';
import Spinner from '../spinner';

const Field = ({ item, field, label }) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>)
}

export { Field };

export default class ItemDetails extends Component {

    state = {
        item: null,
        loading: true,
        error: false
    }

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem();
        }
    }


    updateItem() {

        const { itemId, getData } = this.props;

        console.log(getData);
        console.log(this.props);

        if (!itemId) {
            return;
        }

        getData(itemId)
            .then((item) => {
                this.setState({
                    item: item,
                    loading: false
                })

            })

    }



    render() {

        if (!this.state.item) {
            return <span className='select-error'>Please select item in a list</span>
        }

        const { item } = this.state;
        const { name } = item;

        if (this.state.loading) {
            return (
                <div className="char-details rounded">
                    <Spinner />
                </div>
            )
        }

        return (
            <div className="char-details rounded">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    {React.Children.map(this.props.children, (child) => {
                        return React.cloneElement(child, { item })
                    })
                    }
                </ul>
            </div>
        );
    }
}