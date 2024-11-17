import React from 'react';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import ReactTimeAgo from 'react-time-ago';

TimeAgo.addDefaultLocale(en)

const CommentDetail = (props) => {
	return (
		<div className="comment">
			<a href="/" className="avatar">
				<img src={props.avatar} alt="avatar" />
			</a>
			<div className="content">
				<a href="/" className="author">{props.author}</a>
				<div className="metadata">
					<span className="date">
						<ReactTimeAgo date={props.time} locale="en-US"/>
					</span>
				</div>
				<div className="text">{props.comment}</div>
			</div>
		</div>
	);
};

export default CommentDetail;
