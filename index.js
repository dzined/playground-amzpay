import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Badge from './lib/components/Badge';
import Button from './lib/components/Button';
export { Badge, Button };
ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);
