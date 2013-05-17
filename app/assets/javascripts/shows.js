$(document).ready(function() {
    var questionBody;
    var questionAnswer;
    var questionTitle;
    var questionShow_ID;
    var questionViewer_ID;
    
    function onBridgeIsReady() {
    // Display our apps title in the header bar

        VAPP.setTitleBarTitle(function(message) {}, 'Brain Tube');

        VAPP.getCurrentShow(function(message) {

            var showInfo = JSON.parse(message);

            if (showInfo.status !== 'success') {
                VAPP.showModal(function(message) {}, 'Oops ...', null, 'Unable to get show info.', 'Please try again.', false);
                return;
            
            }

            // Name of the current show
            var showTitle = showInfo.data.program_data.program_title;
            var showProgramId = showInfo.data.program_data.program_id;
            var showCategory = showInfo.data.program_data.program_category;
            var showAdTargetGenres = showInfo.data.program_data.ad_target_genres;
            

            // Display the show name in the sub header bar
            VAPP.setTitleBarSubTitle(function(message) {}, showTitle);


            //Check if user is checked in
            VAPP.getCurrentShowCheckInOffset(function(message){

                var checkInInfo = JSON.parse(message);

                if (!checkInInfo.data.offset > 0) {

                    VAPP.showModal(function(message) {}, 'Oops ...', null, 'You are not checked into this show', 'Check in and then try again', false);
                    VAPP.close(function(m){});
                    return;
                }
                else {
                    
                    VAPP.getUserInfo(function(userMessage){
                        var userInfo = JSON.parse(userMessage);
                        var gender = userInfo.data.gender;
                        var display_name = userInfo.data.display_name;
                        var guid = userInfo.data.user_guid;
                        var zipcode = userInfo.data.zipcode;
                        var primary_tv_provider = userInfo.data.primary_tv_provider;
                        
                        
                        $.getJSON('/shows/SOMETHING',function(data){
                            $('.question').append(data);
                        });

                        $.ajax({
                          type: "POST",
                          url: "/shows",
                          data: "title="+showTitle+"&program_id="+showProgramId+"&category="+showCategory+"&ad_target_genres="+showAdTargetGenres+"&gender="+gender+"&display_name="+display_name+"&guid="+guid+"&zipcode="+zipcode+"&primary_tv_provider="+primary_tv_provider,
                          success: function(data){
                            $('.question').append(data)
                            setQuestion(JSON.parse(data))

                        };
                        });

                        
                          

                          $('#wrapper').append(displayName+guid+primary_tv_provider);

                    });
                }

                // var showNameEncoded = showName.replace(/ /g, '-').toLowerCase();

                // var urlList = {
                //     'Metacritic' : 'http://www.metacritic.com/tv/' + showNameEncoded,
                //     'TV' : 'http://www.tv.com/shows/' + showNameEncoded,
                //     'MSN' : 'http://tv.msn.com/tv/series/' + showNameEncoded,
                //     'Jinni' : 'http://jinni.com/tv/' + showNameEncoded
                // };

                // for (url in urlList) {
                //     $('#reviews-list').append('<li><a href="' + urlList[url] + '">' + url + '</a></li>');
                // };

            });
                    

        });        
    function setQuestion(question){
        //n
        $('.question').text(question.body);
    }
    }
   
    // Kick off script
    document.addEventListener('VAPPReady', onBridgeIsReady, true);
})();

