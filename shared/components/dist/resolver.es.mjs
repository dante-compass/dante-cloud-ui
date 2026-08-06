//#region src/resolver.ts
var e = /* @__PURE__ */ "HButton.HCardTitle.HCenterLabel.HChartCard.HColumn.HContainer.HDateTime.HDivider.HDialog.HDuration.HIconButton.HIconSelect.HFieldLabel.HTreeField.HLabel.HListItem.HLoading.HPagination.HParticles.HRow.HSelect.HSignInBackground.HSwitch.HTextField.HLabelItem.HVisibilityButton".split(".");
function t(t) {
	return e.includes(t);
}
function n() {
	return {
		type: "component",
		resolve: (e) => {
			if (e.startsWith("H") && t(e)) {
				let t = e, n = ["@herodotus-cloud/components/style.css"];
				return {
					name: t,
					from: "@herodotus-cloud/components",
					sideEffects: n.length > 0 ? n : void 0
				};
			}
		}
	};
}
//#endregion
export { n as HerodotusResolver, n as default };
