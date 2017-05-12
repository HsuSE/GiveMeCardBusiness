(function() {
	const firebaseconfig = {
				    apiKey: "AIzaSyBFlEfIXLvEFs6rOW-7pDwPrbmV06tVBNU",
				    authDomain: "fir-7d3d1.firebaseapp.com",
				    databaseURL: "https://fir-7d3d1.firebaseio.com",
				    storageBucket: "fir-7d3d1.appspot.com",
				    messagingSenderId: "389461057262"
				 }; 
	firebase.initializeApp(firebaseconfig);

	var dbRef = firebase.database().ref().child('users');
	var dbroot = firebase.database().ref();
	var cardlike = [];
	var cardName = [];
	var cardtime = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	var cardgender = [0,0];
	var uid = "";
	var chartjstitle = "";
	var Max = 0;
	var Max_visited = 0;
	var Max_gender = 0;
	var databl = true;

	var config1 = {
            type: 'line',
            data: {
                labels: cardName,
                datasets: [{
                    label: "chartjstitle",
                    data: cardlike,
                    fill: false,
                }]
            },
            options: {
                responsive: true,
                title:{
                    display:true,
                    text:'Chart.js Line Chart'
                },
                tooltips: {
                    mode: 'label',
                    callbacks: {
                        // beforeTitle: function() {
                        //     return '...beforeTitle';
                        // },
                        // afterTitle: function() {
                        //     return '...afterTitle';
                        // },
                        // beforeBody: function() {
                        //     return '...beforeBody';
                        // },
                        // afterBody: function() {
                        //     return '...afterBody';
                        // },
                        // beforeFooter: function() {
                        //     return '...beforeFooter';
                        // },
                        // footer: function() {
                        //     return 'Footer';
                        // },
                        // afterFooter: function() {
                        //     return '...afterFooter';
                        // },
                    }
                },
                hover: {
                    mode: 'dataset'
                },
                scales: {
                    xAxes: [{
                        display: true,
                        scaleLabel: {
                            show: true,
                            labelString: 'Month'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        scaleLabel: {
                            show: true,
                            labelString: 'Value'
                        },
                        ticks: {
                            suggestedMin: 0,
                            suggestedMax: Max,
                        }
                    }]
                }
            }
        };

		var config2 = {
            type: 'line',
            data: {
                labels: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],
                datasets: [{
                    label: "chartjstitle2",
                    data: cardtime,
                    fill: false,
                }]
            },
            options: {
                responsive: true,
                title:{
                    display:true,
                    text:'各時段到店人數'
                },
                tooltips: {
                    mode: 'label',
                    callbacks: {
                        // beforeTitle: function() {
                        //     return '...beforeTitle';
                        // },
                        // afterTitle: function() {
                        //     return '...afterTitle';
                        // },
                        // beforeBody: function() {
                        //     return '...beforeBody';
                        // },
                        // afterBody: function() {
                        //     return '...afterBody';
                        // },
                        // beforeFooter: function() {
                        //     return '...beforeFooter';
                        // },
                        // footer: function() {
                        //     return 'Footer';
                        // },
                        // afterFooter: function() {
                        //     return '...afterFooter';
                        // },
                    }
                },
                hover: {
                    mode: 'dataset'
                },
                scales: {
                    xAxes: [{
                        display: true,
                        scaleLabel: {
                            show: true,
                            labelString: 'Month'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        scaleLabel: {
                            show: true,
                            labelString: 'Value'
                        },
                        ticks: {
                            suggestedMin: 0,
                            suggestedMax: Max_visited,
                        }
                    }]
                }
            }
        };

        var config3 = {
            type: 'bar',
            data: {
                labels: ["男性","女性"],
                datasets: [{
                    label: "",
                    data: cardgender,
                    fill: false,
                }]
            },
            options: {
                responsive: true,
                title:{
                    display:true,
                    text:'今日到店男女性別數量'
                },
                tooltips: {
                    mode: 'label',
                    callbacks: {
                        // beforeTitle: function() {
                        //     return '...beforeTitle';
                        // },
                        // afterTitle: function() {
                        //     return '...afterTitle';
                        // },
                        // beforeBody: function() {
                        //     return '...beforeBody';
                        // },
                        // afterBody: function() {
                        //     return '...afterBody';
                        // },
                        // beforeFooter: function() {
                        //     return '...beforeFooter';
                        // },
                        // footer: function() {
                        //     return 'Footer';
                        // },
                        // afterFooter: function() {
                        //     return '...afterFooter';
                        // },
                    }  
                },
                hover: {
                    mode: 'dataset'
                },
                scales: {
                    xAxes: [{
                        display: true,
                        scaleLabel: {
                            show: true,
                            labelString: '性別'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        scaleLabel: {
                            show: true,
                            labelString: '數量'
                        },
                        ticks: {
                            suggestedMin: 0,
                            suggestedMax: Max_gender,
                        }
                    }]
                }
            }
        };

	//Get elements
	const txtEmail = document.getElementById('txtEmail');
	const txtPassword = document.getElementById('txtPassword');
	const btnLogin = document.getElementById('btnLogin');
	const btnSignUp = document.getElementById('btnSignUp');
	const btnLogout = document.getElementById('btnLogout');
	const btnShowLogin =document.getElementById('ShowLogin');
	const canvas = document.getElementById('canvas-area1');
	const canvas2 = document.getElementById('canvas-area2');
	const canvas3 = document.getElementById('canvas-area3');

	btnLogin.addEventListener("click", e => {
		//Get email and pass
		const email = txtEmail.value;
		const pass = txtPassword.value;
		const auth = firebase.auth();
		//Sign in
		const promise = auth.signInWithEmailAndPassword(email, pass);
		promise.catch(e => console.log(e.message));
	});

	btnSignUp.addEventListener('click', e => {
		//Get email and pass
		//TODO: CECK 4 REAL EMAILZ
		const email = txtEmail.value;
		const pass = txtPassword.value;
		const auth = firebase.auth();
		//Sign up
		const promise = auth.creatUsernWithEmailAndPassword(email, pass);
		promise.catch(e => console.log(e.message));

	});

	btnLogout.addEventListener('click', e => {
		firebase.auth().signOut();
		cardlike.length = 0;
		cardName.length = 0;
		Max = 0;
		window.myLine.update();
	});

	//Add a realtime listener
	firebase.auth().onAuthStateChanged(firebaseUser => {
		if (firebaseUser) {
			uid = firebaseUser.uid;
			btnShowLogin.classList.add('hide');
			btnLogout.classList.remove('hide');
			canvas.classList.remove('hide');
			canvas2.classList.remove('hide');
			canvas3.classList.remove('hide');
			document.getElementById('icon').classList.add('hide');

			if (databl) {
				console.log("Load");
				loaddata();
				loaddatatime();
				loaddatagender();

				var ctx = canvas.getContext("2d");
		        window.myLine = new Chart(ctx, config1);
				var ctx2 = canvas2.getContext("2d");
		        window.myLine2 = new Chart(ctx2, config2);
				var ctx3 = canvas3.getContext("2d");
		        window.myLine3 = new Chart(ctx3, config3);
			}				
			
		} else {
			console.log("not logged in");
			btnShowLogin.classList.remove('hide');
			btnLogout.classList.add('hide');
			canvas.classList.add('hide');
			canvas2.classList.add('hide');
			canvas3.classList.add('hide');
			document.getElementById('icon').classList.remove('hide');
			
		}
	});

	var loaddatatime = function() {
		var Today = new Date();
		Today_date = Today.getFullYear()+"年0"+(Today.getMonth()+1)+"月"+Today.getDate()+"日";
		var dbTimeRef = dbroot.child('EnterpriseDB').child('麥味登').child("record");
		dbTimeRef.on('value',function(snapshot) {
			var cardtime_temp = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
			var TimeData = snapshot.val();
			var temp_index = 0;
			for ( val in TimeData[Today_date] ) {
				if (val != "gender") {
					temp_index = Number(TimeData[Today_date][val]['time'].substr(0,2));
					cardtime_temp[temp_index]++;
					if (cardtime_temp[temp_index] > Max_visited)
						Max_visited = cardtime_temp[temp_index];
				}
				cardtime[temp_index] = cardtime_temp[temp_index];
			}
	        window.myLine2.update();
	   });

	}; 

	var loaddatagender = function () {
		var dbgenderRef = dbroot.child('EnterpriseDB').child('麥味登').child('record');
		dbgenderRef.on('value',function(snapshot) {
			var Today = new Date();
			Today_date = Today.getFullYear()+"年0"+(Today.getMonth()+1)+"月"+Today.getDate()+"日";
			var GenderData = snapshot.val();
			cardgender[0] = GenderData[Today_date]["gender"]["男"];
			cardgender[1] = GenderData[Today_date]["gender"]["女"];
			if ( cardgender[0] > cardgender[1]) {
				Max_gender = (cardgender[0]/10 + 1)*10 ;
			} else {
				Max_gender = (cardgender[1]/10 + 1)*10;
			}
			
	        window.myLine3.update();
		});

	};

	var loaddata = function () {
		var dbUserRef = dbRef.child(uid);
		dbUserRef.on('value',function(snapshot) {

			var data = snapshot.val();
			databl = false;

			for( element in data['card'] ) {
				cardName.push(String(data['card'][element]['cardName']));
				cardlike.push(parseFloat(data['card'][element]['like']));
				if (parseFloat(data['card'][element]['like']) > Max ) {
					Max = parseFloat(data['card'][element]['like']);
				}
			}
			chartjstitle = String(data.name);
			$('#ShowLoginAction').modal('hide');
			
	        window.myLine.update();
		});

	};

	var randomColorFactor = function() {
        return Math.round(Math.random() * 255);
    };
    
    var randomColor = function(opacity) {
        return 'rgba(' + randomColorFactor() + ',' + randomColorFactor() + ',' + randomColorFactor() + ',' + (opacity || '.3') + ')';
    }; 

    $.each(config1.data.datasets, function(i, dataset) {
        dataset.borderColor = randomColor(0.4);
        dataset.backgroundColor = randomColor(0.5);
        dataset.pointBorderColor = randomColor(0.7);
        dataset.pointBackgroundColor = randomColor(0.5);
        dataset.pointBorderWidth = 1;
    });

    $.each(config2.data.datasets, function(i, dataset) {
        dataset.borderColor = randomColor(0.4);
        dataset.backgroundColor = randomColor(0.5);
        dataset.pointBorderColor = randomColor(0.7);
        dataset.pointBackgroundColor = randomColor(0.5);
        dataset.pointBorderWidth = 1;
    });

	$.each(config3.data.datasets, function(i, dataset) {
        dataset.borderColor = [randomColor(0.8),randomColor(0.8)];    
        dataset.backgroundColor = [randomColor(0.3),randomColor(0.3)];
        dataset.borderWidth = 1;
    });

    $(".sidebar-nav > li").click(function() {
    	var index = ['analysis','about','services','contact','downloadourapp'];
    	var idtemp = "";
    	console.log($(this).index());
    	for (var i = 0; i < index.length; i++) {
    		if ( $(this).index()-1 == i ) {
    			idtemp = '#'+index[i];
    			console.log(idtemp);
    			$("#about").classList.remove('hide');
    		} else {
    			idtemp = '#'+index[i];
    			$(idtemp).classList.add('hide');
    		}
    	}
    });

    $("#menuaction").click(function() {
		$("#wrapper").toggleClass("toggled");
    });


}());