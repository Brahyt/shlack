import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
// import AuthService from 'shlack/services/auth';
//
export default class ChatContainerComponent extends Component {
  @tracked
  messages = [];

  @service auth;

  @action
  async loadMessages() {
    const {
      channel: { id, teamId },
    } = this.args;
    const resp = await fetch(`/api/teams/${teamId}/channels/${id}/messages`);
    console.log(resp);
    this.messages = await resp.json();
  }

  @action
  async createMessage(body) {
    const {
      channel: { id: channelId, teamId },
    } = this.args;
    console.log(auth);
    const userId = this.auth.currentUserId;
    const resp = await fetch('/api/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        teamId,
        channelId,
        userId,
        body,
      }),
    });
  }
}
