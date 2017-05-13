import Node from '../Node.js';
import extractNames from '../extractNames.js';

export default class VariableDeclarator extends Node {
	activate () {
		if ( !this.inited ) {
			// TODO this is gross... a declaration can activate before it's
			// initialised if it comes after a reference. but would be nice
			// to have a neater solution than this
			this.shouldActivate = true;
			return;
		}

		this.skip = this.parent.skip = false;
		this.parent.uid = Math.random();
		this.id.initialise( this.scope );
		if ( this.init ) this.init.initialise( this.scope );
	}

	attachScope ( scope ) {
		this.scope = scope;
		const kind = this.parent.kind;

		if ( this.init ) {
			this.init.attachScope( scope );
		}

		extractNames( this.id ).forEach( node => {
			node.declaration = this;
			scope.addDeclaration( node, kind );
		});
	}

	initialise ( scope ) {
		this.inited = true; // TODO this is messy, see above

		this.scope = scope;

		if ( this.shouldActivate ) {
			this.activate();
		} else {
			this.skip = !!scope.parent;
		}
	}

	minify ( code ) {
		if ( this.init ) {
			if ( this.init.start > this.id.end + 1 ) code.overwrite( this.id.end, this.init.start, '=' );
		}

		super.minify( code );
	}
}
