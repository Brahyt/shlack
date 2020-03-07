import Route from '@ember/routing/route';

export const ALL_CHANNELS = [
    {
      "id": "recruiting",
      "name": "recruiting",
      "description": "The Next Generation Of Recruiting. Find top talents today!",
      "teamId": "linkedin"
    },
    {
      "id": "jobs",
      "name": "Job hunting",
      "description": "Discover companies that fit you.",
      "teamId": "linkedin"
    },
    {
      "id": "tbt",
      "name": "throw back thursday",
      "description": "Remember the good old days? yay, us too.",
      "teamId": "ms"
    },
    {
      "id": "endgame",
      "name": "top secret",
      "description": "for your eyes only",
      "teamId": "avengers"
    },
    {
      "id": "dominate",
      "name": "catnip",
      "description": "exchange tips and best practicse on world domination",
      "teamId": "angrycat",
      "isDisabled": true
    },
    {
      "id": "funny",
      "name": "funny",
      "description": "think you got what it takes? Share your best memes / jokes here!",
      "teamId": "javascript"
    }
  ]


export default class TeamsTeamChannelRoute extends Route {
  model({teamId}){
    return ALL_CHANNELS.filter(x => x.teamId != teamId)
  }
}
