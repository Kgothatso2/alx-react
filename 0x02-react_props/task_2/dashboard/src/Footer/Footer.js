import React from 'react';
import './Footer.css';
import { getFullYear, getFooterCopy } from '../utils/utils';

const year = getFullYear();
const getFooter = getFooterCopy(false);

export default function App() {
    return (
        <div>
            <footer className="App-footer">
                <p>Copyright {year} - {getFooter}</p>
            </footer>
        </div>
    );
}
