`calendar = new Meteor.Collection('Calendar');
facstaff = new Meteor.Collection('FacStaff');`

Session.set 'nav', 'home'
Session.set 'bgImage', '/0.jpg'

bgInt = null
tmp1 = null
# tmp2 = 0
tmp3 = 0

Meteor.startup ->
	Deps.autorun ->
		if Session.equals 'nav', 'home'
			$('#background-home img:not(:first)').hide();
			scrollBg()
			bgInt = Meteor.setInterval(changeBg, 15000)
			console.log $('.today-events').length
			# tmp2 = $('.today-events').length
		else
			tmp2 = 0
			tmp3 = 0
			Meteor.clearInterval bgInt

	Deps.autorun ->
		if not Session.equals 'nav', 'events'
			tmp3 = 0

Template.appcontrol.home = ->
    Session.equals 'nav', 'home'

Template.appcontrol.events = ->
	Session.equals 'nav', 'events'

Template.appcontrol.directory = ->
	Session.equals 'nav', 'directory'

Template.appcontrol.hours = ->
	Session.equals 'nav', 'hours'

Template.appcontrol.maps = ->
	Session.equals 'nav', 'maps'

Template.appcontrol.flags = ->
	Session.equals 'nav', 'flags'

Template.home.bgImage = ->
	Session.get('bgImage')

Template.home.calItem = ->
	calendar.find({}, {sort: {date: 1}, limit: 5})

# Template.home.gToday = ->
# 	if !($('.today-events').length >= 5)
# 		bgweek = Date.create('Yesterday')
# 		tmp = Date.create(this.date)
# 		if tmp.isAfter(bgweek)
# 			true
# 	else 
# 		false

# Template.home.gToday = ->
# 	# tmp2 = $('.today-events').length
# 	if (tmp2 isnt 5)
# 		# bgweek = Date.create().beginningOfWeek()
# 		bgweek = Date.create('Yesterday')
# 		tmp = Date.create(this.date)
# 		# console.log tmp
# 		if tmp.isAfter(bgweek)
# 			true
# 			tmp2 += 1
# 	else 
# 		false

Template.home.zdate = ->
	tmp = Date.create ( this.zdate )
	if tmp.getHours() is 0
		tmp.format('{Weekday}, {Month} {dd}')
	else
		tmp.format('{Weekday}, {Month} {dd}, {h}:{mm}{tt}')


Template.home.events {
	'click #TEST': (e,t) ->
		scrollBg()
}

Template.home.preserve {
	'#background-home'
}


Template.events.calItem = ->
	calendar.find({}, {sort: {date: 1}, limit: 10})

# Template.events.gWeek = ->
# 	if tmp3 isnt 10
# 		bgweek = Date.create().beginningOfWeek()
# 		tmp = Date.create(this.date)
# 		# console.log tmp
# 		if tmp.isAfter(bgweek)
# 			true
# 			tmp3 += 1
# 	else 
# 		false

Template.events.zdate = ->
	tmp = Date.create ( this.zdate )
	# console.log tmp.getHours()
	if tmp.getHours() is 0
		tmp.format('{Weekday}, {Month} {dd}')
	else
		tmp.format('{Weekday}, {Month} {dd}, {h}:{mm}{tt}')

# changeBg = ()->
# 	if Session.equals 'bgImage', '/0.jpg'
# 		Session.set 'bgImage', '/1.jpg'
# 	else if Session.equals 'bgImage', '/1.jpg'
# 		Session.set 'bgImage', '/2.jpg'
# 	else if Session.equals 'bgImage', '/2.jpg'
# 		Session.set 'bgImage', '/3.jpg'
# 	else
# 		Session.set 'bgImage', '/0.jpg'
# 	Meteor.setTimeout(scrollBg, 500 )

changeBg = ->
	$('#background-home img').first().removeClass('active').fadeOut().appendTo($('#background-home'))
	$('#background-home img').first().addClass('active').fadeIn()
	# $('#background-home img').last().removeAttr( 'style' );
	# $('#fader img').first().fadeIn()
	Meteor.setTimeout(scrollBg, 500 )

scrollBg = -> 
	$('.bgimg.active').transition({x: '-800px'}, 14000,'linear')
	$('#background-home img').last().removeAttr( 'style' ).css('display', 'none')
	# $('.bgimg.active').transition({x: '-800px'}, 13000,'linear').transition({opacity:0.7}, 3000)

zoomBG = ->
	$('#bgimg').transition({scale: 1.2, delay: 300 }, 13000,'linear')

zoomOutBG = ->
	$('#eventsbg').transition({height: '90%', delay: 300 }, 13000,'linear')	

Template.nav.events {
	'mouseover #Welcome': (e,t) ->
		Session.set 'nav', 'home'
	'mouseover #Events': (e,t) ->
		Session.set 'nav', 'events'
		Deps.flush()
		Meteor.setTimeout(zoomBG, 200)
	'mouseover #Directory': (e,t) ->
		Session.set 'nav', 'directory'
		Deps.flush()
		Meteor.setTimeout(zoomBG, 200)
	'mouseover #Hours': (e,t) ->
		Session.set 'nav', 'hours'
	'mouseover #Maps': (e,t) ->
		Session.set 'nav', 'maps'
	'mouseover #Flags': (e,t) ->
		Session.set 'nav', 'flags'
}

# testCAL = ()->
# 	url = 'http://smgapp1.bu.edu/smgnet/smgcalendarU/todayRss2Steve.cfm'
# 	result = Meteor.http.get(url, ((error,result)-> console.log(result)))

Template.directory.person = ->
	facstaff.find({}, {sort: {lastname:1}})

Template.directory.wtf = ->
	if this.lastname.charAt(0) isnt tmp1
		tmp1 = this.lastname.charAt(0)
		tmp1
	else ''

Template.directory.alpha = ->
	['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

Template.directory.ppl = ->
	facstaff.find({})

Template.directory.mapsrc = ->
	"http://smgapps.bu.edu/maps/images/smgmap" + Session.get('mapsrc') + ".png"

Template.directory.thisinfo = ->
	Session.get 'thisinfo'

Template.directory.events {
	'click .title': (e,t) ->
		if $('#' + this._id).hasClass('active')
			$('#' + this._id).removeClass('active')
		else
			$('#' + this._id).addClass('active')
	'click .map': (e,t) ->
		console.log 'mapppp'
		Session.set 'thisinfo', this.firstname + ' ' + this.lastname + ', ' + this.room
		Session.set 'mapsrc', this.room.toString().charAt(0)
		Deps.flush()
		$('#myModal').addClass('open')
	'mouseover .close-reveal-modal': (e,t) ->
		$('#myModal').removeClass('open');
	'mouseover .alph': (e,t) ->
		tmp = this.toString()
		$('#directory-wrap').scrollTo("[name=#{tmp}]")
		# console.log this.toString()

}

@allHours = []

Template.hours.rendered = ->
	Meteor.call('smgHours', (error,result) ->
		console.log result
		$('#notice').html(result['Notice'].subhead + ' ' + result['Notice'].status)

		pardeeLibrary = result['Pardee Library'] 
		mainEntrance = result['Main Entrance']
		gradLab = result['Graduate Resource Center']
		teamRooms = result['Team Rooms']
		openAccess = result['Open Access Lab']
		copyCenter = result['Copy Center']
		starbucks = result['Starbucks']
		breadwinners = result['Breadwinners']

		if mainEntrance.status is ''
			x = String('<h3>Main Entrance</h3>' + 'Mon-Thurs: ' + mainEntrance['Mon-Thurs'] + '<br/>' + 'Friday: ' + mainEntrance['Friday'] + '<br/>' + 'Saturday: ' + mainEntrance['Saturday'] + '<br/>' + 'Sunday: ' + mainEntrance['Sunday'])
			$('#main-entrance').html(x)
		else 
			$('#main-entrance').html('<h3>Main Entrance</h3>' + mainEntrance.status)

		if gradLab.status is ''
			x = String('<h3>Graduate Lab</h3>' + 'Mon-Thurs: ' + gradLab['Mon-Thurs'] + '<br/>' + 'Friday: ' + gradLab['Friday'] + '<br/>' + 'Saturday: ' + gradLab['Saturday'] + '<br/>' + 'Sunday: ' + gradLab['Sunday'])
			$('#grc').html(x)
		else 
			$('#grc').html('<h3>Graduate Lab</h3>' + gradLab.status)

		if teamRooms.status is ''
			x = String('<h3>Team Rooms</h3>' + 'Mon-Thurs: ' + teamRooms['Mon-Thurs'] + '<br/>' + 'Friday: ' + teamRooms['Friday'] + '<br/>' + 'Saturday: ' + teamRooms['Saturday'] + '<br/>' + 'Sunday: ' + teamRooms['Sunday'])
			$('#team-rooms').html(x)
		else 
			$('#team-rooms').html('<h3>Team Rooms</h3>' + teamRooms.status)

		if pardeeLibrary.status is ''
			x = String('<h3>Pardee Library</h3>' + 'Mon-Thurs: ' + pardeeLibrary['Mon-Thurs'] + '<br/>' + 'Friday: ' + pardeeLibrary['Friday'] + '<br/>' + 'Saturday: ' + pardeeLibrary['Saturday'] + '<br/>' + 'Sunday: ' + pardeeLibrary['Sunday'])
			$('#pardee').html(x)
		else 
			$('#pardee').html('<h3>Pardee Library</h3>' + pardeeLibrary.status)

		if openAccess.status is ''
			x = String('<h3>Open Access Lab</h3>' + 'Mon-Thurs: ' + openAccess['Mon-Thurs'] + '<br/>' + 'Friday: ' + openAccess['Friday'] + '<br/>' + 'Saturday: ' + openAccess['Saturday'] + '<br/>' + 'Sunday: ' + openAccess['Sunday'])
			$('#lab').html(x)
		else 
			$('#lab').html('<h3>Open Access Lab</h3>' + openAccess.status)

		if copyCenter.status is ''
			x = String('<h3>Copy Center</h3>' + 'Mon-Thurs: ' + copyCenter['Mon-Thurs'] + '<br/>' + 'Friday: ' + copyCenter['Friday'] + '<br/>' + 'Saturday: ' + copyCenter['Saturday'] + '<br/>' + 'Sunday: ' + copyCenter['Sunday'])
			$('#copy').html(x)
		else 
			$('#copy').html('<h3>Copy Center</h3>' + copyCenter.status)

		if starbucks.status is ''
			x = String('<h3>Starbucks</h3>' + 'Mon-Thurs: ' + starbucks['Mon-Thurs'] + '<br/>' + 'Friday: ' + starbucks['Friday'] + '<br/>' + 'Saturday: ' + starbucks['Saturday'] + '<br/>' + 'Sunday: ' + starbucks['Sunday'])
			$('#starbucks').html(x)
		else 
			$('#starbucks').html('<h3>Starbucks</h3>' + starbucks.status)

		if breadwinners.status is ''
			x = String('<h3>Breadwinners</h3>' + 'Mon-Thurs: ' + breadwinners['Mon-Thurs'] + '<br/>' + 'Friday: ' + breadwinners['Friday'] + '<br/>' + 'Saturday: ' + breadwinners['Saturday'] + '<br/>' + 'Sunday: ' + breadwinners['Sunday'])
			$('#breadwinners').html(x)
		else 
			$('#breadwinners').html('<h3>Breadwinners</h3>' + breadwinners.status)
		)

# Template.hours.location = ->
# 	console.log allHours
# 	allHours
# 	# Meteor.call('smgHours', (error,result) ->
# 	# 	console.log(result)
# 	# 	$('#wtf').html('result')
# 	# )

	


