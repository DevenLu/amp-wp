/**
 * External dependencies
 */
import Moveable from 'react-moveable';
import styled from 'styled-components';

/**
 * WordPress dependencies
 */
import { forwardRef, useContext } from '@wordpress/element';

/**
 * Internal dependencies
 */
import Context from './context';
import Overlay from './overlay';

function MovableWithRef( { zIndex, ...moveableProps }, ref ) {
	const { container } = useContext( Context );
	return (
		<Overlay zIndex={ zIndex }>
			<Moveable
				ref={ ref }
				container={ container }
				{ ...moveableProps }
			/>
		</Overlay>
	);
}

const Movable = forwardRef( MovableWithRef );

export default Movable;
