import http from '../index';

export default function getData() {
  return http.get('overview/');
}
