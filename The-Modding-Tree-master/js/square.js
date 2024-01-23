addLayer("s", {
    name: "s", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "□", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#4BDC13",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "square points", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 1.2, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "s", description: "S: Reset for square points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
upgrades: {
	11: {
		title: "Base Upgrade",
		description: "Gain 2 point per second",
		cost: new Decimal(1),
		    },
	12: {
		title: "The First Square",
		description: "Points per second is powered by 2",
		cost: new Decimal(2),
unlocked(){return hasUpgrade("s", 11)},
		    },
	13: {
		title: "The Second Square",
		description: "Points per second is powered by 2",
		cost: new Decimal(3),
unlocked(){return hasUpgrade("s", 12)},
		    },
	14: {
		title: "Almost Square",
		description: "Points per second is powered by 1.99",
		cost: new Decimal(4),
unlocked(){return hasUpgrade("s", 13)},
		    },
	15: {
		title: "Its definitely not a square",
		description: "Points per second is powered by 1.199",
		cost: new Decimal(7),
unlocked(){return hasUpgrade("s", 14)},
		    },
	16: {
		title: "lmao wtf is this",
		description: "Points per second is powered by 1.04",
		cost: new Decimal(8),
unlocked(){return hasUpgrade("s", 15)},
		    },
	17: {
		title: "its still doesn't helps",
		description: "Points per second is powered by 1.05",
		cost: new Decimal(8),
unlocked(){return hasUpgrade("s", 16)},
		    },
	21: {
		title: "888",
		description: "Points per second is powered by 1.08",
		cost: new Decimal(8),
unlocked(){return hasUpgrade("s", 17)},
		    },
	22: {
		title: "999",
		description: "Points per second is powered by 1.09",
		cost: new Decimal(9),
unlocked(){return hasUpgrade("s", 21)},
		    },
	23: {
		title: "SQUARE AGAIN???",
		description: "Points per second is powered by 2",
		cost: new Decimal(10),
unlocked(){return hasUpgrade("s", 22)},
		    },
	24: {
		title: "smallest upgrade",
		description: "Points per second is powered by 1.03",
		cost: new Decimal(15),
unlocked(){return hasUpgrade("s", 23)},
		    },
	25: {
		title: "Power Of Pi",
		description: "Points per second is powered by 1.314159265358979",
		cost: new Decimal(15),
unlocked(){return hasUpgrade("s", 24)},
		    },
	26: {
		title: "GD REFERENCE?",
		description: "Points per second is powered by 1.02.2",
		cost: new Decimal(20),
unlocked(){return hasUpgrade("s", 25)},
		    },
	27: {
		title: "Last Upgrade",
		description: "Points per second is powered by 1.1 and unlock new layer (no, its a endgame)",
		cost: new Decimal(23),
unlocked(){return hasUpgrade("s", 26)},
		    },

},
})
