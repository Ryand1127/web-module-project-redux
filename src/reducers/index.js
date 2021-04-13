import {ADD_FEATURE, REMOVE_FEATURE} from '../actions/index'
//STEP 6: creating the initialState object for the reducers
const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };

//STEP 7: creating the first reducer. Setting state to initialState
// then creating the switch statements for the action calls.
export const reducer = ( state = initialState, action) => {
    switch (action.type) {
       case ADD_FEATURE:
           return {
               ...state,
               car: {
                   ...state.car,
                   features: [
                       ...state.car.features, action.payload
                   ]
                },
                additionalPrice: state.additionalPrice + action.payload.price,
                additionalFeatures: state.additionalFeatures.filter((feat) => {
                    return (
                        feat !== action.payload
                    )
                })
           }
        case REMOVE_FEATURE:
            return {
                ...state,
                car: {
                    ...state.car,
                    features: [
                        ...state.car.features.filter((feat) => {
                            return(
                                feat !== action.payload
                            )
                        })
                    ]
                },
                additionalPrice: state.car.price - action.payload.price,
                additionalFeatures: [
                    ...state.additionalFeatures,
                    action.payload
                ]
            }   
        default:
            return state
    }
}