// Compiled by ClojureScript 0.0-2356
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
var G__68066__delegate = function (args){if(cljs.core.map_QMARK_(cljs.core.first(args)))
{var vec__68065 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68065,(0),null);var body = cljs.core.nthnext(vec__68065,(1));if(cljs.core.map_QMARK_(cljs.core.first(body)))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__68066 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__68066__delegate.call(this,args);};
G__68066.cljs$lang$maxFixedArity = 0;
G__68066.cljs$lang$applyTo = (function (arglist__68067){
var args = cljs.core.seq(arglist__68067);
return G__68066__delegate(args);
});
G__68066.cljs$core$IFn$_invoke$arity$variadic = G__68066__delegate;
return G__68066;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4375__auto__ = (function iter__68074(s__68075){return (new cljs.core.LazySeq(null,(function (){var s__68075__$1 = s__68075;while(true){
var temp__4126__auto__ = cljs.core.seq(s__68075__$1);if(temp__4126__auto__)
{var s__68075__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__68075__$2))
{var c__4373__auto__ = cljs.core.chunk_first(s__68075__$2);var size__4374__auto__ = cljs.core.count(c__4373__auto__);var b__68077 = cljs.core.chunk_buffer(size__4374__auto__);if((function (){var i__68076 = (0);while(true){
if((i__68076 < size__4374__auto__))
{var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4373__auto__,i__68076);cljs.core.chunk_append(b__68077,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__68080 = (i__68076 + (1));
i__68076 = G__68080;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__68077),iter__68074(cljs.core.chunk_rest(s__68075__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__68077),null);
}
} else
{var args = cljs.core.first(s__68075__$2);return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__68074(cljs.core.rest(s__68075__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4375__auto__(arglists);
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
var include_css__delegate = function (styles){var iter__4375__auto__ = (function iter__68087(s__68088){return (new cljs.core.LazySeq(null,(function (){var s__68088__$1 = s__68088;while(true){
var temp__4126__auto__ = cljs.core.seq(s__68088__$1);if(temp__4126__auto__)
{var s__68088__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__68088__$2))
{var c__4373__auto__ = cljs.core.chunk_first(s__68088__$2);var size__4374__auto__ = cljs.core.count(c__4373__auto__);var b__68090 = cljs.core.chunk_buffer(size__4374__auto__);if((function (){var i__68089 = (0);while(true){
if((i__68089 < size__4374__auto__))
{var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4373__auto__,i__68089);cljs.core.chunk_append(b__68090,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1264,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1160,"text/css",cljs.core.constant$keyword$1265,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$1266,"stylesheet"], null)], null));
{
var G__68093 = (i__68089 + (1));
i__68089 = G__68093;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__68090),iter__68087(cljs.core.chunk_rest(s__68088__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__68090),null);
}
} else
{var style = cljs.core.first(s__68088__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1264,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1160,"text/css",cljs.core.constant$keyword$1265,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$1266,"stylesheet"], null)], null),iter__68087(cljs.core.rest(s__68088__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4375__auto__(styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__68094){
var styles = cljs.core.seq(arglist__68094);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Include the JavaScript library at `src`.
*/
sablono.core.include_js = (function include_js(src){var G__68099 = (function (){return goog.dom.getDocument();
})().body;var G__68100 = (function (){var G__68101 = "script";var G__68102 = {"src": src};return goog.dom.createDom(G__68101,G__68102);
})();return goog.dom.appendChild(G__68099,G__68100);
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
sablono.core.link_to68103 = (function() { 
var link_to68103__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1267,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1265,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
};
var link_to68103 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to68103__delegate.call(this,url,content);};
link_to68103.cljs$lang$maxFixedArity = 1;
link_to68103.cljs$lang$applyTo = (function (arglist__68104){
var url = cljs.core.first(arglist__68104);
var content = cljs.core.rest(arglist__68104);
return link_to68103__delegate(url,content);
});
link_to68103.cljs$core$IFn$_invoke$arity$variadic = link_to68103__delegate;
return link_to68103;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to68103);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to68105 = (function() { 
var mail_to68105__delegate = function (e_mail,p__68106){var vec__68108 = p__68106;var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68108,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1267,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1265,("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3637__auto__ = content;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to68105 = function (e_mail,var_args){
var p__68106 = null;if (arguments.length > 1) {
  p__68106 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to68105__delegate.call(this,e_mail,p__68106);};
mail_to68105.cljs$lang$maxFixedArity = 1;
mail_to68105.cljs$lang$applyTo = (function (arglist__68109){
var e_mail = cljs.core.first(arglist__68109);
var p__68106 = cljs.core.rest(arglist__68109);
return mail_to68105__delegate(e_mail,p__68106);
});
mail_to68105.cljs$core$IFn$_invoke$arity$variadic = mail_to68105__delegate;
return mail_to68105;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to68105);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list68110 = (function unordered_list68110(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1268,(function (){var iter__4375__auto__ = (function iter__68117(s__68118){return (new cljs.core.LazySeq(null,(function (){var s__68118__$1 = s__68118;while(true){
var temp__4126__auto__ = cljs.core.seq(s__68118__$1);if(temp__4126__auto__)
{var s__68118__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__68118__$2))
{var c__4373__auto__ = cljs.core.chunk_first(s__68118__$2);var size__4374__auto__ = cljs.core.count(c__4373__auto__);var b__68120 = cljs.core.chunk_buffer(size__4374__auto__);if((function (){var i__68119 = (0);while(true){
if((i__68119 < size__4374__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4373__auto__,i__68119);cljs.core.chunk_append(b__68120,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1269,x], null));
{
var G__68123 = (i__68119 + (1));
i__68119 = G__68123;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__68120),iter__68117(cljs.core.chunk_rest(s__68118__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__68120),null);
}
} else
{var x = cljs.core.first(s__68118__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1269,x], null),iter__68117(cljs.core.rest(s__68118__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4375__auto__(coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list68110);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list68124 = (function ordered_list68124(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1270,(function (){var iter__4375__auto__ = (function iter__68131(s__68132){return (new cljs.core.LazySeq(null,(function (){var s__68132__$1 = s__68132;while(true){
var temp__4126__auto__ = cljs.core.seq(s__68132__$1);if(temp__4126__auto__)
{var s__68132__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__68132__$2))
{var c__4373__auto__ = cljs.core.chunk_first(s__68132__$2);var size__4374__auto__ = cljs.core.count(c__4373__auto__);var b__68134 = cljs.core.chunk_buffer(size__4374__auto__);if((function (){var i__68133 = (0);while(true){
if((i__68133 < size__4374__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4373__auto__,i__68133);cljs.core.chunk_append(b__68134,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1269,x], null));
{
var G__68137 = (i__68133 + (1));
i__68133 = G__68137;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__68134),iter__68131(cljs.core.chunk_rest(s__68132__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__68134),null);
}
} else
{var x = cljs.core.first(s__68132__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1269,x], null),iter__68131(cljs.core.rest(s__68132__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4375__auto__(coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list68124);
/**
* Create an image element.
*/
sablono.core.image68138 = (function() {
var image68138 = null;
var image68138__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1271,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1272,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});
var image68138__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1271,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1272,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.constant$keyword$1273,alt], null)], null);
});
image68138 = function(src,alt){
switch(arguments.length){
case 1:
return image68138__1.call(this,src);
case 2:
return image68138__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image68138.cljs$core$IFn$_invoke$arity$1 = image68138__1;
image68138.cljs$core$IFn$_invoke$arity$2 = image68138__2;
return image68138;
})()
;
sablono.core.image = sablono.core.wrap_attrs(sablono.core.image68138);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__68139_SHARP_,p2__68140_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__68139_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__68140_SHARP_)+"]");
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__68141_SHARP_,p2__68142_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__68141_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__68142_SHARP_));
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field_STAR_ = (function input_field_STAR_(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1263,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1160,type,cljs.core.constant$keyword$1274,sablono.core.make_name(name),cljs.core.constant$keyword$1162,sablono.core.make_id(name),cljs.core.constant$keyword$1275,value], null)], null);
});
/**
* Creates a color input field.
*/
sablono.core.color_field68143 = (function() {
var color_field68143 = null;
var color_field68143__1 = (function (name__11139__auto__){return color_field68143.cljs$core$IFn$_invoke$arity$2(name__11139__auto__,null);
});
var color_field68143__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__11139__auto__,value__11140__auto__);
});
color_field68143 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return color_field68143__1.call(this,name__11139__auto__);
case 2:
return color_field68143__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field68143.cljs$core$IFn$_invoke$arity$1 = color_field68143__1;
color_field68143.cljs$core$IFn$_invoke$arity$2 = color_field68143__2;
return color_field68143;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field68143);
/**
* Creates a date input field.
*/
sablono.core.date_field68146 = (function() {
var date_field68146 = null;
var date_field68146__1 = (function (name__11139__auto__){return date_field68146.cljs$core$IFn$_invoke$arity$2(name__11139__auto__,null);
});
var date_field68146__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__11139__auto__,value__11140__auto__);
});
date_field68146 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return date_field68146__1.call(this,name__11139__auto__);
case 2:
return date_field68146__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field68146.cljs$core$IFn$_invoke$arity$1 = date_field68146__1;
date_field68146.cljs$core$IFn$_invoke$arity$2 = date_field68146__2;
return date_field68146;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field68146);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field68149 = (function() {
var datetime_field68149 = null;
var datetime_field68149__1 = (function (name__11139__auto__){return datetime_field68149.cljs$core$IFn$_invoke$arity$2(name__11139__auto__,null);
});
var datetime_field68149__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__11139__auto__,value__11140__auto__);
});
datetime_field68149 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return datetime_field68149__1.call(this,name__11139__auto__);
case 2:
return datetime_field68149__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field68149.cljs$core$IFn$_invoke$arity$1 = datetime_field68149__1;
datetime_field68149.cljs$core$IFn$_invoke$arity$2 = datetime_field68149__2;
return datetime_field68149;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field68149);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field68152 = (function() {
var datetime_local_field68152 = null;
var datetime_local_field68152__1 = (function (name__11139__auto__){return datetime_local_field68152.cljs$core$IFn$_invoke$arity$2(name__11139__auto__,null);
});
var datetime_local_field68152__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__11139__auto__,value__11140__auto__);
});
datetime_local_field68152 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return datetime_local_field68152__1.call(this,name__11139__auto__);
case 2:
return datetime_local_field68152__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field68152.cljs$core$IFn$_invoke$arity$1 = datetime_local_field68152__1;
datetime_local_field68152.cljs$core$IFn$_invoke$arity$2 = datetime_local_field68152__2;
return datetime_local_field68152;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field68152);
/**
* Creates a email input field.
*/
sablono.core.email_field68155 = (function() {
var email_field68155 = null;
var email_field68155__1 = (function (name__11139__auto__){return email_field68155.cljs$core$IFn$_invoke$arity$2(name__11139__auto__,null);
});
var email_field68155__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__11139__auto__,value__11140__auto__);
});
email_field68155 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return email_field68155__1.call(this,name__11139__auto__);
case 2:
return email_field68155__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field68155.cljs$core$IFn$_invoke$arity$1 = email_field68155__1;
email_field68155.cljs$core$IFn$_invoke$arity$2 = email_field68155__2;
return email_field68155;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field68155);
/**
* Creates a file input field.
*/
sablono.core.file_field68158 = (function() {
var file_field68158 = null;
var file_field68158__1 = (function (name__11139__auto__){return file_field68158.cljs$core$IFn$_invoke$arity$2(name__11139__auto__,null);
});
var file_field68158__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__11139__auto__,value__11140__auto__);
});
file_field68158 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return file_field68158__1.call(this,name__11139__auto__);
case 2:
return file_field68158__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field68158.cljs$core$IFn$_invoke$arity$1 = file_field68158__1;
file_field68158.cljs$core$IFn$_invoke$arity$2 = file_field68158__2;
return file_field68158;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field68158);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field68161 = (function() {
var hidden_field68161 = null;
var hidden_field68161__1 = (function (name__11139__auto__){return hidden_field68161.cljs$core$IFn$_invoke$arity$2(name__11139__auto__,null);
});
var hidden_field68161__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__11139__auto__,value__11140__auto__);
});
hidden_field68161 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return hidden_field68161__1.call(this,name__11139__auto__);
case 2:
return hidden_field68161__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field68161.cljs$core$IFn$_invoke$arity$1 = hidden_field68161__1;
hidden_field68161.cljs$core$IFn$_invoke$arity$2 = hidden_field68161__2;
return hidden_field68161;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field68161);
/**
* Creates a month input field.
*/
sablono.core.month_field68164 = (function() {
var month_field68164 = null;
var month_field68164__1 = (function (name__11139__auto__){return month_field68164.cljs$core$IFn$_invoke$arity$2(name__11139__auto__,null);
});
var month_field68164__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__11139__auto__,value__11140__auto__);
});
month_field68164 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return month_field68164__1.call(this,name__11139__auto__);
case 2:
return month_field68164__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field68164.cljs$core$IFn$_invoke$arity$1 = month_field68164__1;
month_field68164.cljs$core$IFn$_invoke$arity$2 = month_field68164__2;
return month_field68164;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field68164);
/**
* Creates a number input field.
*/
sablono.core.number_field68167 = (function() {
var number_field68167 = null;
var number_field68167__1 = (function (name__11139__auto__){return number_field68167.cljs$core$IFn$_invoke$arity$2(name__11139__auto__,null);
});
var number_field68167__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__11139__auto__,value__11140__auto__);
});
number_field68167 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return number_field68167__1.call(this,name__11139__auto__);
case 2:
return number_field68167__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field68167.cljs$core$IFn$_invoke$arity$1 = number_field68167__1;
number_field68167.cljs$core$IFn$_invoke$arity$2 = number_field68167__2;
return number_field68167;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field68167);
/**
* Creates a password input field.
*/
sablono.core.password_field68170 = (function() {
var password_field68170 = null;
var password_field68170__1 = (function (name__11139__auto__){return password_field68170.cljs$core$IFn$_invoke$arity$2(name__11139__auto__,null);
});
var password_field68170__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__11139__auto__,value__11140__auto__);
});
password_field68170 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return password_field68170__1.call(this,name__11139__auto__);
case 2:
return password_field68170__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field68170.cljs$core$IFn$_invoke$arity$1 = password_field68170__1;
password_field68170.cljs$core$IFn$_invoke$arity$2 = password_field68170__2;
return password_field68170;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field68170);
/**
* Creates a range input field.
*/
sablono.core.range_field68173 = (function() {
var range_field68173 = null;
var range_field68173__1 = (function (name__11139__auto__){return range_field68173.cljs$core$IFn$_invoke$arity$2(name__11139__auto__,null);
});
var range_field68173__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__11139__auto__,value__11140__auto__);
});
range_field68173 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return range_field68173__1.call(this,name__11139__auto__);
case 2:
return range_field68173__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field68173.cljs$core$IFn$_invoke$arity$1 = range_field68173__1;
range_field68173.cljs$core$IFn$_invoke$arity$2 = range_field68173__2;
return range_field68173;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field68173);
/**
* Creates a search input field.
*/
sablono.core.search_field68176 = (function() {
var search_field68176 = null;
var search_field68176__1 = (function (name__11139__auto__){return search_field68176.cljs$core$IFn$_invoke$arity$2(name__11139__auto__,null);
});
var search_field68176__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__11139__auto__,value__11140__auto__);
});
search_field68176 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return search_field68176__1.call(this,name__11139__auto__);
case 2:
return search_field68176__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field68176.cljs$core$IFn$_invoke$arity$1 = search_field68176__1;
search_field68176.cljs$core$IFn$_invoke$arity$2 = search_field68176__2;
return search_field68176;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field68176);
/**
* Creates a tel input field.
*/
sablono.core.tel_field68179 = (function() {
var tel_field68179 = null;
var tel_field68179__1 = (function (name__11139__auto__){return tel_field68179.cljs$core$IFn$_invoke$arity$2(name__11139__auto__,null);
});
var tel_field68179__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__11139__auto__,value__11140__auto__);
});
tel_field68179 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return tel_field68179__1.call(this,name__11139__auto__);
case 2:
return tel_field68179__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field68179.cljs$core$IFn$_invoke$arity$1 = tel_field68179__1;
tel_field68179.cljs$core$IFn$_invoke$arity$2 = tel_field68179__2;
return tel_field68179;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field68179);
/**
* Creates a text input field.
*/
sablono.core.text_field68182 = (function() {
var text_field68182 = null;
var text_field68182__1 = (function (name__11139__auto__){return text_field68182.cljs$core$IFn$_invoke$arity$2(name__11139__auto__,null);
});
var text_field68182__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__11139__auto__,value__11140__auto__);
});
text_field68182 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return text_field68182__1.call(this,name__11139__auto__);
case 2:
return text_field68182__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field68182.cljs$core$IFn$_invoke$arity$1 = text_field68182__1;
text_field68182.cljs$core$IFn$_invoke$arity$2 = text_field68182__2;
return text_field68182;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field68182);
/**
* Creates a time input field.
*/
sablono.core.time_field68185 = (function() {
var time_field68185 = null;
var time_field68185__1 = (function (name__11139__auto__){return time_field68185.cljs$core$IFn$_invoke$arity$2(name__11139__auto__,null);
});
var time_field68185__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__11139__auto__,value__11140__auto__);
});
time_field68185 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return time_field68185__1.call(this,name__11139__auto__);
case 2:
return time_field68185__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field68185.cljs$core$IFn$_invoke$arity$1 = time_field68185__1;
time_field68185.cljs$core$IFn$_invoke$arity$2 = time_field68185__2;
return time_field68185;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field68185);
/**
* Creates a url input field.
*/
sablono.core.url_field68188 = (function() {
var url_field68188 = null;
var url_field68188__1 = (function (name__11139__auto__){return url_field68188.cljs$core$IFn$_invoke$arity$2(name__11139__auto__,null);
});
var url_field68188__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__11139__auto__,value__11140__auto__);
});
url_field68188 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return url_field68188__1.call(this,name__11139__auto__);
case 2:
return url_field68188__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field68188.cljs$core$IFn$_invoke$arity$1 = url_field68188__1;
url_field68188.cljs$core$IFn$_invoke$arity$2 = url_field68188__2;
return url_field68188;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field68188);
/**
* Creates a week input field.
*/
sablono.core.week_field68191 = (function() {
var week_field68191 = null;
var week_field68191__1 = (function (name__11139__auto__){return week_field68191.cljs$core$IFn$_invoke$arity$2(name__11139__auto__,null);
});
var week_field68191__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__11139__auto__,value__11140__auto__);
});
week_field68191 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return week_field68191__1.call(this,name__11139__auto__);
case 2:
return week_field68191__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field68191.cljs$core$IFn$_invoke$arity$1 = week_field68191__1;
week_field68191.cljs$core$IFn$_invoke$arity$2 = week_field68191__2;
return week_field68191;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field68191);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box68194 = (function() {
var check_box68194 = null;
var check_box68194__1 = (function (name){return check_box68194.cljs$core$IFn$_invoke$arity$2(name,null);
});
var check_box68194__2 = (function (name,checked_QMARK_){return check_box68194.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});
var check_box68194__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1263,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$1160,"checkbox",cljs.core.constant$keyword$1274,sablono.core.make_name(name),cljs.core.constant$keyword$1162,sablono.core.make_id(name),cljs.core.constant$keyword$1275,value,cljs.core.constant$keyword$1276,checked_QMARK_], null)], null);
});
check_box68194 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box68194__1.call(this,name);
case 2:
return check_box68194__2.call(this,name,checked_QMARK_);
case 3:
return check_box68194__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box68194.cljs$core$IFn$_invoke$arity$1 = check_box68194__1;
check_box68194.cljs$core$IFn$_invoke$arity$2 = check_box68194__2;
check_box68194.cljs$core$IFn$_invoke$arity$3 = check_box68194__3;
return check_box68194;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box68194);
/**
* Creates a radio button.
*/
sablono.core.radio_button68200 = (function() {
var radio_button68200 = null;
var radio_button68200__1 = (function (group){return radio_button68200.cljs$core$IFn$_invoke$arity$2(group,null);
});
var radio_button68200__2 = (function (group,checked_QMARK_){return radio_button68200.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});
var radio_button68200__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1263,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$1160,"radio",cljs.core.constant$keyword$1274,sablono.core.make_name(group),cljs.core.constant$keyword$1162,sablono.core.make_id((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0))))),cljs.core.constant$keyword$1275,value,cljs.core.constant$keyword$1276,checked_QMARK_], null)], null);
});
radio_button68200 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button68200__1.call(this,group);
case 2:
return radio_button68200__2.call(this,group,checked_QMARK_);
case 3:
return radio_button68200__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button68200.cljs$core$IFn$_invoke$arity$1 = radio_button68200__1;
radio_button68200.cljs$core$IFn$_invoke$arity$2 = radio_button68200__2;
radio_button68200.cljs$core$IFn$_invoke$arity$3 = radio_button68200__3;
return radio_button68200;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button68200);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options68206 = (function() {
var select_options68206 = null;
var select_options68206__1 = (function (coll){return select_options68206.cljs$core$IFn$_invoke$arity$2(coll,null);
});
var select_options68206__2 = (function (coll,selected){var iter__4375__auto__ = (function iter__68227(s__68228){return (new cljs.core.LazySeq(null,(function (){var s__68228__$1 = s__68228;while(true){
var temp__4126__auto__ = cljs.core.seq(s__68228__$1);if(temp__4126__auto__)
{var s__68228__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__68228__$2))
{var c__4373__auto__ = cljs.core.chunk_first(s__68228__$2);var size__4374__auto__ = cljs.core.count(c__4373__auto__);var b__68230 = cljs.core.chunk_buffer(size__4374__auto__);if((function (){var i__68229 = (0);while(true){
if((i__68229 < size__4374__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4373__auto__,i__68229);cljs.core.chunk_append(b__68230,((cljs.core.sequential_QMARK_(x))?(function (){var vec__68235 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68235,(0),null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68235,(1),null);var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68235,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1277,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1278,text], null),select_options68206.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1262,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1275,val,cljs.core.constant$keyword$1279,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),cljs.core.constant$keyword$1280,disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1262,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1279,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)));
{
var G__68237 = (i__68229 + (1));
i__68229 = G__68237;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__68230),iter__68227(cljs.core.chunk_rest(s__68228__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__68230),null);
}
} else
{var x = cljs.core.first(s__68228__$2);return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__68236 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68236,(0),null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68236,(1),null);var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68236,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1277,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1278,text], null),select_options68206.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1262,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1275,val,cljs.core.constant$keyword$1279,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),cljs.core.constant$keyword$1280,disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1262,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1279,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)),iter__68227(cljs.core.rest(s__68228__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4375__auto__(coll);
});
select_options68206 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options68206__1.call(this,coll);
case 2:
return select_options68206__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options68206.cljs$core$IFn$_invoke$arity$1 = select_options68206__1;
select_options68206.cljs$core$IFn$_invoke$arity$2 = select_options68206__2;
return select_options68206;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options68206);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down68238 = (function() {
var drop_down68238 = null;
var drop_down68238__2 = (function (name,options){return drop_down68238.cljs$core$IFn$_invoke$arity$3(name,options,null);
});
var drop_down68238__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1281,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1274,sablono.core.make_name(name),cljs.core.constant$keyword$1162,sablono.core.make_id(name)], null),(function (){var G__68244 = options;var G__68245 = selected;return (sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(G__68244,G__68245) : sablono.core.select_options.call(null,G__68244,G__68245));
})()], null);
});
drop_down68238 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down68238__2.call(this,name,options);
case 3:
return drop_down68238__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down68238.cljs$core$IFn$_invoke$arity$2 = drop_down68238__2;
drop_down68238.cljs$core$IFn$_invoke$arity$3 = drop_down68238__3;
return drop_down68238;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down68238);
/**
* Creates a text area element.
*/
sablono.core.text_area68246 = (function() {
var text_area68246 = null;
var text_area68246__1 = (function (name){return text_area68246.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_area68246__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1261,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1274,sablono.core.make_name(name),cljs.core.constant$keyword$1162,sablono.core.make_id(name),cljs.core.constant$keyword$1275,value], null)], null);
});
text_area68246 = function(name,value){
switch(arguments.length){
case 1:
return text_area68246__1.call(this,name);
case 2:
return text_area68246__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area68246.cljs$core$IFn$_invoke$arity$1 = text_area68246__1;
text_area68246.cljs$core$IFn$_invoke$arity$2 = text_area68246__2;
return text_area68246;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area68246);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label68249 = (function label68249(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1278,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1260,sablono.core.make_id(name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs(sablono.core.label68249);
/**
* Creates a submit button.
*/
sablono.core.submit_button68250 = (function submit_button68250(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1263,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1160,"submit",cljs.core.constant$keyword$1275,text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button68250);
/**
* Creates a form reset button.
*/
sablono.core.reset_button68251 = (function reset_button68251(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1263,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1160,"reset",cljs.core.constant$keyword$1275,text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button68251);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to68252 = (function() { 
var form_to68252__delegate = function (p__68253,body){var vec__68257 = p__68253;var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68257,(0),null);var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68257,(1),null);var method_str = clojure.string.upper_case(cljs.core.name(method));var action_uri = sablono.util.to_uri(action);return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1282,null,cljs.core.constant$keyword$1283,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1284,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1137,method_str,cljs.core.constant$keyword$1285,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1284,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1137,"POST",cljs.core.constant$keyword$1285,action_uri], null),(function (){var G__68258 = "_method";var G__68259 = method_str;return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2(G__68258,G__68259) : sablono.core.hidden_field.call(null,G__68258,G__68259));
})()], null)),body));
};
var form_to68252 = function (p__68253,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to68252__delegate.call(this,p__68253,body);};
form_to68252.cljs$lang$maxFixedArity = 1;
form_to68252.cljs$lang$applyTo = (function (arglist__68260){
var p__68253 = cljs.core.first(arglist__68260);
var body = cljs.core.rest(arglist__68260);
return form_to68252__delegate(p__68253,body);
});
form_to68252.cljs$core$IFn$_invoke$arity$variadic = form_to68252__delegate;
return form_to68252;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to68252);
