import React from 'react';
import {CollectionItem, Modal, Button} from 'react-materialize';
import { Link } from 'react-router-dom'

const GameListItem = (props) => {
  return (
    <div>
      <div>
      <CollectionItem className="games" key={props.gameIdx} href="#">
        {props.game.cover ? <img className="games-img" src={props.game.cover.url}></img> : <span>No Image</span>}
        <Modal
	        header={`${props.game.name}`}
	        trigger={<Link to='#'>{props.game.name} | {Math.trunc(props.game.total_rating)}/100</Link>}>
          <p>{props.game.summary}<div><Button onClick={() => props.discover(props.game.name, props.game.id)}>Add to Your Discovery List</Button></div></p>
        </Modal>
      </CollectionItem>
      </div>
    </div>
  )
}

export default GameListItem;