import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addWidget } from '../redux/actions';

const WidgetForm = ({ category }) => {
    const [widgetName, setWidgetName] = useState('');
    const [widgetText, setWidgetText] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newWidget = {
            id: Date.now(),
            name: widgetName,
            text: widgetText
        };
        dispatch(addWidget(category, newWidget));
        setWidgetName('');
        setWidgetText('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Widget Name"
                value={widgetName}
                onChange={(e) => setWidgetName(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Widget Text"
                value={widgetText}
                onChange={(e) => setWidgetText(e.target.value)}
                required
            />
            <button type="submit">Add Widget</button>
        </form>
    );
};

export default WidgetForm;
