import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { RoomType } from '../rooms/roomTypes';

export const fetchChatRooms = createAsyncThunk<RoomType[]>(
	'rooms/fetchRooms',
	async () => {
		try {
			const response = await fetch(`${import.meta.env.VITE_API_URL}/rooms`, {
				method: 'GET',
			});

			if (!response.ok) {
				throw new Error('Network response was not ok');
			}

			const roomsList = await response.json();

			return roomsList;
		} catch (e) {
			console.error(e);
		}
	},
);

export const createNewChatRoom = createAsyncThunk<RoomType>(
	'rooms/createNewChatRoom',
	async ({ roomName, author, nickName, avatar }) => {
		const data = {
			room_name: roomName,
			author_name: author,
			author_nickname: nickName,
			author_avatar: avatar,
		};

		try {
			const response = await fetch(`${import.meta.env.VITE_API_URL}/rooms`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});

			if (!response.ok) {
				throw new Error('Network response was not ok');
			}

			const createdRoom = await response.json();

			return createdRoom;
		} catch (e) {
			console.error(e);
		}
	},
);

export const chatNewMessage = createAsyncThunk(
	'rooms/chatNewMessage',
	async ({message, roomId, userName, avatar, nickName}) => {
		const data = {
			message: message,
      room: roomId,
      author_name: userName,
      author_nickName: nickName,
      author_avatar: avatar
		};

		try {
			const response = await fetch(`${import.meta.env.VITE_API_URL}/chats`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});

			if (!response.ok) {
				throw new Error('Network response was not ok');
			}

			const newMessage = await response.json();
      
			return newMessage;
		} catch (e) {
			console.error(e);
		}
	},
);

interface ChatState {
	roomsList: RoomType[];
  chats: any;
}

const initialState = {
	roomsList: [],
  chats: []
} as ChatState;

export const chatSlice = createSlice({
	name: 'rooms',
	initialState,
	reducers: {
		addCurrentChatsToList: (state, action) => {
      state.chats = action.payload
    },
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchChatRooms.fulfilled, (state, action) => {
				state.roomsList = action.payload;
			})
			.addCase(fetchChatRooms.rejected, (state, action) => {
				console.error('failed fetching rooms: ', action.error);
			});

		builder
			.addCase(createNewChatRoom.fulfilled, (state, action) => {
				state.roomsList.push(action.payload);
			})
			.addCase(createNewChatRoom.rejected, (state, action) => {
				console.error('failed fetching rooms: ', action.error);
			});

		builder
			.addCase(chatNewMessage.fulfilled, (state, action) => {
				state.chats = [...state.chats, action.payload]
				window.scrollTo(0, document.body.scrollHeight);
			})
			.addCase(chatNewMessage.rejected, (state, action) => {
				console.error('failed creatin the new message: ', action.error);
			});
	},
});

export const { addCurrentChatsToList } = chatSlice.actions
export default chatSlice.reducer;
