const { Serializer } = require('klasa');
const truths = ['1', 'true', '+', 't', 'yes', 'y'];
const falses = ['0', 'false', '-', 'f', 'no', 'n'];

module.exports = class extends Serializer {

	constructor(...args) {
		super(...args, { aliases: ['bool'] });
	}

	async deserialize(data, entry, language) {
		const boolean = String(data).toLowerCase();
		if (truths.includes(boolean)) return true;
		if (falses.includes(boolean)) return false;
		throw language.get('RESOLVER_INVALID_BOOL', entry.key);
	}

	stringify(value) {
		return value ? 'Enabled' : 'Disabled';
	}

};
