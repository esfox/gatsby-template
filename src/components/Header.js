import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import '../styles/Header.scss';

function Header({ siteTitle })
{
	return (
		<header className="header">
			<div>
				<h1 className="m-0">
					<Link to="/">
						{siteTitle}
					</Link>
				</h1>
			</div>
		</header>
	);
}

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export { Header };
