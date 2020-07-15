import React from 'react';
import SvgHandler from '../svg-handler/index';
import Button from '../button/index';
import avatar from '../../assets/images/User.png';
import HeaderForm from '../header-form/index';

import './index.scss';

const Header = () => (
	<header className='header'>
		<HeaderForm />

		<div className='header-avatar-wrapper'>
			<Button>
				<SvgHandler iconId='settingsIcon' />
			</Button>
			<Button>
				<SvgHandler iconId='ballIcon' classes={['with-alert']} />
				<span className='header-notify' />
			</Button>

			<img className='header-avatar' src={avatar} alt='Avatar' />
		</div>
	</header>
);

export default Header;
