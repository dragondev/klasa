const Schema = require('./Schema');

/**
 * A Folder for organizing {@link SchemaEntry}s
 * @extends Schema
 */
class SchemaFolder extends Schema {

	/**
	 * @since 0.5.0
	 * @param {SchemaFolder|Schema} parent The parent folder or schema for this folder instance
	 * @param {string} key The name of this folder instance
	 */
	constructor(parent, key) {
		super(`${parent.path ? `${parent.path}.` : ''}${key}`);

		/**
		 * The parent of this SchemaFolder
		 * @since 0.5.0
		 * @name SchemaFolder#parent
		 * @type {Schema|SchemaFolder}
		 * @readonly
		 */
		Object.defineProperty(this, 'parent', { value: parent });

		/**
		 * The name of this SchemaFolder
		 * @since 0.5.0
		 * @name SchemaFolder#key
		 * @type {string}
		 * @readonly
		 */
		Object.defineProperty(this, 'key', { value: key });
	}

}

module.exports = SchemaFolder;
