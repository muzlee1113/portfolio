import React from "react";
import '../index.css';
import Masonry from 'react-masonry-css';
import ImageZoom from 'react-medium-image-zoom'
import ProjectPagination from '../components/ProjectPagination'
import ScrollToTopOnMount from "../components/ScrollToTopOnMount"

const breakpointColumnsObj = {
    default: 4,
    1440: 3,
    700: 2,
    500: 1
  };

class Play extends React.Component {
    render(){
        let graphics = []
        for(let i = 27; i>=0; i--){
            let graphic_obj = {
                url: '/images/others/'+i+'.png'
            }
            graphics.push(graphic_obj)
        }

        const graphics_elements = graphics.map(function(element){
            let url = element.url
           return (
            <ImageZoom
                image={{
                src: url,
                alt: '',
                className: 'masonry-image'
            }}
        
        />
            );
        });

        let animation = []
        for(let i = 0; i>=0; i--){
            let animation_obj = {
                url: '/images/animation/'+i+'.gif'
            }
            animation.push(animation_obj)
        }
        const animation_elements = animation.map(function(element){
            let url = element.url
           return (
            <ImageZoom
                image={{
                src: url,
                alt: '',
                className: 'masonry-image'
            }}
        
        />
            );
        });

        let photos = []
        for(let i = 0; i<23; i++){
            let photo_obj = {
                url: '/images/photograph/'+i+'.jpg'
            }
            photos.push(photo_obj)
        }

        const photos_elements = photos.map(function(element){
            let url = element.url
           return (
            <ImageZoom
                image={{
                src: url,
                alt: '',
                className: 'masonry-image'
            }}
        
        />
            );
        });

        const childElements = graphics_elements.concat(animation_elements.concat(photos_elements) )
        
        return (
            <>
            <ScrollToTopOnMount />
            <main>
            <section className="leading">
                <h1>Other things I do for fun<span style={{"color": "#9D2721"}}>.</span></h1>
                <h3>All these little pieces made up of me.</h3>
            </section>
                <div className="divider"></div>
                <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {childElements}
            </Masonry>
            </main>
            </>)
    }}


export default Play;
