/*
 *  Sugar Library v1.3.9
 *
 *  Freely distributable and licensed under the MIT-style license.
 *  Copyright (c) 2013 Andrew Plummer
 *  http://sugarjs.com/
 *
 * ---------------------------- */
(function(){var k=true,l=null,n=false;function aa(a){return function(){return a}}var p=Object,q=Array,r=RegExp,s=Date,t=String,u=Number,v=Math,ba=p.prototype.toString,ca=typeof global!=="undefined"?global:this,da={},ea=p.defineProperty&&p.defineProperties,x="Array,Boolean,Date,Function,Number,String,RegExp".split(","),ga=fa(x[0]),ha=fa(x[1]),ia=fa(x[2]),y=fa(x[3]),A=fa(x[4]),B=fa(x[5]),C=fa(x[6]);
function fa(a){var b,c;if(/String|Number|Boolean/.test(a))b=a.toLowerCase();c=a==="Array"&&q.isArray||function(d){if(b&&typeof d===b)return k;return ba.call(d)==="[object "+a+"]"};return da[a]=c}function ja(a){if(!a.SugarMethods){ka(a,"SugarMethods",{});D(a,n,n,{extend:function(b,c,d){D(a,d!==n,c,b)},sugarRestore:function(){return la(a,arguments,function(b,c,d){ka(b,c,d.method)})},sugarRevert:function(){return la(a,arguments,function(b,c,d){if(d.qa)ka(b,c,d.Ba);else delete b[c]})}})}}
function D(a,b,c,d){var e=b?a.prototype:a;ja(a);E(d,function(f,h){var i=e[f],j=F(e,f);if(typeof c==="function")h=ma(e[f],h,c);if(c!==n||!e[f])ka(e,f,h);a.SugarMethods[f]={xa:b,method:h,Ba:i,qa:j}})}function G(a,b,c,d,e){var f={};d=B(d)?d.split(","):d;d.forEach(function(h,i){e(f,h,i)});D(a,b,c,f)}function la(a,b,c){var d=b.length===0,e=H(b),f=n;E(a.SugarMethods,function(h,i){if(d||e.indexOf(h)>-1){f=k;c(i.xa?a.prototype:a,h,i)}});return f}
function ma(a,b,c){return function(){return(a&&(c===k||!c.apply(this,arguments))?a:b).apply(this,arguments)}}function ka(a,b,c){if(ea)p.defineProperty(a,b,{value:c,configurable:k,enumerable:n,writable:k});else a[b]=c}function H(a,b){var c=[],d,e;d=0;for(e=a.length;d<e;d++){c.push(a[d]);b&&b.call(a,a[d],d)}return c}function na(a,b,c){H(q.prototype.concat.apply([],q.prototype.slice.call(a,c||0)),b)}function oa(a){if(!a||!a.call)throw new TypeError("Callback is not callable");}
function I(a){return a!==void 0}function K(a){return a===void 0}function pa(a){return a&&typeof a==="object"}function L(a){return!!a&&ba.call(a)==="[object Object]"&&"hasOwnProperty"in a}function F(a,b){return p.hasOwnProperty.call(a,b)}function E(a,b){for(var c in a)if(F(a,c))if(b.call(a,c,a[c],a)===n)break}function qa(a,b){E(b,function(c){a[c]=b[c]});return a}function ra(a){qa(this,a)}ra.prototype.constructor=p;
function sa(a,b,c,d){var e=[];a=parseInt(a);for(var f=d<0;!f&&a<=b||f&&a>=b;){e.push(a);c&&c.call(this,a);a+=d||1}return e}function N(a,b,c){c=v[c||"round"];var d=v.pow(10,v.abs(b||0));if(b<0)d=1/d;return c(a*d)/d}function O(a,b){return N(a,b,"floor")}function P(a,b,c,d){d=v.abs(a).toString(d||10);d=ta(b-d.replace(/\.\d+/,"").length,"0")+d;if(c||a<0)d=(a<0?"-":"+")+d;return d}
function ua(a){if(a>=11&&a<=13)return"th";else switch(a%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}}function va(){return"\t\n\u000b\u000c\r \u00a0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u2028\u2029\u3000\ufeff"}function ta(a,b){return q(v.max(0,I(a)?a:1)+1).join(b||"")}function wa(a,b){var c=a.toString().match(/[^/]*$/)[0];if(b)c=(c+b).split("").sort().join("").replace(/([gimy])\1+/g,"$1");return c}
function R(a){B(a)||(a=t(a));return a.replace(/([\\/'*+?|()\[\]{}.^$])/g,"\\$1")}function xa(a,b){var c=typeof a,d,e,f,h,i,j,g;if(c==="string")return a;f=ba.call(a);d=L(a);e=f==="[object Array]";if(a!=l&&d||e){b||(b=[]);if(b.length>1)for(j=b.length;j--;)if(b[j]===a)return"CYC";b.push(a);d=t(a.constructor);h=e?a:p.keys(a).sort();j=0;for(g=h.length;j<g;j++){i=e?j:h[j];d+=i+xa(a[i],b)}b.pop()}else d=1/a===-Infinity?"-0":t(a&&a.valueOf?a.valueOf():a);return c+f+d}
function ya(a){return/^\[object Date|Array|String|Number|RegExp|Boolean|Arguments\]$/.test(ba.call(a))||L(a)}function za(a,b,c){var d=[],e=a.length,f=b[b.length-1]!==n,h;H(b,function(i){if(ha(i))return n;if(f){i%=e;if(i<0)i=e+i}h=c?a.charAt(i)||"":a[i];d.push(h)});return d.length<2?d[0]:d}function Aa(a,b){G(b,k,n,a,function(c,d){c[d+(d==="equal"?"s":"")]=function(){return p[d].apply(l,[this].concat(H(arguments)))}})}ja(p);E(x,function(a,b){ja(ca[b])});
var U,bb,cb=["ampm","hour","minute","second","ampm","utc","offset_sign","offset_hours","offset_minutes","ampm"],db="({t})?\\s*(\\d{1,2}(?:[,.]\\d+)?)(?:{h}([0-5]\\d(?:[,.]\\d+)?)?{m}(?::?([0-5]\\d(?:[,.]\\d+)?){s})?\\s*(?:({t})|(Z)|(?:([+-])(\\d{2,2})(?::?(\\d{2,2}))?)?)?|\\s*({t}))",eb={},fb,gb,hb,ib=[],jb=[{ba:"f{1,4}|ms|milliseconds",format:function(a){return V(a,"Milliseconds")}},{ba:"ss?|seconds",format:function(a){return V(a,"Seconds")}},{ba:"mm?|minutes",format:function(a){return V(a,"Minutes")}},
{ba:"hh?|hours|12hr",format:function(a){a=V(a,"Hours");return a===0?12:a-O(a/13)*12}},{ba:"HH?|24hr",format:function(a){return V(a,"Hours")}},{ba:"dd?|date|day",format:function(a){return V(a,"Date")}},{ba:"dow|weekday",la:k,format:function(a,b,c){a=V(a,"Day");return b.weekdays[a+(c-1)*7]}},{ba:"MM?",format:function(a){return V(a,"Month")+1}},{ba:"mon|month",la:k,format:function(a,b,c){a=V(a,"Month");return b.months[a+(c-1)*12]}},{ba:"y{2,4}|year",format:function(a){return V(a,"FullYear")}},{ba:"[Tt]{1,2}",
format:function(a,b,c,d){if(b.ampm.length==0)return"";a=V(a,"Hours");b=b.ampm[O(a/12)];if(d.length===1)b=b.slice(0,1);if(d.slice(0,1)==="T")b=b.toUpperCase();return b}},{ba:"z{1,4}|tz|timezone",text:k,format:function(a,b,c,d){a=a.getUTCOffset();if(d=="z"||d=="zz")a=a.replace(/(\d{2})(\d{2})/,function(e,f){return P(f,d.length)});return a}},{ba:"iso(tz|timezone)",format:function(a){return a.getUTCOffset(k)}},{ba:"ord",format:function(a){a=V(a,"Date");return a+ua(a)}}],kb=[{$:"year",method:"FullYear",
ja:k,da:function(a){return(365+(a?a.isLeapYear()?1:0:0.25))*24*60*60*1E3}},{$:"month",method:"Month",ja:k,da:function(a,b){var c=30.4375,d;if(a){d=a.daysInMonth();if(b<=d.days())c=d}return c*24*60*60*1E3},error:0.919},{$:"week",method:"ISOWeek",da:aa(6048E5)},{$:"day",method:"Date",ja:k,da:aa(864E5)},{$:"hour",method:"Hours",da:aa(36E5)},{$:"minute",method:"Minutes",da:aa(6E4)},{$:"second",method:"Seconds",da:aa(1E3)},{$:"millisecond",method:"Milliseconds",da:aa(1)}],lb={};
function mb(a){qa(this,a);this.ga=ib.concat()}
mb.prototype={getMonth:function(a){return A(a)?a-1:this.months.indexOf(a)%12},getWeekday:function(a){return this.weekdays.indexOf(a)%7},oa:function(a){var b;return A(a)?a:a&&(b=this.numbers.indexOf(a))!==-1?(b+1)%10:1},ua:function(a){var b=this;return a.replace(r(this.num,"g"),function(c){return b.oa(c)||""})},sa:function(a){return U.units[this.units.indexOf(a)%8]},va:function(a){return this.na(a,a[2]>0?"future":"past")},ra:function(a){return this.na(nb(a),"duration")},wa:function(a){a=a||this.code;
return a==="en"||a==="en-US"?k:this.variant},za:function(a){return a===this.ampm[0]},Aa:function(a){return a&&a===this.ampm[1]},na:function(a,b){var c,d,e=a[0],f=a[1],h=a[2],i=this[b]||this.relative;if(y(i))return i.call(this,e,f,h,b);d=this.units[(this.plural&&e>1?1:0)*8+f]||this.units[f];if(this.capitalizeUnit)d=ob(d);c=this.modifiers.filter(function(j){return j.name=="sign"&&j.value==(h>0?1:-1)})[0];return i.replace(/\{(.*?)\}/g,function(j,g){switch(g){case "num":return e;case "unit":return d;
case "sign":return c.src}})},ta:function(){return this.ma?[this.ma].concat(this.ga):this.ga},addFormat:function(a,b,c,d,e){var f=c||[],h=this,i;a=a.replace(/\s+/g,"[-,. ]*");a=a.replace(/\{([^,]+?)\}/g,function(j,g){var m,o,w,z=g.match(/\?$/);w=g.match(/^(\d+)\??$/);var J=g.match(/(\d)(?:-(\d))?/),M=g.replace(/[^a-z]+$/,"");if(w)m=h.tokens[w[1]];else if(h[M])m=h[M];else if(h[M+"s"]){m=h[M+"s"];if(J){o=[];m.forEach(function(Q,Fa){var W=Fa%(h.units?8:m.length);if(W>=J[1]&&W<=(J[2]||J[1]))o.push(Q)});
m=o}m=pb(m)}if(w)w="(?:"+m+")";else{c||f.push(M);w="("+m+")"}if(z)w+="?";return w});if(b){b=qb(db,h,e);e=["t","[\\s\\u3000]"].concat(h.timeMarker);i=a.match(/\\d\{\d,\d\}\)+\??$/);rb(h,"(?:"+b+")[,\\s\\u3000]+?"+a,cb.concat(f),d);rb(h,a+"(?:[,\\s]*(?:"+e.join("|")+(i?"+":"*")+")"+b+")?",f.concat(cb),d)}else rb(h,a,f,d)}};function sb(a,b){var c;B(a)||(a="");c=lb[a]||lb[a.slice(0,2)];if(b===n&&!c)throw Error("Invalid locale.");return c||bb}
function tb(a,b){function c(g){var m=i[g];if(B(m))i[g]=m.split(",");else m||(i[g]=[])}function d(g,m){g=g.split("+").map(function(o){return o.replace(/(.+):(.+)$/,function(w,z,J){return J.split("|").map(function(M){return z+M}).join("|")})}).join("|");return g.split("|").forEach(m)}function e(g,m,o){var w=[];i[g].forEach(function(z,J){if(m)z+="+"+z.slice(0,3);d(z,function(M,Q){w[Q*o+J]=M.toLowerCase()})});i[g]=w}function f(g,m,o){g="\\d{"+g+","+m+"}";if(o)g+="|(?:"+pb(i.numbers)+")+";return g}function h(g,
m){i[g]=i[g]||m}var i,j;i=new mb(b);c("modifiers");"months,weekdays,units,numbers,articles,tokens,timeMarker,ampm,timeSuffixes,dateParse,timeParse".split(",").forEach(c);j=!i.monthSuffix;e("months",j,12);e("weekdays",j,7);e("units",n,8);e("numbers",n,10);h("code",a);h("date",f(1,2,i.digitDate));h("year","'\\d{2}|"+f(4,4));h("num",function(){var g=["\\d+"].concat(i.articles);if(i.numbers)g=g.concat(i.numbers);return pb(g)}());(function(){var g=[];i.ha={};i.modifiers.push({name:"day",src:"yesterday",
value:-1});i.modifiers.push({name:"day",src:"today",value:0});i.modifiers.push({name:"day",src:"tomorrow",value:1});i.modifiers.forEach(function(m){var o=m.name;d(m.src,function(w){var z=i[o];i.ha[w]=m;g.push({name:o,src:w,value:m.value});i[o]=z?z+"|"+w:w})});i.day+="|"+pb(i.weekdays);i.modifiers=g})();if(i.monthSuffix){i.month=f(1,2);i.months=sa(1,12).map(function(g){return g+i.monthSuffix})}i.full_month=f(1,2)+"|"+pb(i.months);i.timeSuffixes.length>0&&i.addFormat(qb(db,i),n,cb);i.addFormat("{day}",
k);i.addFormat("{month}"+(i.monthSuffix||""));i.addFormat("{year}"+(i.yearSuffix||""));i.timeParse.forEach(function(g){i.addFormat(g,k)});i.dateParse.forEach(function(g){i.addFormat(g)});return lb[a]=i}function rb(a,b,c,d){a.ga.unshift({Da:d,ya:a,Ca:r("^"+b+"$","i"),to:c})}function ob(a){return a.slice(0,1).toUpperCase()+a.slice(1)}function pb(a){return a.filter(function(b){return!!b}).join("|")}
function ub(a,b){var c;if(L(a[0]))return a;else if(A(a[0])&&!A(a[1]))return[a[0]];else if(B(a[0])&&b)return[vb(a[0]),a[1]];c={};gb.forEach(function(d,e){c[d.$]=a[e]});return[c]}function vb(a,b){var c={};if(match=a.match(/^(\d+)?\s?(\w+?)s?$/i)){if(K(b))b=parseInt(match[1])||1;c[match[2].toLowerCase()]=b}return c}
function wb(a,b){var c={},d,e;b.forEach(function(f,h){d=a[h+1];if(!(K(d)||d==="")){if(f==="year")c.Ea=d.replace(/'/,"");e=parseFloat(d.replace(/'/,"").replace(/,/,"."));c[f]=!isNaN(e)?e:d.toLowerCase()}});return c}function xb(a){a=a.trim().replace(/^just (?=now)|\.+$/i,"");return yb(a)}
function yb(a){return a.replace(fb,function(b,c,d){var e=0,f=1,h,i;if(c)return b;d.split("").reverse().forEach(function(j){j=eb[j];var g=j>9;if(g){if(h)e+=f;f*=j/(i||1);i=j}else{if(h===n)f*=10;e+=f*j}h=g});if(h)e+=f;return e})}
function zb(a,b,c,d){var e=new s,f=n,h,i,j,g,m,o,w,z,J;e.utc(d);if(ia(a))e.utc(a.isUTC()).setTime(a.getTime());else if(A(a))e.setTime(a);else if(L(a)){e.set(a,k);g=a}else if(B(a)){h=sb(b);a=xb(a);h&&E(h.ta(),function(M,Q){var Fa=a.match(Q.Ca);if(Fa){j=Q;i=j.ya;g=wb(Fa,j.to,i);g.utc&&e.utc();i.ma=j;if(g.timestamp){g=g.timestamp;return n}if(j.Da&&!B(g.month)&&(B(g.date)||h.wa(b))){z=g.month;g.month=g.date;g.date=z}if(g.year&&g.Ea.length===2)g.year=N(V(new s,"FullYear")/100)*100-N(g.year/100)*100+g.year;
if(g.month){g.month=i.getMonth(g.month);if(g.shift&&!g.unit)g.unit=i.units[7]}if(g.weekday&&g.date)delete g.weekday;else if(g.weekday){g.weekday=i.getWeekday(g.weekday);if(g.shift&&!g.unit)g.unit=i.units[5]}if(g.day&&(z=i.ha[g.day])){g.day=z.value;e.reset();f=k}else if(g.day&&(o=i.getWeekday(g.day))>-1){delete g.day;if(g.num&&g.month){J=function(){var W=e.getWeekday();e.setWeekday(7*(g.num-1)+(W>o?o+7:o))};g.day=1}else g.weekday=o}if(g.date&&!A(g.date))g.date=i.ua(g.date);if(i.Aa(g.ampm)&&g.hour<
12)g.hour+=12;else if(i.za(g.ampm)&&g.hour===12)g.hour=0;if("offset_hours"in g||"offset_minutes"in g){e.utc();g.offset_minutes=g.offset_minutes||0;g.offset_minutes+=g.offset_hours*60;if(g.offset_sign==="-")g.offset_minutes*=-1;g.minute-=g.offset_minutes}if(g.unit){f=k;w=i.oa(g.num);m=i.sa(g.unit);if(g.shift||g.edge){w*=(z=i.ha[g.shift])?z.value:0;if(m==="month"&&I(g.date)){e.set({day:g.date},k);delete g.date}if(m==="year"&&I(g.month)){e.set({month:g.month,day:g.date},k);delete g.month;delete g.date}}if(g.sign&&
(z=i.ha[g.sign]))w*=z.value;if(I(g.weekday)){e.set({weekday:g.weekday},k);delete g.weekday}g[m]=(g[m]||0)+w}if(g.year_sign==="-")g.year*=-1;hb.slice(1,4).forEach(function(W,fc){var Gb=g[W.$],Hb=Gb%1;if(Hb){g[hb[fc].$]=N(Hb*(W.$==="second"?1E3:60));g[W.$]=O(Gb)}});return n}});if(j)if(f)e.advance(g);else{e._utc&&e.reset();Ab(e,g,k,n,c)}else{if(a!=="now")e=new s(a);d&&e.addMinutes(-e.getTimezoneOffset())}if(g&&g.edge){z=i.ha[g.edge];E(hb.slice(4),function(M,Q){if(I(g[Q.$])){m=Q.$;return n}});if(m===
"year")g.fa="month";else if(m==="month"||m==="week")g.fa="day";e[(z.value<0?"endOf":"beginningOf")+ob(m)]();z.value===-2&&e.reset()}J&&J();e.utc(n)}return{ea:e,set:g}}function nb(a){var b,c=v.abs(a),d=c,e=0;hb.slice(1).forEach(function(f,h){b=O(N(c/f.da()*10)/10);if(b>=1){d=b;e=h+1}});return[d,e,a]}function Bb(a){var b=nb(a.millisecondsFromNow());if(b[1]===6)b[0]=v.abs(a.monthsFromNow());return b}
function Cb(a,b,c,d){var e,f=sb(d),h=r(/^[A-Z]/);if(a.isValid())if(Date[b])b=Date[b];else{if(y(b)){e=Bb(a);b=b.apply(a,e.concat(f))}}else return"Invalid Date";if(!b&&c){e=e||Bb(a);if(e[1]===0){e[1]=1;e[0]=1}return f.va(e)}b=b||"long";b=f[b]||b;jb.forEach(function(i){b=b.replace(r("\\{("+i.ba+")(\\d)?\\}",i.la?"i":""),function(j,g,m){j=i.format(a,f,m||1,g);m=g.length;var o=g.match(/^(.)\1+$/);if(i.la){if(m===3)j=j.slice(0,3);if(o||g.match(h))j=ob(j)}else if(o&&!i.text)j=(A(j)?P(j,m):j.toString()).slice(-m);
return j})});return b}function Db(a,b,c,d){var e,f,h,i=0,j=0,g=0;e=zb(b,l,l,d);if(c>0){j=g=c;f=k}if(!e.ea.isValid())return n;if(e.set&&e.set.fa){kb.forEach(function(m){if(m.$===e.set.fa)i=m.da(e.ea,a-e.ea)-1});b=ob(e.set.fa);if(e.set.edge||e.set.shift)e.ea["beginningOf"+b]();if(e.set.fa==="month")h=e.ea.clone()["endOf"+b]().getTime();if(!f&&e.set.sign&&e.set.fa!="millisecond"){j=50;g=-50}}f=a.getTime();b=e.ea.getTime();h=h||b+i;h=Eb(a,b,h);return f>=b-j&&f<=h+g}
function Eb(a,b,c){b=new Date(b);a=(new Date(c)).utc(a.isUTC());if(V(a,"Hours")!==23){b=b.getTimezoneOffset();a=a.getTimezoneOffset();if(b!==a)c+=(a-b).minutes()}return c}
function Ab(a,b,c,d,e){function f(g){return I(b[g])?b[g]:b[g+"s"]}function h(g){return I(f(g))}var i,j;if(A(b)&&d)b={milliseconds:b};else if(A(b)){a.setTime(b);return a}if(I(b.date))b.day=b.date;E(hb,function(g,m){var o=m.$==="day";if(h(m.$)||o&&h("weekday")){b.fa=m.$;j=+g;return n}else if(c&&m.$!=="week"&&(!o||!h("week")))Fb(a,m.method,o?1:0)});kb.forEach(function(g){var m=g.$;g=g.method;var o;o=f(m);if(!K(o)){if(d){if(m==="week"){o=(b.day||0)+o*7;g="Date"}o=o*d+V(a,g)}else m==="month"&&h("day")&&
Fb(a,"Date",15);Fb(a,g,o);if(d&&m==="month"){m=o;if(m<0)m=m%12+12;m%12!=V(a,"Month")&&Fb(a,"Date",0)}}});if(!d&&!h("day")&&h("weekday")){i=f("weekday");a.setWeekday(i)}(function(){var g=new s;return e===-1&&a>g||e===1&&a<g})()&&E(hb.slice(j+1),function(g,m){if((m.ja||m.$==="week"&&h("weekday"))&&!(h(m.$)||m.$==="day"&&h("weekday"))){a[m.ia](e);return n}});return a}function V(a,b){return a["get"+(a._utc?"UTC":"")+b]()}function Fb(a,b,c){return a["set"+(a._utc&&b!="ISOWeek"?"UTC":"")+b](c)}
function qb(a,b,c){var d={h:0,m:1,s:2},e;b=b||U;return a.replace(/{([a-z])}/g,function(f,h){var i=[],j=h==="h",g=j&&!c;if(h==="t")return b.ampm.join("|");else{j&&i.push(":");if(e=b.timeSuffixes[d[h]])i.push(e+"\\s*");return i.length===0?"":"(?:"+i.join("|")+")"+(g?"":"?")}})}function X(a,b,c){var d,e;if(A(a[1]))d=ub(a)[0];else{d=a[0];e=a[1]}return zb(d,e,b,c).ea}
s.extend({create:function(){return X(arguments)},past:function(){return X(arguments,-1)},future:function(){return X(arguments,1)},addLocale:function(a,b){return tb(a,b)},setLocale:function(a){var b=sb(a,n);bb=b;if(a&&a!=b.code)b.code=a;return b},getLocale:function(a){return!a?bb:sb(a,n)},addFormat:function(a,b,c){rb(sb(c),a,b)}},n,n);
s.extend({set:function(){var a=ub(arguments);return Ab(this,a[0],a[1])},setWeekday:function(a){if(!K(a))return Fb(this,"Date",V(this,"Date")+a-V(this,"Day"))},setISOWeek:function(a){var b=V(this,"Day")||7;if(!K(a)){this.set({month:0,date:4});this.set({weekday:1});a>1&&this.addWeeks(a-1);b!==1&&this.advance({days:b-1});return this.getTime()}},getISOWeek:function(){var a=this;a=a.clone();var b=V(a,"Day")||7;a.addDays(4-b).reset();return 1+O(a.daysSince(a.clone().beginningOfYear())/7)},getUTCOffset:function(a){var b=
this._utc?0:this.getTimezoneOffset(),c=a===k?":":"";if(!b&&a)return"Z";return P(O(-b/60),2,k)+c+P(v.abs(b%60),2)},utc:function(a){ka(this,"_utc",a===k||arguments.length===0);return this},isUTC:function(){return!!this._utc||this.getTimezoneOffset()===0},advance:function(){var a=ub(arguments,k);return Ab(this,a[0],a[1],1)},rewind:function(){var a=ub(arguments,k);return Ab(this,a[0],a[1],-1)},isValid:function(){return!isNaN(this.getTime())},isAfter:function(a,b){return this.getTime()>s.create(a).getTime()-
(b||0)},isBefore:function(a,b){return this.getTime()<s.create(a).getTime()+(b||0)},isBetween:function(a,b,c){var d=this.getTime();a=s.create(a).getTime();var e=s.create(b).getTime();b=v.min(a,e);a=v.max(a,e);c=c||0;return b-c<d&&a+c>d},isLeapYear:function(){var a=V(this,"FullYear");return a%4===0&&a%100!==0||a%400===0},daysInMonth:function(){return 32-V(new s(V(this,"FullYear"),V(this,"Month"),32),"Date")},format:function(a,b){return Cb(this,a,n,b)},relative:function(a,b){if(B(a)){b=a;a=l}return Cb(this,
a,k,b)},is:function(a,b,c){var d,e;if(this.isValid()){if(B(a)){a=a.trim().toLowerCase();e=this.clone().utc(c);switch(k){case a==="future":return this.getTime()>(new s).getTime();case a==="past":return this.getTime()<(new s).getTime();case a==="weekday":return V(e,"Day")>0&&V(e,"Day")<6;case a==="weekend":return V(e,"Day")===0||V(e,"Day")===6;case (d=U.weekdays.indexOf(a)%7)>-1:return V(e,"Day")===d;case (d=U.months.indexOf(a)%12)>-1:return V(e,"Month")===d}}return Db(this,a,b,c)}},reset:function(a){var b=
{},c;a=a||"hours";if(a==="date")a="days";c=kb.some(function(d){return a===d.$||a===d.$+"s"});b[a]=a.match(/^days?/)?1:0;return c?this.set(b,k):this},clone:function(){var a=new s(this.getTime());a.utc(!!this._utc);return a}});s.extend({iso:function(){return this.toISOString()},getWeekday:s.prototype.getDay,getUTCWeekday:s.prototype.getUTCDay});
function Ib(a,b){function c(){return N(this*b)}function d(){return X(arguments)[a.ia](this)}function e(){return X(arguments)[a.ia](-this)}var f=a.$,h={};h[f]=c;h[f+"s"]=c;h[f+"Before"]=e;h[f+"sBefore"]=e;h[f+"Ago"]=e;h[f+"sAgo"]=e;h[f+"After"]=d;h[f+"sAfter"]=d;h[f+"FromNow"]=d;h[f+"sFromNow"]=d;u.extend(h)}u.extend({duration:function(a){return sb(a).ra(this)}});
U=bb=s.addLocale("en",{plural:k,timeMarker:"at",ampm:"am,pm",months:"January,February,March,April,May,June,July,August,September,October,November,December",weekdays:"Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday",units:"millisecond:|s,second:|s,minute:|s,hour:|s,day:|s,week:|s,month:|s,year:|s",numbers:"one,two,three,four,five,six,seven,eight,nine,ten",articles:"a,an,the",tokens:"the,st|nd|rd|th,of","short":"{Month} {d}, {yyyy}","long":"{Month} {d}, {yyyy} {h}:{mm}{tt}",full:"{Weekday} {Month} {d}, {yyyy} {h}:{mm}:{ss}{tt}",
past:"{num} {unit} {sign}",future:"{num} {unit} {sign}",duration:"{num} {unit}",modifiers:[{name:"sign",src:"ago|before",value:-1},{name:"sign",src:"from now|after|from|in|later",value:1},{name:"edge",src:"last day",value:-2},{name:"edge",src:"end",value:-1},{name:"edge",src:"first day|beginning",value:1},{name:"shift",src:"last",value:-1},{name:"shift",src:"the|this",value:0},{name:"shift",src:"next",value:1}],dateParse:["{num} {unit} {sign}","{sign} {num} {unit}","{month} {year}","{shift} {unit=5-7}",
"{0?} {date}{1}","{0?} {edge} of {shift?} {unit=4-7?}{month?}{year?}"],timeParse:["{0} {num}{1} {day} of {month} {year?}","{weekday?} {month} {date}{1?} {year?}","{date} {month} {year}","{date} {month}","{shift} {weekday}","{shift} week {weekday}","{weekday} {2?} {shift} week","{num} {unit=4-5} {sign} {day}","{0?} {date}{1} of {month}","{0?}{month?} {date?}{1?} of {shift} {unit=6-7}"]});hb=kb.concat().reverse();gb=kb.concat();gb.splice(2,1);
G(s,k,n,kb,function(a,b,c){function d(g){g=g/h;var m=g%1,o=b.error||0.999;if(m&&v.abs(m%1)>o)g=N(g);return parseInt(g)}var e=b.$,f=ob(e),h=b.da(),i,j;b.ia="add"+f+"s";i=function(g,m){return d(this.getTime()-s.create(g,m).getTime())};j=function(g,m){return d(s.create(g,m).getTime()-this.getTime())};a[e+"sAgo"]=j;a[e+"sUntil"]=j;a[e+"sSince"]=i;a[e+"sFromNow"]=i;a[b.ia]=function(g,m){var o={};o[e]=g;return this.advance(o,m)};Ib(b,h);c<3&&["Last","This","Next"].forEach(function(g){a["is"+g+f]=function(){return this.is(g+
" "+e)}});if(c<4){a["beginningOf"+f]=function(){var g={};switch(e){case "year":g.year=V(this,"FullYear");break;case "month":g.month=V(this,"Month");break;case "day":g.day=V(this,"Date");break;case "week":g.weekday=0}return this.set(g,k)};a["endOf"+f]=function(){var g={hours:23,minutes:59,seconds:59,milliseconds:999};switch(e){case "year":g.month=11;g.day=31;break;case "month":g.day=this.daysInMonth();break;case "week":g.weekday=6}return this.set(g,k)}}});
U.addFormat("([+-])?(\\d{4,4})[-.]?{full_month}[-.]?(\\d{1,2})?",k,["year_sign","year","month","date"],n,k);U.addFormat("(\\d{1,2})[-.\\/]{full_month}(?:[-.\\/](\\d{2,4}))?",k,["date","month","year"],k);U.addFormat("{full_month}[-.](\\d{4,4})",n,["month","year"]);U.addFormat("\\/Date\\((\\d+(?:\\+\\d{4,4})?)\\)\\/",n,["timestamp"]);U.addFormat(qb(db,U),n,cb);ib=U.ga.slice(0,7).reverse();U.ga=U.ga.slice(7).concat(ib);G(s,k,n,"short,long,full",function(a,b){a[b]=function(c){return Cb(this,b,n,c)}});
"\u3007\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u4e03\u516b\u4e5d\u5341\u767e\u5343\u4e07".split("").forEach(function(a,b){if(b>9)b=v.pow(10,b-9);eb[a]=b});"\uff10\uff11\uff12\uff13\uff14\uff15\uff16\uff17\uff18\uff19".split("").forEach(function(a,b){eb[a]=b});fb=r("([\u671f\u9031\u5468])?([\u3007\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u4e03\u516b\u4e5d\u5341\u767e\u5343\u4e07\uff10\uff11\uff12\uff13\uff14\uff15\uff16\uff17\uff18\uff19]+)(?!\u6628)","g");
(function(){var a="today,yesterday,tomorrow,weekday,weekend,future,past".split(","),b=U.weekdays.slice(0,7),c=U.months.slice(0,12);G(s,k,n,a.concat(b).concat(c),function(d,e){d["is"+ob(e)]=function(f){return this.is(e,0,f)}})})();(function(){s.extend({utc:{create:function(){return X(arguments,0,k)},past:function(){return X(arguments,-1,k)},future:function(){return X(arguments,1,k)}}},n,n)})();
s.extend({RFC1123:"{Dow}, {dd} {Mon} {yyyy} {HH}:{mm}:{ss} {tz}",RFC1036:"{Weekday}, {dd}-{Mon}-{yy} {HH}:{mm}:{ss} {tz}",ISO8601_DATE:"{yyyy}-{MM}-{dd}",ISO8601_DATETIME:"{yyyy}-{MM}-{dd}T{HH}:{mm}:{ss}.{fff}{isotz}"},n,n);
DateRange=function(a,b){this.start=s.create(a);this.end=s.create(b)};DateRange.prototype.toString=function(){return this.isValid()?this.start.full()+".."+this.end.full():"Invalid DateRange"};
D(DateRange,k,n,{isValid:function(){return this.start<this.end},duration:function(){return this.isValid()?this.end.getTime()-this.start.getTime():NaN},contains:function(a){var b=this;return(a.start&&a.end?[a.start,a.end]:[a]).every(function(c){return c>=b.start&&c<=b.end})},every:function(a,b){var c=this.start.clone(),d=[],e=0,f,h;if(B(a)){c.advance(vb(a,0),k);f=vb(a);h=a.toLowerCase()==="day"}else f={milliseconds:a};for(;c<=this.end;){d.push(c);b&&b(c,e);if(h&&V(c,"Hours")===23){c=c.clone();Fb(c,
"Hours",48)}else c=c.clone().advance(f,k);e++}return d},union:function(a){return new DateRange(this.start<a.start?this.start:a.start,this.end>a.end?this.end:a.end)},intersect:function(a){return new DateRange(this.start>a.start?this.start:a.start,this.end<a.end?this.end:a.end)},clone:function(){return new DateRange(this.start,this.end)}});G(DateRange,k,n,"Millisecond,Second,Minute,Hour,Day,Week,Month,Year",function(a,b){a["each"+b]=function(c){return this.every(b,c)}});
D(s,n,n,{range:function(a,b){return new DateRange(a,b)}});})();