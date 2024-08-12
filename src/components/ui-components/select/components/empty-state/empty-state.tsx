import type React from "react";
import { type FC, memo } from "react";

export const EmptyState: FC<React.PropsWithChildren<unknown>> = memo(() => {
	return (
		<div style={{ textAlign: "center", margin: "10px 0" }}>
			<h3>No results found</h3>
			<h4>Try searching for something else.</h4>
		</div>
	);
});
