import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '30s', target: 1 }, // below normal load
    { duration: '30s', target: 10 },
    { duration: '30s', target: 100 }, // normal load
    { duration: '30s', target: 200 },
    { duration: '30s', target: 300 }, // around the breaking point
    { duration: '30s', target: 400 },
    { duration: '1m', target: 500 }, // beyond the breaking point
    { duration: '1m', target: 0 }, // scale down. Recovery stage.
  ],
};

// export let options = {
//   stages: [
//     { duration: '1m', target: 100 }, // below normal load
//   ],
// };

export default function () {
  for (let id = 8000000; id <= 8000500; id++) {
    http.get(`http://localhost:8020/mortgage/${id}/get`);
  }
  sleep(1);
}

// export default function () {
//   for (let id = 8000000; id <= 8000500; id++) {
//     let url = `http://localhost:8020/mortgage/${id}/post`;
//     let headers = { 'Content-Type': 'application/json' };
//     let data = {
//       "agentid": 2327699,
//       "homeprice": 704532,
//       "location": "2990 Dimitri Freeway",
//       "propertytax": 0.69,
//       "thirtyyearapr": 4.6,
//       "fifteenyearapr": 2.67,
//       "sevenonearmapr": 4.61,
//       "fiveonearmapr": 4.81,
//       "va30yearapr": 2.42,
//       "jumbo30yearapr": 3.72
//     }
//     let res = http.post(url, JSON.stringify(data), { headers: headers });
//   }
//   sleep(1);
// }