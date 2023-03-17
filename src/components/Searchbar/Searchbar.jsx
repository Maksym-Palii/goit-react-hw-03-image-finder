import { Component } from "react";
import { ImSearch } from 'react-icons/im'
import toast from 'react-hot-toast'
import css from "components/Searchbar/Searchbar.module.css"

export class Searchbar extends Component{
    state = {
        searchQuery: "",
    }

    handleSubmit = evt => {
        evt.preventDefault();
            const{searchQuery} = this.state
        if (searchQuery.trim() === "") {
            toast.error('Enter a query in the search field')
            this.props.submit("")
            return
        }

        this.props.submit(searchQuery)
        this.reset();
    }
 

    reset() {
        this.setState({searchQuery: ""})
    }

    handleChange = evt => {
        const {name, value} = evt.target
        this.setState({ [name]: value });
    };

    render() {
        return (
            <header className={css.searchbar}>
                <form className={css.searchForm} onSubmit={this.handleSubmit}>
                    <button type="submit" className={css.button}>
                    <span className={css.buttonLabel}><ImSearch/></span>
                    </button>

                    <input
                    onChange={this.handleChange}
                    name="searchQuery"
                    value={this.state.searchQuery}
                    className={css.input}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    />
                </form>
            </header>
        )
    }
}