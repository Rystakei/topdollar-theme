
 $('document').ready(function() {
    var dataJSON = "https://drive.google.com/open?id=0B6pBInvukuKobmswb2tvTkE0a3M",
        sortedData = [{"city":"Detroit","state":"MI","region":"Midwest","lat":42.331427,"lng":-83.0457538,"house_price":"38300","income":"29526","ratio":1.3},{"city":"Memphis","state":"TN","region":"South","lat":35.1495343,"lng":-90.0489801,"house_price":"62800","income":"32285","ratio":1.95},{"city":"Cleveland","state":"OH","region":"Midwest","lat":41.49932,"lng":-81.6943605,"house_price":"51700","income":"25928","ratio":1.99},{"city":"Kansas City","state":"MO","region":"Midwest","lat":39.0997265,"lng":-94.5785667,"house_price":"98000","income":"37198","ratio":2.63},{"city":"Wichita","state":"KS","region":"Midwest","lat":37.688889,"lng":-97.336111,"house_price":"106300","income":"39939","ratio":2.66},{"city":"Milwaukee","state":"WI","region":"Midwest","lat":43.0389025,"lng":-87.9064736,"house_price":"93800","income":"32216","ratio":2.91},{"city":"Columbus","state":"OH","region":"Midwest","lat":39.9611755,"lng":-82.99879419999999,"house_price":"111700","income":"37897","ratio":2.95},{"city":"Arlington","state":"TX","region":"South","lat":38.8799697,"lng":-77.1067698,"house_price":"142000","income":"47622","ratio":2.98},{"city":"Tulsa","state":"OK","region":"South","lat":36.1539816,"lng":-95.99277500000001,"house_price":"106200","income":"35316","ratio":3.01},{"city":"Jacksonville","state":"FL","region":"South","lat":30.3321838,"lng":-81.65565099999999,"house_price":"129600","income":"40316","ratio":3.21},{"city":"Dallas","state":"TX","region":"South","lat":32.7766642,"lng":-96.79698789999999,"house_price":"120900","income":"37628","ratio":3.21},{"city":"Louisville","state":"KY","region":"South","lat":38.2526647,"lng":-85.7584557,"house_price":"94300","income":"28843","ratio":3.27},{"city":"Omaha","state":"NE","region":"Midwest","lat":41.2523634,"lng":-95.99798829999999,"house_price":"137100","income":"40006","ratio":3.43},{"city":"El Paso","state":"TX","region":"South","lat":31.7775757,"lng":-106.4424559,"house_price":"110100","income":"32124","ratio":3.43},{"city":"Baltimore","state":"MD","region":"South","lat":39.2903848,"lng":-76.6121893,"house_price":"105100","income":"30078","ratio":3.49},{"city":"Charlotte","state":"NC","region":"South","lat":35.2270869,"lng":-80.8431267,"house_price":"164300","income":"46975","ratio":3.5},{"city":"Oklahoma City","state":"OK","region":"South","lat":35.4675602,"lng":-97.5164276,"house_price":"122800","income":"34947","ratio":3.51},{"city":"Nashville","state":"TN","region":"South","lat":36.1626638,"lng":-86.7816016,"house_price":"175900","income":"44512.0130806292","ratio":3.95},{"city":"Indianapolis","state":"IN","region":"Midwest","lat":39.768403,"lng":-86.158068,"house_price":"177800","income":"44512.0130806292","ratio":3.99},{"city":"Atlanta","state":"GA","region":"South","lat":33.7489954,"lng":-84.3879824,"house_price":"139700","income":"34770","ratio":4.02},{"city":"Austin","state":"TX","region":"South","lat":30.267153,"lng":-97.7430608,"house_price":"177800","income":"42689","ratio":4.17},{"city":"Raleigh","state":"NC","region":"South","lat":35.7795897,"lng":-78.6381787,"house_price":"200000","income":"46612","ratio":4.29},{"city":"Chicago","state":"IL","region":"Midwest","lat":41.8781136,"lng":-87.6297982,"house_price":"167900","income":"38625","ratio":4.35},{"city":"Albuquerque","state":"NM","region":"West","lat":35.0853336,"lng":-106.6055534,"house_price":"167400","income":"38272","ratio":4.37},{"city":"Phoenix","state":"AZ","region":"West","lat":33.4483771,"lng":-112.0740373,"house_price":"185500","income":"41207","ratio":4.5},{"city":"Las Vegas","state":"NV","region":"West","lat":36.1699412,"lng":-115.1398296,"house_price":"202500","income":"44069","ratio":4.6},{"city":"Tucson","state":"AZ","region":"West","lat":32.2217429,"lng":-110.926479,"house_price":"143300","income":"30981","ratio":4.63},{"city":"Mesa","state":"AZ","region":"West","lat":33.4151843,"lng":-111.8314724,"house_price":"201900","income":"42817","ratio":4.72},{"city":"Fort Worth","state":"TX","region":"South","lat":32.7554883,"lng":-97.3307658,"house_price":"177800","income":"37074","ratio":4.8},{"city":"Colorado Springs","state":"CO","region":"West","lat":38.8338816,"lng":-104.8213634,"house_price":"217100","income":"45081","ratio":4.82},{"city":"Houston","state":"TX","region":"South","lat":29.7604267,"lng":-95.3698028,"house_price":"177800","income":"36616","ratio":4.86},{"city":"San Antonio","state":"TX","region":"South","lat":29.4241219,"lng":-98.49362819999999,"house_price":"177800","income":"36214","ratio":4.91},{"city":"Minneapolis","state":"MN","region":"Midwest","lat":44.977753,"lng":-93.2650108,"house_price":"202100","income":"37974","ratio":5.32},{"city":"Virginia Beach","state":"VA","region":"South","lat":36.8389225,"lng":-76.0883429,"house_price":"273300","income":"48705","ratio":5.61},{"city":"Fresno","state":"CA","region":"West","lat":36.7468422,"lng":-119.7725868,"house_price":"182900","income":"32236","ratio":5.67},{"city":"Philadelphia","state":"PA","region":"Northeast","lat":39.9525839,"lng":-75.1652215,"house_price":"176100","income":"30746","ratio":5.73},{"city":"Sacramento","state":"CA","region":"West","lat":38.5815719,"lng":-121.4943996,"house_price":"273100","income":"37049","ratio":7.37},{"city":"Portland","state":"OR","region":"West","lat":45.5230622,"lng":-122.6764816,"house_price":"324000","income":"40146","ratio":8.07},{"city":"Denver","state":"CO","region":"West","lat":39.7392358,"lng":-104.990251,"house_price":"334800","income":"39500","ratio":8.48},{"city":"Miami","state":"FL","region":"South","lat":25.7616798,"lng":-80.1917902,"house_price":"245200","income":"23483","ratio":10.44},{"city":"Boston","state":"MA","region":"Northeast","lat":42.3600825,"lng":-71.0588801,"house_price":"446000","income":"39629","ratio":11.25},{"city":"San Jose","state":"CA","region":"West","lat":37.3382082,"lng":-121.8863286,"house_price":"828600","income":"70243","ratio":11.8},{"city":"Seattle","state":"WA","region":"West","lat":47.6062095,"lng":-122.3320708,"house_price":"551500","income":"45736","ratio":12.06},{"city":"San Diego","state":"CA","region":"West","lat":32.715738,"lng":-117.1610838,"house_price":"573300","income":"45733","ratio":12.54},{"city":"New York","state":"NY","region":"Northeast","lat":40.7127837,"lng":-74.0059413,"house_price":"482900","income":"38293","ratio":12.61},{"city":"Washington","state":"DC","region":"Northeast","lat":38.9071923,"lng":-77.0368707,"house_price":"509200","income":"40127","ratio":12.69},{"city":"Oakland","state":"CA","region":"West","lat":37.8043637,"lng":-122.2711137,"house_price":"558900","income":"40055","ratio":13.95},{"city":"Long Beach","state":"CA","region":"West","lat":33.7700504,"lng":-118.1937395,"house_price":"524700","income":"37270","ratio":14.08},{"city":"Los Angeles","state":"CA","region":"West","lat":34.0522342,"lng":-118.2436849,"house_price":"569500","income":"36687","ratio":15.52},{"city":"San Francisco","state":"CA","region":"West","lat":37.7749295,"lng":-122.4194155,"house_price":"1044500","income":"55221","ratio":18.91}];
     

    var labels = [],
        series = [],
        regions = {northeast: [], west: [], south: [], midwest: []},
        regionMarkers = [];


    createLabelsAndSeries();
    addCitiesToSelectElement();
    initializeMap();
    updateMapMarkers();
    setupMapRegionHighlights();
    addCityNamesToRegions();
    affixMap();
    addChart();
    addCityNameToDataPoints();
    addHighlightOnMouseEnter();
    addChartEventHandlers();


    function createLabelsAndSeries() {
      $.each(sortedData, function(key, value) {
        value["id"]=key;
        labels.push(value.city);
        series.push({meta: value.city, value: value.ratio});
      });
    }

    function addCitiesToSelectElement() {
      var alphabeticData = _.sortBy(sortedData, function(i) {
        return i.city.toLowerCase();
      });

      //sort cities alphabetically and create options for select element
      $.each(alphabeticData, function(key, value) {
        cityOption = $('<option value="'+ value.id + '">' + value.city + '</option>');
        $('select').append(cityOption);
        $('select').select2();
      });
    }

    function initializeMap() {
      var usaMap,
          highlightColor = '#F8F991';

      //does this return the mapObject instance? If so, maybe I can get rid of a line?
      $('#map').vectorMap({
        map: 'us_aea_en',
        backgroundColor: "white",
        zoomOnScroll: false,
        regionStyle: {
          initial: {
            fill: '#333'
          }
        },
        markerStyle: {
          initial: {
            fill: highlightColor
          }
        }
      });

      usaMap = $('#map').vectorMap('get', 'mapObject');
      usaMap.updateSize();

      $.each(sortedData, function(k,v) {
        var latLng = [v.lat, v.lng],
            name = v.city,
            ratio = v.ratio,
            region = v.region.toLowerCase();

        regionMarkers.push({latLng: latLng, name: name});
        regions[region].push({latLng: latLng, name: name, ratio: ratio});
      });

      usaMap.createMarkers(regionMarkers);
    }

    function addCityNamesToRegions() {
      $.each(regions, function(region,city) {
        var cityRatios = [],
            averageRegionalRatio;

        $.each(city, function(k,v) { cityRatios.push(v.ratio); });

        averageRegionalRatio = (_.reduce(cityRatios, 
                                function(a,b) { return a + b; }, 0) / 
                                cityRatios.length).toFixed(2);

        $('#' + region + ' .fact-ratio').text(averageRegionalRatio);
      });
    }

    function addChartEventHandlers() {
      chart.on('draw', function() {
        var drawnPoints = d3.select('body').selectAll('.ct-point')[0];

        if (drawnPoints.length === sortedData.length) {
          addCityNameToDataPoints();
          addHighlightOnMouseEnter();
        }
      });

      $('select').on('change', function(event) {
        var dataPoints = d3.selectAll(".ct-point")[0],
            city = $(this).val(),
            cityData = sortedData[city],
            housePrice = delimitNumbers(cityData.house_price),
            medianIncome = delimitNumbers(Number(cityData.income).toFixed(0)),
            recommendedIncome = delimitNumbers((Number(cityData.house_price) / 3).toFixed(0)),
            mortgageIncome = delimitNumbers((Number(cityData.house_price) / 5).toFixed(0));

        $('.house-price').text(housePrice);
        $('.city-name').text(cityData.city);
        $('.ratio').text(cityData.ratio);
        $('.median-income').text(medianIncome);
        $('.recommended-income').text(recommendedIncome);
        $('.mortgage-income').text(mortgageIncome);

        highlightDataPoint(dataPoints[city], event.type);

        $('.city-data').fadeIn( 3000, function() {
          $('.city-data').show();
        });
      });
    }

    function highlightRegion(markerOptions, region) {
      //chain the removing and creating
      var usaMap = $('#map').vectorMap('get', 'mapObject');
      usaMap.removeAllMarkers();
      usaMap.createMarkers(markerOptions);
      $('.fact').removeClass('fact-focus');
      region.addClass('fact-focus');
    }

    function highlightDataPoint(point, eventType) {
      d3.selectAll('.ct-point')
        .classed('emphasis', false);
      d3.select(point).classed('emphasis', true);

      if (eventType === 'mouseenter') {
        var cityName= $(point).attr('ct:key');
        $('select').first().val(cityName).change();
      }
    }

    function addCityNameToDataPoints() {
      $.each($('.ct-point'), function(k,v) {
        $(v).attr('ct:key', k);
      });
    }

    function addHighlightOnMouseEnter() {
      d3.selectAll('.ct-point').on('mouseenter', function() {
        highlightDataPoint(this, d3.event.type);
      });
    }

    function addChart() {
      data = {labels: labels, series: [series]};

      options = {
        showLine: false,
        axisX: {
          labelInterpolationFnc: function(value, index) {
            return value;
          }
        }
      };


      responsiveOptions = [
        ['screen and (min-width: 640px)', {
          axisX: {
            labelInterpolationFnc: function(value, index) {
              return index % 4 === 0 ? value : null;
            },
            showGrid: false,
            showLabel: false
          }
        }],
        ['screen and (max-width: 640px)', {
            axisX: {
              labelInterpolationFnc: function (value) {
                return value[0];
              },
              showGrid: false,
              showLabel: false
            }
          }
        ]
      ];

      chart = new Chartist.Line('#cities-chart', data, options, responsiveOptions);
    }


    function affixMap() {
      var affix = $('#usa-map-affix'),
          offsetTop = $('#usa-map-affix').first().parent().offset().top,
          offsetBottom = offsetTop;
          // console.log("offsetTop", offsetTop);

      $("#usa-map-affix").affix({
        offset: {
            top: function() {
              return offsetTop;
            },
            bottom: function() {
              // console.log("top", $('#usa-map-affix').first().offset().top);
              var moreInfoVal = $('.more-info').first().offset().top;
              calcValue = 2300;
              return calcValue;
            }
          }
      });
    }

    function setupMapRegionHighlights() {
      $('.fact-region').each(function(k,v) {
        var region = $(v),
            regionName = region.attr('id'),
            position = {
                        top: region.offset().top,
                        bottom: region.offset().top + region.outerHeight()
                       };
        
        updateRegionOnScroll(regions[regionName], region);
      });
    }


    function updateMapMarkers() {
      //think the variables need clean-up, or at the very least some renaming
      var dataSection = $('#lowest-ratio').first(),
          greatestSection = $('#greatest-ratio').first(),
          northeastSection = $('#northeast').first(),
          citiesSection = $('#cities').first();

        updateRegionOnScroll({latLng: [42.331427,-83.0457538], name: "Detroit"}, dataSection);
        updateRegionOnScroll({latLng: [37.7749295,-122.4194155], name: "San Francisco"}, greatestSection);
        updateRegionOnScroll(regionMarkers, citiesSection);
    }

    function updateRegionOnScroll(markers, region) {
      var regionSections = {top: region.offset().top,
                            bottom: region.offset().top + region.outerHeight()};

      $(window).scroll(function() {
        var withinRegion = ($(window).scrollTop() >= regionSections.top && 
                            $(window).scrollTop() <= regionSections.bottom);

        if (withinRegion) { highlightRegion(markers, region); }
      });
    }


    function delimitNumbers(str) {
      //maybe take the number/str received and call toFixed(0) in here to avoid repetition?
      return (str + "").replace(/\b(\d+)((\.\d+)*)\b/g, function(a, b, c) {
        return (b.charAt(0) > 0 && !(c || ".").lastIndexOf(".") ? b.replace(/(\d)(?=(\d{3})+$)/g, "$1,") : b) + c;
      });
    }

    //need to move the code below


    //     historicSeries = [];
    //     historicLabels = [];

    //     historicData =
    // [{"year":1965,"median_income":6000,"median_price":20000},{"year":1970,"median_income":9000,"median_price":23400},{"year":1975,"median_income":13000,"median_price":39300},{"year":1980,"median_income":21000,"median_price":64600},{"year":1985,"median_income":27000,"median_price":84300},{"year":1990,"median_income":35000,"median_price":122900},{"year":1995,"median_income":40000,"median_price":133900},{"year":2000,"median_income":50000,"median_price":169000},{"year":2005,"median_income":56000,"median_price":240900},{"year":2010,"median_income":60000,"median_price":221800}];
    // $.each(historicData, function(key, value) {
    //   historicLabels.push(value.year);
    //       income = value.median_income;
    //       ratio = value.median_price / value.median_income;
    //   historicSeries.push(ratio);

    // });

    // new Chartist.Line('#chart1', {
    //   labels: historicLabels,
    //   series: [historicSeries]
    // });


  });

$(window).on('resize', function() {
  console.log("Resized!");
  var affixedMap = $('#usa-map-affix'),
      newWidth = $('#usa-map-affix').parent().css('width');

  affixedMap.css('width', newWidth);

  usaMap = $('#map').vectorMap('get', 'mapObject');
  usaMap.updateSize();



});

 