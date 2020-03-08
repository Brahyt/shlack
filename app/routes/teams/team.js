import Route from '@ember/routing/route';
import { ALL_TEAMS } from '../teams'
import { ALL_CHANNELS } from './team/channel'
import { ALL_USERS } from './team/'

export default class TeamsTeamRoute extends Route {
  model({teamId}){
    const team = ALL_TEAMS.find(t => t.id == teamId)
    const channels = ALL_CHANNELS.filter(x => x.teamId == teamId)
    return {
      team,
      channels
    }
}
}
