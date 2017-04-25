import React from 'react';
/// cant wire up refs!!!
class Input extends React.Component {
	render() {
		return (
				<input 
					className={`course-${this.props.id}`}
					autoComplete="false"
					required
					type={this.props.type}
					placeholder={this.props.placeholder}
				/>	


		);
	}
}

export default Input; 