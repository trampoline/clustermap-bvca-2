// Compiled by ClojureScript 0.0-2261
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
var G__40361__delegate = function (args){if(cljs.core.map_QMARK_(cljs.core.first(args)))
{var vec__40360 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40360,(0),null);var body = cljs.core.nthnext(vec__40360,(1));if(cljs.core.map_QMARK_(cljs.core.first(body)))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__40361 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__40361__delegate.call(this,args);};
G__40361.cljs$lang$maxFixedArity = 0;
G__40361.cljs$lang$applyTo = (function (arglist__40362){
var args = cljs.core.seq(arglist__40362);
return G__40361__delegate(args);
});
G__40361.cljs$core$IFn$_invoke$arity$variadic = G__40361__delegate;
return G__40361;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4268__auto__ = (function iter__40367(s__40368){return (new cljs.core.LazySeq(null,(function (){var s__40368__$1 = s__40368;while(true){
var temp__4126__auto__ = cljs.core.seq(s__40368__$1);if(temp__4126__auto__)
{var s__40368__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__40368__$2))
{var c__4266__auto__ = cljs.core.chunk_first(s__40368__$2);var size__4267__auto__ = cljs.core.count(c__4266__auto__);var b__40370 = cljs.core.chunk_buffer(size__4267__auto__);if((function (){var i__40369 = (0);while(true){
if((i__40369 < size__4267__auto__))
{var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4266__auto__,i__40369);cljs.core.chunk_append(b__40370,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__40371 = (i__40369 + (1));
i__40369 = G__40371;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__40370),iter__40367(cljs.core.chunk_rest(s__40368__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__40370),null);
}
} else
{var args = cljs.core.first(s__40368__$2);return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__40367(cljs.core.rest(s__40368__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4268__auto__(arglists);
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
var include_css__delegate = function (styles){var iter__4268__auto__ = (function iter__40376(s__40377){return (new cljs.core.LazySeq(null,(function (){var s__40377__$1 = s__40377;while(true){
var temp__4126__auto__ = cljs.core.seq(s__40377__$1);if(temp__4126__auto__)
{var s__40377__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__40377__$2))
{var c__4266__auto__ = cljs.core.chunk_first(s__40377__$2);var size__4267__auto__ = cljs.core.count(c__4266__auto__);var b__40379 = cljs.core.chunk_buffer(size__4267__auto__);if((function (){var i__40378 = (0);while(true){
if((i__40378 < size__4267__auto__))
{var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4266__auto__,i__40378);cljs.core.chunk_append(b__40379,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$793,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$772,"text/css",cljs.core.constant$keyword$794,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$795,"stylesheet"], null)], null));
{
var G__40380 = (i__40378 + (1));
i__40378 = G__40380;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__40379),iter__40376(cljs.core.chunk_rest(s__40377__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__40379),null);
}
} else
{var style = cljs.core.first(s__40377__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$793,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$772,"text/css",cljs.core.constant$keyword$794,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$795,"stylesheet"], null)], null),iter__40376(cljs.core.rest(s__40377__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4268__auto__(styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__40381){
var styles = cljs.core.seq(arglist__40381);
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
sablono.core.link_to40382 = (function() { 
var link_to40382__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$796,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$794,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
};
var link_to40382 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to40382__delegate.call(this,url,content);};
link_to40382.cljs$lang$maxFixedArity = 1;
link_to40382.cljs$lang$applyTo = (function (arglist__40383){
var url = cljs.core.first(arglist__40383);
var content = cljs.core.rest(arglist__40383);
return link_to40382__delegate(url,content);
});
link_to40382.cljs$core$IFn$_invoke$arity$variadic = link_to40382__delegate;
return link_to40382;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to40382);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to40384 = (function() { 
var mail_to40384__delegate = function (e_mail,p__40385){var vec__40387 = p__40385;var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40387,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$796,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$794,("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3543__auto__ = content;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to40384 = function (e_mail,var_args){
var p__40385 = null;if (arguments.length > 1) {
  p__40385 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to40384__delegate.call(this,e_mail,p__40385);};
mail_to40384.cljs$lang$maxFixedArity = 1;
mail_to40384.cljs$lang$applyTo = (function (arglist__40388){
var e_mail = cljs.core.first(arglist__40388);
var p__40385 = cljs.core.rest(arglist__40388);
return mail_to40384__delegate(e_mail,p__40385);
});
mail_to40384.cljs$core$IFn$_invoke$arity$variadic = mail_to40384__delegate;
return mail_to40384;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to40384);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list40389 = (function unordered_list40389(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$797,(function (){var iter__4268__auto__ = (function iter__40394(s__40395){return (new cljs.core.LazySeq(null,(function (){var s__40395__$1 = s__40395;while(true){
var temp__4126__auto__ = cljs.core.seq(s__40395__$1);if(temp__4126__auto__)
{var s__40395__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__40395__$2))
{var c__4266__auto__ = cljs.core.chunk_first(s__40395__$2);var size__4267__auto__ = cljs.core.count(c__4266__auto__);var b__40397 = cljs.core.chunk_buffer(size__4267__auto__);if((function (){var i__40396 = (0);while(true){
if((i__40396 < size__4267__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4266__auto__,i__40396);cljs.core.chunk_append(b__40397,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$798,x], null));
{
var G__40398 = (i__40396 + (1));
i__40396 = G__40398;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__40397),iter__40394(cljs.core.chunk_rest(s__40395__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__40397),null);
}
} else
{var x = cljs.core.first(s__40395__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$798,x], null),iter__40394(cljs.core.rest(s__40395__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4268__auto__(coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list40389);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list40399 = (function ordered_list40399(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$799,(function (){var iter__4268__auto__ = (function iter__40404(s__40405){return (new cljs.core.LazySeq(null,(function (){var s__40405__$1 = s__40405;while(true){
var temp__4126__auto__ = cljs.core.seq(s__40405__$1);if(temp__4126__auto__)
{var s__40405__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__40405__$2))
{var c__4266__auto__ = cljs.core.chunk_first(s__40405__$2);var size__4267__auto__ = cljs.core.count(c__4266__auto__);var b__40407 = cljs.core.chunk_buffer(size__4267__auto__);if((function (){var i__40406 = (0);while(true){
if((i__40406 < size__4267__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4266__auto__,i__40406);cljs.core.chunk_append(b__40407,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$798,x], null));
{
var G__40408 = (i__40406 + (1));
i__40406 = G__40408;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__40407),iter__40404(cljs.core.chunk_rest(s__40405__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__40407),null);
}
} else
{var x = cljs.core.first(s__40405__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$798,x], null),iter__40404(cljs.core.rest(s__40405__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4268__auto__(coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list40399);
/**
* Create an image element.
*/
sablono.core.image40409 = (function() {
var image40409 = null;
var image40409__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$800,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$801,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});
var image40409__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$800,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$801,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.constant$keyword$802,alt], null)], null);
});
image40409 = function(src,alt){
switch(arguments.length){
case 1:
return image40409__1.call(this,src);
case 2:
return image40409__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image40409.cljs$core$IFn$_invoke$arity$1 = image40409__1;
image40409.cljs$core$IFn$_invoke$arity$2 = image40409__2;
return image40409;
})()
;
sablono.core.image = sablono.core.wrap_attrs(sablono.core.image40409);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__40410_SHARP_,p2__40411_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__40410_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__40411_SHARP_)+"]");
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__40412_SHARP_,p2__40413_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__40412_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__40413_SHARP_));
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field_STAR_ = (function input_field_STAR_(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$792,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$772,type,cljs.core.constant$keyword$803,sablono.core.make_name(name),cljs.core.constant$keyword$774,sablono.core.make_id(name),cljs.core.constant$keyword$804,value], null)], null);
});
/**
* Creates a color input field.
*/
sablono.core.color_field40414 = (function() {
var color_field40414 = null;
var color_field40414__1 = (function (name__10195__auto__){return color_field40414.cljs$core$IFn$_invoke$arity$2(name__10195__auto__,null);
});
var color_field40414__2 = (function (name__10195__auto__,value__10196__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__10195__auto__,value__10196__auto__);
});
color_field40414 = function(name__10195__auto__,value__10196__auto__){
switch(arguments.length){
case 1:
return color_field40414__1.call(this,name__10195__auto__);
case 2:
return color_field40414__2.call(this,name__10195__auto__,value__10196__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field40414.cljs$core$IFn$_invoke$arity$1 = color_field40414__1;
color_field40414.cljs$core$IFn$_invoke$arity$2 = color_field40414__2;
return color_field40414;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field40414);
/**
* Creates a date input field.
*/
sablono.core.date_field40415 = (function() {
var date_field40415 = null;
var date_field40415__1 = (function (name__10195__auto__){return date_field40415.cljs$core$IFn$_invoke$arity$2(name__10195__auto__,null);
});
var date_field40415__2 = (function (name__10195__auto__,value__10196__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__10195__auto__,value__10196__auto__);
});
date_field40415 = function(name__10195__auto__,value__10196__auto__){
switch(arguments.length){
case 1:
return date_field40415__1.call(this,name__10195__auto__);
case 2:
return date_field40415__2.call(this,name__10195__auto__,value__10196__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field40415.cljs$core$IFn$_invoke$arity$1 = date_field40415__1;
date_field40415.cljs$core$IFn$_invoke$arity$2 = date_field40415__2;
return date_field40415;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field40415);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field40416 = (function() {
var datetime_field40416 = null;
var datetime_field40416__1 = (function (name__10195__auto__){return datetime_field40416.cljs$core$IFn$_invoke$arity$2(name__10195__auto__,null);
});
var datetime_field40416__2 = (function (name__10195__auto__,value__10196__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__10195__auto__,value__10196__auto__);
});
datetime_field40416 = function(name__10195__auto__,value__10196__auto__){
switch(arguments.length){
case 1:
return datetime_field40416__1.call(this,name__10195__auto__);
case 2:
return datetime_field40416__2.call(this,name__10195__auto__,value__10196__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field40416.cljs$core$IFn$_invoke$arity$1 = datetime_field40416__1;
datetime_field40416.cljs$core$IFn$_invoke$arity$2 = datetime_field40416__2;
return datetime_field40416;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field40416);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field40417 = (function() {
var datetime_local_field40417 = null;
var datetime_local_field40417__1 = (function (name__10195__auto__){return datetime_local_field40417.cljs$core$IFn$_invoke$arity$2(name__10195__auto__,null);
});
var datetime_local_field40417__2 = (function (name__10195__auto__,value__10196__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__10195__auto__,value__10196__auto__);
});
datetime_local_field40417 = function(name__10195__auto__,value__10196__auto__){
switch(arguments.length){
case 1:
return datetime_local_field40417__1.call(this,name__10195__auto__);
case 2:
return datetime_local_field40417__2.call(this,name__10195__auto__,value__10196__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field40417.cljs$core$IFn$_invoke$arity$1 = datetime_local_field40417__1;
datetime_local_field40417.cljs$core$IFn$_invoke$arity$2 = datetime_local_field40417__2;
return datetime_local_field40417;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field40417);
/**
* Creates a email input field.
*/
sablono.core.email_field40418 = (function() {
var email_field40418 = null;
var email_field40418__1 = (function (name__10195__auto__){return email_field40418.cljs$core$IFn$_invoke$arity$2(name__10195__auto__,null);
});
var email_field40418__2 = (function (name__10195__auto__,value__10196__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__10195__auto__,value__10196__auto__);
});
email_field40418 = function(name__10195__auto__,value__10196__auto__){
switch(arguments.length){
case 1:
return email_field40418__1.call(this,name__10195__auto__);
case 2:
return email_field40418__2.call(this,name__10195__auto__,value__10196__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field40418.cljs$core$IFn$_invoke$arity$1 = email_field40418__1;
email_field40418.cljs$core$IFn$_invoke$arity$2 = email_field40418__2;
return email_field40418;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field40418);
/**
* Creates a file input field.
*/
sablono.core.file_field40419 = (function() {
var file_field40419 = null;
var file_field40419__1 = (function (name__10195__auto__){return file_field40419.cljs$core$IFn$_invoke$arity$2(name__10195__auto__,null);
});
var file_field40419__2 = (function (name__10195__auto__,value__10196__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__10195__auto__,value__10196__auto__);
});
file_field40419 = function(name__10195__auto__,value__10196__auto__){
switch(arguments.length){
case 1:
return file_field40419__1.call(this,name__10195__auto__);
case 2:
return file_field40419__2.call(this,name__10195__auto__,value__10196__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field40419.cljs$core$IFn$_invoke$arity$1 = file_field40419__1;
file_field40419.cljs$core$IFn$_invoke$arity$2 = file_field40419__2;
return file_field40419;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field40419);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field40420 = (function() {
var hidden_field40420 = null;
var hidden_field40420__1 = (function (name__10195__auto__){return hidden_field40420.cljs$core$IFn$_invoke$arity$2(name__10195__auto__,null);
});
var hidden_field40420__2 = (function (name__10195__auto__,value__10196__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__10195__auto__,value__10196__auto__);
});
hidden_field40420 = function(name__10195__auto__,value__10196__auto__){
switch(arguments.length){
case 1:
return hidden_field40420__1.call(this,name__10195__auto__);
case 2:
return hidden_field40420__2.call(this,name__10195__auto__,value__10196__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field40420.cljs$core$IFn$_invoke$arity$1 = hidden_field40420__1;
hidden_field40420.cljs$core$IFn$_invoke$arity$2 = hidden_field40420__2;
return hidden_field40420;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field40420);
/**
* Creates a month input field.
*/
sablono.core.month_field40421 = (function() {
var month_field40421 = null;
var month_field40421__1 = (function (name__10195__auto__){return month_field40421.cljs$core$IFn$_invoke$arity$2(name__10195__auto__,null);
});
var month_field40421__2 = (function (name__10195__auto__,value__10196__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__10195__auto__,value__10196__auto__);
});
month_field40421 = function(name__10195__auto__,value__10196__auto__){
switch(arguments.length){
case 1:
return month_field40421__1.call(this,name__10195__auto__);
case 2:
return month_field40421__2.call(this,name__10195__auto__,value__10196__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field40421.cljs$core$IFn$_invoke$arity$1 = month_field40421__1;
month_field40421.cljs$core$IFn$_invoke$arity$2 = month_field40421__2;
return month_field40421;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field40421);
/**
* Creates a number input field.
*/
sablono.core.number_field40422 = (function() {
var number_field40422 = null;
var number_field40422__1 = (function (name__10195__auto__){return number_field40422.cljs$core$IFn$_invoke$arity$2(name__10195__auto__,null);
});
var number_field40422__2 = (function (name__10195__auto__,value__10196__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__10195__auto__,value__10196__auto__);
});
number_field40422 = function(name__10195__auto__,value__10196__auto__){
switch(arguments.length){
case 1:
return number_field40422__1.call(this,name__10195__auto__);
case 2:
return number_field40422__2.call(this,name__10195__auto__,value__10196__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field40422.cljs$core$IFn$_invoke$arity$1 = number_field40422__1;
number_field40422.cljs$core$IFn$_invoke$arity$2 = number_field40422__2;
return number_field40422;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field40422);
/**
* Creates a password input field.
*/
sablono.core.password_field40423 = (function() {
var password_field40423 = null;
var password_field40423__1 = (function (name__10195__auto__){return password_field40423.cljs$core$IFn$_invoke$arity$2(name__10195__auto__,null);
});
var password_field40423__2 = (function (name__10195__auto__,value__10196__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__10195__auto__,value__10196__auto__);
});
password_field40423 = function(name__10195__auto__,value__10196__auto__){
switch(arguments.length){
case 1:
return password_field40423__1.call(this,name__10195__auto__);
case 2:
return password_field40423__2.call(this,name__10195__auto__,value__10196__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field40423.cljs$core$IFn$_invoke$arity$1 = password_field40423__1;
password_field40423.cljs$core$IFn$_invoke$arity$2 = password_field40423__2;
return password_field40423;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field40423);
/**
* Creates a range input field.
*/
sablono.core.range_field40424 = (function() {
var range_field40424 = null;
var range_field40424__1 = (function (name__10195__auto__){return range_field40424.cljs$core$IFn$_invoke$arity$2(name__10195__auto__,null);
});
var range_field40424__2 = (function (name__10195__auto__,value__10196__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__10195__auto__,value__10196__auto__);
});
range_field40424 = function(name__10195__auto__,value__10196__auto__){
switch(arguments.length){
case 1:
return range_field40424__1.call(this,name__10195__auto__);
case 2:
return range_field40424__2.call(this,name__10195__auto__,value__10196__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field40424.cljs$core$IFn$_invoke$arity$1 = range_field40424__1;
range_field40424.cljs$core$IFn$_invoke$arity$2 = range_field40424__2;
return range_field40424;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field40424);
/**
* Creates a search input field.
*/
sablono.core.search_field40425 = (function() {
var search_field40425 = null;
var search_field40425__1 = (function (name__10195__auto__){return search_field40425.cljs$core$IFn$_invoke$arity$2(name__10195__auto__,null);
});
var search_field40425__2 = (function (name__10195__auto__,value__10196__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__10195__auto__,value__10196__auto__);
});
search_field40425 = function(name__10195__auto__,value__10196__auto__){
switch(arguments.length){
case 1:
return search_field40425__1.call(this,name__10195__auto__);
case 2:
return search_field40425__2.call(this,name__10195__auto__,value__10196__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field40425.cljs$core$IFn$_invoke$arity$1 = search_field40425__1;
search_field40425.cljs$core$IFn$_invoke$arity$2 = search_field40425__2;
return search_field40425;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field40425);
/**
* Creates a tel input field.
*/
sablono.core.tel_field40426 = (function() {
var tel_field40426 = null;
var tel_field40426__1 = (function (name__10195__auto__){return tel_field40426.cljs$core$IFn$_invoke$arity$2(name__10195__auto__,null);
});
var tel_field40426__2 = (function (name__10195__auto__,value__10196__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__10195__auto__,value__10196__auto__);
});
tel_field40426 = function(name__10195__auto__,value__10196__auto__){
switch(arguments.length){
case 1:
return tel_field40426__1.call(this,name__10195__auto__);
case 2:
return tel_field40426__2.call(this,name__10195__auto__,value__10196__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field40426.cljs$core$IFn$_invoke$arity$1 = tel_field40426__1;
tel_field40426.cljs$core$IFn$_invoke$arity$2 = tel_field40426__2;
return tel_field40426;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field40426);
/**
* Creates a text input field.
*/
sablono.core.text_field40427 = (function() {
var text_field40427 = null;
var text_field40427__1 = (function (name__10195__auto__){return text_field40427.cljs$core$IFn$_invoke$arity$2(name__10195__auto__,null);
});
var text_field40427__2 = (function (name__10195__auto__,value__10196__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__10195__auto__,value__10196__auto__);
});
text_field40427 = function(name__10195__auto__,value__10196__auto__){
switch(arguments.length){
case 1:
return text_field40427__1.call(this,name__10195__auto__);
case 2:
return text_field40427__2.call(this,name__10195__auto__,value__10196__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field40427.cljs$core$IFn$_invoke$arity$1 = text_field40427__1;
text_field40427.cljs$core$IFn$_invoke$arity$2 = text_field40427__2;
return text_field40427;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field40427);
/**
* Creates a time input field.
*/
sablono.core.time_field40428 = (function() {
var time_field40428 = null;
var time_field40428__1 = (function (name__10195__auto__){return time_field40428.cljs$core$IFn$_invoke$arity$2(name__10195__auto__,null);
});
var time_field40428__2 = (function (name__10195__auto__,value__10196__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__10195__auto__,value__10196__auto__);
});
time_field40428 = function(name__10195__auto__,value__10196__auto__){
switch(arguments.length){
case 1:
return time_field40428__1.call(this,name__10195__auto__);
case 2:
return time_field40428__2.call(this,name__10195__auto__,value__10196__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field40428.cljs$core$IFn$_invoke$arity$1 = time_field40428__1;
time_field40428.cljs$core$IFn$_invoke$arity$2 = time_field40428__2;
return time_field40428;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field40428);
/**
* Creates a url input field.
*/
sablono.core.url_field40429 = (function() {
var url_field40429 = null;
var url_field40429__1 = (function (name__10195__auto__){return url_field40429.cljs$core$IFn$_invoke$arity$2(name__10195__auto__,null);
});
var url_field40429__2 = (function (name__10195__auto__,value__10196__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__10195__auto__,value__10196__auto__);
});
url_field40429 = function(name__10195__auto__,value__10196__auto__){
switch(arguments.length){
case 1:
return url_field40429__1.call(this,name__10195__auto__);
case 2:
return url_field40429__2.call(this,name__10195__auto__,value__10196__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field40429.cljs$core$IFn$_invoke$arity$1 = url_field40429__1;
url_field40429.cljs$core$IFn$_invoke$arity$2 = url_field40429__2;
return url_field40429;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field40429);
/**
* Creates a week input field.
*/
sablono.core.week_field40430 = (function() {
var week_field40430 = null;
var week_field40430__1 = (function (name__10195__auto__){return week_field40430.cljs$core$IFn$_invoke$arity$2(name__10195__auto__,null);
});
var week_field40430__2 = (function (name__10195__auto__,value__10196__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__10195__auto__,value__10196__auto__);
});
week_field40430 = function(name__10195__auto__,value__10196__auto__){
switch(arguments.length){
case 1:
return week_field40430__1.call(this,name__10195__auto__);
case 2:
return week_field40430__2.call(this,name__10195__auto__,value__10196__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field40430.cljs$core$IFn$_invoke$arity$1 = week_field40430__1;
week_field40430.cljs$core$IFn$_invoke$arity$2 = week_field40430__2;
return week_field40430;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field40430);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box40431 = (function() {
var check_box40431 = null;
var check_box40431__1 = (function (name){return check_box40431.cljs$core$IFn$_invoke$arity$2(name,null);
});
var check_box40431__2 = (function (name,checked_QMARK_){return check_box40431.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});
var check_box40431__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$792,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$772,"checkbox",cljs.core.constant$keyword$803,sablono.core.make_name(name),cljs.core.constant$keyword$774,sablono.core.make_id(name),cljs.core.constant$keyword$804,value,cljs.core.constant$keyword$805,checked_QMARK_], null)], null);
});
check_box40431 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box40431__1.call(this,name);
case 2:
return check_box40431__2.call(this,name,checked_QMARK_);
case 3:
return check_box40431__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box40431.cljs$core$IFn$_invoke$arity$1 = check_box40431__1;
check_box40431.cljs$core$IFn$_invoke$arity$2 = check_box40431__2;
check_box40431.cljs$core$IFn$_invoke$arity$3 = check_box40431__3;
return check_box40431;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box40431);
/**
* Creates a radio button.
*/
sablono.core.radio_button40432 = (function() {
var radio_button40432 = null;
var radio_button40432__1 = (function (group){return radio_button40432.cljs$core$IFn$_invoke$arity$2(group,null);
});
var radio_button40432__2 = (function (group,checked_QMARK_){return radio_button40432.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});
var radio_button40432__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$792,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$772,"radio",cljs.core.constant$keyword$803,sablono.core.make_name(group),cljs.core.constant$keyword$774,sablono.core.make_id((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0))))),cljs.core.constant$keyword$804,value,cljs.core.constant$keyword$805,checked_QMARK_], null)], null);
});
radio_button40432 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button40432__1.call(this,group);
case 2:
return radio_button40432__2.call(this,group,checked_QMARK_);
case 3:
return radio_button40432__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button40432.cljs$core$IFn$_invoke$arity$1 = radio_button40432__1;
radio_button40432.cljs$core$IFn$_invoke$arity$2 = radio_button40432__2;
radio_button40432.cljs$core$IFn$_invoke$arity$3 = radio_button40432__3;
return radio_button40432;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button40432);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options40433 = (function() {
var select_options40433 = null;
var select_options40433__1 = (function (coll){return select_options40433.cljs$core$IFn$_invoke$arity$2(coll,null);
});
var select_options40433__2 = (function (coll,selected){var iter__4268__auto__ = (function iter__40442(s__40443){return (new cljs.core.LazySeq(null,(function (){var s__40443__$1 = s__40443;while(true){
var temp__4126__auto__ = cljs.core.seq(s__40443__$1);if(temp__4126__auto__)
{var s__40443__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__40443__$2))
{var c__4266__auto__ = cljs.core.chunk_first(s__40443__$2);var size__4267__auto__ = cljs.core.count(c__4266__auto__);var b__40445 = cljs.core.chunk_buffer(size__4267__auto__);if((function (){var i__40444 = (0);while(true){
if((i__40444 < size__4267__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4266__auto__,i__40444);cljs.core.chunk_append(b__40445,((cljs.core.sequential_QMARK_(x))?(function (){var vec__40448 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40448,(0),null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40448,(1),null);var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40448,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$806,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$807,text], null),select_options40433.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$808,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$804,val,cljs.core.constant$keyword$809,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),cljs.core.constant$keyword$810,disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$808,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$809,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)));
{
var G__40450 = (i__40444 + (1));
i__40444 = G__40450;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__40445),iter__40442(cljs.core.chunk_rest(s__40443__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__40445),null);
}
} else
{var x = cljs.core.first(s__40443__$2);return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__40449 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40449,(0),null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40449,(1),null);var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40449,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$806,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$807,text], null),select_options40433.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$808,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$804,val,cljs.core.constant$keyword$809,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),cljs.core.constant$keyword$810,disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$808,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$809,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)),iter__40442(cljs.core.rest(s__40443__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4268__auto__(coll);
});
select_options40433 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options40433__1.call(this,coll);
case 2:
return select_options40433__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options40433.cljs$core$IFn$_invoke$arity$1 = select_options40433__1;
select_options40433.cljs$core$IFn$_invoke$arity$2 = select_options40433__2;
return select_options40433;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options40433);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down40451 = (function() {
var drop_down40451 = null;
var drop_down40451__2 = (function (name,options){return drop_down40451.cljs$core$IFn$_invoke$arity$3(name,options,null);
});
var drop_down40451__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$811,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$803,sablono.core.make_name(name),cljs.core.constant$keyword$774,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});
drop_down40451 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down40451__2.call(this,name,options);
case 3:
return drop_down40451__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down40451.cljs$core$IFn$_invoke$arity$2 = drop_down40451__2;
drop_down40451.cljs$core$IFn$_invoke$arity$3 = drop_down40451__3;
return drop_down40451;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down40451);
/**
* Creates a text area element.
*/
sablono.core.text_area40452 = (function() {
var text_area40452 = null;
var text_area40452__1 = (function (name){return text_area40452.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_area40452__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$791,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$803,sablono.core.make_name(name),cljs.core.constant$keyword$774,sablono.core.make_id(name),cljs.core.constant$keyword$804,value], null)], null);
});
text_area40452 = function(name,value){
switch(arguments.length){
case 1:
return text_area40452__1.call(this,name);
case 2:
return text_area40452__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area40452.cljs$core$IFn$_invoke$arity$1 = text_area40452__1;
text_area40452.cljs$core$IFn$_invoke$arity$2 = text_area40452__2;
return text_area40452;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area40452);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label40453 = (function label40453(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$807,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$788,sablono.core.make_id(name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs(sablono.core.label40453);
/**
* Creates a submit button.
*/
sablono.core.submit_button40454 = (function submit_button40454(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$792,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$772,"submit",cljs.core.constant$keyword$804,text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button40454);
/**
* Creates a form reset button.
*/
sablono.core.reset_button40455 = (function reset_button40455(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$792,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$772,"reset",cljs.core.constant$keyword$804,text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button40455);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to40456 = (function() { 
var form_to40456__delegate = function (p__40457,body){var vec__40459 = p__40457;var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40459,(0),null);var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40459,(1),null);var method_str = clojure.string.upper_case(cljs.core.name(method));var action_uri = sablono.util.to_uri(action);return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$812,null,cljs.core.constant$keyword$813,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$814,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$815,method_str,cljs.core.constant$keyword$816,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$814,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$815,"POST",cljs.core.constant$keyword$816,action_uri], null),(sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2("_method",method_str) : sablono.core.hidden_field.call(null,"_method",method_str))], null)),body));
};
var form_to40456 = function (p__40457,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to40456__delegate.call(this,p__40457,body);};
form_to40456.cljs$lang$maxFixedArity = 1;
form_to40456.cljs$lang$applyTo = (function (arglist__40460){
var p__40457 = cljs.core.first(arglist__40460);
var body = cljs.core.rest(arglist__40460);
return form_to40456__delegate(p__40457,body);
});
form_to40456.cljs$core$IFn$_invoke$arity$variadic = form_to40456__delegate;
return form_to40456;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to40456);
