import type { ModifierArguments, ModifierPhases } from "@popperjs/core";
import ResizeObserver from "resize-observer-polyfill";

const INSTANCE_PROP = "__popperjsInstance__";

export const modifiers = [
	/**
	 *  observes for Popup component's **trigger** DOM element changes
	 *  and updates popper styles.
	 *
	 *  For example if element's height was changed popup will
	 *  update its position accordingly
	 */
	{
		name: "observeReferenceModifier",
		enabled: true,
		phase: "main" as ModifierPhases,
		options: {
			resizeObserverInstance: new ResizeObserver((entries) => {
				for (const entry of entries) {
					(entry.target as any)[INSTANCE_PROP]?.update();
				}
			}),
		},
		fn: () => {
			/*  */
		},
		effect: ({
			state,
			options,
			instance,
		}: ModifierArguments<Record<string, any>>) => {
			const { reference } = state.elements;
			const { resizeObserverInstance } = options;

			reference[INSTANCE_PROP] = instance;

			resizeObserverInstance.observe(reference);

			return () => {
				resizeObserverInstance.unobserve(reference);
				delete reference[INSTANCE_PROP];
			};
		},
	},

	{ name: "arrow", options: { padding: 16 } },
];
