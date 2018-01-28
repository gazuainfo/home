import React from "react";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import BigCalendar from 'react-big-calendar';
import moment, { calendarFormat } from 'moment';
import BillboardChart from 'react-billboardjs';
import 'react-billboardjs/lib/billboard.css';
import request from "request";  
import cheerio from "cheerio";  
import mysql from "mysql";  

var url = "http://www.coincalendar.info/wp-json/eventon/calendar?event_type=3,1266,1267&number_of_months=1&event_count=200&show_et_ft_img=yes";

var events = [];

request(url, function(error, response, body) {  
  if (error) throw error;
  var $ = cheerio.load(JSON.parse(body).html);
//   console.log(JSON.parse(body).html);

  var postElements = $(".evo_event_schema");
  postElements.each(function(index) {
    var event={
        id: index,
        title:$(this).find("span").text(),
        start: '',
        end: '',
        allDay: true
    };
    var meta = $(this).find("meta")
    meta.each(function() {

        if( $(this).attr('itemprop') == 'startDate'){
            event.start=$(this).attr('content');
            event.end=$(this).attr('content');
        }
      });
      events.push(event);
  });
});


BigCalendar.momentLocalizer(moment);
 
const CHART_DATA = {
    columns: [
	["data1", -30, 200, 200, 400, -150, 250],
	["data2", 130, 100, -100, 200, -150, 50],
	["data3", -230, 200, 200, -300, 250, 250]
    ],
    type: "bar",
    groups: [
      [
        "data1",
        "data2"
      ]
    ]
  }
var  grid= {
    y: {
      lines: [
        {
          value: 0
        }
      ]
    }
  };
var bindto= "#StackedBarChart";
export default () => (
  <div>
    <h1>Coin Calendar</h1>
    <div style = {{height: 600}}>
        <BigCalendar
        events={events}
        />
    </div>
    <div>
        <BillboardChart data={CHART_DATA} grid={grid} bindto ={bindto}/>
    </div>
  </div>
);