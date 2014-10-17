// Compiled by ClojureScript 0.0-2322
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('sablono.util');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('sablono.interpreter');
goog.require('sablono.interpreter');
goog.require('sablono.util');
goog.require('clojure.walk');
goog.require('clojure.string');
/**
* Add an optional attribute argument to a function that returns a element vector.
*/
sablono.core.wrap_attrs = (function wrap_attrs(func){return (function() { 
var G__52301__delegate = function (args){if(cljs.core.map_QMARK_(cljs.core.first(args)))
{var vec__52300 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52300,(0),null);var body = cljs.core.nthnext(vec__52300,(1));if(cljs.core.map_QMARK_(cljs.core.first(body)))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__52301 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__52301__delegate.call(this,args);};
G__52301.cljs$lang$maxFixedArity = 0;
G__52301.cljs$lang$applyTo = (function (arglist__52302){
var args = cljs.core.seq(arglist__52302);
return G__52301__delegate(args);
});
G__52301.cljs$core$IFn$_invoke$arity$variadic = G__52301__delegate;
return G__52301;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4283__auto__ = (function iter__52307(s__52308){return (new cljs.core.LazySeq(null,(function (){var s__52308__$1 = s__52308;while(true){
var temp__4126__auto__ = cljs.core.seq(s__52308__$1);if(temp__4126__auto__)
{var s__52308__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__52308__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__52308__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__52310 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__52309 = (0);while(true){
if((i__52309 < size__4282__auto__))
{var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__52309);cljs.core.chunk_append(b__52310,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__52311 = (i__52309 + (1));
i__52309 = G__52311;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__52310),iter__52307(cljs.core.chunk_rest(s__52308__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__52310),null);
}
} else
{var args = cljs.core.first(s__52308__$2);return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__52307(cljs.core.rest(s__52308__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4283__auto__(arglists);
});
/**
* Render the React `component` as an HTML string.
*/
sablono.core.render = (function render(component){return React.renderComponentToString(component);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4283__auto__ = (function iter__52316(s__52317){return (new cljs.core.LazySeq(null,(function (){var s__52317__$1 = s__52317;while(true){
var temp__4126__auto__ = cljs.core.seq(s__52317__$1);if(temp__4126__auto__)
{var s__52317__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__52317__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__52317__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__52319 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__52318 = (0);while(true){
if((i__52318 < size__4282__auto__))
{var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__52318);cljs.core.chunk_append(b__52319,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1214,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1135,"text/css",cljs.core.constant$keyword$1215,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$1216,"stylesheet"], null)], null));
{
var G__52320 = (i__52318 + (1));
i__52318 = G__52320;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__52319),iter__52316(cljs.core.chunk_rest(s__52317__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__52319),null);
}
} else
{var style = cljs.core.first(s__52317__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1214,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1135,"text/css",cljs.core.constant$keyword$1215,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$1216,"stylesheet"], null)], null),iter__52316(cljs.core.rest(s__52317__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4283__auto__(styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__52321){
var styles = cljs.core.seq(arglist__52321);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Include the JavaScript library at `src`.
*/
sablono.core.include_js = (function include_js(src){return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
* Include Facebook's React JavaScript library.
*/
sablono.core.include_react = (function include_react(){return sablono.core.include_js("http://fb.me/react-0.9.0.js");
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to52322 = (function() { 
var link_to52322__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1217,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1215,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
};
var link_to52322 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to52322__delegate.call(this,url,content);};
link_to52322.cljs$lang$maxFixedArity = 1;
link_to52322.cljs$lang$applyTo = (function (arglist__52323){
var url = cljs.core.first(arglist__52323);
var content = cljs.core.rest(arglist__52323);
return link_to52322__delegate(url,content);
});
link_to52322.cljs$core$IFn$_invoke$arity$variadic = link_to52322__delegate;
return link_to52322;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to52322);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to52324 = (function() { 
var mail_to52324__delegate = function (e_mail,p__52325){var vec__52327 = p__52325;var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52327,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1217,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1215,("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3558__auto__ = content;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to52324 = function (e_mail,var_args){
var p__52325 = null;if (arguments.length > 1) {
  p__52325 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to52324__delegate.call(this,e_mail,p__52325);};
mail_to52324.cljs$lang$maxFixedArity = 1;
mail_to52324.cljs$lang$applyTo = (function (arglist__52328){
var e_mail = cljs.core.first(arglist__52328);
var p__52325 = cljs.core.rest(arglist__52328);
return mail_to52324__delegate(e_mail,p__52325);
});
mail_to52324.cljs$core$IFn$_invoke$arity$variadic = mail_to52324__delegate;
return mail_to52324;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to52324);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list52329 = (function unordered_list52329(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1218,(function (){var iter__4283__auto__ = (function iter__52334(s__52335){return (new cljs.core.LazySeq(null,(function (){var s__52335__$1 = s__52335;while(true){
var temp__4126__auto__ = cljs.core.seq(s__52335__$1);if(temp__4126__auto__)
{var s__52335__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__52335__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__52335__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__52337 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__52336 = (0);while(true){
if((i__52336 < size__4282__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__52336);cljs.core.chunk_append(b__52337,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1219,x], null));
{
var G__52338 = (i__52336 + (1));
i__52336 = G__52338;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__52337),iter__52334(cljs.core.chunk_rest(s__52335__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__52337),null);
}
} else
{var x = cljs.core.first(s__52335__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1219,x], null),iter__52334(cljs.core.rest(s__52335__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4283__auto__(coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list52329);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list52339 = (function ordered_list52339(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1220,(function (){var iter__4283__auto__ = (function iter__52344(s__52345){return (new cljs.core.LazySeq(null,(function (){var s__52345__$1 = s__52345;while(true){
var temp__4126__auto__ = cljs.core.seq(s__52345__$1);if(temp__4126__auto__)
{var s__52345__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__52345__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__52345__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__52347 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__52346 = (0);while(true){
if((i__52346 < size__4282__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__52346);cljs.core.chunk_append(b__52347,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1219,x], null));
{
var G__52348 = (i__52346 + (1));
i__52346 = G__52348;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__52347),iter__52344(cljs.core.chunk_rest(s__52345__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__52347),null);
}
} else
{var x = cljs.core.first(s__52345__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1219,x], null),iter__52344(cljs.core.rest(s__52345__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4283__auto__(coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list52339);
/**
* Create an image element.
*/
sablono.core.image52349 = (function() {
var image52349 = null;
var image52349__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1221,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1222,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});
var image52349__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1221,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1222,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.constant$keyword$1223,alt], null)], null);
});
image52349 = function(src,alt){
switch(arguments.length){
case 1:
return image52349__1.call(this,src);
case 2:
return image52349__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image52349.cljs$core$IFn$_invoke$arity$1 = image52349__1;
image52349.cljs$core$IFn$_invoke$arity$2 = image52349__2;
return image52349;
})()
;
sablono.core.image = sablono.core.wrap_attrs(sablono.core.image52349);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__52350_SHARP_,p2__52351_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__52350_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__52351_SHARP_)+"]");
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__52352_SHARP_,p2__52353_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__52352_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__52353_SHARP_));
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field_STAR_ = (function input_field_STAR_(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1213,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1135,type,cljs.core.constant$keyword$1156,sablono.core.make_name(name),cljs.core.constant$keyword$1137,sablono.core.make_id(name),cljs.core.constant$keyword$1147,value], null)], null);
});
/**
* Creates a color input field.
*/
sablono.core.color_field52354 = (function() {
var color_field52354 = null;
var color_field52354__1 = (function (name__13522__auto__){return color_field52354.cljs$core$IFn$_invoke$arity$2(name__13522__auto__,null);
});
var color_field52354__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__13522__auto__,value__13523__auto__);
});
color_field52354 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return color_field52354__1.call(this,name__13522__auto__);
case 2:
return color_field52354__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field52354.cljs$core$IFn$_invoke$arity$1 = color_field52354__1;
color_field52354.cljs$core$IFn$_invoke$arity$2 = color_field52354__2;
return color_field52354;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field52354);
/**
* Creates a date input field.
*/
sablono.core.date_field52355 = (function() {
var date_field52355 = null;
var date_field52355__1 = (function (name__13522__auto__){return date_field52355.cljs$core$IFn$_invoke$arity$2(name__13522__auto__,null);
});
var date_field52355__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__13522__auto__,value__13523__auto__);
});
date_field52355 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return date_field52355__1.call(this,name__13522__auto__);
case 2:
return date_field52355__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field52355.cljs$core$IFn$_invoke$arity$1 = date_field52355__1;
date_field52355.cljs$core$IFn$_invoke$arity$2 = date_field52355__2;
return date_field52355;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field52355);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field52356 = (function() {
var datetime_field52356 = null;
var datetime_field52356__1 = (function (name__13522__auto__){return datetime_field52356.cljs$core$IFn$_invoke$arity$2(name__13522__auto__,null);
});
var datetime_field52356__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__13522__auto__,value__13523__auto__);
});
datetime_field52356 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return datetime_field52356__1.call(this,name__13522__auto__);
case 2:
return datetime_field52356__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field52356.cljs$core$IFn$_invoke$arity$1 = datetime_field52356__1;
datetime_field52356.cljs$core$IFn$_invoke$arity$2 = datetime_field52356__2;
return datetime_field52356;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field52356);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field52357 = (function() {
var datetime_local_field52357 = null;
var datetime_local_field52357__1 = (function (name__13522__auto__){return datetime_local_field52357.cljs$core$IFn$_invoke$arity$2(name__13522__auto__,null);
});
var datetime_local_field52357__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__13522__auto__,value__13523__auto__);
});
datetime_local_field52357 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return datetime_local_field52357__1.call(this,name__13522__auto__);
case 2:
return datetime_local_field52357__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field52357.cljs$core$IFn$_invoke$arity$1 = datetime_local_field52357__1;
datetime_local_field52357.cljs$core$IFn$_invoke$arity$2 = datetime_local_field52357__2;
return datetime_local_field52357;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field52357);
/**
* Creates a email input field.
*/
sablono.core.email_field52358 = (function() {
var email_field52358 = null;
var email_field52358__1 = (function (name__13522__auto__){return email_field52358.cljs$core$IFn$_invoke$arity$2(name__13522__auto__,null);
});
var email_field52358__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__13522__auto__,value__13523__auto__);
});
email_field52358 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return email_field52358__1.call(this,name__13522__auto__);
case 2:
return email_field52358__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field52358.cljs$core$IFn$_invoke$arity$1 = email_field52358__1;
email_field52358.cljs$core$IFn$_invoke$arity$2 = email_field52358__2;
return email_field52358;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field52358);
/**
* Creates a file input field.
*/
sablono.core.file_field52359 = (function() {
var file_field52359 = null;
var file_field52359__1 = (function (name__13522__auto__){return file_field52359.cljs$core$IFn$_invoke$arity$2(name__13522__auto__,null);
});
var file_field52359__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__13522__auto__,value__13523__auto__);
});
file_field52359 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return file_field52359__1.call(this,name__13522__auto__);
case 2:
return file_field52359__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field52359.cljs$core$IFn$_invoke$arity$1 = file_field52359__1;
file_field52359.cljs$core$IFn$_invoke$arity$2 = file_field52359__2;
return file_field52359;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field52359);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field52360 = (function() {
var hidden_field52360 = null;
var hidden_field52360__1 = (function (name__13522__auto__){return hidden_field52360.cljs$core$IFn$_invoke$arity$2(name__13522__auto__,null);
});
var hidden_field52360__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__13522__auto__,value__13523__auto__);
});
hidden_field52360 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return hidden_field52360__1.call(this,name__13522__auto__);
case 2:
return hidden_field52360__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field52360.cljs$core$IFn$_invoke$arity$1 = hidden_field52360__1;
hidden_field52360.cljs$core$IFn$_invoke$arity$2 = hidden_field52360__2;
return hidden_field52360;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field52360);
/**
* Creates a month input field.
*/
sablono.core.month_field52361 = (function() {
var month_field52361 = null;
var month_field52361__1 = (function (name__13522__auto__){return month_field52361.cljs$core$IFn$_invoke$arity$2(name__13522__auto__,null);
});
var month_field52361__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__13522__auto__,value__13523__auto__);
});
month_field52361 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return month_field52361__1.call(this,name__13522__auto__);
case 2:
return month_field52361__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field52361.cljs$core$IFn$_invoke$arity$1 = month_field52361__1;
month_field52361.cljs$core$IFn$_invoke$arity$2 = month_field52361__2;
return month_field52361;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field52361);
/**
* Creates a number input field.
*/
sablono.core.number_field52362 = (function() {
var number_field52362 = null;
var number_field52362__1 = (function (name__13522__auto__){return number_field52362.cljs$core$IFn$_invoke$arity$2(name__13522__auto__,null);
});
var number_field52362__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__13522__auto__,value__13523__auto__);
});
number_field52362 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return number_field52362__1.call(this,name__13522__auto__);
case 2:
return number_field52362__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field52362.cljs$core$IFn$_invoke$arity$1 = number_field52362__1;
number_field52362.cljs$core$IFn$_invoke$arity$2 = number_field52362__2;
return number_field52362;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field52362);
/**
* Creates a password input field.
*/
sablono.core.password_field52363 = (function() {
var password_field52363 = null;
var password_field52363__1 = (function (name__13522__auto__){return password_field52363.cljs$core$IFn$_invoke$arity$2(name__13522__auto__,null);
});
var password_field52363__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__13522__auto__,value__13523__auto__);
});
password_field52363 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return password_field52363__1.call(this,name__13522__auto__);
case 2:
return password_field52363__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field52363.cljs$core$IFn$_invoke$arity$1 = password_field52363__1;
password_field52363.cljs$core$IFn$_invoke$arity$2 = password_field52363__2;
return password_field52363;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field52363);
/**
* Creates a range input field.
*/
sablono.core.range_field52364 = (function() {
var range_field52364 = null;
var range_field52364__1 = (function (name__13522__auto__){return range_field52364.cljs$core$IFn$_invoke$arity$2(name__13522__auto__,null);
});
var range_field52364__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__13522__auto__,value__13523__auto__);
});
range_field52364 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return range_field52364__1.call(this,name__13522__auto__);
case 2:
return range_field52364__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field52364.cljs$core$IFn$_invoke$arity$1 = range_field52364__1;
range_field52364.cljs$core$IFn$_invoke$arity$2 = range_field52364__2;
return range_field52364;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field52364);
/**
* Creates a search input field.
*/
sablono.core.search_field52365 = (function() {
var search_field52365 = null;
var search_field52365__1 = (function (name__13522__auto__){return search_field52365.cljs$core$IFn$_invoke$arity$2(name__13522__auto__,null);
});
var search_field52365__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__13522__auto__,value__13523__auto__);
});
search_field52365 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return search_field52365__1.call(this,name__13522__auto__);
case 2:
return search_field52365__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field52365.cljs$core$IFn$_invoke$arity$1 = search_field52365__1;
search_field52365.cljs$core$IFn$_invoke$arity$2 = search_field52365__2;
return search_field52365;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field52365);
/**
* Creates a tel input field.
*/
sablono.core.tel_field52366 = (function() {
var tel_field52366 = null;
var tel_field52366__1 = (function (name__13522__auto__){return tel_field52366.cljs$core$IFn$_invoke$arity$2(name__13522__auto__,null);
});
var tel_field52366__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__13522__auto__,value__13523__auto__);
});
tel_field52366 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return tel_field52366__1.call(this,name__13522__auto__);
case 2:
return tel_field52366__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field52366.cljs$core$IFn$_invoke$arity$1 = tel_field52366__1;
tel_field52366.cljs$core$IFn$_invoke$arity$2 = tel_field52366__2;
return tel_field52366;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field52366);
/**
* Creates a text input field.
*/
sablono.core.text_field52367 = (function() {
var text_field52367 = null;
var text_field52367__1 = (function (name__13522__auto__){return text_field52367.cljs$core$IFn$_invoke$arity$2(name__13522__auto__,null);
});
var text_field52367__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__13522__auto__,value__13523__auto__);
});
text_field52367 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return text_field52367__1.call(this,name__13522__auto__);
case 2:
return text_field52367__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field52367.cljs$core$IFn$_invoke$arity$1 = text_field52367__1;
text_field52367.cljs$core$IFn$_invoke$arity$2 = text_field52367__2;
return text_field52367;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field52367);
/**
* Creates a time input field.
*/
sablono.core.time_field52368 = (function() {
var time_field52368 = null;
var time_field52368__1 = (function (name__13522__auto__){return time_field52368.cljs$core$IFn$_invoke$arity$2(name__13522__auto__,null);
});
var time_field52368__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__13522__auto__,value__13523__auto__);
});
time_field52368 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return time_field52368__1.call(this,name__13522__auto__);
case 2:
return time_field52368__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field52368.cljs$core$IFn$_invoke$arity$1 = time_field52368__1;
time_field52368.cljs$core$IFn$_invoke$arity$2 = time_field52368__2;
return time_field52368;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field52368);
/**
* Creates a url input field.
*/
sablono.core.url_field52369 = (function() {
var url_field52369 = null;
var url_field52369__1 = (function (name__13522__auto__){return url_field52369.cljs$core$IFn$_invoke$arity$2(name__13522__auto__,null);
});
var url_field52369__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__13522__auto__,value__13523__auto__);
});
url_field52369 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return url_field52369__1.call(this,name__13522__auto__);
case 2:
return url_field52369__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field52369.cljs$core$IFn$_invoke$arity$1 = url_field52369__1;
url_field52369.cljs$core$IFn$_invoke$arity$2 = url_field52369__2;
return url_field52369;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field52369);
/**
* Creates a week input field.
*/
sablono.core.week_field52370 = (function() {
var week_field52370 = null;
var week_field52370__1 = (function (name__13522__auto__){return week_field52370.cljs$core$IFn$_invoke$arity$2(name__13522__auto__,null);
});
var week_field52370__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__13522__auto__,value__13523__auto__);
});
week_field52370 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return week_field52370__1.call(this,name__13522__auto__);
case 2:
return week_field52370__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field52370.cljs$core$IFn$_invoke$arity$1 = week_field52370__1;
week_field52370.cljs$core$IFn$_invoke$arity$2 = week_field52370__2;
return week_field52370;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field52370);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box52371 = (function() {
var check_box52371 = null;
var check_box52371__1 = (function (name){return check_box52371.cljs$core$IFn$_invoke$arity$2(name,null);
});
var check_box52371__2 = (function (name,checked_QMARK_){return check_box52371.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});
var check_box52371__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1213,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$1135,"checkbox",cljs.core.constant$keyword$1156,sablono.core.make_name(name),cljs.core.constant$keyword$1137,sablono.core.make_id(name),cljs.core.constant$keyword$1147,value,cljs.core.constant$keyword$1224,checked_QMARK_], null)], null);
});
check_box52371 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box52371__1.call(this,name);
case 2:
return check_box52371__2.call(this,name,checked_QMARK_);
case 3:
return check_box52371__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box52371.cljs$core$IFn$_invoke$arity$1 = check_box52371__1;
check_box52371.cljs$core$IFn$_invoke$arity$2 = check_box52371__2;
check_box52371.cljs$core$IFn$_invoke$arity$3 = check_box52371__3;
return check_box52371;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box52371);
/**
* Creates a radio button.
*/
sablono.core.radio_button52372 = (function() {
var radio_button52372 = null;
var radio_button52372__1 = (function (group){return radio_button52372.cljs$core$IFn$_invoke$arity$2(group,null);
});
var radio_button52372__2 = (function (group,checked_QMARK_){return radio_button52372.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});
var radio_button52372__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1213,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$1135,"radio",cljs.core.constant$keyword$1156,sablono.core.make_name(group),cljs.core.constant$keyword$1137,sablono.core.make_id((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0))))),cljs.core.constant$keyword$1147,value,cljs.core.constant$keyword$1224,checked_QMARK_], null)], null);
});
radio_button52372 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button52372__1.call(this,group);
case 2:
return radio_button52372__2.call(this,group,checked_QMARK_);
case 3:
return radio_button52372__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button52372.cljs$core$IFn$_invoke$arity$1 = radio_button52372__1;
radio_button52372.cljs$core$IFn$_invoke$arity$2 = radio_button52372__2;
radio_button52372.cljs$core$IFn$_invoke$arity$3 = radio_button52372__3;
return radio_button52372;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button52372);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options52373 = (function() {
var select_options52373 = null;
var select_options52373__1 = (function (coll){return select_options52373.cljs$core$IFn$_invoke$arity$2(coll,null);
});
var select_options52373__2 = (function (coll,selected){var iter__4283__auto__ = (function iter__52382(s__52383){return (new cljs.core.LazySeq(null,(function (){var s__52383__$1 = s__52383;while(true){
var temp__4126__auto__ = cljs.core.seq(s__52383__$1);if(temp__4126__auto__)
{var s__52383__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__52383__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__52383__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__52385 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__52384 = (0);while(true){
if((i__52384 < size__4282__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__52384);cljs.core.chunk_append(b__52385,((cljs.core.sequential_QMARK_(x))?(function (){var vec__52388 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52388,(0),null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52388,(1),null);var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52388,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1225,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1226,text], null),select_options52373.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1212,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1147,val,cljs.core.constant$keyword$1227,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),cljs.core.constant$keyword$1228,disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1212,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1227,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)));
{
var G__52390 = (i__52384 + (1));
i__52384 = G__52390;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__52385),iter__52382(cljs.core.chunk_rest(s__52383__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__52385),null);
}
} else
{var x = cljs.core.first(s__52383__$2);return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__52389 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52389,(0),null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52389,(1),null);var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52389,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1225,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1226,text], null),select_options52373.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1212,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1147,val,cljs.core.constant$keyword$1227,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),cljs.core.constant$keyword$1228,disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1212,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1227,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)),iter__52382(cljs.core.rest(s__52383__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4283__auto__(coll);
});
select_options52373 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options52373__1.call(this,coll);
case 2:
return select_options52373__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options52373.cljs$core$IFn$_invoke$arity$1 = select_options52373__1;
select_options52373.cljs$core$IFn$_invoke$arity$2 = select_options52373__2;
return select_options52373;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options52373);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down52391 = (function() {
var drop_down52391 = null;
var drop_down52391__2 = (function (name,options){return drop_down52391.cljs$core$IFn$_invoke$arity$3(name,options,null);
});
var drop_down52391__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1229,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1156,sablono.core.make_name(name),cljs.core.constant$keyword$1137,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});
drop_down52391 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down52391__2.call(this,name,options);
case 3:
return drop_down52391__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down52391.cljs$core$IFn$_invoke$arity$2 = drop_down52391__2;
drop_down52391.cljs$core$IFn$_invoke$arity$3 = drop_down52391__3;
return drop_down52391;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down52391);
/**
* Creates a text area element.
*/
sablono.core.text_area52392 = (function() {
var text_area52392 = null;
var text_area52392__1 = (function (name){return text_area52392.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_area52392__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1211,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1156,sablono.core.make_name(name),cljs.core.constant$keyword$1137,sablono.core.make_id(name),cljs.core.constant$keyword$1147,value], null)], null);
});
text_area52392 = function(name,value){
switch(arguments.length){
case 1:
return text_area52392__1.call(this,name);
case 2:
return text_area52392__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area52392.cljs$core$IFn$_invoke$arity$1 = text_area52392__1;
text_area52392.cljs$core$IFn$_invoke$arity$2 = text_area52392__2;
return text_area52392;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area52392);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label52393 = (function label52393(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1226,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1210,sablono.core.make_id(name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs(sablono.core.label52393);
/**
* Creates a submit button.
*/
sablono.core.submit_button52394 = (function submit_button52394(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1213,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1135,"submit",cljs.core.constant$keyword$1147,text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button52394);
/**
* Creates a form reset button.
*/
sablono.core.reset_button52395 = (function reset_button52395(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1213,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1135,"reset",cljs.core.constant$keyword$1147,text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button52395);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to52396 = (function() { 
var form_to52396__delegate = function (p__52397,body){var vec__52399 = p__52397;var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52399,(0),null);var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52399,(1),null);var method_str = clojure.string.upper_case(cljs.core.name(method));var action_uri = sablono.util.to_uri(action);return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1230,null,cljs.core.constant$keyword$1231,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1232,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1109,method_str,cljs.core.constant$keyword$1233,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1232,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1109,"POST",cljs.core.constant$keyword$1233,action_uri], null),(sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2("_method",method_str) : sablono.core.hidden_field.call(null,"_method",method_str))], null)),body));
};
var form_to52396 = function (p__52397,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to52396__delegate.call(this,p__52397,body);};
form_to52396.cljs$lang$maxFixedArity = 1;
form_to52396.cljs$lang$applyTo = (function (arglist__52400){
var p__52397 = cljs.core.first(arglist__52400);
var body = cljs.core.rest(arglist__52400);
return form_to52396__delegate(p__52397,body);
});
form_to52396.cljs$core$IFn$_invoke$arity$variadic = form_to52396__delegate;
return form_to52396;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to52396);
