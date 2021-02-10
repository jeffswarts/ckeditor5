/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module link/setpagescommand
 */

import Command from '@ckeditor/ckeditor5-core/src/command';
import { addListToDropdown } from '@ckeditor/ckeditor5-ui/src/dropdown/utils';
import Collection from '@ckeditor/ckeditor5-utils/src/collection';
import Model from '@ckeditor/ckeditor5-ui/src/model';

export default class SetPagesCommand extends Command {
	constructor( editor, pageDropdown ) {
		super( editor );
		this.pageDropdown = pageDropdown;
	}

	execute( pages ) {
		const itemDefinitions = new Collection();

		for ( const page of pages ) {
			const def = {
				type: 'button',
				model: new Model( {
					label: page,
					withText: true
				} )
			};

			// def.model.bind( 'isOn' ).to( paragraphCommand, 'value' );
			def.model.set( {
				commandName: 'selectpage',
				commandValue: page
			} );

			itemDefinitions.add( def );
		}

		addListToDropdown( this.pageDropdown, itemDefinitions );
	}
}
