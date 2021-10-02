import axios from 'axios';
import React, { Component } from 'react';
import DropzoneComponent from 'react-dropzone-component'

import RichTextEditor from '../forms/rich-text-editor';

export default class BlogForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            title: '',
            blog_status: '',
            content: '',
            featured_image: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRichTextEditorChange = this.handleRichTextEditorChange.bind(this);

        this.componentConfig = this.componentConfig.bind(this);
        this.djsConfig = this.djsConfig.bind(this);
        this.handleFeaturedImageDrop = this.handleFeaturedImageDrop.bind(this);

        this.featuredImageRef = React.createRef();
    }

    componentWillMount() {
        if (this.props.editMode) {
            this.setState({
                id: this.props.blog.id,
                title: this.props.blog.title,
                status: this.props.blog.status,
            })
        }
    }

    handleFeaturedImageDrop() {
        return {
            addedfile: file => this.setState({ featured_image: file})
        }
    }

    djsConfig() {
        return {
            addRemoveLinks: true,
            maxFiles: 1
        }
    }

    componentConfig() {
        return {
            iconFiletypes: ['.jpg', '.png'],
            showFiletypeIcon: true,
            postUrl: 'https://httpbin.org/post'
        }
    }

    handleRichTextEditorChange(content) {
        this.setState({
            content
        })
    }

    buildForm() {
        let formData = new FormData();

        formData.append('portfolio_blog[title]', this.state.title);
        formData.append('portfolio_blog[blog_status]', this.state.blog_status);
        formData.append('portfolio_blog[content]', this.state.content);

        if (this.state.featured_image) {
        formData.append('portfolio_blog[featured_image]', this.state.featured_image);
        }

        return formData;
    }

    handleSubmit(event) {
        axios.post(
            'https://nathenjohnson.devcamp.space/portfolio/portfolio_blogs',
            this.buildForm(),
            { withCredentials: true }
        ).then(response => {
            if (this.state.featured_image) {
                this.featuredImageRef.current.dropzone.removeAllFiles();
            }

            this.setState({
                title: '',
                blog_status: '',
                content: ''
            })
            
            

            this.props.handleSuccessfulFormSubmission(response.data);

        }).catch(error => {
            console.log('Submit to API error: ', error);
        })


        this.props.handleSuccessfulFormSubmission(this.state);
        event.preventDefault();
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

     render() {
       return(
         <form onSubmit={this.handleSubmit} className="blog-form-wrapper">
             <div className="two-column">
             <input 
                onChange={this.handleChange} 
                type="text"
                name='title'
                placeholder='Blog Title'
                value={this.state.title}
            />

             <input 
                onChange={this.handleChange} 
                type="text"
                name='blog_status'
                placeholder='Blog Status'
                value={this.state.blog_status}
            />
            </div>

            <div className="one-column">
                <RichTextEditor handleRichTextEditorChange={this.handleRichTextEditorChange}/>
            </div>

            <div className='image-uploaders'>
                <DropzoneComponent
                    ref={this.featuredImageRef}
                    config={this.componentConfig()}
                    djsConfig={this.djsConfig()}
                    eventHandlers={this.handleFeaturedImageDrop()}>
                        <div className='dz-message'>Featured Image</div>
                </DropzoneComponent>

            </div>

             <button type="submit" className="btn">Save</button>
         </form>
       );
   }
}