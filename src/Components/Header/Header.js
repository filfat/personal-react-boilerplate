import React, { Component } from 'react';

import LinkResolver from '../../Utils/LinkResolver';
import API from '../../Utils/API';

import './Header.css';

class Header extends Component {
    state = {}

    constructor (props) {
        super(props);

        this.handleScroll = this.handleScroll.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }

    componentDidMount() {
        let self = this;

        const Prismic = API.Prismic;
        Prismic.then(api => {
            api.getSingle('header').then((document) => {
                self.setState({ doc: document });
            });
        }).catch(ex => {
            self.setState({ doc: {offline: true} });
            console.log(ex);
        });

        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll () {
        if (!this.state.scrolled) {
            if (window.scrollY >= 15)
                this.setState({ scrolled : true});
        } else if (this.state.scrolled)
            if (window.scrollY < 15)
                this.setState({ scrolled : false});
    }
    handleToggle () {
        this.setState({
            prev_scroll: window.pageYOffset,
            menu_open: !this.state.menu_open
        });
    }

    render () {
        if (!this.state.doc) return null;
        const doc = this.state.doc;

        if (!this.state.links) {
            let links = [];
            for (let i = 0; i < doc.data.body.length; i++) {
                let link = doc.data.body[i];

                if(link.slice_type === 'link')
                    links.push(<a key={i} className="link" href={LinkResolver(link.primary.link)}>{link.primary.title}</a>);
                else if (link.slice_type === 'button')
                    links.push(<a key={i} className="link button" href={LinkResolver(link.primary.link)}>{link.primary.title}</a>);
            }

            this.setState({ links: links });
        }

        return (
            <header className={this.state.scrolled ? 'scrolled' : ''}>
                <div className="container">
                    <a className={this.state.menu_open ? 'logo force-white' : 'logo'} href="/">Header</a>
                    <div className={this.state.menu_open ? 'toggle-button force-white' : 'toggle-button'} onClick={this.handleToggle}><i className="material-icons">menu</i></div>

                    <nav className={this.state.menu_open ? 'open' : ''}>
                        {this.state.links}
                    </nav>
                </div>
            </header>
        );
    }
}

export default Header;