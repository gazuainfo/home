import React from "react";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import BigCalendar from 'react-big-calendar';
import moment, { calendarFormat } from 'moment';
import BillboardChart from 'react-billboardjs';
import 'react-billboardjs/lib/billboard.css';
// import request from "request";  
// import cheerio from "cheerio";  

var url = "http://www.coincalendar.info/wp-json/eventon/calendar?event_type=3,1266,1267&number_of_months=1&event_count=200&show_et_ft_img=yes";

const events = [
  {
      id: 0,
      title: 'All Day Event very long title',
      allDay: true,
      start: new Date(2018, 0, 10),
      end: new Date(2018, 0, 11)
  },
  {
      id: 1,
      title: 'Long Event',
      start: new Date(2018, 0, 20),
      end: new Date(2018, 0, 21)
  },
  {
      id: 2,
      title: 'DTS STARTS',
      start: new Date(2018, 0, 5),
      end: new Date(2018, 0, 5)
  }
    
];

// request(url, function(error, response, body) {  
//   if (error) throw error;
//   var $ = cheerio.load(JSON.parse(body).html);
// //   console.log(JSON.parse(body).html);

//   var postElements = $(".evo_event_schema");
//   postElements.each(function(index) {
//     var event={
//         id: index,
//         title:$(this).find("span").text(),
//         start: '',
//         end: '',
//         allDay: true
//     };
//     var meta = $(this).find("meta")
//     meta.each(function() {

//         if( $(this).attr('itemprop') == 'startDate'){
//             event.start=$(this).attr('content');
//             event.end=$(this).attr('content');
//         }
//       });
//       events.push(event);
//   });
// });



// var connection = mysql.createConnection({
//   host     : 'http://gazua.ipdisk.co.kr',
//   user     : 'root',
//   password : '',
//   database : 'testdb'
// });
 
// connection.connect();
 
// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });
 
// connection.end();

BigCalendar.momentLocalizer(moment);
 
const CHART_DATA = {
  columns: [
    ['data1', 30, 20, 50, 40, 60, 50],
    ['data2', 200, 130, 90, 240, 130, 220]
  ],
  type: 'line'
};
export default () => (
  <div>
    <h1>Coin Calendar</h1>
    <div style = {{height: 600}}>
        <BigCalendar
        events={events}
        />
    </div>
    <div>
        <BillboardChart data={CHART_DATA}/>
    </div>
  </div>
);