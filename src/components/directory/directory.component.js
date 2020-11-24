import React, { Component } from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

import { sections } from './directory.data';

export default class Directory extends Component {
  constructor() {
    super();

    this.state = {
      sections: [],
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {sections.map(({ id, ...restProps }) => (
          <MenuItem key={id} {...restProps} />
        ))}
      </div>
    );
  }
}
