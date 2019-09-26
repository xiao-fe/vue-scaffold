import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import Login from '../page/login/mock/login';

export default {
  /**
   * mock bootstrap
   */
  bootstrap () {
    let mock = new MockAdapter(axios)
    Login.bootstrap(mock);
  }
}
