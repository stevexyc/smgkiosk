calendar = new Meteor.Collection('Calendar')
facstaff = new Meteor.Collection('FacStaff')

Meteor.startup ->
	getCalData()
	getFacStaff()
	Meteor.setInterval(getCalData, 21600000)
	Meteor.setInterval(getFacStaff, 86400000)


getCalData = ()->
	calendar.remove {}
	url = 'http://smgapps.bu.edu/smgnet/smgcalendarU/todayJson.cfm'
	data = Meteor.http.get(url).data
	if calendar.find().count() isnt 0
		calendar.remove {}
	for zevent in data.DATA 
		isoDate = Date.create( zevent[3] ).toISOString()
		calendar.insert {
			id: zevent[0]
			title: zevent[1]
			weblink: zevent[2]
			date: isoDate
			zdate: zevent[3]
			location: zevent[4]
		}

getFacStaff = () ->
	facstaff.remove {}
	url = 'http://smgapps.bu.edu/mgmt_new/kiosk/facStaffDirectory/facStaffKiosk.cfm'
	data = Meteor.http.get(url).data
	for person in data.DATA 
		facstaff.insert {
			lastname: person[0]
			firstname: person[1]
			title: person[2]
			room: person[3]
			phone: person[4]
			email: person[6]
			dept: person[9]
			pubkey: person[7].replace /\s/g, ""
		}

Meteor.methods {
	'smgHours' : () ->
		url = 'http://smgserv1.bu.edu/hours2/data.php'
		result = Meteor.http.get(url).data
}
