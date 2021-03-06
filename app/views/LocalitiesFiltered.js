import React from 'react-native';
import LocalityItem from './LocalityItem';
import ListHeader from './ListHeader';
import SearchableList from './SearchableList';
import StatusbarWrapper from './StatusbarWrapper';
import Colors from '../../Colors.json';

const {
	StyleSheet,
	View
} = React;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.lightGrey
	},
});

export default class LocalitiesFiltered extends React.Component {
	static propTypes = {
		onDismiss: React.PropTypes.func.isRequired,
		getResults: React.PropTypes.func.isRequired,
		onSelectItem: React.PropTypes.func.isRequired,
	};

	_renderRow = room => {
		if (!room) {
			return null;
		}

		return (
			<LocalityItem
				key={room.id}
				room={room}
				onSelect={this.props.onSelectItem}
				showMenuButton={false}
				showBadge={false}
			/>
		);
	};

	_renderHeader = (filter, data) => {
		const count = data.length;

		if (count) {
			return <ListHeader>{filter ? (count + ' result' + (count > 1 ? 's' : '') + ' found') : 'Communities nearby'}</ListHeader>;
		}

		return null;
	};

	render() {
		return (
			<View style={styles.container}>
				<StatusbarWrapper />
				<SearchableList
					getResults={this.props.getResults}
					renderRow={this._renderRow}
					renderHeader={this._renderHeader}
					onDismiss={this.props.onDismiss}
					searchHint='Type a place to search'
				/>
			</View>
		);
	}
}
