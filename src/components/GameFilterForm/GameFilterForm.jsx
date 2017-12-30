import React from 'react';
import {Row, Input, Button} from 'react-materialize';
import { Link } from 'react-router-dom'

const GameFilterForm = (props) => {
  return (
    <div>
      <form className="discovery-form" onSubmit={props.handleSearch}>
        <Row>
          <Input name='game-modes' type='checkbox' value='1' label='Single Player' className='filled-in' />
          <Input name='game-modes' type='checkbox' value='2' label='Multiplayer' className='filled-in' />
          <Input name='game-modes' type='checkbox' value='3' label='CO-OP' className='filled-in' />
          <Input name='game-modes' type='checkbox' value='4' label='Split-screen' className='filled-in' />
          <Input name='game-modes' type='checkbox' value='5' label='MMO' className='filled-in' />
        </Row>
        <Row>
          <Input name='platforms' type='checkbox' value='48' label='Playstation 4 ' className='filled-in' />
          <Input name='platforms' type='checkbox' value='49' label='Xbox One' className='filled-in' />
          <Input name='platforms' type='checkbox' value='41' label='Wii U' className='filled-in' />
          <Input name='platforms' type='checkbox' value='6' label='Windows' className='filled-in' />
          <Input name='platforms' type='checkbox' value='37' label='3DS' className='filled-in' />
        </Row>
        <p className="range-field">
          Minimum Rating
          <input name='rating' type="range" id="rating" min="0" max="100" />
        </p>
        <Button type='submit'>Discover Your Next Adventure</Button>
      </form>
    </div>
  )
}

export default GameFilterForm;