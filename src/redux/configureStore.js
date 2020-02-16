import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Projects } from './projects';
import { Certificates } from './certificates';
import { Biography } from './biography';
import { Goods } from './goods';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createForms } from 'react-redux-form';
import { InitialFeedback } from './forms';




export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            goods: Goods,
            projects: Projects,
            certificates: Certificates,
            biography: Biography,
            ...createForms({
                feedback: InitialFeedback
            })
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}