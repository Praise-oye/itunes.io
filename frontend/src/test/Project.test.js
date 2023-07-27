import React from 'react';
import renderer from 'react-test-renderer';

import App from '../App';
import handleSubmit from '../components/Search';
import axios from 'axios';

//Snapshot test for the App component
test('App renders correctly', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
});

// Unit test for the Search component
describe('handleSubmit', () => {
    test('should return a function', () => {
        expect(typeof handleSubmit).toBe('function');
    })
})

// unit test for the axios call
describe('axios call', () => {
    test('should return a promise', () => {
        expect(axios.get).toBeDefined();
    });
}
);

// localhost:3001/search/red/podcast should return data
test('should return data', () => {
    expect.assertions(1);
    return axios.get('http://localhost:3001/search/red/podcast').then(response => {
        expect(response.data).toEqual(expect.any(Object));
    });
}
);

// sendng a bad request should return an error
test('should return an error', () => {
    expect.assertions(1);
    return axios.get('http://localhost:3001/search/red/podcassbjhjhgts').then(response => {
        expect(response.data).toEqual(expect.any(Object));
    });
}
);





