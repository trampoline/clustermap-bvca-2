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
var G__39995__delegate = function (args){if(cljs.core.map_QMARK_(cljs.core.first(args)))
{var vec__39994 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39994,(0),null);var body = cljs.core.nthnext(vec__39994,(1));if(cljs.core.map_QMARK_(cljs.core.first(body)))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__39995 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__39995__delegate.call(this,args);};
G__39995.cljs$lang$maxFixedArity = 0;
G__39995.cljs$lang$applyTo = (function (arglist__39996){
var args = cljs.core.seq(arglist__39996);
return G__39995__delegate(args);
});
G__39995.cljs$core$IFn$_invoke$arity$variadic = G__39995__delegate;
return G__39995;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4268__auto__ = (function iter__40001(s__40002){return (new cljs.core.LazySeq(null,(function (){var s__40002__$1 = s__40002;while(true){
var temp__4126__auto__ = cljs.core.seq(s__40002__$1);if(temp__4126__auto__)
{var s__40002__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__40002__$2))
{var c__4266__auto__ = cljs.core.chunk_first(s__40002__$2);var size__4267__auto__ = cljs.core.count(c__4266__auto__);var b__40004 = cljs.core.chunk_buffer(size__4267__auto__);if((function (){var i__40003 = (0);while(true){
if((i__40003 < size__4267__auto__))
{var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4266__auto__,i__40003);cljs.core.chunk_append(b__40004,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__40005 = (i__40003 + (1));
i__40003 = G__40005;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__40004),iter__40001(cljs.core.chunk_rest(s__40002__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__40004),null);
}
} else
{var args = cljs.core.first(s__40002__$2);return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__40001(cljs.core.rest(s__40002__$2)));
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
var include_css__delegate = function (styles){var iter__4268__auto__ = (function iter__40010(s__40011){return (new cljs.core.LazySeq(null,(function (){var s__40011__$1 = s__40011;while(true){
var temp__4126__auto__ = cljs.core.seq(s__40011__$1);if(temp__4126__auto__)
{var s__40011__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__40011__$2))
{var c__4266__auto__ = cljs.core.chunk_first(s__40011__$2);var size__4267__auto__ = cljs.core.count(c__4266__auto__);var b__40013 = cljs.core.chunk_buffer(size__4267__auto__);if((function (){var i__40012 = (0);while(true){
if((i__40012 < size__4267__auto__))
{var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4266__auto__,i__40012);cljs.core.chunk_append(b__40013,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$700,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$679,"text/css",cljs.core.constant$keyword$701,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$702,"stylesheet"], null)], null));
{
var G__40014 = (i__40012 + (1));
i__40012 = G__40014;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__40013),iter__40010(cljs.core.chunk_rest(s__40011__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__40013),null);
}
} else
{var style = cljs.core.first(s__40011__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$700,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$679,"text/css",cljs.core.constant$keyword$701,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$702,"stylesheet"], null)], null),iter__40010(cljs.core.rest(s__40011__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__40015){
var styles = cljs.core.seq(arglist__40015);
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
sablono.core.link_to40016 = (function() { 
var link_to40016__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$703,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$701,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
};
var link_to40016 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to40016__delegate.call(this,url,content);};
link_to40016.cljs$lang$maxFixedArity = 1;
link_to40016.cljs$lang$applyTo = (function (arglist__40017){
var url = cljs.core.first(arglist__40017);
var content = cljs.core.rest(arglist__40017);
return link_to40016__delegate(url,content);
});
link_to40016.cljs$core$IFn$_invoke$arity$variadic = link_to40016__delegate;
return link_to40016;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to40016);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to40018 = (function() { 
var mail_to40018__delegate = function (e_mail,p__40019){var vec__40021 = p__40019;var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40021,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$703,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$701,("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3543__auto__ = content;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to40018 = function (e_mail,var_args){
var p__40019 = null;if (arguments.length > 1) {
  p__40019 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to40018__delegate.call(this,e_mail,p__40019);};
mail_to40018.cljs$lang$maxFixedArity = 1;
mail_to40018.cljs$lang$applyTo = (function (arglist__40022){
var e_mail = cljs.core.first(arglist__40022);
var p__40019 = cljs.core.rest(arglist__40022);
return mail_to40018__delegate(e_mail,p__40019);
});
mail_to40018.cljs$core$IFn$_invoke$arity$variadic = mail_to40018__delegate;
return mail_to40018;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to40018);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list40023 = (function unordered_list40023(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$704,(function (){var iter__4268__auto__ = (function iter__40028(s__40029){return (new cljs.core.LazySeq(null,(function (){var s__40029__$1 = s__40029;while(true){
var temp__4126__auto__ = cljs.core.seq(s__40029__$1);if(temp__4126__auto__)
{var s__40029__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__40029__$2))
{var c__4266__auto__ = cljs.core.chunk_first(s__40029__$2);var size__4267__auto__ = cljs.core.count(c__4266__auto__);var b__40031 = cljs.core.chunk_buffer(size__4267__auto__);if((function (){var i__40030 = (0);while(true){
if((i__40030 < size__4267__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4266__auto__,i__40030);cljs.core.chunk_append(b__40031,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$705,x], null));
{
var G__40032 = (i__40030 + (1));
i__40030 = G__40032;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__40031),iter__40028(cljs.core.chunk_rest(s__40029__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__40031),null);
}
} else
{var x = cljs.core.first(s__40029__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$705,x], null),iter__40028(cljs.core.rest(s__40029__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list40023);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list40033 = (function ordered_list40033(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$706,(function (){var iter__4268__auto__ = (function iter__40038(s__40039){return (new cljs.core.LazySeq(null,(function (){var s__40039__$1 = s__40039;while(true){
var temp__4126__auto__ = cljs.core.seq(s__40039__$1);if(temp__4126__auto__)
{var s__40039__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__40039__$2))
{var c__4266__auto__ = cljs.core.chunk_first(s__40039__$2);var size__4267__auto__ = cljs.core.count(c__4266__auto__);var b__40041 = cljs.core.chunk_buffer(size__4267__auto__);if((function (){var i__40040 = (0);while(true){
if((i__40040 < size__4267__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4266__auto__,i__40040);cljs.core.chunk_append(b__40041,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$705,x], null));
{
var G__40042 = (i__40040 + (1));
i__40040 = G__40042;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__40041),iter__40038(cljs.core.chunk_rest(s__40039__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__40041),null);
}
} else
{var x = cljs.core.first(s__40039__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$705,x], null),iter__40038(cljs.core.rest(s__40039__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list40033);
/**
* Create an image element.
*/
sablono.core.image40043 = (function() {
var image40043 = null;
var image40043__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$707,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$708,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});
var image40043__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$707,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$708,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.constant$keyword$709,alt], null)], null);
});
image40043 = function(src,alt){
switch(arguments.length){
case 1:
return image40043__1.call(this,src);
case 2:
return image40043__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image40043.cljs$core$IFn$_invoke$arity$1 = image40043__1;
image40043.cljs$core$IFn$_invoke$arity$2 = image40043__2;
return image40043;
})()
;
sablono.core.image = sablono.core.wrap_attrs(sablono.core.image40043);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__40044_SHARP_,p2__40045_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__40044_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__40045_SHARP_)+"]");
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__40046_SHARP_,p2__40047_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__40046_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__40047_SHARP_));
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field_STAR_ = (function input_field_STAR_(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$699,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$679,type,cljs.core.constant$keyword$710,sablono.core.make_name(name),cljs.core.constant$keyword$681,sablono.core.make_id(name),cljs.core.constant$keyword$711,value], null)], null);
});
/**
* Creates a color input field.
*/
sablono.core.color_field40048 = (function() {
var color_field40048 = null;
var color_field40048__1 = (function (name__10173__auto__){return color_field40048.cljs$core$IFn$_invoke$arity$2(name__10173__auto__,null);
});
var color_field40048__2 = (function (name__10173__auto__,value__10174__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__10173__auto__,value__10174__auto__);
});
color_field40048 = function(name__10173__auto__,value__10174__auto__){
switch(arguments.length){
case 1:
return color_field40048__1.call(this,name__10173__auto__);
case 2:
return color_field40048__2.call(this,name__10173__auto__,value__10174__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field40048.cljs$core$IFn$_invoke$arity$1 = color_field40048__1;
color_field40048.cljs$core$IFn$_invoke$arity$2 = color_field40048__2;
return color_field40048;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field40048);
/**
* Creates a date input field.
*/
sablono.core.date_field40049 = (function() {
var date_field40049 = null;
var date_field40049__1 = (function (name__10173__auto__){return date_field40049.cljs$core$IFn$_invoke$arity$2(name__10173__auto__,null);
});
var date_field40049__2 = (function (name__10173__auto__,value__10174__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__10173__auto__,value__10174__auto__);
});
date_field40049 = function(name__10173__auto__,value__10174__auto__){
switch(arguments.length){
case 1:
return date_field40049__1.call(this,name__10173__auto__);
case 2:
return date_field40049__2.call(this,name__10173__auto__,value__10174__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field40049.cljs$core$IFn$_invoke$arity$1 = date_field40049__1;
date_field40049.cljs$core$IFn$_invoke$arity$2 = date_field40049__2;
return date_field40049;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field40049);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field40050 = (function() {
var datetime_field40050 = null;
var datetime_field40050__1 = (function (name__10173__auto__){return datetime_field40050.cljs$core$IFn$_invoke$arity$2(name__10173__auto__,null);
});
var datetime_field40050__2 = (function (name__10173__auto__,value__10174__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__10173__auto__,value__10174__auto__);
});
datetime_field40050 = function(name__10173__auto__,value__10174__auto__){
switch(arguments.length){
case 1:
return datetime_field40050__1.call(this,name__10173__auto__);
case 2:
return datetime_field40050__2.call(this,name__10173__auto__,value__10174__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field40050.cljs$core$IFn$_invoke$arity$1 = datetime_field40050__1;
datetime_field40050.cljs$core$IFn$_invoke$arity$2 = datetime_field40050__2;
return datetime_field40050;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field40050);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field40051 = (function() {
var datetime_local_field40051 = null;
var datetime_local_field40051__1 = (function (name__10173__auto__){return datetime_local_field40051.cljs$core$IFn$_invoke$arity$2(name__10173__auto__,null);
});
var datetime_local_field40051__2 = (function (name__10173__auto__,value__10174__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__10173__auto__,value__10174__auto__);
});
datetime_local_field40051 = function(name__10173__auto__,value__10174__auto__){
switch(arguments.length){
case 1:
return datetime_local_field40051__1.call(this,name__10173__auto__);
case 2:
return datetime_local_field40051__2.call(this,name__10173__auto__,value__10174__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field40051.cljs$core$IFn$_invoke$arity$1 = datetime_local_field40051__1;
datetime_local_field40051.cljs$core$IFn$_invoke$arity$2 = datetime_local_field40051__2;
return datetime_local_field40051;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field40051);
/**
* Creates a email input field.
*/
sablono.core.email_field40052 = (function() {
var email_field40052 = null;
var email_field40052__1 = (function (name__10173__auto__){return email_field40052.cljs$core$IFn$_invoke$arity$2(name__10173__auto__,null);
});
var email_field40052__2 = (function (name__10173__auto__,value__10174__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__10173__auto__,value__10174__auto__);
});
email_field40052 = function(name__10173__auto__,value__10174__auto__){
switch(arguments.length){
case 1:
return email_field40052__1.call(this,name__10173__auto__);
case 2:
return email_field40052__2.call(this,name__10173__auto__,value__10174__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field40052.cljs$core$IFn$_invoke$arity$1 = email_field40052__1;
email_field40052.cljs$core$IFn$_invoke$arity$2 = email_field40052__2;
return email_field40052;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field40052);
/**
* Creates a file input field.
*/
sablono.core.file_field40053 = (function() {
var file_field40053 = null;
var file_field40053__1 = (function (name__10173__auto__){return file_field40053.cljs$core$IFn$_invoke$arity$2(name__10173__auto__,null);
});
var file_field40053__2 = (function (name__10173__auto__,value__10174__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__10173__auto__,value__10174__auto__);
});
file_field40053 = function(name__10173__auto__,value__10174__auto__){
switch(arguments.length){
case 1:
return file_field40053__1.call(this,name__10173__auto__);
case 2:
return file_field40053__2.call(this,name__10173__auto__,value__10174__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field40053.cljs$core$IFn$_invoke$arity$1 = file_field40053__1;
file_field40053.cljs$core$IFn$_invoke$arity$2 = file_field40053__2;
return file_field40053;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field40053);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field40054 = (function() {
var hidden_field40054 = null;
var hidden_field40054__1 = (function (name__10173__auto__){return hidden_field40054.cljs$core$IFn$_invoke$arity$2(name__10173__auto__,null);
});
var hidden_field40054__2 = (function (name__10173__auto__,value__10174__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__10173__auto__,value__10174__auto__);
});
hidden_field40054 = function(name__10173__auto__,value__10174__auto__){
switch(arguments.length){
case 1:
return hidden_field40054__1.call(this,name__10173__auto__);
case 2:
return hidden_field40054__2.call(this,name__10173__auto__,value__10174__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field40054.cljs$core$IFn$_invoke$arity$1 = hidden_field40054__1;
hidden_field40054.cljs$core$IFn$_invoke$arity$2 = hidden_field40054__2;
return hidden_field40054;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field40054);
/**
* Creates a month input field.
*/
sablono.core.month_field40055 = (function() {
var month_field40055 = null;
var month_field40055__1 = (function (name__10173__auto__){return month_field40055.cljs$core$IFn$_invoke$arity$2(name__10173__auto__,null);
});
var month_field40055__2 = (function (name__10173__auto__,value__10174__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__10173__auto__,value__10174__auto__);
});
month_field40055 = function(name__10173__auto__,value__10174__auto__){
switch(arguments.length){
case 1:
return month_field40055__1.call(this,name__10173__auto__);
case 2:
return month_field40055__2.call(this,name__10173__auto__,value__10174__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field40055.cljs$core$IFn$_invoke$arity$1 = month_field40055__1;
month_field40055.cljs$core$IFn$_invoke$arity$2 = month_field40055__2;
return month_field40055;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field40055);
/**
* Creates a number input field.
*/
sablono.core.number_field40056 = (function() {
var number_field40056 = null;
var number_field40056__1 = (function (name__10173__auto__){return number_field40056.cljs$core$IFn$_invoke$arity$2(name__10173__auto__,null);
});
var number_field40056__2 = (function (name__10173__auto__,value__10174__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__10173__auto__,value__10174__auto__);
});
number_field40056 = function(name__10173__auto__,value__10174__auto__){
switch(arguments.length){
case 1:
return number_field40056__1.call(this,name__10173__auto__);
case 2:
return number_field40056__2.call(this,name__10173__auto__,value__10174__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field40056.cljs$core$IFn$_invoke$arity$1 = number_field40056__1;
number_field40056.cljs$core$IFn$_invoke$arity$2 = number_field40056__2;
return number_field40056;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field40056);
/**
* Creates a password input field.
*/
sablono.core.password_field40057 = (function() {
var password_field40057 = null;
var password_field40057__1 = (function (name__10173__auto__){return password_field40057.cljs$core$IFn$_invoke$arity$2(name__10173__auto__,null);
});
var password_field40057__2 = (function (name__10173__auto__,value__10174__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__10173__auto__,value__10174__auto__);
});
password_field40057 = function(name__10173__auto__,value__10174__auto__){
switch(arguments.length){
case 1:
return password_field40057__1.call(this,name__10173__auto__);
case 2:
return password_field40057__2.call(this,name__10173__auto__,value__10174__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field40057.cljs$core$IFn$_invoke$arity$1 = password_field40057__1;
password_field40057.cljs$core$IFn$_invoke$arity$2 = password_field40057__2;
return password_field40057;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field40057);
/**
* Creates a range input field.
*/
sablono.core.range_field40058 = (function() {
var range_field40058 = null;
var range_field40058__1 = (function (name__10173__auto__){return range_field40058.cljs$core$IFn$_invoke$arity$2(name__10173__auto__,null);
});
var range_field40058__2 = (function (name__10173__auto__,value__10174__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__10173__auto__,value__10174__auto__);
});
range_field40058 = function(name__10173__auto__,value__10174__auto__){
switch(arguments.length){
case 1:
return range_field40058__1.call(this,name__10173__auto__);
case 2:
return range_field40058__2.call(this,name__10173__auto__,value__10174__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field40058.cljs$core$IFn$_invoke$arity$1 = range_field40058__1;
range_field40058.cljs$core$IFn$_invoke$arity$2 = range_field40058__2;
return range_field40058;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field40058);
/**
* Creates a search input field.
*/
sablono.core.search_field40059 = (function() {
var search_field40059 = null;
var search_field40059__1 = (function (name__10173__auto__){return search_field40059.cljs$core$IFn$_invoke$arity$2(name__10173__auto__,null);
});
var search_field40059__2 = (function (name__10173__auto__,value__10174__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__10173__auto__,value__10174__auto__);
});
search_field40059 = function(name__10173__auto__,value__10174__auto__){
switch(arguments.length){
case 1:
return search_field40059__1.call(this,name__10173__auto__);
case 2:
return search_field40059__2.call(this,name__10173__auto__,value__10174__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field40059.cljs$core$IFn$_invoke$arity$1 = search_field40059__1;
search_field40059.cljs$core$IFn$_invoke$arity$2 = search_field40059__2;
return search_field40059;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field40059);
/**
* Creates a tel input field.
*/
sablono.core.tel_field40060 = (function() {
var tel_field40060 = null;
var tel_field40060__1 = (function (name__10173__auto__){return tel_field40060.cljs$core$IFn$_invoke$arity$2(name__10173__auto__,null);
});
var tel_field40060__2 = (function (name__10173__auto__,value__10174__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__10173__auto__,value__10174__auto__);
});
tel_field40060 = function(name__10173__auto__,value__10174__auto__){
switch(arguments.length){
case 1:
return tel_field40060__1.call(this,name__10173__auto__);
case 2:
return tel_field40060__2.call(this,name__10173__auto__,value__10174__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field40060.cljs$core$IFn$_invoke$arity$1 = tel_field40060__1;
tel_field40060.cljs$core$IFn$_invoke$arity$2 = tel_field40060__2;
return tel_field40060;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field40060);
/**
* Creates a text input field.
*/
sablono.core.text_field40061 = (function() {
var text_field40061 = null;
var text_field40061__1 = (function (name__10173__auto__){return text_field40061.cljs$core$IFn$_invoke$arity$2(name__10173__auto__,null);
});
var text_field40061__2 = (function (name__10173__auto__,value__10174__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__10173__auto__,value__10174__auto__);
});
text_field40061 = function(name__10173__auto__,value__10174__auto__){
switch(arguments.length){
case 1:
return text_field40061__1.call(this,name__10173__auto__);
case 2:
return text_field40061__2.call(this,name__10173__auto__,value__10174__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field40061.cljs$core$IFn$_invoke$arity$1 = text_field40061__1;
text_field40061.cljs$core$IFn$_invoke$arity$2 = text_field40061__2;
return text_field40061;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field40061);
/**
* Creates a time input field.
*/
sablono.core.time_field40062 = (function() {
var time_field40062 = null;
var time_field40062__1 = (function (name__10173__auto__){return time_field40062.cljs$core$IFn$_invoke$arity$2(name__10173__auto__,null);
});
var time_field40062__2 = (function (name__10173__auto__,value__10174__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__10173__auto__,value__10174__auto__);
});
time_field40062 = function(name__10173__auto__,value__10174__auto__){
switch(arguments.length){
case 1:
return time_field40062__1.call(this,name__10173__auto__);
case 2:
return time_field40062__2.call(this,name__10173__auto__,value__10174__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field40062.cljs$core$IFn$_invoke$arity$1 = time_field40062__1;
time_field40062.cljs$core$IFn$_invoke$arity$2 = time_field40062__2;
return time_field40062;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field40062);
/**
* Creates a url input field.
*/
sablono.core.url_field40063 = (function() {
var url_field40063 = null;
var url_field40063__1 = (function (name__10173__auto__){return url_field40063.cljs$core$IFn$_invoke$arity$2(name__10173__auto__,null);
});
var url_field40063__2 = (function (name__10173__auto__,value__10174__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__10173__auto__,value__10174__auto__);
});
url_field40063 = function(name__10173__auto__,value__10174__auto__){
switch(arguments.length){
case 1:
return url_field40063__1.call(this,name__10173__auto__);
case 2:
return url_field40063__2.call(this,name__10173__auto__,value__10174__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field40063.cljs$core$IFn$_invoke$arity$1 = url_field40063__1;
url_field40063.cljs$core$IFn$_invoke$arity$2 = url_field40063__2;
return url_field40063;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field40063);
/**
* Creates a week input field.
*/
sablono.core.week_field40064 = (function() {
var week_field40064 = null;
var week_field40064__1 = (function (name__10173__auto__){return week_field40064.cljs$core$IFn$_invoke$arity$2(name__10173__auto__,null);
});
var week_field40064__2 = (function (name__10173__auto__,value__10174__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__10173__auto__,value__10174__auto__);
});
week_field40064 = function(name__10173__auto__,value__10174__auto__){
switch(arguments.length){
case 1:
return week_field40064__1.call(this,name__10173__auto__);
case 2:
return week_field40064__2.call(this,name__10173__auto__,value__10174__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field40064.cljs$core$IFn$_invoke$arity$1 = week_field40064__1;
week_field40064.cljs$core$IFn$_invoke$arity$2 = week_field40064__2;
return week_field40064;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field40064);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box40065 = (function() {
var check_box40065 = null;
var check_box40065__1 = (function (name){return check_box40065.cljs$core$IFn$_invoke$arity$2(name,null);
});
var check_box40065__2 = (function (name,checked_QMARK_){return check_box40065.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});
var check_box40065__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$699,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$679,"checkbox",cljs.core.constant$keyword$710,sablono.core.make_name(name),cljs.core.constant$keyword$681,sablono.core.make_id(name),cljs.core.constant$keyword$711,value,cljs.core.constant$keyword$712,checked_QMARK_], null)], null);
});
check_box40065 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box40065__1.call(this,name);
case 2:
return check_box40065__2.call(this,name,checked_QMARK_);
case 3:
return check_box40065__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box40065.cljs$core$IFn$_invoke$arity$1 = check_box40065__1;
check_box40065.cljs$core$IFn$_invoke$arity$2 = check_box40065__2;
check_box40065.cljs$core$IFn$_invoke$arity$3 = check_box40065__3;
return check_box40065;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box40065);
/**
* Creates a radio button.
*/
sablono.core.radio_button40066 = (function() {
var radio_button40066 = null;
var radio_button40066__1 = (function (group){return radio_button40066.cljs$core$IFn$_invoke$arity$2(group,null);
});
var radio_button40066__2 = (function (group,checked_QMARK_){return radio_button40066.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});
var radio_button40066__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$699,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$679,"radio",cljs.core.constant$keyword$710,sablono.core.make_name(group),cljs.core.constant$keyword$681,sablono.core.make_id((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0))))),cljs.core.constant$keyword$711,value,cljs.core.constant$keyword$712,checked_QMARK_], null)], null);
});
radio_button40066 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button40066__1.call(this,group);
case 2:
return radio_button40066__2.call(this,group,checked_QMARK_);
case 3:
return radio_button40066__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button40066.cljs$core$IFn$_invoke$arity$1 = radio_button40066__1;
radio_button40066.cljs$core$IFn$_invoke$arity$2 = radio_button40066__2;
radio_button40066.cljs$core$IFn$_invoke$arity$3 = radio_button40066__3;
return radio_button40066;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button40066);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options40067 = (function() {
var select_options40067 = null;
var select_options40067__1 = (function (coll){return select_options40067.cljs$core$IFn$_invoke$arity$2(coll,null);
});
var select_options40067__2 = (function (coll,selected){var iter__4268__auto__ = (function iter__40076(s__40077){return (new cljs.core.LazySeq(null,(function (){var s__40077__$1 = s__40077;while(true){
var temp__4126__auto__ = cljs.core.seq(s__40077__$1);if(temp__4126__auto__)
{var s__40077__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__40077__$2))
{var c__4266__auto__ = cljs.core.chunk_first(s__40077__$2);var size__4267__auto__ = cljs.core.count(c__4266__auto__);var b__40079 = cljs.core.chunk_buffer(size__4267__auto__);if((function (){var i__40078 = (0);while(true){
if((i__40078 < size__4267__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4266__auto__,i__40078);cljs.core.chunk_append(b__40079,((cljs.core.sequential_QMARK_(x))?(function (){var vec__40082 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40082,(0),null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40082,(1),null);var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40082,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$713,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$714,text], null),select_options40067.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$715,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$711,val,cljs.core.constant$keyword$716,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),cljs.core.constant$keyword$717,disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$715,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$716,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)));
{
var G__40084 = (i__40078 + (1));
i__40078 = G__40084;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__40079),iter__40076(cljs.core.chunk_rest(s__40077__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__40079),null);
}
} else
{var x = cljs.core.first(s__40077__$2);return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__40083 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40083,(0),null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40083,(1),null);var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40083,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$713,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$714,text], null),select_options40067.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$715,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$711,val,cljs.core.constant$keyword$716,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),cljs.core.constant$keyword$717,disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$715,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$716,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)),iter__40076(cljs.core.rest(s__40077__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4268__auto__(coll);
});
select_options40067 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options40067__1.call(this,coll);
case 2:
return select_options40067__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options40067.cljs$core$IFn$_invoke$arity$1 = select_options40067__1;
select_options40067.cljs$core$IFn$_invoke$arity$2 = select_options40067__2;
return select_options40067;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options40067);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down40085 = (function() {
var drop_down40085 = null;
var drop_down40085__2 = (function (name,options){return drop_down40085.cljs$core$IFn$_invoke$arity$3(name,options,null);
});
var drop_down40085__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$718,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$710,sablono.core.make_name(name),cljs.core.constant$keyword$681,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});
drop_down40085 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down40085__2.call(this,name,options);
case 3:
return drop_down40085__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down40085.cljs$core$IFn$_invoke$arity$2 = drop_down40085__2;
drop_down40085.cljs$core$IFn$_invoke$arity$3 = drop_down40085__3;
return drop_down40085;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down40085);
/**
* Creates a text area element.
*/
sablono.core.text_area40086 = (function() {
var text_area40086 = null;
var text_area40086__1 = (function (name){return text_area40086.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_area40086__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$698,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$710,sablono.core.make_name(name),cljs.core.constant$keyword$681,sablono.core.make_id(name),cljs.core.constant$keyword$711,value], null)], null);
});
text_area40086 = function(name,value){
switch(arguments.length){
case 1:
return text_area40086__1.call(this,name);
case 2:
return text_area40086__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area40086.cljs$core$IFn$_invoke$arity$1 = text_area40086__1;
text_area40086.cljs$core$IFn$_invoke$arity$2 = text_area40086__2;
return text_area40086;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area40086);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label40087 = (function label40087(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$714,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$695,sablono.core.make_id(name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs(sablono.core.label40087);
/**
* Creates a submit button.
*/
sablono.core.submit_button40088 = (function submit_button40088(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$699,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$679,"submit",cljs.core.constant$keyword$711,text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button40088);
/**
* Creates a form reset button.
*/
sablono.core.reset_button40089 = (function reset_button40089(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$699,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$679,"reset",cljs.core.constant$keyword$711,text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button40089);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to40090 = (function() { 
var form_to40090__delegate = function (p__40091,body){var vec__40093 = p__40091;var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40093,(0),null);var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40093,(1),null);var method_str = clojure.string.upper_case(cljs.core.name(method));var action_uri = sablono.util.to_uri(action);return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$719,null,cljs.core.constant$keyword$720,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$721,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$722,method_str,cljs.core.constant$keyword$723,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$721,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$722,"POST",cljs.core.constant$keyword$723,action_uri], null),(sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2("_method",method_str) : sablono.core.hidden_field.call(null,"_method",method_str))], null)),body));
};
var form_to40090 = function (p__40091,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to40090__delegate.call(this,p__40091,body);};
form_to40090.cljs$lang$maxFixedArity = 1;
form_to40090.cljs$lang$applyTo = (function (arglist__40094){
var p__40091 = cljs.core.first(arglist__40094);
var body = cljs.core.rest(arglist__40094);
return form_to40090__delegate(p__40091,body);
});
form_to40090.cljs$core$IFn$_invoke$arity$variadic = form_to40090__delegate;
return form_to40090;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to40090);
