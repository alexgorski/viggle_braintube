$(document).ready(function() {
    var questionBody, questionAnswer, questionTitle, questionShow_ID, questionViewer_ID;
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
                                    $.ajax({
                                      type: "POST",
                                      url: "/shows",
                                      data: "title="+showTitle+"&program_id="+showProgramId+"&category="+showCategory+"&ad_target_genres="+showAdTargetGenres+"&gender="+gender+"&display_name="+display_name+"&guid="+guid+"&zipcode="+zipcode+"&primary_tv_provider="+primary_tv_provider,
                                      success: function(data){
                                        var parsedData = JSON.parse(data);
                                        setQuestion(parsedData);
                                      }
                                    });
                                });
                            }
            });
        });                
    }   
    function setQuestion(question){
        questionBody = question.body;
        questionAnswer = question.answer;
        questionTitle = question.title;
        questionShow_ID = question.show_id;
        questionViewer_ID = question.viewer_id;
    }
    // Kick off script
    document.addEventListener('VAPPReady', onBridgeIsReady, true);
    
});

