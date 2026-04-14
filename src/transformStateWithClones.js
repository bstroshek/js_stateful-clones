'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */

function transformStateWithClones(state, actions) {
  let currentState = { ...state };
  const history = [];

  for (const act of actions) {
    let newState;

    if (act.type === 'clear') {
      newState = {};
    }

    if (act.type === 'addProperties') {
      newState = {
        ...currentState,
        ...act.extraData,
      };
    }

    if (act.type === 'removeProperties') {
      newState = { ...currentState };

      for (const key of act.keysToRemove) {
        delete newState[key];
      }
    }

    history.push(newState);
    currentState = newState;
  }

  return history;
}

module.exports = transformStateWithClones;
