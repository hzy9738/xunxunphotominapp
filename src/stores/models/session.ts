import {Action, action} from 'easy-peasy';

export interface SessionModel {
  value: {
    previewToken: string;
    sessionId: string;
  }
  setSession: Action<SessionModel, { previewToken: string, sessionId: string }>;
}

const session: SessionModel = {
  value: {previewToken: '', sessionId: ''},
  setSession: action((state, payload) => {
    state.value = payload
  }),
};

export default session;
