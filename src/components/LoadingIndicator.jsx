import React from 'react';
import './LoadingIndicator.css';

export function LoadingIndicator() {
    return <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
}
