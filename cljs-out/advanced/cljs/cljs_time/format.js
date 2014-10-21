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
cljs_time.format.date_formatters = (function (){var d = (function (p1__51441_SHARP_){return p1__51441_SHARP_.getDate();
});var M = ((function (d){
return (function (p1__51442_SHARP_){return (p1__51442_SHARP_.getMonth() + (1));
});})(d))
;var y = ((function (d,M){
return (function (p1__51443_SHARP_){return p1__51443_SHARP_.getYear();
});})(d,M))
;var h = ((function (d,M,y){
return (function (p1__51444_SHARP_){var hr = cljs.core.mod(p1__51444_SHARP_.getHours(),(12));if((hr === (0)))
{return (12);
} else
{return hr;
}
});})(d,M,y))
;var a = ((function (d,M,y,h){
return (function (p1__51445_SHARP_){if((p1__51445_SHARP_.getHours() < (12)))
{return "am";
} else
{return "pm";
}
});})(d,M,y,h))
;var A = ((function (d,M,y,h,a){
return (function (p1__51446_SHARP_){if((p1__51446_SHARP_.getHours() < (12)))
{return "AM";
} else
{return "PM";
}
});})(d,M,y,h,a))
;var H = ((function (d,M,y,h,a,A){
return (function (p1__51447_SHARP_){return p1__51447_SHARP_.getHours();
});})(d,M,y,h,a,A))
;var m = ((function (d,M,y,h,a,A,H){
return (function (p1__51448_SHARP_){return p1__51448_SHARP_.getMinutes();
});})(d,M,y,h,a,A,H))
;var s = ((function (d,M,y,h,a,A,H,m){
return (function (p1__51449_SHARP_){return p1__51449_SHARP_.getSeconds();
});})(d,M,y,h,a,A,H,m))
;var S = ((function (d,M,y,h,a,A,H,m,s){
return (function (p1__51450_SHARP_){return p1__51450_SHARP_.getMilliseconds();
});})(d,M,y,h,a,A,H,m,s))
;var Z = ((function (d,M,y,h,a,A,H,m,s,S){
return (function (p1__51451_SHARP_){return p1__51451_SHARP_.getTimezoneOffsetString();
});})(d,M,y,h,a,A,H,m,s,S))
;var doy = ((function (d,M,y,h,a,A,H,m,s,S,Z){
return (function (p1__51452_SHARP_){return p1__51452_SHARP_.getDayOfYear();
});})(d,M,y,h,a,A,H,m,s,S,Z))
;var dow = ((function (d,M,y,h,a,A,H,m,s,S,Z,doy){
return (function (p1__51453_SHARP_){return p1__51453_SHARP_.getDay();
});})(d,M,y,h,a,A,H,m,s,S,Z,doy))
;return cljs.core.PersistentHashMap.fromArrays(["d","HH","ZZ","s","ww","MMM","e","ss","DDD","SSS","dow","M","mm","S","MM","EEE","Z","H","dd","a","hh","dth","yyyy","A","EEEE","h","xxxx","m","yy","MMMM"],[d,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__51464_SHARP_){return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$1(H(p1__51464_SHARP_));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,Z,s,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__51468_SHARP_){return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$1((Math.ceil.cljs$core$IFn$_invoke$arity$1 ? Math.ceil.cljs$core$IFn$_invoke$arity$1((doy(p1__51468_SHARP_) / (7))) : Math.ceil.call(null,(doy(p1__51468_SHARP_) / (7)))));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__51460_SHARP_){return cljs_time.format.abbreviate((3),(cljs_time.format.months.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.months.cljs$core$IFn$_invoke$arity$1((M(p1__51460_SHARP_) - (1))) : cljs_time.format.months.call(null,(M(p1__51460_SHARP_) - (1)))));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,dow,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__51466_SHARP_){return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$1(s(p1__51466_SHARP_));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,doy,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__51467_SHARP_){return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$2(S(p1__51467_SHARP_),(3));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__51456_SHARP_){return (cljs_time.format.days.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.days.cljs$core$IFn$_invoke$arity$1(dow(p1__51456_SHARP_)) : cljs_time.format.days.call(null,dow(p1__51456_SHARP_)));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,M,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__51465_SHARP_){return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$1(m(p1__51465_SHARP_));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,S,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__51459_SHARP_){return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$1(M(p1__51459_SHARP_));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__51457_SHARP_){return cljs_time.format.abbreviate((3),(cljs_time.format.days.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.days.cljs$core$IFn$_invoke$arity$1(dow(p1__51457_SHARP_)) : cljs_time.format.days.call(null,dow(p1__51457_SHARP_))));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,Z,H,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__51454_SHARP_){return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$1(d(p1__51454_SHARP_));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,a,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__51463_SHARP_){return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$1(h(p1__51463_SHARP_));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__51455_SHARP_){var d__$1 = d(p1__51455_SHARP_);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(d__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__51469 = d__$1;switch (G__51469) {
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
return (function (p1__51458_SHARP_){return (cljs_time.format.days.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.days.cljs$core$IFn$_invoke$arity$1(dow(p1__51458_SHARP_)) : cljs_time.format.days.call(null,dow(p1__51458_SHARP_)));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,h,y,m,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__51462_SHARP_){return cljs.core.mod(y(p1__51462_SHARP_),(100));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__51461_SHARP_){return (cljs_time.format.months.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.months.cljs$core$IFn$_invoke$arity$1((M(p1__51461_SHARP_) - (1))) : cljs_time.format.months.call(null,(M(p1__51461_SHARP_) - (1))));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
]);
})();
cljs_time.format.timezone_adjustment = (function timezone_adjustment(d,timezone_string){var vec__51474 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(timezone_string,/Z|(?:([-+])(\d{2})(?::?(\d{2}))?)$/);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51474,(0),null);var sign = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51474,(1),null);var hh = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51474,(2),null);var mm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51474,(3),null);if(cljs.core.truth_((function (){var and__3546__auto__ = sign;if(cljs.core.truth_(and__3546__auto__))
{var and__3546__auto____$1 = hh;if(cljs.core.truth_(and__3546__auto____$1))
{return mm;
} else
{return and__3546__auto____$1;
}
} else
{return and__3546__auto__;
}
})()))
{var sign_51476__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sign,"-"))?cljs_time.core.plus:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sign,"+"))?cljs_time.core.minus:null));var vec__51475_51477 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (sign_51476__$1,vec__51474,_,sign,hh,mm){
return (function (p1__51471_SHARP_){return parseInt(p1__51471_SHARP_,(10));
});})(sign_51476__$1,vec__51474,_,sign,hh,mm))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hh,mm], null));var hh_51478__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51475_51477,(0),null);var mm_51479__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51475_51477,(1),null);var adjusted_51480 = (sign_51476__$1.cljs$core$IFn$_invoke$arity$2 ? sign_51476__$1.cljs$core$IFn$_invoke$arity$2((sign_51476__$1.cljs$core$IFn$_invoke$arity$2 ? sign_51476__$1.cljs$core$IFn$_invoke$arity$2(d,cljs_time.core.hours.cljs$core$IFn$_invoke$arity$1(hh_51478__$1)) : sign_51476__$1.call(null,d,cljs_time.core.hours.cljs$core$IFn$_invoke$arity$1(hh_51478__$1))),cljs_time.core.minutes.cljs$core$IFn$_invoke$arity$1(mm_51479__$1)) : sign_51476__$1.call(null,(sign_51476__$1.cljs$core$IFn$_invoke$arity$2 ? sign_51476__$1.cljs$core$IFn$_invoke$arity$2(d,cljs_time.core.hours.cljs$core$IFn$_invoke$arity$1(hh_51478__$1)) : sign_51476__$1.call(null,d,cljs_time.core.hours.cljs$core$IFn$_invoke$arity$1(hh_51478__$1))),cljs_time.core.minutes.cljs$core$IFn$_invoke$arity$1(mm_51479__$1)));d.setTime(adjusted_51480.getTime());
} else
{}
return d;
});
cljs_time.format.date_parsers = (function (){var parse_int = (function (p1__51481_SHARP_){return parseInt(p1__51481_SHARP_,(10));
});var assoc_fn = ((function (parse_int){
return (function (kw){return ((function (parse_int){
return (function (p1__51482_SHARP_,p2__51483_SHARP_){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__51482_SHARP_,kw,parse_int(p2__51483_SHARP_));
});
;})(parse_int))
});})(parse_int))
;var y = assoc_fn(cljs.core.constant$keyword$1392);var d = assoc_fn(cljs.core.constant$keyword$1390);var M = ((function (parse_int,assoc_fn,y,d){
return (function (p1__51484_SHARP_,p2__51485_SHARP_){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__51484_SHARP_,cljs.core.constant$keyword$1391,(parse_int(p2__51485_SHARP_) - (1)));
});})(parse_int,assoc_fn,y,d))
;var h = ((function (parse_int,assoc_fn,y,d,M){
return (function (p1__51486_SHARP_,p2__51487_SHARP_){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__51486_SHARP_,cljs.core.constant$keyword$1389,cljs.core.mod(parse_int(p2__51487_SHARP_),(12)));
});})(parse_int,assoc_fn,y,d,M))
;var a = ((function (parse_int,assoc_fn,y,d,M,h){
return (function (p__51494,x){var map__51495 = p__51494;var map__51495__$1 = ((cljs.core.seq_QMARK_(map__51495))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51495):map__51495);var date = map__51495__$1;var hours = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51495__$1,cljs.core.constant$keyword$1389);if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["p",null,"pm",null], null), null).call(null,clojure.string.lower_case(x))))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(date,cljs.core.constant$keyword$1389,(function (){var hours__$1 = ((12) + hours);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hours__$1,(24)))
{return (0);
} else
{return hours__$1;
}
})());
} else
{return date;
}
});})(parse_int,assoc_fn,y,d,M,h))
;var H = assoc_fn(cljs.core.constant$keyword$1389);var m = assoc_fn(cljs.core.constant$keyword$1388);var s = assoc_fn(cljs.core.constant$keyword$1387);var S = assoc_fn(cljs.core.constant$keyword$1386);var MMM = ((function (parse_int,assoc_fn,y,d,M,h,a,H,m,s,S){
return (function (p1__51489_SHARP_,p2__51488_SHARP_){var full = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (parse_int,assoc_fn,y,d,M,h,a,H,m,s,S){
return (function (m__$1){return cljs.core.re_seq(cljs.core.re_pattern(("^"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__51488_SHARP_))),m__$1);
});})(parse_int,assoc_fn,y,d,M,h,a,H,m,s,S))
,cljs_time.format.months));return M(p1__51489_SHARP_,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs_time.internal.core.index_of(cljs_time.format.months,full) + (1)))));
});})(parse_int,assoc_fn,y,d,M,h,a,H,m,s,S))
;var MMMM = ((function (parse_int,assoc_fn,y,d,M,h,a,H,m,s,S,MMM){
return (function (p1__51490_SHARP_,p2__51491_SHARP_){return M(p1__51490_SHARP_,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs_time.internal.core.index_of(cljs_time.format.months,p2__51491_SHARP_) + (1)))));
});})(parse_int,assoc_fn,y,d,M,h,a,H,m,s,S,MMM))
;var skip = ((function (parse_int,assoc_fn,y,d,M,h,a,H,m,s,S,MMM,MMMM){
return (function() { 
var G__51496__delegate = function (x,args){return x;
};
var G__51496 = function (x,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__51496__delegate.call(this,x,args);};
G__51496.cljs$lang$maxFixedArity = 1;
G__51496.cljs$lang$applyTo = (function (arglist__51497){
var x = cljs.core.first(arglist__51497);
var args = cljs.core.rest(arglist__51497);
return G__51496__delegate(x,args);
});
G__51496.cljs$core$IFn$_invoke$arity$variadic = G__51496__delegate;
return G__51496;
})()
;})(parse_int,assoc_fn,y,d,M,h,a,H,m,s,S,MMM,MMMM))
;var tz = ((function (parse_int,assoc_fn,y,d,M,h,a,H,m,s,S,MMM,MMMM,skip){
return (function (p1__51492_SHARP_,p2__51493_SHARP_){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__51492_SHARP_,cljs.core.constant$keyword$1408,p2__51493_SHARP_);
});})(parse_int,assoc_fn,y,d,M,h,a,H,m,s,S,MMM,MMMM,skip))
;return cljs.core.PersistentHashMap.fromArrays(["d","HH","ZZ","s","MMM","ss","SSS","dow","M","mm","S","MM","EEE","Z","H","E","dd","a","hh","dth","y","yyyy","A","EEEE","h","m","yy","MMMM"],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})",d], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{2})",H], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["((?:(?:\\+|-)\\d{2}:\\d{2})|Z+)",tz], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})",s], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [("("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs_time.format.abbreviate,(3)),cljs_time.format.months)))+")"),MMM], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{2})",s], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{3})",S], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [("("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs_time.format.days))+")"),skip], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})",M], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{2})",m], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})",S], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["((?:\\d{2})|(?:\\b\\d{1,2}\\b))",M], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [("("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs_time.format.abbreviate,(3)),cljs_time.format.days)))+")"),skip], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["((?:(?:\\+|-)\\d{2}:?\\d{2})|Z+)",tz], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})",H], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [("("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs_time.format.abbreviate,(3)),cljs_time.format.days)))+")"),skip], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{2})",d], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(am|pm|a|p|AM|PM|A|P)",a], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{2})",h], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})(?:st|nd|rd|th)",d], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,4})",y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{4})",y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(am|pm|a|p|AM|PM|A|P)",a], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [("("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs_time.format.days))+")"),skip], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})",h], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})",m], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{2,4})",y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [("("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs_time.format.months))+")"),MMMM], null)]);
})();
cljs_time.format.date_setters = new cljs.core.PersistentArrayMap(null, 8, [cljs.core.constant$keyword$1392,(function (p1__51498_SHARP_,p2__51499_SHARP_){return p1__51498_SHARP_.setYear(p2__51499_SHARP_);
}),cljs.core.constant$keyword$1391,(function (p1__51500_SHARP_,p2__51501_SHARP_){return p1__51500_SHARP_.setMonth(p2__51501_SHARP_);
}),cljs.core.constant$keyword$1390,(function (p1__51502_SHARP_,p2__51503_SHARP_){return p1__51502_SHARP_.setDate(p2__51503_SHARP_);
}),cljs.core.constant$keyword$1389,(function (p1__51504_SHARP_,p2__51505_SHARP_){return p1__51504_SHARP_.setHours(p2__51505_SHARP_);
}),cljs.core.constant$keyword$1388,(function (p1__51506_SHARP_,p2__51507_SHARP_){return p1__51506_SHARP_.setMinutes(p2__51507_SHARP_);
}),cljs.core.constant$keyword$1387,(function (p1__51508_SHARP_,p2__51509_SHARP_){return p1__51508_SHARP_.setSeconds(p2__51509_SHARP_);
}),cljs.core.constant$keyword$1386,(function (p1__51510_SHARP_,p2__51511_SHARP_){return p1__51510_SHARP_.setMilliseconds(p2__51511_SHARP_);
}),cljs.core.constant$keyword$1408,cljs_time.format.timezone_adjustment], null);
cljs_time.format.parser_sort_order_pred = (function parser_sort_order_pred(parser){return cljs_time.internal.core.index_of(new cljs.core.PersistentVector(null, 24, 5, cljs.core.PersistentVector.EMPTY_NODE, ["yyyy","yy","y","d","dd","dth","M","MM","MMM","MMMM","dow","h","H","m","s","S","hh","HH","mm","ss","a","SSS","Z","ZZ"], null),parser);
});
cljs_time.format.date_format_pattern = cljs.core.re_pattern(("("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(")|(",cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.count,cljs.core.keys(cljs_time.format.date_formatters)))))+")"));
cljs_time.format.date_parse_pattern = (function date_parse_pattern(formatter){return cljs.core.re_pattern(clojure.string.replace(clojure.string.replace(formatter,/'([^']+)'/,"$1"),cljs_time.format.date_format_pattern,(function (p1__51512_SHARP_){return cljs.core.first((cljs_time.format.date_parsers.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.date_parsers.cljs$core$IFn$_invoke$arity$1(p1__51512_SHARP_) : cljs_time.format.date_parsers.call(null,p1__51512_SHARP_)));
})));
});
cljs_time.format.parser_fn = (function parser_fn(fmts){return (function (s){return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs_time.format.parser_sort_order_pred,cljs.core.second),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.nfirst(cljs.core.re_seq(cljs_time.format.date_parse_pattern(fmts),s)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.re_seq(cljs_time.format.date_format_pattern,fmts)))));
});
});
cljs_time.format.formatter_fn = (function formatter_fn(fmts,formatters){return (function() { 
var G__51518__delegate = function (date,p__51516){var vec__51517 = p__51516;var formatter_overrides = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51517,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.replace(fmts,/'([^']+)'/,"$1"),cljs_time.format.date_format_pattern,((function (vec__51517,formatter_overrides){
return (function (p1__51513_SHARP_){return (function (){var or__3558__auto__ = formatter_overrides;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return formatters;
}
})().call(null,p1__51513_SHARP_).call(null,date);
});})(vec__51517,formatter_overrides))
], null);
};
var G__51518 = function (date,var_args){
var p__51516 = null;if (arguments.length > 1) {
  p__51516 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__51518__delegate.call(this,date,p__51516);};
G__51518.cljs$lang$maxFixedArity = 1;
G__51518.cljs$lang$applyTo = (function (arglist__51519){
var date = cljs.core.first(arglist__51519);
var p__51516 = cljs.core.rest(arglist__51519);
return G__51518__delegate(date,p__51516);
});
G__51518.cljs$core$IFn$_invoke$arity$variadic = G__51518__delegate;
return G__51518;
})()
;
});
cljs_time.format.formatter = (function() {
var formatter = null;
var formatter__1 = (function (fmts){return formatter.cljs$core$IFn$_invoke$arity$2(fmts,cljs_time.core.utc);
});
var formatter__2 = (function (fmts,dtz){return cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1409,cljs_time.format.parser_fn(fmts),cljs.core.constant$keyword$1352,cljs_time.format.formatter_fn(fmts,cljs_time.format.date_formatters)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1138,cljs.core.constant$keyword$1410], null));
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
cljs_time.format.formatter_local = (function formatter_local(fmts){return cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1409,cljs_time.format.parser_fn(fmts),cljs.core.constant$keyword$1352,cljs_time.format.formatter_fn(fmts,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs_time.format.date_formatters,"Z",cljs.core.constantly(""),cljs.core.array_seq(["ZZ",cljs.core.constantly("")], 0)))], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1138,cljs.core.constant$keyword$1410], null));
});
cljs_time.format.not_implemented = (function not_implemented(sym){return (function (){throw cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1244,cljs.core.constant$keyword$1412,cljs.core.constant$keyword$1411,cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic("%s not implemented yet",cljs.core.array_seq([cljs.core.name(sym)], 0))], null));
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
cljs_time.format.formatters = cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$1413,cljs.core.constant$keyword$1414,cljs.core.constant$keyword$1415,cljs.core.constant$keyword$1416,cljs.core.constant$keyword$1393,cljs.core.constant$keyword$1417,cljs.core.constant$keyword$1418,cljs.core.constant$keyword$1419,cljs.core.constant$keyword$1420,cljs.core.constant$keyword$1421,cljs.core.constant$keyword$1422,cljs.core.constant$keyword$1423,cljs.core.constant$keyword$1424,cljs.core.constant$keyword$1425,cljs.core.constant$keyword$1426,cljs.core.constant$keyword$1427,cljs.core.constant$keyword$1428,cljs.core.constant$keyword$1429,cljs.core.constant$keyword$1430,cljs.core.constant$keyword$1431,cljs.core.constant$keyword$1432,cljs.core.constant$keyword$1433,cljs.core.constant$keyword$1434,cljs.core.constant$keyword$1435,cljs.core.constant$keyword$1436,cljs.core.constant$keyword$1437,cljs.core.constant$keyword$1438,cljs.core.constant$keyword$1439,cljs.core.constant$keyword$1440,cljs.core.constant$keyword$1441,cljs.core.constant$keyword$1442,cljs.core.constant$keyword$1443,cljs.core.constant$keyword$1444,cljs.core.constant$keyword$1445,cljs.core.constant$keyword$1446,cljs.core.constant$keyword$1447,cljs.core.constant$keyword$1448,cljs.core.constant$keyword$1449,cljs.core.constant$keyword$1450,cljs.core.constant$keyword$1451,cljs.core.constant$keyword$1452,cljs.core.constant$keyword$1453,cljs.core.constant$keyword$1454,cljs.core.constant$keyword$1455,cljs.core.constant$keyword$1456,cljs.core.constant$keyword$1457,cljs.core.constant$keyword$1458,cljs.core.constant$keyword$1459,cljs.core.constant$keyword$1460,cljs.core.constant$keyword$1461,cljs.core.constant$keyword$1462,cljs.core.constant$keyword$1463,cljs.core.constant$keyword$1464],[cljs_time.format.not_implemented(new cljs.core.Symbol(null,"dateElementParser","dateElementParser",984800945,null)),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH:mm"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("'T'HH:mm:ss.SSSZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyDDD"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH:mm:ssZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx-'W'ww-e"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx-'W'ww-e'T'HH:mm:ss.SSSZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm:ss.SSS"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyMMdd'T'HHmmss.SSSZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm:ss.SSSZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HHmmssZ"),cljs_time.format.not_implemented(new cljs.core.Symbol(null,"dateParser","dateParser",-1248418930,null)),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx'W'wwe"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("'T'HHmmssZ"),cljs_time.format.not_implemented(new cljs.core.Symbol(null,"localTimeParser","localTimeParser",-1738135328,null)),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm:ssZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd"),cljs_time.format.not_implemented(new cljs.core.Symbol(null,"dateOptionalTimeParser","dateOptionalTimeParser",1783230854,null)),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("EEE, dd MMM yyyy HH:mm:ss Z"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm:ss.SSS"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyDDD'T'HHmmss.SSSZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-DDD"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH:mm:ss.SSS"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH:mm:ss.SSSZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx'W'wwe'T'HHmmss.SSSZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HHmmss.SSSZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH:mm:ss"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-DDD'T'HH:mm:ss.SSSZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-DDD'T'HH:mm:ssZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH:mm:ss.SSS"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"timeParser","timeParser",1585048034,null)),cljs_time.format.not_implemented(new cljs.core.Symbol(null,"dateTimeParser","dateTimeParser",-1493718282,null)),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("'T'HH:mm:ssZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx'W'wwe'T'HHmmssZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyMMdd"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx-'W'ww"),cljs_time.format.not_implemented(new cljs.core.Symbol(null,"localDateParser","localDateParser",477820077,null)),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyDDD'T'HHmmssZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM"),cljs_time.format.not_implemented(new cljs.core.Symbol(null,"localDateOptionalTimeParser","localDateOptionalTimeParser",435955537,null)),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx-'W'ww-e"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH"),cljs_time.format.not_implemented(new cljs.core.Symbol(null,"timeElementParser","timeElementParser",302132553,null)),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm:ss"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx-'W'ww-e'T'HH:mm:ssZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyMMdd'T'HHmmssZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd HH:mm:ss"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("'T'HHmmss.SSSZ")]);
cljs_time.format.parsers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [cljs.core.constant$keyword$1413,null,cljs.core.constant$keyword$1425,null,cljs.core.constant$keyword$1428,null,cljs.core.constant$keyword$1431,null,cljs.core.constant$keyword$1446,null,cljs.core.constant$keyword$1447,null,cljs.core.constant$keyword$1453,null,cljs.core.constant$keyword$1456,null,cljs.core.constant$keyword$1459,null], null), null);
cljs_time.format.printers = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(cljs_time.format.formatters)),cljs_time.format.parsers);
cljs_time.format.part_splitter_regex = /(?:(?!(?:\+|-)\d{2}):(?!\d{2}$))|[^\w:]+|.[TW]|'[^']+'/;
cljs_time.format.date_map = (function (){var method_table__4424__auto__ = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY) : cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY));var prefer_table__4425__auto__ = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY) : cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY));var method_cache__4426__auto__ = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY) : cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY));var cached_hierarchy__4427__auto__ = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY) : cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY));var hierarchy__4428__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$1262,cljs.core.get_global_hierarchy());return (new cljs.core.MultiFn("date-map",cljs.core.type,cljs.core.constant$keyword$1091,hierarchy__4428__auto__,method_table__4424__auto__,prefer_table__4425__auto__,method_cache__4426__auto__,cached_hierarchy__4427__auto__));
})();
cljs_time.format.date_map.cljs$core$IMultiFn$_add_method$arity$3(null,goog.date.Date,(function (d){return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1392,(0),cljs.core.constant$keyword$1391,(0),cljs.core.constant$keyword$1390,(1)], null);
}));
cljs_time.format.date_map.cljs$core$IMultiFn$_add_method$arity$3(null,goog.date.DateTime,(function (d){return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$1392,(0),cljs.core.constant$keyword$1391,(0),cljs.core.constant$keyword$1390,(1),cljs.core.constant$keyword$1389,(0),cljs.core.constant$keyword$1388,(0),cljs.core.constant$keyword$1387,(0),cljs.core.constant$keyword$1386,(0)], null);
}));
cljs_time.format.date_map.cljs$core$IMultiFn$_add_method$arity$3(null,goog.date.UtcDateTime,(function (d){return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.constant$keyword$1392,(0),cljs.core.constant$keyword$1391,(0),cljs.core.constant$keyword$1390,(1),cljs.core.constant$keyword$1389,(0),cljs.core.constant$keyword$1388,(0),cljs.core.constant$keyword$1387,(0),cljs.core.constant$keyword$1386,(0),cljs.core.constant$keyword$1408,null], null);
}));
cljs_time.format.parse_STAR_ = (function parse_STAR_(constructor,p__51522,s){var map__51528 = p__51522;var map__51528__$1 = ((cljs.core.seq_QMARK_(map__51528))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51528):map__51528);var fmt = map__51528__$1;var parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51528__$1,cljs.core.constant$keyword$1409);if(cljs.core.seq(s))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.Symbol(null,"s","s",-948495851,null))], 0))))));
}
var min_parts = cljs.core.count(clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,cljs_time.format.part_splitter_regex));var parse_seq = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (min_parts,map__51528,map__51528__$1,fmt,parser){
return (function (p__51529){var vec__51530 = p__51529;var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51530,(0),null);var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51530,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,cljs.core.second((cljs_time.format.date_parsers.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.date_parsers.cljs$core$IFn$_invoke$arity$1(b) : cljs_time.format.date_parsers.call(null,b)))], null);
});})(min_parts,map__51528,map__51528__$1,fmt,parser))
,(parser.cljs$core$IFn$_invoke$arity$1 ? parser.cljs$core$IFn$_invoke$arity$1(s) : parser.call(null,s))));if((cljs.core.count(parse_seq) >= min_parts))
{var d = (new constructor((0),(0),(0),(0),(0),(0),(0)));var empty = (cljs_time.format.date_map.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.date_map.cljs$core$IFn$_invoke$arity$1(d) : cljs_time.format.date_map.call(null,d));var setters = cljs.core.select_keys(cljs_time.format.date_setters,cljs.core.keys(empty));cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(((function (d,empty,setters,parse_seq,min_parts,map__51528,map__51528__$1,fmt,parser){
return (function (p1__51520_SHARP_,p2__51521_SHARP_){return (p1__51520_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p1__51520_SHARP_.cljs$core$IFn$_invoke$arity$2(d,p2__51521_SHARP_) : p1__51520_SHARP_.call(null,d,p2__51521_SHARP_));
});})(d,empty,setters,parse_seq,min_parts,map__51528,map__51528__$1,fmt,parser))
,cljs.core.array_seq([setters,cljs_time.internal.core.valid_date_QMARK_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (d,empty,setters,parse_seq,min_parts,map__51528,map__51528__$1,fmt,parser){
return (function (date,p__51531){var vec__51532 = p__51531;var part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51532,(0),null);var do_parse = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51532,(1),null);return (do_parse.cljs$core$IFn$_invoke$arity$2 ? do_parse.cljs$core$IFn$_invoke$arity$2(date,part) : do_parse.call(null,date,part));
});})(d,empty,setters,parse_seq,min_parts,map__51528,map__51528__$1,fmt,parser))
,empty,parse_seq))], 0));
return d;
} else
{throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("The parser could not match the input string.",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1138,cljs.core.constant$keyword$1465], null));
}
});
/**
* Returns a DateTime instance in the UTC time zone obtained by parsing the
* given string according to the given formatter.
*/
cljs_time.format.parse = (function() {
var parse = null;
var parse__1 = (function (s){return cljs.core.first((function (){var iter__4283__auto__ = (function iter__51541(s__51542){return (new cljs.core.LazySeq(null,(function (){var s__51542__$1 = s__51542;while(true){
var temp__4126__auto__ = cljs.core.seq(s__51542__$1);if(temp__4126__auto__)
{var s__51542__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__51542__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__51542__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__51544 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__51543 = (0);while(true){
if((i__51543 < size__4282__auto__))
{var f = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__51543);var d = (function (){try{return parse.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e51547){if((e51547 instanceof Error))
{var _ = e51547;return null;
} else
{throw e51547;

}
}})();if(cljs.core.truth_(d))
{cljs.core.chunk_append(b__51544,d);
{
var G__51549 = (i__51543 + (1));
i__51543 = G__51549;
continue;
}
} else
{{
var G__51550 = (i__51543 + (1));
i__51543 = G__51550;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__51544),iter__51541(cljs.core.chunk_rest(s__51542__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__51544),null);
}
} else
{var f = cljs.core.first(s__51542__$2);var d = (function (){try{return parse.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e51548){if((e51548 instanceof Error))
{var _ = e51548;return null;
} else
{throw e51548;

}
}})();if(cljs.core.truth_(d))
{return cljs.core.cons(d,iter__51541(cljs.core.rest(s__51542__$2)));
} else
{{
var G__51551 = cljs.core.rest(s__51542__$2);
s__51542__$1 = G__51551;
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
var parse_local__1 = (function (s){return cljs.core.first((function (){var iter__4283__auto__ = (function iter__51560(s__51561){return (new cljs.core.LazySeq(null,(function (){var s__51561__$1 = s__51561;while(true){
var temp__4126__auto__ = cljs.core.seq(s__51561__$1);if(temp__4126__auto__)
{var s__51561__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__51561__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__51561__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__51563 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__51562 = (0);while(true){
if((i__51562 < size__4282__auto__))
{var f = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__51562);var d = (function (){try{return parse_local.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e51566){if((e51566 instanceof Error))
{var _ = e51566;return null;
} else
{throw e51566;

}
}})();if(cljs.core.truth_(d))
{cljs.core.chunk_append(b__51563,d);
{
var G__51568 = (i__51562 + (1));
i__51562 = G__51568;
continue;
}
} else
{{
var G__51569 = (i__51562 + (1));
i__51562 = G__51569;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__51563),iter__51560(cljs.core.chunk_rest(s__51561__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__51563),null);
}
} else
{var f = cljs.core.first(s__51561__$2);var d = (function (){try{return parse_local.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e51567){if((e51567 instanceof Error))
{var _ = e51567;return null;
} else
{throw e51567;

}
}})();if(cljs.core.truth_(d))
{return cljs.core.cons(d,iter__51560(cljs.core.rest(s__51561__$2)));
} else
{{
var G__51570 = cljs.core.rest(s__51561__$2);
s__51561__$1 = G__51570;
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
var parse_local_date__1 = (function (s){return cljs.core.first((function (){var iter__4283__auto__ = (function iter__51579(s__51580){return (new cljs.core.LazySeq(null,(function (){var s__51580__$1 = s__51580;while(true){
var temp__4126__auto__ = cljs.core.seq(s__51580__$1);if(temp__4126__auto__)
{var s__51580__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__51580__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__51580__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__51582 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__51581 = (0);while(true){
if((i__51581 < size__4282__auto__))
{var f = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__51581);var d = (function (){try{return parse_local_date.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e51585){if((e51585 instanceof Error))
{var _ = e51585;return null;
} else
{throw e51585;

}
}})();if(cljs.core.truth_(d))
{cljs.core.chunk_append(b__51582,d);
{
var G__51587 = (i__51581 + (1));
i__51581 = G__51587;
continue;
}
} else
{{
var G__51588 = (i__51581 + (1));
i__51581 = G__51588;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__51582),iter__51579(cljs.core.chunk_rest(s__51580__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__51582),null);
}
} else
{var f = cljs.core.first(s__51580__$2);var d = (function (){try{return parse_local_date.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e51586){if((e51586 instanceof Error))
{var _ = e51586;return null;
} else
{throw e51586;

}
}})();if(cljs.core.truth_(d))
{return cljs.core.cons(d,iter__51579(cljs.core.rest(s__51580__$2)));
} else
{{
var G__51589 = cljs.core.rest(s__51580__$2);
s__51580__$1 = G__51589;
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
cljs_time.format.unparse = (function unparse(p__51590,dt){var map__51592 = p__51590;var map__51592__$1 = ((cljs.core.seq_QMARK_(map__51592))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51592):map__51592);var formatter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51592__$1,cljs.core.constant$keyword$1352);if(!((dt == null)))
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
cljs_time.format.unparse_local = (function unparse_local(p__51593,dt){var map__51595 = p__51593;var map__51595__$1 = ((cljs.core.seq_QMARK_(map__51595))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51595):map__51595);var fmt = map__51595__$1;var formatter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51595__$1,cljs.core.constant$keyword$1352);if(!((dt == null)))
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
cljs_time.format.unparse_local_date = (function unparse_local_date(p__51596,dt){var map__51598 = p__51596;var map__51598__$1 = ((cljs.core.seq_QMARK_(map__51598))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51598):map__51598);var fmt = map__51598__$1;var formatter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51598__$1,cljs.core.constant$keyword$1352);if(!((dt == null)))
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
var show_formatters__1 = (function (dt){var seq__51603 = cljs.core.seq(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs_time.format.printers));var chunk__51604 = null;var count__51605 = (0);var i__51606 = (0);while(true){
if((i__51606 < count__51605))
{var p = chunk__51604.cljs$core$IIndexed$_nth$arity$2(null,i__51606);var fmt_51607 = (cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1(p) : cljs_time.format.formatters.call(null,p));cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic("%-40s%s\n",cljs.core.array_seq([p,cljs_time.format.unparse(fmt_51607,dt)], 0))], 0));
{
var G__51608 = seq__51603;
var G__51609 = chunk__51604;
var G__51610 = count__51605;
var G__51611 = (i__51606 + (1));
seq__51603 = G__51608;
chunk__51604 = G__51609;
count__51605 = G__51610;
i__51606 = G__51611;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__51603);if(temp__4126__auto__)
{var seq__51603__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__51603__$1))
{var c__4314__auto__ = cljs.core.chunk_first(seq__51603__$1);{
var G__51612 = cljs.core.chunk_rest(seq__51603__$1);
var G__51613 = c__4314__auto__;
var G__51614 = cljs.core.count(c__4314__auto__);
var G__51615 = (0);
seq__51603 = G__51612;
chunk__51604 = G__51613;
count__51605 = G__51614;
i__51606 = G__51615;
continue;
}
} else
{var p = cljs.core.first(seq__51603__$1);var fmt_51616 = (cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1(p) : cljs_time.format.formatters.call(null,p));cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic("%-40s%s\n",cljs.core.array_seq([p,cljs_time.format.unparse(fmt_51616,dt)], 0))], 0));
{
var G__51617 = cljs.core.next(seq__51603__$1);
var G__51618 = null;
var G__51619 = (0);
var G__51620 = (0);
seq__51603 = G__51617;
chunk__51604 = G__51618;
count__51605 = G__51619;
i__51606 = G__51620;
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
cljs_time.format.Mappable = (function (){var obj51622 = {};return obj51622;
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
cljs_time.format.to_map = (function to_map(years,months,days,hours,minutes,seconds,millis){return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$1392,years,cljs.core.constant$keyword$1391,months,cljs.core.constant$keyword$1390,days,cljs.core.constant$keyword$1389,hours,cljs.core.constant$keyword$1388,minutes,cljs.core.constant$keyword$1387,seconds,cljs.core.constant$keyword$1386,millis], null);
});
goog.date.UtcDateTime.prototype.cljs_time$format$Mappable$ = true;
goog.date.UtcDateTime.prototype.cljs_time$format$Mappable$instant__GT_map$arity$1 = (function (dt){var dt__$1 = this;return cljs_time.format.to_map(dt__$1.getYear(),(dt__$1.getMonth() + (1)),dt__$1.getDate(),dt__$1.getHours(),dt__$1.getMinutes(),dt__$1.getSeconds(),dt__$1.getMilliseconds());
});
cljs.core.ObjMap.prototype.cljs_time$format$Mappable$ = true;
cljs.core.ObjMap.prototype.cljs_time$format$Mappable$instant__GT_map$arity$1 = (function (m){var m__$1 = this;var G__51623 = (((cljs.core.constant$keyword$1138.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(m__$1)) instanceof cljs.core.Keyword))?cljs.core.constant$keyword$1138.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(m__$1)).fqn:null);switch (G__51623) {
case "cljs-time.core/interval":
return (cljs_time.core.__GT_period.cljs$core$IFn$_invoke$arity$1 ? cljs_time.core.__GT_period.cljs$core$IFn$_invoke$arity$1(m__$1) : cljs_time.core.__GT_period.call(null,m__$1));

break;
case "cljs-time.core/period":
return m__$1;

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$1138.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(m__$1))))));

}
});
cljs.core.PersistentArrayMap.prototype.cljs_time$format$Mappable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs_time$format$Mappable$instant__GT_map$arity$1 = (function (m){var m__$1 = this;var G__51625 = (((cljs.core.constant$keyword$1138.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(m__$1)) instanceof cljs.core.Keyword))?cljs.core.constant$keyword$1138.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(m__$1)).fqn:null);switch (G__51625) {
case "cljs-time.core/interval":
return (cljs_time.core.__GT_period.cljs$core$IFn$_invoke$arity$1 ? cljs_time.core.__GT_period.cljs$core$IFn$_invoke$arity$1(m__$1) : cljs_time.core.__GT_period.call(null,m__$1));

break;
case "cljs-time.core/period":
return m__$1;

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$1138.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(m__$1))))));

}
});
