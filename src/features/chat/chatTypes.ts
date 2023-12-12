export interface ChatMessageType {
	_id: string;
	author_name: string;
	author_nicknName?: string;
	author_avatar?: string;
	message: string;
	timeStamp: string;
}
