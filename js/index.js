import { switchMenu } from './modules/switchMenu.js';
import { switchDropDownMenuClass } from './modules/switchDropdownMenuClass.js';

const body = document.querySelector('.page');
const cabinetNav = document.querySelector('.cabinet-nav__list');

switchMenu(body);
switchDropDownMenuClass(cabinetNav);
