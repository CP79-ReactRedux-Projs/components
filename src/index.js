import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

/*const FakerProp = () => {
	return faker.fake("author={{name.findName()}} avatar={{image.avatar()}} time={{date.recent().toLocaleTimeString()}} comment={{lorem.sentence()}}");
};*/

const App = () => {
	return (
		<div className="ui container comments">
			<ApprovalCard>
				<CommentDetail author={faker.name.findName()} avatar={faker.image.avatar()} time={faker.date.recent()} comment={faker.lorem.sentence()} />
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail author={faker.name.findName()} avatar={faker.image.avatar()} time={faker.date.recent()} comment={faker.lorem.sentence()} />
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail author={faker.name.findName()} avatar={faker.image.avatar()} time={faker.date.recent()} comment={faker.lorem.sentence()} />
			</ApprovalCard>
		</div>
	);
};

ReactDOM.render(
	<App />,
	document.getElementById('root')
);
