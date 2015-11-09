import React, { Component } from 'react';
import { List, ListItem, ListDivider } from 'material-ui/lib/lists';
import ForumIcon from 'material-ui/lib/svg-icons/communication/forum';
import ChatIcon from 'material-ui/lib/svg-icons/communication/chat';

export default class ConversationList extends Component {
  render() {
    return (
      <nav className='conversation-list'>
        <List subheader='Currently Joined'>
          <ListItem
            primaryText='Javascript'
            secondaryText={
              <p>
                Javascript related chat!<br />5 seconds ago
              </p>
            }
            secondaryTextLines={2}
            leftIcon={
              <ForumIcon />
            }
          />
          <ListItem
            primaryText='Babel 6.0.0 just released'
            secondaryText={
              <p>
                John: But will it blend? <br />
                10 minutes ago
              </p>
            }
            secondaryTextLines={2}
            leftIcon={
              <ChatIcon />
            }
          />
        </List>
        <ListDivider />
        <List subheader='Techincal issues and assistance'>
          <ListItem
            primaryText='Newbie Corner'
            secondaryText={
              <p>
                Beginners subform for general issues. <br />
                30 minutes ago
              </p>
            }
            secondaryTextLines={2}
            leftIcon={
              <ForumIcon />
            }
          />
        </List>
        <ListDivider />
        <List subheader='Languages'>
          <ListItem
            primaryText='Javascript'
            secondaryText={
              <p>
                Javascript related chat! <br />
                5 seconds ago
              </p>
            }
            secondaryTextLines={2}
            leftIcon={
              <ForumIcon />
            }
          />
          <ListItem
            primaryText='C#'
            secondaryText={
              <p>
                C# related chat <br />
                5 days ago
              </p>
            }
            secondaryTextLines={2}
            leftIcon={
              <ForumIcon />
            }
          />
        </List>
        <ListDivider />
        <List subheader='Off-topic'>
          <ListItem
            primaryText='General chat'
            secondaryText={
              <p>
                Just come in here and hang out!<br />
                14 seconds ago
              </p>
            }
            secondaryTextLines={2}
            leftIcon={
              <ForumIcon />
            }
          />
          <ListItem
            primaryText='Artworks'
            secondaryText={
              <p>
                Post your artworks here.<br />
                just now
              </p>
            }
            secondaryTextLines={2}
            leftIcon={
              <ForumIcon />
            }
          />
        </List>
      </nav>
    );
  }
}
