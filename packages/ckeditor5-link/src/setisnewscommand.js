/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module link/setisnewscommand
 */

import Command from '@ckeditor/ckeditor5-core/src/command';

export default class SetIsNewsCommand extends Command {
	constructor( editor, formView ) {
		super( editor );
		this.formView = formView;
	}

	execute(isNews) {
		this.formView.setIsNews(isNews);
	}
}
