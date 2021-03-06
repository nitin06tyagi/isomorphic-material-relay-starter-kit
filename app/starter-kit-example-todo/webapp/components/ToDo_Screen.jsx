/* @flow weak */
/* eslint react/prop-types: 0 */

import React from 'react';
import Relay from 'react-relay';

import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';
import TextField from 'material-ui/lib/text-field';

import ToDo_addMutation from '../../relay/ToDo_addMutation';

class ToDo_Screen extends React.Component
{
  constructor( props )
  {
     super( props );

     this.state = {
       ToDo_Text_New: '',
     };
   }


  _handle_onKeyDown_AddToDo = ( e ) =>
  {
    if (e.keyCode === 13)
    {
      Relay.Store.commitUpdate(
        new ToDo_addMutation( {
          ToDo_Text: this.state.ToDo_Text_New,
          Viewer: this.props.Viewer
        } )
      );

      this.setState( {
        ToDo_Text_New: '',
      } );
    }
  };

  _handle_OnChange = ( event ) =>
  {
    this.setState({
      ToDo_Text_New: event.target.value,
    });
  };

  render( )
  {
    return (
      <Card>

        <CardHeader title="TO DOs" subtitle="List of TO DOs for user" />

        { this.props.children }

        <div style={ { marginLeft: 4, marginRight: 4 } }>
          <TextField
            floatingLabelText="What needs to be done?"
            value={ this.state.ToDo_Text_New }
            fullWidth={ true }
            onKeyDown={ this._handle_onKeyDown_AddToDo }
            onChange={ this._handle_OnChange }
          />
        </div>

      </Card>
    );
  }
}

export default Relay.createContainer( ToDo_Screen, {
  fragments: {
    Viewer: () => Relay.QL`
      fragment on Viewer {
        ToDo_TotalCount,
        ${ToDo_addMutation.getFragment('Viewer')},
      }
    `,
  },
});
