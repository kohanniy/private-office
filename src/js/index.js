import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.css';
import { switchMenu } from './modules/switchMenu';
import { switchDropDownMenuClass } from './modules/switchDropdownMenuClass';

const body = document.querySelector('.page');
const cabinetNav = document.querySelector('.cabinet-nav__list');

switchMenu(body);
switchDropDownMenuClass(cabinetNav);
