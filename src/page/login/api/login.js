import {post} from '../../../axios';
import domain from '../../../assets/js/domain_conf';

const userAuthPreUrl = '/api/user/'
export const userAuthUrls = {
  login: userAuthPreUrl + 'login',
  logout: userAuthPreUrl + 'logout',
  checkPageRouter: userAuthPreUrl + 'verify-router',
}

export const requestLogin = params => { return post(userAuthUrls.login, params) }
export const requestLogout = params => { return post(userAuthUrls.logout, params) }
export const checkPageRouter = params => { return post(domain.authority + userAuthUrls.checkPageRouter, params) }
