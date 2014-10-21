// Compiled by ClojureScript 0.0-2356
goog.provide('cljs_time.coerce');
goog.require('cljs.core');
goog.require('cljs_time.core');
goog.require('goog.date');
goog.require('goog.date');
goog.require('cljs_time.format');
goog.require('cljs_time.format');
goog.require('cljs_time.core');
cljs_time.coerce.ICoerce = (function (){var obj41567 = {};return obj41567;
})();
cljs_time.coerce.to_date_time = (function to_date_time(obj){if((function (){var and__3625__auto__ = obj;if(and__3625__auto__)
{return obj.cljs_time$coerce$ICoerce$to_date_time$arity$1;
} else
{return and__3625__auto__;
}
})())
{return obj.cljs_time$coerce$ICoerce$to_date_time$arity$1(obj);
} else
{var x__4273__auto__ = (((obj == null))?null:obj);return (function (){var or__3637__auto__ = (cljs_time.coerce.to_date_time[goog.typeOf(x__4273__auto__)]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (cljs_time.coerce.to_date_time["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
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
cljs_time.coerce.from_long = (function from_long(millis){var G__41569 = (new goog.date.UtcDateTime());G__41569.setTime(millis);
return G__41569;
});
/**
* Returns DateTime instance from string using formatters in clj-time.format,
* returning first which parses
*/
cljs_time.coerce.from_string = (function from_string(s){return cljs.core.first.call(null,(function (){var iter__4375__auto__ = (function iter__41578(s__41579){return (new cljs.core.LazySeq(null,(function (){var s__41579__$1 = s__41579;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__41579__$1);if(temp__4126__auto__)
{var s__41579__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__41579__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__41579__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__41581 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__41580 = (0);while(true){
if((i__41580 < size__4374__auto__))
{var f = cljs.core._nth.call(null,c__4373__auto__,i__41580);var d = (function (){try{return cljs_time.format.parse.call(null,f,s);
}catch (e41584){if((e41584 instanceof Error))
{var _ = e41584;return null;
} else
{throw e41584;

}
}})();if(cljs.core.truth_(d))
{cljs.core.chunk_append.call(null,b__41581,d);
{
var G__41586 = (i__41580 + (1));
i__41580 = G__41586;
continue;
}
} else
{{
var G__41587 = (i__41580 + (1));
i__41580 = G__41587;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41581),iter__41578.call(null,cljs.core.chunk_rest.call(null,s__41579__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41581),null);
}
} else
{var f = cljs.core.first.call(null,s__41579__$2);var d = (function (){try{return cljs_time.format.parse.call(null,f,s);
}catch (e41585){if((e41585 instanceof Error))
{var _ = e41585;return null;
} else
{throw e41585;

}
}})();if(cljs.core.truth_(d))
{return cljs.core.cons.call(null,d,iter__41578.call(null,cljs.core.rest.call(null,s__41579__$2)));
} else
{{
var G__41588 = cljs.core.rest.call(null,s__41579__$2);
s__41579__$1 = G__41588;
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
});return iter__4375__auto__.call(null,cljs.core.vals.call(null,cljs_time.format.formatters));
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
cljs_time.coerce.to_epoch = (function to_epoch(obj){var millis = cljs_time.coerce.to_long.call(null,obj);var and__3625__auto__ = millis;if(cljs.core.truth_(and__3625__auto__))
{return (millis / (1000));
} else
{return and__3625__auto__;
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
{var dt = temp__4124__auto__;var G__41590 = (new goog.date.Date());G__41590.setYear(dt.getYear());
G__41590.setMonth(dt.getMonth());
G__41590.setDate(dt.getDate());
return G__41590;
} else
{return null;
}
});
/**
* Convert `obj` to a goog.date.DateTime instance
*/
cljs_time.coerce.to_local_date_time = (function to_local_date_time(obj){var temp__4124__auto__ = cljs_time.coerce.to_date_time.call(null,obj);if(cljs.core.truth_(temp__4124__auto__))
{var dt = temp__4124__auto__;var G__41592 = (new goog.date.DateTime());G__41592.setYear(dt.getYear());
G__41592.setMonth(dt.getMonth());
G__41592.setDate(dt.getDate());
G__41592.setHours(dt.getHours());
G__41592.setMinutes(dt.getMinutes());
G__41592.setSeconds(dt.getSeconds());
G__41592.setMilliseconds(dt.getMilliseconds());
return G__41592;
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
