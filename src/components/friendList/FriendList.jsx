import propTypes from 'prop-types';
import css from './FriendList.module.css'
import { FriendItem } from './FriendItem';
export const FriendList =({friends})=>{
    return (
		<ul >
			{friends.map(({ avatar, name, isOnline, id }) => (
				<FriendItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
			))}
		</ul>
	);

}
FriendList.propTypes = {
	friendsData: propTypes.arrayOf(
		propTypes.exact({
			avatar: propTypes.string.isRequired,
			name: propTypes.string.isRequired,
			isOnline: propTypes.bool.isRequired,
			id: propTypes.number.isRequired,
		}).isRequired
	).isRequired,
};