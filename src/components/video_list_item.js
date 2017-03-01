import React, {Component} from 'react';

class VideoListItem extends Component{
  constructor(props){
    super(props);
    this.video = props.video;
    this.videoSelect = props.onVideoSelect
  }

  render(){
    const imageUrl = this.video.snippet.thumbnails.default.url;
    return(
      <li onClick={() => this.videoSelect(this.video)} className="list-group-item">
        <div className="video-list media">
          <div className="media-left">
            <img className="media-object" src={imageUrl} />
          </div>

          <div className="media-body">
            <div className="media-heading">
              {this.video.snippet.title}
            </div>

          </div>
        </div>

      </li>
    )
  }
};

export default VideoListItem;
