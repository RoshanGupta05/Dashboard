import { ADD_WIDGET, REMOVE_WIDGET } from './actions';

const initialState = {
    categories: [
        {
            name: 'CSPM Executive Dashboard',
            widgets: []
        }
    ]
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_WIDGET:
            return {
                ...state,
                categories: state.categories.map(category =>
                    category.name === action.payload.category
                        ? {
                            ...category,
                            widgets: [...category.widgets, action.payload.widget]
                        }
                        : category
                )
            };
        case REMOVE_WIDGET:
            return {
                ...state,
                categories: state.categories.map(category =>
                    category.name === action.payload.category
                        ? {
                            ...category,
                            widgets: category.widgets.filter(widget => widget.id !== action.payload.widgetId)
                        }
                        : category
                )
            };
        default:
            return state;
    }
};

export default reducer;
