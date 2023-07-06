function memberVideo(click, popup, video, src) {
      
      $(click).on('click', function(event) {
      	console.clear();
        event.preventDefault();
        event.stopPropagation();

        $(video)[0].setAttribute('src', src);
        //console.log($(video)[0].src);
        
        $(popup)[0].style.display = "flex";
        $(video)[0].play();
        
        $(".image-popup-close").on('click', function() {
        	$(video)[0].pause();
          $(video)[0].setAttribute("src", "");
          //console.log($(video)[0].src);
          $(popup)[0].style.display = "none";
      	});
        });
    };
    
    function memberImage(click, popup) {
      
      $(click).on('click', function(event) {
        
        $(popup)[0].style.display = "flex";
        
        $(".image-popup-close").on('click', function() {
          $(popup)[0].style.display = "none";
      	});
      });
    };
    
  // please note, 
  // that IE11 now returns undefined again for window.chrome
  // and new Opera 30 outputs true for window.chrome
  // but needs to check if window.opr is not undefined
  // and new IE Edge outputs to true now for window.chrome
  // and if not iOS Chrome check
  // so use the below updated condition
  var isChromium = window.chrome;
  var winNav = window.navigator;
  var vendorName = winNav.vendor;
  var isOpera = typeof window.opr !== "undefined";
  var isIEedge = winNav.userAgent.indexOf("Edg") > -1;
  var isIOSChrome = winNav.userAgent.match("CriOS");

  if (isIOSChrome) {
     // is Google Chrome on IOS
     } else if(
    isChromium !== null &&
    typeof isChromium !== "undefined" &&
    vendorName === "Google Inc." &&
    isOpera === false &&
    isIEedge === false
  ) {
     // is Google Chrome
     memberVideo("#jana-hilmert-thomas", "#jana-hilmert-thomas-popup", "#jana-hilmert-thomas-video", "https://assets.agentur-kaufmann.de/ergotherapie-brackwede/interview-jana-hilmert-thomas.mp4");
     memberVideo("#dominik-thomas", "#dominik-thomas-popup", "#dominik-thomas-video", "https://assets.agentur-kaufmann.de/ergotherapie-brackwede/interview-dominik-thomas.mp4");
     memberVideo("#julia", "#julia-popup", "#julia-video", "https://assets.agentur-kaufmann.de/ergotherapie-brackwede/interview-julia.mp4");
     memberVideo("#heike-schwartze", "#heike-schwartze-popup", "#heike-schwartze-video", "https://assets.agentur-kaufmann.de/ergotherapie-brackwede/interview-heike-schwartze.mp4");
     memberVideo("#lillian-kehler", "#lillian-kehler-popup", "#lillian-kehler-video", "https://assets.agentur-kaufmann.de/ergotherapie-brackwede/interview-lillian-kehler.mp4");
     memberVideo("#christiane-schneidewind", "#christiane-schneidewind-popup", "#christiane-schneidewind-video", "https://assets.agentur-kaufmann.de/ergotherapie-brackwede/interview-christiane-schneidewind.mp4");
     memberVideo("#julia-kretschmar", "#julia-kretschmar-popup", "#julia-kretschmar-video", "https://assets.agentur-kaufmann.de/ergotherapie-brackwede/interview-julia-kretschmar.mp4");
     memberVideo("#friederike-steckel", "#friederike-steckel-popup", "#friederike-steckel-video", "https://assets.agentur-kaufmann.de/ergotherapie-brackwede/interview-friederike-steckel.mp4");
     memberVideo("#birte-kopschek", "#birte-kopschek-popup", "#birte-kopschek-video", "https://assets.agentur-kaufmann.de/ergotherapie-brackwede/interview-birte-kopschek.mp4");
     memberVideo("#selina-scherer", "#selina-scherer-popup", "#selina-scherer-video", "https://assets.agentur-kaufmann.de/ergotherapie-brackwede/interview-selina-scherer.mp4");
     memberVideo("#kyra-kuchenbecker", "#kyra-kuchenbecker-popup", "#kyra-kuchenbecker-video", "https://assets.agentur-kaufmann.de/ergotherapie-brackwede/interview-kyra-kuchenbecker.mp4");
     memberVideo("#melanie-schreiber", "#melanie-schreiber-popup", "#melanie-schreiber-video", "https://assets.agentur-kaufmann.de/ergotherapie-brackwede/interview-melanie-schreiber.mp4");
     memberVideo("#larissa", "#larissa-popup", "#larissa-video", "https://assets.agentur-kaufmann.de/ergotherapie-brackwede/interview-larissa.mp4");
     memberVideo("#zehra-bozyigit", "#zehra-bozyigit-popup", "#zehra-bozyigit-video", "https://assets.agentur-kaufmann.de/ergotherapie-brackwede/interview-zehra-bozyigit.mp4");
  } else { 
     // not Google Chrome
     memberVideo("#jana-hilmert-thomas", "#jana-hilmert-thomas-popup", "#jana-hilmert-thomas-video", "https://assets.agentur-kaufmann.de/ergotherapie-brackwede/interview-jana-hilmert-thomas.webm");
     memberVideo("#dominik-thomas", "#dominik-thomas-popup", "#dominik-thomas-video", "https://assets.agentur-kaufmann.de/ergotherapie-brackwede/interview-dominik-thomas.webm");
     memberVideo("#julia", "#julia-popup", "#julia-video", "https://assets.agentur-kaufmann.de/ergotherapie-brackwede/interview-julia.webm");
     memberVideo("#heike-schwartze", "#heike-schwartze-popup", "#heike-schwartze-video", "https://assets.agentur-kaufmann.de/ergotherapie-brackwede/interview-heike-schwartze.webm");
     memberVideo("#lillian-kehler", "#lillian-kehler-popup", "#lillian-kehler-video", "https://assets.agentur-kaufmann.de/ergotherapie-brackwede/interview-lillian-kehler.webm");
     memberVideo("#christiane-schneidewind", "#christiane-schneidewind-popup", "#christiane-schneidewind-video", "https://assets.agentur-kaufmann.de/ergotherapie-brackwede/interview-christiane-schneidewind.webm");
     memberVideo("#julia-kretschmar", "#julia-kretschmar-popup", "#julia-kretschmar-video", "https://assets.agentur-kaufmann.de/ergotherapie-brackwede/interview-julia-kretschmar.webm");
     memberVideo("#friederike-steckel", "#friederike-steckel-popup", "#friederike-steckel-video", "https://assets.agentur-kaufmann.de/ergotherapie-brackwede/interview-friederike-steckel.webm");
     memberVideo("#birte-kopschek", "#birte-kopschek-popup", "#birte-kopschek-video", "https://assets.agentur-kaufmann.de/ergotherapie-brackwede/interview-birte-kopschek.webm");
     memberVideo("#selina-scherer", "#selina-scherer-popup", "#selina-scherer-video", "https://assets.agentur-kaufmann.de/ergotherapie-brackwede/interview-selina-scherer.webm");
     memberVideo("#kyra-kuchenbecker", "#kyra-kuchenbecker-popup", "#kyra-kuchenbecker-video", "https://assets.agentur-kaufmann.de/ergotherapie-brackwede/interview-kyra-kuchenbecker.webm");
     memberVideo("#melanie-schreiber", "#melanie-schreiber-popup", "#melanie-schreiber-video", "https://assets.agentur-kaufmann.de/ergotherapie-brackwede/interview-melanie-schreiber.webm");
     memberVideo("#larissa", "#larissa-popup", "#larissa-video", "https://assets.agentur-kaufmann.de/ergotherapie-brackwede/interview-larissa.webm");
     memberVideo("#zehra-bozyigit", "#zehra-bozyigit-popup", "#zehra-bozyigit-video", "https://assets.agentur-kaufmann.de/ergotherapie-brackwede/interview-zehra-bozyigit.webm");
  }
  
    memberImage("#meera-thavarajah", "#meera-thavarajah-popup");
  memberImage("#ulrike", "#ulrike-popup");
  memberImage("#christina-miles", "#christina-miles-popup");
  memberImage("#luise-funke", "#luise-funke-popup");
  memberImage("#valerie-alter", "#valerie-alter-popup");
