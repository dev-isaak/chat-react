import { LoaderFunctionArgs } from 'react-router-dom';
import type { ChatMessageType } from './chatTypes';

export const chatLoader = async ({
	params,
}: LoaderFunctionArgs): Promise<ChatMessageType[]> => {
	try {
		const results = await fetch(
			`${import.meta.env.VITE_API_URL}/chats/${params.roomId}`,
		);

		if (!results.ok) {
			throw new Error('La solicitud no fue exitosa');
		}

		const chat = await results.json();

		return chat;
	} catch (error) {
		console.error('Error al cargar los datos:', error);
		throw error;
	}
};
