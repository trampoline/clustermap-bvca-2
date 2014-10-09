// Compiled by ClojureScript 0.0-2322
goog.provide('cljs_time.format');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('cljs_time.internal.core');
goog.require('goog.string');
goog.require('goog.string');
goog.require('goog.date');
goog.require('cljs_time.core');
goog.require('clojure.set');
goog.require('cljs_time.core');
goog.require('cljs_time.internal.core');
goog.require('goog.string.format');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('goog.date');
cljs_time.format.months = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["January","February","March","April","May","June","July","August","September","October","November","December"], null);
cljs_time.format.days = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], null);
cljs_time.format.abbreviate = (function abbreviate(n,s){return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),n);
});
/**
* **Note: not all formatters have been implemented yet.**
* 
* The pattern syntax is mostly compatible with java.text.SimpleDateFormat -
* time zone names cannot be parsed and a few more symbols are supported. All
* ASCII letters are reserved as pattern letters, which are defined as follows:
* 
* Symbol  Meaning                      Presentation  Examples
* ------  -------                      ------------  -------
* G       era                          text          AD
* C       century of era (>=0)         number        20
* Y       year of era (>=0)            year          1996
* 
* x       weekyear                     year          1996
* w       week of weekyear             number        27
* e       day of week                  number        2
* E       day of week                  text          Tuesday; Tue
* 
* y       year                         year          1996
* D       day of year                  number        189
* M       month of year                month         July; Jul; 07
* d       day of month                 number        10
* 
* a       halfday of day               text          PM
* K       hour of halfday (0~11)       number        0
* h       clockhour of halfday (1~12)  number        12
* 
* H       hour of day (0~23)           number        0
* k       clockhour of day (1~24)      number        24
* m       minute of hour               number        30
* s       second of minute             number        55
* S       fraction of second           number        978
* a       meridiem                     text          am; pm
* A       meridiem                     text          AM; PM
* 
* z       time zone                    text          Pacific Standard Time; PST
* Z       time zone offset/id          zone          -0800; -08:00; America/Los_Angeles
* 
* '       escape for text              delimiter
* ''      single quote                 literal       '
* 
* The count of pattern letters determine the format.
* 
* **Text:** If the number of pattern letters is 4 or more, the full form is used;
* otherwise a short or abbreviated form is used if available.
* 
* **Number:** The minimum number of digits. Shorter numbers are zero-padded to this
* amount.
* 
* **Year:** Numeric presentation for year and weekyear fields are handled
* specially. For example, if the count of 'y' is 2, the year will be displayed
* as the zero-based year of the century, which is two digits.
* 
* **Month:** 3 or over, use text, otherwise use number.
* 
* **Zone:** 'Z' outputs offset without a colon, 'ZZ' outputs the offset with a
* colon, 'ZZZ' or more outputs the zone id.
* 
* **Zone names:** Time zone names ('z') cannot be parsed.
* 
* Any characters in the pattern that are not in the ranges of ['a'..'z'] and
* ['A'..'Z'] will be treated as quoted text. For instance, characters like ':',
* '.', ' ', '#' and '?' will appear in the resulting time text even they are
* not embraced within single quotes.
*/
cljs_time.format.date_formatters = (function (){var d = (function (p1__54003_SHARP_){return p1__54003_SHARP_.getDate();
});var M = ((function (d){
return (function (p1__54004_SHARP_){return (p1__54004_SHARP_.getMonth() + (1));
});})(d))
;var y = ((function (d,M){
return (function (p1__54005_SHARP_){return p1__54005_SHARP_.getYear();
});})(d,M))
;var h = ((function (d,M,y){
return (function (p1__54006_SHARP_){var hr = cljs.core.mod(p1__54006_SHARP_.getHours(),(12));if((hr === (0)))
{return (12);
} else
{return hr;
}
});})(d,M,y))
;var a = ((function (d,M,y,h){
return (function (p1__54007_SHARP_){if((p1__54007_SHARP_.getHours() < (12)))
{return "am";
} else
{return "pm";
}
});})(d,M,y,h))
;var A = ((function (d,M,y,h,a){
return (function (p1__54008_SHARP_){if((p1__54008_SHARP_.getHours() < (12)))
{return "AM";
} else
{return "PM";
}
});})(d,M,y,h,a))
;var H = ((function (d,M,y,h,a,A){
return (function (p1__54009_SHARP_){return p1__54009_SHARP_.getHours();
});})(d,M,y,h,a,A))
;var m = ((function (d,M,y,h,a,A,H){
return (function (p1__54010_SHARP_){return p1__54010_SHARP_.getMinutes();
});})(d,M,y,h,a,A,H))
;var s = ((function (d,M,y,h,a,A,H,m){
return (function (p1__54011_SHARP_){return p1__54011_SHARP_.getSeconds();
});})(d,M,y,h,a,A,H,m))
;var S = ((function (d,M,y,h,a,A,H,m,s){
return (function (p1__54012_SHARP_){return p1__54012_SHARP_.getMilliseconds();
});})(d,M,y,h,a,A,H,m,s))
;var Z = ((function (d,M,y,h,a,A,H,m,s,S){
return (function (p1__54013_SHARP_){return p1__54013_SHARP_.getTimezoneOffsetString();
});})(d,M,y,h,a,A,H,m,s,S))
;var doy = ((function (d,M,y,h,a,A,H,m,s,S,Z){
return (function (p1__54014_SHARP_){return p1__54014_SHARP_.getDayOfYear();
});})(d,M,y,h,a,A,H,m,s,S,Z))
;var dow = ((function (d,M,y,h,a,A,H,m,s,S,Z,doy){
return (function (p1__54015_SHARP_){return p1__54015_SHARP_.getDay();
});})(d,M,y,h,a,A,H,m,s,S,Z,doy))
;return cljs.core.PersistentHashMap.fromArrays(["d","HH","ZZ","s","ww","MMM","e","ss","DDD","SSS","dow","M","mm","S","MM","EEE","Z","H","dd","a","hh","dth","yyyy","A","EEEE","h","xxxx","m","yy","MMMM"],[d,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__54026_SHARP_){return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$1(H(p1__54026_SHARP_));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,Z,s,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__54030_SHARP_){return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$1((Math.ceil.cljs$core$IFn$_invoke$arity$1 ? Math.ceil.cljs$core$IFn$_invoke$arity$1((doy(p1__54030_SHARP_) / (7))) : Math.ceil.call(null,(doy(p1__54030_SHARP_) / (7)))));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__54022_SHARP_){return cljs_time.format.abbreviate((3),(cljs_time.format.months.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.months.cljs$core$IFn$_invoke$arity$1((M(p1__54022_SHARP_) - (1))) : cljs_time.format.months.call(null,(M(p1__54022_SHARP_) - (1)))));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,dow,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__54028_SHARP_){return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$1(s(p1__54028_SHARP_));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,doy,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__54029_SHARP_){return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$2(S(p1__54029_SHARP_),(3));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__54018_SHARP_){return (cljs_time.format.days.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.days.cljs$core$IFn$_invoke$arity$1(dow(p1__54018_SHARP_)) : cljs_time.format.days.call(null,dow(p1__54018_SHARP_)));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,M,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__54027_SHARP_){return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$1(m(p1__54027_SHARP_));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,S,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__54021_SHARP_){return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$1(M(p1__54021_SHARP_));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__54019_SHARP_){return cljs_time.format.abbreviate((3),(cljs_time.format.days.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.days.cljs$core$IFn$_invoke$arity$1(dow(p1__54019_SHARP_)) : cljs_time.format.days.call(null,dow(p1__54019_SHARP_))));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,Z,H,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__54016_SHARP_){return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$1(d(p1__54016_SHARP_));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,a,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__54025_SHARP_){return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$1(h(p1__54025_SHARP_));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__54017_SHARP_){var d__$1 = d(p1__54017_SHARP_);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(d__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__54031 = d__$1;switch (G__54031) {
case (1):
return "st";

break;
case (2):
return "nd";

break;
case (3):
return "rd";

break;
default:
return "th";

}
})()));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,y,A,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__54020_SHARP_){return (cljs_time.format.days.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.days.cljs$core$IFn$_invoke$arity$1(dow(p1__54020_SHARP_)) : cljs_time.format.days.call(null,dow(p1__54020_SHARP_)));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,h,y,m,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__54024_SHARP_){return cljs.core.mod(y(p1__54024_SHARP_),(100));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__54023_SHARP_){return (cljs_time.format.months.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.months.cljs$core$IFn$_invoke$arity$1((M(p1__54023_SHARP_) - (1))) : cljs_time.format.months.call(null,(M(p1__54023_SHARP_) - (1))));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
]);
})();
cljs_time.format.timezone_adjustment = (function timezone_adjustment(d,timezone_string){var vec__54036 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(timezone_string,/Z|(?:([-+])(\d{2})(?::?(\d{2}))?)$/);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54036,(0),null);var sign = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54036,(1),null);var hh = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54036,(2),null);var mm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54036,(3),null);if(cljs.core.truth_((function (){var and__3546__auto__ = sign;if(cljs.core.truth_(and__3546__auto__))
{var and__3546__auto____$1 = hh;if(cljs.core.truth_(and__3546__auto____$1))
{return mm;
} else
{return and__3546__auto____$1;
}
} else
{return and__3546__auto__;
}
})()))
{var sign_54038__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sign,"-"))?cljs_time.core.plus:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sign,"+"))?cljs_time.core.minus:null));var vec__54037_54039 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (sign_54038__$1,vec__54036,_,sign,hh,mm){
return (function (p1__54033_SHARP_){return parseInt(p1__54033_SHARP_,(10));
});})(sign_54038__$1,vec__54036,_,sign,hh,mm))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hh,mm], null));var hh_54040__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54037_54039,(0),null);var mm_54041__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54037_54039,(1),null);var adjusted_54042 = (sign_54038__$1.cljs$core$IFn$_invoke$arity$2 ? sign_54038__$1.cljs$core$IFn$_invoke$arity$2((sign_54038__$1.cljs$core$IFn$_invoke$arity$2 ? sign_54038__$1.cljs$core$IFn$_invoke$arity$2(d,cljs_time.core.hours.cljs$core$IFn$_invoke$arity$1(hh_54040__$1)) : sign_54038__$1.call(null,d,cljs_time.core.hours.cljs$core$IFn$_invoke$arity$1(hh_54040__$1))),cljs_time.core.minutes.cljs$core$IFn$_invoke$arity$1(mm_54041__$1)) : sign_54038__$1.call(null,(sign_54038__$1.cljs$core$IFn$_invoke$arity$2 ? sign_54038__$1.cljs$core$IFn$_invoke$arity$2(d,cljs_time.core.hours.cljs$core$IFn$_invoke$arity$1(hh_54040__$1)) : sign_54038__$1.call(null,d,cljs_time.core.hours.cljs$core$IFn$_invoke$arity$1(hh_54040__$1))),cljs_time.core.minutes.cljs$core$IFn$_invoke$arity$1(mm_54041__$1)));d.setTime(adjusted_54042.getTime());
} else
{}
return d;
});
cljs_time.format.date_parsers = (function (){var parse_int = (function (p1__54043_SHARP_){return parseInt(p1__54043_SHARP_,(10));
});var assoc_fn = ((function (parse_int){
return (function (kw){return ((function (parse_int){
return (function (p1__54044_SHARP_,p2__54045_SHARP_){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__54044_SHARP_,kw,parse_int(p2__54045_SHARP_));
});
;})(parse_int))
});})(parse_int))
;var y = assoc_fn(cljs.core.constant$keyword$1299);var d = assoc_fn(cljs.core.constant$keyword$1297);var M = ((function (parse_int,assoc_fn,y,d){
return (function (p1__54046_SHARP_,p2__54047_SHARP_){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__54046_SHARP_,cljs.core.constant$keyword$1298,(parse_int(p2__54047_SHARP_) - (1)));
});})(parse_int,assoc_fn,y,d))
;var h = ((function (parse_int,assoc_fn,y,d,M){
return (function (p1__54048_SHARP_,p2__54049_SHARP_){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__54048_SHARP_,cljs.core.constant$keyword$1296,cljs.core.mod(parse_int(p2__54049_SHARP_),(12)));
});})(parse_int,assoc_fn,y,d,M))
;var a = ((function (parse_int,assoc_fn,y,d,M,h){
return (function (p__54056,x){var map__54057 = p__54056;var map__54057__$1 = ((cljs.core.seq_QMARK_(map__54057))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54057):map__54057);var date = map__54057__$1;var hours = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54057__$1,cljs.core.constant$keyword$1296);if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["p",null,"pm",null], null), null).call(null,clojure.string.lower_case(x))))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(date,cljs.core.constant$keyword$1296,(function (){var hours__$1 = ((12) + hours);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hours__$1,(24)))
{return (0);
} else
{return hours__$1;
}
})());
} else
{return date;
}
});})(parse_int,assoc_fn,y,d,M,h))
;var H = assoc_fn(cljs.core.constant$keyword$1296);var m = assoc_fn(cljs.core.constant$keyword$1295);var s = assoc_fn(cljs.core.constant$keyword$1294);var S = assoc_fn(cljs.core.constant$keyword$1293);var MMM = ((function (parse_int,assoc_fn,y,d,M,h,a,H,m,s,S){
return (function (p1__54051_SHARP_,p2__54050_SHARP_){var full = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (parse_int,assoc_fn,y,d,M,h,a,H,m,s,S){
return (function (m__$1){return cljs.core.re_seq(cljs.core.re_pattern(("^"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__54050_SHARP_))),m__$1);
});})(parse_int,assoc_fn,y,d,M,h,a,H,m,s,S))
,cljs_time.format.months));return M(p1__54051_SHARP_,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs_time.internal.core.index_of(cljs_time.format.months,full) + (1)))));
});})(parse_int,assoc_fn,y,d,M,h,a,H,m,s,S))
;var MMMM = ((function (parse_int,assoc_fn,y,d,M,h,a,H,m,s,S,MMM){
return (function (p1__54052_SHARP_,p2__54053_SHARP_){return M(p1__54052_SHARP_,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs_time.internal.core.index_of(cljs_time.format.months,p2__54053_SHARP_) + (1)))));
});})(parse_int,assoc_fn,y,d,M,h,a,H,m,s,S,MMM))
;var skip = ((function (parse_int,assoc_fn,y,d,M,h,a,H,m,s,S,MMM,MMMM){
return (function() { 
var G__54058__delegate = function (x,args){return x;
};
var G__54058 = function (x,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__54058__delegate.call(this,x,args);};
G__54058.cljs$lang$maxFixedArity = 1;
G__54058.cljs$lang$applyTo = (function (arglist__54059){
var x = cljs.core.first(arglist__54059);
var args = cljs.core.rest(arglist__54059);
return G__54058__delegate(x,args);
});
G__54058.cljs$core$IFn$_invoke$arity$variadic = G__54058__delegate;
return G__54058;
})()
;})(parse_int,assoc_fn,y,d,M,h,a,H,m,s,S,MMM,MMMM))
;var tz = ((function (parse_int,assoc_fn,y,d,M,h,a,H,m,s,S,MMM,MMMM,skip){
return (function (p1__54054_SHARP_,p2__54055_SHARP_){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__54054_SHARP_,cljs.core.constant$keyword$1316,p2__54055_SHARP_);
});})(parse_int,assoc_fn,y,d,M,h,a,H,m,s,S,MMM,MMMM,skip))
;return cljs.core.PersistentHashMap.fromArrays(["d","HH","ZZ","s","MMM","ss","SSS","dow","M","mm","S","MM","EEE","Z","H","E","dd","a","hh","dth","y","yyyy","A","EEEE","h","m","yy","MMMM"],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})",d], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{2})",H], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["((?:(?:\\+|-)\\d{2}:\\d{2})|Z+)",tz], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})",s], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [("("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs_time.format.abbreviate,(3)),cljs_time.format.months)))+")"),MMM], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{2})",s], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{3})",S], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [("("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs_time.format.days))+")"),skip], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})",M], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{2})",m], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})",S], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["((?:\\d{2})|(?:\\b\\d{1,2}\\b))",M], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [("("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs_time.format.abbreviate,(3)),cljs_time.format.days)))+")"),skip], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["((?:(?:\\+|-)\\d{2}:?\\d{2})|Z+)",tz], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})",H], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [("("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs_time.format.abbreviate,(3)),cljs_time.format.days)))+")"),skip], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{2})",d], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(am|pm|a|p|AM|PM|A|P)",a], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{2})",h], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})(?:st|nd|rd|th)",d], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,4})",y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{4})",y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(am|pm|a|p|AM|PM|A|P)",a], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [("("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs_time.format.days))+")"),skip], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})",h], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})",m], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{2,4})",y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [("("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs_time.format.months))+")"),MMMM], null)]);
})();
cljs_time.format.date_setters = new cljs.core.PersistentArrayMap(null, 8, [cljs.core.constant$keyword$1299,(function (p1__54060_SHARP_,p2__54061_SHARP_){return p1__54060_SHARP_.setYear(p2__54061_SHARP_);
}),cljs.core.constant$keyword$1298,(function (p1__54062_SHARP_,p2__54063_SHARP_){return p1__54062_SHARP_.setMonth(p2__54063_SHARP_);
}),cljs.core.constant$keyword$1297,(function (p1__54064_SHARP_,p2__54065_SHARP_){return p1__54064_SHARP_.setDate(p2__54065_SHARP_);
}),cljs.core.constant$keyword$1296,(function (p1__54066_SHARP_,p2__54067_SHARP_){return p1__54066_SHARP_.setHours(p2__54067_SHARP_);
}),cljs.core.constant$keyword$1295,(function (p1__54068_SHARP_,p2__54069_SHARP_){return p1__54068_SHARP_.setMinutes(p2__54069_SHARP_);
}),cljs.core.constant$keyword$1294,(function (p1__54070_SHARP_,p2__54071_SHARP_){return p1__54070_SHARP_.setSeconds(p2__54071_SHARP_);
}),cljs.core.constant$keyword$1293,(function (p1__54072_SHARP_,p2__54073_SHARP_){return p1__54072_SHARP_.setMilliseconds(p2__54073_SHARP_);
}),cljs.core.constant$keyword$1316,cljs_time.format.timezone_adjustment], null);
cljs_time.format.parser_sort_order_pred = (function parser_sort_order_pred(parser){return cljs_time.internal.core.index_of(new cljs.core.PersistentVector(null, 24, 5, cljs.core.PersistentVector.EMPTY_NODE, ["yyyy","yy","y","d","dd","dth","M","MM","MMM","MMMM","dow","h","H","m","s","S","hh","HH","mm","ss","a","SSS","Z","ZZ"], null),parser);
});
cljs_time.format.date_format_pattern = cljs.core.re_pattern(("("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(")|(",cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.count,cljs.core.keys(cljs_time.format.date_formatters)))))+")"));
cljs_time.format.date_parse_pattern = (function date_parse_pattern(formatter){return cljs.core.re_pattern(clojure.string.replace(clojure.string.replace(formatter,/'([^']+)'/,"$1"),cljs_time.format.date_format_pattern,(function (p1__54074_SHARP_){return cljs.core.first((cljs_time.format.date_parsers.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.date_parsers.cljs$core$IFn$_invoke$arity$1(p1__54074_SHARP_) : cljs_time.format.date_parsers.call(null,p1__54074_SHARP_)));
})));
});
cljs_time.format.parser_fn = (function parser_fn(fmts){return (function (s){return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs_time.format.parser_sort_order_pred,cljs.core.second),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.nfirst(cljs.core.re_seq(cljs_time.format.date_parse_pattern(fmts),s)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.re_seq(cljs_time.format.date_format_pattern,fmts)))));
});
});
cljs_time.format.formatter_fn = (function formatter_fn(fmts,formatters){return (function() { 
var G__54080__delegate = function (date,p__54078){var vec__54079 = p__54078;var formatter_overrides = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54079,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.replace(fmts,/'([^']+)'/,"$1"),cljs_time.format.date_format_pattern,((function (vec__54079,formatter_overrides){
return (function (p1__54075_SHARP_){return (function (){var or__3558__auto__ = formatter_overrides;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return formatters;
}
})().call(null,p1__54075_SHARP_).call(null,date);
});})(vec__54079,formatter_overrides))
], null);
};
var G__54080 = function (date,var_args){
var p__54078 = null;if (arguments.length > 1) {
  p__54078 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__54080__delegate.call(this,date,p__54078);};
G__54080.cljs$lang$maxFixedArity = 1;
G__54080.cljs$lang$applyTo = (function (arglist__54081){
var date = cljs.core.first(arglist__54081);
var p__54078 = cljs.core.rest(arglist__54081);
return G__54080__delegate(date,p__54078);
});
G__54080.cljs$core$IFn$_invoke$arity$variadic = G__54080__delegate;
return G__54080;
})()
;
});
cljs_time.format.formatter = (function() {
var formatter = null;
var formatter__1 = (function (fmts){return formatter.cljs$core$IFn$_invoke$arity$2(fmts,cljs_time.core.utc);
});
var formatter__2 = (function (fmts,dtz){return cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1317,cljs_time.format.parser_fn(fmts),cljs.core.constant$keyword$1265,cljs_time.format.formatter_fn(fmts,cljs_time.format.date_formatters)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1135,cljs.core.constant$keyword$1318], null));
});
formatter = function(fmts,dtz){
switch(arguments.length){
case 1:
return formatter__1.call(this,fmts);
case 2:
return formatter__2.call(this,fmts,dtz);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
formatter.cljs$core$IFn$_invoke$arity$1 = formatter__1;
formatter.cljs$core$IFn$_invoke$arity$2 = formatter__2;
return formatter;
})()
;
cljs_time.format.formatter_local = (function formatter_local(fmts){return cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1317,cljs_time.format.parser_fn(fmts),cljs.core.constant$keyword$1265,cljs_time.format.formatter_fn(fmts,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs_time.format.date_formatters,"Z",cljs.core.constantly(""),cljs.core.array_seq(["ZZ",cljs.core.constantly("")], 0)))], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1135,cljs.core.constant$keyword$1318], null));
});
cljs_time.format.not_implemented = (function not_implemented(sym){return (function (){throw cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1156,cljs.core.constant$keyword$1320,cljs.core.constant$keyword$1319,cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic("%s not implemented yet",cljs.core.array_seq([cljs.core.name(sym)], 0))], null));
});
});
/**
* Map of ISO 8601 and a single RFC 822 formatters that can be used
* for parsing and, in most cases, printing.
* 
* Note: due to current implementation limitations, timezone information
* cannot be kept. Although the correct offset will be applied to UTC
* time if supplied.
*/
cljs_time.format.formatters = cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$1321,cljs.core.constant$keyword$1322,cljs.core.constant$keyword$1323,cljs.core.constant$keyword$1324,cljs.core.constant$keyword$1300,cljs.core.constant$keyword$1325,cljs.core.constant$keyword$1326,cljs.core.constant$keyword$1327,cljs.core.constant$keyword$1328,cljs.core.constant$keyword$1329,cljs.core.constant$keyword$1330,cljs.core.constant$keyword$1331,cljs.core.constant$keyword$1332,cljs.core.constant$keyword$1333,cljs.core.constant$keyword$1334,cljs.core.constant$keyword$1335,cljs.core.constant$keyword$1336,cljs.core.constant$keyword$1337,cljs.core.constant$keyword$1338,cljs.core.constant$keyword$1339,cljs.core.constant$keyword$1340,cljs.core.constant$keyword$1341,cljs.core.constant$keyword$1342,cljs.core.constant$keyword$1343,cljs.core.constant$keyword$1344,cljs.core.constant$keyword$1345,cljs.core.constant$keyword$1346,cljs.core.constant$keyword$1347,cljs.core.constant$keyword$1348,cljs.core.constant$keyword$1349,cljs.core.constant$keyword$1350,cljs.core.constant$keyword$1351,cljs.core.constant$keyword$1352,cljs.core.constant$keyword$1353,cljs.core.constant$keyword$1354,cljs.core.constant$keyword$1355,cljs.core.constant$keyword$1356,cljs.core.constant$keyword$1357,cljs.core.constant$keyword$1358,cljs.core.constant$keyword$1359,cljs.core.constant$keyword$1360,cljs.core.constant$keyword$1361,cljs.core.constant$keyword$1362,cljs.core.constant$keyword$1363,cljs.core.constant$keyword$1364,cljs.core.constant$keyword$1365,cljs.core.constant$keyword$1366,cljs.core.constant$keyword$1367,cljs.core.constant$keyword$1368,cljs.core.constant$keyword$1369,cljs.core.constant$keyword$1370,cljs.core.constant$keyword$1371,cljs.core.constant$keyword$1372],[cljs_time.format.not_implemented(new cljs.core.Symbol(null,"dateElementParser","dateElementParser",984800945,null)),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH:mm"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("'T'HH:mm:ss.SSSZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyDDD"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH:mm:ssZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx-'W'ww-e"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx-'W'ww-e'T'HH:mm:ss.SSSZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm:ss.SSS"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyMMdd'T'HHmmss.SSSZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm:ss.SSSZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HHmmssZ"),cljs_time.format.not_implemented(new cljs.core.Symbol(null,"dateParser","dateParser",-1248418930,null)),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx'W'wwe"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("'T'HHmmssZ"),cljs_time.format.not_implemented(new cljs.core.Symbol(null,"localTimeParser","localTimeParser",-1738135328,null)),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm:ssZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd"),cljs_time.format.not_implemented(new cljs.core.Symbol(null,"dateOptionalTimeParser","dateOptionalTimeParser",1783230854,null)),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("EEE, dd MMM yyyy HH:mm:ss Z"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm:ss.SSS"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyDDD'T'HHmmss.SSSZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-DDD"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH:mm:ss.SSS"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH:mm:ss.SSSZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx'W'wwe'T'HHmmss.SSSZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HHmmss.SSSZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH:mm:ss"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-DDD'T'HH:mm:ss.SSSZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-DDD'T'HH:mm:ssZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH:mm:ss.SSS"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"timeParser","timeParser",1585048034,null)),cljs_time.format.not_implemented(new cljs.core.Symbol(null,"dateTimeParser","dateTimeParser",-1493718282,null)),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("'T'HH:mm:ssZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx'W'wwe'T'HHmmssZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyMMdd"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx-'W'ww"),cljs_time.format.not_implemented(new cljs.core.Symbol(null,"localDateParser","localDateParser",477820077,null)),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyDDD'T'HHmmssZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM"),cljs_time.format.not_implemented(new cljs.core.Symbol(null,"localDateOptionalTimeParser","localDateOptionalTimeParser",435955537,null)),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx-'W'ww-e"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH"),cljs_time.format.not_implemented(new cljs.core.Symbol(null,"timeElementParser","timeElementParser",302132553,null)),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm:ss"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx-'W'ww-e'T'HH:mm:ssZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyMMdd'T'HHmmssZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd HH:mm:ss"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("'T'HHmmss.SSSZ")]);
cljs_time.format.parsers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [cljs.core.constant$keyword$1321,null,cljs.core.constant$keyword$1333,null,cljs.core.constant$keyword$1336,null,cljs.core.constant$keyword$1339,null,cljs.core.constant$keyword$1354,null,cljs.core.constant$keyword$1355,null,cljs.core.constant$keyword$1361,null,cljs.core.constant$keyword$1364,null,cljs.core.constant$keyword$1367,null], null), null);
cljs_time.format.printers = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(cljs_time.format.formatters)),cljs_time.format.parsers);
cljs_time.format.part_splitter_regex = /(?:(?!(?:\+|-)\d{2}):(?!\d{2}$))|[^\w:]+|.[TW]|'[^']+'/;
cljs_time.format.date_map = (function (){var method_table__4424__auto__ = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY) : cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY));var prefer_table__4425__auto__ = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY) : cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY));var method_cache__4426__auto__ = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY) : cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY));var cached_hierarchy__4427__auto__ = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY) : cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY));var hierarchy__4428__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$1315,cljs.core.get_global_hierarchy());return (new cljs.core.MultiFn("date-map",cljs.core.type,cljs.core.constant$keyword$1085,hierarchy__4428__auto__,method_table__4424__auto__,prefer_table__4425__auto__,method_cache__4426__auto__,cached_hierarchy__4427__auto__));
})();
cljs_time.format.date_map.cljs$core$IMultiFn$_add_method$arity$3(null,goog.date.Date,(function (d){return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1299,(0),cljs.core.constant$keyword$1298,(0),cljs.core.constant$keyword$1297,(1)], null);
}));
cljs_time.format.date_map.cljs$core$IMultiFn$_add_method$arity$3(null,goog.date.DateTime,(function (d){return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$1299,(0),cljs.core.constant$keyword$1298,(0),cljs.core.constant$keyword$1297,(1),cljs.core.constant$keyword$1296,(0),cljs.core.constant$keyword$1295,(0),cljs.core.constant$keyword$1294,(0),cljs.core.constant$keyword$1293,(0)], null);
}));
cljs_time.format.date_map.cljs$core$IMultiFn$_add_method$arity$3(null,goog.date.UtcDateTime,(function (d){return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.constant$keyword$1299,(0),cljs.core.constant$keyword$1298,(0),cljs.core.constant$keyword$1297,(1),cljs.core.constant$keyword$1296,(0),cljs.core.constant$keyword$1295,(0),cljs.core.constant$keyword$1294,(0),cljs.core.constant$keyword$1293,(0),cljs.core.constant$keyword$1316,null], null);
}));
cljs_time.format.parse_STAR_ = (function parse_STAR_(constructor,p__54084,s){var map__54090 = p__54084;var map__54090__$1 = ((cljs.core.seq_QMARK_(map__54090))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54090):map__54090);var fmt = map__54090__$1;var parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54090__$1,cljs.core.constant$keyword$1317);if(cljs.core.seq(s))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.Symbol(null,"s","s",-948495851,null))], 0))))));
}
var min_parts = cljs.core.count(clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,cljs_time.format.part_splitter_regex));var parse_seq = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (min_parts,map__54090,map__54090__$1,fmt,parser){
return (function (p__54091){var vec__54092 = p__54091;var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54092,(0),null);var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54092,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,cljs.core.second((cljs_time.format.date_parsers.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.date_parsers.cljs$core$IFn$_invoke$arity$1(b) : cljs_time.format.date_parsers.call(null,b)))], null);
});})(min_parts,map__54090,map__54090__$1,fmt,parser))
,(parser.cljs$core$IFn$_invoke$arity$1 ? parser.cljs$core$IFn$_invoke$arity$1(s) : parser.call(null,s))));if((cljs.core.count(parse_seq) >= min_parts))
{var d = (new constructor((0),(0),(0),(0),(0),(0),(0)));var empty = (cljs_time.format.date_map.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.date_map.cljs$core$IFn$_invoke$arity$1(d) : cljs_time.format.date_map.call(null,d));var setters = cljs.core.select_keys(cljs_time.format.date_setters,cljs.core.keys(empty));cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(((function (d,empty,setters,parse_seq,min_parts,map__54090,map__54090__$1,fmt,parser){
return (function (p1__54082_SHARP_,p2__54083_SHARP_){return (p1__54082_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p1__54082_SHARP_.cljs$core$IFn$_invoke$arity$2(d,p2__54083_SHARP_) : p1__54082_SHARP_.call(null,d,p2__54083_SHARP_));
});})(d,empty,setters,parse_seq,min_parts,map__54090,map__54090__$1,fmt,parser))
,cljs.core.array_seq([setters,cljs_time.internal.core.valid_date_QMARK_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (d,empty,setters,parse_seq,min_parts,map__54090,map__54090__$1,fmt,parser){
return (function (date,p__54093){var vec__54094 = p__54093;var part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54094,(0),null);var do_parse = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54094,(1),null);return (do_parse.cljs$core$IFn$_invoke$arity$2 ? do_parse.cljs$core$IFn$_invoke$arity$2(date,part) : do_parse.call(null,date,part));
});})(d,empty,setters,parse_seq,min_parts,map__54090,map__54090__$1,fmt,parser))
,empty,parse_seq))], 0));
return d;
} else
{throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("The parser could not match the input string.",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1135,cljs.core.constant$keyword$1373], null));
}
});
/**
* Returns a DateTime instance in the UTC time zone obtained by parsing the
* given string according to the given formatter.
*/
cljs_time.format.parse = (function() {
var parse = null;
var parse__1 = (function (s){return cljs.core.first((function (){var iter__4283__auto__ = (function iter__54103(s__54104){return (new cljs.core.LazySeq(null,(function (){var s__54104__$1 = s__54104;while(true){
var temp__4126__auto__ = cljs.core.seq(s__54104__$1);if(temp__4126__auto__)
{var s__54104__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__54104__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__54104__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__54106 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__54105 = (0);while(true){
if((i__54105 < size__4282__auto__))
{var f = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__54105);var d = (function (){try{return parse.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e54109){if((e54109 instanceof Error))
{var _ = e54109;return null;
} else
{throw e54109;

}
}})();if(cljs.core.truth_(d))
{cljs.core.chunk_append(b__54106,d);
{
var G__54111 = (i__54105 + (1));
i__54105 = G__54111;
continue;
}
} else
{{
var G__54112 = (i__54105 + (1));
i__54105 = G__54112;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__54106),iter__54103(cljs.core.chunk_rest(s__54104__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__54106),null);
}
} else
{var f = cljs.core.first(s__54104__$2);var d = (function (){try{return parse.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e54110){if((e54110 instanceof Error))
{var _ = e54110;return null;
} else
{throw e54110;

}
}})();if(cljs.core.truth_(d))
{return cljs.core.cons(d,iter__54103(cljs.core.rest(s__54104__$2)));
} else
{{
var G__54113 = cljs.core.rest(s__54104__$2);
s__54104__$1 = G__54113;
continue;
}
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4283__auto__(cljs.core.vals(cljs_time.format.formatters));
})());
});
var parse__2 = (function (fmt,s){return cljs_time.format.parse_STAR_(goog.date.UtcDateTime,fmt,s);
});
parse = function(fmt,s){
switch(arguments.length){
case 1:
return parse__1.call(this,fmt);
case 2:
return parse__2.call(this,fmt,s);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
parse.cljs$core$IFn$_invoke$arity$1 = parse__1;
parse.cljs$core$IFn$_invoke$arity$2 = parse__2;
return parse;
})()
;
/**
* Returns a LocalDateTime instance obtained by parsing the
* given string according to the given formatter.
*/
cljs_time.format.parse_local = (function() {
var parse_local = null;
var parse_local__1 = (function (s){return cljs.core.first((function (){var iter__4283__auto__ = (function iter__54122(s__54123){return (new cljs.core.LazySeq(null,(function (){var s__54123__$1 = s__54123;while(true){
var temp__4126__auto__ = cljs.core.seq(s__54123__$1);if(temp__4126__auto__)
{var s__54123__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__54123__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__54123__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__54125 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__54124 = (0);while(true){
if((i__54124 < size__4282__auto__))
{var f = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__54124);var d = (function (){try{return parse_local.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e54128){if((e54128 instanceof Error))
{var _ = e54128;return null;
} else
{throw e54128;

}
}})();if(cljs.core.truth_(d))
{cljs.core.chunk_append(b__54125,d);
{
var G__54130 = (i__54124 + (1));
i__54124 = G__54130;
continue;
}
} else
{{
var G__54131 = (i__54124 + (1));
i__54124 = G__54131;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__54125),iter__54122(cljs.core.chunk_rest(s__54123__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__54125),null);
}
} else
{var f = cljs.core.first(s__54123__$2);var d = (function (){try{return parse_local.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e54129){if((e54129 instanceof Error))
{var _ = e54129;return null;
} else
{throw e54129;

}
}})();if(cljs.core.truth_(d))
{return cljs.core.cons(d,iter__54122(cljs.core.rest(s__54123__$2)));
} else
{{
var G__54132 = cljs.core.rest(s__54123__$2);
s__54123__$1 = G__54132;
continue;
}
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4283__auto__(cljs.core.vals(cljs_time.format.formatters));
})());
});
var parse_local__2 = (function (fmt,s){return cljs_time.format.parse_STAR_(goog.date.DateTime,fmt,s);
});
parse_local = function(fmt,s){
switch(arguments.length){
case 1:
return parse_local__1.call(this,fmt);
case 2:
return parse_local__2.call(this,fmt,s);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
parse_local.cljs$core$IFn$_invoke$arity$1 = parse_local__1;
parse_local.cljs$core$IFn$_invoke$arity$2 = parse_local__2;
return parse_local;
})()
;
/**
* Returns a LocalDate instance obtained by parsing the
* given string according to the given formatter.
*/
cljs_time.format.parse_local_date = (function() {
var parse_local_date = null;
var parse_local_date__1 = (function (s){return cljs.core.first((function (){var iter__4283__auto__ = (function iter__54141(s__54142){return (new cljs.core.LazySeq(null,(function (){var s__54142__$1 = s__54142;while(true){
var temp__4126__auto__ = cljs.core.seq(s__54142__$1);if(temp__4126__auto__)
{var s__54142__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__54142__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__54142__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__54144 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__54143 = (0);while(true){
if((i__54143 < size__4282__auto__))
{var f = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__54143);var d = (function (){try{return parse_local_date.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e54147){if((e54147 instanceof Error))
{var _ = e54147;return null;
} else
{throw e54147;

}
}})();if(cljs.core.truth_(d))
{cljs.core.chunk_append(b__54144,d);
{
var G__54149 = (i__54143 + (1));
i__54143 = G__54149;
continue;
}
} else
{{
var G__54150 = (i__54143 + (1));
i__54143 = G__54150;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__54144),iter__54141(cljs.core.chunk_rest(s__54142__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__54144),null);
}
} else
{var f = cljs.core.first(s__54142__$2);var d = (function (){try{return parse_local_date.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e54148){if((e54148 instanceof Error))
{var _ = e54148;return null;
} else
{throw e54148;

}
}})();if(cljs.core.truth_(d))
{return cljs.core.cons(d,iter__54141(cljs.core.rest(s__54142__$2)));
} else
{{
var G__54151 = cljs.core.rest(s__54142__$2);
s__54142__$1 = G__54151;
continue;
}
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4283__auto__(cljs.core.vals(cljs_time.format.formatters));
})());
});
var parse_local_date__2 = (function (fmt,s){return cljs_time.format.parse_STAR_(goog.date.Date,fmt,s);
});
parse_local_date = function(fmt,s){
switch(arguments.length){
case 1:
return parse_local_date__1.call(this,fmt);
case 2:
return parse_local_date__2.call(this,fmt,s);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
parse_local_date.cljs$core$IFn$_invoke$arity$1 = parse_local_date__1;
parse_local_date.cljs$core$IFn$_invoke$arity$2 = parse_local_date__2;
return parse_local_date;
})()
;
/**
* Returns a string representing the given DateTime instance in UTC and in the
* form determined by the given formatter.
*/
cljs_time.format.unparse = (function unparse(p__54152,dt){var map__54154 = p__54152;var map__54154__$1 = ((cljs.core.seq_QMARK_(map__54154))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54154):map__54154);var formatter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54154__$1,cljs.core.constant$keyword$1265);if(!((dt == null)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"dt","dt",1272086768,null)))], 0))))));
}
if((dt instanceof goog.date.DateTime))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"instance?","instance?",1075939923,null),new cljs.core.Symbol(null,"goog.date.DateTime","goog.date.DateTime",-2139257094,null),new cljs.core.Symbol(null,"dt","dt",1272086768,null))], 0))))));
}
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.string.replace,(formatter.cljs$core$IFn$_invoke$arity$1 ? formatter.cljs$core$IFn$_invoke$arity$1(dt) : formatter.call(null,dt)));
});
/**
* Returns a string representing the given LocalDateTime instance in the
* form determined by the given formatter.
*/
cljs_time.format.unparse_local = (function unparse_local(p__54155,dt){var map__54157 = p__54155;var map__54157__$1 = ((cljs.core.seq_QMARK_(map__54157))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54157):map__54157);var fmt = map__54157__$1;var formatter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54157__$1,cljs.core.constant$keyword$1265);if(!((dt == null)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"dt","dt",1272086768,null)))], 0))))));
}
if((dt instanceof goog.date.DateTime))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"instance?","instance?",1075939923,null),new cljs.core.Symbol(null,"goog.date.DateTime","goog.date.DateTime",-2139257094,null),new cljs.core.Symbol(null,"dt","dt",1272086768,null))], 0))))));
}
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.string.replace,(formatter.cljs$core$IFn$_invoke$arity$2 ? formatter.cljs$core$IFn$_invoke$arity$2(dt,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs_time.format.date_formatters,"Z",cljs.core.constantly(""),cljs.core.array_seq(["ZZ",cljs.core.constantly("")], 0))) : formatter.call(null,dt,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs_time.format.date_formatters,"Z",cljs.core.constantly(""),cljs.core.array_seq(["ZZ",cljs.core.constantly("")], 0)))));
});
/**
* Returns a string representing the given LocalDate instance in the form
* determined by the given formatter.
*/
cljs_time.format.unparse_local_date = (function unparse_local_date(p__54158,dt){var map__54160 = p__54158;var map__54160__$1 = ((cljs.core.seq_QMARK_(map__54160))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54160):map__54160);var fmt = map__54160__$1;var formatter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54160__$1,cljs.core.constant$keyword$1265);if(!((dt == null)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"dt","dt",1272086768,null)))], 0))))));
}
if((dt instanceof goog.date.Date))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"instance?","instance?",1075939923,null),new cljs.core.Symbol(null,"goog.date.Date","goog.date.Date",-1613361125,null),new cljs.core.Symbol(null,"dt","dt",1272086768,null))], 0))))));
}
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.string.replace,(formatter.cljs$core$IFn$_invoke$arity$2 ? formatter.cljs$core$IFn$_invoke$arity$2(dt,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs_time.format.date_formatters,"Z",cljs.core.constantly(""),cljs.core.array_seq(["ZZ",cljs.core.constantly("")], 0))) : formatter.call(null,dt,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs_time.format.date_formatters,"Z",cljs.core.constantly(""),cljs.core.array_seq(["ZZ",cljs.core.constantly("")], 0)))));
});
/**
* Shows how a given DateTime, or by default the current time, would be
* formatted with each of the available printing formatters.
*/
cljs_time.format.show_formatters = (function() {
var show_formatters = null;
var show_formatters__0 = (function (){return show_formatters.cljs$core$IFn$_invoke$arity$1(cljs_time.core.now());
});
var show_formatters__1 = (function (dt){var seq__54165 = cljs.core.seq(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs_time.format.printers));var chunk__54166 = null;var count__54167 = (0);var i__54168 = (0);while(true){
if((i__54168 < count__54167))
{var p = chunk__54166.cljs$core$IIndexed$_nth$arity$2(null,i__54168);var fmt_54169 = (cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1(p) : cljs_time.format.formatters.call(null,p));cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic("%-40s%s\n",cljs.core.array_seq([p,cljs_time.format.unparse(fmt_54169,dt)], 0))], 0));
{
var G__54170 = seq__54165;
var G__54171 = chunk__54166;
var G__54172 = count__54167;
var G__54173 = (i__54168 + (1));
seq__54165 = G__54170;
chunk__54166 = G__54171;
count__54167 = G__54172;
i__54168 = G__54173;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__54165);if(temp__4126__auto__)
{var seq__54165__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__54165__$1))
{var c__4314__auto__ = cljs.core.chunk_first(seq__54165__$1);{
var G__54174 = cljs.core.chunk_rest(seq__54165__$1);
var G__54175 = c__4314__auto__;
var G__54176 = cljs.core.count(c__4314__auto__);
var G__54177 = (0);
seq__54165 = G__54174;
chunk__54166 = G__54175;
count__54167 = G__54176;
i__54168 = G__54177;
continue;
}
} else
{var p = cljs.core.first(seq__54165__$1);var fmt_54178 = (cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1(p) : cljs_time.format.formatters.call(null,p));cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic("%-40s%s\n",cljs.core.array_seq([p,cljs_time.format.unparse(fmt_54178,dt)], 0))], 0));
{
var G__54179 = cljs.core.next(seq__54165__$1);
var G__54180 = null;
var G__54181 = (0);
var G__54182 = (0);
seq__54165 = G__54179;
chunk__54166 = G__54180;
count__54167 = G__54181;
i__54168 = G__54182;
continue;
}
}
} else
{return null;
}
}
break;
}
});
show_formatters = function(dt){
switch(arguments.length){
case 0:
return show_formatters__0.call(this);
case 1:
return show_formatters__1.call(this,dt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
show_formatters.cljs$core$IFn$_invoke$arity$0 = show_formatters__0;
show_formatters.cljs$core$IFn$_invoke$arity$1 = show_formatters__1;
return show_formatters;
})()
;
cljs_time.format.Mappable = (function (){var obj54184 = {};return obj54184;
})();
cljs_time.format.instant__GT_map = (function instant__GT_map(instant){if((function (){var and__3546__auto__ = instant;if(and__3546__auto__)
{return instant.cljs_time$format$Mappable$instant__GT_map$arity$1;
} else
{return and__3546__auto__;
}
})())
{return instant.cljs_time$format$Mappable$instant__GT_map$arity$1(instant);
} else
{var x__4185__auto__ = (((instant == null))?null:instant);return (function (){var or__3558__auto__ = (cljs_time.format.instant__GT_map[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs_time.format.instant__GT_map["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol("Mappable.instant->map",instant);
}
}
})().call(null,instant);
}
});
cljs_time.format.to_map = (function to_map(years,months,days,hours,minutes,seconds,millis){return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$1299,years,cljs.core.constant$keyword$1298,months,cljs.core.constant$keyword$1297,days,cljs.core.constant$keyword$1296,hours,cljs.core.constant$keyword$1295,minutes,cljs.core.constant$keyword$1294,seconds,cljs.core.constant$keyword$1293,millis], null);
});
goog.date.UtcDateTime.prototype.cljs_time$format$Mappable$ = true;
goog.date.UtcDateTime.prototype.cljs_time$format$Mappable$instant__GT_map$arity$1 = (function (dt){var dt__$1 = this;return cljs_time.format.to_map(dt__$1.getYear(),(dt__$1.getMonth() + (1)),dt__$1.getDate(),dt__$1.getHours(),dt__$1.getMinutes(),dt__$1.getSeconds(),dt__$1.getMilliseconds());
});
cljs.core.ObjMap.prototype.cljs_time$format$Mappable$ = true;
cljs.core.ObjMap.prototype.cljs_time$format$Mappable$instant__GT_map$arity$1 = (function (m){var m__$1 = this;var G__54185 = (((cljs.core.constant$keyword$1135.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(m__$1)) instanceof cljs.core.Keyword))?cljs.core.constant$keyword$1135.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(m__$1)).fqn:null);switch (G__54185) {
case "cljs-time.core/interval":
return (cljs_time.core.__GT_period.cljs$core$IFn$_invoke$arity$1 ? cljs_time.core.__GT_period.cljs$core$IFn$_invoke$arity$1(m__$1) : cljs_time.core.__GT_period.call(null,m__$1));

break;
case "cljs-time.core/period":
return m__$1;

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$1135.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(m__$1))))));

}
});
cljs.core.PersistentArrayMap.prototype.cljs_time$format$Mappable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs_time$format$Mappable$instant__GT_map$arity$1 = (function (m){var m__$1 = this;var G__54187 = (((cljs.core.constant$keyword$1135.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(m__$1)) instanceof cljs.core.Keyword))?cljs.core.constant$keyword$1135.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(m__$1)).fqn:null);switch (G__54187) {
case "cljs-time.core/interval":
return (cljs_time.core.__GT_period.cljs$core$IFn$_invoke$arity$1 ? cljs_time.core.__GT_period.cljs$core$IFn$_invoke$arity$1(m__$1) : cljs_time.core.__GT_period.call(null,m__$1));

break;
case "cljs-time.core/period":
return m__$1;

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$1135.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(m__$1))))));

}
});
