import React, { Component } from 'react';
import './index.css'
import X from './Xpiece'
import O from './Opiece'
import Empty from './Blankpiece'

class Board extends Component {
    render() {
        return (
            <div className='format'>
                <div className='trformat'>
                     <O />
                    <Empty />
                    <X />
                </div>
                {/* ------ */}
                <div className='mrformat'>
                    <Empty />
                    <O />
                    <Empty />
                </div>
                {/* ------ */}
                <div className='brformat'>
                    <X />
                    <Empty />
                    <X />
                </div>
            </div>
        )
    }
}

// formating->board lines

export default Board