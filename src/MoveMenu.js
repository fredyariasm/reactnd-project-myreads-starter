
import React, {Component} from 'react';

class MoveMenu extends Component{

    handleSelectChange = event => {
        this.props.onMoveBook(event.target.value);
    };
        
    render(){
        
        return(
            <div className="book-shelf-changer">
            <select defaultValue={this.props.shelf} onChange={this.handleSelectChange}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        )
    }
}

export default MoveMenu