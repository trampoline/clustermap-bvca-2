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
var G__42887__delegate = function (args){if(cljs.core.map_QMARK_(cljs.core.first(args)))
{var vec__42886 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42886,(0),null);var body = cljs.core.nthnext(vec__42886,(1));if(cljs.core.map_QMARK_(cljs.core.first(body)))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__42887 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__42887__delegate.call(this,args);};
G__42887.cljs$lang$maxFixedArity = 0;
G__42887.cljs$lang$applyTo = (function (arglist__42888){
var args = cljs.core.seq(arglist__42888);
return G__42887__delegate(args);
});
G__42887.cljs$core$IFn$_invoke$arity$variadic = G__42887__delegate;
return G__42887;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4268__auto__ = (function iter__42893(s__42894){return (new cljs.core.LazySeq(null,(function (){var s__42894__$1 = s__42894;while(true){
var temp__4126__auto__ = cljs.core.seq(s__42894__$1);if(temp__4126__auto__)
{var s__42894__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__42894__$2))
{var c__4266__auto__ = cljs.core.chunk_first(s__42894__$2);var size__4267__auto__ = cljs.core.count(c__4266__auto__);var b__42896 = cljs.core.chunk_buffer(size__4267__auto__);if((function (){var i__42895 = (0);while(true){
if((i__42895 < size__4267__auto__))
{var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4266__auto__,i__42895);cljs.core.chunk_append(b__42896,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__42897 = (i__42895 + (1));
i__42895 = G__42897;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__42896),iter__42893(cljs.core.chunk_rest(s__42894__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__42896),null);
}
} else
{var args = cljs.core.first(s__42894__$2);return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__42893(cljs.core.rest(s__42894__$2)));
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
var include_css__delegate = function (styles){var iter__4268__auto__ = (function iter__42902(s__42903){return (new cljs.core.LazySeq(null,(function (){var s__42903__$1 = s__42903;while(true){
var temp__4126__auto__ = cljs.core.seq(s__42903__$1);if(temp__4126__auto__)
{var s__42903__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__42903__$2))
{var c__4266__auto__ = cljs.core.chunk_first(s__42903__$2);var size__4267__auto__ = cljs.core.count(c__4266__auto__);var b__42905 = cljs.core.chunk_buffer(size__4267__auto__);if((function (){var i__42904 = (0);while(true){
if((i__42904 < size__4267__auto__))
{var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4266__auto__,i__42904);cljs.core.chunk_append(b__42905,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$830,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$810,"text/css",cljs.core.constant$keyword$831,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$832,"stylesheet"], null)], null));
{
var G__42906 = (i__42904 + (1));
i__42904 = G__42906;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__42905),iter__42902(cljs.core.chunk_rest(s__42903__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__42905),null);
}
} else
{var style = cljs.core.first(s__42903__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$830,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$810,"text/css",cljs.core.constant$keyword$831,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$832,"stylesheet"], null)], null),iter__42902(cljs.core.rest(s__42903__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__42907){
var styles = cljs.core.seq(arglist__42907);
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
sablono.core.link_to42908 = (function() { 
var link_to42908__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$833,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$831,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
};
var link_to42908 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to42908__delegate.call(this,url,content);};
link_to42908.cljs$lang$maxFixedArity = 1;
link_to42908.cljs$lang$applyTo = (function (arglist__42909){
var url = cljs.core.first(arglist__42909);
var content = cljs.core.rest(arglist__42909);
return link_to42908__delegate(url,content);
});
link_to42908.cljs$core$IFn$_invoke$arity$variadic = link_to42908__delegate;
return link_to42908;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to42908);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to42910 = (function() { 
var mail_to42910__delegate = function (e_mail,p__42911){var vec__42913 = p__42911;var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42913,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$833,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$831,("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3543__auto__ = content;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to42910 = function (e_mail,var_args){
var p__42911 = null;if (arguments.length > 1) {
  p__42911 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to42910__delegate.call(this,e_mail,p__42911);};
mail_to42910.cljs$lang$maxFixedArity = 1;
mail_to42910.cljs$lang$applyTo = (function (arglist__42914){
var e_mail = cljs.core.first(arglist__42914);
var p__42911 = cljs.core.rest(arglist__42914);
return mail_to42910__delegate(e_mail,p__42911);
});
mail_to42910.cljs$core$IFn$_invoke$arity$variadic = mail_to42910__delegate;
return mail_to42910;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to42910);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list42915 = (function unordered_list42915(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$834,(function (){var iter__4268__auto__ = (function iter__42920(s__42921){return (new cljs.core.LazySeq(null,(function (){var s__42921__$1 = s__42921;while(true){
var temp__4126__auto__ = cljs.core.seq(s__42921__$1);if(temp__4126__auto__)
{var s__42921__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__42921__$2))
{var c__4266__auto__ = cljs.core.chunk_first(s__42921__$2);var size__4267__auto__ = cljs.core.count(c__4266__auto__);var b__42923 = cljs.core.chunk_buffer(size__4267__auto__);if((function (){var i__42922 = (0);while(true){
if((i__42922 < size__4267__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4266__auto__,i__42922);cljs.core.chunk_append(b__42923,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$835,x], null));
{
var G__42924 = (i__42922 + (1));
i__42922 = G__42924;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__42923),iter__42920(cljs.core.chunk_rest(s__42921__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__42923),null);
}
} else
{var x = cljs.core.first(s__42921__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$835,x], null),iter__42920(cljs.core.rest(s__42921__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list42915);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list42925 = (function ordered_list42925(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$836,(function (){var iter__4268__auto__ = (function iter__42930(s__42931){return (new cljs.core.LazySeq(null,(function (){var s__42931__$1 = s__42931;while(true){
var temp__4126__auto__ = cljs.core.seq(s__42931__$1);if(temp__4126__auto__)
{var s__42931__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__42931__$2))
{var c__4266__auto__ = cljs.core.chunk_first(s__42931__$2);var size__4267__auto__ = cljs.core.count(c__4266__auto__);var b__42933 = cljs.core.chunk_buffer(size__4267__auto__);if((function (){var i__42932 = (0);while(true){
if((i__42932 < size__4267__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4266__auto__,i__42932);cljs.core.chunk_append(b__42933,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$835,x], null));
{
var G__42934 = (i__42932 + (1));
i__42932 = G__42934;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__42933),iter__42930(cljs.core.chunk_rest(s__42931__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__42933),null);
}
} else
{var x = cljs.core.first(s__42931__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$835,x], null),iter__42930(cljs.core.rest(s__42931__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list42925);
/**
* Create an image element.
*/
sablono.core.image42935 = (function() {
var image42935 = null;
var image42935__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$837,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$838,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});
var image42935__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$837,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$838,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.constant$keyword$839,alt], null)], null);
});
image42935 = function(src,alt){
switch(arguments.length){
case 1:
return image42935__1.call(this,src);
case 2:
return image42935__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image42935.cljs$core$IFn$_invoke$arity$1 = image42935__1;
image42935.cljs$core$IFn$_invoke$arity$2 = image42935__2;
return image42935;
})()
;
sablono.core.image = sablono.core.wrap_attrs(sablono.core.image42935);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__42936_SHARP_,p2__42937_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__42936_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__42937_SHARP_)+"]");
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__42938_SHARP_,p2__42939_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__42938_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__42939_SHARP_));
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field_STAR_ = (function input_field_STAR_(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$829,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$810,type,cljs.core.constant$keyword$840,sablono.core.make_name(name),cljs.core.constant$keyword$812,sablono.core.make_id(name),cljs.core.constant$keyword$841,value], null)], null);
});
/**
* Creates a color input field.
*/
sablono.core.color_field42940 = (function() {
var color_field42940 = null;
var color_field42940__1 = (function (name__10242__auto__){return color_field42940.cljs$core$IFn$_invoke$arity$2(name__10242__auto__,null);
});
var color_field42940__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__10242__auto__,value__10243__auto__);
});
color_field42940 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return color_field42940__1.call(this,name__10242__auto__);
case 2:
return color_field42940__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field42940.cljs$core$IFn$_invoke$arity$1 = color_field42940__1;
color_field42940.cljs$core$IFn$_invoke$arity$2 = color_field42940__2;
return color_field42940;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field42940);
/**
* Creates a date input field.
*/
sablono.core.date_field42941 = (function() {
var date_field42941 = null;
var date_field42941__1 = (function (name__10242__auto__){return date_field42941.cljs$core$IFn$_invoke$arity$2(name__10242__auto__,null);
});
var date_field42941__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__10242__auto__,value__10243__auto__);
});
date_field42941 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return date_field42941__1.call(this,name__10242__auto__);
case 2:
return date_field42941__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field42941.cljs$core$IFn$_invoke$arity$1 = date_field42941__1;
date_field42941.cljs$core$IFn$_invoke$arity$2 = date_field42941__2;
return date_field42941;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field42941);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field42942 = (function() {
var datetime_field42942 = null;
var datetime_field42942__1 = (function (name__10242__auto__){return datetime_field42942.cljs$core$IFn$_invoke$arity$2(name__10242__auto__,null);
});
var datetime_field42942__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__10242__auto__,value__10243__auto__);
});
datetime_field42942 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return datetime_field42942__1.call(this,name__10242__auto__);
case 2:
return datetime_field42942__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field42942.cljs$core$IFn$_invoke$arity$1 = datetime_field42942__1;
datetime_field42942.cljs$core$IFn$_invoke$arity$2 = datetime_field42942__2;
return datetime_field42942;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field42942);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field42943 = (function() {
var datetime_local_field42943 = null;
var datetime_local_field42943__1 = (function (name__10242__auto__){return datetime_local_field42943.cljs$core$IFn$_invoke$arity$2(name__10242__auto__,null);
});
var datetime_local_field42943__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__10242__auto__,value__10243__auto__);
});
datetime_local_field42943 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return datetime_local_field42943__1.call(this,name__10242__auto__);
case 2:
return datetime_local_field42943__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field42943.cljs$core$IFn$_invoke$arity$1 = datetime_local_field42943__1;
datetime_local_field42943.cljs$core$IFn$_invoke$arity$2 = datetime_local_field42943__2;
return datetime_local_field42943;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field42943);
/**
* Creates a email input field.
*/
sablono.core.email_field42944 = (function() {
var email_field42944 = null;
var email_field42944__1 = (function (name__10242__auto__){return email_field42944.cljs$core$IFn$_invoke$arity$2(name__10242__auto__,null);
});
var email_field42944__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__10242__auto__,value__10243__auto__);
});
email_field42944 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return email_field42944__1.call(this,name__10242__auto__);
case 2:
return email_field42944__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field42944.cljs$core$IFn$_invoke$arity$1 = email_field42944__1;
email_field42944.cljs$core$IFn$_invoke$arity$2 = email_field42944__2;
return email_field42944;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field42944);
/**
* Creates a file input field.
*/
sablono.core.file_field42945 = (function() {
var file_field42945 = null;
var file_field42945__1 = (function (name__10242__auto__){return file_field42945.cljs$core$IFn$_invoke$arity$2(name__10242__auto__,null);
});
var file_field42945__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__10242__auto__,value__10243__auto__);
});
file_field42945 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return file_field42945__1.call(this,name__10242__auto__);
case 2:
return file_field42945__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field42945.cljs$core$IFn$_invoke$arity$1 = file_field42945__1;
file_field42945.cljs$core$IFn$_invoke$arity$2 = file_field42945__2;
return file_field42945;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field42945);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field42946 = (function() {
var hidden_field42946 = null;
var hidden_field42946__1 = (function (name__10242__auto__){return hidden_field42946.cljs$core$IFn$_invoke$arity$2(name__10242__auto__,null);
});
var hidden_field42946__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__10242__auto__,value__10243__auto__);
});
hidden_field42946 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return hidden_field42946__1.call(this,name__10242__auto__);
case 2:
return hidden_field42946__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field42946.cljs$core$IFn$_invoke$arity$1 = hidden_field42946__1;
hidden_field42946.cljs$core$IFn$_invoke$arity$2 = hidden_field42946__2;
return hidden_field42946;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field42946);
/**
* Creates a month input field.
*/
sablono.core.month_field42947 = (function() {
var month_field42947 = null;
var month_field42947__1 = (function (name__10242__auto__){return month_field42947.cljs$core$IFn$_invoke$arity$2(name__10242__auto__,null);
});
var month_field42947__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__10242__auto__,value__10243__auto__);
});
month_field42947 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return month_field42947__1.call(this,name__10242__auto__);
case 2:
return month_field42947__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field42947.cljs$core$IFn$_invoke$arity$1 = month_field42947__1;
month_field42947.cljs$core$IFn$_invoke$arity$2 = month_field42947__2;
return month_field42947;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field42947);
/**
* Creates a number input field.
*/
sablono.core.number_field42948 = (function() {
var number_field42948 = null;
var number_field42948__1 = (function (name__10242__auto__){return number_field42948.cljs$core$IFn$_invoke$arity$2(name__10242__auto__,null);
});
var number_field42948__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__10242__auto__,value__10243__auto__);
});
number_field42948 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return number_field42948__1.call(this,name__10242__auto__);
case 2:
return number_field42948__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field42948.cljs$core$IFn$_invoke$arity$1 = number_field42948__1;
number_field42948.cljs$core$IFn$_invoke$arity$2 = number_field42948__2;
return number_field42948;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field42948);
/**
* Creates a password input field.
*/
sablono.core.password_field42949 = (function() {
var password_field42949 = null;
var password_field42949__1 = (function (name__10242__auto__){return password_field42949.cljs$core$IFn$_invoke$arity$2(name__10242__auto__,null);
});
var password_field42949__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__10242__auto__,value__10243__auto__);
});
password_field42949 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return password_field42949__1.call(this,name__10242__auto__);
case 2:
return password_field42949__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field42949.cljs$core$IFn$_invoke$arity$1 = password_field42949__1;
password_field42949.cljs$core$IFn$_invoke$arity$2 = password_field42949__2;
return password_field42949;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field42949);
/**
* Creates a range input field.
*/
sablono.core.range_field42950 = (function() {
var range_field42950 = null;
var range_field42950__1 = (function (name__10242__auto__){return range_field42950.cljs$core$IFn$_invoke$arity$2(name__10242__auto__,null);
});
var range_field42950__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__10242__auto__,value__10243__auto__);
});
range_field42950 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return range_field42950__1.call(this,name__10242__auto__);
case 2:
return range_field42950__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field42950.cljs$core$IFn$_invoke$arity$1 = range_field42950__1;
range_field42950.cljs$core$IFn$_invoke$arity$2 = range_field42950__2;
return range_field42950;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field42950);
/**
* Creates a search input field.
*/
sablono.core.search_field42951 = (function() {
var search_field42951 = null;
var search_field42951__1 = (function (name__10242__auto__){return search_field42951.cljs$core$IFn$_invoke$arity$2(name__10242__auto__,null);
});
var search_field42951__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__10242__auto__,value__10243__auto__);
});
search_field42951 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return search_field42951__1.call(this,name__10242__auto__);
case 2:
return search_field42951__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field42951.cljs$core$IFn$_invoke$arity$1 = search_field42951__1;
search_field42951.cljs$core$IFn$_invoke$arity$2 = search_field42951__2;
return search_field42951;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field42951);
/**
* Creates a tel input field.
*/
sablono.core.tel_field42952 = (function() {
var tel_field42952 = null;
var tel_field42952__1 = (function (name__10242__auto__){return tel_field42952.cljs$core$IFn$_invoke$arity$2(name__10242__auto__,null);
});
var tel_field42952__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__10242__auto__,value__10243__auto__);
});
tel_field42952 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return tel_field42952__1.call(this,name__10242__auto__);
case 2:
return tel_field42952__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field42952.cljs$core$IFn$_invoke$arity$1 = tel_field42952__1;
tel_field42952.cljs$core$IFn$_invoke$arity$2 = tel_field42952__2;
return tel_field42952;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field42952);
/**
* Creates a text input field.
*/
sablono.core.text_field42953 = (function() {
var text_field42953 = null;
var text_field42953__1 = (function (name__10242__auto__){return text_field42953.cljs$core$IFn$_invoke$arity$2(name__10242__auto__,null);
});
var text_field42953__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__10242__auto__,value__10243__auto__);
});
text_field42953 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return text_field42953__1.call(this,name__10242__auto__);
case 2:
return text_field42953__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field42953.cljs$core$IFn$_invoke$arity$1 = text_field42953__1;
text_field42953.cljs$core$IFn$_invoke$arity$2 = text_field42953__2;
return text_field42953;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field42953);
/**
* Creates a time input field.
*/
sablono.core.time_field42954 = (function() {
var time_field42954 = null;
var time_field42954__1 = (function (name__10242__auto__){return time_field42954.cljs$core$IFn$_invoke$arity$2(name__10242__auto__,null);
});
var time_field42954__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__10242__auto__,value__10243__auto__);
});
time_field42954 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return time_field42954__1.call(this,name__10242__auto__);
case 2:
return time_field42954__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field42954.cljs$core$IFn$_invoke$arity$1 = time_field42954__1;
time_field42954.cljs$core$IFn$_invoke$arity$2 = time_field42954__2;
return time_field42954;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field42954);
/**
* Creates a url input field.
*/
sablono.core.url_field42955 = (function() {
var url_field42955 = null;
var url_field42955__1 = (function (name__10242__auto__){return url_field42955.cljs$core$IFn$_invoke$arity$2(name__10242__auto__,null);
});
var url_field42955__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__10242__auto__,value__10243__auto__);
});
url_field42955 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return url_field42955__1.call(this,name__10242__auto__);
case 2:
return url_field42955__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field42955.cljs$core$IFn$_invoke$arity$1 = url_field42955__1;
url_field42955.cljs$core$IFn$_invoke$arity$2 = url_field42955__2;
return url_field42955;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field42955);
/**
* Creates a week input field.
*/
sablono.core.week_field42956 = (function() {
var week_field42956 = null;
var week_field42956__1 = (function (name__10242__auto__){return week_field42956.cljs$core$IFn$_invoke$arity$2(name__10242__auto__,null);
});
var week_field42956__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__10242__auto__,value__10243__auto__);
});
week_field42956 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return week_field42956__1.call(this,name__10242__auto__);
case 2:
return week_field42956__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field42956.cljs$core$IFn$_invoke$arity$1 = week_field42956__1;
week_field42956.cljs$core$IFn$_invoke$arity$2 = week_field42956__2;
return week_field42956;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field42956);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box42957 = (function() {
var check_box42957 = null;
var check_box42957__1 = (function (name){return check_box42957.cljs$core$IFn$_invoke$arity$2(name,null);
});
var check_box42957__2 = (function (name,checked_QMARK_){return check_box42957.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});
var check_box42957__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$829,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$810,"checkbox",cljs.core.constant$keyword$840,sablono.core.make_name(name),cljs.core.constant$keyword$812,sablono.core.make_id(name),cljs.core.constant$keyword$841,value,cljs.core.constant$keyword$842,checked_QMARK_], null)], null);
});
check_box42957 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box42957__1.call(this,name);
case 2:
return check_box42957__2.call(this,name,checked_QMARK_);
case 3:
return check_box42957__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box42957.cljs$core$IFn$_invoke$arity$1 = check_box42957__1;
check_box42957.cljs$core$IFn$_invoke$arity$2 = check_box42957__2;
check_box42957.cljs$core$IFn$_invoke$arity$3 = check_box42957__3;
return check_box42957;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box42957);
/**
* Creates a radio button.
*/
sablono.core.radio_button42958 = (function() {
var radio_button42958 = null;
var radio_button42958__1 = (function (group){return radio_button42958.cljs$core$IFn$_invoke$arity$2(group,null);
});
var radio_button42958__2 = (function (group,checked_QMARK_){return radio_button42958.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});
var radio_button42958__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$829,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$810,"radio",cljs.core.constant$keyword$840,sablono.core.make_name(group),cljs.core.constant$keyword$812,sablono.core.make_id((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0))))),cljs.core.constant$keyword$841,value,cljs.core.constant$keyword$842,checked_QMARK_], null)], null);
});
radio_button42958 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button42958__1.call(this,group);
case 2:
return radio_button42958__2.call(this,group,checked_QMARK_);
case 3:
return radio_button42958__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button42958.cljs$core$IFn$_invoke$arity$1 = radio_button42958__1;
radio_button42958.cljs$core$IFn$_invoke$arity$2 = radio_button42958__2;
radio_button42958.cljs$core$IFn$_invoke$arity$3 = radio_button42958__3;
return radio_button42958;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button42958);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options42959 = (function() {
var select_options42959 = null;
var select_options42959__1 = (function (coll){return select_options42959.cljs$core$IFn$_invoke$arity$2(coll,null);
});
var select_options42959__2 = (function (coll,selected){var iter__4268__auto__ = (function iter__42968(s__42969){return (new cljs.core.LazySeq(null,(function (){var s__42969__$1 = s__42969;while(true){
var temp__4126__auto__ = cljs.core.seq(s__42969__$1);if(temp__4126__auto__)
{var s__42969__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__42969__$2))
{var c__4266__auto__ = cljs.core.chunk_first(s__42969__$2);var size__4267__auto__ = cljs.core.count(c__4266__auto__);var b__42971 = cljs.core.chunk_buffer(size__4267__auto__);if((function (){var i__42970 = (0);while(true){
if((i__42970 < size__4267__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4266__auto__,i__42970);cljs.core.chunk_append(b__42971,((cljs.core.sequential_QMARK_(x))?(function (){var vec__42974 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42974,(0),null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42974,(1),null);var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42974,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$843,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$844,text], null),select_options42959.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$845,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$841,val,cljs.core.constant$keyword$846,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),cljs.core.constant$keyword$847,disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$845,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$846,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)));
{
var G__42976 = (i__42970 + (1));
i__42970 = G__42976;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__42971),iter__42968(cljs.core.chunk_rest(s__42969__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__42971),null);
}
} else
{var x = cljs.core.first(s__42969__$2);return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__42975 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42975,(0),null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42975,(1),null);var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42975,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$843,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$844,text], null),select_options42959.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$845,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$841,val,cljs.core.constant$keyword$846,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),cljs.core.constant$keyword$847,disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$845,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$846,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)),iter__42968(cljs.core.rest(s__42969__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4268__auto__(coll);
});
select_options42959 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options42959__1.call(this,coll);
case 2:
return select_options42959__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options42959.cljs$core$IFn$_invoke$arity$1 = select_options42959__1;
select_options42959.cljs$core$IFn$_invoke$arity$2 = select_options42959__2;
return select_options42959;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options42959);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down42977 = (function() {
var drop_down42977 = null;
var drop_down42977__2 = (function (name,options){return drop_down42977.cljs$core$IFn$_invoke$arity$3(name,options,null);
});
var drop_down42977__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$848,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$840,sablono.core.make_name(name),cljs.core.constant$keyword$812,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});
drop_down42977 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down42977__2.call(this,name,options);
case 3:
return drop_down42977__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down42977.cljs$core$IFn$_invoke$arity$2 = drop_down42977__2;
drop_down42977.cljs$core$IFn$_invoke$arity$3 = drop_down42977__3;
return drop_down42977;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down42977);
/**
* Creates a text area element.
*/
sablono.core.text_area42978 = (function() {
var text_area42978 = null;
var text_area42978__1 = (function (name){return text_area42978.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_area42978__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$828,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$840,sablono.core.make_name(name),cljs.core.constant$keyword$812,sablono.core.make_id(name),cljs.core.constant$keyword$841,value], null)], null);
});
text_area42978 = function(name,value){
switch(arguments.length){
case 1:
return text_area42978__1.call(this,name);
case 2:
return text_area42978__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area42978.cljs$core$IFn$_invoke$arity$1 = text_area42978__1;
text_area42978.cljs$core$IFn$_invoke$arity$2 = text_area42978__2;
return text_area42978;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area42978);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label42979 = (function label42979(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$844,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$826,sablono.core.make_id(name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs(sablono.core.label42979);
/**
* Creates a submit button.
*/
sablono.core.submit_button42980 = (function submit_button42980(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$829,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$810,"submit",cljs.core.constant$keyword$841,text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button42980);
/**
* Creates a form reset button.
*/
sablono.core.reset_button42981 = (function reset_button42981(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$829,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$810,"reset",cljs.core.constant$keyword$841,text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button42981);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to42982 = (function() { 
var form_to42982__delegate = function (p__42983,body){var vec__42985 = p__42983;var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42985,(0),null);var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42985,(1),null);var method_str = clojure.string.upper_case(cljs.core.name(method));var action_uri = sablono.util.to_uri(action);return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$849,null,cljs.core.constant$keyword$850,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$851,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$792,method_str,cljs.core.constant$keyword$852,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$851,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$792,"POST",cljs.core.constant$keyword$852,action_uri], null),(sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2("_method",method_str) : sablono.core.hidden_field.call(null,"_method",method_str))], null)),body));
};
var form_to42982 = function (p__42983,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to42982__delegate.call(this,p__42983,body);};
form_to42982.cljs$lang$maxFixedArity = 1;
form_to42982.cljs$lang$applyTo = (function (arglist__42986){
var p__42983 = cljs.core.first(arglist__42986);
var body = cljs.core.rest(arglist__42986);
return form_to42982__delegate(p__42983,body);
});
form_to42982.cljs$core$IFn$_invoke$arity$variadic = form_to42982__delegate;
return form_to42982;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to42982);
