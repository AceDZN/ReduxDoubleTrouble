export default function(state = 'IDLE', action) {
	switch (action.type) {
	case "START_GAME":
	case "UNPAUSE_GAME":
		return 'PLAYING';
	case "PAUSE_GAME":
		return 'PAUSED';
	case "GAME_OVER":
		return 'GAME_OVER';
	default:
		return state;
	}
}
