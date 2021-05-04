
export function createDefaultState() {
    return {
        vehicleYears: defaultState(),
    }
}

export function defaultState() {
    return {
        isLoading: false,
        error: null,
        list: [],
    };
}