// Compiled by ClojureScript 0.0-2268
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
var G__44081__delegate = function (args){if(cljs.core.map_QMARK_(cljs.core.first(args)))
{var vec__44080 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44080,(0),null);var body = cljs.core.nthnext(vec__44080,(1));if(cljs.core.map_QMARK_(cljs.core.first(body)))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__44081 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__44081__delegate.call(this,args);};
G__44081.cljs$lang$maxFixedArity = 0;
G__44081.cljs$lang$applyTo = (function (arglist__44082){
var args = cljs.core.seq(arglist__44082);
return G__44081__delegate(args);
});
G__44081.cljs$core$IFn$_invoke$arity$variadic = G__44081__delegate;
return G__44081;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4268__auto__ = (function iter__44087(s__44088){return (new cljs.core.LazySeq(null,(function (){var s__44088__$1 = s__44088;while(true){
var temp__4126__auto__ = cljs.core.seq(s__44088__$1);if(temp__4126__auto__)
{var s__44088__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__44088__$2))
{var c__4266__auto__ = cljs.core.chunk_first(s__44088__$2);var size__4267__auto__ = cljs.core.count(c__4266__auto__);var b__44090 = cljs.core.chunk_buffer(size__4267__auto__);if((function (){var i__44089 = (0);while(true){
if((i__44089 < size__4267__auto__))
{var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4266__auto__,i__44089);cljs.core.chunk_append(b__44090,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__44091 = (i__44089 + (1));
i__44089 = G__44091;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__44090),iter__44087(cljs.core.chunk_rest(s__44088__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__44090),null);
}
} else
{var args = cljs.core.first(s__44088__$2);return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__44087(cljs.core.rest(s__44088__$2)));
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
var include_css__delegate = function (styles){var iter__4268__auto__ = (function iter__44096(s__44097){return (new cljs.core.LazySeq(null,(function (){var s__44097__$1 = s__44097;while(true){
var temp__4126__auto__ = cljs.core.seq(s__44097__$1);if(temp__4126__auto__)
{var s__44097__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__44097__$2))
{var c__4266__auto__ = cljs.core.chunk_first(s__44097__$2);var size__4267__auto__ = cljs.core.count(c__4266__auto__);var b__44099 = cljs.core.chunk_buffer(size__4267__auto__);if((function (){var i__44098 = (0);while(true){
if((i__44098 < size__4267__auto__))
{var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4266__auto__,i__44098);cljs.core.chunk_append(b__44099,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$826,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$806,"text/css",cljs.core.constant$keyword$827,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$828,"stylesheet"], null)], null));
{
var G__44100 = (i__44098 + (1));
i__44098 = G__44100;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__44099),iter__44096(cljs.core.chunk_rest(s__44097__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__44099),null);
}
} else
{var style = cljs.core.first(s__44097__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$826,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$806,"text/css",cljs.core.constant$keyword$827,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$828,"stylesheet"], null)], null),iter__44096(cljs.core.rest(s__44097__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__44101){
var styles = cljs.core.seq(arglist__44101);
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
sablono.core.link_to44102 = (function() { 
var link_to44102__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$829,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$827,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
};
var link_to44102 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to44102__delegate.call(this,url,content);};
link_to44102.cljs$lang$maxFixedArity = 1;
link_to44102.cljs$lang$applyTo = (function (arglist__44103){
var url = cljs.core.first(arglist__44103);
var content = cljs.core.rest(arglist__44103);
return link_to44102__delegate(url,content);
});
link_to44102.cljs$core$IFn$_invoke$arity$variadic = link_to44102__delegate;
return link_to44102;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to44102);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to44104 = (function() { 
var mail_to44104__delegate = function (e_mail,p__44105){var vec__44107 = p__44105;var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44107,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$829,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$827,("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3543__auto__ = content;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to44104 = function (e_mail,var_args){
var p__44105 = null;if (arguments.length > 1) {
  p__44105 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to44104__delegate.call(this,e_mail,p__44105);};
mail_to44104.cljs$lang$maxFixedArity = 1;
mail_to44104.cljs$lang$applyTo = (function (arglist__44108){
var e_mail = cljs.core.first(arglist__44108);
var p__44105 = cljs.core.rest(arglist__44108);
return mail_to44104__delegate(e_mail,p__44105);
});
mail_to44104.cljs$core$IFn$_invoke$arity$variadic = mail_to44104__delegate;
return mail_to44104;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to44104);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list44109 = (function unordered_list44109(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$830,(function (){var iter__4268__auto__ = (function iter__44114(s__44115){return (new cljs.core.LazySeq(null,(function (){var s__44115__$1 = s__44115;while(true){
var temp__4126__auto__ = cljs.core.seq(s__44115__$1);if(temp__4126__auto__)
{var s__44115__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__44115__$2))
{var c__4266__auto__ = cljs.core.chunk_first(s__44115__$2);var size__4267__auto__ = cljs.core.count(c__4266__auto__);var b__44117 = cljs.core.chunk_buffer(size__4267__auto__);if((function (){var i__44116 = (0);while(true){
if((i__44116 < size__4267__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4266__auto__,i__44116);cljs.core.chunk_append(b__44117,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$831,x], null));
{
var G__44118 = (i__44116 + (1));
i__44116 = G__44118;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__44117),iter__44114(cljs.core.chunk_rest(s__44115__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__44117),null);
}
} else
{var x = cljs.core.first(s__44115__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$831,x], null),iter__44114(cljs.core.rest(s__44115__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list44109);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list44119 = (function ordered_list44119(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$832,(function (){var iter__4268__auto__ = (function iter__44124(s__44125){return (new cljs.core.LazySeq(null,(function (){var s__44125__$1 = s__44125;while(true){
var temp__4126__auto__ = cljs.core.seq(s__44125__$1);if(temp__4126__auto__)
{var s__44125__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__44125__$2))
{var c__4266__auto__ = cljs.core.chunk_first(s__44125__$2);var size__4267__auto__ = cljs.core.count(c__4266__auto__);var b__44127 = cljs.core.chunk_buffer(size__4267__auto__);if((function (){var i__44126 = (0);while(true){
if((i__44126 < size__4267__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4266__auto__,i__44126);cljs.core.chunk_append(b__44127,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$831,x], null));
{
var G__44128 = (i__44126 + (1));
i__44126 = G__44128;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__44127),iter__44124(cljs.core.chunk_rest(s__44125__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__44127),null);
}
} else
{var x = cljs.core.first(s__44125__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$831,x], null),iter__44124(cljs.core.rest(s__44125__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list44119);
/**
* Create an image element.
*/
sablono.core.image44129 = (function() {
var image44129 = null;
var image44129__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$833,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$834,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});
var image44129__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$833,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$834,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.constant$keyword$835,alt], null)], null);
});
image44129 = function(src,alt){
switch(arguments.length){
case 1:
return image44129__1.call(this,src);
case 2:
return image44129__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image44129.cljs$core$IFn$_invoke$arity$1 = image44129__1;
image44129.cljs$core$IFn$_invoke$arity$2 = image44129__2;
return image44129;
})()
;
sablono.core.image = sablono.core.wrap_attrs(sablono.core.image44129);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__44130_SHARP_,p2__44131_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__44130_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__44131_SHARP_)+"]");
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__44132_SHARP_,p2__44133_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__44132_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__44133_SHARP_));
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field_STAR_ = (function input_field_STAR_(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$825,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$806,type,cljs.core.constant$keyword$836,sablono.core.make_name(name),cljs.core.constant$keyword$808,sablono.core.make_id(name),cljs.core.constant$keyword$837,value], null)], null);
});
/**
* Creates a color input field.
*/
sablono.core.color_field44134 = (function() {
var color_field44134 = null;
var color_field44134__1 = (function (name__10462__auto__){return color_field44134.cljs$core$IFn$_invoke$arity$2(name__10462__auto__,null);
});
var color_field44134__2 = (function (name__10462__auto__,value__10463__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__10462__auto__,value__10463__auto__);
});
color_field44134 = function(name__10462__auto__,value__10463__auto__){
switch(arguments.length){
case 1:
return color_field44134__1.call(this,name__10462__auto__);
case 2:
return color_field44134__2.call(this,name__10462__auto__,value__10463__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field44134.cljs$core$IFn$_invoke$arity$1 = color_field44134__1;
color_field44134.cljs$core$IFn$_invoke$arity$2 = color_field44134__2;
return color_field44134;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field44134);
/**
* Creates a date input field.
*/
sablono.core.date_field44135 = (function() {
var date_field44135 = null;
var date_field44135__1 = (function (name__10462__auto__){return date_field44135.cljs$core$IFn$_invoke$arity$2(name__10462__auto__,null);
});
var date_field44135__2 = (function (name__10462__auto__,value__10463__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__10462__auto__,value__10463__auto__);
});
date_field44135 = function(name__10462__auto__,value__10463__auto__){
switch(arguments.length){
case 1:
return date_field44135__1.call(this,name__10462__auto__);
case 2:
return date_field44135__2.call(this,name__10462__auto__,value__10463__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field44135.cljs$core$IFn$_invoke$arity$1 = date_field44135__1;
date_field44135.cljs$core$IFn$_invoke$arity$2 = date_field44135__2;
return date_field44135;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field44135);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field44136 = (function() {
var datetime_field44136 = null;
var datetime_field44136__1 = (function (name__10462__auto__){return datetime_field44136.cljs$core$IFn$_invoke$arity$2(name__10462__auto__,null);
});
var datetime_field44136__2 = (function (name__10462__auto__,value__10463__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__10462__auto__,value__10463__auto__);
});
datetime_field44136 = function(name__10462__auto__,value__10463__auto__){
switch(arguments.length){
case 1:
return datetime_field44136__1.call(this,name__10462__auto__);
case 2:
return datetime_field44136__2.call(this,name__10462__auto__,value__10463__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field44136.cljs$core$IFn$_invoke$arity$1 = datetime_field44136__1;
datetime_field44136.cljs$core$IFn$_invoke$arity$2 = datetime_field44136__2;
return datetime_field44136;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field44136);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field44137 = (function() {
var datetime_local_field44137 = null;
var datetime_local_field44137__1 = (function (name__10462__auto__){return datetime_local_field44137.cljs$core$IFn$_invoke$arity$2(name__10462__auto__,null);
});
var datetime_local_field44137__2 = (function (name__10462__auto__,value__10463__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__10462__auto__,value__10463__auto__);
});
datetime_local_field44137 = function(name__10462__auto__,value__10463__auto__){
switch(arguments.length){
case 1:
return datetime_local_field44137__1.call(this,name__10462__auto__);
case 2:
return datetime_local_field44137__2.call(this,name__10462__auto__,value__10463__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field44137.cljs$core$IFn$_invoke$arity$1 = datetime_local_field44137__1;
datetime_local_field44137.cljs$core$IFn$_invoke$arity$2 = datetime_local_field44137__2;
return datetime_local_field44137;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field44137);
/**
* Creates a email input field.
*/
sablono.core.email_field44138 = (function() {
var email_field44138 = null;
var email_field44138__1 = (function (name__10462__auto__){return email_field44138.cljs$core$IFn$_invoke$arity$2(name__10462__auto__,null);
});
var email_field44138__2 = (function (name__10462__auto__,value__10463__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__10462__auto__,value__10463__auto__);
});
email_field44138 = function(name__10462__auto__,value__10463__auto__){
switch(arguments.length){
case 1:
return email_field44138__1.call(this,name__10462__auto__);
case 2:
return email_field44138__2.call(this,name__10462__auto__,value__10463__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field44138.cljs$core$IFn$_invoke$arity$1 = email_field44138__1;
email_field44138.cljs$core$IFn$_invoke$arity$2 = email_field44138__2;
return email_field44138;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field44138);
/**
* Creates a file input field.
*/
sablono.core.file_field44139 = (function() {
var file_field44139 = null;
var file_field44139__1 = (function (name__10462__auto__){return file_field44139.cljs$core$IFn$_invoke$arity$2(name__10462__auto__,null);
});
var file_field44139__2 = (function (name__10462__auto__,value__10463__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__10462__auto__,value__10463__auto__);
});
file_field44139 = function(name__10462__auto__,value__10463__auto__){
switch(arguments.length){
case 1:
return file_field44139__1.call(this,name__10462__auto__);
case 2:
return file_field44139__2.call(this,name__10462__auto__,value__10463__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field44139.cljs$core$IFn$_invoke$arity$1 = file_field44139__1;
file_field44139.cljs$core$IFn$_invoke$arity$2 = file_field44139__2;
return file_field44139;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field44139);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field44140 = (function() {
var hidden_field44140 = null;
var hidden_field44140__1 = (function (name__10462__auto__){return hidden_field44140.cljs$core$IFn$_invoke$arity$2(name__10462__auto__,null);
});
var hidden_field44140__2 = (function (name__10462__auto__,value__10463__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__10462__auto__,value__10463__auto__);
});
hidden_field44140 = function(name__10462__auto__,value__10463__auto__){
switch(arguments.length){
case 1:
return hidden_field44140__1.call(this,name__10462__auto__);
case 2:
return hidden_field44140__2.call(this,name__10462__auto__,value__10463__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field44140.cljs$core$IFn$_invoke$arity$1 = hidden_field44140__1;
hidden_field44140.cljs$core$IFn$_invoke$arity$2 = hidden_field44140__2;
return hidden_field44140;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field44140);
/**
* Creates a month input field.
*/
sablono.core.month_field44141 = (function() {
var month_field44141 = null;
var month_field44141__1 = (function (name__10462__auto__){return month_field44141.cljs$core$IFn$_invoke$arity$2(name__10462__auto__,null);
});
var month_field44141__2 = (function (name__10462__auto__,value__10463__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__10462__auto__,value__10463__auto__);
});
month_field44141 = function(name__10462__auto__,value__10463__auto__){
switch(arguments.length){
case 1:
return month_field44141__1.call(this,name__10462__auto__);
case 2:
return month_field44141__2.call(this,name__10462__auto__,value__10463__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field44141.cljs$core$IFn$_invoke$arity$1 = month_field44141__1;
month_field44141.cljs$core$IFn$_invoke$arity$2 = month_field44141__2;
return month_field44141;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field44141);
/**
* Creates a number input field.
*/
sablono.core.number_field44142 = (function() {
var number_field44142 = null;
var number_field44142__1 = (function (name__10462__auto__){return number_field44142.cljs$core$IFn$_invoke$arity$2(name__10462__auto__,null);
});
var number_field44142__2 = (function (name__10462__auto__,value__10463__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__10462__auto__,value__10463__auto__);
});
number_field44142 = function(name__10462__auto__,value__10463__auto__){
switch(arguments.length){
case 1:
return number_field44142__1.call(this,name__10462__auto__);
case 2:
return number_field44142__2.call(this,name__10462__auto__,value__10463__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field44142.cljs$core$IFn$_invoke$arity$1 = number_field44142__1;
number_field44142.cljs$core$IFn$_invoke$arity$2 = number_field44142__2;
return number_field44142;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field44142);
/**
* Creates a password input field.
*/
sablono.core.password_field44143 = (function() {
var password_field44143 = null;
var password_field44143__1 = (function (name__10462__auto__){return password_field44143.cljs$core$IFn$_invoke$arity$2(name__10462__auto__,null);
});
var password_field44143__2 = (function (name__10462__auto__,value__10463__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__10462__auto__,value__10463__auto__);
});
password_field44143 = function(name__10462__auto__,value__10463__auto__){
switch(arguments.length){
case 1:
return password_field44143__1.call(this,name__10462__auto__);
case 2:
return password_field44143__2.call(this,name__10462__auto__,value__10463__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field44143.cljs$core$IFn$_invoke$arity$1 = password_field44143__1;
password_field44143.cljs$core$IFn$_invoke$arity$2 = password_field44143__2;
return password_field44143;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field44143);
/**
* Creates a range input field.
*/
sablono.core.range_field44144 = (function() {
var range_field44144 = null;
var range_field44144__1 = (function (name__10462__auto__){return range_field44144.cljs$core$IFn$_invoke$arity$2(name__10462__auto__,null);
});
var range_field44144__2 = (function (name__10462__auto__,value__10463__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__10462__auto__,value__10463__auto__);
});
range_field44144 = function(name__10462__auto__,value__10463__auto__){
switch(arguments.length){
case 1:
return range_field44144__1.call(this,name__10462__auto__);
case 2:
return range_field44144__2.call(this,name__10462__auto__,value__10463__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field44144.cljs$core$IFn$_invoke$arity$1 = range_field44144__1;
range_field44144.cljs$core$IFn$_invoke$arity$2 = range_field44144__2;
return range_field44144;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field44144);
/**
* Creates a search input field.
*/
sablono.core.search_field44145 = (function() {
var search_field44145 = null;
var search_field44145__1 = (function (name__10462__auto__){return search_field44145.cljs$core$IFn$_invoke$arity$2(name__10462__auto__,null);
});
var search_field44145__2 = (function (name__10462__auto__,value__10463__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__10462__auto__,value__10463__auto__);
});
search_field44145 = function(name__10462__auto__,value__10463__auto__){
switch(arguments.length){
case 1:
return search_field44145__1.call(this,name__10462__auto__);
case 2:
return search_field44145__2.call(this,name__10462__auto__,value__10463__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field44145.cljs$core$IFn$_invoke$arity$1 = search_field44145__1;
search_field44145.cljs$core$IFn$_invoke$arity$2 = search_field44145__2;
return search_field44145;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field44145);
/**
* Creates a tel input field.
*/
sablono.core.tel_field44146 = (function() {
var tel_field44146 = null;
var tel_field44146__1 = (function (name__10462__auto__){return tel_field44146.cljs$core$IFn$_invoke$arity$2(name__10462__auto__,null);
});
var tel_field44146__2 = (function (name__10462__auto__,value__10463__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__10462__auto__,value__10463__auto__);
});
tel_field44146 = function(name__10462__auto__,value__10463__auto__){
switch(arguments.length){
case 1:
return tel_field44146__1.call(this,name__10462__auto__);
case 2:
return tel_field44146__2.call(this,name__10462__auto__,value__10463__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field44146.cljs$core$IFn$_invoke$arity$1 = tel_field44146__1;
tel_field44146.cljs$core$IFn$_invoke$arity$2 = tel_field44146__2;
return tel_field44146;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field44146);
/**
* Creates a text input field.
*/
sablono.core.text_field44147 = (function() {
var text_field44147 = null;
var text_field44147__1 = (function (name__10462__auto__){return text_field44147.cljs$core$IFn$_invoke$arity$2(name__10462__auto__,null);
});
var text_field44147__2 = (function (name__10462__auto__,value__10463__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__10462__auto__,value__10463__auto__);
});
text_field44147 = function(name__10462__auto__,value__10463__auto__){
switch(arguments.length){
case 1:
return text_field44147__1.call(this,name__10462__auto__);
case 2:
return text_field44147__2.call(this,name__10462__auto__,value__10463__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field44147.cljs$core$IFn$_invoke$arity$1 = text_field44147__1;
text_field44147.cljs$core$IFn$_invoke$arity$2 = text_field44147__2;
return text_field44147;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field44147);
/**
* Creates a time input field.
*/
sablono.core.time_field44148 = (function() {
var time_field44148 = null;
var time_field44148__1 = (function (name__10462__auto__){return time_field44148.cljs$core$IFn$_invoke$arity$2(name__10462__auto__,null);
});
var time_field44148__2 = (function (name__10462__auto__,value__10463__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__10462__auto__,value__10463__auto__);
});
time_field44148 = function(name__10462__auto__,value__10463__auto__){
switch(arguments.length){
case 1:
return time_field44148__1.call(this,name__10462__auto__);
case 2:
return time_field44148__2.call(this,name__10462__auto__,value__10463__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field44148.cljs$core$IFn$_invoke$arity$1 = time_field44148__1;
time_field44148.cljs$core$IFn$_invoke$arity$2 = time_field44148__2;
return time_field44148;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field44148);
/**
* Creates a url input field.
*/
sablono.core.url_field44149 = (function() {
var url_field44149 = null;
var url_field44149__1 = (function (name__10462__auto__){return url_field44149.cljs$core$IFn$_invoke$arity$2(name__10462__auto__,null);
});
var url_field44149__2 = (function (name__10462__auto__,value__10463__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__10462__auto__,value__10463__auto__);
});
url_field44149 = function(name__10462__auto__,value__10463__auto__){
switch(arguments.length){
case 1:
return url_field44149__1.call(this,name__10462__auto__);
case 2:
return url_field44149__2.call(this,name__10462__auto__,value__10463__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field44149.cljs$core$IFn$_invoke$arity$1 = url_field44149__1;
url_field44149.cljs$core$IFn$_invoke$arity$2 = url_field44149__2;
return url_field44149;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field44149);
/**
* Creates a week input field.
*/
sablono.core.week_field44150 = (function() {
var week_field44150 = null;
var week_field44150__1 = (function (name__10462__auto__){return week_field44150.cljs$core$IFn$_invoke$arity$2(name__10462__auto__,null);
});
var week_field44150__2 = (function (name__10462__auto__,value__10463__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__10462__auto__,value__10463__auto__);
});
week_field44150 = function(name__10462__auto__,value__10463__auto__){
switch(arguments.length){
case 1:
return week_field44150__1.call(this,name__10462__auto__);
case 2:
return week_field44150__2.call(this,name__10462__auto__,value__10463__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field44150.cljs$core$IFn$_invoke$arity$1 = week_field44150__1;
week_field44150.cljs$core$IFn$_invoke$arity$2 = week_field44150__2;
return week_field44150;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field44150);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box44151 = (function() {
var check_box44151 = null;
var check_box44151__1 = (function (name){return check_box44151.cljs$core$IFn$_invoke$arity$2(name,null);
});
var check_box44151__2 = (function (name,checked_QMARK_){return check_box44151.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});
var check_box44151__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$825,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$806,"checkbox",cljs.core.constant$keyword$836,sablono.core.make_name(name),cljs.core.constant$keyword$808,sablono.core.make_id(name),cljs.core.constant$keyword$837,value,cljs.core.constant$keyword$838,checked_QMARK_], null)], null);
});
check_box44151 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box44151__1.call(this,name);
case 2:
return check_box44151__2.call(this,name,checked_QMARK_);
case 3:
return check_box44151__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box44151.cljs$core$IFn$_invoke$arity$1 = check_box44151__1;
check_box44151.cljs$core$IFn$_invoke$arity$2 = check_box44151__2;
check_box44151.cljs$core$IFn$_invoke$arity$3 = check_box44151__3;
return check_box44151;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box44151);
/**
* Creates a radio button.
*/
sablono.core.radio_button44152 = (function() {
var radio_button44152 = null;
var radio_button44152__1 = (function (group){return radio_button44152.cljs$core$IFn$_invoke$arity$2(group,null);
});
var radio_button44152__2 = (function (group,checked_QMARK_){return radio_button44152.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});
var radio_button44152__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$825,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$806,"radio",cljs.core.constant$keyword$836,sablono.core.make_name(group),cljs.core.constant$keyword$808,sablono.core.make_id((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0))))),cljs.core.constant$keyword$837,value,cljs.core.constant$keyword$838,checked_QMARK_], null)], null);
});
radio_button44152 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button44152__1.call(this,group);
case 2:
return radio_button44152__2.call(this,group,checked_QMARK_);
case 3:
return radio_button44152__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button44152.cljs$core$IFn$_invoke$arity$1 = radio_button44152__1;
radio_button44152.cljs$core$IFn$_invoke$arity$2 = radio_button44152__2;
radio_button44152.cljs$core$IFn$_invoke$arity$3 = radio_button44152__3;
return radio_button44152;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button44152);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options44153 = (function() {
var select_options44153 = null;
var select_options44153__1 = (function (coll){return select_options44153.cljs$core$IFn$_invoke$arity$2(coll,null);
});
var select_options44153__2 = (function (coll,selected){var iter__4268__auto__ = (function iter__44162(s__44163){return (new cljs.core.LazySeq(null,(function (){var s__44163__$1 = s__44163;while(true){
var temp__4126__auto__ = cljs.core.seq(s__44163__$1);if(temp__4126__auto__)
{var s__44163__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__44163__$2))
{var c__4266__auto__ = cljs.core.chunk_first(s__44163__$2);var size__4267__auto__ = cljs.core.count(c__4266__auto__);var b__44165 = cljs.core.chunk_buffer(size__4267__auto__);if((function (){var i__44164 = (0);while(true){
if((i__44164 < size__4267__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4266__auto__,i__44164);cljs.core.chunk_append(b__44165,((cljs.core.sequential_QMARK_(x))?(function (){var vec__44168 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44168,(0),null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44168,(1),null);var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44168,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$839,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$840,text], null),select_options44153.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$841,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$837,val,cljs.core.constant$keyword$842,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),cljs.core.constant$keyword$843,disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$841,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$842,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)));
{
var G__44170 = (i__44164 + (1));
i__44164 = G__44170;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__44165),iter__44162(cljs.core.chunk_rest(s__44163__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__44165),null);
}
} else
{var x = cljs.core.first(s__44163__$2);return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__44169 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44169,(0),null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44169,(1),null);var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44169,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$839,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$840,text], null),select_options44153.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$841,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$837,val,cljs.core.constant$keyword$842,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),cljs.core.constant$keyword$843,disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$841,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$842,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)),iter__44162(cljs.core.rest(s__44163__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4268__auto__(coll);
});
select_options44153 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options44153__1.call(this,coll);
case 2:
return select_options44153__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options44153.cljs$core$IFn$_invoke$arity$1 = select_options44153__1;
select_options44153.cljs$core$IFn$_invoke$arity$2 = select_options44153__2;
return select_options44153;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options44153);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down44171 = (function() {
var drop_down44171 = null;
var drop_down44171__2 = (function (name,options){return drop_down44171.cljs$core$IFn$_invoke$arity$3(name,options,null);
});
var drop_down44171__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$844,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$836,sablono.core.make_name(name),cljs.core.constant$keyword$808,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});
drop_down44171 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down44171__2.call(this,name,options);
case 3:
return drop_down44171__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down44171.cljs$core$IFn$_invoke$arity$2 = drop_down44171__2;
drop_down44171.cljs$core$IFn$_invoke$arity$3 = drop_down44171__3;
return drop_down44171;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down44171);
/**
* Creates a text area element.
*/
sablono.core.text_area44172 = (function() {
var text_area44172 = null;
var text_area44172__1 = (function (name){return text_area44172.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_area44172__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$824,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$836,sablono.core.make_name(name),cljs.core.constant$keyword$808,sablono.core.make_id(name),cljs.core.constant$keyword$837,value], null)], null);
});
text_area44172 = function(name,value){
switch(arguments.length){
case 1:
return text_area44172__1.call(this,name);
case 2:
return text_area44172__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area44172.cljs$core$IFn$_invoke$arity$1 = text_area44172__1;
text_area44172.cljs$core$IFn$_invoke$arity$2 = text_area44172__2;
return text_area44172;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area44172);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label44173 = (function label44173(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$840,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$822,sablono.core.make_id(name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs(sablono.core.label44173);
/**
* Creates a submit button.
*/
sablono.core.submit_button44174 = (function submit_button44174(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$825,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$806,"submit",cljs.core.constant$keyword$837,text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button44174);
/**
* Creates a form reset button.
*/
sablono.core.reset_button44175 = (function reset_button44175(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$825,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$806,"reset",cljs.core.constant$keyword$837,text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button44175);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to44176 = (function() { 
var form_to44176__delegate = function (p__44177,body){var vec__44179 = p__44177;var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44179,(0),null);var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44179,(1),null);var method_str = clojure.string.upper_case(cljs.core.name(method));var action_uri = sablono.util.to_uri(action);return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$845,null,cljs.core.constant$keyword$846,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$847,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$788,method_str,cljs.core.constant$keyword$848,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$847,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$788,"POST",cljs.core.constant$keyword$848,action_uri], null),(sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2("_method",method_str) : sablono.core.hidden_field.call(null,"_method",method_str))], null)),body));
};
var form_to44176 = function (p__44177,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to44176__delegate.call(this,p__44177,body);};
form_to44176.cljs$lang$maxFixedArity = 1;
form_to44176.cljs$lang$applyTo = (function (arglist__44180){
var p__44177 = cljs.core.first(arglist__44180);
var body = cljs.core.rest(arglist__44180);
return form_to44176__delegate(p__44177,body);
});
form_to44176.cljs$core$IFn$_invoke$arity$variadic = form_to44176__delegate;
return form_to44176;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to44176);
