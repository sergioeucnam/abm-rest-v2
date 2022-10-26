import { useState } from 'react';
import { createContext } from 'react';

export const PlayerContext = createContext({});

export const PlayerProvider = ({ children }) => {
	const [playerId, setPlayerId] = useState(null);

	return (
		<PlayerContext.Provider value={{ playerId, setPlayerId }}>
			{children}
		</PlayerContext.Provider>
	);
};
