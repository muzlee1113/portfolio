import React from "react";
import '../index.css';
import Masonry from 'react-masonry-css';
import ImageZoom from 'react-medium-image-zoom'
import ProjectPagination from '../components/ProjectPagination'


const breakpointColumnsObj = {
    default: 4,
    1440: 3,
    700: 2,
    500: 1
  };

class Gallery extends React.Component {
    render() {
        let graphics = []
        for(let i = 0; i<23; i++){
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

        const childElements = graphics_elements.concat(photos_elements) 
    
        return (<>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {childElements}
            </Masonry>
            <ProjectPagination prevUrl="/work/lightup" prevName="Light Up" nextUrl="/" nextName="Home"/>

        </>);
    }
}
 
export default Gallery;

