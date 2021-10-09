import axios from 'axios';
import React, { Component} from 'react';

export default class PortfolioDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      portfolioItem: {}
    }

    this.handleRenderPortfolioItem = this.handleRenderPortfolioItem.bind(this);
  }

  handleRenderPortfolioItem(PortfolioItem) {
    axios.get(`
    https://nathenjohnson.devcamp.space/portfolio/portfolio_items/${this.props.match.params.slug}`, { withCredentials: true })
    .then(response => {
      this.setState({
        portfolioItem: response.data.portfolio_item
      })
    }).catch(error => {
      console.log('Portfolio Item error: ', error);
    })
  }

  componentWillMount() {
    this.handleRenderPortfolioItem();
  }

  render() {
    const {
      banner_image_url,
      category,
      description,
      logo_url,
      name,
      thumb_image_url,
      url
    } = this.state.portfolioItem;
    return (
      <div className="portfolio-detail-wrapper">
        <h2>{name}</h2>
        <p>{description}</p>
        <img src={thumb_image_url} />
        <div className="portfilio-footer">
          <img src={logo_url} />
          <a href={url} target="_blank">Click here to visit page</a>
          </div>
      </div>
    );
  }
}