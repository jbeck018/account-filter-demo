export type SharedFilterInputTypes = {
	name: string;
	value: Record<
		string,
		string | string[] | boolean | number | Date | undefined
	>;
};
