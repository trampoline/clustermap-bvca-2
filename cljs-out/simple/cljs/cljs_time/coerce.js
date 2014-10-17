// Compiled by ClojureScript 0.0-2322
goog.provide('cljs_time.coerce');
goog.require('cljs.core');
goog.require('cljs_time.core');
goog.require('goog.date');
goog.require('goog.date');
goog.require('cljs_time.format');
goog.require('cljs_time.format');
goog.require('cljs_time.core');
cljs_time.coerce.ICoerce = (function (){var obj38989 = {};return obj38989;
})();
cljs_time.coerce.to_date_time = (function to_date_time(obj){if((function (){var and__3546__auto__ = obj;if(and__3546__auto__)
{return obj.cljs_time$coerce$ICoerce$to_date_time$arity$1;
} else
{return and__3546__auto__;
}
})())
{return obj.cljs_time$coerce$ICoerce$to_date_time$arity$1(obj);
} else
{var x__4185__auto__ = (((obj == null))?null:obj);return (function (){var or__3558__auto__ = (cljs_time.coerce.to_date_time[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs_time.coerce.to_date_time["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ICoerce.to-date-time",obj);
}
}
})().call(null,obj);
}
});
/**
* Returns a DateTime instance in the UTC time zone corresponding to the given
* number of milliseconds after the Unix epoch.
*/
cljs_time.coerce.from_long = (function from_long(millis){var G__38991 = (new goog.date.UtcDateTime());G__38991.setTime(millis);
return G__38991;
});
/**
* Returns DateTime instance from string using formatters in clj-time.format,
* returning first which parses
*/
cljs_time.coerce.from_string = (function from_string(s){return cljs.core.first.call(null,(function (){var iter__4283__auto__ = (function iter__39000(s__39001){return (new cljs.core.LazySeq(null,(function (){var s__39001__$1 = s__39001;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__39001__$1);if(temp__4126__auto__)
{var s__39001__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__39001__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__39001__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__39003 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__39002 = (0);while(true){
if((i__39002 < size__4282__auto__))
{var f = cljs.core._nth.call(null,c__4281__auto__,i__39002);var d = (function (){try{return cljs_time.format.parse.call(null,f,s);
}catch (e39006){if((e39006 instanceof Error))
{var _ = e39006;return null;
} else
{throw e39006;

}
}})();if(cljs.core.truth_(d))
{cljs.core.chunk_append.call(null,b__39003,d);
{
var G__39008 = (i__39002 + (1));
i__39002 = G__39008;
continue;
}
} else
{{
var G__39009 = (i__39002 + (1));
i__39002 = G__39009;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39003),iter__39000.call(null,cljs.core.chunk_rest.call(null,s__39001__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39003),null);
}
} else
{var f = cljs.core.first.call(null,s__39001__$2);var d = (function (){try{return cljs_time.format.parse.call(null,f,s);
}catch (e39007){if((e39007 instanceof Error))
{var _ = e39007;return null;
} else
{throw e39007;

}
}})();if(cljs.core.truth_(d))
{return cljs.core.cons.call(null,d,iter__39000.call(null,cljs.core.rest.call(null,s__39001__$2)));
} else
{{
var G__39010 = cljs.core.rest.call(null,s__39001__$2);
s__39001__$1 = G__39010;
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
});return iter__4283__auto__.call(null,cljs.core.vals.call(null,cljs_time.format.formatters));
})());
});
/**
* Returns a DateTime instance in the UTC time zone corresponding to the given
* Java Date object.
*/
cljs_time.coerce.from_date = (function from_date(date){return cljs_time.coerce.from_long.call(null,date.getTime());
});
/**
* Convert `obj` to the number of milliseconds after the Unix epoch.
*/
cljs_time.coerce.to_long = (function to_long(obj){var temp__4124__auto__ = cljs_time.coerce.to_date_time.call(null,obj);if(cljs.core.truth_(temp__4124__auto__))
{var dt = temp__4124__auto__;return dt.getTime();
} else
{return null;
}
});
/**
* Convert `obj` to Unix epoch.
*/
cljs_time.coerce.to_epoch = (function to_epoch(obj){var millis = cljs_time.coerce.to_long.call(null,obj);var and__3546__auto__ = millis;if(cljs.core.truth_(and__3546__auto__))
{return (millis / (1000));
} else
{return and__3546__auto__;
}
});
/**
* Convert `obj` to a JavaScript Date instance.
*/
cljs_time.coerce.to_date = (function to_date(obj){var temp__4124__auto__ = cljs_time.coerce.to_date_time.call(null,obj);if(cljs.core.truth_(temp__4124__auto__))
{var dt = temp__4124__auto__;return (new Date(dt.getTime()));
} else
{return null;
}
});
/**
* Returns a string representation of obj in UTC time-zone
* using (ISODateTimeFormat/dateTime) date-time representation.
*/
cljs_time.coerce.to_string = (function to_string(obj){var temp__4124__auto__ = cljs_time.coerce.to_date_time.call(null,obj);if(cljs.core.truth_(temp__4124__auto__))
{var dt = temp__4124__auto__;return cljs_time.format.unparse.call(null,new cljs.core.Keyword(null,"date-time","date-time",177938180).cljs$core$IFn$_invoke$arity$1(cljs_time.format.formatters),dt);
} else
{return null;
}
});
/**
* Convert `obj` to a goog.date.Date instance
*/
cljs_time.coerce.to_local_date = (function to_local_date(obj){var temp__4124__auto__ = cljs_time.coerce.to_date_time.call(null,obj);if(cljs.core.truth_(temp__4124__auto__))
{var dt = temp__4124__auto__;var G__39012 = (new goog.date.Date());G__39012.setYear(dt.getYear());
G__39012.setMonth(dt.getMonth());
G__39012.setDate(dt.getDate());
return G__39012;
} else
{return null;
}
});
/**
* Convert `obj` to a goog.date.DateTime instance
*/
cljs_time.coerce.to_local_date_time = (function to_local_date_time(obj){var temp__4124__auto__ = cljs_time.coerce.to_date_time.call(null,obj);if(cljs.core.truth_(temp__4124__auto__))
{var dt = temp__4124__auto__;var G__39014 = (new goog.date.DateTime());G__39014.setYear(dt.getYear());
G__39014.setMonth(dt.getMonth());
G__39014.setDate(dt.getDate());
G__39014.setHours(dt.getHours());
G__39014.setMinutes(dt.getMinutes());
G__39014.setSeconds(dt.getSeconds());
G__39014.setMilliseconds(dt.getMilliseconds());
return G__39014;
} else
{return null;
}
});
(cljs_time.coerce.ICoerce["string"] = true);
(cljs_time.coerce.to_date_time["string"] = (function (string){return cljs_time.coerce.from_string.call(null,string);
}));
(cljs_time.coerce.ICoerce["number"] = true);
(cljs_time.coerce.to_date_time["number"] = (function (long$){return cljs_time.coerce.from_long.call(null,long$);
}));
goog.date.UtcDateTime.prototype.cljs_time$coerce$ICoerce$ = true;
goog.date.UtcDateTime.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (date_time){var date_time__$1 = this;return date_time__$1;
});
goog.date.DateTime.prototype.cljs_time$coerce$ICoerce$ = true;
goog.date.DateTime.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (local_date_time){var local_date_time__$1 = this;return cljs_time.core.date_time.call(null,cljs_time.core.year.call(null,local_date_time__$1),cljs_time.core.month.call(null,local_date_time__$1),cljs_time.core.day.call(null,local_date_time__$1),cljs_time.core.hour.call(null,local_date_time__$1),cljs_time.core.minute.call(null,local_date_time__$1),cljs_time.core.second.call(null,local_date_time__$1),cljs_time.core.milli.call(null,local_date_time__$1));
});
goog.date.Date.prototype.cljs_time$coerce$ICoerce$ = true;
goog.date.Date.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (local_date){var local_date__$1 = this;return cljs_time.core.date_time.call(null,cljs_time.core.year.call(null,local_date__$1),cljs_time.core.month.call(null,local_date__$1),cljs_time.core.day.call(null,local_date__$1));
});
Date.prototype.cljs_time$coerce$ICoerce$ = true;
Date.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (date){var date__$1 = this;return cljs_time.coerce.from_date.call(null,date__$1);
});
(cljs_time.coerce.ICoerce["null"] = true);
(cljs_time.coerce.to_date_time["null"] = (function (_){return null;
}));
