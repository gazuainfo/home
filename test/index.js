var request  = require("request");  
var cheerio = require("cheerio");  

var url = "http://www.coincalendar.info/wp-json/eventon/calendar?event_type=3,1266,1267&number_of_months=1&event_count=200&show_et_ft_img=yes";

var events=[];

request(url, function(error, response, body) {  
  if (error) throw error;
  var $ = cheerio.load(JSON.parse(body).html);
  console.log(JSON.parse(body).html);

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