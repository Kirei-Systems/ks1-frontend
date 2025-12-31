type ApiData<T> =
	| {
			error: unknown;
			data: undefined;
	  }
	| {
			error: undefined;
			data: T;
	  };

export function handleError<T>(value: ApiData<T>): T {
	if (value.data === undefined) {
		throw Error(`Erro na API`);
	}

	return value.data;
}
