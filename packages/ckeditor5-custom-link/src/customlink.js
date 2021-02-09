import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import linkIcon from '@ckeditor/ckeditor5-link/theme/icons/link.svg';

export default class CustomLink extends Plugin {
	init() {
		const editor = this.editor;

		editor.ui.componentFactory.add( 'customLink', locale => {
			const view = new ButtonView( locale );

			view.set( {
				label: 'Link',
				icon: linkIcon,
				tooltip: true
			} );

			view.on( 'execute', () => {
				// eslint-disable-next-line no-undef
				window.dispatchEvent( new Event( 'show-link-modal' ) );
			} );

			return view;
		} );
	}
}
