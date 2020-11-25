if (window.addEventListener) {
    window.addEventListener('resize', browserResize);
  } else if (window.attachEvent) {
    window.attachEvent('onresize', browserResize);
  }
  var xbeforeResize = window.innerWidth;
  var loadSave = false;
  var fileID = '';

  function browserResize() {
	var afterResize = window.innerWidth;
	// console.log(window.innerWidth)
    if (
      (xbeforeResize < 970 && afterResize >= 970) ||
      (xbeforeResize >= 970 && afterResize < 970) ||
      (xbeforeResize < 728 && afterResize >= 728) ||
      (xbeforeResize >= 728 && afterResize < 728) ||
      (xbeforeResize < 468 && afterResize >= 468) ||
      (xbeforeResize >= 468 && afterResize < 468)
    ) {
      xbeforeResize = afterResize;
    }
    if (window.screen.availWidth <= 768) {
      restack(window.innerHeight > window.innerWidth);
	}
	if(window.screen.innerWidth < 1000){
		console.log("collapse")
	}
    // fixDragBtn();
    // showFrameSize();
  }