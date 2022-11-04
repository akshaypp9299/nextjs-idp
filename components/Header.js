import Link from 'next/link';
import React, { useState } from 'react';
import WordpressHeaderMenu from './WordpressHeaderMenu';
import DrupalHeaderMenu from './DrupalHeaderMenu';
import JoomlaHeaderMenu from './JoomlaHeaderMenu';
import MoreHeaderMenu from './MoreHeaderMenu';
import ResourcesHeaderMenu from './ResourcesHeaderMenu';


const Header = () => {
    
    const [headerpopup, setOpen] = useState({});

    const showMenu = (props) => {
        const menu = props.target.attributes.menu.nodeValue;
        setOpen({[menu]:true});
    }
    const hideMenu = () => {
        setOpen({});
    }

	return (
		<>
            <div className='nav justify-content-between align-items-center p-2 shadow-sm position-sticky top-0 bg-white z-index' id="header">
                <div className='ms-3'>
                    <img src='/Assets/miniOrange.png' width={250} height={50} className='mt-2' />
                </div>
                <div className='nav'>
                    <Link legacyBehavior href='/'><a className='nav-link text-dark mo-hover' onMouseEnter={hideMenu}>Home</a></Link>
					<Link legacyBehavior href='/wordpress'><a onMouseEnter={showMenu} menu='wordpresspopup' className='nav-link text-dark mo-hover' >WordPress</a></Link>
                    <Link legacyBehavior href='/wordpress'><a onMouseEnter={hideMenu} className='nav-link text-dark mo-hover' >Atlassian</a></Link>
                    <Link legacyBehavior href='/wordpress'><a onMouseEnter={showMenu} menu='drupalpopup' className='nav-link text-dark mo-hover' >Drupal</a></Link>
                    <Link legacyBehavior href='/wordpress'><a onMouseEnter={showMenu} menu='joomlapopup' className='nav-link text-dark mo-hover' >Joomla</a></Link>
                    <Link legacyBehavior href='/wordpress'><a onMouseEnter={showMenu} menu='morepopup' className='nav-link text-dark mo-hover' >More</a></Link>
                    <Link legacyBehavior href='/wordpress'><a onMouseEnter={showMenu} menu='resourcespopup' className='nav-link text-dark mo-hover' >Resources</a></Link>
                    <Link legacyBehavior href='/wordpress'><a onMouseEnter={hideMenu} className='btn mo-bg me-3 text-white'>Sign Up</a></Link>
                    <Link legacyBehavior href='/wordpress'><a className='btn mo-color mo-border'>Contact Us</a></Link>
                </div>
            </div>
            { headerpopup && 
                <div className='headerpopup' onMouseLeave={hideMenu} >
                    {headerpopup['wordpresspopup'] && <WordpressHeaderMenu />}
                    {headerpopup['drupalpopup'] && <DrupalHeaderMenu />}
                    {headerpopup['joomlapopup'] && <JoomlaHeaderMenu />}
                    {headerpopup['morepopup'] && <MoreHeaderMenu />}
                    {headerpopup['resourcespopup'] && <ResourcesHeaderMenu />}
                </div>
            }
            
        </>
	)
}

export default Header;